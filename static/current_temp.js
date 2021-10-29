function cur_temp() {
    fetch('https://api.weatherapi.com/v1/current.json?key=6d6d16369d2f4aeca98190312211207&q=Louisville&aqi=no')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var c = data.current.temp_f
            document.getElementById('current_temp').innerHTML = c.toFixed(0) + " F";

        })
        .catch(function (err) {
            document.getElementById('current_temp').innerHTML = 'Fail';
        });
}
setTimeout(cur_temp, 10000)
setInterval(cur_temp, 300000)




   


