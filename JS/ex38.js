//36) Crie uma função que receba um array de números e retorne a soma de todos os elementos pares.
function somaPar(){
    let string = document.getElementById("numero").value.split(",")
    let array2 = []
    let soma =  0
    for (let i = 0; i <= string.length; i++) {
        if (string[i] % 2 === 0){
            let numero = Number(string[i].trim())
            array2.push(numero)
        }
        else{}
    }
    for (let i = 0; i < array2.length; i++){
        soma += array2[i];
    }
    resultado.textContent = "A soma entre os pares é de " + soma
}