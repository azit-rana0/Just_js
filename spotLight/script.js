document.addEventListener("mousemove", (e)=>{
    document.body.style.setProperty("--x", e.x + "px");
    document.body.style.setProperty("--y", e.y + "px");
});