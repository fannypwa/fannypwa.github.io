var Num1;
var Num2;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var igual = document.getElementById('igual');

  }
  division.onclick = function(e){
    Num1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    Num2 = resultado.textContent;
    resolver();
}
function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    Num1 = 0;
    NUm2 = 0;
    operacion = "";
  }
  function resolver(){
    var res = 0;
    switch(operacion){
      case "igual":
        res = Num1 / Num2;
        break;
    }
    resetear();
    resultado.textContent = res;
  }