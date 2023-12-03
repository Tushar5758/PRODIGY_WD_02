let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let laps = [];

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        isRunning = true;
        document.querySelector('button:nth-of-type(1)').disabled = true;
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
    document.querySelector('button:nth-of-type(1)').disabled = false; 
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = [];
    updateDisplay();
    document.querySelector('button:nth-of-type(1)').disabled = false; 
    document.querySelector('.laps').innerHTML = '';
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

function lap() {
    const lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    laps.push(lapTime);
    const lapsContainer = document.querySelector('.laps');
    const lapElement = document.createElement('div');
    lapElement.textContent = `Lap ${laps.length}: ${lapTime}`;
    lapsContainer.appendChild(lapElement);
}
