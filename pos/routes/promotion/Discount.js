/**
 * Created by Administrator on 2015/3/27.
 */
var Calculate = require('../domain/Calculate.js');
var Cart = require('../model/Cart.js');
var discount = {'ITEM000001' : 75, 'ITEM000005' : 90};

module.exports = function (rate) {
    this.rate = rate;
    this.getRate = function () {
        return this.rate;
    };
};
module.exports.calculate = function (item) {
    var rate = discount.hasOwnProperty(item.barcode) ? discount[item.barcode] : 100;
    return new Cart(item.getBarcode(), item.getPrice() * rate / 100, item.getNumber());
};



