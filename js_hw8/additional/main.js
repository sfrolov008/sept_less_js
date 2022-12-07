/*
- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

{
    id: 1,
        name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
    street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
        lat: '-37.3159',
            lng: '81.1496'
    }
},
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
}
}*/

function ObjBuilder(id, name, username, email, address, phone, website, company) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {street: 'street', suite: 'suite', city: 'city', zipcode: 'zipcode', geo: {lat: 'lat', lng: 'lng'}};
    this.phone = phone
    this.website = website;
    this.company = {name: 'name', catchPhrase: 'catchPhrase', bs: 'bs'};
}

let obg = new ObjBuilder(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    {
        street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo:
            {lat: '-37.3159', lng: '81.1496'}
    }, '1-770-736-8031 x56442', 'hildegard.org',
    {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    });
console.log(obg);


/*-  Створити функцію конструктор / клас  який описує об'єкт тегу
Поля :
-назва тегу ()
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результуючого об'єкту
{
    titleOfTag: 'area',
    action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]
}*/

function Descriptor(titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
        this.write = function () {
        document.write(`<h2>${this['titleOfTag']}</h2> <p>${this['action']}</p>`);
        document.write(`<ul>`);
        for (const item of this.attrs) {document.write(`<li>${item.attr}</li>`)}
        document.write(`</ul>`);
    }
}

let descriptor1 = new Descriptor(
    'HTML < a > Tag',
    'The < a > tag defines a hyperlink, which is used to link from one page to another.',
    [{attr:'href - Specifies the URL of the page the link goes to'},
        {attr:'target - Specifies where to open the linked document'}]
);
descriptor1.write()
 let descriptor2 = new Descriptor('HTML < div > Tag',
     'The < div > tag defines a division or a section in an HTML document.',
     [{attr:'class - Specifies one or more classnames for an element'},
         {attr:'style - Specifies an inline CSS style for an element'}]
 );
descriptor2.write()

let descriptor3 = new Descriptor('HTML < h1 > Tag',
    '< h1 > defines the most important heading',
    [{attr:'class - Specifies one or more classnames for an element'},
        {attr:'style - Specifies an inline CSS style for an element'}]
    );
descriptor3.write()
 let descriptor4 = new Descriptor('HTML < form > Tag',
     'The < form > tag is used to create an HTML form for user input.',
     [{attr:'action -Specifies where to send the form-data when a form is submitted'},
         {attr:'method - Specifies the HTTP method to use when sending form-data'}]
 );
descriptor4.write()

// ...etc