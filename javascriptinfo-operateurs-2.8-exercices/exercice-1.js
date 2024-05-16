//Quelles sont les valeurs finales de toutes les variables a, b, c et d après le code ci-dessous ?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

console.log(a); //2, car ++a est préfixé, donc a est incrémenté avant d'être affecté à c
console.log(b); //2, car b++ est postfixé, donc b est affecté à d avant d'être incrémenté
console.log(c); //2, car a a été incrémenté avant d'être affecté à c
console.log(d); //1, car b a été affecté à d avant d'être incrémenté

