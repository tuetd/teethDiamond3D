var ListContext = (function (exports, React) {
  'use strict';

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
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

  exports.ListProvider = ListProvider;
  exports.useList = useList;

  return exports;

})({}, React);
