'use strict';

const CHINA = 'Китай';
const CHILE = 'Чили';
const AUSTRALIA = 'Австралию';
const INDIA = 'Индию';
const JAMAICA = 'Ямайку';

const chooseChina = 'китай';
const chooseChile = 'чили';
const chooseAustralia = 'фвстралия';
const chooseIndia = 'индия';
const chooseJamaica = 'ямайка';

const costChina = 100;
const costChile = 250;
const costAustralia = 170;
const costIndia = 80;
const costJamaica = 120;

let message;

const userChoose = prompt('В какую страну необходима доставка?', ['Китай']);
if (userChoose === null) {
    const messageAlert = 'Необходимо выбрать страну доставки!';
    alert(messageAlert);
} else {
    switch (userChoose.toLowerCase()) {
        case chooseChina:
            message = `Доставка в ${CHINA} будет стоить ${costChina} кредитов.`;
            break;

        case chooseChile:
            message = `Доставка в ${CHILE} будет стоить ${costChile} кредитов.`;
            break;

        case chooseAustralia:
            message = `Доставка в ${AUSTRALIA} будет стоить ${costAustralia} кредитов.`;
            break;

        case chooseIndia:
            message = `Доставка в ${INDIA} будет стоить ${costIndia} кредитов.`;
            break;

        case chooseJamaica:
            message = `Доставка в ${JAMAICA} будет стоить ${costJamaica} кредитов.`;
            break;

        default:
            message = 'В вашу страну доставка не доступна!';
    }
}
if (message === undefined) {
    location.reload();
}

console.log(message);