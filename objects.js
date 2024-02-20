// const mySym = Symbol("key1")

// const JsUser = {
//     name : "sourav",
//     [mySym] : "myKey1",
//     age : 19,
//     location : "Delhi",
//     email : "souravkumar@gmail.com",
//     isLoggedIn : false,
//     lastLoginDay : ["Monday", "Saturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "sourav@google.com";
// Object.freeze(JsUser)
// JsUser.email = "sourav@yahoo.com";
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS User");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS User, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser = new Object();  //single ten object
// const tinderUser = {}   //none single ten object

// tinderUser.name = "sourav"
// tinderUser.age = 19
// tinderUser.isLoggedIn = false
// tinderUser.id = "123abc"
// console.log(tinderUser);

// const regularUser = {
//     email : "sourav@gmail.com",
//     fullName: {
//         userFullName : {
//             firstName : "Sourav",
//             lastName : "Kumar"
//         }
//     }
// }
// console.log(regularUser.fullName.userFullName.firstName);

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "c", 4: "d"};

// const obj3 = {...obj1, ...obj2};
// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);

const course = {
    courseName : "JavaScript",
    price : "2000",
    courseInstructor : "Hitesh"
}

// course.courseInstructor;
const {courseInstructor : instructor} = course;
// console.log(courseInstructor);
console.log(instructor);