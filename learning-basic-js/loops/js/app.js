// for loop


let age = 10;
age = age + 1;
age += 1;
age++;
age++;
age++;
age++;
age++;

age--;
age--;

console.log(age);




for(let i = 5; i < 10; i++){
    console.log(i);
}


let count = 1;

for(let c = 1000; c <= 1050; c++){
    if(c % 5 == 0){
        console.log(`
            ${c} Number ${count}
        `);
        count++;
    }
}



for(let a = 1; a <= 100; a++){
    if( a >= 70 ){
        if(a % 3 == 0){
            console.log(a);
        }
    }
}


for(let d = 200; d >= 150; d--){
    console.log(d);

    if(d == 200){
        for(let e = 150; e <= 200; e++){
            console.log(e);
        }
    }
}


// while loop

let wh = 30;

while(wh >= 0){
    console.log(wh);
    wh--;
}


// do while


let woo = 1000;

do{
    console.log(woo);
    woo++;
}while(woo > 1100);


// ======== map ========

const food4 = ['Kacchi Beriyani', 'Beriyani', 120, true, false];

food4.map((data2) => {
    console.log(data2);
});

// ======= for each loop ========

const vagitable3 = ['Piyaj', 'Roshun', 'Kacha Jhal', 'Shukhno Jahal', 'Gorom Moshala', 'Jira', 'Lobongo'];

vagitable3.forEach(function(data){              // call-back function
    console.log(data);
});

vagitable3.forEach((data) => {              // call-back function
    console.log(data);
});

vagitable3.forEach((data) => console.log(data));


// ========== object ============

const students = [
    {
        nam         : 'Abir Mostofa',
        roll        : 01,
        num         : '01615478561',
        location    : 'Narail',
        gender      : 'Male'
    },

    {
        nam         : 'Korim Molla',
        roll        : 02,
        num         : '01254875945',
        location    : 'Khulna',
        gender      : 'Male'
    },

    {
        nam         : 'Tasmia Addri',
        roll        : 03,
        num         : '0165878945',
        location    : 'Dhaka',
        gender      : 'Female'
    },

    {
        nam         : 'Rohan Mostofa',
        roll        : 04,
        num         : '01568974565',
        location    : 'Kalia',
        gender      : 'Male'
    },

    {
        nam         : 'Choyon Biswas',
        roll        : 05,
        num         : '015857554484',
        location    : 'Kalia',
        gender      : 'Male'
    }
];


// for of loop

for (send of students){
    console.log(send.location);
}

// for in loop

for (indexNum in students){
    console.log(students[indexNum].roll);
}

