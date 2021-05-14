<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>Livres &amp; Compagnie</title>
</head>
<body>
<?php
		echo "Titre du livre : ";
		echo utf8_encode($livre['titre']);
		echo '<br />';
		// question 6 : affichage d'autres colonnes du livre
		
		echo "titre : ";
		echo $livre['isbn'];
		echo '<br />';
		echo "resume : ";
		echo $livre['resume'];
		echo '<br />';
		echo "prix : ";
		echo $livre['prix'];
		echo '<br />';
		echo "preduction : ";
		echo $livre['reduction'];
		echo '<br />';
		
	?>
<footer>Copyright &copy; <a href="index.html">Livres &amp; Compagnie</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
