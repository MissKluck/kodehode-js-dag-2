let strings = 'bla bla bla'; //de mest basice, er bare dine egenvalgte ord
let numbers = 1432; //bare tall
let boolean = true; // true eller false statements
let array = [1, 43, 2, 3]; //en liste med ting
let object = {
  //mer spesifikt enn et array, kan gi mer spesifikke keys som name, age etc
  name: 'per harald borgen',
  age: 'elida',
  isAlive: true,
};

let isAlive = true;
let navn = 'per harald borgen';

if (object.isAlive === true) {
  console.log('yipppee!');
} else if (object.isAlive === false) {
  console.log('niet');
} else {
  console.log("U don't exist");
}

let i = 0;

while (i < array.length) {
  i++;
  console.log(i);
} // while kombinasjon av true or false og en liste objekter i et array

// === betyr at noe er helt likt, kan brukes for alt. MEn da sjekker den bare akkurat det, så om vi skriver === false sjekker den bare om den er definert som false, men hvis vi skriver ! så sjekker den bare om den ikke er true/er noe annet enn true. Om vi skriver ! foran noe så betyr det ikke, så vi kunne skrevet !isAlive for å sjekke om den er falsk på samme måte som vi kunne skrevet isAlive === false
// if else er bare en måte å si til koden at om dette står, så gjør dette her.
// const = constant, denne variabelen skal være konstant, ikke endre seg.
//let er en variabel som vi senere kan endre på.
//som at du sier til koden om variabelen kan endres på eller ikke.

function greeting() {
  console.log('hei og velkommen ' + object.name + '!');
}

let counter = 0;
console.log(counter);

function count() {
  counter++;
  console.log(counter);
}

function countDown() {
  if (counter > 0) {
    counter--;
  }
  console.log(counter);
}
