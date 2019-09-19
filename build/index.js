module.exports = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 3))
  );
})([
  function(e, t) {
    e.exports = require("react");
  },
  function(e, t) {
    e.exports = require("styled-components");
  },
  function(e, t) {
    e.exports = require("react-dom");
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(1),
      o = n.n(r),
      u = o.a.div.withConfig({
        displayName: "baseStyles__BaseModalBackground",
        componentId: "sc-12bzkqq-0"
      })([
        "display:flex;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:30;background-color:rgba(0,0,0,0.5);align-items:center;justify-content:center;"
      ]),
      c = n(0),
      i = n.n(c),
      f = i.a.createContext({}),
      a = f.Provider,
      l = f.Consumer;
    function d(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            o = !1,
            u = void 0;
          try {
            for (
              var c, i = e[Symbol.iterator]();
              !(r = (c = i.next()).done) &&
              (n.push(c.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (u = e);
          } finally {
            try {
              r || null == i.return || i.return();
            } finally {
              if (o) throw u;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    function y(e) {
      var t = e.backgroundComponent,
        n = e.children,
        r = Object(c.useRef)(null),
        o = d(Object(c.useState)(null), 2),
        f = o[0],
        l = o[1],
        y = d(Object(c.useState)(u), 2),
        s = y[0],
        p = y[1];
      return (
        Object(c.useEffect)(
          function() {
            t && p(t);
          },
          [p, t]
        ),
        Object(c.useEffect)(
          function() {
            l(r.current);
          },
          [l, r]
        ),
        i.a.createElement(
          a,
          { value: { modalNode: f, BackgroundComponent: s } },
          n,
          i.a.createElement("div", { ref: r })
        )
      );
    }
    var s = n(2),
      p = n.n(s),
      v = function(e, t, n) {
        9 === e.keyCode &&
          (e.shiftKey
            ? document.activeElement === t &&
              (e.preventDefault(), n && n.focus())
            : document.activeElement === n &&
              (e.preventDefault(), t && t.focus()));
      },
      g = function(e) {
        return Array.from(e.querySelectorAll("*"))
          .filter(function(e) {
            return e.tabIndex >= 0;
          })
          .sort(function(e, t) {
            return e.tabIndex - t.tabIndex;
          });
      },
      m = function(e) {
        var t = e.getBoundingClientRect(),
          n = window.innerHeight || document.documentElement.clientHeight,
          r = window.innerWidth || document.documentElement.clientWidth;
        return t.top >= 0 && t.left >= 0 && t.bottom <= n && t.right <= r;
      },
      w = function(e) {
        return e.querySelector("[tabindex]");
      },
      h = function(e) {
        var t = Array.from(
          document.querySelectorAll("[role=dialog][aria-modal=true]")
        );
        return t[t.length - 1] === e;
      };
    function j() {
      return (j =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function O(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            o = !1,
            u = void 0;
          try {
            for (
              var c, i = e[Symbol.iterator]();
              !(r = (c = i.next()).done) &&
              (n.push(c.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (u = e);
          } finally {
            try {
              r || null == i.return || i.return();
            } finally {
              if (o) throw u;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    function x(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            u = Object.keys(e);
          for (r = 0; r < u.length; r++)
            (n = u[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        for (r = 0; r < u.length; r++)
          (n = u[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    function k(e) {
      var t,
        n = e.WrapperComponent,
        r = e.children,
        o = e.closeModal,
        u = e.closeOnBackgroundClick,
        f = void 0 !== u && u,
        a = e.onBackgroundClick,
        d = e.closeOnEscapeKeydown,
        y = void 0 === d || d,
        s = e.onEscapeKeydown,
        k = e.allowScroll,
        S = e.beforeOpen,
        M = e.afterOpen,
        q = e.beforeClose,
        _ = e.afterClose,
        B = e.backgroundProps,
        C = e.isOpen,
        P = e.elToFocusAfterOpenId,
        R = e.elToFocusAfterCloseId,
        K = x(e, [
          "WrapperComponent",
          "children",
          "closeModal",
          "closeOnBackgroundClick",
          "onBackgroundClick",
          "closeOnEscapeKeydown",
          "onEscapeKeydown",
          "allowScroll",
          "beforeOpen",
          "afterOpen",
          "beforeClose",
          "afterClose",
          "backgroundProps",
          "isOpen",
          "elToFocusAfterOpenId",
          "elToFocusAfterCloseId"
        ]),
        N = Object(c.useRef)(null),
        W = Object(c.useRef)(null),
        z = Object(c.useRef)(null),
        A = Object(c.useRef)(null),
        D = Object(c.useRef)(null),
        H = Object(c.useRef)(null),
        L = Object(c.useRef)(null),
        I = Object(c.useRef)(null),
        Y = O(Object(c.useState)(!1), 2),
        G = Y[0],
        J = Y[1],
        Q = O(Object(c.useState)(!1), 2),
        U = Q[0],
        X = Q[1];
      function Z(e) {
        N.current === e.target && (f && o(), a && a(e));
      }
      return (
        Object(c.useEffect)(
          function() {
            function e(e, t) {
              if (e)
                try {
                  e().then(function() {
                    return t(C);
                  });
                } catch (e) {
                  t(C);
                }
              else t(C);
            }
            G !== C &&
              (C ? ((A.current = document.activeElement), e(S, J)) : e(q, J));
          },
          [G, J, C, S, q]
        ),
        Object(c.useEffect)(
          function() {
            if (G) {
              if (W.current) {
                if (((D.current = g(W.current)), 0 === D.current.length))
                  throw new Error(
                    "Modal should always have at least one tabbable element. Maybe a button like Close, OK or Cancel."
                  );
                if (
                  ((H.current = D.current[0]),
                  (L.current = D.current[D.current.length - 1]),
                  !D.current.includes(document.activeElement))
                )
                  if (P) W.current.querySelector("#".concat(P)).focus();
                  else if (m(H.current)) H.current.focus();
                  else {
                    if (((I.current = w(W.current)), !I.current))
                      throw new Error(
                        "The first tabbable element isn't in viewport. You can fix this by putting it in the top of the modal or give tabindex=-1 to the first paragraph in modal which will be automatically focused."
                      );
                    I.current.focus();
                  }
              }
              U || (M && M(), X(!0));
            } else
              U &&
                (R
                  ? document.querySelector("#".concat(R)).focus()
                  : A.current && A.current.focus(),
                X(!1),
                _ && _());
          },
          [G, M, U, _, P, R]
        ),
        Object(c.useEffect)(
          function() {
            function e(e) {
              v(e, H.current, L.current),
                "Escape" === e.key && h(W.current) && (y && o(), s && s(e));
            }
            return (
              G && document.addEventListener("keydown", e),
              function() {
                document.removeEventListener("keydown", e);
              }
            );
          },
          [G, o, y, s, M]
        ),
        Object(c.useEffect)(
          function() {
            return (
              G &&
                !k &&
                ((z.current = document.body.style.overflow),
                (document.body.style.overflow = "hidden")),
              function() {
                k || (document.body.style.overflow = z.current || "");
              }
            );
          },
          [G, k]
        ),
        n
          ? (t = i.a.createElement(n, j({}, K, { ref: W }), r))
          : (i.a.Children.only(r),
            (t = Object(c.cloneElement)(r, {
              ref: W,
              role: "dialog",
              "aria-modal": !0
            }))),
        i.a.createElement(l, null, function(e) {
          var n = e.modalNode,
            r = e.BackgroundComponent;
          return n && r && G
            ? p.a.createPortal(
                i.a.createElement(r, j({}, B, { onClick: Z, ref: N }), t),
                n
              )
            : null;
        })
      );
    }
    (k.styled = function() {
      var e =
        o.a.div
          .attrs({ role: "dialog", "aria-modal": !0 })
          .withConfig({
            displayName: "Modal__styles",
            componentId: "sc-1q9xwty-0"
          })(["", ""], r.css.apply(void 0, arguments)) ||
        o.a.div
          .attrs({ role: "dialog", "aria-modal": !0 })
          .withConfig({
            displayName: "Modal__styles",
            componentId: "sc-1q9xwty-1"
          })([""]);
      return function(t) {
        return i.a.createElement(k, j({ WrapperComponent: e }, t));
      };
    }),
      (k.defaultProps = { backgroundProps: {} });
    var S = k;
    n.d(t, "ModalProvider", function() {
      return y;
    }),
      n.d(t, "BaseModalBackground", function() {
        return u;
      });
    t.default = S;
  }
]);
