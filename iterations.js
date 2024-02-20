// for

// for (let i = 0; i <= 10; i++) {
// const element = i;
// if(element ==5){
// console.log("5 is best number");
// }
// console.log(element);
// }

//
// for (let i = 1; i < 10; i++) {
// console.log(`Outer loop value: ${i}`);
// for (let j = 1; j < 10; j++) {
// console.log(`Inner loop value: ${j} and inner loop ${i}`);
// console.log(i + ' * ' + j + ' = ' + i*j);
//     }
// }

// let myArray = ["flash","batman","superman"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
// console.log(element);
// }

// break and continue

// for(let index = 0; index <= 20; index++){
//     if (index == 5) {
//         console.log(`Delected 5`);
//         break
//     }
//     const element = index;
//     console.log(`Value of i is ${index}`);
// }

// for(let index = 0; index <= 20; index++){
//     if (index == 5) {
// console.log(`Delected 5`);
// continue
// }
// const element = index;
// console.log(`Value of i is ${index}`);
// }

// While loop
// let index = 0;
// while (index <= 10) {
// console.log(`Value of index is ${index}`);
//     index = index + 2;
// }

// let myArray = ['flash', 'batman', 'superman'];
// let arr = 0;
// while(arr < myArray.length){
// console.log(`Value is ${myArray[arr]} to ${arr}`);
//     arr = arr + 1;
// }

// let score = 11;

// do {
//     console.log(`Score is ${score}`);
//    score++;
// } while (score <= 10);

// for of
// [], [], []
// [{}, {}, {}]

// const arr = [1,2,3,4,5];
// for (const num of arr) {
// console.log(num);
// }

// const greeting = "Sourav kumar";
// for(const greet of greeting){
// console.log(`Each char is ${greet}`);
// }

// Maps
// const map = new Map();
// map.set('IN', 'India')
// map.set('USD', 'United states of america')
// map.set('FR', 'France')
// map.set('IN', 'India')
// console.log(map);
// for (const [key, value] of map) {
// console.log(key, ':-' ,value);
// }

// const myObject = {
// 'game1' : 'NFS',
// 'game2' : 'Spiderman'
// }
// for (const [key, value] of myObject) {
// console.log(key, ':-' ,value);

// }

// for in
// const myObject = {
//     Js : 'JavaScript',
//     cpp : 'C++',
//     rb : 'ruby',
//     swift : 'swift by apple'
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ['js', 'rb', 'py', 'java', 'cpp']
// for(const key in programming){
// console.log(`${key} ${programming[key]}`);
// }

// const map = new Map();
// map.set('IN', 'India')
// map.set('USD', 'United states of america')
// map.set('FR', 'France')
// map.set('IN', 'India')

// for(const key in map){
//     console.log(key);
// }

// forEach
// const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (val1) => {
//     console.log(val1);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
// });

// const myCoding = [
//   {
//     languageName: "JavaScript",
//     languageFileName: "js",
//   },
//   {
//     languageName: "python",
//     languageFileName: "py",
//   },
//   {
//     languageName: "Java",
//     languageFileName: "java",
//   },
// ];

// myCoding.forEach((item) => {
//     console.log(item);
// })

// const codings = ["js", "ruby", "java", "python", "cpp"];

// const values = codings.forEach((item) => {
  // console.log(item);
  // return item;
// });

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 5);
// const newNums = myNums.filter((num) => {
//   return num > 5;
// });
// console.log(newNums);

// const newNums = []
// myNums.forEach((num) => {
//     if(num >5){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

// const books = [
//   {
//     title: "Book six",
//     genre: "History",
//     publish: 1987,
//     edition: 2010,
//   },
//   {
//     title: "Book six",
//     genre: "Science",
//     publish: 1987,
//     edition: 2010,
//   },
//   {
//     title: "Book six",
//     genre: "History",
//     publish: 1987,
//     edition: 2010,
//   },  
//   {
//     title: "Book six",
//     genre: "Fiction",
//     publish: 1987,
//     edition: 2010,
//   },
//   {
//     title: "Book six",
//     genre: "Fiction",
//     publish: 1987,
//     edition: 2010,
//   },
//   {
//     title: "Book six",
//     genre: "History",
//     publish: 1987,
//     edition: 2010,
//   },
// ];

// const userBook = books.filter( (bk) => {
//     return bk.genre === 'History'
// } )
// console.log(userBook);


// const newNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNum = newNumbers.map((num) => {
//     return num + 10
// })
// console.log(newNum);

// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currval ${currVal}`);
//     return acc + currVal
// }, 0)

// const myTotal = myNums.reduce((acc, currVal) => acc + currVal)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'react course',
        price : 1999
    },
    {
        itemName : 'java course',
        price : 999
    },
    {
        itemName : 'py course',
        price : 4999
    },M
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);