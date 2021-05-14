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
	 * @uses $fraisPort float frais de port
	 * @uses $titre string titre d'un livre
	 * @uses $prix float prix d'un livre
	 * @uses $reduction integer réduction d'un livre
	 * @uses $disponibilite boolean disponibilité d'un livre
	 * @uses $nEdition integer numéro d'édition d'un livre
	 * @uses $langue string langue d'un livre
	 * @uses $dateParution date date de parution d'un livre
	 */
	// #1 q9
	//phpinfo();
	echo 'Hello World'; echo '<br />';
	// #1 q13
	$fraisPort = 2;
	// #1 q14
	echo $fraisPort; echo '<br />';
	// #1 q15
	$fraisPort = $fraisPort + 0.5;
	// #1 q16
	echo 'Les frais de port sont de ', $fraisPort, ' euros'; echo '<br />';
	// #1 q17
	$titre = 'Harry Potter';
	$prix = 50;
	$reduction = 20;
	$disponibilite = true;
	$nEdition = 1;
	$langue = 'Français';
	$dateParution = '2001-12-24';
	// #1 q18
	echo $titre; echo '<br />';
	// #1 q19
	echo $prix * (100 - $reduction) / 100; echo '<br />';
	// #1 q20
	if($reduction > 0) {
		echo 'en promotion'; echo '<br />';
	}
	// #1 q21
	if($prix > 49) {
		echo 'pas de frais de port';
	} else {
		echo 'Les frais de port sont de ', $fraisPort, ' €';
	}
	echo '<br />';
	// #1 q22
	if($disponibilite) {
		echo 'en stock'; echo '<br />';
	}
	// #1 q23
	if(($nEdition > 1) and ($langue == 'Francais')) {
		echo 'réédité en français'; echo '<br />';
	}
	// #1 q24
	for($compteur=0; $compteur<140; $compteur=$compteur+1) {
		echo ':';
	}
	echo '<br />';
	// #1 q25
	$compteur = 0;
	while($compteur <= $nEdition) {
		echo 'édition n°', $compteur; echo '<br />';
		$compteur = $compteur + 1;
	}
	/**
	* @uses $tabThemes array(string) tableau des thèmes de livres
	* @uses $tabFraisPort array(string=>float) tableau des frais de port selon service d'envoi
	* @uses $choix string choix du service d'envoi
	*/
	// #2 q2
	$tabThemes = array('Informatique', 'Web', 'Jeux', 'Multimédia', 'Graphisme');
	// #2 q3
	
	// #2 q4
	$tabFraisPort = array(
		'standard' => 2.8,
		'europe' => 7,
		'suivi' => 8,
		'express' => 14.9
	);
	// #2 q5
	$choix = 'suivi';
	
	// #2 q6
	include('connexion.inc.php');

	// #2 q7

	// #2 q9

?>
</section>
<footer>Copyright &copy; <a href=".">Exercices PHP</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
