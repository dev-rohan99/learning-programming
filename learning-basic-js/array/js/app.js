// ==============

const food = ['Kacchi Beriyani', 'Beriyani', 'Teheri', 'Burger', 'Pizza'];  // array

// [] -> array notation

console.log(food[2]);
console.log(food[3]);
console.log(food[4]);
console.log(food[5]);

// ==============

const food2 = ['Fulkopi']   // array

console.log(food2[0]);

// ============== 

const food3 = ['Kacchi Beriyani', 'Beriyani', 120, true, false]

console.dir(food3[1] + ' ' + food[3]);

// ==============

const vagitable = ['Fulkopi', 'Badhakopi', 'Olkopi', 'Palon-Shak', 'Pui-shak', 'Alu', 'Law'];

console.log(vagitable.length);

// ==============

const vagitable2 = ['Piyaj', 'Roshun', 'Kacha Jhal', 'Shukhno Jahal', 'Gorom Moshala', 'Jira', 'Lobongo'];

for ( let i = 0; i < vagitable2.length; i++ ) {
    console.log(vagitable2 [i]);
}

// ======= forEach loop ========

const vagitable3 = ['Piyaj', 'Roshun', 'Kacha Jhal', 'Shukhno Jahal', 'Gorom Moshala', 'Jira', 'Lobongo'];

vagitable3.forEach(function(data){              // call-back function
    console.log(data);
});

vagitable3.forEach((data) => {              // call-back function
    console.log(data);
});

vagitable3.forEach((data) => console.log(data));

// ======== constractor array =========

const cunstr = Array[('Beriyani', 120, true, false)]
console.log(cunstr);

// =================

const player = ['Musfik', 'Sakib', 'Mashrafi', 'Rubel', 'Nasir', 'Mustafiz'];

for(let a = 0; a < player.length; a++){
    console.log((a+1) + '| ' + player[a]);
}

// =================

const multy = [
    ['Musfik', 'Sakib Al Hasan', 'Mashrafi'],
    ['Kacchi', 'Beriyani', 'Chicken']
];

multy[0].map((data) => console.log(data));

// =================

const devs = [
    ['Rohan Mostofa', '20', 'JavaScript', 'Narail'],
    ['SM Abdullah', '21', 'Youtuber', 'Narail'],
    ['Mahir Uddin', '23', 'Java', 'Bogura'],
    ['Zonayed', '25', 'JavaScripr', 'Cox-Bazar'],
    ['Robiul Khan', '20', 'Java', 'Bogura'],
    ['Rezoan Ahamed', '25', 'php', 'Mirpur'],
    ['Shayon Molla', '20', 'php', 'Mirpur'],
    ['Walid', '20', 'JavaScript', 'Uttora'],
    ['Shahab Molla', '30', 'JavaScript', 'Narail'],
    ['Arnab Mollah', '30', 'JavaScript', 'Narail'],
    ['Eman', '20', 'JavaScript', 'Narail']
];

for (let x = 0; x < devs.length; x++) {

    if(devs[x][1] == 20 && devs[x][2] == 'JavaScript'){
        console.log(`=======================================`);
        devs[x].map((data3) => console.log(data3));
        console.log(`=======================================`);
    }

}


// ========= JavaScript Array Methods and Properties ===========

// ========= join =========

const convert = ['Alo', 'Potol', 'Piyaj', 'Roshun'];

console.log(convert.toString());
console.log(convert.join(' - '));


// ========= split =========

let txt = 'My name is Rohan Mostofa, I love Beriyani, I also love js';

console.log(txt.split('love'));
console.log(txt.split(','));

// ========= push =========

const convert2 = ['Chicken', 'Tigher', 'Dog', 'Doyel', 'Toyato'];
convert2.push('Birds'); // adding in the last

console.log(convert2);

// ========= pop =========

const convrt = ['Dog', 'Doyel', 'Toyato'];
convrt.pop(); // deleting one value in the last
convrt.pop(); // deleting one value in the last

console.log(convrt);

// ========= unshift =========

const convrt2 = ['Beli'];
convrt2.unshift('Golap'); // Add in the first aspect
convrt2.unshift('Togor'); // Add in the first aspect

console.log(convrt2);

// ========= shift =========

const convrt3 = ['Abir', 'Rohan'];
convrt3.shift(); // delete in the first aspect

console.log(convrt3);


// ========= splice =========

const convert3 = ['Alo', 'Potol', 'Piyaj', 'Roshun'];

// from position - delete - adding new      from the original array
convert3.splice(2, 2, 'Tormuz', 'Law', 'Kumro');    // for example 'cut'

console.log(convert3);  

// ========= slice =========

const convert4 = ['Musfik', 'Sakib Al Hasan', 'Mashrafiq', 'Nasir', 'Tamim'];

// using slice without changing original array

convert4.slice(2);  // for example 'copy
let copy = convert4.slice(2, 5);


console.log(convert4);
console.log(copy);


// ========= array concat =========


const dev1 = ['Alo', 'Potol'];
const dev2 = ['Piyaj', 'Roshun'];
const dev3 = ['kacha Jhal', 'Paka Jhal'];

// array concat
console.log(dev1.concat(dev2).concat(dev3));

// ========== alphanumeric ==========

const flower = ['Golap', 'Togor', 'Bely', 'Shurjomukhi'];
console.log(flower.sort());

const num = [1, 2, 3,4,5,6,7,8,9];

console.log(num.reverse());


// =========== includes =============

const flower2 = ['Golap', 'Togor', 'Bely', 'Shurjomukhi'];

console.log(flower2.includes('Joba'));
console.log(Array.isArray(flower2));

