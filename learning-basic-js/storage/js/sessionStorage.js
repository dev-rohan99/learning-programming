// Session Storage 


const store1 = [
    {
        nam         : 'Korim Molla',
        age         : 35,
        skills      : 'Mern Stuck'
    },

    {
        nam         : 'Shahadot Hossain',
        age         : 45,
        skills      : 'dJango'
    }
];


sessionStorage.setItem('Skills', store1[0].skills);
sessionStorage.setItem('Data', JSON.stringify(store1));
sessionStorage.setItem('Name', store1[1].nam);
sessionStorage.setItem('Age', store1[1].age);


console.log(sessionStorage.getItem("Skills"));

let get = sessionStorage.getItem('Data');
console.log(JSON.parse(get));
