let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let time = 20 + Math.floor(Math.random() * 100);
    console.log(`your file will be downloaded in ${time / 10} seconds`);
    btn.style.pointerEvents = "none";

    let grow = 0;
    let int = setInterval(() => {
        grow++;
        h1.innerHTML = grow + "%";
        inner.style.width = grow + "%";
    }, time);

    setTimeout(() => {
        clearInterval(int);
        btn.style.opacity = 0.6;
        btn.innerText = "Downloaded";
    }, time * 100);

})