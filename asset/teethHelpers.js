var teethHelpers = (function (exports, THREE) {
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

  //var model_materials = {};
  var barTopOptArr = ["MESH_TL1", "MESH_TL2", "MESH_TL3", "MESH_TR1", "MESH_TR2", "MESH_TR3"]; //top
  var barBottomOptArr = ["MESH_BL1", "MESH_BL2", "MESH_BL3", "MESH_BR1", "MESH_BR2", "MESH_BR3"]; //bottom
  var barTopArr = ["MESH_STRAIGHT_BAR_TOP", "MESH_CURVE_BAR_TOP"]; //top
  var barBottomArr = ["MESH_STRAIGHT_BAR_BOTTOM", "MESH_CURVE_BAR_BOTTOM"]; //bottom
  var classicArr = ["CLASSIC"];
  var paveArr = ["PRONGS", "DIAMONDS", "DIAMOND", "BAGUETTEMETAL", "BAGUETTESTONE", "METAL", "STONE"]; //FOR 8shapse:metal,stone 10oct24
  var defaultColorTeeth = "0xfffdee";
  function resetUnSelectTeeth(spacersArr, ogCapArr, maxHierarchyDepth, jsonData) {
    removeSpanofPaveTitle();
    resetParentClassName(spacersArr, ogCapArr);
    resetSelectedBorder();
    for (var i = 2; i <= maxHierarchyDepth; i++) {
      document.querySelectorAll('[layer^="' + i + '"]').forEach(function (element) {
        // element.style.display = 'none';
        element.classList.remove('show');
        element.classList.add('hide');
      });
    }
    //reset selected Id
    if (window.selectedTeethId) {
      var meshName = "mesh_" + window.selectedTeethId + "_Raw";
      var meshItm = window.scene3D.getObjectByName(meshName);
      if (meshItm) {
        var colorValue = parseInt(defaultColorTeeth, 16);
        meshItm.material.color = new THREE__namespace.Color(colorValue);
        window.selectedTeethId = '';
      }
    }
  }
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
  function cntBtnColor(colorOptionTeethName, colorCode, visibleMeshesColor) {
    var colorValue = parseInt(colorCode, 16);
    var colorOption = new THREE__namespace.Color(colorValue).getHexString();
    if (colorOptionTeethName in visibleMeshesColor) {
      var visiMeshColor = visibleMeshesColor[colorOptionTeethName].getHexString();
      if (visiMeshColor == colorOption) {
        return 1;
      }
    }
    return 0;
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

  exports.checkBarExisted = checkBarExisted;
  exports.checkOptionDependByStones = checkOptionDependByStones;
  exports.checkOptionIsClassicOrNot = checkOptionIsClassicOrNot;
  exports.checkTeethVisibleAutoToggle = checkTeethVisibleAutoToggle;
  exports.cntBtnColor = cntBtnColor;
  exports.disableOgCapClassName = disableOgCapClassName;
  exports.disableParentClassName = disableParentClassName;
  exports.disableRangOptions = disableRangOptions;
  exports.disableSpacersClassName = disableSpacersClassName;
  exports.processTeethVisibleAutoToggle = processTeethVisibleAutoToggle;
  exports.removeSpanofPaveTitle = removeSpanofPaveTitle;
  exports.resetOgCapClassName = resetOgCapClassName;
  exports.resetParentClassName = resetParentClassName;
  exports.resetSelectedBorder = resetSelectedBorder;
  exports.resetSpacersClassName = resetSpacersClassName;
  exports.resetSpanofPaveTitle = resetSpanofPaveTitle;
  exports.resetTeethRawDefaultColor = resetTeethRawDefaultColor;
  exports.resetUnSelectTeeth = resetUnSelectTeeth;
  exports.selectedBorderLevel2 = selectedBorderLevel2;
  exports.selectedBorderSymbol = selectedBorderSymbol;
  exports.toggle = toggle;

  return exports;

})({}, THREE);
