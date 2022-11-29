// DEFINITION DE VARIABLES GLOBALES
let indice = 0; // Indice des tableaux dans diapoData.js
let image = document.querySelector('img');
..... //A compléter

// DEFINITION DE FONCTIONS
function data(){
  image.src=tabImages[indice];
..... //A compléter
}

function imageSuivante(){
  // Incrémenter la variable indice (de 0 à 13)
  data();
}

function imagePrecedente(){
  // Décrémenter la variable indice (de 13 à 0)
  data();
}
// ABONNEMENTS
document.getElementById('next').addEventListener('click',imageSuivante);
//A compléter
