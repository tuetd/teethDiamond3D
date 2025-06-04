var MyShopifyApp = (function (React) {
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

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
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

  return useShareableState;

})(React);
