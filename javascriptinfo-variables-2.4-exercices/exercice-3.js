'use strict';

/* Énoncé 
Examinez le code suivant :

 const birthday = '18.04.1982';

const age = someCode(birthday);

Ici, nous avons une constante birthday pour la date de naissance, ainsi que la constante age.

L’age est calculé à partir de birthday en utilisant someCode(), ce qui signifie un appel de fonction que nous n’avons pas encore expliqué (nous le ferons bientôt !), mais les détails n’ont pas d’importance ici, le fait est que l’age est calculé d’une manière ou d’une autre en fonction de la date de naissance birthday.

Serait-il juste d’utiliser des majuscules pour birthday? Pour age? Ou même pour les deux ?

const BIRTHDAY = '18.04.1982'; // mettre l'anniversaire en majuscule ?

const AGE = someCode(BIRTHDAY); // mettre l'âge en majuscule ? */

console.log("Mon raisonnement : Les majuscules sont en général utilisées pour les constantes qui ne changent jamais. Notre âge change, il n'est pas nécessaire de mettre en majuscule le nom de la variable 'age'. Néanmoins, la date de naissance ne change jamais, il est donc judicieux de mettre en majuscule le nom de la variable 'birthday'.");