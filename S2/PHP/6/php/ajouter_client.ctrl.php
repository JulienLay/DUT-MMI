<?php
 /* récupération des informations du client depuis le formulaire : */
 $pseudo = filter_input(INPUT_POST, 'pseudo', FILTER_SANITIZE_STRING);
 $nom = filter_input(INPUT_POST, 'nom', FILTER_SANITIZE_STRING);;
 $prenom = filter_input(INPUT_POST, 'prenom', FILTER_SANITIZE_STRING);;
 $mail = filter_input(INPUT_POST, 'adresseMail', FILTER_SANITIZE_EMAIL);
 $mdp = filter_input(INPUT_POST, 'mdp');
 $pro = filter_input(INPUT_POST, 'pro', FILTER_VALIDATE_BOOLEAN);
 $nbLivresLus = filter_input(INPUT_POST, 'nbLivresLus', FILTER_SANITIZE_NUMBER_INT);
 $mdpChiffre = password_hash($mdp, PASSWORD_DEFAULT) ;

// question 11 : instructions d'insertion du client en BD :
// connexion au SGBD :
include('connexion.inc.php');

// requête d'insertion d'un client :
$sql = "INSERT INTO client(pseudo, nom, prenom, mail, mot_de_passe, pro, nb_livres_lus) VALUES (?,?, ?, ?, ?, ?, ?)";

// préparation de la requête
$requetePreparee = $bd->prepare($sql);

// passage du paramètre
$requetePreparee->BindParam(1, $pseudo);
$requetePreparee->BindParam(2, $nom);
$requetePreparee->BindParam(3, $prenom);
$requetePreparee->BindParam(4, $mail);
$requetePreparee->BindParam(5, $mdp);
$requetePreparee->BindParam(6, $pro);
$requetePreparee->BindParam(7, $nbLivresLus);

// exécution de la requête :
$requetePreparee->execute();

if($requetePreparee == FALSE) {
    echo 'erreur exécution requête';
} else {
    echo 'client créé en base de données';
}

// clôture de la connexion :
$bd = NULL;

?>
