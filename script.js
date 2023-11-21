console.log()

var licznikLiczba = 0;

const date = new Date();
date.setHours(0, 0, 0, 0);
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}

var dodaj = document.querySelector('.dodaj-js')
console.log(dodaj);
var odejmij = document.querySelector('.odejmij-js')
console.log(odejmij)
var licznik = document.querySelector(".licznik-js");
console.log(licznik);

dodaj.onclick = function() {
  if(licznikLiczba!=99){
    licznikLiczba++;
    
    localStorage.setItem(formatDate(new Date()), licznikLiczba);
    licznik.innerHTML = licznikLiczba;
  }
}

odejmij.onclick = function() {
  if(licznikLiczba!=0){
    licznikLiczba--;

    localStorage.setItem(formatDate(new Date()), licznikLiczba);
    licznik.innerHTML = licznikLiczba;
  }
}

var liczbaSzklanek = localStorage.getItem(formatDate(new Date()));
if(liczbaSzklanek || liczbaSzklanek == 0){
    licznikLiczba = localStorage.getItem(formatDate(new Date()));
}else {
    localStorage.setItem(formatDate(new Date()), 0);

    licznikLiczba =  localStorage.getItem(formatDate(new Date()));
}


const cat = localStorage.getItem(formatDate(new Date()));
licznik.innerHTML = licznikLiczba;


