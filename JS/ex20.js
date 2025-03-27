function numPrimVer() {
    let num = parseInt(document.getElementById("numero").value);
    let primo = num > 1;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false;
            break;
        }
    }
    //operador ternário
    let resultado = primo ? "É primo" : "Não é primo";
    document.getElementById("resultado").textContent = resultado;
}
