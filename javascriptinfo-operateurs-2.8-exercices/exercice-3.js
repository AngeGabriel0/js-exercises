// Quels sont les résultats de ces expressions ? (raisonnement en commentaire)

"" + 1 + 0 
// "1" + 0 = "10", car dû au string au début, les autres valeurs sont converties en string, et la concaténation est faite

"" - 1 + 0 
/* 0 - 1 = -1, car dû au - au début, les autres valeurs sont converties en nombre, et la soustraction est faite 
Rappel : la concaténation s'effectue seulement lorsqu'il y a l'opérateur +. Autrement, une conversion en number sera faite. */

true + false 
//1, car en number, true = 1 / false = 0, donc 1 + 0 = 1

6 / "3" 
//2, car "3" est converti en nombre, donc 6 / 3 = 2

"2" * "3"
//6, car les deux valeurs sont converties en nombre, donc 2 * 3 = 6

4 + 5 + "px" 
//9px, car 4 + 5 = 9, et la concaténation est faite avec "px"

"$" + 4 + 5
//"$45", car le $ est un string, donc les autres valeurs sont converties en string, et la concaténation est faite

"4" - 2
//2, car "4" est converti en nombre, donc 4 - 2 = 2

"4px" - 2 
//NaN, car "4px" ne peut pas être converti en nombre, donc NaN

"  -9  " + 5
// "  -9  5", car les deux valeurs sont converties en string, et la concaténation est faite
"  -9  " - 5
//-14, car "  -9  " est converti en nombre, donc -9 - 5 = -14

null + 1 
//1, car null est converti en 0, donc 0 + 1 = 1

undefined + 1
//NaN, car undefined ne peut pas être converti en nombre, donc NaN

" \t \n" - 2
//-2, car " \t \n" est converti en nombre, et une string vide équivaut à 0. Donc 0 - 2 = -2