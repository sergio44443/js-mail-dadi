const listaEmail = ['mattianatella@gmail.com', 'gigolo94@gmail.com']

let inserisciMail = prompt('Inserisci qui la tua email')
let message = '';

let flag = false;


while (!flag) {
  let i = 0;
  if (inserisciMail === listaEmail[i]){
      flag = true
      message = `l'indirizzo ${inserisciMail} è presente nelle mail validate`
} else {
  i++;
}
  if (i === listaEmail.length) {
    message = `l'indirizzo ${inserisciMail} non è presente nelle mail validate `
    flag = true
  }
}

// if (listaEmail.includes(inserisciMail)) {
//   message = ` l'indirizzo mail ${inserisciMail} rientra nella lista degli utenti abilitati all'accesso`
// } else {
//   message = ` l'indirizzo mail ${inserisciMail} NON rientra nella lista degli utenti abilitati all'accesso`
// }

console.log(message)