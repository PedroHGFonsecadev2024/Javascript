function numImpar(){
    let resultado = document.getElementById("resultado");
    let numImpar = "";
    for (let i = 0; i <= 10; i++){
        if (i % 2 !== 0){
            numImpar += i + "<br>"
        } else {

        }
        resultado.innerHTML = numImpar;
    }
}
