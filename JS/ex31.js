function forOf(){
    const numeros = [1,2,3,4,5];
            let resultadoDiv = document.getElementById("resultado");
            let resultadoDiv_impar = document.getElementById("resultado_impar");
            let resultadoDiv_par = document.getElementById("resultado_par");


            let output = "";
            let output_impar = "";
            let output_par = "";

            for(const numero of numeros){
                output += numero + "<br>";
                if(numero % 2 == 0){
                    output_par += numero + " - ";
                }else{
                    output_impar += numero + " - ";
                }

            }
            resultadoDiv.innerHTML = output;
            resultadoDiv_impar.innerHTML = output_impar;
            resultadoDiv_par.innerHTML = output_par;
}