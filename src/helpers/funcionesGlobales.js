
exports.install = function (Vue) {
    Vue.prototype.text1 = function (a, b) {// Función global 1
      alert ('Ejecución exitosa 1: ' + a + ' ' + b);
 };
      Vue.prototype.text2 = function () {// Función global 2
      alerta ('Ejecución exitosa 2');
 };
}; 