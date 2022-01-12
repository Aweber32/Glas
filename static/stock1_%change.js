function stock1_p() {
    var stock1 = document.getElementById('stock1').textContent;
    var url = 'https://finnhub.io/api/v1/quote?symbol=' + stock1 + '&token=c3qrm8aad3i98m4ia7kg'
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var current_p = data.c;
            var open_p = data.o;
            var dif = current_p - open_p;
            if (current_p > open_p) {
                var per_change = ((current_p - open_p) / open_p) * 100;
                document.getElementById('stock1_%').style = 'color: green;'
            }
            else {
                var per_change = "-" + ((open_p - current_p) / open_p) * 100;
                document.getElementById('stock1_%').style = 'color: red;'
            }
            document.getElementById('stock1_%').innerHTML = '$' + dif.toFixed(2) + ' ' + '(' + per_change.toFixed(2) + '%' + ')'
        })
        .catch(function (err) {
            document.getElementById('stock1_%').innerHTML = 'Loading...'
        });
}

setTimeout(stock1_p, 11000)
setInterval(stock1_p, 300000)