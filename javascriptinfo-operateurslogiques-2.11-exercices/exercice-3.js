// Qu’est-ce que ce code va afficher ? (avec l'opérateur AND)

alert(alert(1) && alert(2));

/* Raisonnement : l'appel d'alert renvoie undefined.
Comme alert(1) renvoie undefined, l'opérateur AND && s'arrête à la première opérande, et ne va pas plus loin.
*/