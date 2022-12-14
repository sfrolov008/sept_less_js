// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

/*let arr = ['stupid', 'ass'];

let input = document.createElement('input');
let button = document.createElement( 'button');
button.innerText = 'click me';
document.body.append(input, button);
button.onclick = function (e) {
    for (const item of arr) {
        if (input.value === item) {
            alert('!!!!');
        }
    }
}*/

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

/*let arr = ['stupid', 'ass'];

let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'click me';
document.body.append(input, button);
button.onclick = function () {
    for (const item of arr) {
    let value = input.value;
        if (value.includes(item)) {
            alert('!!!!!!!!')
        }
    }
}*/


// - Создайте меню, которое раскрывается/сворачивается при клике

/*let menu = ['item1','item2','item3'];
let div = document.createElement('div');
document.body.append(div);
let span = document.createElement('span');
span.innerText = 'MENU';
let ul = document.createElement('ul');
for (let i = 0; i < menu.length; i ++) {
    let li = document.createElement('li');
    li.innerText = menu[i];
    ul.append(li);
}
div.append(span,ul);
span.onclick = function (){
    ul.classList.toggle('unvisible')}*/


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


/*let coments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
];
for (const coment of coments) {
    let div = document.createElement('div')
    document.body.append(div)
    let ul = document.createElement( 'ul');
    let button = document.createElement('button');
    button.innerText = 'close';
    div.append(ul, button);
    for (const item in coment) {
        let li = document.createElement('li');
        li.innerText = coment[item];
        ul.append(li)
    }
        button.onclick = function (e) {
            ul.classList.toggle('close');
        }
}
*/

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

/*let button = document.createElement('button');
document.body.append(button)
button.innerText = 'disappear';
button.onclick = function (e) {
        button.style.opacity = '0';
  }*/


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


/*let div = document.createElement('div');
div.id = 'powderblue';
div.style.width = '400px';
div.style.height = '300px';
div.classList.add('divStyle', 'w300', 'h400', 'bgc');
document.body.append(div);
function reader(block) {
    console.log (`${block.tagName}/ ${block.className}/ ${block.id}/ ${block.style.height}*${block.style.width}`)
    let children = block.children;
    if (children.length !== 0) {
        for (const child of children) {
            reader(child);
        }
    }
}
document.body.onclick = function (event){
    reader(event.target);
}*/


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


/*let div = document.createElement('div');
div.id = 'powderblue';
div.style.width = '400px';
div.style.height = '300px';
div.classList.add('divStyle', 'w300', 'h400', 'bgc');

let divPopupContent = document.createElement('div');
divPopupContent.className = 'divPopupContent';
let divPopupBody = document.createElement('div');
divPopupBody.className = 'divPopupBody';
let divPopupText = document.createElement('div')
divPopupText.className = 'divPopupText';
let buttonClose = document.createElement('button');
divPopupBody.append(divPopupText);
divPopupContent.append(divPopupBody)
document.body.append(div, divPopupContent);

function reader(block) {
    divPopupText.innerText = (`${block.tagName}/ ${block.className}/ ${block.id}/ ${block.style.height}*${block.style.width}`)
    let children = block.children;
    if (children.length !== 0) {
        for (const child of children) {
            reader(child);
        }
    }
}
document.body.onclick = function (event) {
    reader(event.target);
    divPopupContent.classList.toggle('go');
}*/


// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


/*let users = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 20, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 20, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}},
];

let div = document.createElement('div');
div.className = 'users';
let ul = document.createElement('ul');
for (let i = 0; i < users.length; i++) {
    let li = document.createElement('li');
    li.append(`ID: ${users[i].id}, Name - ${users[i].name}, Age - ${users[i].age}, Status - ${users[i].status},
     Address: (${users[i].address.city}, ${users[i].address.street}, ${users[i].address.number} );`)
    ul.append(li);
    li.classList.add('user', (users[i].status), (users[i].age), users[i].address.city);
    div.append(ul);
    document.body.append(div);
}

let divFilter = document.createElement('div');
let h2 = document.createElement('h2');
h2.innerText = 'Filter';
document.body.append(divFilter);
let p1 = document.createElement('p');
let checkbox1 = document.createElement("input");
checkbox1.type = 'checkbox';
checkbox1.classList.add('check', 'status');
p1.append(checkbox1, 'status');
let p2 = document.createElement('p');
let checkbox2 = document.createElement("input");
checkbox2.type = 'checkbox';
checkbox2.classList.add('check', 'age');
p2.append(checkbox2, 'age');
let p3 = document.createElement('p');
let checkbox3 = document.createElement("input");
checkbox3.type = 'checkbox';
checkbox3.classList.add('check', 'city');
p3.append(checkbox3, 'city');
divFilter.append(h2, p1, p2, p3);

let userBox = document.getElementsByClassName('user');


addEventListener("click", () => {
    for (let j = 0, i = 0; j < userBox.length, i < users.length; j++, i++) {
        if (checkbox1.checked && (users[i].status === false)) {
            userBox[j].hidden = true;
        } else if (checkbox2.checked && (users[i].age < 29)) {
            userBox[j].hidden = true;
        } else if (checkbox3.checked && (users[i].address.city !== 'Kyiv')) {
            userBox[j].hidden = true;
        } else {
            userBox[j].hidden = false;
        }
    }
});*/



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу
// (лежащему на одном уровне) НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит
// первого ребенка. и тд. Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан