const time = document.getElementById('time');
const timeFormat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded',() => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

        // Convert hours to 12-hour format
        let ampm = hr >= 12 ? 'PM' : 'AM';
        hr = hr % 12;
        hr = hr ? hr : 12; // Handle midnight (0 hours)

    hr = hr<10 ? `0${hr}` : hr;
    mins = mins<10 ? `0${mins}` : mins;
    secs = secs<10 ? `0${secs}` : secs;

    time.innerHTML = `${hr} : ${mins} : ${secs}`
    timeFormat.innerHTML = ampm;
    // timeFormat.innerHTML = hr>12 ? "PM" : "AM";
    // console.log("hours" + hr + "mins" + mins + "secs" + secs);
}

