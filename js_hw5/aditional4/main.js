/*- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/
// 1й варіант
/*let countMin = (...numArr) => {
    let min = numArr[0];
    for (const item of numArr) {
        if(item < min){
            min = item;
        }
    }
    console.log(min);
}
countMin(90, 3,-1)*/

//2й варіант

/*function countMin (a, b, c) {
    if (b > a && a < c) {
        console.log(a);
    }else if (a > b && b < c){
        console.log(b);
    }else if (a > c && c < b){
        console.log(c);
    }
}
countMin( 3, 6,9);*/

/*-------------------------------------------------------------*/

/*- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/

/*let countMax = (...numArr) => {
    let max = numArr[0];
    for (const item of numArr) {
        if(item > max){
            max = item;
        }
    }
    console.log(max);
}
countMax(90, 3,-1)*/

//2й варіант

/*function countMin (a, b, c) {
    if (b < a && a > c) {
        console.log(a);
    }else if (a < b && b > c){
        console.log(b);
    }else if (a < c && c > b){
        console.log(c);
    }
}
countMin( 3, 6,9);*/

/*-------------------------------------------------------------*/

/*- створити функцію яка повертає найбільше число з масиву*/

/*function countMax (arr){
    let max = arr[0];
    for (let item of arr) {
        if (item > max){
            max = item;
        }
    }
return max
}

let x = countMax([22, 34, -5, 35, 2, 77, 99]);*/

/*-------------------------------------------------------------*/

/*- створити функцію яка повертає найменьше число з масиву*/

/*function countMin (arr){
    let min = arr[0];
    for (let item of arr) {
    min = Math.min(...arr)
    }
    return min
}
let x = countMin([22, 34, -5, 35, 2, 77, 99]);*/


/*-------------------------------------------------------------*/

/*- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/

/*function calc (array){
    let n = 0;
    for (let item of array){
        n += item;
    }
    return n / array.length
}
let arr = [22, 34, 5, 35, 2, 77, 99];
let x = calc(arr);*/

/*-------------------------------------------------------------*/

/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
 а виводить найбільше (Math використовувати заборонено);*/

/*function  calc (...arr){
    let min = arr[0];
    let max = arr[0];
    for (let item of arr){
        if (item < min){
            min = item;
        }else if (item > max){
            max = item;
        }
    }
    console.log(max);
    return min;
}
let x = calc(22, 34, 5, 35, 2, 77, 99)
console.log(x);*/

/*-------------------------------------------------------------*/

/*- створити функцію яка заповнює масив рандомними числами*/

/*let arr =[];
function randomWriter (num) {
    for (let i = 0; i < num; i++) {
        arr[i] = Math.floor(Math.random() *100);
    }
    return arr
}
let x = randomWriter(100);
console.log(x);*/

/*-------------------------------------------------------------*/

/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
який характеризує кінцеве значення діапазону.*/

/*let arr =[];
function randomWriter (num, limit) {
    for (let i = 0; i < num; i++) {
        arr[i] = Math.floor(Math.random() * limit);
    }
    return arr
}
let x = randomWriter(100,100 );
console.log(x);*/

/*-------------------------------------------------------------*/

/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/


/*function reversWriter (arr){
    let arrRevers = [];
    arrRevers = arr.reverse();
}
let arr1 = [1, 2, 3];
let x = reversWriter(arr1)*/



//2й варіант

/*function reversWriter (arr){
        let arrRevers = [];
    for (let i = arr.length - 1, j =0; i >= 0; i--, j++) {
        arrRevers[j] = arr[i];
    }
    console.log(arrRevers);
    return arrRevers;
}
let arr1 = [1, 2, 3];
let x = reversWriter(arr1);*/


/*-------------------------------------------------------------*/

/*- створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
якщо два аргументи - складає або конкатенує їх між собою.*/

/*function howArg(){
    if (arguments.length === 1){
        console.log(arguments[0]);
    }else if (arguments .length === 2){
        console.log(arguments[0] + ' ' + arguments[1])
    }
}
let x = howArg('Be fond of', 'JS')*/

/*-------------------------------------------------------------*/

/*- створити функцію  яка приймає два масиви та скаладає значення елементів
 з однаковими індексами та повертає новий результуючий масив.*/

/*function arrCalc (a,b){
let arrN = [];
    for (let i = 0; i < a.length; i++) {
        arrN.push((a[i] || 0) + (b[i] || 0));
    }
console.log (arrN)
}
let arrA = [1,2,3,4];
let arrB = [2,3,4,];

let x = arrCalc(arrA,arrB);*/


//Варіант з resolves

/*function arrCalc (arr1, arr2){
    let arrN = []
       if (arr1.length >= arr2.length){
        arrN = arr1
    }else {
        arrN = arr2;
    }
    for (let i = 0; i < arrN.length; i++) {
        arrN[i] = (arr1[i] || 0) + (arr2[i] || 0);
    }
    return arrN;
}
let arrA = [1,2,3,4];
let arrB = [2,3,4,5];

let x = arrCalc(arrA,arrB);
console.log(x);*/


/*-------------------------------------------------------------*/

/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів*/

/*function retFields (array){
    for (let item of array) {
        for (let field in item) {
            return [field];
        }
    }
}
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 32},
    {id: 3, name: 'vanya', age: 33}
];
let x = retFields(users);*/

//Варіант з resolves

/*function retFields (array){
    let arrQ = [];
    for (let i =0, j= 0; i < array.length; i++) {
        for (let field in array[i]) {
            arrQ[j++] = field;
        }
    }
    return arrQ;
}
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 32},
    {id: 3, name: 'vanya', age: 33}
];
let x = retFields(users);
console.log(x);*/

/*-------------------------------------------------------------*/

/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів*/

/*
function retFields (array){
    for (let item of array) {
        for (let field in item) {
         return(item[field]);
        }
    }
}
let users = [
    {id: 1, name: 'vasya', age: 31},
];
let x = retFields(users);*/

//Варіант з resolves

/*function retFields (array){
    let arrQ = [];
    for (let i =0, j= 0; i < array.length; i++) {
        for (let field in array[i]) {
            arrQ[j++] = array[i][field];
        }
    }
    return arrQ;
}
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 32},
    {id: 3, name: 'vanya', age: 33}
];
let x = retFields(users);
console.log(x);*/
