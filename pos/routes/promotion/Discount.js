/**
 * Created by Administrator on 2015/3/27.
 */
//var Calculate = require('../domain/Calculate.js');
var Cart = require('../model/Cart.js');

var discount = [{barcode: 'ITEM000001', rate: 75}, {barcode: 'ITEM000005', rate: 90}];


module.exports = function (rate) {
    this.rate = rate;
    this.getRate = function () {
        return this.rate;
    };
};
var rate;
module.exports.calculate = function (item) {
    if (item.barcode == discount[0].barcode)
        rate = discount[0].rate;
    else if (item.barcode == discount[1].barcode)
        rate = discount[1].rate;
    else rate = 100;
    return new Cart(item.getBarcode(), item.getPrice() * rate / 100, item.getNumber());
};



