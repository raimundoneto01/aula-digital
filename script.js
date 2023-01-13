let container = document.getElementById("container");

// ----criando variável--

// let ovos = 4;
// let banana = 2;

// let soma = ovos + banana;
// container.innerHTML = soma;

// ovos = 2;
// soma = ovos + banana;
// container.innerHTML = soma;

// -----usando o if ( strutura de condição)----

// let valor2 = "meu nome";

// if(valor2) {
//     console.log("verdade")
// }els {
//     console.log("false")
// }


function imc()
{
        event.preventDefault();
        let p = Number(peso.value);
        let a = Number(altura.value);
        let calculo = (p / (a * a)).toFixed(1);
        let resultado = document.getElementById("resultado");

        if(calculo < 18.5){
            resultado.innerHTML = "Abaixo do Peso;" +calculo;
            return;
        }
        if(calculo >= 18.5 && calculo <= 24.9){
            resultado.innerHTML = "Peso Normal;" +calculo;
            return; 
        }
        if(calculo >= 25 && calculo <= 29.9){
            resultado.innerHTML = "Sobre Peso;" +calculo;
            return;    
        }
         if(calculo >= 30 && calculo <= 34.9){
            resultado.innerHTML = "Obesidade Grau 1;" +calculo; 
            return;
        }
        if(calculo >= 35 && calculo <= 39.9){
            resultado.innerHTML = "Obesidade Grau 2;" +calculo;
            return; 
        }
            resultado.innerHTML = "Obesidade Grau 3;" +calculo; 
        
}