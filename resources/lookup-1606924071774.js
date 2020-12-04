(function(window, undefined) {
  var dictionary = {
    "17f1697f-0af8-4f76-961e-e3b0b4d599af": "Añadir plazo",
    "44dec795-ec1f-4652-bd3e-98d8663d4931": "Formulario Modificar (Completo)",
    "bad3dc0a-1577-42cd-a724-594cc5866e9c": "MODIFICAR PLAZO",
    "ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5": "Gestionar Usuarios",
    "3905c5b1-d154-4c02-b39a-68d2b02b9ee8": "Modificar Mis Datos",
    "7056f199-7fd8-459f-9ce9-76f8c9f0cf2f": "Gestionar Plazos",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Dar de Alta",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);