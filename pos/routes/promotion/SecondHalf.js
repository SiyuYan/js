/**
 * Created by Administrator on 2015/4/8.
 */

var Cart = require('../model/Cart.js');
secondhalf = { 'ITEM000001':true, 'ITEM000003':true};

module.exports = function () {

};
module.exports.calculate = function (item) {
   if(secondhalf[item.barcode]){
        if (item.getNumber() >= 2) {
            var halfnumber = parseInt(item.getNumber() / 2);
            var halfprice = item.getPrice() / 2;
            var total = halfprice * halfnumber + (item.getNumber() - halfnumber) * item.getPrice();
            return new Cart(item.getBarcode(), total / item.getNumber(), item.getNumber());
        } else
            return item;
    }else return item;
};
