/*1. Створити пустий масив та :*/
/*a. заповнити його 50 парними числами за допомоги циклу.*/


// пусті ячейки
/*let someArr1 = []
for (let i = 0; i < 100; i++) {
        if (i % 2 === 0){
        someArr1[i] = i;
    }
}
console.log( someArr1);*/

/*************************************/

/*let someArr1 = [];
for (let i = 0; i < 100; i++) {
   if (i % 2 === 0){
      someArr1.push(i)
   }
}
   console.log(someArr1);*/

/*************************************/

/*let someArr1 = [];
for (let i = 0; i < 50; i++) {
      someArr1[i] = 18;
}
   console.log(someArr1);
*/

/*************************************/

/*b. заповнити його 50 непарними числами за допомоги циклу.*/

/*let someArr1 = []
for (let i = 0; i < 100; i++) {
        if (i % 2 === 1){
        someArr1[i] = i;
    }
}
console.log( someArr1);*/

/*************************************/

/*c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)*/

/*let someArr1 = []
for (let i = 0; i < 20; i++) {
    ( someArr1[i] = Math.floor(Math.random() * 100))
        console.log(someArr1[i]);
}*/

/*************************************/

/*
d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)*!/*/

/*let someArr1 = []
for (let i = 0; i < 20; i++) {
    (someArr1[i] = Math.floor(Math.random() * (732-8)+8))
        console.log(someArr1[i]);
}*/

/*************************************/

/*2. Вивести за допомогою console.log кожен третій елемент*/

/*let someArr1 = []
document.write( `<ul>`)
for (let i = 0; i < 20; i++) {
    someArr1[i] = Math.floor(Math.random() * 20);
    document.write(`<li>${someArr1[i]}</li>`)

}
document.write(`</ul>`)
for (i = 0; i <someArr1.length; i+=3){
        console.log(someArr1[i]);
}*/

/*************************************/

/*4. Вивести за допомогою console.log кожен третій елемен тільки
якщо цей елемент є парним та записати їх в новий масив*/

/*let someArr1 = []
document.write( `<ul>`)
for (let i = 0; i < 20; i++) {
    someArr1[i] = Math.floor(Math.random() * 20);
    document.write(`<li>${someArr1[i]}</li>`)

}
document.write(`</ul>`)

for (i = 0; i <someArr1.length; i+=3){
    if (someArr1[i] % 2 ===0){
    console.log(someArr1[i]);
}
}*/

/*************************************/

/*5. Вивести кожен елемент масиву, сусід справа якого є парним
EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56*/

/*let someArr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
 for (i = 0; i <someArr.length; i++){
     if (someArr[i + 1] % 2 === 0){
         console.log( someArr[i])
     }
 }*/

/*************************************/

/*6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
Обрахувати середній чек.*/

/*let someArr = [100,250,50,168,120,345,188]
let count = 0
for (let number of someArr) {
    count += number
}
    console.log(count / someArr.length);*/


/*************************************/


/*Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.*/

/*let someArr2 = []
let someArr1 = []
let count = 0;
for (let i = 0; i < 5; i++) {
    someArr1[i] = Math.floor(Math.random() * 9);
    document.write(`<h2>${someArr1[i]}</h2>`)
    count = someArr1[i] * 5;
    someArr2[i] = count;
    console.log(someArr2[i]);
}*/

/*************************************/

/*8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
і якщо елемент є числом - додати його в інший масив.*/

/*let someArr = ['asd', 'qwe', true, 123, false, 33, 0, 'rewq'];
let anotherArr = [];
for (let i = 0, j = 0; i < someArr.length; i++, j++) {
    if (typeof (someArr[i]) === 'number'){
        anotherArr[j] = someArr[i];
        console.log(anotherArr[j])
    }
}*/

/*************************************/

/*- Дано 2 масиви з рівною кількістю об'єктів.

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив

    let usersWithCities = [
        {
            id: 1, // <===
            name: 'vasya',
            age: 31,
            status: false,
            address: {
                user_id: 1, // <===
                country: 'Ukraine',
                city: 'Ternopil'
            }
        },
        // TO BE CONTINUED .....
    ]*/

/*let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


for (const user of usersWithId) {
    for (city of citiesWithId) {
        if (user.id === city.user_id){
            user.address = city;
        }
    }
}
    console.log(usersWithId)*/

/*************************************/


/*- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.*/

/*let someArr = [122, 233, 344, 455, 566, 677, 788, 899, 900, 1001]
for (const number of someArr) {
    if (number % 2 === 0){
        console.log(number)
    }
}*/

/*************************************/

/*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
    За допомогою будь-якого циклу скопіювати значення одного масиву в інший.*/


// Внутри цикла

/*let someArr = [122, 233, 344, 455, 566, 677, 788, 899, 900, 1001];
let anotherArr = [];
for (let i = 0; i < someArr.length; i++) {
    let someArrElement = someArr[i];
    anotherArr[i] = someArrElement;
console.log(anotherArr[i]);
}*/

// Внe цикла

/*let someArr = [122, 233, 344, 455, 566, 677, 788, 899, 900, 1001];
let anotherArr = [];
let count = 0;
for (let i = 0; i < someArr.length; i++) {
    count = someArr[i];
    anotherArr[i] = count;
}
    console.log(anotherArr)*/

/*************************************/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

/*let someArr = [ 'a', 'b', 'c'];
let word = '';
for (let i = 0; i < someArr.length; i++) {
    word += someArr[i];
}
    console.log(word);*/

/*************************************/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

/*let someArr = [ 'a', 'b', 'c']
let word = '';
let i = 0;
while (i < someArr.length){
    word += someArr[i];
    i++
}
    console.log(word);*/


/*************************************/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
/*
let someArr = [ 'a', 'b', 'c'];
let word = '';
for (let string of someArr) {
    word += string;
}
console.log(word);*/





