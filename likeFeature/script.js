let image = document.querySelector("img");
let love = document.querySelector("#love");

image.addEventListener("dblclick", () => {
    love.style.transform = `translate(-50%, -50%) scale(1)`; 
    love.style.opacity = 1;

    setTimeout(() => {
        love.style.transform = `translate(-250%, -300%) scale(0)`;
        love.style.opacity = 0;
    }, 800);

    setTimeout(() => {
        love.style.transform = `translate(-50%, -50%) scale(0)`;
        love.style.opacity = 0;
    }, 1000);
})