// Level 1 – Pure Beginner Practice
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

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

let userAge = prompt("Enter age?")
if (userAge === null || userAge.trim() === "") {
    console.log("Please enter a age");
} else {
    userAge = Number(userAge)
    if (isNaN(userAge)) {
        console.log("That's not a valid number age")
    } else if (userAge >= 18) {
        console.log("Eligible")
    } else {
        console.log("Not eligible")
    }
}

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.
for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`)
}

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
let count = 0;
for (let i = 1; i <= 15; i++) {
    if (i > 8) {
        count++
        console.log(i)
    }
}
console.log(count)

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
let pass = "azit-rana0";
let userPassword = prompt("Enter your Password?")
if (userPassword === null || userPassword.trim() === "") {
    console.error("Enter password bhai...")
} else {
    if (pass === userPassword) console.log("access")
    else console.log("not access")
}

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
let password = "rana";
let attempts = 0;
let userPass;
while (attempts <= 3) {
    userPass = prompt("Enter Password?");
    if (userPass === null || userPass.trim() === "") {
        console.error("Enter password bhai...");
        break;
    }
    else if (userPass === password) {
        console.log("correct");
        break;
    } else {
        attempts++;
        if (attempts === 3) {
            console.log("locked");
            break;
        } else {
            console.warn("Wrong password, try again...");
        }
    }
}


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
let userType = prompt("user typed....");
let countYes = 0;
while (userType !== "stop") {
    userType = prompt("user typed....");
    if (userType === null || userType.trim() === "") {
        console.error("Type something bhai...");
        break;
    } else if (userType === "yes") {
        countYes++;
    }
}
console.log(`you typed yes ${countYes} times`);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
}
console.log(sum);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
let askNumber = prompt("Enter number?")
while (true) {
    if (askNumber === null || askNumber.trim() === "") {
        console.log("number to enter ke le bhai...");
        break;
    }
    askNumber = Number(askNumber);
    if (askNumber % 2 === 0) {
        console.log("Even");
        break;
    } else if (isNaN(askNumber)) {
        console.log('Oye bhai number enter kr...');
        break;
    } else {
        askNumber = prompt("Enter number again (must be even):");
    }
}

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

