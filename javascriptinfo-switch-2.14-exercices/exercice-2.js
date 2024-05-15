//Réécrivez le code ci-dessous en utilisant une seule instruction switch : 

let a = +prompt('a?', '');

if (a == 0) {
    alert(0);
}
if (a == 1) {
    alert(1);
}

if (a == 2 || a == 3) {
    alert('2,3');
}

//Mon code, en utilisant un Switch : 

let b = +prompt('b?', '');
switch (b) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}
//Raisonnement : grâce au Switch, mon code est plus court et plus lisible que le code initial.