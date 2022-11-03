// array1

let arr1 = ['id',
    'name',
    'surname',
    'phone', 'mail',
    'status',
    'age',
    'username',
    'userpasword',
    true];

console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);


//objects1

let books1 = {
    title: 'bookname1',
    pageCount: 'size1',
    genre: 'scientific'
}
let books2 = {
    title: 'bookname2',
    pageCount: 'size2',
    genre: 'technical'
}
let books3 = {
    title: 'bookname3',
    pageCount: 'size3',
    genre: 'fiction'
}
console.log(books1, books2, books3);

//objects2

let books1_1 = {
    title: 'bookname1',
    pageCount: 'size1',
    genre: 'scientific',
    author: [
        name = "author1",
        age = 34
    ]
}
let books1_2 = {
    title: 'bookname2',
    pageCount: 'size2',
    genre: 'technical',
    author: [
        name = "author2",
        age = 35
    ]
}
let books1_3 = {
    title: 'bookname3',
    pageCount: 'size3',
    genre: 'fiction',
    author: [
        name = "author3",
        age = 36
    ]
}
console.log(books1_1.genre);
console.log(books1_2.author[0]);
console.log(books1_3.author[1]);

// array2

let users = [
    {name: 'name1', username: 'username1', password: 'pass1'},
    {name: 'name2', username: 'username2', password: 'pass2'},
    {name: 'name3', username: 'username3', password: 'pass3'},
    {name: 'name4', username: 'username4', password: 'pass4'},
    {name: 'name5', username: 'username5', password: 'pass5'},
    {name: 'name6', username: 'username6', password: 'pass6'},
    {name: 'name7', username: 'username7', password: 'pass7'},
    {name: 'name8', username: 'username8', password: 'pass8'},
    {name: 'name9', username: 'username9', password: 'pass9'},
    {name: 'name10', username: 'username10', password: 'pass10'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

