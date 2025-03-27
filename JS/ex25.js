const areacirculo = (raio) => {
    let areacirculo = Math.PI*raio*raio;
    if (raio <= 0){
        resultado.textContent = "Número inválido: o raio não pode ser nulo ou negativo"
    } else {
        resultado.textContent = "A área do seu círculo é de aproximadamente " + areacirculo.toFixed(2) + " unidades de área";
    }
}