//jsnack3

//Il software deve chiedere per 10 volte all’utente di inserire un numero.

//Il programma stampa la somma di tutti i numeri inseriti.

// let num1= parseInt(prompt("inserisci un numero"));
// let num2= parseInt(prompt("inserisci un numero"));
// let num3= parseInt(prompt("inserisci un numero"));
// let num4= parseInt(prompt("inserisci un numero"));
// let num5= parseInt(prompt("inserisci un numero"));
// let num6= parseInt(prompt("inserisci un numero"));
// let num7= parseInt(prompt("inserisci un numero"));
// let num8= parseInt(prompt("inserisci un numero"));
// let num9= parseInt(prompt("inserisci un numero"));
// let num10= parseInt(prompt("inserisci un numero"));

// let sum = num1+num2+num3+num4+num5+num6+num7+num8+num9+num10 ;
// console.log(sum);


// seconda soluzione

let sum = 0;

for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt("Inserisci un numero:"));
  sum += numero;
}

console.log(sum);