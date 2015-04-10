/**
 * Created by Administrator on 2015/4/9.
 */
var fs = require('fs');


var readline = require('readline');
var Discount=require ('../promotion/Discount.js');
var rl = readline.createInterface({
    input: fs.createReadStream('../resources/discount_promotion.txt'),
    output: process.stdout,
    terminal: false
});
function convert() {
    rl.on('line', function (line) {
        if (!line) return undefined;
        discountArray=[];
        rate=new Discount(parseFloat(line.split(":")[1]));
        discountArray.push(line.split(":")[0],rate);
        console.log(line.split(":")[0],parseFloat(line.split(":")[1]));
        return discountArray;
    });
}
convert();