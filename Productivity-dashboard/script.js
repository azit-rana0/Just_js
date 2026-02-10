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


function weatherFunctionality() {
    let header1Time = document.querySelector(".header1 h1");
    let header1Date = document.querySelector(".header1 h2");
    let header1City = document.querySelector(".header1 h4");
    let header2Temp = document.querySelector(".header2 h2");
    let header2C = document.querySelector(".header2 p");
    let header2Condition = document.querySelector(".header2 h4");
    let precipitation = document.querySelector(".header2 .precipitation");
    let humidity = document.querySelector(".header2 .humidity");
    let wind = document.querySelector(".header2 .wind");
    let citySearchBtn = document.querySelector("#btn");
    let cityInputBox = document.querySelector("#cityInput");

    async function weatherAPICall(cityInput = "Jharkhand") {
        let apiKey = "ac71385a89e34227913101131262001";

        try {
            let response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`
            );

            let data = await response.json();

            if (data.error) {
                alert("❌ City nahi mili, spelling check karo bhai");
                return;
            }

            header1City.innerText = data.location.name;
            header2Temp.innerText = `${data.current.temp_c}`;
            header2C.innerHTML = `${"°C"}`
            header2Condition.innerText = data.current.condition.text;
            precipitation.innerText = `Wind Direction: ${data.current.wind_dir}`;
            humidity.innerText = `Humidity: ${data.current.humidity}%`;
            wind.innerText = `Wind: ${data.current.wind_kph} km/h`;

        } catch (error) {
            alert("⚠️ Network issue, internet check karo");
            console.error(error);
        }
    }

    citySearchBtn.addEventListener("click", () => {
        let cityInput = cityInputBox.value.trim();
        if (cityInput === "") {
            alert("Bhai city ka naam likh 😅");
            return;
        }
        weatherAPICall(cityInput);
    });

    cityInputBox.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            citySearchBtn.click();
        }
    });

    function updateImageByTime() {
        let hour = new Date().getHours();
        let weatherImg = document.querySelector("#weatherImg");

        if (hour >= 5 && hour < 10) {
            weatherImg.src = "https://i.pinimg.com/1200x/7a/76/1d/7a761d0c69df3858fceff11ef8708f48.jpg";
        }
        else if (hour >= 10 && hour < 15) {
            weatherImg.src = "https://i.pinimg.com/1200x/ee/14/5d/ee145df6c77b827301f52828dc7a7c3c.jpg";
        }
        else if (hour >= 15 && hour < 18) {
            weatherImg.src = "https://i.pinimg.com/1200x/07/45/a4/0745a4cbe78ddda25a5d5a91e6425e06.jpg";
        }
        else {
            weatherImg.src = "https://i.pinimg.com/736x/6a/a7/cb/6aa7cb8fc79d333734460e387188f2ab.jpg";
        }
    }
    updateImageByTime()

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
    setInterval(() => {
        timeDate()
    }, 1000);
}
weatherFunctionality()


function dailyGoal() {
    let form = document.querySelector(".addGoal form");
    let goalInput = document.querySelector(".addGoal form textarea");
    let goalCheckbox = document.querySelector(".addGoal form #check");

    let currentTask = JSON.parse(localStorage.getItem("currentGoal")) || [];

    function renderTask() {

        let allGoals = document.querySelector(".allGoals");

        let sum = "";

        currentTask.forEach((elem, idx) => {
            sum += `
                <div class="goal">
                    <div class="goal-wrapper">
                        <div class="goal-details">
                            <h2>${elem.goal} <span class=${elem.imp}>imp</span></h2> 
                        </div>
                        <button id=${idx}>Mark as Completed</button>
                    </div>
                </div>
            `
        });

        allGoals.innerHTML = sum;

        localStorage.setItem("currentGoal", JSON.stringify(currentTask));

        document.querySelectorAll(".goal button").forEach((btn) => {
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
                goal: goalInput.value,
                imp: goalCheckbox.checked
            }
        )

        renderTask();

        goalInput.value = "";
        goalCheckbox.checked = false;

    });
}
dailyGoal();


function changeTheme() {
    let theme = document.querySelector(".theme")
    let rootElement = document.documentElement
    let flag = 0
    theme.addEventListener("click", () => {
        if (flag == 0) {
            rootElement.style.setProperty('--pri', '#f8f4e1')
            rootElement.style.setProperty('--sec', '#222831')
            rootElement.style.setProperty('--tri-1', '#948972')
            rootElement.style.setProperty('--tri-2', '#393e42')
            flag = 1
        } else if (flag == 1) {
            rootElement.style.setProperty('--pri', '#f8f4e1')
            rootElement.style.setProperty('--sec', '#030303')
            rootElement.style.setProperty('--tri-1', '#d4c9be')
            rootElement.style.setProperty('--tri-2', '#123458')
            flag = 2
        } else if (flag = 2) {
            rootElement.style.setProperty('--pri', '#f8f4e1')
            rootElement.style.setProperty('--sec', '#381c0a')
            rootElement.style.setProperty('--tri-1', '#feba17')
            rootElement.style.setProperty('--tri-2', '#74512d')
            flag = 0
        }

    })
}
changeTheme()


