{
  // 1. (Basic Declarations) Declare one variable using var, one using let, and one using const. Assign your name, age, and country to them. Then log all three.
  var myName = "Zahidul Islam";
  let age = 25;
  const country = "Bangladesh";
}

{
  // 2. (Reassignment Differences) Declare a let variable with a number and reassign it. Do the same with var. Try reassigning a const and observe the error. Comment on the result.
  let num = 25;
  num = 30;
  var number = 12;
  number = 15;

  const yourAge = 32;
  //yourAge = 34;

  /* Observation: 
     - Reassignment is allowed with var and let.
     - Reassignment is not allowed with const.
     - Accessing const outside the block throws: TypeError: Assignment to constant variable.
  */
}

{
  // 3. (Block Scope Demonstration) Create an if block where you declare a let and a var variable. Try accessing both outside the block. Log the results and note the difference.
  if (true) {
    var a = 25;
    let b = 36;
  }
  // console.log(a, b);

  /* Observation:
     - Variable a is accessible outside the block because var is function-scoped (or globally scoped if not inside a function).
     - Variable b is not accessible outside the block because let is block-scoped.
     - Accessing b outside the block throws: ReferenceError: b is not defined
*/
}

{
  // 4. (Redeclaration) Try redeclaring a var, let, and const variable with the same name in the same scope. Observe which ones work and which throw errors.
  var mobile = "Apple";
  var mobile = "Samsung";

  let cpu = "Mediatak";
  // let cpu = "SnapDragon";

  const ram = 16;
  // const ram = 32;

  /* Observation:
     - var allows both redeclaration and reassignment.
     - let allows reassignment but not redeclaration in the same scope.
     - const allows neither redeclaration nor reassignment.
  */
}

{
  // 5. (Object with const) Create a const object with properties like name and age. Change the values of the properties. Log the object before and after.
  const obj = {
    name: "Zahid",
    age: 25,
  };
  // console.log(obj);

  obj.name = "Nahid";
  obj.age = 30;
  // console.log(obj);

  /* Observation:
     - A const object cannot be reassigned, but its internal properties can be changed.
     - So changing name and age works without error.
     - The object logs different values before and after the updates.
  */
}

/*---------------------------------------------------------------------------------------------------
                                Intermediate Tasks (not from this lesson)
----------------------------------------------------------------------------------------------------- */

{
  // 6. (Loop Scope) Write a for loop using var and another using let. Inside the loop, log the variable. Then log it outside the loop and see what happens.
  for (var i = 1; i <= 5; i++) {
    // console.log(i);
  }
  // console.log(i);

  for (let j = 1; j <= 5; j++) {
    // console.log(j);
  }
  // console.log(j);

  /* Observation: 
     - var is accessible outside the loop because it is function-scoped (or global-scoped if not in a function).
     - let is block-scoped, so it is not accessible outside the loop block.
     - Accessing let outside the block throws: ReferenceError: j is not defined
  */
}

{
  // 7. (Function vs Block Scope) Create a function that has a block inside (if or for). Declare variables inside the block using var, let, and const. Try logging all of them outside the block but still within the function.
  function company() {
    if (true) {
      var a = 25;
      let b = 35;
      const c = 45;
    }
    // console.log(a, b, c);
  }
  company();

  /* Observation: 
     - var is accessible outside the block but within the same function. Because it is function-scoped.
     - let and const are block-scoped, so they are not accessible outside the if-block.
     - Accessing b or c outside the block throws: ReferenceError: b is not defined
  */
}

{
  // 8. (const with arrays) Declare a const array of your favorite fruits. Add and remove elements using array methods like .push() or .pop(). Log the array before and after.
  const fruits = ["Apple", "Orange", "Mango", "Banana"];
  console.log(fruits);

  fruits.pop();
  fruits.push("Coconut");
  console.log(fruits);

  /* Observation: 
     - A const array cannot be reassigned to a different array or value, but its elements can still be modified.
     - Methods like .push() and .pop() work on const arrays, allowing to add or remove elements.
     - The reference to the array itself remains constant, but its contents are mutable.
  */
}
