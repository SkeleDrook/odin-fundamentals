console.log("Hello, World!")

// This one is too long
// let message_1;
// message_1 = 'Hello!';

// var is used in old code use let instead
let message10 = 'Hello!';
alert(message10);

// let user = 'John', age = 25, message = 'Hello'; Shorter but it's better to not do it this way
let user = 'John';
let age = 25;
let message = 'Hello';

// Multi-line style:
let user1 = 'John',
	age1 = 25,
	message1 = 'Hello';

// Comma-first style:
let user2 = 'John'
	, age2 = 25
	, message2 = 'Hello';

let message3;
message3 = 'Hello!';
message3 = 'World!'; // value changed
alert(message3);

let hello = 'Hello world!';
let message4;
message4 = hello; // copy 'Hello world' from hello into message
// now two variables hold the same data
alert(hello); // Hello world!
alert(message4); // Hello world!
// Declaring twice triggers an error. A variable should be declared only once.

// To declare a constant(unchanging) variable, use const instead of let:
const myBirthday = '18.04.1982';//myBirthday = '01.01.2001';  error, can't reassign the constant!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
let color = COLOR_ORANGE;// ...when we need to pick a color
alert(color); // #FF7F00