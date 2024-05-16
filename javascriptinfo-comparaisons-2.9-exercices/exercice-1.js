// Quel sera le résultat pour les expressions suivantes : 

5 > 4
// true, car 5 est supérieur à 4

"apple" > "pineapple"
// false, car a est inférieur à p selon le tableau ASCII

"2" > "12"
// true, car 2 est supérieur à 1 selon le tableau ASCII, donc la comparaison s'arrête après le 2

undefined == null
// true, car undefined et null sont équivalents en valeur

undefined === null
// false, car undefined et null ne sont pas équivalents en type

null == "\n0\n"
// false, car null est équivalent uniquement à undefined

null === +"\n0\n"
// false, car null n'est pas équivalent à 0