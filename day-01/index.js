// Grab data from input.txt
var fs = require("fs");
var text = fs.readFileSync("./input2.txt", "utf-8");
var arrInput = text.split("\n")

function SumTwo(arrayOfNumbers, target){
  for (var number in arrayOfNumbers) {
    for(var secNumber in arrayOfNumbers){
      if (
        parseInt(arrayOfNumbers[number]) +
        parseInt(arrayOfNumbers[secNumber])
        == target)
      {
        console.log(arrayOfNumbers[number] * arrayOfNumbers[secNumber])
        return
      }
    }
  }
}



function SumThree(arrayOfNumbers, target){
  for (var number in arrayOfNumbers) {
    for(var secNumber in arrayOfNumbers){
      for(var thirdNumber in arrayOfNumbers){
        if (
          parseInt(arrayOfNumbers[number]) +
          parseInt(arrayOfNumbers[secNumber]) +
          parseInt(arrayOfNumbers[thirdNumber]) 
          == target)
        {
          console.log(arrayOfNumbers[number] * arrayOfNumbers[secNumber] * arrayOfNumbers[thirdNumber]);
          return
        }
      }
    }
  }
}
//Part 1
SumTwo(arrInput, 2020)
//Part 2
SumThree(arrInput, 2020)