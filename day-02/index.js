// Grab data from input.txt
var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var arrInput = text.split("\n")

var counter = 0;

for (var pos in arrInput) {
  const values = arrInput[pos].split(" ")
  // there is no concept of indexing at 0, so we have to account for it by subtracting 1
  var lowest = values[0].split("-")[0] -1
  var highest = values[0].split("-")[1] -1

  var char = values[1].replace(":", "")

  var password = values[2]

  console.log(lowest, highest, char, password)
  if (checkChar(lowest, highest, char, password)) {
    counter++
  }
}

console.log('counter - ', counter)

function checkChar(position1, position2, character, password){
    if ((password[position1] == character || password[position2] == character) 
        && !(password[position1] == character && password[position2] == character)
      ){
      return true
    }

    return false
}