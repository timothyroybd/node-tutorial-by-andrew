const fs = require("fs");
const { parse } = require("path/posix");

// Step 1: Load and Parse JSON Data
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

//Step 2 Change the data
user.name = "Timothy";
user.age = 27;

//Step 3 Stringify the JSON object and overwrite it

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
