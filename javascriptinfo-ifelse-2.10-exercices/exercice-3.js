/*
En utilisant if..else, écrivez le code qui obtient un numéro via le prompt, puis l’affiche en alert :

1, si la valeur est supérieure à zéro,
-1, si inférieur à zéro,
0, si est égal à zéro.
Dans cet exercice, nous supposons que l’entrée est toujours un nombre.
*/

let number = +prompt("Entrez un nombre");
if (number > 0) {
    console.log(1);
}
else if (number < 0) {
    console.log(-1);
}
else {
    console.log(0);
}