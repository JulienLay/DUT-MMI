<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>Livres &amp; Compagnie</title>
</head>
<body>
	<header>
    <h1>Livres &amp; Compagnie</h1><h2>Thèmes</h2>
  </header>
  <section>
		<?php
		$tabThemes = array('Tous', 'Informatique', 'Web', 'Jeux', 'Multimédia', 'Graphisme');
		// transformation des lignes suivantes en boucle de parcours du tableau des thèmes :
		for($i=1; $i<count($tabThemes); $i=$i+1) {
			echo '<a href="afficher_livres_theme.ctrl.php?theme=', $i, '">', $tabThemes[$i], '</a><br />';
			/* correction de chaque lien vers un thème :
			echo '<a href="afficher_livres_theme.ctrl.php?theme=', 0, '">', 'Informatique', '</a><br />';
			echo '<a href="afficher_livres_theme.ctrl.php?theme=', 1, '">', 'Web', '</a><br />';
			echo '<a href="afficher_livres_theme.ctrl.php?theme=', 2, '">', 'Jeux', '</a><br />';
			echo '<a href="afficher_livres_theme.ctrl.php?theme=', 3, '">', 'Multimédia', '</a><br />';
			echo '<a href="afficher_livres_theme.ctrl.php?theme=', 4, '">', 'Graphisme', '</a><br />';
			*/
		}
		?>
	</section>
<footer>Copyright &copy; <a href="index.html">Livres &amp; Compagnie</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
