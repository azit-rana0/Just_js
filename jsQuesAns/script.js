//  1. Basic Operators: Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise)
// a. Create two numbers a + 10 and b = 3.
//    Perform and log: a + b, a - b, a * b, a / b, a % b.
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1

// b. Write: let x = 5; x = x = 3;
//    Now rewrite the same using +=.
//    Do the same for -=, *=, /=.
let x = 5;
x = x = 3;
x += 3;
x -= 3;
x *= 3;
x /= 3;
console.log(x);

// c. let count = 5;
//    Use count++ and log value before and after.
//    Repeat for count–.
let count = 5;
++count;
console.log("++count:", count);
count++;
console.log("count++:", count);
--count;
console.log("--count:", count);
count--;
console.log("count--:", count);

// d. Compare two values: 5 == “5ˮ and 5 === “5ˮ.
//    Observe difference.
console.log(5 == "5"); // true: compares values only
console.log(5 === "5"); // false: compares values + types

// e. Check if 10 is greater than 5, less than 20, and equal to 10.
if (10 > 5) console.log("greater");
if (10 < 20) console.log("less");
if (10 === 10) console.log("equal");

// f. Try logical AND and OR:
//    true && false
//    true || false
//    !(true)

if (10 > 5 && 10 < 20) {
  console.log(true);
}

if (10 > 5 || 10 < 20) {
  console.log(true);
}

if (!(10 > 5)) {
  console.log(true);
} else {
  console.log(false);
}

// g. Predict the result of:
// (5 > 3 && 10 > 8)
Output: true;
// (5 > 3 || 10 < 8)
Output: true;

// h. Bitwise (light intro):
//    Evaluate 5 & 1 and 5 | 1.
console.log(5 & 1, 5 | 1);

// Write result and your observation (no deep explanation needed now).
//   & (AND) = Gives 1 only if both numbers have 1 in that digit.
//   | (OR) = Gives 1 if any one number has 1 in that digit.

//  2. Variable Hoisting in JavaScript
// a. Predict output of:
//   console.log(a);
//   var a = 10;
Output: undefined;

// b. Predict output of:
//    console.log(b);
//    let b = 10;
//    Output: ReferenceError: Cannot access 'b' before initialization

// c. Predict output of:
//    test();
//    function test() {
//      console.log("Hello");
//    }
Output: Hello;

// d. Try writing a function expression before initialization and call it:
hello();
var hello = function () {
  console.log("Hi");
};
// Write what happened and why.
//   Output: TypeError: hello is not a function
//   It gives an error: hello is not a function

// e. Write one sentence:
//    What gets hoisted?
//      Answer: Regular functions and var variables are moved to the top of the code.
//    What does not get hoisted fully?
//      let, const, and function expressions are not fully moved or ready to use before they are written.

//  3. Conditional Operators (if, else, else-if, ternary, switch)
// a. Take input using prompt for age.
//    If age > 18 → log “Adultˮ.
//    Else → log “Minorˮ.
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// b. Write a program:
//    If marks >= 90 → “A gradeˮ
//    Else if marks >= 75 → “B gradeˮ
//    Else if marks >= 50 → “C gradeˮ
//    Else → “Failˮ
let marks = 40;
if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 75) {
  console.log("B grade");
} else if (marks >= 50) {
  console.log("C grade");
} else {
  console.log("Fail");
}

// c. Create a variable city = “Bhopalˮ.
//    If city is “Bhopalˮ → log “MPˮ
//    Else if city is “Delhiˮ → log “Capitalˮ
//    Else → log “Unknown Cityˮ
let city = "Delhi";
if (city === "Jharkhand") {
  console.log("Ranchi");
} else if (city === "Delhi") {
  console.log("Capital");
} else {
  console.log("Unknown City");
}

// d. Use ternary operator:
//    Let score = 40.
//    If score > 35 → “Passˮ else “Failˮ using a ternary.
let score = 50;
score > 40 ? console.log("Pass") : console.log("Fail");

// e. Convert this if-else into a ternary:
//    if (temperature > 30) { “Hotˮ } else { “Pleasantˮ }
let temperature = 50;
temperature > 40 ? console.log("Hot") : console.log("Pleasant");

// f. Write a switch case:
//    Take day number (1 to 7).
//    Print the day name.
//    Default case: “Invalid Dayˮ
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuseday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// g. Using logical operators in condition:
//    If age > 18 and country == “Indiaˮ → log “Eligible for Voteˮ
//    Else → “Not Eligibleˮ

let ages = 20;
let country = "India";
if (ages > 18 && country === "India") {
  console.log("Eligible for Vote");
} else {
  console.log("Not Eligible");
}