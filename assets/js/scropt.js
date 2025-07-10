//Dichiaro e recupero il button
const button = document.getElementById('button')


// funzione che recupera al click eta e km da percorrere
button.addEventListener('click', (e) => {
  e.preventDefault(); //no refresh page

  const km = document.getElementById('km').value
  const eta = document.getElementById('eta').value

  console.log(km, eta)
});

