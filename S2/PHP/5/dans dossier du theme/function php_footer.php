<?php

/**
 * ajout fonction php_footer à l'affichage du footer
 */
function php_footer() {
	$tabThemes = array('Informatique', 'Web', 'Jeux', 'Multimédia', 'Graphisme');
	foreach($tabThemes as $theme) {
		echo $theme,'-';
	}
}

?>
