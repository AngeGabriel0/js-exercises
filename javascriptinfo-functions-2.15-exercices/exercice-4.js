/* Ecrivez une fonction pow(x, n) qui renvoie x à la puissance n. 
Ou, autrement dit, multiplie x par lui-même n fois et renvoie le résultat. */

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let Xresult = +prompt("Entrez un nombre X :");
let Nresult = +prompt("Entrez un nombre N :");

if (Nresult < 1) alert("N doit être un entier positif");
document.write(pow(Xresult, Nresult).toLocaleString("Fr-FR"));

//Aller plus loin dans l'exercice (bonus) : si le nombre retourné est un bigInt, on le convertit en nombre entier avec un séparateur de milliers

if (pow(Xresult, Nresult) > 9999999999999999n) {
    alert("Le résultat est un grand nombre : " + pow(Xresult, Nresult).toLocaleString("Fr-FR"));
} else {
    document.write("Le résultat est un grand nombre : " + pow(Xresult, Nresult).toLocaleString("Fr-FR"));
}
/* Raisonnement
la fonction pow(x, n) utilise une boucle for pour multiplier x par lui-même n fois. 
J'ai amélioré l'exercice, qui permet de lire de grands nombre au lieu d'afficher des puissance (ex : 1e65 sera converti en nombre entier avec séparateur) */