/**
 * Created by Administrator on 2015/4/10.
 */
var Calculate = require('../domain/Calculate.js');
var Cart = require('../model/Cart.js');
var Discount = require('../promotion/Discount.js');
var SecondHalf = require('../promotion/SecondHalf.js');
var discount = [{barcode: 'ITEM000001', rate: 75}, {barcode: 'ITEM000005', rate: 90}];
var cart = new Cart('ITEM000001', 40, 1);
var cart2 = new Cart('ITEM000005', 60, 1);
var cart3 = new Cart('ITEM000001', 40, 3);
var cart4 = new Cart('ITEM000003', 50, 2);
var cart5 = new Cart('ITEM000005', 60, 2);
var cart6 = new Cart('ITEM000001', 40, 1);
var cart7 = new Cart('ITEM000005', 60, 1);
var arr = [cart,cart2,cart3,cart4,cart5,cart6,cart7];
dis=new Discount(discount[0].rate);
item.rate=dis.getRate();
console.log(dis.getRate());
console.log("购物明细  （数量 单价 小计）");
var beforeTotal = 0;
var afterTotal = 0;
function calculate() {
    for (var k = 0; arr[k] != undefined; k++) {
        {
            for (var j = 1; arr[k + j] != undefined; j++) {
                {
                    if (arr[k].barcode == arr[k + j].barcode) {
                        arr[k].number += arr[k + j].number;
                        arr[k + j].number = 0;
                    }
                }
            }
        }
    }
    for (var i = 0; arr[i] != undefined; i++) {
        var price = arr[i].getPrice();
        beforeTotal += arr[i].getTotal();
        var newCart = Discount.calculate(arr[i]);
        newCart = SecondHalf.calculate(newCart);
        afterTotal += newCart.getTotal();
        if (arr[i].number != 0)
        console.log(arr[i].getBarcode() + "  " + arr[i].getNumber() + "  " + price + "   " + newCart.getTotal());
       // console.log(beforeTotal);
       // console.log(afterTotal);
    }
}
calculate();
console.log("总计金额 （优惠前 优惠后 优惠差价）");
console.log( afterTotal + "    " + beforeTotal + "   " + afterTotal + "   " + (beforeTotal - afterTotal));