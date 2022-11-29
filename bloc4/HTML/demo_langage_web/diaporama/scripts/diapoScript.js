// DEFINITION DE VARIABLES GLOBALES
let indice = 0;
let image = document.querySelector('img');
let nom = document.querySelector('h1');
let apport = document.querySelector('p');
let lien = document.querySelector('a');

// DEFINITION DE FONCTIONS
function data(){
  image.src=tabImages[indice];
  nom.innerHTML="<a href=https://fr.wikipedia.org/wiki/"+ tabNoms[indice].replaceAll(" ","_") + ">" + tabNoms[indice] + "</a>";
  apport.innerHTML=tabApports[indice];
  lien.href=tabLiens[indice];
}

function imageSuivante(){
  if (indice == 13) {
    indice = 0;
  }
  else {
    indice = indice + 1;
  }
  data();
}

function imagePrecedente(){
  if (indice == 0) {
    indice = 13;
  }
  else {
    indice = indice -1;
  }
  data();
}
// ABONNEMENTS
document.getElementById('next').addEventListener('click',imageSuivante);
document.getElementById('previous').addEventListener('click',imagePrecedente);
