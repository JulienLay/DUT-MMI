<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>Livres &amp; Compagnie</title>
</head>
<body>

	<!--	question 3 : réparage des données :
			question 5 : remplacement des données par données php : -->
	<h2>Titre : <?php echo utf8_encode($livre['titre']);?></h2>
	<p>Resume : <?php echo utf8_encode($livre['resume']);?></p>
	<ul>
	  <li>Prix : <?php echo $livre['prix'];?> €</li>
	  <li>Reduction : <?php echo $livre['reduction'];?></li>
	</ul>
	<p>Caractéristiques :</p>
	<ul>
	  <li>Edition : <?php echo $livre['langue'];?></li>
	  <li>Nb de pages : <?php echo $livre['nb_pages'];?> pages</li>
	  <li>ISBN : <?php echo $livre['isbn'];?></li>
	  <!-- question 6 : ajout de la mention de disponibilité : -->
		<li>Disponibilité : <?php if($livre['disponibilite'] == 0) {echo "plus disponible";} else {echo "en stock";}?></li>
	</ul>
	<img src="photos/<?php echo $livre['photo']?>"/>

<footer>Copyright &copy; <a href="index.html">Livres &amp; Compagnie</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
