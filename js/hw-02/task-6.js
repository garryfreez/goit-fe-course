'use strict';
// Вопрос: как сделать проверку на ввод цифры а не буквы? Пробовал через NaN после input и преобразования в Number но чёто не пошло у меня.
let input;
const numbers = [];
let total = 0;

const arrayAddAll = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i += 1) {
        total += array[i];
    }
    return total;
};

do {
    input = prompt('Введите число');
    if (input != null) {
        let intervalValue = Number(input);
        numbers.push(intervalValue);
    }
} while (input != null); {
    if (numbers.length > 0) {
        total = arrayAddAll(numbers);
    } else {
        console.log('Введите числа чтобы вычеслить их сумму');
    }
}

console.log(`Общая сумма чисел равна ${total}`);