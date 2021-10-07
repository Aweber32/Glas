fetch('http://api.weatherapi.com/v1/current.json?key=6d6d16369d2f4aeca98190312211207&q=Louisville&aqi=no')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById("current_img").src = data.current.condition.icon;
    })
    .catch(function (err) {
        document.getElementById('current_img').innerHTML = 'Fail';
    });