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
	echo utf8_encode($livre['titre']);
	echo '<br />';
	echo utf8_encode($livre['resume']);
	echo '<br />';
	echo 'LISTE DES THEMES : ';
	$tabThemes = array('Informatique', 'Web', 'Jeux', 'Multimédia', 'Graphisme');
	// q8
	sort($tabThemes);
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
	echo afficheNbPages($livre["nbpages"]);
	echo '<br />';
	// q12
	/**
	 * fonction calculant et renvoyant le prix après réduction
	 * @param float $prix le prix
	 * @param float $reduction la reduction du prix
	 * @return int prix après réduction
	 */
	function reduire($prix, $reduction) {
		return $prix * (100 - $reduction) / 100;
	}
	// q13
	echo reduire($livre["prix"], $livre["reduction"]);
	echo '<br />';
	// q14
	/**
	 * fonction retournant la chaine passée en paramètre 
	 * @param string $chaine la chaine à répéter
	 * @param int $taille le nombre de fois à répéter la chaine à répéter
	 * @return string $taille fois la chaine
	 */
	function repeter($chaine, $taille) {
		for($i=0; $i<$taille; $i=$i+1) {
			echo $chaine;
		}
	}
	// q15
	repeter(":", 100);
	echo '<br />';
	echo 'DEUXIEME LIVRE :';
	echo '<br />';
	// q16
	echo utf8_encode($livreObjet->getTitre());
	echo '<br />';
	echo $livreObjet->getPrix();
	echo '<br />';
	echo $livreObjet->getReduction();
	echo '<br />';
	echo $livreObjet->getDisponibilite();
	echo '<br />';
	echo $livreObjet->getNumEdition();
	echo '<br />';
	echo $livreObjet->getLangue();
	echo '<br />';
	echo afficheNbPages($livreObjet->getNbPages());
	echo '<br />';
	echo date("d/m/Y", $livreObjet->getParution());
	date_default_timezone_set("Europe/Paris");

?>
</section>
<footer>Copyright &copy; <a href=".">Exercices PHP</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
