//  regular function

// function sum(a, b) {
//   return console.log(a + b);
// }
// sum(2, 6);

// //  anonymous function

// const sum1 = (name='shyam') => {
//   return console.log(`my name is:--${name} `);
// };
// sum1('ram');

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function (n) {
//   console.log(n);
// });

// const squares = numbers.map(function (n) {
//   return n ** 2;
// });

// console.log(squares);

//  filter

// let odd = numbers.filter((n) => {
//  return n % 2 !== 0;
// });

// console.log(odd);

//  reduce

const sum = numbers.reduce((accum, curValue) => {
  return (accum += curValue);
}, 0);

console.log("sum:---", sum);
