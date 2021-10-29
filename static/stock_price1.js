function stock1_p() {
    var stock1 = document.getElementById('stock1').textContent;
    var url = 'https://finnhub.io/api/v1/quote?symbol=' + stock1 + '&token=c3qrm8aad3i98m4ia7kg'
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var p = data.c
            document.getElementById('stock1_p').innerHTML = "$" + p.toFixed(2)

        })
        .catch(function (err) {
            document.getElementById('stock1_p').innerHTML = 'Fail'
        });
}

setTimeout(stock1_p, 10000)
setInterval(stock1_p, 300000)