/* Réécrire ce if..else en utilisant plusieurs opérateurs ternaires '?'.

Pour plus de lisibilité, il est recommandé de diviser le code en plusieurs lignes. */

let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}

//Réponse en ternaire
let messageTernaire = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';