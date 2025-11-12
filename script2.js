// 1 - print numbers from 1 to 10  loop from 1 to 10 and print each numbers .
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 2 - print only even numbers from 1 to 20 use loop and conditions to print even ones .
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i, "even number")
    } else console.log(i, "odd number")
}

// 3 - print numbers from 10 to 1 reverse loop with a decrement .
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// 4 - print the word "yes" 5 times repeat using a loop
for (let i = 1; i <= 5; i++) {
    console.log("yes")
}

// 5 - print whether numbers from 1 to 10 are even or odd  for each number check :"even", else -> "odd"
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i, "even number")
    } else console.log(i, "odd number")
}

// 6 - ask user for a number and say if its  positive or negative  use prompt() and a condition
let userNumber = prompt("Enter Numbrer?")
if (userNumber === null || userNumber.trim() === "") {
    console.log("Please enter a number");
} else {
    userNumber = Number(userNumber)
    if (isNaN(userNumber)) {
        console.log("That's not a valid number")
    } else if (userNumber >= 0) {
        console.log("+ve Number")
    } else {
        console.log("-ve Number")
    }
}

