/* 
Voici un code qui demande à l’utilisateur deux nombres et affiche leur somme.

Cela ne fonctionne pas correctement. La sortie dans l’exemple ci-dessous est 12 (pour les valeurs d’invite par défaut).

Pourquoi ? Réparez-le. Le résultat doit être 3.
*/

//Code d'exercice

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

console.log(a + b); // Résultat 12

//Code corrigé avec raisonnement

let numberA = +prompt("First number?", 1);
let numberB = +prompt("Second number?", 2);
console.log(numberA + numberB); // Résultat 3

//Raisonnement : prompt retourne une chaîne de caractères, donc les variables a et b sont des chaînes de caractères. L'opérateur + devant prompt convertit les chaînes de caractères en nombres. Donc la somme de numberA et numberB est 3.
