// Grab data from input.txt
var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var arrayOfNumbers = text.split("\n")

for (var number in arrayOfNumbers) {
  for(var secNumber in arrayOfNumbers){
    if (parseInt(arrayOfNumbers[number]) + parseInt(arrayOfNumbers[secNumber]) == 2020){
      console.log(arrayOfNumbers[number] * arrayOfNumbers[secNumber])
    }
  }
}