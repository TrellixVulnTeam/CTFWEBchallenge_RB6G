"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dequeue = exports.enqueue = void 0;
const sqlite = require("sqlite3");
const path = require("path");
const db = new sqlite.Database(path.resolve("./queue.sqlite"));
const run = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.all(sql, ...params, (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
};
run(`
    CREATE TABLE IF NOT EXISTS queue (
        id SERIAL PRIMARY KEY,
        url TEXT NOT NULL,
        ip TEXT NOT NULL
    );
`, []);
const enqueue = async (url, ip) => {
    const [{ count }] = await run(`
        SELECT count(*) as count
        FROM queue
        WHERE ip = ?;
    `, [ip]);
    if (count > 3) {
        return false;
    }
    await run(`
        INSERT INTO queue (url, ip)
        VALUES (?, ?);
    `, [url, ip]);
    const [{ count: queueLength }] = await run(`
        SELECT count(*) as count
        FROM queue;
    `, []);
    return queueLength;
};
exports.enqueue = enqueue;
const dequeue = async () => {
    const request = await run(`
        SELECT url, ip
        FROM queue
        ORDER BY id ASC
        LIMIT 1;
    `, []);
    if (request.length === 0) {
        return undefined;
    }
    const [{ url, ip }] = request;
    // Delete based off of url and ip in case there are duplicates
    await run(`
        DELETE FROM queue
        WHERE url = ? AND ip = ?;
    `, [url, ip]);
    return url;
};
exports.dequeue = dequeue;
//# sourceMappingURL=database.js.map