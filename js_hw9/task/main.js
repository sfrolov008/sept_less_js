// - є масив
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


/*let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
let div = document.createElement('div');
div.classList.add('member');
document.body.append(div);
let h2 = document.createElement('h2');
let pAge = document.createElement('p');
let pInfo = document.createElement('p');
let image = document.createElement('p');
div.append(h2, pAge, pInfo, image);
h2.innerText = `${simpson.name} ${simpson.surname}`;
pAge.innerText = `${['age']} --- ${simpson.age}`;
pInfo.innerText = `${simpson.info}`;
image.innerHTML = `<img src="${simpson.photo}">`;
};*/


// Цикл в циклі
// - Є масив

/*let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

for (const course of coursesArray) {
    let div = document.createElement('div');
    document.body.append(div);
    let h2 = document.createElement('h2');
    let pMonthDuration = document.createElement('p');
    let pHourDuration = document.createElement('p')
    let ul = document.createElement('ul');
    div.append(h2, pHourDuration, pMonthDuration, ul);
    for (const module of course.modules){
        let li = document.createElement('li')
        li.innerText = `${module}`;
        ul.append(li);
    }
    h2.innerText = `${course.title}`;
    pMonthDuration.innerText = `${['monthDuration']} --- ${course.monthDuration}`;
    pHourDuration.innerText = `${['hourDuration']} --- ${course.hourDuration}`;
}*/


//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

/*let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
document.body.append(div);

let div2 = div.cloneNode(true);
document.body.append(div2)*/
// не зовсім зрозумів, що мається на увазі "клонувату", копія?


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu. Завдання робити через цикли.

// В template1.html


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${element.title} -- ${['monthDuration']} -- ${element.monthDuration}`;
    document.body.append(div)
}*/


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    document.body.append(div);
    let h2 = document.createElement('h2');
    h2.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');
    div.append(h2, p);
    h2.innerText = `${element.title}`
    p.innerText = `${element.monthDuration}`;
}*/


// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript,
//     зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//

/*let div = document.createElement('div');
div.id = 'text';
document.body.append(div);
let button = document.createElement('button');
button.innerText = 'disappear';
div.append(button)
button.onclick = function (e) {
        div.style.opacity = '0';
  }*/


//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача

/*let input = document.createElement('input');
input.placeholder = ' your age?';
let button = document.createElement('button');
button.innerText = 'send'
document.body.append(input,button);
button.onclick = function (){
    if (input.value < 18){
        if (confirm("Are your parent agree?")){
        alert('Wellcome');
        }else{
            alert('Get out!')
        }
    }else if (input.value >= 18 &&  input.value < 89){
        alert('Wellcome dear customer!');
    }else if (input.value > 89){
        if (confirm("Are you sure?")){
            alert('Wellcome dear customer! Big Respect!!!')
        }else{
            alert('Bye-bye...')
        }
    }
}*/


//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let inputRow = document.createElement("input");
inputRow.placeholder = 'row';
let inputCell = document.createElement("input");
inputCell.placeholder = 'cell';
let inputData = document.createElement("input");
inputData.placeholder = 'data';
let button = document.createElement('button');
button.innerText = ' let create table';
document.body.append(inputRow, inputCell, inputData, button)


button.onclick = function (e) {
    let row = inputRow.value;
    let cell = inputCell.value;
    let text = inputData.value;

    let tableCreator = function (rows, cells, data) {
        let table = document.createElement('table');
        table.style.border = '1px solid black';
        document.body.append(table);
        for (let i = 0; i < rows; i++) {    
            let tr = document.createElement('tr');
            table.appendChild(tr);
            for (let j = 0; j < cells; j++) {
                let td = document.createElement('td');
                tr.appendChild(td);
                td.style.border = '1px solid black';
                td.innerText = `${data}`;
            }
        }
    }
    tableCreator(row, cell, text);
}






