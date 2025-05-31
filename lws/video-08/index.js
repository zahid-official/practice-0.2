// let can reassign but cannot declare
let a = 5;
a = 8;
console.log("let value: ",a);


// const cannot reassign and also cannot declare. if reassigned then it will trown a TypeError: Assignment to constant variable.
const b = 10;
// b = 6
//TypeError: Assignment to constant variable.
console.log("const value: ", b);



// constant value
const c = 8;
// constant reference to a value
const d = [1, 5, 4, 7];
console.log(d);

d[0] = 9;
console.log(d);

const e = {"a": 1, "b": 3, "c": 5}
console.log(e);
e.a = 4 + 1;
console.log(e);