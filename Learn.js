'use strict';
var price = 8.99, quantity= 2;
var productView = {
    price: 7.99,
    quantity: 1,
    calculateValue() {
        return this.price*this.quantity;
    }
}
console.log(productView.calculateValue());