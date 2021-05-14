<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>Livres &amp; Compagnie</title>
</head>
<body>
	<!-- question 7 : intégration de la boucle : -->
	<style>table, td {border: 1px solid black;}</style>
	<table>
		<?php foreach($tabLivres as $livre) {?>
		<tr>
			<td><?php echo utf8_encode($livre['titre'])?></td>
			<td><?php echo utf8_encode($livre['resume'])?></td>
		</tr>
		<?php }?>
	</table>

<footer>Copyright &copy; <a href="index.html">Livres &amp; Compagnie</a> - Tous droits réservés MMI Castres</footer>
</body>
</html>
