let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.getElementById("display");
let int = null;
let lapTimes = [];
let lapCounter = 1;

document.getElementById("start-btn").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-btn").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-btn").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    updateDisplay();
    lapTimes = [];
    lapCounter = 1;
    updateLapTimes();
});

document.getElementById("lap-btn").addEventListener("click", () => {
    recordLapTime();
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    updateDisplay();
}

function recordLapTime() {
    lapTimes.push(getFormattedTime());
    updateLapTimes();
    lapCounter++;
}

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10
            ? "00" + milliseconds
            : milliseconds < 100
            ? "0" + milliseconds
            : milliseconds;

    timeRef.textContent = `${h} : ${m} : ${s} : ${ms}`;
}

function updateLapTimes() {
    const lapTimesList = document.getElementById("lapTimes");
    lapTimesList.innerHTML = "";
    lapTimes.forEach((lap, index) => {
        const li = document.createElement("li");
        li.textContent = `Lap ${index + 1}: ${lap}`;
        lapTimesList.appendChild(li);
    });
}

function getFormattedTime() {
    const date = new Date(0);
    date.setMilliseconds(date.getMilliseconds() + lapCounter * 10);
    return date.toISOString().substr(11, 11);
}
