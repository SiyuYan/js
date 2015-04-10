/**
 * Created by Administrator on 2015/4/8.
 */

var reach;
var off;
var Cart = require('../model/Cart.js');

module.exports = function (reach, off) {
    this.reach = reach;
    this.off = off;
};
function getReach() {
    return reach;
}

function getOff() {
    return off;
}
item = new Cart();
function calculate(item) {
    var total = item.getTotal();
    var new_total = total;
    while (new_total >= reach) {
        total -= off;
        new_total -= off;
        new_total -= reach;
    }
    return new Cart(item.getItem().getBarcode(), total / item.getNumber(), item.getNumber());
}
