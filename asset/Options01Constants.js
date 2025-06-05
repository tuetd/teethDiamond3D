var Options01Constants = (function (exports) {
    'use strict';

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

    exports.barBottomArr = barBottomArr;
    exports.barBottomOptArr = barBottomOptArr;
    exports.barTopArr = barTopArr;
    exports.barTopOptArr = barTopOptArr;
    exports.bottomVarArr = bottomVarArr;
    exports.classicArr = classicArr;
    exports.curveArr = curveArr;
    exports.defaultColorTeeth = defaultColorTeeth;
    exports.engravingImageRotateArr = engravingImageRotateArr;
    exports.notClassicLevel2Arr = notClassicLevel2Arr;
    exports.ogCapArr = ogCapArr;
    exports.paveArr = paveArr;
    exports.selectedTeethColor = selectedTeethColor;
    exports.spacersArr = spacersArr;
    exports.straigthArr = straigthArr;
    exports.symbolArr = symbolArr;
    exports.teethImageMaskArr = teethImageMaskArr;
    exports.teethImageMaskPaveArr = teethImageMaskPaveArr;
    exports.topVarArr = topVarArr;

    return exports;

})({});
