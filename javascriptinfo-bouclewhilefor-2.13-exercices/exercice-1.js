// Quelle est la dernière valeur affichée par ce code ? Pourquoi ?

let i = 3;

while (i) {
  alert( i-- );
}

/* Réponse et raisonnement : 
La dernière valeur affichée par ce code est 1. 
La boucle while s'exécute tant que i est vrai : i est vrai tant qu'il est différent de 0. 
Donc, la boucle s'exécute pour i = 3, i = 2, i = 1.
Lorsque i = 0, la boucle s'arrête : la dernière valeur affichée est 1. 
*/
