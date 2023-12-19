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
