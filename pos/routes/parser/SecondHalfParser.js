/**
 * Created by Administrator on 2015/4/9.
 */
var fs = require('fs');
var readline = require('readline');
var SecondHalf = require('../promotion/SecondHalf.js');
var rl = readline.createInterface({
    input: fs.createReadStream('../resources/second_half_price_promotion.txt'),
    output: process.stdout,
    terminal: false
});
function convert() {
    rl.on('line', function (line) {
        if (!line) return undefined;
        secondhalfArray = [];
        secondhalfArray.push(line.split(":")[0], new SecondHalf(parseFloat(line.split(":")[0])));
        console.log(secondhalfArray);
        return secondhalfArray;

    });
}
convert();