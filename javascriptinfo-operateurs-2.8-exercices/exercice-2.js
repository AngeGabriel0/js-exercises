// Quelles sont les valeurs de a et x après le code ci-dessous ? 

let a = 2;

let x = 1 + (a *= 2);

console.log(a); //4, car a *= 2 est équivalent à a = a * 2, et a vaut 2, donc 2 * 2 = 4 (+ les parenthèses sont prioritaires selon le tableau de précédence)

console.log(x); //5, car après l'opération '(a *= 2)' prioritaire, a vaut 4, donc 1 + 4 = 5