let image = document.querySelector("img");
let love = document.querySelector("#love");

image.addEventListener("click", () => {
    love.style.transform = `translate(-50%, -50%) scale(1)`; 
    love.style.opacity = 1;

    setTimeout(() => {
        love.style.transform = `translate(-250%, -300%) scale(0)`;
        love.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
        love.style.transform = `translate(-50%, -50%) scale(0)`;
        love.style.opacity = 0;
    }, 1400);
})

let a = 10;
let b = 20;
console.log("sum " + a + " and " + b + " = " + a + b); 
console.log(`sum ${a} and ${b} = ${a + b}`);