// Local storage

const store = [
    {
        nam         : 'Rohan Mostofa',
        age         : 20,
        location    : 'Narail',
    },

    {
        nam         : 'SM Abdullah',
        age         : 21,
        location    : 'Narail',
    }
];



localStorage.setItem('Local Storage', JSON.stringify(store[0]));
localStorage.setItem('Information', JSON.stringify(store[1]));
localStorage.setItem('INFO', JSON.stringify(store[0].nam));
localStorage.setItem('Name', store[1].nam);

localStorage.removeItem('INFO');

console.log(localStorage.getItem('Information'));
