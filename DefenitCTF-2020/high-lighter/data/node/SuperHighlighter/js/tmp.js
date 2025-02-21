! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.i = function(e) {
        return e
    }, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 9)
}([function(e, t) {
    function n(e, t, n) {
        if (t in e) return e[t];
        if (3 === arguments.length) return n;
        throw new Error('"' + t + '" is a required argument.')
    }

    function r(e) {
        var t = e.match(A);
        return t ? {
            scheme: t[1],
            auth: t[2],
            host: t[3],
            port: t[4],
            path: t[5]
        } : null
    }

    function i(e) {
        var t = "";
        return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t
    }

    function u(e) {
        var n = e,
            u = r(e);
        if (u) {
            if (!u.path) return e;
            n = u.path
        }
        for (var s, o = t.isAbsolute(n), a = n.split(/\/+/), c = 0, l = a.length - 1; l >= 0; l--) s = a[l], "." === s ? a.splice(l, 1) : ".." === s ? c++ : c > 0 && ("" === s ? (a.splice(l + 1, c), c = 0) : (a.splice(l, 2), c--));
        return n = a.join("/"), "" === n && (n = o ? "/" : "."), u ? (u.path = n, i(u)) : n
    }

    function s(e, t) {
        "" === e && (e = "."), "" === t && (t = ".");
        var n = r(t),
            s = r(e);
        if (s && (e = s.path || "/"), n && !n.scheme) return s && (n.scheme = s.scheme), i(n);
        if (n || t.match(C)) return t;
        if (s && !s.host && !s.path) return s.host = t, i(s);
        var o = "/" === t.charAt(0) ? t : u(e.replace(/\/+$/, "") + "/" + t);
        return s ? (s.path = o, i(s)) : o
    }

    function o(e, t) {
        "" === e && (e = "."), e = e.replace(/\/$/, "");
        for (var n = 0; 0 !== t.indexOf(e + "/");) {
            var r = e.lastIndexOf("/");
            if (r < 0) return t;
            if (e = e.slice(0, r), e.match(/^([^\/]+:\/)?\/*$/)) return t;
            ++n
        }
        return Array(n + 1).join("../") + t.substr(e.length + 1)
    }

    function a(e) {
        return e
    }

    function c(e) {
        return h(e) ? "$" + e : e
    }

    function l(e) {
        return h(e) ? e.slice(1) : e
    }

    function h(e) {
        if (!e) return !1;
        var t = e.length;
        if (t < 9) return !1;
        if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
        for (var n = t - 10; n >= 0; n--)
            if (36 !== e.charCodeAt(n)) return !1;
        return !0
    }

    function p(e, t, n) {
        var r = f(e.source, t.source);
        return 0 !== r ? r : 0 !== (r = e.originalLine - t.originalLine) ? r : 0 !== (r = e.originalColumn - t.originalColumn) || n ? r : 0 !== (r = e.generatedColumn - t.generatedColumn) ? r : (r = e.generatedLine - t.generatedLine, 0 !== r ? r : f(e.name, t.name))
    }

    function d(e, t, n) {
        var r = e.generatedLine - t.generatedLine;
        return 0 !== r ? r : 0 !== (r = e.generatedColumn - t.generatedColumn) || n ? r : 0 !== (r = f(e.source, t.source)) ? r : 0 !== (r = e.originalLine - t.originalLine) ? r : (r = e.originalColumn - t.originalColumn, 0 !== r ? r : f(e.name, t.name))
    }

    function f(e, t) {
        return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1
    }

    function D(e, t) {
        var n = e.generatedLine - t.generatedLine;
        return 0 !== n ? n : 0 !== (n = e.generatedColumn - t.generatedColumn) ? n : 0 !== (n = f(e.source, t.source)) ? n : 0 !== (n = e.originalLine - t.originalLine) ? n : (n = e.originalColumn - t.originalColumn, 0 !== n ? n : f(e.name, t.name))
    }

    function m(e) {
        return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""))
    }

    function g(e, t, n) {
        if (t = t || "", e && ("/" !== e[e.length - 1] && "/" !== t[0] && (e += "/"), t = e + t), n) {
            var o = r(n);
            if (!o) throw new Error("sourceMapURL could not be parsed");
            if (o.path) {
                var a = o.path.lastIndexOf("/");
                a >= 0 && (o.path = o.path.substring(0, a + 1))
            }
            t = s(i(o), t)
        }
        return u(t)
    }
    t.getArg = n;
    var A = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
        C = /^data:.+\,.+$/;
    t.urlParse = r, t.urlGenerate = i, t.normalize = u, t.join = s, t.isAbsolute = function(e) {
        return "/" === e.charAt(0) || A.test(e)
    }, t.relative = o;
    var E = function() {
        return !("__proto__" in Object.create(null))
    }();
    t.toSetString = E ? a : c, t.fromSetString = E ? a : l, t.compareByOriginalPositions = p, t.compareByGeneratedPositionsDeflated = d, t.compareByGeneratedPositionsInflated = D, t.parseSourceMapInput = m, t.computeSourceURL = g
}, function(e, t, n) {
    function r() {
        this._array = [], this._set = s ? new Map : Object.create(null)
    }
    var i = n(0),
        u = Object.prototype.hasOwnProperty,
        s = "undefined" != typeof Map;
    r.fromArray = function(e, t) {
        for (var n = new r, i = 0, u = e.length; i < u; i++) n.add(e[i], t);
        return n
    }, r.prototype.size = function() {
        return s ? this._set.size : Object.getOwnPropertyNames(this._set).length
    }, r.prototype.add = function(e, t) {
        var n = s ? e : i.toSetString(e),
            r = s ? this.has(e) : u.call(this._set, n),
            o = this._array.length;
        r && !t || this._array.push(e), r || (s ? this._set.set(e, o) : this._set[n] = o)
    }, r.prototype.has = function(e) {
        if (s) return this._set.has(e);
        var t = i.toSetString(e);
        return u.call(this._set, t)
    }, r.prototype.indexOf = function(e) {
        if (s) {
            var t = this._set.get(e);
            if (t >= 0) return t
        } else {
            var n = i.toSetString(e);
            if (u.call(this._set, n)) return this._set[n]
        }
        throw new Error('"' + e + '" is not in the set.')
    }, r.prototype.at = function(e) {
        if (e >= 0 && e < this._array.length) return this._array[e];
        throw new Error("No element indexed by " + e)
    }, r.prototype.toArray = function() {
        return this._array.slice()
    }, t.ArraySet = r
}, function(e, t, n) {
    function r(e) {
        return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
    }

    function i(e) {
        var t = 1 == (1 & e),
            n = e >> 1;
        return t ? -n : n
    }
    var u = n(11);
    t.encode = function(e) {
        var t, n = "",
            i = r(e);
        do {
            t = 31 & i, i >>>= 5, i > 0 && (t |= 32), n += u.encode(t)
        } while (i > 0);
        return n
    }, t.decode = function(e, t, n) {
        var r, s, o = e.length,
            a = 0,
            c = 0;
        do {
            if (t >= o) throw new Error("Expected more digits in base 64 VLQ value.");
            if (-1 === (s = u.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
            r = !!(32 & s), s &= 31, a += s << c, c += 5
        } while (r);
        n.value = i(a), n.rest = t
    }
}, function(e, t, n) {
    function r(e) {
        e || (e = {}), this._file = u.getArg(e, "file", null), this._sourceRoot = u.getArg(e, "sourceRoot", null), this._skipValidation = u.getArg(e, "skipValidation", !1), this._sources = new s, this._names = new s, this._mappings = new o, this._sourcesContents = null
    }
    var i = n(2),
        u = n(0),
        s = n(1).ArraySet,
        o = n(13).MappingList;
    r.prototype._version = 3, r.fromSourceMap = function(e) {
        var t = e.sourceRoot,
            n = new r({
                file: e.file,
                sourceRoot: t
            });
        return e.eachMapping(function(e) {
            var r = {
                generated: {
                    line: e.generatedLine,
                    column: e.generatedColumn
                }
            };
            null != e.source && (r.source = e.source, null != t && (r.source = u.relative(t, r.source)), r.original = {
                line: e.originalLine,
                column: e.originalColumn
            }, null != e.name && (r.name = e.name)), n.addMapping(r)
        }), e.sources.forEach(function(r) {
            var i = r;
            null !== t && (i = u.relative(t, r)), n._sources.has(i) || n._sources.add(i);
            var s = e.sourceContentFor(r);
            null != s && n.setSourceContent(r, s)
        }), n
    }, r.prototype.addMapping = function(e) {
        var t = u.getArg(e, "generated"),
            n = u.getArg(e, "original", null),
            r = u.getArg(e, "source", null),
            i = u.getArg(e, "name", null);
        this._skipValidation || this._validateMapping(t, n, r, i), null != r && (r = String(r), this._sources.has(r) || this._sources.add(r)), null != i && (i = String(i), this._names.has(i) || this._names.add(i)), this._mappings.add({
            generatedLine: t.line,
            generatedColumn: t.column,
            originalLine: null != n && n.line,
            originalColumn: null != n && n.column,
            source: r,
            name: i
        })
    }, r.prototype.setSourceContent = function(e, t) {
        var n = e;
        null != this._sourceRoot && (n = u.relative(this._sourceRoot, n)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[u.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[u.toSetString(n)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
    }, r.prototype.applySourceMap = function(e, t, n) {
        var r = t;
        if (null == t) {
            if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
            r = e.file
        }
        var i = this._sourceRoot;
        null != i && (r = u.relative(i, r));
        var o = new s,
            a = new s;
        this._mappings.unsortedForEach(function(t) {
            if (t.source === r && null != t.originalLine) {
                var s = e.originalPositionFor({
                    line: t.originalLine,
                    column: t.originalColumn
                });
                null != s.source && (t.source = s.source, null != n && (t.source = u.join(n, t.source)), null != i && (t.source = u.relative(i, t.source)), t.originalLine = s.line, t.originalColumn = s.column, null != s.name && (t.name = s.name))
            }
            var c = t.source;
            null == c || o.has(c) || o.add(c);
            var l = t.name;
            null == l || a.has(l) || a.add(l)
        }, this), this._sources = o, this._names = a, e.sources.forEach(function(t) {
            var r = e.sourceContentFor(t);
            null != r && (null != n && (t = u.join(n, t)), null != i && (t = u.relative(i, t)), this.setSourceContent(t, r))
        }, this)
    }, r.prototype._validateMapping = function(e, t, n, r) {
        if (t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
        if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || n || r) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n)) throw new Error("Invalid mapping: " + JSON.stringify({
            generated: e,
            source: n,
            original: t,
            name: r
        }))
    }, r.prototype._serializeMappings = function() {
        for (var e, t, n, r, s = 0, o = 1, a = 0, c = 0, l = 0, h = 0, p = "", d = this._mappings.toArray(), f = 0, D = d.length; f < D; f++) {
            if (t = d[f], e = "", t.generatedLine !== o)
                for (s = 0; t.generatedLine !== o;) e += ";", o++;
            else if (f > 0) {
                if (!u.compareByGeneratedPositionsInflated(t, d[f - 1])) continue;
                e += ","
            }
            e += i.encode(t.generatedColumn - s), s = t.generatedColumn, null != t.source && (r = this._sources.indexOf(t.source), e += i.encode(r - h), h = r, e += i.encode(t.originalLine - 1 - c), c = t.originalLine - 1, e += i.encode(t.originalColumn - a), a = t.originalColumn, null != t.name && (n = this._names.indexOf(t.name), e += i.encode(n - l), l = n)), p += e
        }
        return p
    }, r.prototype._generateSourcesContent = function(e, t) {
        return e.map(function(e) {
            if (!this._sourcesContents) return null;
            null != t && (e = u.relative(t, e));
            var n = u.toSetString(e);
            return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null
        }, this)
    }, r.prototype.toJSON = function() {
        var e = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings()
        };
        return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e
    }, r.prototype.toString = function() {
        return JSON.stringify(this.toJSON())
    }, t.SourceMapGenerator = r
}, function(e, t) {
    ! function() {
        "use strict";

        function t(e) {
            return 48 <= e && e <= 57
        }

        function n(e) {
            return 48 <= e && e <= 57 || 97 <= e && e <= 102 || 65 <= e && e <= 70
        }

        function r(e) {
            return e >= 48 && e <= 55
        }

        function i(e) {
            return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && d.indexOf(e) >= 0
        }

        function u(e) {
            return 10 === e || 13 === e || 8232 === e || 8233 === e
        }

        function s(e) {
            return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) + String.fromCharCode((e - 65536) % 1024 + 56320)
        }

        function o(e) {
            return e < 128 ? f[e] : p.NonAsciiIdentifierStart.test(s(e))
        }

        function a(e) {
            return e < 128 ? D[e] : p.NonAsciiIdentifierPart.test(s(e))
        }

        function c(e) {
            return e < 128 ? f[e] : h.NonAsciiIdentifierStart.test(s(e))
        }

        function l(e) {
            return e < 128 ? D[e] : h.NonAsciiIdentifierPart.test(s(e))
        }
        var h, p, d, f, D, m;
        for (p = {
                NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
                NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
            }, h = {
                NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
            }, d = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], f = new Array(128), m = 0; m < 128; ++m) f[m] = m >= 97 && m <= 122 || m >= 65 && m <= 90 || 36 === m || 95 === m;
        for (D = new Array(128), m = 0; m < 128; ++m) D[m] = m >= 97 && m <= 122 || m >= 65 && m <= 90 || m >= 48 && m <= 57 || 36 === m || 95 === m;
        e.exports = {
            isDecimalDigit: t,
            isHexDigit: n,
            isOctalDigit: r,
            isWhiteSpace: i,
            isLineTerminator: u,
            isIdentifierStartES5: o,
            isIdentifierPartES5: a,
            isIdentifierStartES6: c,
            isIdentifierPartES6: l
        }
    }()
}, function(e, t, n) {
    /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
    ! function(t, n) {
        e.exports = n()
    }(0, function() {
        "use strict";

        function e(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function t(e) {
            return function(t) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                return f(e, t, r)
            }
        }

        function n(e) {
            return function() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return D(e, n)
            }
        }

        function r(e, t) {
            a && a(e, null);
            for (var n = t.length; n--;) {
                var r = t[n];
                if ("string" == typeof r) {
                    var i = x(r);
                    i !== r && (c(t) || (t[n] = i), r = i)
                }
                e[r] = !0
            }
            return e
        }

        function i(e) {
            var t = {},
                n = void 0;
            for (n in e) f(o, e, [n]) && (t[n] = e[n]);
            return t
        }

        function u(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function s() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K(),
                t = function(e) {
                    return s(e)
                };
            if (t.version = "2.0.11", t.removed = [], !e || !e.document || 9 !== e.document.nodeType) return t.isSupported = !1, t;
            var n = e.document,
                o = !1,
                a = e.document,
                c = e.DocumentFragment,
                p = e.HTMLTemplateElement,
                d = e.Node,
                f = e.NodeFilter,
                D = e.NamedNodeMap,
                V = void 0 === D ? e.NamedNodeMap || e.MozNamedAttrMap : D,
                $ = e.Text,
                Y = e.Comment,
                Q = e.DOMParser,
                Z = e.trustedTypes;
            if ("function" == typeof p) {
                var ee = a.createElement("template");
                ee.content && ee.content.ownerDocument && (a = ee.content.ownerDocument)
            }
            var te = G(Z, n),
                ne = te ? te.createHTML("") : "",
                re = a,
                ie = re.implementation,
                ue = re.createNodeIterator,
                se = re.getElementsByTagName,
                oe = re.createDocumentFragment,
                ae = n.importNode,
                ce = {};
            t.isSupported = ie && void 0 !== ie.createHTMLDocument && 9 !== a.documentMode;
            var le = j,
                he = U,
                pe = z,
                de = q,
                fe = H,
                De = J,
                me = X,
                ge = null,
                Ae = r({}, [].concat(u(T), u(N), u(M), u(_), u(L))),
                Ce = null,
                Ee = r({}, [].concat(u(I), u(P), u(O), u(R))),
                ye = null,
                xe = null,
                Fe = !0,
                ve = !0,
                Se = !1,
                Be = !1,
                be = !1,
                we = !1,
                ke = !1,
                Te = !1,
                Ne = !1,
                Me = !1,
                _e = !1,
                Le = !1,
                Ie = !0,
                Pe = !0,
                Oe = !1,
                Re = {},
                je = r({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                Ue = null,
                ze = r({}, ["audio", "video", "img", "source", "image", "track"]),
                qe = null,
                Xe = r({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                He = null,
                Je = a.createElement("form"),
                We = function(e) {
                    He && He === e || (e && "object" === (void 0 === e ? "undefined" : W(e)) || (e = {}), ge = "ALLOWED_TAGS" in e ? r({}, e.ALLOWED_TAGS) : Ae, Ce = "ALLOWED_ATTR" in e ? r({}, e.ALLOWED_ATTR) : Ee, qe = "ADD_URI_SAFE_ATTR" in e ? r(i(Xe), e.ADD_URI_SAFE_ATTR) : Xe, Ue = "ADD_DATA_URI_TAGS" in e ? r(i(ze), e.ADD_DATA_URI_TAGS) : ze, ye = "FORBID_TAGS" in e ? r({}, e.FORBID_TAGS) : {}, xe = "FORBID_ATTR" in e ? r({}, e.FORBID_ATTR) : {}, Re = "USE_PROFILES" in e && e.USE_PROFILES, Fe = !1 !== e.ALLOW_ARIA_ATTR, ve = !1 !== e.ALLOW_DATA_ATTR, Se = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Be = e.SAFE_FOR_JQUERY || !1, be = e.SAFE_FOR_TEMPLATES || !1, we = e.WHOLE_DOCUMENT || !1, Ne = e.RETURN_DOM || !1, Me = e.RETURN_DOM_FRAGMENT || !1, _e = e.RETURN_DOM_IMPORT || !1, Le = e.RETURN_TRUSTED_TYPE || !1, Te = e.FORCE_BODY || !1, Ie = !1 !== e.SANITIZE_DOM, Pe = !1 !== e.KEEP_CONTENT, Oe = e.IN_PLACE || !1, me = e.ALLOWED_URI_REGEXP || me, be && (ve = !1), Me && (Ne = !0), Re && (ge = r({}, [].concat(u(L))), Ce = [], !0 === Re.html && (r(ge, T), r(Ce, I)), !0 === Re.svg && (r(ge, N), r(Ce, P), r(Ce, R)), !0 === Re.svgFilters && (r(ge, M), r(Ce, P), r(Ce, R)), !0 === Re.mathMl && (r(ge, _), r(Ce, O), r(Ce, R))), e.ADD_TAGS && (ge === Ae && (ge = i(ge)), r(ge, e.ADD_TAGS)), e.ADD_ATTR && (Ce === Ee && (Ce = i(Ce)), r(Ce, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && r(qe, e.ADD_URI_SAFE_ATTR), Pe && (ge["#text"] = !0), we && r(ge, ["html", "head", "body"]), ge.table && (r(ge, ["tbody"]), delete ye.tbody), h && h(e), He = e)
                },
                Ke = function(e) {
                    E(t.removed, {
                        element: e
                    });
                    try {
                        e.parentNode.removeChild(e)
                    } catch (t) {
                        e.outerHTML = ne
                    }
                },
                Ge = function(e, n) {
                    try {
                        E(t.removed, {
                            attribute: n.getAttributeNode(e),
                            from: n
                        })
                    } catch (e) {
                        E(t.removed, {
                            attribute: null,
                            from: n
                        })
                    }
                    n.removeAttribute(e)
                },
                Ve = function(e) {
                    var t = void 0,
                        n = void 0;
                    if (Te) e = "<remove></remove>" + e;
                    else {
                        var i = F(e, /^[\r\n\t ]+/);
                        n = i && i[0]
                    }
                    var u = te ? te.createHTML(e) : e;
                    try {
                        t = (new Q).parseFromString(u, "text/html")
                    } catch (e) {}
                    if (o && r(ye, ["title"]), !t || !t.documentElement) {
                        t = ie.createHTMLDocument("");
                        var s = t,
                            c = s.body;
                        c.parentNode.removeChild(c.parentNode.firstElementChild), c.outerHTML = u
                    }
                    return e && n && t.body.insertBefore(a.createTextNode(n), t.body.childNodes[0] || null), se.call(t, we ? "html" : "body")[0]
                };
            t.isSupported && function() {
                try {
                    var e = Ve("<x/><title>&lt;/title&gt;&lt;img&gt;");
                    b(/<\/title/, e.querySelector("title").innerHTML) && (o = !0)
                } catch (e) {}
            }();
            var $e = function(e) {
                    return ue.call(e.ownerDocument || e, e, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT, function() {
                        return f.FILTER_ACCEPT
                    }, !1)
                },
                Ye = function(e) {
                    return !(e instanceof $ || e instanceof Y) && !("string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof V && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI)
                },
                Qe = function(e) {
                    return "object" === (void 0 === d ? "undefined" : W(d)) ? e instanceof d : e && "object" === (void 0 === e ? "undefined" : W(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                },
                Ze = function(e, n, r) {
                    ce[e] && m(ce[e], function(e) {
                        e.call(t, n, r, He)
                    })
                },
                et = function(e) {
                    var n = void 0;
                    if (Ze("beforeSanitizeElements", e, null), Ye(e)) return Ke(e), !0;
                    var r = x(e.nodeName);
                    if (Ze("uponSanitizeElement", e, {
                            tagName: r,
                            allowedTags: ge
                        }), ("svg" === r || "math" === r) && 0 !== e.querySelectorAll("p, br").length) return Ke(e), !0;
                    if (!ge[r] || ye[r]) {
                        if (Pe && !je[r] && "function" == typeof e.insertAdjacentHTML) try {
                            var i = e.innerHTML;
                            e.insertAdjacentHTML("AfterEnd", te ? te.createHTML(i) : i)
                        } catch (e) {}
                        return Ke(e), !0
                    }
                    return "noscript" === r && b(/<\/noscript/i, e.innerHTML) ? (Ke(e), !0) : "noembed" === r && b(/<\/noembed/i, e.innerHTML) ? (Ke(e), !0) : (!Be || e.firstElementChild || e.content && e.content.firstElementChild || !b(/</g, e.textContent) || (E(t.removed, {
                        element: e.cloneNode()
                    }), e.innerHTML ? e.innerHTML = v(e.innerHTML, /</g, "&lt;") : e.innerHTML = v(e.textContent, /</g, "&lt;")), be && 3 === e.nodeType && (n = e.textContent, n = v(n, le, " "), n = v(n, he, " "), e.textContent !== n && (E(t.removed, {
                        element: e.cloneNode()
                    }), e.textContent = n)), Ze("afterSanitizeElements", e, null), !1)
                },
                tt = function(e, t, n) {
                    if (Ie && ("id" === t || "name" === t) && (n in a || n in Je)) return !1;
                    if (ve && b(pe, t));
                    else if (Fe && b(de, t));
                    else {
                        if (!Ce[t] || xe[t]) return !1;
                        if (qe[t]);
                        else if (b(me, v(n, De, "")));
                        else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== S(n, "data:") || !Ue[e]) {
                            if (Se && !b(fe, v(n, De, "")));
                            else if (n) return !1
                        } else;
                    }
                    return !0
                },
                nt = function(e) {
                    var n = void 0,
                        r = void 0,
                        i = void 0,
                        u = void 0,
                        s = void 0;
                    Ze("beforeSanitizeAttributes", e, null);
                    var o = e.attributes;
                    if (o) {
                        var a = {
                            attrName: "",
                            attrValue: "",
                            keepAttr: !0,
                            allowedAttributes: Ce
                        };
                        for (s = o.length; s--;) {
                            n = o[s];
                            var c = n,
                                h = c.name,
                                p = c.namespaceURI;
                            if (r = B(n.value), i = x(h), a.attrName = i, a.attrValue = r, a.keepAttr = !0, a.forceKeepAttr = void 0, Ze("uponSanitizeAttribute", e, a), r = a.attrValue, !a.forceKeepAttr) {
                                if ("name" === i && "IMG" === e.nodeName && o.id) u = o.id, o = y(o, []), Ge("id", e), Ge(h, e), g(o, u) > s && e.setAttribute("id", u.value);
                                else {
                                    if ("INPUT" === e.nodeName && "type" === i && "file" === r && a.keepAttr && (Ce[i] || !xe[i])) continue;
                                    "id" === h && e.setAttribute(h, ""), Ge(h, e)
                                }
                                if (a.keepAttr)
                                    if (Be && b(/\/>/i, r)) Ge(h, e);
                                    else if (b(/svg|math/i, e.namespaceURI) && b(w("</(" + A(l(je), "|") + ")", "i"), r)) Ge(h, e);
                                else {
                                    be && (r = v(r, le, " "), r = v(r, he, " "));
                                    var d = e.nodeName.toLowerCase();
                                    if (tt(d, i, r)) try {
                                        p ? e.setAttributeNS(p, h, r) : e.setAttribute(h, r), C(t.removed)
                                    } catch (e) {}
                                }
                            }
                        }
                        Ze("afterSanitizeAttributes", e, null)
                    }
                },
                rt = function e(t) {
                    var n = void 0,
                        r = $e(t);
                    for (Ze("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) Ze("uponSanitizeShadowNode", n, null), et(n) || (n.content instanceof c && e(n.content), nt(n));
                    Ze("afterSanitizeShadowDOM", t, null)
                };
            return t.sanitize = function(r, i) {
                var u = void 0,
                    s = void 0,
                    o = void 0,
                    a = void 0,
                    l = void 0;
                if (r || (r = "\x3c!--\x3e"), "string" != typeof r && !Qe(r)) {
                    if ("function" != typeof r.toString) throw k("toString is not a function");
                    if ("string" != typeof(r = r.toString())) throw k("dirty is not a string, aborting")
                }
                if (!t.isSupported) {
                    if ("object" === W(e.toStaticHTML) || "function" == typeof e.toStaticHTML) {
                        if ("string" == typeof r) return e.toStaticHTML(r);
                        if (Qe(r)) return e.toStaticHTML(r.outerHTML)
                    }
                    return r
                }
                if (ke || We(i), t.removed = [], "string" == typeof r && (Oe = !1), Oe);
                else if (r instanceof d) u = Ve("\x3c!--\x3e"), s = u.ownerDocument.importNode(r, !0), 1 === s.nodeType && "BODY" === s.nodeName ? u = s : "HTML" === s.nodeName ? u = s : u.appendChild(s);
                else {
                    if (!Ne && !be && !we && Le && -1 === r.indexOf("<")) return te ? te.createHTML(r) : r;
                    if (!(u = Ve(r))) return Ne ? null : ne
                }
                u && Te && Ke(u.firstChild);
                for (var h = $e(Oe ? r : u); o = h.nextNode();) 3 === o.nodeType && o === a || et(o) || (o.content instanceof c && rt(o.content), nt(o), a = o);
                if (a = null, Oe) return r;
                if (Ne) {
                    if (Me)
                        for (l = oe.call(u.ownerDocument); u.firstChild;) l.appendChild(u.firstChild);
                    else l = u;
                    return _e && (l = ae.call(n, l, !0)), l
                }
                var p = we ? u.outerHTML : u.innerHTML;
                return be && (p = v(p, le, " "), p = v(p, he, " ")), te && Le ? te.createHTML(p) : p
            }, t.setConfig = function(e) {
                We(e), ke = !0
            }, t.clearConfig = function() {
                He = null, ke = !1
            }, t.isValidAttribute = function(e, t, n) {
                He || We({});
                var r = x(e),
                    i = x(t);
                return tt(r, i, n)
            }, t.addHook = function(e, t) {
                "function" == typeof t && (ce[e] = ce[e] || [], E(ce[e], t))
            }, t.removeHook = function(e) {
                ce[e] && C(ce[e])
            }, t.removeHooks = function(e) {
                ce[e] && (ce[e] = [])
            }, t.removeAllHooks = function() {
                ce = {}
            }, t
        }
        var o = Object.hasOwnProperty,
            a = Object.setPrototypeOf,
            c = Object.isFrozen,
            l = Object.keys,
            h = Object.freeze,
            p = Object.seal,
            d = "undefined" != typeof Reflect && Reflect,
            f = d.apply,
            D = d.construct;
        f || (f = function(e, t, n) {
            return e.apply(t, n)
        }), h || (h = function(e) {
            return e
        }), p || (p = function(e) {
            return e
        }), D || (D = function(t, n) {
            return new(Function.prototype.bind.apply(t, [null].concat(e(n))))
        });
        var m = t(Array.prototype.forEach),
            g = t(Array.prototype.indexOf),
            A = t(Array.prototype.join),
            C = t(Array.prototype.pop),
            E = t(Array.prototype.push),
            y = t(Array.prototype.slice),
            x = t(String.prototype.toLowerCase),
            F = t(String.prototype.match),
            v = t(String.prototype.replace),
            S = t(String.prototype.indexOf),
            B = t(String.prototype.trim),
            b = t(RegExp.prototype.test),
            w = n(RegExp),
            k = n(TypeError),
            T = h(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
            N = h(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"]),
            M = h(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
            _ = h(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
            L = h(["#text"]),
            I = h(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
            P = h(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
            O = h(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
            R = h(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            j = p(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
            U = p(/<%[\s\S]*|[\s\S]*%>/gm),
            z = p(/^data-[\-\w.\u00B7-\uFFFF]/),
            q = p(/^aria-[\-\w]+$/),
            X = p(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            H = p(/^(?:\w+script|data):/i),
            J = p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
            W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            K = function() {
                return "undefined" == typeof window ? null : window
            },
            G = function(e, t) {
                if ("object" !== (void 0 === e ? "undefined" : W(e)) || "function" != typeof e.createPolicy) return null;
                var n = null;
                t.currentScript && t.currentScript.hasAttribute("data-tt-policy-suffix") && (n = t.currentScript.getAttribute("data-tt-policy-suffix"));
                var r = "dompurify" + (n ? "#" + n : "");
                try {
                    return e.createPolicy(r, {
                        createHTML: function(e) {
                            return e
                        }
                    })
                } catch (e) {
                    return console.warn("TrustedTypes policy " + r + " could not be created."), null
                }
            };
        return s()
    })
}, function(e, t, n) {
    ! function(t, n) {
        e.exports = n()
    }(0, function() {
        return function(e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                var r = null,
                    i = function(e, t) {
                        n && n(e, t), r && r.visit(e, t)
                    },
                    u = "function" == typeof n ? i : null,
                    s = !1;
                if (t) {
                    s = "boolean" == typeof t.comment && t.comment;
                    var l = "boolean" == typeof t.attachComment && t.attachComment;
                    (s || l) && (r = new o.CommentHandler, r.attach = l, t.comment = !0, u = i)
                }
                var h = !1;
                t && "string" == typeof t.sourceType && (h = "module" === t.sourceType);
                var p;
                p = t && "boolean" == typeof t.jsx && t.jsx ? new a.JSXParser(e, t, u) : new c.Parser(e, t, u);
                var d = h ? p.parseModule() : p.parseScript(),
                    f = d;
                return s && r && (f.comments = r.comments), p.config.tokens && (f.tokens = p.tokens), p.config.tolerant && (f.errors = p.errorHandler.errors), f
            }

            function i(e, t, n) {
                var i = t || {};
                return i.sourceType = "module", r(e, i, n)
            }

            function u(e, t, n) {
                var i = t || {};
                return i.sourceType = "script", r(e, i, n)
            }

            function s(e, t, n) {
                var r, i = new l.Tokenizer(e, t);
                r = [];
                try {
                    for (;;) {
                        var u = i.getNextToken();
                        if (!u) break;
                        n && (u = n(u)), r.push(u)
                    }
                } catch (e) {
                    i.errorHandler.tolerate(e)
                }
                return i.errorHandler.tolerant && (r.errors = i.errors()), r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(1),
                a = n(3),
                c = n(8),
                l = n(15);
            t.parse = r, t.parseModule = i, t.parseScript = u, t.tokenize = s;
            var h = n(2);
            t.Syntax = h.Syntax, t.version = "4.0.1"
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(2),
                i = function() {
                    function e() {
                        this.attach = !1, this.comments = [], this.stack = [], this.leading = [], this.trailing = []
                    }
                    return e.prototype.insertInnerComments = function(e, t) {
                        if (e.type === r.Syntax.BlockStatement && 0 === e.body.length) {
                            for (var n = [], i = this.leading.length - 1; i >= 0; --i) {
                                var u = this.leading[i];
                                t.end.offset >= u.start && (n.unshift(u.comment), this.leading.splice(i, 1), this.trailing.splice(i, 1))
                            }
                            n.length && (e.innerComments = n)
                        }
                    }, e.prototype.findTrailingComments = function(e) {
                        var t = [];
                        if (this.trailing.length > 0) {
                            for (var n = this.trailing.length - 1; n >= 0; --n) {
                                var r = this.trailing[n];
                                r.start >= e.end.offset && t.unshift(r.comment)
                            }
                            return this.trailing.length = 0, t
                        }
                        var i = this.stack[this.stack.length - 1];
                        if (i && i.node.trailingComments) {
                            var u = i.node.trailingComments[0];
                            u && u.range[0] >= e.end.offset && (t = i.node.trailingComments, delete i.node.trailingComments)
                        }
                        return t
                    }, e.prototype.findLeadingComments = function(e) {
                        for (var t, n = []; this.stack.length > 0;) {
                            var r = this.stack[this.stack.length - 1];
                            if (!(r && r.start >= e.start.offset)) break;
                            t = r.node, this.stack.pop()
                        }
                        if (t) {
                            for (var i = t.leadingComments ? t.leadingComments.length : 0, u = i - 1; u >= 0; --u) {
                                var s = t.leadingComments[u];
                                s.range[1] <= e.start.offset && (n.unshift(s), t.leadingComments.splice(u, 1))
                            }
                            return t.leadingComments && 0 === t.leadingComments.length && delete t.leadingComments, n
                        }
                        for (var u = this.leading.length - 1; u >= 0; --u) {
                            var r = this.leading[u];
                            r.start <= e.start.offset && (n.unshift(r.comment), this.leading.splice(u, 1))
                        }
                        return n
                    }, e.prototype.visitNode = function(e, t) {
                        if (!(e.type === r.Syntax.Program && e.body.length > 0)) {
                            this.insertInnerComments(e, t);
                            var n = this.findTrailingComments(t),
                                i = this.findLeadingComments(t);
                            i.length > 0 && (e.leadingComments = i), n.length > 0 && (e.trailingComments = n), this.stack.push({
                                node: e,
                                start: t.start.offset
                            })
                        }
                    }, e.prototype.visitComment = function(e, t) {
                        var n = "L" === e.type[0] ? "Line" : "Block",
                            r = {
                                type: n,
                                value: e.value
                            };
                        if (e.range && (r.range = e.range), e.loc && (r.loc = e.loc), this.comments.push(r), this.attach) {
                            var i = {
                                comment: {
                                    type: n,
                                    value: e.value,
                                    range: [t.start.offset, t.end.offset]
                                },
                                start: t.start.offset
                            };
                            e.loc && (i.comment.loc = e.loc), e.type = n, this.leading.push(i), this.trailing.push(i)
                        }
                    }, e.prototype.visit = function(e, t) {
                        "LineComment" === e.type ? this.visitComment(e, t) : "BlockComment" === e.type ? this.visitComment(e, t) : this.attach && this.visitNode(e, t)
                    }, e
                }();
            t.CommentHandler = i
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Syntax = {
                AssignmentExpression: "AssignmentExpression",
                AssignmentPattern: "AssignmentPattern",
                ArrayExpression: "ArrayExpression",
                ArrayPattern: "ArrayPattern",
                ArrowFunctionExpression: "ArrowFunctionExpression",
                AwaitExpression: "AwaitExpression",
                BlockStatement: "BlockStatement",
                BinaryExpression: "BinaryExpression",
                BreakStatement: "BreakStatement",
                CallExpression: "CallExpression",
                CatchClause: "CatchClause",
                ClassBody: "ClassBody",
                ClassDeclaration: "ClassDeclaration",
                ClassExpression: "ClassExpression",
                ConditionalExpression: "ConditionalExpression",
                ContinueStatement: "ContinueStatement",
                DoWhileStatement: "DoWhileStatement",
                DebuggerStatement: "DebuggerStatement",
                EmptyStatement: "EmptyStatement",
                ExportAllDeclaration: "ExportAllDeclaration",
                ExportDefaultDeclaration: "ExportDefaultDeclaration",
                ExportNamedDeclaration: "ExportNamedDeclaration",
                ExportSpecifier: "ExportSpecifier",
                ExpressionStatement: "ExpressionStatement",
                ForStatement: "ForStatement",
                ForOfStatement: "ForOfStatement",
                ForInStatement: "ForInStatement",
                FunctionDeclaration: "FunctionDeclaration",
                FunctionExpression: "FunctionExpression",
                Identifier: "Identifier",
                IfStatement: "IfStatement",
                ImportDeclaration: "ImportDeclaration",
                ImportDefaultSpecifier: "ImportDefaultSpecifier",
                ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                ImportSpecifier: "ImportSpecifier",
                Literal: "Literal",
                LabeledStatement: "LabeledStatement",
                LogicalExpression: "LogicalExpression",
                MemberExpression: "MemberExpression",
                MetaProperty: "MetaProperty",
                MethodDefinition: "MethodDefinition",
                NewExpression: "NewExpression",
                ObjectExpression: "ObjectExpression",
                ObjectPattern: "ObjectPattern",
                Program: "Program",
                Property: "Property",
                RestElement: "RestElement",
                ReturnStatement: "ReturnStatement",
                SequenceExpression: "SequenceExpression",
                SpreadElement: "SpreadElement",
                Super: "Super",
                SwitchCase: "SwitchCase",
                SwitchStatement: "SwitchStatement",
                TaggedTemplateExpression: "TaggedTemplateExpression",
                TemplateElement: "TemplateElement",
                TemplateLiteral: "TemplateLiteral",
                ThisExpression: "ThisExpression",
                ThrowStatement: "ThrowStatement",
                TryStatement: "TryStatement",
                UnaryExpression: "UnaryExpression",
                UpdateExpression: "UpdateExpression",
                VariableDeclaration: "VariableDeclaration",
                VariableDeclarator: "VariableDeclarator",
                WhileStatement: "WhileStatement",
                WithStatement: "WithStatement",
                YieldExpression: "YieldExpression"
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t;
                switch (e.type) {
                    case o.JSXSyntax.JSXIdentifier:
                        t = e.name;
                        break;
                    case o.JSXSyntax.JSXNamespacedName:
                        var n = e;
                        t = r(n.namespace) + ":" + r(n.name);
                        break;
                    case o.JSXSyntax.JSXMemberExpression:
                        var i = e;
                        t = r(i.object) + "." + r(i.property)
                }
                return t
            }
            var i = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = n(4),
                s = n(5),
                o = n(6),
                a = n(7),
                c = n(8),
                l = n(13),
                h = n(14);
            l.TokenName[100] = "JSXIdentifier", l.TokenName[101] = "JSXText";
            var p = function(e) {
                function t(t, n, r) {
                    return e.call(this, t, n, r) || this
                }
                return i(t, e), t.prototype.parsePrimaryExpression = function() {
                    return this.match("<") ? this.parseJSXRoot() : e.prototype.parsePrimaryExpression.call(this)
                }, t.prototype.startJSX = function() {
                    this.scanner.index = this.startMarker.index, this.scanner.lineNumber = this.startMarker.line, this.scanner.lineStart = this.startMarker.index - this.startMarker.column
                }, t.prototype.finishJSX = function() {
                    this.nextToken()
                }, t.prototype.reenterJSX = function() {
                    this.startJSX(), this.expectJSX("}"), this.config.tokens && this.tokens.pop()
                }, t.prototype.createJSXNode = function() {
                    return this.collectComments(), {
                        index: this.scanner.index,
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                    }
                }, t.prototype.createJSXChildNode = function() {
                    return {
                        index: this.scanner.index,
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                    }
                }, t.prototype.scanXHTMLEntity = function(e) {
                    for (var t = "&", n = !0, r = !1, i = !1, s = !1; !this.scanner.eof() && n && !r;) {
                        var o = this.scanner.source[this.scanner.index];
                        if (o === e) break;
                        if (r = ";" === o, t += o, ++this.scanner.index, !r) switch (t.length) {
                            case 2:
                                i = "#" === o;
                                break;
                            case 3:
                                i && (s = "x" === o, n = s || u.Character.isDecimalDigit(o.charCodeAt(0)), i = i && !s);
                                break;
                            default:
                                n = n && !(i && !u.Character.isDecimalDigit(o.charCodeAt(0))), n = n && !(s && !u.Character.isHexDigit(o.charCodeAt(0)))
                        }
                    }
                    if (n && r && t.length > 2) {
                        var a = t.substr(1, t.length - 2);
                        i && a.length > 1 ? t = String.fromCharCode(parseInt(a.substr(1), 10)) : s && a.length > 2 ? t = String.fromCharCode(parseInt("0" + a.substr(1), 16)) : i || s || !h.XHTMLEntities[a] || (t = h.XHTMLEntities[a])
                    }
                    return t
                }, t.prototype.lexJSX = function() {
                    var e = this.scanner.source.charCodeAt(this.scanner.index);
                    if (60 === e || 62 === e || 47 === e || 58 === e || 61 === e || 123 === e || 125 === e) {
                        var t = this.scanner.source[this.scanner.index++];
                        return {
                            type: 7,
                            value: t,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: this.scanner.index - 1,
                            end: this.scanner.index
                        }
                    }
                    if (34 === e || 39 === e) {
                        for (var n = this.scanner.index, r = this.scanner.source[this.scanner.index++], i = ""; !this.scanner.eof();) {
                            var s = this.scanner.source[this.scanner.index++];
                            if (s === r) break;
                            i += "&" === s ? this.scanXHTMLEntity(r) : s
                        }
                        return {
                            type: 8,
                            value: i,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: n,
                            end: this.scanner.index
                        }
                    }
                    if (46 === e) {
                        var o = this.scanner.source.charCodeAt(this.scanner.index + 1),
                            a = this.scanner.source.charCodeAt(this.scanner.index + 2),
                            t = 46 === o && 46 === a ? "..." : ".",
                            n = this.scanner.index;
                        return this.scanner.index += t.length, {
                            type: 7,
                            value: t,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: n,
                            end: this.scanner.index
                        }
                    }
                    if (96 === e) return {
                        type: 10,
                        value: "",
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: this.scanner.index,
                        end: this.scanner.index
                    };
                    if (u.Character.isIdentifierStart(e) && 92 !== e) {
                        var n = this.scanner.index;
                        for (++this.scanner.index; !this.scanner.eof();) {
                            var s = this.scanner.source.charCodeAt(this.scanner.index);
                            if (u.Character.isIdentifierPart(s) && 92 !== s) ++this.scanner.index;
                            else {
                                if (45 !== s) break;
                                ++this.scanner.index
                            }
                        }
                        return {
                            type: 100,
                            value: this.scanner.source.slice(n, this.scanner.index),
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: n,
                            end: this.scanner.index
                        }
                    }
                    return this.scanner.lex()
                }, t.prototype.nextJSXToken = function() {
                    this.collectComments(), this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                    var e = this.lexJSX();
                    return this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.config.tokens && this.tokens.push(this.convertToken(e)), e
                }, t.prototype.nextJSXText = function() {
                    this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                    for (var e = this.scanner.index, t = ""; !this.scanner.eof();) {
                        var n = this.scanner.source[this.scanner.index];
                        if ("{" === n || "<" === n) break;
                        ++this.scanner.index, t += n, u.Character.isLineTerminator(n.charCodeAt(0)) && (++this.scanner.lineNumber, "\r" === n && "\n" === this.scanner.source[this.scanner.index] && ++this.scanner.index, this.scanner.lineStart = this.scanner.index)
                    }
                    this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                    var r = {
                        type: 101,
                        value: t,
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: e,
                        end: this.scanner.index
                    };
                    return t.length > 0 && this.config.tokens && this.tokens.push(this.convertToken(r)), r
                }, t.prototype.peekJSXToken = function() {
                    var e = this.scanner.saveState();
                    this.scanner.scanComments();
                    var t = this.lexJSX();
                    return this.scanner.restoreState(e), t
                }, t.prototype.expectJSX = function(e) {
                    var t = this.nextJSXToken();
                    7 === t.type && t.value === e || this.throwUnexpectedToken(t)
                }, t.prototype.matchJSX = function(e) {
                    var t = this.peekJSXToken();
                    return 7 === t.type && t.value === e
                }, t.prototype.parseJSXIdentifier = function() {
                    var e = this.createJSXNode(),
                        t = this.nextJSXToken();
                    return 100 !== t.type && this.throwUnexpectedToken(t), this.finalize(e, new s.JSXIdentifier(t.value))
                }, t.prototype.parseJSXElementName = function() {
                    var e = this.createJSXNode(),
                        t = this.parseJSXIdentifier();
                    if (this.matchJSX(":")) {
                        var n = t;
                        this.expectJSX(":");
                        var r = this.parseJSXIdentifier();
                        t = this.finalize(e, new s.JSXNamespacedName(n, r))
                    } else if (this.matchJSX("."))
                        for (; this.matchJSX(".");) {
                            var i = t;
                            this.expectJSX(".");
                            var u = this.parseJSXIdentifier();
                            t = this.finalize(e, new s.JSXMemberExpression(i, u))
                        }
                    return t
                }, t.prototype.parseJSXAttributeName = function() {
                    var e, t = this.createJSXNode(),
                        n = this.parseJSXIdentifier();
                    if (this.matchJSX(":")) {
                        var r = n;
                        this.expectJSX(":");
                        var i = this.parseJSXIdentifier();
                        e = this.finalize(t, new s.JSXNamespacedName(r, i))
                    } else e = n;
                    return e
                }, t.prototype.parseJSXStringLiteralAttribute = function() {
                    var e = this.createJSXNode(),
                        t = this.nextJSXToken();
                    8 !== t.type && this.throwUnexpectedToken(t);
                    var n = this.getTokenRaw(t);
                    return this.finalize(e, new a.Literal(t.value, n))
                }, t.prototype.parseJSXExpressionAttribute = function() {
                    var e = this.createJSXNode();
                    this.expectJSX("{"), this.finishJSX(), this.match("}") && this.tolerateError("JSX attributes must only be assigned a non-empty expression");
                    var t = this.parseAssignmentExpression();
                    return this.reenterJSX(), this.finalize(e, new s.JSXExpressionContainer(t))
                }, t.prototype.parseJSXAttributeValue = function() {
                    return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute()
                }, t.prototype.parseJSXNameValueAttribute = function() {
                    var e = this.createJSXNode(),
                        t = this.parseJSXAttributeName(),
                        n = null;
                    return this.matchJSX("=") && (this.expectJSX("="), n = this.parseJSXAttributeValue()), this.finalize(e, new s.JSXAttribute(t, n))
                }, t.prototype.parseJSXSpreadAttribute = function() {
                    var e = this.createJSXNode();
                    this.expectJSX("{"), this.expectJSX("..."), this.finishJSX();
                    var t = this.parseAssignmentExpression();
                    return this.reenterJSX(), this.finalize(e, new s.JSXSpreadAttribute(t))
                }, t.prototype.parseJSXAttributes = function() {
                    for (var e = []; !this.matchJSX("/") && !this.matchJSX(">");) {
                        var t = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
                        e.push(t)
                    }
                    return e
                }, t.prototype.parseJSXOpeningElement = function() {
                    var e = this.createJSXNode();
                    this.expectJSX("<");
                    var t = this.parseJSXElementName(),
                        n = this.parseJSXAttributes(),
                        r = this.matchJSX("/");
                    return r && this.expectJSX("/"), this.expectJSX(">"), this.finalize(e, new s.JSXOpeningElement(t, r, n))
                }, t.prototype.parseJSXBoundaryElement = function() {
                    var e = this.createJSXNode();
                    if (this.expectJSX("<"), this.matchJSX("/")) {
                        this.expectJSX("/");
                        var t = this.parseJSXElementName();
                        return this.expectJSX(">"), this.finalize(e, new s.JSXClosingElement(t))
                    }
                    var n = this.parseJSXElementName(),
                        r = this.parseJSXAttributes(),
                        i = this.matchJSX("/");
                    return i && this.expectJSX("/"), this.expectJSX(">"), this.finalize(e, new s.JSXOpeningElement(n, i, r))
                }, t.prototype.parseJSXEmptyExpression = function() {
                    var e = this.createJSXChildNode();
                    return this.collectComments(), this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.finalize(e, new s.JSXEmptyExpression)
                }, t.prototype.parseJSXExpressionContainer = function() {
                    var e = this.createJSXNode();
                    this.expectJSX("{");
                    var t;
                    return this.matchJSX("}") ? (t = this.parseJSXEmptyExpression(), this.expectJSX("}")) : (this.finishJSX(), t = this.parseAssignmentExpression(), this.reenterJSX()), this.finalize(e, new s.JSXExpressionContainer(t))
                }, t.prototype.parseJSXChildren = function() {
                    for (var e = []; !this.scanner.eof();) {
                        var t = this.createJSXChildNode(),
                            n = this.nextJSXText();
                        if (n.start < n.end) {
                            var r = this.getTokenRaw(n),
                                i = this.finalize(t, new s.JSXText(n.value, r));
                            e.push(i)
                        }
                        if ("{" !== this.scanner.source[this.scanner.index]) break;
                        var u = this.parseJSXExpressionContainer();
                        e.push(u)
                    }
                    return e
                }, t.prototype.parseComplexJSXElement = function(e) {
                    for (var t = []; !this.scanner.eof();) {
                        e.children = e.children.concat(this.parseJSXChildren());
                        var n = this.createJSXChildNode(),
                            i = this.parseJSXBoundaryElement();
                        if (i.type === o.JSXSyntax.JSXOpeningElement) {
                            var u = i;
                            if (u.selfClosing) {
                                var a = this.finalize(n, new s.JSXElement(u, [], null));
                                e.children.push(a)
                            } else t.push(e), e = {
                                node: n,
                                opening: u,
                                closing: null,
                                children: []
                            }
                        }
                        if (i.type === o.JSXSyntax.JSXClosingElement) {
                            e.closing = i;
                            var c = r(e.opening.name);
                            if (c !== r(e.closing.name) && this.tolerateError("Expected corresponding JSX closing tag for %0", c), !(t.length > 0)) break;
                            var a = this.finalize(e.node, new s.JSXElement(e.opening, e.children, e.closing));
                            e = t[t.length - 1], e.children.push(a), t.pop()
                        }
                    }
                    return e
                }, t.prototype.parseJSXElement = function() {
                    var e = this.createJSXNode(),
                        t = this.parseJSXOpeningElement(),
                        n = [],
                        r = null;
                    if (!t.selfClosing) {
                        var i = this.parseComplexJSXElement({
                            node: e,
                            opening: t,
                            closing: r,
                            children: n
                        });
                        n = i.children, r = i.closing
                    }
                    return this.finalize(e, new s.JSXElement(t, n, r))
                }, t.prototype.parseJSXRoot = function() {
                    this.config.tokens && this.tokens.pop(), this.startJSX();
                    var e = this.parseJSXElement();
                    return this.finishJSX(), e
                }, t.prototype.isStartOfExpression = function() {
                    return e.prototype.isStartOfExpression.call(this) || this.match("<")
                }, t
            }(c.Parser);
            t.JSXParser = p
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
            };
            t.Character = {
                fromCodePoint: function(e) {
                    return e < 65536 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10)) + String.fromCharCode(56320 + (e - 65536 & 1023))
                },
                isWhiteSpace: function(e) {
                    return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(e) >= 0
                },
                isLineTerminator: function(e) {
                    return 10 === e || 13 === e || 8232 === e || 8233 === e
                },
                isIdentifierStart: function(e) {
                    return 36 === e || 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122 || 92 === e || e >= 128 && n.NonAsciiIdentifierStart.test(t.Character.fromCodePoint(e))
                },
                isIdentifierPart: function(e) {
                    return 36 === e || 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || 92 === e || e >= 128 && n.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e))
                },
                isDecimalDigit: function(e) {
                    return e >= 48 && e <= 57
                },
                isHexDigit: function(e) {
                    return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102
                },
                isOctalDigit: function(e) {
                    return e >= 48 && e <= 55
                }
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(6),
                i = function() {
                    function e(e) {
                        this.type = r.JSXSyntax.JSXClosingElement, this.name = e
                    }
                    return e
                }();
            t.JSXClosingElement = i;
            var u = function() {
                function e(e, t, n) {
                    this.type = r.JSXSyntax.JSXElement, this.openingElement = e, this.children = t, this.closingElement = n
                }
                return e
            }();
            t.JSXElement = u;
            var s = function() {
                function e() {
                    this.type = r.JSXSyntax.JSXEmptyExpression
                }
                return e
            }();
            t.JSXEmptyExpression = s;
            var o = function() {
                function e(e) {
                    this.type = r.JSXSyntax.JSXExpressionContainer, this.expression = e
                }
                return e
            }();
            t.JSXExpressionContainer = o;
            var a = function() {
                function e(e) {
                    this.type = r.JSXSyntax.JSXIdentifier, this.name = e
                }
                return e
            }();
            t.JSXIdentifier = a;
            var c = function() {
                function e(e, t) {
                    this.type = r.JSXSyntax.JSXMemberExpression, this.object = e, this.property = t
                }
                return e
            }();
            t.JSXMemberExpression = c;
            var l = function() {
                function e(e, t) {
                    this.type = r.JSXSyntax.JSXAttribute, this.name = e, this.value = t
                }
                return e
            }();
            t.JSXAttribute = l;
            var h = function() {
                function e(e, t) {
                    this.type = r.JSXSyntax.JSXNamespacedName, this.namespace = e, this.name = t
                }
                return e
            }();
            t.JSXNamespacedName = h;
            var p = function() {
                function e(e, t, n) {
                    this.type = r.JSXSyntax.JSXOpeningElement, this.name = e, this.selfClosing = t, this.attributes = n
                }
                return e
            }();
            t.JSXOpeningElement = p;
            var d = function() {
                function e(e) {
                    this.type = r.JSXSyntax.JSXSpreadAttribute, this.argument = e
                }
                return e
            }();
            t.JSXSpreadAttribute = d;
            var f = function() {
                function e(e, t) {
                    this.type = r.JSXSyntax.JSXText, this.value = e, this.raw = t
                }
                return e
            }();
            t.JSXText = f
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JSXSyntax = {
                JSXAttribute: "JSXAttribute",
                JSXClosingElement: "JSXClosingElement",
                JSXElement: "JSXElement",
                JSXEmptyExpression: "JSXEmptyExpression",
                JSXExpressionContainer: "JSXExpressionContainer",
                JSXIdentifier: "JSXIdentifier",
                JSXMemberExpression: "JSXMemberExpression",
                JSXNamespacedName: "JSXNamespacedName",
                JSXOpeningElement: "JSXOpeningElement",
                JSXSpreadAttribute: "JSXSpreadAttribute",
                JSXText: "JSXText"
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(2),
                i = function() {
                    function e(e) {
                        this.type = r.Syntax.ArrayExpression, this.elements = e
                    }
                    return e
                }();
            t.ArrayExpression = i;
            var u = function() {
                function e(e) {
                    this.type = r.Syntax.ArrayPattern, this.elements = e
                }
                return e
            }();
            t.ArrayPattern = u;
            var s = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.ArrowFunctionExpression, this.id = null, this.params = e, this.body = t, this.generator = !1, this.expression = n, this.async = !1
                }
                return e
            }();
            t.ArrowFunctionExpression = s;
            var o = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.AssignmentExpression, this.operator = e, this.left = t, this.right = n
                }
                return e
            }();
            t.AssignmentExpression = o;
            var a = function() {
                function e(e, t) {
                    this.type = r.Syntax.AssignmentPattern, this.left = e, this.right = t
                }
                return e
            }();
            t.AssignmentPattern = a;
            var c = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.ArrowFunctionExpression, this.id = null, this.params = e, this.body = t, this.generator = !1, this.expression = n, this.async = !0
                }
                return e
            }();
            t.AsyncArrowFunctionExpression = c;
            var l = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.FunctionDeclaration, this.id = e, this.params = t, this.body = n, this.generator = !1, this.expression = !1, this.async = !0
                }
                return e
            }();
            t.AsyncFunctionDeclaration = l;
            var h = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.FunctionExpression, this.id = e, this.params = t, this.body = n, this.generator = !1, this.expression = !1, this.async = !0
                }
                return e
            }();
            t.AsyncFunctionExpression = h;
            var p = function() {
                function e(e) {
                    this.type = r.Syntax.AwaitExpression, this.argument = e
                }
                return e
            }();
            t.AwaitExpression = p;
            var d = function() {
                function e(e, t, n) {
                    var i = "||" === e || "&&" === e;
                    this.type = i ? r.Syntax.LogicalExpression : r.Syntax.BinaryExpression, this.operator = e, this.left = t, this.right = n
                }
                return e
            }();
            t.BinaryExpression = d;
            var f = function() {
                function e(e) {
                    this.type = r.Syntax.BlockStatement, this.body = e
                }
                return e
            }();
            t.BlockStatement = f;
            var D = function() {
                function e(e) {
                    this.type = r.Syntax.BreakStatement, this.label = e
                }
                return e
            }();
            t.BreakStatement = D;
            var m = function() {
                function e(e, t) {
                    this.type = r.Syntax.CallExpression, this.callee = e, this.arguments = t
                }
                return e
            }();
            t.CallExpression = m;
            var g = function() {
                function e(e, t) {
                    this.type = r.Syntax.CatchClause, this.param = e, this.body = t
                }
                return e
            }();
            t.CatchClause = g;
            var A = function() {
                function e(e) {
                    this.type = r.Syntax.ClassBody, this.body = e
                }
                return e
            }();
            t.ClassBody = A;
            var C = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.ClassDeclaration, this.id = e, this.superClass = t, this.body = n
                }
                return e
            }();
            t.ClassDeclaration = C;
            var E = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.ClassExpression, this.id = e, this.superClass = t, this.body = n
                }
                return e
            }();
            t.ClassExpression = E;
            var y = function() {
                function e(e, t) {
                    this.type = r.Syntax.MemberExpression, this.computed = !0, this.object = e, this.property = t
                }
                return e
            }();
            t.ComputedMemberExpression = y;
            var x = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.ConditionalExpression, this.test = e, this.consequent = t, this.alternate = n
                }
                return e
            }();
            t.ConditionalExpression = x;
            var F = function() {
                function e(e) {
                    this.type = r.Syntax.ContinueStatement, this.label = e
                }
                return e
            }();
            t.ContinueStatement = F;
            var v = function() {
                function e() {
                    this.type = r.Syntax.DebuggerStatement
                }
                return e
            }();
            t.DebuggerStatement = v;
            var S = function() {
                function e(e, t) {
                    this.type = r.Syntax.ExpressionStatement, this.expression = e, this.directive = t
                }
                return e
            }();
            t.Directive = S;
            var B = function() {
                function e(e, t) {
                    this.type = r.Syntax.DoWhileStatement, this.body = e, this.test = t
                }
                return e
            }();
            t.DoWhileStatement = B;
            var b = function() {
                function e() {
                    this.type = r.Syntax.EmptyStatement
                }
                return e
            }();
            t.EmptyStatement = b;
            var w = function() {
                function e(e) {
                    this.type = r.Syntax.ExportAllDeclaration, this.source = e
                }
                return e
            }();
            t.ExportAllDeclaration = w;
            var k = function() {
                function e(e) {
                    this.type = r.Syntax.ExportDefaultDeclaration, this.declaration = e
                }
                return e
            }();
            t.ExportDefaultDeclaration = k;
            var T = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.ExportNamedDeclaration, this.declaration = e, this.specifiers = t, this.source = n
                }
                return e
            }();
            t.ExportNamedDeclaration = T;
            var N = function() {
                function e(e, t) {
                    this.type = r.Syntax.ExportSpecifier, this.exported = t, this.local = e
                }
                return e
            }();
            t.ExportSpecifier = N;
            var M = function() {
                function e(e) {
                    this.type = r.Syntax.ExpressionStatement, this.expression = e
                }
                return e
            }();
            t.ExpressionStatement = M;
            var _ = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.ForInStatement, this.left = e, this.right = t, this.body = n, this.each = !1
                }
                return e
            }();
            t.ForInStatement = _;
            var L = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.ForOfStatement, this.left = e, this.right = t, this.body = n
                }
                return e
            }();
            t.ForOfStatement = L;
            var I = function() {
                function e(e, t, n, i) {
                    this.type = r.Syntax.ForStatement, this.init = e, this.test = t, this.update = n, this.body = i
                }
                return e
            }();
            t.ForStatement = I;
            var P = function() {
                function e(e, t, n, i) {
                    this.type = r.Syntax.FunctionDeclaration, this.id = e, this.params = t, this.body = n, this.generator = i, this.expression = !1, this.async = !1
                }
                return e
            }();
            t.FunctionDeclaration = P;
            var O = function() {
                function e(e, t, n, i) {
                    this.type = r.Syntax.FunctionExpression, this.id = e, this.params = t, this.body = n, this.generator = i, this.expression = !1, this.async = !1
                }
                return e
            }();
            t.FunctionExpression = O;
            var R = function() {
                function e(e) {
                    this.type = r.Syntax.Identifier, this.name = e
                }
                return e
            }();
            t.Identifier = R;
            var j = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.IfStatement, this.test = e, this.consequent = t, this.alternate = n
                }
                return e
            }();
            t.IfStatement = j;
            var U = function() {
                function e(e, t) {
                    this.type = r.Syntax.ImportDeclaration, this.specifiers = e, this.source = t
                }
                return e
            }();
            t.ImportDeclaration = U;
            var z = function() {
                function e(e) {
                    this.type = r.Syntax.ImportDefaultSpecifier, this.local = e
                }
                return e
            }();
            t.ImportDefaultSpecifier = z;
            var q = function() {
                function e(e) {
                    this.type = r.Syntax.ImportNamespaceSpecifier, this.local = e
                }
                return e
            }();
            t.ImportNamespaceSpecifier = q;
            var X = function() {
                function e(e, t) {
                    this.type = r.Syntax.ImportSpecifier, this.local = e, this.imported = t
                }
                return e
            }();
            t.ImportSpecifier = X;
            var H = function() {
                function e(e, t) {
                    this.type = r.Syntax.LabeledStatement, this.label = e, this.body = t
                }
                return e
            }();
            t.LabeledStatement = H;
            var J = function() {
                function e(e, t) {
                    this.type = r.Syntax.Literal, this.value = e, this.raw = t
                }
                return e
            }();
            t.Literal = J;
            var W = function() {
                function e(e, t) {
                    this.type = r.Syntax.MetaProperty, this.meta = e, this.property = t
                }
                return e
            }();
            t.MetaProperty = W;
            var K = function() {
                function e(e, t, n, i, u) {
                    this.type = r.Syntax.MethodDefinition, this.key = e, this.computed = t, this.value = n, this.kind = i, this.static = u
                }
                return e
            }();
            t.MethodDefinition = K;
            var G = function() {
                function e(e) {
                    this.type = r.Syntax.Program, this.body = e, this.sourceType = "module"
                }
                return e
            }();
            t.Module = G;
            var V = function() {
                function e(e, t) {
                    this.type = r.Syntax.NewExpression, this.callee = e, this.arguments = t
                }
                return e
            }();
            t.NewExpression = V;
            var $ = function() {
                function e(e) {
                    this.type = r.Syntax.ObjectExpression, this.properties = e
                }
                return e
            }();
            t.ObjectExpression = $;
            var Y = function() {
                function e(e) {
                    this.type = r.Syntax.ObjectPattern, this.properties = e
                }
                return e
            }();
            t.ObjectPattern = Y;
            var Q = function() {
                function e(e, t, n, i, u, s) {
                    this.type = r.Syntax.Property, this.key = t, this.computed = n, this.value = i, this.kind = e, this.method = u, this.shorthand = s
                }
                return e
            }();
            t.Property = Q;
            var Z = function() {
                function e(e, t, n, i) {
                    this.type = r.Syntax.Literal, this.value = e, this.raw = t, this.regex = {
                        pattern: n,
                        flags: i
                    }
                }
                return e
            }();
            t.RegexLiteral = Z;
            var ee = function() {
                function e(e) {
                    this.type = r.Syntax.RestElement, this.argument = e
                }
                return e
            }();
            t.RestElement = ee;
            var te = function() {
                function e(e) {
                    this.type = r.Syntax.ReturnStatement, this.argument = e
                }
                return e
            }();
            t.ReturnStatement = te;
            var ne = function() {
                function e(e) {
                    this.type = r.Syntax.Program, this.body = e, this.sourceType = "script"
                }
                return e
            }();
            t.Script = ne;
            var re = function() {
                function e(e) {
                    this.type = r.Syntax.SequenceExpression, this.expressions = e
                }
                return e
            }();
            t.SequenceExpression = re;
            var ie = function() {
                function e(e) {
                    this.type = r.Syntax.SpreadElement, this.argument = e
                }
                return e
            }();
            t.SpreadElement = ie;
            var ue = function() {
                function e(e, t) {
                    this.type = r.Syntax.MemberExpression, this.computed = !1, this.object = e, this.property = t
                }
                return e
            }();
            t.StaticMemberExpression = ue;
            var se = function() {
                function e() {
                    this.type = r.Syntax.Super
                }
                return e
            }();
            t.Super = se;
            var oe = function() {
                function e(e, t) {
                    this.type = r.Syntax.SwitchCase, this.test = e, this.consequent = t
                }
                return e
            }();
            t.SwitchCase = oe;
            var ae = function() {
                function e(e, t) {
                    this.type = r.Syntax.SwitchStatement, this.discriminant = e, this.cases = t
                }
                return e
            }();
            t.SwitchStatement = ae;
            var ce = function() {
                function e(e, t) {
                    this.type = r.Syntax.TaggedTemplateExpression, this.tag = e, this.quasi = t
                }
                return e
            }();
            t.TaggedTemplateExpression = ce;
            var le = function() {
                function e(e, t) {
                    this.type = r.Syntax.TemplateElement, this.value = e, this.tail = t
                }
                return e
            }();
            t.TemplateElement = le;
            var he = function() {
                function e(e, t) {
                    this.type = r.Syntax.TemplateLiteral, this.quasis = e, this.expressions = t
                }
                return e
            }();
            t.TemplateLiteral = he;
            var pe = function() {
                function e() {
                    this.type = r.Syntax.ThisExpression
                }
                return e
            }();
            t.ThisExpression = pe;
            var de = function() {
                function e(e) {
                    this.type = r.Syntax.ThrowStatement, this.argument = e
                }
                return e
            }();
            t.ThrowStatement = de;
            var fe = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.TryStatement, this.block = e, this.handler = t, this.finalizer = n
                }
                return e
            }();
            t.TryStatement = fe;
            var De = function() {
                function e(e, t) {
                    this.type = r.Syntax.UnaryExpression, this.operator = e, this.argument = t, this.prefix = !0
                }
                return e
            }();
            t.UnaryExpression = De;
            var me = function() {
                function e(e, t, n) {
                    this.type = r.Syntax.UpdateExpression, this.operator = e, this.argument = t, this.prefix = n
                }
                return e
            }();
            t.UpdateExpression = me;
            var ge = function() {
                function e(e, t) {
                    this.type = r.Syntax.VariableDeclaration, this.declarations = e, this.kind = t
                }
                return e
            }();
            t.VariableDeclaration = ge;
            var Ae = function() {
                function e(e, t) {
                    this.type = r.Syntax.VariableDeclarator, this.id = e, this.init = t
                }
                return e
            }();
            t.VariableDeclarator = Ae;
            var Ce = function() {
                function e(e, t) {
                    this.type = r.Syntax.WhileStatement, this.test = e, this.body = t
                }
                return e
            }();
            t.WhileStatement = Ce;
            var Ee = function() {
                function e(e, t) {
                    this.type = r.Syntax.WithStatement, this.object = e, this.body = t
                }
                return e
            }();
            t.WithStatement = Ee;
            var ye = function() {
                function e(e, t) {
                    this.type = r.Syntax.YieldExpression, this.argument = e, this.delegate = t
                }
                return e
            }();
            t.YieldExpression = ye
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(9),
                i = n(10),
                u = n(11),
                s = n(7),
                o = n(12),
                a = n(2),
                c = n(13),
                l = function() {
                    function e(e, t, n) {
                        void 0 === t && (t = {}), this.config = {
                            range: "boolean" == typeof t.range && t.range,
                            loc: "boolean" == typeof t.loc && t.loc,
                            source: null,
                            tokens: "boolean" == typeof t.tokens && t.tokens,
                            comment: "boolean" == typeof t.comment && t.comment,
                            tolerant: "boolean" == typeof t.tolerant && t.tolerant
                        }, this.config.loc && t.source && null !== t.source && (this.config.source = String(t.source)), this.delegate = n, this.errorHandler = new i.ErrorHandler, this.errorHandler.tolerant = this.config.tolerant, this.scanner = new o.Scanner(e, this.errorHandler), this.scanner.trackComment = this.config.comment, this.operatorPrecedence = {
                            ")": 0,
                            ";": 0,
                            ",": 0,
                            "=": 0,
                            "]": 0,
                            "||": 1,
                            "&&": 2,
                            "|": 3,
                            "^": 4,
                            "&": 5,
                            "==": 6,
                            "!=": 6,
                            "===": 6,
                            "!==": 6,
                            "<": 7,
                            ">": 7,
                            "<=": 7,
                            ">=": 7,
                            "<<": 8,
                            ">>": 8,
                            ">>>": 8,
                            "+": 9,
                            "-": 9,
                            "*": 11,
                            "/": 11,
                            "%": 11
                        }, this.lookahead = {
                            type: 2,
                            value: "",
                            lineNumber: this.scanner.lineNumber,
                            lineStart: 0,
                            start: 0,
                            end: 0
                        }, this.hasLineTerminator = !1, this.context = {
                            isModule: !1,
                            await: !1,
                            allowIn: !0,
                            allowStrictDirective: !0,
                            allowYield: !0,
                            firstCoverInitializedNameError: null,
                            isAssignmentTarget: !1,
                            isBindingElement: !1,
                            inFunctionBody: !1,
                            inIteration: !1,
                            inSwitch: !1,
                            labelSet: {},
                            strict: !1
                        }, this.tokens = [], this.startMarker = {
                            index: 0,
                            line: this.scanner.lineNumber,
                            column: 0
                        }, this.lastMarker = {
                            index: 0,
                            line: this.scanner.lineNumber,
                            column: 0
                        }, this.nextToken(), this.lastMarker = {
                            index: this.scanner.index,
                            line: this.scanner.lineNumber,
                            column: this.scanner.index - this.scanner.lineStart
                        }
                    }
                    return e.prototype.throwError = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        var i = Array.prototype.slice.call(arguments, 1),
                            u = e.replace(/%(\d)/g, function(e, t) {
                                return r.assert(t < i.length, "Message reference must be in range"), i[t]
                            }),
                            s = this.lastMarker.index,
                            o = this.lastMarker.line,
                            a = this.lastMarker.column + 1;
                        throw this.errorHandler.createError(s, o, a, u)
                    }, e.prototype.tolerateError = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        var i = Array.prototype.slice.call(arguments, 1),
                            u = e.replace(/%(\d)/g, function(e, t) {
                                return r.assert(t < i.length, "Message reference must be in range"), i[t]
                            }),
                            s = this.lastMarker.index,
                            o = this.scanner.lineNumber,
                            a = this.lastMarker.column + 1;
                        this.errorHandler.tolerateError(s, o, a, u)
                    }, e.prototype.unexpectedTokenError = function(e, t) {
                        var n, r = t || u.Messages.UnexpectedToken;
                        if (e ? (t || (r = 2 === e.type ? u.Messages.UnexpectedEOS : 3 === e.type ? u.Messages.UnexpectedIdentifier : 6 === e.type ? u.Messages.UnexpectedNumber : 8 === e.type ? u.Messages.UnexpectedString : 10 === e.type ? u.Messages.UnexpectedTemplate : u.Messages.UnexpectedToken, 4 === e.type && (this.scanner.isFutureReservedWord(e.value) ? r = u.Messages.UnexpectedReserved : this.context.strict && this.scanner.isStrictModeReservedWord(e.value) && (r = u.Messages.StrictReservedWord))), n = e.value) : n = "ILLEGAL", r = r.replace("%0", n), e && "number" == typeof e.lineNumber) {
                            var i = e.start,
                                s = e.lineNumber,
                                o = this.lastMarker.index - this.lastMarker.column,
                                a = e.start - o + 1;
                            return this.errorHandler.createError(i, s, a, r)
                        }
                        var i = this.lastMarker.index,
                            s = this.lastMarker.line,
                            a = this.lastMarker.column + 1;
                        return this.errorHandler.createError(i, s, a, r)
                    }, e.prototype.throwUnexpectedToken = function(e, t) {
                        throw this.unexpectedTokenError(e, t)
                    }, e.prototype.tolerateUnexpectedToken = function(e, t) {
                        this.errorHandler.tolerate(this.unexpectedTokenError(e, t))
                    }, e.prototype.collectComments = function() {
                        if (this.config.comment) {
                            var e = this.scanner.scanComments();
                            if (e.length > 0 && this.delegate)
                                for (var t = 0; t < e.length; ++t) {
                                    var n = e[t],
                                        r = void 0;
                                    r = {
                                        type: n.multiLine ? "BlockComment" : "LineComment",
                                        value: this.scanner.source.slice(n.slice[0], n.slice[1])
                                    }, this.config.range && (r.range = n.range), this.config.loc && (r.loc = n.loc);
                                    var i = {
                                        start: {
                                            line: n.loc.start.line,
                                            column: n.loc.start.column,
                                            offset: n.range[0]
                                        },
                                        end: {
                                            line: n.loc.end.line,
                                            column: n.loc.end.column,
                                            offset: n.range[1]
                                        }
                                    };
                                    this.delegate(r, i)
                                }
                        } else this.scanner.scanComments()
                    }, e.prototype.getTokenRaw = function(e) {
                        return this.scanner.source.slice(e.start, e.end)
                    }, e.prototype.convertToken = function(e) {
                        var t = {
                            type: c.TokenName[e.type],
                            value: this.getTokenRaw(e)
                        };
                        if (this.config.range && (t.range = [e.start, e.end]), this.config.loc && (t.loc = {
                                start: {
                                    line: this.startMarker.line,
                                    column: this.startMarker.column
                                },
                                end: {
                                    line: this.scanner.lineNumber,
                                    column: this.scanner.index - this.scanner.lineStart
                                }
                            }), 9 === e.type) {
                            var n = e.pattern,
                                r = e.flags;
                            t.regex = {
                                pattern: n,
                                flags: r
                            }
                        }
                        return t
                    }, e.prototype.nextToken = function() {
                        var e = this.lookahead;
                        this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.collectComments(), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart);
                        var t = this.scanner.lex();
                        return this.hasLineTerminator = e.lineNumber !== t.lineNumber, t && this.context.strict && 3 === t.type && this.scanner.isStrictModeReservedWord(t.value) && (t.type = 4), this.lookahead = t, this.config.tokens && 2 !== t.type && this.tokens.push(this.convertToken(t)), e
                    }, e.prototype.nextRegexToken = function() {
                        this.collectComments();
                        var e = this.scanner.scanRegExp();
                        return this.config.tokens && (this.tokens.pop(), this.tokens.push(this.convertToken(e))), this.lookahead = e, this.nextToken(), e
                    }, e.prototype.createNode = function() {
                        return {
                            index: this.startMarker.index,
                            line: this.startMarker.line,
                            column: this.startMarker.column
                        }
                    }, e.prototype.startNode = function(e, t) {
                        void 0 === t && (t = 0);
                        var n = e.start - e.lineStart,
                            r = e.lineNumber;
                        return n < 0 && (n += t, r--), {
                            index: e.start,
                            line: r,
                            column: n
                        }
                    }, e.prototype.finalize = function(e, t) {
                        if (this.config.range && (t.range = [e.index, this.lastMarker.index]), this.config.loc && (t.loc = {
                                start: {
                                    line: e.line,
                                    column: e.column
                                },
                                end: {
                                    line: this.lastMarker.line,
                                    column: this.lastMarker.column
                                }
                            }, this.config.source && (t.loc.source = this.config.source)), this.delegate) {
                            var n = {
                                start: {
                                    line: e.line,
                                    column: e.column,
                                    offset: e.index
                                },
                                end: {
                                    line: this.lastMarker.line,
                                    column: this.lastMarker.column,
                                    offset: this.lastMarker.index
                                }
                            };
                            this.delegate(t, n)
                        }
                        return t
                    }, e.prototype.expect = function(e) {
                        var t = this.nextToken();
                        7 === t.type && t.value === e || this.throwUnexpectedToken(t)
                    }, e.prototype.expectCommaSeparator = function() {
                        if (this.config.tolerant) {
                            var e = this.lookahead;
                            7 === e.type && "," === e.value ? this.nextToken() : 7 === e.type && ";" === e.value ? (this.nextToken(), this.tolerateUnexpectedToken(e)) : this.tolerateUnexpectedToken(e, u.Messages.UnexpectedToken)
                        } else this.expect(",")
                    }, e.prototype.expectKeyword = function(e) {
                        var t = this.nextToken();
                        4 === t.type && t.value === e || this.throwUnexpectedToken(t)
                    }, e.prototype.match = function(e) {
                        return 7 === this.lookahead.type && this.lookahead.value === e
                    }, e.prototype.matchKeyword = function(e) {
                        return 4 === this.lookahead.type && this.lookahead.value === e
                    }, e.prototype.matchContextualKeyword = function(e) {
                        return 3 === this.lookahead.type && this.lookahead.value === e
                    }, e.prototype.matchAssign = function() {
                        if (7 !== this.lookahead.type) return !1;
                        var e = this.lookahead.value;
                        return "=" === e || "*=" === e || "**=" === e || "/=" === e || "%=" === e || "+=" === e || "-=" === e || "<<=" === e || ">>=" === e || ">>>=" === e || "&=" === e || "^=" === e || "|=" === e
                    }, e.prototype.isolateCoverGrammar = function(e) {
                        var t = this.context.isBindingElement,
                            n = this.context.isAssignmentTarget,
                            r = this.context.firstCoverInitializedNameError;
                        this.context.isBindingElement = !0, this.context.isAssignmentTarget = !0, this.context.firstCoverInitializedNameError = null;
                        var i = e.call(this);
                        return null !== this.context.firstCoverInitializedNameError && this.throwUnexpectedToken(this.context.firstCoverInitializedNameError), this.context.isBindingElement = t, this.context.isAssignmentTarget = n, this.context.firstCoverInitializedNameError = r, i
                    }, e.prototype.inheritCoverGrammar = function(e) {
                        var t = this.context.isBindingElement,
                            n = this.context.isAssignmentTarget,
                            r = this.context.firstCoverInitializedNameError;
                        this.context.isBindingElement = !0, this.context.isAssignmentTarget = !0, this.context.firstCoverInitializedNameError = null;
                        var i = e.call(this);
                        return this.context.isBindingElement = this.context.isBindingElement && t, this.context.isAssignmentTarget = this.context.isAssignmentTarget && n, this.context.firstCoverInitializedNameError = r || this.context.firstCoverInitializedNameError, i
                    }, e.prototype.consumeSemicolon = function() {
                        this.match(";") ? this.nextToken() : this.hasLineTerminator || (2 === this.lookahead.type || this.match("}") || this.throwUnexpectedToken(this.lookahead), this.lastMarker.index = this.startMarker.index, this.lastMarker.line = this.startMarker.line, this.lastMarker.column = this.startMarker.column)
                    }, e.prototype.parsePrimaryExpression = function() {
                        var e, t, n, r = this.createNode();
                        switch (this.lookahead.type) {
                            case 3:
                                (this.context.isModule || this.context.await) && "await" === this.lookahead.value && this.tolerateUnexpectedToken(this.lookahead), e = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(r, new s.Identifier(this.nextToken().value));
                                break;
                            case 6:
                            case 8:
                                this.context.strict && this.lookahead.octal && this.tolerateUnexpectedToken(this.lookahead, u.Messages.StrictOctalLiteral), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, t = this.nextToken(), n = this.getTokenRaw(t), e = this.finalize(r, new s.Literal(t.value, n));
                                break;
                            case 1:
                                this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, t = this.nextToken(), n = this.getTokenRaw(t), e = this.finalize(r, new s.Literal("true" === t.value, n));
                                break;
                            case 5:
                                this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, t = this.nextToken(), n = this.getTokenRaw(t), e = this.finalize(r, new s.Literal(null, n));
                                break;
                            case 10:
                                e = this.parseTemplateLiteral();
                                break;
                            case 7:
                                switch (this.lookahead.value) {
                                    case "(":
                                        this.context.isBindingElement = !1, e = this.inheritCoverGrammar(this.parseGroupExpression);
                                        break;
                                    case "[":
                                        e = this.inheritCoverGrammar(this.parseArrayInitializer);
                                        break;
                                    case "{":
                                        e = this.inheritCoverGrammar(this.parseObjectInitializer);
                                        break;
                                    case "/":
                                    case "/=":
                                        this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, this.scanner.index = this.startMarker.index, t = this.nextRegexToken(), n = this.getTokenRaw(t), e = this.finalize(r, new s.RegexLiteral(t.regex, n, t.pattern, t.flags));
                                        break;
                                    default:
                                        e = this.throwUnexpectedToken(this.nextToken())
                                }
                                break;
                            case 4:
                                !this.context.strict && this.context.allowYield && this.matchKeyword("yield") ? e = this.parseIdentifierName() : !this.context.strict && this.matchKeyword("let") ? e = this.finalize(r, new s.Identifier(this.nextToken().value)) : (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, this.matchKeyword("function") ? e = this.parseFunctionExpression() : this.matchKeyword("this") ? (this.nextToken(), e = this.finalize(r, new s.ThisExpression)) : e = this.matchKeyword("class") ? this.parseClassExpression() : this.throwUnexpectedToken(this.nextToken()));
                                break;
                            default:
                                e = this.throwUnexpectedToken(this.nextToken())
                        }
                        return e
                    }, e.prototype.parseSpreadElement = function() {
                        var e = this.createNode();
                        this.expect("...");
                        var t = this.inheritCoverGrammar(this.parseAssignmentExpression);
                        return this.finalize(e, new s.SpreadElement(t))
                    }, e.prototype.parseArrayInitializer = function() {
                        var e = this.createNode(),
                            t = [];
                        for (this.expect("["); !this.match("]");)
                            if (this.match(",")) this.nextToken(), t.push(null);
                            else if (this.match("...")) {
                            var n = this.parseSpreadElement();
                            this.match("]") || (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, this.expect(",")), t.push(n)
                        } else t.push(this.inheritCoverGrammar(this.parseAssignmentExpression)), this.match("]") || this.expect(",");
                        return this.expect("]"), this.finalize(e, new s.ArrayExpression(t))
                    }, e.prototype.parsePropertyMethod = function(e) {
                        this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                        var t = this.context.strict,
                            n = this.context.allowStrictDirective;
                        this.context.allowStrictDirective = e.simple;
                        var r = this.isolateCoverGrammar(this.parseFunctionSourceElements);
                        return this.context.strict && e.firstRestricted && this.tolerateUnexpectedToken(e.firstRestricted, e.message), this.context.strict && e.stricted && this.tolerateUnexpectedToken(e.stricted, e.message), this.context.strict = t, this.context.allowStrictDirective = n, r
                    }, e.prototype.parsePropertyMethodFunction = function() {
                        var e = this.createNode(),
                            t = this.context.allowYield;
                        this.context.allowYield = !0;
                        var n = this.parseFormalParameters(),
                            r = this.parsePropertyMethod(n);
                        return this.context.allowYield = t, this.finalize(e, new s.FunctionExpression(null, n.params, r, !1))
                    }, e.prototype.parsePropertyMethodAsyncFunction = function() {
                        var e = this.createNode(),
                            t = this.context.allowYield,
                            n = this.context.await;
                        this.context.allowYield = !1, this.context.await = !0;
                        var r = this.parseFormalParameters(),
                            i = this.parsePropertyMethod(r);
                        return this.context.allowYield = t, this.context.await = n, this.finalize(e, new s.AsyncFunctionExpression(null, r.params, i))
                    }, e.prototype.parseObjectPropertyKey = function() {
                        var e, t = this.createNode(),
                            n = this.nextToken();
                        switch (n.type) {
                            case 8:
                            case 6:
                                this.context.strict && n.octal && this.tolerateUnexpectedToken(n, u.Messages.StrictOctalLiteral);
                                var r = this.getTokenRaw(n);
                                e = this.finalize(t, new s.Literal(n.value, r));
                                break;
                            case 3:
                            case 1:
                            case 5:
                            case 4:
                                e = this.finalize(t, new s.Identifier(n.value));
                                break;
                            case 7:
                                "[" === n.value ? (e = this.isolateCoverGrammar(this.parseAssignmentExpression), this.expect("]")) : e = this.throwUnexpectedToken(n);
                                break;
                            default:
                                e = this.throwUnexpectedToken(n)
                        }
                        return e
                    }, e.prototype.isPropertyKey = function(e, t) {
                        return e.type === a.Syntax.Identifier && e.name === t || e.type === a.Syntax.Literal && e.value === t
                    }, e.prototype.parseObjectProperty = function(e) {
                        var t, n = this.createNode(),
                            r = this.lookahead,
                            i = null,
                            o = null,
                            a = !1,
                            c = !1,
                            l = !1,
                            h = !1;
                        if (3 === r.type) {
                            var p = r.value;
                            this.nextToken(), a = this.match("["), h = !(this.hasLineTerminator || "async" !== p || this.match(":") || this.match("(") || this.match("*") || this.match(",")), i = h ? this.parseObjectPropertyKey() : this.finalize(n, new s.Identifier(p))
                        } else this.match("*") ? this.nextToken() : (a = this.match("["), i = this.parseObjectPropertyKey());
                        var d = this.qualifiedPropertyName(this.lookahead);
                        if (3 === r.type && !h && "get" === r.value && d) t = "get", a = this.match("["), i = this.parseObjectPropertyKey(), this.context.allowYield = !1, o = this.parseGetterMethod();
                        else if (3 === r.type && !h && "set" === r.value && d) t = "set", a = this.match("["), i = this.parseObjectPropertyKey(), o = this.parseSetterMethod();
                        else if (7 === r.type && "*" === r.value && d) t = "init", a = this.match("["), i = this.parseObjectPropertyKey(), o = this.parseGeneratorMethod(), c = !0;
                        else if (i || this.throwUnexpectedToken(this.lookahead), t = "init", this.match(":") && !h) !a && this.isPropertyKey(i, "__proto__") && (e.value && this.tolerateError(u.Messages.DuplicateProtoProperty), e.value = !0), this.nextToken(), o = this.inheritCoverGrammar(this.parseAssignmentExpression);
                        else if (this.match("(")) o = h ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction(), c = !0;
                        else if (3 === r.type) {
                            var p = this.finalize(n, new s.Identifier(r.value));
                            if (this.match("=")) {
                                this.context.firstCoverInitializedNameError = this.lookahead, this.nextToken(), l = !0;
                                var f = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                o = this.finalize(n, new s.AssignmentPattern(p, f))
                            } else l = !0, o = p
                        } else this.throwUnexpectedToken(this.nextToken());
                        return this.finalize(n, new s.Property(t, i, a, o, c, l))
                    }, e.prototype.parseObjectInitializer = function() {
                        var e = this.createNode();
                        this.expect("{");
                        for (var t = [], n = {
                                value: !1
                            }; !this.match("}");) t.push(this.parseObjectProperty(n)), this.match("}") || this.expectCommaSeparator();
                        return this.expect("}"), this.finalize(e, new s.ObjectExpression(t))
                    }, e.prototype.parseTemplateHead = function() {
                        r.assert(this.lookahead.head, "Template literal must start with a template head");
                        var e = this.createNode(),
                            t = this.nextToken(),
                            n = t.value,
                            i = t.cooked;
                        return this.finalize(e, new s.TemplateElement({
                            raw: n,
                            cooked: i
                        }, t.tail))
                    }, e.prototype.parseTemplateElement = function() {
                        10 !== this.lookahead.type && this.throwUnexpectedToken();
                        var e = this.createNode(),
                            t = this.nextToken(),
                            n = t.value,
                            r = t.cooked;
                        return this.finalize(e, new s.TemplateElement({
                            raw: n,
                            cooked: r
                        }, t.tail))
                    }, e.prototype.parseTemplateLiteral = function() {
                        var e = this.createNode(),
                            t = [],
                            n = [],
                            r = this.parseTemplateHead();
                        for (n.push(r); !r.tail;) t.push(this.parseExpression()), r = this.parseTemplateElement(), n.push(r);
                        return this.finalize(e, new s.TemplateLiteral(n, t))
                    }, e.prototype.reinterpretExpressionAsPattern = function(e) {
                        switch (e.type) {
                            case a.Syntax.Identifier:
                            case a.Syntax.MemberExpression:
                            case a.Syntax.RestElement:
                            case a.Syntax.AssignmentPattern:
                                break;
                            case a.Syntax.SpreadElement:
                                e.type = a.Syntax.RestElement, this.reinterpretExpressionAsPattern(e.argument);
                                break;
                            case a.Syntax.ArrayExpression:
                                e.type = a.Syntax.ArrayPattern;
                                for (var t = 0; t < e.elements.length; t++) null !== e.elements[t] && this.reinterpretExpressionAsPattern(e.elements[t]);
                                break;
                            case a.Syntax.ObjectExpression:
                                e.type = a.Syntax.ObjectPattern;
                                for (var t = 0; t < e.properties.length; t++) this.reinterpretExpressionAsPattern(e.properties[t].value);
                                break;
                            case a.Syntax.AssignmentExpression:
                                e.type = a.Syntax.AssignmentPattern, delete e.operator, this.reinterpretExpressionAsPattern(e.left)
                        }
                    }, e.prototype.parseGroupExpression = function() {
                        var e;
                        if (this.expect("("), this.match(")")) this.nextToken(), this.match("=>") || this.expect("=>"), e = {
                            type: "ArrowParameterPlaceHolder",
                            params: [],
                            async: !1
                        };
                        else {
                            var t = this.lookahead,
                                n = [];
                            if (this.match("...")) e = this.parseRestElement(n), this.expect(")"), this.match("=>") || this.expect("=>"), e = {
                                type: "ArrowParameterPlaceHolder",
                                params: [e],
                                async: !1
                            };
                            else {
                                var r = !1;
                                if (this.context.isBindingElement = !0, e = this.inheritCoverGrammar(this.parseAssignmentExpression), this.match(",")) {
                                    var i = [];
                                    for (this.context.isAssignmentTarget = !1, i.push(e); 2 !== this.lookahead.type && this.match(",");) {
                                        if (this.nextToken(), this.match(")")) {
                                            this.nextToken();
                                            for (var u = 0; u < i.length; u++) this.reinterpretExpressionAsPattern(i[u]);
                                            r = !0, e = {
                                                type: "ArrowParameterPlaceHolder",
                                                params: i,
                                                async: !1
                                            }
                                        } else if (this.match("...")) {
                                            this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead), i.push(this.parseRestElement(n)), this.expect(")"), this.match("=>") || this.expect("=>"), this.context.isBindingElement = !1;
                                            for (var u = 0; u < i.length; u++) this.reinterpretExpressionAsPattern(i[u]);
                                            r = !0, e = {
                                                type: "ArrowParameterPlaceHolder",
                                                params: i,
                                                async: !1
                                            }
                                        } else i.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                                        if (r) break
                                    }
                                    r || (e = this.finalize(this.startNode(t), new s.SequenceExpression(i)))
                                }
                                if (!r) {
                                    if (this.expect(")"), this.match("=>") && (e.type === a.Syntax.Identifier && "yield" === e.name && (r = !0, e = {
                                            type: "ArrowParameterPlaceHolder",
                                            params: [e],
                                            async: !1
                                        }), !r)) {
                                        if (this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead), e.type === a.Syntax.SequenceExpression)
                                            for (var u = 0; u < e.expressions.length; u++) this.reinterpretExpressionAsPattern(e.expressions[u]);
                                        else this.reinterpretExpressionAsPattern(e);
                                        e = {
                                            type: "ArrowParameterPlaceHolder",
                                            params: e.type === a.Syntax.SequenceExpression ? e.expressions : [e],
                                            async: !1
                                        }
                                    }
                                    this.context.isBindingElement = !1
                                }
                            }
                        }
                        return e
                    }, e.prototype.parseArguments = function() {
                        this.expect("(");
                        var e = [];
                        if (!this.match(")"))
                            for (;;) {
                                var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
                                if (e.push(t), this.match(")")) break;
                                if (this.expectCommaSeparator(), this.match(")")) break
                            }
                        return this.expect(")"), e
                    }, e.prototype.isIdentifierName = function(e) {
                        return 3 === e.type || 4 === e.type || 1 === e.type || 5 === e.type
                    }, e.prototype.parseIdentifierName = function() {
                        var e = this.createNode(),
                            t = this.nextToken();
                        return this.isIdentifierName(t) || this.throwUnexpectedToken(t), this.finalize(e, new s.Identifier(t.value))
                    }, e.prototype.parseNewExpression = function() {
                        var e = this.createNode(),
                            t = this.parseIdentifierName();
                        r.assert("new" === t.name, "New expression must start with `new`");
                        var n;
                        if (this.match("."))
                            if (this.nextToken(), 3 === this.lookahead.type && this.context.inFunctionBody && "target" === this.lookahead.value) {
                                var i = this.parseIdentifierName();
                                n = new s.MetaProperty(t, i)
                            } else this.throwUnexpectedToken(this.lookahead);
                        else {
                            var u = this.isolateCoverGrammar(this.parseLeftHandSideExpression),
                                o = this.match("(") ? this.parseArguments() : [];
                            n = new s.NewExpression(u, o), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1
                        }
                        return this.finalize(e, n)
                    }, e.prototype.parseAsyncArgument = function() {
                        var e = this.parseAssignmentExpression();
                        return this.context.firstCoverInitializedNameError = null, e
                    }, e.prototype.parseAsyncArguments = function() {
                        this.expect("(");
                        var e = [];
                        if (!this.match(")"))
                            for (;;) {
                                var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
                                if (e.push(t), this.match(")")) break;
                                if (this.expectCommaSeparator(), this.match(")")) break
                            }
                        return this.expect(")"), e
                    }, e.prototype.parseLeftHandSideExpressionAllowCall = function() {
                        var e = this.lookahead,
                            t = this.matchContextualKeyword("async"),
                            n = this.context.allowIn;
                        this.context.allowIn = !0;
                        var r;
                        for (this.matchKeyword("super") && this.context.inFunctionBody ? (r = this.createNode(), this.nextToken(), r = this.finalize(r, new s.Super), this.match("(") || this.match(".") || this.match("[") || this.throwUnexpectedToken(this.lookahead)) : r = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);;)
                            if (this.match(".")) {
                                this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect(".");
                                var i = this.parseIdentifierName();
                                r = this.finalize(this.startNode(e), new s.StaticMemberExpression(r, i))
                            } else if (this.match("(")) {
                            var u = t && e.lineNumber === this.lookahead.lineNumber;
                            this.context.isBindingElement = !1, this.context.isAssignmentTarget = !1;
                            var o = u ? this.parseAsyncArguments() : this.parseArguments();
                            if (r = this.finalize(this.startNode(e), new s.CallExpression(r, o)), u && this.match("=>")) {
                                for (var a = 0; a < o.length; ++a) this.reinterpretExpressionAsPattern(o[a]);
                                r = {
                                    type: "ArrowParameterPlaceHolder",
                                    params: o,
                                    async: !0
                                }
                            }
                        } else if (this.match("[")) {
                            this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("[");
                            var i = this.isolateCoverGrammar(this.parseExpression);
                            this.expect("]"), r = this.finalize(this.startNode(e), new s.ComputedMemberExpression(r, i))
                        } else {
                            if (10 !== this.lookahead.type || !this.lookahead.head) break;
                            var c = this.parseTemplateLiteral();
                            r = this.finalize(this.startNode(e), new s.TaggedTemplateExpression(r, c))
                        }
                        return this.context.allowIn = n, r
                    }, e.prototype.parseSuper = function() {
                        var e = this.createNode();
                        return this.expectKeyword("super"), this.match("[") || this.match(".") || this.throwUnexpectedToken(this.lookahead), this.finalize(e, new s.Super)
                    }, e.prototype.parseLeftHandSideExpression = function() {
                        r.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
                        for (var e = this.startNode(this.lookahead), t = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);;)
                            if (this.match("[")) {
                                this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("[");
                                var n = this.isolateCoverGrammar(this.parseExpression);
                                this.expect("]"), t = this.finalize(e, new s.ComputedMemberExpression(t, n))
                            } else if (this.match(".")) {
                            this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect(".");
                            var n = this.parseIdentifierName();
                            t = this.finalize(e, new s.StaticMemberExpression(t, n))
                        } else {
                            if (10 !== this.lookahead.type || !this.lookahead.head) break;
                            var i = this.parseTemplateLiteral();
                            t = this.finalize(e, new s.TaggedTemplateExpression(t, i))
                        }
                        return t
                    }, e.prototype.parseUpdateExpression = function() {
                        var e, t = this.lookahead;
                        if (this.match("++") || this.match("--")) {
                            var n = this.startNode(t),
                                r = this.nextToken();
                            e = this.inheritCoverGrammar(this.parseUnaryExpression), this.context.strict && e.type === a.Syntax.Identifier && this.scanner.isRestrictedWord(e.name) && this.tolerateError(u.Messages.StrictLHSPrefix), this.context.isAssignmentTarget || this.tolerateError(u.Messages.InvalidLHSInAssignment);
                            var i = !0;
                            e = this.finalize(n, new s.UpdateExpression(r.value, e, i)), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1
                        } else if (e = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall), !this.hasLineTerminator && 7 === this.lookahead.type && (this.match("++") || this.match("--"))) {
                            this.context.strict && e.type === a.Syntax.Identifier && this.scanner.isRestrictedWord(e.name) && this.tolerateError(u.Messages.StrictLHSPostfix), this.context.isAssignmentTarget || this.tolerateError(u.Messages.InvalidLHSInAssignment), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                            var o = this.nextToken().value,
                                i = !1;
                            e = this.finalize(this.startNode(t), new s.UpdateExpression(o, e, i))
                        }
                        return e
                    }, e.prototype.parseAwaitExpression = function() {
                        var e = this.createNode();
                        this.nextToken();
                        var t = this.parseUnaryExpression();
                        return this.finalize(e, new s.AwaitExpression(t))
                    }, e.prototype.parseUnaryExpression = function() {
                        var e;
                        if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
                            var t = this.startNode(this.lookahead),
                                n = this.nextToken();
                            e = this.inheritCoverGrammar(this.parseUnaryExpression), e = this.finalize(t, new s.UnaryExpression(n.value, e)), this.context.strict && "delete" === e.operator && e.argument.type === a.Syntax.Identifier && this.tolerateError(u.Messages.StrictDelete), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1
                        } else e = this.context.await && this.matchContextualKeyword("await") ? this.parseAwaitExpression() : this.parseUpdateExpression();
                        return e
                    }, e.prototype.parseExponentiationExpression = function() {
                        var e = this.lookahead,
                            t = this.inheritCoverGrammar(this.parseUnaryExpression);
                        if (t.type !== a.Syntax.UnaryExpression && this.match("**")) {
                            this.nextToken(), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                            var n = t,
                                r = this.isolateCoverGrammar(this.parseExponentiationExpression);
                            t = this.finalize(this.startNode(e), new s.BinaryExpression("**", n, r))
                        }
                        return t
                    }, e.prototype.binaryPrecedence = function(e) {
                        var t = e.value;
                        return 7 === e.type ? this.operatorPrecedence[t] || 0 : 4 === e.type && ("instanceof" === t || this.context.allowIn && "in" === t) ? 7 : 0
                    }, e.prototype.parseBinaryExpression = function() {
                        var e = this.lookahead,
                            t = this.inheritCoverGrammar(this.parseExponentiationExpression),
                            n = this.lookahead,
                            r = this.binaryPrecedence(n);
                        if (r > 0) {
                            this.nextToken(), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                            for (var i = [e, this.lookahead], u = t, o = this.isolateCoverGrammar(this.parseExponentiationExpression), a = [u, n.value, o], c = [r];;) {
                                if ((r = this.binaryPrecedence(this.lookahead)) <= 0) break;
                                for (; a.length > 2 && r <= c[c.length - 1];) {
                                    o = a.pop();
                                    var l = a.pop();
                                    c.pop(), u = a.pop(), i.pop();
                                    var h = this.startNode(i[i.length - 1]);
                                    a.push(this.finalize(h, new s.BinaryExpression(l, u, o)))
                                }
                                a.push(this.nextToken().value), c.push(r), i.push(this.lookahead), a.push(this.isolateCoverGrammar(this.parseExponentiationExpression))
                            }
                            var p = a.length - 1;
                            t = a[p];
                            for (var d = i.pop(); p > 1;) {
                                var f = i.pop(),
                                    D = d && d.lineStart,
                                    h = this.startNode(f, D),
                                    l = a[p - 1];
                                t = this.finalize(h, new s.BinaryExpression(l, a[p - 2], t)), p -= 2, d = f
                            }
                        }
                        return t
                    }, e.prototype.parseConditionalExpression = function() {
                        var e = this.lookahead,
                            t = this.inheritCoverGrammar(this.parseBinaryExpression);
                        if (this.match("?")) {
                            this.nextToken();
                            var n = this.context.allowIn;
                            this.context.allowIn = !0;
                            var r = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            this.context.allowIn = n, this.expect(":");
                            var i = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            t = this.finalize(this.startNode(e), new s.ConditionalExpression(t, r, i)), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1
                        }
                        return t
                    }, e.prototype.checkPatternParam = function(e, t) {
                        switch (t.type) {
                            case a.Syntax.Identifier:
                                this.validateParam(e, t, t.name);
                                break;
                            case a.Syntax.RestElement:
                                this.checkPatternParam(e, t.argument);
                                break;
                            case a.Syntax.AssignmentPattern:
                                this.checkPatternParam(e, t.left);
                                break;
                            case a.Syntax.ArrayPattern:
                                for (var n = 0; n < t.elements.length; n++) null !== t.elements[n] && this.checkPatternParam(e, t.elements[n]);
                                break;
                            case a.Syntax.ObjectPattern:
                                for (var n = 0; n < t.properties.length; n++) this.checkPatternParam(e, t.properties[n].value)
                        }
                        e.simple = e.simple && t instanceof s.Identifier
                    }, e.prototype.reinterpretAsCoverFormalsList = function(e) {
                        var t, n = [e],
                            r = !1;
                        switch (e.type) {
                            case a.Syntax.Identifier:
                                break;
                            case "ArrowParameterPlaceHolder":
                                n = e.params, r = e.async;
                                break;
                            default:
                                return null
                        }
                        t = {
                            simple: !0,
                            paramSet: {}
                        };
                        for (var i = 0; i < n.length; ++i) {
                            var s = n[i];
                            s.type === a.Syntax.AssignmentPattern ? s.right.type === a.Syntax.YieldExpression && (s.right.argument && this.throwUnexpectedToken(this.lookahead), s.right.type = a.Syntax.Identifier, s.right.name = "yield", delete s.right.argument, delete s.right.delegate) : r && s.type === a.Syntax.Identifier && "await" === s.name && this.throwUnexpectedToken(this.lookahead), this.checkPatternParam(t, s), n[i] = s
                        }
                        if (this.context.strict || !this.context.allowYield)
                            for (var i = 0; i < n.length; ++i) {
                                var s = n[i];
                                s.type === a.Syntax.YieldExpression && this.throwUnexpectedToken(this.lookahead)
                            }
                        if (t.message === u.Messages.StrictParamDupe) {
                            var o = this.context.strict ? t.stricted : t.firstRestricted;
                            this.throwUnexpectedToken(o, t.message)
                        }
                        return {
                            simple: t.simple,
                            params: n,
                            stricted: t.stricted,
                            firstRestricted: t.firstRestricted,
                            message: t.message
                        }
                    }, e.prototype.parseAssignmentExpression = function() {
                        var e;
                        if (!this.context.allowYield && this.matchKeyword("yield")) e = this.parseYieldExpression();
                        else {
                            var t = this.lookahead,
                                n = t;
                            if (e = this.parseConditionalExpression(), 3 === n.type && n.lineNumber === this.lookahead.lineNumber && "async" === n.value && (3 === this.lookahead.type || this.matchKeyword("yield"))) {
                                var r = this.parsePrimaryExpression();
                                this.reinterpretExpressionAsPattern(r), e = {
                                    type: "ArrowParameterPlaceHolder",
                                    params: [r],
                                    async: !0
                                }
                            }
                            if ("ArrowParameterPlaceHolder" === e.type || this.match("=>")) {
                                this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                                var i = e.async,
                                    o = this.reinterpretAsCoverFormalsList(e);
                                if (o) {
                                    this.hasLineTerminator && this.tolerateUnexpectedToken(this.lookahead), this.context.firstCoverInitializedNameError = null;
                                    var c = this.context.strict,
                                        l = this.context.allowStrictDirective;
                                    this.context.allowStrictDirective = o.simple;
                                    var h = this.context.allowYield,
                                        p = this.context.await;
                                    this.context.allowYield = !0, this.context.await = i;
                                    var d = this.startNode(t);
                                    this.expect("=>");
                                    var f = void 0;
                                    if (this.match("{")) {
                                        var D = this.context.allowIn;
                                        this.context.allowIn = !0, f = this.parseFunctionSourceElements(), this.context.allowIn = D
                                    } else f = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                    var m = f.type !== a.Syntax.BlockStatement;
                                    this.context.strict && o.firstRestricted && this.throwUnexpectedToken(o.firstRestricted, o.message), this.context.strict && o.stricted && this.tolerateUnexpectedToken(o.stricted, o.message), e = i ? this.finalize(d, new s.AsyncArrowFunctionExpression(o.params, f, m)) : this.finalize(d, new s.ArrowFunctionExpression(o.params, f, m)), this.context.strict = c, this.context.allowStrictDirective = l, this.context.allowYield = h, this.context.await = p
                                }
                            } else if (this.matchAssign()) {
                                if (this.context.isAssignmentTarget || this.tolerateError(u.Messages.InvalidLHSInAssignment), this.context.strict && e.type === a.Syntax.Identifier) {
                                    var g = e;
                                    this.scanner.isRestrictedWord(g.name) && this.tolerateUnexpectedToken(n, u.Messages.StrictLHSAssignment), this.scanner.isStrictModeReservedWord(g.name) && this.tolerateUnexpectedToken(n, u.Messages.StrictReservedWord)
                                }
                                this.match("=") ? this.reinterpretExpressionAsPattern(e) : (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1), n = this.nextToken();
                                var A = n.value,
                                    C = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                e = this.finalize(this.startNode(t), new s.AssignmentExpression(A, e, C)), this.context.firstCoverInitializedNameError = null
                            }
                        }
                        return e
                    }, e.prototype.parseExpression = function() {
                        var e = this.lookahead,
                            t = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        if (this.match(",")) {
                            var n = [];
                            for (n.push(t); 2 !== this.lookahead.type && this.match(",");) this.nextToken(), n.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                            t = this.finalize(this.startNode(e), new s.SequenceExpression(n))
                        }
                        return t
                    }, e.prototype.parseStatementListItem = function() {
                        var e;
                        if (this.context.isAssignmentTarget = !0, this.context.isBindingElement = !0, 4 === this.lookahead.type) switch (this.lookahead.value) {
                            case "export":
                                this.context.isModule || this.tolerateUnexpectedToken(this.lookahead, u.Messages.IllegalExportDeclaration), e = this.parseExportDeclaration();
                                break;
                            case "import":
                                this.context.isModule || this.tolerateUnexpectedToken(this.lookahead, u.Messages.IllegalImportDeclaration), e = this.parseImportDeclaration();
                                break;
                            case "const":
                                e = this.parseLexicalDeclaration({
                                    inFor: !1
                                });
                                break;
                            case "function":
                                e = this.parseFunctionDeclaration();
                                break;
                            case "class":
                                e = this.parseClassDeclaration();
                                break;
                            case "let":
                                e = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({
                                    inFor: !1
                                }) : this.parseStatement();
                                break;
                            default:
                                e = this.parseStatement()
                        } else e = this.parseStatement();
                        return e
                    }, e.prototype.parseBlock = function() {
                        var e = this.createNode();
                        this.expect("{");
                        for (var t = [];;) {
                            if (this.match("}")) break;
                            t.push(this.parseStatementListItem())
                        }
                        return this.expect("}"), this.finalize(e, new s.BlockStatement(t))
                    }, e.prototype.parseLexicalBinding = function(e, t) {
                        var n = this.createNode(),
                            r = [],
                            i = this.parsePattern(r, e);
                        this.context.strict && i.type === a.Syntax.Identifier && this.scanner.isRestrictedWord(i.name) && this.tolerateError(u.Messages.StrictVarName);
                        var o = null;
                        return "const" === e ? this.matchKeyword("in") || this.matchContextualKeyword("of") || (this.match("=") ? (this.nextToken(), o = this.isolateCoverGrammar(this.parseAssignmentExpression)) : this.throwError(u.Messages.DeclarationMissingInitializer, "const")) : (!t.inFor && i.type !== a.Syntax.Identifier || this.match("=")) && (this.expect("="), o = this.isolateCoverGrammar(this.parseAssignmentExpression)), this.finalize(n, new s.VariableDeclarator(i, o))
                    }, e.prototype.parseBindingList = function(e, t) {
                        for (var n = [this.parseLexicalBinding(e, t)]; this.match(",");) this.nextToken(), n.push(this.parseLexicalBinding(e, t));
                        return n
                    }, e.prototype.isLexicalDeclaration = function() {
                        var e = this.scanner.saveState();
                        this.scanner.scanComments();
                        var t = this.scanner.lex();
                        return this.scanner.restoreState(e), 3 === t.type || 7 === t.type && "[" === t.value || 7 === t.type && "{" === t.value || 4 === t.type && "let" === t.value || 4 === t.type && "yield" === t.value
                    }, e.prototype.parseLexicalDeclaration = function(e) {
                        var t = this.createNode(),
                            n = this.nextToken().value;
                        r.assert("let" === n || "const" === n, "Lexical declaration must be either let or const");
                        var i = this.parseBindingList(n, e);
                        return this.consumeSemicolon(), this.finalize(t, new s.VariableDeclaration(i, n))
                    }, e.prototype.parseBindingRestElement = function(e, t) {
                        var n = this.createNode();
                        this.expect("...");
                        var r = this.parsePattern(e, t);
                        return this.finalize(n, new s.RestElement(r))
                    }, e.prototype.parseArrayPattern = function(e, t) {
                        var n = this.createNode();
                        this.expect("[");
                        for (var r = []; !this.match("]");)
                            if (this.match(",")) this.nextToken(), r.push(null);
                            else {
                                if (this.match("...")) {
                                    r.push(this.parseBindingRestElement(e, t));
                                    break
                                }
                                r.push(this.parsePatternWithDefault(e, t)), this.match("]") || this.expect(",")
                            } return this.expect("]"), this.finalize(n, new s.ArrayPattern(r))
                    }, e.prototype.parsePropertyPattern = function(e, t) {
                        var n, r, i = this.createNode(),
                            u = !1,
                            o = !1;
                        if (3 === this.lookahead.type) {
                            var a = this.lookahead;
                            n = this.parseVariableIdentifier();
                            var c = this.finalize(i, new s.Identifier(a.value));
                            if (this.match("=")) {
                                e.push(a), o = !0, this.nextToken();
                                var l = this.parseAssignmentExpression();
                                r = this.finalize(this.startNode(a), new s.AssignmentPattern(c, l))
                            } else this.match(":") ? (this.expect(":"), r = this.parsePatternWithDefault(e, t)) : (e.push(a), o = !0, r = c)
                        } else u = this.match("["), n = this.parseObjectPropertyKey(), this.expect(":"), r = this.parsePatternWithDefault(e, t);
                        return this.finalize(i, new s.Property("init", n, u, r, !1, o))
                    }, e.prototype.parseObjectPattern = function(e, t) {
                        var n = this.createNode(),
                            r = [];
                        for (this.expect("{"); !this.match("}");) r.push(this.parsePropertyPattern(e, t)), this.match("}") || this.expect(",");
                        return this.expect("}"), this.finalize(n, new s.ObjectPattern(r))
                    }, e.prototype.parsePattern = function(e, t) {
                        var n;
                        return this.match("[") ? n = this.parseArrayPattern(e, t) : this.match("{") ? n = this.parseObjectPattern(e, t) : (!this.matchKeyword("let") || "const" !== t && "let" !== t || this.tolerateUnexpectedToken(this.lookahead, u.Messages.LetInLexicalBinding), e.push(this.lookahead), n = this.parseVariableIdentifier(t)), n
                    }, e.prototype.parsePatternWithDefault = function(e, t) {
                        var n = this.lookahead,
                            r = this.parsePattern(e, t);
                        if (this.match("=")) {
                            this.nextToken();
                            var i = this.context.allowYield;
                            this.context.allowYield = !0;
                            var u = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            this.context.allowYield = i, r = this.finalize(this.startNode(n), new s.AssignmentPattern(r, u))
                        }
                        return r
                    }, e.prototype.parseVariableIdentifier = function(e) {
                        var t = this.createNode(),
                            n = this.nextToken();
                        return 4 === n.type && "yield" === n.value ? this.context.strict ? this.tolerateUnexpectedToken(n, u.Messages.StrictReservedWord) : this.context.allowYield || this.throwUnexpectedToken(n) : 3 !== n.type ? this.context.strict && 4 === n.type && this.scanner.isStrictModeReservedWord(n.value) ? this.tolerateUnexpectedToken(n, u.Messages.StrictReservedWord) : (this.context.strict || "let" !== n.value || "var" !== e) && this.throwUnexpectedToken(n) : (this.context.isModule || this.context.await) && 3 === n.type && "await" === n.value && this.tolerateUnexpectedToken(n), this.finalize(t, new s.Identifier(n.value))
                    }, e.prototype.parseVariableDeclaration = function(e) {
                        var t = this.createNode(),
                            n = [],
                            r = this.parsePattern(n, "var");
                        this.context.strict && r.type === a.Syntax.Identifier && this.scanner.isRestrictedWord(r.name) && this.tolerateError(u.Messages.StrictVarName);
                        var i = null;
                        return this.match("=") ? (this.nextToken(), i = this.isolateCoverGrammar(this.parseAssignmentExpression)) : r.type === a.Syntax.Identifier || e.inFor || this.expect("="), this.finalize(t, new s.VariableDeclarator(r, i))
                    }, e.prototype.parseVariableDeclarationList = function(e) {
                        var t = {
                                inFor: e.inFor
                            },
                            n = [];
                        for (n.push(this.parseVariableDeclaration(t)); this.match(",");) this.nextToken(), n.push(this.parseVariableDeclaration(t));
                        return n
                    }, e.prototype.parseVariableStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("var");
                        var t = this.parseVariableDeclarationList({
                            inFor: !1
                        });
                        return this.consumeSemicolon(), this.finalize(e, new s.VariableDeclaration(t, "var"))
                    }, e.prototype.parseEmptyStatement = function() {
                        var e = this.createNode();
                        return this.expect(";"), this.finalize(e, new s.EmptyStatement)
                    }, e.prototype.parseExpressionStatement = function() {
                        var e = this.createNode(),
                            t = this.parseExpression();
                        return this.consumeSemicolon(), this.finalize(e, new s.ExpressionStatement(t))
                    }, e.prototype.parseIfClause = function() {
                        return this.context.strict && this.matchKeyword("function") && this.tolerateError(u.Messages.StrictFunction), this.parseStatement()
                    }, e.prototype.parseIfStatement = function() {
                        var e, t = this.createNode(),
                            n = null;
                        this.expectKeyword("if"), this.expect("(");
                        var r = this.parseExpression();
                        return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()), e = this.finalize(this.createNode(), new s.EmptyStatement)) : (this.expect(")"), e = this.parseIfClause(), this.matchKeyword("else") && (this.nextToken(), n = this.parseIfClause())), this.finalize(t, new s.IfStatement(r, e, n))
                    }, e.prototype.parseDoWhileStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("do");
                        var t = this.context.inIteration;
                        this.context.inIteration = !0;
                        var n = this.parseStatement();
                        this.context.inIteration = t, this.expectKeyword("while"), this.expect("(");
                        var r = this.parseExpression();
                        return !this.match(")") && this.config.tolerant ? this.tolerateUnexpectedToken(this.nextToken()) : (this.expect(")"), this.match(";") && this.nextToken()), this.finalize(e, new s.DoWhileStatement(n, r))
                    }, e.prototype.parseWhileStatement = function() {
                        var e, t = this.createNode();
                        this.expectKeyword("while"), this.expect("(");
                        var n = this.parseExpression();
                        if (!this.match(")") && this.config.tolerant) this.tolerateUnexpectedToken(this.nextToken()), e = this.finalize(this.createNode(), new s.EmptyStatement);
                        else {
                            this.expect(")");
                            var r = this.context.inIteration;
                            this.context.inIteration = !0, e = this.parseStatement(), this.context.inIteration = r
                        }
                        return this.finalize(t, new s.WhileStatement(n, e))
                    }, e.prototype.parseForStatement = function() {
                        var e, t, n = null,
                            r = null,
                            i = null,
                            o = !0,
                            c = this.createNode();
                        if (this.expectKeyword("for"), this.expect("("), this.match(";")) this.nextToken();
                        else if (this.matchKeyword("var")) {
                            n = this.createNode(), this.nextToken();
                            var l = this.context.allowIn;
                            this.context.allowIn = !1;
                            var h = this.parseVariableDeclarationList({
                                inFor: !0
                            });
                            if (this.context.allowIn = l, 1 === h.length && this.matchKeyword("in")) {
                                var p = h[0];
                                p.init && (p.id.type === a.Syntax.ArrayPattern || p.id.type === a.Syntax.ObjectPattern || this.context.strict) && this.tolerateError(u.Messages.ForInOfLoopInitializer, "for-in"), n = this.finalize(n, new s.VariableDeclaration(h, "var")), this.nextToken(), e = n, t = this.parseExpression(), n = null
                            } else 1 === h.length && null === h[0].init && this.matchContextualKeyword("of") ? (n = this.finalize(n, new s.VariableDeclaration(h, "var")), this.nextToken(), e = n, t = this.parseAssignmentExpression(), n = null, o = !1) : (n = this.finalize(n, new s.VariableDeclaration(h, "var")), this.expect(";"))
                        } else if (this.matchKeyword("const") || this.matchKeyword("let")) {
                            n = this.createNode();
                            var d = this.nextToken().value;
                            if (this.context.strict || "in" !== this.lookahead.value) {
                                var l = this.context.allowIn;
                                this.context.allowIn = !1;
                                var h = this.parseBindingList(d, {
                                    inFor: !0
                                });
                                this.context.allowIn = l, 1 === h.length && null === h[0].init && this.matchKeyword("in") ? (n = this.finalize(n, new s.VariableDeclaration(h, d)), this.nextToken(), e = n, t = this.parseExpression(), n = null) : 1 === h.length && null === h[0].init && this.matchContextualKeyword("of") ? (n = this.finalize(n, new s.VariableDeclaration(h, d)), this.nextToken(), e = n, t = this.parseAssignmentExpression(), n = null, o = !1) : (this.consumeSemicolon(), n = this.finalize(n, new s.VariableDeclaration(h, d)))
                            } else n = this.finalize(n, new s.Identifier(d)), this.nextToken(), e = n, t = this.parseExpression(), n = null
                        } else {
                            var f = this.lookahead,
                                l = this.context.allowIn;
                            if (this.context.allowIn = !1, n = this.inheritCoverGrammar(this.parseAssignmentExpression), this.context.allowIn = l, this.matchKeyword("in")) this.context.isAssignmentTarget && n.type !== a.Syntax.AssignmentExpression || this.tolerateError(u.Messages.InvalidLHSInForIn), this.nextToken(), this.reinterpretExpressionAsPattern(n), e = n, t = this.parseExpression(), n = null;
                            else if (this.matchContextualKeyword("of")) this.context.isAssignmentTarget && n.type !== a.Syntax.AssignmentExpression || this.tolerateError(u.Messages.InvalidLHSInForLoop), this.nextToken(), this.reinterpretExpressionAsPattern(n), e = n, t = this.parseAssignmentExpression(), n = null, o = !1;
                            else {
                                if (this.match(",")) {
                                    for (var D = [n]; this.match(",");) this.nextToken(), D.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                                    n = this.finalize(this.startNode(f), new s.SequenceExpression(D))
                                }
                                this.expect(";")
                            }
                        }
                        void 0 === e && (this.match(";") || (r = this.parseExpression()), this.expect(";"), this.match(")") || (i = this.parseExpression()));
                        var m;
                        if (!this.match(")") && this.config.tolerant) this.tolerateUnexpectedToken(this.nextToken()), m = this.finalize(this.createNode(), new s.EmptyStatement);
                        else {
                            this.expect(")");
                            var g = this.context.inIteration;
                            this.context.inIteration = !0, m = this.isolateCoverGrammar(this.parseStatement), this.context.inIteration = g
                        }
                        return void 0 === e ? this.finalize(c, new s.ForStatement(n, r, i, m)) : o ? this.finalize(c, new s.ForInStatement(e, t, m)) : this.finalize(c, new s.ForOfStatement(e, t, m))
                    }, e.prototype.parseContinueStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("continue");
                        var t = null;
                        if (3 === this.lookahead.type && !this.hasLineTerminator) {
                            var n = this.parseVariableIdentifier();
                            t = n;
                            var r = "$" + n.name;
                            Object.prototype.hasOwnProperty.call(this.context.labelSet, r) || this.throwError(u.Messages.UnknownLabel, n.name)
                        }
                        return this.consumeSemicolon(), null !== t || this.context.inIteration || this.throwError(u.Messages.IllegalContinue), this.finalize(e, new s.ContinueStatement(t))
                    }, e.prototype.parseBreakStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("break");
                        var t = null;
                        if (3 === this.lookahead.type && !this.hasLineTerminator) {
                            var n = this.parseVariableIdentifier(),
                                r = "$" + n.name;
                            Object.prototype.hasOwnProperty.call(this.context.labelSet, r) || this.throwError(u.Messages.UnknownLabel, n.name), t = n
                        }
                        return this.consumeSemicolon(), null !== t || this.context.inIteration || this.context.inSwitch || this.throwError(u.Messages.IllegalBreak), this.finalize(e, new s.BreakStatement(t))
                    }, e.prototype.parseReturnStatement = function() {
                        this.context.inFunctionBody || this.tolerateError(u.Messages.IllegalReturn);
                        var e = this.createNode();
                        this.expectKeyword("return");
                        var t = !this.match(";") && !this.match("}") && !this.hasLineTerminator && 2 !== this.lookahead.type || 8 === this.lookahead.type || 10 === this.lookahead.type,
                            n = t ? this.parseExpression() : null;
                        return this.consumeSemicolon(), this.finalize(e, new s.ReturnStatement(n))
                    }, e.prototype.parseWithStatement = function() {
                        this.context.strict && this.tolerateError(u.Messages.StrictModeWith);
                        var e, t = this.createNode();
                        this.expectKeyword("with"), this.expect("(");
                        var n = this.parseExpression();
                        return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()), e = this.finalize(this.createNode(), new s.EmptyStatement)) : (this.expect(")"), e = this.parseStatement()), this.finalize(t, new s.WithStatement(n, e))
                    }, e.prototype.parseSwitchCase = function() {
                        var e, t = this.createNode();
                        this.matchKeyword("default") ? (this.nextToken(), e = null) : (this.expectKeyword("case"), e = this.parseExpression()), this.expect(":");
                        for (var n = [];;) {
                            if (this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")) break;
                            n.push(this.parseStatementListItem())
                        }
                        return this.finalize(t, new s.SwitchCase(e, n))
                    }, e.prototype.parseSwitchStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("switch"), this.expect("(");
                        var t = this.parseExpression();
                        this.expect(")");
                        var n = this.context.inSwitch;
                        this.context.inSwitch = !0;
                        var r = [],
                            i = !1;
                        for (this.expect("{");;) {
                            if (this.match("}")) break;
                            var o = this.parseSwitchCase();
                            null === o.test && (i && this.throwError(u.Messages.MultipleDefaultsInSwitch), i = !0), r.push(o)
                        }
                        return this.expect("}"), this.context.inSwitch = n, this.finalize(e, new s.SwitchStatement(t, r))
                    }, e.prototype.parseLabelledStatement = function() {
                        var e, t = this.createNode(),
                            n = this.parseExpression();
                        if (n.type === a.Syntax.Identifier && this.match(":")) {
                            this.nextToken();
                            var r = n,
                                i = "$" + r.name;
                            Object.prototype.hasOwnProperty.call(this.context.labelSet, i) && this.throwError(u.Messages.Redeclaration, "Label", r.name), this.context.labelSet[i] = !0;
                            var o = void 0;
                            if (this.matchKeyword("class")) this.tolerateUnexpectedToken(this.lookahead), o = this.parseClassDeclaration();
                            else if (this.matchKeyword("function")) {
                                var c = this.lookahead,
                                    l = this.parseFunctionDeclaration();
                                this.context.strict ? this.tolerateUnexpectedToken(c, u.Messages.StrictFunction) : l.generator && this.tolerateUnexpectedToken(c, u.Messages.GeneratorInLegacyContext), o = l
                            } else o = this.parseStatement();
                            delete this.context.labelSet[i], e = new s.LabeledStatement(r, o)
                        } else this.consumeSemicolon(), e = new s.ExpressionStatement(n);
                        return this.finalize(t, e)
                    }, e.prototype.parseThrowStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("throw"), this.hasLineTerminator && this.throwError(u.Messages.NewlineAfterThrow);
                        var t = this.parseExpression();
                        return this.consumeSemicolon(), this.finalize(e, new s.ThrowStatement(t))
                    }, e.prototype.parseCatchClause = function() {
                        var e = this.createNode();
                        this.expectKeyword("catch"), this.expect("("), this.match(")") && this.throwUnexpectedToken(this.lookahead);
                        for (var t = [], n = this.parsePattern(t), r = {}, i = 0; i < t.length; i++) {
                            var o = "$" + t[i].value;
                            Object.prototype.hasOwnProperty.call(r, o) && this.tolerateError(u.Messages.DuplicateBinding, t[i].value), r[o] = !0
                        }
                        this.context.strict && n.type === a.Syntax.Identifier && this.scanner.isRestrictedWord(n.name) && this.tolerateError(u.Messages.StrictCatchVariable), this.expect(")");
                        var c = this.parseBlock();
                        return this.finalize(e, new s.CatchClause(n, c))
                    }, e.prototype.parseFinallyClause = function() {
                        return this.expectKeyword("finally"), this.parseBlock()
                    }, e.prototype.parseTryStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("try");
                        var t = this.parseBlock(),
                            n = this.matchKeyword("catch") ? this.parseCatchClause() : null,
                            r = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
                        return n || r || this.throwError(u.Messages.NoCatchOrFinally), this.finalize(e, new s.TryStatement(t, n, r))
                    }, e.prototype.parseDebuggerStatement = function() {
                        var e = this.createNode();
                        return this.expectKeyword("debugger"), this.consumeSemicolon(), this.finalize(e, new s.DebuggerStatement)
                    }, e.prototype.parseStatement = function() {
                        var e;
                        switch (this.lookahead.type) {
                            case 1:
                            case 5:
                            case 6:
                            case 8:
                            case 10:
                            case 9:
                                e = this.parseExpressionStatement();
                                break;
                            case 7:
                                var t = this.lookahead.value;
                                e = "{" === t ? this.parseBlock() : "(" === t ? this.parseExpressionStatement() : ";" === t ? this.parseEmptyStatement() : this.parseExpressionStatement();
                                break;
                            case 3:
                                e = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
                                break;
                            case 4:
                                switch (this.lookahead.value) {
                                    case "break":
                                        e = this.parseBreakStatement();
                                        break;
                                    case "continue":
                                        e = this.parseContinueStatement();
                                        break;
                                    case "debugger":
                                        e = this.parseDebuggerStatement();
                                        break;
                                    case "do":
                                        e = this.parseDoWhileStatement();
                                        break;
                                    case "for":
                                        e = this.parseForStatement();
                                        break;
                                    case "function":
                                        e = this.parseFunctionDeclaration();
                                        break;
                                    case "if":
                                        e = this.parseIfStatement();
                                        break;
                                    case "return":
                                        e = this.parseReturnStatement();
                                        break;
                                    case "switch":
                                        e = this.parseSwitchStatement();
                                        break;
                                    case "throw":
                                        e = this.parseThrowStatement();
                                        break;
                                    case "try":
                                        e = this.parseTryStatement();
                                        break;
                                    case "var":
                                        e = this.parseVariableStatement();
                                        break;
                                    case "while":
                                        e = this.parseWhileStatement();
                                        break;
                                    case "with":
                                        e = this.parseWithStatement();
                                        break;
                                    default:
                                        e = this.parseExpressionStatement()
                                }
                                break;
                            default:
                                e = this.throwUnexpectedToken(this.lookahead)
                        }
                        return e
                    }, e.prototype.parseFunctionSourceElements = function() {
                        var e = this.createNode();
                        this.expect("{");
                        var t = this.parseDirectivePrologues(),
                            n = this.context.labelSet,
                            r = this.context.inIteration,
                            i = this.context.inSwitch,
                            u = this.context.inFunctionBody;
                        for (this.context.labelSet = {}, this.context.inIteration = !1, this.context.inSwitch = !1, this.context.inFunctionBody = !0; 2 !== this.lookahead.type && !this.match("}");) t.push(this.parseStatementListItem());
                        return this.expect("}"), this.context.labelSet = n, this.context.inIteration = r, this.context.inSwitch = i, this.context.inFunctionBody = u, this.finalize(e, new s.BlockStatement(t))
                    }, e.prototype.validateParam = function(e, t, n) {
                        var r = "$" + n;
                        this.context.strict ? (this.scanner.isRestrictedWord(n) && (e.stricted = t, e.message = u.Messages.StrictParamName), Object.prototype.hasOwnProperty.call(e.paramSet, r) && (e.stricted = t, e.message = u.Messages.StrictParamDupe)) : e.firstRestricted || (this.scanner.isRestrictedWord(n) ? (e.firstRestricted = t, e.message = u.Messages.StrictParamName) : this.scanner.isStrictModeReservedWord(n) ? (e.firstRestricted = t, e.message = u.Messages.StrictReservedWord) : Object.prototype.hasOwnProperty.call(e.paramSet, r) && (e.stricted = t, e.message = u.Messages.StrictParamDupe)), "function" == typeof Object.defineProperty ? Object.defineProperty(e.paramSet, r, {
                            value: !0,
                            enumerable: !0,
                            writable: !0,
                            configurable: !0
                        }) : e.paramSet[r] = !0
                    }, e.prototype.parseRestElement = function(e) {
                        var t = this.createNode();
                        this.expect("...");
                        var n = this.parsePattern(e);
                        return this.match("=") && this.throwError(u.Messages.DefaultRestParameter), this.match(")") || this.throwError(u.Messages.ParameterAfterRestParameter), this.finalize(t, new s.RestElement(n))
                    }, e.prototype.parseFormalParameter = function(e) {
                        for (var t = [], n = this.match("...") ? this.parseRestElement(t) : this.parsePatternWithDefault(t), r = 0; r < t.length; r++) this.validateParam(e, t[r], t[r].value);
                        e.simple = e.simple && n instanceof s.Identifier, e.params.push(n)
                    }, e.prototype.parseFormalParameters = function(e) {
                        var t;
                        if (t = {
                                simple: !0,
                                params: [],
                                firstRestricted: e
                            }, this.expect("("), !this.match(")"))
                            for (t.paramSet = {}; 2 !== this.lookahead.type && (this.parseFormalParameter(t), !this.match(")")) && (this.expect(","), !this.match(")")););
                        return this.expect(")"), {
                            simple: t.simple,
                            params: t.params,
                            stricted: t.stricted,
                            firstRestricted: t.firstRestricted,
                            message: t.message
                        }
                    }, e.prototype.matchAsyncFunction = function() {
                        var e = this.matchContextualKeyword("async");
                        if (e) {
                            var t = this.scanner.saveState();
                            this.scanner.scanComments();
                            var n = this.scanner.lex();
                            this.scanner.restoreState(t), e = t.lineNumber === n.lineNumber && 4 === n.type && "function" === n.value
                        }
                        return e
                    }, e.prototype.parseFunctionDeclaration = function(e) {
                        var t = this.createNode(),
                            n = this.matchContextualKeyword("async");
                        n && this.nextToken(), this.expectKeyword("function");
                        var r = !n && this.match("*");
                        r && this.nextToken();
                        var i, o = null,
                            a = null;
                        if (!e || !this.match("(")) {
                            var c = this.lookahead;
                            o = this.parseVariableIdentifier(), this.context.strict ? this.scanner.isRestrictedWord(c.value) && this.tolerateUnexpectedToken(c, u.Messages.StrictFunctionName) : this.scanner.isRestrictedWord(c.value) ? (a = c, i = u.Messages.StrictFunctionName) : this.scanner.isStrictModeReservedWord(c.value) && (a = c, i = u.Messages.StrictReservedWord)
                        }
                        var l = this.context.await,
                            h = this.context.allowYield;
                        this.context.await = n, this.context.allowYield = !r;
                        var p = this.parseFormalParameters(a),
                            d = p.params,
                            f = p.stricted;
                        a = p.firstRestricted, p.message && (i = p.message);
                        var D = this.context.strict,
                            m = this.context.allowStrictDirective;
                        this.context.allowStrictDirective = p.simple;
                        var g = this.parseFunctionSourceElements();
                        return this.context.strict && a && this.throwUnexpectedToken(a, i), this.context.strict && f && this.tolerateUnexpectedToken(f, i), this.context.strict = D, this.context.allowStrictDirective = m, this.context.await = l, this.context.allowYield = h, n ? this.finalize(t, new s.AsyncFunctionDeclaration(o, d, g)) : this.finalize(t, new s.FunctionDeclaration(o, d, g, r))
                    }, e.prototype.parseFunctionExpression = function() {
                        var e = this.createNode(),
                            t = this.matchContextualKeyword("async");
                        t && this.nextToken(), this.expectKeyword("function");
                        var n = !t && this.match("*");
                        n && this.nextToken();
                        var r, i, o = null,
                            a = this.context.await,
                            c = this.context.allowYield;
                        if (this.context.await = t, this.context.allowYield = !n, !this.match("(")) {
                            var l = this.lookahead;
                            o = this.context.strict || n || !this.matchKeyword("yield") ? this.parseVariableIdentifier() : this.parseIdentifierName(), this.context.strict ? this.scanner.isRestrictedWord(l.value) && this.tolerateUnexpectedToken(l, u.Messages.StrictFunctionName) : this.scanner.isRestrictedWord(l.value) ? (i = l, r = u.Messages.StrictFunctionName) : this.scanner.isStrictModeReservedWord(l.value) && (i = l, r = u.Messages.StrictReservedWord)
                        }
                        var h = this.parseFormalParameters(i),
                            p = h.params,
                            d = h.stricted;
                        i = h.firstRestricted, h.message && (r = h.message);
                        var f = this.context.strict,
                            D = this.context.allowStrictDirective;
                        this.context.allowStrictDirective = h.simple;
                        var m = this.parseFunctionSourceElements();
                        return this.context.strict && i && this.throwUnexpectedToken(i, r), this.context.strict && d && this.tolerateUnexpectedToken(d, r), this.context.strict = f, this.context.allowStrictDirective = D, this.context.await = a, this.context.allowYield = c, t ? this.finalize(e, new s.AsyncFunctionExpression(o, p, m)) : this.finalize(e, new s.FunctionExpression(o, p, m, n))
                    }, e.prototype.parseDirective = function() {
                        var e = this.lookahead,
                            t = this.createNode(),
                            n = this.parseExpression(),
                            r = n.type === a.Syntax.Literal ? this.getTokenRaw(e).slice(1, -1) : null;
                        return this.consumeSemicolon(), this.finalize(t, r ? new s.Directive(n, r) : new s.ExpressionStatement(n))
                    }, e.prototype.parseDirectivePrologues = function() {
                        for (var e = null, t = [];;) {
                            var n = this.lookahead;
                            if (8 !== n.type) break;
                            var r = this.parseDirective();
                            t.push(r);
                            var i = r.directive;
                            if ("string" != typeof i) break;
                            "use strict" === i ? (this.context.strict = !0, e && this.tolerateUnexpectedToken(e, u.Messages.StrictOctalLiteral), this.context.allowStrictDirective || this.tolerateUnexpectedToken(n, u.Messages.IllegalLanguageModeDirective)) : !e && n.octal && (e = n)
                        }
                        return t
                    }, e.prototype.qualifiedPropertyName = function(e) {
                        switch (e.type) {
                            case 3:
                            case 8:
                            case 1:
                            case 5:
                            case 6:
                            case 4:
                                return !0;
                            case 7:
                                return "[" === e.value
                        }
                        return !1
                    }, e.prototype.parseGetterMethod = function() {
                        var e = this.createNode(),
                            t = this.context.allowYield;
                        this.context.allowYield = !0;
                        var n = this.parseFormalParameters();
                        n.params.length > 0 && this.tolerateError(u.Messages.BadGetterArity);
                        var r = this.parsePropertyMethod(n);
                        return this.context.allowYield = t, this.finalize(e, new s.FunctionExpression(null, n.params, r, !1))
                    }, e.prototype.parseSetterMethod = function() {
                        var e = this.createNode(),
                            t = this.context.allowYield;
                        this.context.allowYield = !0;
                        var n = this.parseFormalParameters();
                        1 !== n.params.length ? this.tolerateError(u.Messages.BadSetterArity) : n.params[0] instanceof s.RestElement && this.tolerateError(u.Messages.BadSetterRestParameter);
                        var r = this.parsePropertyMethod(n);
                        return this.context.allowYield = t, this.finalize(e, new s.FunctionExpression(null, n.params, r, !1))
                    }, e.prototype.parseGeneratorMethod = function() {
                        var e = this.createNode(),
                            t = this.context.allowYield;
                        this.context.allowYield = !0;
                        var n = this.parseFormalParameters();
                        this.context.allowYield = !1;
                        var r = this.parsePropertyMethod(n);
                        return this.context.allowYield = t, this.finalize(e, new s.FunctionExpression(null, n.params, r, !0))
                    }, e.prototype.isStartOfExpression = function() {
                        var e = !0,
                            t = this.lookahead.value;
                        switch (this.lookahead.type) {
                            case 7:
                                e = "[" === t || "(" === t || "{" === t || "+" === t || "-" === t || "!" === t || "~" === t || "++" === t || "--" === t || "/" === t || "/=" === t;
                                break;
                            case 4:
                                e = "class" === t || "delete" === t || "function" === t || "let" === t || "new" === t || "super" === t || "this" === t || "typeof" === t || "void" === t || "yield" === t
                        }
                        return e
                    }, e.prototype.parseYieldExpression = function() {
                        var e = this.createNode();
                        this.expectKeyword("yield");
                        var t = null,
                            n = !1;
                        if (!this.hasLineTerminator) {
                            var r = this.context.allowYield;
                            this.context.allowYield = !1, n = this.match("*"), n ? (this.nextToken(), t = this.parseAssignmentExpression()) : this.isStartOfExpression() && (t = this.parseAssignmentExpression()), this.context.allowYield = r
                        }
                        return this.finalize(e, new s.YieldExpression(t, n))
                    }, e.prototype.parseClassElement = function(e) {
                        var t = this.lookahead,
                            n = this.createNode(),
                            r = "",
                            i = null,
                            o = null,
                            a = !1,
                            c = !1,
                            l = !1,
                            h = !1;
                        if (this.match("*")) this.nextToken();
                        else {
                            a = this.match("["), i = this.parseObjectPropertyKey();
                            if ("static" === i.name && (this.qualifiedPropertyName(this.lookahead) || this.match("*")) && (t = this.lookahead, l = !0, a = this.match("["), this.match("*") ? this.nextToken() : i = this.parseObjectPropertyKey()), 3 === t.type && !this.hasLineTerminator && "async" === t.value) {
                                var p = this.lookahead.value;
                                ":" !== p && "(" !== p && "*" !== p && (h = !0, t = this.lookahead, i = this.parseObjectPropertyKey(), 3 === t.type && "constructor" === t.value && this.tolerateUnexpectedToken(t, u.Messages.ConstructorIsAsync))
                            }
                        }
                        var d = this.qualifiedPropertyName(this.lookahead);
                        return 3 === t.type ? "get" === t.value && d ? (r = "get", a = this.match("["), i = this.parseObjectPropertyKey(), this.context.allowYield = !1, o = this.parseGetterMethod()) : "set" === t.value && d && (r = "set", a = this.match("["), i = this.parseObjectPropertyKey(), o = this.parseSetterMethod()) : 7 === t.type && "*" === t.value && d && (r = "init", a = this.match("["), i = this.parseObjectPropertyKey(), o = this.parseGeneratorMethod(), c = !0), !r && i && this.match("(") && (r = "init", o = h ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction(), c = !0), r || this.throwUnexpectedToken(this.lookahead), "init" === r && (r = "method"), a || (l && this.isPropertyKey(i, "prototype") && this.throwUnexpectedToken(t, u.Messages.StaticPrototype), !l && this.isPropertyKey(i, "constructor") && (("method" !== r || !c || o && o.generator) && this.throwUnexpectedToken(t, u.Messages.ConstructorSpecialMethod), e.value ? this.throwUnexpectedToken(t, u.Messages.DuplicateConstructor) : e.value = !0, r = "constructor")), this.finalize(n, new s.MethodDefinition(i, a, o, r, l))
                    }, e.prototype.parseClassElementList = function() {
                        var e = [],
                            t = {
                                value: !1
                            };
                        for (this.expect("{"); !this.match("}");) this.match(";") ? this.nextToken() : e.push(this.parseClassElement(t));
                        return this.expect("}"), e
                    }, e.prototype.parseClassBody = function() {
                        var e = this.createNode(),
                            t = this.parseClassElementList();
                        return this.finalize(e, new s.ClassBody(t))
                    }, e.prototype.parseClassDeclaration = function(e) {
                        var t = this.createNode(),
                            n = this.context.strict;
                        this.context.strict = !0, this.expectKeyword("class");
                        var r = e && 3 !== this.lookahead.type ? null : this.parseVariableIdentifier(),
                            i = null;
                        this.matchKeyword("extends") && (this.nextToken(), i = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));
                        var u = this.parseClassBody();
                        return this.context.strict = n, this.finalize(t, new s.ClassDeclaration(r, i, u))
                    }, e.prototype.parseClassExpression = function() {
                        var e = this.createNode(),
                            t = this.context.strict;
                        this.context.strict = !0, this.expectKeyword("class");
                        var n = 3 === this.lookahead.type ? this.parseVariableIdentifier() : null,
                            r = null;
                        this.matchKeyword("extends") && (this.nextToken(), r = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));
                        var i = this.parseClassBody();
                        return this.context.strict = t, this.finalize(e, new s.ClassExpression(n, r, i))
                    }, e.prototype.parseModule = function() {
                        this.context.strict = !0, this.context.isModule = !0, this.scanner.isModule = !0;
                        for (var e = this.createNode(), t = this.parseDirectivePrologues(); 2 !== this.lookahead.type;) t.push(this.parseStatementListItem());
                        return this.finalize(e, new s.Module(t))
                    }, e.prototype.parseScript = function() {
                        for (var e = this.createNode(), t = this.parseDirectivePrologues(); 2 !== this.lookahead.type;) t.push(this.parseStatementListItem());
                        return this.finalize(e, new s.Script(t))
                    }, e.prototype.parseModuleSpecifier = function() {
                        var e = this.createNode();
                        8 !== this.lookahead.type && this.throwError(u.Messages.InvalidModuleSpecifier);
                        var t = this.nextToken(),
                            n = this.getTokenRaw(t);
                        return this.finalize(e, new s.Literal(t.value, n))
                    }, e.prototype.parseImportSpecifier = function() {
                        var e, t, n = this.createNode();
                        return 3 === this.lookahead.type ? (e = this.parseVariableIdentifier(), t = e, this.matchContextualKeyword("as") && (this.nextToken(), t = this.parseVariableIdentifier())) : (e = this.parseIdentifierName(), t = e, this.matchContextualKeyword("as") ? (this.nextToken(), t = this.parseVariableIdentifier()) : this.throwUnexpectedToken(this.nextToken())), this.finalize(n, new s.ImportSpecifier(t, e))
                    }, e.prototype.parseNamedImports = function() {
                        this.expect("{");
                        for (var e = []; !this.match("}");) e.push(this.parseImportSpecifier()), this.match("}") || this.expect(",");
                        return this.expect("}"), e
                    }, e.prototype.parseImportDefaultSpecifier = function() {
                        var e = this.createNode(),
                            t = this.parseIdentifierName();
                        return this.finalize(e, new s.ImportDefaultSpecifier(t))
                    }, e.prototype.parseImportNamespaceSpecifier = function() {
                        var e = this.createNode();
                        this.expect("*"), this.matchContextualKeyword("as") || this.throwError(u.Messages.NoAsAfterImportNamespace), this.nextToken();
                        var t = this.parseIdentifierName();
                        return this.finalize(e, new s.ImportNamespaceSpecifier(t))
                    }, e.prototype.parseImportDeclaration = function() {
                        this.context.inFunctionBody && this.throwError(u.Messages.IllegalImportDeclaration);
                        var e = this.createNode();
                        this.expectKeyword("import");
                        var t, n = [];
                        if (8 === this.lookahead.type) t = this.parseModuleSpecifier();
                        else {
                            if (this.match("{") ? n = n.concat(this.parseNamedImports()) : this.match("*") ? n.push(this.parseImportNamespaceSpecifier()) : this.isIdentifierName(this.lookahead) && !this.matchKeyword("default") ? (n.push(this.parseImportDefaultSpecifier()), this.match(",") && (this.nextToken(), this.match("*") ? n.push(this.parseImportNamespaceSpecifier()) : this.match("{") ? n = n.concat(this.parseNamedImports()) : this.throwUnexpectedToken(this.lookahead))) : this.throwUnexpectedToken(this.nextToken()), !this.matchContextualKeyword("from")) {
                                var r = this.lookahead.value ? u.Messages.UnexpectedToken : u.Messages.MissingFromClause;
                                this.throwError(r, this.lookahead.value)
                            }
                            this.nextToken(), t = this.parseModuleSpecifier()
                        }
                        return this.consumeSemicolon(), this.finalize(e, new s.ImportDeclaration(n, t))
                    }, e.prototype.parseExportSpecifier = function() {
                        var e = this.createNode(),
                            t = this.parseIdentifierName(),
                            n = t;
                        return this.matchContextualKeyword("as") && (this.nextToken(), n = this.parseIdentifierName()), this.finalize(e, new s.ExportSpecifier(t, n))
                    }, e.prototype.parseExportDeclaration = function() {
                        this.context.inFunctionBody && this.throwError(u.Messages.IllegalExportDeclaration);
                        var e = this.createNode();
                        this.expectKeyword("export");
                        var t;
                        if (this.matchKeyword("default"))
                            if (this.nextToken(), this.matchKeyword("function")) {
                                var n = this.parseFunctionDeclaration(!0);
                                t = this.finalize(e, new s.ExportDefaultDeclaration(n))
                            } else if (this.matchKeyword("class")) {
                            var n = this.parseClassDeclaration(!0);
                            t = this.finalize(e, new s.ExportDefaultDeclaration(n))
                        } else if (this.matchContextualKeyword("async")) {
                            var n = this.matchAsyncFunction() ? this.parseFunctionDeclaration(!0) : this.parseAssignmentExpression();
                            t = this.finalize(e, new s.ExportDefaultDeclaration(n))
                        } else {
                            this.matchContextualKeyword("from") && this.throwError(u.Messages.UnexpectedToken, this.lookahead.value);
                            var n = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression();
                            this.consumeSemicolon(), t = this.finalize(e, new s.ExportDefaultDeclaration(n))
                        } else if (this.match("*")) {
                            if (this.nextToken(), !this.matchContextualKeyword("from")) {
                                var r = this.lookahead.value ? u.Messages.UnexpectedToken : u.Messages.MissingFromClause;
                                this.throwError(r, this.lookahead.value)
                            }
                            this.nextToken();
                            var i = this.parseModuleSpecifier();
                            this.consumeSemicolon(), t = this.finalize(e, new s.ExportAllDeclaration(i))
                        } else if (4 === this.lookahead.type) {
                            var n = void 0;
                            switch (this.lookahead.value) {
                                case "let":
                                case "const":
                                    n = this.parseLexicalDeclaration({
                                        inFor: !1
                                    });
                                    break;
                                case "var":
                                case "class":
                                case "function":
                                    n = this.parseStatementListItem();
                                    break;
                                default:
                                    this.throwUnexpectedToken(this.lookahead)
                            }
                            t = this.finalize(e, new s.ExportNamedDeclaration(n, [], null))
                        } else if (this.matchAsyncFunction()) {
                            var n = this.parseFunctionDeclaration();
                            t = this.finalize(e, new s.ExportNamedDeclaration(n, [], null))
                        } else {
                            var o = [],
                                a = null,
                                c = !1;
                            for (this.expect("{"); !this.match("}");) c = c || this.matchKeyword("default"), o.push(this.parseExportSpecifier()), this.match("}") || this.expect(",");
                            if (this.expect("}"), this.matchContextualKeyword("from")) this.nextToken(), a = this.parseModuleSpecifier(), this.consumeSemicolon();
                            else if (c) {
                                var r = this.lookahead.value ? u.Messages.UnexpectedToken : u.Messages.MissingFromClause;
                                this.throwError(r, this.lookahead.value)
                            } else this.consumeSemicolon();
                            t = this.finalize(e, new s.ExportNamedDeclaration(null, o, a))
                        }
                        return t
                    }, e
                }();
            t.Parser = l
        }, function(e, t) {
            "use strict";

            function n(e, t) {
                if (!e) throw new Error("ASSERT: " + t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assert = n
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e() {
                    this.errors = [], this.tolerant = !1
                }
                return e.prototype.recordError = function(e) {
                    this.errors.push(e)
                }, e.prototype.tolerate = function(e) {
                    if (!this.tolerant) throw e;
                    this.recordError(e)
                }, e.prototype.constructError = function(e, t) {
                    var n = new Error(e);
                    try {
                        throw n
                    } catch (e) {
                        Object.create && Object.defineProperty && (n = Object.create(e), Object.defineProperty(n, "column", {
                            value: t
                        }))
                    }
                    return n
                }, e.prototype.createError = function(e, t, n, r) {
                    var i = "Line " + t + ": " + r,
                        u = this.constructError(i, n);
                    return u.index = e, u.lineNumber = t, u.description = r, u
                }, e.prototype.throwError = function(e, t, n, r) {
                    throw this.createError(e, t, n, r)
                }, e.prototype.tolerateError = function(e, t, n, r) {
                    var i = this.createError(e, t, n, r);
                    if (!this.tolerant) throw i;
                    this.recordError(i)
                }, e
            }();
            t.ErrorHandler = n
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Messages = {
                BadGetterArity: "Getter must not have any formal parameters",
                BadSetterArity: "Setter must have exactly one formal parameter",
                BadSetterRestParameter: "Setter function argument must not be a rest parameter",
                ConstructorIsAsync: "Class constructor may not be an async method",
                ConstructorSpecialMethod: "Class constructor may not be an accessor",
                DeclarationMissingInitializer: "Missing initializer in %0 declaration",
                DefaultRestParameter: "Unexpected token =",
                DuplicateBinding: "Duplicate binding %0",
                DuplicateConstructor: "A class may only have one constructor",
                DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
                ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
                GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
                IllegalBreak: "Illegal break statement",
                IllegalContinue: "Illegal continue statement",
                IllegalExportDeclaration: "Unexpected token",
                IllegalImportDeclaration: "Unexpected token",
                IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
                IllegalReturn: "Illegal return statement",
                InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
                InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
                InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                InvalidLHSInForIn: "Invalid left-hand side in for-in",
                InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
                InvalidModuleSpecifier: "Unexpected token",
                InvalidRegExp: "Invalid regular expression",
                LetInLexicalBinding: "let is disallowed as a lexically bound name",
                MissingFromClause: "Unexpected token",
                MultipleDefaultsInSwitch: "More than one default clause in switch statement",
                NewlineAfterThrow: "Illegal newline after throw",
                NoAsAfterImportNamespace: "Unexpected token",
                NoCatchOrFinally: "Missing catch or finally after try",
                ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
                Redeclaration: "%0 '%1' has already been declared",
                StaticPrototype: "Classes may not have static property named prototype",
                StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
                StrictDelete: "Delete of an unqualified identifier in strict mode.",
                StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
                StrictFunctionName: "Function name may not be eval or arguments in strict mode",
                StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
                StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                StrictModeWith: "Strict mode code may not include a with statement",
                StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
                StrictParamDupe: "Strict mode function may not have duplicate parameter names",
                StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
                StrictReservedWord: "Use of future reserved word in strict mode",
                StrictVarName: "Variable name may not be eval or arguments in strict mode",
                TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
                UnexpectedEOS: "Unexpected end of input",
                UnexpectedIdentifier: "Unexpected identifier",
                UnexpectedNumber: "Unexpected number",
                UnexpectedReserved: "Unexpected reserved word",
                UnexpectedString: "Unexpected string",
                UnexpectedTemplate: "Unexpected quasi %0",
                UnexpectedToken: "Unexpected token %0",
                UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
                UnknownLabel: "Undefined label '%0'",
                UnterminatedRegExp: "Invalid regular expression: missing /"
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return "0123456789abcdef".indexOf(e.toLowerCase())
            }

            function i(e) {
                return "01234567".indexOf(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = n(9),
                s = n(4),
                o = n(11),
                a = function() {
                    function e(e, t) {
                        this.source = e, this.errorHandler = t, this.trackComment = !1, this.isModule = !1, this.length = e.length, this.index = 0, this.lineNumber = e.length > 0 ? 1 : 0, this.lineStart = 0, this.curlyStack = []
                    }
                    return e.prototype.saveState = function() {
                        return {
                            index: this.index,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart
                        }
                    }, e.prototype.restoreState = function(e) {
                        this.index = e.index, this.lineNumber = e.lineNumber, this.lineStart = e.lineStart
                    }, e.prototype.eof = function() {
                        return this.index >= this.length
                    }, e.prototype.throwUnexpectedToken = function(e) {
                        return void 0 === e && (e = o.Messages.UnexpectedTokenIllegal), this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, e)
                    }, e.prototype.tolerateUnexpectedToken = function(e) {
                        void 0 === e && (e = o.Messages.UnexpectedTokenIllegal), this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, e)
                    }, e.prototype.skipSingleLineComment = function(e) {
                        var t, n, r = [];
                        for (this.trackComment && (r = [], t = this.index - e, n = {
                                start: {
                                    line: this.lineNumber,
                                    column: this.index - this.lineStart - e
                                },
                                end: {}
                            }); !this.eof();) {
                            var i = this.source.charCodeAt(this.index);
                            if (++this.index, s.Character.isLineTerminator(i)) {
                                if (this.trackComment) {
                                    n.end = {
                                        line: this.lineNumber,
                                        column: this.index - this.lineStart - 1
                                    };
                                    var u = {
                                        multiLine: !1,
                                        slice: [t + e, this.index - 1],
                                        range: [t, this.index - 1],
                                        loc: n
                                    };
                                    r.push(u)
                                }
                                return 13 === i && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, r
                            }
                        }
                        if (this.trackComment) {
                            n.end = {
                                line: this.lineNumber,
                                column: this.index - this.lineStart
                            };
                            var u = {
                                multiLine: !1,
                                slice: [t + e, this.index],
                                range: [t, this.index],
                                loc: n
                            };
                            r.push(u)
                        }
                        return r
                    }, e.prototype.skipMultiLineComment = function() {
                        var e, t, n = [];
                        for (this.trackComment && (n = [], e = this.index - 2, t = {
                                start: {
                                    line: this.lineNumber,
                                    column: this.index - this.lineStart - 2
                                },
                                end: {}
                            }); !this.eof();) {
                            var r = this.source.charCodeAt(this.index);
                            if (s.Character.isLineTerminator(r)) 13 === r && 10 === this.source.charCodeAt(this.index + 1) && ++this.index, ++this.lineNumber, ++this.index, this.lineStart = this.index;
                            else if (42 === r) {
                                if (47 === this.source.charCodeAt(this.index + 1)) {
                                    if (this.index += 2, this.trackComment) {
                                        t.end = {
                                            line: this.lineNumber,
                                            column: this.index - this.lineStart
                                        };
                                        var i = {
                                            multiLine: !0,
                                            slice: [e + 2, this.index - 2],
                                            range: [e, this.index],
                                            loc: t
                                        };
                                        n.push(i)
                                    }
                                    return n
                                }++this.index
                            } else ++this.index
                        }
                        if (this.trackComment) {
                            t.end = {
                                line: this.lineNumber,
                                column: this.index - this.lineStart
                            };
                            var i = {
                                multiLine: !0,
                                slice: [e + 2, this.index],
                                range: [e, this.index],
                                loc: t
                            };
                            n.push(i)
                        }
                        return this.tolerateUnexpectedToken(), n
                    }, e.prototype.scanComments = function() {
                        var e;
                        this.trackComment && (e = []);
                        for (var t = 0 === this.index; !this.eof();) {
                            var n = this.source.charCodeAt(this.index);
                            if (s.Character.isWhiteSpace(n)) ++this.index;
                            else if (s.Character.isLineTerminator(n)) ++this.index, 13 === n && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, t = !0;
                            else if (47 === n)
                                if (47 === (n = this.source.charCodeAt(this.index + 1))) {
                                    this.index += 2;
                                    var r = this.skipSingleLineComment(2);
                                    this.trackComment && (e = e.concat(r)), t = !0
                                } else {
                                    if (42 !== n) break;
                                    this.index += 2;
                                    var r = this.skipMultiLineComment();
                                    this.trackComment && (e = e.concat(r))
                                }
                            else if (t && 45 === n) {
                                if (45 !== this.source.charCodeAt(this.index + 1) || 62 !== this.source.charCodeAt(this.index + 2)) break;
                                this.index += 3;
                                var r = this.skipSingleLineComment(3);
                                this.trackComment && (e = e.concat(r))
                            } else {
                                if (60 !== n || this.isModule) break;
                                if ("!--" !== this.source.slice(this.index + 1, this.index + 4)) break;
                                this.index += 4;
                                var r = this.skipSingleLineComment(4);
                                this.trackComment && (e = e.concat(r))
                            }
                        }
                        return e
                    }, e.prototype.isFutureReservedWord = function(e) {
                        switch (e) {
                            case "enum":
                            case "export":
                            case "import":
                            case "super":
                                return !0;
                            default:
                                return !1
                        }
                    }, e.prototype.isStrictModeReservedWord = function(e) {
                        switch (e) {
                            case "implements":
                            case "interface":
                            case "package":
                            case "private":
                            case "protected":
                            case "public":
                            case "static":
                            case "yield":
                            case "let":
                                return !0;
                            default:
                                return !1
                        }
                    }, e.prototype.isRestrictedWord = function(e) {
                        return "eval" === e || "arguments" === e
                    }, e.prototype.isKeyword = function(e) {
                        switch (e.length) {
                            case 2:
                                return "if" === e || "in" === e || "do" === e;
                            case 3:
                                return "var" === e || "for" === e || "new" === e || "try" === e || "let" === e;
                            case 4:
                                return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;
                            case 5:
                                return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;
                            case 6:
                                return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;
                            case 7:
                                return "default" === e || "finally" === e || "extends" === e;
                            case 8:
                                return "function" === e || "continue" === e || "debugger" === e;
                            case 10:
                                return "instanceof" === e;
                            default:
                                return !1
                        }
                    }, e.prototype.codePointAt = function(e) {
                        var t = this.source.charCodeAt(e);
                        if (t >= 55296 && t <= 56319) {
                            var n = this.source.charCodeAt(e + 1);
                            if (n >= 56320 && n <= 57343) {
                                t = 1024 * (t - 55296) + n - 56320 + 65536
                            }
                        }
                        return t
                    }, e.prototype.scanHexEscape = function(e) {
                        for (var t = "u" === e ? 4 : 2, n = 0, i = 0; i < t; ++i) {
                            if (this.eof() || !s.Character.isHexDigit(this.source.charCodeAt(this.index))) return null;
                            n = 16 * n + r(this.source[this.index++])
                        }
                        return String.fromCharCode(n)
                    }, e.prototype.scanUnicodeCodePointEscape = function() {
                        var e = this.source[this.index],
                            t = 0;
                        for ("}" === e && this.throwUnexpectedToken(); !this.eof() && (e = this.source[this.index++], s.Character.isHexDigit(e.charCodeAt(0)));) t = 16 * t + r(e);
                        return (t > 1114111 || "}" !== e) && this.throwUnexpectedToken(), s.Character.fromCodePoint(t)
                    }, e.prototype.getIdentifier = function() {
                        for (var e = this.index++; !this.eof();) {
                            var t = this.source.charCodeAt(this.index);
                            if (92 === t) return this.index = e, this.getComplexIdentifier();
                            if (t >= 55296 && t < 57343) return this.index = e, this.getComplexIdentifier();
                            if (!s.Character.isIdentifierPart(t)) break;
                            ++this.index
                        }
                        return this.source.slice(e, this.index)
                    }, e.prototype.getComplexIdentifier = function() {
                        var e = this.codePointAt(this.index),
                            t = s.Character.fromCodePoint(e);
                        this.index += t.length;
                        var n;
                        for (92 === e && (117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, n = this.scanUnicodeCodePointEscape()) : null !== (n = this.scanHexEscape("u")) && "\\" !== n && s.Character.isIdentifierStart(n.charCodeAt(0)) || this.throwUnexpectedToken(), t = n); !this.eof() && (e = this.codePointAt(this.index), s.Character.isIdentifierPart(e));) n = s.Character.fromCodePoint(e), t += n, this.index += n.length, 92 === e && (t = t.substr(0, t.length - 1), 117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, n = this.scanUnicodeCodePointEscape()) : null !== (n = this.scanHexEscape("u")) && "\\" !== n && s.Character.isIdentifierPart(n.charCodeAt(0)) || this.throwUnexpectedToken(), t += n);
                        return t
                    }, e.prototype.octalToDecimal = function(e) {
                        var t = "0" !== e,
                            n = i(e);
                        return !this.eof() && s.Character.isOctalDigit(this.source.charCodeAt(this.index)) && (t = !0, n = 8 * n + i(this.source[this.index++]), "0123".indexOf(e) >= 0 && !this.eof() && s.Character.isOctalDigit(this.source.charCodeAt(this.index)) && (n = 8 * n + i(this.source[this.index++]))), {
                            code: n,
                            octal: t
                        }
                    }, e.prototype.scanIdentifier = function() {
                        var e, t = this.index,
                            n = 92 === this.source.charCodeAt(t) ? this.getComplexIdentifier() : this.getIdentifier();
                        if (3 !== (e = 1 === n.length ? 3 : this.isKeyword(n) ? 4 : "null" === n ? 5 : "true" === n || "false" === n ? 1 : 3) && t + n.length !== this.index) {
                            var r = this.index;
                            this.index = t, this.tolerateUnexpectedToken(o.Messages.InvalidEscapedReservedWord), this.index = r
                        }
                        return {
                            type: e,
                            value: n,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: t,
                            end: this.index
                        }
                    }, e.prototype.scanPunctuator = function() {
                        var e = this.index,
                            t = this.source[this.index];
                        switch (t) {
                            case "(":
                            case "{":
                                "{" === t && this.curlyStack.push("{"), ++this.index;
                                break;
                            case ".":
                                ++this.index, "." === this.source[this.index] && "." === this.source[this.index + 1] && (this.index += 2, t = "...");
                                break;
                            case "}":
                                ++this.index, this.curlyStack.pop();
                                break;
                            case ")":
                            case ";":
                            case ",":
                            case "[":
                            case "]":
                            case ":":
                            case "?":
                            case "~":
                                ++this.index;
                                break;
                            default:
                                t = this.source.substr(this.index, 4), ">>>=" === t ? this.index += 4 : (t = t.substr(0, 3), "===" === t || "!==" === t || ">>>" === t || "<<=" === t || ">>=" === t || "**=" === t ? this.index += 3 : (t = t.substr(0, 2), "&&" === t || "||" === t || "==" === t || "!=" === t || "+=" === t || "-=" === t || "*=" === t || "/=" === t || "++" === t || "--" === t || "<<" === t || ">>" === t || "&=" === t || "|=" === t || "^=" === t || "%=" === t || "<=" === t || ">=" === t || "=>" === t || "**" === t ? this.index += 2 : (t = this.source[this.index], "<>=!+-*%&|^/".indexOf(t) >= 0 && ++this.index)))
                        }
                        return this.index === e && this.throwUnexpectedToken(), {
                            type: 7,
                            value: t,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }, e.prototype.scanHexLiteral = function(e) {
                        for (var t = ""; !this.eof() && s.Character.isHexDigit(this.source.charCodeAt(this.index));) t += this.source[this.index++];
                        return 0 === t.length && this.throwUnexpectedToken(), s.Character.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), {
                            type: 6,
                            value: parseInt("0x" + t, 16),
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }, e.prototype.scanBinaryLiteral = function(e) {
                        for (var t, n = ""; !this.eof() && ("0" === (t = this.source[this.index]) || "1" === t);) n += this.source[this.index++];
                        return 0 === n.length && this.throwUnexpectedToken(), this.eof() || (t = this.source.charCodeAt(this.index), (s.Character.isIdentifierStart(t) || s.Character.isDecimalDigit(t)) && this.throwUnexpectedToken()), {
                            type: 6,
                            value: parseInt(n, 2),
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }, e.prototype.scanOctalLiteral = function(e, t) {
                        var n = "",
                            r = !1;
                        for (s.Character.isOctalDigit(e.charCodeAt(0)) ? (r = !0, n = "0" + this.source[this.index++]) : ++this.index; !this.eof() && s.Character.isOctalDigit(this.source.charCodeAt(this.index));) n += this.source[this.index++];
                        return r || 0 !== n.length || this.throwUnexpectedToken(), (s.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || s.Character.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), {
                            type: 6,
                            value: parseInt(n, 8),
                            octal: r,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: t,
                            end: this.index
                        }
                    }, e.prototype.isImplicitOctalLiteral = function() {
                        for (var e = this.index + 1; e < this.length; ++e) {
                            var t = this.source[e];
                            if ("8" === t || "9" === t) return !1;
                            if (!s.Character.isOctalDigit(t.charCodeAt(0))) return !0
                        }
                        return !0
                    }, e.prototype.scanNumericLiteral = function() {
                        var e = this.index,
                            t = this.source[e];
                        u.assert(s.Character.isDecimalDigit(t.charCodeAt(0)) || "." === t, "Numeric literal must start with a decimal digit or a decimal point");
                        var n = "";
                        if ("." !== t) {
                            if (n = this.source[this.index++], t = this.source[this.index], "0" === n) {
                                if ("x" === t || "X" === t) return ++this.index, this.scanHexLiteral(e);
                                if ("b" === t || "B" === t) return ++this.index, this.scanBinaryLiteral(e);
                                if ("o" === t || "O" === t) return this.scanOctalLiteral(t, e);
                                if (t && s.Character.isOctalDigit(t.charCodeAt(0)) && this.isImplicitOctalLiteral()) return this.scanOctalLiteral(t, e)
                            }
                            for (; s.Character.isDecimalDigit(this.source.charCodeAt(this.index));) n += this.source[this.index++];
                            t = this.source[this.index]
                        }
                        if ("." === t) {
                            for (n += this.source[this.index++]; s.Character.isDecimalDigit(this.source.charCodeAt(this.index));) n += this.source[this.index++];
                            t = this.source[this.index]
                        }
                        if ("e" === t || "E" === t)
                            if (n += this.source[this.index++], t = this.source[this.index], "+" !== t && "-" !== t || (n += this.source[this.index++]), s.Character.isDecimalDigit(this.source.charCodeAt(this.index)))
                                for (; s.Character.isDecimalDigit(this.source.charCodeAt(this.index));) n += this.source[this.index++];
                            else this.throwUnexpectedToken();
                        return s.Character.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), {
                            type: 6,
                            value: parseFloat(n),
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }, e.prototype.scanStringLiteral = function() {
                        var e = this.index,
                            t = this.source[e];
                        u.assert("'" === t || '"' === t, "String literal must starts with a quote"), ++this.index;
                        for (var n = !1, r = ""; !this.eof();) {
                            var i = this.source[this.index++];
                            if (i === t) {
                                t = "";
                                break
                            }
                            if ("\\" === i)
                                if ((i = this.source[this.index++]) && s.Character.isLineTerminator(i.charCodeAt(0))) ++this.lineNumber, "\r" === i && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;
                                else switch (i) {
                                    case "u":
                                        if ("{" === this.source[this.index]) ++this.index, r += this.scanUnicodeCodePointEscape();
                                        else {
                                            var a = this.scanHexEscape(i);
                                            null === a && this.throwUnexpectedToken(), r += a
                                        }
                                        break;
                                    case "x":
                                        var c = this.scanHexEscape(i);
                                        null === c && this.throwUnexpectedToken(o.Messages.InvalidHexEscapeSequence), r += c;
                                        break;
                                    case "n":
                                        r += "\n";
                                        break;
                                    case "r":
                                        r += "\r";
                                        break;
                                    case "t":
                                        r += "\t";
                                        break;
                                    case "b":
                                        r += "\b";
                                        break;
                                    case "f":
                                        r += "\f";
                                        break;
                                    case "v":
                                        r += "\v";
                                        break;
                                    case "8":
                                    case "9":
                                        r += i, this.tolerateUnexpectedToken();
                                        break;
                                    default:
                                        if (i && s.Character.isOctalDigit(i.charCodeAt(0))) {
                                            var l = this.octalToDecimal(i);
                                            n = l.octal || n, r += String.fromCharCode(l.code)
                                        } else r += i
                                } else {
                                    if (s.Character.isLineTerminator(i.charCodeAt(0))) break;
                                    r += i
                                }
                        }
                        return "" !== t && (this.index = e, this.throwUnexpectedToken()), {
                            type: 8,
                            value: r,
                            octal: n,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }, e.prototype.scanTemplate = function() {
                        var e = "",
                            t = !1,
                            n = this.index,
                            r = "`" === this.source[n],
                            i = !1,
                            u = 2;
                        for (++this.index; !this.eof();) {
                            var a = this.source[this.index++];
                            if ("`" === a) {
                                u = 1, i = !0, t = !0;
                                break
                            }
                            if ("$" === a) {
                                if ("{" === this.source[this.index]) {
                                    this.curlyStack.push("${"), ++this.index, t = !0;
                                    break
                                }
                                e += a
                            } else if ("\\" === a)
                                if (a = this.source[this.index++], s.Character.isLineTerminator(a.charCodeAt(0))) ++this.lineNumber, "\r" === a && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;
                                else switch (a) {
                                    case "n":
                                        e += "\n";
                                        break;
                                    case "r":
                                        e += "\r";
                                        break;
                                    case "t":
                                        e += "\t";
                                        break;
                                    case "u":
                                        if ("{" === this.source[this.index]) ++this.index, e += this.scanUnicodeCodePointEscape();
                                        else {
                                            var c = this.index,
                                                l = this.scanHexEscape(a);
                                            null !== l ? e += l : (this.index = c, e += a)
                                        }
                                        break;
                                    case "x":
                                        var h = this.scanHexEscape(a);
                                        null === h && this.throwUnexpectedToken(o.Messages.InvalidHexEscapeSequence), e += h;
                                        break;
                                    case "b":
                                        e += "\b";
                                        break;
                                    case "f":
                                        e += "\f";
                                        break;
                                    case "v":
                                        e += "\v";
                                        break;
                                    default:
                                        "0" === a ? (s.Character.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(o.Messages.TemplateOctalLiteral), e += "\0") : s.Character.isOctalDigit(a.charCodeAt(0)) ? this.throwUnexpectedToken(o.Messages.TemplateOctalLiteral) : e += a
                                } else s.Character.isLineTerminator(a.charCodeAt(0)) ? (++this.lineNumber, "\r" === a && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index, e += "\n") : e += a
                        }
                        return t || this.throwUnexpectedToken(), r || this.curlyStack.pop(), {
                            type: 10,
                            value: this.source.slice(n + 1, this.index - u),
                            cooked: e,
                            head: r,
                            tail: i,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: n,
                            end: this.index
                        }
                    }, e.prototype.testRegExp = function(e, t) {
                        var n = e,
                            r = this;
                        t.indexOf("u") >= 0 && (n = n.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function(e, t, n) {
                            var i = parseInt(t || n, 16);
                            return i > 1114111 && r.throwUnexpectedToken(o.Messages.InvalidRegExp), i <= 65535 ? String.fromCharCode(i) : "￿"
                        }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "￿"));
                        try {
                            RegExp(n)
                        } catch (e) {
                            this.throwUnexpectedToken(o.Messages.InvalidRegExp)
                        }
                        try {
                            return new RegExp(e, t)
                        } catch (e) {
                            return null
                        }
                    }, e.prototype.scanRegExpBody = function() {
                        var e = this.source[this.index];
                        u.assert("/" === e, "Regular expression literal must start with a slash");
                        for (var t = this.source[this.index++], n = !1, r = !1; !this.eof();)
                            if (e = this.source[this.index++], t += e, "\\" === e) e = this.source[this.index++], s.Character.isLineTerminator(e.charCodeAt(0)) && this.throwUnexpectedToken(o.Messages.UnterminatedRegExp), t += e;
                            else if (s.Character.isLineTerminator(e.charCodeAt(0))) this.throwUnexpectedToken(o.Messages.UnterminatedRegExp);
                        else if (n) "]" === e && (n = !1);
                        else {
                            if ("/" === e) {
                                r = !0;
                                break
                            }
                            "[" === e && (n = !0)
                        }
                        return r || this.throwUnexpectedToken(o.Messages.UnterminatedRegExp), t.substr(1, t.length - 2)
                    }, e.prototype.scanRegExpFlags = function() {
                        for (var e = "", t = ""; !this.eof();) {
                            var n = this.source[this.index];
                            if (!s.Character.isIdentifierPart(n.charCodeAt(0))) break;
                            if (++this.index, "\\" !== n || this.eof()) t += n, e += n;
                            else if ("u" === (n = this.source[this.index])) {
                                ++this.index;
                                var r = this.index,
                                    i = this.scanHexEscape("u");
                                if (null !== i)
                                    for (t += i, e += "\\u"; r < this.index; ++r) e += this.source[r];
                                else this.index = r, t += "u", e += "\\u";
                                this.tolerateUnexpectedToken()
                            } else e += "\\", this.tolerateUnexpectedToken()
                        }
                        return t
                    }, e.prototype.scanRegExp = function() {
                        var e = this.index,
                            t = this.scanRegExpBody(),
                            n = this.scanRegExpFlags();
                        return {
                            type: 9,
                            value: "",
                            pattern: t,
                            flags: n,
                            regex: this.testRegExp(t, n),
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }, e.prototype.lex = function() {
                        if (this.eof()) return {
                            type: 2,
                            value: "",
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: this.index,
                            end: this.index
                        };
                        var e = this.source.charCodeAt(this.index);
                        return s.Character.isIdentifierStart(e) ? this.scanIdentifier() : 40 === e || 41 === e || 59 === e ? this.scanPunctuator() : 39 === e || 34 === e ? this.scanStringLiteral() : 46 === e ? s.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : s.Character.isDecimalDigit(e) ? this.scanNumericLiteral() : 96 === e || 125 === e && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : e >= 55296 && e < 57343 && s.Character.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator()
                    }, e
                }();
            t.Scanner = a
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TokenName = {}, t.TokenName[1] = "Boolean", t.TokenName[2] = "<end>", t.TokenName[3] = "Identifier", t.TokenName[4] = "Keyword", t.TokenName[5] = "Null", t.TokenName[6] = "Numeric", t.TokenName[7] = "Punctuator", t.TokenName[8] = "String", t.TokenName[9] = "RegularExpression", t.TokenName[10] = "Template"
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.XHTMLEntities = {
                quot: '"',
                amp: "&",
                apos: "'",
                gt: ">",
                nbsp: " ",
                iexcl: "¡",
                cent: "¢",
                pound: "£",
                curren: "¤",
                yen: "¥",
                brvbar: "¦",
                sect: "§",
                uml: "¨",
                copy: "©",
                ordf: "ª",
                laquo: "«",
                not: "¬",
                shy: "­",
                reg: "®",
                macr: "¯",
                deg: "°",
                plusmn: "±",
                sup2: "²",
                sup3: "³",
                acute: "´",
                micro: "µ",
                para: "¶",
                middot: "·",
                cedil: "¸",
                sup1: "¹",
                ordm: "º",
                raquo: "»",
                frac14: "¼",
                frac12: "½",
                frac34: "¾",
                iquest: "¿",
                Agrave: "À",
                Aacute: "Á",
                Acirc: "Â",
                Atilde: "Ã",
                Auml: "Ä",
                Aring: "Å",
                AElig: "Æ",
                Ccedil: "Ç",
                Egrave: "È",
                Eacute: "É",
                Ecirc: "Ê",
                Euml: "Ë",
                Igrave: "Ì",
                Iacute: "Í",
                Icirc: "Î",
                Iuml: "Ï",
                ETH: "Ð",
                Ntilde: "Ñ",
                Ograve: "Ò",
                Oacute: "Ó",
                Ocirc: "Ô",
                Otilde: "Õ",
                Ouml: "Ö",
                times: "×",
                Oslash: "Ø",
                Ugrave: "Ù",
                Uacute: "Ú",
                Ucirc: "Û",
                Uuml: "Ü",
                Yacute: "Ý",
                THORN: "Þ",
                szlig: "ß",
                agrave: "à",
                aacute: "á",
                acirc: "â",
                atilde: "ã",
                auml: "ä",
                aring: "å",
                aelig: "æ",
                ccedil: "ç",
                egrave: "è",
                eacute: "é",
                ecirc: "ê",
                euml: "ë",
                igrave: "ì",
                iacute: "í",
                icirc: "î",
                iuml: "ï",
                eth: "ð",
                ntilde: "ñ",
                ograve: "ò",
                oacute: "ó",
                ocirc: "ô",
                otilde: "õ",
                ouml: "ö",
                divide: "÷",
                oslash: "ø",
                ugrave: "ù",
                uacute: "ú",
                ucirc: "û",
                uuml: "ü",
                yacute: "ý",
                thorn: "þ",
                yuml: "ÿ",
                OElig: "Œ",
                oelig: "œ",
                Scaron: "Š",
                scaron: "š",
                Yuml: "Ÿ",
                fnof: "ƒ",
                circ: "ˆ",
                tilde: "˜",
                Alpha: "Α",
                Beta: "Β",
                Gamma: "Γ",
                Delta: "Δ",
                Epsilon: "Ε",
                Zeta: "Ζ",
                Eta: "Η",
                Theta: "Θ",
                Iota: "Ι",
                Kappa: "Κ",
                Lambda: "Λ",
                Mu: "Μ",
                Nu: "Ν",
                Xi: "Ξ",
                Omicron: "Ο",
                Pi: "Π",
                Rho: "Ρ",
                Sigma: "Σ",
                Tau: "Τ",
                Upsilon: "Υ",
                Phi: "Φ",
                Chi: "Χ",
                Psi: "Ψ",
                Omega: "Ω",
                alpha: "α",
                beta: "β",
                gamma: "γ",
                delta: "δ",
                epsilon: "ε",
                zeta: "ζ",
                eta: "η",
                theta: "θ",
                iota: "ι",
                kappa: "κ",
                lambda: "λ",
                mu: "μ",
                nu: "ν",
                xi: "ξ",
                omicron: "ο",
                pi: "π",
                rho: "ρ",
                sigmaf: "ς",
                sigma: "σ",
                tau: "τ",
                upsilon: "υ",
                phi: "φ",
                chi: "χ",
                psi: "ψ",
                omega: "ω",
                thetasym: "ϑ",
                upsih: "ϒ",
                piv: "ϖ",
                ensp: " ",
                emsp: " ",
                thinsp: " ",
                zwnj: "‌",
                zwj: "‍",
                lrm: "‎",
                rlm: "‏",
                ndash: "–",
                mdash: "—",
                lsquo: "‘",
                rsquo: "’",
                sbquo: "‚",
                ldquo: "“",
                rdquo: "”",
                bdquo: "„",
                dagger: "†",
                Dagger: "‡",
                bull: "•",
                hellip: "…",
                permil: "‰",
                prime: "′",
                Prime: "″",
                lsaquo: "‹",
                rsaquo: "›",
                oline: "‾",
                frasl: "⁄",
                euro: "€",
                image: "ℑ",
                weierp: "℘",
                real: "ℜ",
                trade: "™",
                alefsym: "ℵ",
                larr: "←",
                uarr: "↑",
                rarr: "→",
                darr: "↓",
                harr: "↔",
                crarr: "↵",
                lArr: "⇐",
                uArr: "⇑",
                rArr: "⇒",
                dArr: "⇓",
                hArr: "⇔",
                forall: "∀",
                part: "∂",
                exist: "∃",
                empty: "∅",
                nabla: "∇",
                isin: "∈",
                notin: "∉",
                ni: "∋",
                prod: "∏",
                sum: "∑",
                minus: "−",
                lowast: "∗",
                radic: "√",
                prop: "∝",
                infin: "∞",
                ang: "∠",
                and: "∧",
                or: "∨",
                cap: "∩",
                cup: "∪",
                int: "∫",
                there4: "∴",
                sim: "∼",
                cong: "≅",
                asymp: "≈",
                ne: "≠",
                equiv: "≡",
                le: "≤",
                ge: "≥",
                sub: "⊂",
                sup: "⊃",
                nsub: "⊄",
                sube: "⊆",
                supe: "⊇",
                oplus: "⊕",
                otimes: "⊗",
                perp: "⊥",
                sdot: "⋅",
                lceil: "⌈",
                rceil: "⌉",
                lfloor: "⌊",
                rfloor: "⌋",
                loz: "◊",
                spades: "♠",
                clubs: "♣",
                hearts: "♥",
                diams: "♦",
                lang: "⟨",
                rang: "⟩"
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(10),
                i = n(12),
                u = n(13),
                s = function() {
                    function e() {
                        this.values = [], this.curly = this.paren = -1
                    }
                    return e.prototype.beforeFunctionExpression = function(e) {
                        return ["(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "**=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "**", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!=="].indexOf(e) >= 0
                    }, e.prototype.isRegexStart = function() {
                        var e = this.values[this.values.length - 1],
                            t = null !== e;
                        switch (e) {
                            case "this":
                            case "]":
                                t = !1;
                                break;
                            case ")":
                                var n = this.values[this.paren - 1];
                                t = "if" === n || "while" === n || "for" === n || "with" === n;
                                break;
                            case "}":
                                if (t = !1, "function" === this.values[this.curly - 3]) {
                                    var r = this.values[this.curly - 4];
                                    t = !!r && !this.beforeFunctionExpression(r)
                                } else if ("function" === this.values[this.curly - 4]) {
                                    var r = this.values[this.curly - 5];
                                    t = !r || !this.beforeFunctionExpression(r)
                                }
                        }
                        return t
                    }, e.prototype.push = function(e) {
                        7 === e.type || 4 === e.type ? ("{" === e.value ? this.curly = this.values.length : "(" === e.value && (this.paren = this.values.length), this.values.push(e.value)) : this.values.push(null)
                    }, e
                }(),
                o = function() {
                    function e(e, t) {
                        this.errorHandler = new r.ErrorHandler, this.errorHandler.tolerant = !!t && ("boolean" == typeof t.tolerant && t.tolerant), this.scanner = new i.Scanner(e, this.errorHandler), this.scanner.trackComment = !!t && ("boolean" == typeof t.comment && t.comment), this.trackRange = !!t && ("boolean" == typeof t.range && t.range), this.trackLoc = !!t && ("boolean" == typeof t.loc && t.loc), this.buffer = [], this.reader = new s
                    }
                    return e.prototype.errors = function() {
                        return this.errorHandler.errors
                    }, e.prototype.getNextToken = function() {
                        if (0 === this.buffer.length) {
                            var e = this.scanner.scanComments();
                            if (this.scanner.trackComment)
                                for (var t = 0; t < e.length; ++t) {
                                    var n = e[t],
                                        r = this.scanner.source.slice(n.slice[0], n.slice[1]),
                                        i = {
                                            type: n.multiLine ? "BlockComment" : "LineComment",
                                            value: r
                                        };
                                    this.trackRange && (i.range = n.range), this.trackLoc && (i.loc = n.loc), this.buffer.push(i)
                                }
                            if (!this.scanner.eof()) {
                                var s = void 0;
                                this.trackLoc && (s = {
                                    start: {
                                        line: this.scanner.lineNumber,
                                        column: this.scanner.index - this.scanner.lineStart
                                    },
                                    end: {}
                                });
                                var o = "/" === this.scanner.source[this.scanner.index] && this.reader.isRegexStart(),
                                    a = o ? this.scanner.scanRegExp() : this.scanner.lex();
                                this.reader.push(a);
                                var c = {
                                    type: u.TokenName[a.type],
                                    value: this.scanner.source.slice(a.start, a.end)
                                };
                                if (this.trackRange && (c.range = [a.start, a.end]), this.trackLoc && (s.end = {
                                        line: this.scanner.lineNumber,
                                        column: this.scanner.index - this.scanner.lineStart
                                    }, c.loc = s), 9 === a.type) {
                                    var l = a.pattern,
                                        h = a.flags;
                                    c.regex = {
                                        pattern: l,
                                        flags: h
                                    }
                                }
                                this.buffer.push(c)
                            }
                        }
                        return this.buffer.shift()
                    }, e
                }();
            t.Tokenizer = o
        }])
    })
}, function(e, t, n) {
    var r, i;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    ! function(t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, u) {
        "use strict";

        function s(e, t, n) {
            n = n || pe;
            var r, i, u = n.createElement("script");
            if (u.text = e, t)
                for (r in Be)(i = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, i);
            n.head.appendChild(u).parentNode.removeChild(u)
        }

        function o(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Ae[Ce.call(e)] || "object" : typeof e
        }

        function a(e) {
            var t = !!e && "length" in e && e.length,
                n = o(e);
            return !ve(e) && !Se(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function c(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function l(e, t, n) {
            return ve(t) ? be.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? be.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? be.grep(e, function(e) {
                return ge.call(t, e) > -1 !== n
            }) : be.filter(t, e, n)
        }

        function h(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function p(e) {
            var t = {};
            return be.each(e.match(Re) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function d(e) {
            return e
        }

        function f(e) {
            throw e
        }

        function D(e, t, n, r) {
            var i;
            try {
                e && ve(i = e.promise) ? i.call(e).done(t).fail(n) : e && ve(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        function m() {
            pe.removeEventListener("DOMContentLoaded", m), n.removeEventListener("load", m), be.ready()
        }

        function g(e, t) {
            return t.toUpperCase()
        }

        function A(e) {
            return e.replace(qe, "ms-").replace(Xe, g)
        }

        function C() {
            this.expando = be.expando + C.uid++
        }

        function E(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ke.test(e) ? JSON.parse(e) : e)
        }

        function y(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(Ge, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = E(n)
                    } catch (e) {}
                    We.set(e, t, n)
                } else n = void 0;
            return n
        }

        function x(e, t, n, r) {
            var i, u, s = 20,
                o = r ? function() {
                    return r.cur()
                } : function() {
                    return be.css(e, t, "")
                },
                a = o(),
                c = n && n[3] || (be.cssNumber[t] ? "" : "px"),
                l = e.nodeType && (be.cssNumber[t] || "px" !== c && +a) && $e.exec(be.css(e, t));
            if (l && l[3] !== c) {
                for (a /= 2, c = c || l[3], l = +a || 1; s--;) be.style(e, t, l + c), (1 - u) * (1 - (u = o() / a || .5)) <= 0 && (s = 0), l /= u;
                l *= 2, be.style(e, t, l + c), n = n || []
            }
            return n && (l = +l || +a || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
        }

        function F(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = rt[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = be.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), rt[r] = i, i)
        }

        function v(e, t) {
            for (var n, r, i = [], u = 0, s = e.length; u < s; u++) r = e[u], r.style && (n = r.style.display, t ? ("none" === n && (i[u] = Je.get(r, "display") || null, i[u] || (r.style.display = "")), "" === r.style.display && tt(r) && (i[u] = F(r))) : "none" !== n && (i[u] = "none", Je.set(r, "display", n)));
            for (u = 0; u < s; u++) null != i[u] && (e[u].style.display = i[u]);
            return e
        }

        function S(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && c(e, t) ? be.merge([e], n) : n
        }

        function B(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Je.set(e[n], "globalEval", !t || Je.get(t[n], "globalEval"))
        }

        function b(e, t, n, r, i) {
            for (var u, s, a, c, l, h, p = t.createDocumentFragment(), d = [], f = 0, D = e.length; f < D; f++)
                if ((u = e[f]) || 0 === u)
                    if ("object" === o(u)) be.merge(d, u.nodeType ? [u] : u);
                    else if (at.test(u)) {
                for (s = s || p.appendChild(t.createElement("div")), a = (ut.exec(u) || ["", ""])[1].toLowerCase(), c = ot[a] || ot._default, s.innerHTML = c[1] + be.htmlPrefilter(u) + c[2], h = c[0]; h--;) s = s.lastChild;
                be.merge(d, s.childNodes), s = p.firstChild, s.textContent = ""
            } else d.push(t.createTextNode(u));
            for (p.textContent = "", f = 0; u = d[f++];)
                if (r && be.inArray(u, r) > -1) i && i.push(u);
                else if (l = Ze(u), s = S(p.appendChild(u), "script"), l && B(s), n)
                for (h = 0; u = s[h++];) st.test(u.type || "") && n.push(u);
            return p
        }

        function w() {
            return !0
        }

        function k() {
            return !1
        }

        function T(e, t) {
            return e === N() == ("focus" === t)
        }

        function N() {
            try {
                return pe.activeElement
            } catch (e) {}
        }

        function M(e, t, n, r, i, u) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (o in t) M(e, o, n, r, t[o], u);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = k;
            else if (!i) return e;
            return 1 === u && (s = i, i = function(e) {
                return be().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = be.guid++)), e.each(function() {
                be.event.add(this, t, i, r, n)
            })
        }

        function _(e, t, n) {
            if (!n) return void(void 0 === Je.get(e, t) && be.event.add(e, t, w));
            Je.set(e, t, !1), be.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, i, u = Je.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (u.length)(be.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (u = fe.call(arguments), Je.set(this, t, u), r = n(this, t), this[t](), i = Je.get(this, t), u !== i || r ? Je.set(this, t, !1) : i = {}, u !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                    } else u.length && (Je.set(this, t, {
                        value: be.event.trigger(be.extend(u[0], be.Event.prototype), u.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })
        }

        function L(e, t) {
            return c(e, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") ? be(e).children("tbody")[0] || e : e
        }

        function I(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function P(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function O(e, t) {
            var n, r, i, u, s, o, a, c;
            if (1 === t.nodeType) {
                if (Je.hasData(e) && (u = Je.access(e), s = Je.set(t, u), c = u.events)) {
                    delete s.handle, s.events = {};
                    for (i in c)
                        for (n = 0, r = c[i].length; n < r; n++) be.event.add(t, i, c[i][n])
                }
                We.hasData(e) && (o = We.access(e), a = be.extend({}, o), We.set(t, a))
            }
        }

        function R(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && it.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function j(e, t, n, r) {
            t = De.apply([], t);
            var i, u, o, a, c, l, h = 0,
                p = e.length,
                d = p - 1,
                f = t[0],
                D = ve(f);
            if (D || p > 1 && "string" == typeof f && !Fe.checkClone && ft.test(f)) return e.each(function(i) {
                var u = e.eq(i);
                D && (t[0] = f.call(this, i, u.html())), j(u, t, n, r)
            });
            if (p && (i = b(t, e[0].ownerDocument, !1, e, r), u = i.firstChild, 1 === i.childNodes.length && (i = u), u || r)) {
                for (o = be.map(S(i, "script"), I), a = o.length; h < p; h++) c = i, h !== d && (c = be.clone(c, !0, !0), a && be.merge(o, S(c, "script"))), n.call(e[h], c, h);
                if (a)
                    for (l = o[o.length - 1].ownerDocument, be.map(o, P), h = 0; h < a; h++) c = o[h], st.test(c.type || "") && !Je.access(c, "globalEval") && be.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? be._evalUrl && !c.noModule && be._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }) : s(c.textContent.replace(Dt, ""), c, l))
            }
            return e
        }

        function U(e, t, n) {
            for (var r, i = t ? be.filter(t, e) : e, u = 0; null != (r = i[u]); u++) n || 1 !== r.nodeType || be.cleanData(S(r)), r.parentNode && (n && Ze(r) && B(S(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        function z(e, t, n) {
            var r, i, u, s, o = e.style;
            return n = n || gt(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || Ze(e) || (s = be.style(e, t)), !Fe.pixelBoxStyles() && mt.test(s) && At.test(t) && (r = o.width, i = o.minWidth, u = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = r, o.minWidth = i, o.maxWidth = u)), void 0 !== s ? s + "" : s
        }

        function q(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function X(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ct.length; n--;)
                if ((e = Ct[n] + t) in Et) return e
        }

        function H(e) {
            var t = be.cssProps[e] || yt[e];
            return t || (e in Et ? e : yt[e] = X(e) || e)
        }

        function J(e, t, n) {
            var r = $e.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function W(e, t, n, r, i, u) {
            var s = "width" === t ? 1 : 0,
                o = 0,
                a = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (a += be.css(e, n + Ye[s], !0, i)), r ? ("content" === n && (a -= be.css(e, "padding" + Ye[s], !0, i)), "margin" !== n && (a -= be.css(e, "border" + Ye[s] + "Width", !0, i))) : (a += be.css(e, "padding" + Ye[s], !0, i), "padding" !== n ? a += be.css(e, "border" + Ye[s] + "Width", !0, i) : o += be.css(e, "border" + Ye[s] + "Width", !0, i));
            return !r && u >= 0 && (a += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - u - a - o - .5)) || 0), a
        }

        function K(e, t, n) {
            var r = gt(e),
                i = !Fe.boxSizingReliable() || n,
                u = i && "border-box" === be.css(e, "boxSizing", !1, r),
                s = u,
                o = z(e, t, r),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (mt.test(o)) {
                if (!n) return o;
                o = "auto"
            }
            return (!Fe.boxSizingReliable() && u || "auto" === o || !parseFloat(o) && "inline" === be.css(e, "display", !1, r)) && e.getClientRects().length && (u = "border-box" === be.css(e, "boxSizing", !1, r), (s = a in e) && (o = e[a])), (o = parseFloat(o) || 0) + W(e, t, n || (u ? "border" : "content"), s, r, o) + "px"
        }

        function G(e, t, n, r, i) {
            return new G.prototype.init(e, t, n, r, i)
        }

        function V() {
            bt && (!1 === pe.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(V) : n.setTimeout(V, be.fx.interval), be.fx.tick())
        }

        function $() {
            return n.setTimeout(function() {
                Bt = void 0
            }), Bt = Date.now()
        }

        function Y(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Ye[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function Q(e, t, n) {
            for (var r, i = (te.tweeners[t] || []).concat(te.tweeners["*"]), u = 0, s = i.length; u < s; u++)
                if (r = i[u].call(n, t, e)) return r
        }

        function Z(e, t, n) {
            var r, i, u, s, o, a, c, l, h = "width" in t || "height" in t,
                p = this,
                d = {},
                f = e.style,
                D = e.nodeType && tt(e),
                m = Je.get(e, "fxshow");
            n.queue || (s = be._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
                s.unqueued || o()
            }), s.unqueued++, p.always(function() {
                p.always(function() {
                    s.unqueued--, be.queue(e, "fx").length || s.empty.fire()
                })
            }));
            for (r in t)
                if (i = t[r], wt.test(i)) {
                    if (delete t[r], u = u || "toggle" === i, i === (D ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        D = !0
                    }
                    d[r] = m && m[r] || be.style(e, r)
                } if ((a = !be.isEmptyObject(t)) || !be.isEmptyObject(d)) {
                h && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = m && m.display, null == c && (c = Je.get(e, "display")), l = be.css(e, "display"), "none" === l && (c ? l = c : (v([e], !0), c = e.style.display || c, l = be.css(e, "display"), v([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === be.css(e, "float") && (a || (p.done(function() {
                    f.display = c
                }), null == c && (l = f.display, c = "none" === l ? "" : l)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), a = !1;
                for (r in d) a || (m ? "hidden" in m && (D = m.hidden) : m = Je.access(e, "fxshow", {
                    display: c
                }), u && (m.hidden = !D), D && v([e], !0), p.done(function() {
                    D || v([e]), Je.remove(e, "fxshow");
                    for (r in d) be.style(e, r, d[r])
                })), a = Q(D ? m[r] : 0, r, p), r in m || (m[r] = a.start, D && (a.end = a.start, a.start = 0))
            }
        }

        function ee(e, t) {
            var n, r, i, u, s;
            for (n in e)
                if (r = A(n), i = t[r], u = e[n], Array.isArray(u) && (i = u[1], u = e[n] = u[0]), n !== r && (e[r] = u, delete e[n]), (s = be.cssHooks[r]) && "expand" in s) {
                    u = s.expand(u), delete e[r];
                    for (n in u) n in e || (e[n] = u[n], t[n] = i)
                } else t[r] = i
        }

        function te(e, t, n) {
            var r, i, u = 0,
                s = te.prefilters.length,
                o = be.Deferred().always(function() {
                    delete a.elem
                }),
                a = function() {
                    if (i) return !1;
                    for (var t = Bt || $(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, u = 1 - r, s = 0, a = c.tweens.length; s < a; s++) c.tweens[s].run(u);
                    return o.notifyWith(e, [c, u, n]), u < 1 && a ? n : (a || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1)
                },
                c = o.promise({
                    elem: e,
                    props: be.extend({}, t),
                    opts: be.extend(!0, {
                        specialEasing: {},
                        easing: be.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Bt || $(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = be.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) c.tweens[n].run(1);
                        return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this
                    }
                }),
                l = c.props;
            for (ee(l, c.opts.specialEasing); u < s; u++)
                if (r = te.prefilters[u].call(c, e, l, c.opts)) return ve(r.stop) && (be._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
            return be.map(l, Q, c), ve(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), be.fx.timer(be.extend(a, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        function ne(e) {
            return (e.match(Re) || []).join(" ")
        }

        function re(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function ie(e) {
            return Array.isArray(e) ? e : "string" == typeof e ? e.match(Re) || [] : []
        }

        function ue(e, t, n, r) {
            var i;
            if (Array.isArray(t)) be.each(t, function(t, i) {
                n || Ut.test(e) ? r(e, i) : ue(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== o(t)) r(e, t);
            else
                for (i in t) ue(e + "[" + i + "]", t[i], n, r)
        }

        function se(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    u = t.toLowerCase().match(Re) || [];
                if (ve(n))
                    for (; r = u[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function oe(e, t, n, r) {
            function i(o) {
                var a;
                return u[o] = !0, be.each(e[o] || [], function(e, o) {
                    var c = o(t, n, r);
                    return "string" != typeof c || s || u[c] ? s ? !(a = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                }), a
            }
            var u = {},
                s = e === Qt;
            return i(t.dataTypes[0]) || !u["*"] && i("*")
        }

        function ae(e, t) {
            var n, r, i = be.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && be.extend(!0, e, r), e
        }

        function ce(e, t, n) {
            for (var r, i, u, s, o = e.contents, a = e.dataTypes;
                "*" === a[0];) a.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (i in o)
                    if (o[i] && o[i].test(r)) {
                        a.unshift(i);
                        break
                    } if (a[0] in n) u = a[0];
            else {
                for (i in n) {
                    if (!a[0] || e.converters[i + " " + a[0]]) {
                        u = i;
                        break
                    }
                    s || (s = i)
                }
                u = u || s
            }
            if (u) return u !== a[0] && a.unshift(u), n[u]
        }

        function le(e, t, n, r) {
            var i, u, s, o, a, c = {},
                l = e.dataTypes.slice();
            if (l[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
            for (u = l.shift(); u;)
                if (e.responseFields[u] && (n[e.responseFields[u]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = u, u = l.shift())
                    if ("*" === u) u = a;
                    else if ("*" !== a && a !== u) {
                if (!(s = c[a + " " + u] || c["* " + u]))
                    for (i in c)
                        if (o = i.split(" "), o[1] === u && (s = c[a + " " + o[0]] || c["* " + o[0]])) {
                            !0 === s ? s = c[i] : !0 !== c[i] && (u = o[0], l.unshift(o[1]));
                            break
                        } if (!0 !== s)
                    if (s && e.throws) t = s(t);
                    else try {
                        t = s(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: s ? e : "No conversion from " + a + " to " + u
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }
        var he = [],
            pe = n.document,
            de = Object.getPrototypeOf,
            fe = he.slice,
            De = he.concat,
            me = he.push,
            ge = he.indexOf,
            Ae = {},
            Ce = Ae.toString,
            Ee = Ae.hasOwnProperty,
            ye = Ee.toString,
            xe = ye.call(Object),
            Fe = {},
            ve = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            Se = function(e) {
                return null != e && e === e.window
            },
            Be = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            },
            be = function(e, t) {
                return new be.fn.init(e, t)
            },
            we = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        be.fn = be.prototype = {
            jquery: "3.4.1",
            constructor: be,
            length: 0,
            toArray: function() {
                return fe.call(this)
            },
            get: function(e) {
                return null == e ? fe.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = be.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return be.each(this, e)
            },
            map: function(e) {
                return this.pushStack(be.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(fe.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: me,
            sort: he.sort,
            splice: he.splice
        }, be.extend = be.fn.extend = function() {
            var e, t, n, r, i, u, s = arguments[0] || {},
                o = 1,
                a = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[o] || {}, o++), "object" == typeof s || ve(s) || (s = {}), o === a && (s = this, o--); o < a; o++)
                if (null != (e = arguments[o]))
                    for (t in e) r = e[t], "__proto__" !== t && s !== r && (c && r && (be.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t], u = i && !Array.isArray(n) ? [] : i || be.isPlainObject(n) ? n : {}, i = !1, s[t] = be.extend(c, u, r)) : void 0 !== r && (s[t] = r));
            return s
        }, be.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== Ce.call(e)) && (!(t = de(e)) || "function" == typeof(n = Ee.call(t, "constructor") && t.constructor) && ye.call(n) === xe)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t) {
                s(e, {
                    nonce: t && t.nonce
                })
            },
            each: function(e, t) {
                var n, r = 0;
                if (a(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(we, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? be.merge(n, "string" == typeof e ? [e] : e) : me.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : ge.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, u = e.length, s = !n; i < u; i++) !t(e[i], i) !== s && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, u = 0,
                    s = [];
                if (a(e))
                    for (r = e.length; u < r; u++) null != (i = t(e[u], u, n)) && s.push(i);
                else
                    for (u in e) null != (i = t(e[u], u, n)) && s.push(i);
                return De.apply([], s)
            },
            guid: 1,
            support: Fe
        }), "function" == typeof Symbol && (be.fn[Symbol.iterator] = he[Symbol.iterator]), be.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            Ae["[object " + t + "]"] = t.toLowerCase()
        });
        var ke =
            /*!
             * Sizzle CSS Selector Engine v2.3.4
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2019-04-08
             */
            function(e) {
                function t(e, t, n, r) {
                    var i, u, s, o, a, l, p, d = t && t.ownerDocument,
                        f = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
                    if (!r && ((t ? t.ownerDocument || t : j) !== N && T(t), t = t || N, _)) {
                        if (11 !== f && (a = ge.exec(e)))
                            if (i = a[1]) {
                                if (9 === f) {
                                    if (!(s = t.getElementById(i))) return n;
                                    if (s.id === i) return n.push(s), n
                                } else if (d && (s = d.getElementById(i)) && O(t, s) && s.id === i) return n.push(s), n
                            } else {
                                if (a[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                                if ((i = a[3]) && E.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(i)), n
                            } if (E.qsa && !J[e + " "] && (!L || !L.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                            if (p = e, d = t, 1 === f && ce.test(e)) {
                                for ((o = t.getAttribute("id")) ? o = o.replace(ye, xe) : t.setAttribute("id", o = R), l = v(e), u = l.length; u--;) l[u] = "#" + o + " " + h(l[u]);
                                p = l.join(","), d = Ae.test(e) && c(t.parentNode) || t
                            }
                            try {
                                return Y.apply(n, d.querySelectorAll(p)), n
                            } catch (t) {
                                J(e, !0)
                            } finally {
                                o === R && t.removeAttribute("id")
                            }
                        }
                    }
                    return B(e.replace(se, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > y.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[R] = !0, e
                }

                function i(e) {
                    var t = N.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function u(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) y.attrHandle[n[r]] = t
                }

                function s(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function o(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ve(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function a(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, r) {
                            for (var i, u = e([], n.length, t), s = u.length; s--;) n[i = u[s]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function c(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                function l() {}

                function h(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function p(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        u = i || r,
                        s = n && "parentNode" === u,
                        o = z++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || s) return e(t, n, i);
                        return !1
                    } : function(t, n, a) {
                        var c, l, h, p = [U, o];
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || s) && e(t, n, a)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || s)
                                    if (h = t[R] || (t[R] = {}), l = h[t.uniqueID] || (h[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((c = l[u]) && c[0] === U && c[1] === o) return p[2] = c[2];
                                        if (l[u] = p, p[2] = e(t, n, a)) return !0
                                    } return !1
                    }
                }

                function d(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function f(e, n, r) {
                    for (var i = 0, u = n.length; i < u; i++) t(e, n[i], r);
                    return r
                }

                function D(e, t, n, r, i) {
                    for (var u, s = [], o = 0, a = e.length, c = null != t; o < a; o++)(u = e[o]) && (n && !n(u, r, i) || (s.push(u), c && t.push(o)));
                    return s
                }

                function m(e, t, n, i, u, s) {
                    return i && !i[R] && (i = m(i)), u && !u[R] && (u = m(u, s)), r(function(r, s, o, a) {
                        var c, l, h, p = [],
                            d = [],
                            m = s.length,
                            g = r || f(t || "*", o.nodeType ? [o] : o, []),
                            A = !e || !r && t ? g : D(g, p, e, o, a),
                            C = n ? u || (r ? e : m || i) ? [] : s : A;
                        if (n && n(A, C, o, a), i)
                            for (c = D(C, d), i(c, [], o, a), l = c.length; l--;)(h = c[l]) && (C[d[l]] = !(A[d[l]] = h));
                        if (r) {
                            if (u || e) {
                                if (u) {
                                    for (c = [], l = C.length; l--;)(h = C[l]) && c.push(A[l] = h);
                                    u(null, C = [], c, a)
                                }
                                for (l = C.length; l--;)(h = C[l]) && (c = u ? Z(r, h) : p[l]) > -1 && (r[c] = !(s[c] = h))
                            }
                        } else C = D(C === s ? C.splice(m, C.length) : C), u ? u(null, s, C, a) : Y.apply(s, C)
                    })
                }

                function g(e) {
                    for (var t, n, r, i = e.length, u = y.relative[e[0].type], s = u || y.relative[" "], o = u ? 1 : 0, a = p(function(e) {
                            return e === t
                        }, s, !0), c = p(function(e) {
                            return Z(t, e) > -1
                        }, s, !0), l = [function(e, n, r) {
                            var i = !u && (r || n !== b) || ((t = n).nodeType ? a(e, n, r) : c(e, n, r));
                            return t = null, i
                        }]; o < i; o++)
                        if (n = y.relative[e[o].type]) l = [p(d(l), n)];
                        else {
                            if (n = y.filter[e[o].type].apply(null, e[o].matches), n[R]) {
                                for (r = ++o; r < i && !y.relative[e[r].type]; r++);
                                return m(o > 1 && d(l), o > 1 && h(e.slice(0, o - 1).concat({
                                    value: " " === e[o - 2].type ? "*" : ""
                                })).replace(se, "$1"), n, o < r && g(e.slice(o, r)), r < i && g(e = e.slice(r)), r < i && h(e))
                            }
                            l.push(n)
                        } return d(l)
                }

                function A(e, n) {
                    var i = n.length > 0,
                        u = e.length > 0,
                        s = function(r, s, o, a, c) {
                            var l, h, p, d = 0,
                                f = "0",
                                m = r && [],
                                g = [],
                                A = b,
                                C = r || u && y.find.TAG("*", c),
                                E = U += null == A ? 1 : Math.random() || .1,
                                x = C.length;
                            for (c && (b = s === N || s || c); f !== x && null != (l = C[f]); f++) {
                                if (u && l) {
                                    for (h = 0, s || l.ownerDocument === N || (T(l), o = !_); p = e[h++];)
                                        if (p(l, s || N, o)) {
                                            a.push(l);
                                            break
                                        } c && (U = E)
                                }
                                i && ((l = !p && l) && d--, r && m.push(l))
                            }
                            if (d += f, i && f !== d) {
                                for (h = 0; p = n[h++];) p(m, g, s, o);
                                if (r) {
                                    if (d > 0)
                                        for (; f--;) m[f] || g[f] || (g[f] = V.call(a));
                                    g = D(g)
                                }
                                Y.apply(a, g), c && !r && g.length > 0 && d + n.length > 1 && t.uniqueSort(a)
                            }
                            return c && (U = E, b = A), m
                        };
                    return i ? r(s) : s
                }
                var C, E, y, x, F, v, S, B, b, w, k, T, N, M, _, L, I, P, O, R = "sizzle" + 1 * new Date,
                    j = e.document,
                    U = 0,
                    z = 0,
                    q = n(),
                    X = n(),
                    H = n(),
                    J = n(),
                    W = function(e, t) {
                        return e === t && (k = !0), 0
                    },
                    K = {}.hasOwnProperty,
                    G = [],
                    V = G.pop,
                    $ = G.push,
                    Y = G.push,
                    Q = G.slice,
                    Z = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    te = "[\\x20\\t\\r\\n\\f]",
                    ne = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    re = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + te + "*\\]",
                    ie = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                    ue = new RegExp(te + "+", "g"),
                    se = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                    oe = new RegExp("^" + te + "*," + te + "*"),
                    ae = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
                    ce = new RegExp(te + "|>"),
                    le = new RegExp(ie),
                    he = new RegExp("^" + ne + "$"),
                    pe = {
                        ID: new RegExp("^#(" + ne + ")"),
                        CLASS: new RegExp("^\\.(" + ne + ")"),
                        TAG: new RegExp("^(" + ne + "|[*])"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + ie),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ee + ")$", "i"),
                        needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
                    },
                    de = /HTML$/i,
                    fe = /^(?:input|select|textarea|button)$/i,
                    De = /^h\d$/i,
                    me = /^[^{]+\{\s*\[native \w/,
                    ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Ae = /[+~]/,
                    Ce = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
                    Ee = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    xe = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    Fe = function() {
                        T()
                    },
                    ve = p(function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    Y.apply(G = Q.call(j.childNodes), j.childNodes), G[j.childNodes.length].nodeType
                } catch (e) {
                    Y = {
                        apply: G.length ? function(e, t) {
                            $.apply(e, Q.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                E = t.support = {}, F = t.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !de.test(t || n && n.nodeName || "HTML")
                }, T = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : j;
                    return r !== N && 9 === r.nodeType && r.documentElement ? (N = r, M = N.documentElement, _ = !F(N), j !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Fe, !1) : n.attachEvent && n.attachEvent("onunload", Fe)), E.attributes = i(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), E.getElementsByTagName = i(function(e) {
                        return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
                    }), E.getElementsByClassName = me.test(N.getElementsByClassName), E.getById = i(function(e) {
                        return M.appendChild(e).id = R, !N.getElementsByName || !N.getElementsByName(R).length
                    }), E.getById ? (y.filter.ID = function(e) {
                        var t = e.replace(Ce, Ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, y.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && _) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (y.filter.ID = function(e) {
                        var t = e.replace(Ce, Ee);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, y.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && _) {
                            var n, r, i, u = t.getElementById(e);
                            if (u) {
                                if ((n = u.getAttributeNode("id")) && n.value === e) return [u];
                                for (i = t.getElementsByName(e), r = 0; u = i[r++];)
                                    if ((n = u.getAttributeNode("id")) && n.value === e) return [u]
                            }
                            return []
                        }
                    }), y.find.TAG = E.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : E.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            u = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = u[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return u
                    }, y.find.CLASS = E.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && _) return t.getElementsByClassName(e)
                    }, I = [], L = [], (E.qsa = me.test(N.querySelectorAll)) && (i(function(e) {
                        M.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll("[id~=" + R + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || L.push(".#.+[+~]")
                    }), i(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = N.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + te + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), M.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                    })), (E.matchesSelector = me.test(P = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && i(function(e) {
                        E.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), I.push("!=", ie)
                    }), L = L.length && new RegExp(L.join("|")), I = I.length && new RegExp(I.join("|")), t = me.test(M.compareDocumentPosition), O = t || me.test(M.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, W = t ? function(e, t) {
                        if (e === t) return k = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !E.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === j && O(j, e) ? -1 : t === N || t.ownerDocument === j && O(j, t) ? 1 : w ? Z(w, e) - Z(w, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return k = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            u = t.parentNode,
                            o = [e],
                            a = [t];
                        if (!i || !u) return e === N ? -1 : t === N ? 1 : i ? -1 : u ? 1 : w ? Z(w, e) - Z(w, t) : 0;
                        if (i === u) return s(e, t);
                        for (n = e; n = n.parentNode;) o.unshift(n);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (; o[r] === a[r];) r++;
                        return r ? s(o[r], a[r]) : o[r] === j ? -1 : a[r] === j ? 1 : 0
                    }, N) : N
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== N && T(e), E.matchesSelector && _ && !J[n + " "] && (!I || !I.test(n)) && (!L || !L.test(n))) try {
                        var r = P.call(e, n);
                        if (r || E.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {
                        J(n, !0)
                    }
                    return t(n, N, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== N && T(e), O(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== N && T(e);
                    var n = y.attrHandle[t.toLowerCase()],
                        r = n && K.call(y.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
                    return void 0 !== r ? r : E.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.escape = function(e) {
                    return (e + "").replace(ye, xe)
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (k = !E.detectDuplicates, w = !E.sortStable && e.slice(0), e.sort(W), k) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return w = null, e
                }, x = t.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += x(t);
                    return n
                }, y = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: pe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Ce, Ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Ce, Ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = v(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Ce, Ee).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = q[e + " "];
                            return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && q(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, r) {
                            return function(i) {
                                var u = t.attr(i, e);
                                return null == u ? "!=" === n : !n || (u += "", "=" === n ? u === r : "!=" === n ? u !== r : "^=" === n ? r && 0 === u.indexOf(r) : "*=" === n ? r && u.indexOf(r) > -1 : "$=" === n ? r && u.slice(-r.length) === r : "~=" === n ? (" " + u.replace(ue, " ") + " ").indexOf(r) > -1 : "|=" === n && (u === r || u.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var u = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                o = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, a) {
                                var c, l, h, p, d, f, D = u !== s ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    g = o && t.nodeName.toLowerCase(),
                                    A = !a && !o,
                                    C = !1;
                                if (m) {
                                    if (u) {
                                        for (; D;) {
                                            for (p = t; p = p[D];)
                                                if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                            f = D = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? m.firstChild : m.lastChild], s && A) {
                                        for (p = m, h = p[R] || (p[R] = {}), l = h[p.uniqueID] || (h[p.uniqueID] = {}), c = l[e] || [], d = c[0] === U && c[1], C = d && c[2], p = d && m.childNodes[d]; p = ++d && p && p[D] || (C = d = 0) || f.pop();)
                                            if (1 === p.nodeType && ++C && p === t) {
                                                l[e] = [U, d, C];
                                                break
                                            }
                                    } else if (A && (p = t, h = p[R] || (p[R] = {}), l = h[p.uniqueID] || (h[p.uniqueID] = {}), c = l[e] || [], d = c[0] === U && c[1], C = d), !1 === C)
                                        for (;
                                            (p = ++d && p && p[D] || (C = d = 0) || f.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++C || (A && (h = p[R] || (p[R] = {}), l = h[p.uniqueID] || (h[p.uniqueID] = {}), l[e] = [U, C]), p !== t)););
                                    return (C -= i) === r || C % r == 0 && C / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var i, u = y.pseudos[e] || y.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return u[R] ? u(n) : u.length > 1 ? (i = [e, e, "", n], y.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, i = u(e, n), s = i.length; s--;) r = Z(e, i[s]), e[r] = !(t[r] = i[s])
                            }) : function(e) {
                                return u(e, 0, i)
                            }) : u
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = [],
                                n = [],
                                i = S(e.replace(se, "$1"));
                            return i[R] ? r(function(e, t, n, r) {
                                for (var u, s = i(e, null, r, []), o = e.length; o--;)(u = s[o]) && (e[o] = !(t[o] = u))
                            }) : function(e, r, u) {
                                return t[0] = e, i(t, null, u, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return e = e.replace(Ce, Ee),
                                function(t) {
                                    return (t.textContent || x(t)).indexOf(e) > -1
                                }
                        }),
                        lang: r(function(e) {
                            return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Ce, Ee).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === M
                        },
                        focus: function(e) {
                            return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: o(!1),
                        disabled: o(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !y.pseudos.empty(e)
                        },
                        header: function(e) {
                            return De.test(e.nodeName)
                        },
                        input: function(e) {
                            return fe.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: a(function() {
                            return [0]
                        }),
                        last: a(function(e, t) {
                            return [t - 1]
                        }),
                        eq: a(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: a(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: a(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: a(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: a(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, y.pseudos.nth = y.pseudos.eq;
                for (C in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) y.pseudos[C] = function(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(C);
                for (C in {
                        submit: !0,
                        reset: !0
                    }) y.pseudos[C] = function(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(C);
                return l.prototype = y.filters = y.pseudos, y.setFilters = new l, v = t.tokenize = function(e, n) {
                    var r, i, u, s, o, a, c, l = X[e + " "];
                    if (l) return n ? 0 : l.slice(0);
                    for (o = e, a = [], c = y.preFilter; o;) {
                        r && !(i = oe.exec(o)) || (i && (o = o.slice(i[0].length) || o), a.push(u = [])), r = !1, (i = ae.exec(o)) && (r = i.shift(), u.push({
                            value: r,
                            type: i[0].replace(se, " ")
                        }), o = o.slice(r.length));
                        for (s in y.filter) !(i = pe[s].exec(o)) || c[s] && !(i = c[s](i)) || (r = i.shift(), u.push({
                            value: r,
                            type: s,
                            matches: i
                        }), o = o.slice(r.length));
                        if (!r) break
                    }
                    return n ? o.length : o ? t.error(e) : X(e, a).slice(0)
                }, S = t.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        u = H[e + " "];
                    if (!u) {
                        for (t || (t = v(e)), n = t.length; n--;) u = g(t[n]), u[R] ? r.push(u) : i.push(u);
                        u = H(e, A(i, r)), u.selector = e
                    }
                    return u
                }, B = t.select = function(e, t, n, r) {
                    var i, u, s, o, a, l = "function" == typeof e && e,
                        p = !r && v(e = l.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if (u = p[0] = p[0].slice(0), u.length > 2 && "ID" === (s = u[0]).type && 9 === t.nodeType && _ && y.relative[u[1].type]) {
                            if (!(t = (y.find.ID(s.matches[0].replace(Ce, Ee), t) || [])[0])) return n;
                            l && (t = t.parentNode), e = e.slice(u.shift().value.length)
                        }
                        for (i = pe.needsContext.test(e) ? 0 : u.length; i-- && (s = u[i], !y.relative[o = s.type]);)
                            if ((a = y.find[o]) && (r = a(s.matches[0].replace(Ce, Ee), Ae.test(u[0].type) && c(t.parentNode) || t))) {
                                if (u.splice(i, 1), !(e = r.length && h(u))) return Y.apply(n, r), n;
                                break
                            }
                    }
                    return (l || S(e, p))(r, t, !_, n, !t || Ae.test(e) && c(t.parentNode) || t), n
                }, E.sortStable = R.split("").sort(W).join("") === R, E.detectDuplicates = !!k, T(), E.sortDetached = i(function(e) {
                    return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
                }), i(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || u("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), E.attributes && i(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || u("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), i(function(e) {
                    return null == e.getAttribute("disabled")
                }) || u(ee, function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(n);
        be.find = ke, be.expr = ke.selectors, be.expr[":"] = be.expr.pseudos, be.uniqueSort = be.unique = ke.uniqueSort, be.text = ke.getText, be.isXMLDoc = ke.isXML, be.contains = ke.contains, be.escapeSelector = ke.escape;
        var Te = function(e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && be(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            Ne = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Me = be.expr.match.needsContext,
            _e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        be.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? be.find.matchesSelector(r, e) ? [r] : [] : be.find.matches(e, be.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, be.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(be(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (be.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) be.find(e, i[t], n);
                return r > 1 ? be.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(l(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(l(this, e || [], !0))
            },
            is: function(e) {
                return !!l(this, "string" == typeof e && Me.test(e) ? be(e) : e || [], !1).length
            }
        });
        var Le, Ie = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (be.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || Le, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ie.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof be ? t[0] : t, be.merge(this, be.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : pe, !0)), _e.test(r[1]) && be.isPlainObject(t))
                        for (r in t) ve(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = pe.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : ve(e) ? void 0 !== n.ready ? n.ready(e) : e(be) : be.makeArray(e, this)
        }).prototype = be.fn, Le = be(pe);
        var Pe = /^(?:parents|prev(?:Until|All))/,
            Oe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        be.fn.extend({
            has: function(e) {
                var t = be(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (be.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    u = [],
                    s = "string" != typeof e && be(e);
                if (!Me.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && be.find.matchesSelector(n, e))) {
                                u.push(n);
                                break
                            } return this.pushStack(u.length > 1 ? be.uniqueSort(u) : u)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ge.call(be(e), this[0]) : ge.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(be.uniqueSort(be.merge(this.get(), be(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), be.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Te(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Te(e, "parentNode", n)
            },
            next: function(e) {
                return h(e, "nextSibling")
            },
            prev: function(e) {
                return h(e, "previousSibling")
            },
            nextAll: function(e) {
                return Te(e, "nextSibling")
            },
            prevAll: function(e) {
                return Te(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Te(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Te(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Ne((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Ne(e.firstChild)
            },
            contents: function(e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (c(e, "template") && (e = e.content || e), be.merge([], e.childNodes))
            }
        }, function(e, t) {
            be.fn[e] = function(n, r) {
                var i = be.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = be.filter(r, i)), this.length > 1 && (Oe[e] || be.uniqueSort(i), Pe.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var Re = /[^\x20\t\r\n\f]+/g;
        be.Callbacks = function(e) {
            e = "string" == typeof e ? p(e) : be.extend({}, e);
            var t, n, r, i, u = [],
                s = [],
                a = -1,
                c = function() {
                    for (i = i || e.once, r = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < u.length;) !1 === u[a].apply(n[0], n[1]) && e.stopOnFalse && (a = u.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (u = n ? [] : "")
                },
                l = {
                    add: function() {
                        return u && (n && !t && (a = u.length - 1, s.push(n)), function t(n) {
                            be.each(n, function(n, r) {
                                ve(r) ? e.unique && l.has(r) || u.push(r) : r && r.length && "string" !== o(r) && t(r)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return be.each(arguments, function(e, t) {
                            for (var n;
                                (n = be.inArray(t, u, n)) > -1;) u.splice(n, 1), n <= a && a--
                        }), this
                    },
                    has: function(e) {
                        return e ? be.inArray(e, u) > -1 : u.length > 0
                    },
                    empty: function() {
                        return u && (u = []), this
                    },
                    disable: function() {
                        return i = s = [], u = n = "", this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return i = s = [], n || t || (u = n = ""), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return l
        }, be.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", be.Callbacks("memory"), be.Callbacks("memory"), 2],
                        ["resolve", "done", be.Callbacks("once memory"), be.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", be.Callbacks("once memory"), be.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    i = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return u.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return be.Deferred(function(n) {
                                be.each(t, function(t, r) {
                                    var i = ve(e[r[4]]) && e[r[4]];
                                    u[r[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && ve(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(e, r, i) {
                            function u(e, t, r, i) {
                                return function() {
                                    var o = this,
                                        a = arguments,
                                        c = function() {
                                            var n, c;
                                            if (!(e < s)) {
                                                if ((n = r.apply(o, a)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = n && ("object" == typeof n || "function" == typeof n) && n.then, ve(c) ? i ? c.call(n, u(s, t, d, i), u(s, t, f, i)) : (s++, c.call(n, u(s, t, d, i), u(s, t, f, i), u(s, t, d, t.notifyWith))) : (r !== d && (o = void 0, a = [n]), (i || t.resolveWith)(o, a))
                                            }
                                        },
                                        l = i ? c : function() {
                                            try {
                                                c()
                                            } catch (n) {
                                                be.Deferred.exceptionHook && be.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= s && (r !== f && (o = void 0, a = [n]), t.rejectWith(o, a))
                                            }
                                        };
                                    e ? l() : (be.Deferred.getStackHook && (l.stackTrace = be.Deferred.getStackHook()), n.setTimeout(l))
                                }
                            }
                            var s = 0;
                            return be.Deferred(function(n) {
                                t[0][3].add(u(0, n, ve(i) ? i : d, n.notifyWith)), t[1][3].add(u(0, n, ve(e) ? e : d)), t[2][3].add(u(0, n, ve(r) ? r : f))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? be.extend(e, i) : i
                        }
                    },
                    u = {};
                return be.each(t, function(e, n) {
                    var s = n[2],
                        o = n[5];
                    i[n[1]] = s.add, o && s.add(function() {
                        r = o
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), u[n[0]] = function() {
                        return u[n[0] + "With"](this === u ? void 0 : this, arguments), this
                    }, u[n[0] + "With"] = s.fireWith
                }), i.promise(u), e && e.call(u, u), u
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = fe.call(arguments),
                    u = be.Deferred(),
                    s = function(e) {
                        return function(n) {
                            r[e] = this, i[e] = arguments.length > 1 ? fe.call(arguments) : n, --t || u.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && (D(e, u.done(s(n)).resolve, u.reject, !t), "pending" === u.state() || ve(i[n] && i[n].then))) return u.then();
                for (; n--;) D(i[n], s(n), u.reject);
                return u.promise()
            }
        });
        var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        be.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && je.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, be.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var Ue = be.Deferred();
        be.fn.ready = function(e) {
            return Ue.then(e).catch(function(e) {
                be.readyException(e)
            }), this
        }, be.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --be.readyWait : be.isReady) || (be.isReady = !0, !0 !== e && --be.readyWait > 0 || Ue.resolveWith(pe, [be]))
            }
        }), be.ready.then = Ue.then, "complete" === pe.readyState || "loading" !== pe.readyState && !pe.documentElement.doScroll ? n.setTimeout(be.ready) : (pe.addEventListener("DOMContentLoaded", m), n.addEventListener("load", m));
        var ze = function(e, t, n, r, i, u, s) {
                var a = 0,
                    c = e.length,
                    l = null == n;
                if ("object" === o(n)) {
                    i = !0;
                    for (a in n) ze(e, t, a, n[a], !0, u, s)
                } else if (void 0 !== r && (i = !0, ve(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(be(e), n)
                    })), t))
                    for (; a < c; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                return i ? e : l ? t.call(e) : c ? t(e[0], n) : u
            },
            qe = /^-ms-/,
            Xe = /-([a-z])/g,
            He = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        C.uid = 1, C.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[A(t)] = n;
                else
                    for (r in t) i[A(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][A(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(A) : (t = A(t), t = t in r ? [t] : t.match(Re) || []), n = t.length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || be.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !be.isEmptyObject(t)
            }
        };
        var Je = new C,
            We = new C,
            Ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ge = /[A-Z]/g;
        be.extend({
            hasData: function(e) {
                return We.hasData(e) || Je.hasData(e)
            },
            data: function(e, t, n) {
                return We.access(e, t, n)
            },
            removeData: function(e, t) {
                We.remove(e, t)
            },
            _data: function(e, t, n) {
                return Je.access(e, t, n)
            },
            _removeData: function(e, t) {
                Je.remove(e, t)
            }
        }), be.fn.extend({
            data: function(e, t) {
                var n, r, i, u = this[0],
                    s = u && u.attributes;
                if (void 0 === e) {
                    if (this.length && (i = We.get(u), 1 === u.nodeType && !Je.get(u, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = A(r.slice(5)), y(u, r, i[r])));
                        Je.set(u, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    We.set(this, e)
                }) : ze(this, function(t) {
                    var n;
                    if (u && void 0 === t) {
                        if (void 0 !== (n = We.get(u, e))) return n;
                        if (void 0 !== (n = y(u, e))) return n
                    } else this.each(function() {
                        We.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    We.remove(this, e)
                })
            }
        }), be.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = Je.get(e, t), n && (!r || Array.isArray(n) ? r = Je.access(e, t, be.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = be.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    u = be._queueHooks(e, t),
                    s = function() {
                        be.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete u.stop, i.call(e, s, u)), !r && u && u.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Je.get(e, n) || Je.access(e, n, {
                    empty: be.Callbacks("once memory").add(function() {
                        Je.remove(e, [t + "queue", n])
                    })
                })
            }
        }), be.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? be.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = be.queue(this, e, t);
                    be._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && be.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    be.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = be.Deferred(),
                    u = this,
                    s = this.length,
                    o = function() {
                        --r || i.resolveWith(u, [u])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Je.get(u[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(o));
                return o(), i.promise(t)
            }
        });
        var Ve = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            $e = new RegExp("^(?:([+-])=|)(" + Ve + ")([a-z%]*)$", "i"),
            Ye = ["Top", "Right", "Bottom", "Left"],
            Qe = pe.documentElement,
            Ze = function(e) {
                return be.contains(e.ownerDocument, e)
            },
            et = {
                composed: !0
            };
        Qe.getRootNode && (Ze = function(e) {
            return be.contains(e.ownerDocument, e) || e.getRootNode(et) === e.ownerDocument
        });
        var tt = function(e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && Ze(e) && "none" === be.css(e, "display")
            },
            nt = function(e, t, n, r) {
                var i, u, s = {};
                for (u in t) s[u] = e.style[u], e.style[u] = t[u];
                i = n.apply(e, r || []);
                for (u in t) e.style[u] = s[u];
                return i
            },
            rt = {};
        be.fn.extend({
            show: function() {
                return v(this, !0)
            },
            hide: function() {
                return v(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    tt(this) ? be(this).show() : be(this).hide()
                })
            }
        });
        var it = /^(?:checkbox|radio)$/i,
            ut = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            st = /^$|^module$|\/(?:java|ecma)script/i,
            ot = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        ot.optgroup = ot.option, ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead, ot.th = ot.td;
        var at = /<|&#?\w+;/;
        ! function() {
            var e = pe.createDocumentFragment(),
                t = e.appendChild(pe.createElement("div")),
                n = pe.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var ct = /^key/,
            lt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ht = /^([^.]*)(?:\.(.+)|)/;
        be.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var u, s, o, a, c, l, h, p, d, f, D, m = Je.get(e);
                if (m)
                    for (n.handler && (u = n, n = u.handler, i = u.selector), i && be.find.matchesSelector(Qe, i), n.guid || (n.guid = be.guid++), (a = m.events) || (a = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                            return void 0 !== be && be.event.triggered !== t.type ? be.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(Re) || [""], c = t.length; c--;) o = ht.exec(t[c]) || [], d = D = o[1], f = (o[2] || "").split(".").sort(), d && (h = be.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, h = be.event.special[d] || {}, l = be.extend({
                        type: d,
                        origType: D,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && be.expr.match.needsContext.test(i),
                        namespace: f.join(".")
                    }, u), (p = a[d]) || (p = a[d] = [], p.delegateCount = 0, h.setup && !1 !== h.setup.call(e, r, f, s) || e.addEventListener && e.addEventListener(d, s)), h.add && (h.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), be.event.global[d] = !0)
            },
            remove: function(e, t, n, r, i) {
                var u, s, o, a, c, l, h, p, d, f, D, m = Je.hasData(e) && Je.get(e);
                if (m && (a = m.events)) {
                    for (t = (t || "").match(Re) || [""], c = t.length; c--;)
                        if (o = ht.exec(t[c]) || [], d = D = o[1], f = (o[2] || "").split(".").sort(), d) {
                            for (h = be.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, p = a[d] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = u = p.length; u--;) l = p[u], !i && D !== l.origType || n && n.guid !== l.guid || o && !o.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(u, 1), l.selector && p.delegateCount--, h.remove && h.remove.call(e, l));
                            s && !p.length && (h.teardown && !1 !== h.teardown.call(e, f, m.handle) || be.removeEvent(e, d, m.handle), delete a[d])
                        } else
                            for (d in a) be.event.remove(e, d + t[c], n, r, !0);
                    be.isEmptyObject(a) && Je.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, u, s, o = be.event.fix(e),
                    a = new Array(arguments.length),
                    c = (Je.get(this, "events") || {})[o.type] || [],
                    l = be.event.special[o.type] || {};
                for (a[0] = o, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                if (o.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, o)) {
                    for (s = be.event.handlers.call(this, o, c), t = 0;
                        (i = s[t++]) && !o.isPropagationStopped();)
                        for (o.currentTarget = i.elem, n = 0;
                            (u = i.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !1 !== u.namespace && !o.rnamespace.test(u.namespace) || (o.handleObj = u, o.data = u.data, void 0 !== (r = ((be.event.special[u.origType] || {}).handle || u.handler).apply(i.elem, a)) && !1 === (o.result = r) && (o.preventDefault(), o.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, o), o.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, u, s, o = [],
                    a = t.delegateCount,
                    c = e.target;
                if (a && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (u = [], s = {}, n = 0; n < a; n++) r = t[n], i = r.selector + " ", void 0 === s[i] && (s[i] = r.needsContext ? be(i, this).index(c) > -1 : be.find(i, this, null, [c]).length), s[i] && u.push(r);
                            u.length && o.push({
                                elem: c,
                                handlers: u
                            })
                        } return c = this, a < t.length && o.push({
                    elem: c,
                    handlers: t.slice(a)
                }), o
            },
            addProp: function(e, t) {
                Object.defineProperty(be.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: ve(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[be.expando] ? e : new be.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return it.test(t.type) && t.click && c(t, "input") && _(t, "click", w), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return it.test(t.type) && t.click && c(t, "input") && _(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return it.test(t.type) && t.click && c(t, "input") && Je.get(t, "click") || c(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, be.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, be.Event = function(e, t) {
            if (!(this instanceof be.Event)) return new be.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && be.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[be.expando] = !0
        }, be.Event.prototype = {
            constructor: be.Event,
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, be.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && ct.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && lt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, be.event.addProp), be.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            be.event.special[e] = {
                setup: function() {
                    return _(this, e, T), !1
                },
                trigger: function() {
                    return _(this, e), !0
                },
                delegateType: t
            }
        }), be.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            be.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        u = e.handleObj;
                    return i && (i === r || be.contains(r, i)) || (e.type = u.origType, n = u.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), be.fn.extend({
            on: function(e, t, n, r) {
                return M(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return M(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, be(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = k), this.each(function() {
                    be.event.remove(this, e, n, t)
                })
            }
        });
        var pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            dt = /<script|<style|<link/i,
            ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        be.extend({
            htmlPrefilter: function(e) {
                return e.replace(pt, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, u, s, o = e.cloneNode(!0),
                    a = Ze(e);
                if (!(Fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || be.isXMLDoc(e)))
                    for (s = S(o), u = S(e), r = 0, i = u.length; r < i; r++) R(u[r], s[r]);
                if (t)
                    if (n)
                        for (u = u || S(e), s = s || S(o), r = 0, i = u.length; r < i; r++) O(u[r], s[r]);
                    else O(e, o);
                return s = S(o, "script"), s.length > 0 && B(s, !a && S(e, "script")), o
            },
            cleanData: function(e) {
                for (var t, n, r, i = be.event.special, u = 0; void 0 !== (n = e[u]); u++)
                    if (He(n)) {
                        if (t = n[Je.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? be.event.remove(n, r) : be.removeEvent(n, r, t.handle);
                            n[Je.expando] = void 0
                        }
                        n[We.expando] && (n[We.expando] = void 0)
                    }
            }
        }), be.fn.extend({
            detach: function(e) {
                return U(this, e, !0)
            },
            remove: function(e) {
                return U(this, e)
            },
            text: function(e) {
                return ze(this, function(e) {
                    return void 0 === e ? be.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return j(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        L(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return j(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = L(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return j(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return j(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (be.cleanData(S(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return be.clone(this, e, t)
                })
            },
            html: function(e) {
                return ze(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !dt.test(e) && !ot[(ut.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = be.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (be.cleanData(S(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return j(this, arguments, function(t) {
                    var n = this.parentNode;
                    be.inArray(this, e) < 0 && (be.cleanData(S(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), be.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            be.fn[e] = function(e) {
                for (var n, r = [], i = be(e), u = i.length - 1, s = 0; s <= u; s++) n = s === u ? this : this.clone(!0), be(i[s])[t](n), me.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var mt = new RegExp("^(" + Ve + ")(?!px)[a-z%]+$", "i"),
            gt = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            At = new RegExp(Ye.join("|"), "i");
        ! function() {
            function e() {
                if (c) {
                    a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Qe.appendChild(a).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top, o = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", u = 12 === t(c.offsetWidth / 3), Qe.removeChild(a), c = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, i, u, s, o, a = pe.createElement("div"),
                c = pe.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", Fe.clearCloneStyle = "content-box" === c.style.backgroundClip, be.extend(Fe, {
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), o
                },
                scrollboxSize: function() {
                    return e(), u
                }
            }))
        }();
        var Ct = ["Webkit", "Moz", "ms"],
            Et = pe.createElement("div").style,
            yt = {},
            xt = /^(none|table(?!-c[ea]).+)/,
            Ft = /^--/,
            vt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            St = {
                letterSpacing: "0",
                fontWeight: "400"
            };
        be.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = z(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, u, s, o = A(t),
                        a = Ft.test(t),
                        c = e.style;
                    if (a || (t = H(o)), s = be.cssHooks[t] || be.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
                    u = typeof n, "string" === u && (i = $e.exec(n)) && i[1] && (n = x(e, t, i), u = "number"), null != n && n === n && ("number" !== u || a || (n += i && i[3] || (be.cssNumber[o] ? "" : "px")), Fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (a ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, u, s, o = A(t);
                return Ft.test(t) || (t = H(o)), s = be.cssHooks[t] || be.cssHooks[o], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = z(e, t, r)), "normal" === i && t in St && (i = St[t]), "" === n || n ? (u = parseFloat(i), !0 === n || isFinite(u) ? u || 0 : i) : i
            }
        }), be.each(["height", "width"], function(e, t) {
            be.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !xt.test(be.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? K(e, t, r) : nt(e, vt, function() {
                        return K(e, t, r)
                    })
                },
                set: function(e, n, r) {
                    var i, u = gt(e),
                        s = !Fe.scrollboxSize() && "absolute" === u.position,
                        o = s || r,
                        a = o && "border-box" === be.css(e, "boxSizing", !1, u),
                        c = r ? W(e, t, r, a, u) : 0;
                    return a && s && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(u[t]) - W(e, t, "border", !1, u) - .5)), c && (i = $e.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = be.css(e, t)), J(e, n, c)
                }
            }
        }), be.cssHooks.marginLeft = q(Fe.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(z(e, "marginLeft")) || e.getBoundingClientRect().left - nt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), be.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            be.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, u = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Ye[r] + t] = u[r] || u[r - 2] || u[0];
                    return i
                }
            }, "margin" !== e && (be.cssHooks[e + t].set = J)
        }), be.fn.extend({
            css: function(e, t) {
                return ze(this, function(e, t, n) {
                    var r, i, u = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (r = gt(e), i = t.length; s < i; s++) u[t[s]] = be.css(e, t[s], !1, r);
                        return u
                    }
                    return void 0 !== n ? be.style(e, t, n) : be.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), be.Tween = G, G.prototype = {
            constructor: G,
            init: function(e, t, n, r, i, u) {
                this.elem = e, this.prop = n, this.easing = i || be.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = u || (be.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = G.propHooks[this.prop];
                return e && e.get ? e.get(this) : G.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = G.propHooks[this.prop];
                return this.options.duration ? this.pos = t = be.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : G.propHooks._default.set(this), this
            }
        }, G.prototype.init.prototype = G.prototype, G.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = be.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    be.fx.step[e.prop] ? be.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !be.cssHooks[e.prop] && null == e.elem.style[H(e.prop)] ? e.elem[e.prop] = e.now : be.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, be.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, be.fx = G.prototype.init, be.fx.step = {};
        var Bt, bt, wt = /^(?:toggle|show|hide)$/,
            kt = /queueHooks$/;
        be.Animation = be.extend(te, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return x(n.elem, e, $e.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    ve(e) ? (t = e, e = ["*"]) : e = e.match(Re);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], te.tweeners[n] = te.tweeners[n] || [], te.tweeners[n].unshift(t)
                },
                prefilters: [Z],
                prefilter: function(e, t) {
                    t ? te.prefilters.unshift(e) : te.prefilters.push(e)
                }
            }), be.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? be.extend({}, e) : {
                    complete: n || !n && t || ve(e) && e,
                    duration: e,
                    easing: n && t || t && !ve(t) && t
                };
                return be.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in be.fx.speeds ? r.duration = be.fx.speeds[r.duration] : r.duration = be.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    ve(r.old) && r.old.call(this), r.queue && be.dequeue(this, r.queue)
                }, r
            }, be.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(tt).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = be.isEmptyObject(e),
                        u = be.speed(t, n, r),
                        s = function() {
                            var t = te(this, be.extend({}, e), u);
                            (i || Je.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, i || !1 === u.queue ? this.each(s) : this.queue(u.queue, s)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            u = be.timers,
                            s = Je.get(this);
                        if (i) s[i] && s[i].stop && r(s[i]);
                        else
                            for (i in s) s[i] && s[i].stop && kt.test(i) && r(s[i]);
                        for (i = u.length; i--;) u[i].elem !== this || null != e && u[i].queue !== e || (u[i].anim.stop(n), t = !1, u.splice(i, 1));
                        !t && n || be.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = Je.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            u = be.timers,
                            s = r ? r.length : 0;
                        for (n.finish = !0, be.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === e && (u[t].anim.stop(!0), u.splice(t, 1));
                        for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), be.each(["toggle", "show", "hide"], function(e, t) {
                var n = be.fn[t];
                be.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Y(t, !0), e, r, i)
                }
            }), be.each({
                slideDown: Y("show"),
                slideUp: Y("hide"),
                slideToggle: Y("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                be.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), be.timers = [], be.fx.tick = function() {
                var e, t = 0,
                    n = be.timers;
                for (Bt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || be.fx.stop(), Bt = void 0
            }, be.fx.timer = function(e) {
                be.timers.push(e), be.fx.start()
            }, be.fx.interval = 13, be.fx.start = function() {
                bt || (bt = !0, V())
            }, be.fx.stop = function() {
                bt = null
            }, be.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, be.fn.delay = function(e, t) {
                return e = be.fx ? be.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i)
                    }
                })
            },
            function() {
                var e = pe.createElement("input"),
                    t = pe.createElement("select"),
                    n = t.appendChild(pe.createElement("option"));
                e.type = "checkbox", Fe.checkOn = "" !== e.value, Fe.optSelected = n.selected, e = pe.createElement("input"), e.value = "t", e.type = "radio", Fe.radioValue = "t" === e.value
            }();
        var Tt, Nt = be.expr.attrHandle;
        be.fn.extend({
            attr: function(e, t) {
                return ze(this, be.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    be.removeAttr(this, e)
                })
            }
        }), be.extend({
            attr: function(e, t, n) {
                var r, i, u = e.nodeType;
                if (3 !== u && 8 !== u && 2 !== u) return void 0 === e.getAttribute ? be.prop(e, t, n) : (1 === u && be.isXMLDoc(e) || (i = be.attrHooks[t.toLowerCase()] || (be.expr.match.bool.test(t) ? Tt : void 0)), void 0 !== n ? null === n ? void be.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = be.find.attr(e, t), null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!Fe.radioValue && "radio" === t && c(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(Re);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), Tt = {
            set: function(e, t, n) {
                return !1 === t ? be.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, be.each(be.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Nt[t] || be.find.attr;
            Nt[t] = function(e, t, r) {
                var i, u, s = t.toLowerCase();
                return r || (u = Nt[s], Nt[s] = i, i = null != n(e, t, r) ? s : null, Nt[s] = u), i
            }
        });
        var Mt = /^(?:input|select|textarea|button)$/i,
            _t = /^(?:a|area)$/i;
        be.fn.extend({
            prop: function(e, t) {
                return ze(this, be.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[be.propFix[e] || e]
                })
            }
        }), be.extend({
            prop: function(e, t, n) {
                var r, i, u = e.nodeType;
                if (3 !== u && 8 !== u && 2 !== u) return 1 === u && be.isXMLDoc(e) || (t = be.propFix[t] || t, i = be.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = be.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Mt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), Fe.optSelected || (be.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), be.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            be.propFix[this.toLowerCase()] = this
        }), be.fn.extend({
            addClass: function(e) {
                var t, n, r, i, u, s, o, a = 0;
                if (ve(e)) return this.each(function(t) {
                    be(this).addClass(e.call(this, t, re(this)))
                });
                if (t = ie(e), t.length)
                    for (; n = this[a++];)
                        if (i = re(n), r = 1 === n.nodeType && " " + ne(i) + " ") {
                            for (s = 0; u = t[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                            o = ne(r), i !== o && n.setAttribute("class", o)
                        } return this
            },
            removeClass: function(e) {
                var t, n, r, i, u, s, o, a = 0;
                if (ve(e)) return this.each(function(t) {
                    be(this).removeClass(e.call(this, t, re(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (t = ie(e), t.length)
                    for (; n = this[a++];)
                        if (i = re(n), r = 1 === n.nodeType && " " + ne(i) + " ") {
                            for (s = 0; u = t[s++];)
                                for (; r.indexOf(" " + u + " ") > -1;) r = r.replace(" " + u + " ", " ");
                            o = ne(r), i !== o && n.setAttribute("class", o)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : ve(e) ? this.each(function(n) {
                    be(this).toggleClass(e.call(this, n, re(this), t), t)
                }) : this.each(function() {
                    var t, i, u, s;
                    if (r)
                        for (i = 0, u = be(this), s = ie(e); t = s[i++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = re(this), t && Je.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Je.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + ne(re(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Lt = /\r/g;
        be.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0]; {
                    if (arguments.length) return r = ve(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, be(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = be.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = be.valHooks[this.type] || be.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return (t = be.valHooks[i.type] || be.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)
                }
            }
        }), be.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = be.find.attr(e, "value");
                        return null != t ? t : ne(be.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            u = e.selectedIndex,
                            s = "select-one" === e.type,
                            o = s ? null : [],
                            a = s ? u + 1 : i.length;
                        for (r = u < 0 ? a : s ? u : 0; r < a; r++)
                            if (n = i[r], (n.selected || r === u) && !n.disabled && (!n.parentNode.disabled || !c(n.parentNode, "optgroup"))) {
                                if (t = be(n).val(), s) return t;
                                o.push(t)
                            } return o
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, u = be.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = be.inArray(be.valHooks.option.get(r), u) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), u
                    }
                }
            }
        }), be.each(["radio", "checkbox"], function() {
            be.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = be.inArray(be(e).val(), t) > -1
                }
            }, Fe.checkOn || (be.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), Fe.focusin = "onfocusin" in n;
        var It = /^(?:focusinfocus|focusoutblur)$/,
            Pt = function(e) {
                e.stopPropagation()
            };
        be.extend(be.event, {
            trigger: function(e, t, r, i) {
                var u, s, o, a, c, l, h, p, d = [r || pe],
                    f = Ee.call(e, "type") ? e.type : e,
                    D = Ee.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = o = r = r || pe, 3 !== r.nodeType && 8 !== r.nodeType && !It.test(f + be.event.triggered) && (f.indexOf(".") > -1 && (D = f.split("."), f = D.shift(), D.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[be.expando] ? e : new be.Event(f, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = D.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + D.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : be.makeArray(t, [e]), h = be.event.special[f] || {}, i || !h.trigger || !1 !== h.trigger.apply(r, t))) {
                    if (!i && !h.noBubble && !Se(r)) {
                        for (a = h.delegateType || f, It.test(a + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), o = s;
                        o === (r.ownerDocument || pe) && d.push(o.defaultView || o.parentWindow || n)
                    }
                    for (u = 0;
                        (s = d[u++]) && !e.isPropagationStopped();) p = s, e.type = u > 1 ? a : h.bindType || f, l = (Je.get(s, "events") || {})[e.type] && Je.get(s, "handle"), l && l.apply(s, t), (l = c && s[c]) && l.apply && He(s) && (e.result = l.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = f, i || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(d.pop(), t) || !He(r) || c && ve(r[f]) && !Se(r) && (o = r[c], o && (r[c] = null), be.event.triggered = f, e.isPropagationStopped() && p.addEventListener(f, Pt), r[f](), e.isPropagationStopped() && p.removeEventListener(f, Pt), be.event.triggered = void 0, o && (r[c] = o)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = be.extend(new be.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                be.event.trigger(r, null, t)
            }
        }), be.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    be.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return be.event.trigger(e, t, n, !0)
            }
        }), Fe.focusin || be.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                be.event.simulate(t, e.target, be.event.fix(e))
            };
            be.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        i = Je.access(r, t);
                    i || r.addEventListener(e, n, !0), Je.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        i = Je.access(r, t) - 1;
                    i ? Je.access(r, t, i) : (r.removeEventListener(e, n, !0), Je.remove(r, t))
                }
            }
        });
        var Ot = n.location,
            Rt = Date.now(),
            jt = /\?/;
        be.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || be.error("Invalid XML: " + e), t
        };
        var Ut = /\[\]$/,
            zt = /\r?\n/g,
            qt = /^(?:submit|button|image|reset|file)$/i,
            Xt = /^(?:input|select|textarea|keygen)/i;
        be.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = ve(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !be.isPlainObject(e)) be.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) ue(n, e[n], t, i);
            return r.join("&")
        }, be.fn.extend({
            serialize: function() {
                return be.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = be.prop(this, "elements");
                    return e ? be.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !be(this).is(":disabled") && Xt.test(this.nodeName) && !qt.test(e) && (this.checked || !it.test(e))
                }).map(function(e, t) {
                    var n = be(this).val();
                    return null == n ? null : Array.isArray(n) ? be.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(zt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(zt, "\r\n")
                    }
                }).get()
            }
        });
        var Ht = /%20/g,
            Jt = /#.*$/,
            Wt = /([?&])_=[^&]*/,
            Kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Vt = /^(?:GET|HEAD)$/,
            $t = /^\/\//,
            Yt = {},
            Qt = {},
            Zt = "*/".concat("*"),
            en = pe.createElement("a");
        en.href = Ot.href, be.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ot.href,
                type: "GET",
                isLocal: Gt.test(Ot.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": be.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? ae(ae(e, be.ajaxSettings), t) : ae(be.ajaxSettings, e)
            },
            ajaxPrefilter: se(Yt),
            ajaxTransport: se(Qt),
            ajax: function(e, t) {
                function r(e, t, r, o) {
                    var c, p, d, E, y, x = t;
                    l || (l = !0, a && n.clearTimeout(a), i = void 0, s = o || "", F.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, r && (E = ce(f, F, r)), E = le(f, E, F, c), c ? (f.ifModified && (y = F.getResponseHeader("Last-Modified"), y && (be.lastModified[u] = y), (y = F.getResponseHeader("etag")) && (be.etag[u] = y)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = E.state, p = E.data, d = E.error, c = !d)) : (d = x, !e && x || (x = "error", e < 0 && (e = 0))), F.status = e, F.statusText = (t || x) + "", c ? g.resolveWith(D, [p, x, F]) : g.rejectWith(D, [F, x, d]), F.statusCode(C), C = void 0, h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [F, f, c ? p : d]), A.fireWith(D, [F, x]), h && (m.trigger("ajaxComplete", [F, f]), --be.active || be.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, u, s, o, a, c, l, h, p, d, f = be.ajaxSetup({}, t),
                    D = f.context || f,
                    m = f.context && (D.nodeType || D.jquery) ? be(D) : be.event,
                    g = be.Deferred(),
                    A = be.Callbacks("once memory"),
                    C = f.statusCode || {},
                    E = {},
                    y = {},
                    x = "canceled",
                    F = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (l) {
                                if (!o)
                                    for (o = {}; t = Kt.exec(s);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = o[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return l ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == l && (e = y[e.toLowerCase()] = y[e.toLowerCase()] || e, E[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == l && (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (l) F.always(e[F.status]);
                                else
                                    for (t in e) C[t] = [C[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return i && i.abort(t), r(0, t), this
                        }
                    };
                if (g.promise(F), f.url = ((e || f.url || Ot.href) + "").replace($t, Ot.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Re) || [""], null == f.crossDomain) {
                    c = pe.createElement("a");
                    try {
                        c.href = f.url, c.href = c.href, f.crossDomain = en.protocol + "//" + en.host != c.protocol + "//" + c.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = be.param(f.data, f.traditional)), oe(Yt, f, t, F), l) return F;
                h = be.event && f.global, h && 0 == be.active++ && be.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Vt.test(f.type), u = f.url.replace(Jt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ht, "+")) : (d = f.url.slice(u.length), f.data && (f.processData || "string" == typeof f.data) && (u += (jt.test(u) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (u = u.replace(Wt, "$1"), d = (jt.test(u) ? "&" : "?") + "_=" + Rt++ + d), f.url = u + d), f.ifModified && (be.lastModified[u] && F.setRequestHeader("If-Modified-Since", be.lastModified[u]), be.etag[u] && F.setRequestHeader("If-None-Match", be.etag[u])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && F.setRequestHeader("Content-Type", f.contentType), F.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : f.accepts["*"]);
                for (p in f.headers) F.setRequestHeader(p, f.headers[p]);
                if (f.beforeSend && (!1 === f.beforeSend.call(D, F, f) || l)) return F.abort();
                if (x = "abort", A.add(f.complete), F.done(f.success), F.fail(f.error), i = oe(Qt, f, t, F)) {
                    if (F.readyState = 1, h && m.trigger("ajaxSend", [F, f]), l) return F;
                    f.async && f.timeout > 0 && (a = n.setTimeout(function() {
                        F.abort("timeout")
                    }, f.timeout));
                    try {
                        l = !1, i.send(E, r)
                    } catch (e) {
                        if (l) throw e;
                        r(-1, e)
                    }
                } else r(-1, "No Transport");
                return F
            },
            getJSON: function(e, t, n) {
                return be.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return be.get(e, void 0, t, "script")
            }
        }), be.each(["get", "post"], function(e, t) {
            be[t] = function(e, n, r, i) {
                return ve(n) && (i = i || r, r = n, n = void 0), be.ajax(be.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, be.isPlainObject(e) && e))
            }
        }), be._evalUrl = function(e, t) {
            return be.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    be.globalEval(e, t)
                }
            })
        }, be.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (ve(e) && (e = e.call(this[0])), t = be(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return ve(e) ? this.each(function(t) {
                    be(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = be(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ve(e);
                return this.each(function(n) {
                    be(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    be(this).replaceWith(this.childNodes)
                }), this
            }
        }), be.expr.pseudos.hidden = function(e) {
            return !be.expr.pseudos.visible(e)
        }, be.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, be.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var tn = {
                0: 200,
                1223: 204
            },
            nn = be.ajaxSettings.xhr();
        Fe.cors = !!nn && "withCredentials" in nn, Fe.ajax = nn = !!nn, be.ajaxTransport(function(e) {
            var t, r;
            if (Fe.cors || nn && !e.crossDomain) return {
                send: function(i, u) {
                    var s, o = e.xhr();
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) o[s] = e.xhrFields[s];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) o.setRequestHeader(s, i[s]);
                    t = function(e) {
                        return function() {
                            t && (t = r = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? u(0, "error") : u(o.status, o.statusText) : u(tn[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                binary: o.response
                            } : {
                                text: o.responseText
                            }, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), r = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = r : o.onreadystatechange = function() {
                        4 === o.readyState && n.setTimeout(function() {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), be.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), be.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return be.globalEval(e), e
                }
            }
        }), be.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), be.ajaxTransport("script", function(e) {
            if (e.crossDomain || e.scriptAttrs) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = be("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), pe.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var rn = [],
            un = /(=)\?(?=&|$)|\?\?/;
        be.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = rn.pop() || be.expando + "_" + Rt++;
                return this[e] = !0, e
            }
        }), be.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i, u, s, o = !1 !== e.jsonp && (un.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && un.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ve(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(un, "$1" + i) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return s || be.error(i + " was not called"), s[0]
            }, e.dataTypes[0] = "json", u = n[i], n[i] = function() {
                s = arguments
            }, r.always(function() {
                void 0 === u ? be(n).removeProp(i) : n[i] = u, e[i] && (e.jsonpCallback = t.jsonpCallback, rn.push(i)), s && ve(u) && u(s[0]), s = u = void 0
            }), "script"
        }), Fe.createHTMLDocument = function() {
            var e = pe.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), be.parseHTML = function(e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var r, i, u;
            return t || (Fe.createHTMLDocument ? (t = pe.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = pe.location.href, t.head.appendChild(r)) : t = pe), i = _e.exec(e), u = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, u), u && u.length && be(u).remove(), be.merge([], i.childNodes))
        }, be.fn.load = function(e, t, n) {
            var r, i, u, s = this,
                o = e.indexOf(" ");
            return o > -1 && (r = ne(e.slice(o)), e = e.slice(0, o)), ve(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && be.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                u = arguments, s.html(r ? be("<div>").append(be.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, u || [e.responseText, t, e])
                })
            }), this
        }, be.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            be.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), be.expr.pseudos.animated = function(e) {
            return be.grep(be.timers, function(t) {
                return e === t.elem
            }).length
        }, be.offset = {
            setOffset: function(e, t, n) {
                var r, i, u, s, o, a, c, l = be.css(e, "position"),
                    h = be(e),
                    p = {};
                "static" === l && (e.style.position = "relative"), o = h.offset(), u = be.css(e, "top"), a = be.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (u + a).indexOf("auto") > -1, c ? (r = h.position(), s = r.top, i = r.left) : (s = parseFloat(u) || 0, i = parseFloat(a) || 0), ve(t) && (t = t.call(e, n, be.extend({}, o))), null != t.top && (p.top = t.top - o.top + s), null != t.left && (p.left = t.left - o.left + i), "using" in t ? t.using.call(e, p) : h.css(p)
            }
        }, be.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    be.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === be.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === be.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (i = be(e).offset(), i.top += be.css(e, "borderTopWidth", !0), i.left += be.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - be.css(r, "marginTop", !0),
                        left: t.left - i.left - be.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === be.css(e, "position");) e = e.offsetParent;
                    return e || Qe
                })
            }
        }), be.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            be.fn[e] = function(r) {
                return ze(this, function(e, r, i) {
                    var u;
                    if (Se(e) ? u = e : 9 === e.nodeType && (u = e.defaultView), void 0 === i) return u ? u[t] : e[r];
                    u ? u.scrollTo(n ? u.pageXOffset : i, n ? i : u.pageYOffset) : e[r] = i
                }, e, r, arguments.length)
            }
        }), be.each(["top", "left"], function(e, t) {
            be.cssHooks[t] = q(Fe.pixelPosition, function(e, n) {
                if (n) return n = z(e, t), mt.test(n) ? be(e).position()[t] + "px" : n
            })
        }), be.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            be.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                be.fn[r] = function(i, u) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                        o = n || (!0 === i || !0 === u ? "margin" : "border");
                    return ze(this, function(t, n, i) {
                        var u;
                        return Se(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (u = t.documentElement, Math.max(t.body["scroll" + e], u["scroll" + e], t.body["offset" + e], u["offset" + e], u["client" + e])) : void 0 === i ? be.css(t, n, o) : be.style(t, n, i, o)
                    }, t, s ? i : void 0, s)
                }
            })
        }), be.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            be.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), be.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), be.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), be.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ve(e)) return r = fe.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(fe.call(arguments)))
            }, i.guid = e.guid = e.guid || be.guid++, i
        }, be.holdReady = function(e) {
            e ? be.readyWait++ : be.ready(!0)
        }, be.isArray = Array.isArray, be.parseJSON = JSON.parse, be.nodeName = c, be.isFunction = ve, be.isWindow = Se, be.camelCase = A, be.type = o, be.now = Date.now, be.isNumeric = function(e) {
            var t = be.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, r = [], void 0 !== (i = function() {
            return be
        }.apply(t, r)) && (e.exports = i);
        var sn = n.jQuery,
            on = n.$;
        return be.noConflict = function(e) {
            return n.$ === be && (n.$ = on), e && n.jQuery === be && (n.jQuery = sn), be
        }, u || (n.jQuery = n.$ = be), be
    })
}, function(e, t, n) {
    var r = n(10).generate;
    e.exports = function(e, t) {
        t || (t = {});
        var n = {},
            i = function e(i, u) {
                if ("Literal" === i.type) return i.value;
                if ("UnaryExpression" === i.type) {
                    var s = e(i.argument);
                    return "+" === i.operator ? +s : "-" === i.operator ? -s : "~" === i.operator ? ~s : "!" === i.operator ? !s : n
                }
                if ("ArrayExpression" === i.type) {
                    for (var o = [], a = 0, c = i.elements.length; a < c; a++) {
                        var l = e(i.elements[a]);
                        if (l === n) return n;
                        o.push(l)
                    }
                    return o
                }
                if ("ObjectExpression" === i.type) {
                    for (var h = {}, a = 0; a < i.properties.length; a++) {
                        var p = i.properties[a],
                            d = null === p.value ? p.value : e(p.value);
                        if (d === n) return n;
                        h[p.key.value || p.key.name] = d
                    }
                    return h
                }
                if ("BinaryExpression" === i.type || "LogicalExpression" === i.type) {
                    var c = e(i.left);
                    if (c === n) return n;
                    var f = e(i.right);
                    if (f === n) return n;
                    var D = i.operator;
                    return "==" === D ? c == f : "===" === D ? c === f : "!=" === D ? c != f : "!==" === D ? c !== f : "+" === D ? c + f : "-" === D ? c - f : "*" === D ? c * f : "/" === D ? c / f : "%" === D ? c % f : "<" === D ? c < f : "<=" === D ? c <= f : ">" === D ? c > f : ">=" === D ? c >= f : "|" === D ? c | f : "&" === D ? c & f : "^" === D ? c ^ f : "&&" === D ? c && f : "||" === D ? c || f : n
                }
                if ("Identifier" === i.type) return {}.hasOwnProperty.call(t, i.name) ? t[i.name] : n;
                if ("ThisExpression" === i.type) return {}.hasOwnProperty.call(t, "this") ? t.this : n;
                if ("CallExpression" === i.type) {
                    var m = e(i.callee);
                    if (m === n) return n;
                    if ("function" != typeof m) return n;
                    var g = i.callee.object ? e(i.callee.object) : n;
                    g === n && (g = null);
                    for (var A = [], a = 0, c = i.arguments.length; a < c; a++) {
                        var l = e(i.arguments[a]);
                        if (l === n) return n;
                        A.push(l)
                    }
                    return m.apply(g, A)
                }
                if ("MemberExpression" === i.type) {
                    var h = e(i.object);
                    if (h === n || "function" == typeof h) return n;
                    if ("Identifier" === i.property.type) return h[i.property.name];
                    var p = e(i.property);
                    return p === n ? n : h[p]
                }
                if ("ConditionalExpression" === i.type) {
                    var s = e(i.test);
                    return s === n ? n : e(s ? i.consequent : i.alternate)
                }
                if ("ExpressionStatement" === i.type) {
                    var s = e(i.expression);
                    return s === n ? n : s
                }
                if ("ReturnStatement" === i.type) return e(i.argument);
                if ("FunctionExpression" === i.type) {
                    var C = i.body.body,
                        E = {};
                    Object.keys(t).forEach(function(e) {
                        E[e] = t[e]
                    }), i.params.forEach(function(e) {
                        "Identifier" == e.type && (t[e.name] = null)
                    });
                    for (var a in C)
                        if (e(C[a]) === n) return n;
                    t = E;
                    var y = Object.keys(t),
                        x = y.map(function(e) {
                            return t[e]
                        });
                    return Function(y.join(", "), "return " + r(i)).apply(null, x)
                }
                if ("TemplateLiteral" === i.type) {
                    for (var F = "", a = 0; a < i.expressions.length; a++) F += e(i.quasis[a]), F += e(i.expressions[a]);
                    return F += e(i.quasis[a])
                }
                if ("TaggedTemplateExpression" === i.type) {
                    var v = e(i.tag),
                        S = i.quasi,
                        B = S.quasis.map(e),
                        b = S.expressions.map(e);
                    return v.apply(null, [B].concat(b))
                }
                return "TemplateElement" === i.type ? i.value.cooked : n
            }(e);
        return i === n ? void 0 : i
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = n(8),
        u = r(i),
        s = n(7),
        o = r(s),
        a = n(5),
        c = r(a),
        l = n(6).parse,
        h = (location.hash.substr(1), !1);
    chrome.tabs.onUpdated.addListener(function(e, t, n) {
        "complete" == t.status && "complete" == n.status && (h = !0, chrome.tabs.executeScript({
            file: "js/inject.js"
        }))
    }), chrome.runtime.onMessage.addListener(function(e, t, n) {
        var r = e.keyword,
            i = e.content;
        if (!r || !i) return void n("Something wrong.");
        try {
            var s = l(r).body[0].expression;
            r = (0, u.default)(s)
        } catch (e) {}
        var a = i.split(/\W/),
            h = "";
        console.log(a);
        for (var p in a) "string" == typeof r && a[p] == r ? h += '<span style="color: red;">' + r + "</span> " : h += "number" == typeof r && p == r ? '<span style="color: red;">' + a[p] + "</span> " : "<span>" + a[p] + "</span> ";
        h = c.default.sanitize(h), h = o.default.htmlPrefilter(h), document.body.innerHTML = "", document.write(h), h = document.body.innerHTML, n(h.trim())
    })
}, function(e, t, n) {
    (function(e) {
        ! function() {
            "use strict";

            function r(e) {
                return M.Expression.hasOwnProperty(e.type)
            }

            function i(e) {
                return M.Statement.hasOwnProperty(e.type)
            }

            function u() {
                return {
                    indent: null,
                    base: null,
                    parse: null,
                    comment: !1,
                    format: {
                        indent: {
                            style: "    ",
                            base: 0,
                            adjustMultilineComment: !1
                        },
                        newline: "\n",
                        space: " ",
                        json: !1,
                        renumber: !1,
                        hexadecimal: !1,
                        quotes: "single",
                        escapeless: !1,
                        compact: !1,
                        parentheses: !0,
                        semicolons: !0,
                        safeConcatenation: !1,
                        preserveBlankLines: !1
                    },
                    moz: {
                        comprehensionExpressionStartsWithAssignment: !1,
                        starlessGenerator: !1
                    },
                    sourceMap: null,
                    sourceMapRoot: null,
                    sourceMapWithCode: !1,
                    directive: !1,
                    raw: !0,
                    verbatim: null,
                    sourceCode: null
                }
            }

            function s(e, t) {
                var n = "";
                for (t |= 0; t > 0; t >>>= 1, e += e) 1 & t && (n += e);
                return n
            }

            function o(e) {
                return /[\r\n]/g.test(e)
            }

            function a(e) {
                var t = e.length;
                return t && H.code.isLineTerminator(e.charCodeAt(t - 1))
            }

            function c(e, t) {
                var n;
                for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }

            function l(e, t) {
                function n(e) {
                    return "object" == typeof e && e instanceof Object && !(e instanceof RegExp)
                }
                var r, i;
                for (r in t) t.hasOwnProperty(r) && (i = t[r], n(i) ? n(e[r]) ? l(e[r], i) : e[r] = l({}, i) : e[r] = i);
                return e
            }

            function h(e) {
                var t, n, r, i, u;
                if (e !== e) throw new Error("Numeric literal whose value is NaN");
                if (e < 0 || 0 === e && 1 / e < 0) throw new Error("Numeric literal whose value is negative");
                if (e === 1 / 0) return K ? "null" : G ? "1e400" : "1e+400";
                if (t = "" + e, !G || t.length < 3) return t;
                for (n = t.indexOf("."), K || 48 !== t.charCodeAt(0) || 1 !== n || (n = 0, t = t.slice(1)), r = t, t = t.replace("e+", "e"), i = 0, (u = r.indexOf("e")) > 0 && (i = +r.slice(u + 1), r = r.slice(0, u)), n >= 0 && (i -= r.length - n - 1, r = +(r.slice(0, n) + r.slice(n + 1)) + ""), u = 0; 48 === r.charCodeAt(r.length + u - 1);) --u;
                return 0 !== u && (i -= u, r = r.slice(0, u)), 0 !== i && (r += "e" + i), (r.length < t.length || V && e > 1e12 && Math.floor(e) === e && (r = "0x" + e.toString(16)).length < t.length) && +r === e && (t = r), t
            }

            function p(e, t) {
                return 8232 == (-2 & e) ? (t ? "u" : "\\u") + (8232 === e ? "2028" : "2029") : 10 === e || 13 === e ? (t ? "" : "\\") + (10 === e ? "n" : "r") : String.fromCharCode(e)
            }

            function d(e) {
                var t, n, r, i, u, s, o, a;
                if (n = e.toString(), e.source) {
                    if (!(t = n.match(/\/([^/]*)$/))) return n;
                    for (r = t[1], n = "", o = !1, a = !1, i = 0, u = e.source.length; i < u; ++i) s = e.source.charCodeAt(i), a ? (n += p(s, a), a = !1) : (o ? 93 === s && (o = !1) : 47 === s ? n += "\\" : 91 === s && (o = !0), n += p(s, a), a = 92 === s);
                    return "/" + n + "/" + r
                }
                return n
            }

            function f(e, t) {
                var n;
                return 8 === e ? "\\b" : 12 === e ? "\\f" : 9 === e ? "\\t" : (n = e.toString(16).toUpperCase(), K || e > 255 ? "\\u" + "0000".slice(n.length) + n : 0 !== e || H.code.isDecimalDigit(t) ? 11 === e ? "\\x0B" : "\\x" + "00".slice(n.length) + n : "\\0")
            }

            function D(e) {
                if (92 === e) return "\\\\";
                if (10 === e) return "\\n";
                if (13 === e) return "\\r";
                if (8232 === e) return "\\u2028";
                if (8233 === e) return "\\u2029";
                throw new Error("Incorrectly classified character")
            }

            function m(e) {
                var t, n, r, i;
                for (i = "double" === $ ? '"' : "'", t = 0, n = e.length; t < n; ++t) {
                    if (39 === (r = e.charCodeAt(t))) {
                        i = '"';
                        break
                    }
                    if (34 === r) {
                        i = "'";
                        break
                    }
                    92 === r && ++t
                }
                return i + e + i
            }

            function g(e) {
                var t, n, r, i, u, s = "",
                    o = 0,
                    a = 0;
                for (t = 0, n = e.length; t < n; ++t) {
                    if (39 === (r = e.charCodeAt(t))) ++o;
                    else if (34 === r) ++a;
                    else if (47 === r && K) s += "\\";
                    else {
                        if (H.code.isLineTerminator(r) || 92 === r) {
                            s += D(r);
                            continue
                        }
                        if (!H.code.isIdentifierPartES5(r) && (K && r < 32 || !K && !Y && (r < 32 || r > 126))) {
                            s += f(r, e.charCodeAt(t + 1));
                            continue
                        }
                    }
                    s += String.fromCharCode(r)
                }
                if (i = !("double" === $ || "auto" === $ && a < o), u = i ? "'" : '"', !(i ? o : a)) return u + s + u;
                for (e = s, s = u, t = 0, n = e.length; t < n; ++t) r = e.charCodeAt(t), (39 === r && i || 34 === r && !i) && (s += "\\"), s += String.fromCharCode(r);
                return s + u
            }

            function A(e) {
                var t, n, r, i = "";
                for (t = 0, n = e.length; t < n; ++t) r = e[t], i += Array.isArray(r) ? A(r) : r;
                return i
            }

            function C(e, t) {
                if (!se) return Array.isArray(e) ? A(e) : e;
                if (null == t) {
                    if (e instanceof q) return e;
                    t = {}
                }
                return null == t.loc ? new q(null, null, se, e, t.name || null) : new q(t.loc.start.line, t.loc.start.column, !0 === se ? t.loc.source || null : se, e, t.name || null)
            }

            function E() {
                return Z || " "
            }

            function y(e, t) {
                var n, r, i, u;
                return n = C(e).toString(), 0 === n.length ? [t] : (r = C(t).toString(), 0 === r.length ? [e] : (i = n.charCodeAt(n.length - 1), u = r.charCodeAt(0), (43 === i || 45 === i) && i === u || H.code.isIdentifierPartES5(i) && H.code.isIdentifierPartES5(u) || 47 === i && 105 === u ? [e, E(), t] : H.code.isWhiteSpace(i) || H.code.isLineTerminator(i) || H.code.isWhiteSpace(u) || H.code.isLineTerminator(u) ? [e, t] : [e, Z, t]))
            }

            function x(e) {
                return [J, e]
            }

            function F(e) {
                var t;
                t = J, J += W, e(J), J = t
            }

            function v(e) {
                var t;
                for (t = e.length - 1; t >= 0 && !H.code.isLineTerminator(e.charCodeAt(t)); --t);
                return e.length - 1 - t
            }

            function S(e, t) {
                var n, r, i, u, s, o, a, c;
                for (n = e.split(/\r\n|[\r\n]/), o = Number.MAX_VALUE, r = 1, i = n.length; r < i; ++r) {
                    for (u = n[r], s = 0; s < u.length && H.code.isWhiteSpace(u.charCodeAt(s));) ++s;
                    o > s && (o = s)
                }
                for (void 0 !== t ? (a = J, "*" === n[1][o] && (t += " "), J = t) : (1 & o && --o, a = J), r = 1, i = n.length; r < i; ++r) c = C(x(n[r].slice(o))), n[r] = se ? c.join("") : c;
                return J = a, n.join("\n")
            }

            function B(e, t) {
                if ("Line" === e.type) {
                    if (a(e.value)) return "//" + e.value;
                    var n = "//" + e.value;
                    return ae || (n += "\n"), n
                }
                return ie.format.indent.adjustMultilineComment && /[\n\r]/.test(e.value) ? S("/*" + e.value + "*/", t) : "/*" + e.value + "*/"
            }

            function b(e, t) {
                var n, r, i, u, o, c, l, h, p, d, f, D, m, g;
                if (e.leadingComments && e.leadingComments.length > 0) {
                    if (u = t, ae) {
                        for (i = e.leadingComments[0], t = [], h = i.extendedRange, p = i.range, f = oe.substring(h[0], p[0]), g = (f.match(/\n/g) || []).length, g > 0 ? (t.push(s("\n", g)), t.push(x(B(i)))) : (t.push(f), t.push(B(i))), d = p, n = 1, r = e.leadingComments.length; n < r; n++) i = e.leadingComments[n], p = i.range, D = oe.substring(d[1], p[0]), g = (D.match(/\n/g) || []).length, t.push(s("\n", g)), t.push(x(B(i))), d = p;
                        m = oe.substring(p[1], h[1]), g = (m.match(/\n/g) || []).length, t.push(s("\n", g))
                    } else
                        for (i = e.leadingComments[0], t = [], ne && e.type === j.Program && 0 === e.body.length && t.push("\n"), t.push(B(i)), a(C(t).toString()) || t.push("\n"), n = 1, r = e.leadingComments.length; n < r; ++n) i = e.leadingComments[n], l = [B(i)], a(C(l).toString()) || l.push("\n"), t.push(x(l));
                    t.push(x(u))
                }
                if (e.trailingComments)
                    if (ae) i = e.trailingComments[0], h = i.extendedRange, p = i.range, f = oe.substring(h[0], p[0]), g = (f.match(/\n/g) || []).length, g > 0 ? (t.push(s("\n", g)), t.push(x(B(i)))) : (t.push(f), t.push(B(i)));
                    else
                        for (o = !a(C(t).toString()), c = s(" ", v(C([J, t, W]).toString())), n = 0, r = e.trailingComments.length; n < r; ++n) i = e.trailingComments[n], o ? (t = 0 === n ? [t, W] : [t, c], t.push(B(i, c))) : t = [t, x(B(i))], n === r - 1 || a(C(t).toString()) || (t = [t, "\n"]);
                return t
            }

            function w(e, t, n) {
                var r, i = 0;
                for (r = e; r < t; r++) "\n" === oe[r] && i++;
                for (r = 1; r < i; r++) n.push(Q)
            }

            function k(e, t, n) {
                return t < n ? ["(", e, ")"] : e
            }

            function T(e) {
                var t, n, r;
                for (r = e.split(/\r\n|\n/), t = 1, n = r.length; t < n; t++) r[t] = Q + J + r[t];
                return r
            }

            function N(e, t) {
                var n, r, i;
                return n = e[ie.verbatim], "string" == typeof n ? r = k(T(n), U.Sequence, t) : (r = T(n.content), i = null != n.precedence ? n.precedence : U.Sequence, r = k(r, i, t)), C(r, e)
            }

            function M() {}

            function _(e) {
                return C(e.name, e)
            }

            function L(e, t) {
                return e.async ? "async" + (t ? E() : Z) : ""
            }

            function I(e) {
                return e.generator && !ie.moz.starlessGenerator ? "*" + Z : ""
            }

            function P(e) {
                var t = e.value,
                    n = "";
                return t.async && (n += L(t, !e.computed)), t.generator && (n += I(t) ? "*" : ""), n
            }

            function O(e) {
                var t;
                if (t = new M, i(e)) return t.generateStatement(e, pe);
                if (r(e)) return t.generateExpression(e, U.Sequence, he);
                throw new Error("Unknown node type: " + e.type)
            }

            function R(r, i) {
                var o, a, c = u();
                return null != i ? ("string" == typeof i.indent && (c.format.indent.style = i.indent), "number" == typeof i.base && (c.format.indent.base = i.base), i = l(c, i), W = i.format.indent.style, J = "string" == typeof i.base ? i.base : s(W, i.format.indent.base)) : (i = c, W = i.format.indent.style, J = s(W, i.format.indent.base)), K = i.format.json, G = i.format.renumber, V = !K && i.format.hexadecimal, $ = K ? "double" : i.format.quotes, Y = i.format.escapeless, Q = i.format.newline, Z = i.format.space, i.format.compact && (Q = Z = W = J = ""), ee = i.format.parentheses, te = i.format.semicolons, ne = i.format.safeConcatenation, re = i.directive, ue = K ? null : i.parse, se = i.sourceMap, oe = i.sourceCode, ae = i.format.preserveBlankLines && null !== oe, ie = i, se && (q = t.browser ? e.sourceMap.SourceNode : n(17).SourceNode), o = O(r), se ? (a = o.toStringWithSourceMap({
                    file: i.file,
                    sourceRoot: i.sourceMapRoot
                }), i.sourceContent && a.map.setSourceContent(i.sourceMap, i.sourceContent), i.sourceMapWithCode ? a : a.map.toString()) : (a = {
                    code: o.toString(),
                    map: null
                }, i.sourceMapWithCode ? a : a.code)
            }
            var j, U, z, q, X, H, J, W, K, G, V, $, Y, Q, Z, ee, te, ne, re, ie, ue, se, oe, ae, ce, le;
            X = n(19), H = n(23), j = X.Syntax, U = {
                Sequence: 0,
                Yield: 1,
                Assignment: 1,
                Conditional: 2,
                ArrowFunction: 2,
                LogicalOR: 3,
                LogicalAND: 4,
                BitwiseOR: 5,
                BitwiseXOR: 6,
                BitwiseAND: 7,
                Equality: 8,
                Relational: 9,
                BitwiseSHIFT: 10,
                Additive: 11,
                Multiplicative: 12,
                Exponentiation: 13,
                Await: 14,
                Unary: 14,
                Postfix: 15,
                Call: 16,
                New: 17,
                TaggedTemplate: 18,
                Member: 19,
                Primary: 20
            }, z = {
                "||": U.LogicalOR,
                "&&": U.LogicalAND,
                "|": U.BitwiseOR,
                "^": U.BitwiseXOR,
                "&": U.BitwiseAND,
                "==": U.Equality,
                "!=": U.Equality,
                "===": U.Equality,
                "!==": U.Equality,
                is: U.Equality,
                isnt: U.Equality,
                "<": U.Relational,
                ">": U.Relational,
                "<=": U.Relational,
                ">=": U.Relational,
                in: U.Relational,
                instanceof: U.Relational,
                "<<": U.BitwiseSHIFT,
                ">>": U.BitwiseSHIFT,
                ">>>": U.BitwiseSHIFT,
                "+": U.Additive,
                "-": U.Additive,
                "*": U.Multiplicative,
                "%": U.Multiplicative,
                "/": U.Multiplicative,
                "**": U.Exponentiation
            };
            var he = 7,
                pe = 1;
            M.prototype.maybeBlock = function(e, t) {
                var n, r, i = this;
                return r = !ie.comment || !e.leadingComments, e.type === j.BlockStatement && r ? [Z, this.generateStatement(e, t)] : e.type === j.EmptyStatement && r ? ";" : (F(function() {
                    n = [Q, x(i.generateStatement(e, t))]
                }), n)
            }, M.prototype.maybeBlockSuffix = function(e, t) {
                var n = a(C(t).toString());
                return e.type !== j.BlockStatement || ie.comment && e.leadingComments || n ? n ? [t, J] : [t, Q, J] : [t, Z]
            }, M.prototype.generatePattern = function(e, t, n) {
                return e.type === j.Identifier ? _(e) : this.generateExpression(e, t, n)
            }, M.prototype.generateFunctionParams = function(e) {
                var t, n, r, i;
                if (i = !1, e.type !== j.ArrowFunctionExpression || e.rest || e.defaults && 0 !== e.defaults.length || 1 !== e.params.length || e.params[0].type !== j.Identifier) {
                    for (r = e.type === j.ArrowFunctionExpression ? [L(e, !1)] : [], r.push("("), e.defaults && (i = !0), t = 0, n = e.params.length; t < n; ++t) i && e.defaults[t] ? r.push(this.generateAssignment(e.params[t], e.defaults[t], "=", U.Assignment, he)) : r.push(this.generatePattern(e.params[t], U.Assignment, he)), t + 1 < n && r.push("," + Z);
                    e.rest && (e.params.length && r.push("," + Z), r.push("..."), r.push(_(e.rest))), r.push(")")
                } else r = [L(e, !0), _(e.params[0])];
                return r
            }, M.prototype.generateFunctionBody = function(e) {
                var t, n;
                return t = this.generateFunctionParams(e), e.type === j.ArrowFunctionExpression && (t.push(Z), t.push("=>")), e.expression ? (t.push(Z), n = this.generateExpression(e.body, U.Assignment, he), "{" === n.toString().charAt(0) && (n = ["(", n, ")"]), t.push(n)) : t.push(this.maybeBlock(e.body, 9)), t
            }, M.prototype.generateIterationForStatement = function(e, t, n) {
                var r = ["for" + (t.await ? E() + "await" : "") + Z + "("],
                    i = this;
                return F(function() {
                    t.left.type === j.VariableDeclaration ? F(function() {
                        r.push(t.left.kind + E()), r.push(i.generateStatement(t.left.declarations[0], 0))
                    }) : r.push(i.generateExpression(t.left, U.Call, he)), r = y(r, e), r = [y(r, i.generateExpression(t.right, U.Assignment, he)), ")"]
                }), r.push(this.maybeBlock(t.body, n)), r
            }, M.prototype.generatePropertyKey = function(e, t) {
                var n = [];
                return t && n.push("["), n.push(this.generateExpression(e, U.Sequence, he)), t && n.push("]"), n
            }, M.prototype.generateAssignment = function(e, t, n, r, i) {
                return U.Assignment < r && (i |= 1), k([this.generateExpression(e, U.Call, i), Z + n + Z, this.generateExpression(t, U.Assignment, i)], U.Assignment, r)
            }, M.prototype.semicolon = function(e) {
                return !te && 32 & e ? "" : ";"
            }, M.Statement = {
                BlockStatement: function(e, t) {
                    var n, r, i = ["{", Q],
                        u = this;
                    return F(function() {
                        0 === e.body.length && ae && (n = e.range, n[1] - n[0] > 2 && (r = oe.substring(n[0] + 1, n[1] - 1), "\n" === r[0] && (i = ["{"]), i.push(r)));
                        var s, o, c, l;
                        for (l = pe, 8 & t && (l |= 16), s = 0, o = e.body.length; s < o; ++s) ae && (0 === s && (e.body[0].leadingComments && (n = e.body[0].leadingComments[0].extendedRange, r = oe.substring(n[0], n[1]), "\n" === r[0] && (i = ["{"])), e.body[0].leadingComments || w(e.range[0], e.body[0].range[0], i)), s > 0 && (e.body[s - 1].trailingComments || e.body[s].leadingComments || w(e.body[s - 1].range[1], e.body[s].range[0], i))), s === o - 1 && (l |= 32), c = e.body[s].leadingComments && ae ? u.generateStatement(e.body[s], l) : x(u.generateStatement(e.body[s], l)), i.push(c), a(C(c).toString()) || (ae && s < o - 1 ? e.body[s + 1].leadingComments || i.push(Q) : i.push(Q)), ae && s === o - 1 && (e.body[s].trailingComments || w(e.body[s].range[1], e.range[1], i))
                    }), i.push(x("}")), i
                },
                BreakStatement: function(e, t) {
                    return e.label ? "break " + e.label.name + this.semicolon(t) : "break" + this.semicolon(t)
                },
                ContinueStatement: function(e, t) {
                    return e.label ? "continue " + e.label.name + this.semicolon(t) : "continue" + this.semicolon(t)
                },
                ClassBody: function(e, t) {
                    var n = ["{", Q],
                        r = this;
                    return F(function(t) {
                        var i, u;
                        for (i = 0, u = e.body.length; i < u; ++i) n.push(t), n.push(r.generateExpression(e.body[i], U.Sequence, he)), i + 1 < u && n.push(Q)
                    }), a(C(n).toString()) || n.push(Q), n.push(J), n.push("}"), n
                },
                ClassDeclaration: function(e, t) {
                    var n, r;
                    return n = ["class"], e.id && (n = y(n, this.generateExpression(e.id, U.Sequence, he))), e.superClass && (r = y("extends", this.generateExpression(e.superClass, U.Unary, he)), n = y(n, r)), n.push(Z), n.push(this.generateStatement(e.body, 33)), n
                },
                DirectiveStatement: function(e, t) {
                    return ie.raw && e.raw ? e.raw + this.semicolon(t) : m(e.directive) + this.semicolon(t)
                },
                DoWhileStatement: function(e, t) {
                    var n = y("do", this.maybeBlock(e.body, pe));
                    return n = this.maybeBlockSuffix(e.body, n), y(n, ["while" + Z + "(", this.generateExpression(e.test, U.Sequence, he), ")" + this.semicolon(t)])
                },
                CatchClause: function(e, t) {
                    var n, r = this;
                    return F(function() {
                        var t;
                        e.param ? (n = ["catch" + Z + "(", r.generateExpression(e.param, U.Sequence, he), ")"], e.guard && (t = r.generateExpression(e.guard, U.Sequence, he), n.splice(2, 0, " if ", t))) : n = ["catch"]
                    }), n.push(this.maybeBlock(e.body, pe)), n
                },
                DebuggerStatement: function(e, t) {
                    return "debugger" + this.semicolon(t)
                },
                EmptyStatement: function(e, t) {
                    return ";"
                },
                ExportDefaultDeclaration: function(e, t) {
                    var n, r = ["export"];
                    return n = 32 & t ? 33 : pe, r = y(r, "default"), r = i(e.declaration) ? y(r, this.generateStatement(e.declaration, n)) : y(r, this.generateExpression(e.declaration, U.Assignment, he) + this.semicolon(t))
                },
                ExportNamedDeclaration: function(e, t) {
                    var n, r = ["export"],
                        i = this;
                    return n = 32 & t ? 33 : pe, e.declaration ? y(r, this.generateStatement(e.declaration, n)) : (e.specifiers && (0 === e.specifiers.length ? r = y(r, "{" + Z + "}") : e.specifiers[0].type === j.ExportBatchSpecifier ? r = y(r, this.generateExpression(e.specifiers[0], U.Sequence, he)) : (r = y(r, "{"), F(function(t) {
                        var n, u;
                        for (r.push(Q), n = 0, u = e.specifiers.length; n < u; ++n) r.push(t), r.push(i.generateExpression(e.specifiers[n], U.Sequence, he)), n + 1 < u && r.push("," + Q)
                    }), a(C(r).toString()) || r.push(Q), r.push(J + "}")), e.source ? r = y(r, ["from" + Z, this.generateExpression(e.source, U.Sequence, he), this.semicolon(t)]) : r.push(this.semicolon(t))), r)
                },
                ExportAllDeclaration: function(e, t) {
                    return ["export" + Z, "*" + Z, "from" + Z, this.generateExpression(e.source, U.Sequence, he), this.semicolon(t)]
                },
                ExpressionStatement: function(e, t) {
                    var n, r;
                    return n = [this.generateExpression(e.expression, U.Sequence, he)], r = C(n).toString(), 123 === r.charCodeAt(0) || function(e) {
                        var t;
                        return "class" === e.slice(0, 5) && (123 === (t = e.charCodeAt(5)) || H.code.isWhiteSpace(t) || H.code.isLineTerminator(t))
                    }(r) || function(e) {
                        var t;
                        return "function" === e.slice(0, 8) && (40 === (t = e.charCodeAt(8)) || H.code.isWhiteSpace(t) || 42 === t || H.code.isLineTerminator(t))
                    }(r) || function(e) {
                        var t, n, r;
                        if ("async" !== e.slice(0, 5)) return !1;
                        if (!H.code.isWhiteSpace(e.charCodeAt(5))) return !1;
                        for (n = 6, r = e.length; n < r && H.code.isWhiteSpace(e.charCodeAt(n)); ++n);
                        return n !== r && ("function" === e.slice(n, n + 8) && (40 === (t = e.charCodeAt(n + 8)) || H.code.isWhiteSpace(t) || 42 === t || H.code.isLineTerminator(t)))
                    }(r) || re && 16 & t && e.expression.type === j.Literal && "string" == typeof e.expression.value ? n = ["(", n, ")" + this.semicolon(t)] : n.push(this.semicolon(t)), n
                },
                ImportDeclaration: function(e, t) {
                    var n, r, i = this;
                    return 0 === e.specifiers.length ? ["import", Z, this.generateExpression(e.source, U.Sequence, he), this.semicolon(t)] : (n = ["import"], r = 0, e.specifiers[r].type === j.ImportDefaultSpecifier && (n = y(n, [this.generateExpression(e.specifiers[r], U.Sequence, he)]), ++r), e.specifiers[r] && (0 !== r && n.push(","), e.specifiers[r].type === j.ImportNamespaceSpecifier ? n = y(n, [Z, this.generateExpression(e.specifiers[r], U.Sequence, he)]) : (n.push(Z + "{"), e.specifiers.length - r == 1 ? (n.push(Z), n.push(this.generateExpression(e.specifiers[r], U.Sequence, he)), n.push(Z + "}" + Z)) : (F(function(t) {
                        var u, s;
                        for (n.push(Q), u = r, s = e.specifiers.length; u < s; ++u) n.push(t), n.push(i.generateExpression(e.specifiers[u], U.Sequence, he)), u + 1 < s && n.push("," + Q)
                    }), a(C(n).toString()) || n.push(Q), n.push(J + "}" + Z)))), n = y(n, ["from" + Z, this.generateExpression(e.source, U.Sequence, he), this.semicolon(t)]))
                },
                VariableDeclarator: function(e, t) {
                    var n = 1 & t ? he : 6;
                    return e.init ? [this.generateExpression(e.id, U.Assignment, n), Z, "=", Z, this.generateExpression(e.init, U.Assignment, n)] : this.generatePattern(e.id, U.Assignment, n)
                },
                VariableDeclaration: function(e, t) {
                    function n() {
                        for (s = e.declarations[0], ie.comment && s.leadingComments ? (r.push("\n"), r.push(x(a.generateStatement(s, o)))) : (r.push(E()), r.push(a.generateStatement(s, o))), i = 1, u = e.declarations.length; i < u; ++i) s = e.declarations[i], ie.comment && s.leadingComments ? (r.push("," + Q), r.push(x(a.generateStatement(s, o)))) : (r.push("," + Z), r.push(a.generateStatement(s, o)))
                    }
                    var r, i, u, s, o, a = this;
                    return r = [e.kind], o = 1 & t ? pe : 0, e.declarations.length > 1 ? F(n) : n(), r.push(this.semicolon(t)), r
                },
                ThrowStatement: function(e, t) {
                    return [y("throw", this.generateExpression(e.argument, U.Sequence, he)), this.semicolon(t)]
                },
                TryStatement: function(e, t) {
                    var n, r, i, u;
                    if (n = ["try", this.maybeBlock(e.block, pe)], n = this.maybeBlockSuffix(e.block, n), e.handlers)
                        for (r = 0, i = e.handlers.length; r < i; ++r) n = y(n, this.generateStatement(e.handlers[r], pe)), (e.finalizer || r + 1 !== i) && (n = this.maybeBlockSuffix(e.handlers[r].body, n));
                    else {
                        for (u = e.guardedHandlers || [], r = 0, i = u.length; r < i; ++r) n = y(n, this.generateStatement(u[r], pe)), (e.finalizer || r + 1 !== i) && (n = this.maybeBlockSuffix(u[r].body, n));
                        if (e.handler)
                            if (Array.isArray(e.handler))
                                for (r = 0, i = e.handler.length; r < i; ++r) n = y(n, this.generateStatement(e.handler[r], pe)), (e.finalizer || r + 1 !== i) && (n = this.maybeBlockSuffix(e.handler[r].body, n));
                            else n = y(n, this.generateStatement(e.handler, pe)), e.finalizer && (n = this.maybeBlockSuffix(e.handler.body, n))
                    }
                    return e.finalizer && (n = y(n, ["finally", this.maybeBlock(e.finalizer, pe)])), n
                },
                SwitchStatement: function(e, t) {
                    var n, r, i, u, s, o = this;
                    if (F(function() {
                            n = ["switch" + Z + "(", o.generateExpression(e.discriminant, U.Sequence, he), ")" + Z + "{" + Q]
                        }), e.cases)
                        for (s = pe, i = 0, u = e.cases.length; i < u; ++i) i === u - 1 && (s |= 32), r = x(this.generateStatement(e.cases[i], s)), n.push(r), a(C(r).toString()) || n.push(Q);
                    return n.push(x("}")), n
                },
                SwitchCase: function(e, t) {
                    var n, r, i, u, s, o = this;
                    return F(function() {
                        for (n = e.test ? [y("case", o.generateExpression(e.test, U.Sequence, he)), ":"] : ["default:"], i = 0, u = e.consequent.length, u && e.consequent[0].type === j.BlockStatement && (r = o.maybeBlock(e.consequent[0], pe), n.push(r), i = 1), i === u || a(C(n).toString()) || n.push(Q), s = pe; i < u; ++i) i === u - 1 && 32 & t && (s |= 32), r = x(o.generateStatement(e.consequent[i], s)), n.push(r), i + 1 === u || a(C(r).toString()) || n.push(Q)
                    }), n
                },
                IfStatement: function(e, t) {
                    var n, r, i, u = this;
                    return F(function() {
                        n = ["if" + Z + "(", u.generateExpression(e.test, U.Sequence, he), ")"]
                    }), i = 32 & t, r = pe, i && (r |= 32), e.alternate ? (n.push(this.maybeBlock(e.consequent, pe)), n = this.maybeBlockSuffix(e.consequent, n), n = e.alternate.type === j.IfStatement ? y(n, ["else ", this.generateStatement(e.alternate, r)]) : y(n, y("else", this.maybeBlock(e.alternate, r)))) : n.push(this.maybeBlock(e.consequent, r)), n
                },
                ForStatement: function(e, t) {
                    var n, r = this;
                    return F(function() {
                        n = ["for" + Z + "("], e.init ? e.init.type === j.VariableDeclaration ? n.push(r.generateStatement(e.init, 0)) : (n.push(r.generateExpression(e.init, U.Sequence, 6)), n.push(";")) : n.push(";"), e.test ? (n.push(Z), n.push(r.generateExpression(e.test, U.Sequence, he)), n.push(";")) : n.push(";"), e.update ? (n.push(Z), n.push(r.generateExpression(e.update, U.Sequence, he)), n.push(")")) : n.push(")")
                    }), n.push(this.maybeBlock(e.body, 32 & t ? 33 : pe)), n
                },
                ForInStatement: function(e, t) {
                    return this.generateIterationForStatement("in", e, 32 & t ? 33 : pe)
                },
                ForOfStatement: function(e, t) {
                    return this.generateIterationForStatement("of", e, 32 & t ? 33 : pe)
                },
                LabeledStatement: function(e, t) {
                    return [e.label.name + ":", this.maybeBlock(e.body, 32 & t ? 33 : pe)]
                },
                Program: function(e, t) {
                    var n, r, i, u, s;
                    for (u = e.body.length, n = [ne && u > 0 ? "\n" : ""], s = 17, i = 0; i < u; ++i) ne || i !== u - 1 || (s |= 32), ae && (0 === i && (e.body[0].leadingComments || w(e.range[0], e.body[i].range[0], n)), i > 0 && (e.body[i - 1].trailingComments || e.body[i].leadingComments || w(e.body[i - 1].range[1], e.body[i].range[0], n))), r = x(this.generateStatement(e.body[i], s)), n.push(r), i + 1 < u && !a(C(r).toString()) && (ae ? e.body[i + 1].leadingComments || n.push(Q) : n.push(Q)), ae && i === u - 1 && (e.body[i].trailingComments || w(e.body[i].range[1], e.range[1], n));
                    return n
                },
                FunctionDeclaration: function(e, t) {
                    return [L(e, !0), "function", I(e) || E(), e.id ? _(e.id) : "", this.generateFunctionBody(e)]
                },
                ReturnStatement: function(e, t) {
                    return e.argument ? [y("return", this.generateExpression(e.argument, U.Sequence, he)), this.semicolon(t)] : ["return" + this.semicolon(t)]
                },
                WhileStatement: function(e, t) {
                    var n, r = this;
                    return F(function() {
                        n = ["while" + Z + "(", r.generateExpression(e.test, U.Sequence, he), ")"]
                    }), n.push(this.maybeBlock(e.body, 32 & t ? 33 : pe)), n
                },
                WithStatement: function(e, t) {
                    var n, r = this;
                    return F(function() {
                        n = ["with" + Z + "(", r.generateExpression(e.object, U.Sequence, he), ")"]
                    }), n.push(this.maybeBlock(e.body, 32 & t ? 33 : pe)), n
                }
            }, c(M.prototype, M.Statement), M.Expression = {
                SequenceExpression: function(e, t, n) {
                    var r, i, u;
                    for (U.Sequence < t && (n |= 1), r = [], i = 0, u = e.expressions.length; i < u; ++i) r.push(this.generateExpression(e.expressions[i], U.Assignment, n)), i + 1 < u && r.push("," + Z);
                    return k(r, U.Sequence, t)
                },
                AssignmentExpression: function(e, t, n) {
                    return this.generateAssignment(e.left, e.right, e.operator, t, n)
                },
                ArrowFunctionExpression: function(e, t, n) {
                    return k(this.generateFunctionBody(e), U.ArrowFunction, t)
                },
                ConditionalExpression: function(e, t, n) {
                    return U.Conditional < t && (n |= 1), k([this.generateExpression(e.test, U.LogicalOR, n), Z + "?" + Z, this.generateExpression(e.consequent, U.Assignment, n), Z + ":" + Z, this.generateExpression(e.alternate, U.Assignment, n)], U.Conditional, t)
                },
                LogicalExpression: function(e, t, n) {
                    return this.BinaryExpression(e, t, n)
                },
                BinaryExpression: function(e, t, n) {
                    var r, i, u, s, o, a;
                    return s = z[e.operator], i = "**" === e.operator ? U.Postfix : s, u = "**" === e.operator ? s : s + 1, s < t && (n |= 1), o = this.generateExpression(e.left, i, n), a = o.toString(), r = 47 === a.charCodeAt(a.length - 1) && H.code.isIdentifierPartES5(e.operator.charCodeAt(0)) ? [o, E(), e.operator] : y(o, e.operator), o = this.generateExpression(e.right, u, n), "/" === e.operator && "/" === o.toString().charAt(0) || "<" === e.operator.slice(-1) && "!--" === o.toString().slice(0, 3) ? (r.push(E()), r.push(o)) : r = y(r, o), "in" !== e.operator || 1 & n ? k(r, s, t) : ["(", r, ")"]
                },
                CallExpression: function(e, t, n) {
                    var r, i, u;
                    for (r = [this.generateExpression(e.callee, U.Call, 3)], r.push("("), i = 0, u = e.arguments.length; i < u; ++i) r.push(this.generateExpression(e.arguments[i], U.Assignment, he)), i + 1 < u && r.push("," + Z);
                    return r.push(")"), 2 & n ? k(r, U.Call, t) : ["(", r, ")"]
                },
                NewExpression: function(e, t, n) {
                    var r, i, u, s, o;
                    if (i = e.arguments.length, o = 4 & n && !ee && 0 === i ? 5 : 1, r = y("new", this.generateExpression(e.callee, U.New, o)), !(4 & n) || ee || i > 0) {
                        for (r.push("("), u = 0, s = i; u < s; ++u) r.push(this.generateExpression(e.arguments[u], U.Assignment, he)), u + 1 < s && r.push("," + Z);
                        r.push(")")
                    }
                    return k(r, U.New, t)
                },
                MemberExpression: function(e, t, n) {
                    var r, i;
                    return r = [this.generateExpression(e.object, U.Call, 2 & n ? 3 : 1)], e.computed ? (r.push("["), r.push(this.generateExpression(e.property, U.Sequence, 2 & n ? he : 5)), r.push("]")) : (e.object.type === j.Literal && "number" == typeof e.object.value && (i = C(r).toString(), i.indexOf(".") < 0 && !/[eExX]/.test(i) && H.code.isDecimalDigit(i.charCodeAt(i.length - 1)) && !(i.length >= 2 && 48 === i.charCodeAt(0)) && r.push(" ")), r.push("."), r.push(_(e.property))), k(r, U.Member, t)
                },
                MetaProperty: function(e, t, n) {
                    var r;
                    return r = [], r.push("string" == typeof e.meta ? e.meta : _(e.meta)), r.push("."), r.push("string" == typeof e.property ? e.property : _(e.property)), k(r, U.Member, t)
                },
                UnaryExpression: function(e, t, n) {
                    var r, i, u, s, o;
                    return i = this.generateExpression(e.argument, U.Unary, he), "" === Z ? r = y(e.operator, i) : (r = [e.operator], e.operator.length > 2 ? r = y(r, i) : (s = C(r).toString(), o = s.charCodeAt(s.length - 1), u = i.toString().charCodeAt(0), (43 === o || 45 === o) && o === u || H.code.isIdentifierPartES5(o) && H.code.isIdentifierPartES5(u) ? (r.push(E()), r.push(i)) : r.push(i))), k(r, U.Unary, t)
                },
                YieldExpression: function(e, t, n) {
                    var r;
                    return r = e.delegate ? "yield*" : "yield", e.argument && (r = y(r, this.generateExpression(e.argument, U.Yield, he))), k(r, U.Yield, t)
                },
                AwaitExpression: function(e, t, n) {
                    return k(y(e.all ? "await*" : "await", this.generateExpression(e.argument, U.Await, he)), U.Await, t)
                },
                UpdateExpression: function(e, t, n) {
                    return e.prefix ? k([e.operator, this.generateExpression(e.argument, U.Unary, he)], U.Unary, t) : k([this.generateExpression(e.argument, U.Postfix, he), e.operator], U.Postfix, t)
                },
                FunctionExpression: function(e, t, n) {
                    var r = [L(e, !0), "function"];
                    return e.id ? (r.push(I(e) || E()), r.push(_(e.id))) : r.push(I(e) || Z), r.push(this.generateFunctionBody(e)), r
                },
                ArrayPattern: function(e, t, n) {
                    return this.ArrayExpression(e, t, n, !0)
                },
                ArrayExpression: function(e, t, n, r) {
                    var i, u, s = this;
                    return e.elements.length ? (u = !r && e.elements.length > 1, i = ["[", u ? Q : ""], F(function(t) {
                        var n, r;
                        for (n = 0, r = e.elements.length; n < r; ++n) e.elements[n] ? (i.push(u ? t : ""), i.push(s.generateExpression(e.elements[n], U.Assignment, he))) : (u && i.push(t), n + 1 === r && i.push(",")), n + 1 < r && i.push("," + (u ? Q : Z))
                    }), u && !a(C(i).toString()) && i.push(Q), i.push(u ? J : ""), i.push("]"), i) : "[]"
                },
                RestElement: function(e, t, n) {
                    return "..." + this.generatePattern(e.argument)
                },
                ClassExpression: function(e, t, n) {
                    var r, i;
                    return r = ["class"], e.id && (r = y(r, this.generateExpression(e.id, U.Sequence, he))), e.superClass && (i = y("extends", this.generateExpression(e.superClass, U.Unary, he)), r = y(r, i)), r.push(Z), r.push(this.generateStatement(e.body, 33)), r
                },
                MethodDefinition: function(e, t, n) {
                    var r, i;
                    return r = e.static ? ["static" + Z] : [], i = "get" === e.kind || "set" === e.kind ? [y(e.kind, this.generatePropertyKey(e.key, e.computed)), this.generateFunctionBody(e.value)] : [P(e), this.generatePropertyKey(e.key, e.computed), this.generateFunctionBody(e.value)], y(r, i)
                },
                Property: function(e, t, n) {
                    return "get" === e.kind || "set" === e.kind ? [e.kind, E(), this.generatePropertyKey(e.key, e.computed), this.generateFunctionBody(e.value)] : e.shorthand ? "AssignmentPattern" === e.value.type ? this.AssignmentPattern(e.value, U.Sequence, he) : this.generatePropertyKey(e.key, e.computed) : e.method ? [P(e), this.generatePropertyKey(e.key, e.computed), this.generateFunctionBody(e.value)] : [this.generatePropertyKey(e.key, e.computed), ":" + Z, this.generateExpression(e.value, U.Assignment, he)]
                },
                ObjectExpression: function(e, t, n) {
                    var r, i, u, s = this;
                    return e.properties.length ? (r = e.properties.length > 1, F(function() {
                        u = s.generateExpression(e.properties[0], U.Sequence, he)
                    }), r || o(C(u).toString()) ? (F(function(t) {
                        var n, o;
                        if (i = ["{", Q, t, u], r)
                            for (i.push("," + Q), n = 1, o = e.properties.length; n < o; ++n) i.push(t), i.push(s.generateExpression(e.properties[n], U.Sequence, he)), n + 1 < o && i.push("," + Q)
                    }), a(C(i).toString()) || i.push(Q), i.push(J), i.push("}"), i) : ["{", Z, u, Z, "}"]) : "{}"
                },
                AssignmentPattern: function(e, t, n) {
                    return this.generateAssignment(e.left, e.right, "=", t, n)
                },
                ObjectPattern: function(e, t, n) {
                    var r, i, u, s, o, c = this;
                    if (!e.properties.length) return "{}";
                    if (s = !1, 1 === e.properties.length) o = e.properties[0], o.value.type !== j.Identifier && (s = !0);
                    else
                        for (i = 0, u = e.properties.length; i < u; ++i)
                            if (o = e.properties[i], !o.shorthand) {
                                s = !0;
                                break
                            } return r = ["{", s ? Q : ""], F(function(t) {
                        var n, i;
                        for (n = 0, i = e.properties.length; n < i; ++n) r.push(s ? t : ""), r.push(c.generateExpression(e.properties[n], U.Sequence, he)), n + 1 < i && r.push("," + (s ? Q : Z))
                    }), s && !a(C(r).toString()) && r.push(Q), r.push(s ? J : ""), r.push("}"), r
                },
                ThisExpression: function(e, t, n) {
                    return "this"
                },
                Super: function(e, t, n) {
                    return "super"
                },
                Identifier: function(e, t, n) {
                    return _(e)
                },
                ImportDefaultSpecifier: function(e, t, n) {
                    return _(e.id || e.local)
                },
                ImportNamespaceSpecifier: function(e, t, n) {
                    var r = ["*"],
                        i = e.id || e.local;
                    return i && r.push(Z + "as" + E() + _(i)), r
                },
                ImportSpecifier: function(e, t, n) {
                    var r = e.imported,
                        i = [r.name],
                        u = e.local;
                    return u && u.name !== r.name && i.push(E() + "as" + E() + _(u)), i
                },
                ExportSpecifier: function(e, t, n) {
                    var r = e.local,
                        i = [r.name],
                        u = e.exported;
                    return u && u.name !== r.name && i.push(E() + "as" + E() + _(u)), i
                },
                Literal: function(e, t, n) {
                    var r;
                    if (e.hasOwnProperty("raw") && ue && ie.raw) try {
                        if (r = ue(e.raw).body[0].expression, r.type === j.Literal && r.value === e.value) return e.raw
                    } catch (e) {}
                    return e.regex ? "/" + e.regex.pattern + "/" + e.regex.flags : null === e.value ? "null" : "string" == typeof e.value ? g(e.value) : "number" == typeof e.value ? h(e.value) : "boolean" == typeof e.value ? e.value ? "true" : "false" : d(e.value)
                },
                GeneratorExpression: function(e, t, n) {
                    return this.ComprehensionExpression(e, t, n)
                },
                ComprehensionExpression: function(e, t, n) {
                    var r, i, u, s, o = this;
                    return r = e.type === j.GeneratorExpression ? ["("] : ["["], ie.moz.comprehensionExpressionStartsWithAssignment && (s = this.generateExpression(e.body, U.Assignment, he), r.push(s)), e.blocks && F(function() {
                        for (i = 0, u = e.blocks.length; i < u; ++i) s = o.generateExpression(e.blocks[i], U.Sequence, he), i > 0 || ie.moz.comprehensionExpressionStartsWithAssignment ? r = y(r, s) : r.push(s)
                    }), e.filter && (r = y(r, "if" + Z), s = this.generateExpression(e.filter, U.Sequence, he), r = y(r, ["(", s, ")"])), ie.moz.comprehensionExpressionStartsWithAssignment || (s = this.generateExpression(e.body, U.Assignment, he), r = y(r, s)), r.push(e.type === j.GeneratorExpression ? ")" : "]"), r
                },
                ComprehensionBlock: function(e, t, n) {
                    var r;
                    return r = e.left.type === j.VariableDeclaration ? [e.left.kind, E(), this.generateStatement(e.left.declarations[0], 0)] : this.generateExpression(e.left, U.Call, he), r = y(r, e.of ? "of" : "in"), r = y(r, this.generateExpression(e.right, U.Sequence, he)), ["for" + Z + "(", r, ")"]
                },
                SpreadElement: function(e, t, n) {
                    return ["...", this.generateExpression(e.argument, U.Assignment, he)]
                },
                TaggedTemplateExpression: function(e, t, n) {
                    var r = 3;
                    return 2 & n || (r = 1), k([this.generateExpression(e.tag, U.Call, r), this.generateExpression(e.quasi, U.Primary, 4)], U.TaggedTemplate, t)
                },
                TemplateElement: function(e, t, n) {
                    return e.value.raw
                },
                TemplateLiteral: function(e, t, n) {
                    var r, i, u;
                    for (r = ["`"], i = 0, u = e.quasis.length; i < u; ++i) r.push(this.generateExpression(e.quasis[i], U.Primary, he)), i + 1 < u && (r.push("${" + Z), r.push(this.generateExpression(e.expressions[i], U.Sequence, he)), r.push(Z + "}"));
                    return r.push("`"), r
                },
                ModuleSpecifier: function(e, t, n) {
                    return this.Literal(e, t, n)
                },
                ImportExpression: function(e, t, n) {
                    return k(["import(", this.generateExpression(e.source, U.Assignment, he), ")"], U.Call, t)
                }
            }, c(M.prototype, M.Expression), M.prototype.generateExpression = function(e, t, n) {
                var r, i;
                return i = e.type || j.Property, ie.verbatim && e.hasOwnProperty(ie.verbatim) ? N(e, t) : (r = this[i](e, t, n), ie.comment && (r = b(e, r)), C(r, e))
            }, M.prototype.generateStatement = function(e, t) {
                var n, r;
                return n = this[e.type](e, t), ie.comment && (n = b(e, n)), r = C(n).toString(), e.type !== j.Program || ne || "" !== Q || "\n" !== r.charAt(r.length - 1) || (n = se ? C(n).replaceRight(/\s+$/, "") : r.replace(/\s+$/, "")), C(n, e)
            }, ce = {
                indent: {
                    style: "",
                    base: 0
                },
                renumber: !0,
                hexadecimal: !0,
                quotes: "auto",
                escapeless: !0,
                compact: !0,
                parentheses: !1,
                semicolons: !1
            }, le = u().format, t.version = n(18).version, t.generate = R, t.attachComments = X.attachComments, t.Precedence = l({}, U), t.browser = !1, t.FORMAT_MINIFY = ce, t.FORMAT_DEFAULTS = le
        }()
    }).call(t, n(24))
}, function(e, t) {
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    t.encode = function(e) {
        if (0 <= e && e < n.length) return n[e];
        throw new TypeError("Must be between 0 and 63: " + e)
    }, t.decode = function(e) {
        return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
    }
}, function(e, t) {
    function n(e, r, i, u, s, o) {
        var a = Math.floor((r - e) / 2) + e,
            c = s(i, u[a], !0);
        return 0 === c ? a : c > 0 ? r - a > 1 ? n(a, r, i, u, s, o) : o == t.LEAST_UPPER_BOUND ? r < u.length ? r : -1 : a : a - e > 1 ? n(e, a, i, u, s, o) : o == t.LEAST_UPPER_BOUND ? a : e < 0 ? -1 : e
    }
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function(e, r, i, u) {
        if (0 === r.length) return -1;
        var s = n(-1, r.length, e, r, i, u || t.GREATEST_LOWER_BOUND);
        if (s < 0) return -1;
        for (; s - 1 >= 0 && 0 === i(r[s], r[s - 1], !0);) --s;
        return s
    }
}, function(e, t, n) {
    function r(e, t) {
        var n = e.generatedLine,
            r = t.generatedLine,
            i = e.generatedColumn,
            s = t.generatedColumn;
        return r > n || r == n && s >= i || u.compareByGeneratedPositionsInflated(e, t) <= 0
    }

    function i() {
        this._array = [], this._sorted = !0, this._last = {
            generatedLine: -1,
            generatedColumn: 0
        }
    }
    var u = n(0);
    i.prototype.unsortedForEach = function(e, t) {
        this._array.forEach(e, t)
    }, i.prototype.add = function(e) {
        r(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e))
    }, i.prototype.toArray = function() {
        return this._sorted || (this._array.sort(u.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
    }, t.MappingList = i
}, function(e, t) {
    function n(e, t, n) {
        var r = e[t];
        e[t] = e[n], e[n] = r
    }

    function r(e, t) {
        return Math.round(e + Math.random() * (t - e))
    }

    function i(e, t, u, s) {
        if (u < s) {
            var o = r(u, s),
                a = u - 1;
            n(e, o, s);
            for (var c = e[s], l = u; l < s; l++) t(e[l], c) <= 0 && (a += 1, n(e, a, l));
            n(e, a + 1, l);
            var h = a + 1;
            i(e, t, u, h - 1), i(e, t, h + 1, s)
        }
    }
    t.quickSort = function(e, t) {
        i(e, t, 0, e.length - 1)
    }
}, function(e, t, n) {
    function r(e, t) {
        var n = e;
        return "string" == typeof e && (n = o.parseSourceMapInput(e)), null != n.sections ? new s(n, t) : new i(n, t)
    }

    function i(e, t) {
        var n = e;
        "string" == typeof e && (n = o.parseSourceMapInput(e));
        var r = o.getArg(n, "version"),
            i = o.getArg(n, "sources"),
            u = o.getArg(n, "names", []),
            s = o.getArg(n, "sourceRoot", null),
            a = o.getArg(n, "sourcesContent", null),
            l = o.getArg(n, "mappings"),
            h = o.getArg(n, "file", null);
        if (r != this._version) throw new Error("Unsupported version: " + r);
        s && (s = o.normalize(s)), i = i.map(String).map(o.normalize).map(function(e) {
            return s && o.isAbsolute(s) && o.isAbsolute(e) ? o.relative(s, e) : e
        }), this._names = c.fromArray(u.map(String), !0), this._sources = c.fromArray(i, !0), this._absoluteSources = this._sources.toArray().map(function(e) {
            return o.computeSourceURL(s, e, t)
        }), this.sourceRoot = s, this.sourcesContent = a, this._mappings = l, this._sourceMapURL = t, this.file = h
    }

    function u() {
        this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
    }

    function s(e, t) {
        var n = e;
        "string" == typeof e && (n = o.parseSourceMapInput(e));
        var i = o.getArg(n, "version"),
            u = o.getArg(n, "sections");
        if (i != this._version) throw new Error("Unsupported version: " + i);
        this._sources = new c, this._names = new c;
        var s = {
            line: -1,
            column: 0
        };
        this._sections = u.map(function(e) {
            if (e.url) throw new Error("Support for url field in sections not implemented.");
            var n = o.getArg(e, "offset"),
                i = o.getArg(n, "line"),
                u = o.getArg(n, "column");
            if (i < s.line || i === s.line && u < s.column) throw new Error("Section offsets must be ordered and non-overlapping.");
            return s = n, {
                generatedOffset: {
                    generatedLine: i + 1,
                    generatedColumn: u + 1
                },
                consumer: new r(o.getArg(e, "map"), t)
            }
        })
    }
    var o = n(0),
        a = n(12),
        c = n(1).ArraySet,
        l = n(2),
        h = n(14).quickSort;
    r.fromSourceMap = function(e, t) {
        return i.fromSourceMap(e, t)
    }, r.prototype._version = 3, r.prototype.__generatedMappings = null, Object.defineProperty(r.prototype, "_generatedMappings", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
        }
    }), r.prototype.__originalMappings = null, Object.defineProperty(r.prototype, "_originalMappings", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
        }
    }), r.prototype._charIsMappingSeparator = function(e, t) {
        var n = e.charAt(t);
        return ";" === n || "," === n
    }, r.prototype._parseMappings = function(e, t) {
        throw new Error("Subclasses must implement _parseMappings")
    }, r.GENERATED_ORDER = 1, r.ORIGINAL_ORDER = 2, r.GREATEST_LOWER_BOUND = 1, r.LEAST_UPPER_BOUND = 2, r.prototype.eachMapping = function(e, t, n) {
        var i, u = t || null,
            s = n || r.GENERATED_ORDER;
        switch (s) {
            case r.GENERATED_ORDER:
                i = this._generatedMappings;
                break;
            case r.ORIGINAL_ORDER:
                i = this._originalMappings;
                break;
            default:
                throw new Error("Unknown order of iteration.")
        }
        var a = this.sourceRoot;
        i.map(function(e) {
            var t = null === e.source ? null : this._sources.at(e.source);
            return t = o.computeSourceURL(a, t, this._sourceMapURL), {
                source: t,
                generatedLine: e.generatedLine,
                generatedColumn: e.generatedColumn,
                originalLine: e.originalLine,
                originalColumn: e.originalColumn,
                name: null === e.name ? null : this._names.at(e.name)
            }
        }, this).forEach(e, u)
    }, r.prototype.allGeneratedPositionsFor = function(e) {
        var t = o.getArg(e, "line"),
            n = {
                source: o.getArg(e, "source"),
                originalLine: t,
                originalColumn: o.getArg(e, "column", 0)
            };
        if (n.source = this._findSourceIndex(n.source), n.source < 0) return [];
        var r = [],
            i = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", o.compareByOriginalPositions, a.LEAST_UPPER_BOUND);
        if (i >= 0) {
            var u = this._originalMappings[i];
            if (void 0 === e.column)
                for (var s = u.originalLine; u && u.originalLine === s;) r.push({
                    line: o.getArg(u, "generatedLine", null),
                    column: o.getArg(u, "generatedColumn", null),
                    lastColumn: o.getArg(u, "lastGeneratedColumn", null)
                }), u = this._originalMappings[++i];
            else
                for (var c = u.originalColumn; u && u.originalLine === t && u.originalColumn == c;) r.push({
                    line: o.getArg(u, "generatedLine", null),
                    column: o.getArg(u, "generatedColumn", null),
                    lastColumn: o.getArg(u, "lastGeneratedColumn", null)
                }), u = this._originalMappings[++i]
        }
        return r
    }, t.SourceMapConsumer = r, i.prototype = Object.create(r.prototype), i.prototype.consumer = r, i.prototype._findSourceIndex = function(e) {
        var t = e;
        if (null != this.sourceRoot && (t = o.relative(this.sourceRoot, t)), this._sources.has(t)) return this._sources.indexOf(t);
        var n;
        for (n = 0; n < this._absoluteSources.length; ++n)
            if (this._absoluteSources[n] == e) return n;
        return -1
    }, i.fromSourceMap = function(e, t) {
        var n = Object.create(i.prototype),
            r = n._names = c.fromArray(e._names.toArray(), !0),
            s = n._sources = c.fromArray(e._sources.toArray(), !0);
        n.sourceRoot = e._sourceRoot, n.sourcesContent = e._generateSourcesContent(n._sources.toArray(), n.sourceRoot), n.file = e._file, n._sourceMapURL = t, n._absoluteSources = n._sources.toArray().map(function(e) {
            return o.computeSourceURL(n.sourceRoot, e, t)
        });
        for (var a = e._mappings.toArray().slice(), l = n.__generatedMappings = [], p = n.__originalMappings = [], d = 0, f = a.length; d < f; d++) {
            var D = a[d],
                m = new u;
            m.generatedLine = D.generatedLine, m.generatedColumn = D.generatedColumn, D.source && (m.source = s.indexOf(D.source), m.originalLine = D.originalLine, m.originalColumn = D.originalColumn, D.name && (m.name = r.indexOf(D.name)), p.push(m)), l.push(m)
        }
        return h(n.__originalMappings, o.compareByOriginalPositions), n
    }, i.prototype._version = 3, Object.defineProperty(i.prototype, "sources", {
        get: function() {
            return this._absoluteSources.slice()
        }
    }), i.prototype._parseMappings = function(e, t) {
        for (var n, r, i, s, a, c = 1, p = 0, d = 0, f = 0, D = 0, m = 0, g = e.length, A = 0, C = {}, E = {}, y = [], x = []; A < g;)
            if (";" === e.charAt(A)) c++, A++, p = 0;
            else if ("," === e.charAt(A)) A++;
        else {
            for (n = new u, n.generatedLine = c, s = A; s < g && !this._charIsMappingSeparator(e, s); s++);
            if (r = e.slice(A, s), i = C[r]) A += r.length;
            else {
                for (i = []; A < s;) l.decode(e, A, E), a = E.value, A = E.rest, i.push(a);
                if (2 === i.length) throw new Error("Found a source, but no line and column");
                if (3 === i.length) throw new Error("Found a source and line, but no column");
                C[r] = i
            }
            n.generatedColumn = p + i[0], p = n.generatedColumn, i.length > 1 && (n.source = D + i[1], D += i[1], n.originalLine = d + i[2], d = n.originalLine, n.originalLine += 1, n.originalColumn = f + i[3], f = n.originalColumn, i.length > 4 && (n.name = m + i[4], m += i[4])), x.push(n), "number" == typeof n.originalLine && y.push(n)
        }
        h(x, o.compareByGeneratedPositionsDeflated), this.__generatedMappings = x, h(y, o.compareByOriginalPositions), this.__originalMappings = y
    }, i.prototype._findMapping = function(e, t, n, r, i, u) {
        if (e[n] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
        if (e[r] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
        return a.search(e, t, i, u)
    }, i.prototype.computeColumnSpans = function() {
        for (var e = 0; e < this._generatedMappings.length; ++e) {
            var t = this._generatedMappings[e];
            if (e + 1 < this._generatedMappings.length) {
                var n = this._generatedMappings[e + 1];
                if (t.generatedLine === n.generatedLine) {
                    t.lastGeneratedColumn = n.generatedColumn - 1;
                    continue
                }
            }
            t.lastGeneratedColumn = 1 / 0
        }
    }, i.prototype.originalPositionFor = function(e) {
        var t = {
                generatedLine: o.getArg(e, "line"),
                generatedColumn: o.getArg(e, "column")
            },
            n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", o.compareByGeneratedPositionsDeflated, o.getArg(e, "bias", r.GREATEST_LOWER_BOUND));
        if (n >= 0) {
            var i = this._generatedMappings[n];
            if (i.generatedLine === t.generatedLine) {
                var u = o.getArg(i, "source", null);
                null !== u && (u = this._sources.at(u), u = o.computeSourceURL(this.sourceRoot, u, this._sourceMapURL));
                var s = o.getArg(i, "name", null);
                return null !== s && (s = this._names.at(s)), {
                    source: u,
                    line: o.getArg(i, "originalLine", null),
                    column: o.getArg(i, "originalColumn", null),
                    name: s
                }
            }
        }
        return {
            source: null,
            line: null,
            column: null,
            name: null
        }
    }, i.prototype.hasContentsOfAllSources = function() {
        return !!this.sourcesContent && (this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
            return null == e
        }))
    }, i.prototype.sourceContentFor = function(e, t) {
        if (!this.sourcesContent) return null;
        var n = this._findSourceIndex(e);
        if (n >= 0) return this.sourcesContent[n];
        var r = e;
        null != this.sourceRoot && (r = o.relative(this.sourceRoot, r));
        var i;
        if (null != this.sourceRoot && (i = o.urlParse(this.sourceRoot))) {
            var u = r.replace(/^file:\/\//, "");
            if ("file" == i.scheme && this._sources.has(u)) return this.sourcesContent[this._sources.indexOf(u)];
            if ((!i.path || "/" == i.path) && this._sources.has("/" + r)) return this.sourcesContent[this._sources.indexOf("/" + r)]
        }
        if (t) return null;
        throw new Error('"' + r + '" is not in the SourceMap.')
    }, i.prototype.generatedPositionFor = function(e) {
        var t = o.getArg(e, "source");
        if ((t = this._findSourceIndex(t)) < 0) return {
            line: null,
            column: null,
            lastColumn: null
        };
        var n = {
                source: t,
                originalLine: o.getArg(e, "line"),
                originalColumn: o.getArg(e, "column")
            },
            i = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", o.compareByOriginalPositions, o.getArg(e, "bias", r.GREATEST_LOWER_BOUND));
        if (i >= 0) {
            var u = this._originalMappings[i];
            if (u.source === n.source) return {
                line: o.getArg(u, "generatedLine", null),
                column: o.getArg(u, "generatedColumn", null),
                lastColumn: o.getArg(u, "lastGeneratedColumn", null)
            }
        }
        return {
            line: null,
            column: null,
            lastColumn: null
        }
    }, t.BasicSourceMapConsumer = i, s.prototype = Object.create(r.prototype), s.prototype.constructor = r, s.prototype._version = 3, Object.defineProperty(s.prototype, "sources", {
        get: function() {
            for (var e = [], t = 0; t < this._sections.length; t++)
                for (var n = 0; n < this._sections[t].consumer.sources.length; n++) e.push(this._sections[t].consumer.sources[n]);
            return e
        }
    }), s.prototype.originalPositionFor = function(e) {
        var t = {
                generatedLine: o.getArg(e, "line"),
                generatedColumn: o.getArg(e, "column")
            },
            n = a.search(t, this._sections, function(e, t) {
                var n = e.generatedLine - t.generatedOffset.generatedLine;
                return n || e.generatedColumn - t.generatedOffset.generatedColumn
            }),
            r = this._sections[n];
        return r ? r.consumer.originalPositionFor({
            line: t.generatedLine - (r.generatedOffset.generatedLine - 1),
            column: t.generatedColumn - (r.generatedOffset.generatedLine === t.generatedLine ? r.generatedOffset.generatedColumn - 1 : 0),
            bias: e.bias
        }) : {
            source: null,
            line: null,
            column: null,
            name: null
        }
    }, s.prototype.hasContentsOfAllSources = function() {
        return this._sections.every(function(e) {
            return e.consumer.hasContentsOfAllSources()
        })
    }, s.prototype.sourceContentFor = function(e, t) {
        for (var n = 0; n < this._sections.length; n++) {
            var r = this._sections[n],
                i = r.consumer.sourceContentFor(e, !0);
            if (i) return i
        }
        if (t) return null;
        throw new Error('"' + e + '" is not in the SourceMap.')
    }, s.prototype.generatedPositionFor = function(e) {
        for (var t = 0; t < this._sections.length; t++) {
            var n = this._sections[t];
            if (-1 !== n.consumer._findSourceIndex(o.getArg(e, "source"))) {
                var r = n.consumer.generatedPositionFor(e);
                if (r) {
                    return {
                        line: r.line + (n.generatedOffset.generatedLine - 1),
                        column: r.column + (n.generatedOffset.generatedLine === r.line ? n.generatedOffset.generatedColumn - 1 : 0)
                    }
                }
            }
        }
        return {
            line: null,
            column: null
        }
    }, s.prototype._parseMappings = function(e, t) {
        this.__generatedMappings = [], this.__originalMappings = [];
        for (var n = 0; n < this._sections.length; n++)
            for (var r = this._sections[n], i = r.consumer._generatedMappings, u = 0; u < i.length; u++) {
                var s = i[u],
                    a = r.consumer._sources.at(s.source);
                a = o.computeSourceURL(r.consumer.sourceRoot, a, this._sourceMapURL), this._sources.add(a), a = this._sources.indexOf(a);
                var c = null;
                s.name && (c = r.consumer._names.at(s.name), this._names.add(c), c = this._names.indexOf(c));
                var l = {
                    source: a,
                    generatedLine: s.generatedLine + (r.generatedOffset.generatedLine - 1),
                    generatedColumn: s.generatedColumn + (r.generatedOffset.generatedLine === s.generatedLine ? r.generatedOffset.generatedColumn - 1 : 0),
                    originalLine: s.originalLine,
                    originalColumn: s.originalColumn,
                    name: c
                };
                this.__generatedMappings.push(l), "number" == typeof l.originalLine && this.__originalMappings.push(l)
            }
        h(this.__generatedMappings, o.compareByGeneratedPositionsDeflated), h(this.__originalMappings, o.compareByOriginalPositions)
    }, t.IndexedSourceMapConsumer = s
}, function(e, t, n) {
    function r(e, t, n, r, i) {
        this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == n ? null : n, this.name = null == i ? null : i, this[o] = !0, null != r && this.add(r)
    }
    var i = n(3).SourceMapGenerator,
        u = n(0),
        s = /(\r?\n)/,
        o = "$$$isSourceNode$$$";
    r.fromStringWithSourceMap = function(e, t, n) {
        function i(e, t) {
            if (null === e || void 0 === e.source) o.add(t);
            else {
                var i = n ? u.join(n, e.source) : e.source;
                o.add(new r(e.originalLine, e.originalColumn, i, t, e.name))
            }
        }
        var o = new r,
            a = e.split(s),
            c = 0,
            l = function() {
                function e() {
                    return c < a.length ? a[c++] : void 0
                }
                return e() + (e() || "")
            },
            h = 1,
            p = 0,
            d = null;
        return t.eachMapping(function(e) {
            if (null !== d) {
                if (!(h < e.generatedLine)) {
                    var t = a[c] || "",
                        n = t.substr(0, e.generatedColumn - p);
                    return a[c] = t.substr(e.generatedColumn - p), p = e.generatedColumn, i(d, n), void(d = e)
                }
                i(d, l()), h++, p = 0
            }
            for (; h < e.generatedLine;) o.add(l()), h++;
            if (p < e.generatedColumn) {
                var t = a[c] || "";
                o.add(t.substr(0, e.generatedColumn)), a[c] = t.substr(e.generatedColumn), p = e.generatedColumn
            }
            d = e
        }, this), c < a.length && (d && i(d, l()), o.add(a.splice(c).join(""))), t.sources.forEach(function(e) {
            var r = t.sourceContentFor(e);
            null != r && (null != n && (e = u.join(n, e)), o.setSourceContent(e, r))
        }), o
    }, r.prototype.add = function(e) {
        if (Array.isArray(e)) e.forEach(function(e) {
            this.add(e)
        }, this);
        else {
            if (!e[o] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
            e && this.children.push(e)
        }
        return this
    }, r.prototype.prepend = function(e) {
        if (Array.isArray(e))
            for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
        else {
            if (!e[o] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
            this.children.unshift(e)
        }
        return this
    }, r.prototype.walk = function(e) {
        for (var t, n = 0, r = this.children.length; n < r; n++) t = this.children[n], t[o] ? t.walk(e) : "" !== t && e(t, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
        })
    }, r.prototype.join = function(e) {
        var t, n, r = this.children.length;
        if (r > 0) {
            for (t = [], n = 0; n < r - 1; n++) t.push(this.children[n]), t.push(e);
            t.push(this.children[n]), this.children = t
        }
        return this
    }, r.prototype.replaceRight = function(e, t) {
        var n = this.children[this.children.length - 1];
        return n[o] ? n.replaceRight(e, t) : "string" == typeof n ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push("".replace(e, t)), this
    }, r.prototype.setSourceContent = function(e, t) {
        this.sourceContents[u.toSetString(e)] = t
    }, r.prototype.walkSourceContents = function(e) {
        for (var t = 0, n = this.children.length; t < n; t++) this.children[t][o] && this.children[t].walkSourceContents(e);
        for (var r = Object.keys(this.sourceContents), t = 0, n = r.length; t < n; t++) e(u.fromSetString(r[t]), this.sourceContents[r[t]])
    }, r.prototype.toString = function() {
        var e = "";
        return this.walk(function(t) {
            e += t
        }), e
    }, r.prototype.toStringWithSourceMap = function(e) {
        var t = {
                code: "",
                line: 1,
                column: 0
            },
            n = new i(e),
            r = !1,
            u = null,
            s = null,
            o = null,
            a = null;
        return this.walk(function(e, i) {
            t.code += e, null !== i.source && null !== i.line && null !== i.column ? (u === i.source && s === i.line && o === i.column && a === i.name || n.addMapping({
                source: i.source,
                original: {
                    line: i.line,
                    column: i.column
                },
                generated: {
                    line: t.line,
                    column: t.column
                },
                name: i.name
            }), u = i.source, s = i.line, o = i.column, a = i.name, r = !0) : r && (n.addMapping({
                generated: {
                    line: t.line,
                    column: t.column
                }
            }), u = null, r = !1);
            for (var c = 0, l = e.length; c < l; c++) 10 === e.charCodeAt(c) ? (t.line++, t.column = 0, c + 1 === l ? (u = null, r = !1) : r && n.addMapping({
                source: i.source,
                original: {
                    line: i.line,
                    column: i.column
                },
                generated: {
                    line: t.line,
                    column: t.column
                },
                name: i.name
            })) : t.column++
        }), this.walkSourceContents(function(e, t) {
            n.setSourceContent(e, t)
        }), {
            code: t.code,
            map: n
        }
    }, t.SourceNode = r
}, function(e, t, n) {
    t.SourceMapGenerator = n(3).SourceMapGenerator, t.SourceMapConsumer = n(15).SourceMapConsumer, t.SourceNode = n(16).SourceNode
}, function(e, t) {
    e.exports = {
        _from: "escodegen@^1.11.1",
        _id: "escodegen@1.14.1",
        _inBundle: !1,
        _integrity: "sha512-Bmt7NcRySdIfNPfU2ZoXDrrXsG9ZjvDxcAlMfDUgRBjLOWTuIACXPBFJH7Z+cLb40JeQco5toikyc9t9P8E9SQ==",
        _location: "/escodegen",
        _phantomChildren: {},
        _requested: {
            type: "range",
            registry: !0,
            raw: "escodegen@^1.11.1",
            name: "escodegen",
            escapedName: "escodegen",
            rawSpec: "^1.11.1",
            saveSpec: null,
            fetchSpec: "^1.11.1"
        },
        _requiredBy: ["/static-eval"],
        _resolved: "https://registry.npmjs.org/escodegen/-/escodegen-1.14.1.tgz",
        _shasum: "ba01d0c8278b5e95a9a45350142026659027a457",
        _spec: "escodegen@^1.11.1",
        _where: "C:\\Users\\posix\\Downloads\\study.webpack-blog-webpack-default\\basic\\node_modules\\static-eval",
        bin: {
            esgenerate: "bin/esgenerate.js",
            escodegen: "bin/escodegen.js"
        },
        bugs: {
            url: "https://github.com/estools/escodegen/issues"
        },
        bundleDependencies: !1,
        dependencies: {
            esprima: "^4.0.1",
            estraverse: "^4.2.0",
            esutils: "^2.0.2",
            optionator: "^0.8.1",
            "source-map": "~0.6.1"
        },
        deprecated: !1,
        description: "ECMAScript code generator",
        devDependencies: {
            acorn: "^7.1.0",
            bluebird: "^3.4.7",
            "bower-registry-client": "^1.0.0",
            chai: "^3.5.0",
            "commonjs-everywhere": "^0.9.7",
            gulp: "^3.8.10",
            "gulp-eslint": "^3.0.1",
            "gulp-mocha": "^3.0.1",
            semver: "^5.1.0"
        },
        engines: {
            node: ">=4.0"
        },
        files: ["LICENSE.BSD", "README.md", "bin", "escodegen.js", "package.json"],
        homepage: "http://github.com/estools/escodegen",
        license: "BSD-2-Clause",
        main: "escodegen.js",
        maintainers: [{
            name: "Yusuke Suzuki",
            email: "utatane.tea@gmail.com",
            url: "http://github.com/Constellation"
        }],
        name: "escodegen",
        optionalDependencies: {
            "source-map": "~0.6.1"
        },
        repository: {
            type: "git",
            url: "git+ssh://git@github.com/estools/escodegen.git"
        },
        scripts: {
            build: "cjsify -a path: tools/entry-point.js > escodegen.browser.js",
            "build-min": "cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
            lint: "gulp lint",
            release: "node tools/release.js",
            test: "gulp travis",
            "unit-test": "gulp test"
        },
        version: "1.14.1"
    }
}, function(e, t, n) {
    ! function e(t) {
        "use strict";

        function r(e) {
            var t, n, i = {};
            for (t in e) e.hasOwnProperty(t) && (n = e[t], i[t] = "object" == typeof n && null !== n ? r(n) : n);
            return i
        }

        function i(e, t) {
            var n, r, i, u;
            for (r = e.length, i = 0; r;) n = r >>> 1, u = i + n, t(e[u]) ? r = n : (i = u + 1, r -= n + 1);
            return i
        }

        function u(e, t) {
            this.parent = e, this.key = t
        }

        function s(e, t, n, r) {
            this.node = e, this.path = t, this.wrap = n, this.ref = r
        }

        function o() {}

        function a(e) {
            return null != e && ("object" == typeof e && "string" == typeof e.type)
        }

        function c(e, t) {
            return (e === f.ObjectExpression || e === f.ObjectPattern) && "properties" === t
        }

        function l(e, t) {
            return (new o).traverse(e, t)
        }

        function h(e, t) {
            return (new o).replace(e, t)
        }

        function p(e, t) {
            var n;
            return n = i(t, function(t) {
                return t.range[0] > e.range[0]
            }), e.extendedRange = [e.range[0], e.range[1]], n !== t.length && (e.extendedRange[1] = t[n].range[0]), n -= 1, n >= 0 && (e.extendedRange[0] = t[n].range[1]), e
        }

        function d(e, t, n) {
            var i, u, s, o, a = [];
            if (!e.range) throw new Error("attachComments needs range information");
            if (!n.length) {
                if (t.length) {
                    for (s = 0, u = t.length; s < u; s += 1) i = r(t[s]), i.extendedRange = [0, e.range[0]], a.push(i);
                    e.leadingComments = a
                }
                return e
            }
            for (s = 0, u = t.length; s < u; s += 1) a.push(p(r(t[s]), n));
            return o = 0, l(e, {
                enter: function(e) {
                    for (var t; o < a.length && (t = a[o], !(t.extendedRange[1] > e.range[0]));) t.extendedRange[1] === e.range[0] ? (e.leadingComments || (e.leadingComments = []), e.leadingComments.push(t), a.splice(o, 1)) : o += 1;
                    return o === a.length ? D.Break : a[o].extendedRange[0] > e.range[1] ? D.Skip : void 0
                }
            }), o = 0, l(e, {
                leave: function(e) {
                    for (var t; o < a.length && (t = a[o], !(e.range[1] < t.extendedRange[0]));) e.range[1] === t.extendedRange[0] ? (e.trailingComments || (e.trailingComments = []), e.trailingComments.push(t), a.splice(o, 1)) : o += 1;
                    return o === a.length ? D.Break : a[o].extendedRange[0] > e.range[1] ? D.Skip : void 0
                }
            }), e
        }
        var f, D, m, g, A, C;
        return f = {
            AssignmentExpression: "AssignmentExpression",
            AssignmentPattern: "AssignmentPattern",
            ArrayExpression: "ArrayExpression",
            ArrayPattern: "ArrayPattern",
            ArrowFunctionExpression: "ArrowFunctionExpression",
            AwaitExpression: "AwaitExpression",
            BlockStatement: "BlockStatement",
            BinaryExpression: "BinaryExpression",
            BreakStatement: "BreakStatement",
            CallExpression: "CallExpression",
            CatchClause: "CatchClause",
            ClassBody: "ClassBody",
            ClassDeclaration: "ClassDeclaration",
            ClassExpression: "ClassExpression",
            ComprehensionBlock: "ComprehensionBlock",
            ComprehensionExpression: "ComprehensionExpression",
            ConditionalExpression: "ConditionalExpression",
            ContinueStatement: "ContinueStatement",
            DebuggerStatement: "DebuggerStatement",
            DirectiveStatement: "DirectiveStatement",
            DoWhileStatement: "DoWhileStatement",
            EmptyStatement: "EmptyStatement",
            ExportAllDeclaration: "ExportAllDeclaration",
            ExportDefaultDeclaration: "ExportDefaultDeclaration",
            ExportNamedDeclaration: "ExportNamedDeclaration",
            ExportSpecifier: "ExportSpecifier",
            ExpressionStatement: "ExpressionStatement",
            ForStatement: "ForStatement",
            ForInStatement: "ForInStatement",
            ForOfStatement: "ForOfStatement",
            FunctionDeclaration: "FunctionDeclaration",
            FunctionExpression: "FunctionExpression",
            GeneratorExpression: "GeneratorExpression",
            Identifier: "Identifier",
            IfStatement: "IfStatement",
            ImportExpression: "ImportExpression",
            ImportDeclaration: "ImportDeclaration",
            ImportDefaultSpecifier: "ImportDefaultSpecifier",
            ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
            ImportSpecifier: "ImportSpecifier",
            Literal: "Literal",
            LabeledStatement: "LabeledStatement",
            LogicalExpression: "LogicalExpression",
            MemberExpression: "MemberExpression",
            MetaProperty: "MetaProperty",
            MethodDefinition: "MethodDefinition",
            ModuleSpecifier: "ModuleSpecifier",
            NewExpression: "NewExpression",
            ObjectExpression: "ObjectExpression",
            ObjectPattern: "ObjectPattern",
            Program: "Program",
            Property: "Property",
            RestElement: "RestElement",
            ReturnStatement: "ReturnStatement",
            SequenceExpression: "SequenceExpression",
            SpreadElement: "SpreadElement",
            Super: "Super",
            SwitchStatement: "SwitchStatement",
            SwitchCase: "SwitchCase",
            TaggedTemplateExpression: "TaggedTemplateExpression",
            TemplateElement: "TemplateElement",
            TemplateLiteral: "TemplateLiteral",
            ThisExpression: "ThisExpression",
            ThrowStatement: "ThrowStatement",
            TryStatement: "TryStatement",
            UnaryExpression: "UnaryExpression",
            UpdateExpression: "UpdateExpression",
            VariableDeclaration: "VariableDeclaration",
            VariableDeclarator: "VariableDeclarator",
            WhileStatement: "WhileStatement",
            WithStatement: "WithStatement",
            YieldExpression: "YieldExpression"
        }, m = {
            AssignmentExpression: ["left", "right"],
            AssignmentPattern: ["left", "right"],
            ArrayExpression: ["elements"],
            ArrayPattern: ["elements"],
            ArrowFunctionExpression: ["params", "body"],
            AwaitExpression: ["argument"],
            BlockStatement: ["body"],
            BinaryExpression: ["left", "right"],
            BreakStatement: ["label"],
            CallExpression: ["callee", "arguments"],
            CatchClause: ["param", "body"],
            ClassBody: ["body"],
            ClassDeclaration: ["id", "superClass", "body"],
            ClassExpression: ["id", "superClass", "body"],
            ComprehensionBlock: ["left", "right"],
            ComprehensionExpression: ["blocks", "filter", "body"],
            ConditionalExpression: ["test", "consequent", "alternate"],
            ContinueStatement: ["label"],
            DebuggerStatement: [],
            DirectiveStatement: [],
            DoWhileStatement: ["body", "test"],
            EmptyStatement: [],
            ExportAllDeclaration: ["source"],
            ExportDefaultDeclaration: ["declaration"],
            ExportNamedDeclaration: ["declaration", "specifiers", "source"],
            ExportSpecifier: ["exported", "local"],
            ExpressionStatement: ["expression"],
            ForStatement: ["init", "test", "update", "body"],
            ForInStatement: ["left", "right", "body"],
            ForOfStatement: ["left", "right", "body"],
            FunctionDeclaration: ["id", "params", "body"],
            FunctionExpression: ["id", "params", "body"],
            GeneratorExpression: ["blocks", "filter", "body"],
            Identifier: [],
            IfStatement: ["test", "consequent", "alternate"],
            ImportExpression: ["source"],
            ImportDeclaration: ["specifiers", "source"],
            ImportDefaultSpecifier: ["local"],
            ImportNamespaceSpecifier: ["local"],
            ImportSpecifier: ["imported", "local"],
            Literal: [],
            LabeledStatement: ["label", "body"],
            LogicalExpression: ["left", "right"],
            MemberExpression: ["object", "property"],
            MetaProperty: ["meta", "property"],
            MethodDefinition: ["key", "value"],
            ModuleSpecifier: [],
            NewExpression: ["callee", "arguments"],
            ObjectExpression: ["properties"],
            ObjectPattern: ["properties"],
            Program: ["body"],
            Property: ["key", "value"],
            RestElement: ["argument"],
            ReturnStatement: ["argument"],
            SequenceExpression: ["expressions"],
            SpreadElement: ["argument"],
            Super: [],
            SwitchStatement: ["discriminant", "cases"],
            SwitchCase: ["test", "consequent"],
            TaggedTemplateExpression: ["tag", "quasi"],
            TemplateElement: [],
            TemplateLiteral: ["quasis", "expressions"],
            ThisExpression: [],
            ThrowStatement: ["argument"],
            TryStatement: ["block", "handler", "finalizer"],
            UnaryExpression: ["argument"],
            UpdateExpression: ["argument"],
            VariableDeclaration: ["declarations"],
            VariableDeclarator: ["id", "init"],
            WhileStatement: ["test", "body"],
            WithStatement: ["object", "body"],
            YieldExpression: ["argument"]
        }, g = {}, A = {}, C = {}, D = {
            Break: g,
            Skip: A,
            Remove: C
        }, u.prototype.replace = function(e) {
            this.parent[this.key] = e
        }, u.prototype.remove = function() {
            return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1)
        }, o.prototype.path = function() {
            function e(e, t) {
                if (Array.isArray(t))
                    for (r = 0, i = t.length; r < i; ++r) e.push(t[r]);
                else e.push(t)
            }
            var t, n, r, i, u, s;
            if (!this.__current.path) return null;
            for (u = [], t = 2, n = this.__leavelist.length; t < n; ++t) s = this.__leavelist[t], e(u, s.path);
            return e(u, this.__current.path), u
        }, o.prototype.type = function() {
            return this.current().type || this.__current.wrap
        }, o.prototype.parents = function() {
            var e, t, n;
            for (n = [], e = 1, t = this.__leavelist.length; e < t; ++e) n.push(this.__leavelist[e].node);
            return n
        }, o.prototype.current = function() {
            return this.__current.node
        }, o.prototype.__execute = function(e, t) {
            var n, r;
            return r = void 0, n = this.__current, this.__current = t, this.__state = null, e && (r = e.call(this, t.node, this.__leavelist[this.__leavelist.length - 1].node)), this.__current = n, r
        }, o.prototype.notify = function(e) {
            this.__state = e
        }, o.prototype.skip = function() {
            this.notify(A)
        }, o.prototype.break = function() {
            this.notify(g)
        }, o.prototype.remove = function() {
            this.notify(C)
        }, o.prototype.__initialize = function(e, t) {
            this.visitor = t, this.root = e, this.__worklist = [], this.__leavelist = [], this.__current = null, this.__state = null, this.__fallback = null, "iteration" === t.fallback ? this.__fallback = Object.keys : "function" == typeof t.fallback && (this.__fallback = t.fallback), this.__keys = m, t.keys && (this.__keys = Object.assign(Object.create(this.__keys), t.keys))
        }, o.prototype.traverse = function(e, t) {
            var n, r, i, u, o, l, h, p, d, f, D, m;
            for (this.__initialize(e, t), m = {}, n = this.__worklist, r = this.__leavelist, n.push(new s(e, null, null, null)), r.push(new s(null, null, null, null)); n.length;)
                if ((i = n.pop()) !== m) {
                    if (i.node) {
                        if (l = this.__execute(t.enter, i), this.__state === g || l === g) return;
                        if (n.push(m), r.push(i), this.__state === A || l === A) continue;
                        if (u = i.node, o = u.type || i.wrap, !(f = this.__keys[o])) {
                            if (!this.__fallback) throw new Error("Unknown node type " + o + ".");
                            f = this.__fallback(u)
                        }
                        for (p = f.length;
                            (p -= 1) >= 0;)
                            if (h = f[p], D = u[h])
                                if (Array.isArray(D)) {
                                    for (d = D.length;
                                        (d -= 1) >= 0;)
                                        if (D[d]) {
                                            if (c(o, f[p])) i = new s(D[d], [h, d], "Property", null);
                                            else {
                                                if (!a(D[d])) continue;
                                                i = new s(D[d], [h, d], null, null)
                                            }
                                            n.push(i)
                                        }
                                } else a(D) && n.push(new s(D, h, null, null))
                    }
                } else if (i = r.pop(), l = this.__execute(t.leave, i), this.__state === g || l === g) return
        }, o.prototype.replace = function(e, t) {
            function n(e) {
                var t, n, i, u;
                if (e.ref.remove())
                    for (n = e.ref.key, u = e.ref.parent, t = r.length; t--;)
                        if (i = r[t], i.ref && i.ref.parent === u) {
                            if (i.ref.key < n) break;
                            --i.ref.key
                        }
            }
            var r, i, o, l, h, p, d, f, D, m, E, y, x;
            for (this.__initialize(e, t), E = {}, r = this.__worklist, i = this.__leavelist, y = {
                    root: e
                }, p = new s(e, null, null, new u(y, "root")), r.push(p), i.push(p); r.length;)
                if ((p = r.pop()) !== E) {
                    if (h = this.__execute(t.enter, p), void 0 !== h && h !== g && h !== A && h !== C && (p.ref.replace(h), p.node = h), this.__state !== C && h !== C || (n(p), p.node = null), this.__state === g || h === g) return y.root;
                    if ((o = p.node) && (r.push(E), i.push(p), this.__state !== A && h !== A)) {
                        if (l = o.type || p.wrap, !(D = this.__keys[l])) {
                            if (!this.__fallback) throw new Error("Unknown node type " + l + ".");
                            D = this.__fallback(o)
                        }
                        for (d = D.length;
                            (d -= 1) >= 0;)
                            if (x = D[d], m = o[x])
                                if (Array.isArray(m)) {
                                    for (f = m.length;
                                        (f -= 1) >= 0;)
                                        if (m[f]) {
                                            if (c(l, D[d])) p = new s(m[f], [x, f], "Property", new u(m, f));
                                            else {
                                                if (!a(m[f])) continue;
                                                p = new s(m[f], [x, f], null, new u(m, f))
                                            }
                                            r.push(p)
                                        }
                                } else a(m) && r.push(new s(m, x, null, new u(o, x)))
                    }
                } else if (p = i.pop(), h = this.__execute(t.leave, p), void 0 !== h && h !== g && h !== A && h !== C && p.ref.replace(h), this.__state !== C && h !== C || n(p), this.__state === g || h === g) return y.root;
            return y.root
        }, t.version = n(20).version, t.Syntax = f, t.traverse = l, t.replace = h, t.attachComments = d, t.VisitorKeys = m, t.VisitorOption = D, t.Controller = o, t.cloneEnvironment = function() {
            return e({})
        }, t
    }(t)
}, function(e, t) {
    e.exports = {
        _from: "estraverse@^4.2.0",
        _id: "estraverse@4.3.0",
        _inBundle: !1,
        _integrity: "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
        _location: "/estraverse",
        _phantomChildren: {},
        _requested: {
            type: "range",
            registry: !0,
            raw: "estraverse@^4.2.0",
            name: "estraverse",
            escapedName: "estraverse",
            rawSpec: "^4.2.0",
            saveSpec: null,
            fetchSpec: "^4.2.0"
        },
        _requiredBy: ["/escodegen"],
        _resolved: "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
        _shasum: "398ad3f3c5a24948be7725e83d11a7de28cdbd1d",
        _spec: "estraverse@^4.2.0",
        _where: "C:\\Users\\posix\\Downloads\\study.webpack-blog-webpack-default\\basic\\node_modules\\escodegen",
        bugs: {
            url: "https://github.com/estools/estraverse/issues"
        },
        bundleDependencies: !1,
        deprecated: !1,
        description: "ECMAScript JS AST traversal functions",
        devDependencies: {
            "babel-preset-env": "^1.6.1",
            "babel-register": "^6.3.13",
            chai: "^2.1.1",
            espree: "^1.11.0",
            gulp: "^3.8.10",
            "gulp-bump": "^0.2.2",
            "gulp-filter": "^2.0.0",
            "gulp-git": "^1.0.1",
            "gulp-tag-version": "^1.3.0",
            jshint: "^2.5.6",
            mocha: "^2.1.0"
        },
        engines: {
            node: ">=4.0"
        },
        homepage: "https://github.com/estools/estraverse",
        license: "BSD-2-Clause",
        main: "estraverse.js",
        maintainers: [{
            name: "Yusuke Suzuki",
            email: "utatane.tea@gmail.com",
            url: "http://github.com/Constellation"
        }],
        name: "estraverse",
        repository: {
            type: "git",
            url: "git+ssh://git@github.com/estools/estraverse.git"
        },
        scripts: {
            lint: "jshint estraverse.js",
            test: "npm run-script lint && npm run-script unit-test",
            "unit-test": "mocha --compilers js:babel-register"
        },
        version: "4.3.0"
    }
}, function(e, t) {
    ! function() {
        "use strict";

        function t(e) {
            if (null == e) return !1;
            switch (e.type) {
                case "ArrayExpression":
                case "AssignmentExpression":
                case "BinaryExpression":
                case "CallExpression":
                case "ConditionalExpression":
                case "FunctionExpression":
                case "Identifier":
                case "Literal":
                case "LogicalExpression":
                case "MemberExpression":
                case "NewExpression":
                case "ObjectExpression":
                case "SequenceExpression":
                case "ThisExpression":
                case "UnaryExpression":
                case "UpdateExpression":
                    return !0
            }
            return !1
        }

        function n(e) {
            if (null == e) return !1;
            switch (e.type) {
                case "DoWhileStatement":
                case "ForInStatement":
                case "ForStatement":
                case "WhileStatement":
                    return !0
            }
            return !1
        }

        function r(e) {
            if (null == e) return !1;
            switch (e.type) {
                case "BlockStatement":
                case "BreakStatement":
                case "ContinueStatement":
                case "DebuggerStatement":
                case "DoWhileStatement":
                case "EmptyStatement":
                case "ExpressionStatement":
                case "ForInStatement":
                case "ForStatement":
                case "IfStatement":
                case "LabeledStatement":
                case "ReturnStatement":
                case "SwitchStatement":
                case "ThrowStatement":
                case "TryStatement":
                case "VariableDeclaration":
                case "WhileStatement":
                case "WithStatement":
                    return !0
            }
            return !1
        }

        function i(e) {
            return r(e) || null != e && "FunctionDeclaration" === e.type
        }

        function u(e) {
            switch (e.type) {
                case "IfStatement":
                    return null != e.alternate ? e.alternate : e.consequent;
                case "LabeledStatement":
                case "ForStatement":
                case "ForInStatement":
                case "WhileStatement":
                case "WithStatement":
                    return e.body
            }
            return null
        }

        function s(e) {
            var t;
            if ("IfStatement" !== e.type) return !1;
            if (null == e.alternate) return !1;
            t = e.consequent;
            do {
                if ("IfStatement" === t.type && null == t.alternate) return !0;
                t = u(t)
            } while (t);
            return !1
        }
        e.exports = {
            isExpression: t,
            isStatement: r,
            isIterationStatement: n,
            isSourceElement: i,
            isProblematicIfStatement: s,
            trailingStatement: u
        }
    }()
}, function(e, t, n) {
    ! function() {
        "use strict";

        function t(e) {
            switch (e) {
                case "implements":
                case "interface":
                case "package":
                case "private":
                case "protected":
                case "public":
                case "static":
                case "let":
                    return !0;
                default:
                    return !1
            }
        }

        function r(e, t) {
            return !(!t && "yield" === e) && i(e, t)
        }

        function i(e, n) {
            if (n && t(e)) return !0;
            switch (e.length) {
                case 2:
                    return "if" === e || "in" === e || "do" === e;
                case 3:
                    return "var" === e || "for" === e || "new" === e || "try" === e;
                case 4:
                    return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;
                case 5:
                    return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;
                case 6:
                    return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;
                case 7:
                    return "default" === e || "finally" === e || "extends" === e;
                case 8:
                    return "function" === e || "continue" === e || "debugger" === e;
                case 10:
                    return "instanceof" === e;
                default:
                    return !1
            }
        }

        function u(e, t) {
            return "null" === e || "true" === e || "false" === e || r(e, t)
        }

        function s(e, t) {
            return "null" === e || "true" === e || "false" === e || i(e, t)
        }

        function o(e) {
            return "eval" === e || "arguments" === e
        }

        function a(e) {
            var t, n, r;
            if (0 === e.length) return !1;
            if (r = e.charCodeAt(0), !d.isIdentifierStartES5(r)) return !1;
            for (t = 1, n = e.length; t < n; ++t)
                if (r = e.charCodeAt(t), !d.isIdentifierPartES5(r)) return !1;
            return !0
        }

        function c(e, t) {
            return 1024 * (e - 55296) + (t - 56320) + 65536
        }

        function l(e) {
            var t, n, r, i, u;
            if (0 === e.length) return !1;
            for (u = d.isIdentifierStartES6, t = 0, n = e.length; t < n; ++t) {
                if (55296 <= (r = e.charCodeAt(t)) && r <= 56319) {
                    if (++t >= n) return !1;
                    if (!(56320 <= (i = e.charCodeAt(t)) && i <= 57343)) return !1;
                    r = c(r, i)
                }
                if (!u(r)) return !1;
                u = d.isIdentifierPartES6
            }
            return !0
        }

        function h(e, t) {
            return a(e) && !u(e, t)
        }

        function p(e, t) {
            return l(e) && !s(e, t)
        }
        var d = n(4);
        e.exports = {
            isKeywordES5: r,
            isKeywordES6: i,
            isReservedWordES5: u,
            isReservedWordES6: s,
            isRestrictedWord: o,
            isIdentifierNameES5: a,
            isIdentifierNameES6: l,
            isIdentifierES5: h,
            isIdentifierES6: p
        }
    }()
}, function(e, t, n) {
    ! function() {
        "use strict";
        t.ast = n(21), t.code = n(4), t.keyword = n(22)
    }()
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}]);