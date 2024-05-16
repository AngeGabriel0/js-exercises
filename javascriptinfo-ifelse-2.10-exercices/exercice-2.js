/* En utilisant la construction if..else, écrivez le code qui demande : ‘Quel est le nom “officiel” de JavaScript?’

Si le visiteur entre “ECMAScript”, alors éditez une sortie “Bonne réponse !”, Sinon – retourne “Ne sait pas ? ECMAScript!” */

let officialName = prompt("Quel est le nom 'officiel' de JavaScript?");
if (officialName === "ECMAScript") {
    console.log("Bonne réponse !");
}
else {
    console.log("C'est ECMAScript");
}

//Raisonnement : Si le nom officiel de JavaScript est "ECMAScript", alors la sortie est "Bonne réponse !". Sinon, la sortie est "Ne sait pas ? ECMAScript!".