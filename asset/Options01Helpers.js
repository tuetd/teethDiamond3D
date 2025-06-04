var MyShopifyApp = (function (exports, THREE) {
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
     //PAVE" || typesElement == "BAGUETTE" || optionsElement == "ENAMEL"

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

    exports.checkMeshExisted = checkMeshExisted;
    exports.clearHeartAndStar = clearHeartAndStar;
    exports.clearImageAndFrame = clearImageAndFrame;
    exports.clearMeshNotSelected = clearMeshNotSelected;
    exports.disableOgCapClassName = disableOgCapClassName;
    exports.disableRangOptions = disableRangOptions;
    exports.disableSpacersClassName = disableSpacersClassName;
    exports.disableSpacersOgCap = disableSpacersOgCap;
    exports.resetBarByTeeth = resetBarByTeeth;
    exports.resetColorDefaultByBar = resetColorDefaultByBar;
    exports.resetOgCapClassName = resetOgCapClassName;
    exports.resetParentClassName = resetParentClassName;
    exports.resetSpacersClassName = resetSpacersClassName;
    exports.resetTeeth = resetTeeth;
    exports.setDataOrderDetailsCart = setDataOrderDetailsCart;
    exports.updateEngravingLogic = updateEngravingLogic;

    return exports;

})({}, THREE);
