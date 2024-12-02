const { log } = require("console");

const path = require("path");
const readFile = require(path.resolve(__dirname, "../main.js")); 

const data = readFile("./data.txt");
const arrayOfData = data.trim().split('\n');

const left = [];
const right = [];
let total = 0;
let OccurrencesCount = 0

function addToArray(arrayOfNumbers, number) {
  arrayOfNumbers.push(Number(number));
}
function sortArray(array) {
  return array.sort((a, b) => a - b);
}


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


for (let i = 0; i < left.length; i++) {
  let count = 0;
  for (let j = 0; j < right.length; j++) {
    if (left[i] === right[j]) {
      count++;
    }
  }
  OccurrencesCount += left[i] * count;
}
log(OccurrencesCount)