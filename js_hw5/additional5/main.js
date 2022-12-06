/*Всі функції повинні бути описані стрілочним типом!!!!
    - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/

/*
let min = (a, b, c) => {
    if (a < b || c) {
        console.log(a);
    } else if (b < a || c) {
        console.log(b);
    } else if (c < a || b) {
        console.log(c);
    }
}
min(2, 4, 6);*/

/*- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/

/*let max = (a, b, c) => {
    if (a > b || c) {
        console.log(a);
    } else if (b > a || c) {
        console.log(b);
    } else if (c > a || b) {
        console.log(c);
    }
}
max(2, 4, 6);*/

/*- створити функцію яка повертає найбільше число з масиву*/

/*let numMax = (array) => {
    let max = array[0];
    for (const item of array) {
        if (max < item){
            max = item;
        }
    }
    return max
}
 numMax([12, 14, 33, 24, -4, 69]);*/

/*- створити функцію яка повертає найменьше число з масиву*/

/*let numMax = (array) => {
    let max = array[0];
    for (const item of array) {
        if (max > item){
            max = item;
        }
    }
    return max
}
 numMax([12, 14, 33, 24, -4, 69]);*/

/*- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13*/

/*let calc = (array) =>{
    let n = 0;
    for (let item of array) {
        n += item;
    }
    return n;
}
let arr = [12, 14, 33, 24, 69];
calc(arr);*/

/*Дано натуральное число n. Выведите все числа от 1 до n.*/

/*let numWriter = (n) => {
    let array = [];
    for (let i = 0; i < n; i++) {
        array[0] = 1;
        array[i] = array[0]+1*[i];
    }
    console.log(array);
}
numWriter(12)*/

/*- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
если A < B, или в порядке убывания в противном случае.*/

/*let numWriter = (a, b) => {
    let array = [];
        if (a > b) {
        for (let i = 0; i < a - b + 1; i++) {
            array[0] = b;
            array[i] = array[0] + 1 * [i];
        }
    } else if (b > a) {
        for (let i = b - a; i >= 0; i--) {
            array[array.length -1] = b;
            array[i] = array[array.length -1] - 1 * [i];
        }
    }else {
        console.log('error');
    }
    console.log(array);
}

numWriter(10, 14)*/


/*let numWriter = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }

}
let x = numWriter( 10, 15);*/


/*-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:*/
  // foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  // foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  // foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


/*function chenger(arr, i) {
    if (i === 0) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
    } else if (i === 1) {
        [arr[1], arr[2]] = [arr[2], arr[1]]
    } else if (i === 2) {
        [arr[2], arr[3]] = [arr[3], arr[2]]
    }
    console.log(arr)
}
const arr1 = [9, 8, 0, 4];
chenger(arr1, 1)*/






/*- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
 Зберігаючи при цьому порядок не нульових значень.
    Двожина масиву від 2 до 100
EXAMPLE:
    [1,0,6,0,3] => [1,6,3,0,0]
    [0,1,2,3,4] => [1,2,3,4,0]
    [0,0,1,0]   => [1,0,0,0]*/

// 1 варіант
/*let arr = [1, 0, 6, 0, 3, 0, 3, 2];
let zeroArr = [];
let resArr = [];
function zero(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            resArr[resArr.length] = array[i];
        } else {
            zeroArr[zeroArr.length] = array[i];
        }
    }
    for (let k = 0; k < zeroArr.length;k++) {
        resArr[resArr.length] = zeroArr[k];
    }
}
zero(arr);
console.log(resArr);*/

// 2 варіант
/*let arr1 = [1, 0, 6, 0, 3];
function zeroMoove(array) {
    for (let i = 0; i < array.length-1; i++) {
        if (array[i] === 0 && array[i + 1] !== 0) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            i = -i;
        }
    }
    return array;
}
let x = zeroMoove(arr1);
console.log(x);*/

// 3 варіант  з практичної
/*let arr1 = [1, 0, 6, 0, 3];
function zeroMover (array){
    let arr2 =[];
    let counter = 0;
    let index = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !==0){
            arr2[index++] = arr1[i]
        }else {
            counter++
        }
    }
    let num = arr2.length;
    for (let i = num; i < num + counter; i++){
        arr2[i] = 0;
    }
    return arr2;
}
let x = zeroMover(arr1);
console.log(x);*/



/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]*/


/*let arr =  [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
]
function foo(array){
    let newArr = [];
    for (let i = 0, j = 0 ; i < array.length; i++) {
        for (const key in array[i]) {
        newArr[j] = key;
        j++
        }
    }
            return newArr
}
let x = foo(arr);
console.log(x);*/



