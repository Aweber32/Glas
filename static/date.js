function getDate() {
    let currentDate = new Date();
    let dname = currentDate.getDay()
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    var month = {
        1: "January",
        2: "Febuary",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    }
    var day = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    }
    document.getElementById('date').innerHTML = day[dname] + ", " + month[cMonth] + " " + cDay + " " + cYear
}
setInterval(getDate, 60000)