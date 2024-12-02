const { log } = require("console");

const path = require("path");
const readFile = require(path.resolve(__dirname, "../main.js"));
const data = readFile("./data.txt");
const reports = data.split("\n").map(line => line.split(" ").map(Number));
let safeCount = 0;

function isSafeReport(report) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < report.length - 1; i++) {
    const difference = report[i + 1] - report[i];

    if (difference < -3 || difference > 3 || difference === 0) {
      return false;
    }

    if (difference < 0) {
      isIncreasing = false;
    }
    if (difference > 0) {
      isDecreasing = false;
    }
  }
  return isIncreasing || isDecreasing
}



for (let i = 0; i < reports.length; i++) {
  if (isSafeReport(reports[i])) {
    safeCount++;
  }
}


console.log("Number of safe reports:", safeCount);