function calcul(){

  //Récupération du formulaire dans la variable formulaire.
  //Rappel : la méthode querySelector permet de récupérer le PREMIER élément HTML correspondant à la balise passée en paramètre
  let formulaire = document.querySelector('form');

  // elmts est une variable contenant la LISTE de tous les éléments <input> du formulaire)
  let elmts = formulaire.elements;

  // Pour récupérer la valeur saisie par l'utilisateur dans un élément de formulaire, on utilise sa propriété value
  // Exemple : truc est une variable contenant la valeur du premier élément de formulaire.
  // Attention : comme en python, une liste est numérotée à partir de 0 (le premier élément du formulaire est d'indice 0)
  let truc = elmts[0].value;

  // Les valeurs saisies dans un formulaire sont de type chaine de caractères
  // Il faut les convertir en nombre afin de pouvoir faire des calculs. Pour cela on utilise la fonction parseFloat
  // Exemple
  let machin = "31"; // la variable machin contient la chaîne de caractères "31"
  let bidul = parseFloat(machin); // la variable bidul contient le nombre (flottant) 31
}
