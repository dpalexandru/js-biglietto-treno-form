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

//Dichiaro e recupero il button
const button = document.getElementById('button')

// funzione che recupera al click eta e km da percorrere
button.addEventListener('click', (e) => {
  e.preventDefault(); //no refresh page

  const km = document.getElementById('km').value
  const eta = document.getElementById('eta').value
  const nome = document.getElementById('nome').value
 
  const price=calcolaPrezzo(km,eta);
  document.getElementById('show-price').innerText = `Prezzo: €${price.toFixed(2)}`;
  document.getElementById('show-name').innerText = nome;

});


// funzione al click su annulla per refresh pagina 
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  location.reload();
});