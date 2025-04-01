function multiplo5(){
    resultado = document.getElementById("resultado")
    let contador = 0
    let multiplo5 = ""
    do{
        if (contador % 5 == 0){
            multiplo5 += contador + "<br>"
        }
        contador++
    }while (contador <= 100)
    resultado.innerHTML = multiplo5;
}