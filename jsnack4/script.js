
//Crea un array vuoto.

//Chiedi per 6 volte all’utente di inserire un numero,

//se è dispari inseriscilo nell’array

let numero1 = parseFloat(prompt("Inserisci un numero:"));
let numero2 = parseFloat(prompt("Inserisci un numero:"));
let numero3 = parseFloat(prompt("Inserisci un numero:"));
let numero4 = parseFloat(prompt("Inserisci un numero:"));
let numero5 = parseFloat(prompt("Inserisci un numero:"));
let numero6 = parseFloat(prompt("Inserisci un numero:"));

let numeriDispari = [];

if (numero1 % 2 !== 0) {
    numeriDispari.push(numero1);
}
if (numero2 % 2 !== 0) {
    numeriDispari.push(numero2);
}
if (numero3 % 2 !== 0) {
    numeriDispari.push(numero3);
}
if (numero4 % 2 !== 0) {
    numeriDispari.push(numero4);
}
if (numero5 % 2 !== 0) {
    numeriDispari.push(numero5);
}
if (numero6 % 2 !== 0) {
    numeriDispari.push(numero6);
}

console.log("Numeri dispari inseriti:", numeriDispari);


