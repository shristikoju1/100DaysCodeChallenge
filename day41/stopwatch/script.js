let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.getElementById("display");
let int = null;
let lapTimes = [];
let startTime = null;

document.getElementById("start-btn").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
        startTime = Date.now(); // Record the start time of the stopwatch

});

document.getElementById("pause-btn").addEventListener("click", () => {
    clearInterval(int);
        startTime = null; // Reset the start time when paused

});

document.getElementById("reset-btn").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    updateDisplay();
    lapTimes = [];
    startTime = null; // Reset the start time when reset
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
    let h = hours.toString().padStart(2, '0');
    let m = minutes.toString().padStart(2, '0');
    let s = seconds.toString().padStart(2, '0');
    let ms = milliseconds.toString().padStart(3, '0');

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
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMilliseconds = milliseconds.toString().padStart(3, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
}
