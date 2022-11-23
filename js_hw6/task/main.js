/*- Знайти та вивести довижину наступних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/

/*let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';

console.log(string1.length, string2.length, string3.length);*/

/***********************************************************************************************/

/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/

/*let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';

console.log(string1.toUpperCase(),string2.toUpperCase(),string3.toUpperCase());*/

/***********************************************************************************************/

/*Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/

/*let string1 = 'HELLO WORLD';
let string2 = 'LOREM IPSUM';
let string3 = 'JAVASCRIPT IS COOL';

console.log(string1.toLowerCase(),string2.toLowerCase(),string3.toLowerCase());*/

/***********************************************************************************************/

/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/

/*    let str = ' dirty string   ';
    console.log(str.trim());*/

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/


/*let str = 'Ревуть воли як ясла повні';
console.log(str.split(' '));*/
/***********************************************************************************************/

/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в
масиві на стрінгові.*/

/*let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let arrMap = arr.map((item) => (item + ''));
console.log(arrMap);*/

/***********************************************************************************************/

/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого,
або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/

/*let nums = [11, 21, 3];

function sortNum(nums, direction) {
    if (direction === 'ascending') {
        nums.sort((i1, i2) => (i1 - i2));
    } else if (direction === 'descending') {
        nums.sort((i1, i2) => (i2 - i1));
    }
    return nums
}

console.log(sortNum(nums, 'descending'))*/
/***********************************************************************************************/

/*- є масив
-- відсортувати його за спаданням за monthDuration*/

/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let regres = coursesAndDurationArray.sort((a,b) =>(b.monthDuration-a.monthDuration));
console.log(regres);*/

/*-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/

/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let moreFive = coursesAndDurationArray.filter((item) => (item.monthDuration>5));
console.log(moreFive);*/

/***********************************************************************************************/


/*описати колоду карт
{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}*/


// let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
// let cardSuitsBlack = ['spade', 'clubs'];
// let cardSuitsRed = ['diamond', 'heart'];
// let jockerBlack = {color: 'black', cardSuit: 'none', value: 'jocker'};
// let jockerRed = {color: 'red', cardSuit: 'none', value: 'jocker'};
// let deck = [];
// deck.push(jockerBlack, jockerRed);
// for (let j = 0, y = 0; j < cardSuitsBlack.length, y < cardSuitsRed.length; j++, y++) {
//     for (const value of values) {
//         let cardBlack = {
//             color: 'black',
//             cardSuit: cardSuitsBlack[j],
//             cardValue: value
//         }
//         let cardRed = {
//             color: 'red',
//             cardSuit: cardSuitsRed[y],
//             cardValue: value
//         }
//         deck.push(cardBlack, cardRed)
//     }
// }
// console.log(deck);
//
//
// // - знайти піковий туз
// let spadeAce = deck.filter ((card) => (card.cardSuit === 'spade' && card.cardValue === 'ace'));
// console.log(spadeAce);
// // - всі шістки
// let allSix = deck.filter ((card) => (card.cardValue === '6'));
// console.log(allSix);
// // - всі червоні карти
// let allRed = deck.filter ((card) => (card.color === 'red'));
// console.log(allRed);
// // - всі буби
// let allDiamonds = deck.filter ((card) => (card.cardSuit === 'diamond'));
// console.log(allDiamonds);
// // - всі трефи від 9 та більше
// let clubsMoreNine = deck.filter ((card) => (card.cardSuit === 'clubs' && (card.cardValue >= '9' ||  card.cardValue === '10')));
// console.log(clubsMoreNine);

/***********************************************************************************************/

/*Додатково по reduce
Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}*/

/*
let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let cardSuitsBlack = ['spade', 'clubs'];
let cardSuitsRed = ['diamond', 'heart'];
let jockerBlack = {color: 'black', cardSuit: 'none', value: 'jocker'};
let jockerRed = {color: 'red', cardSuit: 'none', value: 'jocker'};
let deck = [];
deck.push(jockerBlack, jockerRed);
for (let j = 0, y = 0; j < cardSuitsBlack.length, y < cardSuitsRed.length; j++, y++) {
    for (const value of values) {
        let cardBlack = {
            color: 'black',
            cardSuit: cardSuitsBlack[j],
            cardValue: value
        }
        let cardRed = {
            color: 'red',
            cardSuit: cardSuitsRed[y],
            cardValue: value
        }
        deck.push(cardBlack, cardRed)
    }
}


let sort = deck.reduce((cardsBySuit, suit) =>{
    if (suit.cardSuit === 'spade'){
        cardsBySuit.spades.push(suit)
    }else if (suit.cardSuit === 'diamond'){
        cardsBySuit.diamonds.push(suit)
    }else if (suit.cardSuit === 'heart'){
        cardsBySuit.hearts.push(suit)
    }else if (suit.cardSuit === 'clubs'){
        cardsBySuit.clubs.push(suit)
    }
    return cardsBySuit;
    },
    {spades:[], diamonds:[], hearts:[], clubs:[]});
console.log(sort);*/
