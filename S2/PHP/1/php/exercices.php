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
	$numeroEdition = 1;
	$langue = 'français';
	$dateParution = '2021-03-12';

	echo '<br />';
	echo $titreLivre;
	
?>
</section>
<footer>Copyright &copy; <a href=".">Exercices PHP</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
