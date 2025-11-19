let main = document.querySelector("main");
let btn = document.querySelector("button");


btn.addEventListener("click", function () {
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let h = Math.random() * 200;
    let w = Math.random() * 200;
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    let rot = Math.floor(Math.random() * 360);
    
    let div = document.createElement("div");
    div.style.height = h + "px";
    div.style.width = w + "px";
    div.style.position = "absolute";
    div.style.left = x + "%";
    div.style.top = y + "%";
    div.style.rotate = rot + "deg";
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    main.appendChild(div);
    
    btn.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
})