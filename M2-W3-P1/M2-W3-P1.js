/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function area(l1,l2) {
//     return l1 * l2 
// }

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazySum(a,b) {
//     if (a === b) {
//         return (a + b) * 3;
//     } else {
//     return (a + b);
//     }
// }

// let totale = crazySum(7,6)
// console.log(totale);


/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazyDiff(numero) {
//     let totale = Math.abs(numero - 19)
//     return totale > 19 ? totale * 3 : totale;
// }

// let risultato = crazyDiff(90)
// console.log(risultato);


// function crazyDiff(num) {
//     if (num > 19){
//         return Math.abs(num - 19)*3;
//     } else{
//         return Math.abs(num - 19)
//     }
// }

// let totaleRius = crazyDiff(90);
// console.log("il risultato sarà : ", totaleRius);



/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function boundary(numero) {
//     return (numero >= 20 && numero <= 100) || numero === 400; 
// }

// let risultato = boundary(500)
// console.log(risultato);


// function boundary(num) {
//     if ((num >= 20 && num <= 100) || num === 400 ) {
//         return true
//     } else {
//         return false
//     }
// }

// let totale = boundary(30);
// console.log("la funzione sarà :", totale);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function codify(str) {
//     return str.indexOf("code") === 0 ? str : "code" + str;
// }

// let risultato = codify("code ciao mondo")
// console.log(risultato);


// function codify(str) {
//     if (str.startsWith("code")) {
//         return str
//     } else {
//         return "code" + str
//     }
// }

// let totale = codify(" ciao mondo")
// console.log(totale);

// function codify(str) {
//     if (str.indexOf("code") === 0 ){
//          return str
//     } else {
//         return  "code" + str;
//     }
// }

// let risultato = codify(" ciao mondo")
// console.log(risultato);



/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function chech3and7(num) {
//     return (num % 3 === 0 || num % 7 === 0 );
// }

// let risultato = chech3and7(15);
// console.log(risultato);

// function chech3and7(num) {
//     if (num >= 0 && (num % 3 === 0  || num % 7 === 0)) {
//         return true
//     } else {
//         return false
//     }
// }

// let totale = chech3and7(-15)
// console.log("risultato sarà:", totale);

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function reverseString(str) {
//     return str.split('').reverse('').join('');
// }



// function reverseString(str) {
//     let splitStr = str.split("");
//     let reverseStr = splitStr.reverse("");
//     let joinStr = reverseStr.join("");
//     return joinStr
// }
// let parola = reverseString("andrea")
// console.log(parola);

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function upperFirst(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
    
// }




// function upperFirst(str) {
//     let parola = str.split(' ');
//     console.log(parola);
//     let fraseFinale = [];
//     for (let i = 0; i < parola.length; i++) {
//         const primaLettera = parola[i].charAt(0);
//         let cutParola = parola[i].slice(1);
//         console.log("parola corrente", primaLettera, cutParola);
//         let maiusc = primaLettera.toUpperCase();
//         let parolaFinale = maiusc + cutParola;
//         fraseFinale.push(parolaFinale)
//     }
//     return fraseFinale
// }

// let totale = upperFirst("ciao mondo")
// console.log (totale.join(' '));



// function upperFirst(str) {
//     let parola = str.split(" ");
//     let fraseFinale = [];
//     for (let i = 0; i < parola.lenght; i++) {
//         let primaLettera = parola[i].charAt(0);
//         let maiuscola = primaLettera.toUpperCase("");
//         let tagliareparola = parola[i].slice(1);
//         let parolaFinale = maiuscola + tagliareparola;
//         fraseFinale.push(parolaFinale)
//     }
//     return fraseFinale
// }

// console.log (upperFirst("andrea andrea"));
/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// function cutString(str) {
//     return str.slice(1,-1) 
// }

// let parola = cutString("franca")
// console.log(parola);



// function cutString(str) {
//     let stringa = str;
//     let strSenzaIniz = stringa.slice(1);
//     let strSenzaFin = strSenzaIniz.slice(0,-1);
//     return strSenzaFin
// }

// let totale = cutString("stringaDiProva")
// console.log(totale)


// function cutString(str) {
//     let strSenzaFin = str.substring(1,str.length-1)
//     return strSenzaFin
// }

// let totale = cutString("stringaDiProva")
//  console.log(totale)

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let arrayNumeri = [];
    for (let i = 0; i < n; i++) {
        let nRaddom = Math.floor(Math.random()*(10 - 0 + 1)) + 0;
    console.log(nRaddom);
    arrayNumeri.push(nRaddom)
    }
    return arrayNumeri
}

let totale = giveMeRandom(9)
console.log(totale);

