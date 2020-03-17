'use strict';

const total = 100;
const ordered = 10;
const isInRange = ordered >= total;
let message;
if (isInRange) {
    message = 'На складе недостаточно товаров 😞';
} else {
    message = 'Заказ оформлен, с вами свяжется менеджер 😊';
}

console.log(message);