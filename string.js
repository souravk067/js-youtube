let name = "Sourav-Kumar";

// console.log(name.charAt(3));
// console.log(name.indexOf("a"));
// const gameName = name.substring(0,4);
// console.log(gameName);

// const gameName = name.slice(-10,4);
// console.log(gameName);

// const gameName = "  Kumar   ";
// console.log(gameName);
// console.log(gameName.trim());

const url = "https://hitesh.com/sourav%20kumar"
console.log(url.replace('%20', '-'));


console.log(url.includes('sourav'));

const nameGame = new String('Sourav-kumar-sk');
console.log(nameGame.split('-'));