/* Écrivez le code qui demande une connexion avec prompt.

Si le visiteur entre "Admin", puis prompt pour un mot de passe, si l’entrée est une ligne vide ou Esc – affichez “Canceled”, s’il s’agit d’une autre chaîne de caractères – alors affichez “I don’t know you”.

Le mot de passe est vérifié comme suit :

S’il est égal à “TheMaster”, alors affichez “Welcome!”,
Une autre chaîne de caractères – affichez “Wrong password”,
Pour une chaîne de caractères vide ou une entrée annulée, affichez “Canceled”. */

let currentUserName = prompt("Entrez un nom d'utilisateur", '');

if (currentUserName == 'Admin') {

    let currentPassword = prompt('OK, quel est le mot de passe ?', '');

    if (currentPassword == 'TheMaster') {
        console.log('Bienvenue!');
    } else if (currentPassword == '' || currentPassword == null) {
        console.log('Accès refusé : entrez un mot de passe valide');
    } else {
        console.log('Mot de passe incorrect : veuillez réessayer');
    }

} else if (currentUserName == '' || currentUserName == null) {
    console.log('Veuillez entrer un nom d\'utilisateur valide');
} else {
    console.log("Je ne vous connais pas : accès refusé");
}

