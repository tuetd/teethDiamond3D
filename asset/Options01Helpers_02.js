var Options01Helpers_02 = (function (exports) {
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
    var paveArr = ["PRONGS", "DIAMONDS", "DIAMOND", "BAGUETTEMETAL", "BAGUETTESTONE", "METAL", "STONE"]; //FOR 8shapse:metal,stone 10oct24
    var classicArr = ["CLASSIC", "LOGO"];

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

    exports.checkBarExisted = checkBarExisted;
    exports.globalChildHierachyId = globalChildHierachyId;
    exports.globalParentHierachyId = globalParentHierachyId;
    exports.handleImageUpload = handleImageUpload;
    exports.level2SelectedOptions = level2SelectedOptions;
    exports.meshColorDefaultCart = meshColorDefaultCart;
    exports.resetSelectedBorder = resetSelectedBorder;
    exports.resetSpacerOgCapOptions = resetSpacerOgCapOptions;
    exports.setDefaultMeshPaveOthers = setDefaultMeshPaveOthers;
    exports.setMeshOnOff = setMeshOnOff;
    exports.stonesOptionLogic = stonesOptionLogic;
    exports.swatchColor = swatchColor;

    return exports;

})({});
