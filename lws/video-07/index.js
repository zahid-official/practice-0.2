// global scope
var a = 5;
let b = 8;

console.log("initial var value:", a);
console.log("initial let value:", b);

// let b = 11; 
//SyntaxError: Identifier 'b' has already been declared

b = 3;
console.log("redeclared let value:", b);

// function scope
function sum() {
  var a = 8;
  let b = 12;
  console.log("function scope var value:", a);
  console.log("function scope let value:", b);

  b = 10;
  console.log("function scope redeclared let value:", b);
}
sum();

// block scope
{
  var a = 10;
  let b = 15;
  console.log("block scope var value:", a);
  console.log("block scope let value:", b);
}

console.log("final var value:", a);
console.log("final let value:", b);



{
    let c = 5;
    console.log("value of block scope c is : ", c);
}
// console.log("value of block scope c is : ", c)  
//ReferenceError: c is not defined; 