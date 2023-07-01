// Regular Expression


let txt = 'My name is Rohan Mostofa & i Love to swimming';
let pattern = /love/i;

console.log(pattern.test(txt));


let txt2 = 'My name is Rohan Mostofa & i am 20 years old. I Love to swimming.'
let pattern2 = /years|love|javascript|js|python/i;

console.log(pattern2.test(txt2));


let txt3 = 'Ami tomak vlobashi';
let pattern3 = /(i|ami) (love|tomak) (you|vlobashi)/i;

console.log(pattern3.test(txt3));


let txt4 = 'JavaScript';
let pattern4 = /^javascript/i;       // ^    ->     start with 

console.log(pattern4.test(txt4));


let txt5 = 'Python';
let pattern5 = /^python$/i;      // ^ -> start with      /      $ ->  end with

console.log(pattern5.test(txt5));



let txt6 = 'Mashaallah';
let pattern6 = /^m........h$/i;          // .   ->  Whatever is happy

console.log(pattern6.test(txt6));


let txt7 = '@mOm';
let pattern7 = /^[~!@$&*]m[a-oA-O0-9]m$/;

console.log(pattern7.test(txt7));


let txt8 = 'Rohan';
let pattern8 = /^[A-Z][a-z]{3}[a-z]$/;

console.log(pattern8.test(txt8));


let txt9 = '+8801717925334';
let pattern9 = /^[+8801][0-9]{9,10}/;       // {1,7} -> min and max

console.log(pattern9.test(txt9));


let txt10 = 'Daad';
let pattern10 = /^[A-Z][a-z]*d$/;

console.log(pattern10.test(txt10));


let txt11 = 'D00d';
let pattern11 = /^[A-Z][^a-z]*d$/;      // [^a-z] -> skiping

console.log(pattern11.test(txt11));


let txt12 = '+8801631699535';
let pattern12 = /^(01|8801|\+8801)[0-9]{9}$/;

console.log(pattern12.test(txt12));

let txt13 = 'rohanmostofa654@gmail.com';
let pattern13 = /^[a-z0-9.-_]*@[a-z0-9]*\.[a-z]{2,10}/;

console.log(pattern13.test(txt13));



let txt14 = 'Rohan Mostofa';
let pattern14 = /^[A-Z][a-z]{4}\s[A-Z][a-z]{6}$/;

console.log(pattern14.test(txt14));

// let txt15 = 'Rohan,Mostofa';
// let pattern15 = /^[A-Z][a-z]{4}\d[A-Z]\w[a-z]{6}$/;

// console.log(pattern15.match(txt15));



let txt16 = 'ASRAFUL HAQ';
let pattern16 = /^[^a-z]{5,}$/;

console.log(pattern16.test(txt16));


// create an email pattern

let emailValid = 'rohanmostofa11@gmail.com';

// Regular Expression pattern one
let pattern17 = /^[a-z0-9._-]{1,}@[a-z0-9]{1,}\.[a-z]{2,10}$/;

console.log(pattern17.test(emailValid));



// create a username pattern

let username = 'rohan_dev';

// Regular Expression pattern two
let pattern18 = /^[a-z0-9\-_]{5,12}$/;

console.log(pattern18.test(username));



// create a bangladeshi phone number pattern

let bdPhn = '+8801548789877';

// Regular Expression pattern three
let pattern19 = /^(01|8801|\+8801)[0-9]{9}$/;

console.log(pattern19.test(bdPhn));



// create a password pattern

let pass = '!@(^%)Ff.8f=f\'"/';

// Regular Expression pattern four
let pattern20 = /^[a-zA-Z0-9~!@#$%^&*)(-_\=+<>,./?:;"']{6,16}$/;

console.log(pattern20.test(pass));



// create a zipcode pattern

let zipcode = 85746;

// Regular Expression pattern five

// US zip code system
let pattern21 = /^[0-9]{5}/;

console.log(pattern21.test(zipcode));





