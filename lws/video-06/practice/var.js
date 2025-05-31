// 1. (Basic Declaration) Declare a variable using var and assign your name to it. Then log it to the console.
var name = "zahid";
console.log(name);

// 2. (Variable Reassignment) Declare a var variable with a number, then change its value and log both before and after.
var num = 1;
console.log(num);
num = 5;
console.log(num);

// 3. (Multiple Variables) Declare three variables using var: your age, city, and favorite color. Log a sentence using all of them.
var age = 25;
var city = "Dhaka";
var color = "blue";
console.log(
  `I'm Zahidul Islam. My age is ${age}, I live in ${city} and my favourite color is ${color}`
);

// 4. (String Concatenation) Combine two var variables (e.g., first name and last name) into a full name and log it.
var firstName = "Zahidul";
var lastName = "Islam";
var fullName = `${firstName} ${lastName}`;
console.log(fullName);

/*---------------------------------------------------------------------------------------------------
                                Intermediate Tasks (not from this lesson)
----------------------------------------------------------------------------------------------------- */

// 5. (Function Scope with var) Create a function that declares a var variable and logs it.
function writeName() {
  var myName = "Zahidul Islam";
  console.log(myName);
}
writeName();

// 6. (Hoisting Behavior) Try logging a var variable before it's declared. Explain the output in a comment. Example:
console.log(myVar); // Output: undefined
var myVar = 10;
/* Explanation:
 The declaration (not the assignment) of `myVar` is hoisted to the top,
 so it's as if the code runs like this:*/
 
var myVar;
console.log(myVar); // undefined
myVar = 10;
// The variable exists when it's logged, but it hasn't been assigned yet.

// 7. (Shadowing with var) Declare a var variable in the global scope. Inside a function, declare a var with the same name and log both the inner and outer values.
var greeting = "Hello World";
function greet() {
  var greeting = "Hello Guys";
  console.log("inside function", greeting);
}
greet();
console.log("global scope", greeting);

// 8. (For Loop Quirk) Write a for loop using var to log the index. Then log the index after the loop ends. What do you notice?
for (var i = 1; i <= 5; i++) {
  console.log(i); // Logs: 1, 2, 3, 4, 5
}
console.log(i); // Logs: 6 (i is accessible here outside the loop)
/* notice: With var, the i variable is function-scoped or globally scoped (if not inside a function). This means that after the loop ends, i still exists and holds the value 6 (because the loop ends when i reaches 6, and then it exits). If you used let instead of var, the value of i wouldn’t be accessible outside the loop, since let is block-scoped. */