// if statement

let a = 10;
let b = 2;

// a > b true false

if (a > b) {
    console.log(a + ' is greater than ' + b);
}



// if, else statement

let firstName = "Rohan";
let lastName = "Mostofa";
// let firstName = prompt('Enter Your First Name');
// let lastName = prompt('Enter Your Last Name');


if(lastName == 'Mostofa' || lastName == 'Mustafa'){
    console.log(`My name is ${firstName} ${lastName}. Come here.`);
}else{
    console.log(`My name is ${firstName} ${lastName}.`);
}


const myName = 'Rohan Mostofa';

if( typeof myName !== undefined ){
    console.log('Name is defined');
}else{
    console.log('Name is not defined! Try again.');
}


let age = prompt('Please Enter You Age');

if(age >= 18){
    console.log('You can join this metting.');
}else{
    console.log('Sorry, You don\'t have a license.');
}


// if, else if, else statement

// let marks = '70';
let marks = prompt('Type Your Marks');

if(marks >= 0 && marks <= 32){
    console.log('You have failed.');
}else if(marks >= 33 && marks <= 39){
    console.log('You got D.');
}else if(marks >= 40 && marks <= 49){
    console.log('You got C.');
}else if(marks >= 50 && marks <= 59){
    console.log('You got B.');
}else if(marks >= 60 && marks <= 69){
    console.log('You got A-.');
}else if(marks >= 70 && marks <= 79){
    console.log('You got A.');
}else if(marks >= 80 && marks <= 100){
    console.log('You got A+.');
}else{
    console.log('Did you take the exam?');
}


// switch case statement

let date = new Date();

// 0 = Sunday, 1 = Monday, 2 = Tuesday
let today = date.getDay();

switch (today) {
    case 0:
        console.log('Today is Sunday')
        break
    case 1: 
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3: 
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5: 
        console.log('Today is Friday')
        break
    case 6: 
        console.log('Today is Saturday')
        break
    default: console.log('Not a Valid Number')
}


// ternary oparetor

let numb = 20;

let tarnary = (numb < 18) ? 'Hello' : 'BOOM';
console.log(tarnary);

let validationAge = (numb >= 18) ? 'You are eligable!' : 'You are not eligable!';
console.log(validationAge);

// if(numb >= 18){
//     console.log('You are eligable!');
// }else{
//     console.log('You are not eligable!');
// }

let checkNumb = 21;

let result = checkNumb % 2 === 0 ? 'EVEN' : 'ODD';
console.log(result);


