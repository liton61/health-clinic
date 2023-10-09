1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer : The correct answer is B because there's a typo in the code that leads to a ReferenceError when trying to access the undefined variable "greetign". 

2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Answer : The correct answer is C because in JavaScript, when you use the + operator with one or both operands being strings, it performs string concatenation.

3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer : The correct answer is A because In the given code, the info.favoriteFood property is updated to "🍝", but this change does not affect the original food array. Therefore, when you log the food array, it remains the same as it was initially defined, resulting in ['🍕', '🍫', '🥑', '🍔'].

4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer : The correct answer is B because In the sayHi function, you have a parameter name, but when you call the function using sayHi(), you do not provide an argument. In JavaScript, when a function parameter is not provided with a value, it defaults to undefined.

5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer : The correct answer is C because In the code, the forEach method iterates over each element in the nums array. The callback function checks if each element num is truthy (not equal to 0). There are three elements in the array (1, 2, and 3) that meet this condition.