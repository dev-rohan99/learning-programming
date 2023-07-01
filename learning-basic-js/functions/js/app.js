// function

// calling or invoke 
dev('Abir Mostofa', '18', 'Node JS');  // argument

function dev(nam = 'Robot', age = 0, skill = 'Everything')   // parameter
{ 
    console.log(`My name is ${nam} and i am ${age} years old and i love ${skill}`);
}


// calling or invoke
dev('Rohan Mostofa', '20', 'Programming');  // argument
// calling or invoke
dev('SM Abdullah', 21, 'YouTubing');  // argument
// calling or invoke
dev();


// second function


function dev2(nam2, year, skill2){
    return `My name is ${nam2} and i am ${2021 - year} years old and i love ${skill2}`;
}

console.log(dev2(prompt('Your Name'), parseInt(prompt('Date of birth')), prompt('Your Skill')));;


// math function


function squire(length){
    return length * length;
}

console.log(squire('10'));;
console.log(squire('50'));;


function rectangle(length2, width){
    return length2 * width;
}

console.log(rectangle(12, 6));


function triangle(land, height){
    return 0.5 * land * height;
}

console.log(triangle(10, 11));




function area(type, length, width){
    if(type == 'squire' || type == 'Squire' || type == 'SQUIRE'){
        return length * length;
    }else if(type == 'triangle' || type == 'Triangle' || type == 'TRIANGLE'){
        return 0.5 * length * width;
    }else if(type == 'rectangle' || type == 'Rectangle' || type == 'RECTANGLE'){
        return length * width;
    }else{
        console.log();
    }
}

let area2 = prompt('Enter your Area name');
let height = parseInt(prompt('Enter your height'));
let width = parseInt(prompt('Enter your width'));


console.log(area(area2, height, width));
console.log(area(area2, height, width));




// local and global variable


let global = 'Global Variable';
let naam = 'Rohan Mostofa';


function testVari(){
    let local = 'Local Variable';
    let naam = 'Abir Mostofa';

    console.log(naam);
    console.log(global);
    return local;
}

console.log(testVari());;



// function under variable

// function expression

let ageCal = function (naaam, ages){
    return `My name is ${naaam} & i am ${2021 - ages} years old.`;
}

console.log(ageCal('BM Burhan', 2002));



// arrow function

let ageCal2 = (naaam2, ages2) => {
    return `My name is ${naaam2} & i am ${2021 - ages2} years old.`;
}


console.log(ageCal('BM Farhan', 2010));



// declaration function

function declaration(){
    return '';
}

// function expression

let expression = function(){
    return '';
}

// arrow function

let arrowFunc = () => {
    return '';
}

let arrowFunc2 = year => {
    return '';
}

let arrowFunc3 = year2 => 2021 - year2;

console.log(arrowFunc3());


// Constructor function


function LeaFunc(){

    // property of Constructor function

    this.nam = 'Rohan Mostofa';
    this.age = 20;
    this.skills = 'JavaScript';

    // method of Constructor function

    this.ages = function(){
        return 'Hello Ages!!!';
    }

    this.grades = function(){
        return 'Hello Grades!!!';
    }

}


let leader = new LeaFunc();
console.log(leader.ages());
console.log(leader.grades());




function RohanMostofa(){

    this.ageCalculate = function(name, year){
        return `Hello ${name}, Your age is ${2021 - year} years old.`;
    }

    this.currency = function(type, amount){
        if(type == 'dollar'){
            return amount * 86.5;
        }else if(type == 'euro'){
            return amount * 97.6;
        }else if(type == 'cad'){
            return amount * 50.5;
        }
    }

    this.area = function(type, length, width){
        if(type == 'squire'){
            return length * length;
        }else if(type == 'rectangle'){
            return length * width;
        }else if(type == 'triangle'){
            return .5 * length * width;
        }
    }

}

let personalSkill = new RohanMostofa();

console.log(personalSkill.ageCalculate('Abir Mostofa', 2002));
console.log(personalSkill.currency('dollar', 50));
console.log(personalSkill.area('squire', 50, 70));





