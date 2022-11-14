/*--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

/*let someNumArr = [1, 2, 3, 4, 5,]
let someStrArr = ['a', 'b', 'c', 'd', 'y',]
let someMixArr = [
    {id: 1, name: 'a', status: true},
    {id: 2, name: 'b', status: false},
    {id: 3, name: 'c', status: true},
    {id: 4, name: 'd', status: false},
    {id: 5, name: 'e', status: true},
]
for (let someMixArrElement of someMixArr) {
    console.log(someMixArrElement);
}*/



/*--------------------------------------------------------------------------------------------------------------------*/
/*-- Створити пустий масив. Наповнити його будь-якими
значеннями звертаючись до конкретного індексу. Вивести в консоль*/

/*let someArray1 = []
someArray[0] = 'a';
someArray[1] = 's';
someArray[2] = 'd';
someArray[3] = 'f';
someArray[4] = 'g';
for (let i = 0; i < someArray1.length; i++) {
    const someArrayElement = someArray1[i];
    console.log(someArrayElement);
}*/



/*--------------------------------------------------------------------------------------------------------------------*/
/*- є масив:

let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]*/

/*1. перебрати його циклом while*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
let i = 0;
while (i <someArray2.length){
    let someArray2Element =someArray2[i];
    console.log(someArray2Element)
    i++
}*/

/*************************************/

/*2. перебрати його циклом for*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (const number of someArray2) {
    console.log(number);
}*/

/*************************************/

/*3. перебрати циклом while та вивести  числа тільки з непарним індексом*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
let i = 0;
while (i <someArray2.length){
    let someArray2Element = someArray2[i]
    if (i % 2 == 1){
        console.log(someArray2Element);
    }
    i++;
}*/

/*************************************/

/*4. перебрати циклом for та вивести  числа тільки з непарним індексом*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (let i = 0; i < someArray2.length; i++) {
    const someArray2Element = someArray2[i];
    if (i % 2 == 1){
        console.log(someArray2Element);
    }
}*/

/*************************************/

/*5. перебрати циклом while та вивести  числа тільки парні  значення*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
let i = 0;
while (i <someArray2.length){
    let someArray2Element = someArray2[i]
    if (someArray2Element % 2 === 0){
        console.log(someArray2Element);
    }
    i++;
}*/

/*************************************/

/*6. перебрати циклом for та вивести  числа тільки парні  значення*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (i = 0; i < someArray2.length; i++){
    let someArray2Element = someArray2[i];
    if (someArray2Element % 2 == 0){
        console.log(someArray2Element);
    }
}*/

/*************************************/

/*7. замінити кожне число кратне 3 на слово "okten"*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (i = 0; i < someArray2.length; i++){
    let someArray2Element = someArray2[i];
      if (someArray2Element % 3 == 0){
          someArray2Element = 'okten';
          console.log(someArray2Element);
    }
}*/

/*************************************/

/*8. вивести масив в зворотньому порядку.*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (let i = someArray2.length - 1; i >= 0; i--) {
    const someArray2Element = someArray2[i];
    console.log(someArray2Element)
}*/


/*************************************/
/*************************************/
/*************************************/


/*9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/

/*1.1 перебрати його циклом while*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
let i = someArray2.length - 1;
while (i >=0){
    let someArray2Element =someArray2[i];
    console.log(someArray2Element)
    i--
}*/

/*************************************/

/*3.1 перебрати циклом while та вивести  числа тільки з непарним індексом*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
let i = someArray2.length;
while (i >= 0){
    let someArray2Element = someArray2[i]
    if (i % 2 == 1){
        console.log(someArray2Element);
    }
    i--;
}*/

/*************************************/

/*4.1 перебрати циклом for та вивести  числа тільки з непарним індексом*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (let i = someArray2.length; i >= 0; i--) {
    const someArray2Element = someArray2[i];
    if (i % 2 == 1){
        console.log(someArray2Element);
    }
}*/

/*************************************/

/*5.1 перебрати циклом while та вивести  числа тільки парні  значення*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
let i = someArray2.length;
while (i >= 0){
    let someArray2Element = someArray2[i]
    if (someArray2Element % 2 === 0){
        console.log(someArray2Element);
    }
    i--;
}*/

/*************************************/

/*6.1 перебрати циклом for та вивести  числа тільки парні  значення*/

/*let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (i = someArray2.length; i >= 0; i--){
    let someArray2Element = someArray2[i];
    if (someArray2Element % 2 == 0){
        console.log(someArray2Element);
    }
}
*/

/*************************************/

/*7.1 замінити кожне число кратне 3 на слово "okten"*/

/*
let someArray2 =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (i = someArray2.length; i >=0; i--){
    let someArray2Element = someArray2[i];
      if (someArray2Element % 3 == 0){
          someArray2Element = 'okten';
          console.log(someArray2Element);
    }
}*/

/*--------------------------------------------------------------------------------------------------------------------*/

/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/

/*let someArray3 = [11,12,13,14,15,16,17,18,19,20]
for (let number of someArray3) {
    console.log(number);
}
*/

/*************************************/

