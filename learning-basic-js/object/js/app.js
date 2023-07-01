// objects

const student = {
    nam         : 'Rohan Mostofa',
    roll        : 01,
    age         : 20,
    location    : 'Narail'
};

// . -> Dot Notation

console.log(`My name is ${student.nam} & I am ${student.age}. My class roll is ${student.roll} & my location is ${student.location}`);

// constructor object

const construc = new Object({
    nam2    : 'Rohan',
    roll    : 02
});

console.log(construc.nam2);

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


for(let i = 0; i < students.length; i++){
    console.log(students[i].nam);
}

students.sort().reverse().forEach((data) => {
    if(data.roll == 1 || data.roll == 4){
        console.log(`
            Name        : ${data.nam},
            Roll        : ${data.roll},
            Number      : ${data.num},
            Location    : ${data.location}
            Gender      : ${data.gender}
        `);
    }
});

// for of loop

for (send of students){
    console.log(send.location);
}

// for in loop

for (indexNum in students){
    console.log(students[indexNum].roll);
}

