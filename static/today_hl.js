fetch('https://api.weatherapi.com/v1/forecast.json?key=6d6d16369d2f4aeca98190312211207&q=Louisville&days=1&aqi=no&alerts=no')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var h = data.forecast.forecastday[0].day.maxtemp_f;
        var l = data.forecast.forecastday[0].day.mintemp_f;
        document.getElementById('today_hl').innerHTML = "Today " + "H" + h.toFixed(0) + "/" + "L" + l.toFixed(0);
    })
    .catch(function (err) {
        document.getElementById('today_hl').innerHTML = 'Fail';
    });