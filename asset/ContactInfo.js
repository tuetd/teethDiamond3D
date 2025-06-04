var MyShopifyApp = (function (React, ImageResizer, FileSaver) {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
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
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
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
    if (typeof document === 'undefined') {
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

  var css_248z = "/* @import url(\"primeicons.css\"); */\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#root {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\ndiv.vertical_canvas {\r\n  width: 50%;\r\n  height: 80%;\r\n  margin: 0;\r\n  padding: 0;\r\n  float: left;\r\n}\r\ndiv.vertical_settings {\r\n  width: 50%;\r\n  height: 20%;\r\n  margin: 0;\r\n  padding: 0;\r\n  float: right;\r\n}\r\n\r\ndiv.vertical_canvas > div > div > canvas {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  \r\n}\r\n\r\ndiv.horizontal_canvas {\r\n  width: 100%;\r\n  height: 60%;\r\n  margin: -10px;\r\n  padding: 0;\r\n  /* display: none; */\r\n}\r\ndiv.horizontal_settings {\r\n  width: 100%;\r\n  height: 40%;\r\n  margin: 0;\r\n  padding-top: 1;\r\n  overflow-y: scroll;\r\n  background-color: white;\r\n}\r\n\r\n\r\n\r\ndiv.horizontal_canvas_full {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  /* display: none; */\r\n}\r\ndiv.horizontal_settings_none {\r\n  width: 100%;\r\n  height: 0%;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow-y: scroll;\r\n  background-color: #eef5f0;\r\n}\r\n\r\ndiv.horizontal_canvas > div > div > canvas {\r\n  width: 100vw;\r\n  height: 50vh;\r\n}\r\n\r\n\r\n.react-tabs {\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.react-tabs__tab-list {\r\n  /* border-bottom: 1px solid #aaa; */\r\n  margin: 0 0 30px;\r\n  padding: 0;\r\n}\r\n\r\n.react-tabs__tab {\r\n  display: inline-block;\r\n  border: 1px solid transparent;\r\n  border-bottom: none;\r\n  bottom: -1px;\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 6px 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.react-tabs__tab--selected {\r\n  /* background: #fff; */\r\n  /* border-color: #aaa; */\r\n  color: black;\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.react-tabs__tab--disabled {\r\n  color: GrayText;\r\n  cursor: default;\r\n}\r\n\r\n.react-tabs__tab:focus {\r\n  outline: none;\r\n}\r\n\r\n.react-tabs__tab:focus:after {\r\n  content: '';\r\n  position: absolute;\r\n  height: 5px;\r\n  left: -4px;\r\n  right: -4px;\r\n  bottom: -5px;\r\n  /* background: #fff; */\r\n}\r\n\r\n.react-tabs__tab-panel {\r\n  display: none;\r\n}\r\n\r\n.react-tabs__tab-panel--selected {\r\n  display: block;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.first {\r\n  /* border-top: solid 1px lightgray; */\r\n  margin-top: 5px;\r\n}\r\n\r\n.flex {\r\n  flex-direction: row !important;\r\n}\r\n\r\n#content {\r\n  height: 100vh;\r\n}\r\n\r\n\r\n.confirm {\r\n  left: 75vw;\r\n  top: 10vh;\r\n  z-index: 10;\r\n  position: absolute;\r\n  background-color: white !important;\r\n  color: black !important;\r\n  border-color: black !important;\r\n  border: 3px solid rgb(59, 58, 58);\r\n  justify-content: center;\r\n}\r\n\r\n.close {\r\n  left: 5vw;\r\n  top: 10vh;\r\n  z-index: 10;    \r\n  position: absolute;\r\n  background-color: white !important;\r\n  color: black !important;\r\n  border-color: black !important;\r\n  border: 3px solid rgb(59, 58, 58);\r\n  justify-content: center;\r\n}\r\n\r\n.menuToggle_on {\r\n  left: 0vw;\r\n  top: 60vh;\r\n  z-index: 10;  \r\n  position: absolute !important;\r\n  background-image: url(\"./assets/icons/arrow_down_essential_set_icon.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: auto;\r\n  height: 4rem;\r\n  width: 4rem;\r\n\r\n}\r\n\r\n.menuToggle_off {\r\n  left: 0vw;\r\n  top: 94vh;\r\n  z-index: 10;  \r\n  position: absolute !important;;\r\n  background-image: url(\"./assets/icons/arrow_essential_set_up_icon.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: auto;\r\n  height: 4rem;\r\n  width: 4rem;\r\n\r\n}\r\n\r\n.p-button-rounded {\r\n  border-radius: 2rem !important;\r\n}\r\n\r\n.p-button-icon-only  {\r\n  border-radius: 50%;\r\n}\r\n\r\n.pi {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.pi-sign-out {\r\n  background-image: url(\"./assets/icons/sign_out.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: auto;\r\n  height: 4rem;\r\n  width: 4rem;\r\n}\r\n\r\n.pi-download {\r\n  background-image: url(\"./assets/icons/download.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: auto;\r\n  height: 4rem;\r\n  width: 4rem;\r\n}\r\n\r\n.p-button-component {\r\n  /*width: 250px;*/\r\n  min-width: 200px;\r\n}\r\n\r\n.p-button {\r\n  color: #27272b;\r\n  background-color: white;\r\n  border: 1px solid rgb(59, 58, 58);\r\n\r\n}\r\n\r\n.colorLabel {\r\n  padding-top: 5px;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.divColorSpacer {\r\n  /* padding-left: 30px; */\r\n  width: 80px;\r\n}\r\n\r\n.p-button, \r\n.p-component {\r\n  font-size: 1.0rem;\r\n}\r\n\r\n.p-button {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.p-button.p-button-outlined {\r\n  border: 3px solid;\r\n  justify-content: center;\r\n  border-color: black ;\r\n  color: black !important;\r\n}\r\n\r\n.p-toast-message-general {\r\n  background: #d4d6d5;\r\n  border: solid #2c2e2d;\r\n  border-width: 0 0 0 6px;\r\n  color: #2c2e2d;\r\n}\r\n\r\n.p-toast .p-toast-message.p-toast-message-general .p-toast-message-icon, .p-toast .p-toast-message.p-toast-message-general .p-toast-icon-close {\r\n  color: #2c2e2d;\r\n}\r\n\r\n.delimiter {\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\r\n  /* border-bottom: solid 1px lightgray; */\r\n\r\n}\r\n\r\nbody {\r\n  background: #f0f0f0;\r\n}\r\n\r\n.orderDetail {\r\n  display: flex;\r\n  width: 90%;\r\n}\r\n\r\n.columnOrderDetail {\r\n  flex: 1;\r\n  /*padding: 20px;*/\r\n  border: 0px solid #ddd; /* Optional: Add borders for visual separation */\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n.columnOrderDetailRigth {\r\n  flex: 1;\r\n  padding: 20px;\r\n  border: 0px solid #ddd; /* Optional: Add borders for visual separation */\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n.disable-button{ \r\n  background-color: grey !important;\r\n}\r\n\r\n.selected-border{\r\n  border-color: blue !important;\r\n}\r\n\r\n.buttonFirst {\r\n  margin-left: 60px;\r\n}\r\n\r\n.options-bar {\r\n  width: 600px;\r\n  display: flex; /* Use Flexbox for horizontal alignment */\r\n  justify-content: space-around; /* Distribute space evenly */\r\n  padding: 10px; /* Optional padding */\r\n  background-color: #f0f0f0; /* Optional background color */\r\n  border: 1px solid black; /* Optional border */\r\n}\r\n.deposit-tag {\r\n  width: 200px;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n.option-button {\r\n  /*background-color: #007bff; /* Button background color */\r\n  color: black; /* Button text color */\r\n  border: none; /* Remove default border */\r\n  padding: 10px 50px; /* Button padding */\r\n  margin: 0 2px; /* Spacing between buttons */\r\n  border-radius: 4px; /* Optional rounded corners */\r\n  cursor: pointer; /* Pointer cursor on hover */\r\n  font-size: 20px; /* Font size */\r\n}\r\n.option-button.selected {\r\n  background-color: #050506; /* Blue background for selected button */\r\n  color: #fff; /* White text for selected button */\r\n  border-color: #007bff; /* Match border color with background */\r\n}\r\n/* \r\n.option-button:hover {\r\n  background-color: #0056b3; \r\n} */\r\n\r\n.contact-app {\r\n  text-align: center;\r\n  margin: 50px;\r\n}\r\n\r\n.button:hover {\r\n  background-color: white; \r\n  border: 3px solid;\r\n}\r\n\r\n.contact-view-contact-button {\r\n  /*padding: 10px 20px;*/\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.contact-popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1000;\r\n}\r\n\r\n.contact-popup-content {\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  position: relative;\r\n  width: 600px;\r\n  max-width: 90%;\r\n}\r\n\r\n.contact-close-button {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n  color: #aaa;\r\n}\r\n\r\n.contact-close-button:hover {\r\n  color: #000;\r\n}\r\n\r\n.options-contact {\r\n  width: 600px; \r\n}\r\n\r\n.commonBarDetail {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.oval-button {\r\n  padding: 10px 30px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  border: 1px solid none; /* Border color */\r\n  background-color: #fff; /* Default background color */\r\n  border-radius: 50px; /* Makes the button oval */\r\n  transition: background-color 0.3s ease, color 0.3s ease;\r\n  outline: none; /* Removes default focus outline */\r\n}\r\n\r\n/* #swatch color for selected  */\r\n.dropdown {\r\n  /*align-items: right;\r\n  display: inline-flex;*/\r\n  position:relative;\r\n  display:inline-block;\r\n  height:fit-content;\r\n}\r\n\r\n.dropdown-header {\r\n  display: inline-block;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  background-color: #f0f0f0;\r\n  border: 1px solid #ccc;\r\n  padding: 10px 20px; /* Adjust padding for the oval shape */\r\n  border-radius: 50px; /* Creates the oval shape */\r\n  font-size: 16px;\r\n  white-space: nowrap; /* Prevent text from wrapping */\r\n  width: 170px; /* Fixed width for consistency */\r\n  text-align: center; /* Center text within the header */\r\n  box-sizing: border-box; /* Include padding and border in width calculation */\r\n}\r\n\r\n.bi-chevron-down {\r\n  margin-left: 10px;\r\n}\r\n\r\n.dropdown-menu {\r\n  position:absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  margin-top:1px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 50px; /* Match the oval shape of the header */\r\n  display: flex;\r\n  flex-direction: row; /* Display items horizontally */\r\n  padding: 5px;\r\n  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\r\n  z-index: 1000; /* Ensure the menu appears above other content */\r\n  justify-content: space-around;\r\n  box-sizing: border-box; /* Include padding and border in width calculation */\r\n}\r\n\r\n.dropdown-item {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #000; /* Change text color for visibility */\r\n  padding: 10px 15px; /* Adjust padding for item spacing */\r\n  margin: 0 5px; /* Space between items */\r\n  border-radius: 20px; /* Rounded corners for each item */\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  text-align: center; /* Center text */\r\n  padding: 10px 15px;\r\n  display: block;\r\n  text-decoration: none;\r\n  width: 100px;\r\n}\r\n\r\n.dropdown-item:hover {\r\n  background-color: #e0e0e0; /* Change background on hover for better visibility */\r\n}\r\n\r\n.optionslevel3 {\r\n  display: inline-flex; /* Align children in a row */\r\n  gap: 20px; \r\n  /*align-items: baseline;*/\r\n}\r\n\r\n\t\t\t\t\t\t\t\t\r\n.show_dropdown {\r\n  position:relative;\r\n  display:inline-block;\r\n  height:fit-content;\r\n}\r\n\r\n.hide_dropdown {\r\n  position:relative;\r\n  display:none;\r\n  height:fit-content;\r\n}\r\n\r\n\r\n.clearall {\r\n  left: 5vw;\r\n  top: 53vh;\r\n  z-index: 10;    \r\n  position: absolute;\r\n  background-color: white !important;\r\n  color: black !important;\r\n  border-color: black !important;\r\n  border: 3px solid rgb(59, 58, 58);\r\n  justify-content: center; \r\n\r\n}\r\n\r\n\r\n.flexPaveColumn{\r\n  flex: 1;\r\n  /*padding: 20px;*/\r\n  border: 0px solid #ddd; /* Optional: Add borders for visual separation */\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n/*end */\r\n";
  styleInject(css_248z);

  var ListContext = /*#__PURE__*/React.createContext();
  var useList = function useList() {
    return React.useContext(ListContext);
  };

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
              ImageResizer.imageFileResizer(blobFront, 800,
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

  return ContactInfo;

})(React, ImageResizer, saveAs);
