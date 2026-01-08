let tasksData = {};

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const columns = [todo, progress, done];

let dragElement = null;

// Edit related variables
let editTask = null;
let isEditMode = false;

function addTask(title, desc, column) {
    const div = document.createElement("div");

    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML = `
        <h2>${title}</h2>
        <p>${desc}</p>
        <div class="actions">
            <button class="edit"><i class="ri-edit-2-fill"></i></button>
            <button class="delete"><i class="ri-delete-bin-2-fill"></i></button>
        </div>
    `;

    column.appendChild(div);

    // Delete
    const deleteButton = div.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        div.remove();
        updateTaskCount();
    });

    // Edit
    const editButton = div.querySelector(".edit");
    editButton.addEventListener("click", () => {
        isEditMode = true;
        editTask = div;

        document.querySelector("#task-title-input").value =
            div.querySelector("h2").innerText;

        document.querySelector("#task-desc-input").value =
            div.querySelector("p").innerText;

        modal.classList.add("active");
    });

    // Drag
    div.addEventListener("drag", () => {
        dragElement = div;
    });

    return div;
}

function updateTaskCount() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        tasksData[col.id] = Array.from(tasks).map(t => ({
            title: t.querySelector("h2").innerText,
            desc: t.querySelector("p").innerText
        }));

        localStorage.setItem("tasks", JSON.stringify(tasksData));
        count.innerText = tasks.length;
    });
}

// Load from LocalStorage
if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));

    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            addTask(task.title, task.desc, column);
        });
    }
    updateTaskCount();
}

// Drag events on columns
function addDragEventOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });

    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        column.appendChild(dragElement);
        column.classList.remove("hover-over");
        updateTaskCount();
    });
}

addDragEventOnColumn(todo);
addDragEventOnColumn(progress);
addDragEventOnColumn(done);

// Modal related logic
const toggleModalButton = document.querySelector("#toggle-modal");
const modalBg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const addTaskButton = document.querySelector("#add-new-task");

toggleModalButton.addEventListener("click", () => {
    modal.classList.toggle("active");
    isEditMode = false;
    editTask = null;
});

modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
    isEditMode = false;
    editTask = null;
});

// Add / Update task
addTaskButton.addEventListener("click", () => {
    const taskTitle = document.querySelector("#task-title-input").value.trim();
    const taskDesc = document.querySelector("#task-desc-input").value.trim();

    if (taskTitle === "" || taskDesc === "") {
        alert("Please fill out both fields!");
        return;
    }

    if (isEditMode && editTask) {
        editTask.querySelector("h2").innerText = taskTitle;
        editTask.querySelector("p").innerText = taskDesc;
        isEditMode = false;
        editTask = null;
    } else {
        addTask(taskTitle, taskDesc, todo);
    }

    updateTaskCount();
    modal.classList.remove("active");

    document.querySelector("#task-title-input").value = "";
    document.querySelector("#task-desc-input").value = "";
});
