// Quel sera le résultat ? (AND et OR)

alert(null || 2 && 3 || 4);

/* Raisonnement : selon le tableau de précédence, l'opérateur && est exécuté en premier, puis ||.
2 && 3 renvoie 3, car les deux opérandes sont équivalents à true, et l'opérateur && renvoie la dernière opérande vraie.
Donc l'expression devient : null || 3 || 4
Ensuite, || renvoie la première opérande vraie, donc 3 est retourné.
Donc la sortie est 3.
*/
