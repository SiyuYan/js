/**
 * Created by Administrator on 2015/3/27.
 */
var Cart = require('../model/Cart.js');
var Item = require('../model/Item.js');
var Promotion = require('./Promotion.js');
var Discount = require('../promotion/Discount.js');

cart = new Cart();
item = new Item();
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
discount = [{
    barcode: 'ITEM000001',
    rate: 75
},
    {
        barcode: 'ITEM000005',
        rate: 90
    }];
Discount.rate = discount;

cartMap = {};
var beforePromotionTotal = 0;
var afterPromotionTotal = 0;
function getAfterPromotionTotal() {
    return afterPromotionTotal;
}
function calculate() {
    for (var k = 0; cart[k] != undefined; k++) {
        beforePromotionTotal += cart[k].number * cart[k].price;
    }
    return beforePromotionTotal;
}
module.exports = {
    getBeforePromotionTotal: function () {
        return beforePromotionTotal;
    }
};
calculate();
