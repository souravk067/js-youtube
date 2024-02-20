// const user = {
//     username : "sourav",
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`${this.username} , Welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username = "kumar";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//    let username = "sourav"
//     console.log(this.username);
// }
// chai();

// const chai = () => {
    // let username = "sourav"
    // console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "Sourav"})


console.log(addTwo(2,3));