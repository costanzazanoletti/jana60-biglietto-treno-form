// intercettare l'evento di submit della form
const ticketForm = document.querySelector('form');
//console.log(ticketForm);
ticketForm.addEventListener('submit', computeTicket);
ticketForm.addEventListener('input', hideOutput);

// definizione delle funzioni
function computeTicket(event) {
  event.preventDefault();
  // leggere il valore di km e di age
  const kmInput = document.getElementById('km');
  const ageInput = document.getElementById('age');
  //   console.log(kmInput);
  //   console.log(kmInput.value);
  //   console.log(ageInput.value);
  const kmValue = parseInt(kmInput.value);
  const ageValue = parseInt(ageInput.value);
  const priceOutput = getPrice(kmValue, ageValue);
  console.log(priceOutput);

  // inserire i valori nell'output html
  document.getElementById('kmOutput').innerHTML = kmValue;
  document.getElementById('offerOutput').innerHTML = priceOutput.offer;
  document.getElementById('priceOutput').innerHTML = new Intl.NumberFormat(
    'it-IT',
    { style: 'currency', currency: 'EUR' }
  ).format(priceOutput.price);
  // mostrare la table
  document.getElementById('output').className = '';
}

// calcolare il prezzo del biglietto in base a km e age
function getPrice(km, age) {
  let price = km * 0.21;
  let offer = 'Standard';
  if (age < 18) {
    price = price - price * 0.2;
    offer = 'Sconto minorenni';
  }
  if (age >= 65) {
    price = price - price * 0.4;
    offer = 'Sconto over 65';
  }
  return {
    price: price,
    offer: offer,
  };
}

// nasconde la table
function hideOutput() {
  document.getElementById('output').className = 'hidden';
}
