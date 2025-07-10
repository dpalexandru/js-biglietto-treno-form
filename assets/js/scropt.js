//Funzione per calcolare il prezzo del biglietto 
const calcolaPrezzo = (km,eta) => {
let prezzoAlKm = 0.21; 
let scontoMinore = 0.20;
let scontoPensione =0.40;
let prezzoViaggio = 0; 

if (eta < 18) {
  prezzoViaggio = km * prezzoAlKm
  prezzoViaggio = prezzoViaggio - (prezzoViaggio * scontoMinore)
} else if (eta >= 65) {
  prezzoViaggio = km * prezzoAlKm
  prezzoViaggio = prezzoViaggio - (prezzoViaggio * scontoPensione)
}
else{
  prezzoViaggio = km * prezzoAlKm
}
return prezzoViaggio;
} 
// Creo con numeri casuali posto a sedere e ticket biglietto ogni volta che si aggiorna la pagina
const numeroPosto = Math.floor(Math.random() * 10) + 1;
const numeroBiglietto = Math.floor(Math.random() * 900000) + 100000;
const numeroCarrozza = Math.floor(Math.random() * 5) + 1;


//Dichiaro e recupero il button
const button = document.getElementById('button')

// funzione che recupera al click eta, nome  km da percorrere
button.addEventListener('click', (e) => {
  e.preventDefault(); //no refresh page

  const km = document.getElementById('km').value
  const eta = document.getElementById('eta').value
  const nome = document.getElementById('nome').value
 
  const price=calcolaPrezzo(km,eta);
  document.getElementById('show-price').innerText = `Prezzo: €${price.toFixed(2)}`;
  document.getElementById('show-name').innerText = nome;

  document.getElementById('result-box').classList.remove('d-none');
  
  // innietto dati nella tabella il tuo biglietto
  document.getElementById('ticket-box').classList.remove('d-none');
  document.getElementById('ticket-name').innerText = nome;
  document.getElementById('ticket-carrozza').innerText = numeroCarrozza;
  document.getElementById('ticket-numero').innerText = numeroBiglietto;
  document.getElementById('ticket-prezzo').innerText = `€${price.toFixed(2)}`;
  document.getElementById('ticket-posto').innerText = numeroPosto;

  //stabilisco offerta da stampare sul biglietto
  let offerta = "Prezzo Standard";
  if (eta<18) {
    offerta = "Sconto Minori"
  } else if (eta>=65) {
    offerta = "Sconto Pensionati"
  } 
  document.getElementById('ticket-offerta').innerText = offerta;

});


// funzione al click su annulla per refresh pagina 
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  location.reload();
});