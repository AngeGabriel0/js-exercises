/* Nous avons un objet stockant les salaires de notre équipe :

let salaries = {
 John: 100,
 Ann: 160,
 Pete: 130
}
Écrivez le code pour additionner tous les salaires et les enregistrer dans la variable sum. Devrait être égale à 390 dans l’exemple ci-dessus.

Si salaries est vide, le résultat doit être 0.

*/

// Mon code

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
if (salaries === '' || salaries === null) console.log('0');
let sumSalaries = (salaries.John + salaries.Ann + salaries.Pete);
console.log(sumSalaries); //390

//Solution sur le site 
let salariesSolution = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salariesSolution) {
    sum += salariesSolution[key];
}

alert(sum); // 390
