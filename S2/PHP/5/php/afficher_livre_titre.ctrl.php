<?php
/* question 3 : récupération du titre depuis le formulaire : */
$titre = filter_input(INPUT_GET, 'titre', FILTER_SANITIZE_STRING);
echo $titre, ' a été saisi.';
?>
