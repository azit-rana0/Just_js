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
    console.log(today);

    let storedData = JSON.parse(localStorage.getItem("dayPlanData"));
    console.log(storedData);
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