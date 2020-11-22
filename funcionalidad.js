var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
  }
  densidad.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
  function resolver(){
    var res = 0;
    switch(operacion){
      case "calcular":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }