const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let para = document.querySelector("p");
let text = para.innerText;

let iteration = 0;
function randomText() {
    let newText = text.split("")
        .map((char, index) => {
            if (index < iteration) {
                return char;
            }
            return character[Math.floor(Math.random() * character.length)];
        })
        .join("");

    para.innerText = newText;

    if (iteration >= text.length) {
        clearInterval(int);
    }

    iteration += 0.2;
}

let int = setInterval(randomText, 50);


