// DOM -> Document Object Model

console.log(document);
console.log(document.URL);
console.log(document.domain);
console.log(document.title);
console.log(document.head);
console.log(document.doctype);
console.log(document.body);
console.log(document.scripts);

console.log(document.images);
console.log(document.links);

document.title = 'Class 11';


// selector

let h1 = document.getElementById('heading');
h1.innerText = 'Marn Stuck Batch 1';

console.log(h1);

let para = document.getElementsByClassName('para');
para[0].innerText = 'Hello paragraph 1';
para[1].innerText = 'Hello paragraph 2';


let tag = document.getElementsByTagName('a');

tag[0].innerText = 'Read More';
tag[1].innerText = 'Your Profile';


let ele = document.querySelector('#heading2');

ele.textContent = 'ROHAN MOSTOFA';



let div = document.querySelector('.box');

console.log(div.style.backgroundColor);
div.innerHTML = `
    <h1>We Are Developers!!!</h1>
`;

let div2 = document.querySelector('.box2 h1');
console.log(div2.innerText);;
div2.innerText = 'Rohan Mostofa Abir';

console.log(div2.style);


div2.style.color = 'red';
div2.style.backgroundColor = 'black';
div2.style.textAlign = 'center';
div2.style.padding = '15px';
div2.style.letterSpacing = '7px';



let block = document.querySelector('.box2 h2');
block.setAttribute('text-align', 'center');


let block2 = document.querySelector('.box2 p');
block2.setAttribute('style', 'text-align:center;');
console.log(block2.getAttribute('skill'));

if(block2.hasAttribute('skill')){
    console.log('Yes!');
}else{
    console.log('No!');
}

block2.className = 'div_para_block';
block2.className = 'para_block';

const devs = document.querySelector('.block');
devs.classList.add('devs_block');
devs.id = 'nam';

const devsTitle = document.querySelector('.block h2');
devsTitle.classList.add('devHead');
devsTitle.classList.add('classes');
devsTitle.classList.remove('classes');


const devs2 = [

    {
        nam         : 'Abdullah Al Mamun',
        skill       : 'Python Developer',
        age         : 25,
        location    : 'Dhaka, Bangladesh',
        income      : '$5000',
        fb          : 'https://www.facebook.com/aam6265',
        insta       : 'https://www.instagram.com/abdullah_al_mamun124/',
        twi         : 'https://twitter.com/TachyonMatrix',
        linkdin     : 'https://www.linkedin.com/signup',
        profile     : 'img/aam.jpg'
    },

    {
        nam         : 'Rohan Mostofa',
        skill       : 'Javascript Developer',
        age         : 19,
        location    : 'Narail, Dhaka, Bangladesh',
        income      : '$2000',
        fb          : 'https://www.facebook.com/rohanmostofa11/',
        insta       : 'https://www.instagram.com/rohan_mostafa_abir/',
        twi         : 'https://twitter.com/RohanMostafa5',
        linkdin     : 'https://www.linkedin.com/signup',
        profile     : 'img/me.jpg'
    },

    {
        nam         : 'Al-Amin Hossain',
        skill       : 'Laravel Developer',
        age         : 24,
        location    : 'Khulna, Dhaka, Bangladesh',
        income      : '$3000',
        fb          : 'https://www.facebook.com/profile.php?id=100008771560721',
        insta       : 'https://www.instagram.com/developeralamin/',
        twi         : 'https://twitter.com/RohanMostafa5',
        linkdin     : 'https://www.linkedin.com/al-amin-hossain-892a55200',
        profile     : 'img/aah.jpg'
    },

    {
        nam         : 'Md. Najmul Hasan Sobuj',
        skill       : 'PHP Developer',
        age         : 27,
        location    : 'Dinajpur, Dhaka, Bangladesh',
        income      : '$4000',
        fb          : 'https://www.facebook.com/mdnajmulhasan.sobuj',
        insta       : 'https://www.instagram.com/md.najmul._.hasan/',
        twi         : 'https://twitter.com/',
        linkdin     : 'https://www.linkedin.com/signup',
        profile     : 'img/mnhs.jpg'
    },

    {
        nam         : 'Meheraz Hossain Apu',
        skill       : 'PHP Developer',
        age         : 23,
        location    : 'Dinajpur, Dhaka, Bangladesh',
        income      : '$5000',
        fb          : 'https://www.facebook.com/',
        insta       : 'https://www.instagram.com/',
        twi         : 'https://twitter.com/',
        linkdin     : 'https://www.linkedin.com/signup',
        profile     : 'img/mha.jpg'
    },

    {
        nam         : 'Sajjad Hossain',
        skill       : 'JavaScript Developer',
        age         : 21,
        location    : 'Dinajpur, Dhaka, Bangladesh',
        income      : '$4000',
        fb          : 'https://www.facebook.com/Dev.SajjadHossain',
        insta       : 'https://www.instagram.com/',
        twi         : 'https://twitter.com/',
        linkdin     : 'https://www.linkedin.com/signup',
        profile     : 'img/sh.jpg'
    }
];


