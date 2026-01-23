function openFeatures() {
    let allElem = document.querySelectorAll(".elem")
    let fullElemPage = document.querySelectorAll(".fullElem");
    let fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

    allElem.forEach((elem) => {
        elem.addEventListener("click", () => {
            fullElemPage[elem.id].style.display = "block";
        });
    });

    fullElemPageBackBtn.forEach((back) => {
        back.addEventListener("click", () => {
            fullElemPage[back.id].style.display = "none";
        });
    });
};
openFeatures();

function todoList() {
    let form = document.querySelector(".addTask form");
    let taskInput = document.querySelector(".addTask form #taskInput");
    let taskDetailsInput = document.querySelector(".addTask form textarea");
    let taskCheckbox = document.querySelector(".addTask form #check");

    let currentTask = JSON.parse(localStorage.getItem("currentTask")) || [];

    function renderTask() {

        let allTask = document.querySelector(".allTask");

        let sum = "";

        currentTask.forEach((elem, idx) => {
            sum += `
                <div class="task">
                    <div class="task-details">
                        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                        <details>
                            <summary>Click to view more details:</summary>
                            <p>${elem.details}</p>
                        </details>
                    </div>
                    <button id=${idx}>Mark as Completed</button>
                </div>
            `
        });

        allTask.innerHTML = sum;

        localStorage.setItem("currentTask", JSON.stringify(currentTask));

        document.querySelectorAll(".task button").forEach((btn) => {
            btn.addEventListener("click", () => {
                currentTask.splice(btn.id, 1);
                renderTask();
            })
        })

    }
    renderTask()

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        currentTask.push(
            {
                task: taskInput.value,
                details: taskDetailsInput.value,
                imp: taskCheckbox.checked
            }
        )

        renderTask();

        taskInput.value = "";
        taskDetailsInput.value = "";
        taskCheckbox.checked = false;

    });
}
todoList();

function dailyPlanner() {
    let dayPlanner = document.querySelector(".day-planner");

    // today's date (YYYY-MM-DD)
    const today = new Date().toISOString().split("T")[0];

    let storedData = JSON.parse(localStorage.getItem("dayPlanData"));
    let dayPlanData = {};

    // Date check (midnight expiry)
    if (storedData) {
        if (storedData.date !== today) {
            localStorage.removeItem("dayPlanData");
            dayPlanData = {};
        } else {
            dayPlanData = storedData.data || {};
        }
    }

    let hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`);

    let wholeDaySum = "";
    hours.forEach((elem, idx) => {
        let savedData = dayPlanData[idx] || "";
        wholeDaySum += `
        <div class="day-planner-time">
            <p>${elem}</p>
            <input id="${idx}" type="text" placeholder="..." value="${savedData}">
        </div>`;
    });

    dayPlanner.innerHTML = wholeDaySum;

    let dayPlannerInput = document.querySelectorAll(".day-planner input");
    dayPlannerInput.forEach((elem) => {
        elem.addEventListener("input", () => {
            dayPlanData[elem.id] = elem.value;

            // save with date
            localStorage.setItem(
                "dayPlanData",
                JSON.stringify({
                    data: dayPlanData,
                    date: today
                })
            );
        });
    });
}
dailyPlanner();

function motivationalQuote() {
    let motivationQuote = document.querySelector(".motivation-2 h1");
    let motivationAuthor = document.querySelector(".motivation-3 h2");

    async function fetchQuote() {
        let response = await fetch("https://dummyjson.com/quotes/random");
        let data = await response.json();

        motivationQuote.innerHTML = data.quote;
        motivationAuthor.innerHTML = `—  ${data.author}`;
    }

    fetchQuote()
}
motivationalQuote()

function pomodoroTimer() {
    let timer = document.querySelector(".pomo-timer h1");
    let startBtn = document.querySelector(".pomo-timer .start-timer");
    let pauseBtn = document.querySelector(".pomo-timer .pause-timer");
    let resetBtn = document.querySelector(".pomo-timer .reset-timer");
    let session = document.querySelector(".pomodoro-fullpage .session");

    let isWorkSession = true;
    let timerInterval = null;
    let totalSeconds = 25 * 60;

    function updateTimer() {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        timer.innerHTML = `${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`
    }

    function startTimer() {
        clearInterval(timerInterval);
        if (isWorkSession) {

            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    updateTimer();
                } else {
                    isWorkSession = false;
                    clearInterval(timerInterval);
                    timer.innerHTML = "05:00";
                    session.innerHTML = "Take a Break";
                    session.style.backgroundColor = "var(--blue)";
                    totalSeconds = 5 * 60;
                }
            }, 1000);
        } else {

            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    updateTimer();
                } else {
                    isWorkSession = true;
                    clearInterval(timerInterval);
                    timer.innerHTML = "25:00";
                    session.innerHTML = "Work Session";
                    session.style.backgroundColor = "var(--green)";
                    totalSeconds = 25 * 60;

                }
            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        totalSeconds = 25 * 60;
        clearInterval(timerInterval);
        updateTimer();
    }

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);
}
pomodoroTimer();

let header1Time = document.querySelector(".header1 h1");
let header1Date = document.querySelector(".header1 h2");
let header1City = document.querySelector(".header1 h4");


let city = "Mumbai";
let dat = null;
async function weatherAPICall(city) {
    let apiKey = "ac71385a89e34227913101131262001";
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    let data = await response.json()
    console.log(data.current.temp_c)
}
// weatherAPICall("vasai")

function timeDate() {
    let now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    const monthName = now.toLocaleDateString('en-US', { month: 'long' });

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // 0→12, 13→1, etc.
    header1Time.innerHTML = ` ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;

    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    header1Date.innerHTML = `${dayOfWeek}, ${day.toString().padStart(2, '0')} ${monthName} ${year.toString().padStart(4, '0')}`


}
timeDate()

// header1City.innerHTML = `Mumbai`;
