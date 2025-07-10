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

//test in console log della funzione calcola prezzo 
console.log(calcolaPrezzo(100,13))

//Dichiaro e recupero il button
const button = document.getElementById('button')


// funzione che recupera al click eta e km da percorrere
button.addEventListener('click', (e) => {
  e.preventDefault(); //no refresh page

  const km = document.getElementById('km').value
  const eta = document.getElementById('eta').value

  console.log(km, eta)
});

