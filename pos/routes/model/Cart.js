/**
 * Created by Administrator on 2015/3/27.
 */
var Item = require('./Item.js');
module.exports = function (barcode, price, number) {
    var item = new Item(barcode, price);
    this.getBarcode = function () {
        return item.barcode;
    };
    this.getPrice = function () {
        return item.price;
    };
    this.number = number;
    this.barcode = barcode;
    this.price = price;

    // this.getItem = function () {return this.item();};
    this.getNumber = function () {
        return this.number;
    };
    this.getTotal = function () {
        return this.number * item.getPrice();
    };


};
