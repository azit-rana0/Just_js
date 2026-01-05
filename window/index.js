const menu = document.querySelector("#context-menu");
const windowScreen = document.querySelector("#window-screen");
const windowLogo = document.querySelector("#window-logo");

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    menu.style.display = "block";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
});

document.addEventListener("click", () => {
    // context menu band
    menu.style.display = "none";

    // start menu band
    windowScreen.classList.remove("active");
});

// window logo click
windowLogo.addEventListener("click", (e) => {
    e.stopPropagation();        // document click se bachao
    menu.style.display = "none"; // right-click menu band
    windowScreen.classList.toggle("active");
});

// start menu ke andar click
windowScreen.addEventListener("click", (e) => {
    e.stopPropagation();
});

// context menu ke andar click
menu.addEventListener("click", (e) => {
    e.stopPropagation();
});
