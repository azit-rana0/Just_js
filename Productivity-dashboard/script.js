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