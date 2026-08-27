function calcularArea() {
    const raio = parseFloat(document.getElementById('raio').value);
    const area = Math.PI * (raio ** 2);
    document.getElementById('resultadoArea').innerText = `Área: ${area.toFixed(2)}`;
}