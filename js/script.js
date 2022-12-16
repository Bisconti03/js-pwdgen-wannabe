const nome = prompt('Qual è il tuo nome?');
console.log("Il nome dell'utente è: ", nome)


const cognome = prompt('Qual è il tuo cognome?');
console.log("Il cognome dell'utente è: ", cognome)


const colorePreferito = prompt('Qual è il tuo colore preferito?');
console.log("Il colore preferito dell'utente è: ", colorePreferito)


const infoUtente = nome + cognome + colorePreferito + 21;
console.log(infoUtente)


document.writeln(infoUtente);