// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

const rndNumberUser = Math.floor(Math.random() * 6) + 1;
const rndNumberPc = Math.floor(Math.random() * 6) + 1;
console.log(rndNumberUser, rndNumberPc)


// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (rndNumberUser > rndNumberPc) {
    console.log("Complimenti, hai vinto!");
} else if(rndNumberPc> rndNumberUser) {
    console.log("Peccato, hai perso :-(");
} else {
    console.log("pareggio");
}
