const body = document.querySelector("body");
const para = document.querySelector("p");

body.addEventListener("mousemove", (elem)=>{
    para.style.top = elem.y + "px";
    para.style.left = elem.x + "px";
});

document.addEventListener("mousemove", (e)=>{
    document.body.style.setProperty("--x", e.x + "px");
    document.body.style.setProperty("--y", e.y + "px");
});