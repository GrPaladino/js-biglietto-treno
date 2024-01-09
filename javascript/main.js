// Inserimento risultato finale nell'html
const userCost = document.getElementById("result");

// Lunghezza del viaggio
const userKm = parseInt(prompt("Quanti km é lungo il tuo viaggio?"));
console.log(userKm);

// Etá utente
const userAge = parseInt(prompt("Inserisci la tua etá"));
console.log(userAge);

// Costo del viaggio al km
const costKm = 0.21;

// Calcolo costo lordo del viaggio
const totalCost = userKm * costKm;

// Costo finale del viaggio
tripCost = "";

// Calcolo sconto
const under18 = (totalCost / 100) * 20;
const over65 = (totalCost / 100) * 40;

// prezzo scontato
if (userAge < 18) {
  tripCost = totalCost - under18;
  userCost.innerText = tripCost;
} else if (userAge > 18) {
  tripCost = totalCost - over65;
  userCost.innerText = tripCost;
}

console.log(tripCost.toFixed(2));
