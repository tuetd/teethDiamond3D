(function (React, ReactDOM$1, ReactDOM, button, THREE$1, fiber, drei, threeStdlib, toast$1, confirmdialog, postprocessing, ImageResizer$1, FileSaver) {
  'use strict';

  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
  var THREE__namespace = /*#__PURE__*/_interopNamespaceDefault(THREE$1);

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _extends$1() {
    return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends$1.apply(null, arguments);
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = true,
        o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = true, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = false,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = true, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), true), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      if (r) i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n;else {
        function o(r, n) {
          _regeneratorDefine(e, r, function (e) {
            return this._invoke(r, n, e);
          });
        }
        o("next", 0), o("throw", 1), o("return", 2);
      }
    }, _regeneratorDefine(e, r, n, t);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') {
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$4 = ".popup-content {\r\n    margin: auto;\r\n    background: #fff;\r\n    padding: 5px;\r\n    border: 1px solid #d7d7d7;\r\n    top: 0px !important;\r\n    left: 0px !important;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  [role=\"tooltip\"].popup-content {\r\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);\r\n    border-radius: 5px;\r\n  }\r\n  .popup-overlay {\r\n    background: rgba(0, 0, 0, 0.5);\r\n  }\r\n  [data-popup=\"tooltip\"].popup-overlay {\r\n    background: transparent;\r\n  }\r\n  .popup-arrow {\r\n    -webkit-filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.16));\r\n    filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.16));\r\n    color: #fff;\r\n    stroke-width: 2px;\r\n    stroke: #d7d7d7;\r\n    stroke-dasharray: 30px;\r\n    stroke-dashoffset: -54px;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n  }\r\n  ";
  styleInject(css_248z$4);

  var css_248z$3 = ":root {\n  font-family: \"Inter var\", sans-serif;\n  font-feature-settings: \"cv02\", \"cv03\", \"cv04\", \"cv11\";\n  font-variation-settings: normal;\n  --font-family:\"Inter var\", sans-serif;\n  --surface-a:#ffffff;\n  --surface-b:#f8f9fa;\n  --surface-c:#e9ecef;\n  --surface-d:#dee2e6;\n  --surface-e:#ffffff;\n  --surface-f:#ffffff;\n  --text-color:#495057;\n  --text-color-secondary:#6c757d;\n  --primary-color:#6366F1;\n  --primary-color-text:#ffffff;\n  --surface-0: #ffffff;\n  --surface-50: #FAFAFA;\n  --surface-100: #F5F5F5;\n  --surface-200: #EEEEEE;\n  --surface-300: #E0E0E0;\n  --surface-400: #BDBDBD;\n  --surface-500: #9E9E9E;\n  --surface-600: #757575;\n  --surface-700: #616161;\n  --surface-800: #424242;\n  --surface-900: #212121;\n  --gray-50: #FAFAFA;\n  --gray-100: #F5F5F5;\n  --gray-200: #EEEEEE;\n  --gray-300: #E0E0E0;\n  --gray-400: #BDBDBD;\n  --gray-500: #9E9E9E;\n  --gray-600: #757575;\n  --gray-700: #616161;\n  --gray-800: #424242;\n  --gray-900: #212121;\n  --content-padding:1.25rem;\n  --inline-spacing:0.5rem;\n  --border-radius:6px;\n  --surface-ground:#eff3f8;\n  --surface-section:#ffffff;\n  --surface-card:#ffffff;\n  --surface-overlay:#ffffff;\n  --surface-border:#dfe7ef;\n  --surface-hover:#f6f9fc;\n  --focus-ring: 0 0 0 0.2rem #C7D2FE;\n  --maskbg: rgba(0, 0, 0, 0.4);\n  --highlight-bg: #EEF2FF;\n  --highlight-text-color: #4338CA;\n  color-scheme: light;\n}\n\n@font-face {\n  font-family: \"Inter var\";\n  font-weight: 100 900;\n  font-display: swap;\n  font-style: normal;\n  font-named-instance: \"Regular\";\n  src: url(\"./fonts/Inter-roman.var.woff2?v=3.19\") format(\"woff2\");\n}\n@font-face {\n  font-family: \"Inter var\";\n  font-weight: 100 900;\n  font-display: swap;\n  font-style: italic;\n  font-named-instance: \"Italic\";\n  src: url(\"./fonts/Inter-italic.var.woff2?v=3.19\") format(\"woff2\");\n}\n:root {\n  --blue-50:#f5f9ff;\n  --blue-100:#d0e1fd;\n  --blue-200:#abc9fb;\n  --blue-300:#85b2f9;\n  --blue-400:#609af8;\n  --blue-500:#3b82f6;\n  --blue-600:#326fd1;\n  --blue-700:#295bac;\n  --blue-800:#204887;\n  --blue-900:#183462;\n  --green-50:#f4fcf7;\n  --green-100:#caf1d8;\n  --green-200:#a0e6ba;\n  --green-300:#76db9b;\n  --green-400:#4cd07d;\n  --green-500:#22c55e;\n  --green-600:#1da750;\n  --green-700:#188a42;\n  --green-800:#136c34;\n  --green-900:#0e4f26;\n  --yellow-50:#fefbf3;\n  --yellow-100:#faedc4;\n  --yellow-200:#f6de95;\n  --yellow-300:#f2d066;\n  --yellow-400:#eec137;\n  --yellow-500:#eab308;\n  --yellow-600:#c79807;\n  --yellow-700:#a47d06;\n  --yellow-800:#816204;\n  --yellow-900:#5e4803;\n  --cyan-50:#f3fbfd;\n  --cyan-100:#c3edf5;\n  --cyan-200:#94e0ed;\n  --cyan-300:#65d2e4;\n  --cyan-400:#35c4dc;\n  --cyan-500:#06b6d4;\n  --cyan-600:#059bb4;\n  --cyan-700:#047f94;\n  --cyan-800:#036475;\n  --cyan-900:#024955;\n  --pink-50:#fef6fa;\n  --pink-100:#fad3e7;\n  --pink-200:#f7b0d3;\n  --pink-300:#f38ec0;\n  --pink-400:#f06bac;\n  --pink-500:#ec4899;\n  --pink-600:#c93d82;\n  --pink-700:#a5326b;\n  --pink-800:#822854;\n  --pink-900:#5e1d3d;\n  --indigo-50:#f7f7fe;\n  --indigo-100:#dadafc;\n  --indigo-200:#bcbdf9;\n  --indigo-300:#9ea0f6;\n  --indigo-400:#8183f4;\n  --indigo-500:#6366f1;\n  --indigo-600:#5457cd;\n  --indigo-700:#4547a9;\n  --indigo-800:#363885;\n  --indigo-900:#282960;\n  --teal-50:#f3fbfb;\n  --teal-100:#c7eeea;\n  --teal-200:#9ae0d9;\n  --teal-300:#6dd3c8;\n  --teal-400:#41c5b7;\n  --teal-500:#14b8a6;\n  --teal-600:#119c8d;\n  --teal-700:#0e8174;\n  --teal-800:#0b655b;\n  --teal-900:#084a42;\n  --orange-50:#fff8f3;\n  --orange-100:#feddc7;\n  --orange-200:#fcc39b;\n  --orange-300:#fba86f;\n  --orange-400:#fa8e42;\n  --orange-500:#f97316;\n  --orange-600:#d46213;\n  --orange-700:#ae510f;\n  --orange-800:#893f0c;\n  --orange-900:#642e09;\n  --bluegray-50:#f7f8f9;\n  --bluegray-100:#dadee3;\n  --bluegray-200:#bcc3cd;\n  --bluegray-300:#9fa9b7;\n  --bluegray-400:#818ea1;\n  --bluegray-500:#64748b;\n  --bluegray-600:#556376;\n  --bluegray-700:#465161;\n  --bluegray-800:#37404c;\n  --bluegray-900:#282e38;\n  --purple-50:#fbf7ff;\n  --purple-100:#ead6fd;\n  --purple-200:#dab6fc;\n  --purple-300:#c996fa;\n  --purple-400:#b975f9;\n  --purple-500:#a855f7;\n  --purple-600:#8f48d2;\n  --purple-700:#763cad;\n  --purple-800:#5c2f88;\n  --purple-900:#432263;\n  --red-50:#fff5f5;\n  --red-100:#ffd0ce;\n  --red-200:#ffaca7;\n  --red-300:#ff8780;\n  --red-400:#ff6259;\n  --red-500:#ff3d32;\n  --red-600:#d9342b;\n  --red-700:#b32b23;\n  --red-800:#8c221c;\n  --red-900:#661814;\n  --primary-50:#f7f7fe;\n  --primary-100:#dadafc;\n  --primary-200:#bcbdf9;\n  --primary-300:#9ea0f6;\n  --primary-400:#8183f4;\n  --primary-500:#6366f1;\n  --primary-600:#5457cd;\n  --primary-700:#4547a9;\n  --primary-800:#363885;\n  --primary-900:#282960;\n}\n\n@layer primereact {\n  * {\n    box-sizing: border-box;\n  }\n  .p-component {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    font-weight: normal;\n  }\n  .p-component-overlay {\n    background-color: rgba(0, 0, 0, 0.4);\n    transition-duration: 0.2s;\n  }\n  .p-disabled, .p-component:disabled {\n    opacity: 0.6;\n  }\n  .p-error {\n    color: #e24c4c;\n  }\n  .p-text-secondary {\n    color: #6c757d;\n  }\n  .pi {\n    font-size: 1rem;\n  }\n  .p-icon {\n    width: 1rem;\n    height: 1rem;\n  }\n  .p-link {\n    font-size: 1rem;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    border-radius: 6px;\n  }\n  .p-link:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-component-overlay-enter {\n    animation: p-component-overlay-enter-animation 150ms forwards;\n  }\n  .p-component-overlay-leave {\n    animation: p-component-overlay-leave-animation 150ms forwards;\n  }\n  @keyframes p-component-overlay-enter-animation {\n    from {\n      background-color: transparent;\n    }\n    to {\n      background-color: var(--maskbg);\n    }\n  }\n  @keyframes p-component-overlay-leave-animation {\n    from {\n      background-color: var(--maskbg);\n    }\n    to {\n      background-color: transparent;\n    }\n  }\n  .p-autocomplete .p-autocomplete-loader {\n    right: 0.75rem;\n  }\n  .p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {\n    right: 3.75rem;\n  }\n  .p-autocomplete .p-autocomplete-multiple-container {\n    padding: 0.375rem 0.75rem;\n    gap: 0.5rem;\n  }\n  .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled):hover {\n    border-color: #6366F1;\n  }\n  .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled).p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    border-color: #6366F1;\n  }\n  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token {\n    padding: 0.375rem 0;\n  }\n  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token input {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: inherit;\n    color: #495057;\n    padding: 0;\n    margin: 0;\n  }\n  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {\n    padding: 0.375rem 0.75rem;\n    margin-right: 0.5rem;\n    background: #EEF2FF;\n    color: #4338CA;\n    border-radius: 6px;\n  }\n  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token .p-autocomplete-token-icon {\n    margin-left: 0.5rem;\n  }\n  .p-autocomplete.p-invalid.p-component > .p-inputtext {\n    border-color: #e24c4c;\n  }\n  .p-autocomplete-panel {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    border-radius: 6px;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-autocomplete-panel .p-autocomplete-items {\n    padding: 0.75rem 0;\n  }\n  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    border: 0 none;\n    color: #495057;\n    background: transparent;\n    transition: box-shadow 0.2s;\n    border-radius: 0;\n  }\n  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover {\n    color: #495057;\n    background: #e9ecef;\n  }\n  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item-group {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    color: #343a40;\n    background: #ffffff;\n    font-weight: 700;\n  }\n  .p-calendar.p-invalid.p-component > .p-inputtext {\n    border-color: #e24c4c;\n  }\n  .p-datepicker {\n    padding: 0.5rem;\n    background: #ffffff;\n    color: #495057;\n    border: 1px solid #ced4da;\n    border-radius: 6px;\n  }\n  .p-datepicker:not(.p-datepicker-inline) {\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {\n    background: #ffffff;\n  }\n  .p-datepicker .p-datepicker-header {\n    padding: 0.5rem;\n    color: #495057;\n    background: #ffffff;\n    font-weight: 600;\n    margin: 0;\n    border-bottom: 1px solid #dee2e6;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-datepicker .p-datepicker-header .p-datepicker-prev,\n  .p-datepicker .p-datepicker-header .p-datepicker-next {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,\n  .p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-datepicker .p-datepicker-header .p-datepicker-prev:focus-visible,\n  .p-datepicker .p-datepicker-header .p-datepicker-next:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-datepicker .p-datepicker-header .p-datepicker-title {\n    line-height: 2rem;\n  }\n  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,\n  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {\n    color: #495057;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    font-weight: 600;\n    padding: 0.5rem;\n  }\n  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year:enabled:hover,\n  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month:enabled:hover {\n    color: #6366F1;\n  }\n  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {\n    margin-right: 0.5rem;\n  }\n  .p-datepicker table {\n    font-size: 1rem;\n    margin: 0.5rem 0;\n  }\n  .p-datepicker table th {\n    padding: 0.5rem;\n  }\n  .p-datepicker table th > span {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .p-datepicker table td {\n    padding: 0.5rem;\n  }\n  .p-datepicker table td > span {\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 50%;\n    transition: box-shadow 0.2s;\n    border: 1px solid transparent;\n  }\n  .p-datepicker table td > span.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-datepicker table td > span:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-datepicker table td.p-datepicker-today > span {\n    background: #ced4da;\n    color: #495057;\n    border-color: transparent;\n  }\n  .p-datepicker table td.p-datepicker-today > span.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-datepicker .p-datepicker-buttonbar {\n    padding: 1rem 0;\n    border-top: 1px solid #dee2e6;\n  }\n  .p-datepicker .p-datepicker-buttonbar .p-button {\n    width: auto;\n  }\n  .p-datepicker .p-timepicker {\n    border-top: 1px solid #dee2e6;\n    padding: 0.5rem;\n  }\n  .p-datepicker .p-timepicker button {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-datepicker .p-timepicker button:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-datepicker .p-timepicker button:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-datepicker .p-timepicker button:last-child {\n    margin-top: 0.2em;\n  }\n  .p-datepicker .p-timepicker span {\n    font-size: 1.25rem;\n  }\n  .p-datepicker .p-timepicker > div {\n    padding: 0 0.5rem;\n  }\n  .p-datepicker.p-datepicker-timeonly .p-timepicker {\n    border-top: 0 none;\n  }\n  .p-datepicker .p-monthpicker {\n    margin: 0.5rem 0;\n  }\n  .p-datepicker .p-monthpicker .p-monthpicker-month {\n    padding: 0.5rem;\n    transition: box-shadow 0.2s;\n    border-radius: 6px;\n  }\n  .p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-datepicker .p-yearpicker {\n    margin: 0.5rem 0;\n  }\n  .p-datepicker .p-yearpicker .p-yearpicker-year {\n    padding: 0.5rem;\n    transition: box-shadow 0.2s;\n    border-radius: 6px;\n  }\n  .p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {\n    border-left: 1px solid #dee2e6;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {\n    padding-left: 0;\n  }\n  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {\n    padding-right: 0;\n    border-left: 0 none;\n  }\n  .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {\n    background: #e9ecef;\n  }\n  .p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {\n    background: #e9ecef;\n  }\n  .p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  @media screen and (max-width: 769px) {\n    .p-datepicker table th, .p-datepicker table td {\n      padding: 0;\n    }\n  }\n  .p-cascadeselect {\n    background: #ffffff;\n    border: 1px solid #ced4da;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n    border-radius: 6px;\n  }\n  .p-cascadeselect:not(.p-disabled):hover {\n    border-color: #6366F1;\n  }\n  .p-cascadeselect:not(.p-disabled).p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    border-color: #6366F1;\n  }\n  .p-cascadeselect .p-cascadeselect-label {\n    background: transparent;\n    border: 0 none;\n    padding: 0.75rem 0.75rem;\n  }\n  .p-cascadeselect .p-cascadeselect-label.p-placeholder {\n    color: #6c757d;\n  }\n  .p-cascadeselect .p-cascadeselect-label:enabled:focus {\n    outline: 0 none;\n    box-shadow: none;\n  }\n  .p-cascadeselect .p-cascadeselect-trigger {\n    background: transparent;\n    color: #6c757d;\n    width: 3rem;\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n  .p-cascadeselect.p-invalid.p-component {\n    border-color: #e24c4c;\n  }\n  .p-cascadeselect-panel {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    border-radius: 6px;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-cascadeselect-panel .p-cascadeselect-items {\n    padding: 0.75rem 0;\n  }\n  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item {\n    margin: 0;\n    border: 0 none;\n    color: #495057;\n    background: transparent;\n    transition: box-shadow 0.2s;\n    border-radius: 0;\n  }\n  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content {\n    padding: 0.75rem 1.25rem;\n  }\n  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled):hover {\n    color: #495057;\n    background: #e9ecef;\n  }\n  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon {\n    font-size: 0.875rem;\n  }\n  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon.p-icon {\n    width: 0.875rem;\n    height: 0.875rem;\n  }\n  .p-input-filled .p-cascadeselect {\n    background: #e9ecef;\n  }\n  .p-input-filled .p-cascadeselect:not(.p-disabled):hover {\n    background-color: #e9ecef;\n  }\n  .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {\n    background-color: #ffffff;\n  }\n  .p-checkbox {\n    width: 22px;\n    height: 22px;\n  }\n  .p-checkbox .p-checkbox-box {\n    border: 2px solid #ced4da;\n    background: #ffffff;\n    width: 22px;\n    height: 22px;\n    color: #495057;\n    border-radius: 6px;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .p-checkbox .p-checkbox-box .p-checkbox-icon {\n    transition-duration: 0.2s;\n    color: #ffffff;\n    font-size: 14px;\n  }\n  .p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {\n    width: 14px;\n    height: 14px;\n  }\n  .p-checkbox .p-checkbox-box.p-highlight {\n    border-color: #6366F1;\n    background: #6366F1;\n  }\n  .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {\n    border-color: #4338CA;\n    background: #4338CA;\n    color: #ffffff;\n  }\n  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {\n    border-color: #6366F1;\n  }\n  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    border-color: #6366F1;\n  }\n  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {\n    border-color: #4338CA;\n    background: #4338CA;\n    color: #ffffff;\n  }\n  .p-checkbox.p-invalid > .p-checkbox-box {\n    border-color: #e24c4c;\n  }\n  .p-input-filled .p-checkbox .p-checkbox-box {\n    background-color: #e9ecef;\n  }\n  .p-input-filled .p-checkbox .p-checkbox-box.p-highlight {\n    background: #6366F1;\n  }\n  .p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {\n    background-color: #e9ecef;\n  }\n  .p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {\n    background: #4338CA;\n  }\n  .p-chips .p-chips-multiple-container {\n    padding: 0.375rem 0.75rem;\n    gap: 0.5rem;\n  }\n  .p-chips .p-chips-multiple-container:not(.p-disabled):hover {\n    border-color: #6366F1;\n  }\n  .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    border-color: #6366F1;\n  }\n  .p-chips .p-chips-multiple-container .p-chips-token {\n    padding: 0.375rem 0.75rem;\n    margin-right: 0.5rem;\n    background: #EEF2FF;\n    color: #495057;\n    border-radius: 16px;\n  }\n  .p-chips .p-chips-multiple-container .p-chips-token .p-chips-token-icon {\n    margin-left: 0.5rem;\n  }\n  .p-chips .p-chips-multiple-container .p-chips-input-token {\n    padding: 0.375rem 0;\n  }\n  .p-chips .p-chips-multiple-container .p-chips-input-token input {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: inherit;\n    color: #495057;\n    padding: 0;\n    margin: 0;\n  }\n  .p-chips.p-invalid.p-component > .p-inputtext {\n    border-color: #e24c4c;\n  }\n  .p-colorpicker-preview {\n    width: 2rem;\n    height: 2rem;\n  }\n  .p-colorpicker-panel {\n    background: #323232;\n    border: 1px solid #191919;\n  }\n  .p-colorpicker-panel .p-colorpicker-color-handle,\n  .p-colorpicker-panel .p-colorpicker-hue-handle {\n    border-color: #ffffff;\n  }\n  .p-colorpicker-overlay-panel {\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-dropdown {\n    background: #ffffff;\n    border: 1px solid #ced4da;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n    border-radius: 6px;\n  }\n  .p-dropdown:not(.p-disabled):hover {\n    border-color: #6366F1;\n  }\n  .p-dropdown:not(.p-disabled).p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    border-color: #6366F1;\n  }\n  .p-dropdown.p-dropdown-clearable .p-dropdown-label {\n    padding-right: 1.75rem;\n  }\n  .p-dropdown .p-dropdown-label {\n    background: transparent;\n    border: 0 none;\n  }\n  .p-dropdown .p-dropdown-label.p-placeholder {\n    color: #6c757d;\n  }\n  .p-dropdown .p-dropdown-label:enabled:focus {\n    outline: 0 none;\n    box-shadow: none;\n  }\n  .p-dropdown .p-dropdown-trigger {\n    background: transparent;\n    color: #6c757d;\n    width: 3rem;\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n  .p-dropdown .p-dropdown-clear-icon {\n    color: #6c757d;\n    right: 3rem;\n  }\n  .p-dropdown.p-invalid.p-component {\n    border-color: #e24c4c;\n  }\n  .p-dropdown-panel {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    border-radius: 6px;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-dropdown-panel .p-dropdown-header {\n    padding: 0.75rem 1.25rem;\n    border-bottom: 1px solid #dee2e6;\n    color: #343a40;\n    background: #f8f9fa;\n    margin: 0;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {\n    padding-right: 1.75rem;\n    margin-right: -1.75rem;\n  }\n  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {\n    right: 0.75rem;\n    color: #6c757d;\n  }\n  .p-dropdown-panel .p-dropdown-header .p-dropdown-clearable-filter .p-dropdown-filter {\n    padding-right: 3.5rem;\n    margin-right: -3.5rem;\n  }\n  .p-dropdown-panel .p-dropdown-header .p-dropdown-clearable-filter .p-dropdown-filter-clear-icon {\n    right: 2.5rem;\n  }\n  .p-dropdown-panel .p-dropdown-items {\n    padding: 0.75rem 0;\n  }\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    border: 0 none;\n    color: #495057;\n    background: transparent;\n    transition: box-shadow 0.2s;\n    border-radius: 0;\n  }\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {\n    color: #495057;\n    background: #e9ecef;\n  }\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    color: #343a40;\n    background: #ffffff;\n    font-weight: 700;\n  }\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    background: transparent;\n  }\n  .p-input-filled .p-dropdown {\n    background: #e9ecef;\n  }\n  .p-input-filled .p-dropdown:not(.p-disabled):hover {\n    background-color: #e9ecef;\n  }\n  .p-input-filled .p-dropdown:not(.p-disabled).p-focus {\n    background-color: #ffffff;\n  }\n  .p-input-filled .p-dropdown:not(.p-disabled).p-focus .p-inputtext {\n    background-color: transparent;\n  }\n  .p-editor-container .p-editor-toolbar {\n    background: #f8f9fa;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow {\n    border: 1px solid #dee2e6;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {\n    stroke: #6c757d;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-fill {\n    fill: #6c757d;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {\n    border: 0 none;\n    color: #6c757d;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {\n    color: #495057;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {\n    stroke: #495057;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {\n    fill: #495057;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n    color: #495057;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n    stroke: #495057;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n    fill: #495057;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 6px;\n    padding: 0.75rem 0;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {\n    color: #495057;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {\n    color: #495057;\n    background: #e9ecef;\n  }\n  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {\n    padding: 0.75rem 1.25rem;\n  }\n  .p-editor-container .p-editor-content {\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-editor-container .p-editor-content.ql-snow {\n    border: 1px solid #dee2e6;\n  }\n  .p-editor-container .p-editor-content .ql-editor {\n    background: #ffffff;\n    color: #495057;\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-editor-container .ql-snow.ql-toolbar button:hover,\n  .p-editor-container .ql-snow.ql-toolbar button:focus {\n    color: #495057;\n  }\n  .p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,\n  .p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {\n    stroke: #495057;\n  }\n  .p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,\n  .p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {\n    fill: #495057;\n  }\n  .p-editor-container .ql-snow.ql-toolbar button.ql-active,\n  .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,\n  .p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {\n    color: #6366F1;\n  }\n  .p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,\n  .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n  .p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {\n    stroke: #6366F1;\n  }\n  .p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,\n  .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n  .p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {\n    fill: #6366F1;\n  }\n  .p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,\n  .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,\n  .p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {\n    color: #6366F1;\n  }\n  .p-inputgroup-addon {\n    background: #e9ecef;\n    color: #6c757d;\n    border-top: 1px solid #ced4da;\n    border-left: 1px solid #ced4da;\n    border-bottom: 1px solid #ced4da;\n    padding: 0.75rem 0.75rem;\n    min-width: 3rem;\n  }\n  .p-inputgroup-addon:last-child {\n    border-right: 1px solid #ced4da;\n  }\n  .p-inputgroup > .p-component,\n  .p-inputgroup > .p-inputwrapper > .p-inputtext,\n  .p-inputgroup > .p-float-label > .p-component {\n    border-radius: 0;\n    margin: 0;\n  }\n  .p-inputgroup > .p-component + .p-inputgroup-addon,\n  .p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,\n  .p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {\n    border-left: 0 none;\n  }\n  .p-inputgroup > .p-component:focus,\n  .p-inputgroup > .p-inputwrapper > .p-inputtext:focus,\n  .p-inputgroup > .p-float-label > .p-component:focus {\n    z-index: 1;\n  }\n  .p-inputgroup > .p-component:focus ~ label,\n  .p-inputgroup > .p-inputwrapper > .p-inputtext:focus ~ label,\n  .p-inputgroup > .p-float-label > .p-component:focus ~ label {\n    z-index: 1;\n  }\n  .p-inputgroup-addon:first-child,\n  .p-inputgroup button:first-child,\n  .p-inputgroup input:first-child,\n  .p-inputgroup > .p-inputwrapper:first-child,\n  .p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-inputgroup .p-float-label:first-child input {\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-inputgroup-addon:last-child,\n  .p-inputgroup button:last-child,\n  .p-inputgroup input:last-child,\n  .p-inputgroup > .p-inputwrapper:last-child,\n  .p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n  .p-inputgroup .p-float-label:last-child input {\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n  .p-fluid .p-inputgroup .p-button {\n    width: auto;\n  }\n  .p-fluid .p-inputgroup .p-button.p-button-icon-only {\n    width: 3rem;\n  }\n  .p-inputnumber.p-invalid.p-component > .p-inputtext {\n    border-color: #e24c4c;\n  }\n  .p-inputswitch {\n    width: 3rem;\n    height: 1.75rem;\n  }\n  .p-inputswitch .p-inputswitch-slider {\n    background: #ced4da;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n    border-radius: 30px;\n  }\n  .p-inputswitch .p-inputswitch-slider:before {\n    background: #ffffff;\n    width: 1.25rem;\n    height: 1.25rem;\n    left: 0.25rem;\n    margin-top: -0.625rem;\n    border-radius: 50%;\n    transition-duration: 0.2s;\n  }\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\n    transform: translateX(1.25rem);\n  }\n  .p-inputswitch.p-focus .p-inputswitch-slider {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {\n    background: #b6bfc8;\n  }\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\n    background: #6366F1;\n  }\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\n    background: #ffffff;\n  }\n  .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {\n    background: #4F46E5;\n  }\n  .p-inputswitch.p-invalid .p-inputswitch-slider {\n    border-color: #e24c4c;\n  }\n  .p-inputtext {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: #495057;\n    background: #ffffff;\n    padding: 0.75rem 0.75rem;\n    border: 1px solid #ced4da;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n    appearance: none;\n    border-radius: 6px;\n  }\n  .p-inputtext:enabled:hover {\n    border-color: #6366F1;\n  }\n  .p-inputtext:enabled:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    border-color: #6366F1;\n  }\n  .p-inputtext.p-invalid.p-component {\n    border-color: #e24c4c;\n  }\n  .p-inputtext.p-inputtext-sm {\n    font-size: 0.875rem;\n    padding: 0.65625rem 0.65625rem;\n  }\n  .p-inputtext.p-inputtext-lg {\n    font-size: 1.25rem;\n    padding: 0.9375rem 0.9375rem;\n  }\n  .p-float-label > label {\n    left: 0.75rem;\n    color: #6c757d;\n    transition-duration: 0.2s;\n  }\n  .p-float-label > label.p-error {\n    color: #e24c4c;\n  }\n  .p-input-icon-left > i:first-of-type,\n  .p-input-icon-left > svg:first-of-type,\n  .p-input-icon-left > .p-input-prefix {\n    left: 0.75rem;\n    color: #6c757d;\n  }\n  .p-input-icon-left > .p-inputtext {\n    padding-left: 2.5rem;\n  }\n  .p-input-icon-left.p-float-label > label {\n    left: 2.5rem;\n  }\n  .p-input-icon-right > i:last-of-type,\n  .p-input-icon-right > svg:last-of-type,\n  .p-input-icon-right > .p-input-suffix {\n    right: 0.75rem;\n    color: #6c757d;\n  }\n  .p-input-icon-right > .p-inputtext {\n    padding-right: 2.5rem;\n  }\n  ::-webkit-input-placeholder {\n    color: #6c757d;\n  }\n  :-moz-placeholder {\n    color: #6c757d;\n  }\n  ::-moz-placeholder {\n    color: #6c757d;\n  }\n  :-ms-input-placeholder {\n    color: #6c757d;\n  }\n  .p-input-filled .p-inputtext {\n    background-color: #e9ecef;\n  }\n  .p-input-filled .p-inputtext:enabled:hover {\n    background-color: #e9ecef;\n  }\n  .p-input-filled .p-inputtext:enabled:focus {\n    background-color: #ffffff;\n  }\n  .p-inputtext-sm .p-inputtext {\n    font-size: 0.875rem;\n    padding: 0.65625rem 0.65625rem;\n  }\n  .p-inputtext-lg .p-inputtext {\n    font-size: 1.25rem;\n    padding: 0.9375rem 0.9375rem;\n  }\n  .p-listbox {\n    background: #ffffff;\n    color: #495057;\n    border: 1px solid #ced4da;\n    border-radius: 6px;\n  }\n  .p-listbox .p-listbox-header {\n    padding: 0.75rem 1.25rem;\n    border-bottom: 1px solid #dee2e6;\n    color: #343a40;\n    background: #f8f9fa;\n    margin: 0;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-listbox .p-listbox-header .p-listbox-filter {\n    padding-right: 1.75rem;\n  }\n  .p-listbox .p-listbox-header .p-listbox-filter-icon {\n    right: 0.75rem;\n    color: #6c757d;\n  }\n  .p-listbox .p-listbox-list {\n    padding: 0.75rem 0;\n  }\n  .p-listbox .p-listbox-list .p-listbox-item {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    border: 0 none;\n    color: #495057;\n    transition: box-shadow 0.2s;\n    border-radius: 0;\n  }\n  .p-listbox .p-listbox-list .p-listbox-item.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-listbox .p-listbox-list .p-listbox-item:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-listbox .p-listbox-list .p-listbox-item-group {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    color: #343a40;\n    background: #ffffff;\n    font-weight: 700;\n  }\n  .p-listbox .p-listbox-list .p-listbox-empty-message {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    background: transparent;\n  }\n  .p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {\n    color: #495057;\n    background: #e9ecef;\n  }\n  .p-listbox.p-invalid {\n    border-color: #e24c4c;\n  }\n  .p-mention-panel {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    border-radius: 6px;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-mention-panel .p-mention-items {\n    padding: 0.75rem 0;\n  }\n  .p-mention-panel .p-mention-items .p-mention-item {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    border: 0 none;\n    color: #495057;\n    background: transparent;\n    transition: box-shadow 0.2s;\n    border-radius: 0;\n  }\n  .p-mention-panel .p-mention-items .p-mention-item:hover {\n    color: #495057;\n    background: #e9ecef;\n  }\n  .p-mention-panel .p-mention-items .p-mention-item.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-multiselect {\n    background: #ffffff;\n    border: 1px solid #ced4da;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n    border-radius: 6px;\n  }\n  .p-multiselect:not(.p-disabled):hover {\n    border-color: #6366F1;\n  }\n  .p-multiselect:not(.p-disabled).p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    border-color: #6366F1;\n  }\n  .p-multiselect.p-multiselect-clearable .p-multiselect-label {\n    padding-right: 1.75rem;\n  }\n  .p-multiselect .p-multiselect-label {\n    padding: 0.75rem 0.75rem;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .p-multiselect .p-multiselect-label.p-placeholder {\n    color: #6c757d;\n  }\n  .p-multiselect.p-multiselect-chip .p-multiselect-token {\n    padding: 0.375rem 0.75rem;\n    margin-right: 0.5rem;\n    background: #dee2e6;\n    color: #495057;\n    border-radius: 16px;\n  }\n  .p-multiselect.p-multiselect-chip .p-multiselect-token .p-multiselect-token-icon {\n    margin-left: 0.5rem;\n  }\n  .p-multiselect .p-multiselect-trigger {\n    background: transparent;\n    color: #6c757d;\n    width: 3rem;\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n  .p-multiselect .p-multiselect-clear-icon {\n    color: #6c757d;\n    right: 3rem;\n  }\n  .p-multiselect.p-invalid.p-component {\n    border-color: #e24c4c;\n  }\n  .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {\n    padding: 0.375rem 0.75rem;\n  }\n  .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label.p-multiselect-items-label {\n    padding: 0.75rem 0.75rem;\n  }\n  .p-inputwrapper-filled.p-multiselect.p-multiselect-clearable .p-multiselect-label {\n    padding-right: 1.75rem;\n  }\n  .p-multiselect-panel {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    border-radius: 6px;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-multiselect-panel .p-multiselect-header {\n    padding: 0.75rem 1.25rem;\n    border-bottom: 1px solid #dee2e6;\n    color: #343a40;\n    background: #f8f9fa;\n    margin: 0;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container {\n    margin: 0 0.5rem;\n  }\n  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext {\n    padding-right: 1.75rem;\n  }\n  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-multiselect-filter-icon {\n    right: 0.75rem;\n    color: #6c757d;\n  }\n  .p-multiselect-panel .p-multiselect-header .p-multiselect-close {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-multiselect-panel .p-multiselect-header .p-multiselect-close:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-multiselect-panel .p-multiselect-header .p-multiselect-close:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-multiselect-panel .p-multiselect-items {\n    padding: 0.75rem 0;\n  }\n  .p-multiselect-panel .p-multiselect-items .p-multiselect-item {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    border: 0 none;\n    color: #495057;\n    background: transparent;\n    transition: box-shadow 0.2s;\n    border-radius: 0;\n  }\n  .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {\n    color: #495057;\n    background: #e9ecef;\n  }\n  .p-multiselect-panel .p-multiselect-items .p-multiselect-item:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {\n    margin-right: 0.5rem;\n  }\n  .p-multiselect-panel .p-multiselect-items .p-multiselect-item-group {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    color: #343a40;\n    background: #ffffff;\n    font-weight: 700;\n  }\n  .p-multiselect-panel .p-multiselect-items .p-multiselect-empty-message {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    background: transparent;\n  }\n  .p-input-filled .p-multiselect {\n    background: #e9ecef;\n  }\n  .p-input-filled .p-multiselect:not(.p-disabled):hover {\n    background-color: #e9ecef;\n  }\n  .p-input-filled .p-multiselect:not(.p-disabled).p-focus {\n    background-color: #ffffff;\n  }\n  .p-password.p-invalid.p-component > .p-inputtext {\n    border-color: #e24c4c;\n  }\n  .p-password-panel {\n    padding: 1.25rem;\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 6px;\n  }\n  .p-password-panel .p-password-meter {\n    margin-bottom: 0.5rem;\n    background: #dee2e6;\n  }\n  .p-password-panel .p-password-meter .p-password-strength.weak {\n    background: #ea5455;\n  }\n  .p-password-panel .p-password-meter .p-password-strength.medium {\n    background: #ff9f42;\n  }\n  .p-password-panel .p-password-meter .p-password-strength.strong {\n    background: #29c76f;\n  }\n  .p-radiobutton {\n    width: 22px;\n    height: 22px;\n  }\n  .p-radiobutton .p-radiobutton-box {\n    border: 2px solid #ced4da;\n    background: #ffffff;\n    width: 22px;\n    height: 22px;\n    color: #495057;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover {\n    border-color: #6366F1;\n  }\n  .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    border-color: #6366F1;\n  }\n  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {\n    width: 12px;\n    height: 12px;\n    transition-duration: 0.2s;\n    background-color: #ffffff;\n  }\n  .p-radiobutton .p-radiobutton-box.p-highlight {\n    border-color: #6366F1;\n    background: #6366F1;\n  }\n  .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {\n    border-color: #4338CA;\n    background: #4338CA;\n    color: #ffffff;\n  }\n  .p-radiobutton.p-invalid > .p-radiobutton-box {\n    border-color: #e24c4c;\n  }\n  .p-radiobutton:focus {\n    outline: 0 none;\n  }\n  .p-input-filled .p-radiobutton .p-radiobutton-box {\n    background-color: #e9ecef;\n  }\n  .p-input-filled .p-radiobutton .p-radiobutton-box:not(.p-disabled):hover {\n    background-color: #e9ecef;\n  }\n  .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {\n    background: #6366F1;\n  }\n  .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {\n    background: #4338CA;\n  }\n  .p-rating {\n    gap: 0.5rem;\n  }\n  .p-rating .p-rating-item .p-rating-icon {\n    color: #495057;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n    font-size: 1.143rem;\n  }\n  .p-rating .p-rating-item .p-rating-icon.p-icon {\n    width: 1.143rem;\n    height: 1.143rem;\n  }\n  .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {\n    color: #ea5455;\n  }\n  .p-rating .p-rating-item:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {\n    color: #6366F1;\n  }\n  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {\n    color: #6366F1;\n  }\n  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon.p-rating-cancel {\n    color: #e73d3e;\n  }\n  .p-selectbutton .p-button {\n    background: #ffffff;\n    border: 1px solid #ced4da;\n    color: #495057;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .p-selectbutton .p-button .p-button-icon-left,\n  .p-selectbutton .p-button .p-button-icon-right {\n    color: #6c757d;\n  }\n  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {\n    background: #e9ecef;\n    border-color: #ced4da;\n    color: #495057;\n  }\n  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,\n  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {\n    color: #343a40;\n  }\n  .p-selectbutton .p-button.p-highlight {\n    background: #6366F1;\n    border-color: #6366F1;\n    color: #ffffff;\n  }\n  .p-selectbutton .p-button.p-highlight .p-button-icon-left,\n  .p-selectbutton .p-button.p-highlight .p-button-icon-right {\n    color: #ffffff;\n  }\n  .p-selectbutton .p-button.p-highlight:hover {\n    background: #4F46E5;\n    border-color: #4F46E5;\n    color: #ffffff;\n  }\n  .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,\n  .p-selectbutton .p-button.p-highlight:hover .p-button-icon-right {\n    color: #ffffff;\n  }\n  .p-selectbutton.p-invalid > .p-button {\n    border-color: #e24c4c;\n  }\n  .p-slider {\n    background: #dee2e6;\n    border: 0 none;\n    border-radius: 6px;\n  }\n  .p-slider.p-slider-horizontal {\n    height: 0.286rem;\n  }\n  .p-slider.p-slider-horizontal .p-slider-handle {\n    margin-top: -0.5715rem;\n    margin-left: -0.5715rem;\n  }\n  .p-slider.p-slider-vertical {\n    width: 0.286rem;\n  }\n  .p-slider.p-slider-vertical .p-slider-handle {\n    margin-left: -0.5715rem;\n    margin-bottom: -0.5715rem;\n  }\n  .p-slider .p-slider-handle {\n    height: 1.143rem;\n    width: 1.143rem;\n    background: #ffffff;\n    border: 2px solid #6366F1;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .p-slider .p-slider-handle:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-slider .p-slider-range {\n    background: #6366F1;\n  }\n  .p-slider:not(.p-disabled) .p-slider-handle:hover {\n    background: #6366F1;\n    border-color: #6366F1;\n  }\n  .p-treeselect {\n    background: #ffffff;\n    border: 1px solid #ced4da;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n    border-radius: 6px;\n  }\n  .p-treeselect:not(.p-disabled):hover {\n    border-color: #6366F1;\n  }\n  .p-treeselect:not(.p-disabled).p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    border-color: #6366F1;\n  }\n  .p-treeselect .p-treeselect-label {\n    padding: 0.75rem 0.75rem;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .p-treeselect .p-treeselect-label.p-placeholder {\n    color: #6c757d;\n  }\n  .p-treeselect.p-treeselect-chip .p-treeselect-token {\n    padding: 0.375rem 0.75rem;\n    margin-right: 0.5rem;\n    background: #dee2e6;\n    color: #495057;\n    border-radius: 16px;\n  }\n  .p-treeselect .p-treeselect-trigger {\n    background: transparent;\n    color: #6c757d;\n    width: 3rem;\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n  .p-treeselect.p-invalid.p-component {\n    border-color: #e24c4c;\n  }\n  .p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {\n    padding: 0.375rem 0.75rem;\n  }\n  .p-treeselect-panel {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    border-radius: 6px;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-treeselect-panel .p-treeselect-header {\n    padding: 0.75rem 1.25rem;\n    border-bottom: 1px solid #dee2e6;\n    color: #343a40;\n    background: #f8f9fa;\n    margin: 0;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container {\n    margin-right: 0.5rem;\n  }\n  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container .p-treeselect-filter {\n    padding-right: 1.75rem;\n  }\n  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container .p-treeselect-filter-icon {\n    right: 0.75rem;\n    color: #6c757d;\n  }\n  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container.p-treeselect-clearable-filter .p-treeselect-filter {\n    padding-right: 3.5rem;\n  }\n  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container.p-treeselect-clearable-filter .p-treeselect-filter-clear-icon {\n    right: 2.5rem;\n  }\n  .p-treeselect-panel .p-treeselect-header .p-treeselect-close {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-treeselect-panel .p-treeselect-header .p-treeselect-close:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-treeselect-panel .p-treeselect-header .p-treeselect-close:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {\n    border: 0 none;\n  }\n  .p-treeselect-panel .p-treeselect-items-wrapper .p-treeselect-empty-message {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    background: transparent;\n  }\n  .p-input-filled .p-treeselect {\n    background: #e9ecef;\n  }\n  .p-input-filled .p-treeselect:not(.p-disabled):hover {\n    background-color: #e9ecef;\n  }\n  .p-input-filled .p-treeselect:not(.p-disabled).p-focus {\n    background-color: #ffffff;\n  }\n  .p-togglebutton.p-button {\n    background: #ffffff;\n    border: 1px solid #ced4da;\n    color: #495057;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .p-togglebutton.p-button .p-button-icon-left,\n  .p-togglebutton.p-button .p-button-icon-right {\n    color: #6c757d;\n  }\n  .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {\n    background: #e9ecef;\n    border-color: #ced4da;\n    color: #495057;\n  }\n  .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,\n  .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {\n    color: #343a40;\n  }\n  .p-togglebutton.p-button.p-highlight {\n    background: #6366F1;\n    border-color: #6366F1;\n    color: #ffffff;\n  }\n  .p-togglebutton.p-button.p-highlight .p-button-icon-left,\n  .p-togglebutton.p-button.p-highlight .p-button-icon-right {\n    color: #ffffff;\n  }\n  .p-togglebutton.p-button.p-highlight:hover {\n    background: #4F46E5;\n    border-color: #4F46E5;\n    color: #ffffff;\n  }\n  .p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,\n  .p-togglebutton.p-button.p-highlight:hover .p-button-icon-right {\n    color: #ffffff;\n  }\n  .p-togglebutton.p-button.p-invalid > .p-button {\n    border-color: #e24c4c;\n  }\n  .p-button {\n    color: #ffffff;\n    background: #6366F1;\n    border: 1px solid #6366F1;\n    padding: 0.75rem 1.25rem;\n    font-size: 1rem;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n    border-radius: 6px;\n  }\n  .p-button:enabled:hover, .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: #4F46E5;\n    color: #ffffff;\n    border-color: #4F46E5;\n  }\n  .p-button:enabled:active, .p-button:not(button):not(a):not(.p-disabled):active {\n    background: #4338CA;\n    color: #ffffff;\n    border-color: #4338CA;\n  }\n  .p-button.p-button-outlined {\n    background-color: transparent;\n    color: #6366F1;\n    border: 1px solid;\n  }\n  .p-button.p-button-outlined:enabled:hover, .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(99, 102, 241, 0.04);\n    color: #6366F1;\n    border: 1px solid;\n  }\n  .p-button.p-button-outlined:enabled:active, .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active {\n    background: rgba(99, 102, 241, 0.16);\n    color: #6366F1;\n    border: 1px solid;\n  }\n  .p-button.p-button-outlined.p-button-plain {\n    color: #6c757d;\n    border-color: #6c757d;\n  }\n  .p-button.p-button-outlined.p-button-plain:enabled:hover, .p-button.p-button-outlined.p-button-plain:not(button):not(a):not(.p-disabled):hover {\n    background: #e9ecef;\n    color: #6c757d;\n  }\n  .p-button.p-button-outlined.p-button-plain:enabled:active, .p-button.p-button-outlined.p-button-plain:not(button):not(a):not(.p-disabled):active {\n    background: #dee2e6;\n    color: #6c757d;\n  }\n  .p-button.p-button-text {\n    background-color: transparent;\n    color: #6366F1;\n    border-color: transparent;\n  }\n  .p-button.p-button-text:enabled:hover, .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(99, 102, 241, 0.04);\n    color: #6366F1;\n    border-color: transparent;\n  }\n  .p-button.p-button-text:enabled:active, .p-button.p-button-text:not(button):not(a):not(.p-disabled):active {\n    background: rgba(99, 102, 241, 0.16);\n    color: #6366F1;\n    border-color: transparent;\n  }\n  .p-button.p-button-text.p-button-plain {\n    color: #6c757d;\n  }\n  .p-button.p-button-text.p-button-plain:enabled:hover, .p-button.p-button-text.p-button-plain:not(button):not(a):not(.p-disabled):hover {\n    background: #e9ecef;\n    color: #6c757d;\n  }\n  .p-button.p-button-text.p-button-plain:enabled:active, .p-button.p-button-text.p-button-plain:not(button):not(a):not(.p-disabled):active {\n    background: #dee2e6;\n    color: #6c757d;\n  }\n  .p-button:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-button .p-button-label {\n    transition-duration: 0.2s;\n  }\n  .p-button .p-button-icon-left {\n    margin-right: 0.5rem;\n  }\n  .p-button .p-button-icon-right {\n    margin-left: 0.5rem;\n  }\n  .p-button .p-button-icon-bottom {\n    margin-top: 0.5rem;\n  }\n  .p-button .p-button-icon-top {\n    margin-bottom: 0.5rem;\n  }\n  .p-button .p-badge {\n    margin-left: 0.5rem;\n    min-width: 1rem;\n    height: 1rem;\n    line-height: 1rem;\n    color: #6366F1;\n    background-color: #ffffff;\n  }\n  .p-button.p-button-raised {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  }\n  .p-button.p-button-rounded {\n    border-radius: 2rem;\n  }\n  .p-button.p-button-icon-only {\n    width: 3rem;\n    padding: 0.75rem 0;\n  }\n  .p-button.p-button-icon-only .p-button-icon-left,\n  .p-button.p-button-icon-only .p-button-icon-right {\n    margin: 0;\n  }\n  .p-button.p-button-icon-only.p-button-rounded {\n    border-radius: 50%;\n    height: 3rem;\n  }\n  .p-button.p-button-sm {\n    font-size: 0.875rem;\n    padding: 0.65625rem 1.09375rem;\n  }\n  .p-button.p-button-sm .p-button-icon {\n    font-size: 0.875rem;\n  }\n  .p-button.p-button-lg {\n    font-size: 1.25rem;\n    padding: 0.9375rem 1.5625rem;\n  }\n  .p-button.p-button-lg .p-button-icon {\n    font-size: 1.25rem;\n  }\n  .p-button.p-button-loading-label-only.p-button-loading-left .p-button-label {\n    margin-left: 0.5rem;\n  }\n  .p-button.p-button-loading-label-only.p-button-loading-right .p-button-label {\n    margin-right: 0.5rem;\n  }\n  .p-button.p-button-loading-label-only.p-button-loading-top .p-button-label {\n    margin-top: 0.5rem;\n  }\n  .p-button.p-button-loading-label-only.p-button-loading-bottom .p-button-label {\n    margin-bottom: 0.5rem;\n  }\n  .p-button.p-button-loading-label-only .p-button-loading-icon {\n    margin: 0;\n  }\n  .p-fluid .p-button {\n    width: 100%;\n  }\n  .p-fluid .p-button-icon-only {\n    width: 3rem;\n  }\n  .p-fluid .p-buttonset {\n    display: flex;\n  }\n  .p-fluid .p-buttonset .p-button {\n    flex: 1;\n  }\n  .p-button.p-button-secondary, .p-buttonset.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button, .p-fileupload-choose.p-button-secondary {\n    color: #ffffff;\n    background: #64748B;\n    border: 1px solid #64748B;\n  }\n  .p-button.p-button-secondary:enabled:hover, .p-button.p-button-secondary:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-secondary > .p-button:enabled:hover, .p-buttonset.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-secondary > .p-button:enabled:hover, .p-splitbutton.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-secondary:enabled:hover, .p-fileupload-choose.p-button-secondary:not(button):not(a):not(.p-disabled):hover {\n    background: #475569;\n    color: #ffffff;\n    border-color: #475569;\n  }\n  .p-button.p-button-secondary:enabled:focus, .p-button.p-button-secondary:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-secondary > .p-button:enabled:focus, .p-buttonset.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-secondary > .p-button:enabled:focus, .p-splitbutton.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-secondary:enabled:focus, .p-fileupload-choose.p-button-secondary:not(button):not(a):not(.p-disabled):focus {\n    box-shadow: 0 0 0 0.2rem #E2E8F0;\n  }\n  .p-button.p-button-secondary:enabled:active, .p-button.p-button-secondary:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-secondary > .p-button:enabled:active, .p-buttonset.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-secondary > .p-button:enabled:active, .p-splitbutton.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-secondary:enabled:active, .p-fileupload-choose.p-button-secondary:not(button):not(a):not(.p-disabled):active {\n    background: #334155;\n    color: #ffffff;\n    border-color: #334155;\n  }\n  .p-button.p-button-secondary.p-button-outlined, .p-buttonset.p-button-secondary > .p-button.p-button-outlined, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined, .p-fileupload-choose.p-button-secondary.p-button-outlined {\n    background-color: transparent;\n    color: #64748B;\n    border: 1px solid;\n  }\n  .p-button.p-button-secondary.p-button-outlined:enabled:hover, .p-button.p-button-secondary.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-secondary.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-secondary.p-button-outlined:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(100, 116, 139, 0.04);\n    color: #64748B;\n    border: 1px solid;\n  }\n  .p-button.p-button-secondary.p-button-outlined:enabled:active, .p-button.p-button-secondary.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-secondary.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-secondary.p-button-outlined:not(button):not(a):not(.p-disabled):active {\n    background: rgba(100, 116, 139, 0.16);\n    color: #64748B;\n    border: 1px solid;\n  }\n  .p-button.p-button-secondary.p-button-text, .p-buttonset.p-button-secondary > .p-button.p-button-text, .p-splitbutton.p-button-secondary > .p-button.p-button-text, .p-fileupload-choose.p-button-secondary.p-button-text {\n    background-color: transparent;\n    color: #64748B;\n    border-color: transparent;\n  }\n  .p-button.p-button-secondary.p-button-text:enabled:hover, .p-button.p-button-secondary.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-secondary > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-secondary > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-secondary > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-secondary > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-secondary.p-button-text:enabled:hover, .p-fileupload-choose.p-button-secondary.p-button-text:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(100, 116, 139, 0.04);\n    border-color: transparent;\n    color: #64748B;\n  }\n  .p-button.p-button-secondary.p-button-text:enabled:active, .p-button.p-button-secondary.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-secondary > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-secondary > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-secondary > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-secondary > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-secondary.p-button-text:enabled:active, .p-fileupload-choose.p-button-secondary.p-button-text:not(button):not(a):not(.p-disabled):active {\n    background: rgba(100, 116, 139, 0.16);\n    border-color: transparent;\n    color: #64748B;\n  }\n  .p-button.p-button-info, .p-buttonset.p-button-info > .p-button, .p-splitbutton.p-button-info > .p-button, .p-fileupload-choose.p-button-info {\n    color: #ffffff;\n    background: #3B82F6;\n    border: 1px solid #3B82F6;\n  }\n  .p-button.p-button-info:enabled:hover, .p-button.p-button-info:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-info > .p-button:enabled:hover, .p-buttonset.p-button-info > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-info > .p-button:enabled:hover, .p-splitbutton.p-button-info > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-info:enabled:hover, .p-fileupload-choose.p-button-info:not(button):not(a):not(.p-disabled):hover {\n    background: #2563EB;\n    color: #ffffff;\n    border-color: #2563EB;\n  }\n  .p-button.p-button-info:enabled:focus, .p-button.p-button-info:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-info > .p-button:enabled:focus, .p-buttonset.p-button-info > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-info > .p-button:enabled:focus, .p-splitbutton.p-button-info > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-info:enabled:focus, .p-fileupload-choose.p-button-info:not(button):not(a):not(.p-disabled):focus {\n    box-shadow: 0 0 0 0.2rem #BFDBFE;\n  }\n  .p-button.p-button-info:enabled:active, .p-button.p-button-info:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-info > .p-button:enabled:active, .p-buttonset.p-button-info > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-info > .p-button:enabled:active, .p-splitbutton.p-button-info > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-info:enabled:active, .p-fileupload-choose.p-button-info:not(button):not(a):not(.p-disabled):active {\n    background: #1D4ED8;\n    color: #ffffff;\n    border-color: #1D4ED8;\n  }\n  .p-button.p-button-info.p-button-outlined, .p-buttonset.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined, .p-fileupload-choose.p-button-info.p-button-outlined {\n    background-color: transparent;\n    color: #3B82F6;\n    border: 1px solid;\n  }\n  .p-button.p-button-info.p-button-outlined:enabled:hover, .p-button.p-button-info.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-info > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-info > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-info.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-info.p-button-outlined:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(59, 130, 246, 0.04);\n    color: #3B82F6;\n    border: 1px solid;\n  }\n  .p-button.p-button-info.p-button-outlined:enabled:active, .p-button.p-button-info.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-info > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-info.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-info.p-button-outlined:not(button):not(a):not(.p-disabled):active {\n    background: rgba(59, 130, 246, 0.16);\n    color: #3B82F6;\n    border: 1px solid;\n  }\n  .p-button.p-button-info.p-button-text, .p-buttonset.p-button-info > .p-button.p-button-text, .p-splitbutton.p-button-info > .p-button.p-button-text, .p-fileupload-choose.p-button-info.p-button-text {\n    background-color: transparent;\n    color: #3B82F6;\n    border-color: transparent;\n  }\n  .p-button.p-button-info.p-button-text:enabled:hover, .p-button.p-button-info.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-info > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-info > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-info > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-info > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-info.p-button-text:enabled:hover, .p-fileupload-choose.p-button-info.p-button-text:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(59, 130, 246, 0.04);\n    border-color: transparent;\n    color: #3B82F6;\n  }\n  .p-button.p-button-info.p-button-text:enabled:active, .p-button.p-button-info.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-info > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-info > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-info > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-info > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-info.p-button-text:enabled:active, .p-fileupload-choose.p-button-info.p-button-text:not(button):not(a):not(.p-disabled):active {\n    background: rgba(59, 130, 246, 0.16);\n    border-color: transparent;\n    color: #3B82F6;\n  }\n  .p-button.p-button-success, .p-buttonset.p-button-success > .p-button, .p-splitbutton.p-button-success > .p-button, .p-fileupload-choose.p-button-success {\n    color: #ffffff;\n    background: #22C55E;\n    border: 1px solid #22C55E;\n  }\n  .p-button.p-button-success:enabled:hover, .p-button.p-button-success:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-success > .p-button:enabled:hover, .p-buttonset.p-button-success > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-success > .p-button:enabled:hover, .p-splitbutton.p-button-success > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-success:enabled:hover, .p-fileupload-choose.p-button-success:not(button):not(a):not(.p-disabled):hover {\n    background: #16A34A;\n    color: #ffffff;\n    border-color: #16A34A;\n  }\n  .p-button.p-button-success:enabled:focus, .p-button.p-button-success:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-success > .p-button:enabled:focus, .p-buttonset.p-button-success > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-success > .p-button:enabled:focus, .p-splitbutton.p-button-success > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-success:enabled:focus, .p-fileupload-choose.p-button-success:not(button):not(a):not(.p-disabled):focus {\n    box-shadow: 0 0 0 0.2rem #BBF7D0;\n  }\n  .p-button.p-button-success:enabled:active, .p-button.p-button-success:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-success > .p-button:enabled:active, .p-buttonset.p-button-success > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-success > .p-button:enabled:active, .p-splitbutton.p-button-success > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-success:enabled:active, .p-fileupload-choose.p-button-success:not(button):not(a):not(.p-disabled):active {\n    background: #15803D;\n    color: #ffffff;\n    border-color: #15803D;\n  }\n  .p-button.p-button-success.p-button-outlined, .p-buttonset.p-button-success > .p-button.p-button-outlined, .p-splitbutton.p-button-success > .p-button.p-button-outlined, .p-fileupload-choose.p-button-success.p-button-outlined {\n    background-color: transparent;\n    color: #22C55E;\n    border: 1px solid;\n  }\n  .p-button.p-button-success.p-button-outlined:enabled:hover, .p-button.p-button-success.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-success > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-success > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-success > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-success > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-success.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-success.p-button-outlined:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(34, 197, 94, 0.04);\n    color: #22C55E;\n    border: 1px solid;\n  }\n  .p-button.p-button-success.p-button-outlined:enabled:active, .p-button.p-button-success.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-success > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-success > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-success > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-success > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-success.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-success.p-button-outlined:not(button):not(a):not(.p-disabled):active {\n    background: rgba(34, 197, 94, 0.16);\n    color: #22C55E;\n    border: 1px solid;\n  }\n  .p-button.p-button-success.p-button-text, .p-buttonset.p-button-success > .p-button.p-button-text, .p-splitbutton.p-button-success > .p-button.p-button-text, .p-fileupload-choose.p-button-success.p-button-text {\n    background-color: transparent;\n    color: #22C55E;\n    border-color: transparent;\n  }\n  .p-button.p-button-success.p-button-text:enabled:hover, .p-button.p-button-success.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-success > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-success > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-success > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-success > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-success.p-button-text:enabled:hover, .p-fileupload-choose.p-button-success.p-button-text:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(34, 197, 94, 0.04);\n    border-color: transparent;\n    color: #22C55E;\n  }\n  .p-button.p-button-success.p-button-text:enabled:active, .p-button.p-button-success.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-success > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-success > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-success > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-success > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-success.p-button-text:enabled:active, .p-fileupload-choose.p-button-success.p-button-text:not(button):not(a):not(.p-disabled):active {\n    background: rgba(34, 197, 94, 0.16);\n    border-color: transparent;\n    color: #22C55E;\n  }\n  .p-button.p-button-warning, .p-buttonset.p-button-warning > .p-button, .p-splitbutton.p-button-warning > .p-button, .p-fileupload-choose.p-button-warning {\n    color: #ffffff;\n    background: #F59E0B;\n    border: 1px solid #F59E0B;\n  }\n  .p-button.p-button-warning:enabled:hover, .p-button.p-button-warning:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-warning > .p-button:enabled:hover, .p-buttonset.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-warning > .p-button:enabled:hover, .p-splitbutton.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-warning:enabled:hover, .p-fileupload-choose.p-button-warning:not(button):not(a):not(.p-disabled):hover {\n    background: #D97706;\n    color: #ffffff;\n    border-color: #D97706;\n  }\n  .p-button.p-button-warning:enabled:focus, .p-button.p-button-warning:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-warning > .p-button:enabled:focus, .p-buttonset.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-warning > .p-button:enabled:focus, .p-splitbutton.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-warning:enabled:focus, .p-fileupload-choose.p-button-warning:not(button):not(a):not(.p-disabled):focus {\n    box-shadow: 0 0 0 0.2rem #FDE68A;\n  }\n  .p-button.p-button-warning:enabled:active, .p-button.p-button-warning:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-warning > .p-button:enabled:active, .p-buttonset.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-warning > .p-button:enabled:active, .p-splitbutton.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-warning:enabled:active, .p-fileupload-choose.p-button-warning:not(button):not(a):not(.p-disabled):active {\n    background: #B45309;\n    color: #ffffff;\n    border-color: #B45309;\n  }\n  .p-button.p-button-warning.p-button-outlined, .p-buttonset.p-button-warning > .p-button.p-button-outlined, .p-splitbutton.p-button-warning > .p-button.p-button-outlined, .p-fileupload-choose.p-button-warning.p-button-outlined {\n    background-color: transparent;\n    color: #F59E0B;\n    border: 1px solid;\n  }\n  .p-button.p-button-warning.p-button-outlined:enabled:hover, .p-button.p-button-warning.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-warning > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-warning > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-warning.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-warning.p-button-outlined:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(245, 158, 11, 0.04);\n    color: #F59E0B;\n    border: 1px solid;\n  }\n  .p-button.p-button-warning.p-button-outlined:enabled:active, .p-button.p-button-warning.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-warning > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-warning > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-warning.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-warning.p-button-outlined:not(button):not(a):not(.p-disabled):active {\n    background: rgba(245, 158, 11, 0.16);\n    color: #F59E0B;\n    border: 1px solid;\n  }\n  .p-button.p-button-warning.p-button-text, .p-buttonset.p-button-warning > .p-button.p-button-text, .p-splitbutton.p-button-warning > .p-button.p-button-text, .p-fileupload-choose.p-button-warning.p-button-text {\n    background-color: transparent;\n    color: #F59E0B;\n    border-color: transparent;\n  }\n  .p-button.p-button-warning.p-button-text:enabled:hover, .p-button.p-button-warning.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-warning > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-warning > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-warning > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-warning > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-warning.p-button-text:enabled:hover, .p-fileupload-choose.p-button-warning.p-button-text:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(245, 158, 11, 0.04);\n    border-color: transparent;\n    color: #F59E0B;\n  }\n  .p-button.p-button-warning.p-button-text:enabled:active, .p-button.p-button-warning.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-warning > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-warning > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-warning > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-warning > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-warning.p-button-text:enabled:active, .p-fileupload-choose.p-button-warning.p-button-text:not(button):not(a):not(.p-disabled):active {\n    background: rgba(245, 158, 11, 0.16);\n    border-color: transparent;\n    color: #F59E0B;\n  }\n  .p-button.p-button-help, .p-buttonset.p-button-help > .p-button, .p-splitbutton.p-button-help > .p-button, .p-fileupload-choose.p-button-help {\n    color: #ffffff;\n    background: #A855F7;\n    border: 1px solid #A855F7;\n  }\n  .p-button.p-button-help:enabled:hover, .p-button.p-button-help:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-help > .p-button:enabled:hover, .p-buttonset.p-button-help > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-help > .p-button:enabled:hover, .p-splitbutton.p-button-help > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-help:enabled:hover, .p-fileupload-choose.p-button-help:not(button):not(a):not(.p-disabled):hover {\n    background: #9333EA;\n    color: #ffffff;\n    border-color: #9333EA;\n  }\n  .p-button.p-button-help:enabled:focus, .p-button.p-button-help:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-help > .p-button:enabled:focus, .p-buttonset.p-button-help > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-help > .p-button:enabled:focus, .p-splitbutton.p-button-help > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-help:enabled:focus, .p-fileupload-choose.p-button-help:not(button):not(a):not(.p-disabled):focus {\n    box-shadow: 0 0 0 0.2rem #E9D5FF;\n  }\n  .p-button.p-button-help:enabled:active, .p-button.p-button-help:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-help > .p-button:enabled:active, .p-buttonset.p-button-help > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-help > .p-button:enabled:active, .p-splitbutton.p-button-help > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-help:enabled:active, .p-fileupload-choose.p-button-help:not(button):not(a):not(.p-disabled):active {\n    background: #7E22CE;\n    color: #ffffff;\n    border-color: #7E22CE;\n  }\n  .p-button.p-button-help.p-button-outlined, .p-buttonset.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined, .p-fileupload-choose.p-button-help.p-button-outlined {\n    background-color: transparent;\n    color: #A855F7;\n    border: 1px solid;\n  }\n  .p-button.p-button-help.p-button-outlined:enabled:hover, .p-button.p-button-help.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-help > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-help > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-help > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-help > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-help.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-help.p-button-outlined:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(168, 85, 247, 0.04);\n    color: #A855F7;\n    border: 1px solid;\n  }\n  .p-button.p-button-help.p-button-outlined:enabled:active, .p-button.p-button-help.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-help > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-help > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-help > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-help > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-help.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-help.p-button-outlined:not(button):not(a):not(.p-disabled):active {\n    background: rgba(168, 85, 247, 0.16);\n    color: #A855F7;\n    border: 1px solid;\n  }\n  .p-button.p-button-help.p-button-text, .p-buttonset.p-button-help > .p-button.p-button-text, .p-splitbutton.p-button-help > .p-button.p-button-text, .p-fileupload-choose.p-button-help.p-button-text {\n    background-color: transparent;\n    color: #A855F7;\n    border-color: transparent;\n  }\n  .p-button.p-button-help.p-button-text:enabled:hover, .p-button.p-button-help.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-help > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-help > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-help > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-help > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-help.p-button-text:enabled:hover, .p-fileupload-choose.p-button-help.p-button-text:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(168, 85, 247, 0.04);\n    border-color: transparent;\n    color: #A855F7;\n  }\n  .p-button.p-button-help.p-button-text:enabled:active, .p-button.p-button-help.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-help > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-help > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-help > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-help > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-help.p-button-text:enabled:active, .p-fileupload-choose.p-button-help.p-button-text:not(button):not(a):not(.p-disabled):active {\n    background: rgba(168, 85, 247, 0.16);\n    border-color: transparent;\n    color: #A855F7;\n  }\n  .p-button.p-button-danger, .p-buttonset.p-button-danger > .p-button, .p-splitbutton.p-button-danger > .p-button, .p-fileupload-choose.p-button-danger {\n    color: #ffffff;\n    background: #EF4444;\n    border: 1px solid #EF4444;\n  }\n  .p-button.p-button-danger:enabled:hover, .p-button.p-button-danger:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-danger > .p-button:enabled:hover, .p-buttonset.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-danger > .p-button:enabled:hover, .p-splitbutton.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-danger:enabled:hover, .p-fileupload-choose.p-button-danger:not(button):not(a):not(.p-disabled):hover {\n    background: #DC2626;\n    color: #ffffff;\n    border-color: #DC2626;\n  }\n  .p-button.p-button-danger:enabled:focus, .p-button.p-button-danger:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-danger > .p-button:enabled:focus, .p-buttonset.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-danger > .p-button:enabled:focus, .p-splitbutton.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-danger:enabled:focus, .p-fileupload-choose.p-button-danger:not(button):not(a):not(.p-disabled):focus {\n    box-shadow: 0 0 0 0.2rem #FECACA;\n  }\n  .p-button.p-button-danger:enabled:active, .p-button.p-button-danger:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-danger > .p-button:enabled:active, .p-buttonset.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-danger > .p-button:enabled:active, .p-splitbutton.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-danger:enabled:active, .p-fileupload-choose.p-button-danger:not(button):not(a):not(.p-disabled):active {\n    background: #B91C1C;\n    color: #ffffff;\n    border-color: #B91C1C;\n  }\n  .p-button.p-button-danger.p-button-outlined, .p-buttonset.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined, .p-fileupload-choose.p-button-danger.p-button-outlined {\n    background-color: transparent;\n    color: #EF4444;\n    border: 1px solid;\n  }\n  .p-button.p-button-danger.p-button-outlined:enabled:hover, .p-button.p-button-danger.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-danger > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-danger > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-danger.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-danger.p-button-outlined:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(239, 68, 68, 0.04);\n    color: #EF4444;\n    border: 1px solid;\n  }\n  .p-button.p-button-danger.p-button-outlined:enabled:active, .p-button.p-button-danger.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-danger > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-danger > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-danger.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-danger.p-button-outlined:not(button):not(a):not(.p-disabled):active {\n    background: rgba(239, 68, 68, 0.16);\n    color: #EF4444;\n    border: 1px solid;\n  }\n  .p-button.p-button-danger.p-button-text, .p-buttonset.p-button-danger > .p-button.p-button-text, .p-splitbutton.p-button-danger > .p-button.p-button-text, .p-fileupload-choose.p-button-danger.p-button-text {\n    background-color: transparent;\n    color: #EF4444;\n    border-color: transparent;\n  }\n  .p-button.p-button-danger.p-button-text:enabled:hover, .p-button.p-button-danger.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-danger > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-danger > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-danger > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-danger > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-danger.p-button-text:enabled:hover, .p-fileupload-choose.p-button-danger.p-button-text:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(239, 68, 68, 0.04);\n    border-color: transparent;\n    color: #EF4444;\n  }\n  .p-button.p-button-danger.p-button-text:enabled:active, .p-button.p-button-danger.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-danger > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-danger > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-danger > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-danger > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-danger.p-button-text:enabled:active, .p-fileupload-choose.p-button-danger.p-button-text:not(button):not(a):not(.p-disabled):active {\n    background: rgba(239, 68, 68, 0.16);\n    border-color: transparent;\n    color: #EF4444;\n  }\n  .p-button.p-button-link {\n    color: #4338CA;\n    background: transparent;\n    border: transparent;\n  }\n  .p-button.p-button-link:enabled:hover, .p-button.p-button-link:not(button):not(a):not(.p-disabled):hover {\n    background: transparent;\n    color: #4338CA;\n    border-color: transparent;\n  }\n  .p-button.p-button-link:enabled:hover .p-button-label, .p-button.p-button-link:not(button):not(a):not(.p-disabled):hover .p-button-label {\n    text-decoration: underline;\n  }\n  .p-button.p-button-link:enabled:focus, .p-button.p-button-link:not(button):not(a):not(.p-disabled):focus {\n    background: transparent;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    border-color: transparent;\n  }\n  .p-button.p-button-link:enabled:active, .p-button.p-button-link:not(button):not(a):not(.p-disabled):active {\n    background: transparent;\n    color: #4338CA;\n    border-color: transparent;\n  }\n  .p-splitbutton {\n    border-radius: 6px;\n  }\n  .p-splitbutton.p-button-outlined > .p-button {\n    background-color: transparent;\n    color: #6366F1;\n    border: 1px solid;\n  }\n  .p-splitbutton.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(99, 102, 241, 0.04);\n    color: #6366F1;\n  }\n  .p-splitbutton.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(99, 102, 241, 0.16);\n    color: #6366F1;\n  }\n  .p-splitbutton.p-button-outlined.p-button-plain > .p-button {\n    color: #6c757d;\n    border-color: #6c757d;\n  }\n  .p-splitbutton.p-button-outlined.p-button-plain > .p-button:enabled:hover, .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: #e9ecef;\n    color: #6c757d;\n  }\n  .p-splitbutton.p-button-outlined.p-button-plain > .p-button:enabled:active, .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: #dee2e6;\n    color: #6c757d;\n  }\n  .p-splitbutton.p-button-text > .p-button {\n    background-color: transparent;\n    color: #6366F1;\n    border-color: transparent;\n  }\n  .p-splitbutton.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(99, 102, 241, 0.04);\n    color: #6366F1;\n    border-color: transparent;\n  }\n  .p-splitbutton.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(99, 102, 241, 0.16);\n    color: #6366F1;\n    border-color: transparent;\n  }\n  .p-splitbutton.p-button-text.p-button-plain > .p-button {\n    color: #6c757d;\n  }\n  .p-splitbutton.p-button-text.p-button-plain > .p-button:enabled:hover, .p-splitbutton.p-button-text.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: #e9ecef;\n    color: #6c757d;\n  }\n  .p-splitbutton.p-button-text.p-button-plain > .p-button:enabled:active, .p-splitbutton.p-button-text.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: #dee2e6;\n    color: #6c757d;\n  }\n  .p-splitbutton.p-button-raised {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  }\n  .p-splitbutton.p-button-rounded {\n    border-radius: 2rem;\n  }\n  .p-splitbutton.p-button-rounded > .p-button {\n    border-radius: 2rem;\n  }\n  .p-splitbutton.p-button-sm > .p-button {\n    font-size: 0.875rem;\n    padding: 0.65625rem 1.09375rem;\n  }\n  .p-splitbutton.p-button-sm > .p-button .p-button-icon {\n    font-size: 0.875rem;\n  }\n  .p-splitbutton.p-button-lg > .p-button {\n    font-size: 1.25rem;\n    padding: 0.9375rem 1.5625rem;\n  }\n  .p-splitbutton.p-button-lg > .p-button.p-button-icon-only {\n    width: auto;\n  }\n  .p-splitbutton.p-button-lg > .p-button .p-button-icon {\n    font-size: 1.25rem;\n  }\n  .p-splitbutton .p-splitbutton-menubutton,\n  .p-splitbutton .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,\n  .p-splitbutton .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button {\n    background-color: transparent;\n    color: #64748B;\n    border: 1px solid;\n  }\n  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(100, 116, 139, 0.04);\n    color: #64748B;\n  }\n  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(100, 116, 139, 0.16);\n    color: #64748B;\n  }\n  .p-splitbutton.p-button-secondary.p-button-text > .p-button {\n    background-color: transparent;\n    color: #64748B;\n    border-color: transparent;\n  }\n  .p-splitbutton.p-button-secondary.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(100, 116, 139, 0.04);\n    border-color: transparent;\n    color: #64748B;\n  }\n  .p-splitbutton.p-button-secondary.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(100, 116, 139, 0.16);\n    border-color: transparent;\n    color: #64748B;\n  }\n  .p-splitbutton.p-button-info.p-button-outlined > .p-button {\n    background-color: transparent;\n    color: #3B82F6;\n    border: 1px solid;\n  }\n  .p-splitbutton.p-button-info.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(59, 130, 246, 0.04);\n    color: #3B82F6;\n  }\n  .p-splitbutton.p-button-info.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(59, 130, 246, 0.16);\n    color: #3B82F6;\n  }\n  .p-splitbutton.p-button-info.p-button-text > .p-button {\n    background-color: transparent;\n    color: #3B82F6;\n    border-color: transparent;\n  }\n  .p-splitbutton.p-button-info.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-info.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(59, 130, 246, 0.04);\n    border-color: transparent;\n    color: #3B82F6;\n  }\n  .p-splitbutton.p-button-info.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-info.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(59, 130, 246, 0.16);\n    border-color: transparent;\n    color: #3B82F6;\n  }\n  .p-splitbutton.p-button-success.p-button-outlined > .p-button {\n    background-color: transparent;\n    color: #22C55E;\n    border: 1px solid;\n  }\n  .p-splitbutton.p-button-success.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(34, 197, 94, 0.04);\n    color: #22C55E;\n  }\n  .p-splitbutton.p-button-success.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(34, 197, 94, 0.16);\n    color: #22C55E;\n  }\n  .p-splitbutton.p-button-success.p-button-text > .p-button {\n    background-color: transparent;\n    color: #22C55E;\n    border-color: transparent;\n  }\n  .p-splitbutton.p-button-success.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-success.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(34, 197, 94, 0.04);\n    border-color: transparent;\n    color: #22C55E;\n  }\n  .p-splitbutton.p-button-success.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-success.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(34, 197, 94, 0.16);\n    border-color: transparent;\n    color: #22C55E;\n  }\n  .p-splitbutton.p-button-warning.p-button-outlined > .p-button {\n    background-color: transparent;\n    color: #F59E0B;\n    border: 1px solid;\n  }\n  .p-splitbutton.p-button-warning.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(245, 158, 11, 0.04);\n    color: #F59E0B;\n  }\n  .p-splitbutton.p-button-warning.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(245, 158, 11, 0.16);\n    color: #F59E0B;\n  }\n  .p-splitbutton.p-button-warning.p-button-text > .p-button {\n    background-color: transparent;\n    color: #F59E0B;\n    border-color: transparent;\n  }\n  .p-splitbutton.p-button-warning.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-warning.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(245, 158, 11, 0.04);\n    border-color: transparent;\n    color: #F59E0B;\n  }\n  .p-splitbutton.p-button-warning.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-warning.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(245, 158, 11, 0.16);\n    border-color: transparent;\n    color: #F59E0B;\n  }\n  .p-splitbutton.p-button-help.p-button-outlined > .p-button {\n    background-color: transparent;\n    color: #A855F7;\n    border: 1px solid;\n  }\n  .p-splitbutton.p-button-help.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(168, 85, 247, 0.04);\n    color: #A855F7;\n  }\n  .p-splitbutton.p-button-help.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(168, 85, 247, 0.16);\n    color: #A855F7;\n  }\n  .p-splitbutton.p-button-help.p-button-text > .p-button {\n    background-color: transparent;\n    color: #A855F7;\n    border-color: transparent;\n  }\n  .p-splitbutton.p-button-help.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-help.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(168, 85, 247, 0.04);\n    border-color: transparent;\n    color: #A855F7;\n  }\n  .p-splitbutton.p-button-help.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-help.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(168, 85, 247, 0.16);\n    border-color: transparent;\n    color: #A855F7;\n  }\n  .p-splitbutton.p-button-danger.p-button-outlined > .p-button {\n    background-color: transparent;\n    color: #EF4444;\n    border: 1px solid;\n  }\n  .p-splitbutton.p-button-danger.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(239, 68, 68, 0.04);\n    color: #EF4444;\n  }\n  .p-splitbutton.p-button-danger.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(239, 68, 68, 0.16);\n    color: #EF4444;\n  }\n  .p-splitbutton.p-button-danger.p-button-text > .p-button {\n    background-color: transparent;\n    color: #EF4444;\n    border-color: transparent;\n  }\n  .p-splitbutton.p-button-danger.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-danger.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgba(239, 68, 68, 0.04);\n    border-color: transparent;\n    color: #EF4444;\n  }\n  .p-splitbutton.p-button-danger.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-danger.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {\n    background: rgba(239, 68, 68, 0.16);\n    border-color: transparent;\n    color: #EF4444;\n  }\n  .p-speeddial-button.p-button.p-button-icon-only {\n    width: 4rem;\n    height: 4rem;\n  }\n  .p-speeddial-button.p-button.p-button-icon-only .p-button-icon {\n    font-size: 1.3rem;\n  }\n  .p-speeddial-button.p-button.p-button-icon-only .p-button-icon.p-icon {\n    width: 1.3rem;\n    height: 1.3rem;\n  }\n  .p-speeddial-action {\n    width: 3rem;\n    height: 3rem;\n    background: #495057;\n    color: #fff;\n  }\n  .p-speeddial-action:hover {\n    background: #022354;\n    color: #fff;\n  }\n  .p-speeddial-direction-up .p-speeddial-item {\n    margin: 0.25rem;\n  }\n  .p-speeddial-direction-up .p-speeddial-item:first-child {\n    margin-bottom: 0.5rem;\n  }\n  .p-speeddial-direction-down .p-speeddial-item {\n    margin: 0.25rem;\n  }\n  .p-speeddial-direction-down .p-speeddial-item:first-child {\n    margin-top: 0.5rem;\n  }\n  .p-speeddial-direction-left .p-speeddial-item {\n    margin: 0 0.25rem;\n  }\n  .p-speeddial-direction-left .p-speeddial-item:first-child {\n    margin-right: 0.5rem;\n  }\n  .p-speeddial-direction-right .p-speeddial-item {\n    margin: 0 0.25rem;\n  }\n  .p-speeddial-direction-right .p-speeddial-item:first-child {\n    margin-left: 0.5rem;\n  }\n  .p-speeddial-circle .p-speeddial-item,\n  .p-speeddial-semi-circle .p-speeddial-item,\n  .p-speeddial-quarter-circle .p-speeddial-item {\n    margin: 0;\n  }\n  .p-speeddial-circle .p-speeddial-item:first-child, .p-speeddial-circle .p-speeddial-item:last-child,\n  .p-speeddial-semi-circle .p-speeddial-item:first-child,\n  .p-speeddial-semi-circle .p-speeddial-item:last-child,\n  .p-speeddial-quarter-circle .p-speeddial-item:first-child,\n  .p-speeddial-quarter-circle .p-speeddial-item:last-child {\n    margin: 0;\n  }\n  .p-speeddial-mask {\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n  .p-carousel .p-carousel-content .p-carousel-prev,\n  .p-carousel .p-carousel-content .p-carousel-next {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    margin: 0.5rem;\n  }\n  .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,\n  .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-carousel .p-carousel-content .p-carousel-prev:focus-visible,\n  .p-carousel .p-carousel-content .p-carousel-next:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-carousel .p-carousel-indicators {\n    padding: 1rem;\n  }\n  .p-carousel .p-carousel-indicators .p-carousel-indicator {\n    margin-right: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n  .p-carousel .p-carousel-indicators .p-carousel-indicator button {\n    background-color: #ced4da;\n    width: 2rem;\n    height: 0.5rem;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    border-radius: 0;\n  }\n  .p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {\n    background: #adb5bd;\n  }\n  .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-datatable .p-paginator-top {\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n  }\n  .p-datatable .p-paginator-bottom {\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n  }\n  .p-datatable .p-datatable-header {\n    background: #f8f9fa;\n    color: #343a40;\n    border: 1px solid #dee2e6;\n    border-width: 1px 0 1px 0;\n    padding: 1rem 1rem;\n    font-weight: 700;\n  }\n  .p-datatable .p-datatable-footer {\n    background: #f8f9fa;\n    color: #343a40;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 1px 0;\n    padding: 1rem 1rem;\n    font-weight: 700;\n  }\n  .p-datatable .p-datatable-thead > tr > th {\n    text-align: left;\n    padding: 1rem 1rem;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 1px 0;\n    font-weight: 700;\n    color: #343a40;\n    background: #f8f9fa;\n    transition: box-shadow 0.2s;\n  }\n  .p-datatable .p-datatable-tfoot > tr > td {\n    text-align: left;\n    padding: 1rem 1rem;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 1px 0;\n    font-weight: 700;\n    color: #343a40;\n    background: #f8f9fa;\n  }\n  .p-datatable .p-sortable-column .p-sortable-column-icon {\n    color: #343a40;\n    margin-left: 0.5rem;\n  }\n  .p-datatable .p-sortable-column .p-sortable-column-badge {\n    border-radius: 50%;\n    height: 1.143rem;\n    min-width: 1.143rem;\n    line-height: 1.143rem;\n    color: #4338CA;\n    background: #EEF2FF;\n    margin-left: 0.5rem;\n  }\n  .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover {\n    background: #e9ecef;\n    color: #343a40;\n  }\n  .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover .p-sortable-column-icon {\n    color: #343a40;\n  }\n  .p-datatable .p-sortable-column.p-highlight {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {\n    color: #4338CA;\n  }\n  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover .p-sortable-column-icon {\n    color: #4338CA;\n  }\n  .p-datatable .p-sortable-column:focus-visible {\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n    outline: 0 none;\n  }\n  .p-datatable .p-datatable-tbody > tr {\n    background: #ffffff;\n    color: #495057;\n    transition: box-shadow 0.2s;\n  }\n  .p-datatable .p-datatable-tbody > tr > td {\n    text-align: left;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 1px 0;\n    padding: 1rem 1rem;\n  }\n  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler,\n  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,\n  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,\n  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:enabled:hover,\n  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:enabled:hover,\n  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:enabled:hover,\n  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus-visible,\n  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:focus-visible,\n  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:focus-visible,\n  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {\n    margin-right: 0.5rem;\n  }\n  .p-datatable .p-datatable-tbody > tr > td > .p-column-title {\n    font-weight: 700;\n  }\n  .p-datatable .p-datatable-tbody > tr > td.p-highlight {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-datatable .p-datatable-tbody > tr.p-highlight {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {\n    box-shadow: inset 0 2px 0 0 #EEF2FF;\n  }\n  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {\n    box-shadow: inset 0 -2px 0 0 #EEF2FF;\n  }\n  .p-datatable.p-datatable-selectable .p-datatable-tbody > tr.p-selectable-row:not(.p-highlight):not(.p-datatable-emptymessage):hover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .p-datatable.p-datatable-selectable .p-datatable-tbody > tr.p-selectable-row:focus-visible {\n    outline: 0.15rem solid #C7D2FE;\n    outline-offset: -0.15rem;\n  }\n  .p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight):hover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:focus-visible {\n    outline: 0.15rem solid #C7D2FE;\n    outline-offset: -0.15rem;\n  }\n  .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .p-datatable .p-column-resizer-helper {\n    background: #6366F1;\n  }\n  .p-datatable .p-datatable-scrollable-header,\n  .p-datatable .p-datatable-scrollable-footer {\n    background: #f8f9fa;\n  }\n  .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,\n  .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot, .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-thead,\n  .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {\n    background-color: #f8f9fa;\n  }\n  .p-datatable .p-datatable-loading-icon {\n    font-size: 2rem;\n  }\n  .p-datatable .p-datatable-loading-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-header {\n    border-width: 1px 1px 0 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-footer {\n    border-width: 0 1px 1px 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-paginator-top {\n    border-width: 0 1px 0 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-paginator-bottom {\n    border-width: 0 1px 1px 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {\n    border-width: 1px 0 1px 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {\n    border-width: 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td {\n    border-width: 1px 0 0 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {\n    border-width: 1px 1px 0 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {\n    border-width: 1px 0 1px 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {\n    border-width: 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td {\n    border-width: 1px 0 1px 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {\n    border-width: 1px 1px 1px 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {\n    border-width: 0 0 1px 1px;\n  }\n  .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {\n    border-width: 0 1px 1px 1px;\n  }\n  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {\n    border-width: 0 0 1px 1px;\n  }\n  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {\n    border-width: 0 1px 1px 1px;\n  }\n  .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {\n    border-width: 0 0 0 1px;\n  }\n  .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {\n    border-width: 0 1px 0 1px;\n  }\n  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {\n    background: #fcfcfc;\n  }\n  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler {\n    color: #4338CA;\n  }\n  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler:hover {\n    color: #4338CA;\n  }\n  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd + .p-row-expanded {\n    background: #fcfcfc;\n  }\n  .p-datatable.p-datatable-sm .p-datatable-header {\n    padding: 0.5rem 0.5rem;\n  }\n  .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {\n    padding: 0.5rem 0.5rem;\n  }\n  .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {\n    padding: 0.5rem 0.5rem;\n  }\n  .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {\n    padding: 0.5rem 0.5rem;\n  }\n  .p-datatable.p-datatable-sm .p-datatable-footer {\n    padding: 0.5rem 0.5rem;\n  }\n  .p-datatable.p-datatable-lg .p-datatable-header {\n    padding: 1.25rem 1.25rem;\n  }\n  .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {\n    padding: 1.25rem 1.25rem;\n  }\n  .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {\n    padding: 1.25rem 1.25rem;\n  }\n  .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {\n    padding: 1.25rem 1.25rem;\n  }\n  .p-datatable.p-datatable-lg .p-datatable-footer {\n    padding: 1.25rem 1.25rem;\n  }\n  .p-datatable-drag-selection-helper {\n    background: rgba(99, 102, 241, 0.16);\n  }\n  .p-dataview .p-paginator-top {\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n  }\n  .p-dataview .p-paginator-bottom {\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n  }\n  .p-dataview .p-dataview-header {\n    background: #f8f9fa;\n    color: #343a40;\n    border: 1px solid #dee2e6;\n    border-width: 1px 0 1px 0;\n    padding: 1rem 1rem;\n    font-weight: 700;\n  }\n  .p-dataview .p-dataview-content {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    padding: 0;\n  }\n  .p-dataview.p-dataview-list .p-dataview-content > .p-grid > div {\n    border: solid #dee2e6;\n    border-width: 0 0 1px 0;\n  }\n  .p-dataview .p-dataview-footer {\n    background: #f8f9fa;\n    color: #343a40;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 1px 0;\n    padding: 1rem 1rem;\n    font-weight: 700;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n  .p-dataview .p-dataview-loading-icon {\n    font-size: 2rem;\n  }\n  .p-dataview .p-dataview-loading-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n  .p-datascroller .p-paginator-top {\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n  }\n  .p-datascroller .p-paginator-bottom {\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n  }\n  .p-datascroller .p-datascroller-header {\n    background: #f8f9fa;\n    color: #343a40;\n    border: 1px solid #dee2e6;\n    border-width: 1px 0 1px 0;\n    padding: 1rem 1rem;\n    font-weight: 700;\n  }\n  .p-datascroller .p-datascroller-content {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    padding: 0;\n  }\n  .p-datascroller.p-datascroller-inline .p-datascroller-list > li {\n    border: solid #dee2e6;\n    border-width: 0 0 1px 0;\n  }\n  .p-datascroller .p-datascroller-footer {\n    background: #f8f9fa;\n    color: #343a40;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 1px 0;\n    padding: 1rem 1rem;\n    font-weight: 700;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n  .p-column-filter-row .p-column-filter-menu-button,\n  .p-column-filter-row .p-column-filter-clear-button {\n    margin-left: 0.5rem;\n  }\n  .p-column-filter-menu-button {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-column-filter-menu-button:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-column-filter-menu-button.p-column-filter-menu-button-open, .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {\n    background: #e9ecef;\n    color: #343a40;\n  }\n  .p-column-filter-menu-button.p-column-filter-menu-button-active, .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-column-filter-menu-button:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-column-filter-clear-button {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-column-filter-clear-button:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-column-filter-clear-button:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-column-filter-overlay {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    border-radius: 6px;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n    min-width: 12.5rem;\n  }\n  .p-column-filter-overlay .p-column-filter-row-items {\n    padding: 0.75rem 0;\n  }\n  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    border: 0 none;\n    color: #495057;\n    background: transparent;\n    transition: box-shadow 0.2s;\n    border-radius: 0;\n  }\n  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {\n    color: #495057;\n    background: #e9ecef;\n  }\n  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator {\n    border-top: 1px solid #dee2e6;\n    margin: 0.25rem 0;\n  }\n  .p-column-filter-overlay-menu .p-column-filter-operator {\n    padding: 0.75rem 1.25rem;\n    border-bottom: 1px solid #dee2e6;\n    color: #343a40;\n    background: #f8f9fa;\n    margin: 0;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-column-filter-overlay-menu .p-column-filter-constraint {\n    padding: 1.25rem;\n    border-bottom: 1px solid #dee2e6;\n  }\n  .p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-matchmode-dropdown {\n    margin-bottom: 0.5rem;\n  }\n  .p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-remove-button {\n    margin-top: 0.5rem;\n  }\n  .p-column-filter-overlay-menu .p-column-filter-constraint:last-child {\n    border-bottom: 0 none;\n  }\n  .p-column-filter-overlay-menu .p-column-filter-add-rule {\n    padding: 0.75rem 1.25rem;\n  }\n  .p-column-filter-overlay-menu .p-column-filter-buttonbar {\n    padding: 1.25rem;\n  }\n  .fc {\n    /* FullCalendar 4 */\n    /* FullCalendar 5 */\n  }\n  .fc.fc-unthemed .fc-view-container th {\n    background: #f8f9fa;\n    border: 1px solid #dee2e6;\n    color: #343a40;\n  }\n  .fc.fc-unthemed .fc-view-container td.fc-widget-content {\n    border: 1px solid #dee2e6;\n    color: #495057;\n  }\n  .fc.fc-unthemed .fc-view-container td.fc-head-container {\n    border: 1px solid #dee2e6;\n  }\n  .fc.fc-unthemed .fc-view-container .fc-view {\n    background: #ffffff;\n  }\n  .fc.fc-unthemed .fc-view-container .fc-row {\n    border-right: 1px solid #dee2e6;\n  }\n  .fc.fc-unthemed .fc-view-container .fc-event {\n    background: #4F46E5;\n    border: 1px solid #4F46E5;\n    color: #ffffff;\n  }\n  .fc.fc-unthemed .fc-view-container .fc-divider {\n    background: #f8f9fa;\n    border: 1px solid #dee2e6;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button {\n    color: #ffffff;\n    background: #6366F1;\n    border: 1px solid #6366F1;\n    font-size: 1rem;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button:enabled:hover {\n    background: #4F46E5;\n    color: #ffffff;\n    border-color: #4F46E5;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active {\n    background: #4338CA;\n    color: #ffffff;\n    border-color: #4338CA;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left {\n    font-family: \"PrimeIcons\" !important;\n    text-indent: 0;\n    font-size: 1rem;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left:before {\n    content: \"\\e900\";\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right {\n    font-family: \"PrimeIcons\" !important;\n    text-indent: 0;\n    font-size: 1rem;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right:before {\n    content: \"\\e901\";\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button {\n    background: #ffffff;\n    border: 1px solid #ced4da;\n    color: #495057;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button:hover {\n    background: #e9ecef;\n    border-color: #ced4da;\n    color: #495057;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active {\n    background: #6366F1;\n    border-color: #6366F1;\n    color: #ffffff;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active:hover {\n    background: #4F46E5;\n    border-color: #4F46E5;\n    color: #ffffff;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button:focus, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button:focus, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    z-index: 1;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button {\n    border-radius: 0;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:first-child {\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:last-child {\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-scrollgrid {\n    border-color: #dee2e6;\n  }\n  .fc.fc-theme-standard .fc-view-harness th {\n    background: #f8f9fa;\n    border-color: #dee2e6;\n    color: #343a40;\n  }\n  .fc.fc-theme-standard .fc-view-harness td {\n    color: #495057;\n    border-color: #dee2e6;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-view {\n    background: #ffffff;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-popover {\n    background: none;\n    border: 0 none;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header {\n    border: 1px solid #dee2e6;\n    padding: 1.25rem;\n    background: #f8f9fa;\n    color: #343a40;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close {\n    opacity: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    font-family: \"PrimeIcons\" !important;\n    font-size: 1rem;\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:before {\n    content: \"\\e90b\";\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-body {\n    padding: 1.25rem;\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    color: #495057;\n    border-top: 0 none;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-block-event {\n    color: #ffffff;\n    background: #4F46E5;\n    border-color: #4F46E5;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-block-event .fc-event-main {\n    color: #ffffff;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-dot-event .fc-daygrid-event-dot {\n    background: #4F46E5;\n    border-color: #4F46E5;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-dot-event:hover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .fc.fc-theme-standard .fc-view-harness .fc-cell-shaded {\n    background: #f8f9fa;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button {\n    color: #ffffff;\n    background: #6366F1;\n    border: 1px solid #6366F1;\n    font-size: 1rem;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n    border-radius: 6px;\n    line-height: 1;\n    min-height: 2.07rem;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {\n    background: #4F46E5;\n    color: #ffffff;\n    border-color: #4F46E5;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active {\n    background: #4338CA;\n    color: #ffffff;\n    border-color: #4338CA;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button:disabled {\n    opacity: 0.6;\n    color: #ffffff;\n    background: #6366F1;\n    border: 1px solid #6366F1;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-left {\n    font-family: \"PrimeIcons\" !important;\n    text-indent: 0;\n    font-size: 1rem;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-left:before {\n    content: \"\\e900\";\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-right {\n    font-family: \"PrimeIcons\" !important;\n    text-indent: 0;\n    font-size: 1rem;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-right:before {\n    content: \"\\e901\";\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button {\n    background: #ffffff;\n    border: 1px solid #ced4da;\n    color: #495057;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button:hover {\n    background: #e9ecef;\n    border-color: #ced4da;\n    color: #495057;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active {\n    background: #6366F1;\n    border-color: #6366F1;\n    color: #ffffff;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active:hover {\n    background: #4F46E5;\n    border-color: #4F46E5;\n    color: #ffffff;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button:not(:disabled):focus, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button:not(:disabled):focus, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button:not(:disabled):focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n    z-index: 1;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button {\n    border-radius: 0;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button:first-child {\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button:last-child {\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n  .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-icon {\n    vertical-align: unset;\n  }\n  .fc.fc-theme-standard .fc-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-orderlist .p-orderlist-controls {\n    padding: 1.25rem;\n  }\n  .p-orderlist .p-orderlist-controls .p-button {\n    margin-bottom: 0.5rem;\n  }\n  .p-orderlist .p-orderlist-header {\n    background: #f8f9fa;\n    color: #343a40;\n    border: 1px solid #dee2e6;\n    padding: 1.25rem;\n    font-weight: 700;\n    border-bottom: 0 none;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-orderlist .p-orderlist-filter-container {\n    padding: 1.25rem;\n    background: #ffffff;\n    border: 1px solid #dee2e6;\n    border-bottom: 0 none;\n  }\n  .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-input {\n    padding-right: 1.75rem;\n  }\n  .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-icon {\n    right: 0.75rem;\n    color: #6c757d;\n  }\n  .p-orderlist .p-orderlist-list {\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    color: #495057;\n    padding: 0.75rem 0;\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-orderlist .p-orderlist-list .p-orderlist-item {\n    padding: 0.75rem 1.25rem;\n    margin: 0;\n    border: 0 none;\n    color: #495057;\n    background: transparent;\n    transition: transform 0.2s, box-shadow 0.2s;\n  }\n  .p-orderlist .p-orderlist-list .p-orderlist-item:not(.p-highlight):hover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .p-orderlist .p-orderlist-list .p-orderlist-item:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even) {\n    background: #fcfcfc;\n  }\n  .p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even):hover {\n    background: #e9ecef;\n  }\n  .p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .p-organizationchart .p-organizationchart-node-content.p-highlight {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-organizationchart .p-organizationchart-node-content.p-highlight .p-node-toggler i {\n    color: #6f91ff;\n  }\n  .p-organizationchart .p-organizationchart-line-down {\n    background: #dee2e6;\n  }\n  .p-organizationchart .p-organizationchart-line-left {\n    border-right: 1px solid #dee2e6;\n    border-color: #dee2e6;\n  }\n  .p-organizationchart .p-organizationchart-line-top {\n    border-top: 1px solid #dee2e6;\n    border-color: #dee2e6;\n  }\n  .p-organizationchart .p-organizationchart-node-content {\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    color: #495057;\n    padding: 1.25rem;\n  }\n  .p-organizationchart .p-organizationchart-node-content .p-node-toggler {\n    background: inherit;\n    color: inherit;\n    border-radius: 50%;\n  }\n  .p-organizationchart .p-organizationchart-node-content .p-node-toggler:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-paginator {\n    background: #ffffff;\n    color: #6c757d;\n    border: solid #e9ecef;\n    border-width: 0;\n    padding: 0.5rem 1rem;\n    border-radius: 6px;\n  }\n  .p-paginator .p-paginator-first,\n  .p-paginator .p-paginator-prev,\n  .p-paginator .p-paginator-next,\n  .p-paginator .p-paginator-last {\n    background-color: transparent;\n    border: 0 none;\n    color: #6c757d;\n    min-width: 3rem;\n    height: 3rem;\n    margin: 0.143rem;\n    transition: box-shadow 0.2s;\n    border-radius: 50%;\n  }\n  .p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,\n  .p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,\n  .p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,\n  .p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {\n    background: #e9ecef;\n    border-color: transparent;\n    color: #343a40;\n  }\n  .p-paginator .p-paginator-first {\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n  }\n  .p-paginator .p-paginator-last {\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n  }\n  .p-paginator .p-dropdown {\n    margin-left: 0.5rem;\n    height: 3rem;\n  }\n  .p-paginator .p-dropdown .p-dropdown-label {\n    padding-right: 0;\n  }\n  .p-paginator .p-paginator-page-input {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n  .p-paginator .p-paginator-page-input .p-inputtext {\n    max-width: 3rem;\n  }\n  .p-paginator .p-paginator-current {\n    background-color: transparent;\n    border: 0 none;\n    color: #6c757d;\n    min-width: 3rem;\n    height: 3rem;\n    margin: 0.143rem;\n    padding: 0 0.5rem;\n  }\n  .p-paginator .p-paginator-pages .p-paginator-page {\n    background-color: transparent;\n    border: 0 none;\n    color: #6c757d;\n    min-width: 3rem;\n    height: 3rem;\n    margin: 0.143rem;\n    transition: box-shadow 0.2s;\n    border-radius: 50%;\n  }\n  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {\n    background: #EEF2FF;\n    border-color: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {\n    background: #e9ecef;\n    border-color: transparent;\n    color: #343a40;\n  }\n  .p-picklist .p-picklist-buttons {\n    padding: 1.25rem;\n  }\n  .p-picklist .p-picklist-buttons .p-button {\n    margin-bottom: 0.5rem;\n  }\n  .p-picklist .p-picklist-header {\n    background: #f8f9fa;\n    color: #343a40;\n    border: 1px solid #dee2e6;\n    padding: 1.25rem;\n    font-weight: 700;\n    border-bottom: 0 none;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-picklist .p-picklist-filter-container {\n    padding: 1.25rem;\n    background: #ffffff;\n    border: 1px solid #dee2e6;\n    border-bottom: 0 none;\n  }\n  .p-picklist .p-picklist-filter-container .p-picklist-filter-input {\n    padding-right: 1.75rem;\n  }\n  .p-picklist .p-picklist-filter-container .p-picklist-filter-icon {\n    right: 0.75rem;\n    color: #6c757d;\n  }\n  .p-picklist .p-picklist-list {\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    color: #495057;\n    padding: 0.75rem 0;\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-picklist .p-picklist-list .p-picklist-item {\n    padding: 0.75rem 1.25rem;\n    margin: 0;\n    border: 0 none;\n    color: #495057;\n    background: transparent;\n    transition: transform 0.2s, box-shadow 0.2s;\n  }\n  .p-picklist .p-picklist-list .p-picklist-item:not(.p-highlight):hover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .p-picklist .p-picklist-list .p-picklist-item:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-picklist .p-picklist-list .p-picklist-item.p-highlight {\n    color: #4338CA;\n    background: #EEF2FF;\n  }\n  .p-tree {\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    color: #495057;\n    padding: 1.25rem;\n    border-radius: 6px;\n  }\n  .p-tree .p-tree-container .p-treenode {\n    padding: 0.143rem;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content {\n    border-radius: 6px;\n    transition: box-shadow 0.2s;\n    padding: 0.5rem;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {\n    margin-right: 0.5rem;\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon {\n    margin-right: 0.5rem;\n    color: #6c757d;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox {\n    margin-right: 0.5rem;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox .p-indeterminate .p-checkbox-icon {\n    color: #495057;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler,\n  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon {\n    color: #4338CA;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:hover,\n  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon:hover {\n    color: #4338CA;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-dragover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .p-tree .p-tree-filter-container {\n    margin-bottom: 0.5rem;\n  }\n  .p-tree .p-tree-filter-container .p-tree-filter {\n    width: 100%;\n    padding-right: 1.75rem;\n  }\n  .p-tree .p-tree-filter-container .p-tree-filter-icon {\n    right: 0.75rem;\n    color: #6c757d;\n  }\n  .p-tree .p-treenode-children {\n    padding: 0 0 0 1rem;\n  }\n  .p-tree .p-tree-loading-icon {\n    font-size: 2rem;\n  }\n  .p-tree .p-tree-loading-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n  .p-tree .p-treenode-droppoint {\n    height: 0.5rem;\n  }\n  .p-tree .p-treenode-droppoint.p-treenode-droppoint-active {\n    background: #8ba7ff;\n  }\n  .p-treetable .p-paginator-top {\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n  }\n  .p-treetable .p-paginator-bottom {\n    border-width: 0 0 1px 0;\n    border-radius: 0;\n  }\n  .p-treetable .p-treetable-header {\n    background: #f8f9fa;\n    color: #343a40;\n    border: 1px solid #dee2e6;\n    border-width: 1px 0 1px 0;\n    padding: 1rem 1rem;\n    font-weight: 700;\n  }\n  .p-treetable .p-treetable-footer {\n    background: #f8f9fa;\n    color: #343a40;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 1px 0;\n    padding: 1rem 1rem;\n    font-weight: 700;\n  }\n  .p-treetable .p-treetable-thead > tr > th {\n    text-align: left;\n    padding: 1rem 1rem;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 1px 0;\n    font-weight: 700;\n    color: #343a40;\n    background: #f8f9fa;\n    transition: box-shadow 0.2s;\n  }\n  .p-treetable .p-treetable-tfoot > tr > td {\n    text-align: left;\n    padding: 1rem 1rem;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 1px 0;\n    font-weight: 700;\n    color: #343a40;\n    background: #f8f9fa;\n  }\n  .p-treetable .p-sortable-column {\n    outline-color: #C7D2FE;\n  }\n  .p-treetable .p-sortable-column .p-sortable-column-icon {\n    color: #343a40;\n    margin-left: 0.5rem;\n  }\n  .p-treetable .p-sortable-column .p-sortable-column-badge {\n    border-radius: 50%;\n    height: 1.143rem;\n    min-width: 1.143rem;\n    line-height: 1.143rem;\n    color: #4338CA;\n    background: #EEF2FF;\n    margin-left: 0.5rem;\n  }\n  .p-treetable .p-sortable-column:not(.p-highlight):hover {\n    background: #e9ecef;\n    color: #343a40;\n  }\n  .p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {\n    color: #343a40;\n  }\n  .p-treetable .p-sortable-column.p-highlight {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {\n    color: #4338CA;\n  }\n  .p-treetable .p-treetable-tbody > tr {\n    background: #ffffff;\n    color: #495057;\n    transition: box-shadow 0.2s;\n  }\n  .p-treetable .p-treetable-tbody > tr > td {\n    text-align: left;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 1px 0;\n    padding: 1rem 1rem;\n  }\n  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    margin-right: 0.5rem;\n  }\n  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox {\n    margin-right: 0.5rem;\n  }\n  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox .p-indeterminate .p-checkbox-icon {\n    color: #495057;\n  }\n  .p-treetable .p-treetable-tbody > tr:focus-visible {\n    outline: 0.15rem solid #C7D2FE;\n    outline-offset: -0.15rem;\n  }\n  .p-treetable .p-treetable-tbody > tr.p-highlight {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler {\n    color: #4338CA;\n  }\n  .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {\n    color: #4338CA;\n  }\n  .p-treetable.p-treetable-selectable .p-treetable-tbody > tr:not(.p-highlight):hover, .p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .p-treetable.p-treetable-selectable .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler, .p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {\n    color: #495057;\n  }\n  .p-treetable .p-column-resizer-helper {\n    background: #6366F1;\n  }\n  .p-treetable .p-treetable-scrollable-header,\n  .p-treetable .p-treetable-scrollable-footer {\n    background: #f8f9fa;\n  }\n  .p-treetable .p-treetable-loading-icon {\n    font-size: 2rem;\n  }\n  .p-treetable .p-treetable-loading-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n  .p-treetable.p-treetable-gridlines .p-treetable-header {\n    border-width: 1px 1px 0 1px;\n  }\n  .p-treetable.p-treetable-gridlines .p-treetable-footer {\n    border-width: 0 1px 1px 1px;\n  }\n  .p-treetable.p-treetable-gridlines .p-treetable-top {\n    border-width: 0 1px 0 1px;\n  }\n  .p-treetable.p-treetable-gridlines .p-treetable-bottom {\n    border-width: 0 1px 1px 1px;\n  }\n  .p-treetable.p-treetable-gridlines .p-treetable-thead > tr > th {\n    border-width: 1px;\n  }\n  .p-treetable.p-treetable-gridlines .p-treetable-tbody > tr > td {\n    border-width: 1px;\n  }\n  .p-treetable.p-treetable-gridlines .p-treetable-tfoot > tr > td {\n    border-width: 1px;\n  }\n  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd {\n    background: #fcfcfc;\n  }\n  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight .p-row-toggler {\n    color: #4338CA;\n  }\n  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight .p-row-toggler:hover {\n    color: #4338CA;\n  }\n  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd + .p-row-expanded {\n    background: #fcfcfc;\n  }\n  .p-treetable.p-treetable-sm .p-treetable-header {\n    padding: 0.875rem 0.875rem;\n  }\n  .p-treetable.p-treetable-sm .p-treetable-thead > tr > th {\n    padding: 0.5rem 0.5rem;\n  }\n  .p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {\n    padding: 0.5rem 0.5rem;\n  }\n  .p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {\n    padding: 0.5rem 0.5rem;\n  }\n  .p-treetable.p-treetable-sm .p-treetable-footer {\n    padding: 0.5rem 0.5rem;\n  }\n  .p-treetable.p-treetable-lg .p-treetable-header {\n    padding: 1.25rem 1.25rem;\n  }\n  .p-treetable.p-treetable-lg .p-treetable-thead > tr > th {\n    padding: 1.25rem 1.25rem;\n  }\n  .p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {\n    padding: 1.25rem 1.25rem;\n  }\n  .p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {\n    padding: 1.25rem 1.25rem;\n  }\n  .p-treetable.p-treetable-lg .p-treetable-footer {\n    padding: 1.25rem 1.25rem;\n  }\n  .p-timeline .p-timeline-event-marker {\n    border: 2px solid #6366F1;\n    border-radius: 50%;\n    width: 1rem;\n    height: 1rem;\n    background-color: #ffffff;\n  }\n  .p-timeline .p-timeline-event-connector {\n    background-color: #dee2e6;\n  }\n  .p-timeline.p-timeline-vertical .p-timeline-event-opposite,\n  .p-timeline.p-timeline-vertical .p-timeline-event-content {\n    padding: 0 1rem;\n  }\n  .p-timeline.p-timeline-vertical .p-timeline-event-connector {\n    width: 2px;\n  }\n  .p-timeline.p-timeline-horizontal .p-timeline-event-opposite,\n  .p-timeline.p-timeline-horizontal .p-timeline-event-content {\n    padding: 1rem 0;\n  }\n  .p-timeline.p-timeline-horizontal .p-timeline-event-connector {\n    height: 2px;\n  }\n  .p-accordion .p-accordion-header .p-accordion-header-link {\n    padding: 1.25rem;\n    border: 1px solid #dee2e6;\n    color: #6c757d;\n    background: #f8f9fa;\n    font-weight: 700;\n    border-radius: 6px;\n    transition: box-shadow 0.2s;\n  }\n  .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {\n    margin-right: 0.5rem;\n  }\n  .p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {\n    background: #e9ecef;\n    border-color: #dee2e6;\n    color: #343a40;\n  }\n  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {\n    background: #f8f9fa;\n    border-color: #dee2e6;\n    color: #343a40;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {\n    border-color: #dee2e6;\n    background: #e9ecef;\n    color: #343a40;\n  }\n  .p-accordion .p-accordion-content {\n    padding: 1.25rem;\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    color: #495057;\n    border-top: 0;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-accordion .p-accordion-tab {\n    margin-bottom: 4px;\n  }\n  .p-card {\n    background: #ffffff;\n    color: #495057;\n    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n    border-radius: 6px;\n  }\n  .p-card .p-card-body {\n    padding: 1.25rem;\n  }\n  .p-card .p-card-title {\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin-bottom: 0.5rem;\n  }\n  .p-card .p-card-subtitle {\n    font-weight: 400;\n    margin-bottom: 0.5rem;\n    color: #6c757d;\n  }\n  .p-card .p-card-content {\n    padding: 1.25rem 0;\n  }\n  .p-card .p-card-footer {\n    padding: 1.25rem 0 0 0;\n  }\n  .p-fieldset {\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    color: #495057;\n    border-radius: 6px;\n  }\n  .p-fieldset .p-fieldset-legend {\n    padding: 1.25rem;\n    border: 1px solid #dee2e6;\n    color: #343a40;\n    background: #f8f9fa;\n    font-weight: 700;\n    border-radius: 6px;\n  }\n  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {\n    padding: 0;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {\n    padding: 1.25rem;\n    color: #343a40;\n    border-radius: 6px;\n    transition: box-shadow 0.2s;\n  }\n  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {\n    margin-right: 0.5rem;\n  }\n  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {\n    background: #e9ecef;\n    border-color: #dee2e6;\n    color: #343a40;\n  }\n  .p-fieldset .p-fieldset-content {\n    padding: 1.25rem;\n  }\n  .p-divider .p-divider-content {\n    background-color: #ffffff;\n  }\n  .p-divider.p-divider-horizontal {\n    margin: 1.25rem 0;\n    padding: 0 1.25rem;\n  }\n  .p-divider.p-divider-horizontal:before {\n    border-top: 1px #dee2e6;\n  }\n  .p-divider.p-divider-horizontal .p-divider-content {\n    padding: 0 0.5rem;\n  }\n  .p-divider.p-divider-vertical {\n    margin: 0 1.25rem;\n    padding: 1.25rem 0;\n  }\n  .p-divider.p-divider-vertical:before {\n    border-left: 1px #dee2e6;\n  }\n  .p-divider.p-divider-vertical .p-divider-content {\n    padding: 0.5rem 0;\n  }\n  .p-panel .p-panel-header {\n    border: 1px solid #dee2e6;\n    padding: 1.25rem;\n    background: #f8f9fa;\n    color: #343a40;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-panel .p-panel-header .p-panel-title {\n    font-weight: 700;\n  }\n  .p-panel .p-panel-header .p-panel-header-icon {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-panel .p-panel-header .p-panel-header-icon:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-panel.p-panel-toggleable .p-panel-header {\n    padding: 0.75rem 1.25rem;\n  }\n  .p-panel .p-panel-content {\n    padding: 1.25rem;\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    color: #495057;\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n    border-top: 0 none;\n  }\n  .p-panel .p-panel-footer {\n    padding: 0.75rem 1.25rem;\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    color: #495057;\n    border-top: 0 none;\n  }\n  .p-splitter {\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    border-radius: 6px;\n    color: #495057;\n  }\n  .p-splitter .p-splitter-gutter {\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    background: #f8f9fa;\n  }\n  .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {\n    background: #dee2e6;\n  }\n  .p-splitter .p-splitter-gutter-resizing {\n    background: #dee2e6;\n  }\n  .p-scrollpanel .p-scrollpanel-bar {\n    background: #f8f9fa;\n    border: 0 none;\n  }\n  .p-tabview .p-tabview-nav {\n    background: #ffffff;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 2px 0;\n  }\n  .p-tabview .p-tabview-nav li {\n    margin-right: 0;\n  }\n  .p-tabview .p-tabview-nav li .p-tabview-nav-link {\n    border: solid #dee2e6;\n    border-width: 0 0 2px 0;\n    border-color: transparent transparent #dee2e6 transparent;\n    background: #ffffff;\n    color: #6c757d;\n    padding: 1.25rem;\n    font-weight: 700;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n    transition: box-shadow 0.2s;\n    margin: 0 0 -2px 0;\n  }\n  .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {\n    background: #ffffff;\n    border-color: #adb5bd;\n    color: #6c757d;\n  }\n  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {\n    background: #ffffff;\n    border-color: #6366F1;\n    color: #6366F1;\n  }\n  .p-tabview .p-tabview-close {\n    margin-left: 0.5rem;\n  }\n  .p-tabview .p-tabview-nav-btn.p-link {\n    background: #ffffff;\n    color: #6366F1;\n    width: 3rem;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    border-radius: 0;\n  }\n  .p-tabview .p-tabview-nav-btn.p-link:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-tabview .p-tabview-panels {\n    background: #ffffff;\n    padding: 1.25rem;\n    border: 0 none;\n    color: #495057;\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-toolbar {\n    background: #f8f9fa;\n    border: 1px solid #dee2e6;\n    padding: 1.25rem;\n    border-radius: 6px;\n    gap: 0.5rem;\n  }\n  .p-toolbar .p-toolbar-separator {\n    margin: 0 0.5rem;\n  }\n  .p-confirm-popup {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    border-radius: 6px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  }\n  .p-confirm-popup .p-confirm-popup-content {\n    padding: 1.25rem;\n  }\n  .p-confirm-popup .p-confirm-popup-footer {\n    text-align: right;\n    padding: 0 1.25rem 1.25rem 1.25rem;\n  }\n  .p-confirm-popup .p-confirm-popup-footer button {\n    margin: 0 0.5rem 0 0;\n    width: auto;\n  }\n  .p-confirm-popup .p-confirm-popup-footer button:last-child {\n    margin: 0;\n  }\n  .p-confirm-popup:after {\n    border: solid transparent;\n    border-color: rgba(255, 255, 255, 0);\n    border-bottom-color: #ffffff;\n  }\n  .p-confirm-popup:before {\n    border: solid transparent;\n    border-color: rgba(255, 255, 255, 0);\n    border-bottom-color: #ffffff;\n  }\n  .p-confirm-popup.p-confirm-popup-flipped:after {\n    border-top-color: #ffffff;\n  }\n  .p-confirm-popup.p-confirm-popup-flipped:before {\n    border-top-color: #ffffff;\n  }\n  .p-confirm-popup .p-confirm-popup-icon {\n    font-size: 1.5rem;\n  }\n  .p-confirm-popup .p-confirm-popup-icon.p-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .p-confirm-popup .p-confirm-popup-message {\n    margin-left: 1rem;\n  }\n  .p-dialog {\n    border-radius: 6px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n    border: 0 none;\n  }\n  .p-dialog .p-dialog-header {\n    border-bottom: 0 none;\n    background: #ffffff;\n    color: #343a40;\n    padding: 1.5rem;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-dialog .p-dialog-header .p-dialog-title {\n    font-weight: 700;\n    font-size: 1.25rem;\n  }\n  .p-dialog .p-dialog-header .p-dialog-header-icon {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    margin-right: 0.5rem;\n  }\n  .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-dialog .p-dialog-header .p-dialog-header-icon:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {\n    margin-right: 0;\n  }\n  .p-dialog .p-dialog-content {\n    background: #ffffff;\n    color: #495057;\n    padding: 0 1.5rem 2rem 1.5rem;\n  }\n  .p-dialog .p-dialog-content:last-of-type {\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-dialog .p-dialog-footer {\n    border-top: 0 none;\n    background: #ffffff;\n    color: #495057;\n    padding: 0 1.5rem 1.5rem 1.5rem;\n    text-align: right;\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-dialog .p-dialog-footer button {\n    margin: 0 0.5rem 0 0;\n    width: auto;\n  }\n  .p-dialog.p-dialog-maximized .p-dialog-header, .p-dialog.p-dialog-maximized .p-dialog-content:last-of-type {\n    border-radius: 0;\n  }\n  .p-dialog.p-confirm-dialog .p-confirm-dialog-icon {\n    font-size: 2rem;\n  }\n  .p-dialog.p-confirm-dialog .p-confirm-dialog-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n  .p-dialog.p-confirm-dialog .p-confirm-dialog-message {\n    margin-left: 1rem;\n  }\n  .p-overlaypanel {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    border-radius: 6px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  }\n  .p-overlaypanel .p-overlaypanel-content {\n    padding: 1.25rem;\n  }\n  .p-overlaypanel .p-overlaypanel-close {\n    background: #6366F1;\n    color: #ffffff;\n    width: 2rem;\n    height: 2rem;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    border-radius: 50%;\n    position: absolute;\n    top: -1rem;\n    right: -1rem;\n  }\n  .p-overlaypanel .p-overlaypanel-close:enabled:hover {\n    background: #4F46E5;\n    color: #ffffff;\n  }\n  .p-overlaypanel:after {\n    border: solid transparent;\n    border-color: rgba(255, 255, 255, 0);\n    border-bottom-color: #ffffff;\n  }\n  .p-overlaypanel:before {\n    border: solid transparent;\n    border-color: rgba(255, 255, 255, 0);\n    border-bottom-color: #f2f2f2;\n  }\n  .p-overlaypanel.p-overlaypanel-flipped:after {\n    border-top-color: #ffffff;\n  }\n  .p-overlaypanel.p-overlaypanel-flipped:before {\n    border-top-color: #ffffff;\n  }\n  .p-sidebar {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  }\n  .p-sidebar .p-sidebar-header {\n    padding: 1.25rem;\n  }\n  .p-sidebar .p-sidebar-header .p-sidebar-close,\n  .p-sidebar .p-sidebar-header .p-sidebar-icon {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border: 0 none;\n    background: transparent;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,\n  .p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {\n    color: #343a40;\n    border-color: transparent;\n    background: #e9ecef;\n  }\n  .p-sidebar .p-sidebar-header .p-sidebar-close:focus-visible,\n  .p-sidebar .p-sidebar-header .p-sidebar-icon:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-sidebar .p-sidebar-header + .p-sidebar-content {\n    padding-top: 0;\n  }\n  .p-sidebar .p-sidebar-content {\n    padding: 1.25rem;\n  }\n  .p-tooltip .p-tooltip-text {\n    background: #495057;\n    color: #ffffff;\n    padding: 0.75rem 0.75rem;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 6px;\n  }\n  .p-tooltip.p-tooltip-right .p-tooltip-arrow {\n    border-right-color: #495057;\n  }\n  .p-tooltip.p-tooltip-left .p-tooltip-arrow {\n    border-left-color: #495057;\n  }\n  .p-tooltip.p-tooltip-top .p-tooltip-arrow {\n    border-top-color: #495057;\n  }\n  .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {\n    border-bottom-color: #495057;\n  }\n  .p-fileupload .p-fileupload-buttonbar {\n    background: #f8f9fa;\n    padding: 1.25rem;\n    border: 1px solid #dee2e6;\n    color: #343a40;\n    border-bottom: 0 none;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n    gap: 0.5rem;\n  }\n  .p-fileupload .p-fileupload-buttonbar .p-button {\n    margin-right: 0.5rem;\n  }\n  .p-fileupload .p-fileupload-content {\n    background: #ffffff;\n    padding: 2rem 1rem;\n    border: 1px solid #dee2e6;\n    color: #495057;\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-fileupload .p-progressbar {\n    height: 0.25rem;\n  }\n  .p-fileupload .p-fileupload-row > div {\n    padding: 1rem 1rem;\n  }\n  .p-fileupload.p-fileupload-advanced .p-message {\n    margin-top: 0;\n  }\n  .p-breadcrumb {\n    background: #ffffff;\n    border: 1px solid #dee2e6;\n    border-radius: 6px;\n    padding: 1rem;\n  }\n  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link {\n    transition: box-shadow 0.2s;\n    border-radius: 6px;\n  }\n  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {\n    margin: 0 0.5rem 0 0.5rem;\n    color: #495057;\n  }\n  .p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-text {\n    color: #495057;\n  }\n  .p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-contextmenu {\n    padding: 0.25rem 0;\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 6px;\n    width: 12.5rem;\n  }\n  .p-contextmenu .p-menuitem-link {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    border-radius: 0;\n    transition: box-shadow 0.2s;\n    user-select: none;\n  }\n  .p-contextmenu .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-contextmenu .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-contextmenu .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-contextmenu .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-contextmenu .p-submenu-list {\n    padding: 0.25rem 0;\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 6px;\n  }\n  .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {\n    background: #EEF2FF;\n  }\n  .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {\n    color: #4338CA;\n  }\n  .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {\n    color: #4338CA;\n  }\n  .p-contextmenu .p-menu-separator {\n    border-top: 1px solid #dee2e6;\n    margin: 0.25rem 0;\n  }\n  .p-contextmenu .p-submenu-icon {\n    font-size: 0.875rem;\n    transition: transform 0.2s;\n  }\n  .p-contextmenu .p-submenu-icon.p-icon {\n    width: 0.875rem;\n    height: 0.875rem;\n  }\n  .p-dock .p-dock-list {\n    background: rgba(255, 255, 255, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    padding: 0.5rem 0.5rem;\n    border-radius: 0.5rem;\n  }\n  .p-dock .p-dock-item {\n    padding: 0.5rem;\n  }\n  .p-dock .p-dock-action {\n    width: 4rem;\n    height: 4rem;\n  }\n  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-prev,\n  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-next, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,\n  .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-next {\n    margin: 0 0.9rem;\n  }\n  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,\n  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-next, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,\n  .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next {\n    margin: 0 1.3rem;\n  }\n  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-current {\n    margin: 0 1.5rem;\n  }\n  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-prev,\n  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-next, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-prev,\n  .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-next {\n    margin: 0.9rem 0;\n  }\n  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,\n  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-next, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,\n  .p-dock.p-dock-magnification.p-dock-right .p-dock-item-next {\n    margin: 1.3rem 0;\n  }\n  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {\n    margin: 1.5rem 0;\n  }\n  @media screen and (max-width: 960px) {\n    .p-dock.p-dock-top .p-dock-container, .p-dock.p-dock-bottom .p-dock-container {\n      overflow-x: auto;\n      width: 100%;\n    }\n    .p-dock.p-dock-top .p-dock-container .p-dock-list, .p-dock.p-dock-bottom .p-dock-container .p-dock-list {\n      margin: 0 auto;\n    }\n    .p-dock.p-dock-left .p-dock-container, .p-dock.p-dock-right .p-dock-container {\n      overflow-y: auto;\n      height: 100%;\n    }\n    .p-dock.p-dock-left .p-dock-container .p-dock-list, .p-dock.p-dock-right .p-dock-container .p-dock-list {\n      margin: auto 0;\n    }\n    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-prev,\n    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-next,\n    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,\n    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-next,\n    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,\n    .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-next,\n    .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,\n    .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next,\n    .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-prev,\n    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-next,\n    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,\n    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-next,\n    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-prev,\n    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-next,\n    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,\n    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-next,\n    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {\n      transform: none;\n      margin: 0;\n    }\n  }\n  .p-megamenu {\n    padding: 0.5rem;\n    background: #f8f9fa;\n    color: #495057;\n    border: 1px solid #dee2e6;\n    border-radius: 6px;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    border-radius: 6px;\n    transition: box-shadow 0.2s;\n    user-select: none;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n    margin-left: 0.5rem;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {\n    margin-left: auto;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link,\n  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {\n    background: #EEF2FF;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text,\n  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #4338CA;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,\n  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #4338CA;\n  }\n  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon,\n  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #4338CA;\n  }\n  .p-megamenu .p-menuitem-link {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    border-radius: 0;\n    transition: box-shadow 0.2s;\n    user-select: none;\n  }\n  .p-megamenu .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-megamenu .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-megamenu .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-megamenu .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-megamenu .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-megamenu .p-megamenu-panel {\n    background: #ffffff;\n    color: #495057;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-megamenu .p-megamenu-submenu-header {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    color: #343a40;\n    background: #ffffff;\n    font-weight: 700;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n  }\n  .p-megamenu .p-megamenu-submenu {\n    padding: 0.25rem 0;\n    width: 12.5rem;\n  }\n  .p-megamenu .p-megamenu-submenu .p-menu-separator {\n    border-top: 1px solid #dee2e6;\n    margin: 0.25rem 0;\n  }\n  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {\n    background: #EEF2FF;\n  }\n  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {\n    color: #4338CA;\n  }\n  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {\n    color: #4338CA;\n  }\n  .p-megamenu.p-megamenu-vertical {\n    width: 12.5rem;\n    padding: 0.25rem 0;\n  }\n  .p-megamenu .p-megamenu-button {\n    width: 2rem;\n    height: 2rem;\n    color: #6c757d;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-megamenu .p-megamenu-button:hover {\n    color: #6c757d;\n    background: #e9ecef;\n  }\n  .p-megamenu .p-megamenu-button:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-megamenu .p-submenu-icon {\n    transition: transform 0.2s;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {\n    padding: 0.25rem 0;\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menu-separator {\n    border-top: 1px solid #dee2e6;\n    margin: 0.25rem 0;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon {\n    font-size: 0.875rem;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon.p-icon {\n    width: 0.875rem;\n    height: 0.875rem;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem {\n    width: 100%;\n    position: static;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    border-radius: 0;\n    transition: box-shadow 0.2s;\n    user-select: none;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {\n    margin-left: auto;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {\n    transform: rotate(-180deg);\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list {\n    width: 100%;\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list .p-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {\n    transform: rotate(-90deg);\n  }\n  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menuitem {\n    width: 100%;\n    position: static;\n  }\n  .p-menu {\n    padding: 0.25rem 0;\n    background: #ffffff;\n    color: #495057;\n    border: 1px solid #dee2e6;\n    border-radius: 6px;\n    width: 12.5rem;\n  }\n  .p-menu .p-menuitem-link {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    border-radius: 0;\n    transition: box-shadow 0.2s;\n    user-select: none;\n  }\n  .p-menu .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-menu .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-menu .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-menu .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-menu .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-menu.p-menu-overlay {\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-menu .p-submenu-header {\n    margin: 0;\n    padding: 0.75rem 1.25rem;\n    color: #343a40;\n    background: #ffffff;\n    font-weight: 700;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n  }\n  .p-menu .p-menu-separator {\n    border-top: 1px solid #dee2e6;\n    margin: 0.25rem 0;\n  }\n  .p-menubar {\n    padding: 0.5rem;\n    background: #f8f9fa;\n    color: #495057;\n    border: 1px solid #dee2e6;\n    border-radius: 6px;\n  }\n  .p-menubar .p-menuitem-link {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    border-radius: 0;\n    transition: box-shadow 0.2s;\n    user-select: none;\n  }\n  .p-menubar .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-menubar .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-menubar .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-menubar .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-menubar .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    border-radius: 6px;\n    transition: box-shadow 0.2s;\n    user-select: none;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n    margin-left: 0.5rem;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link,\n  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {\n    background: #EEF2FF;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text,\n  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #4338CA;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,\n  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #4338CA;\n  }\n  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon,\n  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #4338CA;\n  }\n  .p-menubar .p-submenu-list {\n    padding: 0.25rem 0;\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n    width: 12.5rem;\n  }\n  .p-menubar .p-submenu-list .p-menu-separator {\n    border-top: 1px solid #dee2e6;\n    margin: 0.25rem 0;\n  }\n  .p-menubar .p-submenu-list .p-submenu-icon {\n    font-size: 0.875rem;\n  }\n  .p-menubar .p-submenu-list .p-submenu-icon.p-icon {\n    width: 0.875rem;\n    height: 0.875rem;\n  }\n  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link {\n    background: #EEF2FF;\n  }\n  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {\n    color: #4338CA;\n  }\n  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {\n    color: #4338CA;\n  }\n  @media screen and (max-width: 960px) {\n    .p-menubar {\n      position: relative;\n    }\n    .p-menubar .p-menubar-button {\n      display: flex;\n      width: 2rem;\n      height: 2rem;\n      color: #6c757d;\n      border-radius: 50%;\n      transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    }\n    .p-menubar .p-menubar-button:hover {\n      color: #6c757d;\n      background: #e9ecef;\n    }\n    .p-menubar .p-menubar-button:focus {\n      outline: 0 none;\n      outline-offset: 0;\n      box-shadow: 0 0 0 0.2rem #C7D2FE;\n    }\n    .p-menubar .p-menubar-root-list {\n      position: absolute;\n      display: none;\n      padding: 0.25rem 0;\n      background: #ffffff;\n      border: 0 none;\n      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n      width: 100%;\n    }\n    .p-menubar .p-menubar-root-list .p-menu-separator {\n      border-top: 1px solid #dee2e6;\n      margin: 0.25rem 0;\n    }\n    .p-menubar .p-menubar-root-list .p-submenu-icon {\n      font-size: 0.875rem;\n    }\n    .p-menubar .p-menubar-root-list .p-submenu-icon.p-icon {\n      width: 0.875rem;\n      height: 0.875rem;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem {\n      width: 100%;\n      position: static;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {\n      padding: 0.75rem 1.25rem;\n      color: #495057;\n      border-radius: 0;\n      transition: box-shadow 0.2s;\n      user-select: none;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {\n      color: #495057;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {\n      color: #6c757d;\n      margin-right: 0.5rem;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {\n      color: #6c757d;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {\n      background: #e9ecef;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n      color: #495057;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n      color: #6c757d;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n      color: #6c757d;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {\n      outline: 0 none;\n      outline-offset: 0;\n      box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {\n      margin-left: auto;\n      transition: transform 0.2s;\n    }\n    .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {\n      transform: rotate(-180deg);\n    }\n    .p-menubar .p-menubar-root-list .p-submenu-list {\n      width: 100%;\n      position: static;\n      box-shadow: none;\n      border: 0 none;\n    }\n    .p-menubar .p-menubar-root-list .p-submenu-list .p-submenu-icon {\n      transition: transform 0.2s;\n      transform: rotate(90deg);\n    }\n    .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {\n      transform: rotate(-90deg);\n    }\n    .p-menubar .p-menubar-root-list .p-menuitem {\n      width: 100%;\n      position: static;\n    }\n    .p-menubar .p-menubar-root-list ul li a {\n      padding-left: 2.25rem;\n    }\n    .p-menubar .p-menubar-root-list ul li ul li a {\n      padding-left: 3.75rem;\n    }\n    .p-menubar .p-menubar-root-list ul li ul li ul li a {\n      padding-left: 5.25rem;\n    }\n    .p-menubar .p-menubar-root-list ul li ul li ul li ul li a {\n      padding-left: 6.75rem;\n    }\n    .p-menubar .p-menubar-root-list ul li ul li ul li ul li ul li a {\n      padding-left: 8.25rem;\n    }\n    .p-menubar.p-menubar-mobile-active .p-menubar-root-list {\n      display: flex;\n      flex-direction: column;\n      top: 100%;\n      left: 0;\n      z-index: 1;\n    }\n  }\n  .p-panelmenu .p-panelmenu-header > a {\n    padding: 1.25rem;\n    border: 1px solid #dee2e6;\n    color: #6c757d;\n    background: #f8f9fa;\n    font-weight: 700;\n    border-radius: 6px;\n    transition: box-shadow 0.2s;\n  }\n  .p-panelmenu .p-panelmenu-header > a .p-panelmenu-icon {\n    margin-right: 0.5rem;\n  }\n  .p-panelmenu .p-panelmenu-header > a .p-menuitem-icon {\n    margin-right: 0.5rem;\n  }\n  .p-panelmenu .p-panelmenu-header > a:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled) > a:hover {\n    background: #e9ecef;\n    border-color: #dee2e6;\n    color: #343a40;\n  }\n  .p-panelmenu .p-panelmenu-header.p-highlight {\n    margin-bottom: 0;\n  }\n  .p-panelmenu .p-panelmenu-header.p-highlight > a {\n    background: #f8f9fa;\n    border-color: #dee2e6;\n    color: #343a40;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .p-panelmenu .p-panelmenu-header.p-highlight:not(.p-disabled) > a:hover {\n    border-color: #dee2e6;\n    background: #e9ecef;\n    color: #343a40;\n  }\n  .p-panelmenu .p-panelmenu-content {\n    padding: 0.25rem 0;\n    border: 1px solid #dee2e6;\n    background: #ffffff;\n    color: #495057;\n    border-top: 0;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n    border-bottom-right-radius: 6px;\n    border-bottom-left-radius: 6px;\n  }\n  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    border-radius: 0;\n    transition: box-shadow 0.2s;\n    user-select: none;\n  }\n  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-panelmenu-icon {\n    margin-right: 0.5rem;\n  }\n  .p-panelmenu .p-panelmenu-content .p-submenu-list:not(.p-panelmenu-root-submenu) {\n    padding: 0 0 0 1rem;\n  }\n  .p-panelmenu .p-panelmenu-panel {\n    margin-bottom: 4px;\n  }\n  .p-slidemenu {\n    padding: 0.25rem 0;\n    background: #ffffff;\n    color: #495057;\n    border: 1px solid #dee2e6;\n    border-radius: 6px;\n    width: 12.5rem;\n  }\n  .p-slidemenu .p-menuitem-link {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    border-radius: 0;\n    transition: box-shadow 0.2s;\n    user-select: none;\n  }\n  .p-slidemenu .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-slidemenu .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-slidemenu .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-slidemenu .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-slidemenu.p-slidemenu-overlay {\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-slidemenu .p-slidemenu-list {\n    padding: 0.25rem 0;\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link {\n    background: #EEF2FF;\n  }\n  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-text {\n    color: #4338CA;\n  }\n  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-icon, .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-icon {\n    color: #4338CA;\n  }\n  .p-slidemenu .p-slidemenu-separator {\n    border-top: 1px solid #dee2e6;\n    margin: 0.25rem 0;\n  }\n  .p-slidemenu .p-slidemenu-icon {\n    font-size: 0.875rem;\n  }\n  .p-slidemenu .p-slidemenu-icon.p-icon {\n    width: 0.875rem;\n    height: 0.875rem;\n  }\n  .p-slidemenu .p-slidemenu-backward {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n  }\n  .p-steps .p-steps-item .p-menuitem-link {\n    background: transparent;\n    transition: box-shadow 0.2s;\n    border-radius: 6px;\n    background: #ffffff;\n  }\n  .p-steps .p-steps-item .p-menuitem-link .p-steps-number {\n    color: #495057;\n    border: 1px solid #e9ecef;\n    background: #ffffff;\n    min-width: 2rem;\n    height: 2rem;\n    line-height: 2rem;\n    font-size: 1.143rem;\n    z-index: 1;\n    border-radius: 50%;\n  }\n  .p-steps .p-steps-item .p-menuitem-link .p-steps-title {\n    margin-top: 0.5rem;\n    color: #6c757d;\n  }\n  .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-steps .p-steps-item.p-highlight .p-steps-number {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-steps .p-steps-item.p-highlight .p-steps-title {\n    font-weight: 700;\n    color: #495057;\n  }\n  .p-steps .p-steps-item:before {\n    content: \" \";\n    border-top: 1px solid #dee2e6;\n    width: 100%;\n    top: 50%;\n    left: 0;\n    display: block;\n    position: absolute;\n    margin-top: -1rem;\n  }\n  .p-tabmenu .p-tabmenu-nav {\n    background: #ffffff;\n    border: 1px solid #dee2e6;\n    border-width: 0 0 2px 0;\n  }\n  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem {\n    margin-right: 0;\n  }\n  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {\n    border: solid #dee2e6;\n    border-width: 0 0 2px 0;\n    border-color: transparent transparent #dee2e6 transparent;\n    background: #ffffff;\n    color: #6c757d;\n    padding: 1.25rem;\n    font-weight: 700;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n    transition: box-shadow 0.2s;\n    margin: 0 0 -2px 0;\n    height: calc(100% + 2px);\n  }\n  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {\n    margin-right: 0.5rem;\n  }\n  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {\n    background: #ffffff;\n    border-color: #adb5bd;\n    color: #6c757d;\n  }\n  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {\n    background: #ffffff;\n    border-color: #6366F1;\n    color: #6366F1;\n  }\n  .p-tieredmenu {\n    padding: 0.25rem 0;\n    background: #ffffff;\n    color: #495057;\n    border: 1px solid #dee2e6;\n    border-radius: 6px;\n    width: 12.5rem;\n  }\n  .p-tieredmenu .p-menuitem-link {\n    padding: 0.75rem 1.25rem;\n    color: #495057;\n    border-radius: 0;\n    transition: box-shadow 0.2s;\n    user-select: none;\n  }\n  .p-tieredmenu .p-menuitem-link .p-menuitem-text {\n    color: #495057;\n  }\n  .p-tieredmenu .p-menuitem-link .p-menuitem-icon {\n    color: #6c757d;\n    margin-right: 0.5rem;\n  }\n  .p-tieredmenu .p-menuitem-link .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {\n    background: #e9ecef;\n  }\n  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n    color: #495057;\n  }\n  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n    color: #6c757d;\n  }\n  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {\n    color: #6c757d;\n  }\n  .p-tieredmenu .p-menuitem-link:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: inset 0 0 0 0.15rem #C7D2FE;\n  }\n  .p-tieredmenu.p-tieredmenu-overlay {\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-tieredmenu .p-submenu-list {\n    padding: 0.25rem 0;\n    background: #ffffff;\n    border: 0 none;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  }\n  .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {\n    background: #EEF2FF;\n  }\n  .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {\n    color: #4338CA;\n  }\n  .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {\n    color: #4338CA;\n  }\n  .p-tieredmenu .p-menu-separator {\n    border-top: 1px solid #dee2e6;\n    margin: 0.25rem 0;\n  }\n  .p-tieredmenu .p-submenu-icon {\n    font-size: 0.875rem;\n    transition: transform 0.2s;\n  }\n  .p-tieredmenu .p-submenu-icon.p-icon {\n    width: 0.875rem;\n    height: 0.875rem;\n  }\n  .p-inline-message {\n    padding: 0.75rem 0.75rem;\n    margin: 0;\n    border-radius: 6px;\n  }\n  .p-inline-message.p-inline-message-info {\n    background: #e9e9ff;\n    border: solid #696cff;\n    border-width: 0px;\n    color: #696cff;\n  }\n  .p-inline-message.p-inline-message-info .p-inline-message-icon {\n    color: #696cff;\n  }\n  .p-inline-message.p-inline-message-success {\n    background: #e4f8f0;\n    border: solid #1ea97c;\n    border-width: 0px;\n    color: #1ea97c;\n  }\n  .p-inline-message.p-inline-message-success .p-inline-message-icon {\n    color: #1ea97c;\n  }\n  .p-inline-message.p-inline-message-warn {\n    background: #fff2e2;\n    border: solid #cc8925;\n    border-width: 0px;\n    color: #cc8925;\n  }\n  .p-inline-message.p-inline-message-warn .p-inline-message-icon {\n    color: #cc8925;\n  }\n  .p-inline-message.p-inline-message-error {\n    background: #ffe7e6;\n    border: solid #ff5757;\n    border-width: 0px;\n    color: #ff5757;\n  }\n  .p-inline-message.p-inline-message-error .p-inline-message-icon {\n    color: #ff5757;\n  }\n  .p-inline-message .p-inline-message-icon {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n  }\n  .p-inline-message .p-inline-message-icon.p-icon {\n    width: 1rem;\n    height: 1rem;\n  }\n  .p-inline-message .p-inline-message-text {\n    font-size: 1rem;\n  }\n  .p-inline-message.p-inline-message-icon-only .p-inline-message-icon {\n    margin-right: 0;\n  }\n  .p-message {\n    margin: 1rem 0;\n    border-radius: 6px;\n  }\n  .p-message .p-message-wrapper {\n    padding: 1.25rem 1.75rem;\n  }\n  .p-message .p-message-close {\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    background: transparent;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-message .p-message-close:hover {\n    background: rgba(255, 255, 255, 0.3);\n  }\n  .p-message .p-message-close:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-message.p-message-info {\n    background: #e9e9ff;\n    border: solid #696cff;\n    border-width: 0 0 0 6px;\n    color: #696cff;\n  }\n  .p-message.p-message-info .p-message-icon {\n    color: #696cff;\n  }\n  .p-message.p-message-info .p-message-close {\n    color: #696cff;\n  }\n  .p-message.p-message-success {\n    background: #e4f8f0;\n    border: solid #1ea97c;\n    border-width: 0 0 0 6px;\n    color: #1ea97c;\n  }\n  .p-message.p-message-success .p-message-icon {\n    color: #1ea97c;\n  }\n  .p-message.p-message-success .p-message-close {\n    color: #1ea97c;\n  }\n  .p-message.p-message-warn {\n    background: #fff2e2;\n    border: solid #cc8925;\n    border-width: 0 0 0 6px;\n    color: #cc8925;\n  }\n  .p-message.p-message-warn .p-message-icon {\n    color: #cc8925;\n  }\n  .p-message.p-message-warn .p-message-close {\n    color: #cc8925;\n  }\n  .p-message.p-message-error {\n    background: #ffe7e6;\n    border: solid #ff5757;\n    border-width: 0 0 0 6px;\n    color: #ff5757;\n  }\n  .p-message.p-message-error .p-message-icon {\n    color: #ff5757;\n  }\n  .p-message.p-message-error .p-message-close {\n    color: #ff5757;\n  }\n  .p-message .p-message-text {\n    font-size: 1rem;\n    font-weight: 400;\n  }\n  .p-message .p-message-icon {\n    font-size: 1.5rem;\n    margin-right: 0.5rem;\n  }\n  .p-message .p-message-icon.p-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .p-message .p-message-summary {\n    font-weight: 700;\n  }\n  .p-message .p-message-detail {\n    margin-left: 0.5rem;\n  }\n  .p-toast {\n    opacity: 0.9;\n  }\n  .p-toast .p-toast-message {\n    margin: 0 0 1rem 0;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 6px;\n  }\n  .p-toast .p-toast-message .p-toast-message-content {\n    padding: 1rem;\n    border-width: 0 0 0 6px;\n  }\n  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {\n    margin: 0 0 0 1rem;\n  }\n  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {\n    font-size: 2rem;\n  }\n  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n  .p-toast .p-toast-message .p-toast-message-content .p-toast-summary {\n    font-weight: 700;\n  }\n  .p-toast .p-toast-message .p-toast-message-content .p-toast-detail {\n    margin: 0.5rem 0 0 0;\n  }\n  .p-toast .p-toast-message .p-toast-icon-close {\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    background: transparent;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-toast .p-toast-message .p-toast-icon-close:hover {\n    background: rgba(255, 255, 255, 0.3);\n  }\n  .p-toast .p-toast-message .p-toast-icon-close:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-toast .p-toast-message.p-toast-message-info {\n    background: #e9e9ff;\n    border: solid #696cff;\n    border-width: 0 0 0 6px;\n    color: #696cff;\n  }\n  .p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,\n  .p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {\n    color: #696cff;\n  }\n  .p-toast .p-toast-message.p-toast-message-success {\n    background: #e4f8f0;\n    border: solid #1ea97c;\n    border-width: 0 0 0 6px;\n    color: #1ea97c;\n  }\n  .p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,\n  .p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {\n    color: #1ea97c;\n  }\n  .p-toast .p-toast-message.p-toast-message-warn {\n    background: #fff2e2;\n    border: solid #cc8925;\n    border-width: 0 0 0 6px;\n    color: #cc8925;\n  }\n  .p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,\n  .p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {\n    color: #cc8925;\n  }\n  .p-toast .p-toast-message.p-toast-message-error {\n    background: #ffe7e6;\n    border: solid #ff5757;\n    border-width: 0 0 0 6px;\n    color: #ff5757;\n  }\n  .p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,\n  .p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {\n    color: #ff5757;\n  }\n  .p-galleria .p-galleria-close {\n    margin: 0.5rem;\n    background: transparent;\n    color: #f8f9fa;\n    width: 4rem;\n    height: 4rem;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    border-radius: 50%;\n  }\n  .p-galleria .p-galleria-close .p-galleria-close-icon {\n    font-size: 2rem;\n  }\n  .p-galleria .p-galleria-close .p-galleria-close-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n  .p-galleria .p-galleria-close:hover {\n    background: rgba(255, 255, 255, 0.1);\n    color: #f8f9fa;\n  }\n  .p-galleria .p-galleria-item-nav {\n    background: transparent;\n    color: #f8f9fa;\n    width: 4rem;\n    height: 4rem;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    border-radius: 6px;\n    margin: 0 0.5rem;\n  }\n  .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,\n  .p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {\n    font-size: 2rem;\n  }\n  .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon.p-icon,\n  .p-galleria .p-galleria-item-nav .p-galleria-item-next-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n  .p-galleria .p-galleria-item-nav:not(.p-disabled):hover {\n    background: rgba(255, 255, 255, 0.1);\n    color: #f8f9fa;\n  }\n  .p-galleria .p-galleria-caption {\n    background: rgba(0, 0, 0, 0.5);\n    color: #f8f9fa;\n    padding: 1rem;\n  }\n  .p-galleria .p-galleria-indicators {\n    padding: 1rem;\n  }\n  .p-galleria .p-galleria-indicators .p-galleria-indicator button {\n    background-color: #ced4da;\n    width: 1rem;\n    height: 1rem;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    border-radius: 50%;\n  }\n  .p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {\n    background: #adb5bd;\n  }\n  .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-galleria.p-galleria-indicators-bottom .p-galleria-indicator, .p-galleria.p-galleria-indicators-top .p-galleria-indicator {\n    margin-right: 0.5rem;\n  }\n  .p-galleria.p-galleria-indicators-left .p-galleria-indicator, .p-galleria.p-galleria-indicators-right .p-galleria-indicator {\n    margin-bottom: 0.5rem;\n  }\n  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {\n    background: rgba(0, 0, 0, 0.5);\n  }\n  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button {\n    background: rgba(255, 255, 255, 0.4);\n  }\n  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button:hover {\n    background: rgba(255, 255, 255, 0.6);\n  }\n  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {\n    background: #EEF2FF;\n    color: #4338CA;\n  }\n  .p-galleria .p-galleria-thumbnail-container {\n    background: rgba(0, 0, 0, 0.9);\n    padding: 1rem 0.25rem;\n  }\n  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,\n  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {\n    margin: 0.5rem;\n    background-color: transparent;\n    color: #f8f9fa;\n    width: 2rem;\n    height: 2rem;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    border-radius: 50%;\n  }\n  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,\n  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {\n    background: rgba(255, 255, 255, 0.1);\n    color: #f8f9fa;\n  }\n  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content {\n    transition: box-shadow 0.2s;\n  }\n  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-galleria-mask {\n    --maskbg: rgba(0, 0, 0, 0.9);\n  }\n  .p-image-mask {\n    --maskbg: rgba(0, 0, 0, 0.9);\n  }\n  .p-image-preview-indicator {\n    background-color: transparent;\n    color: #f8f9fa;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-image-preview-indicator .p-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .p-image-preview-container:hover > .p-image-preview-indicator {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  .p-image-toolbar {\n    padding: 1rem;\n  }\n  .p-image-action.p-link {\n    color: #f8f9fa;\n    background-color: transparent;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 50%;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    margin-right: 0.5rem;\n  }\n  .p-image-action.p-link:last-child {\n    margin-right: 0;\n  }\n  .p-image-action.p-link:hover {\n    color: #f8f9fa;\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n  .p-image-action.p-link span {\n    font-size: 1.5rem;\n  }\n  .p-image-action.p-link .p-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .p-avatar {\n    background-color: #dee2e6;\n    border-radius: 6px;\n  }\n  .p-avatar.p-avatar-lg {\n    width: 3rem;\n    height: 3rem;\n    font-size: 1.5rem;\n  }\n  .p-avatar.p-avatar-lg .p-avatar-icon {\n    font-size: 1.5rem;\n  }\n  .p-avatar.p-avatar-xl {\n    width: 4rem;\n    height: 4rem;\n    font-size: 2rem;\n  }\n  .p-avatar.p-avatar-xl .p-avatar-icon {\n    font-size: 2rem;\n  }\n  .p-avatar-circle {\n    border-radius: 50%;\n  }\n  .p-avatar-group .p-avatar {\n    border: 2px solid #ffffff;\n  }\n  .p-chip {\n    background-color: #dee2e6;\n    color: #495057;\n    border-radius: 16px;\n    padding: 0 0.75rem;\n  }\n  .p-chip .p-chip-text {\n    line-height: 1.5;\n    margin-top: 0.375rem;\n    margin-bottom: 0.375rem;\n  }\n  .p-chip .p-chip-icon {\n    margin-right: 0.5rem;\n  }\n  .p-chip img {\n    width: 2.25rem;\n    height: 2.25rem;\n    margin-left: -0.75rem;\n    margin-right: 0.5rem;\n  }\n  .p-chip .p-chip-remove-icon {\n    border-radius: 6px;\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n    margin-left: 0.5rem;\n  }\n  .p-chip .p-chip-remove-icon:focus-visible {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-scrolltop {\n    width: 3rem;\n    height: 3rem;\n    border-radius: 50%;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\n  }\n  .p-scrolltop.p-link {\n    background: rgba(0, 0, 0, 0.7);\n  }\n  .p-scrolltop.p-link:hover {\n    background: rgba(0, 0, 0, 0.8);\n  }\n  .p-scrolltop .p-scrolltop-icon {\n    font-size: 1.5rem;\n    color: #f8f9fa;\n  }\n  .p-scrolltop .p-scrolltop-icon.p-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .p-skeleton {\n    background-color: #dee2e6;\n    border-radius: 6px;\n  }\n  .p-skeleton:after {\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));\n  }\n  .p-tag {\n    background: #6366F1;\n    color: #ffffff;\n    font-size: 0.75rem;\n    font-weight: 700;\n    padding: 0.25rem 0.4rem;\n    border-radius: 6px;\n  }\n  .p-tag.p-tag-success {\n    background-color: #22C55E;\n    color: #ffffff;\n  }\n  .p-tag.p-tag-info {\n    background-color: #3B82F6;\n    color: #ffffff;\n  }\n  .p-tag.p-tag-warning {\n    background-color: #F59E0B;\n    color: #ffffff;\n  }\n  .p-tag.p-tag-danger {\n    background-color: #EF4444;\n    color: #ffffff;\n  }\n  .p-tag .p-tag-icon {\n    margin-right: 0.25rem;\n    font-size: 0.75rem;\n  }\n  .p-tag .p-tag-icon.p-icon {\n    width: 0.75rem;\n    height: 0.75rem;\n  }\n  .p-inplace .p-inplace-display {\n    padding: 0.75rem 0.75rem;\n    border-radius: 6px;\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .p-inplace .p-inplace-display:not(.p-disabled):hover {\n    background: #e9ecef;\n    color: #495057;\n  }\n  .p-inplace .p-inplace-display:focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: 0 0 0 0.2rem #C7D2FE;\n  }\n  .p-progressbar {\n    border: 0 none;\n    height: 1.5rem;\n    background: #dee2e6;\n    border-radius: 6px;\n  }\n  .p-progressbar .p-progressbar-value {\n    border: 0 none;\n    margin: 0;\n    background: #6366F1;\n  }\n  .p-progressbar .p-progressbar-label {\n    color: #ffffff;\n    line-height: 1.5rem;\n  }\n  .p-terminal {\n    background: #ffffff;\n    color: #495057;\n    border: 1px solid #dee2e6;\n    padding: 1.25rem;\n  }\n  .p-terminal .p-terminal-input {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: inherit;\n  }\n  .p-badge {\n    background: #6366F1;\n    color: #ffffff;\n    font-size: 0.75rem;\n    font-weight: 700;\n    min-width: 1.5rem;\n    height: 1.5rem;\n    line-height: 1.5rem;\n  }\n  .p-badge.p-badge-secondary {\n    background-color: #64748B;\n    color: #ffffff;\n  }\n  .p-badge.p-badge-success {\n    background-color: #22C55E;\n    color: #ffffff;\n  }\n  .p-badge.p-badge-info {\n    background-color: #3B82F6;\n    color: #ffffff;\n  }\n  .p-badge.p-badge-warning {\n    background-color: #F59E0B;\n    color: #ffffff;\n  }\n  .p-badge.p-badge-danger {\n    background-color: #EF4444;\n    color: #ffffff;\n  }\n  .p-badge.p-badge-lg {\n    font-size: 1.125rem;\n    min-width: 2.25rem;\n    height: 2.25rem;\n    line-height: 2.25rem;\n  }\n  .p-badge.p-badge-xl {\n    font-size: 1.5rem;\n    min-width: 3rem;\n    height: 3rem;\n    line-height: 3rem;\n  }\n  .p-tag {\n    background: #6366F1;\n    color: #ffffff;\n    font-size: 0.75rem;\n    font-weight: 700;\n    padding: 0.25rem 0.4rem;\n    border-radius: 6px;\n  }\n  .p-tag.p-tag-success {\n    background-color: #22C55E;\n    color: #ffffff;\n  }\n  .p-tag.p-tag-info {\n    background-color: #3B82F6;\n    color: #ffffff;\n  }\n  .p-tag.p-tag-warning {\n    background-color: #F59E0B;\n    color: #ffffff;\n  }\n  .p-tag.p-tag-danger {\n    background-color: #EF4444;\n    color: #ffffff;\n  }\n}\n@layer primereact {\n  .p-button-label {\n    font-weight: 700;\n  }\n  .p-accordion .p-accordion-header .p-accordion-header-link {\n    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .p-tabview .p-tabview-nav li .p-tabview-nav-link {\n    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  }\n  .p-tabview .p-tabview-nav .p-tabview-ink-bar {\n    z-index: 1;\n    display: block;\n    position: absolute;\n    bottom: 0;\n    height: 2px;\n    background-color: #6366F1;\n    transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);\n  }\n  .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {\n    background-color: #6366F1;\n  }\n  .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {\n    background-color: #6366F1;\n  }\n  .p-button:focus {\n    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #b1b3f8, 0 1px 2px 0 rgb(0, 0, 0);\n  }\n  .p-button.p-button-secondary:enabled:focus {\n    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #b0b9c6, 0 1px 2px 0 rgb(0, 0, 0);\n  }\n  .p-button.p-button-success:enabled:focus {\n    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #88eaac, 0 1px 2px 0 rgb(0, 0, 0);\n  }\n  .p-button.p-button-info:enabled:focus {\n    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #9dc1fb, 0 1px 2px 0 rgb(0, 0, 0);\n  }\n  .p-button.p-button-warning:enabled:focus {\n    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #facf85, 0 1px 2px 0 rgb(0, 0, 0);\n  }\n  .p-button.p-button-help:enabled:focus {\n    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #d4aafb, 0 1px 2px 0 rgb(0, 0, 0);\n  }\n  .p-button.p-button-danger:enabled:focus {\n    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #f7a2a2, 0 1px 2px 0 rgb(0, 0, 0);\n  }\n  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {\n    box-shadow: inset 0 2px 0 0 #6366F1;\n  }\n  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {\n    box-shadow: inset 0 -2px 0 0 #6366F1;\n  }\n}\n";
  styleInject(css_248z$3);

  var css_248z$2 = ".grid {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  margin-top: -0.5rem;\n}\n\n.grid > .col,\n.grid > [class*=col] {\n  box-sizing: border-box;\n}\n\n.grid-nogutter {\n  margin-right: 0;\n  margin-left: 0;\n  margin-top: 0;\n}\n\n.grid-nogutter > .col,\n.grid-nogutter > [class*=col-] {\n  padding: 0;\n}\n\n.col {\n  flex-grow: 1;\n  flex-basis: 0;\n  padding: 0.5rem;\n}\n\n.col-fixed {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n}\n\n.col-1 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 8.3333%;\n}\n\n.col-2 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 16.6667%;\n}\n\n.col-3 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 33.3333%;\n}\n\n.col-5 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 41.6667%;\n}\n\n.col-6 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 58.3333%;\n}\n\n.col-8 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 66.6667%;\n}\n\n.col-9 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 83.3333%;\n}\n\n.col-11 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 91.6667%;\n}\n\n.col-12 {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n  width: 100%;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:col {\n    flex-grow: 1;\n    flex-basis: 0;\n    padding: 0.5rem;\n  }\n  .sm\\:col-fixed {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n  }\n  .sm\\:col-1 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 8.3333%;\n  }\n  .sm\\:col-2 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 16.6667%;\n  }\n  .sm\\:col-3 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 25%;\n  }\n  .sm\\:col-4 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 33.3333%;\n  }\n  .sm\\:col-5 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 41.6667%;\n  }\n  .sm\\:col-6 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 50%;\n  }\n  .sm\\:col-7 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 58.3333%;\n  }\n  .sm\\:col-8 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 66.6667%;\n  }\n  .sm\\:col-9 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 75%;\n  }\n  .sm\\:col-10 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 83.3333%;\n  }\n  .sm\\:col-11 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 91.6667%;\n  }\n  .sm\\:col-12 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:col {\n    flex-grow: 1;\n    flex-basis: 0;\n    padding: 0.5rem;\n  }\n  .md\\:col-fixed {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n  }\n  .md\\:col-1 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 8.3333%;\n  }\n  .md\\:col-2 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 16.6667%;\n  }\n  .md\\:col-3 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 25%;\n  }\n  .md\\:col-4 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 33.3333%;\n  }\n  .md\\:col-5 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 41.6667%;\n  }\n  .md\\:col-6 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 50%;\n  }\n  .md\\:col-7 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 58.3333%;\n  }\n  .md\\:col-8 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 66.6667%;\n  }\n  .md\\:col-9 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 75%;\n  }\n  .md\\:col-10 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 83.3333%;\n  }\n  .md\\:col-11 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 91.6667%;\n  }\n  .md\\:col-12 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:col {\n    flex-grow: 1;\n    flex-basis: 0;\n    padding: 0.5rem;\n  }\n  .lg\\:col-fixed {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n  }\n  .lg\\:col-1 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 8.3333%;\n  }\n  .lg\\:col-2 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 16.6667%;\n  }\n  .lg\\:col-3 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 25%;\n  }\n  .lg\\:col-4 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 33.3333%;\n  }\n  .lg\\:col-5 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 41.6667%;\n  }\n  .lg\\:col-6 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 50%;\n  }\n  .lg\\:col-7 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 58.3333%;\n  }\n  .lg\\:col-8 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 66.6667%;\n  }\n  .lg\\:col-9 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 75%;\n  }\n  .lg\\:col-10 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 83.3333%;\n  }\n  .lg\\:col-11 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 91.6667%;\n  }\n  .lg\\:col-12 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:col {\n    flex-grow: 1;\n    flex-basis: 0;\n    padding: 0.5rem;\n  }\n  .xl\\:col-fixed {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n  }\n  .xl\\:col-1 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 8.3333%;\n  }\n  .xl\\:col-2 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 16.6667%;\n  }\n  .xl\\:col-3 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 25%;\n  }\n  .xl\\:col-4 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 33.3333%;\n  }\n  .xl\\:col-5 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 41.6667%;\n  }\n  .xl\\:col-6 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 50%;\n  }\n  .xl\\:col-7 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 58.3333%;\n  }\n  .xl\\:col-8 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 66.6667%;\n  }\n  .xl\\:col-9 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 75%;\n  }\n  .xl\\:col-10 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 83.3333%;\n  }\n  .xl\\:col-11 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 91.6667%;\n  }\n  .xl\\:col-12 {\n    flex: 0 0 auto;\n    padding: 0.5rem;\n    width: 100%;\n  }\n}\n.col-offset-0 {\n  margin-left: 0 !important;\n}\n\n.col-offset-1 {\n  margin-left: 8.3333% !important;\n}\n\n.col-offset-2 {\n  margin-left: 16.6667% !important;\n}\n\n.col-offset-3 {\n  margin-left: 25% !important;\n}\n\n.col-offset-4 {\n  margin-left: 33.3333% !important;\n}\n\n.col-offset-5 {\n  margin-left: 41.6667% !important;\n}\n\n.col-offset-6 {\n  margin-left: 50% !important;\n}\n\n.col-offset-7 {\n  margin-left: 58.3333% !important;\n}\n\n.col-offset-8 {\n  margin-left: 66.6667% !important;\n}\n\n.col-offset-9 {\n  margin-left: 75% !important;\n}\n\n.col-offset-10 {\n  margin-left: 83.3333% !important;\n}\n\n.col-offset-11 {\n  margin-left: 91.6667% !important;\n}\n\n.col-offset-12 {\n  margin-left: 100% !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:col-offset-0 {\n    margin-left: 0 !important;\n  }\n  .sm\\:col-offset-1 {\n    margin-left: 8.3333% !important;\n  }\n  .sm\\:col-offset-2 {\n    margin-left: 16.6667% !important;\n  }\n  .sm\\:col-offset-3 {\n    margin-left: 25% !important;\n  }\n  .sm\\:col-offset-4 {\n    margin-left: 33.3333% !important;\n  }\n  .sm\\:col-offset-5 {\n    margin-left: 41.6667% !important;\n  }\n  .sm\\:col-offset-6 {\n    margin-left: 50% !important;\n  }\n  .sm\\:col-offset-7 {\n    margin-left: 58.3333% !important;\n  }\n  .sm\\:col-offset-8 {\n    margin-left: 66.6667% !important;\n  }\n  .sm\\:col-offset-9 {\n    margin-left: 75% !important;\n  }\n  .sm\\:col-offset-10 {\n    margin-left: 83.3333% !important;\n  }\n  .sm\\:col-offset-11 {\n    margin-left: 91.6667% !important;\n  }\n  .sm\\:col-offset-12 {\n    margin-left: 100% !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:col-offset-0 {\n    margin-left: 0 !important;\n  }\n  .md\\:col-offset-1 {\n    margin-left: 8.3333% !important;\n  }\n  .md\\:col-offset-2 {\n    margin-left: 16.6667% !important;\n  }\n  .md\\:col-offset-3 {\n    margin-left: 25% !important;\n  }\n  .md\\:col-offset-4 {\n    margin-left: 33.3333% !important;\n  }\n  .md\\:col-offset-5 {\n    margin-left: 41.6667% !important;\n  }\n  .md\\:col-offset-6 {\n    margin-left: 50% !important;\n  }\n  .md\\:col-offset-7 {\n    margin-left: 58.3333% !important;\n  }\n  .md\\:col-offset-8 {\n    margin-left: 66.6667% !important;\n  }\n  .md\\:col-offset-9 {\n    margin-left: 75% !important;\n  }\n  .md\\:col-offset-10 {\n    margin-left: 83.3333% !important;\n  }\n  .md\\:col-offset-11 {\n    margin-left: 91.6667% !important;\n  }\n  .md\\:col-offset-12 {\n    margin-left: 100% !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:col-offset-0 {\n    margin-left: 0 !important;\n  }\n  .lg\\:col-offset-1 {\n    margin-left: 8.3333% !important;\n  }\n  .lg\\:col-offset-2 {\n    margin-left: 16.6667% !important;\n  }\n  .lg\\:col-offset-3 {\n    margin-left: 25% !important;\n  }\n  .lg\\:col-offset-4 {\n    margin-left: 33.3333% !important;\n  }\n  .lg\\:col-offset-5 {\n    margin-left: 41.6667% !important;\n  }\n  .lg\\:col-offset-6 {\n    margin-left: 50% !important;\n  }\n  .lg\\:col-offset-7 {\n    margin-left: 58.3333% !important;\n  }\n  .lg\\:col-offset-8 {\n    margin-left: 66.6667% !important;\n  }\n  .lg\\:col-offset-9 {\n    margin-left: 75% !important;\n  }\n  .lg\\:col-offset-10 {\n    margin-left: 83.3333% !important;\n  }\n  .lg\\:col-offset-11 {\n    margin-left: 91.6667% !important;\n  }\n  .lg\\:col-offset-12 {\n    margin-left: 100% !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:col-offset-0 {\n    margin-left: 0 !important;\n  }\n  .xl\\:col-offset-1 {\n    margin-left: 8.3333% !important;\n  }\n  .xl\\:col-offset-2 {\n    margin-left: 16.6667% !important;\n  }\n  .xl\\:col-offset-3 {\n    margin-left: 25% !important;\n  }\n  .xl\\:col-offset-4 {\n    margin-left: 33.3333% !important;\n  }\n  .xl\\:col-offset-5 {\n    margin-left: 41.6667% !important;\n  }\n  .xl\\:col-offset-6 {\n    margin-left: 50% !important;\n  }\n  .xl\\:col-offset-7 {\n    margin-left: 58.3333% !important;\n  }\n  .xl\\:col-offset-8 {\n    margin-left: 66.6667% !important;\n  }\n  .xl\\:col-offset-9 {\n    margin-left: 75% !important;\n  }\n  .xl\\:col-offset-10 {\n    margin-left: 83.3333% !important;\n  }\n  .xl\\:col-offset-11 {\n    margin-left: 91.6667% !important;\n  }\n  .xl\\:col-offset-12 {\n    margin-left: 100% !important;\n  }\n}\n.text-0 {\n  color: var(--surface-0) !important;\n}\n\n.text-50 {\n  color: var(--surface-50) !important;\n}\n\n.text-100 {\n  color: var(--surface-100) !important;\n}\n\n.text-200 {\n  color: var(--surface-200) !important;\n}\n\n.text-300 {\n  color: var(--surface-300) !important;\n}\n\n.text-400 {\n  color: var(--surface-400) !important;\n}\n\n.text-500 {\n  color: var(--surface-500) !important;\n}\n\n.text-600 {\n  color: var(--surface-600) !important;\n}\n\n.text-700 {\n  color: var(--surface-700) !important;\n}\n\n.text-800 {\n  color: var(--surface-800) !important;\n}\n\n.text-900 {\n  color: var(--surface-900) !important;\n}\n\n.focus\\:text-0:focus {\n  color: var(--surface-0) !important;\n}\n\n.hover\\:text-0:hover {\n  color: var(--surface-0) !important;\n}\n\n.active\\:text-0:active {\n  color: var(--surface-0) !important;\n}\n\n.focus\\:text-50:focus {\n  color: var(--surface-50) !important;\n}\n\n.hover\\:text-50:hover {\n  color: var(--surface-50) !important;\n}\n\n.active\\:text-50:active {\n  color: var(--surface-50) !important;\n}\n\n.focus\\:text-100:focus {\n  color: var(--surface-100) !important;\n}\n\n.hover\\:text-100:hover {\n  color: var(--surface-100) !important;\n}\n\n.active\\:text-100:active {\n  color: var(--surface-100) !important;\n}\n\n.focus\\:text-200:focus {\n  color: var(--surface-200) !important;\n}\n\n.hover\\:text-200:hover {\n  color: var(--surface-200) !important;\n}\n\n.active\\:text-200:active {\n  color: var(--surface-200) !important;\n}\n\n.focus\\:text-300:focus {\n  color: var(--surface-300) !important;\n}\n\n.hover\\:text-300:hover {\n  color: var(--surface-300) !important;\n}\n\n.active\\:text-300:active {\n  color: var(--surface-300) !important;\n}\n\n.focus\\:text-400:focus {\n  color: var(--surface-400) !important;\n}\n\n.hover\\:text-400:hover {\n  color: var(--surface-400) !important;\n}\n\n.active\\:text-400:active {\n  color: var(--surface-400) !important;\n}\n\n.focus\\:text-500:focus {\n  color: var(--surface-500) !important;\n}\n\n.hover\\:text-500:hover {\n  color: var(--surface-500) !important;\n}\n\n.active\\:text-500:active {\n  color: var(--surface-500) !important;\n}\n\n.focus\\:text-600:focus {\n  color: var(--surface-600) !important;\n}\n\n.hover\\:text-600:hover {\n  color: var(--surface-600) !important;\n}\n\n.active\\:text-600:active {\n  color: var(--surface-600) !important;\n}\n\n.focus\\:text-700:focus {\n  color: var(--surface-700) !important;\n}\n\n.hover\\:text-700:hover {\n  color: var(--surface-700) !important;\n}\n\n.active\\:text-700:active {\n  color: var(--surface-700) !important;\n}\n\n.focus\\:text-800:focus {\n  color: var(--surface-800) !important;\n}\n\n.hover\\:text-800:hover {\n  color: var(--surface-800) !important;\n}\n\n.active\\:text-800:active {\n  color: var(--surface-800) !important;\n}\n\n.focus\\:text-900:focus {\n  color: var(--surface-900) !important;\n}\n\n.hover\\:text-900:hover {\n  color: var(--surface-900) !important;\n}\n\n.active\\:text-900:active {\n  color: var(--surface-900) !important;\n}\n\n.surface-0 {\n  background-color: var(--surface-0) !important;\n}\n\n.surface-50 {\n  background-color: var(--surface-50) !important;\n}\n\n.surface-100 {\n  background-color: var(--surface-100) !important;\n}\n\n.surface-200 {\n  background-color: var(--surface-200) !important;\n}\n\n.surface-300 {\n  background-color: var(--surface-300) !important;\n}\n\n.surface-400 {\n  background-color: var(--surface-400) !important;\n}\n\n.surface-500 {\n  background-color: var(--surface-500) !important;\n}\n\n.surface-600 {\n  background-color: var(--surface-600) !important;\n}\n\n.surface-700 {\n  background-color: var(--surface-700) !important;\n}\n\n.surface-800 {\n  background-color: var(--surface-800) !important;\n}\n\n.surface-900 {\n  background-color: var(--surface-900) !important;\n}\n\n.focus\\:surface-0:focus {\n  background-color: var(--surface-0) !important;\n}\n\n.hover\\:surface-0:hover {\n  background-color: var(--surface-0) !important;\n}\n\n.active\\:surface-0:active {\n  background-color: var(--surface-0) !important;\n}\n\n.focus\\:surface-50:focus {\n  background-color: var(--surface-50) !important;\n}\n\n.hover\\:surface-50:hover {\n  background-color: var(--surface-50) !important;\n}\n\n.active\\:surface-50:active {\n  background-color: var(--surface-50) !important;\n}\n\n.focus\\:surface-100:focus {\n  background-color: var(--surface-100) !important;\n}\n\n.hover\\:surface-100:hover {\n  background-color: var(--surface-100) !important;\n}\n\n.active\\:surface-100:active {\n  background-color: var(--surface-100) !important;\n}\n\n.focus\\:surface-200:focus {\n  background-color: var(--surface-200) !important;\n}\n\n.hover\\:surface-200:hover {\n  background-color: var(--surface-200) !important;\n}\n\n.active\\:surface-200:active {\n  background-color: var(--surface-200) !important;\n}\n\n.focus\\:surface-300:focus {\n  background-color: var(--surface-300) !important;\n}\n\n.hover\\:surface-300:hover {\n  background-color: var(--surface-300) !important;\n}\n\n.active\\:surface-300:active {\n  background-color: var(--surface-300) !important;\n}\n\n.focus\\:surface-400:focus {\n  background-color: var(--surface-400) !important;\n}\n\n.hover\\:surface-400:hover {\n  background-color: var(--surface-400) !important;\n}\n\n.active\\:surface-400:active {\n  background-color: var(--surface-400) !important;\n}\n\n.focus\\:surface-500:focus {\n  background-color: var(--surface-500) !important;\n}\n\n.hover\\:surface-500:hover {\n  background-color: var(--surface-500) !important;\n}\n\n.active\\:surface-500:active {\n  background-color: var(--surface-500) !important;\n}\n\n.focus\\:surface-600:focus {\n  background-color: var(--surface-600) !important;\n}\n\n.hover\\:surface-600:hover {\n  background-color: var(--surface-600) !important;\n}\n\n.active\\:surface-600:active {\n  background-color: var(--surface-600) !important;\n}\n\n.focus\\:surface-700:focus {\n  background-color: var(--surface-700) !important;\n}\n\n.hover\\:surface-700:hover {\n  background-color: var(--surface-700) !important;\n}\n\n.active\\:surface-700:active {\n  background-color: var(--surface-700) !important;\n}\n\n.focus\\:surface-800:focus {\n  background-color: var(--surface-800) !important;\n}\n\n.hover\\:surface-800:hover {\n  background-color: var(--surface-800) !important;\n}\n\n.active\\:surface-800:active {\n  background-color: var(--surface-800) !important;\n}\n\n.focus\\:surface-900:focus {\n  background-color: var(--surface-900) !important;\n}\n\n.hover\\:surface-900:hover {\n  background-color: var(--surface-900) !important;\n}\n\n.active\\:surface-900:active {\n  background-color: var(--surface-900) !important;\n}\n\n.border-0 {\n  border-color: var(--surface-0) !important;\n}\n\n.border-50 {\n  border-color: var(--surface-50) !important;\n}\n\n.border-100 {\n  border-color: var(--surface-100) !important;\n}\n\n.border-200 {\n  border-color: var(--surface-200) !important;\n}\n\n.border-300 {\n  border-color: var(--surface-300) !important;\n}\n\n.border-400 {\n  border-color: var(--surface-400) !important;\n}\n\n.border-500 {\n  border-color: var(--surface-500) !important;\n}\n\n.border-600 {\n  border-color: var(--surface-600) !important;\n}\n\n.border-700 {\n  border-color: var(--surface-700) !important;\n}\n\n.border-800 {\n  border-color: var(--surface-800) !important;\n}\n\n.border-900 {\n  border-color: var(--surface-900) !important;\n}\n\n.focus\\:border-0:focus {\n  border-color: var(--surface-0) !important;\n}\n\n.hover\\:border-0:hover {\n  border-color: var(--surface-0) !important;\n}\n\n.active\\:border-0:active {\n  border-color: var(--surface-0) !important;\n}\n\n.focus\\:border-50:focus {\n  border-color: var(--surface-50) !important;\n}\n\n.hover\\:border-50:hover {\n  border-color: var(--surface-50) !important;\n}\n\n.active\\:border-50:active {\n  border-color: var(--surface-50) !important;\n}\n\n.focus\\:border-100:focus {\n  border-color: var(--surface-100) !important;\n}\n\n.hover\\:border-100:hover {\n  border-color: var(--surface-100) !important;\n}\n\n.active\\:border-100:active {\n  border-color: var(--surface-100) !important;\n}\n\n.focus\\:border-200:focus {\n  border-color: var(--surface-200) !important;\n}\n\n.hover\\:border-200:hover {\n  border-color: var(--surface-200) !important;\n}\n\n.active\\:border-200:active {\n  border-color: var(--surface-200) !important;\n}\n\n.focus\\:border-300:focus {\n  border-color: var(--surface-300) !important;\n}\n\n.hover\\:border-300:hover {\n  border-color: var(--surface-300) !important;\n}\n\n.active\\:border-300:active {\n  border-color: var(--surface-300) !important;\n}\n\n.focus\\:border-400:focus {\n  border-color: var(--surface-400) !important;\n}\n\n.hover\\:border-400:hover {\n  border-color: var(--surface-400) !important;\n}\n\n.active\\:border-400:active {\n  border-color: var(--surface-400) !important;\n}\n\n.focus\\:border-500:focus {\n  border-color: var(--surface-500) !important;\n}\n\n.hover\\:border-500:hover {\n  border-color: var(--surface-500) !important;\n}\n\n.active\\:border-500:active {\n  border-color: var(--surface-500) !important;\n}\n\n.focus\\:border-600:focus {\n  border-color: var(--surface-600) !important;\n}\n\n.hover\\:border-600:hover {\n  border-color: var(--surface-600) !important;\n}\n\n.active\\:border-600:active {\n  border-color: var(--surface-600) !important;\n}\n\n.focus\\:border-700:focus {\n  border-color: var(--surface-700) !important;\n}\n\n.hover\\:border-700:hover {\n  border-color: var(--surface-700) !important;\n}\n\n.active\\:border-700:active {\n  border-color: var(--surface-700) !important;\n}\n\n.focus\\:border-800:focus {\n  border-color: var(--surface-800) !important;\n}\n\n.hover\\:border-800:hover {\n  border-color: var(--surface-800) !important;\n}\n\n.active\\:border-800:active {\n  border-color: var(--surface-800) !important;\n}\n\n.focus\\:border-900:focus {\n  border-color: var(--surface-900) !important;\n}\n\n.hover\\:border-900:hover {\n  border-color: var(--surface-900) !important;\n}\n\n.active\\:border-900:active {\n  border-color: var(--surface-900) !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:bg-transparent {\n    background-color: transparent !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:bg-transparent {\n    background-color: transparent !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:bg-transparent {\n    background-color: transparent !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:bg-transparent {\n    background-color: transparent !important;\n  }\n}\n.border-transparent {\n  border-color: transparent !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:border-transparent {\n    border-color: transparent !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:border-transparent {\n    border-color: transparent !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:border-transparent {\n    border-color: transparent !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:border-transparent {\n    border-color: transparent !important;\n  }\n}\n.text-blue-50 {\n  color: var(--blue-50) !important;\n}\n.text-blue-100 {\n  color: var(--blue-100) !important;\n}\n.text-blue-200 {\n  color: var(--blue-200) !important;\n}\n.text-blue-300 {\n  color: var(--blue-300) !important;\n}\n.text-blue-400 {\n  color: var(--blue-400) !important;\n}\n.text-blue-500 {\n  color: var(--blue-500) !important;\n}\n.text-blue-600 {\n  color: var(--blue-600) !important;\n}\n.text-blue-700 {\n  color: var(--blue-700) !important;\n}\n.text-blue-800 {\n  color: var(--blue-800) !important;\n}\n.text-blue-900 {\n  color: var(--blue-900) !important;\n}\n\n.focus\\:text-blue-50:focus {\n  color: var(--blue-50) !important;\n}\n.focus\\:text-blue-100:focus {\n  color: var(--blue-100) !important;\n}\n.focus\\:text-blue-200:focus {\n  color: var(--blue-200) !important;\n}\n.focus\\:text-blue-300:focus {\n  color: var(--blue-300) !important;\n}\n.focus\\:text-blue-400:focus {\n  color: var(--blue-400) !important;\n}\n.focus\\:text-blue-500:focus {\n  color: var(--blue-500) !important;\n}\n.focus\\:text-blue-600:focus {\n  color: var(--blue-600) !important;\n}\n.focus\\:text-blue-700:focus {\n  color: var(--blue-700) !important;\n}\n.focus\\:text-blue-800:focus {\n  color: var(--blue-800) !important;\n}\n.focus\\:text-blue-900:focus {\n  color: var(--blue-900) !important;\n}\n\n.hover\\:text-blue-50:hover {\n  color: var(--blue-50) !important;\n}\n.hover\\:text-blue-100:hover {\n  color: var(--blue-100) !important;\n}\n.hover\\:text-blue-200:hover {\n  color: var(--blue-200) !important;\n}\n.hover\\:text-blue-300:hover {\n  color: var(--blue-300) !important;\n}\n.hover\\:text-blue-400:hover {\n  color: var(--blue-400) !important;\n}\n.hover\\:text-blue-500:hover {\n  color: var(--blue-500) !important;\n}\n.hover\\:text-blue-600:hover {\n  color: var(--blue-600) !important;\n}\n.hover\\:text-blue-700:hover {\n  color: var(--blue-700) !important;\n}\n.hover\\:text-blue-800:hover {\n  color: var(--blue-800) !important;\n}\n.hover\\:text-blue-900:hover {\n  color: var(--blue-900) !important;\n}\n\n.active\\:text-blue-50:active {\n  color: var(--blue-50) !important;\n}\n.active\\:text-blue-100:active {\n  color: var(--blue-100) !important;\n}\n.active\\:text-blue-200:active {\n  color: var(--blue-200) !important;\n}\n.active\\:text-blue-300:active {\n  color: var(--blue-300) !important;\n}\n.active\\:text-blue-400:active {\n  color: var(--blue-400) !important;\n}\n.active\\:text-blue-500:active {\n  color: var(--blue-500) !important;\n}\n.active\\:text-blue-600:active {\n  color: var(--blue-600) !important;\n}\n.active\\:text-blue-700:active {\n  color: var(--blue-700) !important;\n}\n.active\\:text-blue-800:active {\n  color: var(--blue-800) !important;\n}\n.active\\:text-blue-900:active {\n  color: var(--blue-900) !important;\n}\n\n.text-green-50 {\n  color: var(--green-50) !important;\n}\n.text-green-100 {\n  color: var(--green-100) !important;\n}\n.text-green-200 {\n  color: var(--green-200) !important;\n}\n.text-green-300 {\n  color: var(--green-300) !important;\n}\n.text-green-400 {\n  color: var(--green-400) !important;\n}\n.text-green-500 {\n  color: var(--green-500) !important;\n}\n.text-green-600 {\n  color: var(--green-600) !important;\n}\n.text-green-700 {\n  color: var(--green-700) !important;\n}\n.text-green-800 {\n  color: var(--green-800) !important;\n}\n.text-green-900 {\n  color: var(--green-900) !important;\n}\n\n.focus\\:text-green-50:focus {\n  color: var(--green-50) !important;\n}\n.focus\\:text-green-100:focus {\n  color: var(--green-100) !important;\n}\n.focus\\:text-green-200:focus {\n  color: var(--green-200) !important;\n}\n.focus\\:text-green-300:focus {\n  color: var(--green-300) !important;\n}\n.focus\\:text-green-400:focus {\n  color: var(--green-400) !important;\n}\n.focus\\:text-green-500:focus {\n  color: var(--green-500) !important;\n}\n.focus\\:text-green-600:focus {\n  color: var(--green-600) !important;\n}\n.focus\\:text-green-700:focus {\n  color: var(--green-700) !important;\n}\n.focus\\:text-green-800:focus {\n  color: var(--green-800) !important;\n}\n.focus\\:text-green-900:focus {\n  color: var(--green-900) !important;\n}\n\n.hover\\:text-green-50:hover {\n  color: var(--green-50) !important;\n}\n.hover\\:text-green-100:hover {\n  color: var(--green-100) !important;\n}\n.hover\\:text-green-200:hover {\n  color: var(--green-200) !important;\n}\n.hover\\:text-green-300:hover {\n  color: var(--green-300) !important;\n}\n.hover\\:text-green-400:hover {\n  color: var(--green-400) !important;\n}\n.hover\\:text-green-500:hover {\n  color: var(--green-500) !important;\n}\n.hover\\:text-green-600:hover {\n  color: var(--green-600) !important;\n}\n.hover\\:text-green-700:hover {\n  color: var(--green-700) !important;\n}\n.hover\\:text-green-800:hover {\n  color: var(--green-800) !important;\n}\n.hover\\:text-green-900:hover {\n  color: var(--green-900) !important;\n}\n\n.active\\:text-green-50:active {\n  color: var(--green-50) !important;\n}\n.active\\:text-green-100:active {\n  color: var(--green-100) !important;\n}\n.active\\:text-green-200:active {\n  color: var(--green-200) !important;\n}\n.active\\:text-green-300:active {\n  color: var(--green-300) !important;\n}\n.active\\:text-green-400:active {\n  color: var(--green-400) !important;\n}\n.active\\:text-green-500:active {\n  color: var(--green-500) !important;\n}\n.active\\:text-green-600:active {\n  color: var(--green-600) !important;\n}\n.active\\:text-green-700:active {\n  color: var(--green-700) !important;\n}\n.active\\:text-green-800:active {\n  color: var(--green-800) !important;\n}\n.active\\:text-green-900:active {\n  color: var(--green-900) !important;\n}\n\n.text-yellow-50 {\n  color: var(--yellow-50) !important;\n}\n.text-yellow-100 {\n  color: var(--yellow-100) !important;\n}\n.text-yellow-200 {\n  color: var(--yellow-200) !important;\n}\n.text-yellow-300 {\n  color: var(--yellow-300) !important;\n}\n.text-yellow-400 {\n  color: var(--yellow-400) !important;\n}\n.text-yellow-500 {\n  color: var(--yellow-500) !important;\n}\n.text-yellow-600 {\n  color: var(--yellow-600) !important;\n}\n.text-yellow-700 {\n  color: var(--yellow-700) !important;\n}\n.text-yellow-800 {\n  color: var(--yellow-800) !important;\n}\n.text-yellow-900 {\n  color: var(--yellow-900) !important;\n}\n\n.focus\\:text-yellow-50:focus {\n  color: var(--yellow-50) !important;\n}\n.focus\\:text-yellow-100:focus {\n  color: var(--yellow-100) !important;\n}\n.focus\\:text-yellow-200:focus {\n  color: var(--yellow-200) !important;\n}\n.focus\\:text-yellow-300:focus {\n  color: var(--yellow-300) !important;\n}\n.focus\\:text-yellow-400:focus {\n  color: var(--yellow-400) !important;\n}\n.focus\\:text-yellow-500:focus {\n  color: var(--yellow-500) !important;\n}\n.focus\\:text-yellow-600:focus {\n  color: var(--yellow-600) !important;\n}\n.focus\\:text-yellow-700:focus {\n  color: var(--yellow-700) !important;\n}\n.focus\\:text-yellow-800:focus {\n  color: var(--yellow-800) !important;\n}\n.focus\\:text-yellow-900:focus {\n  color: var(--yellow-900) !important;\n}\n\n.hover\\:text-yellow-50:hover {\n  color: var(--yellow-50) !important;\n}\n.hover\\:text-yellow-100:hover {\n  color: var(--yellow-100) !important;\n}\n.hover\\:text-yellow-200:hover {\n  color: var(--yellow-200) !important;\n}\n.hover\\:text-yellow-300:hover {\n  color: var(--yellow-300) !important;\n}\n.hover\\:text-yellow-400:hover {\n  color: var(--yellow-400) !important;\n}\n.hover\\:text-yellow-500:hover {\n  color: var(--yellow-500) !important;\n}\n.hover\\:text-yellow-600:hover {\n  color: var(--yellow-600) !important;\n}\n.hover\\:text-yellow-700:hover {\n  color: var(--yellow-700) !important;\n}\n.hover\\:text-yellow-800:hover {\n  color: var(--yellow-800) !important;\n}\n.hover\\:text-yellow-900:hover {\n  color: var(--yellow-900) !important;\n}\n\n.active\\:text-yellow-50:active {\n  color: var(--yellow-50) !important;\n}\n.active\\:text-yellow-100:active {\n  color: var(--yellow-100) !important;\n}\n.active\\:text-yellow-200:active {\n  color: var(--yellow-200) !important;\n}\n.active\\:text-yellow-300:active {\n  color: var(--yellow-300) !important;\n}\n.active\\:text-yellow-400:active {\n  color: var(--yellow-400) !important;\n}\n.active\\:text-yellow-500:active {\n  color: var(--yellow-500) !important;\n}\n.active\\:text-yellow-600:active {\n  color: var(--yellow-600) !important;\n}\n.active\\:text-yellow-700:active {\n  color: var(--yellow-700) !important;\n}\n.active\\:text-yellow-800:active {\n  color: var(--yellow-800) !important;\n}\n.active\\:text-yellow-900:active {\n  color: var(--yellow-900) !important;\n}\n\n.text-cyan-50 {\n  color: var(--cyan-50) !important;\n}\n.text-cyan-100 {\n  color: var(--cyan-100) !important;\n}\n.text-cyan-200 {\n  color: var(--cyan-200) !important;\n}\n.text-cyan-300 {\n  color: var(--cyan-300) !important;\n}\n.text-cyan-400 {\n  color: var(--cyan-400) !important;\n}\n.text-cyan-500 {\n  color: var(--cyan-500) !important;\n}\n.text-cyan-600 {\n  color: var(--cyan-600) !important;\n}\n.text-cyan-700 {\n  color: var(--cyan-700) !important;\n}\n.text-cyan-800 {\n  color: var(--cyan-800) !important;\n}\n.text-cyan-900 {\n  color: var(--cyan-900) !important;\n}\n\n.focus\\:text-cyan-50:focus {\n  color: var(--cyan-50) !important;\n}\n.focus\\:text-cyan-100:focus {\n  color: var(--cyan-100) !important;\n}\n.focus\\:text-cyan-200:focus {\n  color: var(--cyan-200) !important;\n}\n.focus\\:text-cyan-300:focus {\n  color: var(--cyan-300) !important;\n}\n.focus\\:text-cyan-400:focus {\n  color: var(--cyan-400) !important;\n}\n.focus\\:text-cyan-500:focus {\n  color: var(--cyan-500) !important;\n}\n.focus\\:text-cyan-600:focus {\n  color: var(--cyan-600) !important;\n}\n.focus\\:text-cyan-700:focus {\n  color: var(--cyan-700) !important;\n}\n.focus\\:text-cyan-800:focus {\n  color: var(--cyan-800) !important;\n}\n.focus\\:text-cyan-900:focus {\n  color: var(--cyan-900) !important;\n}\n\n.hover\\:text-cyan-50:hover {\n  color: var(--cyan-50) !important;\n}\n.hover\\:text-cyan-100:hover {\n  color: var(--cyan-100) !important;\n}\n.hover\\:text-cyan-200:hover {\n  color: var(--cyan-200) !important;\n}\n.hover\\:text-cyan-300:hover {\n  color: var(--cyan-300) !important;\n}\n.hover\\:text-cyan-400:hover {\n  color: var(--cyan-400) !important;\n}\n.hover\\:text-cyan-500:hover {\n  color: var(--cyan-500) !important;\n}\n.hover\\:text-cyan-600:hover {\n  color: var(--cyan-600) !important;\n}\n.hover\\:text-cyan-700:hover {\n  color: var(--cyan-700) !important;\n}\n.hover\\:text-cyan-800:hover {\n  color: var(--cyan-800) !important;\n}\n.hover\\:text-cyan-900:hover {\n  color: var(--cyan-900) !important;\n}\n\n.active\\:text-cyan-50:active {\n  color: var(--cyan-50) !important;\n}\n.active\\:text-cyan-100:active {\n  color: var(--cyan-100) !important;\n}\n.active\\:text-cyan-200:active {\n  color: var(--cyan-200) !important;\n}\n.active\\:text-cyan-300:active {\n  color: var(--cyan-300) !important;\n}\n.active\\:text-cyan-400:active {\n  color: var(--cyan-400) !important;\n}\n.active\\:text-cyan-500:active {\n  color: var(--cyan-500) !important;\n}\n.active\\:text-cyan-600:active {\n  color: var(--cyan-600) !important;\n}\n.active\\:text-cyan-700:active {\n  color: var(--cyan-700) !important;\n}\n.active\\:text-cyan-800:active {\n  color: var(--cyan-800) !important;\n}\n.active\\:text-cyan-900:active {\n  color: var(--cyan-900) !important;\n}\n\n.text-pink-50 {\n  color: var(--pink-50) !important;\n}\n.text-pink-100 {\n  color: var(--pink-100) !important;\n}\n.text-pink-200 {\n  color: var(--pink-200) !important;\n}\n.text-pink-300 {\n  color: var(--pink-300) !important;\n}\n.text-pink-400 {\n  color: var(--pink-400) !important;\n}\n.text-pink-500 {\n  color: var(--pink-500) !important;\n}\n.text-pink-600 {\n  color: var(--pink-600) !important;\n}\n.text-pink-700 {\n  color: var(--pink-700) !important;\n}\n.text-pink-800 {\n  color: var(--pink-800) !important;\n}\n.text-pink-900 {\n  color: var(--pink-900) !important;\n}\n\n.focus\\:text-pink-50:focus {\n  color: var(--pink-50) !important;\n}\n.focus\\:text-pink-100:focus {\n  color: var(--pink-100) !important;\n}\n.focus\\:text-pink-200:focus {\n  color: var(--pink-200) !important;\n}\n.focus\\:text-pink-300:focus {\n  color: var(--pink-300) !important;\n}\n.focus\\:text-pink-400:focus {\n  color: var(--pink-400) !important;\n}\n.focus\\:text-pink-500:focus {\n  color: var(--pink-500) !important;\n}\n.focus\\:text-pink-600:focus {\n  color: var(--pink-600) !important;\n}\n.focus\\:text-pink-700:focus {\n  color: var(--pink-700) !important;\n}\n.focus\\:text-pink-800:focus {\n  color: var(--pink-800) !important;\n}\n.focus\\:text-pink-900:focus {\n  color: var(--pink-900) !important;\n}\n\n.hover\\:text-pink-50:hover {\n  color: var(--pink-50) !important;\n}\n.hover\\:text-pink-100:hover {\n  color: var(--pink-100) !important;\n}\n.hover\\:text-pink-200:hover {\n  color: var(--pink-200) !important;\n}\n.hover\\:text-pink-300:hover {\n  color: var(--pink-300) !important;\n}\n.hover\\:text-pink-400:hover {\n  color: var(--pink-400) !important;\n}\n.hover\\:text-pink-500:hover {\n  color: var(--pink-500) !important;\n}\n.hover\\:text-pink-600:hover {\n  color: var(--pink-600) !important;\n}\n.hover\\:text-pink-700:hover {\n  color: var(--pink-700) !important;\n}\n.hover\\:text-pink-800:hover {\n  color: var(--pink-800) !important;\n}\n.hover\\:text-pink-900:hover {\n  color: var(--pink-900) !important;\n}\n\n.active\\:text-pink-50:active {\n  color: var(--pink-50) !important;\n}\n.active\\:text-pink-100:active {\n  color: var(--pink-100) !important;\n}\n.active\\:text-pink-200:active {\n  color: var(--pink-200) !important;\n}\n.active\\:text-pink-300:active {\n  color: var(--pink-300) !important;\n}\n.active\\:text-pink-400:active {\n  color: var(--pink-400) !important;\n}\n.active\\:text-pink-500:active {\n  color: var(--pink-500) !important;\n}\n.active\\:text-pink-600:active {\n  color: var(--pink-600) !important;\n}\n.active\\:text-pink-700:active {\n  color: var(--pink-700) !important;\n}\n.active\\:text-pink-800:active {\n  color: var(--pink-800) !important;\n}\n.active\\:text-pink-900:active {\n  color: var(--pink-900) !important;\n}\n\n.text-indigo-50 {\n  color: var(--indigo-50) !important;\n}\n.text-indigo-100 {\n  color: var(--indigo-100) !important;\n}\n.text-indigo-200 {\n  color: var(--indigo-200) !important;\n}\n.text-indigo-300 {\n  color: var(--indigo-300) !important;\n}\n.text-indigo-400 {\n  color: var(--indigo-400) !important;\n}\n.text-indigo-500 {\n  color: var(--indigo-500) !important;\n}\n.text-indigo-600 {\n  color: var(--indigo-600) !important;\n}\n.text-indigo-700 {\n  color: var(--indigo-700) !important;\n}\n.text-indigo-800 {\n  color: var(--indigo-800) !important;\n}\n.text-indigo-900 {\n  color: var(--indigo-900) !important;\n}\n\n.focus\\:text-indigo-50:focus {\n  color: var(--indigo-50) !important;\n}\n.focus\\:text-indigo-100:focus {\n  color: var(--indigo-100) !important;\n}\n.focus\\:text-indigo-200:focus {\n  color: var(--indigo-200) !important;\n}\n.focus\\:text-indigo-300:focus {\n  color: var(--indigo-300) !important;\n}\n.focus\\:text-indigo-400:focus {\n  color: var(--indigo-400) !important;\n}\n.focus\\:text-indigo-500:focus {\n  color: var(--indigo-500) !important;\n}\n.focus\\:text-indigo-600:focus {\n  color: var(--indigo-600) !important;\n}\n.focus\\:text-indigo-700:focus {\n  color: var(--indigo-700) !important;\n}\n.focus\\:text-indigo-800:focus {\n  color: var(--indigo-800) !important;\n}\n.focus\\:text-indigo-900:focus {\n  color: var(--indigo-900) !important;\n}\n\n.hover\\:text-indigo-50:hover {\n  color: var(--indigo-50) !important;\n}\n.hover\\:text-indigo-100:hover {\n  color: var(--indigo-100) !important;\n}\n.hover\\:text-indigo-200:hover {\n  color: var(--indigo-200) !important;\n}\n.hover\\:text-indigo-300:hover {\n  color: var(--indigo-300) !important;\n}\n.hover\\:text-indigo-400:hover {\n  color: var(--indigo-400) !important;\n}\n.hover\\:text-indigo-500:hover {\n  color: var(--indigo-500) !important;\n}\n.hover\\:text-indigo-600:hover {\n  color: var(--indigo-600) !important;\n}\n.hover\\:text-indigo-700:hover {\n  color: var(--indigo-700) !important;\n}\n.hover\\:text-indigo-800:hover {\n  color: var(--indigo-800) !important;\n}\n.hover\\:text-indigo-900:hover {\n  color: var(--indigo-900) !important;\n}\n\n.active\\:text-indigo-50:active {\n  color: var(--indigo-50) !important;\n}\n.active\\:text-indigo-100:active {\n  color: var(--indigo-100) !important;\n}\n.active\\:text-indigo-200:active {\n  color: var(--indigo-200) !important;\n}\n.active\\:text-indigo-300:active {\n  color: var(--indigo-300) !important;\n}\n.active\\:text-indigo-400:active {\n  color: var(--indigo-400) !important;\n}\n.active\\:text-indigo-500:active {\n  color: var(--indigo-500) !important;\n}\n.active\\:text-indigo-600:active {\n  color: var(--indigo-600) !important;\n}\n.active\\:text-indigo-700:active {\n  color: var(--indigo-700) !important;\n}\n.active\\:text-indigo-800:active {\n  color: var(--indigo-800) !important;\n}\n.active\\:text-indigo-900:active {\n  color: var(--indigo-900) !important;\n}\n\n.text-teal-50 {\n  color: var(--teal-50) !important;\n}\n.text-teal-100 {\n  color: var(--teal-100) !important;\n}\n.text-teal-200 {\n  color: var(--teal-200) !important;\n}\n.text-teal-300 {\n  color: var(--teal-300) !important;\n}\n.text-teal-400 {\n  color: var(--teal-400) !important;\n}\n.text-teal-500 {\n  color: var(--teal-500) !important;\n}\n.text-teal-600 {\n  color: var(--teal-600) !important;\n}\n.text-teal-700 {\n  color: var(--teal-700) !important;\n}\n.text-teal-800 {\n  color: var(--teal-800) !important;\n}\n.text-teal-900 {\n  color: var(--teal-900) !important;\n}\n\n.focus\\:text-teal-50:focus {\n  color: var(--teal-50) !important;\n}\n.focus\\:text-teal-100:focus {\n  color: var(--teal-100) !important;\n}\n.focus\\:text-teal-200:focus {\n  color: var(--teal-200) !important;\n}\n.focus\\:text-teal-300:focus {\n  color: var(--teal-300) !important;\n}\n.focus\\:text-teal-400:focus {\n  color: var(--teal-400) !important;\n}\n.focus\\:text-teal-500:focus {\n  color: var(--teal-500) !important;\n}\n.focus\\:text-teal-600:focus {\n  color: var(--teal-600) !important;\n}\n.focus\\:text-teal-700:focus {\n  color: var(--teal-700) !important;\n}\n.focus\\:text-teal-800:focus {\n  color: var(--teal-800) !important;\n}\n.focus\\:text-teal-900:focus {\n  color: var(--teal-900) !important;\n}\n\n.hover\\:text-teal-50:hover {\n  color: var(--teal-50) !important;\n}\n.hover\\:text-teal-100:hover {\n  color: var(--teal-100) !important;\n}\n.hover\\:text-teal-200:hover {\n  color: var(--teal-200) !important;\n}\n.hover\\:text-teal-300:hover {\n  color: var(--teal-300) !important;\n}\n.hover\\:text-teal-400:hover {\n  color: var(--teal-400) !important;\n}\n.hover\\:text-teal-500:hover {\n  color: var(--teal-500) !important;\n}\n.hover\\:text-teal-600:hover {\n  color: var(--teal-600) !important;\n}\n.hover\\:text-teal-700:hover {\n  color: var(--teal-700) !important;\n}\n.hover\\:text-teal-800:hover {\n  color: var(--teal-800) !important;\n}\n.hover\\:text-teal-900:hover {\n  color: var(--teal-900) !important;\n}\n\n.active\\:text-teal-50:active {\n  color: var(--teal-50) !important;\n}\n.active\\:text-teal-100:active {\n  color: var(--teal-100) !important;\n}\n.active\\:text-teal-200:active {\n  color: var(--teal-200) !important;\n}\n.active\\:text-teal-300:active {\n  color: var(--teal-300) !important;\n}\n.active\\:text-teal-400:active {\n  color: var(--teal-400) !important;\n}\n.active\\:text-teal-500:active {\n  color: var(--teal-500) !important;\n}\n.active\\:text-teal-600:active {\n  color: var(--teal-600) !important;\n}\n.active\\:text-teal-700:active {\n  color: var(--teal-700) !important;\n}\n.active\\:text-teal-800:active {\n  color: var(--teal-800) !important;\n}\n.active\\:text-teal-900:active {\n  color: var(--teal-900) !important;\n}\n\n.text-orange-50 {\n  color: var(--orange-50) !important;\n}\n.text-orange-100 {\n  color: var(--orange-100) !important;\n}\n.text-orange-200 {\n  color: var(--orange-200) !important;\n}\n.text-orange-300 {\n  color: var(--orange-300) !important;\n}\n.text-orange-400 {\n  color: var(--orange-400) !important;\n}\n.text-orange-500 {\n  color: var(--orange-500) !important;\n}\n.text-orange-600 {\n  color: var(--orange-600) !important;\n}\n.text-orange-700 {\n  color: var(--orange-700) !important;\n}\n.text-orange-800 {\n  color: var(--orange-800) !important;\n}\n.text-orange-900 {\n  color: var(--orange-900) !important;\n}\n\n.focus\\:text-orange-50:focus {\n  color: var(--orange-50) !important;\n}\n.focus\\:text-orange-100:focus {\n  color: var(--orange-100) !important;\n}\n.focus\\:text-orange-200:focus {\n  color: var(--orange-200) !important;\n}\n.focus\\:text-orange-300:focus {\n  color: var(--orange-300) !important;\n}\n.focus\\:text-orange-400:focus {\n  color: var(--orange-400) !important;\n}\n.focus\\:text-orange-500:focus {\n  color: var(--orange-500) !important;\n}\n.focus\\:text-orange-600:focus {\n  color: var(--orange-600) !important;\n}\n.focus\\:text-orange-700:focus {\n  color: var(--orange-700) !important;\n}\n.focus\\:text-orange-800:focus {\n  color: var(--orange-800) !important;\n}\n.focus\\:text-orange-900:focus {\n  color: var(--orange-900) !important;\n}\n\n.hover\\:text-orange-50:hover {\n  color: var(--orange-50) !important;\n}\n.hover\\:text-orange-100:hover {\n  color: var(--orange-100) !important;\n}\n.hover\\:text-orange-200:hover {\n  color: var(--orange-200) !important;\n}\n.hover\\:text-orange-300:hover {\n  color: var(--orange-300) !important;\n}\n.hover\\:text-orange-400:hover {\n  color: var(--orange-400) !important;\n}\n.hover\\:text-orange-500:hover {\n  color: var(--orange-500) !important;\n}\n.hover\\:text-orange-600:hover {\n  color: var(--orange-600) !important;\n}\n.hover\\:text-orange-700:hover {\n  color: var(--orange-700) !important;\n}\n.hover\\:text-orange-800:hover {\n  color: var(--orange-800) !important;\n}\n.hover\\:text-orange-900:hover {\n  color: var(--orange-900) !important;\n}\n\n.active\\:text-orange-50:active {\n  color: var(--orange-50) !important;\n}\n.active\\:text-orange-100:active {\n  color: var(--orange-100) !important;\n}\n.active\\:text-orange-200:active {\n  color: var(--orange-200) !important;\n}\n.active\\:text-orange-300:active {\n  color: var(--orange-300) !important;\n}\n.active\\:text-orange-400:active {\n  color: var(--orange-400) !important;\n}\n.active\\:text-orange-500:active {\n  color: var(--orange-500) !important;\n}\n.active\\:text-orange-600:active {\n  color: var(--orange-600) !important;\n}\n.active\\:text-orange-700:active {\n  color: var(--orange-700) !important;\n}\n.active\\:text-orange-800:active {\n  color: var(--orange-800) !important;\n}\n.active\\:text-orange-900:active {\n  color: var(--orange-900) !important;\n}\n\n.text-bluegray-50 {\n  color: var(--bluegray-50) !important;\n}\n.text-bluegray-100 {\n  color: var(--bluegray-100) !important;\n}\n.text-bluegray-200 {\n  color: var(--bluegray-200) !important;\n}\n.text-bluegray-300 {\n  color: var(--bluegray-300) !important;\n}\n.text-bluegray-400 {\n  color: var(--bluegray-400) !important;\n}\n.text-bluegray-500 {\n  color: var(--bluegray-500) !important;\n}\n.text-bluegray-600 {\n  color: var(--bluegray-600) !important;\n}\n.text-bluegray-700 {\n  color: var(--bluegray-700) !important;\n}\n.text-bluegray-800 {\n  color: var(--bluegray-800) !important;\n}\n.text-bluegray-900 {\n  color: var(--bluegray-900) !important;\n}\n\n.focus\\:text-bluegray-50:focus {\n  color: var(--bluegray-50) !important;\n}\n.focus\\:text-bluegray-100:focus {\n  color: var(--bluegray-100) !important;\n}\n.focus\\:text-bluegray-200:focus {\n  color: var(--bluegray-200) !important;\n}\n.focus\\:text-bluegray-300:focus {\n  color: var(--bluegray-300) !important;\n}\n.focus\\:text-bluegray-400:focus {\n  color: var(--bluegray-400) !important;\n}\n.focus\\:text-bluegray-500:focus {\n  color: var(--bluegray-500) !important;\n}\n.focus\\:text-bluegray-600:focus {\n  color: var(--bluegray-600) !important;\n}\n.focus\\:text-bluegray-700:focus {\n  color: var(--bluegray-700) !important;\n}\n.focus\\:text-bluegray-800:focus {\n  color: var(--bluegray-800) !important;\n}\n.focus\\:text-bluegray-900:focus {\n  color: var(--bluegray-900) !important;\n}\n\n.hover\\:text-bluegray-50:hover {\n  color: var(--bluegray-50) !important;\n}\n.hover\\:text-bluegray-100:hover {\n  color: var(--bluegray-100) !important;\n}\n.hover\\:text-bluegray-200:hover {\n  color: var(--bluegray-200) !important;\n}\n.hover\\:text-bluegray-300:hover {\n  color: var(--bluegray-300) !important;\n}\n.hover\\:text-bluegray-400:hover {\n  color: var(--bluegray-400) !important;\n}\n.hover\\:text-bluegray-500:hover {\n  color: var(--bluegray-500) !important;\n}\n.hover\\:text-bluegray-600:hover {\n  color: var(--bluegray-600) !important;\n}\n.hover\\:text-bluegray-700:hover {\n  color: var(--bluegray-700) !important;\n}\n.hover\\:text-bluegray-800:hover {\n  color: var(--bluegray-800) !important;\n}\n.hover\\:text-bluegray-900:hover {\n  color: var(--bluegray-900) !important;\n}\n\n.active\\:text-bluegray-50:active {\n  color: var(--bluegray-50) !important;\n}\n.active\\:text-bluegray-100:active {\n  color: var(--bluegray-100) !important;\n}\n.active\\:text-bluegray-200:active {\n  color: var(--bluegray-200) !important;\n}\n.active\\:text-bluegray-300:active {\n  color: var(--bluegray-300) !important;\n}\n.active\\:text-bluegray-400:active {\n  color: var(--bluegray-400) !important;\n}\n.active\\:text-bluegray-500:active {\n  color: var(--bluegray-500) !important;\n}\n.active\\:text-bluegray-600:active {\n  color: var(--bluegray-600) !important;\n}\n.active\\:text-bluegray-700:active {\n  color: var(--bluegray-700) !important;\n}\n.active\\:text-bluegray-800:active {\n  color: var(--bluegray-800) !important;\n}\n.active\\:text-bluegray-900:active {\n  color: var(--bluegray-900) !important;\n}\n\n.text-purple-50 {\n  color: var(--purple-50) !important;\n}\n.text-purple-100 {\n  color: var(--purple-100) !important;\n}\n.text-purple-200 {\n  color: var(--purple-200) !important;\n}\n.text-purple-300 {\n  color: var(--purple-300) !important;\n}\n.text-purple-400 {\n  color: var(--purple-400) !important;\n}\n.text-purple-500 {\n  color: var(--purple-500) !important;\n}\n.text-purple-600 {\n  color: var(--purple-600) !important;\n}\n.text-purple-700 {\n  color: var(--purple-700) !important;\n}\n.text-purple-800 {\n  color: var(--purple-800) !important;\n}\n.text-purple-900 {\n  color: var(--purple-900) !important;\n}\n\n.focus\\:text-purple-50:focus {\n  color: var(--purple-50) !important;\n}\n.focus\\:text-purple-100:focus {\n  color: var(--purple-100) !important;\n}\n.focus\\:text-purple-200:focus {\n  color: var(--purple-200) !important;\n}\n.focus\\:text-purple-300:focus {\n  color: var(--purple-300) !important;\n}\n.focus\\:text-purple-400:focus {\n  color: var(--purple-400) !important;\n}\n.focus\\:text-purple-500:focus {\n  color: var(--purple-500) !important;\n}\n.focus\\:text-purple-600:focus {\n  color: var(--purple-600) !important;\n}\n.focus\\:text-purple-700:focus {\n  color: var(--purple-700) !important;\n}\n.focus\\:text-purple-800:focus {\n  color: var(--purple-800) !important;\n}\n.focus\\:text-purple-900:focus {\n  color: var(--purple-900) !important;\n}\n\n.hover\\:text-purple-50:hover {\n  color: var(--purple-50) !important;\n}\n.hover\\:text-purple-100:hover {\n  color: var(--purple-100) !important;\n}\n.hover\\:text-purple-200:hover {\n  color: var(--purple-200) !important;\n}\n.hover\\:text-purple-300:hover {\n  color: var(--purple-300) !important;\n}\n.hover\\:text-purple-400:hover {\n  color: var(--purple-400) !important;\n}\n.hover\\:text-purple-500:hover {\n  color: var(--purple-500) !important;\n}\n.hover\\:text-purple-600:hover {\n  color: var(--purple-600) !important;\n}\n.hover\\:text-purple-700:hover {\n  color: var(--purple-700) !important;\n}\n.hover\\:text-purple-800:hover {\n  color: var(--purple-800) !important;\n}\n.hover\\:text-purple-900:hover {\n  color: var(--purple-900) !important;\n}\n\n.active\\:text-purple-50:active {\n  color: var(--purple-50) !important;\n}\n.active\\:text-purple-100:active {\n  color: var(--purple-100) !important;\n}\n.active\\:text-purple-200:active {\n  color: var(--purple-200) !important;\n}\n.active\\:text-purple-300:active {\n  color: var(--purple-300) !important;\n}\n.active\\:text-purple-400:active {\n  color: var(--purple-400) !important;\n}\n.active\\:text-purple-500:active {\n  color: var(--purple-500) !important;\n}\n.active\\:text-purple-600:active {\n  color: var(--purple-600) !important;\n}\n.active\\:text-purple-700:active {\n  color: var(--purple-700) !important;\n}\n.active\\:text-purple-800:active {\n  color: var(--purple-800) !important;\n}\n.active\\:text-purple-900:active {\n  color: var(--purple-900) !important;\n}\n\n.text-gray-50 {\n  color: var(--gray-50) !important;\n}\n.text-gray-100 {\n  color: var(--gray-100) !important;\n}\n.text-gray-200 {\n  color: var(--gray-200) !important;\n}\n.text-gray-300 {\n  color: var(--gray-300) !important;\n}\n.text-gray-400 {\n  color: var(--gray-400) !important;\n}\n.text-gray-500 {\n  color: var(--gray-500) !important;\n}\n.text-gray-600 {\n  color: var(--gray-600) !important;\n}\n.text-gray-700 {\n  color: var(--gray-700) !important;\n}\n.text-gray-800 {\n  color: var(--gray-800) !important;\n}\n.text-gray-900 {\n  color: var(--gray-900) !important;\n}\n\n.focus\\:text-gray-50:focus {\n  color: var(--gray-50) !important;\n}\n.focus\\:text-gray-100:focus {\n  color: var(--gray-100) !important;\n}\n.focus\\:text-gray-200:focus {\n  color: var(--gray-200) !important;\n}\n.focus\\:text-gray-300:focus {\n  color: var(--gray-300) !important;\n}\n.focus\\:text-gray-400:focus {\n  color: var(--gray-400) !important;\n}\n.focus\\:text-gray-500:focus {\n  color: var(--gray-500) !important;\n}\n.focus\\:text-gray-600:focus {\n  color: var(--gray-600) !important;\n}\n.focus\\:text-gray-700:focus {\n  color: var(--gray-700) !important;\n}\n.focus\\:text-gray-800:focus {\n  color: var(--gray-800) !important;\n}\n.focus\\:text-gray-900:focus {\n  color: var(--gray-900) !important;\n}\n\n.hover\\:text-gray-50:hover {\n  color: var(--gray-50) !important;\n}\n.hover\\:text-gray-100:hover {\n  color: var(--gray-100) !important;\n}\n.hover\\:text-gray-200:hover {\n  color: var(--gray-200) !important;\n}\n.hover\\:text-gray-300:hover {\n  color: var(--gray-300) !important;\n}\n.hover\\:text-gray-400:hover {\n  color: var(--gray-400) !important;\n}\n.hover\\:text-gray-500:hover {\n  color: var(--gray-500) !important;\n}\n.hover\\:text-gray-600:hover {\n  color: var(--gray-600) !important;\n}\n.hover\\:text-gray-700:hover {\n  color: var(--gray-700) !important;\n}\n.hover\\:text-gray-800:hover {\n  color: var(--gray-800) !important;\n}\n.hover\\:text-gray-900:hover {\n  color: var(--gray-900) !important;\n}\n\n.active\\:text-gray-50:active {\n  color: var(--gray-50) !important;\n}\n.active\\:text-gray-100:active {\n  color: var(--gray-100) !important;\n}\n.active\\:text-gray-200:active {\n  color: var(--gray-200) !important;\n}\n.active\\:text-gray-300:active {\n  color: var(--gray-300) !important;\n}\n.active\\:text-gray-400:active {\n  color: var(--gray-400) !important;\n}\n.active\\:text-gray-500:active {\n  color: var(--gray-500) !important;\n}\n.active\\:text-gray-600:active {\n  color: var(--gray-600) !important;\n}\n.active\\:text-gray-700:active {\n  color: var(--gray-700) !important;\n}\n.active\\:text-gray-800:active {\n  color: var(--gray-800) !important;\n}\n.active\\:text-gray-900:active {\n  color: var(--gray-900) !important;\n}\n\n.text-red-50 {\n  color: var(--red-50) !important;\n}\n.text-red-100 {\n  color: var(--red-100) !important;\n}\n.text-red-200 {\n  color: var(--red-200) !important;\n}\n.text-red-300 {\n  color: var(--red-300) !important;\n}\n.text-red-400 {\n  color: var(--red-400) !important;\n}\n.text-red-500 {\n  color: var(--red-500) !important;\n}\n.text-red-600 {\n  color: var(--red-600) !important;\n}\n.text-red-700 {\n  color: var(--red-700) !important;\n}\n.text-red-800 {\n  color: var(--red-800) !important;\n}\n.text-red-900 {\n  color: var(--red-900) !important;\n}\n\n.focus\\:text-red-50:focus {\n  color: var(--red-50) !important;\n}\n.focus\\:text-red-100:focus {\n  color: var(--red-100) !important;\n}\n.focus\\:text-red-200:focus {\n  color: var(--red-200) !important;\n}\n.focus\\:text-red-300:focus {\n  color: var(--red-300) !important;\n}\n.focus\\:text-red-400:focus {\n  color: var(--red-400) !important;\n}\n.focus\\:text-red-500:focus {\n  color: var(--red-500) !important;\n}\n.focus\\:text-red-600:focus {\n  color: var(--red-600) !important;\n}\n.focus\\:text-red-700:focus {\n  color: var(--red-700) !important;\n}\n.focus\\:text-red-800:focus {\n  color: var(--red-800) !important;\n}\n.focus\\:text-red-900:focus {\n  color: var(--red-900) !important;\n}\n\n.hover\\:text-red-50:hover {\n  color: var(--red-50) !important;\n}\n.hover\\:text-red-100:hover {\n  color: var(--red-100) !important;\n}\n.hover\\:text-red-200:hover {\n  color: var(--red-200) !important;\n}\n.hover\\:text-red-300:hover {\n  color: var(--red-300) !important;\n}\n.hover\\:text-red-400:hover {\n  color: var(--red-400) !important;\n}\n.hover\\:text-red-500:hover {\n  color: var(--red-500) !important;\n}\n.hover\\:text-red-600:hover {\n  color: var(--red-600) !important;\n}\n.hover\\:text-red-700:hover {\n  color: var(--red-700) !important;\n}\n.hover\\:text-red-800:hover {\n  color: var(--red-800) !important;\n}\n.hover\\:text-red-900:hover {\n  color: var(--red-900) !important;\n}\n\n.active\\:text-red-50:active {\n  color: var(--red-50) !important;\n}\n.active\\:text-red-100:active {\n  color: var(--red-100) !important;\n}\n.active\\:text-red-200:active {\n  color: var(--red-200) !important;\n}\n.active\\:text-red-300:active {\n  color: var(--red-300) !important;\n}\n.active\\:text-red-400:active {\n  color: var(--red-400) !important;\n}\n.active\\:text-red-500:active {\n  color: var(--red-500) !important;\n}\n.active\\:text-red-600:active {\n  color: var(--red-600) !important;\n}\n.active\\:text-red-700:active {\n  color: var(--red-700) !important;\n}\n.active\\:text-red-800:active {\n  color: var(--red-800) !important;\n}\n.active\\:text-red-900:active {\n  color: var(--red-900) !important;\n}\n\n.text-primary-50 {\n  color: var(--primary-50) !important;\n}\n.text-primary-100 {\n  color: var(--primary-100) !important;\n}\n.text-primary-200 {\n  color: var(--primary-200) !important;\n}\n.text-primary-300 {\n  color: var(--primary-300) !important;\n}\n.text-primary-400 {\n  color: var(--primary-400) !important;\n}\n.text-primary-500 {\n  color: var(--primary-500) !important;\n}\n.text-primary-600 {\n  color: var(--primary-600) !important;\n}\n.text-primary-700 {\n  color: var(--primary-700) !important;\n}\n.text-primary-800 {\n  color: var(--primary-800) !important;\n}\n.text-primary-900 {\n  color: var(--primary-900) !important;\n}\n\n.focus\\:text-primary-50:focus {\n  color: var(--primary-50) !important;\n}\n.focus\\:text-primary-100:focus {\n  color: var(--primary-100) !important;\n}\n.focus\\:text-primary-200:focus {\n  color: var(--primary-200) !important;\n}\n.focus\\:text-primary-300:focus {\n  color: var(--primary-300) !important;\n}\n.focus\\:text-primary-400:focus {\n  color: var(--primary-400) !important;\n}\n.focus\\:text-primary-500:focus {\n  color: var(--primary-500) !important;\n}\n.focus\\:text-primary-600:focus {\n  color: var(--primary-600) !important;\n}\n.focus\\:text-primary-700:focus {\n  color: var(--primary-700) !important;\n}\n.focus\\:text-primary-800:focus {\n  color: var(--primary-800) !important;\n}\n.focus\\:text-primary-900:focus {\n  color: var(--primary-900) !important;\n}\n\n.hover\\:text-primary-50:hover {\n  color: var(--primary-50) !important;\n}\n.hover\\:text-primary-100:hover {\n  color: var(--primary-100) !important;\n}\n.hover\\:text-primary-200:hover {\n  color: var(--primary-200) !important;\n}\n.hover\\:text-primary-300:hover {\n  color: var(--primary-300) !important;\n}\n.hover\\:text-primary-400:hover {\n  color: var(--primary-400) !important;\n}\n.hover\\:text-primary-500:hover {\n  color: var(--primary-500) !important;\n}\n.hover\\:text-primary-600:hover {\n  color: var(--primary-600) !important;\n}\n.hover\\:text-primary-700:hover {\n  color: var(--primary-700) !important;\n}\n.hover\\:text-primary-800:hover {\n  color: var(--primary-800) !important;\n}\n.hover\\:text-primary-900:hover {\n  color: var(--primary-900) !important;\n}\n\n.active\\:text-primary-50:active {\n  color: var(--primary-50) !important;\n}\n.active\\:text-primary-100:active {\n  color: var(--primary-100) !important;\n}\n.active\\:text-primary-200:active {\n  color: var(--primary-200) !important;\n}\n.active\\:text-primary-300:active {\n  color: var(--primary-300) !important;\n}\n.active\\:text-primary-400:active {\n  color: var(--primary-400) !important;\n}\n.active\\:text-primary-500:active {\n  color: var(--primary-500) !important;\n}\n.active\\:text-primary-600:active {\n  color: var(--primary-600) !important;\n}\n.active\\:text-primary-700:active {\n  color: var(--primary-700) !important;\n}\n.active\\:text-primary-800:active {\n  color: var(--primary-800) !important;\n}\n.active\\:text-primary-900:active {\n  color: var(--primary-900) !important;\n}\n\n.bg-blue-50 {\n  background-color: var(--blue-50) !important;\n}\n.bg-blue-100 {\n  background-color: var(--blue-100) !important;\n}\n.bg-blue-200 {\n  background-color: var(--blue-200) !important;\n}\n.bg-blue-300 {\n  background-color: var(--blue-300) !important;\n}\n.bg-blue-400 {\n  background-color: var(--blue-400) !important;\n}\n.bg-blue-500 {\n  background-color: var(--blue-500) !important;\n}\n.bg-blue-600 {\n  background-color: var(--blue-600) !important;\n}\n.bg-blue-700 {\n  background-color: var(--blue-700) !important;\n}\n.bg-blue-800 {\n  background-color: var(--blue-800) !important;\n}\n.bg-blue-900 {\n  background-color: var(--blue-900) !important;\n}\n\n.focus\\:bg-blue-50:focus {\n  background-color: var(--blue-50) !important;\n}\n.focus\\:bg-blue-100:focus {\n  background-color: var(--blue-100) !important;\n}\n.focus\\:bg-blue-200:focus {\n  background-color: var(--blue-200) !important;\n}\n.focus\\:bg-blue-300:focus {\n  background-color: var(--blue-300) !important;\n}\n.focus\\:bg-blue-400:focus {\n  background-color: var(--blue-400) !important;\n}\n.focus\\:bg-blue-500:focus {\n  background-color: var(--blue-500) !important;\n}\n.focus\\:bg-blue-600:focus {\n  background-color: var(--blue-600) !important;\n}\n.focus\\:bg-blue-700:focus {\n  background-color: var(--blue-700) !important;\n}\n.focus\\:bg-blue-800:focus {\n  background-color: var(--blue-800) !important;\n}\n.focus\\:bg-blue-900:focus {\n  background-color: var(--blue-900) !important;\n}\n\n.hover\\:bg-blue-50:hover {\n  background-color: var(--blue-50) !important;\n}\n.hover\\:bg-blue-100:hover {\n  background-color: var(--blue-100) !important;\n}\n.hover\\:bg-blue-200:hover {\n  background-color: var(--blue-200) !important;\n}\n.hover\\:bg-blue-300:hover {\n  background-color: var(--blue-300) !important;\n}\n.hover\\:bg-blue-400:hover {\n  background-color: var(--blue-400) !important;\n}\n.hover\\:bg-blue-500:hover {\n  background-color: var(--blue-500) !important;\n}\n.hover\\:bg-blue-600:hover {\n  background-color: var(--blue-600) !important;\n}\n.hover\\:bg-blue-700:hover {\n  background-color: var(--blue-700) !important;\n}\n.hover\\:bg-blue-800:hover {\n  background-color: var(--blue-800) !important;\n}\n.hover\\:bg-blue-900:hover {\n  background-color: var(--blue-900) !important;\n}\n\n.active\\:bg-blue-50:active {\n  background-color: var(--blue-50) !important;\n}\n.active\\:bg-blue-100:active {\n  background-color: var(--blue-100) !important;\n}\n.active\\:bg-blue-200:active {\n  background-color: var(--blue-200) !important;\n}\n.active\\:bg-blue-300:active {\n  background-color: var(--blue-300) !important;\n}\n.active\\:bg-blue-400:active {\n  background-color: var(--blue-400) !important;\n}\n.active\\:bg-blue-500:active {\n  background-color: var(--blue-500) !important;\n}\n.active\\:bg-blue-600:active {\n  background-color: var(--blue-600) !important;\n}\n.active\\:bg-blue-700:active {\n  background-color: var(--blue-700) !important;\n}\n.active\\:bg-blue-800:active {\n  background-color: var(--blue-800) !important;\n}\n.active\\:bg-blue-900:active {\n  background-color: var(--blue-900) !important;\n}\n\n.bg-green-50 {\n  background-color: var(--green-50) !important;\n}\n.bg-green-100 {\n  background-color: var(--green-100) !important;\n}\n.bg-green-200 {\n  background-color: var(--green-200) !important;\n}\n.bg-green-300 {\n  background-color: var(--green-300) !important;\n}\n.bg-green-400 {\n  background-color: var(--green-400) !important;\n}\n.bg-green-500 {\n  background-color: var(--green-500) !important;\n}\n.bg-green-600 {\n  background-color: var(--green-600) !important;\n}\n.bg-green-700 {\n  background-color: var(--green-700) !important;\n}\n.bg-green-800 {\n  background-color: var(--green-800) !important;\n}\n.bg-green-900 {\n  background-color: var(--green-900) !important;\n}\n\n.focus\\:bg-green-50:focus {\n  background-color: var(--green-50) !important;\n}\n.focus\\:bg-green-100:focus {\n  background-color: var(--green-100) !important;\n}\n.focus\\:bg-green-200:focus {\n  background-color: var(--green-200) !important;\n}\n.focus\\:bg-green-300:focus {\n  background-color: var(--green-300) !important;\n}\n.focus\\:bg-green-400:focus {\n  background-color: var(--green-400) !important;\n}\n.focus\\:bg-green-500:focus {\n  background-color: var(--green-500) !important;\n}\n.focus\\:bg-green-600:focus {\n  background-color: var(--green-600) !important;\n}\n.focus\\:bg-green-700:focus {\n  background-color: var(--green-700) !important;\n}\n.focus\\:bg-green-800:focus {\n  background-color: var(--green-800) !important;\n}\n.focus\\:bg-green-900:focus {\n  background-color: var(--green-900) !important;\n}\n\n.hover\\:bg-green-50:hover {\n  background-color: var(--green-50) !important;\n}\n.hover\\:bg-green-100:hover {\n  background-color: var(--green-100) !important;\n}\n.hover\\:bg-green-200:hover {\n  background-color: var(--green-200) !important;\n}\n.hover\\:bg-green-300:hover {\n  background-color: var(--green-300) !important;\n}\n.hover\\:bg-green-400:hover {\n  background-color: var(--green-400) !important;\n}\n.hover\\:bg-green-500:hover {\n  background-color: var(--green-500) !important;\n}\n.hover\\:bg-green-600:hover {\n  background-color: var(--green-600) !important;\n}\n.hover\\:bg-green-700:hover {\n  background-color: var(--green-700) !important;\n}\n.hover\\:bg-green-800:hover {\n  background-color: var(--green-800) !important;\n}\n.hover\\:bg-green-900:hover {\n  background-color: var(--green-900) !important;\n}\n\n.active\\:bg-green-50:active {\n  background-color: var(--green-50) !important;\n}\n.active\\:bg-green-100:active {\n  background-color: var(--green-100) !important;\n}\n.active\\:bg-green-200:active {\n  background-color: var(--green-200) !important;\n}\n.active\\:bg-green-300:active {\n  background-color: var(--green-300) !important;\n}\n.active\\:bg-green-400:active {\n  background-color: var(--green-400) !important;\n}\n.active\\:bg-green-500:active {\n  background-color: var(--green-500) !important;\n}\n.active\\:bg-green-600:active {\n  background-color: var(--green-600) !important;\n}\n.active\\:bg-green-700:active {\n  background-color: var(--green-700) !important;\n}\n.active\\:bg-green-800:active {\n  background-color: var(--green-800) !important;\n}\n.active\\:bg-green-900:active {\n  background-color: var(--green-900) !important;\n}\n\n.bg-yellow-50 {\n  background-color: var(--yellow-50) !important;\n}\n.bg-yellow-100 {\n  background-color: var(--yellow-100) !important;\n}\n.bg-yellow-200 {\n  background-color: var(--yellow-200) !important;\n}\n.bg-yellow-300 {\n  background-color: var(--yellow-300) !important;\n}\n.bg-yellow-400 {\n  background-color: var(--yellow-400) !important;\n}\n.bg-yellow-500 {\n  background-color: var(--yellow-500) !important;\n}\n.bg-yellow-600 {\n  background-color: var(--yellow-600) !important;\n}\n.bg-yellow-700 {\n  background-color: var(--yellow-700) !important;\n}\n.bg-yellow-800 {\n  background-color: var(--yellow-800) !important;\n}\n.bg-yellow-900 {\n  background-color: var(--yellow-900) !important;\n}\n\n.focus\\:bg-yellow-50:focus {\n  background-color: var(--yellow-50) !important;\n}\n.focus\\:bg-yellow-100:focus {\n  background-color: var(--yellow-100) !important;\n}\n.focus\\:bg-yellow-200:focus {\n  background-color: var(--yellow-200) !important;\n}\n.focus\\:bg-yellow-300:focus {\n  background-color: var(--yellow-300) !important;\n}\n.focus\\:bg-yellow-400:focus {\n  background-color: var(--yellow-400) !important;\n}\n.focus\\:bg-yellow-500:focus {\n  background-color: var(--yellow-500) !important;\n}\n.focus\\:bg-yellow-600:focus {\n  background-color: var(--yellow-600) !important;\n}\n.focus\\:bg-yellow-700:focus {\n  background-color: var(--yellow-700) !important;\n}\n.focus\\:bg-yellow-800:focus {\n  background-color: var(--yellow-800) !important;\n}\n.focus\\:bg-yellow-900:focus {\n  background-color: var(--yellow-900) !important;\n}\n\n.hover\\:bg-yellow-50:hover {\n  background-color: var(--yellow-50) !important;\n}\n.hover\\:bg-yellow-100:hover {\n  background-color: var(--yellow-100) !important;\n}\n.hover\\:bg-yellow-200:hover {\n  background-color: var(--yellow-200) !important;\n}\n.hover\\:bg-yellow-300:hover {\n  background-color: var(--yellow-300) !important;\n}\n.hover\\:bg-yellow-400:hover {\n  background-color: var(--yellow-400) !important;\n}\n.hover\\:bg-yellow-500:hover {\n  background-color: var(--yellow-500) !important;\n}\n.hover\\:bg-yellow-600:hover {\n  background-color: var(--yellow-600) !important;\n}\n.hover\\:bg-yellow-700:hover {\n  background-color: var(--yellow-700) !important;\n}\n.hover\\:bg-yellow-800:hover {\n  background-color: var(--yellow-800) !important;\n}\n.hover\\:bg-yellow-900:hover {\n  background-color: var(--yellow-900) !important;\n}\n\n.active\\:bg-yellow-50:active {\n  background-color: var(--yellow-50) !important;\n}\n.active\\:bg-yellow-100:active {\n  background-color: var(--yellow-100) !important;\n}\n.active\\:bg-yellow-200:active {\n  background-color: var(--yellow-200) !important;\n}\n.active\\:bg-yellow-300:active {\n  background-color: var(--yellow-300) !important;\n}\n.active\\:bg-yellow-400:active {\n  background-color: var(--yellow-400) !important;\n}\n.active\\:bg-yellow-500:active {\n  background-color: var(--yellow-500) !important;\n}\n.active\\:bg-yellow-600:active {\n  background-color: var(--yellow-600) !important;\n}\n.active\\:bg-yellow-700:active {\n  background-color: var(--yellow-700) !important;\n}\n.active\\:bg-yellow-800:active {\n  background-color: var(--yellow-800) !important;\n}\n.active\\:bg-yellow-900:active {\n  background-color: var(--yellow-900) !important;\n}\n\n.bg-cyan-50 {\n  background-color: var(--cyan-50) !important;\n}\n.bg-cyan-100 {\n  background-color: var(--cyan-100) !important;\n}\n.bg-cyan-200 {\n  background-color: var(--cyan-200) !important;\n}\n.bg-cyan-300 {\n  background-color: var(--cyan-300) !important;\n}\n.bg-cyan-400 {\n  background-color: var(--cyan-400) !important;\n}\n.bg-cyan-500 {\n  background-color: var(--cyan-500) !important;\n}\n.bg-cyan-600 {\n  background-color: var(--cyan-600) !important;\n}\n.bg-cyan-700 {\n  background-color: var(--cyan-700) !important;\n}\n.bg-cyan-800 {\n  background-color: var(--cyan-800) !important;\n}\n.bg-cyan-900 {\n  background-color: var(--cyan-900) !important;\n}\n\n.focus\\:bg-cyan-50:focus {\n  background-color: var(--cyan-50) !important;\n}\n.focus\\:bg-cyan-100:focus {\n  background-color: var(--cyan-100) !important;\n}\n.focus\\:bg-cyan-200:focus {\n  background-color: var(--cyan-200) !important;\n}\n.focus\\:bg-cyan-300:focus {\n  background-color: var(--cyan-300) !important;\n}\n.focus\\:bg-cyan-400:focus {\n  background-color: var(--cyan-400) !important;\n}\n.focus\\:bg-cyan-500:focus {\n  background-color: var(--cyan-500) !important;\n}\n.focus\\:bg-cyan-600:focus {\n  background-color: var(--cyan-600) !important;\n}\n.focus\\:bg-cyan-700:focus {\n  background-color: var(--cyan-700) !important;\n}\n.focus\\:bg-cyan-800:focus {\n  background-color: var(--cyan-800) !important;\n}\n.focus\\:bg-cyan-900:focus {\n  background-color: var(--cyan-900) !important;\n}\n\n.hover\\:bg-cyan-50:hover {\n  background-color: var(--cyan-50) !important;\n}\n.hover\\:bg-cyan-100:hover {\n  background-color: var(--cyan-100) !important;\n}\n.hover\\:bg-cyan-200:hover {\n  background-color: var(--cyan-200) !important;\n}\n.hover\\:bg-cyan-300:hover {\n  background-color: var(--cyan-300) !important;\n}\n.hover\\:bg-cyan-400:hover {\n  background-color: var(--cyan-400) !important;\n}\n.hover\\:bg-cyan-500:hover {\n  background-color: var(--cyan-500) !important;\n}\n.hover\\:bg-cyan-600:hover {\n  background-color: var(--cyan-600) !important;\n}\n.hover\\:bg-cyan-700:hover {\n  background-color: var(--cyan-700) !important;\n}\n.hover\\:bg-cyan-800:hover {\n  background-color: var(--cyan-800) !important;\n}\n.hover\\:bg-cyan-900:hover {\n  background-color: var(--cyan-900) !important;\n}\n\n.active\\:bg-cyan-50:active {\n  background-color: var(--cyan-50) !important;\n}\n.active\\:bg-cyan-100:active {\n  background-color: var(--cyan-100) !important;\n}\n.active\\:bg-cyan-200:active {\n  background-color: var(--cyan-200) !important;\n}\n.active\\:bg-cyan-300:active {\n  background-color: var(--cyan-300) !important;\n}\n.active\\:bg-cyan-400:active {\n  background-color: var(--cyan-400) !important;\n}\n.active\\:bg-cyan-500:active {\n  background-color: var(--cyan-500) !important;\n}\n.active\\:bg-cyan-600:active {\n  background-color: var(--cyan-600) !important;\n}\n.active\\:bg-cyan-700:active {\n  background-color: var(--cyan-700) !important;\n}\n.active\\:bg-cyan-800:active {\n  background-color: var(--cyan-800) !important;\n}\n.active\\:bg-cyan-900:active {\n  background-color: var(--cyan-900) !important;\n}\n\n.bg-pink-50 {\n  background-color: var(--pink-50) !important;\n}\n.bg-pink-100 {\n  background-color: var(--pink-100) !important;\n}\n.bg-pink-200 {\n  background-color: var(--pink-200) !important;\n}\n.bg-pink-300 {\n  background-color: var(--pink-300) !important;\n}\n.bg-pink-400 {\n  background-color: var(--pink-400) !important;\n}\n.bg-pink-500 {\n  background-color: var(--pink-500) !important;\n}\n.bg-pink-600 {\n  background-color: var(--pink-600) !important;\n}\n.bg-pink-700 {\n  background-color: var(--pink-700) !important;\n}\n.bg-pink-800 {\n  background-color: var(--pink-800) !important;\n}\n.bg-pink-900 {\n  background-color: var(--pink-900) !important;\n}\n\n.focus\\:bg-pink-50:focus {\n  background-color: var(--pink-50) !important;\n}\n.focus\\:bg-pink-100:focus {\n  background-color: var(--pink-100) !important;\n}\n.focus\\:bg-pink-200:focus {\n  background-color: var(--pink-200) !important;\n}\n.focus\\:bg-pink-300:focus {\n  background-color: var(--pink-300) !important;\n}\n.focus\\:bg-pink-400:focus {\n  background-color: var(--pink-400) !important;\n}\n.focus\\:bg-pink-500:focus {\n  background-color: var(--pink-500) !important;\n}\n.focus\\:bg-pink-600:focus {\n  background-color: var(--pink-600) !important;\n}\n.focus\\:bg-pink-700:focus {\n  background-color: var(--pink-700) !important;\n}\n.focus\\:bg-pink-800:focus {\n  background-color: var(--pink-800) !important;\n}\n.focus\\:bg-pink-900:focus {\n  background-color: var(--pink-900) !important;\n}\n\n.hover\\:bg-pink-50:hover {\n  background-color: var(--pink-50) !important;\n}\n.hover\\:bg-pink-100:hover {\n  background-color: var(--pink-100) !important;\n}\n.hover\\:bg-pink-200:hover {\n  background-color: var(--pink-200) !important;\n}\n.hover\\:bg-pink-300:hover {\n  background-color: var(--pink-300) !important;\n}\n.hover\\:bg-pink-400:hover {\n  background-color: var(--pink-400) !important;\n}\n.hover\\:bg-pink-500:hover {\n  background-color: var(--pink-500) !important;\n}\n.hover\\:bg-pink-600:hover {\n  background-color: var(--pink-600) !important;\n}\n.hover\\:bg-pink-700:hover {\n  background-color: var(--pink-700) !important;\n}\n.hover\\:bg-pink-800:hover {\n  background-color: var(--pink-800) !important;\n}\n.hover\\:bg-pink-900:hover {\n  background-color: var(--pink-900) !important;\n}\n\n.active\\:bg-pink-50:active {\n  background-color: var(--pink-50) !important;\n}\n.active\\:bg-pink-100:active {\n  background-color: var(--pink-100) !important;\n}\n.active\\:bg-pink-200:active {\n  background-color: var(--pink-200) !important;\n}\n.active\\:bg-pink-300:active {\n  background-color: var(--pink-300) !important;\n}\n.active\\:bg-pink-400:active {\n  background-color: var(--pink-400) !important;\n}\n.active\\:bg-pink-500:active {\n  background-color: var(--pink-500) !important;\n}\n.active\\:bg-pink-600:active {\n  background-color: var(--pink-600) !important;\n}\n.active\\:bg-pink-700:active {\n  background-color: var(--pink-700) !important;\n}\n.active\\:bg-pink-800:active {\n  background-color: var(--pink-800) !important;\n}\n.active\\:bg-pink-900:active {\n  background-color: var(--pink-900) !important;\n}\n\n.bg-indigo-50 {\n  background-color: var(--indigo-50) !important;\n}\n.bg-indigo-100 {\n  background-color: var(--indigo-100) !important;\n}\n.bg-indigo-200 {\n  background-color: var(--indigo-200) !important;\n}\n.bg-indigo-300 {\n  background-color: var(--indigo-300) !important;\n}\n.bg-indigo-400 {\n  background-color: var(--indigo-400) !important;\n}\n.bg-indigo-500 {\n  background-color: var(--indigo-500) !important;\n}\n.bg-indigo-600 {\n  background-color: var(--indigo-600) !important;\n}\n.bg-indigo-700 {\n  background-color: var(--indigo-700) !important;\n}\n.bg-indigo-800 {\n  background-color: var(--indigo-800) !important;\n}\n.bg-indigo-900 {\n  background-color: var(--indigo-900) !important;\n}\n\n.focus\\:bg-indigo-50:focus {\n  background-color: var(--indigo-50) !important;\n}\n.focus\\:bg-indigo-100:focus {\n  background-color: var(--indigo-100) !important;\n}\n.focus\\:bg-indigo-200:focus {\n  background-color: var(--indigo-200) !important;\n}\n.focus\\:bg-indigo-300:focus {\n  background-color: var(--indigo-300) !important;\n}\n.focus\\:bg-indigo-400:focus {\n  background-color: var(--indigo-400) !important;\n}\n.focus\\:bg-indigo-500:focus {\n  background-color: var(--indigo-500) !important;\n}\n.focus\\:bg-indigo-600:focus {\n  background-color: var(--indigo-600) !important;\n}\n.focus\\:bg-indigo-700:focus {\n  background-color: var(--indigo-700) !important;\n}\n.focus\\:bg-indigo-800:focus {\n  background-color: var(--indigo-800) !important;\n}\n.focus\\:bg-indigo-900:focus {\n  background-color: var(--indigo-900) !important;\n}\n\n.hover\\:bg-indigo-50:hover {\n  background-color: var(--indigo-50) !important;\n}\n.hover\\:bg-indigo-100:hover {\n  background-color: var(--indigo-100) !important;\n}\n.hover\\:bg-indigo-200:hover {\n  background-color: var(--indigo-200) !important;\n}\n.hover\\:bg-indigo-300:hover {\n  background-color: var(--indigo-300) !important;\n}\n.hover\\:bg-indigo-400:hover {\n  background-color: var(--indigo-400) !important;\n}\n.hover\\:bg-indigo-500:hover {\n  background-color: var(--indigo-500) !important;\n}\n.hover\\:bg-indigo-600:hover {\n  background-color: var(--indigo-600) !important;\n}\n.hover\\:bg-indigo-700:hover {\n  background-color: var(--indigo-700) !important;\n}\n.hover\\:bg-indigo-800:hover {\n  background-color: var(--indigo-800) !important;\n}\n.hover\\:bg-indigo-900:hover {\n  background-color: var(--indigo-900) !important;\n}\n\n.active\\:bg-indigo-50:active {\n  background-color: var(--indigo-50) !important;\n}\n.active\\:bg-indigo-100:active {\n  background-color: var(--indigo-100) !important;\n}\n.active\\:bg-indigo-200:active {\n  background-color: var(--indigo-200) !important;\n}\n.active\\:bg-indigo-300:active {\n  background-color: var(--indigo-300) !important;\n}\n.active\\:bg-indigo-400:active {\n  background-color: var(--indigo-400) !important;\n}\n.active\\:bg-indigo-500:active {\n  background-color: var(--indigo-500) !important;\n}\n.active\\:bg-indigo-600:active {\n  background-color: var(--indigo-600) !important;\n}\n.active\\:bg-indigo-700:active {\n  background-color: var(--indigo-700) !important;\n}\n.active\\:bg-indigo-800:active {\n  background-color: var(--indigo-800) !important;\n}\n.active\\:bg-indigo-900:active {\n  background-color: var(--indigo-900) !important;\n}\n\n.bg-teal-50 {\n  background-color: var(--teal-50) !important;\n}\n.bg-teal-100 {\n  background-color: var(--teal-100) !important;\n}\n.bg-teal-200 {\n  background-color: var(--teal-200) !important;\n}\n.bg-teal-300 {\n  background-color: var(--teal-300) !important;\n}\n.bg-teal-400 {\n  background-color: var(--teal-400) !important;\n}\n.bg-teal-500 {\n  background-color: var(--teal-500) !important;\n}\n.bg-teal-600 {\n  background-color: var(--teal-600) !important;\n}\n.bg-teal-700 {\n  background-color: var(--teal-700) !important;\n}\n.bg-teal-800 {\n  background-color: var(--teal-800) !important;\n}\n.bg-teal-900 {\n  background-color: var(--teal-900) !important;\n}\n\n.focus\\:bg-teal-50:focus {\n  background-color: var(--teal-50) !important;\n}\n.focus\\:bg-teal-100:focus {\n  background-color: var(--teal-100) !important;\n}\n.focus\\:bg-teal-200:focus {\n  background-color: var(--teal-200) !important;\n}\n.focus\\:bg-teal-300:focus {\n  background-color: var(--teal-300) !important;\n}\n.focus\\:bg-teal-400:focus {\n  background-color: var(--teal-400) !important;\n}\n.focus\\:bg-teal-500:focus {\n  background-color: var(--teal-500) !important;\n}\n.focus\\:bg-teal-600:focus {\n  background-color: var(--teal-600) !important;\n}\n.focus\\:bg-teal-700:focus {\n  background-color: var(--teal-700) !important;\n}\n.focus\\:bg-teal-800:focus {\n  background-color: var(--teal-800) !important;\n}\n.focus\\:bg-teal-900:focus {\n  background-color: var(--teal-900) !important;\n}\n\n.hover\\:bg-teal-50:hover {\n  background-color: var(--teal-50) !important;\n}\n.hover\\:bg-teal-100:hover {\n  background-color: var(--teal-100) !important;\n}\n.hover\\:bg-teal-200:hover {\n  background-color: var(--teal-200) !important;\n}\n.hover\\:bg-teal-300:hover {\n  background-color: var(--teal-300) !important;\n}\n.hover\\:bg-teal-400:hover {\n  background-color: var(--teal-400) !important;\n}\n.hover\\:bg-teal-500:hover {\n  background-color: var(--teal-500) !important;\n}\n.hover\\:bg-teal-600:hover {\n  background-color: var(--teal-600) !important;\n}\n.hover\\:bg-teal-700:hover {\n  background-color: var(--teal-700) !important;\n}\n.hover\\:bg-teal-800:hover {\n  background-color: var(--teal-800) !important;\n}\n.hover\\:bg-teal-900:hover {\n  background-color: var(--teal-900) !important;\n}\n\n.active\\:bg-teal-50:active {\n  background-color: var(--teal-50) !important;\n}\n.active\\:bg-teal-100:active {\n  background-color: var(--teal-100) !important;\n}\n.active\\:bg-teal-200:active {\n  background-color: var(--teal-200) !important;\n}\n.active\\:bg-teal-300:active {\n  background-color: var(--teal-300) !important;\n}\n.active\\:bg-teal-400:active {\n  background-color: var(--teal-400) !important;\n}\n.active\\:bg-teal-500:active {\n  background-color: var(--teal-500) !important;\n}\n.active\\:bg-teal-600:active {\n  background-color: var(--teal-600) !important;\n}\n.active\\:bg-teal-700:active {\n  background-color: var(--teal-700) !important;\n}\n.active\\:bg-teal-800:active {\n  background-color: var(--teal-800) !important;\n}\n.active\\:bg-teal-900:active {\n  background-color: var(--teal-900) !important;\n}\n\n.bg-orange-50 {\n  background-color: var(--orange-50) !important;\n}\n.bg-orange-100 {\n  background-color: var(--orange-100) !important;\n}\n.bg-orange-200 {\n  background-color: var(--orange-200) !important;\n}\n.bg-orange-300 {\n  background-color: var(--orange-300) !important;\n}\n.bg-orange-400 {\n  background-color: var(--orange-400) !important;\n}\n.bg-orange-500 {\n  background-color: var(--orange-500) !important;\n}\n.bg-orange-600 {\n  background-color: var(--orange-600) !important;\n}\n.bg-orange-700 {\n  background-color: var(--orange-700) !important;\n}\n.bg-orange-800 {\n  background-color: var(--orange-800) !important;\n}\n.bg-orange-900 {\n  background-color: var(--orange-900) !important;\n}\n\n.focus\\:bg-orange-50:focus {\n  background-color: var(--orange-50) !important;\n}\n.focus\\:bg-orange-100:focus {\n  background-color: var(--orange-100) !important;\n}\n.focus\\:bg-orange-200:focus {\n  background-color: var(--orange-200) !important;\n}\n.focus\\:bg-orange-300:focus {\n  background-color: var(--orange-300) !important;\n}\n.focus\\:bg-orange-400:focus {\n  background-color: var(--orange-400) !important;\n}\n.focus\\:bg-orange-500:focus {\n  background-color: var(--orange-500) !important;\n}\n.focus\\:bg-orange-600:focus {\n  background-color: var(--orange-600) !important;\n}\n.focus\\:bg-orange-700:focus {\n  background-color: var(--orange-700) !important;\n}\n.focus\\:bg-orange-800:focus {\n  background-color: var(--orange-800) !important;\n}\n.focus\\:bg-orange-900:focus {\n  background-color: var(--orange-900) !important;\n}\n\n.hover\\:bg-orange-50:hover {\n  background-color: var(--orange-50) !important;\n}\n.hover\\:bg-orange-100:hover {\n  background-color: var(--orange-100) !important;\n}\n.hover\\:bg-orange-200:hover {\n  background-color: var(--orange-200) !important;\n}\n.hover\\:bg-orange-300:hover {\n  background-color: var(--orange-300) !important;\n}\n.hover\\:bg-orange-400:hover {\n  background-color: var(--orange-400) !important;\n}\n.hover\\:bg-orange-500:hover {\n  background-color: var(--orange-500) !important;\n}\n.hover\\:bg-orange-600:hover {\n  background-color: var(--orange-600) !important;\n}\n.hover\\:bg-orange-700:hover {\n  background-color: var(--orange-700) !important;\n}\n.hover\\:bg-orange-800:hover {\n  background-color: var(--orange-800) !important;\n}\n.hover\\:bg-orange-900:hover {\n  background-color: var(--orange-900) !important;\n}\n\n.active\\:bg-orange-50:active {\n  background-color: var(--orange-50) !important;\n}\n.active\\:bg-orange-100:active {\n  background-color: var(--orange-100) !important;\n}\n.active\\:bg-orange-200:active {\n  background-color: var(--orange-200) !important;\n}\n.active\\:bg-orange-300:active {\n  background-color: var(--orange-300) !important;\n}\n.active\\:bg-orange-400:active {\n  background-color: var(--orange-400) !important;\n}\n.active\\:bg-orange-500:active {\n  background-color: var(--orange-500) !important;\n}\n.active\\:bg-orange-600:active {\n  background-color: var(--orange-600) !important;\n}\n.active\\:bg-orange-700:active {\n  background-color: var(--orange-700) !important;\n}\n.active\\:bg-orange-800:active {\n  background-color: var(--orange-800) !important;\n}\n.active\\:bg-orange-900:active {\n  background-color: var(--orange-900) !important;\n}\n\n.bg-bluegray-50 {\n  background-color: var(--bluegray-50) !important;\n}\n.bg-bluegray-100 {\n  background-color: var(--bluegray-100) !important;\n}\n.bg-bluegray-200 {\n  background-color: var(--bluegray-200) !important;\n}\n.bg-bluegray-300 {\n  background-color: var(--bluegray-300) !important;\n}\n.bg-bluegray-400 {\n  background-color: var(--bluegray-400) !important;\n}\n.bg-bluegray-500 {\n  background-color: var(--bluegray-500) !important;\n}\n.bg-bluegray-600 {\n  background-color: var(--bluegray-600) !important;\n}\n.bg-bluegray-700 {\n  background-color: var(--bluegray-700) !important;\n}\n.bg-bluegray-800 {\n  background-color: var(--bluegray-800) !important;\n}\n.bg-bluegray-900 {\n  background-color: var(--bluegray-900) !important;\n}\n\n.focus\\:bg-bluegray-50:focus {\n  background-color: var(--bluegray-50) !important;\n}\n.focus\\:bg-bluegray-100:focus {\n  background-color: var(--bluegray-100) !important;\n}\n.focus\\:bg-bluegray-200:focus {\n  background-color: var(--bluegray-200) !important;\n}\n.focus\\:bg-bluegray-300:focus {\n  background-color: var(--bluegray-300) !important;\n}\n.focus\\:bg-bluegray-400:focus {\n  background-color: var(--bluegray-400) !important;\n}\n.focus\\:bg-bluegray-500:focus {\n  background-color: var(--bluegray-500) !important;\n}\n.focus\\:bg-bluegray-600:focus {\n  background-color: var(--bluegray-600) !important;\n}\n.focus\\:bg-bluegray-700:focus {\n  background-color: var(--bluegray-700) !important;\n}\n.focus\\:bg-bluegray-800:focus {\n  background-color: var(--bluegray-800) !important;\n}\n.focus\\:bg-bluegray-900:focus {\n  background-color: var(--bluegray-900) !important;\n}\n\n.hover\\:bg-bluegray-50:hover {\n  background-color: var(--bluegray-50) !important;\n}\n.hover\\:bg-bluegray-100:hover {\n  background-color: var(--bluegray-100) !important;\n}\n.hover\\:bg-bluegray-200:hover {\n  background-color: var(--bluegray-200) !important;\n}\n.hover\\:bg-bluegray-300:hover {\n  background-color: var(--bluegray-300) !important;\n}\n.hover\\:bg-bluegray-400:hover {\n  background-color: var(--bluegray-400) !important;\n}\n.hover\\:bg-bluegray-500:hover {\n  background-color: var(--bluegray-500) !important;\n}\n.hover\\:bg-bluegray-600:hover {\n  background-color: var(--bluegray-600) !important;\n}\n.hover\\:bg-bluegray-700:hover {\n  background-color: var(--bluegray-700) !important;\n}\n.hover\\:bg-bluegray-800:hover {\n  background-color: var(--bluegray-800) !important;\n}\n.hover\\:bg-bluegray-900:hover {\n  background-color: var(--bluegray-900) !important;\n}\n\n.active\\:bg-bluegray-50:active {\n  background-color: var(--bluegray-50) !important;\n}\n.active\\:bg-bluegray-100:active {\n  background-color: var(--bluegray-100) !important;\n}\n.active\\:bg-bluegray-200:active {\n  background-color: var(--bluegray-200) !important;\n}\n.active\\:bg-bluegray-300:active {\n  background-color: var(--bluegray-300) !important;\n}\n.active\\:bg-bluegray-400:active {\n  background-color: var(--bluegray-400) !important;\n}\n.active\\:bg-bluegray-500:active {\n  background-color: var(--bluegray-500) !important;\n}\n.active\\:bg-bluegray-600:active {\n  background-color: var(--bluegray-600) !important;\n}\n.active\\:bg-bluegray-700:active {\n  background-color: var(--bluegray-700) !important;\n}\n.active\\:bg-bluegray-800:active {\n  background-color: var(--bluegray-800) !important;\n}\n.active\\:bg-bluegray-900:active {\n  background-color: var(--bluegray-900) !important;\n}\n\n.bg-purple-50 {\n  background-color: var(--purple-50) !important;\n}\n.bg-purple-100 {\n  background-color: var(--purple-100) !important;\n}\n.bg-purple-200 {\n  background-color: var(--purple-200) !important;\n}\n.bg-purple-300 {\n  background-color: var(--purple-300) !important;\n}\n.bg-purple-400 {\n  background-color: var(--purple-400) !important;\n}\n.bg-purple-500 {\n  background-color: var(--purple-500) !important;\n}\n.bg-purple-600 {\n  background-color: var(--purple-600) !important;\n}\n.bg-purple-700 {\n  background-color: var(--purple-700) !important;\n}\n.bg-purple-800 {\n  background-color: var(--purple-800) !important;\n}\n.bg-purple-900 {\n  background-color: var(--purple-900) !important;\n}\n\n.focus\\:bg-purple-50:focus {\n  background-color: var(--purple-50) !important;\n}\n.focus\\:bg-purple-100:focus {\n  background-color: var(--purple-100) !important;\n}\n.focus\\:bg-purple-200:focus {\n  background-color: var(--purple-200) !important;\n}\n.focus\\:bg-purple-300:focus {\n  background-color: var(--purple-300) !important;\n}\n.focus\\:bg-purple-400:focus {\n  background-color: var(--purple-400) !important;\n}\n.focus\\:bg-purple-500:focus {\n  background-color: var(--purple-500) !important;\n}\n.focus\\:bg-purple-600:focus {\n  background-color: var(--purple-600) !important;\n}\n.focus\\:bg-purple-700:focus {\n  background-color: var(--purple-700) !important;\n}\n.focus\\:bg-purple-800:focus {\n  background-color: var(--purple-800) !important;\n}\n.focus\\:bg-purple-900:focus {\n  background-color: var(--purple-900) !important;\n}\n\n.hover\\:bg-purple-50:hover {\n  background-color: var(--purple-50) !important;\n}\n.hover\\:bg-purple-100:hover {\n  background-color: var(--purple-100) !important;\n}\n.hover\\:bg-purple-200:hover {\n  background-color: var(--purple-200) !important;\n}\n.hover\\:bg-purple-300:hover {\n  background-color: var(--purple-300) !important;\n}\n.hover\\:bg-purple-400:hover {\n  background-color: var(--purple-400) !important;\n}\n.hover\\:bg-purple-500:hover {\n  background-color: var(--purple-500) !important;\n}\n.hover\\:bg-purple-600:hover {\n  background-color: var(--purple-600) !important;\n}\n.hover\\:bg-purple-700:hover {\n  background-color: var(--purple-700) !important;\n}\n.hover\\:bg-purple-800:hover {\n  background-color: var(--purple-800) !important;\n}\n.hover\\:bg-purple-900:hover {\n  background-color: var(--purple-900) !important;\n}\n\n.active\\:bg-purple-50:active {\n  background-color: var(--purple-50) !important;\n}\n.active\\:bg-purple-100:active {\n  background-color: var(--purple-100) !important;\n}\n.active\\:bg-purple-200:active {\n  background-color: var(--purple-200) !important;\n}\n.active\\:bg-purple-300:active {\n  background-color: var(--purple-300) !important;\n}\n.active\\:bg-purple-400:active {\n  background-color: var(--purple-400) !important;\n}\n.active\\:bg-purple-500:active {\n  background-color: var(--purple-500) !important;\n}\n.active\\:bg-purple-600:active {\n  background-color: var(--purple-600) !important;\n}\n.active\\:bg-purple-700:active {\n  background-color: var(--purple-700) !important;\n}\n.active\\:bg-purple-800:active {\n  background-color: var(--purple-800) !important;\n}\n.active\\:bg-purple-900:active {\n  background-color: var(--purple-900) !important;\n}\n\n.bg-gray-50 {\n  background-color: var(--gray-50) !important;\n}\n.bg-gray-100 {\n  background-color: var(--gray-100) !important;\n}\n.bg-gray-200 {\n  background-color: var(--gray-200) !important;\n}\n.bg-gray-300 {\n  background-color: var(--gray-300) !important;\n}\n.bg-gray-400 {\n  background-color: var(--gray-400) !important;\n}\n.bg-gray-500 {\n  background-color: var(--gray-500) !important;\n}\n.bg-gray-600 {\n  background-color: var(--gray-600) !important;\n}\n.bg-gray-700 {\n  background-color: var(--gray-700) !important;\n}\n.bg-gray-800 {\n  background-color: var(--gray-800) !important;\n}\n.bg-gray-900 {\n  background-color: var(--gray-900) !important;\n}\n\n.focus\\:bg-gray-50:focus {\n  background-color: var(--gray-50) !important;\n}\n.focus\\:bg-gray-100:focus {\n  background-color: var(--gray-100) !important;\n}\n.focus\\:bg-gray-200:focus {\n  background-color: var(--gray-200) !important;\n}\n.focus\\:bg-gray-300:focus {\n  background-color: var(--gray-300) !important;\n}\n.focus\\:bg-gray-400:focus {\n  background-color: var(--gray-400) !important;\n}\n.focus\\:bg-gray-500:focus {\n  background-color: var(--gray-500) !important;\n}\n.focus\\:bg-gray-600:focus {\n  background-color: var(--gray-600) !important;\n}\n.focus\\:bg-gray-700:focus {\n  background-color: var(--gray-700) !important;\n}\n.focus\\:bg-gray-800:focus {\n  background-color: var(--gray-800) !important;\n}\n.focus\\:bg-gray-900:focus {\n  background-color: var(--gray-900) !important;\n}\n\n.hover\\:bg-gray-50:hover {\n  background-color: var(--gray-50) !important;\n}\n.hover\\:bg-gray-100:hover {\n  background-color: var(--gray-100) !important;\n}\n.hover\\:bg-gray-200:hover {\n  background-color: var(--gray-200) !important;\n}\n.hover\\:bg-gray-300:hover {\n  background-color: var(--gray-300) !important;\n}\n.hover\\:bg-gray-400:hover {\n  background-color: var(--gray-400) !important;\n}\n.hover\\:bg-gray-500:hover {\n  background-color: var(--gray-500) !important;\n}\n.hover\\:bg-gray-600:hover {\n  background-color: var(--gray-600) !important;\n}\n.hover\\:bg-gray-700:hover {\n  background-color: var(--gray-700) !important;\n}\n.hover\\:bg-gray-800:hover {\n  background-color: var(--gray-800) !important;\n}\n.hover\\:bg-gray-900:hover {\n  background-color: var(--gray-900) !important;\n}\n\n.active\\:bg-gray-50:active {\n  background-color: var(--gray-50) !important;\n}\n.active\\:bg-gray-100:active {\n  background-color: var(--gray-100) !important;\n}\n.active\\:bg-gray-200:active {\n  background-color: var(--gray-200) !important;\n}\n.active\\:bg-gray-300:active {\n  background-color: var(--gray-300) !important;\n}\n.active\\:bg-gray-400:active {\n  background-color: var(--gray-400) !important;\n}\n.active\\:bg-gray-500:active {\n  background-color: var(--gray-500) !important;\n}\n.active\\:bg-gray-600:active {\n  background-color: var(--gray-600) !important;\n}\n.active\\:bg-gray-700:active {\n  background-color: var(--gray-700) !important;\n}\n.active\\:bg-gray-800:active {\n  background-color: var(--gray-800) !important;\n}\n.active\\:bg-gray-900:active {\n  background-color: var(--gray-900) !important;\n}\n\n.bg-red-50 {\n  background-color: var(--red-50) !important;\n}\n.bg-red-100 {\n  background-color: var(--red-100) !important;\n}\n.bg-red-200 {\n  background-color: var(--red-200) !important;\n}\n.bg-red-300 {\n  background-color: var(--red-300) !important;\n}\n.bg-red-400 {\n  background-color: var(--red-400) !important;\n}\n.bg-red-500 {\n  background-color: var(--red-500) !important;\n}\n.bg-red-600 {\n  background-color: var(--red-600) !important;\n}\n.bg-red-700 {\n  background-color: var(--red-700) !important;\n}\n.bg-red-800 {\n  background-color: var(--red-800) !important;\n}\n.bg-red-900 {\n  background-color: var(--red-900) !important;\n}\n\n.focus\\:bg-red-50:focus {\n  background-color: var(--red-50) !important;\n}\n.focus\\:bg-red-100:focus {\n  background-color: var(--red-100) !important;\n}\n.focus\\:bg-red-200:focus {\n  background-color: var(--red-200) !important;\n}\n.focus\\:bg-red-300:focus {\n  background-color: var(--red-300) !important;\n}\n.focus\\:bg-red-400:focus {\n  background-color: var(--red-400) !important;\n}\n.focus\\:bg-red-500:focus {\n  background-color: var(--red-500) !important;\n}\n.focus\\:bg-red-600:focus {\n  background-color: var(--red-600) !important;\n}\n.focus\\:bg-red-700:focus {\n  background-color: var(--red-700) !important;\n}\n.focus\\:bg-red-800:focus {\n  background-color: var(--red-800) !important;\n}\n.focus\\:bg-red-900:focus {\n  background-color: var(--red-900) !important;\n}\n\n.hover\\:bg-red-50:hover {\n  background-color: var(--red-50) !important;\n}\n.hover\\:bg-red-100:hover {\n  background-color: var(--red-100) !important;\n}\n.hover\\:bg-red-200:hover {\n  background-color: var(--red-200) !important;\n}\n.hover\\:bg-red-300:hover {\n  background-color: var(--red-300) !important;\n}\n.hover\\:bg-red-400:hover {\n  background-color: var(--red-400) !important;\n}\n.hover\\:bg-red-500:hover {\n  background-color: var(--red-500) !important;\n}\n.hover\\:bg-red-600:hover {\n  background-color: var(--red-600) !important;\n}\n.hover\\:bg-red-700:hover {\n  background-color: var(--red-700) !important;\n}\n.hover\\:bg-red-800:hover {\n  background-color: var(--red-800) !important;\n}\n.hover\\:bg-red-900:hover {\n  background-color: var(--red-900) !important;\n}\n\n.active\\:bg-red-50:active {\n  background-color: var(--red-50) !important;\n}\n.active\\:bg-red-100:active {\n  background-color: var(--red-100) !important;\n}\n.active\\:bg-red-200:active {\n  background-color: var(--red-200) !important;\n}\n.active\\:bg-red-300:active {\n  background-color: var(--red-300) !important;\n}\n.active\\:bg-red-400:active {\n  background-color: var(--red-400) !important;\n}\n.active\\:bg-red-500:active {\n  background-color: var(--red-500) !important;\n}\n.active\\:bg-red-600:active {\n  background-color: var(--red-600) !important;\n}\n.active\\:bg-red-700:active {\n  background-color: var(--red-700) !important;\n}\n.active\\:bg-red-800:active {\n  background-color: var(--red-800) !important;\n}\n.active\\:bg-red-900:active {\n  background-color: var(--red-900) !important;\n}\n\n.bg-primary-50 {\n  background-color: var(--primary-50) !important;\n}\n.bg-primary-100 {\n  background-color: var(--primary-100) !important;\n}\n.bg-primary-200 {\n  background-color: var(--primary-200) !important;\n}\n.bg-primary-300 {\n  background-color: var(--primary-300) !important;\n}\n.bg-primary-400 {\n  background-color: var(--primary-400) !important;\n}\n.bg-primary-500 {\n  background-color: var(--primary-500) !important;\n}\n.bg-primary-600 {\n  background-color: var(--primary-600) !important;\n}\n.bg-primary-700 {\n  background-color: var(--primary-700) !important;\n}\n.bg-primary-800 {\n  background-color: var(--primary-800) !important;\n}\n.bg-primary-900 {\n  background-color: var(--primary-900) !important;\n}\n\n.focus\\:bg-primary-50:focus {\n  background-color: var(--primary-50) !important;\n}\n.focus\\:bg-primary-100:focus {\n  background-color: var(--primary-100) !important;\n}\n.focus\\:bg-primary-200:focus {\n  background-color: var(--primary-200) !important;\n}\n.focus\\:bg-primary-300:focus {\n  background-color: var(--primary-300) !important;\n}\n.focus\\:bg-primary-400:focus {\n  background-color: var(--primary-400) !important;\n}\n.focus\\:bg-primary-500:focus {\n  background-color: var(--primary-500) !important;\n}\n.focus\\:bg-primary-600:focus {\n  background-color: var(--primary-600) !important;\n}\n.focus\\:bg-primary-700:focus {\n  background-color: var(--primary-700) !important;\n}\n.focus\\:bg-primary-800:focus {\n  background-color: var(--primary-800) !important;\n}\n.focus\\:bg-primary-900:focus {\n  background-color: var(--primary-900) !important;\n}\n\n.hover\\:bg-primary-50:hover {\n  background-color: var(--primary-50) !important;\n}\n.hover\\:bg-primary-100:hover {\n  background-color: var(--primary-100) !important;\n}\n.hover\\:bg-primary-200:hover {\n  background-color: var(--primary-200) !important;\n}\n.hover\\:bg-primary-300:hover {\n  background-color: var(--primary-300) !important;\n}\n.hover\\:bg-primary-400:hover {\n  background-color: var(--primary-400) !important;\n}\n.hover\\:bg-primary-500:hover {\n  background-color: var(--primary-500) !important;\n}\n.hover\\:bg-primary-600:hover {\n  background-color: var(--primary-600) !important;\n}\n.hover\\:bg-primary-700:hover {\n  background-color: var(--primary-700) !important;\n}\n.hover\\:bg-primary-800:hover {\n  background-color: var(--primary-800) !important;\n}\n.hover\\:bg-primary-900:hover {\n  background-color: var(--primary-900) !important;\n}\n\n.active\\:bg-primary-50:active {\n  background-color: var(--primary-50) !important;\n}\n.active\\:bg-primary-100:active {\n  background-color: var(--primary-100) !important;\n}\n.active\\:bg-primary-200:active {\n  background-color: var(--primary-200) !important;\n}\n.active\\:bg-primary-300:active {\n  background-color: var(--primary-300) !important;\n}\n.active\\:bg-primary-400:active {\n  background-color: var(--primary-400) !important;\n}\n.active\\:bg-primary-500:active {\n  background-color: var(--primary-500) !important;\n}\n.active\\:bg-primary-600:active {\n  background-color: var(--primary-600) !important;\n}\n.active\\:bg-primary-700:active {\n  background-color: var(--primary-700) !important;\n}\n.active\\:bg-primary-800:active {\n  background-color: var(--primary-800) !important;\n}\n.active\\:bg-primary-900:active {\n  background-color: var(--primary-900) !important;\n}\n\n.border-blue-50 {\n  border-color: var(--blue-50) !important;\n}\n.border-blue-100 {\n  border-color: var(--blue-100) !important;\n}\n.border-blue-200 {\n  border-color: var(--blue-200) !important;\n}\n.border-blue-300 {\n  border-color: var(--blue-300) !important;\n}\n.border-blue-400 {\n  border-color: var(--blue-400) !important;\n}\n.border-blue-500 {\n  border-color: var(--blue-500) !important;\n}\n.border-blue-600 {\n  border-color: var(--blue-600) !important;\n}\n.border-blue-700 {\n  border-color: var(--blue-700) !important;\n}\n.border-blue-800 {\n  border-color: var(--blue-800) !important;\n}\n.border-blue-900 {\n  border-color: var(--blue-900) !important;\n}\n\n.focus\\:border-blue-50:focus {\n  border-color: var(--blue-50) !important;\n}\n.focus\\:border-blue-100:focus {\n  border-color: var(--blue-100) !important;\n}\n.focus\\:border-blue-200:focus {\n  border-color: var(--blue-200) !important;\n}\n.focus\\:border-blue-300:focus {\n  border-color: var(--blue-300) !important;\n}\n.focus\\:border-blue-400:focus {\n  border-color: var(--blue-400) !important;\n}\n.focus\\:border-blue-500:focus {\n  border-color: var(--blue-500) !important;\n}\n.focus\\:border-blue-600:focus {\n  border-color: var(--blue-600) !important;\n}\n.focus\\:border-blue-700:focus {\n  border-color: var(--blue-700) !important;\n}\n.focus\\:border-blue-800:focus {\n  border-color: var(--blue-800) !important;\n}\n.focus\\:border-blue-900:focus {\n  border-color: var(--blue-900) !important;\n}\n\n.hover\\:border-blue-50:hover {\n  border-color: var(--blue-50) !important;\n}\n.hover\\:border-blue-100:hover {\n  border-color: var(--blue-100) !important;\n}\n.hover\\:border-blue-200:hover {\n  border-color: var(--blue-200) !important;\n}\n.hover\\:border-blue-300:hover {\n  border-color: var(--blue-300) !important;\n}\n.hover\\:border-blue-400:hover {\n  border-color: var(--blue-400) !important;\n}\n.hover\\:border-blue-500:hover {\n  border-color: var(--blue-500) !important;\n}\n.hover\\:border-blue-600:hover {\n  border-color: var(--blue-600) !important;\n}\n.hover\\:border-blue-700:hover {\n  border-color: var(--blue-700) !important;\n}\n.hover\\:border-blue-800:hover {\n  border-color: var(--blue-800) !important;\n}\n.hover\\:border-blue-900:hover {\n  border-color: var(--blue-900) !important;\n}\n\n.active\\:border-blue-50:active {\n  border-color: var(--blue-50) !important;\n}\n.active\\:border-blue-100:active {\n  border-color: var(--blue-100) !important;\n}\n.active\\:border-blue-200:active {\n  border-color: var(--blue-200) !important;\n}\n.active\\:border-blue-300:active {\n  border-color: var(--blue-300) !important;\n}\n.active\\:border-blue-400:active {\n  border-color: var(--blue-400) !important;\n}\n.active\\:border-blue-500:active {\n  border-color: var(--blue-500) !important;\n}\n.active\\:border-blue-600:active {\n  border-color: var(--blue-600) !important;\n}\n.active\\:border-blue-700:active {\n  border-color: var(--blue-700) !important;\n}\n.active\\:border-blue-800:active {\n  border-color: var(--blue-800) !important;\n}\n.active\\:border-blue-900:active {\n  border-color: var(--blue-900) !important;\n}\n\n.border-green-50 {\n  border-color: var(--green-50) !important;\n}\n.border-green-100 {\n  border-color: var(--green-100) !important;\n}\n.border-green-200 {\n  border-color: var(--green-200) !important;\n}\n.border-green-300 {\n  border-color: var(--green-300) !important;\n}\n.border-green-400 {\n  border-color: var(--green-400) !important;\n}\n.border-green-500 {\n  border-color: var(--green-500) !important;\n}\n.border-green-600 {\n  border-color: var(--green-600) !important;\n}\n.border-green-700 {\n  border-color: var(--green-700) !important;\n}\n.border-green-800 {\n  border-color: var(--green-800) !important;\n}\n.border-green-900 {\n  border-color: var(--green-900) !important;\n}\n\n.focus\\:border-green-50:focus {\n  border-color: var(--green-50) !important;\n}\n.focus\\:border-green-100:focus {\n  border-color: var(--green-100) !important;\n}\n.focus\\:border-green-200:focus {\n  border-color: var(--green-200) !important;\n}\n.focus\\:border-green-300:focus {\n  border-color: var(--green-300) !important;\n}\n.focus\\:border-green-400:focus {\n  border-color: var(--green-400) !important;\n}\n.focus\\:border-green-500:focus {\n  border-color: var(--green-500) !important;\n}\n.focus\\:border-green-600:focus {\n  border-color: var(--green-600) !important;\n}\n.focus\\:border-green-700:focus {\n  border-color: var(--green-700) !important;\n}\n.focus\\:border-green-800:focus {\n  border-color: var(--green-800) !important;\n}\n.focus\\:border-green-900:focus {\n  border-color: var(--green-900) !important;\n}\n\n.hover\\:border-green-50:hover {\n  border-color: var(--green-50) !important;\n}\n.hover\\:border-green-100:hover {\n  border-color: var(--green-100) !important;\n}\n.hover\\:border-green-200:hover {\n  border-color: var(--green-200) !important;\n}\n.hover\\:border-green-300:hover {\n  border-color: var(--green-300) !important;\n}\n.hover\\:border-green-400:hover {\n  border-color: var(--green-400) !important;\n}\n.hover\\:border-green-500:hover {\n  border-color: var(--green-500) !important;\n}\n.hover\\:border-green-600:hover {\n  border-color: var(--green-600) !important;\n}\n.hover\\:border-green-700:hover {\n  border-color: var(--green-700) !important;\n}\n.hover\\:border-green-800:hover {\n  border-color: var(--green-800) !important;\n}\n.hover\\:border-green-900:hover {\n  border-color: var(--green-900) !important;\n}\n\n.active\\:border-green-50:active {\n  border-color: var(--green-50) !important;\n}\n.active\\:border-green-100:active {\n  border-color: var(--green-100) !important;\n}\n.active\\:border-green-200:active {\n  border-color: var(--green-200) !important;\n}\n.active\\:border-green-300:active {\n  border-color: var(--green-300) !important;\n}\n.active\\:border-green-400:active {\n  border-color: var(--green-400) !important;\n}\n.active\\:border-green-500:active {\n  border-color: var(--green-500) !important;\n}\n.active\\:border-green-600:active {\n  border-color: var(--green-600) !important;\n}\n.active\\:border-green-700:active {\n  border-color: var(--green-700) !important;\n}\n.active\\:border-green-800:active {\n  border-color: var(--green-800) !important;\n}\n.active\\:border-green-900:active {\n  border-color: var(--green-900) !important;\n}\n\n.border-yellow-50 {\n  border-color: var(--yellow-50) !important;\n}\n.border-yellow-100 {\n  border-color: var(--yellow-100) !important;\n}\n.border-yellow-200 {\n  border-color: var(--yellow-200) !important;\n}\n.border-yellow-300 {\n  border-color: var(--yellow-300) !important;\n}\n.border-yellow-400 {\n  border-color: var(--yellow-400) !important;\n}\n.border-yellow-500 {\n  border-color: var(--yellow-500) !important;\n}\n.border-yellow-600 {\n  border-color: var(--yellow-600) !important;\n}\n.border-yellow-700 {\n  border-color: var(--yellow-700) !important;\n}\n.border-yellow-800 {\n  border-color: var(--yellow-800) !important;\n}\n.border-yellow-900 {\n  border-color: var(--yellow-900) !important;\n}\n\n.focus\\:border-yellow-50:focus {\n  border-color: var(--yellow-50) !important;\n}\n.focus\\:border-yellow-100:focus {\n  border-color: var(--yellow-100) !important;\n}\n.focus\\:border-yellow-200:focus {\n  border-color: var(--yellow-200) !important;\n}\n.focus\\:border-yellow-300:focus {\n  border-color: var(--yellow-300) !important;\n}\n.focus\\:border-yellow-400:focus {\n  border-color: var(--yellow-400) !important;\n}\n.focus\\:border-yellow-500:focus {\n  border-color: var(--yellow-500) !important;\n}\n.focus\\:border-yellow-600:focus {\n  border-color: var(--yellow-600) !important;\n}\n.focus\\:border-yellow-700:focus {\n  border-color: var(--yellow-700) !important;\n}\n.focus\\:border-yellow-800:focus {\n  border-color: var(--yellow-800) !important;\n}\n.focus\\:border-yellow-900:focus {\n  border-color: var(--yellow-900) !important;\n}\n\n.hover\\:border-yellow-50:hover {\n  border-color: var(--yellow-50) !important;\n}\n.hover\\:border-yellow-100:hover {\n  border-color: var(--yellow-100) !important;\n}\n.hover\\:border-yellow-200:hover {\n  border-color: var(--yellow-200) !important;\n}\n.hover\\:border-yellow-300:hover {\n  border-color: var(--yellow-300) !important;\n}\n.hover\\:border-yellow-400:hover {\n  border-color: var(--yellow-400) !important;\n}\n.hover\\:border-yellow-500:hover {\n  border-color: var(--yellow-500) !important;\n}\n.hover\\:border-yellow-600:hover {\n  border-color: var(--yellow-600) !important;\n}\n.hover\\:border-yellow-700:hover {\n  border-color: var(--yellow-700) !important;\n}\n.hover\\:border-yellow-800:hover {\n  border-color: var(--yellow-800) !important;\n}\n.hover\\:border-yellow-900:hover {\n  border-color: var(--yellow-900) !important;\n}\n\n.active\\:border-yellow-50:active {\n  border-color: var(--yellow-50) !important;\n}\n.active\\:border-yellow-100:active {\n  border-color: var(--yellow-100) !important;\n}\n.active\\:border-yellow-200:active {\n  border-color: var(--yellow-200) !important;\n}\n.active\\:border-yellow-300:active {\n  border-color: var(--yellow-300) !important;\n}\n.active\\:border-yellow-400:active {\n  border-color: var(--yellow-400) !important;\n}\n.active\\:border-yellow-500:active {\n  border-color: var(--yellow-500) !important;\n}\n.active\\:border-yellow-600:active {\n  border-color: var(--yellow-600) !important;\n}\n.active\\:border-yellow-700:active {\n  border-color: var(--yellow-700) !important;\n}\n.active\\:border-yellow-800:active {\n  border-color: var(--yellow-800) !important;\n}\n.active\\:border-yellow-900:active {\n  border-color: var(--yellow-900) !important;\n}\n\n.border-cyan-50 {\n  border-color: var(--cyan-50) !important;\n}\n.border-cyan-100 {\n  border-color: var(--cyan-100) !important;\n}\n.border-cyan-200 {\n  border-color: var(--cyan-200) !important;\n}\n.border-cyan-300 {\n  border-color: var(--cyan-300) !important;\n}\n.border-cyan-400 {\n  border-color: var(--cyan-400) !important;\n}\n.border-cyan-500 {\n  border-color: var(--cyan-500) !important;\n}\n.border-cyan-600 {\n  border-color: var(--cyan-600) !important;\n}\n.border-cyan-700 {\n  border-color: var(--cyan-700) !important;\n}\n.border-cyan-800 {\n  border-color: var(--cyan-800) !important;\n}\n.border-cyan-900 {\n  border-color: var(--cyan-900) !important;\n}\n\n.focus\\:border-cyan-50:focus {\n  border-color: var(--cyan-50) !important;\n}\n.focus\\:border-cyan-100:focus {\n  border-color: var(--cyan-100) !important;\n}\n.focus\\:border-cyan-200:focus {\n  border-color: var(--cyan-200) !important;\n}\n.focus\\:border-cyan-300:focus {\n  border-color: var(--cyan-300) !important;\n}\n.focus\\:border-cyan-400:focus {\n  border-color: var(--cyan-400) !important;\n}\n.focus\\:border-cyan-500:focus {\n  border-color: var(--cyan-500) !important;\n}\n.focus\\:border-cyan-600:focus {\n  border-color: var(--cyan-600) !important;\n}\n.focus\\:border-cyan-700:focus {\n  border-color: var(--cyan-700) !important;\n}\n.focus\\:border-cyan-800:focus {\n  border-color: var(--cyan-800) !important;\n}\n.focus\\:border-cyan-900:focus {\n  border-color: var(--cyan-900) !important;\n}\n\n.hover\\:border-cyan-50:hover {\n  border-color: var(--cyan-50) !important;\n}\n.hover\\:border-cyan-100:hover {\n  border-color: var(--cyan-100) !important;\n}\n.hover\\:border-cyan-200:hover {\n  border-color: var(--cyan-200) !important;\n}\n.hover\\:border-cyan-300:hover {\n  border-color: var(--cyan-300) !important;\n}\n.hover\\:border-cyan-400:hover {\n  border-color: var(--cyan-400) !important;\n}\n.hover\\:border-cyan-500:hover {\n  border-color: var(--cyan-500) !important;\n}\n.hover\\:border-cyan-600:hover {\n  border-color: var(--cyan-600) !important;\n}\n.hover\\:border-cyan-700:hover {\n  border-color: var(--cyan-700) !important;\n}\n.hover\\:border-cyan-800:hover {\n  border-color: var(--cyan-800) !important;\n}\n.hover\\:border-cyan-900:hover {\n  border-color: var(--cyan-900) !important;\n}\n\n.active\\:border-cyan-50:active {\n  border-color: var(--cyan-50) !important;\n}\n.active\\:border-cyan-100:active {\n  border-color: var(--cyan-100) !important;\n}\n.active\\:border-cyan-200:active {\n  border-color: var(--cyan-200) !important;\n}\n.active\\:border-cyan-300:active {\n  border-color: var(--cyan-300) !important;\n}\n.active\\:border-cyan-400:active {\n  border-color: var(--cyan-400) !important;\n}\n.active\\:border-cyan-500:active {\n  border-color: var(--cyan-500) !important;\n}\n.active\\:border-cyan-600:active {\n  border-color: var(--cyan-600) !important;\n}\n.active\\:border-cyan-700:active {\n  border-color: var(--cyan-700) !important;\n}\n.active\\:border-cyan-800:active {\n  border-color: var(--cyan-800) !important;\n}\n.active\\:border-cyan-900:active {\n  border-color: var(--cyan-900) !important;\n}\n\n.border-pink-50 {\n  border-color: var(--pink-50) !important;\n}\n.border-pink-100 {\n  border-color: var(--pink-100) !important;\n}\n.border-pink-200 {\n  border-color: var(--pink-200) !important;\n}\n.border-pink-300 {\n  border-color: var(--pink-300) !important;\n}\n.border-pink-400 {\n  border-color: var(--pink-400) !important;\n}\n.border-pink-500 {\n  border-color: var(--pink-500) !important;\n}\n.border-pink-600 {\n  border-color: var(--pink-600) !important;\n}\n.border-pink-700 {\n  border-color: var(--pink-700) !important;\n}\n.border-pink-800 {\n  border-color: var(--pink-800) !important;\n}\n.border-pink-900 {\n  border-color: var(--pink-900) !important;\n}\n\n.focus\\:border-pink-50:focus {\n  border-color: var(--pink-50) !important;\n}\n.focus\\:border-pink-100:focus {\n  border-color: var(--pink-100) !important;\n}\n.focus\\:border-pink-200:focus {\n  border-color: var(--pink-200) !important;\n}\n.focus\\:border-pink-300:focus {\n  border-color: var(--pink-300) !important;\n}\n.focus\\:border-pink-400:focus {\n  border-color: var(--pink-400) !important;\n}\n.focus\\:border-pink-500:focus {\n  border-color: var(--pink-500) !important;\n}\n.focus\\:border-pink-600:focus {\n  border-color: var(--pink-600) !important;\n}\n.focus\\:border-pink-700:focus {\n  border-color: var(--pink-700) !important;\n}\n.focus\\:border-pink-800:focus {\n  border-color: var(--pink-800) !important;\n}\n.focus\\:border-pink-900:focus {\n  border-color: var(--pink-900) !important;\n}\n\n.hover\\:border-pink-50:hover {\n  border-color: var(--pink-50) !important;\n}\n.hover\\:border-pink-100:hover {\n  border-color: var(--pink-100) !important;\n}\n.hover\\:border-pink-200:hover {\n  border-color: var(--pink-200) !important;\n}\n.hover\\:border-pink-300:hover {\n  border-color: var(--pink-300) !important;\n}\n.hover\\:border-pink-400:hover {\n  border-color: var(--pink-400) !important;\n}\n.hover\\:border-pink-500:hover {\n  border-color: var(--pink-500) !important;\n}\n.hover\\:border-pink-600:hover {\n  border-color: var(--pink-600) !important;\n}\n.hover\\:border-pink-700:hover {\n  border-color: var(--pink-700) !important;\n}\n.hover\\:border-pink-800:hover {\n  border-color: var(--pink-800) !important;\n}\n.hover\\:border-pink-900:hover {\n  border-color: var(--pink-900) !important;\n}\n\n.active\\:border-pink-50:active {\n  border-color: var(--pink-50) !important;\n}\n.active\\:border-pink-100:active {\n  border-color: var(--pink-100) !important;\n}\n.active\\:border-pink-200:active {\n  border-color: var(--pink-200) !important;\n}\n.active\\:border-pink-300:active {\n  border-color: var(--pink-300) !important;\n}\n.active\\:border-pink-400:active {\n  border-color: var(--pink-400) !important;\n}\n.active\\:border-pink-500:active {\n  border-color: var(--pink-500) !important;\n}\n.active\\:border-pink-600:active {\n  border-color: var(--pink-600) !important;\n}\n.active\\:border-pink-700:active {\n  border-color: var(--pink-700) !important;\n}\n.active\\:border-pink-800:active {\n  border-color: var(--pink-800) !important;\n}\n.active\\:border-pink-900:active {\n  border-color: var(--pink-900) !important;\n}\n\n.border-indigo-50 {\n  border-color: var(--indigo-50) !important;\n}\n.border-indigo-100 {\n  border-color: var(--indigo-100) !important;\n}\n.border-indigo-200 {\n  border-color: var(--indigo-200) !important;\n}\n.border-indigo-300 {\n  border-color: var(--indigo-300) !important;\n}\n.border-indigo-400 {\n  border-color: var(--indigo-400) !important;\n}\n.border-indigo-500 {\n  border-color: var(--indigo-500) !important;\n}\n.border-indigo-600 {\n  border-color: var(--indigo-600) !important;\n}\n.border-indigo-700 {\n  border-color: var(--indigo-700) !important;\n}\n.border-indigo-800 {\n  border-color: var(--indigo-800) !important;\n}\n.border-indigo-900 {\n  border-color: var(--indigo-900) !important;\n}\n\n.focus\\:border-indigo-50:focus {\n  border-color: var(--indigo-50) !important;\n}\n.focus\\:border-indigo-100:focus {\n  border-color: var(--indigo-100) !important;\n}\n.focus\\:border-indigo-200:focus {\n  border-color: var(--indigo-200) !important;\n}\n.focus\\:border-indigo-300:focus {\n  border-color: var(--indigo-300) !important;\n}\n.focus\\:border-indigo-400:focus {\n  border-color: var(--indigo-400) !important;\n}\n.focus\\:border-indigo-500:focus {\n  border-color: var(--indigo-500) !important;\n}\n.focus\\:border-indigo-600:focus {\n  border-color: var(--indigo-600) !important;\n}\n.focus\\:border-indigo-700:focus {\n  border-color: var(--indigo-700) !important;\n}\n.focus\\:border-indigo-800:focus {\n  border-color: var(--indigo-800) !important;\n}\n.focus\\:border-indigo-900:focus {\n  border-color: var(--indigo-900) !important;\n}\n\n.hover\\:border-indigo-50:hover {\n  border-color: var(--indigo-50) !important;\n}\n.hover\\:border-indigo-100:hover {\n  border-color: var(--indigo-100) !important;\n}\n.hover\\:border-indigo-200:hover {\n  border-color: var(--indigo-200) !important;\n}\n.hover\\:border-indigo-300:hover {\n  border-color: var(--indigo-300) !important;\n}\n.hover\\:border-indigo-400:hover {\n  border-color: var(--indigo-400) !important;\n}\n.hover\\:border-indigo-500:hover {\n  border-color: var(--indigo-500) !important;\n}\n.hover\\:border-indigo-600:hover {\n  border-color: var(--indigo-600) !important;\n}\n.hover\\:border-indigo-700:hover {\n  border-color: var(--indigo-700) !important;\n}\n.hover\\:border-indigo-800:hover {\n  border-color: var(--indigo-800) !important;\n}\n.hover\\:border-indigo-900:hover {\n  border-color: var(--indigo-900) !important;\n}\n\n.active\\:border-indigo-50:active {\n  border-color: var(--indigo-50) !important;\n}\n.active\\:border-indigo-100:active {\n  border-color: var(--indigo-100) !important;\n}\n.active\\:border-indigo-200:active {\n  border-color: var(--indigo-200) !important;\n}\n.active\\:border-indigo-300:active {\n  border-color: var(--indigo-300) !important;\n}\n.active\\:border-indigo-400:active {\n  border-color: var(--indigo-400) !important;\n}\n.active\\:border-indigo-500:active {\n  border-color: var(--indigo-500) !important;\n}\n.active\\:border-indigo-600:active {\n  border-color: var(--indigo-600) !important;\n}\n.active\\:border-indigo-700:active {\n  border-color: var(--indigo-700) !important;\n}\n.active\\:border-indigo-800:active {\n  border-color: var(--indigo-800) !important;\n}\n.active\\:border-indigo-900:active {\n  border-color: var(--indigo-900) !important;\n}\n\n.border-teal-50 {\n  border-color: var(--teal-50) !important;\n}\n.border-teal-100 {\n  border-color: var(--teal-100) !important;\n}\n.border-teal-200 {\n  border-color: var(--teal-200) !important;\n}\n.border-teal-300 {\n  border-color: var(--teal-300) !important;\n}\n.border-teal-400 {\n  border-color: var(--teal-400) !important;\n}\n.border-teal-500 {\n  border-color: var(--teal-500) !important;\n}\n.border-teal-600 {\n  border-color: var(--teal-600) !important;\n}\n.border-teal-700 {\n  border-color: var(--teal-700) !important;\n}\n.border-teal-800 {\n  border-color: var(--teal-800) !important;\n}\n.border-teal-900 {\n  border-color: var(--teal-900) !important;\n}\n\n.focus\\:border-teal-50:focus {\n  border-color: var(--teal-50) !important;\n}\n.focus\\:border-teal-100:focus {\n  border-color: var(--teal-100) !important;\n}\n.focus\\:border-teal-200:focus {\n  border-color: var(--teal-200) !important;\n}\n.focus\\:border-teal-300:focus {\n  border-color: var(--teal-300) !important;\n}\n.focus\\:border-teal-400:focus {\n  border-color: var(--teal-400) !important;\n}\n.focus\\:border-teal-500:focus {\n  border-color: var(--teal-500) !important;\n}\n.focus\\:border-teal-600:focus {\n  border-color: var(--teal-600) !important;\n}\n.focus\\:border-teal-700:focus {\n  border-color: var(--teal-700) !important;\n}\n.focus\\:border-teal-800:focus {\n  border-color: var(--teal-800) !important;\n}\n.focus\\:border-teal-900:focus {\n  border-color: var(--teal-900) !important;\n}\n\n.hover\\:border-teal-50:hover {\n  border-color: var(--teal-50) !important;\n}\n.hover\\:border-teal-100:hover {\n  border-color: var(--teal-100) !important;\n}\n.hover\\:border-teal-200:hover {\n  border-color: var(--teal-200) !important;\n}\n.hover\\:border-teal-300:hover {\n  border-color: var(--teal-300) !important;\n}\n.hover\\:border-teal-400:hover {\n  border-color: var(--teal-400) !important;\n}\n.hover\\:border-teal-500:hover {\n  border-color: var(--teal-500) !important;\n}\n.hover\\:border-teal-600:hover {\n  border-color: var(--teal-600) !important;\n}\n.hover\\:border-teal-700:hover {\n  border-color: var(--teal-700) !important;\n}\n.hover\\:border-teal-800:hover {\n  border-color: var(--teal-800) !important;\n}\n.hover\\:border-teal-900:hover {\n  border-color: var(--teal-900) !important;\n}\n\n.active\\:border-teal-50:active {\n  border-color: var(--teal-50) !important;\n}\n.active\\:border-teal-100:active {\n  border-color: var(--teal-100) !important;\n}\n.active\\:border-teal-200:active {\n  border-color: var(--teal-200) !important;\n}\n.active\\:border-teal-300:active {\n  border-color: var(--teal-300) !important;\n}\n.active\\:border-teal-400:active {\n  border-color: var(--teal-400) !important;\n}\n.active\\:border-teal-500:active {\n  border-color: var(--teal-500) !important;\n}\n.active\\:border-teal-600:active {\n  border-color: var(--teal-600) !important;\n}\n.active\\:border-teal-700:active {\n  border-color: var(--teal-700) !important;\n}\n.active\\:border-teal-800:active {\n  border-color: var(--teal-800) !important;\n}\n.active\\:border-teal-900:active {\n  border-color: var(--teal-900) !important;\n}\n\n.border-orange-50 {\n  border-color: var(--orange-50) !important;\n}\n.border-orange-100 {\n  border-color: var(--orange-100) !important;\n}\n.border-orange-200 {\n  border-color: var(--orange-200) !important;\n}\n.border-orange-300 {\n  border-color: var(--orange-300) !important;\n}\n.border-orange-400 {\n  border-color: var(--orange-400) !important;\n}\n.border-orange-500 {\n  border-color: var(--orange-500) !important;\n}\n.border-orange-600 {\n  border-color: var(--orange-600) !important;\n}\n.border-orange-700 {\n  border-color: var(--orange-700) !important;\n}\n.border-orange-800 {\n  border-color: var(--orange-800) !important;\n}\n.border-orange-900 {\n  border-color: var(--orange-900) !important;\n}\n\n.focus\\:border-orange-50:focus {\n  border-color: var(--orange-50) !important;\n}\n.focus\\:border-orange-100:focus {\n  border-color: var(--orange-100) !important;\n}\n.focus\\:border-orange-200:focus {\n  border-color: var(--orange-200) !important;\n}\n.focus\\:border-orange-300:focus {\n  border-color: var(--orange-300) !important;\n}\n.focus\\:border-orange-400:focus {\n  border-color: var(--orange-400) !important;\n}\n.focus\\:border-orange-500:focus {\n  border-color: var(--orange-500) !important;\n}\n.focus\\:border-orange-600:focus {\n  border-color: var(--orange-600) !important;\n}\n.focus\\:border-orange-700:focus {\n  border-color: var(--orange-700) !important;\n}\n.focus\\:border-orange-800:focus {\n  border-color: var(--orange-800) !important;\n}\n.focus\\:border-orange-900:focus {\n  border-color: var(--orange-900) !important;\n}\n\n.hover\\:border-orange-50:hover {\n  border-color: var(--orange-50) !important;\n}\n.hover\\:border-orange-100:hover {\n  border-color: var(--orange-100) !important;\n}\n.hover\\:border-orange-200:hover {\n  border-color: var(--orange-200) !important;\n}\n.hover\\:border-orange-300:hover {\n  border-color: var(--orange-300) !important;\n}\n.hover\\:border-orange-400:hover {\n  border-color: var(--orange-400) !important;\n}\n.hover\\:border-orange-500:hover {\n  border-color: var(--orange-500) !important;\n}\n.hover\\:border-orange-600:hover {\n  border-color: var(--orange-600) !important;\n}\n.hover\\:border-orange-700:hover {\n  border-color: var(--orange-700) !important;\n}\n.hover\\:border-orange-800:hover {\n  border-color: var(--orange-800) !important;\n}\n.hover\\:border-orange-900:hover {\n  border-color: var(--orange-900) !important;\n}\n\n.active\\:border-orange-50:active {\n  border-color: var(--orange-50) !important;\n}\n.active\\:border-orange-100:active {\n  border-color: var(--orange-100) !important;\n}\n.active\\:border-orange-200:active {\n  border-color: var(--orange-200) !important;\n}\n.active\\:border-orange-300:active {\n  border-color: var(--orange-300) !important;\n}\n.active\\:border-orange-400:active {\n  border-color: var(--orange-400) !important;\n}\n.active\\:border-orange-500:active {\n  border-color: var(--orange-500) !important;\n}\n.active\\:border-orange-600:active {\n  border-color: var(--orange-600) !important;\n}\n.active\\:border-orange-700:active {\n  border-color: var(--orange-700) !important;\n}\n.active\\:border-orange-800:active {\n  border-color: var(--orange-800) !important;\n}\n.active\\:border-orange-900:active {\n  border-color: var(--orange-900) !important;\n}\n\n.border-bluegray-50 {\n  border-color: var(--bluegray-50) !important;\n}\n.border-bluegray-100 {\n  border-color: var(--bluegray-100) !important;\n}\n.border-bluegray-200 {\n  border-color: var(--bluegray-200) !important;\n}\n.border-bluegray-300 {\n  border-color: var(--bluegray-300) !important;\n}\n.border-bluegray-400 {\n  border-color: var(--bluegray-400) !important;\n}\n.border-bluegray-500 {\n  border-color: var(--bluegray-500) !important;\n}\n.border-bluegray-600 {\n  border-color: var(--bluegray-600) !important;\n}\n.border-bluegray-700 {\n  border-color: var(--bluegray-700) !important;\n}\n.border-bluegray-800 {\n  border-color: var(--bluegray-800) !important;\n}\n.border-bluegray-900 {\n  border-color: var(--bluegray-900) !important;\n}\n\n.focus\\:border-bluegray-50:focus {\n  border-color: var(--bluegray-50) !important;\n}\n.focus\\:border-bluegray-100:focus {\n  border-color: var(--bluegray-100) !important;\n}\n.focus\\:border-bluegray-200:focus {\n  border-color: var(--bluegray-200) !important;\n}\n.focus\\:border-bluegray-300:focus {\n  border-color: var(--bluegray-300) !important;\n}\n.focus\\:border-bluegray-400:focus {\n  border-color: var(--bluegray-400) !important;\n}\n.focus\\:border-bluegray-500:focus {\n  border-color: var(--bluegray-500) !important;\n}\n.focus\\:border-bluegray-600:focus {\n  border-color: var(--bluegray-600) !important;\n}\n.focus\\:border-bluegray-700:focus {\n  border-color: var(--bluegray-700) !important;\n}\n.focus\\:border-bluegray-800:focus {\n  border-color: var(--bluegray-800) !important;\n}\n.focus\\:border-bluegray-900:focus {\n  border-color: var(--bluegray-900) !important;\n}\n\n.hover\\:border-bluegray-50:hover {\n  border-color: var(--bluegray-50) !important;\n}\n.hover\\:border-bluegray-100:hover {\n  border-color: var(--bluegray-100) !important;\n}\n.hover\\:border-bluegray-200:hover {\n  border-color: var(--bluegray-200) !important;\n}\n.hover\\:border-bluegray-300:hover {\n  border-color: var(--bluegray-300) !important;\n}\n.hover\\:border-bluegray-400:hover {\n  border-color: var(--bluegray-400) !important;\n}\n.hover\\:border-bluegray-500:hover {\n  border-color: var(--bluegray-500) !important;\n}\n.hover\\:border-bluegray-600:hover {\n  border-color: var(--bluegray-600) !important;\n}\n.hover\\:border-bluegray-700:hover {\n  border-color: var(--bluegray-700) !important;\n}\n.hover\\:border-bluegray-800:hover {\n  border-color: var(--bluegray-800) !important;\n}\n.hover\\:border-bluegray-900:hover {\n  border-color: var(--bluegray-900) !important;\n}\n\n.active\\:border-bluegray-50:active {\n  border-color: var(--bluegray-50) !important;\n}\n.active\\:border-bluegray-100:active {\n  border-color: var(--bluegray-100) !important;\n}\n.active\\:border-bluegray-200:active {\n  border-color: var(--bluegray-200) !important;\n}\n.active\\:border-bluegray-300:active {\n  border-color: var(--bluegray-300) !important;\n}\n.active\\:border-bluegray-400:active {\n  border-color: var(--bluegray-400) !important;\n}\n.active\\:border-bluegray-500:active {\n  border-color: var(--bluegray-500) !important;\n}\n.active\\:border-bluegray-600:active {\n  border-color: var(--bluegray-600) !important;\n}\n.active\\:border-bluegray-700:active {\n  border-color: var(--bluegray-700) !important;\n}\n.active\\:border-bluegray-800:active {\n  border-color: var(--bluegray-800) !important;\n}\n.active\\:border-bluegray-900:active {\n  border-color: var(--bluegray-900) !important;\n}\n\n.border-purple-50 {\n  border-color: var(--purple-50) !important;\n}\n.border-purple-100 {\n  border-color: var(--purple-100) !important;\n}\n.border-purple-200 {\n  border-color: var(--purple-200) !important;\n}\n.border-purple-300 {\n  border-color: var(--purple-300) !important;\n}\n.border-purple-400 {\n  border-color: var(--purple-400) !important;\n}\n.border-purple-500 {\n  border-color: var(--purple-500) !important;\n}\n.border-purple-600 {\n  border-color: var(--purple-600) !important;\n}\n.border-purple-700 {\n  border-color: var(--purple-700) !important;\n}\n.border-purple-800 {\n  border-color: var(--purple-800) !important;\n}\n.border-purple-900 {\n  border-color: var(--purple-900) !important;\n}\n\n.focus\\:border-purple-50:focus {\n  border-color: var(--purple-50) !important;\n}\n.focus\\:border-purple-100:focus {\n  border-color: var(--purple-100) !important;\n}\n.focus\\:border-purple-200:focus {\n  border-color: var(--purple-200) !important;\n}\n.focus\\:border-purple-300:focus {\n  border-color: var(--purple-300) !important;\n}\n.focus\\:border-purple-400:focus {\n  border-color: var(--purple-400) !important;\n}\n.focus\\:border-purple-500:focus {\n  border-color: var(--purple-500) !important;\n}\n.focus\\:border-purple-600:focus {\n  border-color: var(--purple-600) !important;\n}\n.focus\\:border-purple-700:focus {\n  border-color: var(--purple-700) !important;\n}\n.focus\\:border-purple-800:focus {\n  border-color: var(--purple-800) !important;\n}\n.focus\\:border-purple-900:focus {\n  border-color: var(--purple-900) !important;\n}\n\n.hover\\:border-purple-50:hover {\n  border-color: var(--purple-50) !important;\n}\n.hover\\:border-purple-100:hover {\n  border-color: var(--purple-100) !important;\n}\n.hover\\:border-purple-200:hover {\n  border-color: var(--purple-200) !important;\n}\n.hover\\:border-purple-300:hover {\n  border-color: var(--purple-300) !important;\n}\n.hover\\:border-purple-400:hover {\n  border-color: var(--purple-400) !important;\n}\n.hover\\:border-purple-500:hover {\n  border-color: var(--purple-500) !important;\n}\n.hover\\:border-purple-600:hover {\n  border-color: var(--purple-600) !important;\n}\n.hover\\:border-purple-700:hover {\n  border-color: var(--purple-700) !important;\n}\n.hover\\:border-purple-800:hover {\n  border-color: var(--purple-800) !important;\n}\n.hover\\:border-purple-900:hover {\n  border-color: var(--purple-900) !important;\n}\n\n.active\\:border-purple-50:active {\n  border-color: var(--purple-50) !important;\n}\n.active\\:border-purple-100:active {\n  border-color: var(--purple-100) !important;\n}\n.active\\:border-purple-200:active {\n  border-color: var(--purple-200) !important;\n}\n.active\\:border-purple-300:active {\n  border-color: var(--purple-300) !important;\n}\n.active\\:border-purple-400:active {\n  border-color: var(--purple-400) !important;\n}\n.active\\:border-purple-500:active {\n  border-color: var(--purple-500) !important;\n}\n.active\\:border-purple-600:active {\n  border-color: var(--purple-600) !important;\n}\n.active\\:border-purple-700:active {\n  border-color: var(--purple-700) !important;\n}\n.active\\:border-purple-800:active {\n  border-color: var(--purple-800) !important;\n}\n.active\\:border-purple-900:active {\n  border-color: var(--purple-900) !important;\n}\n\n.border-gray-50 {\n  border-color: var(--gray-50) !important;\n}\n.border-gray-100 {\n  border-color: var(--gray-100) !important;\n}\n.border-gray-200 {\n  border-color: var(--gray-200) !important;\n}\n.border-gray-300 {\n  border-color: var(--gray-300) !important;\n}\n.border-gray-400 {\n  border-color: var(--gray-400) !important;\n}\n.border-gray-500 {\n  border-color: var(--gray-500) !important;\n}\n.border-gray-600 {\n  border-color: var(--gray-600) !important;\n}\n.border-gray-700 {\n  border-color: var(--gray-700) !important;\n}\n.border-gray-800 {\n  border-color: var(--gray-800) !important;\n}\n.border-gray-900 {\n  border-color: var(--gray-900) !important;\n}\n\n.focus\\:border-gray-50:focus {\n  border-color: var(--gray-50) !important;\n}\n.focus\\:border-gray-100:focus {\n  border-color: var(--gray-100) !important;\n}\n.focus\\:border-gray-200:focus {\n  border-color: var(--gray-200) !important;\n}\n.focus\\:border-gray-300:focus {\n  border-color: var(--gray-300) !important;\n}\n.focus\\:border-gray-400:focus {\n  border-color: var(--gray-400) !important;\n}\n.focus\\:border-gray-500:focus {\n  border-color: var(--gray-500) !important;\n}\n.focus\\:border-gray-600:focus {\n  border-color: var(--gray-600) !important;\n}\n.focus\\:border-gray-700:focus {\n  border-color: var(--gray-700) !important;\n}\n.focus\\:border-gray-800:focus {\n  border-color: var(--gray-800) !important;\n}\n.focus\\:border-gray-900:focus {\n  border-color: var(--gray-900) !important;\n}\n\n.hover\\:border-gray-50:hover {\n  border-color: var(--gray-50) !important;\n}\n.hover\\:border-gray-100:hover {\n  border-color: var(--gray-100) !important;\n}\n.hover\\:border-gray-200:hover {\n  border-color: var(--gray-200) !important;\n}\n.hover\\:border-gray-300:hover {\n  border-color: var(--gray-300) !important;\n}\n.hover\\:border-gray-400:hover {\n  border-color: var(--gray-400) !important;\n}\n.hover\\:border-gray-500:hover {\n  border-color: var(--gray-500) !important;\n}\n.hover\\:border-gray-600:hover {\n  border-color: var(--gray-600) !important;\n}\n.hover\\:border-gray-700:hover {\n  border-color: var(--gray-700) !important;\n}\n.hover\\:border-gray-800:hover {\n  border-color: var(--gray-800) !important;\n}\n.hover\\:border-gray-900:hover {\n  border-color: var(--gray-900) !important;\n}\n\n.active\\:border-gray-50:active {\n  border-color: var(--gray-50) !important;\n}\n.active\\:border-gray-100:active {\n  border-color: var(--gray-100) !important;\n}\n.active\\:border-gray-200:active {\n  border-color: var(--gray-200) !important;\n}\n.active\\:border-gray-300:active {\n  border-color: var(--gray-300) !important;\n}\n.active\\:border-gray-400:active {\n  border-color: var(--gray-400) !important;\n}\n.active\\:border-gray-500:active {\n  border-color: var(--gray-500) !important;\n}\n.active\\:border-gray-600:active {\n  border-color: var(--gray-600) !important;\n}\n.active\\:border-gray-700:active {\n  border-color: var(--gray-700) !important;\n}\n.active\\:border-gray-800:active {\n  border-color: var(--gray-800) !important;\n}\n.active\\:border-gray-900:active {\n  border-color: var(--gray-900) !important;\n}\n\n.border-red-50 {\n  border-color: var(--red-50) !important;\n}\n.border-red-100 {\n  border-color: var(--red-100) !important;\n}\n.border-red-200 {\n  border-color: var(--red-200) !important;\n}\n.border-red-300 {\n  border-color: var(--red-300) !important;\n}\n.border-red-400 {\n  border-color: var(--red-400) !important;\n}\n.border-red-500 {\n  border-color: var(--red-500) !important;\n}\n.border-red-600 {\n  border-color: var(--red-600) !important;\n}\n.border-red-700 {\n  border-color: var(--red-700) !important;\n}\n.border-red-800 {\n  border-color: var(--red-800) !important;\n}\n.border-red-900 {\n  border-color: var(--red-900) !important;\n}\n\n.focus\\:border-red-50:focus {\n  border-color: var(--red-50) !important;\n}\n.focus\\:border-red-100:focus {\n  border-color: var(--red-100) !important;\n}\n.focus\\:border-red-200:focus {\n  border-color: var(--red-200) !important;\n}\n.focus\\:border-red-300:focus {\n  border-color: var(--red-300) !important;\n}\n.focus\\:border-red-400:focus {\n  border-color: var(--red-400) !important;\n}\n.focus\\:border-red-500:focus {\n  border-color: var(--red-500) !important;\n}\n.focus\\:border-red-600:focus {\n  border-color: var(--red-600) !important;\n}\n.focus\\:border-red-700:focus {\n  border-color: var(--red-700) !important;\n}\n.focus\\:border-red-800:focus {\n  border-color: var(--red-800) !important;\n}\n.focus\\:border-red-900:focus {\n  border-color: var(--red-900) !important;\n}\n\n.hover\\:border-red-50:hover {\n  border-color: var(--red-50) !important;\n}\n.hover\\:border-red-100:hover {\n  border-color: var(--red-100) !important;\n}\n.hover\\:border-red-200:hover {\n  border-color: var(--red-200) !important;\n}\n.hover\\:border-red-300:hover {\n  border-color: var(--red-300) !important;\n}\n.hover\\:border-red-400:hover {\n  border-color: var(--red-400) !important;\n}\n.hover\\:border-red-500:hover {\n  border-color: var(--red-500) !important;\n}\n.hover\\:border-red-600:hover {\n  border-color: var(--red-600) !important;\n}\n.hover\\:border-red-700:hover {\n  border-color: var(--red-700) !important;\n}\n.hover\\:border-red-800:hover {\n  border-color: var(--red-800) !important;\n}\n.hover\\:border-red-900:hover {\n  border-color: var(--red-900) !important;\n}\n\n.active\\:border-red-50:active {\n  border-color: var(--red-50) !important;\n}\n.active\\:border-red-100:active {\n  border-color: var(--red-100) !important;\n}\n.active\\:border-red-200:active {\n  border-color: var(--red-200) !important;\n}\n.active\\:border-red-300:active {\n  border-color: var(--red-300) !important;\n}\n.active\\:border-red-400:active {\n  border-color: var(--red-400) !important;\n}\n.active\\:border-red-500:active {\n  border-color: var(--red-500) !important;\n}\n.active\\:border-red-600:active {\n  border-color: var(--red-600) !important;\n}\n.active\\:border-red-700:active {\n  border-color: var(--red-700) !important;\n}\n.active\\:border-red-800:active {\n  border-color: var(--red-800) !important;\n}\n.active\\:border-red-900:active {\n  border-color: var(--red-900) !important;\n}\n\n.border-primary-50 {\n  border-color: var(--primary-50) !important;\n}\n.border-primary-100 {\n  border-color: var(--primary-100) !important;\n}\n.border-primary-200 {\n  border-color: var(--primary-200) !important;\n}\n.border-primary-300 {\n  border-color: var(--primary-300) !important;\n}\n.border-primary-400 {\n  border-color: var(--primary-400) !important;\n}\n.border-primary-500 {\n  border-color: var(--primary-500) !important;\n}\n.border-primary-600 {\n  border-color: var(--primary-600) !important;\n}\n.border-primary-700 {\n  border-color: var(--primary-700) !important;\n}\n.border-primary-800 {\n  border-color: var(--primary-800) !important;\n}\n.border-primary-900 {\n  border-color: var(--primary-900) !important;\n}\n\n.focus\\:border-primary-50:focus {\n  border-color: var(--primary-50) !important;\n}\n.focus\\:border-primary-100:focus {\n  border-color: var(--primary-100) !important;\n}\n.focus\\:border-primary-200:focus {\n  border-color: var(--primary-200) !important;\n}\n.focus\\:border-primary-300:focus {\n  border-color: var(--primary-300) !important;\n}\n.focus\\:border-primary-400:focus {\n  border-color: var(--primary-400) !important;\n}\n.focus\\:border-primary-500:focus {\n  border-color: var(--primary-500) !important;\n}\n.focus\\:border-primary-600:focus {\n  border-color: var(--primary-600) !important;\n}\n.focus\\:border-primary-700:focus {\n  border-color: var(--primary-700) !important;\n}\n.focus\\:border-primary-800:focus {\n  border-color: var(--primary-800) !important;\n}\n.focus\\:border-primary-900:focus {\n  border-color: var(--primary-900) !important;\n}\n\n.hover\\:border-primary-50:hover {\n  border-color: var(--primary-50) !important;\n}\n.hover\\:border-primary-100:hover {\n  border-color: var(--primary-100) !important;\n}\n.hover\\:border-primary-200:hover {\n  border-color: var(--primary-200) !important;\n}\n.hover\\:border-primary-300:hover {\n  border-color: var(--primary-300) !important;\n}\n.hover\\:border-primary-400:hover {\n  border-color: var(--primary-400) !important;\n}\n.hover\\:border-primary-500:hover {\n  border-color: var(--primary-500) !important;\n}\n.hover\\:border-primary-600:hover {\n  border-color: var(--primary-600) !important;\n}\n.hover\\:border-primary-700:hover {\n  border-color: var(--primary-700) !important;\n}\n.hover\\:border-primary-800:hover {\n  border-color: var(--primary-800) !important;\n}\n.hover\\:border-primary-900:hover {\n  border-color: var(--primary-900) !important;\n}\n\n.active\\:border-primary-50:active {\n  border-color: var(--primary-50) !important;\n}\n.active\\:border-primary-100:active {\n  border-color: var(--primary-100) !important;\n}\n.active\\:border-primary-200:active {\n  border-color: var(--primary-200) !important;\n}\n.active\\:border-primary-300:active {\n  border-color: var(--primary-300) !important;\n}\n.active\\:border-primary-400:active {\n  border-color: var(--primary-400) !important;\n}\n.active\\:border-primary-500:active {\n  border-color: var(--primary-500) !important;\n}\n.active\\:border-primary-600:active {\n  border-color: var(--primary-600) !important;\n}\n.active\\:border-primary-700:active {\n  border-color: var(--primary-700) !important;\n}\n.active\\:border-primary-800:active {\n  border-color: var(--primary-800) !important;\n}\n.active\\:border-primary-900:active {\n  border-color: var(--primary-900) !important;\n}\n\n.bg-white-alpha-10 {\n  background-color: rgba(255,255,255,0.1) !important;\n}\n.bg-white-alpha-20 {\n  background-color: rgba(255,255,255,0.2) !important;\n}\n.bg-white-alpha-30 {\n  background-color: rgba(255,255,255,0.3) !important;\n}\n.bg-white-alpha-40 {\n  background-color: rgba(255,255,255,0.4) !important;\n}\n.bg-white-alpha-50 {\n  background-color: rgba(255,255,255,0.5) !important;\n}\n.bg-white-alpha-60 {\n  background-color: rgba(255,255,255,0.6) !important;\n}\n.bg-white-alpha-70 {\n  background-color: rgba(255,255,255,0.7) !important;\n}\n.bg-white-alpha-80 {\n  background-color: rgba(255,255,255,0.8) !important;\n}\n.bg-white-alpha-90 {\n  background-color: rgba(255,255,255,0.9) !important;\n}\n\n.hover\\:bg-white-alpha-10:hover {\n  background-color: rgba(255,255,255,0.1) !important;\n}\n.hover\\:bg-white-alpha-20:hover {\n  background-color: rgba(255,255,255,0.2) !important;\n}\n.hover\\:bg-white-alpha-30:hover {\n  background-color: rgba(255,255,255,0.3) !important;\n}\n.hover\\:bg-white-alpha-40:hover {\n  background-color: rgba(255,255,255,0.4) !important;\n}\n.hover\\:bg-white-alpha-50:hover {\n  background-color: rgba(255,255,255,0.5) !important;\n}\n.hover\\:bg-white-alpha-60:hover {\n  background-color: rgba(255,255,255,0.6) !important;\n}\n.hover\\:bg-white-alpha-70:hover {\n  background-color: rgba(255,255,255,0.7) !important;\n}\n.hover\\:bg-white-alpha-80:hover {\n  background-color: rgba(255,255,255,0.8) !important;\n}\n.hover\\:bg-white-alpha-90:hover {\n  background-color: rgba(255,255,255,0.9) !important;\n}\n\n.focus\\:bg-white-alpha-10:focus {\n  background-color: rgba(255,255,255,0.1) !important;\n}\n.focus\\:bg-white-alpha-20:focus {\n  background-color: rgba(255,255,255,0.2) !important;\n}\n.focus\\:bg-white-alpha-30:focus {\n  background-color: rgba(255,255,255,0.3) !important;\n}\n.focus\\:bg-white-alpha-40:focus {\n  background-color: rgba(255,255,255,0.4) !important;\n}\n.focus\\:bg-white-alpha-50:focus {\n  background-color: rgba(255,255,255,0.5) !important;\n}\n.focus\\:bg-white-alpha-60:focus {\n  background-color: rgba(255,255,255,0.6) !important;\n}\n.focus\\:bg-white-alpha-70:focus {\n  background-color: rgba(255,255,255,0.7) !important;\n}\n.focus\\:bg-white-alpha-80:focus {\n  background-color: rgba(255,255,255,0.8) !important;\n}\n.focus\\:bg-white-alpha-90:focus {\n  background-color: rgba(255,255,255,0.9) !important;\n}\n\n.active\\:bg-white-alpha-10:active {\n  background-color: rgba(255,255,255,0.1) !important;\n}\n.active\\:bg-white-alpha-20:active {\n  background-color: rgba(255,255,255,0.2) !important;\n}\n.active\\:bg-white-alpha-30:active {\n  background-color: rgba(255,255,255,0.3) !important;\n}\n.active\\:bg-white-alpha-40:active {\n  background-color: rgba(255,255,255,0.4) !important;\n}\n.active\\:bg-white-alpha-50:active {\n  background-color: rgba(255,255,255,0.5) !important;\n}\n.active\\:bg-white-alpha-60:active {\n  background-color: rgba(255,255,255,0.6) !important;\n}\n.active\\:bg-white-alpha-70:active {\n  background-color: rgba(255,255,255,0.7) !important;\n}\n.active\\:bg-white-alpha-80:active {\n  background-color: rgba(255,255,255,0.8) !important;\n}\n.active\\:bg-white-alpha-90:active {\n  background-color: rgba(255,255,255,0.9) !important;\n}\n\n.bg-black-alpha-10 {\n  background-color: rgba(0,0,0,0.1) !important;\n}\n.bg-black-alpha-20 {\n  background-color: rgba(0,0,0,0.2) !important;\n}\n.bg-black-alpha-30 {\n  background-color: rgba(0,0,0,0.3) !important;\n}\n.bg-black-alpha-40 {\n  background-color: rgba(0,0,0,0.4) !important;\n}\n.bg-black-alpha-50 {\n  background-color: rgba(0,0,0,0.5) !important;\n}\n.bg-black-alpha-60 {\n  background-color: rgba(0,0,0,0.6) !important;\n}\n.bg-black-alpha-70 {\n  background-color: rgba(0,0,0,0.7) !important;\n}\n.bg-black-alpha-80 {\n  background-color: rgba(0,0,0,0.8) !important;\n}\n.bg-black-alpha-90 {\n  background-color: rgba(0,0,0,0.9) !important;\n}\n\n.hover\\:bg-black-alpha-10:hover {\n  background-color: rgba(0,0,0,0.1) !important;\n}\n.hover\\:bg-black-alpha-20:hover {\n  background-color: rgba(0,0,0,0.2) !important;\n}\n.hover\\:bg-black-alpha-30:hover {\n  background-color: rgba(0,0,0,0.3) !important;\n}\n.hover\\:bg-black-alpha-40:hover {\n  background-color: rgba(0,0,0,0.4) !important;\n}\n.hover\\:bg-black-alpha-50:hover {\n  background-color: rgba(0,0,0,0.5) !important;\n}\n.hover\\:bg-black-alpha-60:hover {\n  background-color: rgba(0,0,0,0.6) !important;\n}\n.hover\\:bg-black-alpha-70:hover {\n  background-color: rgba(0,0,0,0.7) !important;\n}\n.hover\\:bg-black-alpha-80:hover {\n  background-color: rgba(0,0,0,0.8) !important;\n}\n.hover\\:bg-black-alpha-90:hover {\n  background-color: rgba(0,0,0,0.9) !important;\n}\n\n.focus\\:bg-black-alpha-10:focus {\n  background-color: rgba(0,0,0,0.1) !important;\n}\n.focus\\:bg-black-alpha-20:focus {\n  background-color: rgba(0,0,0,0.2) !important;\n}\n.focus\\:bg-black-alpha-30:focus {\n  background-color: rgba(0,0,0,0.3) !important;\n}\n.focus\\:bg-black-alpha-40:focus {\n  background-color: rgba(0,0,0,0.4) !important;\n}\n.focus\\:bg-black-alpha-50:focus {\n  background-color: rgba(0,0,0,0.5) !important;\n}\n.focus\\:bg-black-alpha-60:focus {\n  background-color: rgba(0,0,0,0.6) !important;\n}\n.focus\\:bg-black-alpha-70:focus {\n  background-color: rgba(0,0,0,0.7) !important;\n}\n.focus\\:bg-black-alpha-80:focus {\n  background-color: rgba(0,0,0,0.8) !important;\n}\n.focus\\:bg-black-alpha-90:focus {\n  background-color: rgba(0,0,0,0.9) !important;\n}\n\n.active\\:bg-black-alpha-10:active {\n  background-color: rgba(0,0,0,0.1) !important;\n}\n.active\\:bg-black-alpha-20:active {\n  background-color: rgba(0,0,0,0.2) !important;\n}\n.active\\:bg-black-alpha-30:active {\n  background-color: rgba(0,0,0,0.3) !important;\n}\n.active\\:bg-black-alpha-40:active {\n  background-color: rgba(0,0,0,0.4) !important;\n}\n.active\\:bg-black-alpha-50:active {\n  background-color: rgba(0,0,0,0.5) !important;\n}\n.active\\:bg-black-alpha-60:active {\n  background-color: rgba(0,0,0,0.6) !important;\n}\n.active\\:bg-black-alpha-70:active {\n  background-color: rgba(0,0,0,0.7) !important;\n}\n.active\\:bg-black-alpha-80:active {\n  background-color: rgba(0,0,0,0.8) !important;\n}\n.active\\:bg-black-alpha-90:active {\n  background-color: rgba(0,0,0,0.9) !important;\n}\n\n.border-white-alpha-10 {\n  border-color: rgba(255,255,255,0.1) !important;\n}\n.border-white-alpha-20 {\n  border-color: rgba(255,255,255,0.2) !important;\n}\n.border-white-alpha-30 {\n  border-color: rgba(255,255,255,0.3) !important;\n}\n.border-white-alpha-40 {\n  border-color: rgba(255,255,255,0.4) !important;\n}\n.border-white-alpha-50 {\n  border-color: rgba(255,255,255,0.5) !important;\n}\n.border-white-alpha-60 {\n  border-color: rgba(255,255,255,0.6) !important;\n}\n.border-white-alpha-70 {\n  border-color: rgba(255,255,255,0.7) !important;\n}\n.border-white-alpha-80 {\n  border-color: rgba(255,255,255,0.8) !important;\n}\n.border-white-alpha-90 {\n  border-color: rgba(255,255,255,0.9) !important;\n}\n\n.hover\\:border-white-alpha-10:hover {\n  border-color: rgba(255,255,255,0.1) !important;\n}\n.hover\\:border-white-alpha-20:hover {\n  border-color: rgba(255,255,255,0.2) !important;\n}\n.hover\\:border-white-alpha-30:hover {\n  border-color: rgba(255,255,255,0.3) !important;\n}\n.hover\\:border-white-alpha-40:hover {\n  border-color: rgba(255,255,255,0.4) !important;\n}\n.hover\\:border-white-alpha-50:hover {\n  border-color: rgba(255,255,255,0.5) !important;\n}\n.hover\\:border-white-alpha-60:hover {\n  border-color: rgba(255,255,255,0.6) !important;\n}\n.hover\\:border-white-alpha-70:hover {\n  border-color: rgba(255,255,255,0.7) !important;\n}\n.hover\\:border-white-alpha-80:hover {\n  border-color: rgba(255,255,255,0.8) !important;\n}\n.hover\\:border-white-alpha-90:hover {\n  border-color: rgba(255,255,255,0.9) !important;\n}\n\n.focus\\:border-white-alpha-10:focus {\n  border-color: rgba(255,255,255,0.1) !important;\n}\n.focus\\:border-white-alpha-20:focus {\n  border-color: rgba(255,255,255,0.2) !important;\n}\n.focus\\:border-white-alpha-30:focus {\n  border-color: rgba(255,255,255,0.3) !important;\n}\n.focus\\:border-white-alpha-40:focus {\n  border-color: rgba(255,255,255,0.4) !important;\n}\n.focus\\:border-white-alpha-50:focus {\n  border-color: rgba(255,255,255,0.5) !important;\n}\n.focus\\:border-white-alpha-60:focus {\n  border-color: rgba(255,255,255,0.6) !important;\n}\n.focus\\:border-white-alpha-70:focus {\n  border-color: rgba(255,255,255,0.7) !important;\n}\n.focus\\:border-white-alpha-80:focus {\n  border-color: rgba(255,255,255,0.8) !important;\n}\n.focus\\:border-white-alpha-90:focus {\n  border-color: rgba(255,255,255,0.9) !important;\n}\n\n.active\\:border-white-alpha-10:active {\n  border-color: rgba(255,255,255,0.1) !important;\n}\n.active\\:border-white-alpha-20:active {\n  border-color: rgba(255,255,255,0.2) !important;\n}\n.active\\:border-white-alpha-30:active {\n  border-color: rgba(255,255,255,0.3) !important;\n}\n.active\\:border-white-alpha-40:active {\n  border-color: rgba(255,255,255,0.4) !important;\n}\n.active\\:border-white-alpha-50:active {\n  border-color: rgba(255,255,255,0.5) !important;\n}\n.active\\:border-white-alpha-60:active {\n  border-color: rgba(255,255,255,0.6) !important;\n}\n.active\\:border-white-alpha-70:active {\n  border-color: rgba(255,255,255,0.7) !important;\n}\n.active\\:border-white-alpha-80:active {\n  border-color: rgba(255,255,255,0.8) !important;\n}\n.active\\:border-white-alpha-90:active {\n  border-color: rgba(255,255,255,0.9) !important;\n}\n\n.border-black-alpha-10 {\n  border-color: rgba(0,0,0,0.1) !important;\n}\n.border-black-alpha-20 {\n  border-color: rgba(0,0,0,0.2) !important;\n}\n.border-black-alpha-30 {\n  border-color: rgba(0,0,0,0.3) !important;\n}\n.border-black-alpha-40 {\n  border-color: rgba(0,0,0,0.4) !important;\n}\n.border-black-alpha-50 {\n  border-color: rgba(0,0,0,0.5) !important;\n}\n.border-black-alpha-60 {\n  border-color: rgba(0,0,0,0.6) !important;\n}\n.border-black-alpha-70 {\n  border-color: rgba(0,0,0,0.7) !important;\n}\n.border-black-alpha-80 {\n  border-color: rgba(0,0,0,0.8) !important;\n}\n.border-black-alpha-90 {\n  border-color: rgba(0,0,0,0.9) !important;\n}\n\n.hover\\:border-black-alpha-10:hover {\n  border-color: rgba(0,0,0,0.1) !important;\n}\n.hover\\:border-black-alpha-20:hover {\n  border-color: rgba(0,0,0,0.2) !important;\n}\n.hover\\:border-black-alpha-30:hover {\n  border-color: rgba(0,0,0,0.3) !important;\n}\n.hover\\:border-black-alpha-40:hover {\n  border-color: rgba(0,0,0,0.4) !important;\n}\n.hover\\:border-black-alpha-50:hover {\n  border-color: rgba(0,0,0,0.5) !important;\n}\n.hover\\:border-black-alpha-60:hover {\n  border-color: rgba(0,0,0,0.6) !important;\n}\n.hover\\:border-black-alpha-70:hover {\n  border-color: rgba(0,0,0,0.7) !important;\n}\n.hover\\:border-black-alpha-80:hover {\n  border-color: rgba(0,0,0,0.8) !important;\n}\n.hover\\:border-black-alpha-90:hover {\n  border-color: rgba(0,0,0,0.9) !important;\n}\n\n.focus\\:border-black-alpha-10:focus {\n  border-color: rgba(0,0,0,0.1) !important;\n}\n.focus\\:border-black-alpha-20:focus {\n  border-color: rgba(0,0,0,0.2) !important;\n}\n.focus\\:border-black-alpha-30:focus {\n  border-color: rgba(0,0,0,0.3) !important;\n}\n.focus\\:border-black-alpha-40:focus {\n  border-color: rgba(0,0,0,0.4) !important;\n}\n.focus\\:border-black-alpha-50:focus {\n  border-color: rgba(0,0,0,0.5) !important;\n}\n.focus\\:border-black-alpha-60:focus {\n  border-color: rgba(0,0,0,0.6) !important;\n}\n.focus\\:border-black-alpha-70:focus {\n  border-color: rgba(0,0,0,0.7) !important;\n}\n.focus\\:border-black-alpha-80:focus {\n  border-color: rgba(0,0,0,0.8) !important;\n}\n.focus\\:border-black-alpha-90:focus {\n  border-color: rgba(0,0,0,0.9) !important;\n}\n\n.active\\:border-black-alpha-10:active {\n  border-color: rgba(0,0,0,0.1) !important;\n}\n.active\\:border-black-alpha-20:active {\n  border-color: rgba(0,0,0,0.2) !important;\n}\n.active\\:border-black-alpha-30:active {\n  border-color: rgba(0,0,0,0.3) !important;\n}\n.active\\:border-black-alpha-40:active {\n  border-color: rgba(0,0,0,0.4) !important;\n}\n.active\\:border-black-alpha-50:active {\n  border-color: rgba(0,0,0,0.5) !important;\n}\n.active\\:border-black-alpha-60:active {\n  border-color: rgba(0,0,0,0.6) !important;\n}\n.active\\:border-black-alpha-70:active {\n  border-color: rgba(0,0,0,0.7) !important;\n}\n.active\\:border-black-alpha-80:active {\n  border-color: rgba(0,0,0,0.8) !important;\n}\n.active\\:border-black-alpha-90:active {\n  border-color: rgba(0,0,0,0.9) !important;\n}\n\n.text-white-alpha-10 {\n  color: rgba(255,255,255,0.1) !important;\n}\n.text-white-alpha-20 {\n  color: rgba(255,255,255,0.2) !important;\n}\n.text-white-alpha-30 {\n  color: rgba(255,255,255,0.3) !important;\n}\n.text-white-alpha-40 {\n  color: rgba(255,255,255,0.4) !important;\n}\n.text-white-alpha-50 {\n  color: rgba(255,255,255,0.5) !important;\n}\n.text-white-alpha-60 {\n  color: rgba(255,255,255,0.6) !important;\n}\n.text-white-alpha-70 {\n  color: rgba(255,255,255,0.7) !important;\n}\n.text-white-alpha-80 {\n  color: rgba(255,255,255,0.8) !important;\n}\n.text-white-alpha-90 {\n  color: rgba(255,255,255,0.9) !important;\n}\n\n.hover\\:text-white-alpha-10:hover {\n  color: rgba(255,255,255,0.1) !important;\n}\n.hover\\:text-white-alpha-20:hover {\n  color: rgba(255,255,255,0.2) !important;\n}\n.hover\\:text-white-alpha-30:hover {\n  color: rgba(255,255,255,0.3) !important;\n}\n.hover\\:text-white-alpha-40:hover {\n  color: rgba(255,255,255,0.4) !important;\n}\n.hover\\:text-white-alpha-50:hover {\n  color: rgba(255,255,255,0.5) !important;\n}\n.hover\\:text-white-alpha-60:hover {\n  color: rgba(255,255,255,0.6) !important;\n}\n.hover\\:text-white-alpha-70:hover {\n  color: rgba(255,255,255,0.7) !important;\n}\n.hover\\:text-white-alpha-80:hover {\n  color: rgba(255,255,255,0.8) !important;\n}\n.hover\\:text-white-alpha-90:hover {\n  color: rgba(255,255,255,0.9) !important;\n}\n\n.focus\\:text-white-alpha-10:focus {\n  color: rgba(255,255,255,0.1) !important;\n}\n.focus\\:text-white-alpha-20:focus {\n  color: rgba(255,255,255,0.2) !important;\n}\n.focus\\:text-white-alpha-30:focus {\n  color: rgba(255,255,255,0.3) !important;\n}\n.focus\\:text-white-alpha-40:focus {\n  color: rgba(255,255,255,0.4) !important;\n}\n.focus\\:text-white-alpha-50:focus {\n  color: rgba(255,255,255,0.5) !important;\n}\n.focus\\:text-white-alpha-60:focus {\n  color: rgba(255,255,255,0.6) !important;\n}\n.focus\\:text-white-alpha-70:focus {\n  color: rgba(255,255,255,0.7) !important;\n}\n.focus\\:text-white-alpha-80:focus {\n  color: rgba(255,255,255,0.8) !important;\n}\n.focus\\:text-white-alpha-90:focus {\n  color: rgba(255,255,255,0.9) !important;\n}\n\n.active\\:text-white-alpha-10:active {\n  color: rgba(255,255,255,0.1) !important;\n}\n.active\\:text-white-alpha-20:active {\n  color: rgba(255,255,255,0.2) !important;\n}\n.active\\:text-white-alpha-30:active {\n  color: rgba(255,255,255,0.3) !important;\n}\n.active\\:text-white-alpha-40:active {\n  color: rgba(255,255,255,0.4) !important;\n}\n.active\\:text-white-alpha-50:active {\n  color: rgba(255,255,255,0.5) !important;\n}\n.active\\:text-white-alpha-60:active {\n  color: rgba(255,255,255,0.6) !important;\n}\n.active\\:text-white-alpha-70:active {\n  color: rgba(255,255,255,0.7) !important;\n}\n.active\\:text-white-alpha-80:active {\n  color: rgba(255,255,255,0.8) !important;\n}\n.active\\:text-white-alpha-90:active {\n  color: rgba(255,255,255,0.9) !important;\n}\n\n.text-black-alpha-10 {\n  color: rgba(0,0,0,0.1) !important;\n}\n.text-black-alpha-20 {\n  color: rgba(0,0,0,0.2) !important;\n}\n.text-black-alpha-30 {\n  color: rgba(0,0,0,0.3) !important;\n}\n.text-black-alpha-40 {\n  color: rgba(0,0,0,0.4) !important;\n}\n.text-black-alpha-50 {\n  color: rgba(0,0,0,0.5) !important;\n}\n.text-black-alpha-60 {\n  color: rgba(0,0,0,0.6) !important;\n}\n.text-black-alpha-70 {\n  color: rgba(0,0,0,0.7) !important;\n}\n.text-black-alpha-80 {\n  color: rgba(0,0,0,0.8) !important;\n}\n.text-black-alpha-90 {\n  color: rgba(0,0,0,0.9) !important;\n}\n\n.hover\\:text-black-alpha-10:hover {\n  color: rgba(0,0,0,0.1) !important;\n}\n.hover\\:text-black-alpha-20:hover {\n  color: rgba(0,0,0,0.2) !important;\n}\n.hover\\:text-black-alpha-30:hover {\n  color: rgba(0,0,0,0.3) !important;\n}\n.hover\\:text-black-alpha-40:hover {\n  color: rgba(0,0,0,0.4) !important;\n}\n.hover\\:text-black-alpha-50:hover {\n  color: rgba(0,0,0,0.5) !important;\n}\n.hover\\:text-black-alpha-60:hover {\n  color: rgba(0,0,0,0.6) !important;\n}\n.hover\\:text-black-alpha-70:hover {\n  color: rgba(0,0,0,0.7) !important;\n}\n.hover\\:text-black-alpha-80:hover {\n  color: rgba(0,0,0,0.8) !important;\n}\n.hover\\:text-black-alpha-90:hover {\n  color: rgba(0,0,0,0.9) !important;\n}\n\n.focus\\:text-black-alpha-10:focus {\n  color: rgba(0,0,0,0.1) !important;\n}\n.focus\\:text-black-alpha-20:focus {\n  color: rgba(0,0,0,0.2) !important;\n}\n.focus\\:text-black-alpha-30:focus {\n  color: rgba(0,0,0,0.3) !important;\n}\n.focus\\:text-black-alpha-40:focus {\n  color: rgba(0,0,0,0.4) !important;\n}\n.focus\\:text-black-alpha-50:focus {\n  color: rgba(0,0,0,0.5) !important;\n}\n.focus\\:text-black-alpha-60:focus {\n  color: rgba(0,0,0,0.6) !important;\n}\n.focus\\:text-black-alpha-70:focus {\n  color: rgba(0,0,0,0.7) !important;\n}\n.focus\\:text-black-alpha-80:focus {\n  color: rgba(0,0,0,0.8) !important;\n}\n.focus\\:text-black-alpha-90:focus {\n  color: rgba(0,0,0,0.9) !important;\n}\n\n.active\\:text-black-alpha-10:active {\n  color: rgba(0,0,0,0.1) !important;\n}\n.active\\:text-black-alpha-20:active {\n  color: rgba(0,0,0,0.2) !important;\n}\n.active\\:text-black-alpha-30:active {\n  color: rgba(0,0,0,0.3) !important;\n}\n.active\\:text-black-alpha-40:active {\n  color: rgba(0,0,0,0.4) !important;\n}\n.active\\:text-black-alpha-50:active {\n  color: rgba(0,0,0,0.5) !important;\n}\n.active\\:text-black-alpha-60:active {\n  color: rgba(0,0,0,0.6) !important;\n}\n.active\\:text-black-alpha-70:active {\n  color: rgba(0,0,0,0.7) !important;\n}\n.active\\:text-black-alpha-80:active {\n  color: rgba(0,0,0,0.8) !important;\n}\n.active\\:text-black-alpha-90:active {\n  color: rgba(0,0,0,0.9) !important;\n}\n\n.text-primary {\n  color: var(--primary-color) !important;\n}\n\n.bg-primary {\n  color: var(--primary-color-text) !important;\n  background-color: var(--primary-color) !important;\n}\n\n.bg-primary-reverse {\n  color: var(--primary-color) !important;\n  background-color: var(--primary-color-text) !important;\n}\n\n.bg-white {\n  background-color: #ffffff !important;\n}\n\n.border-primary {\n  border-color: var(--primary-color) !important;\n}\n\n.text-white {\n  color: #ffffff !important;\n}\n\n.border-white {\n  border-color: #ffffff !important;\n}\n\n.text-color {\n  color: var(--text-color) !important;\n}\n\n.text-color-secondary {\n  color: var(--text-color-secondary) !important;\n}\n\n.surface-ground {\n  background-color: var(--surface-ground) !important;\n}\n\n.surface-section {\n  background-color: var(--surface-section) !important;\n}\n\n.surface-card {\n  background-color: var(--surface-card) !important;\n}\n\n.surface-overlay {\n  background-color: var(--surface-overlay) !important;\n}\n\n.surface-hover {\n  background-color: var(--surface-hover) !important;\n}\n\n.surface-border {\n  border-color: var(--surface-border) !important;\n}\n\n.focus\\:text-primary:focus {\n  color: var(--primary-color) !important;\n}\n\n.hover\\:text-primary:hover {\n  color: var(--primary-color) !important;\n}\n\n.active\\:text-primary:active {\n  color: var(--primary-color) !important;\n}\n\n.focus\\:bg-primary:focus {\n  color: var(--primary-color-text) !important;\n  background-color: var(--primary-color) !important;\n}\n\n.hover\\:bg-primary:hover {\n  color: var(--primary-color-text) !important;\n  background-color: var(--primary-color) !important;\n}\n\n.active\\:bg-primary:active {\n  color: var(--primary-color-text) !important;\n  background-color: var(--primary-color) !important;\n}\n\n.focus\\:bg-primary-reverse:focus {\n  color: var(--primary-color) !important;\n  background-color: var(--primary-color-text) !important;\n}\n\n.hover\\:bg-primary-reverse:hover {\n  color: var(--primary-color) !important;\n  background-color: var(--primary-color-text) !important;\n}\n\n.active\\:bg-primary-reverse:active {\n  color: var(--primary-color) !important;\n  background-color: var(--primary-color-text) !important;\n}\n\n.focus\\:bg-white:focus {\n  background-color: #ffffff !important;\n}\n\n.hover\\:bg-white:hover {\n  background-color: #ffffff !important;\n}\n\n.active\\:bg-white:active {\n  background-color: #ffffff !important;\n}\n\n.focus\\:border-primary:focus {\n  border-color: var(--primary-color) !important;\n}\n\n.hover\\:border-primary:hover {\n  border-color: var(--primary-color) !important;\n}\n\n.active\\:border-primary:active {\n  border-color: var(--primary-color) !important;\n}\n\n.focus\\:text-white:focus {\n  color: #ffffff !important;\n}\n\n.hover\\:text-white:hover {\n  color: #ffffff !important;\n}\n\n.active\\:text-white:active {\n  color: #ffffff !important;\n}\n\n.focus\\:border-white:focus {\n  border-color: #ffffff !important;\n}\n\n.hover\\:border-white:hover {\n  border-color: #ffffff !important;\n}\n\n.active\\:border-white:active {\n  border-color: #ffffff !important;\n}\n\n.focus\\:text-color:focus {\n  color: var(--text-color) !important;\n}\n\n.hover\\:text-color:hover {\n  color: var(--text-color) !important;\n}\n\n.active\\:text-color:active {\n  color: var(--text-color) !important;\n}\n\n.focus\\:text-color-secondary:focus {\n  color: var(--text-color-secondary) !important;\n}\n\n.hover\\:text-color-secondary:hover {\n  color: var(--text-color-secondary) !important;\n}\n\n.active\\:text-color-secondary:active {\n  color: var(--text-color-secondary) !important;\n}\n\n.focus\\:surface-ground:focus {\n  background-color: var(--surface-ground) !important;\n}\n\n.hover\\:surface-ground:hover {\n  background-color: var(--surface-ground) !important;\n}\n\n.active\\:surface-ground:active {\n  background-color: var(--surface-ground) !important;\n}\n\n.focus\\:surface-section:focus {\n  background-color: var(--surface-section) !important;\n}\n\n.hover\\:surface-section:hover {\n  background-color: var(--surface-section) !important;\n}\n\n.active\\:surface-section:active {\n  background-color: var(--surface-section) !important;\n}\n\n.focus\\:surface-card:focus {\n  background-color: var(--surface-card) !important;\n}\n\n.hover\\:surface-card:hover {\n  background-color: var(--surface-card) !important;\n}\n\n.active\\:surface-card:active {\n  background-color: var(--surface-card) !important;\n}\n\n.focus\\:surface-overlay:focus {\n  background-color: var(--surface-overlay) !important;\n}\n\n.hover\\:surface-overlay:hover {\n  background-color: var(--surface-overlay) !important;\n}\n\n.active\\:surface-overlay:active {\n  background-color: var(--surface-overlay) !important;\n}\n\n.focus\\:surface-hover:focus {\n  background-color: var(--surface-hover) !important;\n}\n\n.hover\\:surface-hover:hover {\n  background-color: var(--surface-hover) !important;\n}\n\n.active\\:surface-hover:active {\n  background-color: var(--surface-hover) !important;\n}\n\n.focus\\:surface-border:focus {\n  border-color: var(--surface-border) !important;\n}\n\n.hover\\:surface-border:hover {\n  border-color: var(--surface-border) !important;\n}\n\n.active\\:surface-border:active {\n  border-color: var(--surface-border) !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:text-primary {\n    color: var(--primary-color) !important;\n  }\n  .sm\\:bg-primary {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .sm\\:bg-primary-reverse {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .sm\\:bg-white {\n    background-color: #ffffff !important;\n  }\n  .sm\\:border-primary {\n    border-color: var(--primary-color) !important;\n  }\n  .sm\\:text-white {\n    color: #ffffff !important;\n  }\n  .sm\\:border-white {\n    border-color: #ffffff !important;\n  }\n  .sm\\:text-color {\n    color: var(--text-color) !important;\n  }\n  .sm\\:text-color-secondary {\n    color: var(--text-color-secondary) !important;\n  }\n  .sm\\:surface-ground {\n    background-color: var(--surface-ground) !important;\n  }\n  .sm\\:surface-section {\n    background-color: var(--surface-section) !important;\n  }\n  .sm\\:surface-card {\n    background-color: var(--surface-card) !important;\n  }\n  .sm\\:surface-overlay {\n    background-color: var(--surface-overlay) !important;\n  }\n  .sm\\:surface-hover {\n    background-color: var(--surface-hover) !important;\n  }\n  .sm\\:surface-border {\n    border-color: var(--surface-border) !important;\n  }\n  .sm\\:focus\\:text-primary:focus {\n    color: var(--primary-color) !important;\n  }\n  .sm\\:hover\\:text-primary:hover {\n    color: var(--primary-color) !important;\n  }\n  .sm\\:active\\:text-primary:active {\n    color: var(--primary-color) !important;\n  }\n  .sm\\:focus\\:bg-primary:focus {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .sm\\:hover\\:bg-primary:hover {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .sm\\:active\\:bg-primary:active {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .sm\\:focus\\:bg-primary-reverse:focus {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .sm\\:hover\\:bg-primary-reverse:hover {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .sm\\:active\\:bg-primary-reverse:active {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .sm\\:focus\\:bg-white:focus {\n    background-color: #ffffff !important;\n  }\n  .sm\\:hover\\:bg-white:hover {\n    background-color: #ffffff !important;\n  }\n  .sm\\:active\\:bg-white:active {\n    background-color: #ffffff !important;\n  }\n  .sm\\:focus\\:border-primary:focus {\n    border-color: var(--primary-color) !important;\n  }\n  .sm\\:hover\\:border-primary:hover {\n    border-color: var(--primary-color) !important;\n  }\n  .sm\\:active\\:border-primary:active {\n    border-color: var(--primary-color) !important;\n  }\n  .sm\\:focus\\:text-white:focus {\n    color: #ffffff !important;\n  }\n  .sm\\:hover\\:text-white:hover {\n    color: #ffffff !important;\n  }\n  .sm\\:active\\:text-white:active {\n    color: #ffffff !important;\n  }\n  .sm\\:focus\\:border-white:focus {\n    border-color: #ffffff !important;\n  }\n  .sm\\:hover\\:border-white:hover {\n    border-color: #ffffff !important;\n  }\n  .sm\\:active\\:border-white:active {\n    border-color: #ffffff !important;\n  }\n  .sm\\:focus\\:text-color:focus {\n    color: var(--text-color) !important;\n  }\n  .sm\\:hover\\:text-color:hover {\n    color: var(--text-color) !important;\n  }\n  .sm\\:active\\:text-color:active {\n    color: var(--text-color) !important;\n  }\n  .sm\\:focus\\:text-color-secondary:focus {\n    color: var(--text-color-secondary) !important;\n  }\n  .sm\\:hover\\:text-color-secondary:hover {\n    color: var(--text-color-secondary) !important;\n  }\n  .sm\\:active\\:text-color-secondary:active {\n    color: var(--text-color-secondary) !important;\n  }\n  .sm\\:focus\\:surface-ground:focus {\n    background-color: var(--surface-ground) !important;\n  }\n  .sm\\:hover\\:surface-ground:hover {\n    background-color: var(--surface-ground) !important;\n  }\n  .sm\\:active\\:surface-ground:active {\n    background-color: var(--surface-ground) !important;\n  }\n  .sm\\:focus\\:surface-section:focus {\n    background-color: var(--surface-section) !important;\n  }\n  .sm\\:hover\\:surface-section:hover {\n    background-color: var(--surface-section) !important;\n  }\n  .sm\\:active\\:surface-section:active {\n    background-color: var(--surface-section) !important;\n  }\n  .sm\\:focus\\:surface-card:focus {\n    background-color: var(--surface-card) !important;\n  }\n  .sm\\:hover\\:surface-card:hover {\n    background-color: var(--surface-card) !important;\n  }\n  .sm\\:active\\:surface-card:active {\n    background-color: var(--surface-card) !important;\n  }\n  .sm\\:focus\\:surface-overlay:focus {\n    background-color: var(--surface-overlay) !important;\n  }\n  .sm\\:hover\\:surface-overlay:hover {\n    background-color: var(--surface-overlay) !important;\n  }\n  .sm\\:active\\:surface-overlay:active {\n    background-color: var(--surface-overlay) !important;\n  }\n  .sm\\:focus\\:surface-hover:focus {\n    background-color: var(--surface-hover) !important;\n  }\n  .sm\\:hover\\:surface-hover:hover {\n    background-color: var(--surface-hover) !important;\n  }\n  .sm\\:active\\:surface-hover:active {\n    background-color: var(--surface-hover) !important;\n  }\n  .sm\\:focus\\:surface-border:focus {\n    border-color: var(--surface-border) !important;\n  }\n  .sm\\:hover\\:surface-border:hover {\n    border-color: var(--surface-border) !important;\n  }\n  .sm\\:active\\:surface-border:active {\n    border-color: var(--surface-border) !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:text-primary {\n    color: var(--primary-color) !important;\n  }\n  .md\\:bg-primary {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .md\\:bg-primary-reverse {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .md\\:bg-white {\n    background-color: #ffffff !important;\n  }\n  .md\\:border-primary {\n    border-color: var(--primary-color) !important;\n  }\n  .md\\:text-white {\n    color: #ffffff !important;\n  }\n  .md\\:border-white {\n    border-color: #ffffff !important;\n  }\n  .md\\:text-color {\n    color: var(--text-color) !important;\n  }\n  .md\\:text-color-secondary {\n    color: var(--text-color-secondary) !important;\n  }\n  .md\\:surface-ground {\n    background-color: var(--surface-ground) !important;\n  }\n  .md\\:surface-section {\n    background-color: var(--surface-section) !important;\n  }\n  .md\\:surface-card {\n    background-color: var(--surface-card) !important;\n  }\n  .md\\:surface-overlay {\n    background-color: var(--surface-overlay) !important;\n  }\n  .md\\:surface-hover {\n    background-color: var(--surface-hover) !important;\n  }\n  .md\\:surface-border {\n    border-color: var(--surface-border) !important;\n  }\n  .md\\:focus\\:text-primary:focus {\n    color: var(--primary-color) !important;\n  }\n  .md\\:hover\\:text-primary:hover {\n    color: var(--primary-color) !important;\n  }\n  .md\\:active\\:text-primary:active {\n    color: var(--primary-color) !important;\n  }\n  .md\\:focus\\:bg-primary:focus {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .md\\:hover\\:bg-primary:hover {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .md\\:active\\:bg-primary:active {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .md\\:focus\\:bg-primary-reverse:focus {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .md\\:hover\\:bg-primary-reverse:hover {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .md\\:active\\:bg-primary-reverse:active {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .md\\:focus\\:bg-white:focus {\n    background-color: #ffffff !important;\n  }\n  .md\\:hover\\:bg-white:hover {\n    background-color: #ffffff !important;\n  }\n  .md\\:active\\:bg-white:active {\n    background-color: #ffffff !important;\n  }\n  .md\\:focus\\:border-primary:focus {\n    border-color: var(--primary-color) !important;\n  }\n  .md\\:hover\\:border-primary:hover {\n    border-color: var(--primary-color) !important;\n  }\n  .md\\:active\\:border-primary:active {\n    border-color: var(--primary-color) !important;\n  }\n  .md\\:focus\\:text-white:focus {\n    color: #ffffff !important;\n  }\n  .md\\:hover\\:text-white:hover {\n    color: #ffffff !important;\n  }\n  .md\\:active\\:text-white:active {\n    color: #ffffff !important;\n  }\n  .md\\:focus\\:border-white:focus {\n    border-color: #ffffff !important;\n  }\n  .md\\:hover\\:border-white:hover {\n    border-color: #ffffff !important;\n  }\n  .md\\:active\\:border-white:active {\n    border-color: #ffffff !important;\n  }\n  .md\\:focus\\:text-color:focus {\n    color: var(--text-color) !important;\n  }\n  .md\\:hover\\:text-color:hover {\n    color: var(--text-color) !important;\n  }\n  .md\\:active\\:text-color:active {\n    color: var(--text-color) !important;\n  }\n  .md\\:focus\\:text-color-secondary:focus {\n    color: var(--text-color-secondary) !important;\n  }\n  .md\\:hover\\:text-color-secondary:hover {\n    color: var(--text-color-secondary) !important;\n  }\n  .md\\:active\\:text-color-secondary:active {\n    color: var(--text-color-secondary) !important;\n  }\n  .md\\:focus\\:surface-ground:focus {\n    background-color: var(--surface-ground) !important;\n  }\n  .md\\:hover\\:surface-ground:hover {\n    background-color: var(--surface-ground) !important;\n  }\n  .md\\:active\\:surface-ground:active {\n    background-color: var(--surface-ground) !important;\n  }\n  .md\\:focus\\:surface-section:focus {\n    background-color: var(--surface-section) !important;\n  }\n  .md\\:hover\\:surface-section:hover {\n    background-color: var(--surface-section) !important;\n  }\n  .md\\:active\\:surface-section:active {\n    background-color: var(--surface-section) !important;\n  }\n  .md\\:focus\\:surface-card:focus {\n    background-color: var(--surface-card) !important;\n  }\n  .md\\:hover\\:surface-card:hover {\n    background-color: var(--surface-card) !important;\n  }\n  .md\\:active\\:surface-card:active {\n    background-color: var(--surface-card) !important;\n  }\n  .md\\:focus\\:surface-overlay:focus {\n    background-color: var(--surface-overlay) !important;\n  }\n  .md\\:hover\\:surface-overlay:hover {\n    background-color: var(--surface-overlay) !important;\n  }\n  .md\\:active\\:surface-overlay:active {\n    background-color: var(--surface-overlay) !important;\n  }\n  .md\\:focus\\:surface-hover:focus {\n    background-color: var(--surface-hover) !important;\n  }\n  .md\\:hover\\:surface-hover:hover {\n    background-color: var(--surface-hover) !important;\n  }\n  .md\\:active\\:surface-hover:active {\n    background-color: var(--surface-hover) !important;\n  }\n  .md\\:focus\\:surface-border:focus {\n    border-color: var(--surface-border) !important;\n  }\n  .md\\:hover\\:surface-border:hover {\n    border-color: var(--surface-border) !important;\n  }\n  .md\\:active\\:surface-border:active {\n    border-color: var(--surface-border) !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:text-primary {\n    color: var(--primary-color) !important;\n  }\n  .lg\\:bg-primary {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .lg\\:bg-primary-reverse {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .lg\\:bg-white {\n    background-color: #ffffff !important;\n  }\n  .lg\\:border-primary {\n    border-color: var(--primary-color) !important;\n  }\n  .lg\\:text-white {\n    color: #ffffff !important;\n  }\n  .lg\\:border-white {\n    border-color: #ffffff !important;\n  }\n  .lg\\:text-color {\n    color: var(--text-color) !important;\n  }\n  .lg\\:text-color-secondary {\n    color: var(--text-color-secondary) !important;\n  }\n  .lg\\:surface-ground {\n    background-color: var(--surface-ground) !important;\n  }\n  .lg\\:surface-section {\n    background-color: var(--surface-section) !important;\n  }\n  .lg\\:surface-card {\n    background-color: var(--surface-card) !important;\n  }\n  .lg\\:surface-overlay {\n    background-color: var(--surface-overlay) !important;\n  }\n  .lg\\:surface-hover {\n    background-color: var(--surface-hover) !important;\n  }\n  .lg\\:surface-border {\n    border-color: var(--surface-border) !important;\n  }\n  .lg\\:focus\\:text-primary:focus {\n    color: var(--primary-color) !important;\n  }\n  .lg\\:hover\\:text-primary:hover {\n    color: var(--primary-color) !important;\n  }\n  .lg\\:active\\:text-primary:active {\n    color: var(--primary-color) !important;\n  }\n  .lg\\:focus\\:bg-primary:focus {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .lg\\:hover\\:bg-primary:hover {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .lg\\:active\\:bg-primary:active {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .lg\\:focus\\:bg-primary-reverse:focus {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .lg\\:hover\\:bg-primary-reverse:hover {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .lg\\:active\\:bg-primary-reverse:active {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .lg\\:focus\\:bg-white:focus {\n    background-color: #ffffff !important;\n  }\n  .lg\\:hover\\:bg-white:hover {\n    background-color: #ffffff !important;\n  }\n  .lg\\:active\\:bg-white:active {\n    background-color: #ffffff !important;\n  }\n  .lg\\:focus\\:border-primary:focus {\n    border-color: var(--primary-color) !important;\n  }\n  .lg\\:hover\\:border-primary:hover {\n    border-color: var(--primary-color) !important;\n  }\n  .lg\\:active\\:border-primary:active {\n    border-color: var(--primary-color) !important;\n  }\n  .lg\\:focus\\:text-white:focus {\n    color: #ffffff !important;\n  }\n  .lg\\:hover\\:text-white:hover {\n    color: #ffffff !important;\n  }\n  .lg\\:active\\:text-white:active {\n    color: #ffffff !important;\n  }\n  .lg\\:focus\\:border-white:focus {\n    border-color: #ffffff !important;\n  }\n  .lg\\:hover\\:border-white:hover {\n    border-color: #ffffff !important;\n  }\n  .lg\\:active\\:border-white:active {\n    border-color: #ffffff !important;\n  }\n  .lg\\:focus\\:text-color:focus {\n    color: var(--text-color) !important;\n  }\n  .lg\\:hover\\:text-color:hover {\n    color: var(--text-color) !important;\n  }\n  .lg\\:active\\:text-color:active {\n    color: var(--text-color) !important;\n  }\n  .lg\\:focus\\:text-color-secondary:focus {\n    color: var(--text-color-secondary) !important;\n  }\n  .lg\\:hover\\:text-color-secondary:hover {\n    color: var(--text-color-secondary) !important;\n  }\n  .lg\\:active\\:text-color-secondary:active {\n    color: var(--text-color-secondary) !important;\n  }\n  .lg\\:focus\\:surface-ground:focus {\n    background-color: var(--surface-ground) !important;\n  }\n  .lg\\:hover\\:surface-ground:hover {\n    background-color: var(--surface-ground) !important;\n  }\n  .lg\\:active\\:surface-ground:active {\n    background-color: var(--surface-ground) !important;\n  }\n  .lg\\:focus\\:surface-section:focus {\n    background-color: var(--surface-section) !important;\n  }\n  .lg\\:hover\\:surface-section:hover {\n    background-color: var(--surface-section) !important;\n  }\n  .lg\\:active\\:surface-section:active {\n    background-color: var(--surface-section) !important;\n  }\n  .lg\\:focus\\:surface-card:focus {\n    background-color: var(--surface-card) !important;\n  }\n  .lg\\:hover\\:surface-card:hover {\n    background-color: var(--surface-card) !important;\n  }\n  .lg\\:active\\:surface-card:active {\n    background-color: var(--surface-card) !important;\n  }\n  .lg\\:focus\\:surface-overlay:focus {\n    background-color: var(--surface-overlay) !important;\n  }\n  .lg\\:hover\\:surface-overlay:hover {\n    background-color: var(--surface-overlay) !important;\n  }\n  .lg\\:active\\:surface-overlay:active {\n    background-color: var(--surface-overlay) !important;\n  }\n  .lg\\:focus\\:surface-hover:focus {\n    background-color: var(--surface-hover) !important;\n  }\n  .lg\\:hover\\:surface-hover:hover {\n    background-color: var(--surface-hover) !important;\n  }\n  .lg\\:active\\:surface-hover:active {\n    background-color: var(--surface-hover) !important;\n  }\n  .lg\\:focus\\:surface-border:focus {\n    border-color: var(--surface-border) !important;\n  }\n  .lg\\:hover\\:surface-border:hover {\n    border-color: var(--surface-border) !important;\n  }\n  .lg\\:active\\:surface-border:active {\n    border-color: var(--surface-border) !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:text-primary {\n    color: var(--primary-color) !important;\n  }\n  .xl\\:bg-primary {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .xl\\:bg-primary-reverse {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .xl\\:bg-white {\n    background-color: #ffffff !important;\n  }\n  .xl\\:border-primary {\n    border-color: var(--primary-color) !important;\n  }\n  .xl\\:text-white {\n    color: #ffffff !important;\n  }\n  .xl\\:border-white {\n    border-color: #ffffff !important;\n  }\n  .xl\\:text-color {\n    color: var(--text-color) !important;\n  }\n  .xl\\:text-color-secondary {\n    color: var(--text-color-secondary) !important;\n  }\n  .xl\\:surface-ground {\n    background-color: var(--surface-ground) !important;\n  }\n  .xl\\:surface-section {\n    background-color: var(--surface-section) !important;\n  }\n  .xl\\:surface-card {\n    background-color: var(--surface-card) !important;\n  }\n  .xl\\:surface-overlay {\n    background-color: var(--surface-overlay) !important;\n  }\n  .xl\\:surface-hover {\n    background-color: var(--surface-hover) !important;\n  }\n  .xl\\:surface-border {\n    border-color: var(--surface-border) !important;\n  }\n  .xl\\:focus\\:text-primary:focus {\n    color: var(--primary-color) !important;\n  }\n  .xl\\:hover\\:text-primary:hover {\n    color: var(--primary-color) !important;\n  }\n  .xl\\:active\\:text-primary:active {\n    color: var(--primary-color) !important;\n  }\n  .xl\\:focus\\:bg-primary:focus {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .xl\\:hover\\:bg-primary:hover {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .xl\\:active\\:bg-primary:active {\n    color: var(--primary-color-text) !important;\n    background-color: var(--primary-color) !important;\n  }\n  .xl\\:focus\\:bg-primary-reverse:focus {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .xl\\:hover\\:bg-primary-reverse:hover {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .xl\\:active\\:bg-primary-reverse:active {\n    color: var(--primary-color) !important;\n    background-color: var(--primary-color-text) !important;\n  }\n  .xl\\:focus\\:bg-white:focus {\n    background-color: #ffffff !important;\n  }\n  .xl\\:hover\\:bg-white:hover {\n    background-color: #ffffff !important;\n  }\n  .xl\\:active\\:bg-white:active {\n    background-color: #ffffff !important;\n  }\n  .xl\\:focus\\:border-primary:focus {\n    border-color: var(--primary-color) !important;\n  }\n  .xl\\:hover\\:border-primary:hover {\n    border-color: var(--primary-color) !important;\n  }\n  .xl\\:active\\:border-primary:active {\n    border-color: var(--primary-color) !important;\n  }\n  .xl\\:focus\\:text-white:focus {\n    color: #ffffff !important;\n  }\n  .xl\\:hover\\:text-white:hover {\n    color: #ffffff !important;\n  }\n  .xl\\:active\\:text-white:active {\n    color: #ffffff !important;\n  }\n  .xl\\:focus\\:border-white:focus {\n    border-color: #ffffff !important;\n  }\n  .xl\\:hover\\:border-white:hover {\n    border-color: #ffffff !important;\n  }\n  .xl\\:active\\:border-white:active {\n    border-color: #ffffff !important;\n  }\n  .xl\\:focus\\:text-color:focus {\n    color: var(--text-color) !important;\n  }\n  .xl\\:hover\\:text-color:hover {\n    color: var(--text-color) !important;\n  }\n  .xl\\:active\\:text-color:active {\n    color: var(--text-color) !important;\n  }\n  .xl\\:focus\\:text-color-secondary:focus {\n    color: var(--text-color-secondary) !important;\n  }\n  .xl\\:hover\\:text-color-secondary:hover {\n    color: var(--text-color-secondary) !important;\n  }\n  .xl\\:active\\:text-color-secondary:active {\n    color: var(--text-color-secondary) !important;\n  }\n  .xl\\:focus\\:surface-ground:focus {\n    background-color: var(--surface-ground) !important;\n  }\n  .xl\\:hover\\:surface-ground:hover {\n    background-color: var(--surface-ground) !important;\n  }\n  .xl\\:active\\:surface-ground:active {\n    background-color: var(--surface-ground) !important;\n  }\n  .xl\\:focus\\:surface-section:focus {\n    background-color: var(--surface-section) !important;\n  }\n  .xl\\:hover\\:surface-section:hover {\n    background-color: var(--surface-section) !important;\n  }\n  .xl\\:active\\:surface-section:active {\n    background-color: var(--surface-section) !important;\n  }\n  .xl\\:focus\\:surface-card:focus {\n    background-color: var(--surface-card) !important;\n  }\n  .xl\\:hover\\:surface-card:hover {\n    background-color: var(--surface-card) !important;\n  }\n  .xl\\:active\\:surface-card:active {\n    background-color: var(--surface-card) !important;\n  }\n  .xl\\:focus\\:surface-overlay:focus {\n    background-color: var(--surface-overlay) !important;\n  }\n  .xl\\:hover\\:surface-overlay:hover {\n    background-color: var(--surface-overlay) !important;\n  }\n  .xl\\:active\\:surface-overlay:active {\n    background-color: var(--surface-overlay) !important;\n  }\n  .xl\\:focus\\:surface-hover:focus {\n    background-color: var(--surface-hover) !important;\n  }\n  .xl\\:hover\\:surface-hover:hover {\n    background-color: var(--surface-hover) !important;\n  }\n  .xl\\:active\\:surface-hover:active {\n    background-color: var(--surface-hover) !important;\n  }\n  .xl\\:focus\\:surface-border:focus {\n    border-color: var(--surface-border) !important;\n  }\n  .xl\\:hover\\:surface-border:hover {\n    border-color: var(--surface-border) !important;\n  }\n  .xl\\:active\\:surface-border:active {\n    border-color: var(--surface-border) !important;\n  }\n}\n.field {\n  margin-bottom: 1rem;\n}\n\n.field > label {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\n.field.grid > label {\n  display: flex;\n  align-items: center;\n}\n\n.field > small {\n  margin-top: 0.25rem;\n}\n\n.field.grid,\n.formgrid.grid {\n  margin-top: 0;\n}\n\n.field.grid .col-fixed,\n.formgrid.grid .col-fixed,\n.field.grid .col,\n.formgrid.grid .col,\n.field.grid .col-1,\n.formgrid.grid .col-1,\n.field.grid .col-2,\n.formgrid.grid .col-2,\n.field.grid .col-3,\n.formgrid.grid .col-3,\n.field.grid .col-4,\n.formgrid.grid .col-4,\n.field.grid .col-5,\n.formgrid.grid .col-5,\n.field.grid .col-6,\n.formgrid.grid .col-6,\n.field.grid .col-7,\n.formgrid.grid .col-7,\n.field.grid .col-8,\n.formgrid.grid .col-8,\n.field.grid .col-9,\n.formgrid.grid .col-9,\n.field.grid .col-10,\n.formgrid.grid .col-10,\n.field.grid .col-11,\n.formgrid.grid .col-11,\n.field.grid .col-12,\n.formgrid.grid .col-12 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.formgroup-inline {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.formgroup-inline .field,\n.formgroup-inline .field-checkbox,\n.formgroup-inline .field-radiobutton {\n  margin-right: 1rem;\n}\n\n.formgroup-inline .field > label,\n.formgroup-inline .field-checkbox > label,\n.formgroup-inline .field-radiobutton > label {\n  margin-right: 0.5rem;\n  margin-bottom: 0;\n}\n\n.field-checkbox,\n.field-radiobutton {\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n}\n\n.field-checkbox > label,\n.field-radiobutton > label {\n  margin-left: 0.5rem;\n  line-height: 1;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.block {\n  display: block !important;\n}\n\n.inline {\n  display: inline !important;\n}\n\n.inline-block {\n  display: inline-block !important;\n}\n\n.flex {\n  display: flex !important;\n}\n\n.inline-flex {\n  display: inline-flex !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:hidden {\n    display: none !important;\n  }\n  .sm\\:block {\n    display: block !important;\n  }\n  .sm\\:inline {\n    display: inline !important;\n  }\n  .sm\\:inline-block {\n    display: inline-block !important;\n  }\n  .sm\\:flex {\n    display: flex !important;\n  }\n  .sm\\:inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:hidden {\n    display: none !important;\n  }\n  .md\\:block {\n    display: block !important;\n  }\n  .md\\:inline {\n    display: inline !important;\n  }\n  .md\\:inline-block {\n    display: inline-block !important;\n  }\n  .md\\:flex {\n    display: flex !important;\n  }\n  .md\\:inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:hidden {\n    display: none !important;\n  }\n  .lg\\:block {\n    display: block !important;\n  }\n  .lg\\:inline {\n    display: inline !important;\n  }\n  .lg\\:inline-block {\n    display: inline-block !important;\n  }\n  .lg\\:flex {\n    display: flex !important;\n  }\n  .lg\\:inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:hidden {\n    display: none !important;\n  }\n  .xl\\:block {\n    display: block !important;\n  }\n  .xl\\:inline {\n    display: inline !important;\n  }\n  .xl\\:inline-block {\n    display: inline-block !important;\n  }\n  .xl\\:flex {\n    display: flex !important;\n  }\n  .xl\\:inline-flex {\n    display: inline-flex !important;\n  }\n}\n.text-center {\n  text-align: center !important;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: right !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:text-center {\n    text-align: center !important;\n  }\n  .sm\\:text-justify {\n    text-align: justify !important;\n  }\n  .sm\\:text-left {\n    text-align: left !important;\n  }\n  .sm\\:text-right {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:text-center {\n    text-align: center !important;\n  }\n  .md\\:text-justify {\n    text-align: justify !important;\n  }\n  .md\\:text-left {\n    text-align: left !important;\n  }\n  .md\\:text-right {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:text-center {\n    text-align: center !important;\n  }\n  .lg\\:text-justify {\n    text-align: justify !important;\n  }\n  .lg\\:text-left {\n    text-align: left !important;\n  }\n  .lg\\:text-right {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:text-center {\n    text-align: center !important;\n  }\n  .xl\\:text-justify {\n    text-align: justify !important;\n  }\n  .xl\\:text-left {\n    text-align: left !important;\n  }\n  .xl\\:text-right {\n    text-align: right !important;\n  }\n}\n.underline {\n  text-decoration: underline !important;\n}\n\n.line-through {\n  text-decoration: line-through !important;\n}\n\n.no-underline {\n  text-decoration: none !important;\n}\n\n.focus\\:underline:focus {\n  text-decoration: underline !important;\n}\n\n.hover\\:underline:hover {\n  text-decoration: underline !important;\n}\n\n.active\\:underline:active {\n  text-decoration: underline !important;\n}\n\n.focus\\:line-through:focus {\n  text-decoration: line-through !important;\n}\n\n.hover\\:line-through:hover {\n  text-decoration: line-through !important;\n}\n\n.active\\:line-through:active {\n  text-decoration: line-through !important;\n}\n\n.focus\\:no-underline:focus {\n  text-decoration: none !important;\n}\n\n.hover\\:no-underline:hover {\n  text-decoration: none !important;\n}\n\n.active\\:no-underline:active {\n  text-decoration: none !important;\n}\n\n.lowercase {\n  text-transform: lowercase !important;\n}\n\n.uppercase {\n  text-transform: uppercase !important;\n}\n\n.capitalize {\n  text-transform: capitalize !important;\n}\n\n.text-overflow-clip {\n  text-overflow: clip !important;\n}\n\n.text-overflow-ellipsis {\n  text-overflow: ellipsis !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:text-overflow-clip {\n    text-overflow: clip !important;\n  }\n  .sm\\:text-overflow-ellipsis {\n    text-overflow: ellipsis !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:text-overflow-clip {\n    text-overflow: clip !important;\n  }\n  .md\\:text-overflow-ellipsis {\n    text-overflow: ellipsis !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:text-overflow-clip {\n    text-overflow: clip !important;\n  }\n  .lg\\:text-overflow-ellipsis {\n    text-overflow: ellipsis !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:text-overflow-clip {\n    text-overflow: clip !important;\n  }\n  .xl\\:text-overflow-ellipsis {\n    text-overflow: ellipsis !important;\n  }\n}\n.font-light {\n  font-weight: 300 !important;\n}\n\n.font-normal {\n  font-weight: 400 !important;\n}\n\n.font-medium {\n  font-weight: 500 !important;\n}\n\n.font-semibold {\n  font-weight: 600 !important;\n}\n\n.font-bold {\n  font-weight: 700 !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:font-light {\n    font-weight: 300 !important;\n  }\n  .sm\\:font-normal {\n    font-weight: 400 !important;\n  }\n  .sm\\:font-medium {\n    font-weight: 500 !important;\n  }\n  .sm\\:font-semibold {\n    font-weight: 600 !important;\n  }\n  .sm\\:font-bold {\n    font-weight: 700 !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:font-light {\n    font-weight: 300 !important;\n  }\n  .md\\:font-normal {\n    font-weight: 400 !important;\n  }\n  .md\\:font-medium {\n    font-weight: 500 !important;\n  }\n  .md\\:font-semibold {\n    font-weight: 600 !important;\n  }\n  .md\\:font-bold {\n    font-weight: 700 !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:font-light {\n    font-weight: 300 !important;\n  }\n  .lg\\:font-normal {\n    font-weight: 400 !important;\n  }\n  .lg\\:font-medium {\n    font-weight: 500 !important;\n  }\n  .lg\\:font-semibold {\n    font-weight: 600 !important;\n  }\n  .lg\\:font-bold {\n    font-weight: 700 !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:font-light {\n    font-weight: 300 !important;\n  }\n  .xl\\:font-normal {\n    font-weight: 400 !important;\n  }\n  .xl\\:font-medium {\n    font-weight: 500 !important;\n  }\n  .xl\\:font-semibold {\n    font-weight: 600 !important;\n  }\n  .xl\\:font-bold {\n    font-weight: 700 !important;\n  }\n}\n.font-italic {\n  font-style: italic !important;\n}\n\n.text-xs {\n  font-size: 0.75rem !important;\n}\n\n.text-sm {\n  font-size: 0.875rem !important;\n}\n\n.text-base {\n  font-size: 1rem !important;\n}\n\n.text-lg {\n  font-size: 1.125rem !important;\n}\n\n.text-xl {\n  font-size: 1.25rem !important;\n}\n\n.text-2xl {\n  font-size: 1.5rem !important;\n}\n\n.text-3xl {\n  font-size: 1.75rem !important;\n}\n\n.text-4xl {\n  font-size: 2rem !important;\n}\n\n.text-5xl {\n  font-size: 2.5rem !important;\n}\n\n.text-6xl {\n  font-size: 3rem !important;\n}\n\n.text-7xl {\n  font-size: 4rem !important;\n}\n\n.text-8xl {\n  font-size: 6rem !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:text-xs {\n    font-size: 0.75rem !important;\n  }\n  .sm\\:text-sm {\n    font-size: 0.875rem !important;\n  }\n  .sm\\:text-base {\n    font-size: 1rem !important;\n  }\n  .sm\\:text-lg {\n    font-size: 1.125rem !important;\n  }\n  .sm\\:text-xl {\n    font-size: 1.25rem !important;\n  }\n  .sm\\:text-2xl {\n    font-size: 1.5rem !important;\n  }\n  .sm\\:text-3xl {\n    font-size: 1.75rem !important;\n  }\n  .sm\\:text-4xl {\n    font-size: 2rem !important;\n  }\n  .sm\\:text-5xl {\n    font-size: 2.5rem !important;\n  }\n  .sm\\:text-6xl {\n    font-size: 3rem !important;\n  }\n  .sm\\:text-7xl {\n    font-size: 4rem !important;\n  }\n  .sm\\:text-8xl {\n    font-size: 6rem !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:text-xs {\n    font-size: 0.75rem !important;\n  }\n  .md\\:text-sm {\n    font-size: 0.875rem !important;\n  }\n  .md\\:text-base {\n    font-size: 1rem !important;\n  }\n  .md\\:text-lg {\n    font-size: 1.125rem !important;\n  }\n  .md\\:text-xl {\n    font-size: 1.25rem !important;\n  }\n  .md\\:text-2xl {\n    font-size: 1.5rem !important;\n  }\n  .md\\:text-3xl {\n    font-size: 1.75rem !important;\n  }\n  .md\\:text-4xl {\n    font-size: 2rem !important;\n  }\n  .md\\:text-5xl {\n    font-size: 2.5rem !important;\n  }\n  .md\\:text-6xl {\n    font-size: 3rem !important;\n  }\n  .md\\:text-7xl {\n    font-size: 4rem !important;\n  }\n  .md\\:text-8xl {\n    font-size: 6rem !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:text-xs {\n    font-size: 0.75rem !important;\n  }\n  .lg\\:text-sm {\n    font-size: 0.875rem !important;\n  }\n  .lg\\:text-base {\n    font-size: 1rem !important;\n  }\n  .lg\\:text-lg {\n    font-size: 1.125rem !important;\n  }\n  .lg\\:text-xl {\n    font-size: 1.25rem !important;\n  }\n  .lg\\:text-2xl {\n    font-size: 1.5rem !important;\n  }\n  .lg\\:text-3xl {\n    font-size: 1.75rem !important;\n  }\n  .lg\\:text-4xl {\n    font-size: 2rem !important;\n  }\n  .lg\\:text-5xl {\n    font-size: 2.5rem !important;\n  }\n  .lg\\:text-6xl {\n    font-size: 3rem !important;\n  }\n  .lg\\:text-7xl {\n    font-size: 4rem !important;\n  }\n  .lg\\:text-8xl {\n    font-size: 6rem !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:text-xs {\n    font-size: 0.75rem !important;\n  }\n  .xl\\:text-sm {\n    font-size: 0.875rem !important;\n  }\n  .xl\\:text-base {\n    font-size: 1rem !important;\n  }\n  .xl\\:text-lg {\n    font-size: 1.125rem !important;\n  }\n  .xl\\:text-xl {\n    font-size: 1.25rem !important;\n  }\n  .xl\\:text-2xl {\n    font-size: 1.5rem !important;\n  }\n  .xl\\:text-3xl {\n    font-size: 1.75rem !important;\n  }\n  .xl\\:text-4xl {\n    font-size: 2rem !important;\n  }\n  .xl\\:text-5xl {\n    font-size: 2.5rem !important;\n  }\n  .xl\\:text-6xl {\n    font-size: 3rem !important;\n  }\n  .xl\\:text-7xl {\n    font-size: 4rem !important;\n  }\n  .xl\\:text-8xl {\n    font-size: 6rem !important;\n  }\n}\n.line-height-1 {\n  line-height: 1 !important;\n}\n\n.line-height-2 {\n  line-height: 1.25 !important;\n}\n\n.line-height-3 {\n  line-height: 1.5 !important;\n}\n\n.line-height-4 {\n  line-height: 2 !important;\n}\n\n.white-space-normal {\n  white-space: normal !important;\n}\n\n.white-space-nowrap {\n  white-space: nowrap !important;\n}\n\n.vertical-align-baseline {\n  vertical-align: baseline !important;\n}\n\n.vertical-align-top {\n  vertical-align: top !important;\n}\n\n.vertical-align-middle {\n  vertical-align: middle !important;\n}\n\n.vertical-align-bottom {\n  vertical-align: bottom !important;\n}\n\n.vertical-align-text-top {\n  vertical-align: text-top !important;\n}\n\n.vertical-align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.vertical-align-sub {\n  vertical-align: sub !important;\n}\n\n.vertical-align-super {\n  vertical-align: super !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:vertical-align-baseline {\n    vertical-align: baseline !important;\n  }\n  .sm\\:vertical-align-top {\n    vertical-align: top !important;\n  }\n  .sm\\:vertical-align-middle {\n    vertical-align: middle !important;\n  }\n  .sm\\:vertical-align-bottom {\n    vertical-align: bottom !important;\n  }\n  .sm\\:vertical-align-text-top {\n    vertical-align: text-top !important;\n  }\n  .sm\\:vertical-align-text-bottom {\n    vertical-align: text-bottom !important;\n  }\n  .sm\\:vertical-align-sub {\n    vertical-align: sub !important;\n  }\n  .sm\\:vertical-align-super {\n    vertical-align: super !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:vertical-align-baseline {\n    vertical-align: baseline !important;\n  }\n  .md\\:vertical-align-top {\n    vertical-align: top !important;\n  }\n  .md\\:vertical-align-middle {\n    vertical-align: middle !important;\n  }\n  .md\\:vertical-align-bottom {\n    vertical-align: bottom !important;\n  }\n  .md\\:vertical-align-text-top {\n    vertical-align: text-top !important;\n  }\n  .md\\:vertical-align-text-bottom {\n    vertical-align: text-bottom !important;\n  }\n  .md\\:vertical-align-sub {\n    vertical-align: sub !important;\n  }\n  .md\\:vertical-align-super {\n    vertical-align: super !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:vertical-align-baseline {\n    vertical-align: baseline !important;\n  }\n  .lg\\:vertical-align-top {\n    vertical-align: top !important;\n  }\n  .lg\\:vertical-align-middle {\n    vertical-align: middle !important;\n  }\n  .lg\\:vertical-align-bottom {\n    vertical-align: bottom !important;\n  }\n  .lg\\:vertical-align-text-top {\n    vertical-align: text-top !important;\n  }\n  .lg\\:vertical-align-text-bottom {\n    vertical-align: text-bottom !important;\n  }\n  .lg\\:vertical-align-sub {\n    vertical-align: sub !important;\n  }\n  .lg\\:vertical-align-super {\n    vertical-align: super !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:vertical-align-baseline {\n    vertical-align: baseline !important;\n  }\n  .xl\\:vertical-align-top {\n    vertical-align: top !important;\n  }\n  .xl\\:vertical-align-middle {\n    vertical-align: middle !important;\n  }\n  .xl\\:vertical-align-bottom {\n    vertical-align: bottom !important;\n  }\n  .xl\\:vertical-align-text-top {\n    vertical-align: text-top !important;\n  }\n  .xl\\:vertical-align-text-bottom {\n    vertical-align: text-bottom !important;\n  }\n  .xl\\:vertical-align-sub {\n    vertical-align: sub !important;\n  }\n  .xl\\:vertical-align-super {\n    vertical-align: super !important;\n  }\n}\n.flex-row {\n  flex-direction: row !important;\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.flex-column {\n  flex-direction: column !important;\n}\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:flex-row {\n    flex-direction: row !important;\n  }\n  .sm\\:flex-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .sm\\:flex-column {\n    flex-direction: column !important;\n  }\n  .sm\\:flex-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:flex-row {\n    flex-direction: row !important;\n  }\n  .md\\:flex-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .md\\:flex-column {\n    flex-direction: column !important;\n  }\n  .md\\:flex-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:flex-row {\n    flex-direction: row !important;\n  }\n  .lg\\:flex-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .lg\\:flex-column {\n    flex-direction: column !important;\n  }\n  .lg\\:flex-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:flex-row {\n    flex-direction: row !important;\n  }\n  .xl\\:flex-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .xl\\:flex-column {\n    flex-direction: column !important;\n  }\n  .xl\\:flex-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n}\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:flex-wrap {\n    flex-wrap: wrap !important;\n  }\n  .sm\\:flex-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .sm\\:flex-nowrap {\n    flex-wrap: nowrap !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:flex-wrap {\n    flex-wrap: wrap !important;\n  }\n  .md\\:flex-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .md\\:flex-nowrap {\n    flex-wrap: nowrap !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:flex-wrap {\n    flex-wrap: wrap !important;\n  }\n  .lg\\:flex-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .lg\\:flex-nowrap {\n    flex-wrap: nowrap !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:flex-wrap {\n    flex-wrap: wrap !important;\n  }\n  .xl\\:flex-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .xl\\:flex-nowrap {\n    flex-wrap: nowrap !important;\n  }\n}\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  justify-content: space-around !important;\n}\n\n.justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:justify-content-start {\n    justify-content: flex-start !important;\n  }\n  .sm\\:justify-content-end {\n    justify-content: flex-end !important;\n  }\n  .sm\\:justify-content-center {\n    justify-content: center !important;\n  }\n  .sm\\:justify-content-between {\n    justify-content: space-between !important;\n  }\n  .sm\\:justify-content-around {\n    justify-content: space-around !important;\n  }\n  .sm\\:justify-content-evenly {\n    justify-content: space-evenly !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:justify-content-start {\n    justify-content: flex-start !important;\n  }\n  .md\\:justify-content-end {\n    justify-content: flex-end !important;\n  }\n  .md\\:justify-content-center {\n    justify-content: center !important;\n  }\n  .md\\:justify-content-between {\n    justify-content: space-between !important;\n  }\n  .md\\:justify-content-around {\n    justify-content: space-around !important;\n  }\n  .md\\:justify-content-evenly {\n    justify-content: space-evenly !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:justify-content-start {\n    justify-content: flex-start !important;\n  }\n  .lg\\:justify-content-end {\n    justify-content: flex-end !important;\n  }\n  .lg\\:justify-content-center {\n    justify-content: center !important;\n  }\n  .lg\\:justify-content-between {\n    justify-content: space-between !important;\n  }\n  .lg\\:justify-content-around {\n    justify-content: space-around !important;\n  }\n  .lg\\:justify-content-evenly {\n    justify-content: space-evenly !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:justify-content-start {\n    justify-content: flex-start !important;\n  }\n  .xl\\:justify-content-end {\n    justify-content: flex-end !important;\n  }\n  .xl\\:justify-content-center {\n    justify-content: center !important;\n  }\n  .xl\\:justify-content-between {\n    justify-content: space-between !important;\n  }\n  .xl\\:justify-content-around {\n    justify-content: space-around !important;\n  }\n  .xl\\:justify-content-evenly {\n    justify-content: space-evenly !important;\n  }\n}\n.align-content-start {\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  align-content: center !important;\n}\n\n.align-content-between {\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  align-content: space-around !important;\n}\n\n.align-content-evenly {\n  align-content: space-evenly !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:align-content-start {\n    align-content: flex-start !important;\n  }\n  .sm\\:align-content-end {\n    align-content: flex-end !important;\n  }\n  .sm\\:align-content-center {\n    align-content: center !important;\n  }\n  .sm\\:align-content-between {\n    align-content: space-between !important;\n  }\n  .sm\\:align-content-around {\n    align-content: space-around !important;\n  }\n  .sm\\:align-content-evenly {\n    align-content: space-evenly !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:align-content-start {\n    align-content: flex-start !important;\n  }\n  .md\\:align-content-end {\n    align-content: flex-end !important;\n  }\n  .md\\:align-content-center {\n    align-content: center !important;\n  }\n  .md\\:align-content-between {\n    align-content: space-between !important;\n  }\n  .md\\:align-content-around {\n    align-content: space-around !important;\n  }\n  .md\\:align-content-evenly {\n    align-content: space-evenly !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:align-content-start {\n    align-content: flex-start !important;\n  }\n  .lg\\:align-content-end {\n    align-content: flex-end !important;\n  }\n  .lg\\:align-content-center {\n    align-content: center !important;\n  }\n  .lg\\:align-content-between {\n    align-content: space-between !important;\n  }\n  .lg\\:align-content-around {\n    align-content: space-around !important;\n  }\n  .lg\\:align-content-evenly {\n    align-content: space-evenly !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:align-content-start {\n    align-content: flex-start !important;\n  }\n  .xl\\:align-content-end {\n    align-content: flex-end !important;\n  }\n  .xl\\:align-content-center {\n    align-content: center !important;\n  }\n  .xl\\:align-content-between {\n    align-content: space-between !important;\n  }\n  .xl\\:align-content-around {\n    align-content: space-around !important;\n  }\n  .xl\\:align-content-evenly {\n    align-content: space-evenly !important;\n  }\n}\n.align-items-stretch {\n  align-items: stretch !important;\n}\n\n.align-items-start {\n  align-items: flex-start !important;\n}\n\n.align-items-center {\n  align-items: center !important;\n}\n\n.align-items-end {\n  align-items: flex-end !important;\n}\n\n.align-items-baseline {\n  align-items: baseline !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:align-items-stretch {\n    align-items: stretch !important;\n  }\n  .sm\\:align-items-start {\n    align-items: flex-start !important;\n  }\n  .sm\\:align-items-center {\n    align-items: center !important;\n  }\n  .sm\\:align-items-end {\n    align-items: flex-end !important;\n  }\n  .sm\\:align-items-baseline {\n    align-items: baseline !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:align-items-stretch {\n    align-items: stretch !important;\n  }\n  .md\\:align-items-start {\n    align-items: flex-start !important;\n  }\n  .md\\:align-items-center {\n    align-items: center !important;\n  }\n  .md\\:align-items-end {\n    align-items: flex-end !important;\n  }\n  .md\\:align-items-baseline {\n    align-items: baseline !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:align-items-stretch {\n    align-items: stretch !important;\n  }\n  .lg\\:align-items-start {\n    align-items: flex-start !important;\n  }\n  .lg\\:align-items-center {\n    align-items: center !important;\n  }\n  .lg\\:align-items-end {\n    align-items: flex-end !important;\n  }\n  .lg\\:align-items-baseline {\n    align-items: baseline !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:align-items-stretch {\n    align-items: stretch !important;\n  }\n  .xl\\:align-items-start {\n    align-items: flex-start !important;\n  }\n  .xl\\:align-items-center {\n    align-items: center !important;\n  }\n  .xl\\:align-items-end {\n    align-items: flex-end !important;\n  }\n  .xl\\:align-items-baseline {\n    align-items: baseline !important;\n  }\n}\n.align-self-auto {\n  align-self: auto !important;\n}\n\n.align-self-start {\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.align-self-stretch {\n  align-self: stretch !important;\n}\n\n.align-self-baseline {\n  align-self: baseline !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:align-self-auto {\n    align-self: auto !important;\n  }\n  .sm\\:align-self-start {\n    align-self: flex-start !important;\n  }\n  .sm\\:align-self-end {\n    align-self: flex-end !important;\n  }\n  .sm\\:align-self-center {\n    align-self: center !important;\n  }\n  .sm\\:align-self-stretch {\n    align-self: stretch !important;\n  }\n  .sm\\:align-self-baseline {\n    align-self: baseline !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:align-self-auto {\n    align-self: auto !important;\n  }\n  .md\\:align-self-start {\n    align-self: flex-start !important;\n  }\n  .md\\:align-self-end {\n    align-self: flex-end !important;\n  }\n  .md\\:align-self-center {\n    align-self: center !important;\n  }\n  .md\\:align-self-stretch {\n    align-self: stretch !important;\n  }\n  .md\\:align-self-baseline {\n    align-self: baseline !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:align-self-auto {\n    align-self: auto !important;\n  }\n  .lg\\:align-self-start {\n    align-self: flex-start !important;\n  }\n  .lg\\:align-self-end {\n    align-self: flex-end !important;\n  }\n  .lg\\:align-self-center {\n    align-self: center !important;\n  }\n  .lg\\:align-self-stretch {\n    align-self: stretch !important;\n  }\n  .lg\\:align-self-baseline {\n    align-self: baseline !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:align-self-auto {\n    align-self: auto !important;\n  }\n  .xl\\:align-self-start {\n    align-self: flex-start !important;\n  }\n  .xl\\:align-self-end {\n    align-self: flex-end !important;\n  }\n  .xl\\:align-self-center {\n    align-self: center !important;\n  }\n  .xl\\:align-self-stretch {\n    align-self: stretch !important;\n  }\n  .xl\\:align-self-baseline {\n    align-self: baseline !important;\n  }\n}\n.flex-order-0 {\n  order: 0 !important;\n}\n\n.flex-order-1 {\n  order: 1 !important;\n}\n\n.flex-order-2 {\n  order: 2 !important;\n}\n\n.flex-order-3 {\n  order: 3 !important;\n}\n\n.flex-order-4 {\n  order: 4 !important;\n}\n\n.flex-order-5 {\n  order: 5 !important;\n}\n\n.flex-order-6 {\n  order: 6 !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:flex-order-0 {\n    order: 0 !important;\n  }\n  .sm\\:flex-order-1 {\n    order: 1 !important;\n  }\n  .sm\\:flex-order-2 {\n    order: 2 !important;\n  }\n  .sm\\:flex-order-3 {\n    order: 3 !important;\n  }\n  .sm\\:flex-order-4 {\n    order: 4 !important;\n  }\n  .sm\\:flex-order-5 {\n    order: 5 !important;\n  }\n  .sm\\:flex-order-6 {\n    order: 6 !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:flex-order-0 {\n    order: 0 !important;\n  }\n  .md\\:flex-order-1 {\n    order: 1 !important;\n  }\n  .md\\:flex-order-2 {\n    order: 2 !important;\n  }\n  .md\\:flex-order-3 {\n    order: 3 !important;\n  }\n  .md\\:flex-order-4 {\n    order: 4 !important;\n  }\n  .md\\:flex-order-5 {\n    order: 5 !important;\n  }\n  .md\\:flex-order-6 {\n    order: 6 !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:flex-order-0 {\n    order: 0 !important;\n  }\n  .lg\\:flex-order-1 {\n    order: 1 !important;\n  }\n  .lg\\:flex-order-2 {\n    order: 2 !important;\n  }\n  .lg\\:flex-order-3 {\n    order: 3 !important;\n  }\n  .lg\\:flex-order-4 {\n    order: 4 !important;\n  }\n  .lg\\:flex-order-5 {\n    order: 5 !important;\n  }\n  .lg\\:flex-order-6 {\n    order: 6 !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:flex-order-0 {\n    order: 0 !important;\n  }\n  .xl\\:flex-order-1 {\n    order: 1 !important;\n  }\n  .xl\\:flex-order-2 {\n    order: 2 !important;\n  }\n  .xl\\:flex-order-3 {\n    order: 3 !important;\n  }\n  .xl\\:flex-order-4 {\n    order: 4 !important;\n  }\n  .xl\\:flex-order-5 {\n    order: 5 !important;\n  }\n  .xl\\:flex-order-6 {\n    order: 6 !important;\n  }\n}\n.flex-1 {\n  flex: 1 1 0% !important;\n}\n\n.flex-auto {\n  flex: 1 1 auto !important;\n}\n\n.flex-initial {\n  flex: 0 1 auto !important;\n}\n\n.flex-none {\n  flex: none !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:flex-1 {\n    flex: 1 1 0% !important;\n  }\n  .sm\\:flex-auto {\n    flex: 1 1 auto !important;\n  }\n  .sm\\:flex-initial {\n    flex: 0 1 auto !important;\n  }\n  .sm\\:flex-none {\n    flex: none !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:flex-1 {\n    flex: 1 1 0% !important;\n  }\n  .md\\:flex-auto {\n    flex: 1 1 auto !important;\n  }\n  .md\\:flex-initial {\n    flex: 0 1 auto !important;\n  }\n  .md\\:flex-none {\n    flex: none !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:flex-1 {\n    flex: 1 1 0% !important;\n  }\n  .lg\\:flex-auto {\n    flex: 1 1 auto !important;\n  }\n  .lg\\:flex-initial {\n    flex: 0 1 auto !important;\n  }\n  .lg\\:flex-none {\n    flex: none !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:flex-1 {\n    flex: 1 1 0% !important;\n  }\n  .xl\\:flex-auto {\n    flex: 1 1 auto !important;\n  }\n  .xl\\:flex-initial {\n    flex: 0 1 auto !important;\n  }\n  .xl\\:flex-none {\n    flex: none !important;\n  }\n}\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:flex-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .sm\\:flex-grow-1 {\n    flex-grow: 1 !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:flex-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .md\\:flex-grow-1 {\n    flex-grow: 1 !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:flex-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .lg\\:flex-grow-1 {\n    flex-grow: 1 !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:flex-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .xl\\:flex-grow-1 {\n    flex-grow: 1 !important;\n  }\n}\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:flex-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .sm\\:flex-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:flex-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .md\\:flex-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:flex-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .lg\\:flex-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:flex-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .xl\\:flex-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n}\n.gap-0 {\n  gap: 0rem !important;\n}\n\n.gap-1 {\n  gap: 0.25rem !important;\n}\n\n.gap-2 {\n  gap: 0.5rem !important;\n}\n\n.gap-3 {\n  gap: 1rem !important;\n}\n\n.gap-4 {\n  gap: 1.5rem !important;\n}\n\n.gap-5 {\n  gap: 2rem !important;\n}\n\n.gap-6 {\n  gap: 3rem !important;\n}\n\n.gap-7 {\n  gap: 4rem !important;\n}\n\n.gap-8 {\n  gap: 5rem !important;\n}\n\n.row-gap-0 {\n  row-gap: 0rem !important;\n}\n\n.row-gap-1 {\n  row-gap: 0.25rem !important;\n}\n\n.row-gap-2 {\n  row-gap: 0.5rem !important;\n}\n\n.row-gap-3 {\n  row-gap: 1rem !important;\n}\n\n.row-gap-4 {\n  row-gap: 1.5rem !important;\n}\n\n.row-gap-5 {\n  row-gap: 2rem !important;\n}\n\n.row-gap-6 {\n  row-gap: 3rem !important;\n}\n\n.row-gap-7 {\n  row-gap: 4rem !important;\n}\n\n.row-gap-8 {\n  row-gap: 5rem !important;\n}\n\n.column-gap-0 {\n  column-gap: 0rem !important;\n}\n\n.column-gap-1 {\n  column-gap: 0.25rem !important;\n}\n\n.column-gap-2 {\n  column-gap: 0.5rem !important;\n}\n\n.column-gap-3 {\n  column-gap: 1rem !important;\n}\n\n.column-gap-4 {\n  column-gap: 1.5rem !important;\n}\n\n.column-gap-5 {\n  column-gap: 2rem !important;\n}\n\n.column-gap-6 {\n  column-gap: 3rem !important;\n}\n\n.column-gap-7 {\n  column-gap: 4rem !important;\n}\n\n.column-gap-8 {\n  column-gap: 5rem !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:gap-0 {\n    gap: 0rem !important;\n  }\n  .sm\\:gap-1 {\n    gap: 0.25rem !important;\n  }\n  .sm\\:gap-2 {\n    gap: 0.5rem !important;\n  }\n  .sm\\:gap-3 {\n    gap: 1rem !important;\n  }\n  .sm\\:gap-4 {\n    gap: 1.5rem !important;\n  }\n  .sm\\:gap-5 {\n    gap: 2rem !important;\n  }\n  .sm\\:gap-6 {\n    gap: 3rem !important;\n  }\n  .sm\\:gap-7 {\n    gap: 4rem !important;\n  }\n  .sm\\:gap-8 {\n    gap: 5rem !important;\n  }\n  .sm\\:row-gap-0 {\n    row-gap: 0rem !important;\n  }\n  .sm\\:row-gap-1 {\n    row-gap: 0.25rem !important;\n  }\n  .sm\\:row-gap-2 {\n    row-gap: 0.5rem !important;\n  }\n  .sm\\:row-gap-3 {\n    row-gap: 1rem !important;\n  }\n  .sm\\:row-gap-4 {\n    row-gap: 1.5rem !important;\n  }\n  .sm\\:row-gap-5 {\n    row-gap: 2rem !important;\n  }\n  .sm\\:row-gap-6 {\n    row-gap: 3rem !important;\n  }\n  .sm\\:row-gap-7 {\n    row-gap: 4rem !important;\n  }\n  .sm\\:row-gap-8 {\n    row-gap: 5rem !important;\n  }\n  .sm\\:column-gap-0 {\n    column-gap: 0rem !important;\n  }\n  .sm\\:column-gap-1 {\n    column-gap: 0.25rem !important;\n  }\n  .sm\\:column-gap-2 {\n    column-gap: 0.5rem !important;\n  }\n  .sm\\:column-gap-3 {\n    column-gap: 1rem !important;\n  }\n  .sm\\:column-gap-4 {\n    column-gap: 1.5rem !important;\n  }\n  .sm\\:column-gap-5 {\n    column-gap: 2rem !important;\n  }\n  .sm\\:column-gap-6 {\n    column-gap: 3rem !important;\n  }\n  .sm\\:column-gap-7 {\n    column-gap: 4rem !important;\n  }\n  .sm\\:column-gap-8 {\n    column-gap: 5rem !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:gap-0 {\n    gap: 0rem !important;\n  }\n  .md\\:gap-1 {\n    gap: 0.25rem !important;\n  }\n  .md\\:gap-2 {\n    gap: 0.5rem !important;\n  }\n  .md\\:gap-3 {\n    gap: 1rem !important;\n  }\n  .md\\:gap-4 {\n    gap: 1.5rem !important;\n  }\n  .md\\:gap-5 {\n    gap: 2rem !important;\n  }\n  .md\\:gap-6 {\n    gap: 3rem !important;\n  }\n  .md\\:gap-7 {\n    gap: 4rem !important;\n  }\n  .md\\:gap-8 {\n    gap: 5rem !important;\n  }\n  .md\\:row-gap-0 {\n    row-gap: 0rem !important;\n  }\n  .md\\:row-gap-1 {\n    row-gap: 0.25rem !important;\n  }\n  .md\\:row-gap-2 {\n    row-gap: 0.5rem !important;\n  }\n  .md\\:row-gap-3 {\n    row-gap: 1rem !important;\n  }\n  .md\\:row-gap-4 {\n    row-gap: 1.5rem !important;\n  }\n  .md\\:row-gap-5 {\n    row-gap: 2rem !important;\n  }\n  .md\\:row-gap-6 {\n    row-gap: 3rem !important;\n  }\n  .md\\:row-gap-7 {\n    row-gap: 4rem !important;\n  }\n  .md\\:row-gap-8 {\n    row-gap: 5rem !important;\n  }\n  .md\\:column-gap-0 {\n    column-gap: 0rem !important;\n  }\n  .md\\:column-gap-1 {\n    column-gap: 0.25rem !important;\n  }\n  .md\\:column-gap-2 {\n    column-gap: 0.5rem !important;\n  }\n  .md\\:column-gap-3 {\n    column-gap: 1rem !important;\n  }\n  .md\\:column-gap-4 {\n    column-gap: 1.5rem !important;\n  }\n  .md\\:column-gap-5 {\n    column-gap: 2rem !important;\n  }\n  .md\\:column-gap-6 {\n    column-gap: 3rem !important;\n  }\n  .md\\:column-gap-7 {\n    column-gap: 4rem !important;\n  }\n  .md\\:column-gap-8 {\n    column-gap: 5rem !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:gap-0 {\n    gap: 0rem !important;\n  }\n  .lg\\:gap-1 {\n    gap: 0.25rem !important;\n  }\n  .lg\\:gap-2 {\n    gap: 0.5rem !important;\n  }\n  .lg\\:gap-3 {\n    gap: 1rem !important;\n  }\n  .lg\\:gap-4 {\n    gap: 1.5rem !important;\n  }\n  .lg\\:gap-5 {\n    gap: 2rem !important;\n  }\n  .lg\\:gap-6 {\n    gap: 3rem !important;\n  }\n  .lg\\:gap-7 {\n    gap: 4rem !important;\n  }\n  .lg\\:gap-8 {\n    gap: 5rem !important;\n  }\n  .lg\\:row-gap-0 {\n    row-gap: 0rem !important;\n  }\n  .lg\\:row-gap-1 {\n    row-gap: 0.25rem !important;\n  }\n  .lg\\:row-gap-2 {\n    row-gap: 0.5rem !important;\n  }\n  .lg\\:row-gap-3 {\n    row-gap: 1rem !important;\n  }\n  .lg\\:row-gap-4 {\n    row-gap: 1.5rem !important;\n  }\n  .lg\\:row-gap-5 {\n    row-gap: 2rem !important;\n  }\n  .lg\\:row-gap-6 {\n    row-gap: 3rem !important;\n  }\n  .lg\\:row-gap-7 {\n    row-gap: 4rem !important;\n  }\n  .lg\\:row-gap-8 {\n    row-gap: 5rem !important;\n  }\n  .lg\\:column-gap-0 {\n    column-gap: 0rem !important;\n  }\n  .lg\\:column-gap-1 {\n    column-gap: 0.25rem !important;\n  }\n  .lg\\:column-gap-2 {\n    column-gap: 0.5rem !important;\n  }\n  .lg\\:column-gap-3 {\n    column-gap: 1rem !important;\n  }\n  .lg\\:column-gap-4 {\n    column-gap: 1.5rem !important;\n  }\n  .lg\\:column-gap-5 {\n    column-gap: 2rem !important;\n  }\n  .lg\\:column-gap-6 {\n    column-gap: 3rem !important;\n  }\n  .lg\\:column-gap-7 {\n    column-gap: 4rem !important;\n  }\n  .lg\\:column-gap-8 {\n    column-gap: 5rem !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:gap-0 {\n    gap: 0rem !important;\n  }\n  .xl\\:gap-1 {\n    gap: 0.25rem !important;\n  }\n  .xl\\:gap-2 {\n    gap: 0.5rem !important;\n  }\n  .xl\\:gap-3 {\n    gap: 1rem !important;\n  }\n  .xl\\:gap-4 {\n    gap: 1.5rem !important;\n  }\n  .xl\\:gap-5 {\n    gap: 2rem !important;\n  }\n  .xl\\:gap-6 {\n    gap: 3rem !important;\n  }\n  .xl\\:gap-7 {\n    gap: 4rem !important;\n  }\n  .xl\\:gap-8 {\n    gap: 5rem !important;\n  }\n  .xl\\:row-gap-0 {\n    row-gap: 0rem !important;\n  }\n  .xl\\:row-gap-1 {\n    row-gap: 0.25rem !important;\n  }\n  .xl\\:row-gap-2 {\n    row-gap: 0.5rem !important;\n  }\n  .xl\\:row-gap-3 {\n    row-gap: 1rem !important;\n  }\n  .xl\\:row-gap-4 {\n    row-gap: 1.5rem !important;\n  }\n  .xl\\:row-gap-5 {\n    row-gap: 2rem !important;\n  }\n  .xl\\:row-gap-6 {\n    row-gap: 3rem !important;\n  }\n  .xl\\:row-gap-7 {\n    row-gap: 4rem !important;\n  }\n  .xl\\:row-gap-8 {\n    row-gap: 5rem !important;\n  }\n  .xl\\:column-gap-0 {\n    column-gap: 0rem !important;\n  }\n  .xl\\:column-gap-1 {\n    column-gap: 0.25rem !important;\n  }\n  .xl\\:column-gap-2 {\n    column-gap: 0.5rem !important;\n  }\n  .xl\\:column-gap-3 {\n    column-gap: 1rem !important;\n  }\n  .xl\\:column-gap-4 {\n    column-gap: 1.5rem !important;\n  }\n  .xl\\:column-gap-5 {\n    column-gap: 2rem !important;\n  }\n  .xl\\:column-gap-6 {\n    column-gap: 3rem !important;\n  }\n  .xl\\:column-gap-7 {\n    column-gap: 4rem !important;\n  }\n  .xl\\:column-gap-8 {\n    column-gap: 5rem !important;\n  }\n}\n.p-0 {\n  padding: 0rem !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 2rem !important;\n}\n\n.p-6 {\n  padding: 3rem !important;\n}\n\n.p-7 {\n  padding: 4rem !important;\n}\n\n.p-8 {\n  padding: 5rem !important;\n}\n\n.pt-0 {\n  padding-top: 0rem !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pt-3 {\n  padding-top: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 2rem !important;\n}\n\n.pt-6 {\n  padding-top: 3rem !important;\n}\n\n.pt-7 {\n  padding-top: 4rem !important;\n}\n\n.pt-8 {\n  padding-top: 5rem !important;\n}\n\n.pr-0 {\n  padding-right: 0rem !important;\n}\n\n.pr-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pr-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pr-3 {\n  padding-right: 1rem !important;\n}\n\n.pr-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pr-5 {\n  padding-right: 2rem !important;\n}\n\n.pr-6 {\n  padding-right: 3rem !important;\n}\n\n.pr-7 {\n  padding-right: 4rem !important;\n}\n\n.pr-8 {\n  padding-right: 5rem !important;\n}\n\n.pl-0 {\n  padding-left: 0rem !important;\n}\n\n.pl-1 {\n  padding-left: 0.25rem !important;\n}\n\n.pl-2 {\n  padding-left: 0.5rem !important;\n}\n\n.pl-3 {\n  padding-left: 1rem !important;\n}\n\n.pl-4 {\n  padding-left: 1.5rem !important;\n}\n\n.pl-5 {\n  padding-left: 2rem !important;\n}\n\n.pl-6 {\n  padding-left: 3rem !important;\n}\n\n.pl-7 {\n  padding-left: 4rem !important;\n}\n\n.pl-8 {\n  padding-left: 5rem !important;\n}\n\n.pb-0 {\n  padding-bottom: 0rem !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 2rem !important;\n}\n\n.pb-6 {\n  padding-bottom: 3rem !important;\n}\n\n.pb-7 {\n  padding-bottom: 4rem !important;\n}\n\n.pb-8 {\n  padding-bottom: 5rem !important;\n}\n\n.px-0 {\n  padding-left: 0rem !important;\n  padding-right: 0rem !important;\n}\n\n.px-1 {\n  padding-left: 0.25rem !important;\n  padding-right: 0.25rem !important;\n}\n\n.px-2 {\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n\n.px-3 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.px-4 {\n  padding-left: 1.5rem !important;\n  padding-right: 1.5rem !important;\n}\n\n.px-5 {\n  padding-left: 2rem !important;\n  padding-right: 2rem !important;\n}\n\n.px-6 {\n  padding-left: 3rem !important;\n  padding-right: 3rem !important;\n}\n\n.px-7 {\n  padding-left: 4rem !important;\n  padding-right: 4rem !important;\n}\n\n.px-8 {\n  padding-left: 5rem !important;\n  padding-right: 5rem !important;\n}\n\n.py-0 {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 2rem !important;\n  padding-bottom: 2rem !important;\n}\n\n.py-6 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.py-7 {\n  padding-top: 4rem !important;\n  padding-bottom: 4rem !important;\n}\n\n.py-8 {\n  padding-top: 5rem !important;\n  padding-bottom: 5rem !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:p-0 {\n    padding: 0rem !important;\n  }\n  .sm\\:p-1 {\n    padding: 0.25rem !important;\n  }\n  .sm\\:p-2 {\n    padding: 0.5rem !important;\n  }\n  .sm\\:p-3 {\n    padding: 1rem !important;\n  }\n  .sm\\:p-4 {\n    padding: 1.5rem !important;\n  }\n  .sm\\:p-5 {\n    padding: 2rem !important;\n  }\n  .sm\\:p-6 {\n    padding: 3rem !important;\n  }\n  .sm\\:p-7 {\n    padding: 4rem !important;\n  }\n  .sm\\:p-8 {\n    padding: 5rem !important;\n  }\n  .sm\\:pt-0 {\n    padding-top: 0rem !important;\n  }\n  .sm\\:pt-1 {\n    padding-top: 0.25rem !important;\n  }\n  .sm\\:pt-2 {\n    padding-top: 0.5rem !important;\n  }\n  .sm\\:pt-3 {\n    padding-top: 1rem !important;\n  }\n  .sm\\:pt-4 {\n    padding-top: 1.5rem !important;\n  }\n  .sm\\:pt-5 {\n    padding-top: 2rem !important;\n  }\n  .sm\\:pt-6 {\n    padding-top: 3rem !important;\n  }\n  .sm\\:pt-7 {\n    padding-top: 4rem !important;\n  }\n  .sm\\:pt-8 {\n    padding-top: 5rem !important;\n  }\n  .sm\\:pr-0 {\n    padding-right: 0rem !important;\n  }\n  .sm\\:pr-1 {\n    padding-right: 0.25rem !important;\n  }\n  .sm\\:pr-2 {\n    padding-right: 0.5rem !important;\n  }\n  .sm\\:pr-3 {\n    padding-right: 1rem !important;\n  }\n  .sm\\:pr-4 {\n    padding-right: 1.5rem !important;\n  }\n  .sm\\:pr-5 {\n    padding-right: 2rem !important;\n  }\n  .sm\\:pr-6 {\n    padding-right: 3rem !important;\n  }\n  .sm\\:pr-7 {\n    padding-right: 4rem !important;\n  }\n  .sm\\:pr-8 {\n    padding-right: 5rem !important;\n  }\n  .sm\\:pl-0 {\n    padding-left: 0rem !important;\n  }\n  .sm\\:pl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .sm\\:pl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .sm\\:pl-3 {\n    padding-left: 1rem !important;\n  }\n  .sm\\:pl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .sm\\:pl-5 {\n    padding-left: 2rem !important;\n  }\n  .sm\\:pl-6 {\n    padding-left: 3rem !important;\n  }\n  .sm\\:pl-7 {\n    padding-left: 4rem !important;\n  }\n  .sm\\:pl-8 {\n    padding-left: 5rem !important;\n  }\n  .sm\\:pb-0 {\n    padding-bottom: 0rem !important;\n  }\n  .sm\\:pb-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .sm\\:pb-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .sm\\:pb-3 {\n    padding-bottom: 1rem !important;\n  }\n  .sm\\:pb-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .sm\\:pb-5 {\n    padding-bottom: 2rem !important;\n  }\n  .sm\\:pb-6 {\n    padding-bottom: 3rem !important;\n  }\n  .sm\\:pb-7 {\n    padding-bottom: 4rem !important;\n  }\n  .sm\\:pb-8 {\n    padding-bottom: 5rem !important;\n  }\n  .sm\\:px-0 {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important;\n  }\n  .sm\\:px-1 {\n    padding-left: 0.25rem !important;\n    padding-right: 0.25rem !important;\n  }\n  .sm\\:px-2 {\n    padding-left: 0.5rem !important;\n    padding-right: 0.5rem !important;\n  }\n  .sm\\:px-3 {\n    padding-left: 1rem !important;\n    padding-right: 1rem !important;\n  }\n  .sm\\:px-4 {\n    padding-left: 1.5rem !important;\n    padding-right: 1.5rem !important;\n  }\n  .sm\\:px-5 {\n    padding-left: 2rem !important;\n    padding-right: 2rem !important;\n  }\n  .sm\\:px-6 {\n    padding-left: 3rem !important;\n    padding-right: 3rem !important;\n  }\n  .sm\\:px-7 {\n    padding-left: 4rem !important;\n    padding-right: 4rem !important;\n  }\n  .sm\\:px-8 {\n    padding-left: 5rem !important;\n    padding-right: 5rem !important;\n  }\n  .sm\\:py-0 {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important;\n  }\n  .sm\\:py-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .sm\\:py-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .sm\\:py-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .sm\\:py-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .sm\\:py-5 {\n    padding-top: 2rem !important;\n    padding-bottom: 2rem !important;\n  }\n  .sm\\:py-6 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .sm\\:py-7 {\n    padding-top: 4rem !important;\n    padding-bottom: 4rem !important;\n  }\n  .sm\\:py-8 {\n    padding-top: 5rem !important;\n    padding-bottom: 5rem !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:p-0 {\n    padding: 0rem !important;\n  }\n  .md\\:p-1 {\n    padding: 0.25rem !important;\n  }\n  .md\\:p-2 {\n    padding: 0.5rem !important;\n  }\n  .md\\:p-3 {\n    padding: 1rem !important;\n  }\n  .md\\:p-4 {\n    padding: 1.5rem !important;\n  }\n  .md\\:p-5 {\n    padding: 2rem !important;\n  }\n  .md\\:p-6 {\n    padding: 3rem !important;\n  }\n  .md\\:p-7 {\n    padding: 4rem !important;\n  }\n  .md\\:p-8 {\n    padding: 5rem !important;\n  }\n  .md\\:pt-0 {\n    padding-top: 0rem !important;\n  }\n  .md\\:pt-1 {\n    padding-top: 0.25rem !important;\n  }\n  .md\\:pt-2 {\n    padding-top: 0.5rem !important;\n  }\n  .md\\:pt-3 {\n    padding-top: 1rem !important;\n  }\n  .md\\:pt-4 {\n    padding-top: 1.5rem !important;\n  }\n  .md\\:pt-5 {\n    padding-top: 2rem !important;\n  }\n  .md\\:pt-6 {\n    padding-top: 3rem !important;\n  }\n  .md\\:pt-7 {\n    padding-top: 4rem !important;\n  }\n  .md\\:pt-8 {\n    padding-top: 5rem !important;\n  }\n  .md\\:pr-0 {\n    padding-right: 0rem !important;\n  }\n  .md\\:pr-1 {\n    padding-right: 0.25rem !important;\n  }\n  .md\\:pr-2 {\n    padding-right: 0.5rem !important;\n  }\n  .md\\:pr-3 {\n    padding-right: 1rem !important;\n  }\n  .md\\:pr-4 {\n    padding-right: 1.5rem !important;\n  }\n  .md\\:pr-5 {\n    padding-right: 2rem !important;\n  }\n  .md\\:pr-6 {\n    padding-right: 3rem !important;\n  }\n  .md\\:pr-7 {\n    padding-right: 4rem !important;\n  }\n  .md\\:pr-8 {\n    padding-right: 5rem !important;\n  }\n  .md\\:pl-0 {\n    padding-left: 0rem !important;\n  }\n  .md\\:pl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .md\\:pl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .md\\:pl-3 {\n    padding-left: 1rem !important;\n  }\n  .md\\:pl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .md\\:pl-5 {\n    padding-left: 2rem !important;\n  }\n  .md\\:pl-6 {\n    padding-left: 3rem !important;\n  }\n  .md\\:pl-7 {\n    padding-left: 4rem !important;\n  }\n  .md\\:pl-8 {\n    padding-left: 5rem !important;\n  }\n  .md\\:pb-0 {\n    padding-bottom: 0rem !important;\n  }\n  .md\\:pb-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .md\\:pb-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .md\\:pb-3 {\n    padding-bottom: 1rem !important;\n  }\n  .md\\:pb-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .md\\:pb-5 {\n    padding-bottom: 2rem !important;\n  }\n  .md\\:pb-6 {\n    padding-bottom: 3rem !important;\n  }\n  .md\\:pb-7 {\n    padding-bottom: 4rem !important;\n  }\n  .md\\:pb-8 {\n    padding-bottom: 5rem !important;\n  }\n  .md\\:px-0 {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important;\n  }\n  .md\\:px-1 {\n    padding-left: 0.25rem !important;\n    padding-right: 0.25rem !important;\n  }\n  .md\\:px-2 {\n    padding-left: 0.5rem !important;\n    padding-right: 0.5rem !important;\n  }\n  .md\\:px-3 {\n    padding-left: 1rem !important;\n    padding-right: 1rem !important;\n  }\n  .md\\:px-4 {\n    padding-left: 1.5rem !important;\n    padding-right: 1.5rem !important;\n  }\n  .md\\:px-5 {\n    padding-left: 2rem !important;\n    padding-right: 2rem !important;\n  }\n  .md\\:px-6 {\n    padding-left: 3rem !important;\n    padding-right: 3rem !important;\n  }\n  .md\\:px-7 {\n    padding-left: 4rem !important;\n    padding-right: 4rem !important;\n  }\n  .md\\:px-8 {\n    padding-left: 5rem !important;\n    padding-right: 5rem !important;\n  }\n  .md\\:py-0 {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important;\n  }\n  .md\\:py-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .md\\:py-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .md\\:py-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .md\\:py-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .md\\:py-5 {\n    padding-top: 2rem !important;\n    padding-bottom: 2rem !important;\n  }\n  .md\\:py-6 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .md\\:py-7 {\n    padding-top: 4rem !important;\n    padding-bottom: 4rem !important;\n  }\n  .md\\:py-8 {\n    padding-top: 5rem !important;\n    padding-bottom: 5rem !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:p-0 {\n    padding: 0rem !important;\n  }\n  .lg\\:p-1 {\n    padding: 0.25rem !important;\n  }\n  .lg\\:p-2 {\n    padding: 0.5rem !important;\n  }\n  .lg\\:p-3 {\n    padding: 1rem !important;\n  }\n  .lg\\:p-4 {\n    padding: 1.5rem !important;\n  }\n  .lg\\:p-5 {\n    padding: 2rem !important;\n  }\n  .lg\\:p-6 {\n    padding: 3rem !important;\n  }\n  .lg\\:p-7 {\n    padding: 4rem !important;\n  }\n  .lg\\:p-8 {\n    padding: 5rem !important;\n  }\n  .lg\\:pt-0 {\n    padding-top: 0rem !important;\n  }\n  .lg\\:pt-1 {\n    padding-top: 0.25rem !important;\n  }\n  .lg\\:pt-2 {\n    padding-top: 0.5rem !important;\n  }\n  .lg\\:pt-3 {\n    padding-top: 1rem !important;\n  }\n  .lg\\:pt-4 {\n    padding-top: 1.5rem !important;\n  }\n  .lg\\:pt-5 {\n    padding-top: 2rem !important;\n  }\n  .lg\\:pt-6 {\n    padding-top: 3rem !important;\n  }\n  .lg\\:pt-7 {\n    padding-top: 4rem !important;\n  }\n  .lg\\:pt-8 {\n    padding-top: 5rem !important;\n  }\n  .lg\\:pr-0 {\n    padding-right: 0rem !important;\n  }\n  .lg\\:pr-1 {\n    padding-right: 0.25rem !important;\n  }\n  .lg\\:pr-2 {\n    padding-right: 0.5rem !important;\n  }\n  .lg\\:pr-3 {\n    padding-right: 1rem !important;\n  }\n  .lg\\:pr-4 {\n    padding-right: 1.5rem !important;\n  }\n  .lg\\:pr-5 {\n    padding-right: 2rem !important;\n  }\n  .lg\\:pr-6 {\n    padding-right: 3rem !important;\n  }\n  .lg\\:pr-7 {\n    padding-right: 4rem !important;\n  }\n  .lg\\:pr-8 {\n    padding-right: 5rem !important;\n  }\n  .lg\\:pl-0 {\n    padding-left: 0rem !important;\n  }\n  .lg\\:pl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .lg\\:pl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .lg\\:pl-3 {\n    padding-left: 1rem !important;\n  }\n  .lg\\:pl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .lg\\:pl-5 {\n    padding-left: 2rem !important;\n  }\n  .lg\\:pl-6 {\n    padding-left: 3rem !important;\n  }\n  .lg\\:pl-7 {\n    padding-left: 4rem !important;\n  }\n  .lg\\:pl-8 {\n    padding-left: 5rem !important;\n  }\n  .lg\\:pb-0 {\n    padding-bottom: 0rem !important;\n  }\n  .lg\\:pb-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .lg\\:pb-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .lg\\:pb-3 {\n    padding-bottom: 1rem !important;\n  }\n  .lg\\:pb-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .lg\\:pb-5 {\n    padding-bottom: 2rem !important;\n  }\n  .lg\\:pb-6 {\n    padding-bottom: 3rem !important;\n  }\n  .lg\\:pb-7 {\n    padding-bottom: 4rem !important;\n  }\n  .lg\\:pb-8 {\n    padding-bottom: 5rem !important;\n  }\n  .lg\\:px-0 {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important;\n  }\n  .lg\\:px-1 {\n    padding-left: 0.25rem !important;\n    padding-right: 0.25rem !important;\n  }\n  .lg\\:px-2 {\n    padding-left: 0.5rem !important;\n    padding-right: 0.5rem !important;\n  }\n  .lg\\:px-3 {\n    padding-left: 1rem !important;\n    padding-right: 1rem !important;\n  }\n  .lg\\:px-4 {\n    padding-left: 1.5rem !important;\n    padding-right: 1.5rem !important;\n  }\n  .lg\\:px-5 {\n    padding-left: 2rem !important;\n    padding-right: 2rem !important;\n  }\n  .lg\\:px-6 {\n    padding-left: 3rem !important;\n    padding-right: 3rem !important;\n  }\n  .lg\\:px-7 {\n    padding-left: 4rem !important;\n    padding-right: 4rem !important;\n  }\n  .lg\\:px-8 {\n    padding-left: 5rem !important;\n    padding-right: 5rem !important;\n  }\n  .lg\\:py-0 {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important;\n  }\n  .lg\\:py-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .lg\\:py-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .lg\\:py-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .lg\\:py-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .lg\\:py-5 {\n    padding-top: 2rem !important;\n    padding-bottom: 2rem !important;\n  }\n  .lg\\:py-6 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .lg\\:py-7 {\n    padding-top: 4rem !important;\n    padding-bottom: 4rem !important;\n  }\n  .lg\\:py-8 {\n    padding-top: 5rem !important;\n    padding-bottom: 5rem !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:p-0 {\n    padding: 0rem !important;\n  }\n  .xl\\:p-1 {\n    padding: 0.25rem !important;\n  }\n  .xl\\:p-2 {\n    padding: 0.5rem !important;\n  }\n  .xl\\:p-3 {\n    padding: 1rem !important;\n  }\n  .xl\\:p-4 {\n    padding: 1.5rem !important;\n  }\n  .xl\\:p-5 {\n    padding: 2rem !important;\n  }\n  .xl\\:p-6 {\n    padding: 3rem !important;\n  }\n  .xl\\:p-7 {\n    padding: 4rem !important;\n  }\n  .xl\\:p-8 {\n    padding: 5rem !important;\n  }\n  .xl\\:pt-0 {\n    padding-top: 0rem !important;\n  }\n  .xl\\:pt-1 {\n    padding-top: 0.25rem !important;\n  }\n  .xl\\:pt-2 {\n    padding-top: 0.5rem !important;\n  }\n  .xl\\:pt-3 {\n    padding-top: 1rem !important;\n  }\n  .xl\\:pt-4 {\n    padding-top: 1.5rem !important;\n  }\n  .xl\\:pt-5 {\n    padding-top: 2rem !important;\n  }\n  .xl\\:pt-6 {\n    padding-top: 3rem !important;\n  }\n  .xl\\:pt-7 {\n    padding-top: 4rem !important;\n  }\n  .xl\\:pt-8 {\n    padding-top: 5rem !important;\n  }\n  .xl\\:pr-0 {\n    padding-right: 0rem !important;\n  }\n  .xl\\:pr-1 {\n    padding-right: 0.25rem !important;\n  }\n  .xl\\:pr-2 {\n    padding-right: 0.5rem !important;\n  }\n  .xl\\:pr-3 {\n    padding-right: 1rem !important;\n  }\n  .xl\\:pr-4 {\n    padding-right: 1.5rem !important;\n  }\n  .xl\\:pr-5 {\n    padding-right: 2rem !important;\n  }\n  .xl\\:pr-6 {\n    padding-right: 3rem !important;\n  }\n  .xl\\:pr-7 {\n    padding-right: 4rem !important;\n  }\n  .xl\\:pr-8 {\n    padding-right: 5rem !important;\n  }\n  .xl\\:pl-0 {\n    padding-left: 0rem !important;\n  }\n  .xl\\:pl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .xl\\:pl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .xl\\:pl-3 {\n    padding-left: 1rem !important;\n  }\n  .xl\\:pl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .xl\\:pl-5 {\n    padding-left: 2rem !important;\n  }\n  .xl\\:pl-6 {\n    padding-left: 3rem !important;\n  }\n  .xl\\:pl-7 {\n    padding-left: 4rem !important;\n  }\n  .xl\\:pl-8 {\n    padding-left: 5rem !important;\n  }\n  .xl\\:pb-0 {\n    padding-bottom: 0rem !important;\n  }\n  .xl\\:pb-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .xl\\:pb-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .xl\\:pb-3 {\n    padding-bottom: 1rem !important;\n  }\n  .xl\\:pb-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .xl\\:pb-5 {\n    padding-bottom: 2rem !important;\n  }\n  .xl\\:pb-6 {\n    padding-bottom: 3rem !important;\n  }\n  .xl\\:pb-7 {\n    padding-bottom: 4rem !important;\n  }\n  .xl\\:pb-8 {\n    padding-bottom: 5rem !important;\n  }\n  .xl\\:px-0 {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important;\n  }\n  .xl\\:px-1 {\n    padding-left: 0.25rem !important;\n    padding-right: 0.25rem !important;\n  }\n  .xl\\:px-2 {\n    padding-left: 0.5rem !important;\n    padding-right: 0.5rem !important;\n  }\n  .xl\\:px-3 {\n    padding-left: 1rem !important;\n    padding-right: 1rem !important;\n  }\n  .xl\\:px-4 {\n    padding-left: 1.5rem !important;\n    padding-right: 1.5rem !important;\n  }\n  .xl\\:px-5 {\n    padding-left: 2rem !important;\n    padding-right: 2rem !important;\n  }\n  .xl\\:px-6 {\n    padding-left: 3rem !important;\n    padding-right: 3rem !important;\n  }\n  .xl\\:px-7 {\n    padding-left: 4rem !important;\n    padding-right: 4rem !important;\n  }\n  .xl\\:px-8 {\n    padding-left: 5rem !important;\n    padding-right: 5rem !important;\n  }\n  .xl\\:py-0 {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important;\n  }\n  .xl\\:py-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .xl\\:py-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .xl\\:py-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .xl\\:py-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .xl\\:py-5 {\n    padding-top: 2rem !important;\n    padding-bottom: 2rem !important;\n  }\n  .xl\\:py-6 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .xl\\:py-7 {\n    padding-top: 4rem !important;\n    padding-bottom: 4rem !important;\n  }\n  .xl\\:py-8 {\n    padding-top: 5rem !important;\n    padding-bottom: 5rem !important;\n  }\n}\n.m-0 {\n  margin: 0rem !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 2rem !important;\n}\n\n.m-6 {\n  margin: 3rem !important;\n}\n\n.m-7 {\n  margin: 4rem !important;\n}\n\n.m-8 {\n  margin: 5rem !important;\n}\n\n.-m-1 {\n  margin: -0.25rem !important;\n}\n\n.-m-2 {\n  margin: -0.5rem !important;\n}\n\n.-m-3 {\n  margin: -1rem !important;\n}\n\n.-m-4 {\n  margin: -1.5rem !important;\n}\n\n.-m-5 {\n  margin: -2rem !important;\n}\n\n.-m-6 {\n  margin: -3rem !important;\n}\n\n.-m-7 {\n  margin: -4rem !important;\n}\n\n.-m-8 {\n  margin: -5rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-0 {\n  margin-top: 0rem !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mt-3 {\n  margin-top: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 2rem !important;\n}\n\n.mt-6 {\n  margin-top: 3rem !important;\n}\n\n.mt-7 {\n  margin-top: 4rem !important;\n}\n\n.mt-8 {\n  margin-top: 5rem !important;\n}\n\n.-mt-1 {\n  margin-top: -0.25rem !important;\n}\n\n.-mt-2 {\n  margin-top: -0.5rem !important;\n}\n\n.-mt-3 {\n  margin-top: -1rem !important;\n}\n\n.-mt-4 {\n  margin-top: -1.5rem !important;\n}\n\n.-mt-5 {\n  margin-top: -2rem !important;\n}\n\n.-mt-6 {\n  margin-top: -3rem !important;\n}\n\n.-mt-7 {\n  margin-top: -4rem !important;\n}\n\n.-mt-8 {\n  margin-top: -5rem !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.mr-0 {\n  margin-right: 0rem !important;\n}\n\n.mr-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mr-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mr-3 {\n  margin-right: 1rem !important;\n}\n\n.mr-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mr-5 {\n  margin-right: 2rem !important;\n}\n\n.mr-6 {\n  margin-right: 3rem !important;\n}\n\n.mr-7 {\n  margin-right: 4rem !important;\n}\n\n.mr-8 {\n  margin-right: 5rem !important;\n}\n\n.-mr-1 {\n  margin-right: -0.25rem !important;\n}\n\n.-mr-2 {\n  margin-right: -0.5rem !important;\n}\n\n.-mr-3 {\n  margin-right: -1rem !important;\n}\n\n.-mr-4 {\n  margin-right: -1.5rem !important;\n}\n\n.-mr-5 {\n  margin-right: -2rem !important;\n}\n\n.-mr-6 {\n  margin-right: -3rem !important;\n}\n\n.-mr-7 {\n  margin-right: -4rem !important;\n}\n\n.-mr-8 {\n  margin-right: -5rem !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.ml-0 {\n  margin-left: 0rem !important;\n}\n\n.ml-1 {\n  margin-left: 0.25rem !important;\n}\n\n.ml-2 {\n  margin-left: 0.5rem !important;\n}\n\n.ml-3 {\n  margin-left: 1rem !important;\n}\n\n.ml-4 {\n  margin-left: 1.5rem !important;\n}\n\n.ml-5 {\n  margin-left: 2rem !important;\n}\n\n.ml-6 {\n  margin-left: 3rem !important;\n}\n\n.ml-7 {\n  margin-left: 4rem !important;\n}\n\n.ml-8 {\n  margin-left: 5rem !important;\n}\n\n.-ml-1 {\n  margin-left: -0.25rem !important;\n}\n\n.-ml-2 {\n  margin-left: -0.5rem !important;\n}\n\n.-ml-3 {\n  margin-left: -1rem !important;\n}\n\n.-ml-4 {\n  margin-left: -1.5rem !important;\n}\n\n.-ml-5 {\n  margin-left: -2rem !important;\n}\n\n.-ml-6 {\n  margin-left: -3rem !important;\n}\n\n.-ml-7 {\n  margin-left: -4rem !important;\n}\n\n.-ml-8 {\n  margin-left: -5rem !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mb-0 {\n  margin-bottom: 0rem !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 2rem !important;\n}\n\n.mb-6 {\n  margin-bottom: 3rem !important;\n}\n\n.mb-7 {\n  margin-bottom: 4rem !important;\n}\n\n.mb-8 {\n  margin-bottom: 5rem !important;\n}\n\n.-mb-1 {\n  margin-bottom: -0.25rem !important;\n}\n\n.-mb-2 {\n  margin-bottom: -0.5rem !important;\n}\n\n.-mb-3 {\n  margin-bottom: -1rem !important;\n}\n\n.-mb-4 {\n  margin-bottom: -1.5rem !important;\n}\n\n.-mb-5 {\n  margin-bottom: -2rem !important;\n}\n\n.-mb-6 {\n  margin-bottom: -3rem !important;\n}\n\n.-mb-7 {\n  margin-bottom: -4rem !important;\n}\n\n.-mb-8 {\n  margin-bottom: -5rem !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.mx-0 {\n  margin-left: 0rem !important;\n  margin-right: 0rem !important;\n}\n\n.mx-1 {\n  margin-left: 0.25rem !important;\n  margin-right: 0.25rem !important;\n}\n\n.mx-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important;\n}\n\n.mx-3 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n.mx-4 {\n  margin-left: 1.5rem !important;\n  margin-right: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-left: 2rem !important;\n  margin-right: 2rem !important;\n}\n\n.mx-6 {\n  margin-left: 3rem !important;\n  margin-right: 3rem !important;\n}\n\n.mx-7 {\n  margin-left: 4rem !important;\n  margin-right: 4rem !important;\n}\n\n.mx-8 {\n  margin-left: 5rem !important;\n  margin-right: 5rem !important;\n}\n\n.-mx-1 {\n  margin-left: -0.25rem !important;\n  margin-right: -0.25rem !important;\n}\n\n.-mx-2 {\n  margin-left: -0.5rem !important;\n  margin-right: -0.5rem !important;\n}\n\n.-mx-3 {\n  margin-left: -1rem !important;\n  margin-right: -1rem !important;\n}\n\n.-mx-4 {\n  margin-left: -1.5rem !important;\n  margin-right: -1.5rem !important;\n}\n\n.-mx-5 {\n  margin-left: -2rem !important;\n  margin-right: -2rem !important;\n}\n\n.-mx-6 {\n  margin-left: -3rem !important;\n  margin-right: -3rem !important;\n}\n\n.-mx-7 {\n  margin-left: -4rem !important;\n  margin-right: -4rem !important;\n}\n\n.-mx-8 {\n  margin-left: -5rem !important;\n  margin-right: -5rem !important;\n}\n\n.mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.my-0 {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 2rem !important;\n  margin-bottom: 2rem !important;\n}\n\n.my-6 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.my-7 {\n  margin-top: 4rem !important;\n  margin-bottom: 4rem !important;\n}\n\n.my-8 {\n  margin-top: 5rem !important;\n  margin-bottom: 5rem !important;\n}\n\n.-my-1 {\n  margin-top: -0.25rem !important;\n  margin-bottom: -0.25rem !important;\n}\n\n.-my-2 {\n  margin-top: -0.5rem !important;\n  margin-bottom: -0.5rem !important;\n}\n\n.-my-3 {\n  margin-top: -1rem !important;\n  margin-bottom: -1rem !important;\n}\n\n.-my-4 {\n  margin-top: -1.5rem !important;\n  margin-bottom: -1.5rem !important;\n}\n\n.-my-5 {\n  margin-top: -2rem !important;\n  margin-bottom: -2rem !important;\n}\n\n.-my-6 {\n  margin-top: -3rem !important;\n  margin-bottom: -3rem !important;\n}\n\n.-my-7 {\n  margin-top: -4rem !important;\n  margin-bottom: -4rem !important;\n}\n\n.-my-8 {\n  margin-top: -5rem !important;\n  margin-bottom: -5rem !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:m-0 {\n    margin: 0rem !important;\n  }\n  .sm\\:m-1 {\n    margin: 0.25rem !important;\n  }\n  .sm\\:m-2 {\n    margin: 0.5rem !important;\n  }\n  .sm\\:m-3 {\n    margin: 1rem !important;\n  }\n  .sm\\:m-4 {\n    margin: 1.5rem !important;\n  }\n  .sm\\:m-5 {\n    margin: 2rem !important;\n  }\n  .sm\\:m-6 {\n    margin: 3rem !important;\n  }\n  .sm\\:m-7 {\n    margin: 4rem !important;\n  }\n  .sm\\:m-8 {\n    margin: 5rem !important;\n  }\n  .sm\\:-m-1 {\n    margin: -0.25rem !important;\n  }\n  .sm\\:-m-2 {\n    margin: -0.5rem !important;\n  }\n  .sm\\:-m-3 {\n    margin: -1rem !important;\n  }\n  .sm\\:-m-4 {\n    margin: -1.5rem !important;\n  }\n  .sm\\:-m-5 {\n    margin: -2rem !important;\n  }\n  .sm\\:-m-6 {\n    margin: -3rem !important;\n  }\n  .sm\\:-m-7 {\n    margin: -4rem !important;\n  }\n  .sm\\:-m-8 {\n    margin: -5rem !important;\n  }\n  .sm\\:m-auto {\n    margin: auto !important;\n  }\n  .sm\\:mt-0 {\n    margin-top: 0rem !important;\n  }\n  .sm\\:mt-1 {\n    margin-top: 0.25rem !important;\n  }\n  .sm\\:mt-2 {\n    margin-top: 0.5rem !important;\n  }\n  .sm\\:mt-3 {\n    margin-top: 1rem !important;\n  }\n  .sm\\:mt-4 {\n    margin-top: 1.5rem !important;\n  }\n  .sm\\:mt-5 {\n    margin-top: 2rem !important;\n  }\n  .sm\\:mt-6 {\n    margin-top: 3rem !important;\n  }\n  .sm\\:mt-7 {\n    margin-top: 4rem !important;\n  }\n  .sm\\:mt-8 {\n    margin-top: 5rem !important;\n  }\n  .sm\\:-mt-1 {\n    margin-top: -0.25rem !important;\n  }\n  .sm\\:-mt-2 {\n    margin-top: -0.5rem !important;\n  }\n  .sm\\:-mt-3 {\n    margin-top: -1rem !important;\n  }\n  .sm\\:-mt-4 {\n    margin-top: -1.5rem !important;\n  }\n  .sm\\:-mt-5 {\n    margin-top: -2rem !important;\n  }\n  .sm\\:-mt-6 {\n    margin-top: -3rem !important;\n  }\n  .sm\\:-mt-7 {\n    margin-top: -4rem !important;\n  }\n  .sm\\:-mt-8 {\n    margin-top: -5rem !important;\n  }\n  .sm\\:mt-auto {\n    margin-top: auto !important;\n  }\n  .sm\\:mr-0 {\n    margin-right: 0rem !important;\n  }\n  .sm\\:mr-1 {\n    margin-right: 0.25rem !important;\n  }\n  .sm\\:mr-2 {\n    margin-right: 0.5rem !important;\n  }\n  .sm\\:mr-3 {\n    margin-right: 1rem !important;\n  }\n  .sm\\:mr-4 {\n    margin-right: 1.5rem !important;\n  }\n  .sm\\:mr-5 {\n    margin-right: 2rem !important;\n  }\n  .sm\\:mr-6 {\n    margin-right: 3rem !important;\n  }\n  .sm\\:mr-7 {\n    margin-right: 4rem !important;\n  }\n  .sm\\:mr-8 {\n    margin-right: 5rem !important;\n  }\n  .sm\\:-mr-1 {\n    margin-right: -0.25rem !important;\n  }\n  .sm\\:-mr-2 {\n    margin-right: -0.5rem !important;\n  }\n  .sm\\:-mr-3 {\n    margin-right: -1rem !important;\n  }\n  .sm\\:-mr-4 {\n    margin-right: -1.5rem !important;\n  }\n  .sm\\:-mr-5 {\n    margin-right: -2rem !important;\n  }\n  .sm\\:-mr-6 {\n    margin-right: -3rem !important;\n  }\n  .sm\\:-mr-7 {\n    margin-right: -4rem !important;\n  }\n  .sm\\:-mr-8 {\n    margin-right: -5rem !important;\n  }\n  .sm\\:mr-auto {\n    margin-right: auto !important;\n  }\n  .sm\\:ml-0 {\n    margin-left: 0rem !important;\n  }\n  .sm\\:ml-1 {\n    margin-left: 0.25rem !important;\n  }\n  .sm\\:ml-2 {\n    margin-left: 0.5rem !important;\n  }\n  .sm\\:ml-3 {\n    margin-left: 1rem !important;\n  }\n  .sm\\:ml-4 {\n    margin-left: 1.5rem !important;\n  }\n  .sm\\:ml-5 {\n    margin-left: 2rem !important;\n  }\n  .sm\\:ml-6 {\n    margin-left: 3rem !important;\n  }\n  .sm\\:ml-7 {\n    margin-left: 4rem !important;\n  }\n  .sm\\:ml-8 {\n    margin-left: 5rem !important;\n  }\n  .sm\\:-ml-1 {\n    margin-left: -0.25rem !important;\n  }\n  .sm\\:-ml-2 {\n    margin-left: -0.5rem !important;\n  }\n  .sm\\:-ml-3 {\n    margin-left: -1rem !important;\n  }\n  .sm\\:-ml-4 {\n    margin-left: -1.5rem !important;\n  }\n  .sm\\:-ml-5 {\n    margin-left: -2rem !important;\n  }\n  .sm\\:-ml-6 {\n    margin-left: -3rem !important;\n  }\n  .sm\\:-ml-7 {\n    margin-left: -4rem !important;\n  }\n  .sm\\:-ml-8 {\n    margin-left: -5rem !important;\n  }\n  .sm\\:ml-auto {\n    margin-left: auto !important;\n  }\n  .sm\\:mb-0 {\n    margin-bottom: 0rem !important;\n  }\n  .sm\\:mb-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .sm\\:mb-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .sm\\:mb-3 {\n    margin-bottom: 1rem !important;\n  }\n  .sm\\:mb-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .sm\\:mb-5 {\n    margin-bottom: 2rem !important;\n  }\n  .sm\\:mb-6 {\n    margin-bottom: 3rem !important;\n  }\n  .sm\\:mb-7 {\n    margin-bottom: 4rem !important;\n  }\n  .sm\\:mb-8 {\n    margin-bottom: 5rem !important;\n  }\n  .sm\\:-mb-1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .sm\\:-mb-2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .sm\\:-mb-3 {\n    margin-bottom: -1rem !important;\n  }\n  .sm\\:-mb-4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .sm\\:-mb-5 {\n    margin-bottom: -2rem !important;\n  }\n  .sm\\:-mb-6 {\n    margin-bottom: -3rem !important;\n  }\n  .sm\\:-mb-7 {\n    margin-bottom: -4rem !important;\n  }\n  .sm\\:-mb-8 {\n    margin-bottom: -5rem !important;\n  }\n  .sm\\:mb-auto {\n    margin-bottom: auto !important;\n  }\n  .sm\\:mx-0 {\n    margin-left: 0rem !important;\n    margin-right: 0rem !important;\n  }\n  .sm\\:mx-1 {\n    margin-left: 0.25rem !important;\n    margin-right: 0.25rem !important;\n  }\n  .sm\\:mx-2 {\n    margin-left: 0.5rem !important;\n    margin-right: 0.5rem !important;\n  }\n  .sm\\:mx-3 {\n    margin-left: 1rem !important;\n    margin-right: 1rem !important;\n  }\n  .sm\\:mx-4 {\n    margin-left: 1.5rem !important;\n    margin-right: 1.5rem !important;\n  }\n  .sm\\:mx-5 {\n    margin-left: 2rem !important;\n    margin-right: 2rem !important;\n  }\n  .sm\\:mx-6 {\n    margin-left: 3rem !important;\n    margin-right: 3rem !important;\n  }\n  .sm\\:mx-7 {\n    margin-left: 4rem !important;\n    margin-right: 4rem !important;\n  }\n  .sm\\:mx-8 {\n    margin-left: 5rem !important;\n    margin-right: 5rem !important;\n  }\n  .sm\\:-mx-1 {\n    margin-left: -0.25rem !important;\n    margin-right: -0.25rem !important;\n  }\n  .sm\\:-mx-2 {\n    margin-left: -0.5rem !important;\n    margin-right: -0.5rem !important;\n  }\n  .sm\\:-mx-3 {\n    margin-left: -1rem !important;\n    margin-right: -1rem !important;\n  }\n  .sm\\:-mx-4 {\n    margin-left: -1.5rem !important;\n    margin-right: -1.5rem !important;\n  }\n  .sm\\:-mx-5 {\n    margin-left: -2rem !important;\n    margin-right: -2rem !important;\n  }\n  .sm\\:-mx-6 {\n    margin-left: -3rem !important;\n    margin-right: -3rem !important;\n  }\n  .sm\\:-mx-7 {\n    margin-left: -4rem !important;\n    margin-right: -4rem !important;\n  }\n  .sm\\:-mx-8 {\n    margin-left: -5rem !important;\n    margin-right: -5rem !important;\n  }\n  .sm\\:mx-auto {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n  .sm\\:my-0 {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important;\n  }\n  .sm\\:my-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .sm\\:my-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .sm\\:my-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .sm\\:my-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .sm\\:my-5 {\n    margin-top: 2rem !important;\n    margin-bottom: 2rem !important;\n  }\n  .sm\\:my-6 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .sm\\:my-7 {\n    margin-top: 4rem !important;\n    margin-bottom: 4rem !important;\n  }\n  .sm\\:my-8 {\n    margin-top: 5rem !important;\n    margin-bottom: 5rem !important;\n  }\n  .sm\\:-my-1 {\n    margin-top: -0.25rem !important;\n    margin-bottom: -0.25rem !important;\n  }\n  .sm\\:-my-2 {\n    margin-top: -0.5rem !important;\n    margin-bottom: -0.5rem !important;\n  }\n  .sm\\:-my-3 {\n    margin-top: -1rem !important;\n    margin-bottom: -1rem !important;\n  }\n  .sm\\:-my-4 {\n    margin-top: -1.5rem !important;\n    margin-bottom: -1.5rem !important;\n  }\n  .sm\\:-my-5 {\n    margin-top: -2rem !important;\n    margin-bottom: -2rem !important;\n  }\n  .sm\\:-my-6 {\n    margin-top: -3rem !important;\n    margin-bottom: -3rem !important;\n  }\n  .sm\\:-my-7 {\n    margin-top: -4rem !important;\n    margin-bottom: -4rem !important;\n  }\n  .sm\\:-my-8 {\n    margin-top: -5rem !important;\n    margin-bottom: -5rem !important;\n  }\n  .sm\\:my-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:m-0 {\n    margin: 0rem !important;\n  }\n  .md\\:m-1 {\n    margin: 0.25rem !important;\n  }\n  .md\\:m-2 {\n    margin: 0.5rem !important;\n  }\n  .md\\:m-3 {\n    margin: 1rem !important;\n  }\n  .md\\:m-4 {\n    margin: 1.5rem !important;\n  }\n  .md\\:m-5 {\n    margin: 2rem !important;\n  }\n  .md\\:m-6 {\n    margin: 3rem !important;\n  }\n  .md\\:m-7 {\n    margin: 4rem !important;\n  }\n  .md\\:m-8 {\n    margin: 5rem !important;\n  }\n  .md\\:-m-1 {\n    margin: -0.25rem !important;\n  }\n  .md\\:-m-2 {\n    margin: -0.5rem !important;\n  }\n  .md\\:-m-3 {\n    margin: -1rem !important;\n  }\n  .md\\:-m-4 {\n    margin: -1.5rem !important;\n  }\n  .md\\:-m-5 {\n    margin: -2rem !important;\n  }\n  .md\\:-m-6 {\n    margin: -3rem !important;\n  }\n  .md\\:-m-7 {\n    margin: -4rem !important;\n  }\n  .md\\:-m-8 {\n    margin: -5rem !important;\n  }\n  .md\\:m-auto {\n    margin: auto !important;\n  }\n  .md\\:mt-0 {\n    margin-top: 0rem !important;\n  }\n  .md\\:mt-1 {\n    margin-top: 0.25rem !important;\n  }\n  .md\\:mt-2 {\n    margin-top: 0.5rem !important;\n  }\n  .md\\:mt-3 {\n    margin-top: 1rem !important;\n  }\n  .md\\:mt-4 {\n    margin-top: 1.5rem !important;\n  }\n  .md\\:mt-5 {\n    margin-top: 2rem !important;\n  }\n  .md\\:mt-6 {\n    margin-top: 3rem !important;\n  }\n  .md\\:mt-7 {\n    margin-top: 4rem !important;\n  }\n  .md\\:mt-8 {\n    margin-top: 5rem !important;\n  }\n  .md\\:-mt-1 {\n    margin-top: -0.25rem !important;\n  }\n  .md\\:-mt-2 {\n    margin-top: -0.5rem !important;\n  }\n  .md\\:-mt-3 {\n    margin-top: -1rem !important;\n  }\n  .md\\:-mt-4 {\n    margin-top: -1.5rem !important;\n  }\n  .md\\:-mt-5 {\n    margin-top: -2rem !important;\n  }\n  .md\\:-mt-6 {\n    margin-top: -3rem !important;\n  }\n  .md\\:-mt-7 {\n    margin-top: -4rem !important;\n  }\n  .md\\:-mt-8 {\n    margin-top: -5rem !important;\n  }\n  .md\\:mt-auto {\n    margin-top: auto !important;\n  }\n  .md\\:mr-0 {\n    margin-right: 0rem !important;\n  }\n  .md\\:mr-1 {\n    margin-right: 0.25rem !important;\n  }\n  .md\\:mr-2 {\n    margin-right: 0.5rem !important;\n  }\n  .md\\:mr-3 {\n    margin-right: 1rem !important;\n  }\n  .md\\:mr-4 {\n    margin-right: 1.5rem !important;\n  }\n  .md\\:mr-5 {\n    margin-right: 2rem !important;\n  }\n  .md\\:mr-6 {\n    margin-right: 3rem !important;\n  }\n  .md\\:mr-7 {\n    margin-right: 4rem !important;\n  }\n  .md\\:mr-8 {\n    margin-right: 5rem !important;\n  }\n  .md\\:-mr-1 {\n    margin-right: -0.25rem !important;\n  }\n  .md\\:-mr-2 {\n    margin-right: -0.5rem !important;\n  }\n  .md\\:-mr-3 {\n    margin-right: -1rem !important;\n  }\n  .md\\:-mr-4 {\n    margin-right: -1.5rem !important;\n  }\n  .md\\:-mr-5 {\n    margin-right: -2rem !important;\n  }\n  .md\\:-mr-6 {\n    margin-right: -3rem !important;\n  }\n  .md\\:-mr-7 {\n    margin-right: -4rem !important;\n  }\n  .md\\:-mr-8 {\n    margin-right: -5rem !important;\n  }\n  .md\\:mr-auto {\n    margin-right: auto !important;\n  }\n  .md\\:ml-0 {\n    margin-left: 0rem !important;\n  }\n  .md\\:ml-1 {\n    margin-left: 0.25rem !important;\n  }\n  .md\\:ml-2 {\n    margin-left: 0.5rem !important;\n  }\n  .md\\:ml-3 {\n    margin-left: 1rem !important;\n  }\n  .md\\:ml-4 {\n    margin-left: 1.5rem !important;\n  }\n  .md\\:ml-5 {\n    margin-left: 2rem !important;\n  }\n  .md\\:ml-6 {\n    margin-left: 3rem !important;\n  }\n  .md\\:ml-7 {\n    margin-left: 4rem !important;\n  }\n  .md\\:ml-8 {\n    margin-left: 5rem !important;\n  }\n  .md\\:-ml-1 {\n    margin-left: -0.25rem !important;\n  }\n  .md\\:-ml-2 {\n    margin-left: -0.5rem !important;\n  }\n  .md\\:-ml-3 {\n    margin-left: -1rem !important;\n  }\n  .md\\:-ml-4 {\n    margin-left: -1.5rem !important;\n  }\n  .md\\:-ml-5 {\n    margin-left: -2rem !important;\n  }\n  .md\\:-ml-6 {\n    margin-left: -3rem !important;\n  }\n  .md\\:-ml-7 {\n    margin-left: -4rem !important;\n  }\n  .md\\:-ml-8 {\n    margin-left: -5rem !important;\n  }\n  .md\\:ml-auto {\n    margin-left: auto !important;\n  }\n  .md\\:mb-0 {\n    margin-bottom: 0rem !important;\n  }\n  .md\\:mb-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .md\\:mb-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .md\\:mb-3 {\n    margin-bottom: 1rem !important;\n  }\n  .md\\:mb-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .md\\:mb-5 {\n    margin-bottom: 2rem !important;\n  }\n  .md\\:mb-6 {\n    margin-bottom: 3rem !important;\n  }\n  .md\\:mb-7 {\n    margin-bottom: 4rem !important;\n  }\n  .md\\:mb-8 {\n    margin-bottom: 5rem !important;\n  }\n  .md\\:-mb-1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .md\\:-mb-2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .md\\:-mb-3 {\n    margin-bottom: -1rem !important;\n  }\n  .md\\:-mb-4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .md\\:-mb-5 {\n    margin-bottom: -2rem !important;\n  }\n  .md\\:-mb-6 {\n    margin-bottom: -3rem !important;\n  }\n  .md\\:-mb-7 {\n    margin-bottom: -4rem !important;\n  }\n  .md\\:-mb-8 {\n    margin-bottom: -5rem !important;\n  }\n  .md\\:mb-auto {\n    margin-bottom: auto !important;\n  }\n  .md\\:mx-0 {\n    margin-left: 0rem !important;\n    margin-right: 0rem !important;\n  }\n  .md\\:mx-1 {\n    margin-left: 0.25rem !important;\n    margin-right: 0.25rem !important;\n  }\n  .md\\:mx-2 {\n    margin-left: 0.5rem !important;\n    margin-right: 0.5rem !important;\n  }\n  .md\\:mx-3 {\n    margin-left: 1rem !important;\n    margin-right: 1rem !important;\n  }\n  .md\\:mx-4 {\n    margin-left: 1.5rem !important;\n    margin-right: 1.5rem !important;\n  }\n  .md\\:mx-5 {\n    margin-left: 2rem !important;\n    margin-right: 2rem !important;\n  }\n  .md\\:mx-6 {\n    margin-left: 3rem !important;\n    margin-right: 3rem !important;\n  }\n  .md\\:mx-7 {\n    margin-left: 4rem !important;\n    margin-right: 4rem !important;\n  }\n  .md\\:mx-8 {\n    margin-left: 5rem !important;\n    margin-right: 5rem !important;\n  }\n  .md\\:-mx-1 {\n    margin-left: -0.25rem !important;\n    margin-right: -0.25rem !important;\n  }\n  .md\\:-mx-2 {\n    margin-left: -0.5rem !important;\n    margin-right: -0.5rem !important;\n  }\n  .md\\:-mx-3 {\n    margin-left: -1rem !important;\n    margin-right: -1rem !important;\n  }\n  .md\\:-mx-4 {\n    margin-left: -1.5rem !important;\n    margin-right: -1.5rem !important;\n  }\n  .md\\:-mx-5 {\n    margin-left: -2rem !important;\n    margin-right: -2rem !important;\n  }\n  .md\\:-mx-6 {\n    margin-left: -3rem !important;\n    margin-right: -3rem !important;\n  }\n  .md\\:-mx-7 {\n    margin-left: -4rem !important;\n    margin-right: -4rem !important;\n  }\n  .md\\:-mx-8 {\n    margin-left: -5rem !important;\n    margin-right: -5rem !important;\n  }\n  .md\\:mx-auto {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n  .md\\:my-0 {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important;\n  }\n  .md\\:my-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .md\\:my-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .md\\:my-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .md\\:my-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .md\\:my-5 {\n    margin-top: 2rem !important;\n    margin-bottom: 2rem !important;\n  }\n  .md\\:my-6 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .md\\:my-7 {\n    margin-top: 4rem !important;\n    margin-bottom: 4rem !important;\n  }\n  .md\\:my-8 {\n    margin-top: 5rem !important;\n    margin-bottom: 5rem !important;\n  }\n  .md\\:-my-1 {\n    margin-top: -0.25rem !important;\n    margin-bottom: -0.25rem !important;\n  }\n  .md\\:-my-2 {\n    margin-top: -0.5rem !important;\n    margin-bottom: -0.5rem !important;\n  }\n  .md\\:-my-3 {\n    margin-top: -1rem !important;\n    margin-bottom: -1rem !important;\n  }\n  .md\\:-my-4 {\n    margin-top: -1.5rem !important;\n    margin-bottom: -1.5rem !important;\n  }\n  .md\\:-my-5 {\n    margin-top: -2rem !important;\n    margin-bottom: -2rem !important;\n  }\n  .md\\:-my-6 {\n    margin-top: -3rem !important;\n    margin-bottom: -3rem !important;\n  }\n  .md\\:-my-7 {\n    margin-top: -4rem !important;\n    margin-bottom: -4rem !important;\n  }\n  .md\\:-my-8 {\n    margin-top: -5rem !important;\n    margin-bottom: -5rem !important;\n  }\n  .md\\:my-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:m-0 {\n    margin: 0rem !important;\n  }\n  .lg\\:m-1 {\n    margin: 0.25rem !important;\n  }\n  .lg\\:m-2 {\n    margin: 0.5rem !important;\n  }\n  .lg\\:m-3 {\n    margin: 1rem !important;\n  }\n  .lg\\:m-4 {\n    margin: 1.5rem !important;\n  }\n  .lg\\:m-5 {\n    margin: 2rem !important;\n  }\n  .lg\\:m-6 {\n    margin: 3rem !important;\n  }\n  .lg\\:m-7 {\n    margin: 4rem !important;\n  }\n  .lg\\:m-8 {\n    margin: 5rem !important;\n  }\n  .lg\\:-m-1 {\n    margin: -0.25rem !important;\n  }\n  .lg\\:-m-2 {\n    margin: -0.5rem !important;\n  }\n  .lg\\:-m-3 {\n    margin: -1rem !important;\n  }\n  .lg\\:-m-4 {\n    margin: -1.5rem !important;\n  }\n  .lg\\:-m-5 {\n    margin: -2rem !important;\n  }\n  .lg\\:-m-6 {\n    margin: -3rem !important;\n  }\n  .lg\\:-m-7 {\n    margin: -4rem !important;\n  }\n  .lg\\:-m-8 {\n    margin: -5rem !important;\n  }\n  .lg\\:m-auto {\n    margin: auto !important;\n  }\n  .lg\\:mt-0 {\n    margin-top: 0rem !important;\n  }\n  .lg\\:mt-1 {\n    margin-top: 0.25rem !important;\n  }\n  .lg\\:mt-2 {\n    margin-top: 0.5rem !important;\n  }\n  .lg\\:mt-3 {\n    margin-top: 1rem !important;\n  }\n  .lg\\:mt-4 {\n    margin-top: 1.5rem !important;\n  }\n  .lg\\:mt-5 {\n    margin-top: 2rem !important;\n  }\n  .lg\\:mt-6 {\n    margin-top: 3rem !important;\n  }\n  .lg\\:mt-7 {\n    margin-top: 4rem !important;\n  }\n  .lg\\:mt-8 {\n    margin-top: 5rem !important;\n  }\n  .lg\\:-mt-1 {\n    margin-top: -0.25rem !important;\n  }\n  .lg\\:-mt-2 {\n    margin-top: -0.5rem !important;\n  }\n  .lg\\:-mt-3 {\n    margin-top: -1rem !important;\n  }\n  .lg\\:-mt-4 {\n    margin-top: -1.5rem !important;\n  }\n  .lg\\:-mt-5 {\n    margin-top: -2rem !important;\n  }\n  .lg\\:-mt-6 {\n    margin-top: -3rem !important;\n  }\n  .lg\\:-mt-7 {\n    margin-top: -4rem !important;\n  }\n  .lg\\:-mt-8 {\n    margin-top: -5rem !important;\n  }\n  .lg\\:mt-auto {\n    margin-top: auto !important;\n  }\n  .lg\\:mr-0 {\n    margin-right: 0rem !important;\n  }\n  .lg\\:mr-1 {\n    margin-right: 0.25rem !important;\n  }\n  .lg\\:mr-2 {\n    margin-right: 0.5rem !important;\n  }\n  .lg\\:mr-3 {\n    margin-right: 1rem !important;\n  }\n  .lg\\:mr-4 {\n    margin-right: 1.5rem !important;\n  }\n  .lg\\:mr-5 {\n    margin-right: 2rem !important;\n  }\n  .lg\\:mr-6 {\n    margin-right: 3rem !important;\n  }\n  .lg\\:mr-7 {\n    margin-right: 4rem !important;\n  }\n  .lg\\:mr-8 {\n    margin-right: 5rem !important;\n  }\n  .lg\\:-mr-1 {\n    margin-right: -0.25rem !important;\n  }\n  .lg\\:-mr-2 {\n    margin-right: -0.5rem !important;\n  }\n  .lg\\:-mr-3 {\n    margin-right: -1rem !important;\n  }\n  .lg\\:-mr-4 {\n    margin-right: -1.5rem !important;\n  }\n  .lg\\:-mr-5 {\n    margin-right: -2rem !important;\n  }\n  .lg\\:-mr-6 {\n    margin-right: -3rem !important;\n  }\n  .lg\\:-mr-7 {\n    margin-right: -4rem !important;\n  }\n  .lg\\:-mr-8 {\n    margin-right: -5rem !important;\n  }\n  .lg\\:mr-auto {\n    margin-right: auto !important;\n  }\n  .lg\\:ml-0 {\n    margin-left: 0rem !important;\n  }\n  .lg\\:ml-1 {\n    margin-left: 0.25rem !important;\n  }\n  .lg\\:ml-2 {\n    margin-left: 0.5rem !important;\n  }\n  .lg\\:ml-3 {\n    margin-left: 1rem !important;\n  }\n  .lg\\:ml-4 {\n    margin-left: 1.5rem !important;\n  }\n  .lg\\:ml-5 {\n    margin-left: 2rem !important;\n  }\n  .lg\\:ml-6 {\n    margin-left: 3rem !important;\n  }\n  .lg\\:ml-7 {\n    margin-left: 4rem !important;\n  }\n  .lg\\:ml-8 {\n    margin-left: 5rem !important;\n  }\n  .lg\\:-ml-1 {\n    margin-left: -0.25rem !important;\n  }\n  .lg\\:-ml-2 {\n    margin-left: -0.5rem !important;\n  }\n  .lg\\:-ml-3 {\n    margin-left: -1rem !important;\n  }\n  .lg\\:-ml-4 {\n    margin-left: -1.5rem !important;\n  }\n  .lg\\:-ml-5 {\n    margin-left: -2rem !important;\n  }\n  .lg\\:-ml-6 {\n    margin-left: -3rem !important;\n  }\n  .lg\\:-ml-7 {\n    margin-left: -4rem !important;\n  }\n  .lg\\:-ml-8 {\n    margin-left: -5rem !important;\n  }\n  .lg\\:ml-auto {\n    margin-left: auto !important;\n  }\n  .lg\\:mb-0 {\n    margin-bottom: 0rem !important;\n  }\n  .lg\\:mb-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .lg\\:mb-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .lg\\:mb-3 {\n    margin-bottom: 1rem !important;\n  }\n  .lg\\:mb-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .lg\\:mb-5 {\n    margin-bottom: 2rem !important;\n  }\n  .lg\\:mb-6 {\n    margin-bottom: 3rem !important;\n  }\n  .lg\\:mb-7 {\n    margin-bottom: 4rem !important;\n  }\n  .lg\\:mb-8 {\n    margin-bottom: 5rem !important;\n  }\n  .lg\\:-mb-1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .lg\\:-mb-2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .lg\\:-mb-3 {\n    margin-bottom: -1rem !important;\n  }\n  .lg\\:-mb-4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .lg\\:-mb-5 {\n    margin-bottom: -2rem !important;\n  }\n  .lg\\:-mb-6 {\n    margin-bottom: -3rem !important;\n  }\n  .lg\\:-mb-7 {\n    margin-bottom: -4rem !important;\n  }\n  .lg\\:-mb-8 {\n    margin-bottom: -5rem !important;\n  }\n  .lg\\:mb-auto {\n    margin-bottom: auto !important;\n  }\n  .lg\\:mx-0 {\n    margin-left: 0rem !important;\n    margin-right: 0rem !important;\n  }\n  .lg\\:mx-1 {\n    margin-left: 0.25rem !important;\n    margin-right: 0.25rem !important;\n  }\n  .lg\\:mx-2 {\n    margin-left: 0.5rem !important;\n    margin-right: 0.5rem !important;\n  }\n  .lg\\:mx-3 {\n    margin-left: 1rem !important;\n    margin-right: 1rem !important;\n  }\n  .lg\\:mx-4 {\n    margin-left: 1.5rem !important;\n    margin-right: 1.5rem !important;\n  }\n  .lg\\:mx-5 {\n    margin-left: 2rem !important;\n    margin-right: 2rem !important;\n  }\n  .lg\\:mx-6 {\n    margin-left: 3rem !important;\n    margin-right: 3rem !important;\n  }\n  .lg\\:mx-7 {\n    margin-left: 4rem !important;\n    margin-right: 4rem !important;\n  }\n  .lg\\:mx-8 {\n    margin-left: 5rem !important;\n    margin-right: 5rem !important;\n  }\n  .lg\\:-mx-1 {\n    margin-left: -0.25rem !important;\n    margin-right: -0.25rem !important;\n  }\n  .lg\\:-mx-2 {\n    margin-left: -0.5rem !important;\n    margin-right: -0.5rem !important;\n  }\n  .lg\\:-mx-3 {\n    margin-left: -1rem !important;\n    margin-right: -1rem !important;\n  }\n  .lg\\:-mx-4 {\n    margin-left: -1.5rem !important;\n    margin-right: -1.5rem !important;\n  }\n  .lg\\:-mx-5 {\n    margin-left: -2rem !important;\n    margin-right: -2rem !important;\n  }\n  .lg\\:-mx-6 {\n    margin-left: -3rem !important;\n    margin-right: -3rem !important;\n  }\n  .lg\\:-mx-7 {\n    margin-left: -4rem !important;\n    margin-right: -4rem !important;\n  }\n  .lg\\:-mx-8 {\n    margin-left: -5rem !important;\n    margin-right: -5rem !important;\n  }\n  .lg\\:mx-auto {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n  .lg\\:my-0 {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important;\n  }\n  .lg\\:my-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .lg\\:my-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .lg\\:my-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .lg\\:my-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .lg\\:my-5 {\n    margin-top: 2rem !important;\n    margin-bottom: 2rem !important;\n  }\n  .lg\\:my-6 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .lg\\:my-7 {\n    margin-top: 4rem !important;\n    margin-bottom: 4rem !important;\n  }\n  .lg\\:my-8 {\n    margin-top: 5rem !important;\n    margin-bottom: 5rem !important;\n  }\n  .lg\\:-my-1 {\n    margin-top: -0.25rem !important;\n    margin-bottom: -0.25rem !important;\n  }\n  .lg\\:-my-2 {\n    margin-top: -0.5rem !important;\n    margin-bottom: -0.5rem !important;\n  }\n  .lg\\:-my-3 {\n    margin-top: -1rem !important;\n    margin-bottom: -1rem !important;\n  }\n  .lg\\:-my-4 {\n    margin-top: -1.5rem !important;\n    margin-bottom: -1.5rem !important;\n  }\n  .lg\\:-my-5 {\n    margin-top: -2rem !important;\n    margin-bottom: -2rem !important;\n  }\n  .lg\\:-my-6 {\n    margin-top: -3rem !important;\n    margin-bottom: -3rem !important;\n  }\n  .lg\\:-my-7 {\n    margin-top: -4rem !important;\n    margin-bottom: -4rem !important;\n  }\n  .lg\\:-my-8 {\n    margin-top: -5rem !important;\n    margin-bottom: -5rem !important;\n  }\n  .lg\\:my-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:m-0 {\n    margin: 0rem !important;\n  }\n  .xl\\:m-1 {\n    margin: 0.25rem !important;\n  }\n  .xl\\:m-2 {\n    margin: 0.5rem !important;\n  }\n  .xl\\:m-3 {\n    margin: 1rem !important;\n  }\n  .xl\\:m-4 {\n    margin: 1.5rem !important;\n  }\n  .xl\\:m-5 {\n    margin: 2rem !important;\n  }\n  .xl\\:m-6 {\n    margin: 3rem !important;\n  }\n  .xl\\:m-7 {\n    margin: 4rem !important;\n  }\n  .xl\\:m-8 {\n    margin: 5rem !important;\n  }\n  .xl\\:-m-1 {\n    margin: -0.25rem !important;\n  }\n  .xl\\:-m-2 {\n    margin: -0.5rem !important;\n  }\n  .xl\\:-m-3 {\n    margin: -1rem !important;\n  }\n  .xl\\:-m-4 {\n    margin: -1.5rem !important;\n  }\n  .xl\\:-m-5 {\n    margin: -2rem !important;\n  }\n  .xl\\:-m-6 {\n    margin: -3rem !important;\n  }\n  .xl\\:-m-7 {\n    margin: -4rem !important;\n  }\n  .xl\\:-m-8 {\n    margin: -5rem !important;\n  }\n  .xl\\:m-auto {\n    margin: auto !important;\n  }\n  .xl\\:mt-0 {\n    margin-top: 0rem !important;\n  }\n  .xl\\:mt-1 {\n    margin-top: 0.25rem !important;\n  }\n  .xl\\:mt-2 {\n    margin-top: 0.5rem !important;\n  }\n  .xl\\:mt-3 {\n    margin-top: 1rem !important;\n  }\n  .xl\\:mt-4 {\n    margin-top: 1.5rem !important;\n  }\n  .xl\\:mt-5 {\n    margin-top: 2rem !important;\n  }\n  .xl\\:mt-6 {\n    margin-top: 3rem !important;\n  }\n  .xl\\:mt-7 {\n    margin-top: 4rem !important;\n  }\n  .xl\\:mt-8 {\n    margin-top: 5rem !important;\n  }\n  .xl\\:-mt-1 {\n    margin-top: -0.25rem !important;\n  }\n  .xl\\:-mt-2 {\n    margin-top: -0.5rem !important;\n  }\n  .xl\\:-mt-3 {\n    margin-top: -1rem !important;\n  }\n  .xl\\:-mt-4 {\n    margin-top: -1.5rem !important;\n  }\n  .xl\\:-mt-5 {\n    margin-top: -2rem !important;\n  }\n  .xl\\:-mt-6 {\n    margin-top: -3rem !important;\n  }\n  .xl\\:-mt-7 {\n    margin-top: -4rem !important;\n  }\n  .xl\\:-mt-8 {\n    margin-top: -5rem !important;\n  }\n  .xl\\:mt-auto {\n    margin-top: auto !important;\n  }\n  .xl\\:mr-0 {\n    margin-right: 0rem !important;\n  }\n  .xl\\:mr-1 {\n    margin-right: 0.25rem !important;\n  }\n  .xl\\:mr-2 {\n    margin-right: 0.5rem !important;\n  }\n  .xl\\:mr-3 {\n    margin-right: 1rem !important;\n  }\n  .xl\\:mr-4 {\n    margin-right: 1.5rem !important;\n  }\n  .xl\\:mr-5 {\n    margin-right: 2rem !important;\n  }\n  .xl\\:mr-6 {\n    margin-right: 3rem !important;\n  }\n  .xl\\:mr-7 {\n    margin-right: 4rem !important;\n  }\n  .xl\\:mr-8 {\n    margin-right: 5rem !important;\n  }\n  .xl\\:-mr-1 {\n    margin-right: -0.25rem !important;\n  }\n  .xl\\:-mr-2 {\n    margin-right: -0.5rem !important;\n  }\n  .xl\\:-mr-3 {\n    margin-right: -1rem !important;\n  }\n  .xl\\:-mr-4 {\n    margin-right: -1.5rem !important;\n  }\n  .xl\\:-mr-5 {\n    margin-right: -2rem !important;\n  }\n  .xl\\:-mr-6 {\n    margin-right: -3rem !important;\n  }\n  .xl\\:-mr-7 {\n    margin-right: -4rem !important;\n  }\n  .xl\\:-mr-8 {\n    margin-right: -5rem !important;\n  }\n  .xl\\:mr-auto {\n    margin-right: auto !important;\n  }\n  .xl\\:ml-0 {\n    margin-left: 0rem !important;\n  }\n  .xl\\:ml-1 {\n    margin-left: 0.25rem !important;\n  }\n  .xl\\:ml-2 {\n    margin-left: 0.5rem !important;\n  }\n  .xl\\:ml-3 {\n    margin-left: 1rem !important;\n  }\n  .xl\\:ml-4 {\n    margin-left: 1.5rem !important;\n  }\n  .xl\\:ml-5 {\n    margin-left: 2rem !important;\n  }\n  .xl\\:ml-6 {\n    margin-left: 3rem !important;\n  }\n  .xl\\:ml-7 {\n    margin-left: 4rem !important;\n  }\n  .xl\\:ml-8 {\n    margin-left: 5rem !important;\n  }\n  .xl\\:-ml-1 {\n    margin-left: -0.25rem !important;\n  }\n  .xl\\:-ml-2 {\n    margin-left: -0.5rem !important;\n  }\n  .xl\\:-ml-3 {\n    margin-left: -1rem !important;\n  }\n  .xl\\:-ml-4 {\n    margin-left: -1.5rem !important;\n  }\n  .xl\\:-ml-5 {\n    margin-left: -2rem !important;\n  }\n  .xl\\:-ml-6 {\n    margin-left: -3rem !important;\n  }\n  .xl\\:-ml-7 {\n    margin-left: -4rem !important;\n  }\n  .xl\\:-ml-8 {\n    margin-left: -5rem !important;\n  }\n  .xl\\:ml-auto {\n    margin-left: auto !important;\n  }\n  .xl\\:mb-0 {\n    margin-bottom: 0rem !important;\n  }\n  .xl\\:mb-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .xl\\:mb-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .xl\\:mb-3 {\n    margin-bottom: 1rem !important;\n  }\n  .xl\\:mb-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .xl\\:mb-5 {\n    margin-bottom: 2rem !important;\n  }\n  .xl\\:mb-6 {\n    margin-bottom: 3rem !important;\n  }\n  .xl\\:mb-7 {\n    margin-bottom: 4rem !important;\n  }\n  .xl\\:mb-8 {\n    margin-bottom: 5rem !important;\n  }\n  .xl\\:-mb-1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .xl\\:-mb-2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .xl\\:-mb-3 {\n    margin-bottom: -1rem !important;\n  }\n  .xl\\:-mb-4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .xl\\:-mb-5 {\n    margin-bottom: -2rem !important;\n  }\n  .xl\\:-mb-6 {\n    margin-bottom: -3rem !important;\n  }\n  .xl\\:-mb-7 {\n    margin-bottom: -4rem !important;\n  }\n  .xl\\:-mb-8 {\n    margin-bottom: -5rem !important;\n  }\n  .xl\\:mb-auto {\n    margin-bottom: auto !important;\n  }\n  .xl\\:mx-0 {\n    margin-left: 0rem !important;\n    margin-right: 0rem !important;\n  }\n  .xl\\:mx-1 {\n    margin-left: 0.25rem !important;\n    margin-right: 0.25rem !important;\n  }\n  .xl\\:mx-2 {\n    margin-left: 0.5rem !important;\n    margin-right: 0.5rem !important;\n  }\n  .xl\\:mx-3 {\n    margin-left: 1rem !important;\n    margin-right: 1rem !important;\n  }\n  .xl\\:mx-4 {\n    margin-left: 1.5rem !important;\n    margin-right: 1.5rem !important;\n  }\n  .xl\\:mx-5 {\n    margin-left: 2rem !important;\n    margin-right: 2rem !important;\n  }\n  .xl\\:mx-6 {\n    margin-left: 3rem !important;\n    margin-right: 3rem !important;\n  }\n  .xl\\:mx-7 {\n    margin-left: 4rem !important;\n    margin-right: 4rem !important;\n  }\n  .xl\\:mx-8 {\n    margin-left: 5rem !important;\n    margin-right: 5rem !important;\n  }\n  .xl\\:-mx-1 {\n    margin-left: -0.25rem !important;\n    margin-right: -0.25rem !important;\n  }\n  .xl\\:-mx-2 {\n    margin-left: -0.5rem !important;\n    margin-right: -0.5rem !important;\n  }\n  .xl\\:-mx-3 {\n    margin-left: -1rem !important;\n    margin-right: -1rem !important;\n  }\n  .xl\\:-mx-4 {\n    margin-left: -1.5rem !important;\n    margin-right: -1.5rem !important;\n  }\n  .xl\\:-mx-5 {\n    margin-left: -2rem !important;\n    margin-right: -2rem !important;\n  }\n  .xl\\:-mx-6 {\n    margin-left: -3rem !important;\n    margin-right: -3rem !important;\n  }\n  .xl\\:-mx-7 {\n    margin-left: -4rem !important;\n    margin-right: -4rem !important;\n  }\n  .xl\\:-mx-8 {\n    margin-left: -5rem !important;\n    margin-right: -5rem !important;\n  }\n  .xl\\:mx-auto {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n  .xl\\:my-0 {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important;\n  }\n  .xl\\:my-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .xl\\:my-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .xl\\:my-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .xl\\:my-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .xl\\:my-5 {\n    margin-top: 2rem !important;\n    margin-bottom: 2rem !important;\n  }\n  .xl\\:my-6 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .xl\\:my-7 {\n    margin-top: 4rem !important;\n    margin-bottom: 4rem !important;\n  }\n  .xl\\:my-8 {\n    margin-top: 5rem !important;\n    margin-bottom: 5rem !important;\n  }\n  .xl\\:-my-1 {\n    margin-top: -0.25rem !important;\n    margin-bottom: -0.25rem !important;\n  }\n  .xl\\:-my-2 {\n    margin-top: -0.5rem !important;\n    margin-bottom: -0.5rem !important;\n  }\n  .xl\\:-my-3 {\n    margin-top: -1rem !important;\n    margin-bottom: -1rem !important;\n  }\n  .xl\\:-my-4 {\n    margin-top: -1.5rem !important;\n    margin-bottom: -1.5rem !important;\n  }\n  .xl\\:-my-5 {\n    margin-top: -2rem !important;\n    margin-bottom: -2rem !important;\n  }\n  .xl\\:-my-6 {\n    margin-top: -3rem !important;\n    margin-bottom: -3rem !important;\n  }\n  .xl\\:-my-7 {\n    margin-top: -4rem !important;\n    margin-bottom: -4rem !important;\n  }\n  .xl\\:-my-8 {\n    margin-top: -5rem !important;\n    margin-bottom: -5rem !important;\n  }\n  .xl\\:my-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n}\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.shadow-1 {\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n}\n\n.shadow-2 {\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n}\n\n.shadow-3 {\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n}\n\n.shadow-4 {\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n}\n\n.shadow-5 {\n  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n}\n\n.shadow-6 {\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n}\n\n.shadow-7 {\n  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-8 {\n  box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n}\n\n.focus\\:shadow-none:focus {\n  box-shadow: none !important;\n}\n\n.hover\\:shadow-none:hover {\n  box-shadow: none !important;\n}\n\n.active\\:shadow-none:active {\n  box-shadow: none !important;\n}\n\n.focus\\:shadow-1:focus {\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n}\n\n.hover\\:shadow-1:hover {\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n}\n\n.active\\:shadow-1:active {\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n}\n\n.focus\\:shadow-2:focus {\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n}\n\n.hover\\:shadow-2:hover {\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n}\n\n.active\\:shadow-2:active {\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n}\n\n.focus\\:shadow-3:focus {\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n}\n\n.hover\\:shadow-3:hover {\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n}\n\n.active\\:shadow-3:active {\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n}\n\n.focus\\:shadow-4:focus {\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n}\n\n.hover\\:shadow-4:hover {\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n}\n\n.active\\:shadow-4:active {\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n}\n\n.focus\\:shadow-5:focus {\n  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n}\n\n.hover\\:shadow-5:hover {\n  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n}\n\n.active\\:shadow-5:active {\n  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n}\n\n.focus\\:shadow-6:focus {\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n}\n\n.hover\\:shadow-6:hover {\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n}\n\n.active\\:shadow-6:active {\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n}\n\n.focus\\:shadow-7:focus {\n  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n}\n\n.hover\\:shadow-7:hover {\n  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n}\n\n.active\\:shadow-7:active {\n  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n}\n\n.focus\\:shadow-8:focus {\n  box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n}\n\n.hover\\:shadow-8:hover {\n  box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n}\n\n.active\\:shadow-8:active {\n  box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:shadow-none {\n    box-shadow: none !important;\n  }\n  .sm\\:shadow-1 {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .sm\\:shadow-2 {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .sm\\:shadow-3 {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .sm\\:shadow-4 {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:shadow-5 {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:shadow-6 {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .sm\\:shadow-7 {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .sm\\:shadow-8 {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:focus\\:shadow-none:focus {\n    box-shadow: none !important;\n  }\n  .sm\\:hover\\:shadow-none:hover {\n    box-shadow: none !important;\n  }\n  .sm\\:active\\:shadow-none:active {\n    box-shadow: none !important;\n  }\n  .sm\\:focus\\:shadow-1:focus {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .sm\\:hover\\:shadow-1:hover {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .sm\\:active\\:shadow-1:active {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .sm\\:focus\\:shadow-2:focus {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .sm\\:hover\\:shadow-2:hover {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .sm\\:active\\:shadow-2:active {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .sm\\:focus\\:shadow-3:focus {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .sm\\:hover\\:shadow-3:hover {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .sm\\:active\\:shadow-3:active {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .sm\\:focus\\:shadow-4:focus {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:hover\\:shadow-4:hover {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:active\\:shadow-4:active {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:focus\\:shadow-5:focus {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:hover\\:shadow-5:hover {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:active\\:shadow-5:active {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:focus\\:shadow-6:focus {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .sm\\:hover\\:shadow-6:hover {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .sm\\:active\\:shadow-6:active {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .sm\\:focus\\:shadow-7:focus {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .sm\\:hover\\:shadow-7:hover {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .sm\\:active\\:shadow-7:active {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .sm\\:focus\\:shadow-8:focus {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:hover\\:shadow-8:hover {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .sm\\:active\\:shadow-8:active {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:shadow-none {\n    box-shadow: none !important;\n  }\n  .md\\:shadow-1 {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .md\\:shadow-2 {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .md\\:shadow-3 {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .md\\:shadow-4 {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:shadow-5 {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:shadow-6 {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .md\\:shadow-7 {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .md\\:shadow-8 {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:focus\\:shadow-none:focus {\n    box-shadow: none !important;\n  }\n  .md\\:hover\\:shadow-none:hover {\n    box-shadow: none !important;\n  }\n  .md\\:active\\:shadow-none:active {\n    box-shadow: none !important;\n  }\n  .md\\:focus\\:shadow-1:focus {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .md\\:hover\\:shadow-1:hover {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .md\\:active\\:shadow-1:active {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .md\\:focus\\:shadow-2:focus {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .md\\:hover\\:shadow-2:hover {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .md\\:active\\:shadow-2:active {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .md\\:focus\\:shadow-3:focus {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .md\\:hover\\:shadow-3:hover {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .md\\:active\\:shadow-3:active {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .md\\:focus\\:shadow-4:focus {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:hover\\:shadow-4:hover {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:active\\:shadow-4:active {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:focus\\:shadow-5:focus {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:hover\\:shadow-5:hover {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:active\\:shadow-5:active {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:focus\\:shadow-6:focus {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .md\\:hover\\:shadow-6:hover {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .md\\:active\\:shadow-6:active {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .md\\:focus\\:shadow-7:focus {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .md\\:hover\\:shadow-7:hover {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .md\\:active\\:shadow-7:active {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .md\\:focus\\:shadow-8:focus {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:hover\\:shadow-8:hover {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .md\\:active\\:shadow-8:active {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:shadow-none {\n    box-shadow: none !important;\n  }\n  .lg\\:shadow-1 {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .lg\\:shadow-2 {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .lg\\:shadow-3 {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .lg\\:shadow-4 {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:shadow-5 {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:shadow-6 {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .lg\\:shadow-7 {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .lg\\:shadow-8 {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:focus\\:shadow-none:focus {\n    box-shadow: none !important;\n  }\n  .lg\\:hover\\:shadow-none:hover {\n    box-shadow: none !important;\n  }\n  .lg\\:active\\:shadow-none:active {\n    box-shadow: none !important;\n  }\n  .lg\\:focus\\:shadow-1:focus {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .lg\\:hover\\:shadow-1:hover {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .lg\\:active\\:shadow-1:active {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .lg\\:focus\\:shadow-2:focus {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .lg\\:hover\\:shadow-2:hover {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .lg\\:active\\:shadow-2:active {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .lg\\:focus\\:shadow-3:focus {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .lg\\:hover\\:shadow-3:hover {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .lg\\:active\\:shadow-3:active {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .lg\\:focus\\:shadow-4:focus {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:hover\\:shadow-4:hover {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:active\\:shadow-4:active {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:focus\\:shadow-5:focus {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:hover\\:shadow-5:hover {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:active\\:shadow-5:active {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:focus\\:shadow-6:focus {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .lg\\:hover\\:shadow-6:hover {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .lg\\:active\\:shadow-6:active {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .lg\\:focus\\:shadow-7:focus {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .lg\\:hover\\:shadow-7:hover {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .lg\\:active\\:shadow-7:active {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .lg\\:focus\\:shadow-8:focus {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:hover\\:shadow-8:hover {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .lg\\:active\\:shadow-8:active {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:shadow-none {\n    box-shadow: none !important;\n  }\n  .xl\\:shadow-1 {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .xl\\:shadow-2 {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .xl\\:shadow-3 {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .xl\\:shadow-4 {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:shadow-5 {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:shadow-6 {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .xl\\:shadow-7 {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .xl\\:shadow-8 {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:focus\\:shadow-none:focus {\n    box-shadow: none !important;\n  }\n  .xl\\:hover\\:shadow-none:hover {\n    box-shadow: none !important;\n  }\n  .xl\\:active\\:shadow-none:active {\n    box-shadow: none !important;\n  }\n  .xl\\:focus\\:shadow-1:focus {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .xl\\:hover\\:shadow-1:hover {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .xl\\:active\\:shadow-1:active {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  }\n  .xl\\:focus\\:shadow-2:focus {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .xl\\:hover\\:shadow-2:hover {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .xl\\:active\\:shadow-2:active {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12) !important;\n  }\n  .xl\\:focus\\:shadow-3:focus {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .xl\\:hover\\:shadow-3:hover {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .xl\\:active\\:shadow-3:active {\n    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1) !important;\n  }\n  .xl\\:focus\\:shadow-4:focus {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:hover\\:shadow-4:hover {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:active\\:shadow-4:active {\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:focus\\:shadow-5:focus {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:hover\\:shadow-5:hover {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:active\\:shadow-5:active {\n    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:focus\\:shadow-6:focus {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .xl\\:hover\\:shadow-6:hover {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .xl\\:active\\:shadow-6:active {\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18) !important;\n  }\n  .xl\\:focus\\:shadow-7:focus {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .xl\\:hover\\:shadow-7:hover {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .xl\\:active\\:shadow-7:active {\n    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15) !important;\n  }\n  .xl\\:focus\\:shadow-8:focus {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:hover\\:shadow-8:hover {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n  .xl\\:active\\:shadow-8:active {\n    box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2) !important;\n  }\n}\n.border-none {\n  border-width: 0px !important;\n  border-style: none;\n}\n\n.border-1 {\n  border-width: 1px !important;\n  border-style: solid;\n}\n\n.border-2 {\n  border-width: 2px !important;\n  border-style: solid;\n}\n\n.border-3 {\n  border-width: 3px !important;\n  border-style: solid;\n}\n\n.border-top-none {\n  border-top-width: 0px !important;\n  border-top-style: none;\n}\n\n.border-top-1 {\n  border-top-width: 1px !important;\n  border-top-style: solid;\n}\n\n.border-top-2 {\n  border-top-width: 2px !important;\n  border-top-style: solid;\n}\n\n.border-top-3 {\n  border-top-width: 3px !important;\n  border-top-style: solid;\n}\n\n.border-right-none {\n  border-right-width: 0px !important;\n  border-right-style: none;\n}\n\n.border-right-1 {\n  border-right-width: 1px !important;\n  border-right-style: solid;\n}\n\n.border-right-2 {\n  border-right-width: 2px !important;\n  border-right-style: solid;\n}\n\n.border-right-3 {\n  border-right-width: 3px !important;\n  border-right-style: solid;\n}\n\n.border-left-none {\n  border-left-width: 0px !important;\n  border-left-style: none;\n}\n\n.border-left-1 {\n  border-left-width: 1px !important;\n  border-left-style: solid;\n}\n\n.border-left-2 {\n  border-left-width: 2px !important;\n  border-left-style: solid;\n}\n\n.border-left-3 {\n  border-left-width: 3px !important;\n  border-left-style: solid;\n}\n\n.border-bottom-none {\n  border-bottom-width: 0px !important;\n  border-bottom-style: none;\n}\n\n.border-bottom-1 {\n  border-bottom-width: 1px !important;\n  border-bottom-style: solid;\n}\n\n.border-bottom-2 {\n  border-bottom-width: 2px !important;\n  border-bottom-style: solid;\n}\n\n.border-bottom-3 {\n  border-bottom-width: 3px !important;\n  border-bottom-style: solid;\n}\n\n.border-x-none {\n  border-left-width: 0px !important;\n  border-left-style: none;\n  border-right-width: 0px !important;\n  border-right-style: none;\n}\n\n.border-x-1 {\n  border-left-width: 1px !important;\n  border-left-style: solid;\n  border-right-width: 1px !important;\n  border-right-style: solid;\n}\n\n.border-x-2 {\n  border-left-width: 2px !important;\n  border-left-style: solid;\n  border-right-width: 2px !important;\n  border-right-style: solid;\n}\n\n.border-x-3 {\n  border-left-width: 3px !important;\n  border-left-style: solid;\n  border-right-width: 3px !important;\n  border-right-style: solid;\n}\n\n.border-y-none {\n  border-top-width: 0px !important;\n  border-top-style: none;\n  border-bottom-width: 0px !important;\n  border-bottom-style: none;\n}\n\n.border-y-1 {\n  border-top-width: 1px !important;\n  border-top-style: solid;\n  border-bottom-width: 1px !important;\n  border-bottom-style: solid;\n}\n\n.border-y-2 {\n  border-top-width: 2px !important;\n  border-top-style: solid;\n  border-bottom-width: 2px !important;\n  border-bottom-style: solid;\n}\n\n.border-y-3 {\n  border-top-width: 3px !important;\n  border-top-style: solid;\n  border-bottom-width: 3px !important;\n  border-bottom-style: solid;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:border-none {\n    border-width: 0px !important;\n    border-style: none;\n  }\n  .sm\\:border-1 {\n    border-width: 1px !important;\n    border-style: solid;\n  }\n  .sm\\:border-2 {\n    border-width: 2px !important;\n    border-style: solid;\n  }\n  .sm\\:border-3 {\n    border-width: 3px !important;\n    border-style: solid;\n  }\n  .sm\\:border-top-none {\n    border-top-width: 0px !important;\n    border-top-style: none;\n  }\n  .sm\\:border-top-1 {\n    border-top-width: 1px !important;\n    border-top-style: solid;\n  }\n  .sm\\:border-top-2 {\n    border-top-width: 2px !important;\n    border-top-style: solid;\n  }\n  .sm\\:border-top-3 {\n    border-top-width: 3px !important;\n    border-top-style: solid;\n  }\n  .sm\\:border-right-none {\n    border-right-width: 0px !important;\n    border-right-style: none;\n  }\n  .sm\\:border-right-1 {\n    border-right-width: 1px !important;\n    border-right-style: solid;\n  }\n  .sm\\:border-right-2 {\n    border-right-width: 2px !important;\n    border-right-style: solid;\n  }\n  .sm\\:border-right-3 {\n    border-right-width: 3px !important;\n    border-right-style: solid;\n  }\n  .sm\\:border-left-none {\n    border-left-width: 0px !important;\n    border-left-style: none;\n  }\n  .sm\\:border-left-1 {\n    border-left-width: 1px !important;\n    border-left-style: solid;\n  }\n  .sm\\:border-left-2 {\n    border-left-width: 2px !important;\n    border-left-style: solid;\n  }\n  .sm\\:border-left-3 {\n    border-left-width: 3px !important;\n    border-left-style: solid;\n  }\n  .sm\\:border-bottom-none {\n    border-bottom-width: 0px !important;\n    border-bottom-style: none;\n  }\n  .sm\\:border-bottom-1 {\n    border-bottom-width: 1px !important;\n    border-bottom-style: solid;\n  }\n  .sm\\:border-bottom-2 {\n    border-bottom-width: 2px !important;\n    border-bottom-style: solid;\n  }\n  .sm\\:border-bottom-3 {\n    border-bottom-width: 3px !important;\n    border-bottom-style: solid;\n  }\n  .sm\\:border-x-none {\n    border-left-width: 0px !important;\n    border-left-style: none;\n    border-right-width: 0px !important;\n    border-right-style: none;\n  }\n  .sm\\:border-x-1 {\n    border-left-width: 1px !important;\n    border-left-style: solid;\n    border-right-width: 1px !important;\n    border-right-style: solid;\n  }\n  .sm\\:border-x-2 {\n    border-left-width: 2px !important;\n    border-left-style: solid;\n    border-right-width: 2px !important;\n    border-right-style: solid;\n  }\n  .sm\\:border-x-3 {\n    border-left-width: 3px !important;\n    border-left-style: solid;\n    border-right-width: 3px !important;\n    border-right-style: solid;\n  }\n  .sm\\:border-y-none {\n    border-top-width: 0px !important;\n    border-top-style: none;\n    border-bottom-width: 0px !important;\n    border-bottom-style: none;\n  }\n  .sm\\:border-y-1 {\n    border-top-width: 1px !important;\n    border-top-style: solid;\n    border-bottom-width: 1px !important;\n    border-bottom-style: solid;\n  }\n  .sm\\:border-y-2 {\n    border-top-width: 2px !important;\n    border-top-style: solid;\n    border-bottom-width: 2px !important;\n    border-bottom-style: solid;\n  }\n  .sm\\:border-y-3 {\n    border-top-width: 3px !important;\n    border-top-style: solid;\n    border-bottom-width: 3px !important;\n    border-bottom-style: solid;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:border-none {\n    border-width: 0px !important;\n    border-style: none;\n  }\n  .md\\:border-1 {\n    border-width: 1px !important;\n    border-style: solid;\n  }\n  .md\\:border-2 {\n    border-width: 2px !important;\n    border-style: solid;\n  }\n  .md\\:border-3 {\n    border-width: 3px !important;\n    border-style: solid;\n  }\n  .md\\:border-top-none {\n    border-top-width: 0px !important;\n    border-top-style: none;\n  }\n  .md\\:border-top-1 {\n    border-top-width: 1px !important;\n    border-top-style: solid;\n  }\n  .md\\:border-top-2 {\n    border-top-width: 2px !important;\n    border-top-style: solid;\n  }\n  .md\\:border-top-3 {\n    border-top-width: 3px !important;\n    border-top-style: solid;\n  }\n  .md\\:border-right-none {\n    border-right-width: 0px !important;\n    border-right-style: none;\n  }\n  .md\\:border-right-1 {\n    border-right-width: 1px !important;\n    border-right-style: solid;\n  }\n  .md\\:border-right-2 {\n    border-right-width: 2px !important;\n    border-right-style: solid;\n  }\n  .md\\:border-right-3 {\n    border-right-width: 3px !important;\n    border-right-style: solid;\n  }\n  .md\\:border-left-none {\n    border-left-width: 0px !important;\n    border-left-style: none;\n  }\n  .md\\:border-left-1 {\n    border-left-width: 1px !important;\n    border-left-style: solid;\n  }\n  .md\\:border-left-2 {\n    border-left-width: 2px !important;\n    border-left-style: solid;\n  }\n  .md\\:border-left-3 {\n    border-left-width: 3px !important;\n    border-left-style: solid;\n  }\n  .md\\:border-bottom-none {\n    border-bottom-width: 0px !important;\n    border-bottom-style: none;\n  }\n  .md\\:border-bottom-1 {\n    border-bottom-width: 1px !important;\n    border-bottom-style: solid;\n  }\n  .md\\:border-bottom-2 {\n    border-bottom-width: 2px !important;\n    border-bottom-style: solid;\n  }\n  .md\\:border-bottom-3 {\n    border-bottom-width: 3px !important;\n    border-bottom-style: solid;\n  }\n  .md\\:border-x-none {\n    border-left-width: 0px !important;\n    border-left-style: none;\n    border-right-width: 0px !important;\n    border-right-style: none;\n  }\n  .md\\:border-x-1 {\n    border-left-width: 1px !important;\n    border-left-style: solid;\n    border-right-width: 1px !important;\n    border-right-style: solid;\n  }\n  .md\\:border-x-2 {\n    border-left-width: 2px !important;\n    border-left-style: solid;\n    border-right-width: 2px !important;\n    border-right-style: solid;\n  }\n  .md\\:border-x-3 {\n    border-left-width: 3px !important;\n    border-left-style: solid;\n    border-right-width: 3px !important;\n    border-right-style: solid;\n  }\n  .md\\:border-y-none {\n    border-top-width: 0px !important;\n    border-top-style: none;\n    border-bottom-width: 0px !important;\n    border-bottom-style: none;\n  }\n  .md\\:border-y-1 {\n    border-top-width: 1px !important;\n    border-top-style: solid;\n    border-bottom-width: 1px !important;\n    border-bottom-style: solid;\n  }\n  .md\\:border-y-2 {\n    border-top-width: 2px !important;\n    border-top-style: solid;\n    border-bottom-width: 2px !important;\n    border-bottom-style: solid;\n  }\n  .md\\:border-y-3 {\n    border-top-width: 3px !important;\n    border-top-style: solid;\n    border-bottom-width: 3px !important;\n    border-bottom-style: solid;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:border-none {\n    border-width: 0px !important;\n    border-style: none;\n  }\n  .lg\\:border-1 {\n    border-width: 1px !important;\n    border-style: solid;\n  }\n  .lg\\:border-2 {\n    border-width: 2px !important;\n    border-style: solid;\n  }\n  .lg\\:border-3 {\n    border-width: 3px !important;\n    border-style: solid;\n  }\n  .lg\\:border-top-none {\n    border-top-width: 0px !important;\n    border-top-style: none;\n  }\n  .lg\\:border-top-1 {\n    border-top-width: 1px !important;\n    border-top-style: solid;\n  }\n  .lg\\:border-top-2 {\n    border-top-width: 2px !important;\n    border-top-style: solid;\n  }\n  .lg\\:border-top-3 {\n    border-top-width: 3px !important;\n    border-top-style: solid;\n  }\n  .lg\\:border-right-none {\n    border-right-width: 0px !important;\n    border-right-style: none;\n  }\n  .lg\\:border-right-1 {\n    border-right-width: 1px !important;\n    border-right-style: solid;\n  }\n  .lg\\:border-right-2 {\n    border-right-width: 2px !important;\n    border-right-style: solid;\n  }\n  .lg\\:border-right-3 {\n    border-right-width: 3px !important;\n    border-right-style: solid;\n  }\n  .lg\\:border-left-none {\n    border-left-width: 0px !important;\n    border-left-style: none;\n  }\n  .lg\\:border-left-1 {\n    border-left-width: 1px !important;\n    border-left-style: solid;\n  }\n  .lg\\:border-left-2 {\n    border-left-width: 2px !important;\n    border-left-style: solid;\n  }\n  .lg\\:border-left-3 {\n    border-left-width: 3px !important;\n    border-left-style: solid;\n  }\n  .lg\\:border-bottom-none {\n    border-bottom-width: 0px !important;\n    border-bottom-style: none;\n  }\n  .lg\\:border-bottom-1 {\n    border-bottom-width: 1px !important;\n    border-bottom-style: solid;\n  }\n  .lg\\:border-bottom-2 {\n    border-bottom-width: 2px !important;\n    border-bottom-style: solid;\n  }\n  .lg\\:border-bottom-3 {\n    border-bottom-width: 3px !important;\n    border-bottom-style: solid;\n  }\n  .lg\\:border-x-none {\n    border-left-width: 0px !important;\n    border-left-style: none;\n    border-right-width: 0px !important;\n    border-right-style: none;\n  }\n  .lg\\:border-x-1 {\n    border-left-width: 1px !important;\n    border-left-style: solid;\n    border-right-width: 1px !important;\n    border-right-style: solid;\n  }\n  .lg\\:border-x-2 {\n    border-left-width: 2px !important;\n    border-left-style: solid;\n    border-right-width: 2px !important;\n    border-right-style: solid;\n  }\n  .lg\\:border-x-3 {\n    border-left-width: 3px !important;\n    border-left-style: solid;\n    border-right-width: 3px !important;\n    border-right-style: solid;\n  }\n  .lg\\:border-y-none {\n    border-top-width: 0px !important;\n    border-top-style: none;\n    border-bottom-width: 0px !important;\n    border-bottom-style: none;\n  }\n  .lg\\:border-y-1 {\n    border-top-width: 1px !important;\n    border-top-style: solid;\n    border-bottom-width: 1px !important;\n    border-bottom-style: solid;\n  }\n  .lg\\:border-y-2 {\n    border-top-width: 2px !important;\n    border-top-style: solid;\n    border-bottom-width: 2px !important;\n    border-bottom-style: solid;\n  }\n  .lg\\:border-y-3 {\n    border-top-width: 3px !important;\n    border-top-style: solid;\n    border-bottom-width: 3px !important;\n    border-bottom-style: solid;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:border-none {\n    border-width: 0px !important;\n    border-style: none;\n  }\n  .xl\\:border-1 {\n    border-width: 1px !important;\n    border-style: solid;\n  }\n  .xl\\:border-2 {\n    border-width: 2px !important;\n    border-style: solid;\n  }\n  .xl\\:border-3 {\n    border-width: 3px !important;\n    border-style: solid;\n  }\n  .xl\\:border-top-none {\n    border-top-width: 0px !important;\n    border-top-style: none;\n  }\n  .xl\\:border-top-1 {\n    border-top-width: 1px !important;\n    border-top-style: solid;\n  }\n  .xl\\:border-top-2 {\n    border-top-width: 2px !important;\n    border-top-style: solid;\n  }\n  .xl\\:border-top-3 {\n    border-top-width: 3px !important;\n    border-top-style: solid;\n  }\n  .xl\\:border-right-none {\n    border-right-width: 0px !important;\n    border-right-style: none;\n  }\n  .xl\\:border-right-1 {\n    border-right-width: 1px !important;\n    border-right-style: solid;\n  }\n  .xl\\:border-right-2 {\n    border-right-width: 2px !important;\n    border-right-style: solid;\n  }\n  .xl\\:border-right-3 {\n    border-right-width: 3px !important;\n    border-right-style: solid;\n  }\n  .xl\\:border-left-none {\n    border-left-width: 0px !important;\n    border-left-style: none;\n  }\n  .xl\\:border-left-1 {\n    border-left-width: 1px !important;\n    border-left-style: solid;\n  }\n  .xl\\:border-left-2 {\n    border-left-width: 2px !important;\n    border-left-style: solid;\n  }\n  .xl\\:border-left-3 {\n    border-left-width: 3px !important;\n    border-left-style: solid;\n  }\n  .xl\\:border-bottom-none {\n    border-bottom-width: 0px !important;\n    border-bottom-style: none;\n  }\n  .xl\\:border-bottom-1 {\n    border-bottom-width: 1px !important;\n    border-bottom-style: solid;\n  }\n  .xl\\:border-bottom-2 {\n    border-bottom-width: 2px !important;\n    border-bottom-style: solid;\n  }\n  .xl\\:border-bottom-3 {\n    border-bottom-width: 3px !important;\n    border-bottom-style: solid;\n  }\n  .xl\\:border-x-none {\n    border-left-width: 0px !important;\n    border-left-style: none;\n    border-right-width: 0px !important;\n    border-right-style: none;\n  }\n  .xl\\:border-x-1 {\n    border-left-width: 1px !important;\n    border-left-style: solid;\n    border-right-width: 1px !important;\n    border-right-style: solid;\n  }\n  .xl\\:border-x-2 {\n    border-left-width: 2px !important;\n    border-left-style: solid;\n    border-right-width: 2px !important;\n    border-right-style: solid;\n  }\n  .xl\\:border-x-3 {\n    border-left-width: 3px !important;\n    border-left-style: solid;\n    border-right-width: 3px !important;\n    border-right-style: solid;\n  }\n  .xl\\:border-y-none {\n    border-top-width: 0px !important;\n    border-top-style: none;\n    border-bottom-width: 0px !important;\n    border-bottom-style: none;\n  }\n  .xl\\:border-y-1 {\n    border-top-width: 1px !important;\n    border-top-style: solid;\n    border-bottom-width: 1px !important;\n    border-bottom-style: solid;\n  }\n  .xl\\:border-y-2 {\n    border-top-width: 2px !important;\n    border-top-style: solid;\n    border-bottom-width: 2px !important;\n    border-bottom-style: solid;\n  }\n  .xl\\:border-y-3 {\n    border-top-width: 3px !important;\n    border-top-style: solid;\n    border-bottom-width: 3px !important;\n    border-bottom-style: solid;\n  }\n}\n.border-solid {\n  border-style: solid !important;\n}\n\n.border-dashed {\n  border-style: dashed !important;\n}\n\n.border-dotted {\n  border-style: dotted !important;\n}\n\n.border-double {\n  border-style: double !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:border-solid {\n    border-style: solid !important;\n  }\n  .sm\\:border-dashed {\n    border-style: dashed !important;\n  }\n  .sm\\:border-dotted {\n    border-style: dotted !important;\n  }\n  .sm\\:border-double {\n    border-style: double !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:border-solid {\n    border-style: solid !important;\n  }\n  .md\\:border-dashed {\n    border-style: dashed !important;\n  }\n  .md\\:border-dotted {\n    border-style: dotted !important;\n  }\n  .md\\:border-double {\n    border-style: double !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:border-solid {\n    border-style: solid !important;\n  }\n  .lg\\:border-dashed {\n    border-style: dashed !important;\n  }\n  .lg\\:border-dotted {\n    border-style: dotted !important;\n  }\n  .lg\\:border-double {\n    border-style: double !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:border-solid {\n    border-style: solid !important;\n  }\n  .xl\\:border-dashed {\n    border-style: dashed !important;\n  }\n  .xl\\:border-dotted {\n    border-style: dotted !important;\n  }\n  .xl\\:border-double {\n    border-style: double !important;\n  }\n}\n.border-noround {\n  border-radius: 0 !important;\n}\n\n.border-round {\n  border-radius: var(--border-radius) !important;\n}\n\n.border-round-xs {\n  border-radius: 0.125rem !important;\n}\n\n.border-round-sm {\n  border-radius: 0.25rem !important;\n}\n\n.border-round-md {\n  border-radius: 0.375rem !important;\n}\n\n.border-round-lg {\n  border-radius: 0.5rem !important;\n}\n\n.border-round-xl {\n  border-radius: 0.75rem !important;\n}\n\n.border-round-2xl {\n  border-radius: 1rem !important;\n}\n\n.border-round-3xl {\n  border-radius: 1.5rem !important;\n}\n\n.border-circle {\n  border-radius: 50% !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:border-noround {\n    border-radius: 0 !important;\n  }\n  .sm\\:border-round {\n    border-radius: var(--border-radius) !important;\n  }\n  .sm\\:border-round-xs {\n    border-radius: 0.125rem !important;\n  }\n  .sm\\:border-round-sm {\n    border-radius: 0.25rem !important;\n  }\n  .sm\\:border-round-md {\n    border-radius: 0.375rem !important;\n  }\n  .sm\\:border-round-lg {\n    border-radius: 0.5rem !important;\n  }\n  .sm\\:border-round-xl {\n    border-radius: 0.75rem !important;\n  }\n  .sm\\:border-round-2xl {\n    border-radius: 1rem !important;\n  }\n  .sm\\:border-round-3xl {\n    border-radius: 1.5rem !important;\n  }\n  .sm\\:border-circle {\n    border-radius: 50% !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:border-noround {\n    border-radius: 0 !important;\n  }\n  .md\\:border-round {\n    border-radius: var(--border-radius) !important;\n  }\n  .md\\:border-round-xs {\n    border-radius: 0.125rem !important;\n  }\n  .md\\:border-round-sm {\n    border-radius: 0.25rem !important;\n  }\n  .md\\:border-round-md {\n    border-radius: 0.375rem !important;\n  }\n  .md\\:border-round-lg {\n    border-radius: 0.5rem !important;\n  }\n  .md\\:border-round-xl {\n    border-radius: 0.75rem !important;\n  }\n  .md\\:border-round-2xl {\n    border-radius: 1rem !important;\n  }\n  .md\\:border-round-3xl {\n    border-radius: 1.5rem !important;\n  }\n  .md\\:border-circle {\n    border-radius: 50% !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:border-noround {\n    border-radius: 0 !important;\n  }\n  .lg\\:border-round {\n    border-radius: var(--border-radius) !important;\n  }\n  .lg\\:border-round-xs {\n    border-radius: 0.125rem !important;\n  }\n  .lg\\:border-round-sm {\n    border-radius: 0.25rem !important;\n  }\n  .lg\\:border-round-md {\n    border-radius: 0.375rem !important;\n  }\n  .lg\\:border-round-lg {\n    border-radius: 0.5rem !important;\n  }\n  .lg\\:border-round-xl {\n    border-radius: 0.75rem !important;\n  }\n  .lg\\:border-round-2xl {\n    border-radius: 1rem !important;\n  }\n  .lg\\:border-round-3xl {\n    border-radius: 1.5rem !important;\n  }\n  .lg\\:border-circle {\n    border-radius: 50% !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:border-noround {\n    border-radius: 0 !important;\n  }\n  .xl\\:border-round {\n    border-radius: var(--border-radius) !important;\n  }\n  .xl\\:border-round-xs {\n    border-radius: 0.125rem !important;\n  }\n  .xl\\:border-round-sm {\n    border-radius: 0.25rem !important;\n  }\n  .xl\\:border-round-md {\n    border-radius: 0.375rem !important;\n  }\n  .xl\\:border-round-lg {\n    border-radius: 0.5rem !important;\n  }\n  .xl\\:border-round-xl {\n    border-radius: 0.75rem !important;\n  }\n  .xl\\:border-round-2xl {\n    border-radius: 1rem !important;\n  }\n  .xl\\:border-round-3xl {\n    border-radius: 1.5rem !important;\n  }\n  .xl\\:border-circle {\n    border-radius: 50% !important;\n  }\n}\n.border-noround-left {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n\n.border-noround-top {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n\n.border-noround-right {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.border-noround-bottom {\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.border-round-left {\n  border-top-left-radius: var(--border-radius) !important;\n  border-bottom-left-radius: var(--border-radius) !important;\n}\n\n.border-round-top {\n  border-top-left-radius: var(--border-radius) !important;\n  border-top-right-radius: var(--border-radius) !important;\n}\n\n.border-round-right {\n  border-top-right-radius: var(--border-radius) !important;\n  border-bottom-right-radius: var(--border-radius) !important;\n}\n\n.border-round-bottom {\n  border-bottom-left-radius: var(--border-radius) !important;\n  border-bottom-right-radius: var(--border-radius) !important;\n}\n\n.border-round-left-xs {\n  border-top-left-radius: 0.125rem !important;\n  border-bottom-left-radius: 0.125rem !important;\n}\n\n.border-round-top-xs {\n  border-top-left-radius: 0.125rem !important;\n  border-top-right-radius: 0.125rem !important;\n}\n\n.border-round-right-xs {\n  border-top-right-radius: 0.125rem !important;\n  border-bottom-right-radius: 0.125rem !important;\n}\n\n.border-round-bottom-xs {\n  border-bottom-left-radius: 0.125rem !important;\n  border-bottom-right-radius: 0.125rem !important;\n}\n\n.border-round-left-sm {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.border-round-top-sm {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n\n.border-round-right-sm {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.border-round-bottom-sm {\n  border-bottom-left-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.border-round-left-md {\n  border-top-left-radius: 0.375rem !important;\n  border-bottom-left-radius: 0.375rem !important;\n}\n\n.border-round-top-md {\n  border-top-left-radius: 0.375rem !important;\n  border-top-right-radius: 0.375rem !important;\n}\n\n.border-round-right-md {\n  border-top-right-radius: 0.375rem !important;\n  border-bottom-right-radius: 0.375rem !important;\n}\n\n.border-round-bottom-md {\n  border-bottom-left-radius: 0.375rem !important;\n  border-bottom-right-radius: 0.375rem !important;\n}\n\n.border-round-left-lg {\n  border-top-left-radius: 0.5rem !important;\n  border-bottom-left-radius: 0.5rem !important;\n}\n\n.border-round-top-lg {\n  border-top-left-radius: 0.5rem !important;\n  border-top-right-radius: 0.5rem !important;\n}\n\n.border-round-right-lg {\n  border-top-right-radius: 0.5rem !important;\n  border-bottom-right-radius: 0.5rem !important;\n}\n\n.border-round-bottom-lg {\n  border-bottom-left-radius: 0.5rem !important;\n  border-bottom-right-radius: 0.5rem !important;\n}\n\n.border-round-left-xl {\n  border-top-left-radius: 0.75rem !important;\n  border-bottom-left-radius: 0.75rem !important;\n}\n\n.border-round-top-xl {\n  border-top-left-radius: 0.75rem !important;\n  border-top-right-radius: 0.75rem !important;\n}\n\n.border-round-right-xl {\n  border-top-right-radius: 0.75rem !important;\n  border-bottom-right-radius: 0.75rem !important;\n}\n\n.border-round-bottom-xl {\n  border-bottom-left-radius: 0.75rem !important;\n  border-bottom-right-radius: 0.75rem !important;\n}\n\n.border-round-left-2xl {\n  border-top-left-radius: 1rem !important;\n  border-bottom-left-radius: 1rem !important;\n}\n\n.border-round-top-2xl {\n  border-top-left-radius: 1rem !important;\n  border-top-right-radius: 1rem !important;\n}\n\n.border-round-right-2xl {\n  border-top-right-radius: 1rem !important;\n  border-bottom-right-radius: 1rem !important;\n}\n\n.border-round-bottom-2xl {\n  border-bottom-left-radius: 1rem !important;\n  border-bottom-right-radius: 1rem !important;\n}\n\n.border-round-left-3xl {\n  border-top-left-radius: 1.5rem !important;\n  border-bottom-left-radius: 1.5rem !important;\n}\n\n.border-round-top-3xl {\n  border-top-left-radius: 1.5rem !important;\n  border-top-right-radius: 1.5rem !important;\n}\n\n.border-round-right-3xl {\n  border-top-right-radius: 1.5rem !important;\n  border-bottom-right-radius: 1.5rem !important;\n}\n\n.border-round-bottom-3xl {\n  border-bottom-left-radius: 1.5rem !important;\n  border-bottom-right-radius: 1.5rem !important;\n}\n\n.border-circle-left {\n  border-top-left-radius: 50% !important;\n  border-bottom-left-radius: 50% !important;\n}\n\n.border-circle-top {\n  border-top-left-radius: 50% !important;\n  border-top-right-radius: 50% !important;\n}\n\n.border-circle-right {\n  border-top-right-radius: 50% !important;\n  border-bottom-right-radius: 50% !important;\n}\n\n.border-circle-bottom {\n  border-bottom-left-radius: 50% !important;\n  border-bottom-right-radius: 50% !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:border-noround-left {\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n  }\n  .sm\\:border-noround-top {\n    border-top-left-radius: 0 !important;\n    border-top-right-radius: 0 !important;\n  }\n  .sm\\:border-noround-right {\n    border-top-right-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .sm\\:border-noround-bottom {\n    border-bottom-left-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .sm\\:border-round-left {\n    border-top-left-radius: var(--border-radius) !important;\n    border-bottom-left-radius: var(--border-radius) !important;\n  }\n  .sm\\:border-round-top {\n    border-top-left-radius: var(--border-radius) !important;\n    border-top-right-radius: var(--border-radius) !important;\n  }\n  .sm\\:border-round-right {\n    border-top-right-radius: var(--border-radius) !important;\n    border-bottom-right-radius: var(--border-radius) !important;\n  }\n  .sm\\:border-round-bottom {\n    border-bottom-left-radius: var(--border-radius) !important;\n    border-bottom-right-radius: var(--border-radius) !important;\n  }\n  .sm\\:border-round-left-xs {\n    border-top-left-radius: 0.125rem !important;\n    border-bottom-left-radius: 0.125rem !important;\n  }\n  .sm\\:border-round-top-xs {\n    border-top-left-radius: 0.125rem !important;\n    border-top-right-radius: 0.125rem !important;\n  }\n  .sm\\:border-round-right-xs {\n    border-top-right-radius: 0.125rem !important;\n    border-bottom-right-radius: 0.125rem !important;\n  }\n  .sm\\:border-round-bottom-xs {\n    border-bottom-left-radius: 0.125rem !important;\n    border-bottom-right-radius: 0.125rem !important;\n  }\n  .sm\\:border-round-left-sm {\n    border-top-left-radius: 0.25rem !important;\n    border-bottom-left-radius: 0.25rem !important;\n  }\n  .sm\\:border-round-top-sm {\n    border-top-left-radius: 0.25rem !important;\n    border-top-right-radius: 0.25rem !important;\n  }\n  .sm\\:border-round-right-sm {\n    border-top-right-radius: 0.25rem !important;\n    border-bottom-right-radius: 0.25rem !important;\n  }\n  .sm\\:border-round-bottom-sm {\n    border-bottom-left-radius: 0.25rem !important;\n    border-bottom-right-radius: 0.25rem !important;\n  }\n  .sm\\:border-round-left-md {\n    border-top-left-radius: 0.375rem !important;\n    border-bottom-left-radius: 0.375rem !important;\n  }\n  .sm\\:border-round-top-md {\n    border-top-left-radius: 0.375rem !important;\n    border-top-right-radius: 0.375rem !important;\n  }\n  .sm\\:border-round-right-md {\n    border-top-right-radius: 0.375rem !important;\n    border-bottom-right-radius: 0.375rem !important;\n  }\n  .sm\\:border-round-bottom-md {\n    border-bottom-left-radius: 0.375rem !important;\n    border-bottom-right-radius: 0.375rem !important;\n  }\n  .sm\\:border-round-left-lg {\n    border-top-left-radius: 0.5rem !important;\n    border-bottom-left-radius: 0.5rem !important;\n  }\n  .sm\\:border-round-top-lg {\n    border-top-left-radius: 0.5rem !important;\n    border-top-right-radius: 0.5rem !important;\n  }\n  .sm\\:border-round-right-lg {\n    border-top-right-radius: 0.5rem !important;\n    border-bottom-right-radius: 0.5rem !important;\n  }\n  .sm\\:border-round-bottom-lg {\n    border-bottom-left-radius: 0.5rem !important;\n    border-bottom-right-radius: 0.5rem !important;\n  }\n  .sm\\:border-round-left-xl {\n    border-top-left-radius: 0.75rem !important;\n    border-bottom-left-radius: 0.75rem !important;\n  }\n  .sm\\:border-round-top-xl {\n    border-top-left-radius: 0.75rem !important;\n    border-top-right-radius: 0.75rem !important;\n  }\n  .sm\\:border-round-right-xl {\n    border-top-right-radius: 0.75rem !important;\n    border-bottom-right-radius: 0.75rem !important;\n  }\n  .sm\\:border-round-bottom-xl {\n    border-bottom-left-radius: 0.75rem !important;\n    border-bottom-right-radius: 0.75rem !important;\n  }\n  .sm\\:border-round-left-2xl {\n    border-top-left-radius: 1rem !important;\n    border-bottom-left-radius: 1rem !important;\n  }\n  .sm\\:border-round-top-2xl {\n    border-top-left-radius: 1rem !important;\n    border-top-right-radius: 1rem !important;\n  }\n  .sm\\:border-round-right-2xl {\n    border-top-right-radius: 1rem !important;\n    border-bottom-right-radius: 1rem !important;\n  }\n  .sm\\:border-round-bottom-2xl {\n    border-bottom-left-radius: 1rem !important;\n    border-bottom-right-radius: 1rem !important;\n  }\n  .sm\\:border-round-left-3xl {\n    border-top-left-radius: 1.5rem !important;\n    border-bottom-left-radius: 1.5rem !important;\n  }\n  .sm\\:border-round-top-3xl {\n    border-top-left-radius: 1.5rem !important;\n    border-top-right-radius: 1.5rem !important;\n  }\n  .sm\\:border-round-right-3xl {\n    border-top-right-radius: 1.5rem !important;\n    border-bottom-right-radius: 1.5rem !important;\n  }\n  .sm\\:border-round-bottom-3xl {\n    border-bottom-left-radius: 1.5rem !important;\n    border-bottom-right-radius: 1.5rem !important;\n  }\n  .sm\\:border-circle-left {\n    border-top-left-radius: 50% !important;\n    border-bottom-left-radius: 50% !important;\n  }\n  .sm\\:border-circle-top {\n    border-top-left-radius: 50% !important;\n    border-top-right-radius: 50% !important;\n  }\n  .sm\\:border-circle-right {\n    border-top-right-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n  .sm\\:border-circle-bottom {\n    border-bottom-left-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:border-noround-left {\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n  }\n  .md\\:border-noround-top {\n    border-top-left-radius: 0 !important;\n    border-top-right-radius: 0 !important;\n  }\n  .md\\:border-noround-right {\n    border-top-right-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .md\\:border-noround-bottom {\n    border-bottom-left-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .md\\:border-round-left {\n    border-top-left-radius: var(--border-radius) !important;\n    border-bottom-left-radius: var(--border-radius) !important;\n  }\n  .md\\:border-round-top {\n    border-top-left-radius: var(--border-radius) !important;\n    border-top-right-radius: var(--border-radius) !important;\n  }\n  .md\\:border-round-right {\n    border-top-right-radius: var(--border-radius) !important;\n    border-bottom-right-radius: var(--border-radius) !important;\n  }\n  .md\\:border-round-bottom {\n    border-bottom-left-radius: var(--border-radius) !important;\n    border-bottom-right-radius: var(--border-radius) !important;\n  }\n  .md\\:border-round-left-xs {\n    border-top-left-radius: 0.125rem !important;\n    border-bottom-left-radius: 0.125rem !important;\n  }\n  .md\\:border-round-top-xs {\n    border-top-left-radius: 0.125rem !important;\n    border-top-right-radius: 0.125rem !important;\n  }\n  .md\\:border-round-right-xs {\n    border-top-right-radius: 0.125rem !important;\n    border-bottom-right-radius: 0.125rem !important;\n  }\n  .md\\:border-round-bottom-xs {\n    border-bottom-left-radius: 0.125rem !important;\n    border-bottom-right-radius: 0.125rem !important;\n  }\n  .md\\:border-round-left-sm {\n    border-top-left-radius: 0.25rem !important;\n    border-bottom-left-radius: 0.25rem !important;\n  }\n  .md\\:border-round-top-sm {\n    border-top-left-radius: 0.25rem !important;\n    border-top-right-radius: 0.25rem !important;\n  }\n  .md\\:border-round-right-sm {\n    border-top-right-radius: 0.25rem !important;\n    border-bottom-right-radius: 0.25rem !important;\n  }\n  .md\\:border-round-bottom-sm {\n    border-bottom-left-radius: 0.25rem !important;\n    border-bottom-right-radius: 0.25rem !important;\n  }\n  .md\\:border-round-left-md {\n    border-top-left-radius: 0.375rem !important;\n    border-bottom-left-radius: 0.375rem !important;\n  }\n  .md\\:border-round-top-md {\n    border-top-left-radius: 0.375rem !important;\n    border-top-right-radius: 0.375rem !important;\n  }\n  .md\\:border-round-right-md {\n    border-top-right-radius: 0.375rem !important;\n    border-bottom-right-radius: 0.375rem !important;\n  }\n  .md\\:border-round-bottom-md {\n    border-bottom-left-radius: 0.375rem !important;\n    border-bottom-right-radius: 0.375rem !important;\n  }\n  .md\\:border-round-left-lg {\n    border-top-left-radius: 0.5rem !important;\n    border-bottom-left-radius: 0.5rem !important;\n  }\n  .md\\:border-round-top-lg {\n    border-top-left-radius: 0.5rem !important;\n    border-top-right-radius: 0.5rem !important;\n  }\n  .md\\:border-round-right-lg {\n    border-top-right-radius: 0.5rem !important;\n    border-bottom-right-radius: 0.5rem !important;\n  }\n  .md\\:border-round-bottom-lg {\n    border-bottom-left-radius: 0.5rem !important;\n    border-bottom-right-radius: 0.5rem !important;\n  }\n  .md\\:border-round-left-xl {\n    border-top-left-radius: 0.75rem !important;\n    border-bottom-left-radius: 0.75rem !important;\n  }\n  .md\\:border-round-top-xl {\n    border-top-left-radius: 0.75rem !important;\n    border-top-right-radius: 0.75rem !important;\n  }\n  .md\\:border-round-right-xl {\n    border-top-right-radius: 0.75rem !important;\n    border-bottom-right-radius: 0.75rem !important;\n  }\n  .md\\:border-round-bottom-xl {\n    border-bottom-left-radius: 0.75rem !important;\n    border-bottom-right-radius: 0.75rem !important;\n  }\n  .md\\:border-round-left-2xl {\n    border-top-left-radius: 1rem !important;\n    border-bottom-left-radius: 1rem !important;\n  }\n  .md\\:border-round-top-2xl {\n    border-top-left-radius: 1rem !important;\n    border-top-right-radius: 1rem !important;\n  }\n  .md\\:border-round-right-2xl {\n    border-top-right-radius: 1rem !important;\n    border-bottom-right-radius: 1rem !important;\n  }\n  .md\\:border-round-bottom-2xl {\n    border-bottom-left-radius: 1rem !important;\n    border-bottom-right-radius: 1rem !important;\n  }\n  .md\\:border-round-left-3xl {\n    border-top-left-radius: 1.5rem !important;\n    border-bottom-left-radius: 1.5rem !important;\n  }\n  .md\\:border-round-top-3xl {\n    border-top-left-radius: 1.5rem !important;\n    border-top-right-radius: 1.5rem !important;\n  }\n  .md\\:border-round-right-3xl {\n    border-top-right-radius: 1.5rem !important;\n    border-bottom-right-radius: 1.5rem !important;\n  }\n  .md\\:border-round-bottom-3xl {\n    border-bottom-left-radius: 1.5rem !important;\n    border-bottom-right-radius: 1.5rem !important;\n  }\n  .md\\:border-circle-left {\n    border-top-left-radius: 50% !important;\n    border-bottom-left-radius: 50% !important;\n  }\n  .md\\:border-circle-top {\n    border-top-left-radius: 50% !important;\n    border-top-right-radius: 50% !important;\n  }\n  .md\\:border-circle-right {\n    border-top-right-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n  .md\\:border-circle-bottom {\n    border-bottom-left-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:border-noround-left {\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n  }\n  .lg\\:border-noround-top {\n    border-top-left-radius: 0 !important;\n    border-top-right-radius: 0 !important;\n  }\n  .lg\\:border-noround-right {\n    border-top-right-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .lg\\:border-noround-bottom {\n    border-bottom-left-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .lg\\:border-round-left {\n    border-top-left-radius: var(--border-radius) !important;\n    border-bottom-left-radius: var(--border-radius) !important;\n  }\n  .lg\\:border-round-top {\n    border-top-left-radius: var(--border-radius) !important;\n    border-top-right-radius: var(--border-radius) !important;\n  }\n  .lg\\:border-round-right {\n    border-top-right-radius: var(--border-radius) !important;\n    border-bottom-right-radius: var(--border-radius) !important;\n  }\n  .lg\\:border-round-bottom {\n    border-bottom-left-radius: var(--border-radius) !important;\n    border-bottom-right-radius: var(--border-radius) !important;\n  }\n  .lg\\:border-round-left-xs {\n    border-top-left-radius: 0.125rem !important;\n    border-bottom-left-radius: 0.125rem !important;\n  }\n  .lg\\:border-round-top-xs {\n    border-top-left-radius: 0.125rem !important;\n    border-top-right-radius: 0.125rem !important;\n  }\n  .lg\\:border-round-right-xs {\n    border-top-right-radius: 0.125rem !important;\n    border-bottom-right-radius: 0.125rem !important;\n  }\n  .lg\\:border-round-bottom-xs {\n    border-bottom-left-radius: 0.125rem !important;\n    border-bottom-right-radius: 0.125rem !important;\n  }\n  .lg\\:border-round-left-sm {\n    border-top-left-radius: 0.25rem !important;\n    border-bottom-left-radius: 0.25rem !important;\n  }\n  .lg\\:border-round-top-sm {\n    border-top-left-radius: 0.25rem !important;\n    border-top-right-radius: 0.25rem !important;\n  }\n  .lg\\:border-round-right-sm {\n    border-top-right-radius: 0.25rem !important;\n    border-bottom-right-radius: 0.25rem !important;\n  }\n  .lg\\:border-round-bottom-sm {\n    border-bottom-left-radius: 0.25rem !important;\n    border-bottom-right-radius: 0.25rem !important;\n  }\n  .lg\\:border-round-left-md {\n    border-top-left-radius: 0.375rem !important;\n    border-bottom-left-radius: 0.375rem !important;\n  }\n  .lg\\:border-round-top-md {\n    border-top-left-radius: 0.375rem !important;\n    border-top-right-radius: 0.375rem !important;\n  }\n  .lg\\:border-round-right-md {\n    border-top-right-radius: 0.375rem !important;\n    border-bottom-right-radius: 0.375rem !important;\n  }\n  .lg\\:border-round-bottom-md {\n    border-bottom-left-radius: 0.375rem !important;\n    border-bottom-right-radius: 0.375rem !important;\n  }\n  .lg\\:border-round-left-lg {\n    border-top-left-radius: 0.5rem !important;\n    border-bottom-left-radius: 0.5rem !important;\n  }\n  .lg\\:border-round-top-lg {\n    border-top-left-radius: 0.5rem !important;\n    border-top-right-radius: 0.5rem !important;\n  }\n  .lg\\:border-round-right-lg {\n    border-top-right-radius: 0.5rem !important;\n    border-bottom-right-radius: 0.5rem !important;\n  }\n  .lg\\:border-round-bottom-lg {\n    border-bottom-left-radius: 0.5rem !important;\n    border-bottom-right-radius: 0.5rem !important;\n  }\n  .lg\\:border-round-left-xl {\n    border-top-left-radius: 0.75rem !important;\n    border-bottom-left-radius: 0.75rem !important;\n  }\n  .lg\\:border-round-top-xl {\n    border-top-left-radius: 0.75rem !important;\n    border-top-right-radius: 0.75rem !important;\n  }\n  .lg\\:border-round-right-xl {\n    border-top-right-radius: 0.75rem !important;\n    border-bottom-right-radius: 0.75rem !important;\n  }\n  .lg\\:border-round-bottom-xl {\n    border-bottom-left-radius: 0.75rem !important;\n    border-bottom-right-radius: 0.75rem !important;\n  }\n  .lg\\:border-round-left-2xl {\n    border-top-left-radius: 1rem !important;\n    border-bottom-left-radius: 1rem !important;\n  }\n  .lg\\:border-round-top-2xl {\n    border-top-left-radius: 1rem !important;\n    border-top-right-radius: 1rem !important;\n  }\n  .lg\\:border-round-right-2xl {\n    border-top-right-radius: 1rem !important;\n    border-bottom-right-radius: 1rem !important;\n  }\n  .lg\\:border-round-bottom-2xl {\n    border-bottom-left-radius: 1rem !important;\n    border-bottom-right-radius: 1rem !important;\n  }\n  .lg\\:border-round-left-3xl {\n    border-top-left-radius: 1.5rem !important;\n    border-bottom-left-radius: 1.5rem !important;\n  }\n  .lg\\:border-round-top-3xl {\n    border-top-left-radius: 1.5rem !important;\n    border-top-right-radius: 1.5rem !important;\n  }\n  .lg\\:border-round-right-3xl {\n    border-top-right-radius: 1.5rem !important;\n    border-bottom-right-radius: 1.5rem !important;\n  }\n  .lg\\:border-round-bottom-3xl {\n    border-bottom-left-radius: 1.5rem !important;\n    border-bottom-right-radius: 1.5rem !important;\n  }\n  .lg\\:border-circle-left {\n    border-top-left-radius: 50% !important;\n    border-bottom-left-radius: 50% !important;\n  }\n  .lg\\:border-circle-top {\n    border-top-left-radius: 50% !important;\n    border-top-right-radius: 50% !important;\n  }\n  .lg\\:border-circle-right {\n    border-top-right-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n  .lg\\:border-circle-bottom {\n    border-bottom-left-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:border-noround-left {\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n  }\n  .xl\\:border-noround-top {\n    border-top-left-radius: 0 !important;\n    border-top-right-radius: 0 !important;\n  }\n  .xl\\:border-noround-right {\n    border-top-right-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .xl\\:border-noround-bottom {\n    border-bottom-left-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .xl\\:border-round-left {\n    border-top-left-radius: var(--border-radius) !important;\n    border-bottom-left-radius: var(--border-radius) !important;\n  }\n  .xl\\:border-round-top {\n    border-top-left-radius: var(--border-radius) !important;\n    border-top-right-radius: var(--border-radius) !important;\n  }\n  .xl\\:border-round-right {\n    border-top-right-radius: var(--border-radius) !important;\n    border-bottom-right-radius: var(--border-radius) !important;\n  }\n  .xl\\:border-round-bottom {\n    border-bottom-left-radius: var(--border-radius) !important;\n    border-bottom-right-radius: var(--border-radius) !important;\n  }\n  .xl\\:border-round-left-xs {\n    border-top-left-radius: 0.125rem !important;\n    border-bottom-left-radius: 0.125rem !important;\n  }\n  .xl\\:border-round-top-xs {\n    border-top-left-radius: 0.125rem !important;\n    border-top-right-radius: 0.125rem !important;\n  }\n  .xl\\:border-round-right-xs {\n    border-top-right-radius: 0.125rem !important;\n    border-bottom-right-radius: 0.125rem !important;\n  }\n  .xl\\:border-round-bottom-xs {\n    border-bottom-left-radius: 0.125rem !important;\n    border-bottom-right-radius: 0.125rem !important;\n  }\n  .xl\\:border-round-left-sm {\n    border-top-left-radius: 0.25rem !important;\n    border-bottom-left-radius: 0.25rem !important;\n  }\n  .xl\\:border-round-top-sm {\n    border-top-left-radius: 0.25rem !important;\n    border-top-right-radius: 0.25rem !important;\n  }\n  .xl\\:border-round-right-sm {\n    border-top-right-radius: 0.25rem !important;\n    border-bottom-right-radius: 0.25rem !important;\n  }\n  .xl\\:border-round-bottom-sm {\n    border-bottom-left-radius: 0.25rem !important;\n    border-bottom-right-radius: 0.25rem !important;\n  }\n  .xl\\:border-round-left-md {\n    border-top-left-radius: 0.375rem !important;\n    border-bottom-left-radius: 0.375rem !important;\n  }\n  .xl\\:border-round-top-md {\n    border-top-left-radius: 0.375rem !important;\n    border-top-right-radius: 0.375rem !important;\n  }\n  .xl\\:border-round-right-md {\n    border-top-right-radius: 0.375rem !important;\n    border-bottom-right-radius: 0.375rem !important;\n  }\n  .xl\\:border-round-bottom-md {\n    border-bottom-left-radius: 0.375rem !important;\n    border-bottom-right-radius: 0.375rem !important;\n  }\n  .xl\\:border-round-left-lg {\n    border-top-left-radius: 0.5rem !important;\n    border-bottom-left-radius: 0.5rem !important;\n  }\n  .xl\\:border-round-top-lg {\n    border-top-left-radius: 0.5rem !important;\n    border-top-right-radius: 0.5rem !important;\n  }\n  .xl\\:border-round-right-lg {\n    border-top-right-radius: 0.5rem !important;\n    border-bottom-right-radius: 0.5rem !important;\n  }\n  .xl\\:border-round-bottom-lg {\n    border-bottom-left-radius: 0.5rem !important;\n    border-bottom-right-radius: 0.5rem !important;\n  }\n  .xl\\:border-round-left-xl {\n    border-top-left-radius: 0.75rem !important;\n    border-bottom-left-radius: 0.75rem !important;\n  }\n  .xl\\:border-round-top-xl {\n    border-top-left-radius: 0.75rem !important;\n    border-top-right-radius: 0.75rem !important;\n  }\n  .xl\\:border-round-right-xl {\n    border-top-right-radius: 0.75rem !important;\n    border-bottom-right-radius: 0.75rem !important;\n  }\n  .xl\\:border-round-bottom-xl {\n    border-bottom-left-radius: 0.75rem !important;\n    border-bottom-right-radius: 0.75rem !important;\n  }\n  .xl\\:border-round-left-2xl {\n    border-top-left-radius: 1rem !important;\n    border-bottom-left-radius: 1rem !important;\n  }\n  .xl\\:border-round-top-2xl {\n    border-top-left-radius: 1rem !important;\n    border-top-right-radius: 1rem !important;\n  }\n  .xl\\:border-round-right-2xl {\n    border-top-right-radius: 1rem !important;\n    border-bottom-right-radius: 1rem !important;\n  }\n  .xl\\:border-round-bottom-2xl {\n    border-bottom-left-radius: 1rem !important;\n    border-bottom-right-radius: 1rem !important;\n  }\n  .xl\\:border-round-left-3xl {\n    border-top-left-radius: 1.5rem !important;\n    border-bottom-left-radius: 1.5rem !important;\n  }\n  .xl\\:border-round-top-3xl {\n    border-top-left-radius: 1.5rem !important;\n    border-top-right-radius: 1.5rem !important;\n  }\n  .xl\\:border-round-right-3xl {\n    border-top-right-radius: 1.5rem !important;\n    border-bottom-right-radius: 1.5rem !important;\n  }\n  .xl\\:border-round-bottom-3xl {\n    border-bottom-left-radius: 1.5rem !important;\n    border-bottom-right-radius: 1.5rem !important;\n  }\n  .xl\\:border-circle-left {\n    border-top-left-radius: 50% !important;\n    border-bottom-left-radius: 50% !important;\n  }\n  .xl\\:border-circle-top {\n    border-top-left-radius: 50% !important;\n    border-top-right-radius: 50% !important;\n  }\n  .xl\\:border-circle-right {\n    border-top-right-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n  .xl\\:border-circle-bottom {\n    border-bottom-left-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n}\n.w-full {\n  width: 100% !important;\n}\n\n.w-screen {\n  width: 100vw !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.w-1 {\n  width: 8.3333% !important;\n}\n\n.w-2 {\n  width: 16.6667% !important;\n}\n\n.w-3 {\n  width: 25% !important;\n}\n\n.w-4 {\n  width: 33.3333% !important;\n}\n\n.w-5 {\n  width: 41.6667% !important;\n}\n\n.w-6 {\n  width: 50% !important;\n}\n\n.w-7 {\n  width: 58.3333% !important;\n}\n\n.w-8 {\n  width: 66.6667% !important;\n}\n\n.w-9 {\n  width: 75% !important;\n}\n\n.w-10 {\n  width: 83.3333% !important;\n}\n\n.w-11 {\n  width: 91.6667% !important;\n}\n\n.w-12 {\n  width: 100% !important;\n}\n\n.w-min {\n  width: min-content !important;\n}\n\n.w-max {\n  width: max-content !important;\n}\n\n.w-fit {\n  width: fit-content !important;\n}\n\n.w-1rem {\n  width: 1rem !important;\n}\n\n.w-2rem {\n  width: 2rem !important;\n}\n\n.w-3rem {\n  width: 3rem !important;\n}\n\n.w-4rem {\n  width: 4rem !important;\n}\n\n.w-5rem {\n  width: 5rem !important;\n}\n\n.w-6rem {\n  width: 6rem !important;\n}\n\n.w-7rem {\n  width: 7rem !important;\n}\n\n.w-8rem {\n  width: 8rem !important;\n}\n\n.w-9rem {\n  width: 9rem !important;\n}\n\n.w-10rem {\n  width: 10rem !important;\n}\n\n.w-11rem {\n  width: 11rem !important;\n}\n\n.w-12rem {\n  width: 12rem !important;\n}\n\n.w-13rem {\n  width: 13rem !important;\n}\n\n.w-14rem {\n  width: 14rem !important;\n}\n\n.w-15rem {\n  width: 15rem !important;\n}\n\n.w-16rem {\n  width: 16rem !important;\n}\n\n.w-17rem {\n  width: 17rem !important;\n}\n\n.w-18rem {\n  width: 18rem !important;\n}\n\n.w-19rem {\n  width: 19rem !important;\n}\n\n.w-20rem {\n  width: 20rem !important;\n}\n\n.w-21rem {\n  width: 21rem !important;\n}\n\n.w-22rem {\n  width: 22rem !important;\n}\n\n.w-23rem {\n  width: 23rem !important;\n}\n\n.w-24rem {\n  width: 24rem !important;\n}\n\n.w-25rem {\n  width: 25rem !important;\n}\n\n.w-26rem {\n  width: 26rem !important;\n}\n\n.w-27rem {\n  width: 27rem !important;\n}\n\n.w-28rem {\n  width: 28rem !important;\n}\n\n.w-29rem {\n  width: 29rem !important;\n}\n\n.w-30rem {\n  width: 30rem !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:w-full {\n    width: 100% !important;\n  }\n  .sm\\:w-screen {\n    width: 100vw !important;\n  }\n  .sm\\:w-auto {\n    width: auto !important;\n  }\n  .sm\\:w-1 {\n    width: 8.3333% !important;\n  }\n  .sm\\:w-2 {\n    width: 16.6667% !important;\n  }\n  .sm\\:w-3 {\n    width: 25% !important;\n  }\n  .sm\\:w-4 {\n    width: 33.3333% !important;\n  }\n  .sm\\:w-5 {\n    width: 41.6667% !important;\n  }\n  .sm\\:w-6 {\n    width: 50% !important;\n  }\n  .sm\\:w-7 {\n    width: 58.3333% !important;\n  }\n  .sm\\:w-8 {\n    width: 66.6667% !important;\n  }\n  .sm\\:w-9 {\n    width: 75% !important;\n  }\n  .sm\\:w-10 {\n    width: 83.3333% !important;\n  }\n  .sm\\:w-11 {\n    width: 91.6667% !important;\n  }\n  .sm\\:w-12 {\n    width: 100% !important;\n  }\n  .sm\\:w-min {\n    width: min-content !important;\n  }\n  .sm\\:w-max {\n    width: max-content !important;\n  }\n  .sm\\:w-fit {\n    width: fit-content !important;\n  }\n  .sm\\:w-1rem {\n    width: 1rem !important;\n  }\n  .sm\\:w-2rem {\n    width: 2rem !important;\n  }\n  .sm\\:w-3rem {\n    width: 3rem !important;\n  }\n  .sm\\:w-4rem {\n    width: 4rem !important;\n  }\n  .sm\\:w-5rem {\n    width: 5rem !important;\n  }\n  .sm\\:w-6rem {\n    width: 6rem !important;\n  }\n  .sm\\:w-7rem {\n    width: 7rem !important;\n  }\n  .sm\\:w-8rem {\n    width: 8rem !important;\n  }\n  .sm\\:w-9rem {\n    width: 9rem !important;\n  }\n  .sm\\:w-10rem {\n    width: 10rem !important;\n  }\n  .sm\\:w-11rem {\n    width: 11rem !important;\n  }\n  .sm\\:w-12rem {\n    width: 12rem !important;\n  }\n  .sm\\:w-13rem {\n    width: 13rem !important;\n  }\n  .sm\\:w-14rem {\n    width: 14rem !important;\n  }\n  .sm\\:w-15rem {\n    width: 15rem !important;\n  }\n  .sm\\:w-16rem {\n    width: 16rem !important;\n  }\n  .sm\\:w-17rem {\n    width: 17rem !important;\n  }\n  .sm\\:w-18rem {\n    width: 18rem !important;\n  }\n  .sm\\:w-19rem {\n    width: 19rem !important;\n  }\n  .sm\\:w-20rem {\n    width: 20rem !important;\n  }\n  .sm\\:w-21rem {\n    width: 21rem !important;\n  }\n  .sm\\:w-22rem {\n    width: 22rem !important;\n  }\n  .sm\\:w-23rem {\n    width: 23rem !important;\n  }\n  .sm\\:w-24rem {\n    width: 24rem !important;\n  }\n  .sm\\:w-25rem {\n    width: 25rem !important;\n  }\n  .sm\\:w-26rem {\n    width: 26rem !important;\n  }\n  .sm\\:w-27rem {\n    width: 27rem !important;\n  }\n  .sm\\:w-28rem {\n    width: 28rem !important;\n  }\n  .sm\\:w-29rem {\n    width: 29rem !important;\n  }\n  .sm\\:w-30rem {\n    width: 30rem !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:w-full {\n    width: 100% !important;\n  }\n  .md\\:w-screen {\n    width: 100vw !important;\n  }\n  .md\\:w-auto {\n    width: auto !important;\n  }\n  .md\\:w-1 {\n    width: 8.3333% !important;\n  }\n  .md\\:w-2 {\n    width: 16.6667% !important;\n  }\n  .md\\:w-3 {\n    width: 25% !important;\n  }\n  .md\\:w-4 {\n    width: 33.3333% !important;\n  }\n  .md\\:w-5 {\n    width: 41.6667% !important;\n  }\n  .md\\:w-6 {\n    width: 50% !important;\n  }\n  .md\\:w-7 {\n    width: 58.3333% !important;\n  }\n  .md\\:w-8 {\n    width: 66.6667% !important;\n  }\n  .md\\:w-9 {\n    width: 75% !important;\n  }\n  .md\\:w-10 {\n    width: 83.3333% !important;\n  }\n  .md\\:w-11 {\n    width: 91.6667% !important;\n  }\n  .md\\:w-12 {\n    width: 100% !important;\n  }\n  .md\\:w-min {\n    width: min-content !important;\n  }\n  .md\\:w-max {\n    width: max-content !important;\n  }\n  .md\\:w-fit {\n    width: fit-content !important;\n  }\n  .md\\:w-1rem {\n    width: 1rem !important;\n  }\n  .md\\:w-2rem {\n    width: 2rem !important;\n  }\n  .md\\:w-3rem {\n    width: 3rem !important;\n  }\n  .md\\:w-4rem {\n    width: 4rem !important;\n  }\n  .md\\:w-5rem {\n    width: 5rem !important;\n  }\n  .md\\:w-6rem {\n    width: 6rem !important;\n  }\n  .md\\:w-7rem {\n    width: 7rem !important;\n  }\n  .md\\:w-8rem {\n    width: 8rem !important;\n  }\n  .md\\:w-9rem {\n    width: 9rem !important;\n  }\n  .md\\:w-10rem {\n    width: 10rem !important;\n  }\n  .md\\:w-11rem {\n    width: 11rem !important;\n  }\n  .md\\:w-12rem {\n    width: 12rem !important;\n  }\n  .md\\:w-13rem {\n    width: 13rem !important;\n  }\n  .md\\:w-14rem {\n    width: 14rem !important;\n  }\n  .md\\:w-15rem {\n    width: 15rem !important;\n  }\n  .md\\:w-16rem {\n    width: 16rem !important;\n  }\n  .md\\:w-17rem {\n    width: 17rem !important;\n  }\n  .md\\:w-18rem {\n    width: 18rem !important;\n  }\n  .md\\:w-19rem {\n    width: 19rem !important;\n  }\n  .md\\:w-20rem {\n    width: 20rem !important;\n  }\n  .md\\:w-21rem {\n    width: 21rem !important;\n  }\n  .md\\:w-22rem {\n    width: 22rem !important;\n  }\n  .md\\:w-23rem {\n    width: 23rem !important;\n  }\n  .md\\:w-24rem {\n    width: 24rem !important;\n  }\n  .md\\:w-25rem {\n    width: 25rem !important;\n  }\n  .md\\:w-26rem {\n    width: 26rem !important;\n  }\n  .md\\:w-27rem {\n    width: 27rem !important;\n  }\n  .md\\:w-28rem {\n    width: 28rem !important;\n  }\n  .md\\:w-29rem {\n    width: 29rem !important;\n  }\n  .md\\:w-30rem {\n    width: 30rem !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:w-full {\n    width: 100% !important;\n  }\n  .lg\\:w-screen {\n    width: 100vw !important;\n  }\n  .lg\\:w-auto {\n    width: auto !important;\n  }\n  .lg\\:w-1 {\n    width: 8.3333% !important;\n  }\n  .lg\\:w-2 {\n    width: 16.6667% !important;\n  }\n  .lg\\:w-3 {\n    width: 25% !important;\n  }\n  .lg\\:w-4 {\n    width: 33.3333% !important;\n  }\n  .lg\\:w-5 {\n    width: 41.6667% !important;\n  }\n  .lg\\:w-6 {\n    width: 50% !important;\n  }\n  .lg\\:w-7 {\n    width: 58.3333% !important;\n  }\n  .lg\\:w-8 {\n    width: 66.6667% !important;\n  }\n  .lg\\:w-9 {\n    width: 75% !important;\n  }\n  .lg\\:w-10 {\n    width: 83.3333% !important;\n  }\n  .lg\\:w-11 {\n    width: 91.6667% !important;\n  }\n  .lg\\:w-12 {\n    width: 100% !important;\n  }\n  .lg\\:w-min {\n    width: min-content !important;\n  }\n  .lg\\:w-max {\n    width: max-content !important;\n  }\n  .lg\\:w-fit {\n    width: fit-content !important;\n  }\n  .lg\\:w-1rem {\n    width: 1rem !important;\n  }\n  .lg\\:w-2rem {\n    width: 2rem !important;\n  }\n  .lg\\:w-3rem {\n    width: 3rem !important;\n  }\n  .lg\\:w-4rem {\n    width: 4rem !important;\n  }\n  .lg\\:w-5rem {\n    width: 5rem !important;\n  }\n  .lg\\:w-6rem {\n    width: 6rem !important;\n  }\n  .lg\\:w-7rem {\n    width: 7rem !important;\n  }\n  .lg\\:w-8rem {\n    width: 8rem !important;\n  }\n  .lg\\:w-9rem {\n    width: 9rem !important;\n  }\n  .lg\\:w-10rem {\n    width: 10rem !important;\n  }\n  .lg\\:w-11rem {\n    width: 11rem !important;\n  }\n  .lg\\:w-12rem {\n    width: 12rem !important;\n  }\n  .lg\\:w-13rem {\n    width: 13rem !important;\n  }\n  .lg\\:w-14rem {\n    width: 14rem !important;\n  }\n  .lg\\:w-15rem {\n    width: 15rem !important;\n  }\n  .lg\\:w-16rem {\n    width: 16rem !important;\n  }\n  .lg\\:w-17rem {\n    width: 17rem !important;\n  }\n  .lg\\:w-18rem {\n    width: 18rem !important;\n  }\n  .lg\\:w-19rem {\n    width: 19rem !important;\n  }\n  .lg\\:w-20rem {\n    width: 20rem !important;\n  }\n  .lg\\:w-21rem {\n    width: 21rem !important;\n  }\n  .lg\\:w-22rem {\n    width: 22rem !important;\n  }\n  .lg\\:w-23rem {\n    width: 23rem !important;\n  }\n  .lg\\:w-24rem {\n    width: 24rem !important;\n  }\n  .lg\\:w-25rem {\n    width: 25rem !important;\n  }\n  .lg\\:w-26rem {\n    width: 26rem !important;\n  }\n  .lg\\:w-27rem {\n    width: 27rem !important;\n  }\n  .lg\\:w-28rem {\n    width: 28rem !important;\n  }\n  .lg\\:w-29rem {\n    width: 29rem !important;\n  }\n  .lg\\:w-30rem {\n    width: 30rem !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:w-full {\n    width: 100% !important;\n  }\n  .xl\\:w-screen {\n    width: 100vw !important;\n  }\n  .xl\\:w-auto {\n    width: auto !important;\n  }\n  .xl\\:w-1 {\n    width: 8.3333% !important;\n  }\n  .xl\\:w-2 {\n    width: 16.6667% !important;\n  }\n  .xl\\:w-3 {\n    width: 25% !important;\n  }\n  .xl\\:w-4 {\n    width: 33.3333% !important;\n  }\n  .xl\\:w-5 {\n    width: 41.6667% !important;\n  }\n  .xl\\:w-6 {\n    width: 50% !important;\n  }\n  .xl\\:w-7 {\n    width: 58.3333% !important;\n  }\n  .xl\\:w-8 {\n    width: 66.6667% !important;\n  }\n  .xl\\:w-9 {\n    width: 75% !important;\n  }\n  .xl\\:w-10 {\n    width: 83.3333% !important;\n  }\n  .xl\\:w-11 {\n    width: 91.6667% !important;\n  }\n  .xl\\:w-12 {\n    width: 100% !important;\n  }\n  .xl\\:w-min {\n    width: min-content !important;\n  }\n  .xl\\:w-max {\n    width: max-content !important;\n  }\n  .xl\\:w-fit {\n    width: fit-content !important;\n  }\n  .xl\\:w-1rem {\n    width: 1rem !important;\n  }\n  .xl\\:w-2rem {\n    width: 2rem !important;\n  }\n  .xl\\:w-3rem {\n    width: 3rem !important;\n  }\n  .xl\\:w-4rem {\n    width: 4rem !important;\n  }\n  .xl\\:w-5rem {\n    width: 5rem !important;\n  }\n  .xl\\:w-6rem {\n    width: 6rem !important;\n  }\n  .xl\\:w-7rem {\n    width: 7rem !important;\n  }\n  .xl\\:w-8rem {\n    width: 8rem !important;\n  }\n  .xl\\:w-9rem {\n    width: 9rem !important;\n  }\n  .xl\\:w-10rem {\n    width: 10rem !important;\n  }\n  .xl\\:w-11rem {\n    width: 11rem !important;\n  }\n  .xl\\:w-12rem {\n    width: 12rem !important;\n  }\n  .xl\\:w-13rem {\n    width: 13rem !important;\n  }\n  .xl\\:w-14rem {\n    width: 14rem !important;\n  }\n  .xl\\:w-15rem {\n    width: 15rem !important;\n  }\n  .xl\\:w-16rem {\n    width: 16rem !important;\n  }\n  .xl\\:w-17rem {\n    width: 17rem !important;\n  }\n  .xl\\:w-18rem {\n    width: 18rem !important;\n  }\n  .xl\\:w-19rem {\n    width: 19rem !important;\n  }\n  .xl\\:w-20rem {\n    width: 20rem !important;\n  }\n  .xl\\:w-21rem {\n    width: 21rem !important;\n  }\n  .xl\\:w-22rem {\n    width: 22rem !important;\n  }\n  .xl\\:w-23rem {\n    width: 23rem !important;\n  }\n  .xl\\:w-24rem {\n    width: 24rem !important;\n  }\n  .xl\\:w-25rem {\n    width: 25rem !important;\n  }\n  .xl\\:w-26rem {\n    width: 26rem !important;\n  }\n  .xl\\:w-27rem {\n    width: 27rem !important;\n  }\n  .xl\\:w-28rem {\n    width: 28rem !important;\n  }\n  .xl\\:w-29rem {\n    width: 29rem !important;\n  }\n  .xl\\:w-30rem {\n    width: 30rem !important;\n  }\n}\n.h-full {\n  height: 100% !important;\n}\n\n.h-screen {\n  height: 100vh !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.h-min {\n  height: min-content !important;\n}\n\n.h-max {\n  height: max-content !important;\n}\n\n.h-fit {\n  height: fit-content !important;\n}\n\n.h-1rem {\n  height: 1rem !important;\n}\n\n.h-2rem {\n  height: 2rem !important;\n}\n\n.h-3rem {\n  height: 3rem !important;\n}\n\n.h-4rem {\n  height: 4rem !important;\n}\n\n.h-5rem {\n  height: 5rem !important;\n}\n\n.h-6rem {\n  height: 6rem !important;\n}\n\n.h-7rem {\n  height: 7rem !important;\n}\n\n.h-8rem {\n  height: 8rem !important;\n}\n\n.h-9rem {\n  height: 9rem !important;\n}\n\n.h-10rem {\n  height: 10rem !important;\n}\n\n.h-11rem {\n  height: 11rem !important;\n}\n\n.h-12rem {\n  height: 12rem !important;\n}\n\n.h-13rem {\n  height: 13rem !important;\n}\n\n.h-14rem {\n  height: 14rem !important;\n}\n\n.h-15rem {\n  height: 15rem !important;\n}\n\n.h-16rem {\n  height: 16rem !important;\n}\n\n.h-17rem {\n  height: 17rem !important;\n}\n\n.h-18rem {\n  height: 18rem !important;\n}\n\n.h-19rem {\n  height: 19rem !important;\n}\n\n.h-20rem {\n  height: 20rem !important;\n}\n\n.h-21rem {\n  height: 21rem !important;\n}\n\n.h-22rem {\n  height: 22rem !important;\n}\n\n.h-23rem {\n  height: 23rem !important;\n}\n\n.h-24rem {\n  height: 24rem !important;\n}\n\n.h-25rem {\n  height: 25rem !important;\n}\n\n.h-26rem {\n  height: 26rem !important;\n}\n\n.h-27rem {\n  height: 27rem !important;\n}\n\n.h-28rem {\n  height: 28rem !important;\n}\n\n.h-29rem {\n  height: 29rem !important;\n}\n\n.h-30rem {\n  height: 30rem !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:h-full {\n    height: 100% !important;\n  }\n  .sm\\:h-screen {\n    height: 100vh !important;\n  }\n  .sm\\:h-auto {\n    height: auto !important;\n  }\n  .sm\\:h-min {\n    height: min-content !important;\n  }\n  .sm\\:h-max {\n    height: max-content !important;\n  }\n  .sm\\:h-fit {\n    height: fit-content !important;\n  }\n  .sm\\:h-1rem {\n    height: 1rem !important;\n  }\n  .sm\\:h-2rem {\n    height: 2rem !important;\n  }\n  .sm\\:h-3rem {\n    height: 3rem !important;\n  }\n  .sm\\:h-4rem {\n    height: 4rem !important;\n  }\n  .sm\\:h-5rem {\n    height: 5rem !important;\n  }\n  .sm\\:h-6rem {\n    height: 6rem !important;\n  }\n  .sm\\:h-7rem {\n    height: 7rem !important;\n  }\n  .sm\\:h-8rem {\n    height: 8rem !important;\n  }\n  .sm\\:h-9rem {\n    height: 9rem !important;\n  }\n  .sm\\:h-10rem {\n    height: 10rem !important;\n  }\n  .sm\\:h-11rem {\n    height: 11rem !important;\n  }\n  .sm\\:h-12rem {\n    height: 12rem !important;\n  }\n  .sm\\:h-13rem {\n    height: 13rem !important;\n  }\n  .sm\\:h-14rem {\n    height: 14rem !important;\n  }\n  .sm\\:h-15rem {\n    height: 15rem !important;\n  }\n  .sm\\:h-16rem {\n    height: 16rem !important;\n  }\n  .sm\\:h-17rem {\n    height: 17rem !important;\n  }\n  .sm\\:h-18rem {\n    height: 18rem !important;\n  }\n  .sm\\:h-19rem {\n    height: 19rem !important;\n  }\n  .sm\\:h-20rem {\n    height: 20rem !important;\n  }\n  .sm\\:h-21rem {\n    height: 21rem !important;\n  }\n  .sm\\:h-22rem {\n    height: 22rem !important;\n  }\n  .sm\\:h-23rem {\n    height: 23rem !important;\n  }\n  .sm\\:h-24rem {\n    height: 24rem !important;\n  }\n  .sm\\:h-25rem {\n    height: 25rem !important;\n  }\n  .sm\\:h-26rem {\n    height: 26rem !important;\n  }\n  .sm\\:h-27rem {\n    height: 27rem !important;\n  }\n  .sm\\:h-28rem {\n    height: 28rem !important;\n  }\n  .sm\\:h-29rem {\n    height: 29rem !important;\n  }\n  .sm\\:h-30rem {\n    height: 30rem !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:h-full {\n    height: 100% !important;\n  }\n  .md\\:h-screen {\n    height: 100vh !important;\n  }\n  .md\\:h-auto {\n    height: auto !important;\n  }\n  .md\\:h-min {\n    height: min-content !important;\n  }\n  .md\\:h-max {\n    height: max-content !important;\n  }\n  .md\\:h-fit {\n    height: fit-content !important;\n  }\n  .md\\:h-1rem {\n    height: 1rem !important;\n  }\n  .md\\:h-2rem {\n    height: 2rem !important;\n  }\n  .md\\:h-3rem {\n    height: 3rem !important;\n  }\n  .md\\:h-4rem {\n    height: 4rem !important;\n  }\n  .md\\:h-5rem {\n    height: 5rem !important;\n  }\n  .md\\:h-6rem {\n    height: 6rem !important;\n  }\n  .md\\:h-7rem {\n    height: 7rem !important;\n  }\n  .md\\:h-8rem {\n    height: 8rem !important;\n  }\n  .md\\:h-9rem {\n    height: 9rem !important;\n  }\n  .md\\:h-10rem {\n    height: 10rem !important;\n  }\n  .md\\:h-11rem {\n    height: 11rem !important;\n  }\n  .md\\:h-12rem {\n    height: 12rem !important;\n  }\n  .md\\:h-13rem {\n    height: 13rem !important;\n  }\n  .md\\:h-14rem {\n    height: 14rem !important;\n  }\n  .md\\:h-15rem {\n    height: 15rem !important;\n  }\n  .md\\:h-16rem {\n    height: 16rem !important;\n  }\n  .md\\:h-17rem {\n    height: 17rem !important;\n  }\n  .md\\:h-18rem {\n    height: 18rem !important;\n  }\n  .md\\:h-19rem {\n    height: 19rem !important;\n  }\n  .md\\:h-20rem {\n    height: 20rem !important;\n  }\n  .md\\:h-21rem {\n    height: 21rem !important;\n  }\n  .md\\:h-22rem {\n    height: 22rem !important;\n  }\n  .md\\:h-23rem {\n    height: 23rem !important;\n  }\n  .md\\:h-24rem {\n    height: 24rem !important;\n  }\n  .md\\:h-25rem {\n    height: 25rem !important;\n  }\n  .md\\:h-26rem {\n    height: 26rem !important;\n  }\n  .md\\:h-27rem {\n    height: 27rem !important;\n  }\n  .md\\:h-28rem {\n    height: 28rem !important;\n  }\n  .md\\:h-29rem {\n    height: 29rem !important;\n  }\n  .md\\:h-30rem {\n    height: 30rem !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:h-full {\n    height: 100% !important;\n  }\n  .lg\\:h-screen {\n    height: 100vh !important;\n  }\n  .lg\\:h-auto {\n    height: auto !important;\n  }\n  .lg\\:h-min {\n    height: min-content !important;\n  }\n  .lg\\:h-max {\n    height: max-content !important;\n  }\n  .lg\\:h-fit {\n    height: fit-content !important;\n  }\n  .lg\\:h-1rem {\n    height: 1rem !important;\n  }\n  .lg\\:h-2rem {\n    height: 2rem !important;\n  }\n  .lg\\:h-3rem {\n    height: 3rem !important;\n  }\n  .lg\\:h-4rem {\n    height: 4rem !important;\n  }\n  .lg\\:h-5rem {\n    height: 5rem !important;\n  }\n  .lg\\:h-6rem {\n    height: 6rem !important;\n  }\n  .lg\\:h-7rem {\n    height: 7rem !important;\n  }\n  .lg\\:h-8rem {\n    height: 8rem !important;\n  }\n  .lg\\:h-9rem {\n    height: 9rem !important;\n  }\n  .lg\\:h-10rem {\n    height: 10rem !important;\n  }\n  .lg\\:h-11rem {\n    height: 11rem !important;\n  }\n  .lg\\:h-12rem {\n    height: 12rem !important;\n  }\n  .lg\\:h-13rem {\n    height: 13rem !important;\n  }\n  .lg\\:h-14rem {\n    height: 14rem !important;\n  }\n  .lg\\:h-15rem {\n    height: 15rem !important;\n  }\n  .lg\\:h-16rem {\n    height: 16rem !important;\n  }\n  .lg\\:h-17rem {\n    height: 17rem !important;\n  }\n  .lg\\:h-18rem {\n    height: 18rem !important;\n  }\n  .lg\\:h-19rem {\n    height: 19rem !important;\n  }\n  .lg\\:h-20rem {\n    height: 20rem !important;\n  }\n  .lg\\:h-21rem {\n    height: 21rem !important;\n  }\n  .lg\\:h-22rem {\n    height: 22rem !important;\n  }\n  .lg\\:h-23rem {\n    height: 23rem !important;\n  }\n  .lg\\:h-24rem {\n    height: 24rem !important;\n  }\n  .lg\\:h-25rem {\n    height: 25rem !important;\n  }\n  .lg\\:h-26rem {\n    height: 26rem !important;\n  }\n  .lg\\:h-27rem {\n    height: 27rem !important;\n  }\n  .lg\\:h-28rem {\n    height: 28rem !important;\n  }\n  .lg\\:h-29rem {\n    height: 29rem !important;\n  }\n  .lg\\:h-30rem {\n    height: 30rem !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:h-full {\n    height: 100% !important;\n  }\n  .xl\\:h-screen {\n    height: 100vh !important;\n  }\n  .xl\\:h-auto {\n    height: auto !important;\n  }\n  .xl\\:h-min {\n    height: min-content !important;\n  }\n  .xl\\:h-max {\n    height: max-content !important;\n  }\n  .xl\\:h-fit {\n    height: fit-content !important;\n  }\n  .xl\\:h-1rem {\n    height: 1rem !important;\n  }\n  .xl\\:h-2rem {\n    height: 2rem !important;\n  }\n  .xl\\:h-3rem {\n    height: 3rem !important;\n  }\n  .xl\\:h-4rem {\n    height: 4rem !important;\n  }\n  .xl\\:h-5rem {\n    height: 5rem !important;\n  }\n  .xl\\:h-6rem {\n    height: 6rem !important;\n  }\n  .xl\\:h-7rem {\n    height: 7rem !important;\n  }\n  .xl\\:h-8rem {\n    height: 8rem !important;\n  }\n  .xl\\:h-9rem {\n    height: 9rem !important;\n  }\n  .xl\\:h-10rem {\n    height: 10rem !important;\n  }\n  .xl\\:h-11rem {\n    height: 11rem !important;\n  }\n  .xl\\:h-12rem {\n    height: 12rem !important;\n  }\n  .xl\\:h-13rem {\n    height: 13rem !important;\n  }\n  .xl\\:h-14rem {\n    height: 14rem !important;\n  }\n  .xl\\:h-15rem {\n    height: 15rem !important;\n  }\n  .xl\\:h-16rem {\n    height: 16rem !important;\n  }\n  .xl\\:h-17rem {\n    height: 17rem !important;\n  }\n  .xl\\:h-18rem {\n    height: 18rem !important;\n  }\n  .xl\\:h-19rem {\n    height: 19rem !important;\n  }\n  .xl\\:h-20rem {\n    height: 20rem !important;\n  }\n  .xl\\:h-21rem {\n    height: 21rem !important;\n  }\n  .xl\\:h-22rem {\n    height: 22rem !important;\n  }\n  .xl\\:h-23rem {\n    height: 23rem !important;\n  }\n  .xl\\:h-24rem {\n    height: 24rem !important;\n  }\n  .xl\\:h-25rem {\n    height: 25rem !important;\n  }\n  .xl\\:h-26rem {\n    height: 26rem !important;\n  }\n  .xl\\:h-27rem {\n    height: 27rem !important;\n  }\n  .xl\\:h-28rem {\n    height: 28rem !important;\n  }\n  .xl\\:h-29rem {\n    height: 29rem !important;\n  }\n  .xl\\:h-30rem {\n    height: 30rem !important;\n  }\n}\n.min-w-0 {\n  min-width: 0px !important;\n}\n\n.min-w-full {\n  min-width: 100% !important;\n}\n\n.min-w-screen {\n  min-width: 100vw !important;\n}\n\n.min-w-min {\n  min-width: min-content !important;\n}\n\n.min-w-max {\n  min-width: max-content !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:min-w-0 {\n    min-width: 0px !important;\n  }\n  .sm\\:min-w-full {\n    min-width: 100% !important;\n  }\n  .sm\\:min-w-screen {\n    min-width: 100vw !important;\n  }\n  .sm\\:min-w-min {\n    min-width: min-content !important;\n  }\n  .sm\\:min-w-max {\n    min-width: max-content !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:min-w-0 {\n    min-width: 0px !important;\n  }\n  .md\\:min-w-full {\n    min-width: 100% !important;\n  }\n  .md\\:min-w-screen {\n    min-width: 100vw !important;\n  }\n  .md\\:min-w-min {\n    min-width: min-content !important;\n  }\n  .md\\:min-w-max {\n    min-width: max-content !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:min-w-0 {\n    min-width: 0px !important;\n  }\n  .lg\\:min-w-full {\n    min-width: 100% !important;\n  }\n  .lg\\:min-w-screen {\n    min-width: 100vw !important;\n  }\n  .lg\\:min-w-min {\n    min-width: min-content !important;\n  }\n  .lg\\:min-w-max {\n    min-width: max-content !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:min-w-0 {\n    min-width: 0px !important;\n  }\n  .xl\\:min-w-full {\n    min-width: 100% !important;\n  }\n  .xl\\:min-w-screen {\n    min-width: 100vw !important;\n  }\n  .xl\\:min-w-min {\n    min-width: min-content !important;\n  }\n  .xl\\:min-w-max {\n    min-width: max-content !important;\n  }\n}\n.max-w-0 {\n  max-width: 0px !important;\n}\n\n.max-w-full {\n  max-width: 100% !important;\n}\n\n.max-w-screen {\n  max-width: 100vw !important;\n}\n\n.max-w-min {\n  max-width: min-content !important;\n}\n\n.max-w-max {\n  max-width: max-content !important;\n}\n\n.max-w-fit {\n  max-width: fit-content !important;\n}\n\n.max-w-1rem {\n  max-width: 1rem !important;\n}\n\n.max-w-2rem {\n  max-width: 2rem !important;\n}\n\n.max-w-3rem {\n  max-width: 3rem !important;\n}\n\n.max-w-4rem {\n  max-width: 4rem !important;\n}\n\n.max-w-5rem {\n  max-width: 5rem !important;\n}\n\n.max-w-6rem {\n  max-width: 6rem !important;\n}\n\n.max-w-7rem {\n  max-width: 7rem !important;\n}\n\n.max-w-8rem {\n  max-width: 8rem !important;\n}\n\n.max-w-9rem {\n  max-width: 9rem !important;\n}\n\n.max-w-10rem {\n  max-width: 10rem !important;\n}\n\n.max-w-11rem {\n  max-width: 11rem !important;\n}\n\n.max-w-12rem {\n  max-width: 12rem !important;\n}\n\n.max-w-13rem {\n  max-width: 13rem !important;\n}\n\n.max-w-14rem {\n  max-width: 14rem !important;\n}\n\n.max-w-15rem {\n  max-width: 15rem !important;\n}\n\n.max-w-16rem {\n  max-width: 16rem !important;\n}\n\n.max-w-17rem {\n  max-width: 17rem !important;\n}\n\n.max-w-18rem {\n  max-width: 18rem !important;\n}\n\n.max-w-19rem {\n  max-width: 19rem !important;\n}\n\n.max-w-20rem {\n  max-width: 20rem !important;\n}\n\n.max-w-21rem {\n  max-width: 21rem !important;\n}\n\n.max-w-22rem {\n  max-width: 22rem !important;\n}\n\n.max-w-23rem {\n  max-width: 23rem !important;\n}\n\n.max-w-24rem {\n  max-width: 24rem !important;\n}\n\n.max-w-25rem {\n  max-width: 25rem !important;\n}\n\n.max-w-26rem {\n  max-width: 26rem !important;\n}\n\n.max-w-27rem {\n  max-width: 27rem !important;\n}\n\n.max-w-28rem {\n  max-width: 28rem !important;\n}\n\n.max-w-29rem {\n  max-width: 29rem !important;\n}\n\n.max-w-30rem {\n  max-width: 30rem !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:max-w-0 {\n    max-width: 0px !important;\n  }\n  .sm\\:max-w-full {\n    max-width: 100% !important;\n  }\n  .sm\\:max-w-screen {\n    max-width: 100vw !important;\n  }\n  .sm\\:max-w-min {\n    max-width: min-content !important;\n  }\n  .sm\\:max-w-max {\n    max-width: max-content !important;\n  }\n  .sm\\:max-w-fit {\n    max-width: fit-content !important;\n  }\n  .sm\\:max-w-1rem {\n    max-width: 1rem !important;\n  }\n  .sm\\:max-w-2rem {\n    max-width: 2rem !important;\n  }\n  .sm\\:max-w-3rem {\n    max-width: 3rem !important;\n  }\n  .sm\\:max-w-4rem {\n    max-width: 4rem !important;\n  }\n  .sm\\:max-w-5rem {\n    max-width: 5rem !important;\n  }\n  .sm\\:max-w-6rem {\n    max-width: 6rem !important;\n  }\n  .sm\\:max-w-7rem {\n    max-width: 7rem !important;\n  }\n  .sm\\:max-w-8rem {\n    max-width: 8rem !important;\n  }\n  .sm\\:max-w-9rem {\n    max-width: 9rem !important;\n  }\n  .sm\\:max-w-10rem {\n    max-width: 10rem !important;\n  }\n  .sm\\:max-w-11rem {\n    max-width: 11rem !important;\n  }\n  .sm\\:max-w-12rem {\n    max-width: 12rem !important;\n  }\n  .sm\\:max-w-13rem {\n    max-width: 13rem !important;\n  }\n  .sm\\:max-w-14rem {\n    max-width: 14rem !important;\n  }\n  .sm\\:max-w-15rem {\n    max-width: 15rem !important;\n  }\n  .sm\\:max-w-16rem {\n    max-width: 16rem !important;\n  }\n  .sm\\:max-w-17rem {\n    max-width: 17rem !important;\n  }\n  .sm\\:max-w-18rem {\n    max-width: 18rem !important;\n  }\n  .sm\\:max-w-19rem {\n    max-width: 19rem !important;\n  }\n  .sm\\:max-w-20rem {\n    max-width: 20rem !important;\n  }\n  .sm\\:max-w-21rem {\n    max-width: 21rem !important;\n  }\n  .sm\\:max-w-22rem {\n    max-width: 22rem !important;\n  }\n  .sm\\:max-w-23rem {\n    max-width: 23rem !important;\n  }\n  .sm\\:max-w-24rem {\n    max-width: 24rem !important;\n  }\n  .sm\\:max-w-25rem {\n    max-width: 25rem !important;\n  }\n  .sm\\:max-w-26rem {\n    max-width: 26rem !important;\n  }\n  .sm\\:max-w-27rem {\n    max-width: 27rem !important;\n  }\n  .sm\\:max-w-28rem {\n    max-width: 28rem !important;\n  }\n  .sm\\:max-w-29rem {\n    max-width: 29rem !important;\n  }\n  .sm\\:max-w-30rem {\n    max-width: 30rem !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:max-w-0 {\n    max-width: 0px !important;\n  }\n  .md\\:max-w-full {\n    max-width: 100% !important;\n  }\n  .md\\:max-w-screen {\n    max-width: 100vw !important;\n  }\n  .md\\:max-w-min {\n    max-width: min-content !important;\n  }\n  .md\\:max-w-max {\n    max-width: max-content !important;\n  }\n  .md\\:max-w-fit {\n    max-width: fit-content !important;\n  }\n  .md\\:max-w-1rem {\n    max-width: 1rem !important;\n  }\n  .md\\:max-w-2rem {\n    max-width: 2rem !important;\n  }\n  .md\\:max-w-3rem {\n    max-width: 3rem !important;\n  }\n  .md\\:max-w-4rem {\n    max-width: 4rem !important;\n  }\n  .md\\:max-w-5rem {\n    max-width: 5rem !important;\n  }\n  .md\\:max-w-6rem {\n    max-width: 6rem !important;\n  }\n  .md\\:max-w-7rem {\n    max-width: 7rem !important;\n  }\n  .md\\:max-w-8rem {\n    max-width: 8rem !important;\n  }\n  .md\\:max-w-9rem {\n    max-width: 9rem !important;\n  }\n  .md\\:max-w-10rem {\n    max-width: 10rem !important;\n  }\n  .md\\:max-w-11rem {\n    max-width: 11rem !important;\n  }\n  .md\\:max-w-12rem {\n    max-width: 12rem !important;\n  }\n  .md\\:max-w-13rem {\n    max-width: 13rem !important;\n  }\n  .md\\:max-w-14rem {\n    max-width: 14rem !important;\n  }\n  .md\\:max-w-15rem {\n    max-width: 15rem !important;\n  }\n  .md\\:max-w-16rem {\n    max-width: 16rem !important;\n  }\n  .md\\:max-w-17rem {\n    max-width: 17rem !important;\n  }\n  .md\\:max-w-18rem {\n    max-width: 18rem !important;\n  }\n  .md\\:max-w-19rem {\n    max-width: 19rem !important;\n  }\n  .md\\:max-w-20rem {\n    max-width: 20rem !important;\n  }\n  .md\\:max-w-21rem {\n    max-width: 21rem !important;\n  }\n  .md\\:max-w-22rem {\n    max-width: 22rem !important;\n  }\n  .md\\:max-w-23rem {\n    max-width: 23rem !important;\n  }\n  .md\\:max-w-24rem {\n    max-width: 24rem !important;\n  }\n  .md\\:max-w-25rem {\n    max-width: 25rem !important;\n  }\n  .md\\:max-w-26rem {\n    max-width: 26rem !important;\n  }\n  .md\\:max-w-27rem {\n    max-width: 27rem !important;\n  }\n  .md\\:max-w-28rem {\n    max-width: 28rem !important;\n  }\n  .md\\:max-w-29rem {\n    max-width: 29rem !important;\n  }\n  .md\\:max-w-30rem {\n    max-width: 30rem !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:max-w-0 {\n    max-width: 0px !important;\n  }\n  .lg\\:max-w-full {\n    max-width: 100% !important;\n  }\n  .lg\\:max-w-screen {\n    max-width: 100vw !important;\n  }\n  .lg\\:max-w-min {\n    max-width: min-content !important;\n  }\n  .lg\\:max-w-max {\n    max-width: max-content !important;\n  }\n  .lg\\:max-w-fit {\n    max-width: fit-content !important;\n  }\n  .lg\\:max-w-1rem {\n    max-width: 1rem !important;\n  }\n  .lg\\:max-w-2rem {\n    max-width: 2rem !important;\n  }\n  .lg\\:max-w-3rem {\n    max-width: 3rem !important;\n  }\n  .lg\\:max-w-4rem {\n    max-width: 4rem !important;\n  }\n  .lg\\:max-w-5rem {\n    max-width: 5rem !important;\n  }\n  .lg\\:max-w-6rem {\n    max-width: 6rem !important;\n  }\n  .lg\\:max-w-7rem {\n    max-width: 7rem !important;\n  }\n  .lg\\:max-w-8rem {\n    max-width: 8rem !important;\n  }\n  .lg\\:max-w-9rem {\n    max-width: 9rem !important;\n  }\n  .lg\\:max-w-10rem {\n    max-width: 10rem !important;\n  }\n  .lg\\:max-w-11rem {\n    max-width: 11rem !important;\n  }\n  .lg\\:max-w-12rem {\n    max-width: 12rem !important;\n  }\n  .lg\\:max-w-13rem {\n    max-width: 13rem !important;\n  }\n  .lg\\:max-w-14rem {\n    max-width: 14rem !important;\n  }\n  .lg\\:max-w-15rem {\n    max-width: 15rem !important;\n  }\n  .lg\\:max-w-16rem {\n    max-width: 16rem !important;\n  }\n  .lg\\:max-w-17rem {\n    max-width: 17rem !important;\n  }\n  .lg\\:max-w-18rem {\n    max-width: 18rem !important;\n  }\n  .lg\\:max-w-19rem {\n    max-width: 19rem !important;\n  }\n  .lg\\:max-w-20rem {\n    max-width: 20rem !important;\n  }\n  .lg\\:max-w-21rem {\n    max-width: 21rem !important;\n  }\n  .lg\\:max-w-22rem {\n    max-width: 22rem !important;\n  }\n  .lg\\:max-w-23rem {\n    max-width: 23rem !important;\n  }\n  .lg\\:max-w-24rem {\n    max-width: 24rem !important;\n  }\n  .lg\\:max-w-25rem {\n    max-width: 25rem !important;\n  }\n  .lg\\:max-w-26rem {\n    max-width: 26rem !important;\n  }\n  .lg\\:max-w-27rem {\n    max-width: 27rem !important;\n  }\n  .lg\\:max-w-28rem {\n    max-width: 28rem !important;\n  }\n  .lg\\:max-w-29rem {\n    max-width: 29rem !important;\n  }\n  .lg\\:max-w-30rem {\n    max-width: 30rem !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:max-w-0 {\n    max-width: 0px !important;\n  }\n  .xl\\:max-w-full {\n    max-width: 100% !important;\n  }\n  .xl\\:max-w-screen {\n    max-width: 100vw !important;\n  }\n  .xl\\:max-w-min {\n    max-width: min-content !important;\n  }\n  .xl\\:max-w-max {\n    max-width: max-content !important;\n  }\n  .xl\\:max-w-fit {\n    max-width: fit-content !important;\n  }\n  .xl\\:max-w-1rem {\n    max-width: 1rem !important;\n  }\n  .xl\\:max-w-2rem {\n    max-width: 2rem !important;\n  }\n  .xl\\:max-w-3rem {\n    max-width: 3rem !important;\n  }\n  .xl\\:max-w-4rem {\n    max-width: 4rem !important;\n  }\n  .xl\\:max-w-5rem {\n    max-width: 5rem !important;\n  }\n  .xl\\:max-w-6rem {\n    max-width: 6rem !important;\n  }\n  .xl\\:max-w-7rem {\n    max-width: 7rem !important;\n  }\n  .xl\\:max-w-8rem {\n    max-width: 8rem !important;\n  }\n  .xl\\:max-w-9rem {\n    max-width: 9rem !important;\n  }\n  .xl\\:max-w-10rem {\n    max-width: 10rem !important;\n  }\n  .xl\\:max-w-11rem {\n    max-width: 11rem !important;\n  }\n  .xl\\:max-w-12rem {\n    max-width: 12rem !important;\n  }\n  .xl\\:max-w-13rem {\n    max-width: 13rem !important;\n  }\n  .xl\\:max-w-14rem {\n    max-width: 14rem !important;\n  }\n  .xl\\:max-w-15rem {\n    max-width: 15rem !important;\n  }\n  .xl\\:max-w-16rem {\n    max-width: 16rem !important;\n  }\n  .xl\\:max-w-17rem {\n    max-width: 17rem !important;\n  }\n  .xl\\:max-w-18rem {\n    max-width: 18rem !important;\n  }\n  .xl\\:max-w-19rem {\n    max-width: 19rem !important;\n  }\n  .xl\\:max-w-20rem {\n    max-width: 20rem !important;\n  }\n  .xl\\:max-w-21rem {\n    max-width: 21rem !important;\n  }\n  .xl\\:max-w-22rem {\n    max-width: 22rem !important;\n  }\n  .xl\\:max-w-23rem {\n    max-width: 23rem !important;\n  }\n  .xl\\:max-w-24rem {\n    max-width: 24rem !important;\n  }\n  .xl\\:max-w-25rem {\n    max-width: 25rem !important;\n  }\n  .xl\\:max-w-26rem {\n    max-width: 26rem !important;\n  }\n  .xl\\:max-w-27rem {\n    max-width: 27rem !important;\n  }\n  .xl\\:max-w-28rem {\n    max-width: 28rem !important;\n  }\n  .xl\\:max-w-29rem {\n    max-width: 29rem !important;\n  }\n  .xl\\:max-w-30rem {\n    max-width: 30rem !important;\n  }\n}\n.min-h-0 {\n  min-height: 0px !important;\n}\n\n.min-h-full {\n  min-height: 100% !important;\n}\n\n.min-h-screen {\n  min-height: 100vh !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:min-h-0 {\n    min-height: 0px !important;\n  }\n  .sm\\:min-h-full {\n    min-height: 100% !important;\n  }\n  .sm\\:min-h-screen {\n    min-height: 100vh !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:min-h-0 {\n    min-height: 0px !important;\n  }\n  .md\\:min-h-full {\n    min-height: 100% !important;\n  }\n  .md\\:min-h-screen {\n    min-height: 100vh !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:min-h-0 {\n    min-height: 0px !important;\n  }\n  .lg\\:min-h-full {\n    min-height: 100% !important;\n  }\n  .lg\\:min-h-screen {\n    min-height: 100vh !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:min-h-0 {\n    min-height: 0px !important;\n  }\n  .xl\\:min-h-full {\n    min-height: 100% !important;\n  }\n  .xl\\:min-h-screen {\n    min-height: 100vh !important;\n  }\n}\n.max-h-0 {\n  max-height: 0px !important;\n}\n\n.max-h-full {\n  max-height: 100% !important;\n}\n\n.max-h-screen {\n  max-height: 100vh !important;\n}\n\n.max-h-min {\n  max-height: min-content !important;\n}\n\n.max-h-max {\n  max-height: max-content !important;\n}\n\n.max-h-fit {\n  max-height: fit-content !important;\n}\n\n.max-h-1rem {\n  max-height: 1rem !important;\n}\n\n.max-h-2rem {\n  max-height: 2rem !important;\n}\n\n.max-h-3rem {\n  max-height: 3rem !important;\n}\n\n.max-h-4rem {\n  max-height: 4rem !important;\n}\n\n.max-h-5rem {\n  max-height: 5rem !important;\n}\n\n.max-h-6rem {\n  max-height: 6rem !important;\n}\n\n.max-h-7rem {\n  max-height: 7rem !important;\n}\n\n.max-h-8rem {\n  max-height: 8rem !important;\n}\n\n.max-h-9rem {\n  max-height: 9rem !important;\n}\n\n.max-h-10rem {\n  max-height: 10rem !important;\n}\n\n.max-h-11rem {\n  max-height: 11rem !important;\n}\n\n.max-h-12rem {\n  max-height: 12rem !important;\n}\n\n.max-h-13rem {\n  max-height: 13rem !important;\n}\n\n.max-h-14rem {\n  max-height: 14rem !important;\n}\n\n.max-h-15rem {\n  max-height: 15rem !important;\n}\n\n.max-h-16rem {\n  max-height: 16rem !important;\n}\n\n.max-h-17rem {\n  max-height: 17rem !important;\n}\n\n.max-h-18rem {\n  max-height: 18rem !important;\n}\n\n.max-h-19rem {\n  max-height: 19rem !important;\n}\n\n.max-h-20rem {\n  max-height: 20rem !important;\n}\n\n.max-h-21rem {\n  max-height: 21rem !important;\n}\n\n.max-h-22rem {\n  max-height: 22rem !important;\n}\n\n.max-h-23rem {\n  max-height: 23rem !important;\n}\n\n.max-h-24rem {\n  max-height: 24rem !important;\n}\n\n.max-h-25rem {\n  max-height: 25rem !important;\n}\n\n.max-h-26rem {\n  max-height: 26rem !important;\n}\n\n.max-h-27rem {\n  max-height: 27rem !important;\n}\n\n.max-h-28rem {\n  max-height: 28rem !important;\n}\n\n.max-h-29rem {\n  max-height: 29rem !important;\n}\n\n.max-h-30rem {\n  max-height: 30rem !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:max-h-0 {\n    max-height: 0px !important;\n  }\n  .sm\\:max-h-full {\n    max-height: 100% !important;\n  }\n  .sm\\:max-h-screen {\n    max-height: 100vh !important;\n  }\n  .sm\\:max-h-min {\n    max-height: min-content !important;\n  }\n  .sm\\:max-h-max {\n    max-height: max-content !important;\n  }\n  .sm\\:max-h-fit {\n    max-height: fit-content !important;\n  }\n  .sm\\:max-h-1rem {\n    max-height: 1rem !important;\n  }\n  .sm\\:max-h-2rem {\n    max-height: 2rem !important;\n  }\n  .sm\\:max-h-3rem {\n    max-height: 3rem !important;\n  }\n  .sm\\:max-h-4rem {\n    max-height: 4rem !important;\n  }\n  .sm\\:max-h-5rem {\n    max-height: 5rem !important;\n  }\n  .sm\\:max-h-6rem {\n    max-height: 6rem !important;\n  }\n  .sm\\:max-h-7rem {\n    max-height: 7rem !important;\n  }\n  .sm\\:max-h-8rem {\n    max-height: 8rem !important;\n  }\n  .sm\\:max-h-9rem {\n    max-height: 9rem !important;\n  }\n  .sm\\:max-h-10rem {\n    max-height: 10rem !important;\n  }\n  .sm\\:max-h-11rem {\n    max-height: 11rem !important;\n  }\n  .sm\\:max-h-12rem {\n    max-height: 12rem !important;\n  }\n  .sm\\:max-h-13rem {\n    max-height: 13rem !important;\n  }\n  .sm\\:max-h-14rem {\n    max-height: 14rem !important;\n  }\n  .sm\\:max-h-15rem {\n    max-height: 15rem !important;\n  }\n  .sm\\:max-h-16rem {\n    max-height: 16rem !important;\n  }\n  .sm\\:max-h-17rem {\n    max-height: 17rem !important;\n  }\n  .sm\\:max-h-18rem {\n    max-height: 18rem !important;\n  }\n  .sm\\:max-h-19rem {\n    max-height: 19rem !important;\n  }\n  .sm\\:max-h-20rem {\n    max-height: 20rem !important;\n  }\n  .sm\\:max-h-21rem {\n    max-height: 21rem !important;\n  }\n  .sm\\:max-h-22rem {\n    max-height: 22rem !important;\n  }\n  .sm\\:max-h-23rem {\n    max-height: 23rem !important;\n  }\n  .sm\\:max-h-24rem {\n    max-height: 24rem !important;\n  }\n  .sm\\:max-h-25rem {\n    max-height: 25rem !important;\n  }\n  .sm\\:max-h-26rem {\n    max-height: 26rem !important;\n  }\n  .sm\\:max-h-27rem {\n    max-height: 27rem !important;\n  }\n  .sm\\:max-h-28rem {\n    max-height: 28rem !important;\n  }\n  .sm\\:max-h-29rem {\n    max-height: 29rem !important;\n  }\n  .sm\\:max-h-30rem {\n    max-height: 30rem !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:max-h-0 {\n    max-height: 0px !important;\n  }\n  .md\\:max-h-full {\n    max-height: 100% !important;\n  }\n  .md\\:max-h-screen {\n    max-height: 100vh !important;\n  }\n  .md\\:max-h-min {\n    max-height: min-content !important;\n  }\n  .md\\:max-h-max {\n    max-height: max-content !important;\n  }\n  .md\\:max-h-fit {\n    max-height: fit-content !important;\n  }\n  .md\\:max-h-1rem {\n    max-height: 1rem !important;\n  }\n  .md\\:max-h-2rem {\n    max-height: 2rem !important;\n  }\n  .md\\:max-h-3rem {\n    max-height: 3rem !important;\n  }\n  .md\\:max-h-4rem {\n    max-height: 4rem !important;\n  }\n  .md\\:max-h-5rem {\n    max-height: 5rem !important;\n  }\n  .md\\:max-h-6rem {\n    max-height: 6rem !important;\n  }\n  .md\\:max-h-7rem {\n    max-height: 7rem !important;\n  }\n  .md\\:max-h-8rem {\n    max-height: 8rem !important;\n  }\n  .md\\:max-h-9rem {\n    max-height: 9rem !important;\n  }\n  .md\\:max-h-10rem {\n    max-height: 10rem !important;\n  }\n  .md\\:max-h-11rem {\n    max-height: 11rem !important;\n  }\n  .md\\:max-h-12rem {\n    max-height: 12rem !important;\n  }\n  .md\\:max-h-13rem {\n    max-height: 13rem !important;\n  }\n  .md\\:max-h-14rem {\n    max-height: 14rem !important;\n  }\n  .md\\:max-h-15rem {\n    max-height: 15rem !important;\n  }\n  .md\\:max-h-16rem {\n    max-height: 16rem !important;\n  }\n  .md\\:max-h-17rem {\n    max-height: 17rem !important;\n  }\n  .md\\:max-h-18rem {\n    max-height: 18rem !important;\n  }\n  .md\\:max-h-19rem {\n    max-height: 19rem !important;\n  }\n  .md\\:max-h-20rem {\n    max-height: 20rem !important;\n  }\n  .md\\:max-h-21rem {\n    max-height: 21rem !important;\n  }\n  .md\\:max-h-22rem {\n    max-height: 22rem !important;\n  }\n  .md\\:max-h-23rem {\n    max-height: 23rem !important;\n  }\n  .md\\:max-h-24rem {\n    max-height: 24rem !important;\n  }\n  .md\\:max-h-25rem {\n    max-height: 25rem !important;\n  }\n  .md\\:max-h-26rem {\n    max-height: 26rem !important;\n  }\n  .md\\:max-h-27rem {\n    max-height: 27rem !important;\n  }\n  .md\\:max-h-28rem {\n    max-height: 28rem !important;\n  }\n  .md\\:max-h-29rem {\n    max-height: 29rem !important;\n  }\n  .md\\:max-h-30rem {\n    max-height: 30rem !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:max-h-0 {\n    max-height: 0px !important;\n  }\n  .lg\\:max-h-full {\n    max-height: 100% !important;\n  }\n  .lg\\:max-h-screen {\n    max-height: 100vh !important;\n  }\n  .lg\\:max-h-min {\n    max-height: min-content !important;\n  }\n  .lg\\:max-h-max {\n    max-height: max-content !important;\n  }\n  .lg\\:max-h-fit {\n    max-height: fit-content !important;\n  }\n  .lg\\:max-h-1rem {\n    max-height: 1rem !important;\n  }\n  .lg\\:max-h-2rem {\n    max-height: 2rem !important;\n  }\n  .lg\\:max-h-3rem {\n    max-height: 3rem !important;\n  }\n  .lg\\:max-h-4rem {\n    max-height: 4rem !important;\n  }\n  .lg\\:max-h-5rem {\n    max-height: 5rem !important;\n  }\n  .lg\\:max-h-6rem {\n    max-height: 6rem !important;\n  }\n  .lg\\:max-h-7rem {\n    max-height: 7rem !important;\n  }\n  .lg\\:max-h-8rem {\n    max-height: 8rem !important;\n  }\n  .lg\\:max-h-9rem {\n    max-height: 9rem !important;\n  }\n  .lg\\:max-h-10rem {\n    max-height: 10rem !important;\n  }\n  .lg\\:max-h-11rem {\n    max-height: 11rem !important;\n  }\n  .lg\\:max-h-12rem {\n    max-height: 12rem !important;\n  }\n  .lg\\:max-h-13rem {\n    max-height: 13rem !important;\n  }\n  .lg\\:max-h-14rem {\n    max-height: 14rem !important;\n  }\n  .lg\\:max-h-15rem {\n    max-height: 15rem !important;\n  }\n  .lg\\:max-h-16rem {\n    max-height: 16rem !important;\n  }\n  .lg\\:max-h-17rem {\n    max-height: 17rem !important;\n  }\n  .lg\\:max-h-18rem {\n    max-height: 18rem !important;\n  }\n  .lg\\:max-h-19rem {\n    max-height: 19rem !important;\n  }\n  .lg\\:max-h-20rem {\n    max-height: 20rem !important;\n  }\n  .lg\\:max-h-21rem {\n    max-height: 21rem !important;\n  }\n  .lg\\:max-h-22rem {\n    max-height: 22rem !important;\n  }\n  .lg\\:max-h-23rem {\n    max-height: 23rem !important;\n  }\n  .lg\\:max-h-24rem {\n    max-height: 24rem !important;\n  }\n  .lg\\:max-h-25rem {\n    max-height: 25rem !important;\n  }\n  .lg\\:max-h-26rem {\n    max-height: 26rem !important;\n  }\n  .lg\\:max-h-27rem {\n    max-height: 27rem !important;\n  }\n  .lg\\:max-h-28rem {\n    max-height: 28rem !important;\n  }\n  .lg\\:max-h-29rem {\n    max-height: 29rem !important;\n  }\n  .lg\\:max-h-30rem {\n    max-height: 30rem !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:max-h-0 {\n    max-height: 0px !important;\n  }\n  .xl\\:max-h-full {\n    max-height: 100% !important;\n  }\n  .xl\\:max-h-screen {\n    max-height: 100vh !important;\n  }\n  .xl\\:max-h-min {\n    max-height: min-content !important;\n  }\n  .xl\\:max-h-max {\n    max-height: max-content !important;\n  }\n  .xl\\:max-h-fit {\n    max-height: fit-content !important;\n  }\n  .xl\\:max-h-1rem {\n    max-height: 1rem !important;\n  }\n  .xl\\:max-h-2rem {\n    max-height: 2rem !important;\n  }\n  .xl\\:max-h-3rem {\n    max-height: 3rem !important;\n  }\n  .xl\\:max-h-4rem {\n    max-height: 4rem !important;\n  }\n  .xl\\:max-h-5rem {\n    max-height: 5rem !important;\n  }\n  .xl\\:max-h-6rem {\n    max-height: 6rem !important;\n  }\n  .xl\\:max-h-7rem {\n    max-height: 7rem !important;\n  }\n  .xl\\:max-h-8rem {\n    max-height: 8rem !important;\n  }\n  .xl\\:max-h-9rem {\n    max-height: 9rem !important;\n  }\n  .xl\\:max-h-10rem {\n    max-height: 10rem !important;\n  }\n  .xl\\:max-h-11rem {\n    max-height: 11rem !important;\n  }\n  .xl\\:max-h-12rem {\n    max-height: 12rem !important;\n  }\n  .xl\\:max-h-13rem {\n    max-height: 13rem !important;\n  }\n  .xl\\:max-h-14rem {\n    max-height: 14rem !important;\n  }\n  .xl\\:max-h-15rem {\n    max-height: 15rem !important;\n  }\n  .xl\\:max-h-16rem {\n    max-height: 16rem !important;\n  }\n  .xl\\:max-h-17rem {\n    max-height: 17rem !important;\n  }\n  .xl\\:max-h-18rem {\n    max-height: 18rem !important;\n  }\n  .xl\\:max-h-19rem {\n    max-height: 19rem !important;\n  }\n  .xl\\:max-h-20rem {\n    max-height: 20rem !important;\n  }\n  .xl\\:max-h-21rem {\n    max-height: 21rem !important;\n  }\n  .xl\\:max-h-22rem {\n    max-height: 22rem !important;\n  }\n  .xl\\:max-h-23rem {\n    max-height: 23rem !important;\n  }\n  .xl\\:max-h-24rem {\n    max-height: 24rem !important;\n  }\n  .xl\\:max-h-25rem {\n    max-height: 25rem !important;\n  }\n  .xl\\:max-h-26rem {\n    max-height: 26rem !important;\n  }\n  .xl\\:max-h-27rem {\n    max-height: 27rem !important;\n  }\n  .xl\\:max-h-28rem {\n    max-height: 28rem !important;\n  }\n  .xl\\:max-h-29rem {\n    max-height: 29rem !important;\n  }\n  .xl\\:max-h-30rem {\n    max-height: 30rem !important;\n  }\n}\n.static {\n  position: static !important;\n}\n\n.fixed {\n  position: fixed !important;\n}\n\n.absolute {\n  position: absolute !important;\n}\n\n.relative {\n  position: relative !important;\n}\n\n.sticky {\n  position: sticky !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:static {\n    position: static !important;\n  }\n  .sm\\:fixed {\n    position: fixed !important;\n  }\n  .sm\\:absolute {\n    position: absolute !important;\n  }\n  .sm\\:relative {\n    position: relative !important;\n  }\n  .sm\\:sticky {\n    position: sticky !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:static {\n    position: static !important;\n  }\n  .md\\:fixed {\n    position: fixed !important;\n  }\n  .md\\:absolute {\n    position: absolute !important;\n  }\n  .md\\:relative {\n    position: relative !important;\n  }\n  .md\\:sticky {\n    position: sticky !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:static {\n    position: static !important;\n  }\n  .lg\\:fixed {\n    position: fixed !important;\n  }\n  .lg\\:absolute {\n    position: absolute !important;\n  }\n  .lg\\:relative {\n    position: relative !important;\n  }\n  .lg\\:sticky {\n    position: sticky !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:static {\n    position: static !important;\n  }\n  .xl\\:fixed {\n    position: fixed !important;\n  }\n  .xl\\:absolute {\n    position: absolute !important;\n  }\n  .xl\\:relative {\n    position: relative !important;\n  }\n  .xl\\:sticky {\n    position: sticky !important;\n  }\n}\n.top-auto {\n  top: auto !important;\n}\n\n.top-0 {\n  top: 0px !important;\n}\n\n.top-50 {\n  top: 50% !important;\n}\n\n.top-100 {\n  top: 100% !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:top-auto {\n    top: auto !important;\n  }\n  .sm\\:top-0 {\n    top: 0px !important;\n  }\n  .sm\\:top-50 {\n    top: 50% !important;\n  }\n  .sm\\:top-100 {\n    top: 100% !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:top-auto {\n    top: auto !important;\n  }\n  .md\\:top-0 {\n    top: 0px !important;\n  }\n  .md\\:top-50 {\n    top: 50% !important;\n  }\n  .md\\:top-100 {\n    top: 100% !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:top-auto {\n    top: auto !important;\n  }\n  .lg\\:top-0 {\n    top: 0px !important;\n  }\n  .lg\\:top-50 {\n    top: 50% !important;\n  }\n  .lg\\:top-100 {\n    top: 100% !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:top-auto {\n    top: auto !important;\n  }\n  .xl\\:top-0 {\n    top: 0px !important;\n  }\n  .xl\\:top-50 {\n    top: 50% !important;\n  }\n  .xl\\:top-100 {\n    top: 100% !important;\n  }\n}\n.left-auto {\n  left: auto !important;\n}\n\n.left-0 {\n  left: 0px !important;\n}\n\n.left-50 {\n  left: 50% !important;\n}\n\n.left-100 {\n  left: 100% !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:left-auto {\n    left: auto !important;\n  }\n  .sm\\:left-0 {\n    left: 0px !important;\n  }\n  .sm\\:left-50 {\n    left: 50% !important;\n  }\n  .sm\\:left-100 {\n    left: 100% !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:left-auto {\n    left: auto !important;\n  }\n  .md\\:left-0 {\n    left: 0px !important;\n  }\n  .md\\:left-50 {\n    left: 50% !important;\n  }\n  .md\\:left-100 {\n    left: 100% !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:left-auto {\n    left: auto !important;\n  }\n  .lg\\:left-0 {\n    left: 0px !important;\n  }\n  .lg\\:left-50 {\n    left: 50% !important;\n  }\n  .lg\\:left-100 {\n    left: 100% !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:left-auto {\n    left: auto !important;\n  }\n  .xl\\:left-0 {\n    left: 0px !important;\n  }\n  .xl\\:left-50 {\n    left: 50% !important;\n  }\n  .xl\\:left-100 {\n    left: 100% !important;\n  }\n}\n.right-auto {\n  right: auto !important;\n}\n\n.right-0 {\n  right: 0px !important;\n}\n\n.right-50 {\n  right: 50% !important;\n}\n\n.right-100 {\n  right: 100% !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:right-auto {\n    right: auto !important;\n  }\n  .sm\\:right-0 {\n    right: 0px !important;\n  }\n  .sm\\:right-50 {\n    right: 50% !important;\n  }\n  .sm\\:right-100 {\n    right: 100% !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:right-auto {\n    right: auto !important;\n  }\n  .md\\:right-0 {\n    right: 0px !important;\n  }\n  .md\\:right-50 {\n    right: 50% !important;\n  }\n  .md\\:right-100 {\n    right: 100% !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:right-auto {\n    right: auto !important;\n  }\n  .lg\\:right-0 {\n    right: 0px !important;\n  }\n  .lg\\:right-50 {\n    right: 50% !important;\n  }\n  .lg\\:right-100 {\n    right: 100% !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:right-auto {\n    right: auto !important;\n  }\n  .xl\\:right-0 {\n    right: 0px !important;\n  }\n  .xl\\:right-50 {\n    right: 50% !important;\n  }\n  .xl\\:right-100 {\n    right: 100% !important;\n  }\n}\n.bottom-auto {\n  bottom: auto !important;\n}\n\n.bottom-0 {\n  bottom: 0px !important;\n}\n\n.bottom-50 {\n  bottom: 50% !important;\n}\n\n.bottom-100 {\n  bottom: 100% !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:bottom-auto {\n    bottom: auto !important;\n  }\n  .sm\\:bottom-0 {\n    bottom: 0px !important;\n  }\n  .sm\\:bottom-50 {\n    bottom: 50% !important;\n  }\n  .sm\\:bottom-100 {\n    bottom: 100% !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:bottom-auto {\n    bottom: auto !important;\n  }\n  .md\\:bottom-0 {\n    bottom: 0px !important;\n  }\n  .md\\:bottom-50 {\n    bottom: 50% !important;\n  }\n  .md\\:bottom-100 {\n    bottom: 100% !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:bottom-auto {\n    bottom: auto !important;\n  }\n  .lg\\:bottom-0 {\n    bottom: 0px !important;\n  }\n  .lg\\:bottom-50 {\n    bottom: 50% !important;\n  }\n  .lg\\:bottom-100 {\n    bottom: 100% !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:bottom-auto {\n    bottom: auto !important;\n  }\n  .xl\\:bottom-0 {\n    bottom: 0px !important;\n  }\n  .xl\\:bottom-50 {\n    bottom: 50% !important;\n  }\n  .xl\\:bottom-100 {\n    bottom: 100% !important;\n  }\n}\n.overflow-auto {\n  overflow: auto !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.overflow-visible {\n  overflow: visible !important;\n}\n\n.overflow-scroll {\n  overflow: scroll !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:overflow-auto {\n    overflow: auto !important;\n  }\n  .sm\\:overflow-hidden {\n    overflow: hidden !important;\n  }\n  .sm\\:overflow-visible {\n    overflow: visible !important;\n  }\n  .sm\\:overflow-scroll {\n    overflow: scroll !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:overflow-auto {\n    overflow: auto !important;\n  }\n  .md\\:overflow-hidden {\n    overflow: hidden !important;\n  }\n  .md\\:overflow-visible {\n    overflow: visible !important;\n  }\n  .md\\:overflow-scroll {\n    overflow: scroll !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:overflow-auto {\n    overflow: auto !important;\n  }\n  .lg\\:overflow-hidden {\n    overflow: hidden !important;\n  }\n  .lg\\:overflow-visible {\n    overflow: visible !important;\n  }\n  .lg\\:overflow-scroll {\n    overflow: scroll !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:overflow-auto {\n    overflow: auto !important;\n  }\n  .xl\\:overflow-hidden {\n    overflow: hidden !important;\n  }\n  .xl\\:overflow-visible {\n    overflow: visible !important;\n  }\n  .xl\\:overflow-scroll {\n    overflow: scroll !important;\n  }\n}\n.overflow-x-auto {\n  overflow-x: auto !important;\n}\n\n.overflow-x-hidden {\n  overflow-x: hidden !important;\n}\n\n.overflow-x-visible {\n  overflow-x: visible !important;\n}\n\n.overflow-x-scroll {\n  overflow-x: scroll !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:overflow-x-auto {\n    overflow-x: auto !important;\n  }\n  .sm\\:overflow-x-hidden {\n    overflow-x: hidden !important;\n  }\n  .sm\\:overflow-x-visible {\n    overflow-x: visible !important;\n  }\n  .sm\\:overflow-x-scroll {\n    overflow-x: scroll !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:overflow-x-auto {\n    overflow-x: auto !important;\n  }\n  .md\\:overflow-x-hidden {\n    overflow-x: hidden !important;\n  }\n  .md\\:overflow-x-visible {\n    overflow-x: visible !important;\n  }\n  .md\\:overflow-x-scroll {\n    overflow-x: scroll !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:overflow-x-auto {\n    overflow-x: auto !important;\n  }\n  .lg\\:overflow-x-hidden {\n    overflow-x: hidden !important;\n  }\n  .lg\\:overflow-x-visible {\n    overflow-x: visible !important;\n  }\n  .lg\\:overflow-x-scroll {\n    overflow-x: scroll !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:overflow-x-auto {\n    overflow-x: auto !important;\n  }\n  .xl\\:overflow-x-hidden {\n    overflow-x: hidden !important;\n  }\n  .xl\\:overflow-x-visible {\n    overflow-x: visible !important;\n  }\n  .xl\\:overflow-x-scroll {\n    overflow-x: scroll !important;\n  }\n}\n.overflow-y-auto {\n  overflow-y: auto !important;\n}\n\n.overflow-y-hidden {\n  overflow-y: hidden !important;\n}\n\n.overflow-y-visible {\n  overflow-y: visible !important;\n}\n\n.overflow-y-scroll {\n  overflow-y: scroll !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:overflow-y-auto {\n    overflow-y: auto !important;\n  }\n  .sm\\:overflow-y-hidden {\n    overflow-y: hidden !important;\n  }\n  .sm\\:overflow-y-visible {\n    overflow-y: visible !important;\n  }\n  .sm\\:overflow-y-scroll {\n    overflow-y: scroll !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:overflow-y-auto {\n    overflow-y: auto !important;\n  }\n  .md\\:overflow-y-hidden {\n    overflow-y: hidden !important;\n  }\n  .md\\:overflow-y-visible {\n    overflow-y: visible !important;\n  }\n  .md\\:overflow-y-scroll {\n    overflow-y: scroll !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:overflow-y-auto {\n    overflow-y: auto !important;\n  }\n  .lg\\:overflow-y-hidden {\n    overflow-y: hidden !important;\n  }\n  .lg\\:overflow-y-visible {\n    overflow-y: visible !important;\n  }\n  .lg\\:overflow-y-scroll {\n    overflow-y: scroll !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:overflow-y-auto {\n    overflow-y: auto !important;\n  }\n  .xl\\:overflow-y-hidden {\n    overflow-y: hidden !important;\n  }\n  .xl\\:overflow-y-visible {\n    overflow-y: visible !important;\n  }\n  .xl\\:overflow-y-scroll {\n    overflow-y: scroll !important;\n  }\n}\n.z-auto {\n  z-index: auto !important;\n}\n\n.z-0 {\n  z-index: 0 !important;\n}\n\n.z-1 {\n  z-index: 1 !important;\n}\n\n.z-2 {\n  z-index: 2 !important;\n}\n\n.z-3 {\n  z-index: 3 !important;\n}\n\n.z-4 {\n  z-index: 4 !important;\n}\n\n.z-5 {\n  z-index: 5 !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:z-auto {\n    z-index: auto !important;\n  }\n  .sm\\:z-0 {\n    z-index: 0 !important;\n  }\n  .sm\\:z-1 {\n    z-index: 1 !important;\n  }\n  .sm\\:z-2 {\n    z-index: 2 !important;\n  }\n  .sm\\:z-3 {\n    z-index: 3 !important;\n  }\n  .sm\\:z-4 {\n    z-index: 4 !important;\n  }\n  .sm\\:z-5 {\n    z-index: 5 !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:z-auto {\n    z-index: auto !important;\n  }\n  .md\\:z-0 {\n    z-index: 0 !important;\n  }\n  .md\\:z-1 {\n    z-index: 1 !important;\n  }\n  .md\\:z-2 {\n    z-index: 2 !important;\n  }\n  .md\\:z-3 {\n    z-index: 3 !important;\n  }\n  .md\\:z-4 {\n    z-index: 4 !important;\n  }\n  .md\\:z-5 {\n    z-index: 5 !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:z-auto {\n    z-index: auto !important;\n  }\n  .lg\\:z-0 {\n    z-index: 0 !important;\n  }\n  .lg\\:z-1 {\n    z-index: 1 !important;\n  }\n  .lg\\:z-2 {\n    z-index: 2 !important;\n  }\n  .lg\\:z-3 {\n    z-index: 3 !important;\n  }\n  .lg\\:z-4 {\n    z-index: 4 !important;\n  }\n  .lg\\:z-5 {\n    z-index: 5 !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:z-auto {\n    z-index: auto !important;\n  }\n  .xl\\:z-0 {\n    z-index: 0 !important;\n  }\n  .xl\\:z-1 {\n    z-index: 1 !important;\n  }\n  .xl\\:z-2 {\n    z-index: 2 !important;\n  }\n  .xl\\:z-3 {\n    z-index: 3 !important;\n  }\n  .xl\\:z-4 {\n    z-index: 4 !important;\n  }\n  .xl\\:z-5 {\n    z-index: 5 !important;\n  }\n}\n.bg-repeat {\n  background-repeat: repeat !important;\n}\n\n.bg-no-repeat {\n  background-repeat: no-repeat !important;\n}\n\n.bg-repeat-x {\n  background-repeat: repeat-x !important;\n}\n\n.bg-repeat-y {\n  background-repeat: repeat-y !important;\n}\n\n.bg-repeat-round {\n  background-repeat: round !important;\n}\n\n.bg-repeat-space {\n  background-repeat: space !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:bg-repeat {\n    background-repeat: repeat !important;\n  }\n  .sm\\:bg-no-repeat {\n    background-repeat: no-repeat !important;\n  }\n  .sm\\:bg-repeat-x {\n    background-repeat: repeat-x !important;\n  }\n  .sm\\:bg-repeat-y {\n    background-repeat: repeat-y !important;\n  }\n  .sm\\:bg-repeat-round {\n    background-repeat: round !important;\n  }\n  .sm\\:bg-repeat-space {\n    background-repeat: space !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:bg-repeat {\n    background-repeat: repeat !important;\n  }\n  .md\\:bg-no-repeat {\n    background-repeat: no-repeat !important;\n  }\n  .md\\:bg-repeat-x {\n    background-repeat: repeat-x !important;\n  }\n  .md\\:bg-repeat-y {\n    background-repeat: repeat-y !important;\n  }\n  .md\\:bg-repeat-round {\n    background-repeat: round !important;\n  }\n  .md\\:bg-repeat-space {\n    background-repeat: space !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:bg-repeat {\n    background-repeat: repeat !important;\n  }\n  .lg\\:bg-no-repeat {\n    background-repeat: no-repeat !important;\n  }\n  .lg\\:bg-repeat-x {\n    background-repeat: repeat-x !important;\n  }\n  .lg\\:bg-repeat-y {\n    background-repeat: repeat-y !important;\n  }\n  .lg\\:bg-repeat-round {\n    background-repeat: round !important;\n  }\n  .lg\\:bg-repeat-space {\n    background-repeat: space !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:bg-repeat {\n    background-repeat: repeat !important;\n  }\n  .xl\\:bg-no-repeat {\n    background-repeat: no-repeat !important;\n  }\n  .xl\\:bg-repeat-x {\n    background-repeat: repeat-x !important;\n  }\n  .xl\\:bg-repeat-y {\n    background-repeat: repeat-y !important;\n  }\n  .xl\\:bg-repeat-round {\n    background-repeat: round !important;\n  }\n  .xl\\:bg-repeat-space {\n    background-repeat: space !important;\n  }\n}\n.bg-auto {\n  background-size: auto !important;\n}\n\n.bg-cover {\n  background-size: cover !important;\n}\n\n.bg-contain {\n  background-size: contain !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:bg-auto {\n    background-size: auto !important;\n  }\n  .sm\\:bg-cover {\n    background-size: cover !important;\n  }\n  .sm\\:bg-contain {\n    background-size: contain !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:bg-auto {\n    background-size: auto !important;\n  }\n  .md\\:bg-cover {\n    background-size: cover !important;\n  }\n  .md\\:bg-contain {\n    background-size: contain !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:bg-auto {\n    background-size: auto !important;\n  }\n  .lg\\:bg-cover {\n    background-size: cover !important;\n  }\n  .lg\\:bg-contain {\n    background-size: contain !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:bg-auto {\n    background-size: auto !important;\n  }\n  .xl\\:bg-cover {\n    background-size: cover !important;\n  }\n  .xl\\:bg-contain {\n    background-size: contain !important;\n  }\n}\n.bg-bottom {\n  background-position: bottom !important;\n}\n\n.bg-center {\n  background-position: center !important;\n}\n\n.bg-left {\n  background-position: left !important;\n}\n\n.bg-left-bottom {\n  background-position: left bottom !important;\n}\n\n.bg-left-top {\n  background-position: left top !important;\n}\n\n.bg-right {\n  background-position: right !important;\n}\n\n.bg-right-bottom {\n  background-position: right bottom !important;\n}\n\n.bg-right-top {\n  background-position: right top !important;\n}\n\n.bg-top {\n  background-position: top !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:bg-bottom {\n    background-position: bottom !important;\n  }\n  .sm\\:bg-center {\n    background-position: center !important;\n  }\n  .sm\\:bg-left {\n    background-position: left !important;\n  }\n  .sm\\:bg-left-bottom {\n    background-position: left bottom !important;\n  }\n  .sm\\:bg-left-top {\n    background-position: left top !important;\n  }\n  .sm\\:bg-right {\n    background-position: right !important;\n  }\n  .sm\\:bg-right-bottom {\n    background-position: right bottom !important;\n  }\n  .sm\\:bg-right-top {\n    background-position: right top !important;\n  }\n  .sm\\:bg-top {\n    background-position: top !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:bg-bottom {\n    background-position: bottom !important;\n  }\n  .md\\:bg-center {\n    background-position: center !important;\n  }\n  .md\\:bg-left {\n    background-position: left !important;\n  }\n  .md\\:bg-left-bottom {\n    background-position: left bottom !important;\n  }\n  .md\\:bg-left-top {\n    background-position: left top !important;\n  }\n  .md\\:bg-right {\n    background-position: right !important;\n  }\n  .md\\:bg-right-bottom {\n    background-position: right bottom !important;\n  }\n  .md\\:bg-right-top {\n    background-position: right top !important;\n  }\n  .md\\:bg-top {\n    background-position: top !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:bg-bottom {\n    background-position: bottom !important;\n  }\n  .lg\\:bg-center {\n    background-position: center !important;\n  }\n  .lg\\:bg-left {\n    background-position: left !important;\n  }\n  .lg\\:bg-left-bottom {\n    background-position: left bottom !important;\n  }\n  .lg\\:bg-left-top {\n    background-position: left top !important;\n  }\n  .lg\\:bg-right {\n    background-position: right !important;\n  }\n  .lg\\:bg-right-bottom {\n    background-position: right bottom !important;\n  }\n  .lg\\:bg-right-top {\n    background-position: right top !important;\n  }\n  .lg\\:bg-top {\n    background-position: top !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:bg-bottom {\n    background-position: bottom !important;\n  }\n  .xl\\:bg-center {\n    background-position: center !important;\n  }\n  .xl\\:bg-left {\n    background-position: left !important;\n  }\n  .xl\\:bg-left-bottom {\n    background-position: left bottom !important;\n  }\n  .xl\\:bg-left-top {\n    background-position: left top !important;\n  }\n  .xl\\:bg-right {\n    background-position: right !important;\n  }\n  .xl\\:bg-right-bottom {\n    background-position: right bottom !important;\n  }\n  .xl\\:bg-right-top {\n    background-position: right top !important;\n  }\n  .xl\\:bg-top {\n    background-position: top !important;\n  }\n}\n.select-none {\n  user-select: none !important;\n}\n\n.select-text {\n  user-select: text !important;\n}\n\n.select-all {\n  user-select: all !important;\n}\n\n.select-auto {\n  user-select: auto !important;\n}\n\n.list-none {\n  list-style: none !important;\n}\n\n.list-disc {\n  list-style: disc !important;\n}\n\n.list-decimal {\n  list-style: decimal !important;\n}\n\n.appearance-none {\n  appearance: none !important;\n}\n\n.outline-none {\n  outline: none !important;\n}\n\n.pointer-events-none {\n  pointer-events: none !important;\n}\n\n.pointer-events-auto {\n  pointer-events: auto !important;\n}\n\n.cursor-auto {\n  cursor: auto !important;\n}\n\n.cursor-pointer {\n  cursor: pointer !important;\n}\n\n.cursor-wait {\n  cursor: wait !important;\n}\n\n.cursor-move {\n  cursor: move !important;\n}\n\n.select-none {\n  user-select: none !important;\n}\n\n.select-text {\n  user-select: text !important;\n}\n\n.select-all {\n  user-select: all !important;\n}\n\n.select-auto {\n  user-select: auto !important;\n}\n\n.opacity-0 {\n  opacity: 0 !important;\n}\n\n.opacity-10 {\n  opacity: .1 !important;\n}\n\n.opacity-20 {\n  opacity: .2 !important;\n}\n\n.opacity-30 {\n  opacity: .3 !important;\n}\n\n.opacity-40 {\n  opacity: .4 !important;\n}\n\n.opacity-50 {\n  opacity: .5 !important;\n}\n\n.opacity-60 {\n  opacity: .6 !important;\n}\n\n.opacity-70 {\n  opacity: .7 !important;\n}\n\n.opacity-80 {\n  opacity: .8 !important;\n}\n\n.opacity-90 {\n  opacity: .9 !important;\n}\n\n.opacity-100 {\n  opacity: 1 !important;\n}\n\n.reset {\n  all: unset;\n}\n\n.transition-none {\n  transition-property: none !important;\n}\n\n.transition-all {\n  transition-property: all !important;\n}\n\n.transition-colors {\n  transition-property: background-color,border-color,color !important;\n}\n\n.transition-transform {\n  transition-property: transform !important;\n}\n\n.transition-duration-100 {\n  transition-duration: 100ms !important;\n}\n\n.transition-duration-150 {\n  transition-duration: 150ms !important;\n}\n\n.transition-duration-200 {\n  transition-duration: 200ms !important;\n}\n\n.transition-duration-300 {\n  transition-duration: 300ms !important;\n}\n\n.transition-duration-400 {\n  transition-duration: 400ms !important;\n}\n\n.transition-duration-500 {\n  transition-duration: 500ms !important;\n}\n\n.transition-duration-1000 {\n  transition-duration: 1000ms !important;\n}\n\n.transition-duration-2000 {\n  transition-duration: 2000ms !important;\n}\n\n.transition-duration-3000 {\n  transition-duration: 3000ms !important;\n}\n\n.transition-linear {\n  transition-timing-function: linear !important;\n}\n\n.transition-ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;\n}\n\n.transition-ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;\n}\n\n.transition-ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.transition-delay-100 {\n  transition-delay: 100ms !important;\n}\n\n.transition-delay-150 {\n  transition-delay: 150ms !important;\n}\n\n.transition-delay-200 {\n  transition-delay: 200ms !important;\n}\n\n.transition-delay-300 {\n  transition-delay: 300ms !important;\n}\n\n.transition-delay-400 {\n  transition-delay: 400ms !important;\n}\n\n.transition-delay-500 {\n  transition-delay: 500ms !important;\n}\n\n.transition-delay-1000 {\n  transition-delay: 1000ms !important;\n}\n\n.translate-x-0 {\n  transform: translateX(0%) !important;\n}\n\n.translate-x-100 {\n  transform: translateX(100%) !important;\n}\n\n.-translate-x-100 {\n  transform: translateX(-100%) !important;\n}\n\n.translate-y-0 {\n  transform: translateY(0%) !important;\n}\n\n.translate-y-100 {\n  transform: translateY(100%) !important;\n}\n\n.-translate-y-100 {\n  transform: translateY(-100%) !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:translate-x-0 {\n    transform: translateX(0%) !important;\n  }\n  .sm\\:translate-x-100 {\n    transform: translateX(100%) !important;\n  }\n  .sm\\:-translate-x-100 {\n    transform: translateX(-100%) !important;\n  }\n  .sm\\:translate-y-0 {\n    transform: translateY(0%) !important;\n  }\n  .sm\\:translate-y-100 {\n    transform: translateY(100%) !important;\n  }\n  .sm\\:-translate-y-100 {\n    transform: translateY(-100%) !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:translate-x-0 {\n    transform: translateX(0%) !important;\n  }\n  .md\\:translate-x-100 {\n    transform: translateX(100%) !important;\n  }\n  .md\\:-translate-x-100 {\n    transform: translateX(-100%) !important;\n  }\n  .md\\:translate-y-0 {\n    transform: translateY(0%) !important;\n  }\n  .md\\:translate-y-100 {\n    transform: translateY(100%) !important;\n  }\n  .md\\:-translate-y-100 {\n    transform: translateY(-100%) !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:translate-x-0 {\n    transform: translateX(0%) !important;\n  }\n  .lg\\:translate-x-100 {\n    transform: translateX(100%) !important;\n  }\n  .lg\\:-translate-x-100 {\n    transform: translateX(-100%) !important;\n  }\n  .lg\\:translate-y-0 {\n    transform: translateY(0%) !important;\n  }\n  .lg\\:translate-y-100 {\n    transform: translateY(100%) !important;\n  }\n  .lg\\:-translate-y-100 {\n    transform: translateY(-100%) !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:translate-x-0 {\n    transform: translateX(0%) !important;\n  }\n  .xl\\:translate-x-100 {\n    transform: translateX(100%) !important;\n  }\n  .xl\\:-translate-x-100 {\n    transform: translateX(-100%) !important;\n  }\n  .xl\\:translate-y-0 {\n    transform: translateY(0%) !important;\n  }\n  .xl\\:translate-y-100 {\n    transform: translateY(100%) !important;\n  }\n  .xl\\:-translate-y-100 {\n    transform: translateY(-100%) !important;\n  }\n}\n.rotate-45 {\n  transform: rotate(45deg) !important;\n}\n\n.-rotate-45 {\n  transform: rotate(-45deg) !important;\n}\n\n.rotate-90 {\n  transform: rotate(90deg) !important;\n}\n\n.-rotate-90 {\n  transform: rotate(-90deg) !important;\n}\n\n.rotate-180 {\n  transform: rotate(180deg) !important;\n}\n\n.-rotate-180 {\n  transform: rotate(-180deg) !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:rotate-45 {\n    transform: rotate(45deg) !important;\n  }\n  .sm\\:-rotate-45 {\n    transform: rotate(-45deg) !important;\n  }\n  .sm\\:rotate-90 {\n    transform: rotate(90deg) !important;\n  }\n  .sm\\:-rotate-90 {\n    transform: rotate(-90deg) !important;\n  }\n  .sm\\:rotate-180 {\n    transform: rotate(180deg) !important;\n  }\n  .sm\\:-rotate-180 {\n    transform: rotate(-180deg) !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:rotate-45 {\n    transform: rotate(45deg) !important;\n  }\n  .md\\:-rotate-45 {\n    transform: rotate(-45deg) !important;\n  }\n  .md\\:rotate-90 {\n    transform: rotate(90deg) !important;\n  }\n  .md\\:-rotate-90 {\n    transform: rotate(-90deg) !important;\n  }\n  .md\\:rotate-180 {\n    transform: rotate(180deg) !important;\n  }\n  .md\\:-rotate-180 {\n    transform: rotate(-180deg) !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:rotate-45 {\n    transform: rotate(45deg) !important;\n  }\n  .lg\\:-rotate-45 {\n    transform: rotate(-45deg) !important;\n  }\n  .lg\\:rotate-90 {\n    transform: rotate(90deg) !important;\n  }\n  .lg\\:-rotate-90 {\n    transform: rotate(-90deg) !important;\n  }\n  .lg\\:rotate-180 {\n    transform: rotate(180deg) !important;\n  }\n  .lg\\:-rotate-180 {\n    transform: rotate(-180deg) !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:rotate-45 {\n    transform: rotate(45deg) !important;\n  }\n  .xl\\:-rotate-45 {\n    transform: rotate(-45deg) !important;\n  }\n  .xl\\:rotate-90 {\n    transform: rotate(90deg) !important;\n  }\n  .xl\\:-rotate-90 {\n    transform: rotate(-90deg) !important;\n  }\n  .xl\\:rotate-180 {\n    transform: rotate(180deg) !important;\n  }\n  .xl\\:-rotate-180 {\n    transform: rotate(-180deg) !important;\n  }\n}\n.origin-center {\n  transform-origin: center !important;\n}\n\n.origin-top {\n  transform-origin: top !important;\n}\n\n.origin-top-right {\n  transform-origin: top right !important;\n}\n\n.origin-right {\n  transform-origin: right !important;\n}\n\n.origin-bottom-right {\n  transform-origin: bottom right !important;\n}\n\n.origin-bottom {\n  transform-origin: bottom !important;\n}\n\n.origin-bottom-left {\n  transform-origin: bottom left !important;\n}\n\n.origin-left {\n  transform-origin: left !important;\n}\n\n.origin-top-left {\n  transform-origin: top-left !important;\n}\n\n@media screen and (min-width: 576px) {\n  .sm\\:origin-center {\n    transform-origin: center !important;\n  }\n  .sm\\:origin-top {\n    transform-origin: top !important;\n  }\n  .sm\\:origin-top-right {\n    transform-origin: top right !important;\n  }\n  .sm\\:origin-right {\n    transform-origin: right !important;\n  }\n  .sm\\:origin-bottom-right {\n    transform-origin: bottom right !important;\n  }\n  .sm\\:origin-bottom {\n    transform-origin: bottom !important;\n  }\n  .sm\\:origin-bottom-left {\n    transform-origin: bottom left !important;\n  }\n  .sm\\:origin-left {\n    transform-origin: left !important;\n  }\n  .sm\\:origin-top-left {\n    transform-origin: top-left !important;\n  }\n}\n@media screen and (min-width: 768px) {\n  .md\\:origin-center {\n    transform-origin: center !important;\n  }\n  .md\\:origin-top {\n    transform-origin: top !important;\n  }\n  .md\\:origin-top-right {\n    transform-origin: top right !important;\n  }\n  .md\\:origin-right {\n    transform-origin: right !important;\n  }\n  .md\\:origin-bottom-right {\n    transform-origin: bottom right !important;\n  }\n  .md\\:origin-bottom {\n    transform-origin: bottom !important;\n  }\n  .md\\:origin-bottom-left {\n    transform-origin: bottom left !important;\n  }\n  .md\\:origin-left {\n    transform-origin: left !important;\n  }\n  .md\\:origin-top-left {\n    transform-origin: top-left !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  .lg\\:origin-center {\n    transform-origin: center !important;\n  }\n  .lg\\:origin-top {\n    transform-origin: top !important;\n  }\n  .lg\\:origin-top-right {\n    transform-origin: top right !important;\n  }\n  .lg\\:origin-right {\n    transform-origin: right !important;\n  }\n  .lg\\:origin-bottom-right {\n    transform-origin: bottom right !important;\n  }\n  .lg\\:origin-bottom {\n    transform-origin: bottom !important;\n  }\n  .lg\\:origin-bottom-left {\n    transform-origin: bottom left !important;\n  }\n  .lg\\:origin-left {\n    transform-origin: left !important;\n  }\n  .lg\\:origin-top-left {\n    transform-origin: top-left !important;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .xl\\:origin-center {\n    transform-origin: center !important;\n  }\n  .xl\\:origin-top {\n    transform-origin: top !important;\n  }\n  .xl\\:origin-top-right {\n    transform-origin: top right !important;\n  }\n  .xl\\:origin-right {\n    transform-origin: right !important;\n  }\n  .xl\\:origin-bottom-right {\n    transform-origin: bottom right !important;\n  }\n  .xl\\:origin-bottom {\n    transform-origin: bottom !important;\n  }\n  .xl\\:origin-bottom-left {\n    transform-origin: bottom left !important;\n  }\n  .xl\\:origin-left {\n    transform-origin: left !important;\n  }\n  .xl\\:origin-top-left {\n    transform-origin: top-left !important;\n  }\n}\n@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes scalein {\n  0% {\n    opacity: 0;\n    transform: scaleY(0.8);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n}\n@keyframes slidedown {\n  0% {\n    max-height: 0;\n  }\n  100% {\n    max-height: auto;\n  }\n}\n@keyframes slideup {\n  0% {\n    max-height: 1000px;\n  }\n  100% {\n    max-height: 0;\n  }\n}\n@keyframes fadeinleft {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0%);\n  }\n}\n@keyframes fadeoutleft {\n  0% {\n    opacity: 1;\n    transform: translateX(0%);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n}\n@keyframes fadeinright {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0%);\n  }\n}\n@keyframes fadeoutright {\n  0% {\n    opacity: 1;\n    transform: translateX(0%);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n}\n@keyframes fadeinup {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n@keyframes fadeoutup {\n  0% {\n    opacity: 1;\n    transform: translateY(0%);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n@keyframes fadeindown {\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n@keyframes fadeoutdown {\n  0% {\n    opacity: 1;\n    transform: translateY(0%);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n}\n@keyframes animate-width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes flip {\n  from {\n    transform: perspective(2000px) rotateX(-100deg);\n  }\n  to {\n    transform: perspective(2000px) rotateX(0);\n  }\n}\n@keyframes flipleft {\n  from {\n    transform: perspective(2000px) rotateY(-100deg);\n    opacity: 0;\n  }\n  to {\n    transform: perspective(2000px) rotateY(0);\n    opacity: 1;\n  }\n}\n@keyframes flipright {\n  from {\n    transform: perspective(2000px) rotateY(100deg);\n    opacity: 0;\n  }\n  to {\n    transform: perspective(2000px) rotateY(0);\n    opacity: 1;\n  }\n}\n@keyframes flipup {\n  from {\n    transform: perspective(2000px) rotateX(-100deg);\n    opacity: 0;\n  }\n  to {\n    transform: perspective(2000px) rotateX(0);\n    opacity: 1;\n  }\n}\n@keyframes zoomin {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes zoomindown {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n  }\n}\n@keyframes zoominleft {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n  }\n}\n@keyframes zoominright {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n  }\n}\n@keyframes zoominup {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n  }\n}\n.fadein {\n  animation: fadein 0.15s linear;\n}\n\n.fadeout {\n  animation: fadeout 0.15s linear;\n}\n\n.slidedown {\n  animation: slidedown 0.45s ease-in-out;\n}\n\n.slideup {\n  animation: slideup 0.45s cubic-bezier(0, 1, 0, 1);\n}\n\n.scalein {\n  animation: scalein 0.15s linear;\n}\n\n.fadeinleft {\n  animation: fadeinleft 0.15s linear;\n}\n\n.fadeoutleft {\n  animation: fadeoutleft 0.15s linear;\n}\n\n.fadeinright {\n  animation: fadeinright 0.15s linear;\n}\n\n.fadeoutright {\n  animation: fadeoutright 0.15s linear;\n}\n\n.fadeinup {\n  animation: fadeinup 0.15s linear;\n}\n\n.fadeoutup {\n  animation: fadeoutup 0.15s linear;\n}\n\n.fadeindown {\n  animation: fadeindown 0.15s linear;\n}\n\n.fadeoutdown {\n  animation: fadeoutdown 0.15s linear;\n}\n\n.animate-width {\n  animation: animate-width 1000ms linear;\n}\n\n.flip {\n  backface-visibility: visible;\n  animation: flip 0.15s linear;\n}\n\n.flipup {\n  backface-visibility: visible;\n  animation: flipup 0.15s linear;\n}\n\n.flipleft {\n  backface-visibility: visible;\n  animation: flipleft 0.15s linear;\n}\n\n.flipright {\n  backface-visibility: visible;\n  animation: flipright 0.15s linear;\n}\n\n.zoomin {\n  animation: zoomin 0.15s linear;\n}\n\n.zoomindown {\n  animation: zoomindown 0.15s linear;\n}\n\n.zoominleft {\n  animation: zoominleft 0.15s linear;\n}\n\n.zoominright {\n  animation: zoominright 0.15s linear;\n}\n\n.zoominup {\n  animation: zoominup 0.15s linear;\n}\n\n.animation-duration-100 {\n  animation-duration: 100ms !important;\n}\n\n.animation-duration-150 {\n  animation-duration: 150ms !important;\n}\n\n.animation-duration-200 {\n  animation-duration: 200ms !important;\n}\n\n.animation-duration-300 {\n  animation-duration: 300ms !important;\n}\n\n.animation-duration-400 {\n  animation-duration: 400ms !important;\n}\n\n.animation-duration-500 {\n  animation-duration: 500ms !important;\n}\n\n.animation-duration-1000 {\n  animation-duration: 1000ms !important;\n}\n\n.animation-duration-2000 {\n  animation-duration: 2000ms !important;\n}\n\n.animation-duration-3000 {\n  animation-duration: 3000ms !important;\n}\n\n.animation-delay-100 {\n  animation-delay: 100ms !important;\n}\n\n.animation-delay-150 {\n  animation-delay: 150ms !important;\n}\n\n.animation-delay-200 {\n  animation-delay: 200ms !important;\n}\n\n.animation-delay-300 {\n  animation-delay: 300ms !important;\n}\n\n.animation-delay-400 {\n  animation-delay: 400ms !important;\n}\n\n.animation-delay-500 {\n  animation-delay: 500ms !important;\n}\n\n.animation-delay-1000 {\n  animation-delay: 1000ms !important;\n}\n\n.animation-iteration-1 {\n  animation-iteration-count: 1 !important;\n}\n\n.animation-iteration-2 {\n  animation-iteration-count: 2 !important;\n}\n\n.animation-iteration-infinite {\n  animation-iteration-count: infinite !important;\n}\n\n.animation-linear {\n  animation-timing-function: linear !important;\n}\n\n.animation-ease-in {\n  animation-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;\n}\n\n.animation-ease-out {\n  animation-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;\n}\n\n.animation-ease-in-out {\n  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.animation-fill-none {\n  animation-fill-mode: none !important;\n}\n\n.animation-fill-forwards {\n  animation-fill-mode: forwards !important;\n}\n\n.animation-fill-backwards {\n  animation-fill-mode: backwards !important;\n}\n\n.animation-fill-both {\n  animation-fill-mode: both !important;\n}\n";
  styleInject(css_248z$2);

  var css_248z$1 = "/**\n * The primereact[.min].css has been deprecated. In order not to break existing projects, it is currently included in the build as an empty file.\n */";
  styleInject(css_248z$1);

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var useOnEscape = function useOnEscape(handler, active) {
    if (active === void 0) {
      active = true;
    }
    React.useEffect(function () {
      if (!active) return;
      var listener = function listener(event) {
        // check if key is an Escape
        if (event.key === 'Escape') handler(event);
      };
      document.addEventListener('keyup', listener);
      return function () {
        if (!active) return;
        document.removeEventListener('keyup', listener);
      };
    }, [handler, active]);
  };
  var useRepositionOnResize = function useRepositionOnResize(handler, active) {
    if (active === void 0) {
      active = true;
    }
    React.useEffect(function () {
      if (!active) return;
      var listener = function listener() {
        handler();
      };
      window.addEventListener('resize', listener);
      return function () {
        if (!active) return;
        window.removeEventListener('resize', listener);
      };
    }, [handler, active]);
  };
  var useOnClickOutside = function useOnClickOutside(ref, handler, active) {
    if (active === void 0) {
      active = true;
    }
    React.useEffect(function () {
      if (!active) return;
      var listener = function listener(event) {
        // Do nothing if clicking ref's element or descendent elements
        var refs = Array.isArray(ref) ? ref : [ref];
        var contains = false;
        refs.forEach(function (r) {
          if (!r.current || r.current.contains(event.target)) {
            contains = true;
            return;
          }
        });
        event.stopPropagation();
        if (!contains) handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return function () {
        if (!active) return;
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler, active]);
  }; // Make sure that user is not able TAB out of the Modal content on Open

  var useTabbing = function useTabbing(contentRef, active) {
    if (active === void 0) {
      active = true;
    }
    React.useEffect(function () {
      if (!active) return;
      var listener = function listener(event) {
        // check if key is an Tab
        if (event.keyCode === 9) {
          var _contentRef$current;
          var els = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
          var focusableEls = Array.prototype.slice.call(els);
          if (focusableEls.length === 1) {
            event.preventDefault();
            return;
          }
          var firstFocusableEl = focusableEls[0];
          var lastFocusableEl = focusableEls[focusableEls.length - 1];
          if (event.shiftKey && document.activeElement === firstFocusableEl) {
            event.preventDefault();
            lastFocusableEl.focus();
          } else if (document.activeElement === lastFocusableEl) {
            event.preventDefault();
            firstFocusableEl.focus();
          }
        }
      };
      document.addEventListener('keydown', listener);
      return function () {
        if (!active) return;
        document.removeEventListener('keydown', listener);
      };
    }, [contentRef, active]);
  };
  var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  var Style = {
    popupContent: {
      tooltip: {
        position: 'absolute',
        zIndex: 999
      },
      modal: {
        position: 'relative',
        margin: 'auto'
      }
    },
    popupArrow: {
      height: '8px',
      width: '16px',
      position: 'absolute',
      background: 'transparent',
      color: '#FFF',
      zIndex: -1
    },
    overlay: {
      tooltip: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: 999
      },
      modal: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        zIndex: 999
      }
    }
  };
  var POSITION_TYPES = ['top left', 'top center', 'top right', 'right top', 'right center', 'right bottom', 'bottom left', 'bottom center', 'bottom right', 'left top', 'left center', 'left bottom'];
  var getCoordinatesForPosition = function getCoordinatesForPosition(triggerBounding, ContentBounding, position,
  //PopupPosition | PopupPosition[],
  arrow, _ref) {
    var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY;
    var margin = arrow ? 8 : 0;
    var args = position.split(' '); // the step N 1 : center the popup content => ok

    var CenterTop = triggerBounding.top + triggerBounding.height / 2;
    var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
    var height = ContentBounding.height,
      width = ContentBounding.width;
    var top = CenterTop - height / 2;
    var left = CenterLeft - width / 2;
    var transform = '';
    var arrowTop = '0%';
    var arrowLeft = '0%'; // the  step N 2 : => ok

    switch (args[0]) {
      case 'top':
        top -= height / 2 + triggerBounding.height / 2 + margin;
        transform = "rotate(180deg)  translateX(50%)";
        arrowTop = '100%';
        arrowLeft = '50%';
        break;
      case 'bottom':
        top += height / 2 + triggerBounding.height / 2 + margin;
        transform = "rotate(0deg) translateY(-100%) translateX(-50%)";
        arrowLeft = '50%';
        break;
      case 'left':
        left -= width / 2 + triggerBounding.width / 2 + margin;
        transform = " rotate(90deg)  translateY(50%) translateX(-25%)";
        arrowLeft = '100%';
        arrowTop = '50%';
        break;
      case 'right':
        left += width / 2 + triggerBounding.width / 2 + margin;
        transform = "rotate(-90deg)  translateY(-150%) translateX(25%)";
        arrowTop = '50%';
        break;
    }
    switch (args[1]) {
      case 'top':
        top = triggerBounding.top;
        arrowTop = triggerBounding.height / 2 + "px";
        break;
      case 'bottom':
        top = triggerBounding.top - height + triggerBounding.height;
        arrowTop = height - triggerBounding.height / 2 + "px";
        break;
      case 'left':
        left = triggerBounding.left;
        arrowLeft = triggerBounding.width / 2 + "px";
        break;
      case 'right':
        left = triggerBounding.left - width + triggerBounding.width;
        arrowLeft = width - triggerBounding.width / 2 + "px";
        break;
    }
    top = args[0] === 'top' ? top - offsetY : top + offsetY;
    left = args[0] === 'left' ? left - offsetX : left + offsetX;
    return {
      top: top,
      left: left,
      transform: transform,
      arrowLeft: arrowLeft,
      arrowTop: arrowTop
    };
  };
  var getTooltipBoundary = function getTooltipBoundary(keepTooltipInside) {
    // add viewport
    var boundingBox = {
      top: 0,
      left: 0,
      /* eslint-disable-next-line no-undef */
      width: window.innerWidth,
      /* eslint-disable-next-line no-undef */
      height: window.innerHeight
    };
    if (typeof keepTooltipInside === 'string') {
      /* eslint-disable-next-line no-undef */
      var selector = document.querySelector(keepTooltipInside);
      if (process.env.NODE_ENV !== 'production') {
        if (selector === null) throw new Error(keepTooltipInside + " selector does not exist : keepTooltipInside must be a valid html selector 'class' or 'Id'  or a boolean value");
      }
      if (selector !== null) boundingBox = selector.getBoundingClientRect();
    }
    return boundingBox;
  };
  var calculatePosition = function calculatePosition(triggerBounding, ContentBounding, position, arrow, _ref2, keepTooltipInside) {
    var offsetX = _ref2.offsetX,
      offsetY = _ref2.offsetY;
    var bestCoords = {
      arrowLeft: '0%',
      arrowTop: '0%',
      left: 0,
      top: 0,
      transform: 'rotate(135deg)'
    };
    var i = 0;
    var wrapperBox = getTooltipBoundary(keepTooltipInside);
    var positions = Array.isArray(position) ? position : [position]; // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array

    if (keepTooltipInside || Array.isArray(position)) positions = [].concat(positions, POSITION_TYPES); // add viewPort for WarpperBox
    // wrapperBox.top = wrapperBox.top + window.scrollY;
    // wrapperBox.left = wrapperBox.left + window.scrollX;

    while (i < positions.length) {
      bestCoords = getCoordinatesForPosition(triggerBounding, ContentBounding, positions[i], arrow, {
        offsetX: offsetX,
        offsetY: offsetY
      });
      var contentBox = {
        top: bestCoords.top,
        left: bestCoords.left,
        width: ContentBounding.width,
        height: ContentBounding.height
      };
      if (contentBox.top <= wrapperBox.top || contentBox.left <= wrapperBox.left || contentBox.top + contentBox.height >= wrapperBox.top + wrapperBox.height || contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width) {
        i++;
      } else {
        break;
      }
    }
    return bestCoords;
  };
  var popupIdCounter = 0;
  var getRootPopup = function getRootPopup() {
    var PopupRoot = document.getElementById('popup-root');
    if (PopupRoot === null) {
      PopupRoot = document.createElement('div');
      PopupRoot.setAttribute('id', 'popup-root');
      document.body.appendChild(PopupRoot);
    }
    return PopupRoot;
  };
  var Popup = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
    var _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? null : _ref$trigger,
      _ref$onOpen = _ref.onOpen,
      onOpen = _ref$onOpen === void 0 ? function () {} : _ref$onOpen,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$defaultOpen = _ref.defaultOpen,
      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? undefined : _ref$open,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$nested = _ref.nested,
      nested = _ref$nested === void 0 ? false : _ref$nested,
      _ref$closeOnDocumentC = _ref.closeOnDocumentClick,
      closeOnDocumentClick = _ref$closeOnDocumentC === void 0 ? true : _ref$closeOnDocumentC,
      _ref$repositionOnResi = _ref.repositionOnResize,
      repositionOnResize = _ref$repositionOnResi === void 0 ? true : _ref$repositionOnResi,
      _ref$closeOnEscape = _ref.closeOnEscape,
      closeOnEscape = _ref$closeOnEscape === void 0 ? true : _ref$closeOnEscape,
      _ref$on = _ref.on,
      on = _ref$on === void 0 ? ['click'] : _ref$on,
      _ref$contentStyle = _ref.contentStyle,
      contentStyle = _ref$contentStyle === void 0 ? {} : _ref$contentStyle,
      _ref$arrowStyle = _ref.arrowStyle,
      arrowStyle = _ref$arrowStyle === void 0 ? {} : _ref$arrowStyle,
      _ref$overlayStyle = _ref.overlayStyle,
      overlayStyle = _ref$overlayStyle === void 0 ? {} : _ref$overlayStyle,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom center' : _ref$position,
      _ref$modal = _ref.modal,
      modal = _ref$modal === void 0 ? false : _ref$modal,
      _ref$lockScroll = _ref.lockScroll,
      lockScroll = _ref$lockScroll === void 0 ? false : _ref$lockScroll,
      _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? true : _ref$arrow,
      _ref$offsetX = _ref.offsetX,
      offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
      _ref$offsetY = _ref.offsetY,
      offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY,
      _ref$mouseEnterDelay = _ref.mouseEnterDelay,
      mouseEnterDelay = _ref$mouseEnterDelay === void 0 ? 100 : _ref$mouseEnterDelay,
      _ref$mouseLeaveDelay = _ref.mouseLeaveDelay,
      mouseLeaveDelay = _ref$mouseLeaveDelay === void 0 ? 100 : _ref$mouseLeaveDelay,
      _ref$keepTooltipInsid = _ref.keepTooltipInside,
      keepTooltipInside = _ref$keepTooltipInsid === void 0 ? false : _ref$keepTooltipInsid,
      children = _ref.children;
    var _useState = React.useState(open || defaultOpen),
      isOpen = _useState[0],
      setIsOpen = _useState[1];
    var triggerRef = React.useRef(null);
    var contentRef = React.useRef(null);
    var arrowRef = React.useRef(null);
    var focusedElBeforeOpen = React.useRef(null);
    var popupId = React.useRef("popup-" + ++popupIdCounter);
    var isModal = modal ? true : !trigger;
    var timeOut = React.useRef(0);
    useIsomorphicLayoutEffect(function () {
      if (isOpen) {
        focusedElBeforeOpen.current = document.activeElement;
        setPosition();
        focusContentOnOpen(); // for accessibility

        lockScrolll();
      } else {
        resetScroll();
      }
      return function () {
        clearTimeout(timeOut.current);
      };
    }, [isOpen]); // for uncontrolled popup we need to sync isOpen with open prop

    React.useEffect(function () {
      if (typeof open === 'boolean') {
        if (open) openPopup();else closePopup();
      }
    }, [open, disabled]);
    var openPopup = function openPopup(event) {
      if (isOpen || disabled) return;
      setIsOpen(true);
      setTimeout(function () {
        return onOpen(event);
      }, 0);
    };
    var closePopup = function closePopup(event) {
      var _focusedElBeforeOpen$;
      if (!isOpen || disabled) return;
      setIsOpen(false);
      if (isModal) (_focusedElBeforeOpen$ = focusedElBeforeOpen.current) === null || _focusedElBeforeOpen$ === void 0 ? void 0 : _focusedElBeforeOpen$.focus();
      setTimeout(function () {
        return onClose(event);
      }, 0);
    };
    var togglePopup = function togglePopup(event) {
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      if (!isOpen) openPopup(event);else closePopup(event);
    };
    var onMouseEnter = function onMouseEnter(event) {
      clearTimeout(timeOut.current);
      timeOut.current = setTimeout(function () {
        return openPopup(event);
      }, mouseEnterDelay);
    };
    var onContextMenu = function onContextMenu(event) {
      event === null || event === void 0 ? void 0 : event.preventDefault();
      togglePopup();
    };
    var onMouseLeave = function onMouseLeave(event) {
      clearTimeout(timeOut.current);
      timeOut.current = setTimeout(function () {
        return closePopup(event);
      }, mouseLeaveDelay);
    };
    var lockScrolll = function lockScrolll() {
      if (isModal && lockScroll) document.getElementsByTagName('body')[0].style.overflow = 'hidden'; // migrate to document.body
    };
    var resetScroll = function resetScroll() {
      if (isModal && lockScroll) document.getElementsByTagName('body')[0].style.overflow = 'auto';
    };
    var focusContentOnOpen = function focusContentOnOpen() {
      var _contentRef$current;
      var focusableEls = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
      var firstEl = Array.prototype.slice.call(focusableEls)[0];
      firstEl === null || firstEl === void 0 ? void 0 : firstEl.focus();
    };
    React.useImperativeHandle(ref, function () {
      return {
        open: function open() {
          openPopup();
        },
        close: function close() {
          closePopup();
        },
        toggle: function toggle() {
          togglePopup();
        }
      };
    }); // set Position

    var setPosition = function setPosition() {
      if (isModal || !isOpen) return;
      if (!(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(contentRef === null || contentRef === void 0 ? void 0 : contentRef.current)) return; /// show error as one of ref is undefined

      var trigger = triggerRef.current.getBoundingClientRect();
      var content = contentRef.current.getBoundingClientRect();
      var cords = calculatePosition(trigger, content, position, arrow, {
        offsetX: offsetX,
        offsetY: offsetY
      }, keepTooltipInside);
      contentRef.current.style.top = cords.top + window.scrollY + "px";
      contentRef.current.style.left = cords.left + window.scrollX + "px";
      if (arrow && !!arrowRef.current) {
        var _arrowStyle$top, _arrowStyle$left;
        arrowRef.current.style.transform = cords.transform;
        arrowRef.current.style.setProperty('-ms-transform', cords.transform);
        arrowRef.current.style.setProperty('-webkit-transform', cords.transform);
        arrowRef.current.style.top = ((_arrowStyle$top = arrowStyle.top) === null || _arrowStyle$top === void 0 ? void 0 : _arrowStyle$top.toString()) || cords.arrowTop;
        arrowRef.current.style.left = ((_arrowStyle$left = arrowStyle.left) === null || _arrowStyle$left === void 0 ? void 0 : _arrowStyle$left.toString()) || cords.arrowLeft;
      }
    }; // hooks

    useOnEscape(closePopup, closeOnEscape); // can be optimized if we disabled for hover

    useTabbing(contentRef, isOpen && isModal);
    useRepositionOnResize(setPosition, repositionOnResize);
    useOnClickOutside(!!trigger ? [contentRef, triggerRef] : [contentRef], closePopup, closeOnDocumentClick && !nested); // we need to add a ne
    // render the trigger element and add events

    var renderTrigger = function renderTrigger() {
      var triggerProps = {
        key: 'T',
        ref: triggerRef,
        'aria-describedby': popupId.current
      };
      var onAsArray = Array.isArray(on) ? on : [on];
      for (var i = 0, len = onAsArray.length; i < len; i++) {
        switch (onAsArray[i]) {
          case 'click':
            triggerProps.onClick = togglePopup;
            break;
          case 'right-click':
            triggerProps.onContextMenu = onContextMenu;
            break;
          case 'hover':
            triggerProps.onMouseEnter = onMouseEnter;
            triggerProps.onMouseLeave = onMouseLeave;
            break;
          case 'focus':
            triggerProps.onFocus = onMouseEnter;
            triggerProps.onBlur = onMouseLeave;
            break;
        }
      }
      if (typeof trigger === 'function') {
        var comp = trigger(isOpen);
        return !!trigger && /*#__PURE__*/React.cloneElement(comp, triggerProps);
      }
      return !!trigger && /*#__PURE__*/React.cloneElement(trigger, triggerProps);
    };
    var addWarperAction = function addWarperAction() {
      var popupContentStyle = isModal ? Style.popupContent.modal : Style.popupContent.tooltip;
      var childrenElementProps = {
        className: "popup-content " + (className !== '' ? className.split(' ').map(function (c) {
          return c + "-content";
        }).join(' ') : ''),
        style: _extends({}, popupContentStyle, contentStyle, {
          pointerEvents: 'auto'
        }),
        ref: contentRef,
        onClick: function onClick(e) {
          e.stopPropagation();
        }
      };
      if (!modal && on.indexOf('hover') >= 0) {
        childrenElementProps.onMouseEnter = onMouseEnter;
        childrenElementProps.onMouseLeave = onMouseLeave;
      }
      return childrenElementProps;
    };
    var renderContent = function renderContent() {
      return /*#__PURE__*/React.createElement("div", Object.assign({}, addWarperAction(), {
        key: "C",
        role: isModal ? 'dialog' : 'tooltip',
        id: popupId.current
      }), arrow && !isModal && /*#__PURE__*/React.createElement("div", {
        ref: arrowRef,
        style: Style.popupArrow
      }, /*#__PURE__*/React.createElement("svg", {
        "data-testid": "arrow",
        className: "popup-arrow " + (className !== '' ? className.split(' ').map(function (c) {
          return c + "-arrow";
        }).join(' ') : ''),
        viewBox: "0 0 32 16",
        style: _extends({
          position: 'absolute'
        }, arrowStyle)
      }, /*#__PURE__*/React.createElement("path", {
        d: "M16 0l16 16H0z",
        fill: "currentcolor"
      }))), children && typeof children === 'function' ? children(closePopup, isOpen) : children);
    };
    var overlay = !(on.indexOf('hover') >= 0);
    var ovStyle = isModal ? Style.overlay.modal : Style.overlay.tooltip;
    var content = [overlay && /*#__PURE__*/React.createElement("div", {
      key: "O",
      "data-testid": "overlay",
      "data-popup": isModal ? 'modal' : 'tooltip',
      className: "popup-overlay " + (className !== '' ? className.split(' ').map(function (c) {
        return c + "-overlay";
      }).join(' ') : ''),
      style: _extends({}, ovStyle, overlayStyle, {
        pointerEvents: closeOnDocumentClick && nested || isModal ? 'auto' : 'none'
      }),
      onClick: closeOnDocumentClick && nested ? closePopup : undefined,
      tabIndex: -1
    }, isModal && renderContent()), !isModal && renderContent()];
    return /*#__PURE__*/React.createElement(React.Fragment, null, renderTrigger(), isOpen && /*#__PURE__*/ReactDOM.createPortal(content, getRootPopup()));
  });

  var css_248z = "/* @import url(\"primeicons.css\"); */\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#root {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\ndiv.vertical_canvas {\r\n  width: 50%;\r\n  height: 80%;\r\n  margin: 0;\r\n  padding: 0;\r\n  float: left;\r\n}\r\ndiv.vertical_settings {\r\n  width: 50%;\r\n  height: 20%;\r\n  margin: 0;\r\n  padding: 0;\r\n  float: right;\r\n}\r\n\r\ndiv.vertical_canvas > div > div > canvas {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  \r\n}\r\n\r\ndiv.horizontal_canvas {\r\n  width: 100%;\r\n  height: 60%;\r\n  margin: -10px;\r\n  padding: 0;\r\n  /* display: none; */\r\n}\r\ndiv.horizontal_settings {\r\n  width: 100%;\r\n  height: 40%;\r\n  margin: 0;\r\n  padding-top: 1;\r\n  overflow-y: scroll;\r\n  background-color: white;\r\n}\r\n\r\n\r\n\r\ndiv.horizontal_canvas_full {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  /* display: none; */\r\n}\r\ndiv.horizontal_settings_none {\r\n  width: 100%;\r\n  height: 0%;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow-y: scroll;\r\n  background-color: #eef5f0;\r\n}\r\n\r\ndiv.horizontal_canvas > div > div > canvas {\r\n  width: 100vw;\r\n  height: 50vh;\r\n}\r\n\r\n\r\n.react-tabs {\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.react-tabs__tab-list {\r\n  /* border-bottom: 1px solid #aaa; */\r\n  margin: 0 0 30px;\r\n  padding: 0;\r\n}\r\n\r\n.react-tabs__tab {\r\n  display: inline-block;\r\n  border: 1px solid transparent;\r\n  border-bottom: none;\r\n  bottom: -1px;\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 6px 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.react-tabs__tab--selected {\r\n  /* background: #fff; */\r\n  /* border-color: #aaa; */\r\n  color: black;\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.react-tabs__tab--disabled {\r\n  color: GrayText;\r\n  cursor: default;\r\n}\r\n\r\n.react-tabs__tab:focus {\r\n  outline: none;\r\n}\r\n\r\n.react-tabs__tab:focus:after {\r\n  content: '';\r\n  position: absolute;\r\n  height: 5px;\r\n  left: -4px;\r\n  right: -4px;\r\n  bottom: -5px;\r\n  /* background: #fff; */\r\n}\r\n\r\n.react-tabs__tab-panel {\r\n  display: none;\r\n}\r\n\r\n.react-tabs__tab-panel--selected {\r\n  display: block;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.first {\r\n  /* border-top: solid 1px lightgray; */\r\n  margin-top: 5px;\r\n}\r\n\r\n.flex {\r\n  flex-direction: row !important;\r\n}\r\n\r\n#content {\r\n  height: 100vh;\r\n}\r\n\r\n\r\n.confirm {\r\n  left: 75vw;\r\n  top: 10vh;\r\n  z-index: 10;\r\n  position: absolute;\r\n  background-color: white !important;\r\n  color: black !important;\r\n  border-color: black !important;\r\n  border: 3px solid rgb(59, 58, 58);\r\n  justify-content: center;\r\n}\r\n\r\n.close {\r\n  left: 5vw;\r\n  top: 10vh;\r\n  z-index: 10;    \r\n  position: absolute;\r\n  background-color: white !important;\r\n  color: black !important;\r\n  border-color: black !important;\r\n  border: 3px solid rgb(59, 58, 58);\r\n  justify-content: center;\r\n}\r\n\r\n.menuToggle_on {\r\n  left: 0vw;\r\n  top: 60vh;\r\n  z-index: 10;  \r\n  position: absolute !important;\r\n  background-image: url(\"./assets/icons/arrow_down_essential_set_icon.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: auto;\r\n  height: 4rem;\r\n  width: 4rem;\r\n\r\n}\r\n\r\n.menuToggle_off {\r\n  left: 0vw;\r\n  top: 94vh;\r\n  z-index: 10;  \r\n  position: absolute !important;;\r\n  background-image: url(\"./assets/icons/arrow_essential_set_up_icon.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: auto;\r\n  height: 4rem;\r\n  width: 4rem;\r\n\r\n}\r\n\r\n.p-button-rounded {\r\n  border-radius: 2rem !important;\r\n}\r\n\r\n.p-button-icon-only  {\r\n  border-radius: 50%;\r\n}\r\n\r\n.pi {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.pi-sign-out {\r\n  background-image: url(\"./assets/icons/sign_out.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: auto;\r\n  height: 4rem;\r\n  width: 4rem;\r\n}\r\n\r\n.pi-download {\r\n  background-image: url(\"./assets/icons/download.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: auto;\r\n  height: 4rem;\r\n  width: 4rem;\r\n}\r\n\r\n.p-button-component {\r\n  /*width: 250px;*/\r\n  min-width: 200px;\r\n}\r\n\r\n.p-button {\r\n  color: #27272b;\r\n  background-color: white;\r\n  border: 1px solid rgb(59, 58, 58);\r\n\r\n}\r\n\r\n.colorLabel {\r\n  padding-top: 5px;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.divColorSpacer {\r\n  /* padding-left: 30px; */\r\n  width: 80px;\r\n}\r\n\r\n.p-button, \r\n.p-component {\r\n  font-size: 1.0rem;\r\n}\r\n\r\n.p-button {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.p-button.p-button-outlined {\r\n  border: 3px solid;\r\n  justify-content: center;\r\n  border-color: black ;\r\n  color: black !important;\r\n}\r\n\r\n.p-toast-message-general {\r\n  background: #d4d6d5;\r\n  border: solid #2c2e2d;\r\n  border-width: 0 0 0 6px;\r\n  color: #2c2e2d;\r\n}\r\n\r\n.p-toast .p-toast-message.p-toast-message-general .p-toast-message-icon, .p-toast .p-toast-message.p-toast-message-general .p-toast-icon-close {\r\n  color: #2c2e2d;\r\n}\r\n\r\n.delimiter {\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\r\n  /* border-bottom: solid 1px lightgray; */\r\n\r\n}\r\n\r\nbody {\r\n  background: #f0f0f0;\r\n}\r\n\r\n.orderDetail {\r\n  display: flex;\r\n  width: 90%;\r\n}\r\n\r\n.columnOrderDetail {\r\n  flex: 1;\r\n  /*padding: 20px;*/\r\n  border: 0px solid #ddd; /* Optional: Add borders for visual separation */\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n.columnOrderDetailRigth {\r\n  flex: 1;\r\n  padding: 20px;\r\n  border: 0px solid #ddd; /* Optional: Add borders for visual separation */\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n.disable-button{ \r\n  background-color: grey !important;\r\n}\r\n\r\n.selected-border{\r\n  border-color: blue !important;\r\n}\r\n\r\n.buttonFirst {\r\n  margin-left: 60px;\r\n}\r\n\r\n.options-bar {\r\n  width: 600px;\r\n  display: flex; /* Use Flexbox for horizontal alignment */\r\n  justify-content: space-around; /* Distribute space evenly */\r\n  padding: 10px; /* Optional padding */\r\n  background-color: #f0f0f0; /* Optional background color */\r\n  border: 1px solid black; /* Optional border */\r\n}\r\n.deposit-tag {\r\n  width: 200px;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n.option-button {\r\n  /*background-color: #007bff; /* Button background color */\r\n  color: black; /* Button text color */\r\n  border: none; /* Remove default border */\r\n  padding: 10px 50px; /* Button padding */\r\n  margin: 0 2px; /* Spacing between buttons */\r\n  border-radius: 4px; /* Optional rounded corners */\r\n  cursor: pointer; /* Pointer cursor on hover */\r\n  font-size: 20px; /* Font size */\r\n}\r\n.option-button.selected {\r\n  background-color: #050506; /* Blue background for selected button */\r\n  color: #fff; /* White text for selected button */\r\n  border-color: #007bff; /* Match border color with background */\r\n}\r\n/* \r\n.option-button:hover {\r\n  background-color: #0056b3; \r\n} */\r\n\r\n.contact-app {\r\n  text-align: center;\r\n  margin: 50px;\r\n}\r\n\r\n.button:hover {\r\n  background-color: white; \r\n  border: 3px solid;\r\n}\r\n\r\n.contact-view-contact-button {\r\n  /*padding: 10px 20px;*/\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.contact-popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1000;\r\n}\r\n\r\n.contact-popup-content {\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  position: relative;\r\n  width: 600px;\r\n  max-width: 90%;\r\n}\r\n\r\n.contact-close-button {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n  color: #aaa;\r\n}\r\n\r\n.contact-close-button:hover {\r\n  color: #000;\r\n}\r\n\r\n.options-contact {\r\n  width: 600px; \r\n}\r\n\r\n.commonBarDetail {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.oval-button {\r\n  padding: 10px 30px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  border: 1px solid none; /* Border color */\r\n  background-color: #fff; /* Default background color */\r\n  border-radius: 50px; /* Makes the button oval */\r\n  transition: background-color 0.3s ease, color 0.3s ease;\r\n  outline: none; /* Removes default focus outline */\r\n}\r\n\r\n/* #swatch color for selected  */\r\n.dropdown {\r\n  /*align-items: right;\r\n  display: inline-flex;*/\r\n  position:relative;\r\n  display:inline-block;\r\n  height:fit-content;\r\n}\r\n\r\n.dropdown-header {\r\n  display: inline-block;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  background-color: #f0f0f0;\r\n  border: 1px solid #ccc;\r\n  padding: 10px 20px; /* Adjust padding for the oval shape */\r\n  border-radius: 50px; /* Creates the oval shape */\r\n  font-size: 16px;\r\n  white-space: nowrap; /* Prevent text from wrapping */\r\n  width: 170px; /* Fixed width for consistency */\r\n  text-align: center; /* Center text within the header */\r\n  box-sizing: border-box; /* Include padding and border in width calculation */\r\n}\r\n\r\n.bi-chevron-down {\r\n  margin-left: 10px;\r\n}\r\n\r\n.dropdown-menu {\r\n  position:absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  margin-top:1px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 50px; /* Match the oval shape of the header */\r\n  display: flex;\r\n  flex-direction: row; /* Display items horizontally */\r\n  padding: 5px;\r\n  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\r\n  z-index: 1000; /* Ensure the menu appears above other content */\r\n  justify-content: space-around;\r\n  box-sizing: border-box; /* Include padding and border in width calculation */\r\n}\r\n\r\n.dropdown-item {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #000; /* Change text color for visibility */\r\n  padding: 10px 15px; /* Adjust padding for item spacing */\r\n  margin: 0 5px; /* Space between items */\r\n  border-radius: 20px; /* Rounded corners for each item */\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  text-align: center; /* Center text */\r\n  padding: 10px 15px;\r\n  display: block;\r\n  text-decoration: none;\r\n  width: 100px;\r\n}\r\n\r\n.dropdown-item:hover {\r\n  background-color: #e0e0e0; /* Change background on hover for better visibility */\r\n}\r\n\r\n.optionslevel3 {\r\n  display: inline-flex; /* Align children in a row */\r\n  gap: 20px; \r\n  /*align-items: baseline;*/\r\n}\r\n\r\n\t\t\t\t\t\t\t\t\r\n.show_dropdown {\r\n  position:relative;\r\n  display:inline-block;\r\n  height:fit-content;\r\n}\r\n\r\n.hide_dropdown {\r\n  position:relative;\r\n  display:none;\r\n  height:fit-content;\r\n}\r\n\r\n\r\n.clearall {\r\n  left: 5vw;\r\n  top: 53vh;\r\n  z-index: 10;    \r\n  position: absolute;\r\n  background-color: white !important;\r\n  color: black !important;\r\n  border-color: black !important;\r\n  border: 3px solid rgb(59, 58, 58);\r\n  justify-content: center; \r\n\r\n}\r\n\r\n\r\n.flexPaveColumn{\r\n  flex: 1;\r\n  /*padding: 20px;*/\r\n  border: 0px solid #ddd; /* Optional: Add borders for visual separation */\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n/*end */\r\n";
  styleInject(css_248z);

  var ReactSharedInternals = React__namespace.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
  var useForceUpdate = function useForceUpdate() {
    return React.useReducer(function () {
      return {};
    })[1];
  };
  var notImplemented = function notImplemented(name) {
    return function () {
      var msg = "Hook \"".concat(name, "\" no possible to using inside useBetween scope.");
      console.error(msg);
      throw new Error(msg);
    };
  };
  var equals = function equals(a, b) {
    return Object.is(a, b);
  };
  var shouldUpdate = function shouldUpdate(a, b) {
    return !a || !b || a.length !== b.length || a.some(function (dep, index) {
      return !equals(dep, b[index]);
    });
  };
  var detectServer = function detectServer() {
    return typeof window === 'undefined';
  };
  var instances = new Map();
  var boxes = [];
  var pointer = 0;
  var useEffectQueue = [];
  var useLayoutEffectQueue = [];
  var nextTick = function nextTick() {};
  var isServer = detectServer();
  var initialData = undefined;
  var nextBox = function nextBox() {
    var index = pointer++;
    return boxes[index] = boxes[index] || {};
  };
  var ownDisptacher = {
    useState: function useState(initialState) {
      var box = nextBox();
      var tick = nextTick;
      if (!box.initialized) {
        box.state = typeof initialState === "function" ? initialState() : initialState;
        box.set = function (fn) {
          if (typeof fn === 'function') {
            return box.set(fn(box.state));
          }
          if (!equals(fn, box.state)) {
            box.state = fn;
            tick();
          }
        };
        box.initialized = true;
      }
      return [box.state, box.set];
    },
    useReducer: function useReducer(reducer, initialState, init) {
      var box = nextBox();
      var tick = nextTick;
      if (!box.initialized) {
        box.state = init ? init(initialState) : initialState;
        box.dispatch = function (action) {
          var state = reducer(box.state, action);
          if (!equals(state, box.state)) {
            box.state = state;
            tick();
          }
        };
        box.initialized = true;
      }
      return [box.state, box.dispatch];
    },
    useEffect: function useEffect(fn, deps) {
      if (isServer) return;
      var box = nextBox();
      if (!box.initialized) {
        box.deps = deps;
        box.initialized = true;
        useEffectQueue.push([box, deps, fn]);
      } else if (shouldUpdate(box.deps, deps)) {
        box.deps = deps;
        useEffectQueue.push([box, deps, fn]);
      }
    },
    useLayoutEffect: function useLayoutEffect(fn, deps) {
      if (isServer) return;
      var box = nextBox();
      if (!box.initialized) {
        box.deps = deps;
        box.initialized = true;
        useLayoutEffectQueue.push([box, deps, fn]);
      } else if (shouldUpdate(box.deps, deps)) {
        box.deps = deps;
        useLayoutEffectQueue.push([box, deps, fn]);
      }
    },
    useCallback: function useCallback(fn, deps) {
      var box = nextBox();
      if (!box.initialized) {
        box.fn = fn;
        box.deps = deps;
        box.initialized = true;
      } else if (shouldUpdate(box.deps, deps)) {
        box.deps = deps;
        box.fn = fn;
      }
      return box.fn;
    },
    useMemo: function useMemo(fn, deps) {
      var box = nextBox();
      if (!box.initialized) {
        box.deps = deps;
        box.state = fn();
        box.initialized = true;
      } else if (shouldUpdate(box.deps, deps)) {
        box.deps = deps;
        box.state = fn();
      }
      return box.state;
    },
    useRef: function useRef(initialValue) {
      var box = nextBox();
      if (!box.initialized) {
        box.state = {
          current: initialValue
        };
        box.initialized = true;
      }
      return box.state;
    },
    useImperativeHandle: function useImperativeHandle(ref, fn, deps) {
      if (isServer) return;
      var box = nextBox();
      if (!box.initialized) {
        box.deps = deps;
        box.initialized = true;
        useLayoutEffectQueue.push([box, deps, function () {
          typeof ref === 'function' ? ref(fn()) : ref.current = fn();
        }]);
      } else if (shouldUpdate(box.deps, deps)) {
        box.deps = deps;
        useLayoutEffectQueue.push([box, deps, function () {
          typeof ref === 'function' ? ref(fn()) : ref.current = fn();
        }]);
      }
    }
  };
  ['readContext', 'useContext', 'useDebugValue', 'useResponder', 'useDeferredValue', 'useTransition'].forEach(function (key) {
    return ownDisptacher[key] = notImplemented(key);
  });
  var factory = function factory(hook, options) {
    var scopedBoxes = [];
    var syncs = [];
    var state = undefined;
    var _unsubs = [];
    var mocked = false;
    var sync = function sync() {
      syncs.slice().forEach(function (fn) {
        return fn();
      });
    };
    var _tick = function tick() {
      if (mocked) return;
      var originDispatcher = ReactCurrentDispatcher.current;
      var originState = [pointer, useEffectQueue, useLayoutEffectQueue, boxes, nextTick];
      var tickAgain = false;
      var tickBody = true;
      pointer = 0;
      useEffectQueue = [];
      useLayoutEffectQueue = [];
      boxes = scopedBoxes;
      nextTick = function nextTick() {
        if (tickBody) {
          tickAgain = true;
        } else {
          _tick();
        }
      };
      ReactCurrentDispatcher.current = ownDisptacher;
      state = hook(initialData);
      [useLayoutEffectQueue, useEffectQueue].forEach(function (queue) {
        return queue.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 3),
            box = _ref2[0],
            deps = _ref2[1],
            fn = _ref2[2];
          box.deps = deps;
          if (box.unsub) {
            var _unsub = box.unsub;
            _unsubs = _unsubs.filter(function (fn) {
              return fn !== _unsub;
            });
            _unsub();
          }
          var unsub = fn();
          if (typeof unsub === "function") {
            _unsubs.push(unsub);
            box.unsub = unsub;
          } else {
            box.unsub = null;
          }
        });
      });
      pointer = originState[0];
      useEffectQueue = originState[1];
      useLayoutEffectQueue = originState[2];
      boxes = originState[3];
      nextTick = originState[4];
      ReactCurrentDispatcher.current = originDispatcher;
      tickBody = false;
      if (!tickAgain) {
        sync();
        return;
      }
      _tick();
    };
    var sub = function sub(fn) {
      if (syncs.indexOf(fn) === -1) {
        syncs.push(fn);
      }
    };
    var unsub = function unsub(fn) {
      syncs = syncs.filter(function (f) {
        return f !== fn;
      });
    };
    var mock = function mock(obj) {
      mocked = true;
      state = obj;
      sync();
    };
    var unmock = function unmock() {
      mocked = false;
      _tick();
    };
    return {
      init: function init() {
        return _tick();
      },
      get: function get() {
        return state;
      },
      sub: sub,
      unsub: unsub,
      unsubs: function unsubs() {
        return _unsubs;
      },
      mock: mock,
      unmock: unmock
    };
  };
  var getInstance = function getInstance(hook) {
    var inst = instances.get(hook);
    if (!inst) {
      inst = factory(hook);
      instances.set(hook, inst);
      inst.init();
    }
    return inst;
  };
  var useBetween = function useBetween(hook) {
    var forceUpdate = useForceUpdate();
    var inst = getInstance(hook);
    inst.sub(forceUpdate);
    React.useEffect(function () {
      return inst.sub(forceUpdate), function () {
        return inst.unsub(forceUpdate);
      };
    }, [inst, forceUpdate]);
    return inst.get();
  };

  var ListContext = /*#__PURE__*/React.createContext();
  var ListProvider = function ListProvider(_ref) {
    var children = _ref.children;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      globalList = _useState2[0],
      setGlobalList = _useState2[1];
    var _useState3 = React.useState('disabled'),
      _useState4 = _slicedToArray(_useState3, 2),
      isButtonEnabled = _useState4[0],
      setIsButtonEnabled = _useState4[1];
    //image front,back
    var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      capturedImageSrc = _useState6[0],
      setCapturedImageSrc = _useState6[1];
    var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      capturedBehindImageSrc = _useState8[0],
      setCapturedBehindImageSrc = _useState8[1];
    //const [materials, setMaterials] = useState([]);
    //end

    var enableButton = function enableButton() {
      setIsButtonEnabled('');
    };
    var disableButton = function disableButton() {
      setIsButtonEnabled('disabled');
    };
    var addImageSrcFront = function addImageSrcFront(item) {
      setCapturedImageSrc(item);
    };
    var addImageSrcBack = function addImageSrcBack(item) {
      setCapturedBehindImageSrc(item);
    };
    var addToList = function addToList(item) {
      if (item.name !== '' && item.description !== '') {
        setGlobalList(function (prevList) {
          return [].concat(_toConsumableArray(prevList), [item]);
        }); //[...globalList,item]);
      }
    };

    /*
    const updateMaterial = (meshName, material) => {
      // Check if the material for this mesh already exists
      setMaterials((prev) => {
          const existingMaterialIndex = prev.findIndex(item => item.meshName === meshName);
          if (existingMaterialIndex >= 0) {
              // If it exists, update it
              const newMaterials = [...prev];
              newMaterials[existingMaterialIndex] = { meshName, material };
              return newMaterials;
          } else {
              // If it doesn't exist, add a new entry
              return [...prev, { meshName, material }];
          }
         });
      };
      */
    var removeFromList = function removeFromList(index) {
      setGlobalList(function (prevList) {
        var newList = _toConsumableArray(prevList);
        newList.splice(index, 1);
        return newList;
      });
    };
    var resetGlobalList = function resetGlobalList() {
      setGlobalList([]);
      //setMaterials([]);
    };
    return /*#__PURE__*/React.createElement(ListContext.Provider, {
      value: {
        capturedImageSrc: capturedImageSrc,
        capturedBehindImageSrc: capturedBehindImageSrc,
        globalList: globalList,
        addToList: addToList,
        removeFromList: removeFromList,
        resetGlobalList: resetGlobalList,
        isButtonEnabled: isButtonEnabled,
        enableButton: enableButton,
        disableButton: disableButton,
        addImageSrcFront: addImageSrcFront,
        addImageSrcBack: addImageSrcBack
      }
    }, children);
  };
  var useList = function useList() {
    return React.useContext(ListContext);
  };

  var useShareable = function useShareable() {
    var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      visibleMeshes = _useState2[0],
      setVisibleMeshes = _useState2[1];
    var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      visibleMeshesColor = _useState4[0],
      setVisibleMeshesColor = _useState4[1];
    var _useState5 = React.useState("none"),
      _useState6 = _slicedToArray(_useState5, 2),
      teethId = _useState6[0],
      setTeethId = _useState6[1];
    var _useState7 = React.useState("none"),
      _useState8 = _slicedToArray(_useState7, 2),
      capId = _useState8[0],
      setCapId = _useState8[1];
    var _useState9 = React.useState(),
      _useState0 = _slicedToArray(_useState9, 2),
      scene3D = _useState0[0],
      setScene3D = _useState0[1];
    var _useState1 = React.useState(),
      _useState10 = _slicedToArray(_useState1, 2),
      texture = _useState10[0],
      setTexture = _useState10[1];
    return {
      teethId: teethId,
      setTeethId: setTeethId,
      capId: capId,
      setCapId: setCapId,
      scene3D: scene3D,
      setScene3D: setScene3D,
      texture: texture,
      setTexture: setTexture,
      visibleMeshes: visibleMeshes,
      setVisibleMeshes: setVisibleMeshes,
      visibleMeshesColor: visibleMeshesColor,
      setVisibleMeshesColor: setVisibleMeshesColor
    };
  };
  var useShareableState = function useShareableState() {
    return useBetween(useShareable);
  };

  var teethImageMaskArr = [{
    name: 'TR1',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'TR2',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'TR3',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.379
  }, {
    name: 'TR4',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'TR5',
    repeatX: 2.12,
    repeatY: 1.75,
    offsetX: 0.035,
    offsetY: 0.175
  }, {
    name: 'TL1',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'TL2',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'TL3',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.379
  }, {
    name: 'TL4',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'TL5',
    repeatX: 2.12,
    repeatY: 1.75,
    offsetX: 0.035,
    offsetY: 0.175
  }, {
    name: 'BL1',
    repeatX: 2,
    repeatY: 1.35,
    offsetX: 0.005,
    offsetY: 0.750
  }, {
    name: 'BL2',
    repeatX: 2,
    repeatY: 1.50,
    offsetX: 0.005,
    offsetY: 0.555
  }, {
    name: 'BL3',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.339
  }, {
    name: 'BL4',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'BL5',
    repeatX: 2.12,
    repeatY: 1.75,
    offsetX: 0.035,
    offsetY: 0.275
  }, {
    name: 'BR1',
    repeatX: 2,
    repeatY: 1.50,
    offsetX: 0.005,
    offsetY: 0.505
  }, {
    name: 'BR2',
    repeatX: 2,
    repeatY: 1.50,
    offsetX: 0.005,
    offsetY: 0.555
  }, {
    name: 'BR3',
    repeatX: 2,
    repeatY: 1.50,
    offsetX: 0.005,
    offsetY: 0.505
  }, {
    name: 'BR4',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'BR5',
    repeatX: 2.12,
    repeatY: 1.75,
    offsetX: 0.035,
    offsetY: 0.275
  }];
  var teethImageMaskPaveArr = [{
    name: 'TL1',
    repeatX: -2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'TL2',
    repeatX: -2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'TL3',
    repeatX: -2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.379
  }, {
    name: 'TL4',
    repeatX: -2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'TL5',
    repeatX: -1.25,
    repeatY: 1.25,
    offsetX: 0.025,
    offsetY: 0.885
  }, {
    name: 'TR5',
    repeatX: 1.25,
    repeatY: 1.5,
    offsetX: 0.025,
    offsetY: 0.720
  }, {
    name: 'BL1',
    repeatX: -2.4,
    repeatY: 1.35,
    offsetX: 0.185,
    offsetY: 0.820
  }, {
    name: 'BL2',
    repeatX: -2.05,
    repeatY: 1.50,
    offsetX: 0.005,
    offsetY: 0.555
  }, {
    name: 'BL3',
    repeatX: -2,
    repeatY: 1.65,
    offsetX: 0.005,
    offsetY: 0.510
  }, {
    name: 'BL4',
    repeatX: -2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.405
  }, {
    name: 'BL5',
    repeatX: -2,
    repeatY: 1.75,
    offsetX: 0.035,
    offsetY: 0.275
  }, {
    name: 'BR1',
    repeatX: 2.7,
    repeatY: 1.32,
    offsetX: -0.238,
    offsetY: 0.820
  }, {
    name: 'BR2',
    repeatX: 2,
    repeatY: 1.50,
    offsetX: 0.005,
    offsetY: 0.555
  }, {
    name: 'BR3',
    repeatX: 2,
    repeatY: 1.50,
    offsetX: 0.005,
    offsetY: 0.505
  }, {
    name: 'BR4',
    repeatX: 2,
    repeatY: 1.75,
    offsetX: 0.005,
    offsetY: 0.305
  }, {
    name: 'BR5',
    repeatX: 1.98,
    repeatY: 1.75,
    offsetX: 0.035,
    offsetY: 0.275
  }];
  var engravingImageRotateArr = [{
    name: 'TR1',
    repeatX: -2,
    repeatY: 1
  }, {
    name: 'TR2',
    repeatX: -2,
    repeatY: 1
  }, {
    name: 'TR3',
    repeatX: -2,
    repeatY: 1
  }, {
    name: 'TR4',
    repeatX: -2,
    repeatY: 1
  }, {
    name: 'TR5',
    repeatX: -2,
    repeatY: 1
  }, {
    name: 'BR1',
    repeatX: -2,
    repeatY: 1
  }, {
    name: 'BR2',
    repeatX: -2,
    repeatY: 1
  }, {
    name: 'BR3',
    repeatX: -2,
    repeatY: 1
  }, {
    name: 'BR4',
    repeatX: -2,
    repeatY: 1
  }, {
    name: 'BR5',
    repeatX: -2,
    repeatY: 1
  }];
  var barTopArr$1 = ["MESH_STRAIGHT_BAR_TOP", "MESH_CURVE_BAR_TOP"]; //top
  var barBottomArr$1 = ["MESH_STRAIGHT_BAR_BOTTOM", "MESH_CURVE_BAR_BOTTOM"]; //bottom
  var barTopOptArr$1 = ["MESH_TL1", "MESH_TL2", "MESH_TL3", "MESH_TR1", "MESH_TR2", "MESH_TR3"]; //top
  var barBottomOptArr$1 = ["MESH_BL1", "MESH_BL2", "MESH_BL3", "MESH_BR1", "MESH_BR2", "MESH_BR3"]; //bottom
  var topVarArr = ["TL", "TR"];
  var bottomVarArr = ["BL", "BR"];
  var paveArr$1 = ["PRONGS", "DIAMONDS", "DIAMOND", "BAGUETTEMETAL", "BAGUETTESTONE", "METAL", "STONE"]; //FOR 8shapse:metal,stone 10oct24
  var classicArr$1 = ["CLASSIC", "LOGO"];
  var straigthArr = ["STRAIGHT"];
  var curveArr = ["CURVE"];
  var selectedTeethColor = "0xf7d7d7";
  var defaultColorTeeth = "0xfffdee";
  var spacersArr = ["SPACERS"];
  var ogCapArr = ["FRAME", "SOLID", "ENAMEL", "8SHAPES"]; //"OG", "CAP"
  var symbolArr = ["HEART", "STAR", "PLAIN", "UPLOAD IMAGE"]; //"OG", "CAP"

  var notClassicLevel2Arr = ["PAVE", "BAGUETTE", "HEART", "HEX", "KITE", "OVAL", "EMERALD", "MARQUISE", "ROUND", "SQUARE"]; //PAVE" || typesElement == "BAGUETTE" || optionsElement == "ENAMEL"

  var checkBarExisted$1 = function checkBarExisted(visibleMeshes, meshSelectedName) {
    var selectName = meshSelectedName.split('_');
    //selected mesh for check
    var meshSelected = "MESH_" + selectName[0].toUpperCase();
    var top = 0;
    if (barTopOptArr$1.includes(meshSelected)) {
      //neu top chua selected
      top = 1;
    }
    if (barBottomOptArr$1.includes(meshSelected)) {
      //neu bottom chua selected
      top = 2;
    }
    for (var meshName in visibleMeshes) {
      var meshArr = meshName.split('_');
      if (meshArr.length <= 3) {
        continue;
      }
      var barPrefix = meshArr[0].toUpperCase() + "_" + meshArr[1].toUpperCase() + "_" + meshArr[2].toUpperCase() + "_" + meshArr[3].toUpperCase();
      if (top === 1 && barTopArr$1.includes(barPrefix)) {
        return 1;
      }
      if (top === 2 && barBottomArr$1.includes(barPrefix)) {
        return 1;
      }
    }
    return 0;
  };
  function globalChildHierachyId(parentName, childs, level, meshes, target) {
    if (childs && childs.length > 0 && (level == 1 || level == 2)) {
      for (var itm in childs) {
        var x = childs[itm];
        globalParentHierachyId(x.name, x.id, level + 1, x.parentId);
      }
    }
    if (meshes && meshes.length > 0 && level == 2) {
      for (var _itm in meshes) {
        var x = meshes[_itm];
        var childName = '';
        if (target.toUpperCase() == 'BAR') {
          childName = x.name;
          globalParentHierachyId(childName, x.id, level + 1, x.parentId);
        } else {
          childName = parentName + "_" + x.displayName;
          globalParentHierachyId(childName, x.id, level + 1, x.parentId);
          break;
        }
      }
    }
  }
  function globalParentHierachyId(name, itemId, itemlevel, itemParentId) {
    if (!name || !itemId) return;
    var obj = {
      id: itemId,
      level: itemlevel,
      parentId: itemParentId
    };
    if (!window.globalParentHierachyId) {
      window.globalParentHierachyId = [];
      window.globalParentHierachyId[name.toUpperCase()] = obj;
    } else {
      var item = window.globalParentHierachyId[name.toUpperCase()];
      if (!item) {
        window.globalParentHierachyId[name.toUpperCase()] = obj;
      }
    }
  }
  function resetSpacerOgCapOptions(mesh, visibleMeshes, visibleMeshesColor, parentComponent) {
    if (mesh.visible) {
      if (!parentComponent == "SOLID") {
        //for classic and engraving using same mesh
        return 0;
      }
    }
    var typeRangList = ["TL", "TR", "BL", "BR"];
    var spacersArr = ["SPACERS"];
    var nameMeshArr = mesh.name.replace('mesh_', '').split('_');
    if (nameMeshArr && nameMeshArr.length > 1) {
      var typeRang = nameMeshArr[0]; //loai Rang : bottom left1.. , top left 1..
      var optionRang = nameMeshArr[1]; //option Rang : spacers,OG, CAP
      var typeRangArr = typeRang.match(/[a-z]+|[0-9]+/gi);
      if (typeRangArr && typeRangArr.length > 1) {
        var foundItem = typeRangList.find(function (item) {
          return item === typeRangArr[0].toUpperCase();
        });
        if (foundItem && foundItem.length > 0) {
          //found
          var selectedRang = "MESH_" + typeRang.toUpperCase() + "_" + optionRang.toUpperCase();
          var stylesRang = nameMeshArr[2].toUpperCase();
          var checkMeshArr = [];
          var cntStyles = 0;
          //checkMeshArr.push("MESH_" + typeRang + "_" + spacersArr[0]);// SPACERS
          if (spacersArr.includes(optionRang.toUpperCase())) {
            checkMeshArr.push("MESH_" + typeRang + "_SOLID"); //CAP SOLID
            checkMeshArr.push("MESH_" + typeRang + "_FRAME"); //OG FRAME
            checkMeshArr.push("MESH_" + typeRang + "_ENAMEL"); //ENAMEL
            checkMeshArr.push("MESH_" + typeRang + "_8SHAPES"); //8SHAPES
          }
          if (optionRang.toUpperCase() == "FRAME") {
            checkMeshArr.push("MESH_" + typeRang + "_SOLID"); //CAP
            checkMeshArr.push("MESH_" + typeRang + "_ENAMEL"); //ENAMEL
            checkMeshArr.push("MESH_" + typeRang + "_" + spacersArr[0]);
            checkMeshArr.push("MESH_" + typeRang + "_FRAME_HEART"); //FRAME HEART,STAR,LOGO
            checkMeshArr.push("MESH_" + typeRang + "_FRAME_STAR"); //FRAME HEART,STAR,LOGO
            checkMeshArr.push("MESH_" + typeRang + "_FRAME_LOGO"); //FRAME HEART,STAR,LOGO
            checkMeshArr.push("MESH_" + typeRang + "_8SHAPES"); //8SHAPES
          }
          if (optionRang.toUpperCase() == "SOLID") {
            checkMeshArr.push("MESH_" + typeRang + "_FRAME"); //OG
            checkMeshArr.push("MESH_" + typeRang + "_" + spacersArr[0]);
            checkMeshArr.push("MESH_" + typeRang + "_ENAMEL"); //ENAMEL
            checkMeshArr.push("MESH_" + typeRang + "_8SHAPES"); //8SHAPES
            //for choose engraving/classic -> remove mesh classic if exist because of the same mesh on engraving, classic
            checkMeshArr.push("MESH_" + typeRang + "_SOLID_CLASSIC"); //SOLID CLASSIC
          }
          if (optionRang.toUpperCase() == "ENAMEL") {
            checkMeshArr.push("MESH_" + typeRang + "_FRAME"); //OG
            checkMeshArr.push("MESH_" + typeRang + "_" + spacersArr[0]);
            checkMeshArr.push("MESH_" + typeRang + "_SOLID"); //CAP
            checkMeshArr.push("MESH_" + typeRang + "_8SHAPES"); //8SHAPES
          }
          if (optionRang.toUpperCase() == "8SHAPES") {
            checkMeshArr.push("MESH_" + typeRang + "_FRAME"); //OG
            checkMeshArr.push("MESH_" + typeRang + "_" + spacersArr[0]);
            checkMeshArr.push("MESH_" + typeRang + "_SOLID"); //CAP
            checkMeshArr.push("MESH_" + typeRang + "_ENAMEL"); //ENAMEL
          }
          if (classicArr$1.includes(stylesRang)) {
            //selected classic -> remove pave prongs,diamonds,baguette
            cntStyles = 1;
          }
          if (paveArr$1.includes(stylesRang)) {
            //selected pave -> remove classic,baguette
            cntStyles = 2;
          }
          if (notClassicLevel2Arr.includes(stylesRang)) {
            //selected options 2 of stones:heart,hext -> remove others
            cntStyles = 3;
          }
          //if prongs,diamond -> 
          for (var meshName in visibleMeshes) {
            var meshArr = meshName.split('_');
            if (meshArr.length <= 3) {
              continue;
            }
            var meshPrefix = meshArr[0].toUpperCase() + "_" + meshArr[1].toUpperCase() + "_" + meshArr[2].toUpperCase();
            var meshSuffix = meshArr[meshArr.length - 1].toUpperCase();
            if (checkMeshArr.includes(meshPrefix) || checkMeshArr.includes(meshName.toUpperCase()) || cntStyles == 1 && paveArr$1.includes(meshSuffix) && selectedRang == meshPrefix || cntStyles == 2 && classicArr$1.includes(meshSuffix) && selectedRang == meshPrefix || cntStyles == 3 && notClassicLevel2Arr.includes(meshArr[3].toUpperCase()) && selectedRang == meshPrefix && stylesRang !== meshArr[3].toUpperCase()) {
              var mesh = window.scene3D.getObjectByName(meshName);
              mesh.visible = false;
              delete visibleMeshes[meshName];
              delete visibleMeshesColor[meshName];
              if (window.globalFormCartItem) {
                delete window.globalFormCartItem[meshName];
              }
            }
          }
        }
      }
    }
  }
  function level2SelectedOptions(itemParent, selectedTeethId, visibleMeshes, visibleMeshesColor) {
    //level 2  selectedTeethId: TR1,TL1
    var parentName = itemParent.name.toUpperCase().split('_');
    var typesElement = "";
    if (parentName.length > 1) {
      typesElement = parentName[parentName.length - 1].toUpperCase(); //CLASSIC,PAVER
    }
    parentName[0].toUpperCase(); //SPACERS,CAP,OG,STRAIGTH,CURVE,PLAIN
    var meshItem = null;
    if (classicArr$1.includes(typesElement))
      //classic -> level 4 
      {
        var isTop = 0;
        if (selectedTeethId.toUpperCase() == "BAR" && window.selectedTeethId) {
          var selectedTeethArr = window.selectedTeethId.toUpperCase().match(/[a-z]+|[0-9]+/gi);
          if (selectedTeethArr && selectedTeethArr.length > 1) {
            if (topVarArr.includes(selectedTeethArr[0])) {
              isTop = 1;
            }
            for (var mesh in itemParent.meshes) {
              var itm = itemParent.meshes[mesh];
              var itmArr = itm.name.split('_');
              var meshName = 'MESH_' + itmArr[0].toUpperCase() + '_' + itmArr[1].toUpperCase() + '_' + itmArr[2].toUpperCase();
              if (itemParent.name == itm.parent && itm.target.toUpperCase() == selectedTeethId.toUpperCase() && (isTop == 1 && barTopArr$1.includes(meshName) || isTop == 0 && barBottomArr$1.includes(meshName))) {
                meshItem = itm;
                break;
              }
            }
          }
        } else {
          for (var _mesh in itemParent.meshes) {
            var itm = itemParent.meshes[_mesh];
            if (itemParent.name == itm.parent && itm.target.toUpperCase() == selectedTeethId.toUpperCase()) {
              //found
              meshItem = itm;
              break;
            }
          }
        }
      } else {
      //PAVE  loop on childs -> loop meshes of childs
      var childSelected = null;
      //level 3 && target = 3 for bar
      //level 2 for og,cap,spacers
      if (window.selectedTeethId && itemParent.target.toUpperCase() == 'BAR') {
        var isTop = 0;
        var selectedTeethArr = window.selectedTeethId.toUpperCase().match(/[a-z]+|[0-9]+/gi);
        if (selectedTeethArr && selectedTeethArr.length > 1) {
          if (topVarArr.includes(selectedTeethArr[0])) {
            isTop = 1;
          }
        }
        for (var child in itemParent.childs) {
          var itm = itemParent.childs[child];
          var itmArr = itm.name.split('_');
          var meshName = 'MESH_' + itmArr[0].toUpperCase() + '_' + itmArr[1].toUpperCase() + '_' + itmArr[2].toUpperCase();
          if (itemParent.name == itm.parent && itm.target.toUpperCase() == selectedTeethId.toUpperCase() && (isTop == 1 && barTopArr$1.includes(meshName) || isTop == 0 && barBottomArr$1.includes(meshName))) {
            childSelected = itm;
            break;
          }
        }
      } else {
        //
        for (var _child in itemParent.childs) {
          var itm = itemParent.childs[_child];
          if (itemParent.name == itm.parent && itm.target.toUpperCase() == selectedTeethId.toUpperCase()) {
            //found
            childSelected = itm;
            break;
          }
        }
      }
      //CHECK ITEM
      if (childSelected) {
        for (var _mesh2 in childSelected.meshes) {
          var meshItm = childSelected.meshes[_mesh2];
          if (childSelected.name == meshItm.parent && meshItm.target.toUpperCase() == selectedTeethId.toUpperCase()) {
            //found
            meshItem = meshItm;
            break;
          }
        }
      }
    }
    return meshItem;
  }
  function resetSelectedBorder$1(itemParent) {
    //var parentName = itemParent.parent;//"CAP",OG,SPACERS,...
    var level = itemParent.level;
    var nextlevel = level + 1;
    for (var gl in window.globalParentHierachyId) {
      var itm = window.globalParentHierachyId[gl];
      if (itm.level == level) {
        if (itm && gl == itemParent.name.toUpperCase()) {
          var button = document.getElementById(itm.id);
          if (button && !button.classList.contains("selected-border")) {
            button.classList.add("selected-border");
          }
        } else {
          var _button = document.getElementById(itm.id);
          if (_button && _button.classList.contains("selected-border")) {
            _button.classList.remove("selected-border");
          }
        }
      } else if (itm.level == nextlevel) {
        var _button2 = document.getElementById(itm.id);
        if (_button2 && _button2.classList.contains("selected-border")) {
          _button2.classList.remove("selected-border");
        }
      }
    }
  }
  function setMeshOnOff(idParentLevel2, itemParent, mesh, visibleMeshes, visibleMeshesColor) {
    console.log("set setMeshOnOff mesh " + itemParent.name);
    if (!mesh.visible) {
      //current selected 
      mesh.visible = true;
      visibleMeshes["mesh_" + itemParent.name] = mesh;
      var findItems = itemParent.colorOption.filter(function (itm) {
        return itm.id == itemParent.defaultColorOptionId;
      });
      var rs = null;
      if (findItems && findItems.length > 0) {
        rs = findItems[0];
        var colorValue = parseInt(rs.colorCode, 16);
        var color = new THREE.Color(colorValue);
        mesh.material.color = color;
        visibleMeshesColor["mesh_" + itemParent.name] = color;
        //14Oct24 logic stones
        stonesOptionLogic(visibleMeshes, visibleMeshesColor, color, itemParent);
      }
      var button = document.getElementById(itemParent.defaultColorOptionId);
      if (button && !button.classList.contains("selected-border")) {
        button.classList.add("selected-border");
      }
      //if pave -> check the others of pave for default selected
      //for test -> comment
      setDefaultMeshPaveOthers(itemParent, visibleMeshes, visibleMeshesColor);
    }
  }

  //only for logic stones options for level 2
  function stonesOptionLogic(visibleMeshes, visibleMeshesColor, color, itm) {
    var meshArr = itm.parent.toUpperCase().split('_');
    if (meshArr && meshArr.length > 1) {
      if ("8SHAPES" == meshArr[1]) {
        //for classic and engraving using same mesh
        var mesh = window.scene3D.getObjectByName("mesh_" + window.selectedTeethId + "_Solid_Classic");
        mesh.material.color = color;
        mesh.visible = true;
        visibleMeshesColor[mesh.name] = color;
        visibleMeshes[mesh.name] = mesh;
        mesh = null;
      }
    }
  }
  function setDefaultMeshPaveOthers(itemParent, visibleMeshes, visibleMeshesColor) {
    var paveItm = null;
    for (var itmId in window.meshPaveHierachyArr) {
      var x = window.meshPaveHierachyArr[itmId];
      if (itmId != itemParent.id && x.parentId == itemParent.parentId) {
        paveItm = x;
        break;
      }
    }
    if (paveItm) {
      var mesh = window.scene3D.getObjectByName("mesh_" + paveItm.name);
      if (!mesh) return;
      mesh.visible = true;
      visibleMeshes["mesh_" + paveItm.name] = mesh;
      var findItems = paveItm.colorOption.filter(function (itm) {
        return itm.id == paveItm.defaultColorOptionId;
      });
      var rs = null;
      if (findItems && findItems.length > 0) {
        rs = findItems[0];
        var colorValue = parseInt(rs.colorCode, 16);
        var color = new THREE.Color(colorValue);
        mesh.material.color = color;
        visibleMeshesColor["mesh_" + paveItm.name] = color;
      }
      var button = document.getElementById(paveItm.defaultColorOptionId);
      if (button && !button.classList.contains("selected-border")) {
        button.classList.add("selected-border");
        //add default item pave others for get price
        meshColorDefaultCart(mesh, paveItm);
      }
    }
  }
  function meshColorDefaultCart(mesh, itemParent) {
    if (mesh.visible) {
      var colorDefaultId = itemParent.defaultColorOptionId;
      if (itemParent.colorOption && itemParent.colorOption.length > 0 && colorDefaultId) {
        var findItems = itemParent.colorOption.filter(function (itm) {
          return itm.id == colorDefaultId;
        });
        var rs = null;
        if (findItems && findItems.length > 0) {
          rs = findItems[0];
        } else {
          rs = itemParent.colorOption[0];
        }
        //var colorValue = parseInt(rs.colorCode, 16);
        //var valColor = new THREE.Color(colorValue);
        var combineName = '';
        if (itemParent.target.toUpperCase() == 'BAR') {
          //03Oct24 no need upper case , just call shopfiy api get by product handle, it mean must correct product handler
          //combineName = itemParent.parent.replace('mesh', '') + rs.name.replace(/\s+/g, '');
          combineName = itemParent.parent.replace('mesh', '') + "-" + rs.name.trim().replace(/\s+/g, '-');
          combineName = combineName.toLowerCase().replace('_bottom', '').replace('_top', '');
        } else {
          var itmArr = mesh.name.split('_');
          if (itmArr.length > 3) {
            //03Oct24 no need upper case , just call shopfiy api get by product handle, it mean must correct product handler
            //combineName = itmArr[2] + itmArr[3] + rs.name.replace(/\s+/g, '');
            combineName = itmArr[2] + "-" + itmArr[3] + "-" + rs.name.trim().replace(/\s+/g, '-');
          }
        }
        //03Oct24 no need upper case , just call shopfiy api get by product handle, it mean must correct product handler
        //combineName = combineName.replace(/_/g, '').toUpperCase();
        combineName = combineName.replace(/_/g, '-').toLowerCase();
        var obj = {
          name: mesh.name,
          description: rs.name,
          variantname: combineName
          // price: rs.price,
          // variantId: rs.eCommerceVariantOptionId,
          // color: valColor,
        };
        if (!window.globalFormCartItem) {
          window.globalFormCartItem = [];
          window.globalFormCartItem[mesh.name] = obj;
        } else {
          window.globalFormCartItem[mesh.name] = obj;
        }
        swatchColor('display');
      }
    }
  }
  function swatchColor(val) {
    window.swatchColorVal = val;
    var event = new Event('swatchColorChange');
    window.dispatchEvent(event);
  }

  // Example usage: When a user selects an image file to upload
  function handleImageUpload(event) {
    var file = event.target.files[0]; // Get the uploaded file
    var defaultRotation = 180;
    if (file && file.type.startsWith('image/')) {
      ImageResizer.imageFileResizer(file,
      // The file to resize
      200,
      // The new width (can be adjusted)
      350,
      // The new height (can be adjusted)
      'JPEG',
      // The new format (can be 'JPEG', 'PNG', 'WEBP', etc.)
      100,
      // The new quality (between 0-100)
      defaultRotation,
      // Rotation (0 = no rotation)
      function (resizedImage) {
        console.log(resizedImage);
        var level1Name = window.teethUploadName;
        loadImageToTeeth(level1Name, resizedImage);
        event.target.value = '';
      }, 'base64' // The output format (can be 'base64', 'blob', 'file', etc.)
      );
    } else {
      toast.current.show({
        severity: 'general',
        summary: 'Upload image',
        detail: 'The file must be a image type',
        life: 500
      });
    }
  }
  function loadImageToTeeth(optionName, imageUrl) {
    var loader = new THREE.TextureLoader(); // Create a texture loader
    var selectedTeethId = window.selectedTeethId;
    // Load the texture from the image URL
    loader.load(imageUrl, function (texture) {
      var selectedTeeth = window.scene3D.getObjectByName("mesh_" + optionName);
      if (selectedTeeth) {
        // Apply the texture to the material of the selected object
        if (!selectedTeeth.visible) {
          selectedTeeth.visible = true;
        }
        var itmArr = selectedTeeth.name.split('_');
        /*
        const box = new THREE.Box3().setFromObject(selectedTeeth);
        const currentWidth = box.max.x - box.min.x; // Calculate the width
        const currentHeight = box.max.y - box.min.y; // Calculate the height
        */
        // Set texture properties
        texture.wrapS = THREE.RepeatWrapping; // Prevents tiling on the x-axis
        texture.wrapT = THREE.RepeatWrapping; // Prevents tiling on the y-axis
        /*
        const textureWidth = texture.image.width;
        const textureHeight = texture.image.height;
        console.log(`textureWidth: ${textureWidth}, textureHeight: ${textureHeight}`);
        console.log(`currentWidth: ${currentWidth}, RepeatY: ${currentHeight}`);
        */
        var itm = null;
        // Calculate offsets to center the texture
        if ("FRAME" == itmArr[2].toUpperCase()) {
          itm = teethImageMaskPaveArr.find(function (item) {
            return item.name === itmArr[1];
          });
          if (!itm) {
            //not found , find 
            itm = teethImageMaskArr.find(function (item) {
              return item.name === itmArr[1];
            });
          }
        } else {
          itm = teethImageMaskArr.find(function (item) {
            return item.name === itmArr[1];
          });
        }
        console.log('teethImageMaskArr: ' + JSON.stringify(itm));
        texture.repeat.set(itm.repeatX, itm.repeatY);
        texture.offset.set(itm.offsetX, itm.offsetY); // Adjust offset to show the correct part
        //15Oct24 solid engraving check mirror
        var teethArr = optionName.toUpperCase().split("_");
        if ("SOLID_LOGO" == teethArr[1] + "_" + teethArr[2]) {
          var itm = engravingImageRotateArr.find(function (item) {
            return item.name === teethArr[0];
          });
          if (itm) {
            texture.repeat.x = itm.repeatX;
          }
        }
        //selectedTeeth.position.set(0, 0, 0);
        // Create a new material with the texture
        var material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: false,
          // Ensure it's not transparent
          opacity: 1.0 // Fully opaque
        });
        // Apply the material to the selected object
        selectedTeeth.material = material;
        selectedTeeth.material.needsUpdate = true; // Update the material
        // Ensure texture updates as well
        texture.needsUpdate = true;
        //save state of material for reapply
        addMaterials(selectedTeeth.name, material);
        //updateMaterial(selectedTeeth.name, material);
        //add item 07Oct24
        visibleMeshes["mesh_" + optionName] = selectedTeeth;
        var combineName = '';
        if (itmArr.length > 3) {
          combineName = itmArr[2] + "-" + itmArr[3];
          combineName = combineName.toLowerCase();
        }
        var obj = {
          name: selectedTeeth.name,
          description: "Logo",
          variantname: combineName
        };
        if (!window.globalFormCartItem) {
          window.globalFormCartItem = [];
          window.globalFormCartItem["mesh_" + optionName] = obj;
        } else {
          window.globalFormCartItem["mesh_" + optionName] = obj;
        }
        console.log("Texture applied to:", selectedTeethId);
      } else {
        console.error("Object not found:", selectedTeethId);
      }
    }, undefined, function (error) {
      console.error("Error loading texture:", error);
    });
  }
  function addMaterials(meshName, material) {
    if (!window.globalMaterials) {
      window.globalMaterials = [];
      window.globalMaterials[meshName] = material;
    } else {
      window.globalMaterials[meshName] = material;
    }
  }

  function checkOptionsVisibleOnLevel(itemParentName) {
    var parentName = itemParentName.toUpperCase();
    if (parentName in window.globalParentHierachyId) {
      var itm = window.globalParentHierachyId[parentName];
      var button = document.getElementById(itm.id);
      if (button && button.classList.contains("selected-border")) {
        return 1;
      }
    }
    return 0;
  }
  function applyLogicColorStar(componentType, visibleMeshesColor) {
    var rs = null;
    if ("STAR" == componentType) {
      var classic = "mesh_" + window.selectedTeethId + "_Frame_Classic";
      var prongs = "mesh_" + window.selectedTeethId + "_Frame_Prongs";
      var classicItem = visibleMeshesColor[classic];
      if (!classicItem) {
        rs = visibleMeshesColor[prongs];
      } else {
        rs = classicItem;
      }
    } else {
      var starSelected = "mesh_" + window.selectedTeethId + "_Frame_Star";
      rs = visibleMeshesColor[starSelected];
    }
    return rs;
  }
  function setColorOptionOnOff(itemParent, mesh, visibleMeshesColor, visibleMeshes) {
    console.log("set setColorOptionOnOff mesh " + itemParent.name + " colorCode: " + itemParent.colorCode);
    var colorValue = parseInt(itemParent.colorCode, 16);
    var color = new THREE__namespace.Color(colorValue);
    //apply star color for frame coloroption 07Oct24
    var starColor = applyLogicColorStar(itemParent.componentType, visibleMeshesColor);
    if (starColor) {
      if ("STAR" == itemParent.componentType) {
        color = starColor;
      } else {
        //for classic,pave just only using classic, prongs -> don't apply when chose diamond type
        var starMesh = visibleMeshes["mesh_" + window.selectedTeethId + "_Frame_Star"];
        if (starMesh && (!itemParent.type || itemParent.type && "DIAMOND" !== itemParent.type.toUpperCase())) {
          var startMeshObj = window.scene3D.getObjectByName("mesh_" + window.selectedTeethId + "_Frame_Star");
          startMeshObj.material.color = color;
          visibleMeshes[startMeshObj.name] = startMeshObj;
          visibleMeshesColor[startMeshObj.name] = color;
        }
      }
    }
    mesh.visible = true;
    mesh.material.color = color;
    visibleMeshes[mesh.name] = mesh;
    visibleMeshesColor[mesh.name] = color;
    var button = document.getElementById(itemParent.id);
    if (button && !button.classList.contains("selected-border")) {
      button.classList.add("selected-border");
    }
    //14Oct24 for logic stones option
    updateStonesOptionColorOption(visibleMeshes, visibleMeshesColor, color, mesh.name);
    document.getElementById("variantTeethId").value = itemParent.eCommerceVariantOptionId;
    console.log("set variantTeethId " + itemParent.eCommerceVariantOptionId);
  }
  //only for logic stones options for level option
  function updateStonesOptionColorOption(visibleMeshes, visibleMeshesColor, color, optionName) {
    var meshArr = optionName.toUpperCase().split('_');
    if (meshArr && meshArr.length > 1) {
      var meshSuffix = meshArr[meshArr.length - 1];
      if ("8SHAPES" == meshArr[2] && "METAL" == meshSuffix) {
        //for classic and engraving using same mesh
        var mesh = window.scene3D.getObjectByName("mesh_" + window.selectedTeethId + "_Solid_Classic");
        mesh.material.color = color;
        mesh.visible = true;
        visibleMeshesColor[mesh.name] = color;
        visibleMeshes[mesh.name] = mesh;
        mesh = null;
      }
    }
  }
  function resetColorSymbolFrameOptions(itemParent, teeth, visibleMeshes, visibleMeshesColor) {
    //parentName : name 
    document.querySelectorAll('[parent^="' + itemParent.parentId + '"]').forEach(function (element) {
      var strTarget = element.getAttribute("target");
      var strName = element.getAttribute("name");
      if (teeth.toUpperCase() == strTarget.toUpperCase() && symbolArr.includes(strName.toUpperCase())) {
        var button = document.getElementById(element.getAttribute("id"));
        if (button && button.classList.contains("selected-border")) {
          button.classList.remove("selected-border");
        }
      }
    });
    var meshFrameLogoName = null;
    var meshFrameStarName = null;
    var meshFrameHeartName = null;
    if ("HEART" == itemParent.componentType) {
      meshFrameLogoName = "mesh_" + window.selectedTeethId + "_Frame_Logo";
      meshFrameStarName = "mesh_" + window.selectedTeethId + "_Frame_Star";
      var frameLogo = window.scene3D.getObjectByName(meshFrameLogoName);
      if (frameLogo) {
        if (frameLogo.visible) {
          frameLogo.visible = false;
        }
        frameLogo.material.map = null;
        frameLogo.material.needsUpdate = true;
      }
      var frameStarName = window.scene3D.getObjectByName(meshFrameStarName);
      if (frameStarName) {
        if (frameStarName.visible) {
          frameStarName.visible = false;
        }
      }
      delete visibleMeshes[meshFrameLogoName];
      delete visibleMeshesColor[meshFrameLogoName];
      delete visibleMeshes[meshFrameStarName];
      delete visibleMeshesColor[meshFrameStarName];
      if (window.globalFormCartItem) {
        delete window.globalFormCartItem[meshFrameLogoName];
        delete window.globalFormCartItem[meshFrameStarName];
      }
      if (window.globalMaterials) {
        delete window.globalMaterials[meshFrameLogoName];
      }
    }
    if ("STAR" == itemParent.componentType) {
      meshFrameLogoName = "mesh_" + window.selectedTeethId + "_Frame_Logo";
      meshFrameHeartName = "mesh_" + window.selectedTeethId + "_Frame_Heart";
      var _frameLogo = window.scene3D.getObjectByName(meshFrameLogoName);
      if (_frameLogo) {
        if (_frameLogo.visible) {
          _frameLogo.visible = false;
        }
        _frameLogo.material.map = null;
        _frameLogo.material.needsUpdate = true;
      }
      var frameHeartName = window.scene3D.getObjectByName(meshFrameHeartName);
      if (frameHeartName) {
        if (frameHeartName.visible) {
          frameHeartName.visible = false;
        }
      }
      //clear visible mesh color and mesh
      delete visibleMeshes[meshFrameLogoName];
      delete visibleMeshesColor[meshFrameLogoName];
      delete visibleMeshes[meshFrameHeartName];
      delete visibleMeshesColor[meshFrameHeartName];
      if (window.globalFormCartItem) {
        delete window.globalFormCartItem[meshFrameLogoName];
        delete window.globalFormCartItem[meshFrameHeartName];
      }
      if (window.globalMaterials) {
        delete window.globalMaterials[meshFrameLogoName];
      }
    }
  }
  function resetColorOptions(elementId, teeth) {
    //parentName : name 
    document.querySelectorAll('[parent^="' + elementId + '"]').forEach(function (element) {
      // element.style.display = 'inline-flex';
      var strTarget = element.getAttribute("target");
      var arrToCheck = ["BASE", "BAR", "TC", "BC"];
      var strName = element.getAttribute("name");
      if (teeth.toUpperCase() == strTarget.toUpperCase() || arrToCheck.includes(strTarget.toUpperCase())) {
        if (!symbolArr.includes(strName.toUpperCase())) {
          var button = document.getElementById(element.getAttribute("id"));
          if (button && button.classList.contains("selected-border")) {
            button.classList.remove("selected-border");
          }
        }
      }
    });
  }
  function selectComponent(elementName, elementId, layer, parentId, all_level, teethId, itemParent) {
    var teeth = null;
    if (teethId) {
      teeth = teethId.split('_')[0];
    }
    document.getElementById("variantTeethId").value = '';
    console.log(elementName);
    console.log("teeth " + teethId);
    var elementArr = elementName.split('_');
    //hide all level begin layer + 1
    for (var i = layer + 1; i <= all_level; i++) {
      document.querySelectorAll('[layer^="' + i + '"]').forEach(function (element) {
        // element.style.display = 'none';
        element.classList.remove('show');
        element.classList.add('hide');
      });
    }
    // document.querySelectorAll('[target^="' + 'base' + '"]').forEach(function (element) { element.style.display = 'inline-flex'});
    //show layer 2 or layer 3(bar)
    document.querySelectorAll('[parent^="' + elementId + '"]').forEach(function (element) {
      // element.style.display = 'inline-flex';
      var strTarget = element.getAttribute("target");
      var arrToCheck = ["BASE", "BAR", "TC", "BC"];
      if (layer == 1) {
        if (teeth.toUpperCase() == strTarget.toUpperCase() || arrToCheck.includes(strTarget.toUpperCase())) {
          element.classList.remove('hide');
          element.classList.add('show');
        }
      }
    });
    //level 2 of spacers,og,cap, level3 for bar
    var typesElement = "";
    if (elementArr.length > 1) {
      typesElement = elementArr[elementArr.length - 1].toUpperCase(); //CLASSIC,PAVE
    }
    var optionsElement = elementArr[0].toUpperCase(); //SPACERS,CAP,OG
    var paveTitleArr = [];
    if (classicArr$1.includes(typesElement))
      //classic for not bar -> level 4
      {
        var isTop = 0;
        if (teeth.toUpperCase() == "BAR" && window.selectedTeethId) {
          var selectedTeethArr = window.selectedTeethId.toUpperCase().match(/[a-z]+|[0-9]+/gi);
          if (selectedTeethArr && selectedTeethArr.length > 1) {
            if (topVarArr.includes(selectedTeethArr[0])) {
              isTop = 1;
            }
            //check mesh is enable or not 
            for (var mesh in itemParent.meshes) {
              var itm = itemParent.meshes[mesh];
              var itmArr = itm.name.split('_');
              var meshName = 'MESH_' + itmArr[0].toUpperCase() + '_' + itmArr[1].toUpperCase() + '_' + itmArr[2].toUpperCase();
              if (itemParent.name == itm.parent && itm.target.toUpperCase() == teeth.toUpperCase() && (isTop == 1 && barTopArr$1.includes(meshName) || isTop == 0 && barBottomArr$1.includes(meshName))) {
                document.querySelectorAll('[parent^="' + itm.id + '"]').forEach(function (element) {
                  // element.style.display = 'inline-flex';
                  var strTarget = element.getAttribute("target");
                  //var arrToCheck = ["BASE", "BAR", "TC", "BC"]
                  if (teeth.toUpperCase() == strTarget.toUpperCase()) {
                    element.classList.remove('hide');
                    element.classList.add('show');
                  }
                });
                //clear button 
                for (var x in itm.colorOption) {
                  var btn = itm.colorOption[x];
                  clearBorderColors(btn.id);
                }
              }
            }
          }
        } else {
          //check mesh is enable or not 
          for (var _mesh in itemParent.meshes) {
            var itm = itemParent.meshes[_mesh];
            if (itemParent.name == itm.parent && itm.target.toUpperCase() == teeth.toUpperCase()) {
              document.querySelectorAll('[parent^="' + itm.id + '"]').forEach(function (element) {
                // element.style.display = 'inline-flex';
                var strTarget = element.getAttribute("target");
                //var arrToCheck = ["BASE", "BAR", "TC", "BC"]
                if (teeth.toUpperCase() == strTarget.toUpperCase()) {
                  element.classList.remove('hide');
                  element.classList.add('show');
                }
              });
              //clear button 
              for (var _x in itm.colorOption) {
                var btn = itm.colorOption[_x];
                clearBorderColors(btn.id);
              }
            }
          }
        }
      } else if (notClassicLevel2Arr.includes(typesElement) || optionsElement == "ENAMEL")
      //pave -> level 5
      {
        window.meshPaveHierachyArr = [];
        var childItem = null;
        var isTop = 0;
        if (teeth.toUpperCase() == "BAR" && window.selectedTeethId) {
          var selectedTeethArr = window.selectedTeethId.toUpperCase().match(/[a-z]+|[0-9]+/gi);
          if (selectedTeethArr && selectedTeethArr.length > 1) {
            if (topVarArr.includes(selectedTeethArr[0])) {
              isTop = 1;
            }
            for (var child in itemParent.childs) {
              var itm = itemParent.childs[child];
              var itmArr = itm.name.split('_');
              var meshName = 'MESH_' + itmArr[0].toUpperCase() + '_' + itmArr[1].toUpperCase() + '_' + itmArr[2].toUpperCase();
              if (itemParent.name == itm.parent && itm.target.toUpperCase() == teeth.toUpperCase() && (isTop == 1 && barTopArr$1.includes(meshName) || isTop == 0 && barBottomArr$1.includes(meshName))) {
                childItem = itm;
                break;
              }
            }
          }
        } else {
          //auto click level 1 ENAMEL
          if (layer == 1 && optionsElement == "ENAMEL") {
            var levelItem = itemParent.childs[0];
            for (var _child in levelItem.childs) {
              var itm = levelItem.childs[_child];
              if (levelItem.name == itm.parent && itm.target.toUpperCase() == teeth.toUpperCase()) {
                childItem = itm;
                break;
              }
            }
          } else {
            //old logic when click layer 2 28Sep24
            for (var _child2 in itemParent.childs) {
              var itm = itemParent.childs[_child2];
              if (itemParent.name == itm.parent && itm.target.toUpperCase() == teeth.toUpperCase()) {
                childItem = itm;
                break;
              }
            }
          }
        }
        if (childItem) {
          for (var _mesh2 in childItem.meshes) {
            var itm = childItem.meshes[_mesh2];
            window.meshPaveHierachyArr[itm.id] = itm;
            if (childItem.name == itm.parent && itm.target.toUpperCase() == teeth.toUpperCase()) {
              document.querySelectorAll('[parent^="' + itm.id + '"]').forEach(function (element) {
                // element.style.display = 'inline-flex';
                var strTarget = element.getAttribute("target");
                if (teeth.toUpperCase() == strTarget.toUpperCase()) {
                  element.classList.remove('hide');
                  element.classList.add('show');
                }
              });
              //clear button 
              for (var _x2 in itm.colorOption) {
                var btn = itm.colorOption[_x2];
                clearBorderColors(btn.id);
              }
              paveTitleArr.push(itm.displayName);
            }
          }
        }
      }
    //update span of pave title 
    if (paveTitleArr && paveTitleArr.length > 1) {
      updateSpanofPaveTitle(paveTitleArr);
    }
  }
  function clearBorderColors(itm) {
    var button = document.getElementById(itm);
    if (button && button.classList.contains("selected-border")) {
      button.classList.remove("selected-border");
    }
  }
  function updateSpanofPaveTitle(paveTitle) {
    var divPave = document.getElementById("paveOptionTitle");
    if (divPave) {
      if (divPave.classList.contains("hide")) {
        divPave.classList.remove("hide");
      }
      if (!divPave.classList.contains("show")) {
        divPave.classList.add("show");
      }
    }
    document.getElementById("paveOptionLeftTitle").innerHTML = paveTitle[0];
    document.getElementById("paveOptionRightTitle").innerHTML = paveTitle[1];
  }
  function removeSpanofPaveTitle$1() {
    var divPave = document.getElementById("paveOptionTitle");
    if (divPave) {
      divPave.classList.remove("show");
      divPave.classList.add("hide");
    }
    document.getElementById("paveOptionLeftTitle").innerHTML = '';
    document.getElementById("paveOptionRightTitle").innerHTML = '';
  }
  function clearBorderUnConfirmed(level3Id, itemParent, sameMesh) {
    var x = window.globalFormCartItem[sameMesh.name];
    if (x) return;
    for (var itm in window.globalParentHierachyId) {
      var level3 = window.globalParentHierachyId[itm];
      if (level3.id == level3Id) {
        var button = document.getElementById(level3.id);
        if (button && button.classList.contains("selected-border")) {
          button.classList.remove("selected-border");
        }
      }
    }
    removeSpanofPaveTitle$1();
    document.querySelectorAll('[parent^="' + itemParent.id + '"]').forEach(function (element) {
      element.classList.remove('show');
      element.classList.add('hide');
    });
    //for pave selected
    var paveItm = null;
    for (var itmId in window.meshPaveHierachyArr) {
      var x = window.meshPaveHierachyArr[itmId];
      if (itmId != itemParent.id && x.parentId == itemParent.parentId) {
        paveItm = x;
        break;
      }
    }
    if (paveItm) {
      document.querySelectorAll('[parent^="' + paveItm.id + '"]').forEach(function (element) {
        element.classList.remove('show');
        element.classList.add('hide');
      });
    }
  }
  function clearBorderSelectedHeartAndStar(itemParent, componentName) {
    //clear button 
    for (var x in itemParent.resetBorders) {
      var id = itemParent.resetBorders[x];
      clearBorderColors(id);
      // if("HEART" == btn.componentType || "STAR" == btn.componentType || componentName == btn.componentType)
      // {
      // }
    }
  }
  //for spacers,og,cap auto toggle level2
  function autoToggleLevel2(parentLevel1, selectedTeethId, visibleMeshes, visibleMeshesColor) {
    if (spacersArr.includes(parentLevel1.name.toUpperCase()) || ogCapArr.includes(parentLevel1.name.toUpperCase())) {
      if (parentLevel1.childs && parentLevel1.childs.length > 0) {
        var itemParent = parentLevel1.childs[0];
        globalChildHierachyId(itemParent.name, itemParent.childs, itemParent.level, itemParent.meshes, itemParent.target);
        selectComponent(itemParent.name, itemParent.id, itemParent.level, itemParent.parentId, 5, selectedTeethId, itemParent);
        resetSelectedBorder$1(itemParent);
        var meshItem = level2SelectedOptions(itemParent, selectedTeethId);
        if (meshItem) {
          var sameMesh = window.scene3D.getObjectByName("mesh_" + meshItem.name);
          //check bar if selected teeth on top or bottom on bar sections
          var isDenied = checkBarExisted$1(visibleMeshes, meshItem.name);
          if (isDenied > 0) {
            return 1;
          } else {
            //check options :cap,og,spacers
            resetSpacerOgCapOptions(sameMesh, visibleMeshes, visibleMeshesColor);
            setMeshOnOff(itemParent.id, meshItem, sameMesh, visibleMeshes, visibleMeshesColor);
            meshColorDefaultCart(sameMesh, meshItem);
            sameMesh = null;
            return 0;
          }
        }
      }
    }
    return 0;
  }

  function resetTeeth(selectedTeethId, visibleMeshes, visibleMeshesColor) {
    //window.selectedTeethId = '';
    for (var meshName in visibleMeshes) {
      var meshArr = meshName.split('_');
      var meshPrefix = meshArr[1].toUpperCase(); //TL1,TL2,TR1,..
      if (selectedTeethId == meshPrefix && meshArr[2].toUpperCase() !== 'RAW') {
        var mesh = window.scene3D.getObjectByName(meshName);
        mesh.visible = false;
        var colorValue = parseInt(defaultColorTeeth, 16);
        mesh.material.color = new THREE__namespace.Color(colorValue);
        delete visibleMeshes[meshName];
        delete visibleMeshesColor[meshName];
        if (window.globalFormCartItem) {
          delete window.globalFormCartItem[meshName];
        }
        if (window.globalMaterials) {
          delete window.globalMaterials[meshName];
        }
      }
    }
    for (var i = 2; i <= 5; i++) {
      document.querySelectorAll('[layer^="' + i + '"]').forEach(function (element) {
        // element.style.display = 'none';
        element.classList.remove('show');
        element.classList.add('hide');
      });
    }
  }
  function disableSpacersOgCap(visibleMeshes) {
    if (!window.selectedTeethId) return;
    var notSpacersList = ["TL5", "BL5"];
    var leftArr = ["TL", "BL"];
    var rigthArr = ["TR", "BR"];
    var spacersArr = ["SPACERS"];
    var ogCapArr = ["FRAME", "SOLID", "ENAMEL", "8SHAPES"]; //OG FRAME , CAP SOLID
    var typeRangArr = window.selectedTeethId.match(/[a-z]+|[0-9]+/gi);
    //check teeth is disabled on selected bar
    var isDisabled = checkBarExisted$1(visibleMeshes, window.selectedTeethId);
    if (isDisabled > 0) {
      disableSpacersClassName$1(spacersArr);
      disableOgCapClassName$1(ogCapArr);
      return;
    }
    var leftTeeth = "";
    var left = 0;
    var right = 0;
    var rigthTeeth = "";
    if (rigthArr.includes(typeRangArr[0])) {
      left = parseInt(typeRangArr[1]) - 1;
      right = parseInt(typeRangArr[1]) + 1;
    } else if (leftArr.includes(typeRangArr[0])) {
      left = parseInt(typeRangArr[1]) + 1;
      right = parseInt(typeRangArr[1]) - 1;
    }
    if (left > 5) {
      leftTeeth = typeRangArr[0] + "5";
    } else if (left > 0 && left <= 5) {
      leftTeeth = typeRangArr[0] + left;
    } else {
      leftTeeth = typeRangArr[0] == "TR" ? "TL1" : "BL1";
    }
    if (right > 5) {
      rigthTeeth = typeRangArr[0] + "5";
    } else if (right > 0 && right <= 5) {
      rigthTeeth = typeRangArr[0] + right;
    } else {
      rigthTeeth = typeRangArr[0] == "TL" ? "TR1" : "BR1";
    }
    var checkSpacersOpt = [];
    if (rigthTeeth !== window.selectedTeethId)
      //not equal selected -> add
      {
        checkSpacersOpt.push("MESH_" + rigthTeeth + "_" + spacersArr[0]); //spacer is set by rightTeeth
      }
    var checkOgCapOpt = []; //og or cap is set by leftTeeth
    checkOgCapOpt.push("MESH_" + leftTeeth + "_" + ogCapArr[0]);
    checkOgCapOpt.push("MESH_" + leftTeeth + "_" + ogCapArr[1]);
    var chkOgCap = 0;
    var chkSpacers = 0;
    for (var meshName in visibleMeshes) {
      var meshArr = meshName.split('_');
      if (meshArr.length <= 3) {
        continue;
      }
      var meshPrefix = meshArr[0].toUpperCase() + "_" + meshArr[1].toUpperCase() + "_" + meshArr[2].toUpperCase();
      //CHECK spacers is existed -> disable cap,og
      if (checkSpacersOpt.includes(meshPrefix)) {
        chkSpacers = 1;
      }
      //check og, cap is existed -> disable spacers
      if (checkOgCapOpt.includes(meshPrefix)) {
        chkOgCap = 1;
      }
      if (chkSpacers == 1 && chkOgCap == 1) {
        break;
      }
    }
    //tl5,bl5
    if (notSpacersList.includes(window.selectedTeethId)) {
      chkOgCap = 1;
    }
    if (chkOgCap == 1 && chkSpacers == 1) {
      disableSpacersClassName$1(spacersArr);
      disableOgCapClassName$1(ogCapArr);
    } else if (chkOgCap == 1) {
      disableSpacersClassName$1(spacersArr);
      resetOgCapClassName$1(ogCapArr);
    } else if (chkSpacers == 1) {
      disableOgCapClassName$1(ogCapArr);
      resetSpacersClassName$1(spacersArr);
    } else {
      //allow
      resetSpacersClassName$1(spacersArr);
      resetOgCapClassName$1(ogCapArr);
    }
  }
  function resetBarByTeeth(selectedTeethId, visibleMeshes, visibleMeshesColor, spacersArr, ogCapArr) {
    //selectedTeethId TR1,TL1
    var selectedTeethArr = selectedTeethId.toUpperCase().match(/[a-z]+|[0-9]+/gi);
    var type = 0;
    if (selectedTeethArr && selectedTeethArr.length > 1) {
      if (topVarArr.includes(selectedTeethArr[0])) {
        //top
        type = 1;
      }
      if (bottomVarArr.includes(selectedTeethArr[0])) {
        //bottom
        type = 2;
      }
      //delete bar
      for (var meshName in visibleMeshes) {
        var meshArr = meshName.toUpperCase().split('_');
        if (meshArr.length <= 3) {
          continue;
        }
        var meshPrefix = meshArr[0] + "_" + meshArr[1] + "_" + meshArr[2] + "_" + meshArr[3]; //MESH_STRAIGTH_BAR_TOP,...
        if (type == 1 && barTopArr$1.includes(meshPrefix)) {
          var sameMesh = window.scene3D.getObjectByName(meshName);
          sameMesh.visible = false;
          delete visibleMeshes[meshName];
          delete visibleMeshesColor[meshName];
          if (window.globalFormCartItem) {
            delete window.globalFormCartItem[meshName];
          }
          if (window.globalMaterials) {
            delete window.globalMaterials[meshName];
          }
        }
        if (type == 2 && barBottomArr$1.includes(meshPrefix)) {
          var sameMesh = window.scene3D.getObjectByName(meshName);
          sameMesh.visible = false;
          delete visibleMeshes[meshName];
          delete visibleMeshesColor[meshName];
          if (window.globalFormCartItem) {
            delete window.globalFormCartItem[meshName];
          }
          if (window.globalMaterials) {
            delete window.globalMaterials[meshName];
          }
        }
      }
      //clear
      resetSpacersClassName$1(spacersArr);
      resetOgCapClassName$1(ogCapArr);
    }
  }
  function disableOgCapClassName$1(ogCapArr) {
    for (var itm in ogCapArr) {
      var obj = window.globalParentHierachyId[ogCapArr[itm]];
      if (obj) {
        var dis = document.getElementById(obj.id);
        if (dis && !dis.classList.contains("disable-button")) {
          dis.classList.add("disable-button");
        }
      }
    }
  }
  function disableSpacersClassName$1(spacersArr) {
    var spacers = window.globalParentHierachyId[spacersArr[0]];
    if (spacers) {
      var spacersButton = document.getElementById(spacers.id);
      if (spacersButton && !spacersButton.classList.contains("disable-button")) {
        spacersButton.classList.add("disable-button");
      }
    }
  }
  function resetSpacersClassName$1(spacersArr) {
    var spacers = window.globalParentHierachyId[spacersArr[0]];
    if (spacers) {
      var spacersButton = document.getElementById(spacers.id);
      if (spacersButton && spacersButton.classList.contains("disable-button")) {
        spacersButton.classList.remove("disable-button");
      }
    }
  }
  function resetParentClassName$1(spacersArr, ogCapArr, selectedTeethId, visibleMeshes) {
    resetSpacersClassName$1(spacersArr);
    resetOgCapClassName$1(ogCapArr);
    var isTop = 0;
    if (window.selectedTeethId && selectedTeethId.toUpperCase() == 'BAR') {
      var selectedTeethArr = window.selectedTeethId.toUpperCase().match(/[a-z]+|[0-9]+/gi);
      if (selectedTeethArr && selectedTeethArr.length > 1) {
        if (topVarArr.includes(selectedTeethArr[0])) {
          isTop = 1; //top
        } else {
          isTop = 2; //bottom
        }
      }
    }
    for (var itm in visibleMeshes) {
      var meshArr = itm.toUpperCase().split("_");
      if (meshArr.length <= 3) {
        continue;
      }
      meshArr[1]; //tr1,...
      var meshName = meshArr[0].toUpperCase() + '_' + meshArr[1].toUpperCase() + '_' + meshArr[2].toUpperCase() + '_' + meshArr[3].toUpperCase();
      if (isTop == 1 && barTopArr$1.includes(meshName) || isTop == 2 && barBottomArr$1.includes(meshName)) {
        disableSpacersClassName$1(spacersArr);
        disableOgCapClassName$1(ogCapArr);
        break;
      }
    }
  }
  function resetOgCapClassName$1(ogCapArr) {
    for (var itm in ogCapArr) {
      var obj = window.globalParentHierachyId[ogCapArr[itm]];
      if (obj) {
        var dis = document.getElementById(obj.id);
        if (dis && dis.classList.contains("disable-button")) {
          dis.classList.remove("disable-button");
        }
      }
    }
  }
  function resetColorDefaultByBar(top, visibleMeshes, targetType) {
    //reset teeth color by bar to default
    var colorValue = parseInt(defaultColorTeeth, 16);
    var color = new THREE__namespace.Color(colorValue);
    var selectedColorVal = parseInt(selectedTeethColor, 16);
    var selectedColor = new THREE__namespace.Color(selectedColorVal);
    var meshSelectedTeeth = null;
    for (var meshName in visibleMeshes) {
      var meshArr = meshName.split('_');
      var meshPrefix = meshArr[0].toUpperCase() + "_" + meshArr[1].toUpperCase(); //MESH_ TL1,TL2,TR1,..
      if (meshArr[2].toUpperCase() == 'RAW' && (top > 0 && barTopOptArr$1.includes(meshPrefix) || top == 0 && barBottomOptArr$1.includes(meshPrefix))) {
        var mesh = window.scene3D.getObjectByName(meshName);
        if (window.selectedTeethId && window.selectedTeethId == meshArr[1].toUpperCase()) {
          mesh.material.color = selectedColor;
          meshSelectedTeeth = mesh;
        } else {
          mesh.material.color = color;
        }
      }
    }
    if (targetType == 'BAR' && meshSelectedTeeth) {
      disableOgCapClassName$1(ogCapArr);
      disableSpacersClassName$1(spacersArr);
    } else {
      //enable spacers, og, cap level 1
      resetSpacersClassName$1(spacersArr);
      resetOgCapClassName$1(ogCapArr);
    }
  }
  function clearMeshNotSelected(visibleMeshes, visibleMeshesColor, top, meshSelectedName) {
    var selectName = meshSelectedName.split('_');
    var othersBarArr = [];
    var cntOthersBar = 0;
    var stylesArr = [];
    //var selectedBarStyles = selectName[3]?.toUpperCase();//CLASSIC,DIAMONDS,PRONGS
    //11Oct24 change logic get last item of arrays - mesh name for determine which is classic or pave
    var selectedBarStyles = selectName[selectName.length - 1].toUpperCase();
    if (classicArr$1.includes(selectedBarStyles)) {
      //classic -> check DIAMONDS,PRONGS,BAGUETTEMETAL,
      stylesArr = paveArr$1; //["PRONGS", "DIAMONDS", "DIAMOND", "BAGUETTEMETAL", "BAGUETTESTONE"];
    }
    if (paveArr$1.includes(selectedBarStyles)) {
      //classic -> check DIAMONDS,PRONGS
      stylesArr = ["CLASSIC"];
    }
    if (straigthArr.includes(selectName[0].toUpperCase())) {
      //
      cntOthersBar = 1; //flag curve bar top or bottom
      othersBarArr.push("MESH_" + curveArr[0] + "_" + selectName[1].toUpperCase() + "_" + selectName[2].toUpperCase());
    }
    if (curveArr.includes(selectName[0].toUpperCase())) {
      //
      cntOthersBar = 2; //flag traight bar top or bottom
      othersBarArr.push("MESH_" + straigthArr[0] + "_" + selectName[1].toUpperCase() + "_" + selectName[2].toUpperCase());
    }
    for (var meshName in visibleMeshes) {
      var meshArr = meshName.split('_');
      if (meshArr.length <= 3) {
        continue;
      }
      var meshPrefix = meshArr[0].toUpperCase() + "_" + meshArr[1].toUpperCase(); //TL1,TL2,TR1,..
      var barPrefix = meshPrefix + "_" + meshArr[2].toUpperCase() + "_" + meshArr[3].toUpperCase(); //MESH_STRAIGTH_BAR_TOP
      var meshSuffix = "";
      if (meshArr.length > 4) {
        meshSuffix = meshArr[4].toUpperCase(); //CLASSIC,DIAMONDS,PRONGS
      }
      //top 0 : remove others bar items
      if (cntOthersBar > 0 && (othersBarArr.includes(barPrefix) || stylesArr.includes(meshSuffix) && meshArr[2].toUpperCase() !== 'RAW' && (selectName[2].toUpperCase() == 'TOP' && barTopArr$1.includes(barPrefix) || selectName[2].toUpperCase() == 'BOTTOM' && barBottomArr$1.includes(barPrefix)))) {
        // + selected traigth top -> remove curve straight top
        // + select traigth top classic -> remove traigth top prongs, diamont 
        var mesh = window.scene3D.getObjectByName(meshName);
        mesh.visible = false;
        delete visibleMeshes[meshName];
        delete visibleMeshesColor[meshName];
        if (window.globalFormCartItem) {
          delete window.globalFormCartItem[meshName];
        }
        if (window.globalMaterials) {
          delete window.globalMaterials[meshName];
        }
      }
      //remove tl1,tl2,...
      if (top === 1 && meshArr[2].toUpperCase() !== 'RAW' //clear top 
      && (barTopOptArr$1.includes(meshPrefix) || barTopArr$1.includes(barPrefix) && stylesArr.includes(meshSuffix))) {
        var mesh = window.scene3D.getObjectByName(meshName);
        mesh.visible = false;
        delete visibleMeshes[meshName];
        delete visibleMeshesColor[meshName];
        if (window.globalFormCartItem) {
          delete window.globalFormCartItem[meshName];
        }
        if (window.globalMaterials) {
          delete window.globalMaterials[meshName];
        }
      }
      if (top === 2 && meshArr[2].toUpperCase() !== 'RAW' //clear bottom
      && (barBottomOptArr$1.includes(meshPrefix) || barBottomArr$1.includes(barPrefix) && stylesArr.includes(meshSuffix))) {
        var mesh = window.scene3D.getObjectByName(meshName);
        mesh.visible = false;
        delete visibleMeshes[meshName];
        delete visibleMeshesColor[meshName];
        if (window.globalFormCartItem) {
          delete window.globalFormCartItem[meshName];
        }
        if (window.globalMaterials) {
          delete window.globalMaterials[meshName];
        }
      }
    }
    var top = 0;
    if (selectName[2].toUpperCase() == "TOP") {
      top = 1;
    }
    resetColorDefaultByBar(top, visibleMeshes, selectName[1].toUpperCase());
  }
  var checkMeshExisted = function checkMeshExisted(visibleMeshes, meshSelectedName) {
    var selectName = meshSelectedName.split('_');
    //selected mesh for check
    var meshSelected = "MESH_" + selectName[0].toUpperCase() + "_" + selectName[1].toUpperCase() + "_" + selectName[2].toUpperCase();
    var top = 0;
    if (barTopArr$1.includes(meshSelected)) {
      //neu top selected
      top = 1;
    }
    if (barBottomArr$1.includes(meshSelected)) {
      //neu bottom selected
      top = 2;
    }
    //var stylesArr=[];
    var currentSelectedMesh = 'MESH_' + meshSelectedName.toUpperCase();
    // var selectedBarStyles = selectName[3].toUpperCase();//CLASSIC,DIAMONDS,PRONGS
    // if(classicArr.includes(selectedBarStyles)){//classic -> check DIAMONDS,PRONGS
    //     stylesArr = ["PRONGS","DIAMONDS","DIAMOND"];
    // }
    // if(paveArr.includes(selectedBarStyles)){//classic -> check DIAMONDS,PRONGS
    //     stylesArr = ["CLASSIC"];
    // }
    for (var meshName in visibleMeshes) {
      var meshArr = meshName.split('_');
      if (meshArr.length <= 3) {
        continue;
      }
      var meshPrefix = meshArr[0].toUpperCase() + "_" + meshArr[1].toUpperCase(); //mesh_tr1,...
      meshPrefix + "_" + meshArr[2].toUpperCase() + "_" + meshArr[3].toUpperCase(); //mesh_traight_bar_top
      // var meshSuffix = "";
      // if(meshArr.length > 4){
      //     meshSuffix = meshArr[4].toUpperCase();//CLASSIC,DIAMONDS,PRONGS
      // }
      if (top === 1 && meshArr[2].toUpperCase() !== 'RAW' && meshName.toUpperCase() !== currentSelectedMesh && barTopOptArr$1.includes(meshPrefix) //&& barTopArr.includes(barPrefix) 
      // || (meshSuffix && barTopArr.includes(barPrefix) && stylesArr.includes(meshSuffix))
      ) {
        return 1;
      }
      if (top === 2 && meshArr[2].toUpperCase() !== 'RAW' && meshName.toUpperCase() !== currentSelectedMesh && barBottomOptArr$1.includes(meshPrefix) //&& barBottomArr.includes(barPrefix)
      // || (meshSuffix && barBottomArr.includes(barPrefix) && stylesArr.includes(meshSuffix))
      ) {
        return 2;
      }
    }
    return 0;
  };
  function disableRangOptions$1(itemParent, name, visibleMeshes) {
    var notSpacersList = ["TL5", "BL5"];
    var spacersArr = ["SPACERS"];
    var ogCapArr = ["FRAME", "SOLID", "ENAMEL", "8SHAPES"]; //OG FRAME , CAP SOLID
    var leftArr = ["TL", "BL"];
    var rigthArr = ["TR", "BR"];
    var parentName = itemParent.name.toUpperCase();
    if (spacersArr.includes(parentName) && notSpacersList.includes(name)) {
      //TL5,BL5 disable spacers, not allow
      return 1;
    }
    //check teeth is disabled on selected bar
    var isDisabled = checkBarExisted$1(visibleMeshes, name);
    if (isDisabled > 0 && (spacersArr.includes(parentName) || ogCapArr.includes(parentName))) {
      return 1;
    }
    var typeRangArr = name.match(/[a-z]+|[0-9]+/gi);
    var leftTeeth = "";
    var left = 0;
    var right = 0;
    var rigthTeeth = "";
    if (rigthArr.includes(typeRangArr[0])) {
      left = parseInt(typeRangArr[1]) - 1;
      right = parseInt(typeRangArr[1]) + 1;
    } else if (leftArr.includes(typeRangArr[0])) {
      left = parseInt(typeRangArr[1]) + 1;
      right = parseInt(typeRangArr[1]) - 1;
    }
    if (left > 5) {
      leftTeeth = typeRangArr[0] + "5";
    } else if (left > 0 && left <= 5) {
      leftTeeth = typeRangArr[0] + left;
    } else {
      leftTeeth = typeRangArr[0] == "TR" ? "TL1" : "BL1";
    }
    if (right > 5) {
      rigthTeeth = typeRangArr[0] + "5";
    } else if (right > 0 && right <= 5) {
      rigthTeeth = typeRangArr[0] + right;
    } else {
      rigthTeeth = typeRangArr[0] == "TL" ? "TR1" : "BR1";
    }
    //var checkSpacersOpt = "MESH_" + rigthTeeth+ "_"+spacersArr[0];//spacer is set by rightTeeth
    var checkSpacersOpt = [];
    if (rigthTeeth !== parentName)
      //not equal selected -> add
      {
        checkSpacersOpt.push("MESH_" + rigthTeeth + "_" + spacersArr[0]); //spacer is set by rightTeeth
      }
    var checkOgCapOpt = []; //og or cap is set by leftTeeth
    checkOgCapOpt.push("MESH_" + leftTeeth + "_" + ogCapArr[0]);
    checkOgCapOpt.push("MESH_" + leftTeeth + "_" + ogCapArr[1]);
    for (var meshName in visibleMeshes) {
      var meshArr = meshName.split('_');
      if (meshArr.length <= 3) {
        continue;
      }
      var meshPrefix = meshArr[0].toUpperCase() + "_" + meshArr[1].toUpperCase() + "_" + meshArr[2].toUpperCase();
      meshPrefix + "_" + meshArr[3].toUpperCase();
      //CHECK spacers,og,cap is existed -> disable cap,og
      if (name !== meshArr[1].toUpperCase() && (ogCapArr.includes(parentName) && checkSpacersOpt.includes(meshPrefix) || spacersArr.includes(parentName) && checkOgCapOpt.includes(meshPrefix)) //||
      //(topVarArr.includes(typeRangArr[0]) && barTopArr.includes(barPrefix))   ||
      //(bottomVarArr.includes(typeRangArr[0]) && barBottomArr.includes(barPrefix))
      ) {
        return 1;
      }
    }
    return 0;
  }
  //only for logic solid options : classic -> remove engraving ;
  function updateEngravingLogic(meshTeeth, itm) {
    if (itm.parent == "SOLID") {
      //for classic and engraving using same mesh
      if (!window.globalEngravingItem) {
        if (itm.name.toUpperCase() == "SOLID_LOGO") {
          window.globalEngravingItem = [];
          window.globalEngravingItem[meshTeeth] = itm;
        }
      } else {
        if (itm.name.toUpperCase() == "SOLID_CLASSIC" || itm.name.toUpperCase() == "SOLID_PAVE") {
          delete window.globalEngravingItem[meshTeeth];
        } else {
          window.globalEngravingItem[meshTeeth] = itm;
        }
      }
    }
  }

  //clear all image upload for selected teeth
  function clearHeartAndStar(visibleMeshesColor, visibleMeshes) {
    var meshFrameHeartName = "mesh_" + window.selectedTeethId + "_Frame_Heart";
    var meshFrameStarName = "mesh_" + window.selectedTeethId + "_Frame_Star";
    var frameHeartName = window.scene3D.getObjectByName(meshFrameHeartName);
    if (frameHeartName) {
      if (frameHeartName.visible) {
        frameHeartName.visible = false;
      }
    }
    var frameStarName = window.scene3D.getObjectByName(meshFrameStarName);
    if (frameStarName) {
      if (frameStarName.visible) {
        frameStarName.visible = false;
      }
    }
    //clear visible mesh color and mesh
    delete visibleMeshes[meshFrameHeartName];
    delete visibleMeshesColor[meshFrameHeartName];
    delete visibleMeshes[meshFrameStarName];
    delete visibleMeshesColor[meshFrameStarName];
    if (window.globalFormCartItem) {
      delete window.globalFormCartItem[meshFrameHeartName];
      delete window.globalFormCartItem[meshFrameStarName];
    }
  }
  //clear all image upload for selected teeth
  function clearImageAndFrame(visibleMeshesColor, visibleMeshes) {
    var meshSolidLogoName = "mesh_" + window.selectedTeethId + "_Solid_Logo";
    var meshFrameLogoName = "mesh_" + window.selectedTeethId + "_Frame_Logo";
    var meshFrameHeartName = "mesh_" + window.selectedTeethId + "_Frame_Heart";
    var meshFrameStarName = "mesh_" + window.selectedTeethId + "_Frame_Star";
    var solidLogo = window.scene3D.getObjectByName(meshSolidLogoName);
    if (solidLogo) {
      if (solidLogo.visible) {
        solidLogo.visible = false;
      }
      // Apply the texture to the material of the selected object
      solidLogo.material.map = null;
      solidLogo.material.needsUpdate = true;
    }
    var frameLogo = window.scene3D.getObjectByName(meshFrameLogoName);
    if (frameLogo) {
      if (frameLogo.visible) {
        frameLogo.visible = false;
      }
      frameLogo.material.map = null;
      frameLogo.material.needsUpdate = true;
    }
    var frameHeartName = window.scene3D.getObjectByName(meshFrameHeartName);
    if (frameHeartName) {
      if (frameHeartName.visible) {
        frameHeartName.visible = false;
      }
    }
    var frameStarName = window.scene3D.getObjectByName(meshFrameStarName);
    if (frameStarName) {
      if (frameStarName.visible) {
        frameStarName.visible = false;
      }
    }
    //clear visible mesh color and mesh
    delete visibleMeshes[meshSolidLogoName];
    delete visibleMeshesColor[meshSolidLogoName];
    delete visibleMeshes[meshFrameLogoName];
    delete visibleMeshesColor[meshFrameLogoName];
    delete visibleMeshes[meshFrameHeartName];
    delete visibleMeshesColor[meshFrameHeartName];
    delete visibleMeshes[meshFrameStarName];
    delete visibleMeshesColor[meshFrameStarName];
    if (window.globalFormCartItem) {
      delete window.globalFormCartItem[meshSolidLogoName];
      delete window.globalFormCartItem[meshFrameLogoName];
      delete window.globalFormCartItem[meshFrameHeartName];
      delete window.globalFormCartItem[meshFrameStarName];
    }
    if (window.globalMaterials) {
      delete window.globalMaterials[meshSolidLogoName];
      delete window.globalMaterials[meshFrameLogoName];
    }
  }
  function setDataOrderDetailsCart(mesh, itemParent, visibleMeshes, visibleMeshesColor) {
    var combineName = '';
    var itmArr = mesh.name.split('_');
    if (itmArr.length > 3) {
      combineName = itmArr[2] + "-" + itmArr[3] + "-" + itemParent.name.trim().replace(/\s+/g, '-');
      combineName = combineName.replace(/_/g, '').toLowerCase();
    }
    var obj = {
      name: mesh.name,
      description: itemParent.name,
      variantname: combineName
    };
    //check color is visibleMeshes or not
    var chk = 0;
    for (var meshName in visibleMeshes) {
      if (meshName === mesh.name) {
        chk = 1;
        break;
      }
    }
    if (chk > 0) {
      if (!window.globalFormCartItem) {
        window.globalFormCartItem = [];
        window.globalFormCartItem[mesh.name] = obj;
      } else {
        window.globalFormCartItem[mesh.name] = obj;
      }
    } else {
      delete visibleMeshes[mesh.name];
      delete visibleMeshesColor[mesh.name];
      if (window.globalFormCartItem) {
        delete window.globalFormCartItem[mesh.name];
      }
    }
  }

  function Options01(_ref) {
    var hierachyList = _ref.hierachyList,
      level = _ref.level;
      _ref.log;
      _ref.declaredTag;
      var parent = _ref.parent,
      maxLevel = _ref.maxLevel,
      cssClass = _ref.cssClass,
      toast = _ref.toast;
    var ref = React.useRef();
    React.useRef("none");
    var _useShareableState = useShareableState();
      _useShareableState.scene3D;
      _useShareableState.texture;
      var visibleMeshes = _useShareableState.visibleMeshes;
      _useShareableState.setVisibleMeshes;
      var visibleMeshesColor = _useShareableState.visibleMeshesColor;
      _useShareableState.setVisibleMeshesColor;
    var confirmBox = function confirmBox(idParentLevel2, itemParent, selectedTeethId, sameMesh, isDialog) {
      confirmdialog.confirmDialog({
        message: 'Are you sure you want to remove other options?',
        header: 'Confirmation',
        icon: 'pi pi-info-circle',
        accept: function accept() {
          console.log('itemParent.id' + itemParent.id);
          setMeshOnOff(idParentLevel2, itemParent, sameMesh, visibleMeshes, visibleMeshesColor);
          clearMeshNotSelected(visibleMeshes, visibleMeshesColor, isDialog, itemParent.name);
          meshColorDefaultCart(sameMesh, itemParent);
        },
        reject: function reject() {},
        onHide: function onHide() {
          clearBorderUnConfirmed(idParentLevel2, itemParent, sameMesh);
        }
      });
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      ref: ref,
      key: Date.now().toString(36) + Math.random().toString(36).substring(2) + level,
      className: (cssClass ? cssClass : "") + " delimiter card flex flex-wrap justify-content-center gap-3"
    }, Object.keys(hierachyList).map(function (key, index) {
      var listItem = hierachyList[key];
      if (listItem && listItem.length > 0 && parent && parent == '1') {
        listItem = listItem.filter(function (item) {
          return item.displayOrder <= 6;
        });
      } else if (listItem && listItem.length > 0 && parent && parent == '2') {
        listItem = listItem.filter(function (item) {
          return item.displayOrder > 6;
        });
      }
      if (key == level) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, listItem && listItem.length > 0 && listItem.map(function (itemParent, index) {
          // console.log(itemParent.name);
          return /*#__PURE__*/React.createElement("div", {
            className: (level == 1 ? "show" : "hide") + (level == "colorOption" ? " divColorSpacer " : ""),
            target: itemParent.target,
            layer: itemParent.level,
            parent: itemParent.parentId,
            rel: itemParent.parentId,
            name: itemParent.name,
            key: "div_" + index,
            all_level: maxLevel
          }, /*#__PURE__*/React.createElement(button.Button, {
            type: "button",
            onClick: function onClick(event) {
              var _itemParent$component;
              // console.log(itemParent.name);
              // var selectedTeethId = document.getElementById("selectedTeethId") ? document.getElementById("selectedTeethId").value : "none";
              var selectedTeethId = window.selectedTeethId;
              //check reset 
              if (((_itemParent$component = itemParent.componentType) === null || _itemParent$component === void 0 ? void 0 : _itemParent$component.toUpperCase()) == 'RESET') {
                resetTeeth(selectedTeethId, visibleMeshes, visibleMeshesColor);
                resetSelectedBorder$1(itemParent);
                removeSpanofPaveTitle$1();
                resetBarByTeeth(selectedTeethId, visibleMeshes, visibleMeshesColor, spacersArr, ogCapArr);
                disableSpacersOgCap(visibleMeshes);
                clearImageAndFrame(visibleMeshesColor, visibleMeshes);
                swatchColor('none');
                return;
              }
              var levelArr = [1]; //level 1
              if (selectedTeethId == "none" || !selectedTeethId) {
                toast.current.show({
                  severity: 'general',
                  summary: 'Select tooth ',
                  detail: 'Please select tooth to continue',
                  life: 500
                });
              } else {
                var _itemParent$target;
                //console.log(selectedTeethId);
                if ((_itemParent$target = itemParent.target) !== null && _itemParent$target !== void 0 && _itemParent$target.toUpperCase().startsWith("BAR")) {
                  selectedTeethId = 'Bar';
                }
                // setTeethId(selectedTeethId);
                if (levelArr.includes(level)) {
                  //check button disable -> clear or alert
                  globalChildHierachyId(itemParent.name, itemParent.childs, level, itemParent.meshes, itemParent.target);
                  //check is existed on visible -> return, not action
                  var chk = checkOptionsVisibleOnLevel(itemParent.name);
                  if (chk > 0) {
                    return;
                  }
                  var cnt = disableRangOptions$1(itemParent, selectedTeethId, visibleMeshes);
                  if (cnt > 0) {
                    toast.current.show({
                      severity: 'general',
                      summary: 'WARING',
                      detail: 'This option requires a gap between Spacer,Please select a different option',
                      life: 1000
                    });
                    return;
                  }
                  selectComponent(itemParent.name, itemParent.id, itemParent.level, itemParent.parentId, maxLevel, selectedTeethId, itemParent);
                  removeSpanofPaveTitle$1();
                  resetSelectedBorder$1(itemParent);
                  swatchColor('none');
                  //resetBarMeshVisible(itemParent.name,selectedTeethId, visibleMeshes,visibleMeshesColor);
                  resetParentClassName$1(spacersArr, ogCapArr, selectedTeethId, visibleMeshes);
                  //auto toggle for spacers,og,cap,bar
                  var rs = autoToggleLevel2(itemParent, selectedTeethId, visibleMeshes, visibleMeshesColor);
                  if (rs > 0 && selectedTeethId.toUpperCase() !== 'BAR') {
                    toast.current.show({
                      severity: 'general',
                      summary: 'WARING',
                      detail: 'This option requires a gap between Spacer,Please select a different option',
                      life: 1000
                    });
                  } else if (selectedTeethId.toUpperCase() === 'BAR') {
                    if (itemParent.childs && itemParent.childs.length > 0) {
                      var level2Bar = itemParent.childs[0];
                      if (level2Bar) {
                        globalChildHierachyId(level2Bar.name, level2Bar.childs, level2Bar.level, level2Bar.meshes, level2Bar.target);
                        selectComponent(level2Bar.name, level2Bar.id, level2Bar.level, level2Bar.parentId, 5, selectedTeethId, level2Bar);
                        resetSelectedBorder$1(level2Bar);
                        var meshItem = level2SelectedOptions(level2Bar, selectedTeethId);
                        if (meshItem) {
                          var sameMesh = window.scene3D.getObjectByName("mesh_" + meshItem.name);
                          //check bar if selected teeth on top or bottom on bar sections
                          var isDialog = checkMeshExisted(visibleMeshes, meshItem.name);
                          if (isDialog > 0) {
                            confirmBox(level2Bar.id, meshItem, selectedTeethId, sameMesh, isDialog);
                            sameMesh = null;
                          } else {
                            //check options :cap,og,spacers
                            setMeshOnOff(level2Bar.id, meshItem, sameMesh, visibleMeshes, visibleMeshesColor);
                            clearMeshNotSelected(visibleMeshes, visibleMeshesColor, isDialog, meshItem.name);
                            meshColorDefaultCart(sameMesh, meshItem);
                            sameMesh = null;
                          }
                        }
                      }
                    }
                  }
                } else if (level == 2) {
                  globalChildHierachyId(itemParent.name, itemParent.childs, level, itemParent.meshes, itemParent.target);
                  //check is existed on visible -> return, not action
                  var chk = checkOptionsVisibleOnLevel(itemParent.name);
                  if (chk > 0) {
                    return;
                  }
                  var cnt = disableRangOptions$1(itemParent, selectedTeethId, visibleMeshes);
                  if (cnt > 0) {
                    toast.current.show({
                      severity: 'general',
                      summary: 'WARING',
                      detail: 'This option requires a gap between Spacer,Please select a different option',
                      life: 1000
                    });
                    return;
                  }
                  removeSpanofPaveTitle$1();
                  selectComponent(itemParent.name, itemParent.id, itemParent.level, itemParent.parentId, maxLevel, selectedTeethId, itemParent);
                  resetSelectedBorder$1(itemParent);
                  var meshItem = level2SelectedOptions(itemParent, selectedTeethId);
                  if (meshItem) {
                    var sameMesh = window.scene3D.getObjectByName("mesh_" + meshItem.name);
                    // var sameMesh = scene3D.getObjectByName(itemParent.name);
                    if (meshItem.target.toUpperCase() === 'BAR') {
                      var _isDialog = checkMeshExisted(visibleMeshes, meshItem.name);
                      if (_isDialog > 0) {
                        confirmBox(itemParent.id, meshItem, selectedTeethId, sameMesh, _isDialog);
                        sameMesh = null;
                      } else {
                        setMeshOnOff(itemParent.id, meshItem, sameMesh, visibleMeshes, visibleMeshesColor);
                        clearMeshNotSelected(visibleMeshes, visibleMeshesColor, _isDialog, meshItem.name);
                        meshColorDefaultCart(sameMesh, meshItem);
                        sameMesh = null;
                        //setSwatchColor('display');
                      }
                    } else {
                      //disableOrEnableButton(sameMesh);
                      //check bar if selected teeth on top or bottom on bar sections
                      var isDenied = checkBarExisted$1(visibleMeshes, meshItem.name);
                      if (isDenied > 0) {
                        toast.current.show({
                          severity: 'general',
                          summary: 'WARING',
                          detail: 'This option requires a gap between Spacer,Please select a different option',
                          life: 1000
                        });
                      } else {
                        //logic solid classic + engraving
                        updateEngravingLogic(sameMesh.name, itemParent);
                        //check options :cap,og,spacers
                        resetSpacerOgCapOptions(sameMesh, visibleMeshes, visibleMeshesColor, itemParent.parent);
                        setMeshOnOff(itemParent.id, meshItem, sameMesh, visibleMeshes, visibleMeshesColor);
                        meshColorDefaultCart(sameMesh, meshItem);
                        sameMesh = null;
                        //setSwatchColor('display');
                      }
                    }
                  }
                } else if (level == "colorOption") {
                  if ("UPLOAD" == itemParent.componentType) {
                    clearHeartAndStar(visibleMeshesColor, visibleMeshes);
                    window.teethUploadName = itemParent.componentName;
                    document.getElementById("uploadInput").click();
                    clearBorderSelectedHeartAndStar(itemParent);
                    return;
                  }
                  if ("CLEAR" == itemParent.componentType) {
                    clearImageAndFrame(visibleMeshesColor, visibleMeshes);
                    clearBorderSelectedHeartAndStar(itemParent);
                    return;
                  }
                  selectComponent(itemParent.name, itemParent.id, itemParent.level, itemParent.parentId, maxLevel, selectedTeethId, itemParent);
                  // console.log(document.getElementById(itemParent.parentId))
                  var x = document.getElementById(itemParent.parentId);
                  var sameMesh = null;
                  if (symbolArr.includes(itemParent.componentType)) {
                    //for frame colorOptions 04Oct24
                    resetColorSymbolFrameOptions(itemParent, selectedTeethId, visibleMeshes, visibleMeshesColor);
                    sameMesh = window.scene3D.getObjectByName("mesh_" + itemParent.componentName);
                  } else {
                    //for remains 04Oct24
                    //reset colorOptions before apply border colors
                    resetColorOptions(itemParent.parentId, selectedTeethId);
                    sameMesh = window.scene3D.getObjectByName("mesh_" + x.name);
                  }
                  // var sameMesh = scene3D.getObjectByName(document.getElementById(itemParent.parentId).name);
                  setColorOptionOnOff(itemParent, sameMesh, visibleMeshesColor, visibleMeshes);
                  //setFormData((x) => ({...x,name: sameMesh.name , description:itemParent.name , price:itemParent.price}));
                  clearMeshNotSelected(visibleMeshes, visibleMeshesColor, 0, x.name);
                  setDataOrderDetailsCart(sameMesh, itemParent, visibleMeshes, visibleMeshesColor);
                  sameMesh = null;
                  swatchColor('display');
                }
              }
            },
            rev: itemParent.level,
            className: (level == 1 ? "show" : "hide") + " p-button-" + itemParent.name.replace(/\s/g, '') + " " + (level == "colorOption" ? "" : " p-button-component "),
            target: itemParent.target,
            layer: itemParent.level,
            parent: itemParent.parentId,
            rel: itemParent.parentId,
            id: itemParent.id,
            name: itemParent.name,
            key: itemParent.id,
            all_level: maxLevel,
            rounded: true,
            outlined: level == "colorOption" ? "" : "outlined",
            icon: level == "colorOption" ? "pi" : "",
            "aria-label": itemParent.name
          }, level == "colorOption" ? "" : itemParent.displayName), level == "colorOption" && /*#__PURE__*/React.createElement("span", {
            className: (level == 1 ? "show" : "hide") + " colorLabel ",
            target: itemParent.target,
            layer: itemParent.level,
            parent: itemParent.parentId,
            rel: itemParent.parentId,
            name: itemParent.name,
            key: "span_" + itemParent.id,
            all_level: maxLevel
          }, itemParent.name), level == 1 && globalParentHierachyId(itemParent.name, itemParent.id, itemParent.level, itemParent.parentId), /*#__PURE__*/React.createElement("input", {
            type: "file",
            id: "uploadInput",
            style: {
              display: "none"
            },
            accept: "image/*",
            onChange: function onChange(event) {
              return handleImageUpload(event);
            } // Trigger the file upload logic
          }));
        }));
      }
    })));
  }

  //var model_materials = {};
  var barTopOptArr = ["MESH_TL1", "MESH_TL2", "MESH_TL3", "MESH_TR1", "MESH_TR2", "MESH_TR3"]; //top
  var barBottomOptArr = ["MESH_BL1", "MESH_BL2", "MESH_BL3", "MESH_BR1", "MESH_BR2", "MESH_BR3"]; //bottom
  var barTopArr = ["MESH_STRAIGHT_BAR_TOP", "MESH_CURVE_BAR_TOP"]; //top
  var barBottomArr = ["MESH_STRAIGHT_BAR_BOTTOM", "MESH_CURVE_BAR_BOTTOM"]; //bottom
  var classicArr = ["CLASSIC"];
  var paveArr = ["PRONGS", "DIAMONDS", "DIAMOND", "BAGUETTEMETAL", "BAGUETTESTONE", "METAL", "STONE"]; //FOR 8shapse:metal,stone 10oct24
  function resetSpanofPaveTitle(paveTitle) {
    var divPave = document.getElementById("paveOptionTitle");
    if (divPave) {
      if (divPave.classList.contains("hide")) {
        divPave.classList.remove("hide");
      }
      if (!divPave.classList.contains("show")) {
        divPave.classList.add("show");
      }
    }
    document.getElementById("paveOptionLeftTitle").innerHTML = paveTitle[0];
    if (paveTitle.length > 1) {
      document.getElementById("paveOptionRightTitle").innerHTML = paveTitle[1];
    }
  }
  function removeSpanofPaveTitle() {
    var divPave = document.getElementById("paveOptionTitle");
    if (divPave) {
      divPave.classList.remove("show");
      divPave.classList.add("hide");
    }
    document.getElementById("paveOptionLeftTitle").innerHTML = '';
    document.getElementById("paveOptionRightTitle").innerHTML = '';
  }
  function resetSpacersClassName(spacersArr) {
    var spacers = window.globalParentHierachyId[spacersArr[0]];
    if (spacers) {
      var spacersButton = document.getElementById(spacers.id);
      if (spacersButton && spacersButton.classList.contains("disable-button")) {
        spacersButton.classList.remove("disable-button");
      }
    }
  }
  function disableSpacersClassName(spacersArr) {
    var spacers = window.globalParentHierachyId[spacersArr[0]];
    if (spacers) {
      var spacersButton = document.getElementById(spacers.id);
      if (spacersButton && !spacersButton.classList.contains("disable-button")) {
        spacersButton.classList.add("disable-button");
      }
    }
  }
  function resetOgCapClassName(ogCapArr) {
    for (var itm in ogCapArr) {
      var obj = window.globalParentHierachyId[ogCapArr[itm]];
      if (obj) {
        var dis = document.getElementById(obj.id);
        if (dis && dis.classList.contains("disable-button")) {
          dis.classList.remove("disable-button");
        }
      }
    }
  }
  function disableOgCapClassName(ogCapArr) {
    for (var itm in ogCapArr) {
      var obj = window.globalParentHierachyId[ogCapArr[itm]];
      if (obj) {
        var dis = document.getElementById(obj.id);
        if (dis && !dis.classList.contains("disable-button")) {
          dis.classList.add("disable-button");
        }
      }
    }
  }
  function resetParentClassName(spacersArr, ogCapArr) {
    resetSpacersClassName(spacersArr);
    resetOgCapClassName(ogCapArr);
  }
  function disableParentClassName(spacersArr, ogCapArr) {
    disableSpacersClassName(spacersArr);
    disableOgCapClassName(ogCapArr);
  }
  var checkBarExisted = function checkBarExisted(visibleMeshes, meshSelectedName) {
    var selectName = meshSelectedName.split('_');
    //selected mesh for check
    var meshSelected = "MESH_" + selectName[0].toUpperCase();
    var top = 0;
    if (barTopOptArr.includes(meshSelected)) {
      //neu top chua selected
      top = 1;
    }
    if (barBottomOptArr.includes(meshSelected)) {
      //neu bottom chua selected
      top = 2;
    }
    for (var meshName in visibleMeshes) {
      var meshArr = meshName.split('_');
      if (meshArr.length <= 3) {
        continue;
      }
      var barPrefix = meshArr[0].toUpperCase() + "_" + meshArr[1].toUpperCase() + "_" + meshArr[2].toUpperCase() + "_" + meshArr[3].toUpperCase();
      if (top === 1 && barTopArr.includes(barPrefix)) {
        return 1;
      }
      if (top === 2 && barBottomArr.includes(barPrefix)) {
        return 1;
      }
    }
    return 0;
  };
  function selectedBorderLevel2(typeRang, jsonData, meshDetail, level1Id) {
    if (classicArr.includes(typeRang)) {
      var engravingItm = null;
      var checkEngraving = false;
      if (window.globalEngravingItem) {
        engravingItm = window.globalEngravingItem["mesh_" + meshDetail.name];
      }
      if (engravingItm) {
        checkEngraving = true;
      }
      //show button border level 2
      var meshLevel1Details = jsonData.hierarchy.filter(function (it) {
        return it.id === level1Id.id;
      });
      if (meshLevel1Details && meshLevel1Details.length > 0) {
        var childs = meshLevel1Details[0].childs;
        for (var btnLevel2 in childs) {
          var meshLevel2 = childs[btnLevel2];
          if (checkEngraving) {
            //check meshDetail in globalengraving or not 02Oct24
            if (meshLevel2 && meshLevel2.name.toUpperCase() == "SOLID_LOGO") {
              var level2Btn = document.getElementById(meshLevel2.id);
              if (level2Btn && !level2Btn.classList.contains("selected-border")) {
                level2Btn.classList.add("selected-border");
              }
            }
          } else {
            if (meshLevel2 && meshLevel2.name.toUpperCase() == meshDetail.parent.toUpperCase()) {
              var _level2Btn = document.getElementById(meshLevel2.id);
              if (_level2Btn && !_level2Btn.classList.contains("selected-border")) {
                _level2Btn.classList.add("selected-border");
              }
            }
          }
        }
      }
    } else {
      //diamonds,prongs
      var meshLevel1Details = jsonData.hierarchy.filter(function (it) {
        return it.id === level1Id.id;
      });
      if (meshLevel1Details && meshLevel1Details.length > 0) {
        var childs = meshLevel1Details[0].childs;
        for (var _btnLevel in childs) {
          var meshLevel2 = childs[_btnLevel];
          var childslevel3 = meshLevel2.childs;
          for (var level3 in childslevel3) {
            var childsOpt = childslevel3[level3];
            var childsMeshOpt = childsOpt.meshes;
            for (var meshOpt in childsMeshOpt) {
              var rs = childsMeshOpt[meshOpt];
              if (rs && rs.parent.toUpperCase() == meshDetail.parent.toUpperCase()) {
                var _level2Btn2 = document.getElementById(meshLevel2.id);
                if (_level2Btn2 && !_level2Btn2.classList.contains("selected-border")) {
                  _level2Btn2.classList.add("selected-border");
                }
              }
            }
          }
        }
      }
    }
  }
  function checkOptionIsClassicOrNot(meshSelectedArr) {
    for (var mesh in meshSelectedArr) {
      var itm = meshSelectedArr[mesh];
      var meshArr = itm.toUpperCase().split('_');
      var typeRang = meshArr[meshArr.length - 1].toUpperCase(); //CLASSIC,DIAMOND,PRONGS
      if (classicArr.includes(typeRang)) return 1;
    }
    return 0;
  }
  function checkOptionDependByStones(optionRang, meshSelectedArr) {
    if ("SOLID_CLASSIC" == optionRang) {
      for (var mesh in meshSelectedArr) {
        var itm = meshSelectedArr[mesh];
        var meshArr = itm.toUpperCase().split('_');
        var rang = meshArr[0].toUpperCase(); //tr1,tr2,..
        var rangTypes = meshArr[1].toUpperCase(); //SPACERS,OG,CAP
        if ("8SHAPES" == rangTypes && window.selectedTeethId == rang) return 1;
      }
    }
    return 0;
  }
  function processTeethVisibleAutoToggle(meshSelectedArr, meshSameLevelArr, visibleMeshes, visibleMeshesColor, jsonData) {
    var colorOptArr = [];
    var paveTitleArr = [];
    var isClassic = checkOptionIsClassicOrNot(meshSelectedArr);
    for (var mesh in meshSelectedArr) {
      var itm = meshSelectedArr[mesh];
      var meshArr = itm.toUpperCase().split('_');
      var rang = meshArr[0].toUpperCase(); //tr1,tr2,..
      var optionRang = meshArr[1].toUpperCase(); //SPACERS,OG,CAP
      var optionBar = meshArr[0].toUpperCase() + '_' + meshArr[1].toUpperCase(); //SPACERS,OG,CAP
      var typeRang = meshArr[meshArr.length - 1].toUpperCase(); //CLASSIC,DIAMOND,PRONGS
      //15Oct24 check options is solid classic generate by stones -> bypass
      if (checkOptionDependByStones(optionRang + "_" + typeRang, meshSelectedArr) == 1) {
        continue;
      }
      var item = visibleMeshes["mesh_" + itm]; //existed on visible mesh
      if (item) {
        //var level2Name =;
        //level 1 , show border
        var level1Id = window.globalParentHierachyId[optionRang];
        if (!level1Id) {
          //for check bar
          level1Id = window.globalParentHierachyId[optionBar];
        }
        if (level1Id) {
          var level1Btn = document.getElementById(level1Id.id);
          if (level1Btn && !level1Btn.classList.contains("selected-border")) {
            level1Btn.classList.add("selected-border");
          }
          //clear level 2 first
          for (var i = 2; i <= 5; i++) {
            document.querySelectorAll('[layer^="' + i + '"]').forEach(function (element) {
              // element.style.display = 'none';
              element.classList.remove('show');
              element.classList.add('hide');
            });
          }
          //level 2, show 
          document.querySelectorAll('[parent^="' + level1Id.id + '"]').forEach(function (element) {
            // element.style.display = 'inline-flex';
            var strTarget = element.getAttribute("target");
            var arrToCheck = ["BASE", "BAR", "TC", "BC"];
            if (rang == strTarget.toUpperCase() || arrToCheck.includes(strTarget.toUpperCase())) {
              element.classList.remove('hide');
              element.classList.add('show');
            }
          });
          //level2Id = element.getAttribute("id");
          //button level show border
          var element = itm.replace('mesh_', '');
          var meshDetails = jsonData.meshes.filter(function (it) {
            return it.name === element;
          });
          if (meshDetails && meshDetails.length > 0) {
            var meshDetail = meshDetails[0];
            selectedBorderLevel2(typeRang, jsonData, meshDetail, level1Id);
            if (isClassic == 0)
              //(!classicArr.includes(typeRang)) //pave type 04Oct24 change rule-> check meshSelectedArr have classic or not
              {
                paveTitleArr.push(meshDetail.displayName);
              }
            //02Oct24 check option is solid , selected is engraving or not -> if have :process coloroptArr of engraving
            var engravingItm = null;
            var checkEngraving = false;
            if (window.globalEngravingItem) {
              engravingItm = window.globalEngravingItem["mesh_" + meshDetail.name];
            }
            if (engravingItm) {
              checkEngraving = true;
            }
            if (checkEngraving) {
              //show button border level 2
              var itmLevel1 = jsonData.hierarchy.filter(function (it) {
                return it.id === level1Id.id;
              });
              if (itmLevel1 && itmLevel1.length > 0) {
                var childs = itmLevel1[0].childs;
                for (var btnLevel2 in childs) {
                  var itemLevel2 = childs[btnLevel2];
                  if (itemLevel2 && itemLevel2.name.toUpperCase() == "SOLID_LOGO") {
                    var itemLevel3 = itemLevel2.meshes.filter(function (it) {
                      return it.name === meshDetail.name;
                    });
                    if (itemLevel3 && itemLevel3.length > 0) {
                      colorOptArr.push(itemLevel3[0]);
                    }
                  }
                }
              }
            } else {
              colorOptArr.push(meshDetail);
            }
          }
        }
      }
    }
    //for the remain others of pave
    for (var same in meshSameLevelArr) {
      var itm = meshSameLevelArr[same];
      var meshArr = itm.toUpperCase().split('_');
      var rang = meshArr[0]; //tr1,tr2,..
      var optionRang = meshArr[1]; //SPACERS,OG,CAP
      var typeRang = meshArr[meshArr.length - 1]; //CLASSIC,DIAMOND,PRONGS
      var level1Id = window.globalParentHierachyId[optionRang];
      if (level1Id) {
        var element = itm.replace('mesh_', '');
        var meshDetails = jsonData.meshes.filter(function (it) {
          return it.name === element;
        });
        if (meshDetails && meshDetails.length > 0) {
          var meshDetail = meshDetails[0];
          paveTitleArr.push(meshDetail.displayName);
          colorOptArr.push(meshDetail);
        }
      }
    }
    //show color option arr
    for (var idx in colorOptArr) {
      var optionItem = colorOptArr[idx];
      //show color options class
      document.querySelectorAll('[parent^="' + optionItem.id + '"]').forEach(function (element) {
        // element.style.display = 'inline-flex';
        var strTarget = element.getAttribute("target");
        var arrToCheck = ["BASE", "BAR", "TC", "BC"];
        if (selectedTeethId.toUpperCase() == strTarget.toUpperCase() || arrToCheck.includes(strTarget.toUpperCase())) {
          element.classList.remove('hide');
          element.classList.add('show');
        }
      });
      //14oct24 show border of coloroptions when auto toggle level 3 
      var meshColorOpt = visibleMeshesColor["mesh_" + optionItem.name];
      if (optionItem.colorOption && optionItem.colorOption.length > 0) {
        for (var idxItm in optionItem.colorOption) {
          var opt = optionItem.colorOption[idxItm];
          var colorValue = parseInt(opt.colorCode, 16);
          var colorObj = new THREE__namespace.Color(colorValue).getHexString();
          if (meshColorOpt && colorObj == meshColorOpt.getHexString()) {
            var button = document.getElementById(opt.id);
            if (button && !button.classList.contains("selected-border")) {
              button.classList.add("selected-border");
            }
          }
          //for selected borders : heart,star,logo
          selectedBorderSymbol(opt.id, opt.componentName, visibleMeshesColor);
        }
      }
      //
    }
    //reset pave title
    if (paveTitleArr && paveTitleArr.length > 0) {
      resetSpanofPaveTitle(paveTitleArr);
    }
  }
  function selectedBorderSymbol(id, componentName, visibleMeshesColor) {
    if (componentName) {
      var existed = visibleMeshesColor["mesh_" + componentName];
      if (existed) {
        var button = document.getElementById(id);
        if (button && !button.classList.contains("selected-border")) {
          button.classList.add("selected-border");
        }
      }
    }
  }

  //for teeth -> check auto 
  function checkTeethVisibleAutoToggle(selectedTeethId, jsonData, visibleMeshes, visibleMeshesColor) {
    //selectedTeethId : TR1,TL1,..
    var meshSelectedArr = [];
    var meshSameLevelArr = [];
    var chk = 0;
    var checkNextPave = [];
    var isTop = 0;
    var selectedTeethMesh = 'MESH_' + selectedTeethId.toUpperCase();
    if (barTopOptArr.includes(selectedTeethMesh)) {
      isTop = 1;
    } else if (barBottomOptArr.includes(selectedTeethMesh)) {
      isTop = 2;
    }
    for (var _mesh in visibleMeshes) {
      var meshArr = _mesh.split('_');
      if (meshArr.length <= 3) {
        continue;
      }
      var rang = meshArr[1].toUpperCase(); //TR1,TR2
      meshArr[2].toUpperCase(); //SPACERS,OG,CAP
      var typeRang = meshArr[meshArr.length - 1].toUpperCase(); //CLASSIC,DIAMOND,PRONGS
      var meshName = meshArr[0].toUpperCase() + '_' + meshArr[1].toUpperCase() + '_' + meshArr[2].toUpperCase() + '_' + meshArr[3].toUpperCase();
      if (selectedTeethId == rang && typeRang.toUpperCase() != 'RAW') {
        meshSelectedArr.push(_mesh.replace('mesh_', ''));
        chk = 1;
        if (paveArr.includes(typeRang)) {
          checkNextPave.push(_mesh.replace('mesh_', ''));
        }
      }
      //check bar on teeth selected
      if (isTop == 1 && barTopArr.includes(meshName) || isTop == 2 && barBottomArr.includes(meshName)) {
        meshSelectedArr.push(_mesh.replace('mesh_', ''));
        chk = 1;
        if (paveArr.includes(typeRang)) {
          checkNextPave.push(_mesh.replace('mesh_', ''));
        }
      }
    }
    //check others of selected pave for show all
    for (var item in checkNextPave) {
      var pave = checkNextPave[item];
      var meshArr = pave.split('_');
      var meshDetails = jsonData.meshes.filter(function (it) {
        return it.name === pave;
      });
      if (meshDetails && meshDetails.length > 0) {
        var mesh = meshDetails[0];
        var parentId = mesh.parentId;
        var meshDetails = jsonData.meshes.filter(function (it) {
          return it.parentId === parentId;
        });
        for (var meshItem in meshDetails) {
          var itm = meshDetails[meshItem];
          if (!meshSelectedArr.includes(itm.name)) {
            meshSameLevelArr.push(itm.name);
          }
        }
      }
    }
    //process info
    if (chk > 0) {
      //show border color,auto toggle level
      processTeethVisibleAutoToggle(meshSelectedArr, meshSameLevelArr, visibleMeshes, visibleMeshesColor, jsonData);
      return 1;
    }
    return 0;
  }
  function disableRangOptions(selectedTeethId, visibleMeshes) {
    var notSpacersList = ["TL5", "BL5"];
    var leftArr = ["TL", "BL"];
    var rigthArr = ["TR", "BR"];
    var spacersArr = ["SPACERS"];
    var ogCapArr = ["FRAME", "SOLID", "ENAMEL", "8SHAPES"]; //OG FRAME, CAP SOLID
    var typeRangArr = selectedTeethId.match(/[a-z]+|[0-9]+/gi);
    //check teeth is disabled on selected bar
    var isDisabled = checkBarExisted(visibleMeshes, selectedTeethId);
    if (isDisabled > 0) {
      disableSpacersClassName(spacersArr);
      disableOgCapClassName(ogCapArr);
      return;
    }
    var leftTeeth = "";
    var left = 0;
    var right = 0;
    var rigthTeeth = "";
    if (rigthArr.includes(typeRangArr[0])) {
      left = parseInt(typeRangArr[1]) - 1;
      right = parseInt(typeRangArr[1]) + 1;
    } else if (leftArr.includes(typeRangArr[0])) {
      left = parseInt(typeRangArr[1]) + 1;
      right = parseInt(typeRangArr[1]) - 1;
    }
    if (left > 5) {
      leftTeeth = typeRangArr[0] + "5";
    } else if (left > 0 && left <= 5) {
      leftTeeth = typeRangArr[0] + left;
    } else {
      leftTeeth = typeRangArr[0] == "TR" ? "TL1" : "BL1";
    }
    if (right > 5) {
      rigthTeeth = typeRangArr[0] + "5";
    } else if (right > 0 && right <= 5) {
      rigthTeeth = typeRangArr[0] + right;
    } else {
      rigthTeeth = typeRangArr[0] == "TL" ? "TR1" : "BR1";
    }
    var checkSpacersOpt = [];
    if (rigthTeeth !== selectedTeethId)
      //not equal selected -> add
      {
        checkSpacersOpt.push("MESH_" + rigthTeeth + "_" + spacersArr[0]); //spacer is set by rightTeeth
      }
    var checkOgCapOpt = []; //og or cap is set by leftTeeth
    checkOgCapOpt.push("MESH_" + leftTeeth + "_" + ogCapArr[0]);
    checkOgCapOpt.push("MESH_" + leftTeeth + "_" + ogCapArr[1]);
    var chkOgCap = 0;
    var chkSpacers = 0;
    for (var meshName in visibleMeshes) {
      var meshArr = meshName.split('_');
      if (meshArr.length <= 3) {
        continue;
      }
      var meshPrefix = meshArr[0].toUpperCase() + "_" + meshArr[1].toUpperCase() + "_" + meshArr[2].toUpperCase();
      //CHECK spacers is existed -> disable cap,og
      if (checkSpacersOpt.includes(meshPrefix)) {
        chkSpacers = 1;
      }
      //check og, cap is existed -> disable spacers
      if (checkOgCapOpt.includes(meshPrefix)) {
        chkOgCap = 1;
      }
      if (chkSpacers == 1 && chkOgCap == 1) {
        break;
      }
    }
    //tl5,bl5
    if (notSpacersList.includes(selectedTeethId)) {
      chkOgCap = 1;
    }
    if (chkOgCap == 1 && chkSpacers == 1) {
      disableParentClassName(spacersArr, ogCapArr);
    } else if (chkOgCap == 1) {
      disableSpacersClassName(spacersArr);
      resetOgCapClassName(ogCapArr);
    } else if (chkSpacers == 1) {
      disableOgCapClassName(ogCapArr);
      resetSpacersClassName(spacersArr);
    } else {
      //allow
      resetParentClassName(spacersArr, ogCapArr);
    }
  }
  function resetTeethRawDefaultColor(selectedTeethId, jsonData) {
    var meshDetails = jsonData.meshes.filter(function (it) {
      return it.parent.toUpperCase() === 'PLAIN';
    });
    for (var idx in meshDetails) {
      var mesh = meshDetails[idx];
      var meshName = "mesh_" + mesh.name;
      var target = mesh.target;
      if (selectedTeethId == target.toUpperCase()) {
        var meshItm = window.scene3D.getObjectByName(meshName);
        var colorValue = parseInt(mesh.selectedColor, 16);
        meshItm.material.color = new THREE__namespace.Color(colorValue);
        window.selectedTeethId = selectedTeethId;
      } else {
        var meshItm = window.scene3D.getObjectByName(meshName);
        var colorValue = parseInt(mesh.defaultColor, 16);
        meshItm.material.color = new THREE__namespace.Color(colorValue);
      }
    }
  }
  function resetSelectedBorder() {
    for (var gl in window.globalParentHierachyId) {
      var itm = window.globalParentHierachyId[gl];
      if (itm) {
        var button = document.getElementById(itm.id);
        if (button && button.classList.contains("selected-border")) {
          button.classList.remove("selected-border");
        }
      }
    }
  }
  function toggle(jsonData, maxHierarchyDepth, element, teethIdSelect, e, visibleMeshesColor, model_materials) {
    if (e.eventObject.visible) {
      var meshDetails = jsonData.meshes.filter(function (it) {
        return it.name === element;
      });
      var allMeshWithSameParent = jsonData.meshes.filter(function (it) {
        return it.parentId === meshDetails[0].parentId;
      });
      // console.log(element);
      // setTeethId(element);
      // var teeth = element.split('_')[0];
      console.log("toggle teeth " + teethIdSelect);
      // console.log(document.querySelectorAll('[target^="'+ teeth +'"]'))
      // console.log(model_materials[element]);

      allMeshWithSameParent.forEach(function (meshDtl, index) {
        var matDtl = model_materials[meshDtl.name];
        if (meshDtl && meshDtl.defaultColor !== "") {
          var colorValue = parseInt(meshDtl.defaultColor, 16);
          matDtl.material.color = new THREE__namespace.Color(colorValue);
        }
        // var meshName = "mesh_"+ meshDtl.name;
        // if(meshName in visibleMeshesColor){
        //     matDtl.material.color = visibleMeshesColor[meshName]; 
        // }
      });
      if (meshDetails && meshDetails[0].selectedColor !== "") {
        var material1 = model_materials[element];
        var colorValue = parseInt(meshDetails[0].selectedColor, 16);
        material1.material.color = new THREE__namespace.Color(colorValue);
      }
      for (var i = 2; i <= maxHierarchyDepth; i++) {
        document.querySelectorAll('[layer^="' + i + '"]').forEach(function (element) {
          // element.style.display = 'none';
          element.classList.remove('show');
          element.classList.add('hide');
        });
      }
    }
  }

  var model_materials = {};
  var arrTeethToCheck = ["TL", "TR", "BL", "BR"];
  var teethRotationArr = [{
    name: 'TR1',
    x: 2,
    y: 3,
    z: 7
  }, {
    name: 'TR2',
    x: 3,
    y: 3,
    z: 7
  }, {
    name: 'TR3',
    x: 6,
    y: 3,
    z: 5
  }, {
    name: 'TR4',
    x: 7,
    y: 3,
    z: 3
  }, {
    name: 'TR5',
    x: 8,
    y: 3,
    z: 2
  }, {
    name: 'TL1',
    x: -2,
    y: 3,
    z: 7
  }, {
    name: 'TL2',
    x: -3,
    y: 3,
    z: 7
  }, {
    name: 'TL3',
    x: -5,
    y: 3,
    z: 6
  }, {
    name: 'TL4',
    x: -7,
    y: 3,
    z: 4
  }, {
    name: 'TL5',
    x: -8,
    y: 3,
    z: 3
  }, {
    name: 'BL1',
    x: -1,
    y: 2,
    z: 7
  }, {
    name: 'BL2',
    x: -3,
    y: 1,
    z: 7
  }, {
    name: 'BL3',
    x: -5,
    y: 1,
    z: 6
  }, {
    name: 'BL4',
    x: -7,
    y: 2,
    z: 3
  }, {
    name: 'BL5',
    x: -8,
    y: 2,
    z: 2
  }, {
    name: 'BR1',
    x: 1,
    y: 2,
    z: 7
  }, {
    name: 'BR2',
    x: 3,
    y: 1,
    z: 7
  }, {
    name: 'BR3',
    x: 6,
    y: 1,
    z: 5
  }, {
    name: 'BR4',
    x: 7,
    y: 2,
    z: 4
  }, {
    name: 'BR5',
    x: 8,
    y: 2,
    z: 2
  }];
  var Teeth = function Teeth(_ref) {
    var nodes = _ref.nodes;
      _ref.toast;
      var jsonData = _ref.jsonData,
      maxHierarchyDepth = _ref.maxHierarchyDepth,
      map = _ref.map,
      props = _ref.props;
    var _useShareableState = useShareableState();
      _useShareableState.setScene3D;
      var setTexture = _useShareableState.setTexture,
      visibleMeshes = _useShareableState.visibleMeshes;
      _useShareableState.setVisibleMeshes;
      var visibleMeshesColor = _useShareableState.visibleMeshesColor;
    var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];
    var _useThree = fiber.useThree(),
      camera = _useThree.camera;
    window.isAnimating = false;
    window.positionToFocus = [0, 0, 0];
    var handleMeshClick = function handleMeshClick(teeth) {
      var x = window.performance.now();
      console.log('startHandleMeshClick:' + x);
      if (window.isAnimating) {
        console.log('prevented');
        return;
      }
      var itm = teethRotationArr.find(function (item) {
        return item.name === teeth;
      });
      if (itm) {
        // setIsAnimating(true);
        window.isAnimating = true;
        // setStartTime(x);
        // setPositionToFocus([itm.x, itm.y, itm.z]);
        window.positionToFocus = [itm.x, itm.y, itm.z];
        runAnimate(itm);
        //console.log('handleMeshClick');
      }
    };
    var runAnimate = function runAnimate(itm) {
      performance.now();
      // var positionToFocus = [itm.x, itm.y, itm.z];
      var targetPosition = new THREE$1.Vector3(itm.x, itm.y, itm.z);
      //setTimeout(() => {
      var _animate = function animate() {
        //console.log('Date.now:' + performance.now() + '#startTime:' + startTime);
        // const currentTime = performance.now();
        // const elapsedTime = currentTime - startTime;
        // const intervalTime = 1700; // Adjust this value for the desired animation time in milliseconds
        camera.position.lerp(targetPosition, 0.07); // 0.2~1s2 0.3-~992ms 04-914ms
        camera.updateProjectionMatrix(true);
        var currentPosition = camera.position.toArray();
        //const newPosition = currentPosition.map((coord, index) => coord + (positionToFocus[index] - coord) * .2);
        //camera.position.fromArray(newPosition);
        var isAnimationComplete = Math.abs(currentPosition[0] - itm.x) <= 0.1 && Math.abs(currentPosition[1] - itm.y) <= 0.1 && Math.abs(currentPosition[2] - itm.z) <= 0.1;
        // console.log('isAnimating:'+ Date.now() + " " + isAnimationComplete);
        if (isAnimationComplete) {
          cancelAnimationFrame(_animate);
          camera.updateProjectionMatrix(true);
          // setIsAnimating(false);
          window.isAnimating = false;
          // console.log('end:' + Date.now());
        } else {
          // console.log('requestAnimationFrame:'+ Date.now() + " " + isAnimationComplete);
          requestAnimationFrame(_animate);
        }
      };
      _animate();
      //}, animationDelay);
    };
    setTexture(map);
    {
      Object.keys(nodes).map(function (key, index) {
        model_materials[nodes[key].name] = nodes[key];
      });
    }
    //   useEffect(() => {
    //         console.log('the teethId has changed', teethId)
    //     }, [teethId])
    // console.log(nodes);
    var uuid = Date.now().toString(36) + Math.random().toString(36).substring(6);
    return /*#__PURE__*/React.createElement("group", _extends$1({
      key: uuid
    }, props, {
      dispose: null
    }), Object.keys(nodes).map(function (key, index) {
      return function () {
        if (nodes[key].type == 'Mesh') {
          var meshDetails = jsonData.meshes.filter(function (it) {
            return it.name === nodes[key].name;
          });
          if (meshDetails.length == 0) return null;
          var material = nodes[key].material;
          //material.envMap = null;

          // console.log(meshDetails[0].name);
          var colorCode = meshDetails[0].defaultColor;
          if (meshDetails && meshDetails.length > 0 && meshDetails[0].defaultColor !== "") {
            var defaultColor = parseInt(meshDetails[0].defaultColor, 16);
            material.color = new THREE$1.Color(defaultColor);
          }

          //fill selected color when teeth is clicked
          if (window.selectedTeethId == nodes[key].name.split('_')[0] && meshDetails && meshDetails.length > 0 && meshDetails[0].selectedColor !== "") {
            var selectedColor = parseInt(meshDetails[0].selectedColor, 16);
            material.color = new THREE$1.Color(selectedColor);
            colorCode = "#" + material.color.getHexString();
          }
          if (meshDetails && meshDetails.length > 0) {
            if (meshDetails && meshDetails[0].defaultOnOff == 'on') {
              visibleMeshes["mesh_" + nodes[key].name] = nodes[key];
            }
            var meshVisible = meshDetails && meshDetails[0].defaultOnOff == 'on' ? true : false;
            if (!meshVisible && "mesh_" + nodes[key].name in visibleMeshes) {
              meshVisible = true;
            }
            if ("mesh_" + nodes[key].name in visibleMeshesColor) {
              material.color = visibleMeshesColor["mesh_" + nodes[key].name];
              colorCode = "#" + visibleMeshesColor["mesh_" + nodes[key].name].getHexString();
            }
            if (meshDetails[0].componentType == 'Classic' || meshDetails[0].componentType == 'Diamond') {
              var material_classic = new THREE$1.MeshPhysicalMaterial({
                color: material.color,
                roughness: 0.01,
                metalness: meshDetails[0].componentType == 'Diamond' ? 0.0 : 1.5,
                envMap: map,
                clearcoat: 1.0,
                // Add a clearcoat for extra shine
                clearcoatRoughness: 0.1 // Adjust clearcoat roughness for a polished look
              });
              material_classic.name = material.name;
              material = material_classic;
            }
            var objLst = window.globalMaterials;
            if (objLst) {
              var materialSelected = window.globalMaterials["mesh_" + nodes[key].name];
              if (materialSelected) {
                material = materialSelected;
              }
            }
            return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("mesh", {
              name: "mesh_" + nodes[key].name,
              visible: meshVisible
              // material={diamondMaterial}
              ,
              castShadow: true,
              receiveShadow: true
              // onPointerMissed={(e) => e.button === 0 && bounds.refresh().fit()}
              ,
              onClick: function onClick(e) {
                console.log('onClickTime:' + Date.now());
                if (Object.hasOwn(meshDetails[0], 'clickable') && meshDetails[0].clickable == false) {
                  // setIsRotating(false);
                  meshDetails[0].target;
                  console.log(meshDetails[0]);
                  //e.stopPropagation(); 
                  // if(target && target.toUpperCase() === 'BASE'){
                  //    var spacersArr = ["SPACERS"];
                  //    var ogCapArr = ["OG", "CAP"];
                  //    resetUnSelectTeeth(spacersArr, ogCapArr,maxHierarchyDepth,jsonData);
                  // }
                  return;
                } else {
                  //check teeth is disable or not 
                  // var cntDisable = validTeeth(nodes[key].name,visibleMeshesColor);
                  // if(cntDisable > 0){
                  //   toast.current.show({severity: 'general', summary: 'WARING', detail: 'This option requires a gap between Spacer,Please select a different option', life: 1000});
                  //   return;
                  // }
                  e.stopPropagation();
                  var selectedTeethId = nodes[key].name.split('_')[0];
                  if (window.isAnimating) {
                    console.log('in-used');
                    return;
                  }
                  if (window.selectedTeethId == selectedTeethId) {
                    console.log('already selected');
                    handleMeshClick(selectedTeethId);
                    return;
                  }
                  removeSpanofPaveTitle();
                  resetSelectedBorder();
                  console.log("clicked mesh: " + nodes[key].name);
                  disableRangOptions(selectedTeethId.toUpperCase(), visibleMeshes);
                  if (window.selectedTeethId != selectedTeethId && selectedTeethId.length > 2 && arrTeethToCheck.includes(selectedTeethId.toUpperCase().substring(0, 2))) {
                    handleMeshClick(selectedTeethId);
                    window.selectedTeethId = selectedTeethId;
                    console.log("checkTeethVisibleAutoToggleStart: " + Date.now());
                    var chk = checkTeethVisibleAutoToggle(selectedTeethId, jsonData, visibleMeshes, visibleMeshesColor);
                    console.log("checkTeethVisibleAutoToggleEnd: " + Date.now());
                    if (chk == 0) {
                      console.log("toggleStart: " + Date.now());
                      toggle(jsonData, maxHierarchyDepth, nodes[key].name, selectedTeethId, e, visibleMeshesColor, model_materials);
                      console.log("toggleEnd: " + Date.now());
                    } else {
                      resetTeethRawDefaultColor(selectedTeethId, jsonData);
                    }
                  }
                  //  else {
                  //   //check auto toggle why not 
                  //   var rs = checkTeethVisibleAutoToggle(selectedTeethId, jsonData, visibleMeshes, visibleMeshesColor);
                  //   if (rs > 0) {
                  //     resetTeethRawDefaultColor(selectedTeethId, jsonData);
                  //   }
                  // }
                  // else{//auto toggle when already selected
                  //   toggle(jsonData, maxHierarchyDepth, nodes[key].name, selectedTeethId, e);
                  // }

                  // return;
                }
              },
              geometry: nodes[key].geometry,
              position: nodes[key].position,
              rotation: nodes[key].rotation,
              scale: nodes[key].scale,
              material: material
            }, meshDetails[0].componentType == 'Diamond' && map && /*#__PURE__*/React.createElement(drei.MeshRefractionMaterial, {
              envMap: map,
              toneMapped: false,
              emissiveIntensity: 10
              /** RGB shift intensity, can be expensive, 0 */,
              aberrationStrength: 0.01
              /** Number of ray-cast bounces, it can be expensive to have too many, 2 */,
              bounces: 1.1
              /** Color, white */,
              color: colorCode
              /** Refraction index, 2.4 */,
              ior: 2.4
              /** RGB shift intensity, can be expensive, 0 */,
              fresnel: 1
              /** If this is on it uses fewer ray casts for the RGB shift sacrificing physical accuracy, true */,
              fastChroma: true
            })), window.isAnimating && /*#__PURE__*/React.createElement(drei.Html, {
              center: true
            }, "Loading..."));
          }
        }

        // return null;
      }();
    }));
  };
  var areEqual = function areEqual(prevProps, nextProps) {
    console.log("prevProps " + prevProps);
    console.log("nextProps " + nextProps);
    //reapplyMaterials();
    // if (prevProps.heading === nextProps.heading) {
    //   return true                                    // donot re-render
    // }
    // return false                                     // will re-render
    return true;
  };
  var Teeth$1 = /*#__PURE__*/React.memo(Teeth, areEqual);

  var model_options = {};
  var mesh_options = {};
  var color_options = {};
  var mesh_options_arr = [];
  var color_options_arr = [];
  var maxHierarchyDepth = 0;
  var color_enamel_classic_options = {};
  var color_enamel_pave_options = {};

  // var jsonData = [];

  function loadModelOptionsFromJson(jsonConfig, model_options, mesh_options_arr, color_options_arr, level) {
    var optionLayer = [];
    optionLayer = model_options[level] == undefined ? [] : model_options[level];
    {
      Object.keys(jsonConfig).map(function (key, index) {
        var item = jsonConfig[key];
        optionLayer.push(item);
        maxHierarchyDepth = maxHierarchyDepth < item.level ? item.level : maxHierarchyDepth;
        if (item.meshes && item.meshes.length > 0) {
          {
            Object.keys(item.meshes).map(function (mesh_key, mesh_index) {
              var mesh_Item = item.meshes[mesh_key];
              mesh_options_arr.push(mesh_Item);
              maxHierarchyDepth = maxHierarchyDepth < mesh_Item.level ? mesh_Item.level : maxHierarchyDepth;
              if (mesh_Item.colorOption && mesh_Item.colorOption.length > 0) {
                {
                  Object.keys(mesh_Item.colorOption).map(function (colorOption_key, colorOption_index) {
                    color_options_arr.push(mesh_Item.colorOption[colorOption_key]);
                    maxHierarchyDepth = maxHierarchyDepth < mesh_Item.colorOption[colorOption_key].level ? mesh_Item.colorOption[colorOption_key].level : maxHierarchyDepth;
                  });
                }
              }
            });
          }
        }
        if (item.childs && item.childs.length > 0) {
          loadModelOptionsFromJson(item.childs, model_options, mesh_options_arr, color_options_arr, item.level + 1);
        }
      });
    }
    model_options[level] = optionLayer;
    mesh_options["mesh"] = mesh_options_arr;
    //color_options["colorOption"] = color_options_arr
    if (color_options_arr && color_options_arr.length > 0) {
      color_options["colorOption"] = color_options_arr.filter(function (item) {
        return item.flexStyle == 'none';
      });
      color_enamel_classic_options["colorOption"] = color_options_arr.filter(function (item) {
        return item.flexStyle == 'left';
      });
      color_enamel_pave_options["colorOption"] = color_options_arr.filter(function (item) {
        return item.flexStyle == 'right';
      });
    }
  }
  function Loader() {
    var _useProgress = drei.useProgress(),
      progress = _useProgress.progress;
    return /*#__PURE__*/React.createElement(drei.Html, {
      center: true
    }, progress, " % loaded");
  }
  function Configuration() {
    var _useThree = fiber.useThree(),
      gl = _useThree.gl,
      scene = _useThree.scene,
      camera = _useThree.camera;
    // const { setScene3D } = useShareableState();
    // setScene3D(scene);
    window.scene3D = scene;
    //reapplyMaterials();
    window.glRef = gl;
    window.glCamera = camera;
    return "<></>";
  }
  var App = /*#__PURE__*/React.memo(function App(_ref) {
    _ref.product_handle;
      var data_model_parameter = _ref.data_model_parameter,
      data_json_parameter = _ref.data_json_parameter,
      data_texture_parameter = _ref.data_texture_parameter;
    var _useList = useList();
      _useList.materials;
    var textureDiamond = null;
    // textureDiamond = useLoader(RGBELoader, "/360_F_147180921_xJyBdpMwKkyOsNq5YjFLiQyPMWUWLYj8.hdr");
    // textureDiamond = useLoader(RGBELoader, "/assets/realistic-diamond-crystal-with-caustic-close-up-texture-background-3d-rendering_169963-848.hdr");
    textureDiamond = fiber.useLoader(threeStdlib.RGBELoader, data_texture_parameter);

    // textureDiamond = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
    textureDiamond.mapping = THREE__namespace.EquirectangularReflectionMapping;
    var _useGLTF = drei.useGLTF(data_model_parameter),
      nodes = _useGLTF.nodes;
    var ref = React.useRef();
    React.useRef(postprocessing.EffectComposer);
    var toast = React.useRef(null);
    // const layout = "vertical"; // "horizontal"
    var layout = "horizontal"; // "horizontal"
    var log = "";
    var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      jsonData = _useState2[0],
      setJsonData = _useState2[1];
    // const [isConfigExpanded, setIsConfigExpanded ] = useState(true);
    var loaded = false;
    var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      _useState4[1];
    React.useRef();

    // const CaptureComponent = React.forwardRef((props, ref) => {
    //   const { gl, scene, camera } = useThree();

    //   // Function to capture the scene
    //   const captureScene = () => {
    //     const dataUrl = gl.domElement.toDataURL('image/png');
    //     console.log('Capture Image:'+dataUrl); // Log the data URL or use it as needed
    //     window.dataUrl = dataUrl;
    //   };

    //   // Assign the ref to the parent component
    //   React.useImperativeHandle(ref, () => ({
    //     capture: captureScene,
    //   }));

    //   return null;
    // });

    var getConfigurationData = function getConfigurationData() {
      fetch(data_json_parameter, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(function (response) {
        // console.log(response)
        return response.json();
      }).then(function (myJson) {
        // console.log(myJson);
        setJsonData(myJson);
        model_options = {};
        mesh_options = {};
        color_options = {};
        color_enamel_classic_options = {};
        color_enamel_pave_options = {};
        mesh_options_arr = [];
        color_options_arr = [];
        maxHierarchyDepth = 0;
        loadModelOptionsFromJson(myJson.hierarchy, model_options, mesh_options_arr, color_options_arr, 1);
        loaded = true;

        //fetchVariantsProduct(product_handle); //31-jul-24 old
        //fetchConfiguration(product_handle); //03Oct24 no init loading, just when submit sumarry call to shopify
      });
    };
    var _useShareableState = useShareableState(),
      visibleMeshes = _useShareableState.visibleMeshes,
      visibleMeshesColor = _useShareableState.visibleMeshesColor;
    function removeSpanofPaveTitle() {
      var divPave = document.getElementById("paveOptionTitle");
      if (divPave) {
        divPave.classList.remove("show");
        divPave.classList.add("hide");
      }
      document.getElementById("paveOptionLeftTitle").innerHTML = '';
      document.getElementById("paveOptionRightTitle").innerHTML = '';
    }
    var clearAll = function clearAll() {
      if (!visibleMeshes) return;
      for (var meshName in visibleMeshes) {
        var meshArr = meshName.split('_');
        var meshItm2 = meshArr[2].toUpperCase(); //MESH_ TL1,TL2,TR1,..
        var meshSuffix = meshArr[meshArr.length - 1].toUpperCase();
        if (meshItm2 == 'RAW' || meshSuffix == 'BASERAW') continue;
        var itm = window.scene3D.getObjectByName(meshName);
        if (itm) {
          itm.visible = false;
          delete visibleMeshes[meshName];
          delete visibleMeshesColor[meshName];
        }
      }
      removeSpanofPaveTitle();
      document.querySelectorAll('[layer^="1"]').forEach(function (element) {
        var button = document.getElementById(element.id);
        if (button && button.classList.contains("selected-border")) {
          button.classList.remove("selected-border");
        }
        if (button && button.classList.contains("disable-button")) {
          button.classList.remove("disable-button");
        }
      });
      for (var i = 2; i <= 5; i++) {
        document.querySelectorAll('[layer^="' + i + '"]').forEach(function (element) {
          element.classList.remove('show');
          element.classList.add('hide');
        });
      }
      removeSpanofPaveTitle();
      window.globalFormCartItem = null;
      window.globalMaterials = null;
    };
    // var isConfigExpanded = true;
    window.isConfigExpanded = true;
    var toggleMenuOptions = function toggleMenuOptions(event) {
      window.isConfigExpanded = window.isConfigExpanded ? false : true;
      var btn = document.getElementById("btnCollapseExpandMenu");
      var settings = document.getElementById("settings");
      var canvas = document.getElementById("canvas");
      var clearAll = document.getElementById("popup1-clearAll");
      if (window.isConfigExpanded) {
        btn.classList.remove("menuToggle_off");
        btn.classList.add("menuToggle_on");
        settings.classList.remove(layout + "_settings_none");
        settings.classList.add(layout + "_settings");
        canvas.classList.remove(layout + "_canvas_full");
        canvas.classList.add(layout + "_canvas");
        clearAll.classList.add("show");
      } else {
        btn.classList.remove("menuToggle_on");
        btn.classList.add("menuToggle_off");
        clearAll.classList.add("hide");
        settings.classList.remove(layout + "_settings");
        settings.classList.add(layout + "_settings_none");
        canvas.classList.remove(layout + "_canvas");
        canvas.classList.add(layout + "_canvas_full");
      }
      event.preventDefault();
      event.stopPropagation();
    };
    React.useEffect(function () {
      getConfigurationData();
    }, [loaded]);
    var material_classic = new THREE__namespace.MeshPhysicalMaterial({
      color: 0xcccccc,
      roughness: 0.01,
      metalness: 1.5,
      envMap: textureDiamond,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });

    // getConfigurationData()
    var styles = "";
    var existedColor = [];
    {
      //none flex
      Object.keys(color_options).map(function (key, index) {
        var listItem = color_options[key];
        {
          listItem && listItem.length > 0 && listItem.map(function (itemParent, index) {
            var colorItemCode = itemParent.colorCode.replace("0x", "#");
            if (existedColor.indexOf(colorItemCode) <= -1) {
              existedColor.push(colorItemCode);
              styles += ".p-button-" + itemParent.name.replace(/\s/g, '') + "{background-color: " + colorItemCode + "; border: 3px solid #27272b;} ";
            }
          });
        }
      });
      //flex left
      Object.keys(color_enamel_classic_options).map(function (key, index) {
        var listItem = color_enamel_classic_options[key];
        {
          listItem && listItem.length > 0 && listItem.map(function (itemParent, index) {
            var colorItemCode = itemParent.colorCode.replace("0x", "#");
            if (existedColor.indexOf(colorItemCode) <= -1) {
              existedColor.push(colorItemCode);
              styles += ".p-button-" + itemParent.name.replace(/\s/g, '') + "{background-color: " + colorItemCode + "; border: 3px solid #27272b;} ";
            }
          });
        }
      });
      //flex right
      Object.keys(color_enamel_pave_options).map(function (key, index) {
        var listItem = color_enamel_pave_options[key];
        {
          listItem && listItem.length > 0 && listItem.map(function (itemParent, index) {
            var colorItemCode = itemParent.colorCode.replace("0x", "#");
            if (existedColor.indexOf(colorItemCode) <= -1) {
              existedColor.push(colorItemCode);
              styles += ".p-button-" + itemParent.name.replace(/\s/g, '') + "{background-color: " + colorItemCode + "; border: 3px solid #27272b;} ";
            }
          });
        }
      });
    }
    // console.log(styles)

    if (!jsonData || jsonData && jsonData.length == 0) {
      return /*#__PURE__*/React.createElement("div", {
        id: "content"
      }, "Loading...");
    } else {
      var _nodes$GEJ_Logo;
      console.log("loaded ...");
      return /*#__PURE__*/React.createElement("div", {
        id: "content",
        style: {
          margin: "-10px"
        }
      }, /*#__PURE__*/React.createElement("style", {
        jsx: "true"
      }, styles), /*#__PURE__*/React.createElement(button.Button, {
        type: "button",
        id: "popup1-clearAll",
        rounded: true,
        icon: "pi",
        className: "clearall p-button-component",
        onClick: function onClick(event) {
          clearAll();
        }
      }, "Clear All"), /*#__PURE__*/React.createElement(button.Button, {
        type: "button",
        id: "btnCollapseExpandMenu",
        rounded: true,
        icon: "pi",
        className: "menuToggle" + (window.isConfigExpanded ? "_on" : "_off"),
        onClick: toggleMenuOptions
      }), /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        id: "variantTeethId"
      }), /*#__PURE__*/React.createElement(toast$1.Toast, {
        severity: "success",
        ref: toast,
        position: "center"
      }), /*#__PURE__*/React.createElement(confirmdialog.ConfirmDialog, null), /*#__PURE__*/React.createElement("div", {
        id: "canvas",
        className: layout + "_canvas" + (window.isConfigExpanded ? "" : "_full")
      }, /*#__PURE__*/React.createElement(fiber.Canvas, {
        shadows: true
        // camera={{ position: [0, 0, 15], fov: 35, near: 1, far: 30 }}
        ,
        onCreated: function onCreated(state) {
          state.setEvents({
            filter: function filter(intersections) {
              return intersections.filter(function (i) {
                return i.object.visible;
              });
            }
          });
        },
        camera: {
          position: [0, -20, 80],
          fov: 35,
          near: 1,
          far: 30,
          zoom: 0.8
        }
      }, /*#__PURE__*/React.createElement(React.Suspense, {
        fallback: /*#__PURE__*/React.createElement(Loader, null)
      }, /*#__PURE__*/React.createElement("color", {
        attach: "background",
        args: ["#f0f0f0"]
      }), /*#__PURE__*/React.createElement(drei.OrbitControls, {
        makeDefault: true
      }), /*#__PURE__*/React.createElement(drei.Stage, {
        controls: ref,
        preset: "upfront",
        intensity: 1.2,
        environment: "warehouse"
      }, /*#__PURE__*/React.createElement(drei.Center, null, /*#__PURE__*/React.createElement(Configuration, null), /*#__PURE__*/React.createElement(Teeth$1, {
        nodes: nodes,
        toast: toast,
        jsonData: jsonData,
        maxHierarchyDepth: maxHierarchyDepth,
        map: textureDiamond,
        scale: 10
      }), /*#__PURE__*/React.createElement("mesh", {
        rotation: [Math.PI / 2, 0, 0],
        geometry: (_nodes$GEJ_Logo = nodes['GEJ_Logo']) === null || _nodes$GEJ_Logo === void 0 ? void 0 : _nodes$GEJ_Logo.geometry,
        material: material_classic
      })))))), /*#__PURE__*/React.createElement("div", {
        id: "settings",
        className: layout + "_settings"
      }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement(Options01, {
        hierachyList: model_options,
        level: 1,
        log: log,
        declaredTag: true,
        parent: "",
        maxLevel: maxHierarchyDepth,
        cssClass: "first",
        toast: toast
      }), /*#__PURE__*/React.createElement(Options01, {
        hierachyList: model_options,
        level: 2,
        log: log,
        declaredTag: true,
        parent: "",
        maxLevel: maxHierarchyDepth,
        toast: toast
      }), /*#__PURE__*/React.createElement(Options01, {
        hierachyList: model_options,
        level: 3,
        log: log,
        declaredTag: true,
        parent: "",
        maxLevel: maxHierarchyDepth,
        toast: toast
      }), /*#__PURE__*/React.createElement(Options01, {
        hierachyList: mesh_options,
        level: "mesh",
        log: log,
        declaredTag: true,
        parent: "",
        maxLevel: maxHierarchyDepth,
        toast: toast
      }), /*#__PURE__*/React.createElement("div", {
        id: "classicOptions"
      }, /*#__PURE__*/React.createElement(Options01, {
        hierachyList: color_options,
        level: "colorOption",
        log: log,
        declaredTag: true,
        parent: "",
        maxLevel: maxHierarchyDepth,
        toast: toast
      })), /*#__PURE__*/React.createElement("div", {
        id: "paveOptions",
        className: "optionslevel3",
        style: {
          display: "flex",
          width: "80%"
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexPaveColumn"
      }, /*#__PURE__*/React.createElement(Options01, {
        hierachyList: color_enamel_classic_options,
        level: "colorOption",
        log: log,
        declaredTag: true,
        parent: "",
        maxLevel: maxHierarchyDepth,
        toast: toast
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexPaveColumn"
      }, /*#__PURE__*/React.createElement(Options01, {
        hierachyList: color_enamel_pave_options,
        level: "colorOption",
        log: log,
        declaredTag: true,
        parent: "",
        maxLevel: maxHierarchyDepth,
        toast: toast
      }))), /*#__PURE__*/React.createElement("div", {
        id: "paveOptionTitle",
        className: "hide delimiter card flex flex-wrap justify-content-center gap-3",
        style: {
          display: "flex",
          width: "80%",
          "font-weight": "Bold",
          marginBottom: "50px",
          marginTop: "5px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexPaveColumn"
      }, /*#__PURE__*/React.createElement("span", {
        id: "paveOptionLeftTitle"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexPaveColumn"
      }, /*#__PURE__*/React.createElement("span", {
        id: "paveOptionRightTitle"
      }))))));
    }
  });

  var ContactInfo = function ContactInfo() {
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPopupVisible = _useState2[0],
      setIsPopupVisible = _useState2[1];
    var _useList = useList(),
      capturedImageSrc = _useList.capturedImageSrc,
      capturedBehindImageSrc = _useList.capturedBehindImageSrc;
      _useList.enableButton;
    var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      var setLoading = _useState4[1];
    var hiddenLink = React.useRef(null);

    // Toggle popup visibility
    var togglePopup = function togglePopup() {
      setIsPopupVisible(!isPopupVisible);
      window.contactInfo = 'clicked';
      /*
      var selectDepositValue = window.selectDepositValue;
      if(selectDepositValue && selectDepositValue !== ''){
        enableButton();
      }
      */
    };
    var download = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var front, behind, blobFront, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              setLoading(true);
              _context.p = 1;
              _context.n = 2;
              return fetch(capturedImageSrc);
            case 2:
              front = _context.v;
              _context.n = 3;
              return fetch(capturedBehindImageSrc);
            case 3:
              behind = _context.v;
              _context.n = 4;
              return front.blob();
            case 4:
              blobFront = _context.v;
              _context.n = 5;
              return behind.blob();
            case 5:
              _context.v;
              ImageResizer$1.imageFileResizer(blobFront, 800,
              // max width
              400,
              // max height
              'PNG',
              // output format
              100,
              // quality
              0, function (resizedFile) {
                // Perform actions after resizing is complete
                console.log('Image resized successfully:', resizedFile);
                FileSaver.saveAs(resizedFile, 'teeth-front.png');
              }, 'PNG' // rotation
              );
              /*
              ImageResizer.imageFileResizer(
                blobFrontBehind,
                800, // max width
                400, // max height
                'PNG', // output format
                100, // quality
                0, (resizedFile) => {
                  // Perform actions after resizing is complete
                  console.log('Image resized successfully:', resizedFile);
                  FileSaver.saveAs(resizedFile, 'teeth-back.png');
                },
                'PNG' /// rotation
              );
              */
              /*
              const urlFront = window.URL.createObjectURL(blobFront);
              const urlBack = window.URL.createObjectURL(blobFrontBehind);
              hiddenLink.current.href = urlFront;
              hiddenLink.current.download = 'teeth-front.png';
              hiddenLink.current.click();
              
              hiddenLink.current.href = urlBack;
              hiddenLink.current.download = 'teeth-back.png';
              hiddenLink.current.click();
              */
              setLoading(false);
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.error('Error downloading image:', _t);
              setLoading(false);
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[1, 6]]);
      }));
      return function download() {
        return _ref.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/React.createElement("div", {
      className: "commonBarDetail",
      style: {
        marginBottom: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "deposit-tag"
    }, /*#__PURE__*/React.createElement("p", null, "File Upload:")), /*#__PURE__*/React.createElement("div", {
      className: "options-contact"
    }, /*#__PURE__*/React.createElement("button", {
      className: "oval-button",
      onClick: togglePopup
    }, "CONTACT US"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      ref: hiddenLink,
      style: {
        display: 'none'
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "oval-button",
      style: {
        "float": 'right'
      },
      onClick: download
    }, "DOWNLOAD IMAGES")), isPopupVisible && /*#__PURE__*/React.createElement("div", {
      className: "contact-popup"
    }, /*#__PURE__*/React.createElement("div", {
      className: "contact-popup-content"
    }, /*#__PURE__*/React.createElement("span", {
      className: "contact-close-button",
      onClick: togglePopup
    }, "\xD7"), /*#__PURE__*/React.createElement("h3", {
      style: {
        textAlign: 'center'
      }
    }, "Contact Information"), /*#__PURE__*/React.createElement("p", null, "Please send the teeth file (.stl type) to the email address below"), /*#__PURE__*/React.createElement("p", null, "Email: react-integration-51121@myshopify.com"), /*#__PURE__*/React.createElement("p", null, "Phone: (+123) 456-7890"), /*#__PURE__*/React.createElement("p", null, "Address: 123 Address of Street, CA, USA"))));
  };

  var data_model_parameter = document.getElementById('customize-product-popup').getAttribute("data_model_parameter");
  var data_json_parameter = document.getElementById('customize-product-popup').getAttribute("data_json_parameter");
  var data_texture_parameter = document.getElementById('customize-product-popup').getAttribute("data_texture_parameter");
  document.getElementById('customize-product-popup').getAttribute("product_variants");
  var product_handle = document.getElementById('customize-product-popup').getAttribute("product_handle");
  var contentStyle = {
    height: "100vh",
    width: "100%"
  };
  var TeethApp = function TeethApp() {
    // useEffect(() => {
    //   const app = createApp({
    //     apiKey: 'bf68ca2367c99ab6bdeb2ba436c7c0b5',//'bf68ca2367c99ab6bdeb2ba436c7c0b5',
    //     shopOrigin: 'https://react-integration-51121.myshopify.com',
    //   });

    //   // Use app object for further interactions with Shopify
    //   console.log('App Bridge initialized:', app);
    // }, []);

    var primeToastRef = React.useRef(null);
    var primeToastSecondRef = React.useRef(null);
    var cartToastRef = React.useRef(null);
    React.useRef(null);
    React.useState(null); //useRef(null);
    React.useRef();
    var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];
    // const checkCartQuantity = async (variantId) => {
    //   //const [quantity,setQuantity] = useState(0);
    //   try {
    //     console.log('cardlist');
    //     const res = await fetch(window.Shopify.routes.root + 'cart.js', { //window.Shopify.routes.root + https://react-extension-taiwinds.myshopify.com
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     });
    //     const data = await res.json();
    //     console.log(data.items);
    //     const lineItem = data.items.find((item) => item.variant_id === variantId);
    //     if (lineItem) {
    //       captureCanvas();
    //       handleCloseFirstPopup();
    //       addToOrderDetails();
    //       //setQuantity(lineItem.quantity);
    //       //cnt = lineItem.quantity;
    //     }
    //   } catch (error) {
    //   }
    // };
    // const checkVariantQuantity = async (variantId) => {
    //   try {
    //     console.log('cardlist');
    //     const shopName = 'react-extension-taiwinds';
    //     const res = await fetch(`https://${shopName}.myshopify.com/admin/api/2021-10/variants/${variantId}.json`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
    //     const data = await res.json();
    //     console.log(data);
    //     setQuantity(data.variant.inventory_quantity);
    //   } catch (error) {
    //   }
    //   return quantity;
    // };
    var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      capturedImageSrc = _useState4[0],
      setCapturedImageSrc = _useState4[1];
    var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2);
      _useState6[0];
      _useState6[1];
    var showCartToast = function showCartToast(msg) {
      cartToastRef.current.show({
        severity: 'general',
        summary: 'Add to cart ',
        detail: msg
      });
    };
    var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isFirstPopupOpen = _useState8[0],
      setFirstPopupOpen = _useState8[1];
    var _useState9 = React.useState(false),
      _useState0 = _slicedToArray(_useState9, 2),
      isSecondPopupOpen = _useState0[0],
      setSecondPopupOpen = _useState0[1];
    //canvas capture image
    //const [camera, setCamera] = useState(null); 
    var handleBuyClick = function handleBuyClick() {
      // Open the first popup when the "Buy" button is clicked
      setFirstPopupOpen(true);
    };
    React.useRef();
    new THREE__namespace.WebGLRenderer({
      preserveDrawingBuffer: true
    });
    var _useState1 = React.useState(null),
      _useState10 = _slicedToArray(_useState1, 2);
      _useState10[0];
      _useState10[1];
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(formData) {
        var res, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.p = 0;
              console.log('url:' + window.Shopify.routes.root);
              _context.n = 1;
              return fetch(window.Shopify.routes.root + 'cart/add.js', {
                //window.Shopify.routes.root + https://react-extension-taiwinds.myshopify.com
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: formData
              });
            case 1:
              res = _context.v;
              if (res.ok) {
                _context.n = 2;
                break;
              }
              throw new Error('HTTP error! Status: ${res.status}');
            case 2:
              _context.n = 3;
              return res.json();
            case 3:
              data = _context.v;
              return _context.a(2, {
                success: true,
                data: data
              });
            case 4:
              _context.p = 4;
              _t = _context.v;
              return _context.a(2, {
                success: false,
                error: _t.message
              });
          }
        }, _callee, null, [[0, 4]]);
      }));
      return function fetchData(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var processAddToCart = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(cartList) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return fetchAddCount(cartList);
            case 1:
              _context2.v;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      return function processAddToCart(_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    var fetchAddCount = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(cartList) {
        var contactInfo, myList, req, result;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              contactInfo = window.contactInfo;
              if (!(!contactInfo || contactInfo == '')) {
                _context4.n = 1;
                break;
              }
              primeToastSecondRef.current.show({
                severity: 'general',
                summary: 'Add to cart',
                detail: 'Please choose file upload info'
              });
              return _context4.a(2);
            case 1:
              if (!(cartList.length === 0)) {
                _context4.n = 2;
                break;
              }
              primeToastSecondRef.current.show({
                severity: 'general',
                summary: 'Add to cart',
                detail: 'Not found Items for Add to cart'
              });
              return _context4.a(2);
            case 2:
              myList = []; //var depositVal = window.selectDepositValue;
              cartList.forEach(/*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(item) {
                  var obj;
                  return _regenerator().w(function (_context3) {
                    while (1) switch (_context3.n) {
                      case 0:
                        if (item.variantId) {
                          console.log('variantId: ' + item.variantId + '#quantity: ' + item.quantity);
                          obj = {
                            id: item.variantId,
                            //47289317785919,
                            quantity: item.quantity
                          };
                          myList.push(obj);
                        } else {
                          console.log('Not found variantOptionsId for Add to cart');
                        }
                      case 1:
                        return _context3.a(2);
                    }
                  }, _callee3);
                }));
                return function (_x4) {
                  return _ref4.apply(this, arguments);
                };
              }());
              req = {
                "items": myList
              };
              _context4.n = 3;
              return fetchData(JSON.stringify(req));
            case 3:
              result = _context4.v;
              if (result.success) {
                resetAfterAddToCart();
                window.location.reload();
              }
            case 4:
              return _context4.a(2);
          }
        }, _callee4);
      }));
      return function fetchAddCount(_x3) {
        return _ref3.apply(this, arguments);
      };
    }();
    var resetAfterAddToCart = function resetAfterAddToCart() {
      showCartToast('Add items successfully!');
      handleCloseAllPopup();
      var x = document.getElementById("popup1-signout");
      if (x) {
        x.click();
      }
    };
    // capture first canvas
    var captureFrontCanvas = function captureFrontCanvas() {
      var gl = window.glRef;
      new Promise(function (resolve) {
        var camera = window.glCamera;
        var x = 0,
          y = 0,
          z = 5;
        camera.fov = 50;
        camera.near = 1;
        camera.far = 1000;
        camera.zoom = 0.60;
        camera.position.set(x, y, z);
        gl.render(window.scene3D, camera);
        // Wait for the next frame to ensure the scene is fully rendered
        requestAnimationFrame(resolve);
      }).then(function () {
        // Capture the image
        var dataURL = gl.domElement.toDataURL('image/png');
        // Set the captured image in state
        setCapturedImageSrc(dataURL);
        //captureBackCanvas();
        addImageSrcFront(dataURL);
      });
    };
    var handleCloseFirstPopup = function handleCloseFirstPopup() {
      // Close the first popup and open the second popup
      setFirstPopupOpen(false);
      setSecondPopupOpen(true);
    };
    var handleCloseAllPopup = function handleCloseAllPopup() {
      // Close the second popup
      setFirstPopupOpen(false);
      setSecondPopupOpen(false);
      resetGlobalList();
      var x = document.getElementById("variantTeethId");
      if (x) {
        document.getElementById("variantTeethId").value = '';
      }
      window.globalFormCartItem = null;
      window.globalMaterials = null;
    };
    var handleOpenFirstPopup = function handleOpenFirstPopup() {
      // Close the second popup
      setFirstPopupOpen(true);
      setSecondPopupOpen(false);
      var x = document.getElementById("variantTeethId");
      if (x) {
        document.getElementById("variantTeethId").value = '';
      }
      //console.log('selectDepositValue:' + window.selectDepositValue);
      //window.selectDepositValue = '';
      window.contactInfo = '';
      disableButton();
      //reapplyMaterials();
    };
    var addToOrderDetails = function addToOrderDetails() {
      resetGlobalList();
      var objLst = window.globalFormCartItem;
      for (var itm in objLst) {
        var x = objLst[itm];
        if (x && x.description && x.name && x.description !== '' && x.name !== '') {
          handleAddItem(x);
        }
      }
    };
    //check logic for add item
    var fetchProductDetailByProductId = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(product_handle, item_product_handle) {
        var rs, product_url, localProduct, res, myJson, variantDetail, obj, _t2;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              rs = null;
              _context5.p = 1;
              product_url = "/assets/ProductVariantIdSample.json";
              localProduct = "/assets/Products.json"; //const res = fetch(window.Shopify.routes.root + product_url)
              if (product_handle !== localProduct) {
                product_url = window.Shopify.routes.root + "products/".concat(item_product_handle, ".js");
              }
              _context5.n = 2;
              return fetch(product_url);
            case 2:
              res = _context5.v;
              _context5.n = 3;
              return res.json();
            case 3:
              myJson = _context5.v;
              console.log(JSON.stringify(myJson));
              variantDetail = myJson.variants ? myJson.variants[0] : null;
              if (variantDetail != null) {
                obj = {
                  id: variantDetail.id,
                  name: myJson.title.toUpperCase().replace(/\s+/g, ''),
                  price: variantDetail.price / 100
                };
                rs = obj;
              }
              _context5.n = 5;
              break;
            case 4:
              _context5.p = 4;
              _t2 = _context5.v;
              console.log(_t2.message);
            case 5:
              return _context5.a(2, rs);
          }
        }, _callee5, null, [[1, 4]]);
      }));
      return function fetchProductDetailByProductId(_x5, _x6) {
        return _ref5.apply(this, arguments);
      };
    }();
    var _useList = useList(),
      globalList = _useList.globalList,
      addToList = _useList.addToList;
      _useList.removeFromList;
      var resetGlobalList = _useList.resetGlobalList,
      isButtonEnabled = _useList.isButtonEnabled,
      disableButton = _useList.disableButton,
      addImageSrcFront = _useList.addImageSrcFront;
      _useList.addImageSrcBack;
    //const{data,add,updateLine} = useCart();
    var totalPrice = globalList.reduce(function (acc, item) {
      var price = 0;
      if (item.price === '') {
        price = 0;
      } else {
        price = item.price;
      }
      return acc + price;
    }, 0);

    // Group items by category
    var groupedByCategory = globalList.reduce(function (acc, item) {
      var group = item.group;
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(item);
      return acc;
    }, {});
    var headList = [{
      key: 'TL',
      value: 'Top Left '
    }, {
      key: 'TR',
      value: 'Top Right '
    }, {
      key: 'BL',
      value: 'Bottom Left '
    }, {
      key: 'BR',
      value: 'Bottom Right '
    }];
    var handleAddItem = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(items) {
        var nameMesh, typeRang, nameRang, labelRang, typeRangArr, foundItem, variant, globalObj;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              //pre processing globalList
              nameMesh = items.name.replace('mesh_', '');
              if (!nameMesh) {
                _context6.n = 2;
                break;
              }
              typeRang = nameMesh.split('_', 1)[0]; //loai Rang
              nameRang = nameMesh.replace(typeRang + '_', ''); //ten Rang
              labelRang = '';
              console.log('Loai Rang' + typeRang + '#Ten Rang:' + nameRang);
              typeRangArr = typeRang.match(/[a-z]+|[0-9]+/gi);
              if (typeRangArr) {
                foundItem = headList.find(function (item) {
                  return item.key === typeRangArr[0];
                });
                if (foundItem) {
                  labelRang = foundItem.value + typeRangArr[1];
                } else {
                  labelRang = typeRang;
                }
              } else {
                labelRang = typeRang;
              }
              //check variant id , price from api product/product-handle.js
              //var variant = findVariantsByName(items.variantname);
              //03Oct24 call api shopify - call directly 
              console.log("getProductHanler : " + items.variantname);
              _context6.n = 1;
              return fetchProductDetailByProductId(product_handle, items.variantname);
            case 1:
              variant = _context6.v;
              if (variant) {
                globalObj = {
                  group: labelRang,
                  name: nameRang,
                  description: items.description,
                  quantity: 1,
                  price: Number(variant.price),
                  variantId: variant.id
                };
                addToList(globalObj);
              }
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }));
      return function handleAddItem(_x7) {
        return _ref6.apply(this, arguments);
      };
    }();
    function removeSpanofPaveTitle() {
      var divPave = document.getElementById("paveOptionTitle");
      if (divPave) {
        divPave.classList.remove("show");
        divPave.classList.add("hide");
      }
      document.getElementById("paveOptionLeftTitle").innerHTML = '';
      document.getElementById("paveOptionRightTitle").innerHTML = '';
    }
    var _useState11 = React.useState([]),
      _useState12 = _slicedToArray(_useState11, 2);
      _useState12[0];
      _useState12[1];
    var collectDataAddToCart = function collectDataAddToCart() {
      var groupedGlobalList = globalList.reduce(function (acc, obj) {
        var key = obj.variantId;
        if (!acc[key]) {
          acc[key] = {
            variantId: key,
            quantity: 0
          };
        }
        acc[key].quantity += obj.quantity;
        return acc;
      }, {});
      // Convert the grouped object back to an array
      var result = Object.values(groupedGlobalList);
      processAddToCart(result);
      //setAddToCartList(result);
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(toast$1.Toast, {
      ref: cartToastRef,
      severity: "info",
      position: "center"
    }), /*#__PURE__*/React.createElement(Popup, {
      open: isFirstPopupOpen,
      id: "popupItem",
      closeOnDocumentClick: false,
      modal: true,
      contentStyle: contentStyle,
      trigger: /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: handleBuyClick,
        className: "shopify-payment-button__button shopify-payment-button__button--unbranded"
      }, "Customize"),
      position: "top  center"
    }, function (close) {
      return /*#__PURE__*/React.createElement("div", {
        className: "modal"
      }, /*#__PURE__*/React.createElement(toast$1.Toast, {
        ref: primeToastRef,
        severity: "error",
        position: "center"
      }), /*#__PURE__*/React.createElement(button.Button, {
        type: "button",
        style: {
          border: "3px solid rgb(59, 58, 58)"
        },
        id: "popup1-confirm",
        rounded: true,
        icon: "pi",
        className: "confirm p-button-component",
        onClick: (/*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(event) {
            var selectedTeethId;
            return _regenerator().w(function (_context7) {
              while (1) switch (_context7.n) {
                case 0:
                  //const selectedTeethId = document.getElementById("variantTeethId") ? document.getElementById("variantTeethId").value : "none";
                  selectedTeethId = 'bypass';
                  if (selectedTeethId == '' || selectedTeethId == 'none' || !selectedTeethId) {
                    console.log('alert variants');
                    primeToastRef.current.show({
                      severity: 'general',
                      summary: 'Select tooth ',
                      detail: 'Not found variant Option',
                      life: null
                    });
                  } else {
                    removeSpanofPaveTitle();
                    captureFrontCanvas();
                    //captureBackCanvas();
                    handleCloseFirstPopup();
                    addToOrderDetails();
                  }
                case 1:
                  return _context7.a(2);
              }
            }, _callee7);
          }));
          return function (_x8) {
            return _ref7.apply(this, arguments);
          };
        }())
      }, "Checkout"), /*#__PURE__*/React.createElement(button.Button, {
        type: "button",
        style: {
          border: "3px solid rgb(59, 58, 58)"
        },
        id: "popup1-signout",
        rounded: true,
        icon: "pi",
        className: "close p-button-component",
        onClick: function onClick(event) {
          handleCloseAllPopup();
          close();
        }
      }, "Back"), /*#__PURE__*/React.createElement(React.Suspense, {
        fallback: /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("div", null, "Loading, please wait... "))
      }, /*#__PURE__*/React.createElement(App, {
        product_handle: product_handle,
        data_model_parameter: data_model_parameter,
        data_json_parameter: data_json_parameter,
        data_texture_parameter: data_texture_parameter
      })));
    }), /*#__PURE__*/React.createElement(Popup, {
      closeOnDocumentClick: false,
      open: isSecondPopupOpen,
      modal: true,
      contentStyle: contentStyle,
      id: "popupConfirm",
      position: "top  center"
    }, /*#__PURE__*/React.createElement(toast$1.Toast, {
      ref: primeToastSecondRef,
      severity: "error",
      position: "center"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "shopify-payment-button__button shopify-payment-button__button--unbranded",
      onClick: function onClick(event) {
        handleOpenFirstPopup();
      }
    }, "Return"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "orderDetail"
    }, /*#__PURE__*/React.createElement("div", {
      className: "columnOrderDetail",
      style: {
        backgroundColor: '#f0eded',
        overflowY: 'auto',
        maxHeight: '700px'
      }
    }, isSecondPopupOpen && /*#__PURE__*/React.createElement("img", {
      src: capturedImageSrc,
      alt: "Captured Canvas",
      width: 750,
      height: 300,
      style: {
        marginTop: '0px',
        border: ''
      }
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ContactInfo, null)), /*#__PURE__*/React.createElement("div", {
      className: "columnOrderDetailRigth",
      style: {
        backgroundColor: '#f0eded'
      }
    }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("b", null, "ORDER DETAILS")), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowY: 'auto',
        maxHeight: '600px'
      }
    }, Object.keys(groupedByCategory).map(function (category) {
      var categoryItems = groupedByCategory[category];
      // Create a Set to track unique combinations of name and description
      var uniqueCombinations = new Set();
      // Filter items and calculate total price for each unique combination
      var uniqueItems = categoryItems.reduce(function (acc, item) {
        var combination = "".concat(item.name, "-").concat(item.description);
        if (!uniqueCombinations.has(combination)) {
          uniqueCombinations.add(combination);
          var filteredItems = categoryItems.filter(function (filteredItem) {
            return filteredItem.name === item.name && filteredItem.description === item.description;
          });
          var total = filteredItems.reduce(function (total, filteredItem) {
            return total + filteredItem.price;
          }, 0);
          acc.push({
            name: item.name,
            description: item.description,
            items: filteredItems,
            total: total
          });
        }
        return acc;
      }, []);
      return /*#__PURE__*/React.createElement("div", {
        key: category
      }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("b", null, category)), uniqueItems.map(function (uniqueItem, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index
        }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
          width: 500
        }, uniqueItem.name, "-", uniqueItem.description, " "), /*#__PURE__*/React.createElement("td", {
          style: {
            textAlign: 'right'
          }
        }, " ", uniqueItem.total, " USD")));
      }));
    })), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      width: 500
    }, /*#__PURE__*/React.createElement("b", null, "TOTAL")), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("b", null, totalPrice, " USD")))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: isButtonEnabled,
      className: "shopify-payment-button__button shopify-payment-button__button--unbranded",
      onClick: function onClick(event) {
        collectDataAddToCart();
      }
    }, "ADD TO CART"))))));
  };
  ReactDOM$1.createRoot(document.getElementById('customize-product-popup')).render(
  /*#__PURE__*/
  //<React.StrictMode>
  React.createElement(ListProvider, null, /*#__PURE__*/React.createElement(TeethApp, null))
  //</React.StrictMode>
  // <React.StrictMode>
  // </React.StrictMode>,
  );

})(React, ReactDOM$1, ReactDOM, primereact, THREE, fiber, drei, threeStdlib, primereact, primereact, postprocessing, ImageResizer, saveAs);
