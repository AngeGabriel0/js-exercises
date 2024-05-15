/* La fonction suivante renvoie true si le paramètre age est supérieur à 18.

Sinon, il demande une confirmation et renvoie le résultat.

Réécrivez la fonction suivante en utilisant '?' ou '||'*/

//Code initial
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}


//Code modifié en utilisant le ternaire

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

//En utilisant OR

function checkAge(age) {
    return (age > 18) ||
        confirm('Did parents allow you?');
}