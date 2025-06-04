var MyShopifyApp = (function (React, button, confirmdialog, THREE$1) {
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
  var barTopArr = ["MESH_STRAIGHT_BAR_TOP", "MESH_CURVE_BAR_TOP"]; //top
  var barBottomArr = ["MESH_STRAIGHT_BAR_BOTTOM", "MESH_CURVE_BAR_BOTTOM"]; //bottom
  var barTopOptArr = ["MESH_TL1", "MESH_TL2", "MESH_TL3", "MESH_TR1", "MESH_TR2", "MESH_TR3"]; //top
  var barBottomOptArr = ["MESH_BL1", "MESH_BL2", "MESH_BL3", "MESH_BR1", "MESH_BR2", "MESH_BR3"]; //bottom
  var topVarArr = ["TL", "TR"];
  var bottomVarArr = ["BL", "BR"];
  var paveArr = ["PRONGS", "DIAMONDS", "DIAMOND", "BAGUETTEMETAL", "BAGUETTESTONE", "METAL", "STONE"]; //FOR 8shapse:metal,stone 10oct24
  var classicArr = ["CLASSIC", "LOGO"];
  var straigthArr = ["STRAIGHT"];
  var curveArr = ["CURVE"];
  var selectedTeethColor = "0xf7d7d7";
  var defaultColorTeeth = "0xfffdee";
  var spacersArr = ["SPACERS"];
  var ogCapArr = ["FRAME", "SOLID", "ENAMEL", "8SHAPES"]; //"OG", "CAP"
  var symbolArr = ["HEART", "STAR", "PLAIN", "UPLOAD IMAGE"]; //"OG", "CAP"

  var notClassicLevel2Arr = ["PAVE", "BAGUETTE", "HEART", "HEX", "KITE", "OVAL", "EMERALD", "MARQUISE", "ROUND", "SQUARE"]; //PAVE" || typesElement == "BAGUETTE" || optionsElement == "ENAMEL"

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
          if (classicArr.includes(stylesRang)) {
            //selected classic -> remove pave prongs,diamonds,baguette
            cntStyles = 1;
          }
          if (paveArr.includes(stylesRang)) {
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
            if (checkMeshArr.includes(meshPrefix) || checkMeshArr.includes(meshName.toUpperCase()) || cntStyles == 1 && paveArr.includes(meshSuffix) && selectedRang == meshPrefix || cntStyles == 2 && classicArr.includes(meshSuffix) && selectedRang == meshPrefix || cntStyles == 3 && notClassicLevel2Arr.includes(meshArr[3].toUpperCase()) && selectedRang == meshPrefix && stylesRang !== meshArr[3].toUpperCase()) {
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
    if (classicArr.includes(typesElement))
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
              if (itemParent.name == itm.parent && itm.target.toUpperCase() == selectedTeethId.toUpperCase() && (isTop == 1 && barTopArr.includes(meshName) || isTop == 0 && barBottomArr.includes(meshName))) {
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
          if (itemParent.name == itm.parent && itm.target.toUpperCase() == selectedTeethId.toUpperCase() && (isTop == 1 && barTopArr.includes(meshName) || isTop == 0 && barBottomArr.includes(meshName))) {
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
  function resetSelectedBorder(itemParent) {
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
    if (classicArr.includes(typesElement))
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
              if (itemParent.name == itm.parent && itm.target.toUpperCase() == teeth.toUpperCase() && (isTop == 1 && barTopArr.includes(meshName) || isTop == 0 && barBottomArr.includes(meshName))) {
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
              if (itemParent.name == itm.parent && itm.target.toUpperCase() == teeth.toUpperCase() && (isTop == 1 && barTopArr.includes(meshName) || isTop == 0 && barBottomArr.includes(meshName))) {
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
  function removeSpanofPaveTitle() {
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
    removeSpanofPaveTitle();
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
        resetSelectedBorder(itemParent);
        var meshItem = level2SelectedOptions(itemParent, selectedTeethId);
        if (meshItem) {
          var sameMesh = window.scene3D.getObjectByName("mesh_" + meshItem.name);
          //check bar if selected teeth on top or bottom on bar sections
          var isDenied = checkBarExisted(visibleMeshes, meshItem.name);
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
    var isDisabled = checkBarExisted(visibleMeshes, window.selectedTeethId);
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
      disableSpacersClassName(spacersArr);
      disableOgCapClassName(ogCapArr);
    } else if (chkOgCap == 1) {
      disableSpacersClassName(spacersArr);
      resetOgCapClassName(ogCapArr);
    } else if (chkSpacers == 1) {
      disableOgCapClassName(ogCapArr);
      resetSpacersClassName(spacersArr);
    } else {
      //allow
      resetSpacersClassName(spacersArr);
      resetOgCapClassName(ogCapArr);
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
        if (type == 1 && barTopArr.includes(meshPrefix)) {
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
        if (type == 2 && barBottomArr.includes(meshPrefix)) {
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
      resetSpacersClassName(spacersArr);
      resetOgCapClassName(ogCapArr);
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
  function disableSpacersClassName(spacersArr) {
    var spacers = window.globalParentHierachyId[spacersArr[0]];
    if (spacers) {
      var spacersButton = document.getElementById(spacers.id);
      if (spacersButton && !spacersButton.classList.contains("disable-button")) {
        spacersButton.classList.add("disable-button");
      }
    }
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
  function resetParentClassName(spacersArr, ogCapArr, selectedTeethId, visibleMeshes) {
    resetSpacersClassName(spacersArr);
    resetOgCapClassName(ogCapArr);
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
      if (isTop == 1 && barTopArr.includes(meshName) || isTop == 2 && barBottomArr.includes(meshName)) {
        disableSpacersClassName(spacersArr);
        disableOgCapClassName(ogCapArr);
        break;
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
      if (meshArr[2].toUpperCase() == 'RAW' && (top > 0 && barTopOptArr.includes(meshPrefix) || top == 0 && barBottomOptArr.includes(meshPrefix))) {
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
      disableOgCapClassName(ogCapArr);
      disableSpacersClassName(spacersArr);
    } else {
      //enable spacers, og, cap level 1
      resetSpacersClassName(spacersArr);
      resetOgCapClassName(ogCapArr);
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
    if (classicArr.includes(selectedBarStyles)) {
      //classic -> check DIAMONDS,PRONGS,BAGUETTEMETAL,
      stylesArr = paveArr; //["PRONGS", "DIAMONDS", "DIAMOND", "BAGUETTEMETAL", "BAGUETTESTONE"];
    }
    if (paveArr.includes(selectedBarStyles)) {
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
      if (cntOthersBar > 0 && (othersBarArr.includes(barPrefix) || stylesArr.includes(meshSuffix) && meshArr[2].toUpperCase() !== 'RAW' && (selectName[2].toUpperCase() == 'TOP' && barTopArr.includes(barPrefix) || selectName[2].toUpperCase() == 'BOTTOM' && barBottomArr.includes(barPrefix)))) {
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
      && (barTopOptArr.includes(meshPrefix) || barTopArr.includes(barPrefix) && stylesArr.includes(meshSuffix))) {
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
      && (barBottomOptArr.includes(meshPrefix) || barBottomArr.includes(barPrefix) && stylesArr.includes(meshSuffix))) {
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
    if (barTopArr.includes(meshSelected)) {
      //neu top selected
      top = 1;
    }
    if (barBottomArr.includes(meshSelected)) {
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
      if (top === 1 && meshArr[2].toUpperCase() !== 'RAW' && meshName.toUpperCase() !== currentSelectedMesh && barTopOptArr.includes(meshPrefix) //&& barTopArr.includes(barPrefix) 
      // || (meshSuffix && barTopArr.includes(barPrefix) && stylesArr.includes(meshSuffix))
      ) {
        return 1;
      }
      if (top === 2 && meshArr[2].toUpperCase() !== 'RAW' && meshName.toUpperCase() !== currentSelectedMesh && barBottomOptArr.includes(meshPrefix) //&& barBottomArr.includes(barPrefix)
      // || (meshSuffix && barBottomArr.includes(barPrefix) && stylesArr.includes(meshSuffix))
      ) {
        return 2;
      }
    }
    return 0;
  };
  function disableRangOptions(itemParent, name, visibleMeshes) {
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
    var isDisabled = checkBarExisted(visibleMeshes, name);
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
                resetSelectedBorder(itemParent);
                removeSpanofPaveTitle();
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
                  var cnt = disableRangOptions(itemParent, selectedTeethId, visibleMeshes);
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
                  removeSpanofPaveTitle();
                  resetSelectedBorder(itemParent);
                  swatchColor('none');
                  //resetBarMeshVisible(itemParent.name,selectedTeethId, visibleMeshes,visibleMeshesColor);
                  resetParentClassName(spacersArr, ogCapArr, selectedTeethId, visibleMeshes);
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
                        resetSelectedBorder(level2Bar);
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
                  var cnt = disableRangOptions(itemParent, selectedTeethId, visibleMeshes);
                  if (cnt > 0) {
                    toast.current.show({
                      severity: 'general',
                      summary: 'WARING',
                      detail: 'This option requires a gap between Spacer,Please select a different option',
                      life: 1000
                    });
                    return;
                  }
                  removeSpanofPaveTitle();
                  selectComponent(itemParent.name, itemParent.id, itemParent.level, itemParent.parentId, maxLevel, selectedTeethId, itemParent);
                  resetSelectedBorder(itemParent);
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
                      var isDenied = checkBarExisted(visibleMeshes, meshItem.name);
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

  return Options01;

})(React, primereact, primereact, THREE);
