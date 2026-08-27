function calcularJuros() {
    const capital = parseFloat(document.getElementById('capital').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);
    
    const montante = capital * ((1 + taxa) ** tempo);
    document.getElementById('resultadoJuros').innerText = `Montante Final: R$ ${montante.toFixed(2)}`;
}