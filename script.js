const hourSpan = document.querySelector('#hour');
const minuteSpan = document.querySelector('#min');
const secondSpan = document.querySelector('#sec');
const millisecondSpan = document.querySelector('#milli');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
let intervalId;
let startTime;
let elapsedTime = 0;

function startTimer() {
	if (startButton.textContent === 'Start') {
		startButton.textContent = 'Stop';
		startTime = new Date() - elapsedTime; // time when start button is clicked
		intervalId = setInterval(() => {
			elapsedTime = new Date() - startTime; // time elapsed since start button is clicked
			updateTime();
		}, 1);
	}
	else {
		startButton.textContent = 'Start';
		clearInterval(intervalId);
	}
}

function resetTimer() {
	clearInterval(intervalId);
	startButton.textContent = 'Start';
	elapsedTime = 0;
	updateTime();
}

function updateTime() {
	const time = new Date(elapsedTime);
	hourSpan.textContent = time.getUTCHours().toString().padStart(2, '0');
	minuteSpan.textContent = time.getUTCMinutes().toString().padStart(2, '0');
	secondSpan.textContent = time.getUTCSeconds().toString().padStart(2, '0');
	millisecondSpan.textContent = time.getUTCMilliseconds().toString().padStart(3, '0');
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
