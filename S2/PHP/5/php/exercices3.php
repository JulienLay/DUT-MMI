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
	 * @var $tabThemes array(string) tableau des thèmes de livres
	 * @var $resultatTri boolean réussite du tri des thèmes
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
	$resultatTri = sort($tabThemes);
	foreach($tabThemes as $theme) { echo $theme, '-'; }
	echo '<br />';
	// q9
	/**
	 * fonction concaténant le nombre de pages au format "n p."
	 * @param int $nbPages nombre de pages d'un livre
	 * @return string texte du nombre de pages
	 */
	function affichageNbPages($nbPages) {
		return $nbPages . ' p.';
	}
	// q11
	echo affichageNbPages($livre['nbpages']);
	echo '<br />';
	// q12
	/**
	 * fonction calculant le prix après réduction
	 * @param float $prix prix brut
	 * @param int $reduc réduction en %
	 * @return float prix après réduction
	 */
	function prixReduit($prix, $reduc) {
		return $prix * (100-$reduc) /100;
	}
	// q13
	echo prixReduit($livre['prix'], $livre['reduction']);
	echo '<br />';
	// q14
	/**
	 * procédure affichant une ligne de x caractères 
	 * @param string $car caractère composant la ligne
	 * @param int $long nombre de caractères de la ligne
	 * @return void
	 */
	function afficheLigne($car, $long) {
		for($c=0; $c<$long; $c=$c+1) {
			echo $car;
		}
		echo '<br />';
	}
	// q15
	afficheLigne(':', 100);

	echo 'DEUXIEME LIVRE :';
	echo '<br />';
	// q16
	echo $livreObjet->getTitre();
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

?>
</section>
<footer>Copyright &copy; <a href=".">Exercices PHP</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
