/**
 * Created by Administrator on 2015/3/26.
 */
var fs = require('fs');
var Cart = require('../model/Cart.js');
var readline = require('readline');
var rl = readline.createInterface({
    input: fs.createReadStream('../resources/cart.txt'),
    output: process.stdout,
    terminal: false
});
function convert() {
    rl.on('line', function (line) {
        if (!line) return undefined;
        var amount = 1;
        if (line.split('-').length > 1) {
            amount = parseFloat(line.split("-")[1]);
        }
        if (!amount) return undefined;
        //  cart[i] = new Cart(line.split("-")[0],0, amount);
        //   console.log(cart[i]);
        //  i++;
        console.log(line.split("-")[0], 0, amount);
        return {
            barcode: line.split("-")[0],
            price: 0,
            number: amount
        }
    });
}
convert();