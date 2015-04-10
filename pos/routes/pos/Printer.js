/**
 * Created by Administrator on 2015/4/8.
 */
var Calculate = require('../domain/Calculate.js');
var Item = require('../model/Item.js');
var Cart = require('../model/Cart.js');
var Discount = require('../promotion/Discount.js');
var SecondHalf = require('../promotion/SecondHalf.js');
item = [
    {barcode: 'ITEM000001', price: 40},
    {barcode: 'ITEM000005', price: 60},
    {barcode: 'ITEM000001', price: 40},
    {barcode: 'ITEM000003', price: 50},
    {barcode: 'ITEM000005', price: 60},
    {barcode: 'ITEM000001', price: 40},
    {barcode: 'ITEM000005', price: 60}
];
cart = [
    {barcode: 'ITEM000001', price: item[0].price, number: 1},
    {barcode: 'ITEM000005', price: item[1].price, number: 1},
    {barcode: 'ITEM000001', price: item[2].price, number: 3},
    {barcode: 'ITEM000003', price: item[3].price, number: 2},
    {barcode: 'ITEM000005', price: item[4].price, number: 2},
    {barcode: 'ITEM000001', price: item[5].price, number: 1},
    {barcode: 'ITEM000005', price: item[6].price, number: 1}];
discount = [{barcode: 'ITEM000001', rate: 75}, {barcode: 'ITEM000005', rate: 90}];
secondhalf = [{barcode: 'ITEM000001'}, {barcode: 'ITEM000003'}];
var price = 0;
var newprice = [];
console.log("购物明细  （数量 单价 小计）");
function calculate() {
    for (var i = 0; cart[i] != undefined; i++) {
        {
            newprice[i] = cart[i].price;
            for (var j = 1; cart[i + j] != undefined; j++) {
                {
                    if (cart[i].barcode == cart[i + j].barcode) {
                        cart[i].number += cart[i + j].number;
                        cart[i + j].number = 0;
                    }
                }
            }
        }
    }
    for (var m = 0; cart[m] != undefined; m++) {
        for (var n in discount) {
            if (discount[n].barcode == cart[m].barcode) {
                cart[m].price = cart[m].price * discount[n].rate / 100;
            }
        }
    }
    for (var x = 0; cart[x] != undefined; x++) {
        for (var t in secondhalf) {
            if (secondhalf[t].barcode == cart[x].barcode) {
                if (cart[x].number >= 2) {
                    var halfnumber = parseInt(cart[x].number / 2);
                    var halfprice = cart[x].price / 2;
                    var total = halfprice * halfnumber + (cart[x].number - halfnumber) * cart[x].price;
                    cart[x].price = total / cart[x].number;
                }
            }
        }
    }
    for (var k = 0; cart[k] != undefined; k++) {
        if (cart[k].number != 0)
            console.log(cart[k].barcode + "  " + cart[k].number + "   " + newprice[k] + "   " + cart[k].number * cart[k].price);
        price += cart[k].number * cart[k].price;
    }
}
calculate();
console.log("总计金额 （优惠前 优惠后 优惠差价）");
var sub = Calculate.getBeforePromotionTotal() - price;
console.log(price + '      ' + Calculate.getBeforePromotionTotal() + '      ' + price + '      ' + sub);
