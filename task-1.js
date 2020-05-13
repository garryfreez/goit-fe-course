'use strict';

const namesArray = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const numbersArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function(array) {
    for (let i = 0; i < array.length; i += 1) {
        let numberCount = `${i + 1} -`;
        let nameCount = array[i];
        console.log(numberCount, nameCount);
    }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(namesArray);

logItems(numbersArray);