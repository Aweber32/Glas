fetch('http://worldtimeapi.org/api/ip')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var day = data.day_of_week
        var day1 = day + 1
        var day2 = day + 2
        
        var dict = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wedensday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
            7: 'Sunday',
            8: 'Monday',
            9: 'Tuesday',
        }
        document.getElementById('2_day_forecast').innerHTML = dict[day1] + '<br><br>' + dict[day2];

    })
    .catch(function (err) {
        document.getElementById('2_day_forecast').innerHTML = 'Fail';
    });