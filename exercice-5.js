/* Créez une fonction multiplyNumeric(obj) qui multiplie toutes les valeurs de propriétés numériques de obj par 2.

Par exemple : */

//Code initial :


// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

// Mon code (pris depuis le sandbox de test)
let menu2 = {
    width: 200,
    height: 300,
    title: "My menu"
};


function multiplyNumeric(obj) {

    for (let key in obj) {
        if (typeof [key] === 'number') {
            obj[key] *= 2;
        }
    }

}

multiplyNumeric(menu2);

console.log("menu width=" + menu2.width + " height=" + menu2.height + " title=" + menu2.title);