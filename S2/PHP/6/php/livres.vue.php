<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>Livres &amp; Compagnie</title>
</head>
<body>
	<?php

	// question 9 : parcours du tableau $tabLivres

	foreach($tabLivres as $livre) {
		echo $livre['titre'];
		echo " --- ";
		echo $livre['resume'];
		echo '<br />';
	}
	
	?>
<footer>Copyright &copy; <a href="index.html">Livres &amp; Compagnie</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
