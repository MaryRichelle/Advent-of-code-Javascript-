const { log } = require("console");
const path = require("path");
const readFile = require(path.resolve(__dirname, "../main.js"));
const data = readFile("./input.txt");
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g
const mulInstructions = data.match(regex)
  .map(mul => mul.match(/mul\((\d+),(\d+)\)/))
  .reduce((acc, currVal) => {
    acc += currVal[1] * currVal[2]
    return acc
  }, 0)

log(mulInstructions)