function numPar(){
    let resultado = document.getElementById("resultado");
    let numPar = "";
    let contador = 0;
    while (contador < 10){
        contador++;
        if (contador % 2 == 0){
            numPar += contador + "<br>";
        } 
    }
    resultado.innerHTML = numPar;
}