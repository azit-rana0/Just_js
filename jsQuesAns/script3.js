// 1.Create a function that prints "Hello Javascript".
function func() {
    console.log(`Hello World`);
}
func();

// 2. Create a function that takes two numbers as parameters and returns their sum.
let sum = function(a, b) {
    return a + b;
}
let totalSum = sum(4,6);
console.log(totalSum);

// 3. Make a function with a default parameter that prints "Hi" followed by the name passed to it. If no name is passed, it should print "Hi Guest".
let guest = function (name = "Guest") {
    console.log(`Hi ${name}`)
}
guest()
guest("Rana")

// 4. Use rest parameters to make a function that adds unlimited numbers.
function rest(...rest) {
    let sum = rest.reduce((total, num) => total + num, 0)
    console.log(sum);
}

rest(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
// 5. Create an IIFE that prints "I run instantly!".

(function() {
    console.log("I run instantly!");
})();

// 6. Make a nested function where the inner one prints a variable from the outer one.
// 7. Create an array of 5 fruits. Add a fruit to the end and another to the beginning.
// 8. Use a for loop to print all elements of an array.
// 9. Create an object person with keys name, age and city and print each key's value.
// 10. Use setTimeout to log "Time's up!" after 2 seconds.
// 11. Create an object person with keys name, age and city and print each key's value.