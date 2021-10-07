fetch('http://api.weatherapi.com/v1/forecast.json?key=6d6d16369d2f4aeca98190312211207&q=Louisville&days=3&aqi=no&alerts=no')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById('2img_2').src = data.forecast.forecastday[2].day.condition.icon

    })
    .catch(function (err) {
        document.getElementById('2img_2').innerHTML = 'Fail';
    });