/*- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі*/

/*let someArray3 = ['q','w','e','r','t','y','u','i','o','p']
for (let number of someArray3) {
    console.log(number);
}*/

/*************************************/

/*- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/

/*let someArray3 = ['t','r','u','e', 1, 0, 0, 'p','r','с']
for (let number of someArray3) {
    console.log(number);
}*/

/*************************************/

/*- Створити масив з 10 елементів числового, стірчкового і булевого типу.
За допомогою if та typeof вивести тільки булеві елементи*/

/*let someArray3 = [true, 'r', false, 'e', -1, 0, 0, true, 'с']
for (i = 0; i < someArray3.length; i++){
    let element = someArray3[i];
    if (typeof element == "boolean"){
        console.log(element)
    }
}*/

/*************************************/

/*- Створити масив з 10 елементів числового, стірчкового і булевого типу.
    За допомогою if та typeof вивести тільки числові елементи*/

/*let someArray3 = [true, 'r', false, 'e', -1, 0, 0, true, 'с']
for (i = 0; i < someArray3.length; i++) {
    let element = someArray3[i];
    if (typeof element == "number") {
        console.log(element)
    }
}*/

/*************************************/

/*- Створити масив з 10 елементів числового, стрічкового і булевого типу.
    За допомогою if та typeof вивести тільки рядкові елементи*/

/*let someArray3 = [true, 'r', false, 'e', -1, 0, 0, true, 'с']
for (i = 0; i < someArray3.length; i++) {
    let element = someArray3[i];
    if (typeof element == "string") {
        console.log(element)
    }
}*/

/*--------------------------------------------------------------------------------------------------------------------*/


/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами)
через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/

/*let someArray4 =[]
someArray4[0] = 1;
someArray4[1] = 9;
someArray4[2] = true;
someArray4[3] = 'name';
someArray4[4] = false;
someArray4[5] = true
someArray4[6] = 'w';
someArray4[7] = 'e';
someArray4[8] = 'r';
someArray4[9] = 0;
for (let i = 0; i < someArray4.length; i++) {
    let element = someArray4[i];
    console.log(element);
}*/

/*************************************/

/*- Створити цикл for на 10  ітерацій з кроком 1.
Вивести поточний номер кроку через console.log та document.write*/

/*let someArr =[]
for (let i = 0; i < 10; i++) {
    const someArrElement = someArr[i];
    console.log([i]);
    document.write(`${[i]}`);
}*/

/*************************************/

/*- Створити цикл for на 100 ітерацій з кроком 2.
Вивести поточний номер кроку через console.log та document.write*/

/*let someArr =[]
for (let i = 0; i < 100; i++) {
    const someArrElement = someArr[i];
    console.log([i]);
    document.write(`${[i]}`);
}*/

/*************************************/

/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки.
    через console.log + document.write*/

/*let someArr =[]
for (let i = 0; i < 100; i++) {
    const someArrElement = someArr[i];
    if (i % 2 == 0) {
        console.log([i]);
        document.write(`${[i]}`);
    }
}*/

/*************************************/

/*- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки.
    через console.log + document.write*/

/*let someArr =[]
for (let i = 0; i < 100; i++) {
    const someArrElement = someArr[i];
    if (i % 2 == 1) {
        console.log([i]);
        document.write(`${[i]}`);
    }
}*/

/*--------------------------------------------------------------------------------------------------------------------*/

/*стоврити масив книжок (назва, кількість сторінок, автори , жанри).*/




/*let books = [
    {
        title: 'bookname1',
        pageCount: 250,
        genres: ['art'],
        authors: ['author1']
    },
    {
        title: 'bookname11',
        pageCount: 300,
        genres: ['scientific', ],
        authors: ['author2', 'author3']
    },
    {
        title: 'bookname111',
        pageCount: 350,
        genres: ['fiction', ],
        authors: ['author4']
    },
    {
        title: 'bookname1111',
        pageCount: 400,
        genres: ['technical'],
        authors: ['author5', 'author6']
    },
    {
        title: 'bookname11111',
        pageCount: 450,
        genres: ['scientific', 'technical'],
        authors: ['author7', 'author8', 'author9']
    },
]*/

/* -знайти наібльшу книжку.*/

/*let j = books[0]
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    if (j.pageCount > book.pageCount){
        book = j;
    }
}
console.log(j);*/

/*************************************/

// - знайти книжку/ки з найбільшою кількістю жанрів

/*let j = books[0]
for (let book of books) {
    if (book.genres.length> j.genres.length){
        j = book;
    }
}
console.log(j);*/

/*************************************/

// - знайти книжку/ки з найдовшою назвою

/*let j = books[0]
for (let book of books) {
    if (book.title> j.title){
        j = book;
    }
}
console.log(j);*/

/*************************************/

// - знайти книжку/ки які писали 2 автори


/*for (let book of books) {
    if (book.authors.length === 2){
        console.log(book);
    }

}*/

/*************************************/

// - знайти книжку/ки які писав 1 автор

/*
for (let book of books) {
    if (book.authors.length === 1){
        console.log(book);
    }

}*/
