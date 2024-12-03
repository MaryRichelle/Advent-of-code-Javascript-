const fs = require("fs");
function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf-8"); 
    return data;
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
}

module.exports = readFile;
