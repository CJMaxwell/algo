const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//1. MAP
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names

// 2. REDUCE
// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
const result = characters.reduce((acc, cur) => {
    let sex = cur.gender;

    if (acc[sex] == null) {
        acc[sex] = []
    };
    acc[sex].push(cur.name);

    return acc;
}, {});

console.log(result);

const res = characters.reduce((acc, cur) => {
    let sex = cur.gender;

    if (acc[sex]) {
        acc[sex]++
    } else {
        acc[sex] = 1
    }

    return acc;
}, {});

console.log(res);
// Get the total number of characters by eye color(hint.a map of eye color to count)

// 3. FILTER
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters

// 4. SORT
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender

// 5. EVERY
// Does every character have blue eyes ?
// Does every character have mass more than 40 ?
// Is every character shorter than 200 ?
// Is every character male ?

// 6. SOME
// Is there at least one male character ?
// Is there at least one character with blue eyes ?
// Is there at least one character taller than 200 ?
// Is there at least one character that has mass less than 50 ?

