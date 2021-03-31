<?php

/**
 * ajout shortcode [titre_livre]
 */
function titre_premier_livre() {
	include 'connexion.inc.php';
	return utf8_encode($livre['titre']);
}
add_shortcode('titre_livre', 'titre_premier_livre');

?>
