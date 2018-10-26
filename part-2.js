var fs = require('fs')
var fileContents = fs.readFileSync('shopping-basket.json', 'utf-8')
var data = JSON.parse(fileContents)
for (var item of data.basket) {
    //console.log(item.name)
    //console.log(item.price)
    //console.log(item.quantity)
    console.log(item.name + " $" + item.price * item.quantity)
  }