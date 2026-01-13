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

    let currentTask = [];

    if (localStorage.getItem("currentTask")) {
        currentTask = JSON.parse(localStorage.getItem("currentTask"));
    } else {
        console.log("Task list is Empty!");
    }

    function renderTask() {

        let allTask = document.querySelector(".allTask");

        let sum = "";

        currentTask.forEach((elem, idx) => {
            sum +=
                `
        <div class="task">
        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
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