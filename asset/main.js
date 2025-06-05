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

  var css_248z$1 = ".popup-content {\r\n    margin: auto;\r\n    background: #fff;\r\n    padding: 5px;\r\n    border: 1px solid #d7d7d7;\r\n    top: 0px !important;\r\n    left: 0px !important;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  [role=\"tooltip\"].popup-content {\r\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);\r\n    border-radius: 5px;\r\n  }\r\n  .popup-overlay {\r\n    background: rgba(0, 0, 0, 0.5);\r\n  }\r\n  [data-popup=\"tooltip\"].popup-overlay {\r\n    background: transparent;\r\n  }\r\n  .popup-arrow {\r\n    -webkit-filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.16));\r\n    filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.16));\r\n    color: #fff;\r\n    stroke-width: 2px;\r\n    stroke: #d7d7d7;\r\n    stroke-dasharray: 30px;\r\n    stroke-dashoffset: -54px;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n  }\r\n  ";
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
