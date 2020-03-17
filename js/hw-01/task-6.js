'use strict';

let input;
let interval;
let total = 0;

do {
    input = prompt('Введите число');
    interval = Number(input);
    total = total + interval;
    console.log(total);
} while (input != null); {
    alert(`Общая сумма чисел равна ${total}`);
    location.reload();
}