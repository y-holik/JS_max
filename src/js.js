let array1 = [1,2]
let array2 = '5';

if (array1 === array2) {
    console.log(true);
    } else {
        console.log(false);
    }



function undef(number1, number2) {
    // if ((typeof(number1) === "boolean") || (typeof(number2) === "boolean")) {
    //     return null;
    // } 
    // console.log(typeof(number1));
    // if (typeof(number1) == 'object') {
    //     return null;
    // }
    console.log(array1);
    number1 = Number(number1);
    number2 = Number(number2);
    console.log(number1, number2);
    // if (typeof(number1) !== 'number') {
    //     return null;
    // } 
    // if (typeof(number2) !== 'number') {
    //     return null;
    // }
    console.log(typeof(number1));

    let und;
    const sum = number1 + number2;
    return sum;
}

console.log(undef(...array1));


const obj = {
    id: 1,
    name: 'max',
    d: ['hui', 'pizda', 'golova']
};

// console.log(obj.array[length]);
const a = (obj.d.length);
console.log(obj.d[a-1]);

// const first = 2342342;
// console.log(first[1])
const second = [];
if (second) {
    console.log('pravilno');
} else {
    console.log('ne pravilno');
}

let fruits = ['apple', 'orange', 'huiorange', 'kukumber', 'hvatit'];
const fruitsareawesome = {};

// for (const fruit of fruits) {
//     // const index = fruits.indexOf(fruit); // 0
//     // fruits[index] = fruit + '!';
//     fruitsareawesome.push(fruit);

// }

for (let iter = 0; iter < fruits.length; iter++) {
    // Object.assign(fruitsareawesome, {`${iter}`: iter})
    fruitsareawesome[fruits[iter]] = iter + 1;
    // fruitsareawesome.fruits[iter] = iter + 1;
}

console.log(fruitsareawesome);

let tt = 3;
while (true) {
    tt++;
    if (tt == 1024) {
        break;
    } break;
    if (tt % 2 == 0) {
        continue;
    }

    // code
    console.log(tt);

} 


const owoce = [
    'Apple', 'Banana', 'Orange', 'Mango', 'Strawberry',
    'Blueberry', 'Raspberry', 'Pineapple', 'Peach', 'Grapes',
    'Watermelon', 'Kiwi', 'Cherry', 'Pear', 'Plum',
    'Lemon', 'Lime', 'Avocado', 'Coconut', 'Pomegranate',
    'Cranberry', 'Apricot', 'Blackberry', 'Nectarine', 'Papaya',
    'Mango', 'Fig', 'Guava', 'Passion Fruit', 'Kiwi',
    'Star Fruit', 'Persimmon', 'Dragon Fruit', 'Cantaloupe', 'Honeydew',
    'Gooseberry', 'Lychee', 'Clementine', 'Tangerine', 'Grapefruit',
    'Kumquat', 'Quince', 'Boysenberry', 'Currant', 'Date',
    'Elderberry', 'Feijoa', 'Plantain', 'Rambutan', 'Salmonberry',
    'Soursop', 'Ugli Fruit', 'Ackee', 'Chayote', 'Durian',
    'Jujube', 'Langsat', 'Longan', 'Loquat', 'Pawpaw',
    'Pepino', 'Pummelo', 'Sapote', 'Squash', 'Tamarillo',
    'Yuzu', 'Jackfruit', 'Lychee', 'Persimmon', 'Passion Fruit',
    'Dragon Fruit', 'Ackee', 'Chayote', 'Durian', 'Jujube',
    'Langsat', 'Longan', 'Loquat', 'Pawpaw', 'Pepino',
    'Pummelo', 'Sapote', 'Squash', 'Tamarillo', 'Yuzu',
    'Jackfruit', 'Pineberry', 'White Currant', 'Red Currant', 'Pink Lemonade',
  ];
// const pattern = /[aA]/;
for (const owoc of owoce) {
    if (/[aA]/.test(owoc)) {
        continue;
    }
    console.log(owoc);
    
}
