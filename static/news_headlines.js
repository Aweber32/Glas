function news_headlines(x) {
    var url = 'https://gnews.io/api/v4/top-headlines?&lang=en&country=us' + '&token=9cc762ad40b9083ff60114b901ecec5d'
    var math = Math.floor(Math.random() * 9);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById('news_headline').innerHTML = '<h6>' + data.articles[math].title + '</h6>' + '\n' + '<h3>' + data.articles[math].description + '<h3>'

        })
        .catch(function (err) {
            document.getElementById('news_headline').innerHTML = 'Fail'
        });
}

setTimeout(news_headlines, 10000)
setInterval(news_headlines, 900000)
