//Expresion de funcion invocada inmediatamente IIFE
let miModulo = (function () {
  "use strict";

  let _propiedadPrivada = "Hola mundo";
  /*Cuando una variable o funcion es privada es comun
  usar un _ antes del nombre para hacer referencia
  a que lo son. 
  */
  function _metodoPrivado() {
    console.log(_propiedadPrivada);
  }
  /*Este metodo es privado, no se puede usar fuera de
  aqui debido al scope*/

  return {
    MetodoPublico: function () {
      _metodoPrivado();
    },
  };
})();

myModule.MetodoPublico();
