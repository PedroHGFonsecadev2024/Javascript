function numPrimVer(){
    const numero = parseFloat(document.getElementById("numero").value) 
    let resultado = document.getElementById("resultado")
    for (let i = numero; i >= 1; i--){
        if (numero % i == 0){
            var contador = contador++
        }
    }
    console.log(contador)
    if (contador > 2){
        resultado.textContent = "Não é primo"
    } else if (contador = 2) {
        resultado.textContent = "É primo"
    }
}