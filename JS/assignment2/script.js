const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
let stopwatch;
let second = 0;

/*
    LOGIC

    1.new Date(second) ... this gives a string of GMT 5.30 and every time we call it it increases the time based on 
    value of second.
    2.so at first value of second = 1000;
    3.now we get result as 05:30:01 i.e. 1 second has elapsed
    4.similarly if in loop second=5000 then result is 05:30:05 i.e 5 second have elapsed
    5.Now getUTCHours returns the hours elapsed,getUTCMin gives min and getUTCseconds give seconds; 
*/

function timeStart() {
    clearInterval(stopwatch);
    stopwatch = setInterval(() => {
        second += 1000;

        let currentDate = new Date(second);
        timer.innerHTML =
            ("0" + currentDate.getUTCHours()).slice(-2) +
            ":" +
            ("0" + currentDate.getUTCMinutes()).slice(-2) +
            ":" +
            ("0" + currentDate.getUTCSeconds()).slice(-2);
    }, 1000);
}

function timePaused() {
    clearInterval(stopwatch);
}

function timeReset() {
    setInterval(stopwatch);
    second = 0;
    timer.innerHTML = "HH:MM:SS";
}

play.addEventListener("click", () => {
    console.log("PLAY");
    timeStart();
});
pause.addEventListener("click", () => {
    console.log("PAUSE");
    timePaused();
});
reset.addEventListener("click", () => {
    console.log("RESET");
    timeReset();
});