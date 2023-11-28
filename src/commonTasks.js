const emptyArr = [];

const arrayColoured = ['green', 'gray', 'blue', ' red'];

const arrayNumbered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayDiff = ['siski', 4, true, { size: 'doubleD'}];

arrayDiff.pop();
console.log(arrayDiff);

console.log(arrayNumbered.length);

for (let i = 0; i < 10; i++) {
    let swithing = arrayNumbered.pop();
    emptyArr.push(swithing);
}
console.log(emptyArr);

console.log(arrayColoured[0]);
const lastElement = arrayColoured.length;
console.log(arrayColoured[lastElement - 1]);

console.log(arrayColoured.indexOf('gray'));

console.log(emptyArr.slice(2,5));

const joinedArray = [].concat(arrayDiff, arrayColoured);
console.log(joinedArray);

console.log(emptyArr.sort(function(a, b) { return a - b; }));

for (let i = 0; i < arrayColoured.length; i++) {
    console.log(arrayColoured[i]);
}

if (typeof arrayColoured[0] === 'number') { 
    console.log(true);
} else {
    console.log(false);
}

arrayColoured.includes(11);

const newNumber = 11;
arrayColoured.splice([2], 1,  newNumber);
console.log(arrayColoured);

const clonedArray = arrayColoured.splice(0);
console.log(clonedArray);

const deleteElements = clonedArray.splice(0, clonedArray.length)
console.log(deleteElements);
