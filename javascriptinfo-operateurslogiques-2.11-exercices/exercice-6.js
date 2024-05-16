/* Ecrivez une condition if pour vérifier que l’age n’est PAS compris entre 14 et 90 ans inclus.

Créez deux variantes: la première utilisant NOT !, La seconde – sans ce dernier. */

let age = 15;

//Première variante, en utilisant NOT (!)
if (!(age >= 14 && age <= 90)) {
    console.log("L'âge n'est pas compris entre 14 et 90 ans inclus");
}
else {
    console.log("L'âge est compris entre 14 et 90 ans inclus");
}

//Seconde variante, sans le NOT (!)
if (age < 14 || age > 90) {
    console.log("L'âge n'est pas compris entre 14 et 90 ans inclus");
}
else {
    console.log("L'âge est compris entre 14 et 90 ans inclus");
}
