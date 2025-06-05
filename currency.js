const exchangeRates = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

function convertCurrency() {
    console.log("convertCurrency function called!"); // Debugging check
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    if (amount === "" || amount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid amount.";
        return;
    }

    let convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
