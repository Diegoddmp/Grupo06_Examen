document.getElementById("currency-converter").addEventListener("submit", async function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Introduce una cantidad válida.";
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const result = (amount * rate).toFixed(2);

        document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
        document.getElementById("result").innerText = "Error al obtener las tasas de cambio.";
    }
});
