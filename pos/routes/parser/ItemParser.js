/**
 * Created by Administrator on 2015/4/9.
 */
var fs = require('fs');

var Item = require('../model/Item.js');
var readline = require('readline');
var rl = readline.createInterface({
    input: fs.createReadStream('../resources/item.txt'),
    output: process.stdout,
    terminal: false
});
//var j = 0;
function convert() {
    rl.on('line', function (line) {
        if (!line) return undefined;
         // item[j] = new Item(line.split(":")[0], parseFloat(line.split(":")[1]));
        console.log(line.split(":")[0], parseFloat(line.split(":")[1]));
      //    j++;
        return new Item(line.split(":")[0], parseFloat(line.split(":")[1]));
    });
}
convert();