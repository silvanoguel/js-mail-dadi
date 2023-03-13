// Lista e-mail degli utenti autorizzati:
const permittedUsers = ["luca.rossi@gmail.com", "mario.bianchi@gmail.com", "paolo.verdi@gmail.com",];


// Chiediamo all'utente la sua mail
const userMail = prompt("Ciao utente! P.F. inserisci il tuo indirizzo e-mail");

// Per ogni prodotto dell'array
// SE è uguale a userSearch
// //      stampo che è autorizzato
// //  Altrimenti
// //      stampo che non può accedere
// 
let isFound = false;

for (let i = 0; i < permittedUsers.length; i++) {
    const currentMail = permittedUsers[i];
    console.log(currentMail);
    if (currentMail === userMail) {
    isFound = true;
    } 
}
 
if (isFound === true) {
    console.log("Grazie! Sei autorizzato a procedere");
    } else {
    console.log("Purtroppo non puoi accedere");
}