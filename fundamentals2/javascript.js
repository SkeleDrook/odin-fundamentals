// https://www.w3schools.com/js/js_string_methods.asp  <===== for more
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String <=== Even more
// https://javascript.info/comparison


// Programming languages that allow such things, such as JavaScript, are called “dynamically typed”,
// meaning that there exist data types, but variables are not bound to any of them.
let message = "hello";
message = 123456; // no error

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions
// into a string by wrapping them in ${… }, for example:
let name1 = "John";
// embed a variable
alert(`Hello, ${name1}!`); // Hello, John!
// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

// In JavaScript, null is not a “reference to a non - existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let age = null;

// The special value undefined also stands apart.It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:
let age1;
alert(age1); // shows "undefined"

// Technically, it is possible to explicitly assign undefined to a variable:
let age2 = 100;
age2 = undefined; // change the value to undefined
alert(age2); // "undefined"
// …But we don’t recommend doing that.Normally, one uses null to assign an “empty” or “unknown” value to a variable,
// while undefined is reserved as a default initial value for unassigned things.

// Escaping characters in a string
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
// This works fine.You can escape other characters in the same way, e.g.\"

const one = "Hey";
const two = "how are you?";
const joined = `${one} there, ${two}`;
console.log(joined); // "Hello, how are you?"

const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"

// To replace case insensitive, use a regular expression with an / i flag(insensitive):
let text1 = "Please visit Microsoft!";
let newText1 = text.replace(/MICROSOFT/i, "W3Schools");

// The method takes 2 parameters: start position, and end position(end not included).
let text2 = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

// By default, the replace() method replaces only the first match:
// If you want to replace all matches, use a regular expression with the / g flag set.
// By default, the replace() method is case sensitive.Writing MICROSOFT(with upper -case) will not work:
// To replace case insensitive, use a regular expression with an / i flag(insensitive):
let text3 = "Please visit Microsoft!";
let newText3 = text.replace(/MICROSOFT/i, "W3Schools");

