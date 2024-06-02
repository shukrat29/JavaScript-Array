const val = [
  'shukra',
  2,
  76,
  'Tamang',
  null,
  undefined,
  {},
  [2, 'sam', {}],
  () => {},
];
console.log(val);

const fruits = ['banana', 'apple', 'orange', 'mango'];
console.log(fruits);
console.log(fruits.length);
const value = fruits[3];
console.log(value);

// adding data at the end
// push
fruits.push('watermelon');
console.log(fruits);

// adding item at the start of an array
fruits.unshift('peach');
console.log(fruits);

// adding item somewhere in between
// splice
fruits.splice(2, 0, 'kaaju');
console.log(fruits);

// deleting items
// deleting items from the end of an array
fruits.pop();
console.log(fruits);
