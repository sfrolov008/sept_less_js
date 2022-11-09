/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/

/*let someTexts = [
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
]
for (let i = 0; i <someTexts.length; i++) {
    document.write(`<div>${someTexts[i].prop}</div>`)
}*/



/*----------------------------------------------------------------------------------------------------------*/
/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/

/*let someIdTexts = [
    {id : 1, prop : 'some text inside'},
    {id : 2, prop : 'some text inside'},
    {id : 3, prop : 'some text inside'},
    {id : 4, prop : 'some text inside'},
    {id : 5, prop : 'some text inside'},
    {id : 6, prop : 'some text inside'},
    {id : 7, prop : 'some text inside'},
    {id : 8, prop : 'some text inside'},
    {id : 9, prop : 'some text inside'},
    {id : 10, prop : 'some text inside'},
]
for (let i = 0; i <someIdTexts.length; i++) {
    let text = someIdTexts[i];
    document.write(`<div> ${text.id} - ${text.prop}</div>`)
}*/




/*----------------------------------------------------------------------------------------------------------*/
/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/

/*let someTexts = [
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},
    {prop:'some text inside'},

]
let i = 0;
while (i < someTexts.length) {

    document.write(`<h2>${someTexts[i].prop}</h2>`)
    i++;
}*/




/*----------------------------------------------------------------------------------------------------------*/
/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/

/*let someIdTexts = [
    {id : 1, prop : 'some text inside'},
    {id : 2, prop : 'some text inside'},
    {id : 3, prop : 'some text inside'},
    {id : 4, prop : 'some text inside'},
    {id : 5, prop : 'some text inside'},
    {id : 6, prop : 'some text inside'},
    {id : 7, prop : 'some text inside'},
    {id : 8, prop : 'some text inside'},
    {id : 9, prop : 'some text inside'},
    {id : 10, prop : 'some text inside'},
    {id : 1, prop : 'some text inside'},
    {id : 2, prop : 'some text inside'},
    {id : 3, prop : 'some text inside'},
    {id : 4, prop : 'some text inside'},
    {id : 5, prop : 'some text inside'},
    {id : 6, prop : 'some text inside'},
    {id : 7, prop : 'some text inside'},
    {id : 8, prop : 'some text inside'},
    {id : 9, prop : 'some text inside'},
    {id : 10, prop : 'some text inside'}
]
let i = 0;
while (i < someIdTexts.length) {
    let text = someIdTexts[i];
    document.write(`<h2>${text.id} - ${text.prop}</h2>`);
    i++;
}*/




/*----------------------------------------------------------------------------------------------------------*/
/*- Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Масив:
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

ШАБЛОН:
    <ul>
        <li>ITEM OF ARRAY</li>
        <!--
            і тд інші об'єкти масиву
             ...
             ...
             ...
        -->
    </ul>

замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву*/



/*let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (let i = 0; i < listOfItems.length; i++) {
    document.write (
            `
            <ul>
                <li>${listOfItems[0]}</li>
                <li>${listOfItems[1]}</li>
                <li>${listOfItems[2]}</li>
                <li>${listOfItems[3]}</li>
                <li>${listOfItems[4]}</li>
                <li>${listOfItems[5]}</li>
                <li>${listOfItems[6]}</li>
                <li>${listOfItems[7]}</li>
             </ul>
            `
    );

}*/

/*по данному завданню мене бентежить структура в хтмл файлі.((((
<ul>
<li>html</li>
</ul>
<ul>
    <li>css</li>
</ul>
<ul>
    <li>javascript</li>
</ul>
<ul>
    <li>mysql</li>
</ul>
<ul>
    <li>mongodb</li>
</ul>
<ul>
    <li>react</li>
</ul>
<ul>
    <li>angular</li>
</ul>
<ul>
    <li>node.js</li>
</ul>

яким чином переписати код, щоб отримати звичайну структуру????????????
А змінюючи на document.write ('<ul><li>${listOfItems[i]}</li></ul>`); отримуємо 8 однакових списків(((
*/




/*----------------------------------------------------------------------------------------------------------*/
/*Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону  Зробити адекватну стилізацію
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

ШАБЛОН
<div class="product-card">
    <h3 class="product-title">TITLE. Price - PRICE</h3>
<img src="IMAGE" alt="" class="product-image">
</div>
Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту*/

/*let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i = 0; i < products.length; i++){
    let product = products[i];
    document.write(
        `
        <div class="content">
             <div class="product-card">
                 <h3 class="product-title">${product.title} Price -  ${product.price}</h3>
                <img src="${product.image}" alt="product.title" class="product-image">
            </div>
        </div>
        `
    );
}*/




/*----------------------------------------------------------------------------------------------------------*/
/*
є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
за допомоги циклу вивести:
- користувачів зі статусом true
- користувачів зі статусом false
- користувачів які старші за 30 років*/


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let i = 0; i < users.length; i++){
    if (!users[i].status){
        console.log(users[i]);
    }
}


/*
// OR------------------
for (let i = 0; i < users.length; i++){
    if (!!users[i].status){
        console.log(users[i]);
    }
}
*/

/*
// OR-------------------
for (let i = 0; i < users.length; i++){
    if (users[i].age > 30){
        console.log(users[i]);
    }
}
*/
