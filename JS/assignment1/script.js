setInterval(showCurrentTime, 1000);

function showCurrentTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = hour > 12 ? "PM" : "AM";
    hour = hour > 12 ? hour - 12 : hour;

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

    document.getElementById("clock").innerHTML = currentTime;
}

showCurrentTime();