const getClass = document.querySelector('.wrapped');


devs2.map((show) => {

    getClass.innerHTML += `
    
    <div class="single_block">
        <div class="sub">
            <img src="${show.profile}" alt="">
            <h3>${show.nam}</h3>
            <h4>Skills : ${show.skill}</h4>
            <p>Age : ${show.age} years</p>
            <p>Location : ${show.location}</p>
            <p>Income : ${show.income}</p>
        </div>

        <ul class="social">
            <li style="--i:1"><a href="${show.fb}"><i class="fab fa-facebook-square"></i></a></li>
            <li style="--i:2"><a href="${show.insta}"><i class="fab fa-instagram"></i></a></li>
            <li style="--i:3"><a href="${show.twi}"><i class="fab fa-twitter"></i></a></li>
            <li style="--i:4"><a href="${show.linkdin}"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
    </div>
    
    `;

});





const student = [
    {
        sname       : 'LIFE SHINE SCHOOL',
        nam         : 'Rohan Mostofa Abir',
        fname       : 'Golam Mostofa Nipu',
        class       : '11th',
        bgroup      : 'B+',
        numb        : '+880 1717 856 334',
        profile     : 'img/me.jpg'
    },

    {
        sname       : 'LIFE SHINE SCHOOL',
        nam         : 'Sajjad Hossain',
        fname       : 'Shahidur Hossain',
        class       : '12th',
        bgroup      : 'O+',
        numb        : '+880 1717 854 334',
        profile     : 'img/sh.jpg'
    },

    {
        sname       : 'LIFE SHINE SCHOOL',
        nam         : 'Abdullah Al Mamun',
        fname       : 'Mominur Molla',
        class       : 'Onnarce 3rd Year',
        bgroup      : 'A+',
        numb        : '+880 1975 854 334',
        profile     : 'img/aam.jpg'
    },

    {
        sname       : 'LIFE SHINE SCHOOL',
        nam         : 'Al-Amin Hossain',
        fname       : 'Eman Hossain',
        class       : 'Onnarce 3rd Year',
        bgroup      : 'B+',
        numb        : '+880 1975 456 854',
        profile     : 'img/aah.jpg'
    },

    {
        sname       : 'LIFE SHINE SCHOOL',
        nam         : 'Md. Najmul Hasan Sobuj',
        fname       : 'Abul Hasan',
        class       : 'Onnarce 3rd Year',
        bgroup      : 'O+',
        numb        : '+880 1584 456 854',
        profile     : 'img/mnhs.jpg'
    },

    {
        sname       : 'LIFE SHINE SCHOOL',
        nam         : 'Meheraz Hossain Apu',
        fname       : 'Mahabub Hossain',
        class       : 'Onnarce 3rd Year',
        bgroup      : 'B+',
        numb        : '+880 1584 777 222',
        profile     : 'img/mha.jpg'
    },

    {
        sname       : 'LIFE SHINE SCHOOL',
        nam         : 'MD Mahir',
        fname       : 'MD Mohammad',
        class       : 'Diploma',
        bgroup      : 'O-',
        numb        : '+880 1584 555 777',
        profile     : 'img/mm.jpg'
    },

    {
        sname       : 'LIFE SHINE SCHOOL',
        nam         : 'Hasan Anamul',
        fname       : 'Hohid Hasan',
        class       : 'Diploma',
        bgroup      : 'O-',
        numb        : '+880 1584 555 777',
        profile     : 'img/ha.jpg'
    }

];



const getClass2 = document.querySelector('.wrapped2');


