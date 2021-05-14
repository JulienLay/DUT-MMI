<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>Exercices PHP</title>
</head>
<body>
<header>
</header>
<section id="main">
<?php
	/**
	 * Exercices PHP
	 * @author Prénom Nom <prenom.nom@etu.iut-tlse3.fr>
	 * @link http://webmmi.iut-tlse3.fr/~xxx1234a/php
	 */
	/* phpinfo(); */
	echo 'Hello World';
	echo '<br />';
	$fraisDePort = 2;
	echo $fraisDePort;
	echo '<br />';
	echo 'Les frais de port sont de ', $fraisDePort+0.5,' euros';

	$titreLivre = 'Mon Livre';
	$prixLivre = 3.20;
	$reductionLivre = 25;
	$disponibilite = true;
	$numeroEdition = 100;
	$langue = 'français';
	$dateParution = '2021-03-12';

	echo '<br />';
	echo 'Titre du livre : ',$titreLivre;
	echo '<br />';
	echo 'Prix du livre avec réduction : ', $prixLivre*(100-$reductionLivre)/100;

	echo '<br />';
	if ($reductionLivre > 0) {
		echo 'En promotion';
	}

	echo '<br />';
	if ($prixLivre > 49) {
		echo 'Pas de frais de port';
	} else {
		echo 'Les frais de port sont de 2.8 €';
	}

	echo '<br />';
	if ($disponibilite) {
		echo 'disponible';
	} else {
		echo 'pas disponible';
	}

	echo '<br />';
	if ($numeroEdition > 1 && $langue == 'français') {
		echo 'réédité en français';
	}
	
	echo '<br />';
	for($i=0; $i<150; $i=$i+1) {
		echo ':';
	}

	echo '<br />';
	for($i=1; $i<$numeroEdition+1; $i=$i+1) {
		echo 'edition n°', $i;
		echo '<br />';
	}
?>
</section>
<footer>Copyright &copy; <a href=".">Exercices PHP</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
