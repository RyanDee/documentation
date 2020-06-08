// 1. What's the difference bewteen undefined and null?
// Undefined: default value of a variable that has not been assigned a specific value, or a propertive that does not exist in an object.
// null is "a value that represents no value"
console.log(null == undefined); // logs true
console.log(null === undefined); // logs false


// 2.What does the && operator do?
// It use to find first falsy expression in it's operands
// Return last epxression
console.log(false && 1 && []); //logs false
console.log(" " && true && 5); //logs 5


// 3.What does the || operator do?
// Operator finds the first truthy expression in its operands and return it


// 4. Is using the + or unary plus operator the fastest way in converting a string to a number?
// According to MDN Documentation the + is the fastest way of converting a string to a number 
// because it does not perform any operations on the value if it is already a number.

// 5. What is the DOM?
// DOM stands for Document Object Model is an web Interface for HTML and XML document.
// When browsers first read (parses) our HTML document it creates a big object...really big object, this is DOM
// It's tree-like structure that is modeled from the HTML document. 
// document object in JS represents the DOM, It provides us many methods that we can use to selecting elements to update contents and many more


// 6. What is Event Propagation?
// When an event occurs on a DOM element, that event does not entirely occur on that just one element.
// Event Propagation has three phases.
// 1. Capturing phase - the events starts from window then goes donw to every element until it reaches that target element.
// 2. Target phase - the event has reaches the target pharse.
// 3. Bubbing phase - the event bubbles up from the target element then goes up every element until it reaches the window

// 7. What is Event Bubbling?
// 8. What is Event Capturing?

// 9. What's the difference between event.preventDefault() and event.stopPropagation() methods?
// The event.preventDefault() method prevents the default behaviour of an element.
// The event.stopPropagation() method stops the propagation of an event
// or it stops the event from occurring in the bubbind or capturring phase.

// 10. How to know if the event.preventDefault() method was used in an element?
// We can use the event.defaultPrevented property in the event object. It return a boolean indicating if the event.preventDefault()
// was called in a particular element.

// 11. Why dodes this code throw an error?
// Obviously, this throws an error due to the reason we are trying to access a x property in the 
// someprop property which have an undefined value. Remember properties in an object which does not 
// exist in itself and its prototype has a default value of undefined and undefined has no property x.

// 12. What is event.target ?
// In simplest terms, the event.target is the element on which the event occurred or the element that triggered the event.

// 13. What is event.currentTarget?
// The event.currentTarget is the element on which we attach the event handler explicitly.

// 14. What is the different between == and === ?
// The different between ==(abstract equality) and ===(strict equaility) is that
// == compares value after coercion and === compares values without coerion.

// 15. Why does it return false when comparing two similar objects in JavaScript?
let a = { a: 1 };
let b = { a: 1 };
let c = a;
console.log(a === b);
console.log(a === c);
// Javascript compares objects and primitives differently. 
// In primitives it compares them by value while in objects it compares them by referentce or
// the address in memory where the variable is strored.


// 16. What does the !! operator do?
// The Double NOT operator or !! coerces the value on the right side into a boolean. Basically it's a fancy way of converting a value into a boolean.
console.log(!!null); //logs false
console.log(!!undefined); //logs false
console.log(!!''); //logs false
console.log(!!0); //logs false
console.log(!!NaN); //logs false
console.log(!!' '); //logs true
console.log(!!{}); //logs true
console.log(!![]); //logs true
console.log(!!1); //logs true
console.log(!![].length); //logs false

// 17. How to evaluate multiple expressions in one line?
// We can use the , or comma operator to evaluate multiple expressions in one line. 
// It evaluates from left-to-right and returns the value of the last item on the right or the last operand.
let x = 5;

x = (x++ , x = addFive(x), x *= 2, x -= 5, x += 10);

function addFive(num) {
  return num + 5;
}


