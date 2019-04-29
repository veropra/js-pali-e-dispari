/*ESERCIZIO 1-TESTO:
Capire se la parola inserita dall’utente è palindroma o no*/

/*1)Chiedo all'utente di inserire una parola*/
var word = prompt ("Inserisci una parola!");

/*2)Dichiaro una variabile con il metodo dell' ordine inverso attribuendo
l'ultima lettera della parola inserita dall'utente*/
var reverse = word.charAt(word.length -1);

/*3)Dichiaro la lunghezza partendo dalla penultima lettera della parola inserita
 dall'utente fino alla prima lettera*/
var wordLength = word.length -2;

for (var i = wordLength; i >= 0; i--) {
  reverse += word.charAt(i);
}

/*4)Stampo la condizione del ciclo for*/
if (word === reverse) {
  alert("La parola è palindroma");
	console.log ("La parola è palindroma")
}
else {
  alert("La parola non è palindroma");
	console.log ("La parola non è palindroma");
}
