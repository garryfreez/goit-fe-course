'use strict';

const allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

let isValid;
let isUnique;
let message;
let login = prompt();
const isLoginValid = function(login) {
    if (login.length > 3 && login.length < 17) {
        isValid = true;
    } else {
        isValid = false;
    }
    return isValid;
};

const isLoginUnique = function(allLogins, login) {
    if (allLogins.includes(login)) {
        isUnique = false;
    } else {
        isUnique = true;
    }
    return isUnique;
};

const addLogin = function(allLogins, login) {
    isLoginValid(login);
    if (isValid === true) {
        isLoginUnique(allLogins, login);
        if (isUnique === true) {
            allLogins.push(login);
            message = 'Логин успешно добавлен!';
        } else {
            message = 'Такой логин уже используется!';
        }
    } else {
        message = 'Ошибка! Логин должен быть от 4 до 16 символов';
    }
    return message;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(allLogins, login));
// console.log(addLogin(allLogins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(allLogins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(allLogins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(allLogins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(allLogins);