let main = document.querySelector("main");
let btn = document.querySelector("button");

const texts = [
    "Azit is a frontend developer",
    "Hii... Rana",
    "JavaScript hates null",
    "HTML needs closing",
    "CSS is moody",
    "Async awaits nothing",
    "Semicolons optional chaos",
    "Developers fear deadlines",
    "Code works accidentally",
    "Bug fixed itself",
    "Tabs fight spaces",
    "Console logs everything",
    "Loops never ending",
    "Errors love weekends",
    "Syntax breaks quietly",
    "Deploy causes panic",
    "Cache never clears"
];

btn.addEventListener("click", function () {
let h1 = document.createElement("h1");

let text = Math.floor(Math.random()*texts.length);
let x = Math.random()*100;
let y = Math.random()*100;
let scl = Math.random()*2.5;
let rot = Math.floor(Math.random()*360);

h1.innerText= texts[text];
h1.style.position= "absolute";
h1.style.left = x + "%";
h1.style.top = y + "%";
h1.style.rotate = rot + "deg";
h1.style.scale = scl;
h1.style.whiteSpace = "nowrap"

main.appendChild(h1);
})