/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
*/ 

/*Mini task:
-creo una variabile array che contenga una lista di n email 
-creo un prompt per chiedere all'utente la sua email 
-creo un ciclo per verificare se la mail è presente nella variabile (non posso utilizzare includes)
-condizione se è presente (true) o non è presente (false) 

*/ 
const emailInvitati = [
    'kirara@mail.com',
    'totodile@mail.com',
    'bulbasaur@mail.com',
    'squirtle@mail.com',
    'chansey@mail.com',
    'celebi@mail.com',
    'jynx@mail.com'
  ];

let email = prompt ("Digita la tua email");

let isPresent = false; //utilizzo questa variabile per segnarmi se le due stringhe corrispondono

for (let i = 0; i < emailInvitati.length; i++) {
    if (emailInvitati[i] === email) {
        isPresent=true; //aggiorna il valore se le ho trovate 
    }   
}

//creo le due condizioni se l'invitato è presente o meno 
if(isPresent == true) {
    console.log(`${email} è presente nella lista degli invitati`);
} else {
    console.log(`${email} non è presente nella lista degli invitati`);
}



 /*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

/*

Mini task: 
-creo una variabile per segnare il numero generato per il giocatore e quello per il computer
-uso la proprietà mathrandom per generare un numero casuale da 1 a 6
-creo una condizione: se ho il numero più alto vince il giocatore altrimenti vince il computer.

*/
let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
let numeroComputer = Math.floor(Math.random() * 6) + 1;

console.log(`questo è il numero del giocatore: ${numeroGiocatore}`)
console.log(`questo è il numero del computer: ${numeroComputer}`)

if(numeroGiocatore > numeroComputer){
    console.log(`il giocatore vince con il numero ${numeroGiocatore}`)
} else { //si potrebbe mettere anche un else if nella condizioni in cui si ottiene un pareggio
    console.log(`il computer vince con il numero ${numeroComputer}`)
}