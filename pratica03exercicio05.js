function calcularVolume() {
    const raio = parseFloat(document.getElementById('raioEsfera').value);
    const volume = (4/3) * Math.PI * (raio ** 3);
    document.getElementById('resultadoVolume').innerText = `Volume: ${volume.toFixed(2)}`;
}