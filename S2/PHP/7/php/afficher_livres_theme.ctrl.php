<?php
// récupération de l'id du thème depuis l'URL
$idTheme = filter_input(INPUT_GET, 'theme', FILTER_SANITIZE_NUMBER_INT);
// echo $idTheme, ' : le thème de cet id a été cliqué';
// connexion à la BD
include('connexion.inc.php');
// requête de sélection des livres du thème
$sql  = 'SELECT titre, resume FROM livre INNER JOIN classification ON livre.isbn=classification.isbn WHERE theme_id = ?';
// préparation de la requête
$requetePreparee = $bd->prepare($sql);
// passage du paramètre
$requetePreparee->BindParam(1, $idTheme);
// exécution de la requête
$requetePreparee->execute();
// lecture de toutes les lignes
$tabLivres = $requetePreparee->fetchAll(PDO::FETCH_ASSOC);
// clôture de la connexion
$bd = NULL;
include('livres.vue.php');
