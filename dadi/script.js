let message = []
let numeroPlayer = Math.ceil(Math.random() * 6);

let numeroPc = Math.random() * 6;

if (numeroPlayer > numeroPc){
    message = 'HAI VINTO';
}else if (numeroPlayer < numeroPc){
    message = 'HAI PERSO';
}else{
    message = 'PARI, RILANCIA';
}
console.log(message)