"use strict"

let selectCurrency = document.querySelector('.select-currency-option');
let currencyInfo = document.querySelector('.currency-info');
let amountConvertAfter = document.querySelector('.amount-convert-after-inp');
let onButtonClickToConvert = document.getElementById('click-convert-btn');
let currencySelected = selectCurrency.value;

selectCurrency.addEventListener('change', function () {
    currencySelected = this.value;
});

async function getConvertCurrency() {

    fetch('https://api.nbp.pl/api/exchangerates/rates/a/' + currencySelected)
        .then(resp => resp.json())
        .then(resp => {
            resp.rates[0].mid;
            resp.rates[0].effectiveDate;
            let result = resp.rates[0].mid;
            let date = resp.rates[0].effectiveDate;
            const currencyResult = result;
            const currencyDate = date;
            calculateConvertCurrency(currencyResult, currencyDate);
        })
        .catch(error => error + alert('Błąd podczas pobierania danych'));

};

function calculateConvertCurrency(currencyResult, currencyDate) {

    const amountConvertBefore = document.querySelector('.amount-convert-before-inp').value;

    if (amountConvertBefore.length < 1 || amountConvertBefore < 0 || amountConvertBefore == 0) {
        currencyInfo.innerHTML = 'Podaj sumę do przeliczenia!!';
        amountConvertAfter.value = '';
        return;
    };

    if (currencySelected === 'eur') {
        amountConvertAfter.value = (amountConvertBefore * currencyResult).toFixed(2) + ' PLN';
    } else if (currencySelected === 'usd') {
        amountConvertAfter.value = (amountConvertBefore * currencyResult).toFixed(2) + ' PLN';
    } else if (currencySelected === 'chf') {
        amountConvertAfter.value = (amountConvertBefore * currencyResult).toFixed(2) + ' PLN';
    };
    currencyInfo.innerHTML = 'Aktualny kurs ' + currencySelected.toUpperCase() + ' na dzien ' + currencyDate + ' = ' + currencyResult.toFixed(2) + ' PLN';

};
