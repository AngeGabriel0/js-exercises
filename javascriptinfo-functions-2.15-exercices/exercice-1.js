/* La fonction suivante renvoie true si le paramètre age est supérieur à 18.

Sinon, il demande une confirmation et renvoie son résultat.
Est-ce que Else est requis ? */

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

/* Réponse et raisonnement
Non, else n'est pas nécessaire : else s'exécute si age > 18 est faux, donc on peut simplement retourner le résultat de confirm directement.
*/ 