// 18. What is Hoisting?
// Hoisting is the term used to describe the moving of variables and functions top the top of their (global or function) scope
// on where we define that variable or function.
// The Execution Context is the "environment of code" that is currently executing.
// The Execution Context has two phases complication and execution.
// Compilation - in this 


// 25. What is the prototype of an object?
// A rpototype in simplest terms is a blueprint of an object. It's used as a fallback for propertives and methods if it does exist in the current object.
// It's the way to share propertives and functionality between objects. It's the core concept around JS's Prototypal Inheritance.

// 26. What is an IIFE, what is the use of it?
/** 
 * An IIFE or Immediately Invoked Function Expression is a function that is gonna get invoked or executed after its creation or declaration.
 * **/

 // 27. What is the use Function.prototype.apply method?
 /**
  * The apply invokes a function specifying the this or the "owner" object of that function on that time of invocation.
  * 
  * **/
 const person = {
  name: "Marko Polo"
};

function greeting(greetingMessage) {
  return `${greetingMessage} ${this.name}`;
}

greeting.apply(person, ['Hello']); // returns "Hello Marko Polo!"


// 28. What is the use Function.prototype.call method?
/**
 * The call invokes a function specifying the this or the "owner" object of that function on that time of invocation.
 */

 // 29. What is the difference between .aplly and .call
/**
 * The only difference between apply and call is how to pass the arguments in the function being called.
 * Apply: we pass the arguments as an array.
 * Call: we pass the arguments as the argument list.
 */
const obj1 = {
  result:0
 };
 
 const obj2 = {
  result:0
 };
 
 function reduceAdd(){
    let result = 0;
    for(let i = 0, len = arguments.length; i < len; i++){
      result += arguments[i];
    }
    this.result = result;
 }
 
 reduceAdd.apply(obj1, [1, 2, 3, 4, 5]); // returns 15
 reduceAdd.call(obj2, 1, 2, 3, 4, 5); // returns 15

 // 30. What is the usage of Function.prototype.bind?
 /** The bind method returns a new function that is bound to a specific 'this' value or the 'owner' object */


// 31. What is Functional Programing and what are the features of JS make it a candidate as a functional language?
/**
 * Functional Programing is a declarative programming paradigm or pattern on how we build our application with functions
 *  using expressions that calculates a value wihtout mutating or changing the arguments that are passed to it.
 * .map, .filter, .reduce
 **/ 


 // 32. What are Higher Order Functions?
 /**
  * Higher-order function are functions that can return a function or recieive argument or arguments with hava a value of a function
  */
function higherOderFunction(params, callback) {
  return callback(params);
}

// 33. Why are function called First-Class Objects?
/**
 * Function in JS are First-class Object because they are treated as any other value in the language.
 * + Assigned to variables.
 * + Can be a propertives of an object which are called methods.
 * + Can be an item in array.
 * + Can be returned as values of a function.
 */

 // 34. Implement the Array.prototype.map method by hand
 Array.prototype.map = function(cb) {
  _result = [];
  for(let i=0; i < this.length; i++) {
    _result.push(cb(this[i], i, this))
  }
  return _result;
}

// 37. What is the arguments object?
/**
 * The arguments object is a collection of parameter values pass in a function. It's an Array-like object
 * but doesn't have the built-in methods in an array (forEach, reduce, filter, map, ...)
 * Note: the arguments object does not work on ES6 arrow functions.
 * use "const four = (...args) => args;" instead.
 */

function one() {
  return Array.prototype.slice.call(arguments);
}

// 38. How to create an object without a prototype?
// USE Object.create(...)

// 39. Why does b in this code become a global variable when you call this function?
/**
 * function myFunc() {
    let a = b = 0;
  }
  myFunc();
  The reason for this is that assignment operator or = has right-to-left associativity or evaluation.
 */
 
 /**
  * JS Note
  * 
  * The arrow functions in javascript are anonymous. 
  * For debuging productive, a good practice is to use a varables to hold the arrow functions.
  * This allows javascript to inffer the function name!
  */