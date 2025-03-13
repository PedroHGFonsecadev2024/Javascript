function parimpar(){
    let userInput = parseFloat(document.getElementById("parimparinput").value);
    if (userInput % 2 == 0){
        document.getElementById("parimpar").textContent = "Este número é: par";
    } else if (userInput % 2 != 0){
        document.getElementById("parimpar").textContent = "Este número é: impar"
    }
}
