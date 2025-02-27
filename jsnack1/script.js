//jsnack1

//L’utente inserisce due numeri in successione, con due prompt.

//Il software stampa il maggiore.

let firstNumber= parseInt(prompt("inserisci primo numero"));
console.log(firstNumber);

let secondNumber= parseInt(prompt("inserisci secondo numero"));
console.log(secondNumber);

const number = [firstNumber,secondNumber];
console.log(number);

for (let i=0; i<number.length; i++) {
    if(firstNumber > secondNumber){
        console.log(firstNumber);
    }else {
        console.log(secondNumber);
        
    }
}

