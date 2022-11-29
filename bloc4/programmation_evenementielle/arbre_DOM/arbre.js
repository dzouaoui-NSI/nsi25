// DEFINITION DE FONCTION

function changeTaille(){
  this.style.fontSize="10px";
}

function changeLargeur(){
  this.style.width="10%";
}

// ABONNEMENTS

let titres=document.querySelectorAll("h2");

for(let i=0;i<titres.length; i++){
  titres[i].addEventListener("click",changeTaille);
}

let images=document.querySelectorAll("img");

for(let i=0;i<images.length; i++){
  images[i].addEventListener("click",changeLargeur);
}
