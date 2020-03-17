// 'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

let userWrite = prompt('Введите пароль администратора:', ['************']);

let message;

if (userWrite === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert(message);
} else if (userWrite === null) {
    message = 'Отменено пользователем!';
    alert(message);
} else if (userWrite != ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
}

// console.log(message);