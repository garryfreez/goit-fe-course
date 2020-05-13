'use strict';
// Расчёт основываясь на цене за слово
const calculateEngravingPricePerWord = function(message, pricePerWord = 10) {
    const args = message.split(' ');
    console.log(`Ко-во слов ${args.length}`);
    return args.length * pricePerWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    calculateEngravingPricePerWord(
        'Proin sociis natoque et magnis parturient montes mus',
    ),
    'Цена за слово по умолчанию (10)',
); // 80

console.log(
    calculateEngravingPricePerWord(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ),
    'Цена за слово 20',
); // 160

console.log(
    calculateEngravingPricePerWord('Donec orci lectus aliquam est magnis', 40),
    'Цена за слово 40',
); // 240

console.log(
    calculateEngravingPricePerWord('Donec orci lectus aliquam est magnis', 20),
    'Цена за слово 20',
); // 120
//
//
//
//
// Расчёт основываясь на цене за символ
const calculateEngravingPricePerSymbol = function(
    message,
    pricePerSymbol = 1,
) {
    const args = Array.from(message);
    console.log(`Ко-во символов ${args.length}`);
    return args.length * pricePerSymbol;
};

console.log(
    calculateEngravingPricePerSymbol(
        'Proin sociis natoque et magnis parturient montes mus',
    ),
    'Цена за символ по умолчанию (1)',
);

console.log(
    calculateEngravingPricePerSymbol(
        'Proin sociis natoque et magnis parturient montes mus',
        2,
    ),
    'Цена за символ 2',
);

console.log(
    calculateEngravingPricePerSymbol('Donec orci lectus aliquam est magnis', 3),
    'Цена за символ 3',
);

console.log(
    calculateEngravingPricePerSymbol('Donec orci lectus aliquam est magnis', 4),
    'Цена за символ 4',
);