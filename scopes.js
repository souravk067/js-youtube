// var c = 300;
// let a = 200;
// if (true) {
//   let a = 1;
//   const b = 2;
//   console.log("INNER", a);
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Sourav";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}
// one();

if (true) {
  const username = "Sourav";
  if (username === "Sourav") {
    const website = " Youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++++++++++++ Interesting ++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}

addTwo(3);
const addTwo = function(num) {
    return num + 2;
  }