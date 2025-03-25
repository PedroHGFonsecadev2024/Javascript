function verificarNumero(){
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    
    if (numero > 0){
        resultado.textContent = "Número positivo";
    }
    else if(numero < 0){
        resultado.textContent = "Número negativo"
    }else{
        resultado.textContent = "Nem positivo nem negativo"
    }

}