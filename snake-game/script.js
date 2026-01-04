const board = document.querySelector(".board");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");
const startButton = document.querySelector(".btn-start");
const restartButton = document.querySelector(".btn-restart");

const hightScoreElement = document.querySelector("#high-score");
const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time");

const blockHeight = 35;
const blockWidth = 35;

let highScore = localStorage.getItem("highScore") || 0;
let score = 0;
let time = `00:00`;

hightScoreElement.innerText = highScore;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timeIntervalId = null;

let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };

const blocks = [];
let snake = [
    { x: 4, y: 4 },
    { x: 4, y: 3 },
    { x: 4, y: 2 },

];

let direction = "right";

// Create board
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
        blocks[`${row}-${col}`] = block;
    };
};

function render() {

    let head = null;

    blocks[`${food.x}-${food.y}`].classList.add("food");

    // move snake head logic
    if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 };
    }
    else if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 };
    }
    else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y };
    }
    else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y };
    }

    // wall collision logic
    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        clearInterval(intervalId);

        modal.style.display = "flex";
        startGameModal.style.display = "none";
        gameOverModal.style.display = "flex";

        return;
    }

    // self-collision logic
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            clearInterval(intervalId);
            modal.style.display = "flex";
            startGameModal.style.display = "none";
            gameOverModal.style.display = "flex";
            return;
        }
    }

    // food consume logic
    if (head.x === food.x && head.y === food.y) {
        blocks[`${food.x}-${food.y}`].classList.remove("food");
        food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
        blocks[`${food.x}-${food.y}`].classList.add("food");
        snake.unshift(head);

        score += 10;
        scoreElement.innerText = score;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore.toString());
        }
    }

    // move snake body logic
    snake.forEach(block => {
        blocks[`${block.x}-${block.y}`].classList.remove("fill");
    });

    snake.unshift(head);
    snake.pop();

    // move snake tail logic
    snake.forEach(block => {
        blocks[`${block.x}-${block.y}`].classList.add("fill");
    });

};

// Start Game logic
startButton.addEventListener("click", () => {
    modal.style.display = "none";
    intervalId = setInterval(() => { render() }, 200);
    timeIntervalId = setInterval(() => {
        let [mins, secs] = time.split(":").map(Number);
        if (secs == 59) {
            mins += 1;
            secs = 0;
        } else {
            secs += 1;
        }

        time = `${mins}:${secs}`;
        timeElement.innerText = time;
    }, 1000);
});

// Restart Game logic
restartButton.addEventListener('click', () => {
    direction = "right"
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    snake.forEach(block => {
        blocks[`${block.x}-${block.y}`].classList.remove("fill");
    });

    score = 0;
    time = `00:00`;

    scoreElement.innerText = score;
    timeElement.innerText = time;
    hightScoreElement.innerText = highScore;

    modal.style.display = "none";
    snake = [{ x: 4, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 2 }];
    food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
    intervalId = setInterval(() => { render() }, 200);
});

// Direction control logic
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && direction !== "down") {
        direction = "up";
    } else if (e.key === "ArrowDown" && direction !== "up") {
        direction = "down";
    } else if (e.key === "ArrowLeft" && direction !== "right") {
        direction = "left";
    } else if (e.key === "ArrowRight" && direction !== "left") {
        direction = "right";
    }
});