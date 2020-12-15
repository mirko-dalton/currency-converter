"use strict"

let selectCurrency = document.querySelector('.select-currency-option');
let currencyInfoSpan = document.querySelector('.currency-info');
let amountConvertAfter = document.querySelector('.amount-convert-after-inp');
let onButtonClickToConvert = document.querySelector('.click-convert-btn');
let currencySelected = selectCurrency.value;

async function getConvertCurrency() {

    let response = await fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currencySelected}`)
    let question = await response.json();
    let result = await question.rates[0].mid;
    setConvertCurrency(result);

}

function setConvertCurrency(result) {

    const amountConvertBefore = document.querySelector('.amount-convert-before-inp').value;

    selectCurrency.addEventListener("change", function () {
        currencySelected = this.value;
    });

    currencyInfoSpan.innerHTML = currencySelected.toUpperCase() + " = " + `${result.toFixed(2)} PLN`;

    if (currencySelected === 'eur') {
        amountConvertAfter.value = `${(amountConvertBefore * result).toFixed(2)} PLN`;
    } else if (currencySelected === 'usd') {
        amountConvertAfter.value = `${(amountConvertBefore * result).toFixed(2)} PLN`;
    } else if (currencySelected === 'chf') {
        amountConvertAfter.value = `${(amountConvertBefore * result).toFixed(2)} PLN`;
    };
};
