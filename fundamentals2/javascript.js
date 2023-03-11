// Programming languages that allow such things, such as JavaScript, are called “dynamically typed”,
// meaning that there exist data types, but variables are not bound to any of them.
let message = "hello";
message = 123456; // no error

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions
// into a string by wrapping them in ${… }, for example:
let name = "John";
// embed a variable
alert(`Hello, ${name}!`); // Hello, John!
// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

// In JavaScript, null is not a “reference to a non - existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let age = null;

// The special value undefined also stands apart.It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:
let age;
alert(age); // shows "undefined"

// Technically, it is possible to explicitly assign undefined to a variable:
let age = 100;
age = undefined; // change the value to undefined
alert(age); // "undefined"
// …But we don’t recommend doing that.Normally, one uses null to assign an “empty” or “unknown” value to a variable,
// while undefined is reserved as a default initial value for unassigned things.
