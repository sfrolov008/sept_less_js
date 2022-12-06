// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// };
//
// let user1 = new User(1, 'vasya', 'V', 'vasya@gmail.com', '0677308553');
// let user2 = new User(2, 'petya', 'P', 'petya@gmail.com', '0663176574');
// let user3 = new User(3, 'kolya', 'K', 'kolya@gmail.com', '0925863836');
// let user4 = new User(4, 'olya', 'O', 'olya@gmail.com', '0941034130');
// let user5 = new User(5, 'max', 'M', 'max@gmail.com', '0939085649');
// let user6 = new User(6, 'anya', 'A', 'anya@gmail.com', '0972382543');
// let user7 = new User(7, 'oleg', 'Og', 'oleg@gmail.com', '0973789212');
// let user8 = new User(8, 'andrey', 'Ay', 'andrey@gmail.com', '0995966838');
// let user9 = new User(9, 'masha', 'Mh', 'masha@gmail.com', '0936697909');
// let user10 = new User(10, 'katya', 'Kt', 'katya@gmail.com', '0675020113');

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let users = [];
// users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = users.filter((user) => user.id % 2 === 0);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = users.sort((user1, user2) => user1.id - user2.id)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     };
// }

// let client1 = new Client(1, 'vasya', 'V', 'vasya@gmail.com', '0677308553', ['prod1', 'prod2']);
// let client2 = new Client(2, 'petya', 'P', 'petya@gmail.com', '0663176574', ['prod1', 'prod2', 'prod3']);
// let client3 = new Client(3, 'kolya', 'K', 'kolya@gmail.com', '0925863836', ['prod1']);
// let client4 = new Client(4, 'olya', 'O', 'olya@gmail.com', '0941034130', ['prod1', 'prod2']);
// let client5 = new Client(5, 'max', 'M', 'max@gmail.com', '0939085649', ['prod1', 'prod2', 'prod3', 'prod4']);
// let client6 = new Client(6, 'anya', 'A', 'anya@gmail.com', '0972382543', ['prod1', 'prod2', 'prod3', 'prod4', 'prod5']);
// let client7 = new Client(7, 'oleg', 'Og', 'oleg@gmail.com', '0973789212', ['prod1']);
// let client8 = new Client(8, 'andrey', 'Ay', 'andrey@gmail.com', '0995966838', ['prod1', 'prod2', 'prod3']);
// let client9 = new Client(9, 'masha', 'Mh', 'masha@gmail.com', '0936697909', ['prod1', 'prod2', 'prod3', 'prod4']);
// let client10 = new Client(10, 'katya', 'Kt', 'katya@gmail.com', '0675020113', ['prod1', 'prod2', 'prod3', 'prod4', 'prod5']);


// створити пустий масив, наповнити його 10 об'єктами Client

// let clients = [];
// clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortGoods = clients.sort((client1, client2) => client1.order.length - client2.order.length);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

/*function Car(model, manufacturer, year, maxSpeed, engineV) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineV = engineV;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(this.model, this.manufacturer, this.year, this.maxSpeed, this.engineV);
    }

        /!*---------------------------------------*!/
   // не зовсім зрозуміло даний момент, якщо функція інфо спочатку ітерує а потім виводить формат// `назва поля - значення поля` таким чином:
    //     for (const key in (new Car)) {
    //         console.log(key, '-', (new Car)[key])
    //     }
    // }
    //     то (new Car)[key] - undefined!
    // В чому помилка?
        /!*---------------------------------------*!/

    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (name, age, experience){
        driver = {
            name:name,
            age:age,
            experience:experience
        }
        console.log(driver);
    }
}
let car = new Car('ZAZ-968', 'ZAZ', 1970, 330, '3.0l 2JZ-GTE');
console.log(car);*/


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineV) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineV = engineV;
//     }
// }
// let car = new Car('ZAZ-968', 'ZAZ', 1980, 330, '3.0l 2JZ-GTE');
// console.log(car);
//
// Car.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
// };
// car.drive();
//
//
// Car.prototype.info = function () {
//     console.log(this.model, this.manufacturer, this.year, this.maxSpeed, this.engineV);
// }
// car.info();
//
// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed;
// }
// car.increaseMaxSpeed(200);
//
// Car.prototype.changeYear = function (newValue) {
//     this.year = newValue;
// }
// car.changeYear(2006)
//
// Car.prototype.addDriver = function (name, age, experience) {
//     driver = {
//         name: name, age: age, experience: experience
//     }
//     console.log(driver);
// }
// car.addDriver('michael schumacher', 53, 40);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.

class someInfo {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

// Створити масив з 10 попелюшок.

let cinderella1 = new someInfo('cinderella1', 18, 28);
let cinderella2 = new someInfo('cinderella2', 21, 29);
let cinderella3 = new someInfo('cinderella3', 24, 30);
let cinderella4 = new someInfo('cinderella4', 27, 31);
let cinderella5 = new someInfo('cinderella5', 30, 33);
let cinderella6 = new someInfo('cinderella6', 33, 35);
let cinderella7 = new someInfo('cinderella7', 36, 38);
let cinderella8 = new someInfo('cinderella8', 39, 41);
let cinderella9 = new someInfo('cinderella9', 42, 44);
let cinderella10 = new someInfo('cinderella10', 45, 47);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
let prince = new someInfo('prince', 25, 33)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let cinerellas = [];
cinerellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5,
    cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);

for (const item in prince) {
    for (let i = 0; i < cinerellas.length; i++) {
        if (prince.footSize === cinerellas[i].footSize) {
            console.log(cinerellas[i]);
        }
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let find = cinerellas.find((value) => value.footSize === prince.footSize);
console.log(find);