student.map((show2) => {

    getClass2.innerHTML += `
    
    <div class="single_block2">
        <img class="profile" src="${show2.profile}" alt="">
        <h3>${show2.sname}</h3>
        <h4>Name : ${show2.nam}</h4>
        <h4>Father's Name : ${show2.fname}</h4>
        <h4>Class : ${show2.class}</h4>
        <h4>Blood Group : ${show2.bgroup}</h4>
        <h4>Contact : ${show2.numb}</h4>
        <img class="signeture" src="img/signeture.png" alt="">
    </div>

    `;

});



// Load all phone book data to DOM 


const family = [

    {
        num          : '01',
        nam         : 'Rohan Mostofa Abir',
        age         : 19,
        phn         : '+880 1547 444 254',
        location    : 'Narail, Dhaka, Bangladesh',
        relation    : 'Mother / Father / Daughter',
        photo       : 'img/me.jpg'
    },

    {
        num          : '02',
        nam         : 'Sajjad Hossain',
        age         : 22,
        phn         : '+880 1547 777 654',
        location    : 'Dinajpur, Dhaka, Bangladesh',
        relation    : 'Mother / Father / Son',
        photo       : 'img/sh.jpg'
    },

    {
        num          : '03',
        nam         : 'Abdullah Al Mamun',
        age         : 25,
        phn         : '+880 1547 777 888',
        location    : 'Dinajpur, Dhaka, Bangladesh',
        relation    : 'Half-sister / Half-brother',
        photo       : 'img/aam.jpg'
    },

    {
        num          : '04',
        nam         : 'Md. Najmul Hasan Sobuj',
        age         : 25,
        phn         : '+880 1747 457 111',
        location    : 'Dinajpur, Dhaka, Bangladesh',
        relation    : '3/4-sister / 3/4-brother',
        photo       : 'img/mnhs.jpg'
    },

    {
        num          : '05',
        nam         : 'Meheraz Hossain Apu',
        age         : 25,
        phn         : '+880 1747 444 111',
        location    : 'Mirpur, Dhaka, Bangladesh',
        relation    : 'Grandmother / Grandfather / Granddaughter / Grandson',
        photo       : 'img/mha.jpg'
    },

    {
        num          : '06',
        nam         : 'MD Mahir',
        age         : 22,
        phn         : '+880 1584 555 777',
        location    : 'Uttora, Dhaka, Bangladesh',
        relation    : 'Grandmother / Grandfather / Granddaughter / Grandson',
        photo       : 'img/mm.jpg'
    },

    {
        num          : '07',
        nam         : 'Hasan Anamul',
        age         : 23,
        phn         : '+880 1584 555 777',
        location    : 'Khulna, Dhaka, Bangladesh',
        relation    : 'Aunt / Uncle / Niece / Nephew',
        photo       : 'img/ha.jpg'
    },

    {
        num          : '08',
        nam         : 'Al-Amin Hossain',
        age         : 25,
        phn         : '+880 1684 213 254',
        location    : 'Mirpur, Dhaka, Bangladesh',
        relation    : 'Great-grandmother / Great-grandfather / Great-granddaughter',
        photo       : 'img/aah.jpg'
    },

    {
        num          : '09',
        nam         : 'Prince Islam Pew',
        age         : 23,
        phn         : '+880 1684 987 246',
        location    : 'Dhaka, Bangladesh',
        relation    : 'Mother / Father / Son',
        photo       : 'img/pip.jpg'
    },

    {
        num          : '10',
        nam         : 'Mizanur Rahman Prince',
        age         : 24,
        phn         : '+880 1684 471 777',
        location    : 'Dinajpur, Dhaka, Bangladesh',
        relation    : 'Aunt / Uncle / Niece / Nephew',
        photo       : 'img/mrp.jpg'
    }

];


const getClass3 = document.querySelector('.table_data');


family.forEach((showDetails) => {
    getClass3.innerHTML += `
    
    <tr>
        <td>${showDetails.num}</td>
        <td>${showDetails.nam}</td>
        <td>${showDetails.age} Years</td>
        <td>${showDetails.phn}</td>
        <td>${showDetails.location}</td>
        <td>${showDetails.location}</td>
        <td><img class="tdImg" src="${showDetails.photo}" alt=""></td>
    </tr>
    
    `;
});




