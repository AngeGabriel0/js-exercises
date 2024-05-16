/* Est-il possible de changer un objet déclaré avec const, comment ? */

const user = {
    name: "John"
};

// est-ce que ça fonctionne ?
user.name = "Pete";

/* Raisonnement :
Oui, tout fonctionne sans souci. 
La déclaration const ne protège pas l'objet de la modification de ses propriétés.
C'est-à-dire que même avec const, l'objet lui-même est toujours modifiable.
*/