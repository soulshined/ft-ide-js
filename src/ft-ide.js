'use strict';
(function () {
    function aa(a, b, c) { return a.call.apply(a.bind, arguments); }
    function ba(a, b, c) { if (!a)
        throw Error(); if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () { var c = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(c, d); return a.apply(b, c); };
    } return function () { return a.apply(b, arguments); }; }
    function n(a, b, c) { n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba; return n.apply(null, arguments); }
    var p = Date.now || function () { return +new Date; };
    function r(a, b) { this.F = a; this.k = b || a; this.H = this.k.document; }
    var ca = !!window.FontFace;
    r.prototype.createElement = function (a, b, c) { a = this.H.createElement(a); if (b)
        for (var d in b)
            b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d])); c && a.appendChild(this.H.createTextNode(c)); return a; };
    function s(a, b, c) { a = a.H.getElementsByTagName(b)[0]; a || (a = document.documentElement); a.insertBefore(c, a.lastChild); }
    function t(a, b, c) { b = b || []; c = c || []; for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
        for (var f = !1, g = 0; g < d.length; g += 1)
            if (b[e] === d[g]) {
                f = !0;
                break;
            }
        f || d.push(b[e]);
    } b = []; for (e = 0; e < d.length; e += 1) {
        f = !1;
        for (g = 0; g < c.length; g += 1)
            if (d[e] === c[g]) {
                f = !0;
                break;
            }
        f || b.push(d[e]);
    } a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, ""); }
    function u(a, b) { for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
        if (c[d] == b)
            return !0; return !1; }
    function v(a) { if ("string" === typeof a.fa)
        return a.fa; var b = a.k.location.protocol; "about:" == b && (b = a.F.location.protocol); return "https:" == b ? "https:" : "http:"; }
    function x(a, b, c) { function d() { l && e && f && (l(g), l = null); } b = a.createElement("link", { rel: "stylesheet", href: b, media: "all" }); var e = !1, f = !0, g = null, l = c || null; ca ? (b.onload = function () { e = !0; d(); }, b.onerror = function () { e = !0; g = Error("Stylesheet failed to load"); d(); }) : setTimeout(function () { e = !0; d(); }, 0); s(a, "head", b); }
    function y(a, b, c, d) { var e = a.H.getElementsByTagName("head")[0]; if (e) {
        var f = a.createElement("script", { src: b }), g = !1;
        f.onload = f.onreadystatechange = function () { g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f)); };
        e.appendChild(f);
        setTimeout(function () { g || (g = !0, c && c(Error("Script load timeout"))); }, d || 5E3);
        return f;
    } return null; }
    ;
    function z() { this.S = 0; this.K = null; }
    function A(a) { a.S++; return function () { a.S--; B(a); }; }
    function C(a, b) { a.K = b; B(a); }
    function B(a) { 0 == a.S && a.K && (a.K(), a.K = null); }
    ;
    function D(a) { this.ea = a || "-"; }
    D.prototype.d = function (a) { for (var b = [], c = 0; c < arguments.length; c++)
        b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase()); return b.join(this.ea); };
    function E(a, b) { this.Q = a; this.M = 4; this.L = "n"; var c = (b || "n4").match(/^([nio])([1-9])$/i); c && (this.L = c[1], this.M = parseInt(c[2], 10)); }
    E.prototype.getName = function () { return this.Q; };
    function da(a) { return F(a) + " " + (a.M + "00") + " 300px " + G(a.Q); }
    function G(a) { var b = []; a = a.split(/,\s*/); for (var c = 0; c < a.length; c++) {
        var d = a[c].replace(/['"]/g, "");
        -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
    } return b.join(","); }
    function I(a) { return a.L + a.M; }
    function F(a) { var b = "normal"; "o" === a.L ? b = "oblique" : "i" === a.L && (b = "italic"); return b; }
    function ea(a) { var b = 4, c = "n", d = null; a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10)))); return c + b; }
    ;
    function fa(a, b) { this.a = a; this.j = a.k.document.documentElement; this.O = b; this.f = "wf"; this.e = new D("-"); this.da = !1 !== b.events; this.u = !1 !== b.classes; }
    function ga(a) { a.u && t(a.j, [a.e.d(a.f, "loading")]); J(a, "loading"); }
    function K(a) { if (a.u) {
        var b = u(a.j, a.e.d(a.f, "active")), c = [], d = [a.e.d(a.f, "loading")];
        b || c.push(a.e.d(a.f, "inactive"));
        t(a.j, c, d);
    } J(a, "inactive"); }
    function J(a, b, c) { if (a.da && a.O[b])
        if (c)
            a.O[b](c.getName(), I(c));
        else
            a.O[b](); }
    ;
    function ha() { this.t = {}; }
    function ia(a, b, c) { var d = [], e; for (e in b)
        if (b.hasOwnProperty(e)) {
            var f = a.t[e];
            f && d.push(f(b[e], c));
        } return d; }
    ;
    function L(a, b) { this.a = a; this.h = b; this.m = this.a.createElement("span", { "aria-hidden": "true" }, this.h); }
    function M(a, b) { var c = a.m, d; d = "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + G(b.Q) + ";" + ("font-style:" + F(b) + ";font-weight:" + (b.M + "00") + ";"); c.style.cssText = d; }
    function N(a) { s(a.a, "body", a.m); }
    L.prototype.remove = function () { var a = this.m; a.parentNode && a.parentNode.removeChild(a); };
    function O(a, b, c, d, e, f) { this.G = a; this.J = b; this.g = d; this.a = c; this.v = e || 3E3; this.h = f || void 0; }
    O.prototype.start = function () { function a() { p() - d >= c.v ? c.J(c.g) : b.fonts.load(da(c.g), c.h).then(function (b) { 1 <= b.length ? c.G(c.g) : setTimeout(a, 25); }, function () { c.J(c.g); }); } var b = this.a.k.document, c = this, d = p(); a(); };
    function P(a, b, c, d, e, f, g) { this.G = a; this.J = b; this.a = c; this.g = d; this.h = g || "BESbswy"; this.s = {}; this.v = e || 3E3; this.Z = f || null; this.D = this.C = this.A = this.w = null; this.w = new L(this.a, this.h); this.A = new L(this.a, this.h); this.C = new L(this.a, this.h); this.D = new L(this.a, this.h); M(this.w, new E(this.g.getName() + ",serif", I(this.g))); M(this.A, new E(this.g.getName() + ",sans-serif", I(this.g))); M(this.C, new E("serif", I(this.g))); M(this.D, new E("sans-serif", I(this.g))); N(this.w); N(this.A); N(this.C); N(this.D); }
    var Q = { ia: "serif", ha: "sans-serif" }, R = null;
    function S() { if (null === R) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
        R = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
    } return R; }
    P.prototype.start = function () { this.s.serif = this.C.m.offsetWidth; this.s["sans-serif"] = this.D.m.offsetWidth; this.ga = p(); ja(this); };
    function ka(a, b, c) { for (var d in Q)
        if (Q.hasOwnProperty(d) && b === a.s[Q[d]] && c === a.s[Q[d]])
            return !0; return !1; }
    function ja(a) { var b = a.w.m.offsetWidth, c = a.A.m.offsetWidth, d; (d = b === a.s.serif && c === a.s["sans-serif"]) || (d = S() && ka(a, b, c)); d ? p() - a.ga >= a.v ? S() && ka(a, b, c) && (null === a.Z || a.Z.hasOwnProperty(a.g.getName())) ? T(a, a.G) : T(a, a.J) : la(a) : T(a, a.G); }
    function la(a) { setTimeout(n(function () { ja(this); }, a), 50); }
    function T(a, b) { setTimeout(n(function () { this.w.remove(); this.A.remove(); this.C.remove(); this.D.remove(); b(this.g); }, a), 0); }
    ;
    function U(a, b, c) { this.a = a; this.p = b; this.P = 0; this.ba = this.Y = !1; this.v = c; }
    var V = null;
    U.prototype.V = function (a) { var b = this.p; b.u && t(b.j, [b.e.d(b.f, a.getName(), I(a).toString(), "active")], [b.e.d(b.f, a.getName(), I(a).toString(), "loading"), b.e.d(b.f, a.getName(), I(a).toString(), "inactive")]); J(b, "fontactive", a); this.ba = !0; ma(this); };
    U.prototype.W = function (a) { var b = this.p; if (b.u) {
        var c = u(b.j, b.e.d(b.f, a.getName(), I(a).toString(), "active")), d = [], e = [b.e.d(b.f, a.getName(), I(a).toString(), "loading")];
        c || d.push(b.e.d(b.f, a.getName(), I(a).toString(), "inactive"));
        t(b.j, d, e);
    } J(b, "fontinactive", a); ma(this); };
    function ma(a) { 0 == --a.P && a.Y && (a.ba ? (a = a.p, a.u && t(a.j, [a.e.d(a.f, "active")], [a.e.d(a.f, "loading"), a.e.d(a.f, "inactive")]), J(a, "active")) : K(a.p)); }
    ;
    function na(a) { this.F = a; this.q = new ha; this.$ = 0; this.T = this.U = !0; }
    na.prototype.load = function (a) { this.a = new r(this.F, a.context || this.F); this.U = !1 !== a.events; this.T = !1 !== a.classes; oa(this, new fa(this.a, a), a); };
    function pa(a, b, c, d, e) {
        var f = 0 == --a.$;
        (a.T || a.U) && setTimeout(function () {
            var a = e || null, l = d || null || {};
            if (0 === c.length && f)
                K(b.p);
            else {
                b.P += c.length;
                f && (b.Y = f);
                var h, k = [];
                for (h = 0; h < c.length; h++) {
                    var m = c[h], w = l[m.getName()], q = b.p, H = m;
                    q.u && t(q.j, [q.e.d(q.f, H.getName(), I(H).toString(), "loading")]);
                    J(q, "fontloading", H);
                    q = null;
                    null === V && (V = window.FontFace ? (q = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) ? 42 < parseInt(q[1], 10) : !0 : !1);
                    q = V ? new O(n(b.V, b), n(b.W, b), b.a, m, b.v, w) : new P(n(b.V, b), n(b.W, b), b.a, m, b.v, a, w);
                    k.push(q);
                }
                for (h = 0; h < k.length; h++)
                    k[h].start();
            }
        }, 0);
    }
    function oa(a, b, c) { var d = [], e = c.timeout; ga(b); var d = ia(a.q, c, a.a), f = new U(a.a, b, e); a.$ = d.length; b = 0; for (c = d.length; b < c; b++)
        d[b].load(function (b, c, d) { pa(a, f, b, c, d); }); }
    ;
    function qa(a, b, c) { this.N = a ? a : b + ra; this.o = []; this.R = []; this.ca = c || ""; }
    var ra = "//fonts.googleapis.com/css";
    function sa(a, b) { for (var c = b.length, d = 0; d < c; d++) {
        var e = b[d].split(":");
        3 == e.length && a.R.push(e.pop());
        var f = "";
        2 == e.length && "" != e[1] && (f = ":");
        a.o.push(e.join(f));
    } }
    qa.prototype.d = function () { if (0 == this.o.length)
        throw Error("No fonts to load!"); if (-1 != this.N.indexOf("kit="))
        return this.N; for (var a = this.o.length, b = [], c = 0; c < a; c++)
        b.push(this.o[c].replace(/ /g, "+")); a = this.N + "?family=" + b.join("%7C"); 0 < this.R.length && (a += "&subset=" + this.R.join(",")); 0 < this.ca.length && (a += "&text=" + encodeURIComponent(this.ca)); return a; };
    function ta(a) { this.o = a; this.aa = []; this.I = {}; }
    var ua = { latin: "BESbswy", cyrillic: "&#1081;&#1103;&#1046;", greek: "&#945;&#946;&#931;", khmer: "&#x1780;&#x1781;&#x1782;", Hanuman: "&#x1780;&#x1781;&#x1782;" }, va = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, wa = { i: "i", italic: "i", n: "n", normal: "n" }, xa = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    ta.prototype.parse = function () {
        for (var a = this.o.length, b = 0; b < a; b++) {
            var c = this.o[b].split(":"), d = c[0].replace(/\+/g, " "), e = ["n4"];
            if (2 <= c.length) {
                var f;
                var g = c[1];
                f = [];
                if (g)
                    for (var g = g.split(","), l = g.length, h = 0; h < l; h++) {
                        var k;
                        k = g[h];
                        if (k.match(/^[\w-]+$/))
                            if (k = xa.exec(k.toLowerCase()), null == k)
                                k = "";
                            else {
                                var m;
                                m = k[1];
                                if (null == m || "" == m)
                                    m = "4";
                                else {
                                    var w = va[m];
                                    m = w ? w : isNaN(m) ? "4" : m.substr(0, 1);
                                }
                                k = k[2];
                                k = [null == k || "" == k ? "n" : wa[k], m].join("");
                            }
                        else
                            k = "";
                        k && f.push(k);
                    }
                0 < f.length && (e = f);
                3 == c.length && (c = c[2], f =
                    [], c = c ? c.split(",") : f, 0 < c.length && (c = ua[c[0]]) && (this.I[d] = c));
            }
            this.I[d] || (c = ua[d]) && (this.I[d] = c);
            for (c = 0; c < e.length; c += 1)
                this.aa.push(new E(d, e[c]));
        }
    };
    function ya(a, b) { this.a = a; this.c = b; }
    var za = { Arimo: !0, Cousine: !0, Tinos: !0 };
    ya.prototype.load = function (a) { var b = new z, c = this.a, d = new qa(this.c.api, v(c), this.c.text), e = this.c.families; sa(d, e); var f = new ta(e); f.parse(); x(c, d.d(), A(b)); C(b, function () { a(f.aa, f.I, za); }); };
    function W(a, b) { this.a = a; this.c = b; this.X = []; }
    W.prototype.B = function (a) { var b = this.a; return v(this.a) + (this.c.api || "//f.fontdeck.com/s/css/js/") + (b.k.location.hostname || b.F.location.hostname) + "/" + a + ".js"; };
    W.prototype.load = function (a) { var b = this.c.id, c = this.a.k, d = this; b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) { for (var g = 0, l = c.fonts.length; g < l; ++g) {
        var h = c.fonts[g];
        d.X.push(new E(h.name, ea("font-weight:" + h.weight + ";font-style:" + h.style)));
    } a(d.X); }, y(this.a, this.B(b), function (b) { b && a([]); })) : a([]); };
    function X(a, b) { this.a = a; this.c = b; }
    X.prototype.B = function (a) { return (this.c.api || "https://use.typekit.net") + "/" + a + ".js"; };
    X.prototype.load = function (a) { var b = this.c.id, c = this.a.k; b ? y(this.a, this.B(b), function (b) { if (b)
        a([]);
    else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
        b = c.Typekit.config.fn;
        for (var e = [], f = 0; f < b.length; f += 2)
            for (var g = b[f], l = b[f + 1], h = 0; h < l.length; h++)
                e.push(new E(g, l[h]));
        try {
            c.Typekit.load({ events: !1, classes: !1, async: !0 });
        }
        catch (k) { }
        a(e);
    } }, 2E3) : a([]); };
    function Y(a, b) { this.a = a; this.c = b; }
    Y.prototype.B = function (a, b) { var c = v(this.a), d = (this.c.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, ""); return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : ""); };
    Y.prototype.load = function (a) { function b() { if (e["__mti_fntLst" + c]) {
        var d = e["__mti_fntLst" + c](), g = [], l;
        if (d)
            for (var h = 0; h < d.length; h++) {
                var k = d[h].fontfamily;
                void 0 != d[h].fontStyle && void 0 != d[h].fontWeight ? (l = d[h].fontStyle + d[h].fontWeight, g.push(new E(k, l))) : g.push(new E(k));
            }
        a(g);
    }
    else
        setTimeout(function () { b(); }, 50); } var c = this.c.projectId, d = this.c.version; if (c) {
        var e = this.a.k;
        y(this.a, this.B(c, d), function (c) { c ? a([]) : b(); }).id = "__MonotypeAPIScript__" + c;
    }
    else
        a([]); };
    function Aa(a, b) { this.a = a; this.c = b; }
    Aa.prototype.load = function (a) { var b, c, d = this.c.urls || [], e = this.c.families || [], f = this.c.testStrings || {}, g = new z; b = 0; for (c = d.length; b < c; b++)
        x(this.a, d[b], A(g)); var l = []; b = 0; for (c = e.length; b < c; b++)
        if (d = e[b].split(":"), d[1])
            for (var h = d[1].split(","), k = 0; k < h.length; k += 1)
                l.push(new E(d[0], h[k]));
        else
            l.push(new E(d[0])); C(g, function () { a(l, f); }); };
    var Z = new na(window);
    Z.q.t.custom = function (a, b) { return new Aa(b, a); };
    Z.q.t.fontdeck = function (a, b) { return new W(b, a); };
    Z.q.t.monotype = function (a, b) { return new Y(b, a); };
    Z.q.t.typekit = function (a, b) { return new X(b, a); };
    Z.q.t.google = function (a, b) { return new ya(b, a); };
    var $ = { load: n(Z.load, Z) };
    "function" === typeof define && define.amd ? define(function () { return $; }) : "undefined" !== typeof module && module.exports ? module.exports = $ : (window.WebFont = $, window.WebFontConfig && Z.load(window.WebFontConfig));
}());
!function () {
    (function () {
        function aa(g) {
            function r() { try {
                L.doScroll("left");
            }
            catch (ba) {
                k.setTimeout(r, 50);
                return;
            } x("poll"); }
            function x(r) { if ("readystatechange" != r.type || "complete" == z.readyState)
                ("load" == r.type ? k : z)[B](n + r.type, x, !1), !l && (l = !0) && g.call(k, r.type || r); }
            var X = z.addEventListener, l = !1, E = !0, v = X ? "addEventListener" : "attachEvent", B = X ? "removeEventListener" : "detachEvent", n = X ? "" : "on";
            if ("complete" == z.readyState)
                g.call(k, "lazy");
            else {
                if (z.createEventObject && L.doScroll) {
                    try {
                        E = !k.frameElement;
                    }
                    catch (ba) { }
                    E && r();
                }
                z[v](n +
                    "DOMContentLoaded", x, !1);
                z[v](n + "readystatechange", x, !1);
                k[v](n + "load", x, !1);
            }
        }
        function T() { U && aa(function () { var g = M.length; ca(g ? function () { for (var r = 0; r < g; ++r)
            (function (g) { k.setTimeout(function () { k.exports[M[g]].apply(k, arguments); }, 0); })(r); } : void 0); }); }
        for (var k = window, z = document, L = z.documentElement, N = z.head || z.getElementsByTagName("head")[0] || L, B = "", F = z.getElementsByTagName("script"), l = F.length; 0 <= --l;) {
            var O = F[l], Y = O.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);
            if (Y) {
                B = Y[1] || "";
                O.parentNode.removeChild(O);
                break;
            }
        }
        var U = !0, H = [], P = [], M = [];
        B.replace(/[?&]([^&=]+)=([^&]+)/g, function (g, r, x) { x = decodeURIComponent(x); r = decodeURIComponent(r); "autorun" == r ? U = !/^[0fn]/i.test(x) : "lang" == r ? H.push(x) : "skin" == r ? P.push(x) : "callback" == r && M.push(x); });
        l = 0;
        for (B = H.length; l < B; ++l)
            (function () {
                var g = z.createElement("script");
                g.onload = g.onerror = g.onreadystatechange = function () {
                    !g || g.readyState && !/loaded|complete/.test(g.readyState) || (g.onerror = g.onload = g.onreadystatechange = null, --S, S || k.setTimeout(T, 0), g.parentNode && g.parentNode.removeChild(g),
                        g = null);
                };
                g.type = "text/javascript";
                g.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/lang-" + encodeURIComponent(H[l]) + ".js";
                N.insertBefore(g, N.firstChild);
            })(H[l]);
        for (var S = H.length, F = [], l = 0, B = P.length; l < B; ++l)
            F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/" + encodeURIComponent(P[l]) + ".css");
        F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.css");
        (function (g) {
            function r(l) {
                if (l !== x) {
                    var k = z.createElement("link");
                    k.rel = "stylesheet";
                    k.type =
                        "text/css";
                    l + 1 < x && (k.error = k.onerror = function () { r(l + 1); });
                    k.href = g[l];
                    N.appendChild(k);
                }
            }
            var x = g.length;
            r(0);
        })(F);
        var ca = function () {
            "undefined" !== typeof window && (window.PR_SHOULD_USE_CONTINUATION = !0);
            var g;
            (function () {
                function r(a) {
                    function d(e) { var a = e.charCodeAt(0); if (92 !== a)
                        return a; var c = e.charAt(1); return (a = k[c]) ? a : "0" <= c && "7" >= c ? parseInt(e.substring(1), 8) : "u" === c || "x" === c ? parseInt(e.substring(2), 16) : e.charCodeAt(1); }
                    function f(e) {
                        if (32 > e)
                            return (16 > e ? "\\x0" : "\\x") + e.toString(16);
                        e = String.fromCharCode(e);
                        return "\\" === e || "-" === e || "]" === e || "^" === e ? "\\" + e : e;
                    }
                    function c(e) {
                        var c = e.substring(1, e.length - 1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g"));
                        e = [];
                        var a = "^" === c[0], b = ["["];
                        a && b.push("^");
                        for (var a = a ? 1 : 0, h = c.length; a < h; ++a) {
                            var m = c[a];
                            if (/\\[bdsw]/i.test(m))
                                b.push(m);
                            else {
                                var m = d(m), p;
                                a + 2 < h && "-" === c[a + 1] ? (p = d(c[a + 2]), a += 2) : p = m;
                                e.push([m, p]);
                                65 > p || 122 < m || (65 > p || 90 < m || e.push([Math.max(65, m) | 32, Math.min(p, 90) | 32]), 97 > p || 122 < m ||
                                    e.push([Math.max(97, m) & -33, Math.min(p, 122) & -33]));
                            }
                        }
                        e.sort(function (e, a) { return e[0] - a[0] || a[1] - e[1]; });
                        c = [];
                        h = [];
                        for (a = 0; a < e.length; ++a)
                            m = e[a], m[0] <= h[1] + 1 ? h[1] = Math.max(h[1], m[1]) : c.push(h = m);
                        for (a = 0; a < c.length; ++a)
                            m = c[a], b.push(f(m[0])), m[1] > m[0] && (m[1] + 1 > m[0] && b.push("-"), b.push(f(m[1])));
                        b.push("]");
                        return b.join("");
                    }
                    function g(e) {
                        for (var a = e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), b = a.length, d = [], h = 0, m = 0; h < b; ++h) {
                            var p = a[h];
                            "(" === p ? ++m : "\\" === p.charAt(0) && (p = +p.substring(1)) && (p <= m ? d[p] = -1 : a[h] = f(p));
                        }
                        for (h = 1; h < d.length; ++h)
                            -1 === d[h] && (d[h] = ++r);
                        for (m = h = 0; h < b; ++h)
                            p = a[h], "(" === p ? (++m, d[m] || (a[h] = "(?:")) : "\\" === p.charAt(0) && (p = +p.substring(1)) && p <= m && (a[h] = "\\" + d[p]);
                        for (h = 0; h < b; ++h)
                            "^" === a[h] && "^" !== a[h + 1] && (a[h] = "");
                        if (e.ignoreCase && A)
                            for (h = 0; h < b; ++h)
                                p = a[h], e = p.charAt(0), 2 <= p.length && "[" === e ? a[h] = c(p) : "\\" !== e && (a[h] = p.replace(/[a-zA-Z]/g, function (a) {
                                    a = a.charCodeAt(0);
                                    return "[" + String.fromCharCode(a & -33, a | 32) + "]";
                                }));
                        return a.join("");
                    }
                    for (var r = 0, A = !1, q = !1, I = 0, b = a.length; I < b; ++I) {
                        var t = a[I];
                        if (t.ignoreCase)
                            q = !0;
                        else if (/[a-z]/i.test(t.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
                            A = !0;
                            q = !1;
                            break;
                        }
                    }
                    for (var k = { b: 8, t: 9, n: 10, v: 11, f: 12, r: 13 }, u = [], I = 0, b = a.length; I < b; ++I) {
                        t = a[I];
                        if (t.global || t.multiline)
                            throw Error("" + t);
                        u.push("(?:" + g(t) + ")");
                    }
                    return new RegExp(u.join("|"), q ? "gi" : "g");
                }
                function l(a, d) {
                    function f(a) {
                        var b = a.nodeType;
                        if (1 == b) {
                            if (!c.test(a.className)) {
                                for (b =
                                    a.firstChild; b; b = b.nextSibling)
                                    f(b);
                                b = a.nodeName.toLowerCase();
                                if ("br" === b || "li" === b)
                                    g[q] = "\n", A[q << 1] = r++, A[q++ << 1 | 1] = a;
                            }
                        }
                        else if (3 == b || 4 == b)
                            b = a.nodeValue, b.length && (b = d ? b.replace(/\r\n?/g, "\n") : b.replace(/[ \t\r\n]+/g, " "), g[q] = b, A[q << 1] = r, r += b.length, A[q++ << 1 | 1] = a);
                    }
                    var c = /(?:^|\s)nocode(?:\s|$)/, g = [], r = 0, A = [], q = 0;
                    f(a);
                    return { a: g.join("").replace(/\n$/, ""), c: A };
                }
                function k(a, d, f, c, g) { f && (a = { h: a, l: 1, j: null, m: null, a: f, c: null, i: d, g: null }, c(a), g.push.apply(g, a.g)); }
                function z(a) {
                    for (var d = void 0, f = a.firstChild; f; f =
                        f.nextSibling)
                        var c = f.nodeType, d = 1 === c ? d ? a : f : 3 === c ? S.test(f.nodeValue) ? a : d : d;
                    return d === a ? void 0 : d;
                }
                function E(a, d) {
                    function f(a) {
                        for (var q = a.i, r = a.h, b = [q, "pln"], t = 0, A = a.a.match(g) || [], u = {}, e = 0, l = A.length; e < l; ++e) {
                            var D = A[e], w = u[D], h = void 0, m;
                            if ("string" === typeof w)
                                m = !1;
                            else {
                                var p = c[D.charAt(0)];
                                if (p)
                                    h = D.match(p[1]), w = p[0];
                                else {
                                    for (m = 0; m < n; ++m)
                                        if (p = d[m], h = D.match(p[1])) {
                                            w = p[0];
                                            break;
                                        }
                                    h || (w = "pln");
                                }
                                !(m = 5 <= w.length && "lang-" === w.substring(0, 5)) || h && "string" === typeof h[1] || (m = !1, w = "src");
                                m || (u[D] = w);
                            }
                            p = t;
                            t += D.length;
                            if (m) {
                                m = h[1];
                                var C = D.indexOf(m), G = C + m.length;
                                h[2] && (G = D.length - h[2].length, C = G - m.length);
                                w = w.substring(5);
                                k(r, q + p, D.substring(0, C), f, b);
                                k(r, q + p + C, m, F(w, m), b);
                                k(r, q + p + G, D.substring(G), f, b);
                            }
                            else
                                b.push(q + p, w);
                        }
                        a.g = b;
                    }
                    var c = {}, g;
                    (function () { for (var f = a.concat(d), q = [], k = {}, b = 0, t = f.length; b < t; ++b) {
                        var n = f[b], u = n[3];
                        if (u)
                            for (var e = u.length; 0 <= --e;)
                                c[u.charAt(e)] = n;
                        n = n[1];
                        u = "" + n;
                        k.hasOwnProperty(u) || (q.push(n), k[u] = null);
                    } q.push(/[\0-\uffff]/); g = r(q); })();
                    var n = d.length;
                    return f;
                }
                function v(a) {
                    var d = [], f = [];
                    a.tripleQuotedStrings ? d.push(["str", /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : a.multiLineStrings ? d.push(["str", /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : d.push(["str", /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]);
                    a.verbatimStrings &&
                        f.push(["str", /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
                    var c = a.hashComments;
                    c && (a.cStyleComments ? (1 < c ? d.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : d.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), f.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : d.push(["com", /^#[^\r\n]*/, null, "#"]));
                    a.cStyleComments && (f.push(["com", /^\/\/[^\r\n]*/, null]), f.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/,
                        null]));
                    if (c = a.regexLiterals) {
                        var g = (c = 1 < c ? "" : "\n\r") ? "." : "[\\S\\s]";
                        f.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + c + "])(?:[^/\\x5B\\x5C" + c + "]|\\x5C" + g + "|\\x5B(?:[^\\x5C\\x5D" + c + "]|\\x5C" + g + ")*(?:\\x5D|$))+/") + ")")]);
                    }
                    (c = a.types) && f.push(["typ", c]);
                    c = ("" + a.keywords).replace(/^ | $/g, "");
                    c.length && f.push(["kwd",
                        new RegExp("^(?:" + c.replace(/[\s,]+/g, "|") + ")\\b"), null]);
                    d.push(["pln", /^\s+/, null, " \r\n\t\u00a0"]);
                    c = "^.[^\\s\\w.$@'\"`/\\\\]*";
                    a.regexLiterals && (c += "(?!s*/)");
                    f.push(["lit", /^@[a-z_$][a-z_$@0-9]*/i, null], ["typ", /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], ["pln", /^[a-z_$][a-z_$@0-9]*/i, null], ["lit", /^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i, null, "0123456789"], ["pln", /^\\[\s\S]?/, null], ["pun", new RegExp(c), null]);
                    return E(d, f);
                }
                function B(a, d, f) {
                    function c(a) {
                        var b = a.nodeType;
                        if (1 == b && !r.test(a.className))
                            if ("br" === a.nodeName.toLowerCase())
                                g(a), a.parentNode && a.parentNode.removeChild(a);
                            else
                                for (a = a.firstChild; a; a = a.nextSibling)
                                    c(a);
                        else if ((3 == b || 4 == b) && f) {
                            var e = a.nodeValue, d = e.match(n);
                            d && (b = e.substring(0, d.index), a.nodeValue = b, (e = e.substring(d.index + d[0].length)) && a.parentNode.insertBefore(q.createTextNode(e), a.nextSibling), g(a), b || a.parentNode.removeChild(a));
                        }
                    }
                    function g(a) {
                        function c(a, b) {
                            var e = b ? a.cloneNode(!1) : a, p = a.parentNode;
                            if (p) {
                                var p = c(p, 1), d = a.nextSibling;
                                p.appendChild(e);
                                for (var f = d; f; f = d)
                                    d = f.nextSibling, p.appendChild(f);
                            }
                            return e;
                        }
                        for (; !a.nextSibling;)
                            if (a = a.parentNode, !a)
                                return;
                        a = c(a.nextSibling, 0);
                        for (var e; (e = a.parentNode) && 1 === e.nodeType;)
                            a = e;
                        b.push(a);
                    }
                    for (var r = /(?:^|\s)nocode(?:\s|$)/, n = /\r\n?|\n/, q = a.ownerDocument, k = q.createElement("li"); a.firstChild;)
                        k.appendChild(a.firstChild);
                    for (var b = [k], t = 0; t < b.length; ++t)
                        c(b[t]);
                    d === (d | 0) && b[0].setAttribute("value", d);
                    var l = q.createElement("ol");
                    l.className = "linenums";
                    d = Math.max(0, d - 1 | 0) || 0;
                    for (var t = 0, u = b.length; t < u; ++t)
                        k = b[t], k.className = "L" + (t + d) % 10, k.firstChild || k.appendChild(q.createTextNode("\u00a0")), l.appendChild(k);
                    a.appendChild(l);
                }
                function n(a, d) { for (var f = d.length; 0 <= --f;) {
                    var c = d[f];
                    V.hasOwnProperty(c) ? Q.console && console.warn("cannot override language handler %s", c) : V[c] = a;
                } }
                function F(a, d) { a && V.hasOwnProperty(a) || (a = /^\s*</.test(d) ? "default-markup" : "default-code"); return V[a]; }
                function H(a) {
                    var d = a.j;
                    try {
                        var f = l(a.h, a.l), c = f.a;
                        a.a = c;
                        a.c = f.c;
                        a.i = 0;
                        F(d, c)(a);
                        var g = /\bMSIE\s(\d+)/.exec(navigator.userAgent), g = g && 8 >= +g[1], d = /\n/g, r = a.a, k = r.length, f = 0, q = a.c, n = q.length, c = 0, b = a.g, t = b.length, v = 0;
                        b[t] = k;
                        var u, e;
                        for (e = u = 0; e < t;)
                            b[e] !== b[e + 2] ? (b[u++] = b[e++], b[u++] = b[e++]) : e += 2;
                        t = u;
                        for (e = u = 0; e < t;) {
                            for (var x = b[e], z = b[e + 1], w = e + 2; w + 2 <= t && b[w + 1] === z;)
                                w += 2;
                            b[u++] = x;
                            b[u++] = z;
                            e = w;
                        }
                        b.length = u;
                        var h = a.h;
                        a = "";
                        h && (a = h.style.display, h.style.display = "none");
                        try {
                            for (; c < n;) {
                                var m = q[c + 2] || k, p = b[v + 2] || k, w = Math.min(m, p), C = q[c + 1], G;
                                if (1 !== C.nodeType && (G = r.substring(f, w))) {
                                    g && (G = G.replace(d, "\r"));
                                    C.nodeValue = G;
                                    var Z = C.ownerDocument, W = Z.createElement("span");
                                    W.className = b[v + 1];
                                    var B = C.parentNode;
                                    B.replaceChild(W, C);
                                    W.appendChild(C);
                                    f < m && (q[c + 1] = C = Z.createTextNode(r.substring(w, m)), B.insertBefore(C, W.nextSibling));
                                }
                                f = w;
                                f >= m && (c += 2);
                                f >= p && (v += 2);
                            }
                        }
                        finally {
                            h && (h.style.display = a);
                        }
                    }
                    catch (y) {
                        Q.console && console.log(y && y.stack || y);
                    }
                }
                var Q = "undefined" !== typeof window ? window : {}, J = ["break,continue,do,else,for,if,return,while"], K = [[J, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
                    "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"], R = [K, "alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"], L = [K, "abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"], M = [K, "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"], K = [K, "abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"], N = [J, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"], O = [J, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"], J = [J, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"], P = /^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/, S = /\S/, T = v({ keywords: [R, M, L, K, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", N, O, J], hashComments: !0, cStyleComments: !0, multiLineStrings: !0, regexLiterals: !0 }), V = {};
                n(T, ["default-code"]);
                n(E([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\s\S]*?(?:-\->|$)/], ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/], ["lang-", /^<%([\s\S]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-",
                        /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), "default-markup htm html mxml xhtml xml xsl".split(" "));
                n(E([["pln", /^[\s]+/, null, " \t\r\n"], ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
                    ["pun", /^[=<>\/]+/], ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i], ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i], ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i], ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i], ["lang-css", /^style\s*=\s*\'([^\']+)\'/i], ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]]), ["in.tag"]);
                n(E([], [["atv", /^[\s\S]+/]]), ["uq.val"]);
                n(v({ keywords: R, hashComments: !0, cStyleComments: !0, types: P }), "c cc cpp cxx cyc m".split(" "));
                n(v({ keywords: "null,true,false" }), ["json"]);
                n(v({
                    keywords: M, hashComments: !0, cStyleComments: !0,
                    verbatimStrings: !0, types: P
                }), ["cs"]);
                n(v({ keywords: L, cStyleComments: !0 }), ["java"]);
                n(v({ keywords: J, hashComments: !0, multiLineStrings: !0 }), ["bash", "bsh", "csh", "sh"]);
                n(v({ keywords: N, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0 }), ["cv", "py", "python"]);
                n(v({ keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", hashComments: !0, multiLineStrings: !0, regexLiterals: 2 }), ["perl", "pl", "pm"]);
                n(v({ keywords: O, hashComments: !0, multiLineStrings: !0, regexLiterals: !0 }), ["rb", "ruby"]);
                n(v({ keywords: K, cStyleComments: !0, regexLiterals: !0 }), ["javascript", "js", "ts", "typescript"]);
                n(v({ keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", hashComments: 3, cStyleComments: !0, multilineStrings: !0, tripleQuotedStrings: !0, regexLiterals: !0 }), ["coffee"]);
                n(E([], [["str", /^[\s\S]+/]]), ["regex"]);
                var U = Q.PR = {
                    createSimpleLexer: E, registerLangHandler: n, sourceDecorator: v, PR_ATTRIB_NAME: "atn", PR_ATTRIB_VALUE: "atv", PR_COMMENT: "com", PR_DECLARATION: "dec", PR_KEYWORD: "kwd", PR_LITERAL: "lit", PR_NOCODE: "nocode", PR_PLAIN: "pln", PR_PUNCTUATION: "pun", PR_SOURCE: "src", PR_STRING: "str", PR_TAG: "tag", PR_TYPE: "typ", prettyPrintOne: function (a, d, f) {
                        f = f || !1;
                        d = d || null;
                        var c = document.createElement("div");
                        c.innerHTML = "<pre>" + a + "</pre>";
                        c = c.firstChild;
                        f && B(c, f, !0);
                        H({ j: d, m: f, h: c, l: 1, a: null, i: null, c: null, g: null });
                        return c.innerHTML;
                    }, prettyPrint: g = function (a, d) {
                        function f() {
                            for (var c = Q.PR_SHOULD_USE_CONTINUATION ? b.now() + 250 : Infinity; t < r.length && b.now() < c; t++) {
                                for (var d = r[t], k = h, n = d; n = n.previousSibling;) {
                                    var q = n.nodeType, l = (7 === q || 8 === q) && n.nodeValue;
                                    if (l ? !/^\??prettify\b/.test(l) : 3 !== q || /\S/.test(n.nodeValue))
                                        break;
                                    if (l) {
                                        k = {};
                                        l.replace(/\b(\w+)=([\w:.%+-]+)/g, function (a, b, c) { k[b] = c; });
                                        break;
                                    }
                                }
                                n = d.className;
                                if ((k !== h || u.test(n)) && !e.test(n)) {
                                    q = !1;
                                    for (l = d.parentNode; l; l = l.parentNode)
                                        if (w.test(l.tagName) && l.className &&
                                            u.test(l.className)) {
                                            q = !0;
                                            break;
                                        }
                                    if (!q) {
                                        d.className += " prettyprinted";
                                        q = k.lang;
                                        if (!q) {
                                            var q = n.match(v), A;
                                            !q && (A = z(d)) && D.test(A.tagName) && (q = A.className.match(v));
                                            q && (q = q[1]);
                                        }
                                        if (x.test(d.tagName))
                                            l = 1;
                                        else
                                            var l = d.currentStyle, y = g.defaultView, l = (l = l ? l.whiteSpace : y && y.getComputedStyle ? y.getComputedStyle(d, null).getPropertyValue("white-space") : 0) && "pre" === l.substring(0, 3);
                                        y = k.linenums;
                                        (y = "true" === y || +y) || (y = (y = n.match(/\blinenums\b(?::(\d+))?/)) ? y[1] && y[1].length ? +y[1] : !0 : !1);
                                        y && B(d, y, l);
                                        H({
                                            j: q, h: d, m: y,
                                            l: l, a: null, i: null, c: null, g: null
                                        });
                                    }
                                }
                            }
                            t < r.length ? Q.setTimeout(f, 250) : "function" === typeof a && a();
                        }
                        for (var c = d || document.body, g = c.ownerDocument || document, c = [c.getElementsByTagName("pre"), c.getElementsByTagName("code"), c.getElementsByTagName("xmp")], r = [], k = 0; k < c.length; ++k)
                            for (var n = 0, l = c[k].length; n < l; ++n)
                                r.push(c[k][n]);
                        var c = null, b = Date;
                        b.now || (b = { now: function () { return +new Date; } });
                        var t = 0, v = /\blang(?:uage)?-([\w.]+)(?!\S)/, u = /\bprettyprint\b/, e = /\bprettyprinted\b/, x = /pre|xmp/i, D = /^code$/i, w = /^(?:pre|code|xmp)$/i, h = {};
                        f();
                    }
                }, R = Q.define;
                "function" === typeof R && R.amd && R("google-code-prettify", [], function () { return U; });
            })();
            return g;
        }();
        S || k.setTimeout(T, 0);
    })();
}();
;
class FTIDEOptions {
    constructor(options) {
        var _a, _b, _c, _d, _e;
        this.isDebug = false;
        this.codeFontFamily = null;
        this.ideFontFamily = null;
        this.explorerStyle = 'material';
        this.expandFolders = false;
        this.maxBreadcrumbs = 4;
        this.showBreadcrumbs = "oncollapse";
        this.showCopyToClipboard = false;
        this.syntaxHighlighter = {
            highlight: false,
            class: 'prettyprint'
        };
        this.rootPath = null;
        this.theme = 'default';
        if (!options)
            return;
        this.isDebug = this.define(options.isDebug, true, [true, false], true);
        this.codeFontFamily = (_a = options.codeFontFamily, (_a !== null && _a !== void 0 ? _a : null));
        this.expandFolders = this.define(options.expandFolders, true, [true, false], true);
        this.explorerStyle = this.define(options.explorerStyle, 'material', ['material', 'compact']);
        this.ideFontFamily = (_b = options.ideFontFamily, (_b !== null && _b !== void 0 ? _b : null));
        if (options.maxBreadcrumbs)
            this.maxBreadcrumbs = options.maxBreadcrumbs;
        this.rootPath = (_c = options.rootPath, (_c !== null && _c !== void 0 ? _c : null));
        this.showBreadcrumbs = this.define(options.showBreadcrumbs, 'oncollapse', ['always', 'oncollapse', 'never']);
        this.showCopyToClipboard = this.define(options.showCopyToClipboard, true, [true, false], true);
        this.syntaxHighlighter.highlight = this.define((_d = options.syntaxHighlighter) === null || _d === void 0 ? void 0 : _d.highlight, true, [true, false], true);
        this.syntaxHighlighter.class = this.define((_e = options.syntaxHighlighter) === null || _e === void 0 ? void 0 : _e.class, 'prettyprint', [], true);
        this.theme = this.define(options.theme, 'default', ['default', 'dark']);
    }
    format(val) {
        if (typeof val === 'boolean' && val.constructor == Boolean)
            return val;
        return val.toString().trim().toLowerCase();
    }
    define(val, defaultOption, allowedOptions = [], isStrict = false) {
        if (val === undefined || val === null)
            return defaultOption;
        if (allowedOptions.length > 0) {
            if (!allowedOptions.includes(this.format(val))) {
                if (this.isDebug)
                    console.warn(`[FTIDEOptions] invalid property value '${val}'; expecting one of these values: ${allowedOptions.join()}`);
                return defaultOption;
            }
        }
        return isStrict === true ? val : this.format(val);
    }
}
class ElementBuilder {
    constructor(tagName) {
        if (tagName)
            this.node = document.createElement(tagName.toUpperCase());
    }
    innerHTML(html) {
        this.node.innerHTML = html;
        return this;
    }
    innerText(text) {
        this.node.innerText = text;
        return this;
    }
    styles(styles) {
        this.node.style.cssText += `;${styles}`;
        return this;
    }
    id(value) {
        this.node.id = value;
        return this;
    }
    addClass(...args) {
        args.forEach(arg => {
            if (!this.node.classList.contains(arg))
                this.node.classList.add(arg);
        });
        return this;
    }
    attr(attr, val) {
        this.node.setAttribute(attr, val);
        return this;
    }
    append(...child) {
        child.forEach(element => {
            this.node.appendChild((element instanceof ElementBuilder) ? element.build() : element);
        });
        return this;
    }
    static from(element, includeChildren = true) {
        const builder = new ElementBuilder('');
        builder.node = (element instanceof ElementBuilder)
            ? element.node.cloneNode(includeChildren)
            : element.cloneNode(includeChildren);
        return builder;
    }
    build() {
        return this.node;
    }
}
class FTIDETreeBuilder {
    constructor(options) {
        this.content = [];
        this.cIndex = 0;
        this.cDepth = 0;
        this.options = options;
    }
    generate(tree) {
        if (typeof tree !== 'object' && tree.constructor !== Object)
            throw new Error('1st Argument expecting an object of kvps');
        const nav = new ElementBuilder('div')
            .addClass('explorer', this.options.explorerStyle)
            .append(this.createTree(tree).addClass('tree'));
        return {
            html: nav.build(),
            content: this.content
        };
    }
    createTree(tree) {
        const ul = new ElementBuilder('ul');
        for (const [key, value] of Object.entries(tree)) {
            if (key.trim().length === 0)
                continue;
            if (typeof value === 'object' && value.constructor === Object) {
                const li = this.createItem(key, true);
                this.cDepth++;
                let child = this.createTree(value);
                if (child.build().firstChild)
                    li.append(child);
                ul.append(li);
            }
            else {
                ul.append(this.createItem(key));
                this.content.push(value);
            }
        }
        this.cDepth--;
        return ul;
    }
    createItem(content, isFolder = false) {
        const li = new ElementBuilder('li')
            .addClass(isFolder ? 'folder' : 'item')
            .styles(`padding: 0; padding-top: 1px; padding-bottom: 1px; padding-left: ${this.cDepth * 15}px;`)
            .append(new ElementBuilder('span').innerText(content).styles('pointer-events: none; vertical-align: super;'));
        if (this.options.expandFolders && isFolder)
            li.addClass('open');
        if (!isFolder)
            li.attr('data-ft-ide-id', (this.cIndex++).toString());
        return li;
    }
}
class IDE {
    constructor(elementId, tree, options) {
        this.ide = document.getElementById(elementId);
        if (this.ide === null)
            throw new Error('1st Argument expecting a valid element ID');
        if (!this.ide.classList.contains('ft-ide'))
            this.ide.classList.add('ft-ide');
        this.options = new FTIDEOptions(options);
        if (this.options.isDebug) {
            console.log(`FTIDEOptions for #${elementId}:`);
            console.table(this.options);
        }
        this.ide.setAttribute('data-ft-ide-theme', this.options.theme);
        const _tree = new FTIDETreeBuilder(this.options)
            .generate(tree);
        this.writeToDOM(_tree);
        this.writeStylesToIDE();
        this.registerEvents();
    }
    writeToDOM(tree) {
        this.ide.innerHTML = this.getBranding();
        const mobileNav = ElementBuilder.from(tree.html)
            .addClass('mobile');
        this.mobileNav = mobileNav.build();
        this.ide.appendChild(mobileNav.build());
        const contentWrapper = new ElementBuilder('div').addClass('content-wrapper');
        if (this.options.showBreadcrumbs !== 'never') {
            const breadcrumbDiv = new ElementBuilder('ul').addClass('ft-ide-breadcrumb');
            if (this.options.showBreadcrumbs === 'always')
                breadcrumbDiv.styles('display: flex !important');
            this.breadcrumbDiv = breadcrumbDiv.build();
            contentWrapper.append(breadcrumbDiv);
        }
        const contentDiv = new ElementBuilder('code')
            .addClass('content')
            .styles('line-height: 1.4; user-select: none !important;');
        const preDiv = new ElementBuilder('pre').append(contentDiv);
        if (this.options.syntaxHighlighter.highlight)
            contentDiv.addClass(...this.options.syntaxHighlighter.class.split(" "));
        contentWrapper.append(preDiv);
        this.contentDiv = contentDiv.build();
        const mobileactions = new ElementBuilder('div').addClass('mobile-actions');
        const maExplorerBtn = new ElementBuilder('button')
            .innerHTML('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px"><path d="M 5 1 C 3.9 1 3 1.9 3 3 L 3 17 L 5 17 L 5 3 L 17 3 L 17 1 L 5 1 z M 9 5 C 7.9 5 7 5.9 7 7 L 7 21 C 7 22.1 7.9 23 9 23 L 20 23 C 21.1 23 22 22.1 22 21 L 22 10 L 17 5 L 9 5 z M 9 7 L 16 7 L 16 11 L 20 11 L 20 21 L 9 21 L 9 7 z M 11 13 L 11 15 L 18 15 L 18 13 L 11 13 z M 11 17 L 11 19 L 18 19 L 18 17 L 11 17 z"></path></svg>')
            .attr('title', 'Explorer');
        maExplorerBtn.build().onclick = this.toggleMobileExplorer.bind(this);
        mobileactions.append(maExplorerBtn);
        if (this.options.showCopyToClipboard) {
            const maCopyBtn = new ElementBuilder('button')
                .innerHTML('<svg viewBox="0 0 14 16" width="17px" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg>')
                .attr('title', 'Copy To Clipboard');
            maCopyBtn.build().onclick = this.handleCopyToClipboard.bind(this);
            let copyBtn = ElementBuilder.from(maCopyBtn).id('ftide__btn-copy');
            copyBtn.build().onclick = this.handleCopyToClipboard.bind(this);
            this.ide.appendChild(copyBtn.build());
            mobileactions.append(maCopyBtn);
        }
        this.ide.appendChild(tree.html);
        this.ide.appendChild(mobileactions.build());
        this.ide.appendChild(contentWrapper.build());
        this.content = tree.content;
        if (this.content.length > 0) {
            let contentid = 0;
            if (this.options.rootPath !== null) {
                let paths = this.options.rootPath.split('/').filter(f => f.trim().length !== 0);
                let node = tree.html.children[0];
                let matchedNode = null;
                [...node.children].filter(f => f.classList.contains('folder') || f.classList.contains('item')).forEach(child => {
                    if (child.innerText === paths[0] && matchedNode == null) {
                        matchedNode = child;
                        paths.shift();
                    }
                });
                if (matchedNode != null) {
                    if (paths.length == 0 && matchedNode.classList.contains('item')) {
                        contentid = parseInt(matchedNode.getAttribute('data-ft-ide-id'));
                    }
                    if (paths.length > 0 && matchedNode.classList.contains('folder')) {
                        let canContinue;
                        do {
                            canContinue = false;
                            if (matchedNode.nextSibling && matchedNode.nextSibling.tagName == 'UL' && matchedNode.nextSibling.hasChildNodes()) {
                                [...matchedNode.nextSibling.children].filter(f => f.classList.contains('folder') || f.classList.contains('item')).forEach(child => {
                                    if (child.innerText === paths[0]) {
                                        if (paths.length == 1 && child.classList.contains('item')) {
                                            contentid = parseInt(child.getAttribute('data-ft-ide-id'));
                                        }
                                        else {
                                            matchedNode = child;
                                            paths.shift();
                                            canContinue = true;
                                        }
                                    }
                                });
                            }
                        } while (canContinue);
                    }
                    else if (matchedNode.classList.contains('item'))
                        contentid = parseInt(matchedNode.getAttribute('data-ft-ide-id'));
                }
            }
            const target = tree.html.querySelector(`.tree li[data-ft-ide-id="${contentid}"]`);
            target.classList.add('active');
            this.setContent(this.content[contentid]);
            this.updateBreadcrumbs(target);
        }
    }
    getBranding() {
        return `<!--
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$    FT-IDE CREATED BY github.com/soulshined    $$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
-->`;
    }
    toggleMobileExplorer() {
        this.mobileNav.classList.toggle('show');
    }
    handleCopyToClipboard() {
        if (navigator.permissions) {
            navigator.clipboard.writeText(this.contentDiv.textContent).then(function () {
                this.showToastr('Copied to Clipboard');
            }.bind(this), function () {
                this.showToastr('Error copying');
            }.bind(this));
        }
        else {
            const ta = document.createElement("textarea");
            ta.value = this.contentDiv.textContent;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            this.showToastr("Copied to Clipboard");
        }
    }
    registerEvents() {
        const navs = document.querySelectorAll(`#${this.ide.id} div.explorer`);
        navs.forEach(nav => {
            nav.addEventListener('click', (e) => {
                const target = e.target;
                if (target && target.nodeName === 'LI') {
                    let padding = +target.style.paddingLeft.substring(0, target.style.paddingLeft.length - 2);
                    nav.scrollTo(padding - 10, nav.scrollTop);
                    if (!target.classList.contains('folder')) {
                        this.setContent(this.content[target.getAttribute('data-ft-ide-id')]);
                        if (this.options.syntaxHighlighter.highlight === true) {
                            let ext = target.innerText.substring(target.innerText.lastIndexOf('.') + 1);
                            this.contentDiv.className = `content ${this.options.syntaxHighlighter.class} lang-${ext} language-${ext}`;
                            if (this.options.syntaxHighlighter.class.includes('prettyprint'))
                                PR.prettyPrint();
                        }
                        [...document.querySelectorAll(`#${this.ide.id} div.explorer li`)].map(m => m.classList.remove('active'));
                        target.classList.add('active');
                        this.mobileNav.classList.remove('show');
                    }
                    else {
                        target.classList.toggle('open');
                    }
                    this.updateBreadcrumbs(target);
                }
            });
        });
    }
    updateBreadcrumbs(element) {
        if (element === null)
            return;
        if (element.classList.contains('folder'))
            return;
        if (this.options.showBreadcrumbs !== 'never') {
            let lis = [];
            let node = element.parentNode;
            while (!node.classList.contains('tree')) {
                const parent = node.parentNode;
                lis.push(new ElementBuilder('li').innerText(parent.firstChild.textContent));
                node = parent.closest('ul');
            }
            if (lis.length >= this.options.maxBreadcrumbs) {
                lis = lis.slice(-Math.abs(this.options.maxBreadcrumbs));
                lis.unshift(new ElementBuilder('li').innerText('...'));
            }
            this.breadcrumbDiv.innerHTML = `<li></li>` + lis.reverse().map(m => m.build().outerHTML).join('') + `<li>${element.firstChild.textContent}</li>`;
        }
    }
    writeStylesToIDE() {
        if (this.options.ideFontFamily !== null || this.options.codeFontFamily !== null) {
            let fonts = [this.options.codeFontFamily, this.options.ideFontFamily].filter(f => f !== null);
            WebFont.load({
                google: {
                    families: fonts
                }
            });
            this.ide.style.fontFamily = this.options.ideFontFamily;
            this.contentDiv.style.fontFamily = this.options.codeFontFamily;
        }
    }
    showToastr(msg) {
        const toastr = new ElementBuilder('div').addClass('toastr').innerHTML(msg);
        this.ide.appendChild(toastr.build());
        setTimeout(() => {
            this.ide.removeChild(toastr.build());
        }, 2500);
    }
    setContent(content) {
        this.contentDiv.textContent = `${content}`;
    }
}
if (!HTMLElement.prototype.scrollTo) {
    HTMLElement.prototype.scrollTo = function (left, top) {
        this.scrollTop = top;
        this.scrollLeft = left;
    };
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        FTIDE: IDE,
        FTIDEOptions
    };
}
if (typeof window !== "undefined") {
    window.FTIDE = IDE;
    window.FTIDEOptions = FTIDEOptions;
}
(function () {
    const style = document.createElement('STYLE');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(`/*
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$    FT-IDE CREATED BY github.com/soulshined    $$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
*/:root{--bg-dark:#1e1e1e;--bg-dark-lighter:rgb(37,37,38);--bg-default:white;--bg-default-lighter:rgb(240,240,240)}.ft-ide{display:flex;position:relative;height:100%;border:1px solid #d3d3d3;flex:1;font-size:.9rem;background-color:#fff;user-select:none!important;-webkit-touch-callout:none!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe WPC","Segoe UI",HelveticaNeue-Light,Ubuntu,"Droid Sans",sans-serif;color:#616161}.ft-ide[data-ft-ide-theme=dark]{color:#ccc;border-color:#444;background-color:var(--bg-dark)}.ft-ide *{box-sizing:border-box}.ft-ide .explorer{display:flex;min-width:150px;overflow-y:auto;background-color:var(--bg-default-lighter)}.ft-ide .explorer.compact{font-size:.84em}.ft-ide[data-ft-ide-size=desktop] .explorer{max-width:250px}.ft-ide[data-ft-ide-theme=dark] .explorer,.ft-ide[data-ft-ide-theme=dark] .mobile-actions{background-color:var(--bg-dark-lighter)}.ft-ide .explorer.mobile{display:none;position:absolute;width:100%;height:100%}.ft-ide .explorer.mobile.show{display:block}.ft-ide .explorer ul{display:block;min-width:100%;padding:0;margin:0}.ft-ide .explorer ul.tree li{list-style:none;padding:2px;cursor:pointer;text-indent:8px;word-break:keep-all;white-space:nowrap}.ft-ide .explorer ul.tree li>span{pointer-events:none;vertical-align:middle}.ft-ide .explorer ul li.folder{text-indent:8px}.ft-ide .explorer.compact ul li.folder{text-indent:0}.ft-ide .explorer.compact ul li{text-indent:11px}.ft-ide .explorer li.active{background-color:#e4e6f1}.ft-ide[data-ft-ide-theme=dark] .explorer li.active{background-color:#37373d}.ft-ide .explorer li:hover{background-color:#e8e8e8}.ft-ide[data-ft-ide-theme=dark] .explorer li:hover{background-color:#2a2d2e}.ft-ide .explorer li.folder::before{padding-right:8px;content:url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="18px" height="18px" fill="%23C8C8C8"><path d="M22,6H12l-2-2H2v16h20V6z"></path></svg>')}.ft-ide .explorer li.folder.open::before{content:url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="18px" height="18px" fill="%23C8C8C8"><path d="M22,6H12l-2-2H2v16h20V6z M20,18H4V8h16V18z"></path></svg>')}.ft-ide .explorer.compact li.folder::before{padding:5px;content:url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' width='18px' height='18px'><path fill='%23C8C8C8' d='M6 4v8l4-4-4-4zm1 2.414L8.586 8 7 9.586V6.414z'/></svg>")}.ft-ide .explorer.compact li.folder.open::before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18px" height="18px"><path fill="%23C8C8C8" d="M11 10H5.344L11 4.414V10z"/></svg>')}.ft-ide .explorer li.folder:not(.open)>ul{display:none}.ft-ide .mobile-actions{display:none;width:30px;background-color:var(--bg-default-lighter);flex-flow:column nowrap;align-items:center;padding:10px 0}.ft-ide #ftide__btn-copy,.ft-ide .mobile-actions button{cursor:pointer;background-color:unset;outline:unset;border:unset;transition:all .2s ease-in-out;fill:#9c9c9c}.ft-ide .mobile-actions button{margin-bottom:5px}.ft-ide #ftide__btn-copy:active,.ft-ide .mobile-actions button:active{transform:scale(.97)}.ft-ide .content-wrapper{display:flex;flex-flow:column nowrap;flex:1;overflow:auto;color:inherit}.ft-ide .content-wrapper pre{flex:1;width:100%;margin:0;padding:20px!important;overflow:auto;color:inherit}.ft-ide .content-wrapper pre code{line-height:1.4;color:inherit}.ft-ide .content-wrapper .ft-ide-breadcrumb{display:none;list-style:none;height:1.8rem;font-size:.76em;margin:0;padding:0 0 0 10px;background-color:var(--bg-default-lighter);overflow:hidden;color:inherit}.ft-ide .content-wrapper .ft-ide-breadcrumb li{display:flex;align-items:center;word-break:keep-all;white-space:nowrap}.ft-ide .content-wrapper .ft-ide-breadcrumb li:not(:last-child):after{content:'/';padding:0 5px}.ft-ide[data-ft-ide-theme=dark] .content-wrapper .ft-ide-breadcrumb{background-color:#37373d}.ft-ide #ftide__btn-copy:active,.ft-ide #ftide__btn-copy:hover,.ft-ide .mobile-actions button:active,.ft-ide .mobile-actions button:hover{fill:#6e6e6e}.ft-ide .toastr{display:block;position:absolute;right:0;background-color:#ebebeb;border-radius:0 0 0 5px;font-size:.7rem;padding:5px 10px;box-shadow:0 1px 2px #9b9b9b}.ft-ide[data-ft-ide-theme=dark] .toastr{background-color:#37373d;box-shadow:0 1px 4px #000}.ft-ide[data-ft-ide-size=mobile] .toastr{right:unset;border-radius:unset;left:5px;top:40px}.ft-ide #ftide__btn-copy{display:block;position:absolute;right:15px;top:0}.ft-ide pre::-webkit-scrollbar{width:12px;height:12px}.ft-ide pre::-webkit-scrollbar-track{background-color:unset;border-left:1px solid rgba(169,169,169,.25);border-top:1px solid rgba(169,169,169,.25)}.ft-ide[data-ft-ide-theme=dark] pre::-webkit-scrollbar-track{border-color:#323232}.ft-ide pre::-webkit-scrollbar-thumb{background-color:rgba(169,169,169,.3)}.ft-ide pre::-webkit-scrollbar-thumb:hover{background-color:rgba(169,169,169,.6)}.ft-ide .explorer::-webkit-scrollbar{width:12px;height:12px}.ft-ide .explorer::-webkit-scrollbar-track{background-color:unset}.ft-ide .explorer::-webkit-scrollbar-thumb{background-color:rgba(169,169,169,.17)}.ft-ide .explorer::-webkit-scrollbar-thumb:hover{background-color:rgba(169,169,169,.6)}.ft-ide .explorer::-webkit-scrollbar-corner{background-color:var(--bg-default-lighter)}.ft-ide[data-ft-ide-theme=dark] .explorer::-webkit-scrollbar-corner,.ft-ide[data-ft-ide-theme=dark] pre::-webkit-scrollbar-corner{background-color:var(--bg-dark-lighter)}.ft-ide[data-ft-ide-size=desktop] .explorer.mobile.show,.ft-ide[data-ft-ide-size=mobile] .explorer{display:none}.ft-ide[data-ft-ide-size=mobile] .content-wrapper .ft-ide-breadcrumb,.ft-ide[data-ft-ide-size=mobile] .mobile-actions{display:flex}.ft-ide[data-ft-ide-size=mobile] #ftide__btn-copy{display:none}@media all and (max-width:400px){.ft-ide .explorer{display:none}.ft-ide .mobile-actions{display:flex}.ft-ide #ftide__btn-copy{display:none}.ft-ide .content-wrapper .ft-ide-breadcrumb{display:flex}}@media all and (min-width:400px){.ft-ide[data-ft-ide-size=desktop] .explorer.mobile.show{display:none}}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .str,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .str{color:#65b042}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .kwd,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .kwd{color:#e28964}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .com,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .com{color:#aeaeae;font-style:italic}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .typ,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .typ{color:#89bdff}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .lit,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .lit{color:#3387cc}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .pun,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .pun{color:#fff}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .pln,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .pln{color:#fff}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .tag,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .tag{color:#89bdff}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .atn,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .atn{color:#bdb76b}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .atv,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .atv{color:#65b042}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .dec,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .dec{color:#3387cc}.ft-ide .content-wrapper code ol.linenums{margin-top:0;margin-bottom:0;color:#aeaeae}.ft-ide .content-wrapper code li.L0,.ft-ide .content-wrapper code li.L1,.ft-ide .content-wrapper code li.L2,.ft-ide .content-wrapper code li.L3,.ft-ide .content-wrapper code li.L5,.ft-ide .content-wrapper code li.L6,.ft-ide .content-wrapper code li.L7,.ft-ide .content-wrapper code li.L8{list-style-type:none}.ft-ide .content-wrapper code li.L1,.ft-ide .content-wrapper code li.L3,.ft-ide .content-wrapper code li.L5,.ft-ide .content-wrapper code li.L7,.ft-ide .content-wrapper code li.L9{background:var(--bg-default)!important}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code li.L1,.ft-ide[data-ft-ide-theme=dark] .content-wrapper code li.L3,.ft-ide[data-ft-ide-theme=dark] .content-wrapper code li.L5,.ft-ide[data-ft-ide-theme=dark] .content-wrapper code li.L7,.ft-ide[data-ft-ide-theme=dark] .content-wrapper code li.L9{background:var(--bg-dark)!important}@media print{.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .str,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .str{color:#060}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .kwd,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .kwd{color:#006;font-weight:700}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .com,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .com{color:#600;font-style:italic}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .typ,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .typ{color:#404;font-weight:700}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .lit,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .lit{color:#044}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .pun,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .pun{color:#440}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .pln,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .pln{color:#000}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .tag,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .tag{color:#006;font-weight:700}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .atn,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .atn{color:#404}.ft-ide[data-ft-ide-theme=dark] .content-wrapper code .atv,.ft-ide[data-ft-ide-theme=dark] .content-wrapper pre .atv{color:#060}}
    `));
    document.head.appendChild(style);
    window.onresize = function () {
        [...document.querySelectorAll(`.ft-ide`)].forEach(element => {
            if (element.clientWidth < 400) {
                element.setAttribute('data-ft-ide-size', 'mobile');
            }
            else {
                element.setAttribute('data-ft-ide-size', 'desktop');
                document.querySelector(`#${element.id} .explorer.mobile`).classList.remove('show');
            }
        });
    };
})();