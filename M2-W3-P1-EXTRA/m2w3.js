// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// function giveMeRandom(n) {
//     let arrayNumeri = [];
//     for (let i = 0; i < n; i++) {
//         let nRaddom = Math.floor(Math.random()*(10 - 0 + 1)) + 0;
//     console.log("numeri random",nRaddom);
//     arrayNumeri.push(nRaddom)
//     }
//     return arrayNumeri
// }

// let totale = giveMeRandom(6)
// console.log(totale);


// function checkArray(arryDiNumeri) {
//     let arrayMaggiori5 = 0
//     for (const numeroCorrente of arryDiNumeri) {
//         if (numeroCorrente > 5) {
//             console.log("controllo n random",numeroCorrente);
//             arrayMaggiori5.push(numeroCorrente)
//         }
//     }
//     let totalesomma = 0;
//     for (const numeroCorrente of arrayMaggiori5) {
//         totalesomma += numeroCorrente 
//     }
//     console.log("totale",totalesomma);
// }
// checkArray(totale)


/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// creare array con oggetti 
// stabilire id - nome - prezzo - quantità  
// creare funzione shoppingCartTotal che calcola il totale dovuto al negozio 
// let shoppingCart = [
//     {id:01, nome: "crema",  prezzo:100, quantita: 1},
//     {id:02, nome: "cacao",  prezzo:30,  quantita: 2},
//     {id:03, nome: "scarpe", prezzo:50,  quantita: 3}
// ]

// function shoppingCartTotal() {
//     let totale = 0; 
//     for (let i = 0; i < shoppingCart.length; i++) {
//         totale += (shoppingCart[i].prezzo * shoppingCart[i].quantita);
//     }
//     return totale
// }


// console.log(shoppingCartTotal());



/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

// creare array con oggetti 
// stabilire id - nome - prezzo - quantità 
// creare ogetto con id - nome - prezzo - quantità 
// creare una funzione che riceva un oggetto e lo inserisca nell'array shoppingCart

/* SCRIVI QUI LA TUA RISPOSTA */

// let shoppingCart = [
//     {id:01, nome: "crema",  prezzo:100, quantita: 1},
//     {id:02, nome: "cacao",  prezzo:30,  quantita: 2},
//     {id:03, nome: "scarpe", prezzo:50,  quantita: 3}
// ]

// let oggettoCart = {id:05, nome: "pizza",  prezzo:20, quantita: 5}

// function addToShoppingCart(aggiungiElemento) {
//     shoppingCart.push(aggiungiElemento);
//     console.log(shoppingCart.length);
//     return shoppingCart
// }

// console.log(addToShoppingCart(oggettoCart));




/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let shoppingCart = [
//     {id:01, nome: "crema",  prezzo:100, quantita: 1},
//     {id:02, nome: "cacao",  prezzo:30,  quantita: 2},
//     {id:03, nome: "scarpe", prezzo:50,  quantita: 3},
//     {id:01, nome: "crema",  prezzo:500, quantita: 1},

// ]

// function maxShoppingCart(x) {
//     let oggettoCostoso = x[0];
//     for (let i = 1; i < x.length; i++) {
//         if (x[i].prezzo > oggettoCostoso.prezzo) {
//             oggettoCostoso = x[i]
//         }
        
//     }
//     return oggettoCostoso
// }

// console.log(maxShoppingCart(shoppingCart));


/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let shoppingCart = [
//     {id:01, nome: "crema",  prezzo:100, quantita: 1},
//     {id:02, nome: "cacao",  prezzo:30,  quantita: 2},
//     {id:03, nome: "scarpe", prezzo:50,  quantita: 3},
//     {id:01, nome: "crema",  prezzo:500, quantita: 1},
// ]

// function latestShoppingCart() {
//     let shoppingCartUltimo = shoppingCart[shoppingCart.length-1];
//     return shoppingCartUltimo
// }

// console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// creare funzione "loopUntil"
// assegnare parametro "x" tra 0 e 9
// in console numero tra 0 9 finchè il numero estratto è maggiore di x per 3 volte di fila


// function loopUntil(x) {
//     let conatore = 0;
//     while (conatore !== 3) {
//         let randomArray = Math.floor(Math.random()*(9 - 0));
//         console.log("uscira :", randomArray);
//         if (randomArray > x) {
//             conatore++ 
//         }else{
//             conatore = 0
//         }
//     }
//     return conatore
// }

// console.log("uscira 2",loopUntil(4));


/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna 
 la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// crerare una funzione "average"
// parametro una' array 
// creare un' array 
// creare un for 
// creare un if che controlli se è un numero o no 

// function average(arr1) {
//     let numeriArray = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (typeof arr1[i] === "number") {
//             numeriArray.push (arr1[i]);
//         }
        
//     }
//     let somma = 0
//     for (let p = 0; p < numeriArray.length; p++) {
//         somma += numeriArray[p]
        
//     }
//     return somma / numeriArray.length
// }

// console.log(average([23,20,10,89, "ciao"]));



/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga 
 all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// creare una funzione "longest"
// parametro deve ricercare la stringa più lunga 
// creare un' array 
// ciclo for 

// let termini = ["ciao", "mondo", "universo", "pianeti"]
// console.log("qui vedi l'array :", termini);

// function longest(string) {
//     let stringaLunga = string[0];
//     for (let i = 1; i < string.length; i++) {
//         if (string[i].length > stringaLunga.length) {
//             stringaLunga = string[i]
//         }
        
//     }
//     return stringaLunga
// }
// console.log("qui vedi la stringa più lunga: ", longest(termini));


/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. 
 La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// filtro anti span 
// stringa denominata emailContent dento la quale si verifica se contiene "span" o "scam"
// in questo caso dice falso o vero

// function antispam(emailContent) {
//     if (emailContent.includes("span") || emailContent.includes("scam") ) {
//         return true 
//     }else{
//         return false
//     }
// }

// console.log(antispam("span"));


/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function dataOggi(data) {
    let oggi = new Date("2023-02-13")
    let datadifferenza = oggi - data
    return datadifferenza = Math.floor(datadifferenza / (1000 * 60 * 60 * 24))
}

let dataFinale = new Date ("1985-02-04")
console.log(dataOggi(new Date ("2022-02-04")));
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */


