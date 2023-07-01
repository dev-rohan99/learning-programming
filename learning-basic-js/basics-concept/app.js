console.log('This is javascript');  // dev tool
console.dir('This is developer.');  // dev tool

alert('Do you want to visit this website?');

confirm('Do you trust this website?');  // confirmation message
prompt('Browser Object Model');  ;  // BOM  ( Browser Object Model )

var user = prompt('Enter Your Name'); // 
var topic = prompt('Enter Your Favorite Food Name');

// concatenation
console.log('My name is ' + user + ' & i love to eat ' + topic + '.');  


// variable start

// var
var nam;    // Changeable & declare
nam = 'Changeable';

console.log(nam);

// let
let _nam2;   // Not Changeable but declarable
_nam2 = 'Not Changeable';

console.log(_nam2);

// const
const nam3 = 'Not Changeable and declare' // Not Changeable and declare

console.log(nam3);


// example

const ex1 = prompt('Please Enter Your Name');
console.log(ex1);

let ex2 = prompt('Please Enter Your Second Name');
ex2 = 'mostofa';    // Showing it
console.log(ex2);

var ex3 = prompt('Please Enter Your Third Name');
var ex3 = 'Show It';
console.log(ex3);

// using backslash for skip

console.log('I\'m Rohan Mostofa');
console.log("I\'m \"Rohan Mostofa\"");

// type of

let type = 'Rohan Mostofa'; // string
let type11 = `Rohan Mostofa`; // string
let type9 = toString('1000.200'); // string
let type10 = String('1000'); // string
let type2 = 30; // number
let type3 = false; // boolean
let type4 = true; // boolean
var type12 = Boolean(true); // boolean
let type5 = "100"; // String
let type6 = parseInt("200"); // number
let type7 = parseFloat("200"); // number
let type8 = Number("200.156"); // number

console.log(typeof type);   // string
console.log(typeof type11); // string
console.log(typeof type9);  // string
console.log(typeof type10); // string
console.log(typeof type5);  // String
console.log(typeof type2);  // number
console.log(typeof type6);  // number
console.log(typeof type7);  // number
console.log(typeof type8);  // number
console.log(Number.parseInt(type5)) // number
console.log(typeof type3);  // boolean
console.log(typeof type4);  // boolean
console.log(typeof type12);  // boolean

// about comment

// inline comment

/*
maltiple comment
*/

/**
 * doc block comment
*/


// null and undefined

let undefinedVal; 
let nullVal = null;

console.log(typeof undefinedVal); // undefined
console.log(nullVal); // null is an object
console.log(typeof nullVal); // object

let showType = 0x45564;
console.log(showType);
console.log(typeof showType);

let showType2 = 0756;
console.log(showType2);

