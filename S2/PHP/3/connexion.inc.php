<?php
include 'livre.class.php';
$bd = new PDO('mysql:host=127.0.0.1; dbname=barreau', 'sylvain.barreau', 'WebMMI');
$requete = 'SELECT * FROM livre;';
$requetePreparee = $bd->prepare($requete);
$requetePreparee->execute();
$livre = $requetePreparee->fetch(PDO::FETCH_ASSOC);
$requetePreparee->setFetchMode(PDO::FETCH_CLASS , 'Livre');
$livreObjet = $requetePreparee->fetch();
$requetePreparee->execute();
$tabLivres = $requetePreparee->fetchAll(PDO::FETCH_ASSOC);
$bd = null;
?>