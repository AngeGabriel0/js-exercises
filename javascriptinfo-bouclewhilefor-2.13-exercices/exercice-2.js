/* A votre avis, quelles sont les valeurs affichées pour chaque boucle ? Notez-les puis comparer avec la réponse.

Les deux boucles affichent-elles les mêmes valeurs dans l’alert ou pas ? */


//Première boucle
let i = 0;
while (++i < 5) alert(i);
//Réponse : 1, 2, 3, 4

//Deuxième boucle
let j = 0;
while (i++ < 5) alert(j);
//Réponse : 1, 2, 3, 4, 5