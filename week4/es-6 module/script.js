//old
var name = "manish";

//new
let name1 = "abhi";
const name2 = "ram";

//object destructuring

//old method--->

const person = {
  name: "raj",
  age: 26,
};

console.log(person.name, person.age);

//new method--->

const { age, name3 } = {
  name3: "raj",
  age: 26,
};

console.log(age, name3);

//array destructuring----->

//old method--------->

const names = ["abhi", "ayush", 45];

console.log(names[0], names[1], names[2]);

//new method--->

const [names1] = ["abhishek", "raj"];

console.log(names1);

//spread operator------------>

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersCopy = [...numbers];

console.log(numbersCopy);

// import-export system ------------{module:ESModule}