const arraypar = (input) => {
    let array1 = input.split(",")
    let array2 = []
    for (let i = 0; i <= array1.length; i++){
        if (array1[i] % 2 == 0){
            array2.push(array1[i])
        }
    }
    resultado.textContent = "Pares:" + array2 
}