const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
let stopwatch;
let second = 0;

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