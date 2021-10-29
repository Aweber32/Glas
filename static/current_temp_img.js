function cur_img() {
    fetch('https://api.weatherapi.com/v1/current.json?key=6d6d16369d2f4aeca98190312211207&q=Louisville&aqi=no')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("current_img").src = data.current.condition.icon;
        })
        .catch(function (err) {
            document.getElementById('current_img').innerHTML = 'Fail';
        });
}
setTimeout(cur_img, 10000)
setInterval(cur_img, 300000)