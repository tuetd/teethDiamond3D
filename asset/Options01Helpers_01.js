var Options01Helpers_01 = (function (exports, react, THREE$1) {
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

    var THREE__namespace = /*#__PURE__*/_interopNamespaceDefault(THREE$1);

    var barTopArr = ["MESH_STRAIGHT_BAR_TOP", "MESH_CURVE_BAR_TOP"]; //top
    var barBottomArr = ["MESH_STRAIGHT_BAR_BOTTOM", "MESH_CURVE_BAR_BOTTOM"]; //bottom
    var barTopOptArr = ["MESH_TL1", "MESH_TL2", "MESH_TL3", "MESH_TR1", "MESH_TR2", "MESH_TR3"]; //top
    var barBottomOptArr = ["MESH_BL1", "MESH_BL2", "MESH_BL3", "MESH_BR1", "MESH_BR2", "MESH_BR3"]; //bottom
    var topVarArr = ["TL", "TR"];
    var paveArr = ["PRONGS", "DIAMONDS", "DIAMOND", "BAGUETTEMETAL", "BAGUETTESTONE", "METAL", "STONE"]; //FOR 8shapse:metal,stone 10oct24
    var classicArr = ["CLASSIC", "LOGO"];
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
      if (mesh.visible) ;
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

    exports.applyLogicColorStar = applyLogicColorStar;
    exports.autoToggleLevel2 = autoToggleLevel2;
    exports.checkOptionsVisibleOnLevel = checkOptionsVisibleOnLevel;
    exports.clearBorderColors = clearBorderColors;
    exports.clearBorderSelectedHeartAndStar = clearBorderSelectedHeartAndStar;
    exports.clearBorderUnConfirmed = clearBorderUnConfirmed;
    exports.removeSpanofPaveTitle = removeSpanofPaveTitle;
    exports.resetColorOptions = resetColorOptions;
    exports.resetColorSymbolFrameOptions = resetColorSymbolFrameOptions;
    exports.selectComponent = selectComponent;
    exports.setColorOptionOnOff = setColorOptionOnOff;
    exports.updateSpanofPaveTitle = updateSpanofPaveTitle;
    exports.updateStonesOptionColorOption = updateStonesOptionColorOption;

    return exports;

})({}, React, THREE);
