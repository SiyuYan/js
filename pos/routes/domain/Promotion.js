/**
 * Created by Administrator on 2015/4/7.
 */
var Item = require('../model/Cart.js');
    var promotions= {};
item=new Item();
/*function attach(promotionItems){
    promotionItems.forEach(function(promotionItem) {
        var existPromotions = promotions[promotionItem.barcode];
        if(!existPromotions) {
            promotions[promotionItem.barcode] = [];
        }
        promotions[promotionItem.barcode].push(promotionItem.promotion);
    });
}*/
module.exports = function(item){
    var promotions = promotions[item.barcode];
    var newItem = new Item(item);
    if(promotions) {
        promotions.forEach(function(promotion){
            newItem = promotion(newItem);
        });
    }
    return newItem;
};