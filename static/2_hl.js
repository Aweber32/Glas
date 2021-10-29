function high_low2() {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=6d6d16369d2f4aeca98190312211207&q=Louisville&days=3&aqi=no&alerts=no')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var day1h = data.forecast.forecastday[1].day.maxtemp_f
            var day1l = data.forecast.forecastday[1].day.mintemp_f
            var day2h = data.forecast.forecastday[2].day.maxtemp_f
            var day2l = data.forecast.forecastday[2].day.mintemp_f

            document.getElementById('2_day_hl').innerHTML = 'H' + day1h.toFixed(0) + '/' + 'L' + day1l.toFixed(0) + '<br><br>' + 'H' + day2h.toFixed(0) + '/' + 'L' + day2l.toFixed(0)

        })
        .catch(function (err) {
            document.getElementById('2_day_hl').innerHTML = 'Fail';
        });
}
setTimeout(high_low2, 10000)
setInterval(high_low2, 1800000)