/**
 * Created by Administrator on 2015/3/27.
 */
module.exports = function(barcode,price) {
    this.barcode = barcode;
    this.price=price;
    this.getPrice = function () {
        return this.price;
    };
    this.getBarcode = function () {
        return this.barcode;
    };
};