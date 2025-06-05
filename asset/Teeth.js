var Teeth = (function (THREE, drei, React, fiber) {
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

  var THREE__namespace = /*#__PURE__*/_interopNamespaceDefault(THREE);
  var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
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
      var targetPosition = new THREE.Vector3(itm.x, itm.y, itm.z);
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
    return /*#__PURE__*/React.createElement("group", _extends({
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
            material.color = new THREE.Color(defaultColor);
          }

          //fill selected color when teeth is clicked
          if (window.selectedTeethId == nodes[key].name.split('_')[0] && meshDetails && meshDetails.length > 0 && meshDetails[0].selectedColor !== "") {
            var selectedColor = parseInt(meshDetails[0].selectedColor, 16);
            material.color = new THREE.Color(selectedColor);
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
              var material_classic = new THREE.MeshPhysicalMaterial({
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

  return Teeth$1;

})(THREE, drei, React, fiber);
