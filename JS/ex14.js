function verificarIdade(){
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");
    
    if (idade >= 18){
        resultado.textContent = "Maior de idade";
    }
    else{
        resultado.textContent = "Menor de idade"
    }

}