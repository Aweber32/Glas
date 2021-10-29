function stock2_p() {
    var stock2 = document.getElementById('stock2').textContent;
    var url = 'https://finnhub.io/api/v1/quote?symbol=' + stock2 + '&token=c3qrm8aad3i98m4ia7kg'
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var p = data.c
            document.getElementById('stock2_p').innerHTML = "$" + p.toFixed(2)

        })
        .catch(function (err) {
            document.getElementById('stock2_p').innerHTML = 'Fail'
        });
}

setTimeout(stock2_p, 10000)
setInterval(stock2_p, 300000)