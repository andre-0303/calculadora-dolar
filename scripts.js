function converter() {
    event.preventDefault();

    //pegar o valor do input 
    const valorReal = parseFloat(document.getElementById('valorReal').value);

    //validar input 
    if (isNaN(valorReal) || valorReal <= 0) {
        alert('Por favor insira um número válido em reais.');
        return;
    }

    //taxa de câmbio fixa (exemplo: 1 USD = 5 BRL)
    const taxaCambio = 5.763;

    //calcular o valor em dólar
    const valorDolar = (valorReal / taxaCambio).toFixed(2);

    //atualiza o resultado no DOM
    document.getElementById('resultado').textContent = 
    `${valorReal.toFixed(2)} BRL = ${valorDolar} USD`;
}

function limpar() {
    event.preventDefault();

    //limpar o valor do input 
    document.getElementById('valorReal').value = '';

    //limpar resultado 
    document.getElementById('resultado').textContent = '';
}