
//initial var declaretion is hoisted and set a default value undefined so it doesn't throw an error
// var carName = undefined;
carName = "Volvo";
var carName;
console.log("carName value is :", carName);


//initial let declaretion is hoisted & but not set any default value. before initialize when program want access, it throw an ReferenceError: Can't access before initialization.
// let carName;

bookName = "Titan"; //declared as a global variable
// let carName;
console.log("bookName value is :", bookName);