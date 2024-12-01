const { log } = require("console");
const fs = require("fs");

const left = [];
const right = [];
let total = 0;

function addToArray(arrayOfNumbers, number) {
  arrayOfNumbers.push(Number(number));
}
function sortArray(array) {
  return array.sort((a, b) => a - b);
}

const data = fs.readFileSync('./data.txt', 'utf8');
const arrayOfData = data.trim().split('\n');

for (const line of arrayOfData) {
  const [a, b] = line.split(/\s+/);
  addToArray(left, a);
  addToArray(right, b);
}
sortArray(left);
sortArray(right);
for (let i = 0; i < arrayOfData.length; i++) {
  total += Math.abs(left[i] - right[i]);
}
log(total);
