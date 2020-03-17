'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const userChoise = Number(
    prompt('Сколько дроидов Вы хотите приобрести?', ['3']),
);
const totalPrice = pricePerDroid * userChoise;
const creditsAfterShopping = credits - totalPrice;
let message;

if (userChoise === 0) {
    message = 'Отменено пользователем!';
    console.log(message);
} else if (totalPrice <= credits) {
    message = `Вы купили дроидов в количестве ${userChoise} шт, на счету осталось ${creditsAfterShopping} кредитов.`;
    console.log(message);
} else {
    message = 'Недостаточно средств на счету!';
    console.log(message);
}