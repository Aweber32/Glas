window.addEventListener('load', function stock1_p() {
    var stock2 = document.getElementById('stock2').textContent;
    var url = 'https://finnhub.io/api/v1/quote?symbol=' + stock2 + '&token=c3qrm8aad3i98m4ia7kg'
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
                document.getElementById('stock2_%').style = 'color: green;'
            }
            else {
                var per_change = "-" + ((open_p - current_p) / open_p) * 100;
                document.getElementById('stock2_%').style = 'color: red;'
            }
            document.getElementById('stock2_%').innerHTML = '$' + dif.toFixed(2) + ' ' + '(' + per_change.toFixed(2) + '%' + ')'
        })
        .catch(function (err) {
            document.getElementById('stock2_%').innerHTML = 'Fail'
        });
})