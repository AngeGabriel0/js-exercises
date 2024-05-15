/* Ecrivez une fonction min(a, b) qui renvoie le plus petit des deux nombres a et b.

Par exemple : */

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

//Mon code
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//Autre solution
function min(a, b) { return a < b ? a : b; } //ce code fait la meme chose que le code écrit ci-dessus, mais en une ligne
