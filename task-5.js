'use strict';

// Вопрос: в инклудс строки можно добавить несколько значений? Через запятую пробовал ('spam','sale') и через or ||, только первый видит.

// Этот рабочий вариант мне кажеться слишком длинным
// const checkForSpam = function(message) {
//     const stringToLow = message.toLowerCase();
//     let result;

//     if (stringToLow.includes('spam')) {
//         result = true;
//     } else if (stringToLow.includes('sale')) {
//         result = true;
//     } else {
//         result = false;
//     }

//     return result;
// };

// И этот тоже, такое чувство что есть что-то намного проще
// const checkForSpam = function(message) {
//     const stringToLow = message.toLowerCase();
//     let result;

//     if (stringToLow.includes('spam') || stringToLow.includes('sale')) {
//         result = true;
//     } else {
//         result = false;
//     }

//     return result;
// };

const checkForSpam = function(message) {
    const stringToLow = message.toLowerCase();
    let result;

    if (stringToLow.includes('spam') || stringToLow.includes('sale')) {
        result = true;
    } else {
        result = false;
    }

    return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true