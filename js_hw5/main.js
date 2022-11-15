/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

/*let result;
function rectangle (a, b){
  result = a * b;
}
rectangle(3, 10)
console.log(result)*/

/*-----------------------------------------------------*/

/*-створити функцію яка обчислює та повертає площу кола з радіусом r*/

/*let result;
const P = 3.14;
function circle (r){
  result = P * (r ** 2) ;
}
circle(3);
console.log(result);*/

//
/*-----------------------------------------------------*/

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/

/*let result;
const P = 3.14;
function circle (r, h){
   result = 2*P*r*(h+r);
}
circle(3, 10 );
console.log(result);*/

/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
/*function rectangle (a, b){
    let areaRec = a * b;
    return areaRec
}
const P = 3.14;
function circle (r){
  let areaCir = P * (r ** 2) ;
  return areaCir
}
function cylinder (r, h) {
 let areaCyl = 2 * (circle(3) + P * rectangle(3, 10));
    return areaCyl
}
let cylinderArea = cylinder(3, 10);
console.log(cylinderArea);*/
/*-----------------------------------------------------*/
/*-----------------------------------------------------*/

/*- створити функцію яка приймає масив та виводить кожен його елемент*/

/*function arrWriter (array){
    for (let i = 0; i < array.length; i++) {
    }
}
let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
arrWriter(users);
console.log(users);*/


/*-----------------------------------------------------*/

/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/

/*function createParagraf (someText){
    document.write(`<p>${someText}</p>`)
}
createParagraf('Lorem ipsum dolor sit amet.');*/

/*-----------------------------------------------------*/

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/

/*function createUl (someTet){
    document.write(`<ul>`);
        document.write(`
            <li>${someTet}</li>
            <li>${someTet}</li>
            <li>${someTet}</li>
            `);
    document.write(`</ul>`);
}
createUl('Lorem ipsum dolor sit amet.');*/

/*-----------------------------------------------------*/

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

/*let arr = [];
let n = arr.length;
function createUl (someText, n){
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`
        <li>${someText}</li>
        `);
    }
    document.write(`</ul>`);
}
createUl('Lorem ipsum dolor sit amet.', 5);*/

/*-----------------------------------------------------*/

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/

/*
let arr = [1, 2, 3, 'asd', 'qwe', true, false];
function createUl (n){
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i]
        document.write(`
        <li>${n}</li>
        `);
    }
    document.write(`</ul>`);
}
createUl(arr);*/

/*-----------------------------------------------------*/

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
та виводить їх в документ. Для кожного об'єкту окремий блок.*/

/*function arrWriter (array){
     for (let i = 0; i < array.length; i++){
         let element = array[i];
        document.write(`<div>${element.id} ${element.name} ${element.age}</div>`)
    }
}
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
];
arrWriter(users);*/

/*-----------------------------------------------------*/

/*- створити функцію яка повертає найменьше число з масиву*/

/*
let minNumber;
function getMin (array) {
    for (let number of array) {
    minNumber = Math.min(...array);
    }
}
let someArr = [45, 35, 67, 90, 47, 51, 8, 16, 25];
getMin(someArr);
console.log(minNumber);*/

/*-----------------------------------------------------*/

/*- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
Приклад [1,2,10]->13*/

let result = 0;
function count (array){
    for (let i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}
let someArr = [45, 35, 67, 90, 47, 51, 8, 16, 25];

count(someArr)
console.log(result);