const areacirculo = (raio) => {
    let areacirculo = Math.PI*raio*raio;
    resultado.textContent = "A área do seu círculo é de aproximadamente " + areacirculo.toFixed(2) + " unidades de área";
}