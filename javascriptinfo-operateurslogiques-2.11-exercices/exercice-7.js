/* Lesquelles de ces alertes vont s’exécuter ?

Quels seront les résultats des expressions à l’intérieur de if (...) ? */

if (-1 || 0) alert( 'first' );
// -1 est équivalent à true, donc la première alerte s'exécute.

if (-1 && 0) alert( 'second' );
// 0 est équivalent à false, donc la seconde alerte ne s'exécute pas.

if (null || -1 && 1) alert( 'third' );
// -1 et 1 sont équivalents à true, l'opérateur && possède une priorité plus élevée, donc la troisième alerte s'exécute.