let request = require('request');
let rp = require('request-promise-native');

let URL_BTC_USD = 'https://www.bitstamp.net/api/ticker/';
let URL_BTC_EUR = 'https://www.bitstamp.net/api/v2/ticker/btceur';
let URL_LTC_EUR = 'https://www.bitstamp.net/api/v2/ticker/ltceur';
let URL_LTC_USD = 'https://www.bitstamp.net/api/v2/ticker/ltcusd';

function extractField(field, body) {
    //console.log('body:', body);
    let info = JSON.parse(body);

    //console.log("info: ", info);

    let value = info['last'];
    //console.log(`${field}: ${value}`);

    return value;
}

function getFormattedData(){

    var btcUsd = "";
    var btcEur = "";
    var ltcEur = "";

    rp(URL_BTC_USD)

        .then(function (body) {
            btcUsd = extractField("last", body);
            return rp(URL_BTC_EUR);
        })

        .then(function (body) {
            btcEur = extractField("last", body);

            return rp(URL_LTC_USD);

        })
        .then(function (body) {
            ltcUsd = extractField("last", body);
            return rp(URL_LTC_EUR);
        })
        .then(function (body) {
            ltcEur = extractField("last", body);
        })
        .then(function(res) {

            let output = `BTC \$${btcUsd}/€${btcEur} | LTC \$${ltcUsd}/€${ltcEur} `;
            console.log(output);
        })

        .catch(function (err) {
            // Crawling failed...
            console.log(err);
        });
}


/*
 *
 */
getFormattedData();