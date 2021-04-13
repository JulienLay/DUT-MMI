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
	 * Exercice 2 PHP
	 * @uses $prix float prix d'un livre
	 * @uses $tabThemes array(string) tableau des thèmes de livres
	 * @uses $theme string
	* @uses $tabFraisPort array(string=>float) tableau des frais de port selon service d'envoi
	* @uses $choix string choix du service d'envoi
	* @uses $iTheme integer indice du thème 
	*/
	$prix = 50;
	// #2 q2
	$tabThemes = array('Informatique', 'Web', 'Jeux', 'Multimédia', 'Graphisme');
	// #2 q3
	foreach($tabThemes as $theme) {
		echo $theme, '-';
	}
	echo '<br />';
	// #2 q4
	$tabFraisPort = array(
		'standard' => 2.8,
		'europe' => 7,
		'suivi' => 8,
		'express' => 14.9
	);
	// #2 q5
	echo 'Prix avec frais de port Express : ';
	echo $prix + $tabFraisPort['express'];
	echo '<br />';
	// #2 q6
	$choix = 'suivi';
	echo 'Prix avec frais de port choisis : ';
	echo $prix + $tabFraisPort[$choix];
	echo '<br />';
	// #2 q7
	include 'connexion.inc.php';
	echo $livre['titre'];
	echo '<br />';
	echo $livre['prix'];
	echo '<br />';
	echo $livre['reduction'];
	echo '<br />';
	echo $livre['disponibilite'];
	echo '<br />';
	echo $livre['numedition'];
	echo '<br />';
	echo $livre['langue'];
	echo '<br />';
	echo $livre['parution'];
	echo '<br />';
	// #2 q8
	$iTheme = 0;
	while(($tabThemes[$iTheme] <> 'Jeux') and ($iTheme < count($tabThemes))) {
		$iTheme = $iTheme + 1;
	}
	echo 'theme ', $iTheme, ' : Jeux';
	echo '<br />';
	// #2 q10
	echo 'LISTE DES LIVRES :';
	echo '<br />';
	foreach($tabLivres as $livre) {
		echo $livre['titre'];
		echo '<br />';
	}
?>
</section>
<footer>Copyright &copy; <a href=".">Exercices PHP</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
