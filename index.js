//1//
const somma = function () {
  let x = 50;
  let y = 25;
  let z = 25;
  if (x === 50) {
    console.log("true");
  } else if (x + y === 50) {
    console.log("true");
  } else {
    console.log("false");
  }
};
somma();

const somm = function (a, b) {
  return a + b === 50;
};
let result = somm(25, 26);
console.log(result);
//2//
const cambia = function () {
  let frase = "Carlo e Federica erano insieme al parco";
  let part = frase.slice(11);
  console.log(part);
};
cambia();

//3//
const controlla = function (num1, num2) {
  if (40 <= num1 && num1 <= 60 && 40 <= num2 && num2 <= 60) {
    return true;
  } else {
    return false;
  }
};
let finale = controlla(90, 62);
console.log(finale);
//4//
function verificaInizioLos(nomeCitta) {
  var nomeCittaMinuscolo = nomeCitta.toLowerCase();
  if (nomeCittaMinuscolo.startsWith("los")) {
    return nomeCitta;
  } else {
    return false;
  }
}
var citta1 = "Los Angeles";
var citta2 = "New York";

var risultatoCitta1 = verificaInizioLos(citta1);
var risultatoCitta2 = verificaInizioLos(citta2);

console.log(risultatoCitta2);
//5//
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

//document.querySelector("").innerHTML = "The sum is " + sum;

function myFunction(total, value) {
  return total + value;
}
//6//
let ary = [1, 2, 3, 4, 5];
const unoETre = function () {
  if (ary.includes(1) || ary.includes(3)) {
    return true;
  } else {
    return false;
  }
};
console.log(unoETre(ary));
//7//
let acuto = 90;
let ottuso = 180;
let retto = 90;
let piatto = 180;
const angolo = function (acuto, ottuso, retto, piatto) {
  if (acuto < 90) {
    console.log("acuto");
  } else if (ottuso === 90 || ottuso <= 180) {
    console.log("ottuso");
  } else if (retto === 90) {
    console.log("retto");
  } else if (piatto === 180) {
    console.log("piatto");
  }
};
console.log(piatto)
//8//


const getFirstLetters = function (str) {
  const words = str.trim().split(" ");
  let firstLetters = "";

  for (let i = 0; i < Math.min(words.length, 4); i++) {
    firstLetters += words[i][0].toUpperCase();
  }

  return firstLetters;
};

console.log(getFirstLetters("Fabbrica Italiana Automobili Torino"));

