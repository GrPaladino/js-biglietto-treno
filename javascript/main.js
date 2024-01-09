// Inserimento risultato finale nell'html
const userCost = document.getElementById("result");

let error = false;

// Lunghezza del viaggio
const userKm = parseInt(prompt("Quanti km é lungo il tuo viaggio?"));
console.log(userKm);

if (isNaN(userKm)) {
  error = true;
  alert("I dati  inseriti non sono corretti");
}

// Etá utente
const userAge = parseInt(prompt("Inserisci la tua etá"));
console.log(userAge);

if (isNaN(userAge) || userAge < 1 || userAge > 100) {
  error = true;
  alert("Inserire un valore compreso tra 1 e 100");
}

if (!error) {
  // Costo del viaggio al km
  const costKm = 0.21;

  // Calcolo costo lordo del viaggio
  const totalCost = userKm * costKm;

  // Costo finale del viaggio
  tripCost = "";

  // Calcolo sconto
  let under18 = (totalCost / 100) * 20;
  let over65 = (totalCost / 100) * 40;

  // prezzo scontato
  if (userAge < 18) {
    tripCost = totalCost - under18;
    userCost.innerText = tripCost.toFixed(2);
  } else if (userAge > 18) {
    tripCost = totalCost - over65;
    userCost.innerText = tripCost.toFixed(2);
  }

  console.log(tripCost.toFixed(2));
} else {
  alert("I dati  inseriti non sono corretti");
}
