"use strict"

let selectCurrency = document.querySelector('.select-currency-option');
let currencyInfoSpan = document.querySelector('.currency-info');
let amountConvertAfter = document.querySelector('.amount-convert-after-inp');
let onButtonClickToConvert = document.getElementById('click-convert-btn');
let currencySelected = selectCurrency.value;

selectCurrency.addEventListener("change", function () {
    currencySelected = this.value;
});

async function getConvertCurrency() {

    let response = await fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currencySelected}`)
    let question = await response.json();
    let result = await question.rates[0].mid
    const currencyConverted = result;
    setConvertCurrency(currencyConverted);

}

function setConvertCurrency(currencyConverted) {

    const amountConvertBefore = document.querySelector('.amount-convert-before-inp').value;

    if (currencySelected === 'eur') {
        amountConvertAfter.value = `${(amountConvertBefore * currencyConverted).toFixed(2)} PLN`;
    } else if (currencySelected === 'usd') {
        amountConvertAfter.value = `${(amountConvertBefore * currencyConverted).toFixed(2)} PLN`;
    } else if (currencySelected === 'chf') {
        amountConvertAfter.value = `${(amountConvertBefore * currencyConverted).toFixed(2)} PLN`;
    };

    currencyInfoSpan.innerHTML = "Aktualny kurs " + currencySelected.toUpperCase() + " = " + `${currencyConverted.toFixed(2)} PLN`;
};



