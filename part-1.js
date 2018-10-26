var fs = require('fs')
var fileContents = fs.readFileSync('names.txt', 'utf-8')
// console.log(fileContents)
var namesArray = fileContents.split(/\r?\n/)
// console.log(namesArray)
var reverseNameArray = namesArray.reverse()
// console.log(reverseNameArray)
var joinedNameArray = reverseNameArray.join("\n")
// console.log(joinedNameArray)
fs.writeFileSync('names-reversed.txt', joinedNameArray, 'utf-8')

var newFileContents = fs.readFileSync('names-reversed.txt', 'utf-8')
// console.log(newFileContents)
var fileContentArray = newFileContents.split(/\r?\n/)

for (var name of fileContentArray) {
    var nameArray = name.split("")
    var reverseNameArray = nameArray.reverse()
    var reverseNamesString = nameArray.join("")
    fs.writeFileSync(name+'.txt', reverseNamesString, 'utf-8')
  }