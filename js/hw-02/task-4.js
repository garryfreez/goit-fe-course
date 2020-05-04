'use strict';

// Вопрос: как показать троеточие внаглую после 40 символов понятно а как сохранить целосность слов ? Допустим есть строка больше 40 символов но цельных слов до 40 символов 4, пятое будет обрезано.Как сделать чтобы обрезало по словам а не по символам(чтобы оставило 4 слова и три точки а пятое снесло так как оно не влазит в 40 символов)?

const formatString = function(string) {
    const toString = String(string);

    let result;

    if (toString.length > 40) {
        result = toString.substring(0, 40) + '...';
    } else {
        result = toString;
    }

    return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
// // вернется форматированная строка