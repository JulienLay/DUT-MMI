<?php
 /* question 7 : récupération des informations du client depuis le formulaire : */
 $pseudo = filter_input(INPUT_POST, 'pseudo', FILTER_SANITIZE_STRING);
 $nom = filter_input(INPUT_POST, 'nom', FILTER_SANITIZE_STRING);
 $prenom = filter_input(INPUT_POST, 'prenom', FILTER_SANITIZE_STRING);
 $mail = filter_input(INPUT_POST, 'mail', FILTER_SANITIZE_STRING);
 $mdp = filter_input(INPUT_POST, 'mdp', FILTER_SANITIZE_STRING);
 $pro = filter_input(INPUT_POST, 'pro', FILTER_SANITIZE_STRING);
 $nbLivresLus = filter_input(INPUT_POST, 'nbLivresLus', FILTER_SANITIZE_STRING);
 /* affichage des informations du client pour vérif : */
 echo $pseudo;
 echo '<br />';
 echo $nom;
 echo '<br />';
 echo $prenom;
 echo '<br />';
 echo $mail;
 echo '<br />';
 if($pro) { echo 'client pro'; } else { echo 'particulier'; };
 echo '<br />';
 echo $nbLivresLus;
 echo '<br />';
 ?>  
