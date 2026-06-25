const difficultySelect = document.getElementById("difficultySelect");
const colorSelect = document.getElementById("colorSelect");
const startBtn = document.getElementById("startBtn");
const setupMenu = document.getElementById("setupMenu");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("scoreDisplay");
const timeDisplay = document.getElementById("timeDisplay");
const targetBox = document.getElementById("targetBox");

let score = 0;
let timeLeft = 0;
let timerId = null;
let currentMaxTime = 0;

const difficultySettings = {
    lazy: { time: 10, size: 60 },
    normal: { time: 5, size: 40 },
    hard: { time: 1, size: 20 }
};

startBtn.addEventListener("click", function() {
    const diff = difficultySelect.value;
    const color = colorSelect.value;

    if (diff === "" || color === "") {
        return;
    }

    const settings = difficultySettings[diff];
    currentMaxTime = settings.time;
    
    targetBox.style.width = settings.size + "px";
    targetBox.style.height = settings.size + "px";
    targetBox.style.backgroundColor = color;

    setupMenu.style.display = "none";
    gameArea.style.display = "block";
    targetBox.style.display = "block";

    score = 0;
    scoreDisplay.textContent = score;

    moveBox();
    startTimer();
});

targetBox.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
    startTimer();
});

function moveBox() {
    const boxSize = parseInt(targetBox.style.width);
    const maxX = window.innerWidth - boxSize;
    const maxY = window.innerHeight - boxSize;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    targetBox.style.left = randomX + "px";
    targetBox.style.top = randomY + "px";
}

function startTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
    }

    timeLeft = currentMaxTime;
    timeDisplay.textContent = timeLeft;

    timerId = setInterval(function() {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            endGame();
        }
    }, 1000);
}

function endGame() {
    targetBox.style.display = "none";
    alert("Game over! Your score is " + score + ", congratulations! Please, reload the page to start a new game.");
}