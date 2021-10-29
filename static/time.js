function getTime() {
    let currentDate = new Date();
    var hour = currentDate.getHours();
    var min = currentDate.getMinutes()
    var day = 'AM';
    if (hour > 12) {
        day = 'PM'
        var PMhour = {
            13: '1',
            14: '2',
            15: '3',
            16: '4',
            17: '5',
            18: '6',
            19: '7',
            20: '8',
            21: '9',
            22: '10',
            23: '11',
            24: '12',
        }
        hour = PMhour[hour]
    }
    if (min < 10) {
        var min_0_9 = {
            0: '00',
            1: '01',
            2: '02',
            3: '03',
            4: '04',
            5: '05',
            6: '06',
            7: '07',
            8: '08',
            9: '09',
        }
        min = min_0_9[min]
    }
    let time = hour + ":" + min + " " + day;
    document.getElementById('current_time').innerHTML = time
}
setInterval(getTime, 10000)



