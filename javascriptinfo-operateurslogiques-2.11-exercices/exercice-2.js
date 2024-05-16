// Qu’est-ce que le code ci-dessous va sortir ?

console.log(alert(1) || 2 || alert(3));

/* Raisonnement : le contenu d'alert(1), et le number 2 vont s'afficher.
alert(1) affiche 1 car 1 est équivalent à true.
2 s'affiche car équivalent à true
alert(3) n'est pas affiché car l'opérande précédente (2) est équivalent à true, et donc OR s'arrête à 2.

Donc la sortie est : 1, 2. 

*/