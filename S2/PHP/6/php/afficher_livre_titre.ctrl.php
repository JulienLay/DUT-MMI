<?php
$titre = filter_input(INPUT_GET, 'titre', FILTER_SANITIZE_STRING);
// ajout des % sql pour rechercher le mot dans le titre :
$titre = '%'.$titre.'%';

// question 5.1 : connexion à la BD
include('connexion.inc.php');
// question 5.2 : requête
$sql ="SELECT isbn, titre, resume, prix, reduction, parution, num_edition, nb_pages, disponibilite, langue, photo
FROM livre
WHERE titre LIKE ?";
// question 5.3 : préparation de la requête
$requetePreparee = $bd->prepare($sql);
// question 5.4 : passage du paramètre à la requête
$requetePreparee->BindParam(1, $titre);
// question 5.5 : exécution de la requête
$requetePreparee->execute();
// question 5.6 : lecture de la ligne retournée
$livre = $requetePreparee->fetch(PDO::FETCH_ASSOC);
// question 5.7 : clôture de la connexion
$bd = NULL;

include('livre.vue.php');
