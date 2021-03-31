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
	 * Exercices PHP #3
	 * @author Prénom Nom <prenom.nom@etu.iut-tlse3.fr>
	 * @link http://webmmi.iut-tlse3.fr/~xxx1234a/php
	 * @uses $tabThemes array(string) tableau des thèmes de livres
	*/
	include 'connexion.inc.php';
	echo 'PREMIER LIVRE : ';
	echo '<br />';
	// q3
	echo count($livre);
	echo ' attributs (colonnes)<br />';
	// q6
	echo $livre['titre'];
	echo '<br />';
	echo $livre['resume'];
	echo '<br />';
	echo 'LISTE DES THEMES : ';
	$tabThemes = array('Informatique', 'Web', 'Jeux', 'Multimédia', 'Graphisme');
	// q8

	foreach($tabThemes as $theme) { echo $theme, '-'; }
	echo '<br />';
	// q9
	/**
	 * fonction affichant le nombre de pages au format "n p."
	 * @param int $nbPages nombre de pages d'un livre
	 * @return string texte du nombre de pages
	 */
	function afficheNbPages($nbPages) {
		return $nbPages . ' p.';
	}
	// q11
	
	// q12

	// q13

	// q14
	
	// q15

	echo 'DEUXIEME LIVRE :';
	echo '<br />';
	// q16
	echo $livreObjet->getTitre();

?>
</section>
<footer>Copyright &copy; <a href=".">Exercices PHP</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
