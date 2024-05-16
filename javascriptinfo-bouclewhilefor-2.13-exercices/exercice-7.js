/* 
Un nombre entier supérieur à 1 est appelé un Nombre premier s’il ne peut être divisé sans reste par rien d’autre que 1 et lui-même.

En d’autres termes, n > 1 est un nombre premier s’il ne peut être divisé de manière égale par autre chose que 1 et n.

Par exemple, 5 est un nombre premier, car il ne peut pas être divisé sans reste par 2, 3 et 4.

Écrivez un code qui produit les nombres premiers dans l’intervall e 2 à n.

Pour n = 10, le résultat sera 2,3,5,7.

P.S. Le code devrait fonctionner pour n’importe quel n et aucune valeur fixe ne doit être codé en dur. */

let n = 10;
nextFirstNumber:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextFirstNumber;
    }
    console.log(i);
}

/* Raisonnement : Ce code utilise deux boucles imbriquées. 
La première boucle for (let i = 2; i <= n; i++) parcourt les nombres de 2 à n. 
La deuxième boucle for (let j = 2; j < i; j++) vérifie si i est divisible par un autre nombre que 1 et lui-même. 
Si i est divisible par un autre nombre, la boucle continue avec le prochain nombre. 
Si i n'est pas divisible par un autre nombre, i est un nombre premier et est affiché dans la console. */