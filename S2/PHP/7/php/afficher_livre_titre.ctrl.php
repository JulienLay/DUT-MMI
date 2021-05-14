<?php
$titre = filter_input(INPUT_GET, 'titre', FILTER_SANITIZE_STRING);
// ajout des % sql pour rechercher le mot dans le titre :
$titre = '%'.$titre.'%';
// connexion à la BD
include('connexion.inc.php');
// requête
$sql  = "SELECT isbn, titre, resume, prix, reduction, parution, num_edition, nb_pages, disponibilite, langue, photo
    FROM livre
    WHERE titre LIKE ? ";
// préparation de la requête
$requetePreparee = $bd->prepare($sql);
// passage du paramètre à la requête
$requetePreparee->BindParam(1, $titre);
// exécution de la requête
$requetePreparee->execute();
// lecture de la ligne retournée
$livre = $requetePreparee->fetch(PDO::FETCH_ASSOC);

// requête de consultation des auteurs du livre
$sql  = 'SELECT prenom, nom FROM auteur INNER JOIN ecriture ON auteur.id=ecriture.auteur_id WHERE isbn=?';
$requetePrepareeAuteurs = $bd->prepare($sql);
$requetePrepareeAuteurs->BindParam(1, $livre['isbn']);
$requetePrepareeAuteurs->execute();
$tabAuteurs = $requetePrepareeAuteurs->fetchAll(PDO::FETCH_ASSOC);

// clôture de la connexion
$bd = NULL;
include('livre.vue.php');
