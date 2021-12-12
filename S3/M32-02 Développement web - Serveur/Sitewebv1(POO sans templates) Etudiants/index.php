<?php
session_start(); // utilisation de session
include "connect.php";
include "Modules/itineraires.php";
include "Models/itinerairesManager.php";
include "Modules/membre.php";
include "Models/membreManager.php";
// si la variable de session n'existe pas, on la crée
if (!isset($_SESSION['acces'])) { 
    $_SESSION['acces']="non"; 
}
if (isset($_POST["connexion"])) // click sur le bouton connexion
{ // verif du login et mot de passe
   $membreManager = new MembreManager($bdd);
    if ($membreManager->verif_identification($_POST['login'], $_POST['passwd'])) // a modifier objet.verif_identification()
    { // acces autorisé : variable de session acces = oui
        $_SESSION['acces'] = "oui";
        $_SESSION['id'] = $membreManager->verif_identification($_POST['login'], $_POST['passwd'])->idMembre();
    }
    else
    { // acces non autorisé : variable de session acces = non
        $_SESSION['acces'] = "non";
        echo "login et/ou mot de passe incorrect";
    }
}
// deconnexion : click sur le bouton deconnexion
if (isset($_GET['action']) && $_GET['action'] == "logout") {
    $_SESSION['acces'] = "non";//accès non autorisé   
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>MMI Castres - Cours de PHP</title>
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"> 
    <link rel="stylesheet" href="design.css"> 
</head>

<body>
  <nav class="navbar navbar-toggleable-sm navbar-light bg-faded">
		<div class="navbar-header">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="?">
          Covoiturage
      </a>
		</div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <?php if ($_SESSION['acces'] == "non") { ?>
        <li class="nav-item"> <a class="nav-link" href="?action=liste">Liste</a> </li>
        <li class="nav-item"> <a class="nav-link" href="?action=recher">Rechercher</a> </li>
        <li class="nav-item"> <a class="nav-link" href="?action=login">Connexion</a> </li>
        <?php } else if ($_SESSION['acces'] == "oui") {
          ?>
        <li class="nav-item"> <a class="nav-link" href="?action=liste">Liste</a> </li>
        <li class="nav-item"> <a class="nav-link" href="?action=recher">Rechercher</a> </li>
        <li class="nav-item"> <a class="nav-link" href="?action=ajout">Ajout</a> </li>
        <li class="nav-item"> <a class="nav-link" href="?action=modif">Modifier</a> </li>
        <li class="nav-item"> <a class="nav-link" href="?action=suppr">Supprimer</a> </li>
        <li class="nav-item"> <a class="nav-link" href="?action=logout">Deconnexion</a> </li>
      </ul><?php }?>
    </div>
	</nav>
  <div class="container">
<?php

$itiManager = new ItineraireManager($bdd);

// liste des itinéraires dans un tableau HTML
if (isset($_GET["action"]) && $_GET["action"]=="liste")
{ $itineraires=$itiManager->getList();
  echo '<table class="table table-hover table-condensed"><thead>';
  echo '<tr><th>Id</th><th>Lieu de départ</th><th>Lieu d\'arrivee</th><th>Date départ</th><th>Heure départ</th></tr>';
  echo '</thead><tbody>';
  foreach($itineraires as $iti) {
    echo '<tr><td>'.$iti->idIti().'</td><td>'.$iti->lieuDepart().'</td><td>'.$iti->lieuArrivee().'</td><td>'.$iti->dateDepart().'</td><td>'.$iti->heureDepart().'</td></tr>';
  }
  echo '</tbody></table>';
}

// formulaire ajout d'un itineraire : saisie des caractéristiques à ajouter dans la BD
// version 0 : l'itineraire est rattaché automatiquement à un membre déjà présent dans la BD
if (isset($_GET["action"]) && $_GET["action"]=="ajout")
 {
?>
   <form method="post" action="index.php" class="well">
   <fieldsetclass="form-group">
    <legend>Nouvel itinéraire</legend>
    <div class="form-group row">
      <label for="lieudepart" class="col-sm-2 col-form-label col-form-label-sm">Départ</label>
      <div class="col-sm-10">
        <input  type="text" id="lieudepart" class="form-control form-control-sm" name="lieudepart" required placeholder="lieu de départ" />
      </div>
    </div>
    <div class="form-group row">
      <label for="lieuarrivee" class="col-sm-2 col-form-label col-form-label-sm">Arrivée</label>
      <div class="col-sm-10">
        <input type="text" id="lieuarrivee" class="form-control form-control-sm" name="lieuarrivee" required placeholder="lieu d'arrivée"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="datedepart" class="col-sm-2 col-form-label col-form-label-sm">Date</label>
      <div class="col-sm-10">
        <input  type="text" id="datedepart" class="form-control form-control-sm" name="datedepart" required placeholder="date de départ jj/mm/aaaa"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="heuredepart" class="col-sm-2 col-form-label col-form-label-sm">Heure</label>
      <div class="col-sm-10">
        <input type="time" id="heuredepart" class="form-control form-control-sm" name="heuredepart" required placeholder="heure de départ hh:mm"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="tarif" class="col-sm-2 col-form-label col-form-label-sm">Tarif</label>
      <div class="col-sm-10">
        <input type="number" min="0" id="tarif" class="form-control form-control-sm" name="tarif" required placeholder="tarif"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="nbplaces" class="col-sm-2 col-form-label col-form-label-sm">Nb de places</label>
      <div class="col-sm-10">
        <input type="number" min="0" id="nbplaces" class="form-control form-control-sm" name="nbplaces" required placeholder="nb de places"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="bagagesautorises" class="col-sm-2 col-form-label col-form-label-sm">Bagages autorisés</label>
      <div class="col-sm-10">
        <select id="bagagesautorises" class="form-control form-control-sm" name="bagagesautorises">
            <option value="1" selected="selected">Oui</option><option value="0">Non</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <label for="details" class="col-sm-2 col-form-label col-form-label-sm">Détails</label>
      <div class="col-sm-10">
        <textarea id="details" class="form-control form-control-sm" name="details" placeholder="détails de l'itinéraire"></textarea>
      </div>
    </div>
    <input  type="hidden" id="idmembre" name="idmembre" value="<?php echo $_SESSION['id'];?>"/>
	  <input type="submit" class="btn btn-primary" name="valider_ajout" value="Valider"/>
   </fieldset>
   </form>
<?php
 }
 
 
// ajout de l'itineraire dans la base : execution de la requete SQL
if (isset($_POST["valider_ajout"]))
{ // récupération des données du formulaire et création d'un nouvel itinéraire

  // $tableau["lieudepart"] = $_POST["lieudepart"];
  // $tableau["lieuarrivee"] = $_POST["lieuarrivee"];
  // $tableau["datedepart"] = $_POST["datedepart"];
  // $tableau["heuredepart"] = $_POST["heuredepart"];
  // $tableau["tarif"] = $_POST["tarif"];
  // $tableau["nbplaces"] = $_POST["nbplaces"];
  // $tableau["bagagesautorises"] = $_POST["bagagesautorises"];
  // $tableau["details"] = $_POST["details"];

  $nouvelItineraire = new Itineraire($_POST);
  // ajout dans la BD
  $ok = $itiManager->add($nouvelItineraire);
  // message d'état
  if ($ok) echo "Itinéraire ajouté" ;
  else echo "probleme lors de l'ajout";
}


// suppression d'un itineraire : choix de l'itineraire
if (isset($_GET["action"]) && $_GET["action"]=="suppr")
{ 
  $itineraires=$itiManager->getListMembre($_SESSION['id']);
  ?>

  <form method="post" action="index.php" class="well">
    <fieldsetclass="form-group">
    <legend>Supprimer un itinéraire</legend>
    <div class="form-group row">
      <label for="itineraire" class="col-sm-2 col-form-label col-form-label-sm">Itinéraire : </label>
      <div class="col-sm-10">
        <select id="itineraire" class="form-control form-control-sm" name="iditi">
    <?php
      foreach($itineraires as $iti) {
        echo '<option value="'.$iti->idIti().'" selected="selected">'.$iti->lieuDepart().'->'.$iti->lieuArrivee().'</option>';
      }
    ?>
        </select>
      </div>
    </div>
    <input  type="hidden" id="idmembre" name="idmembre" value="<?php echo $_SESSION['id'];?>"/>
	  <input type="submit" class="btn btn-primary" name="valider_supp" value="Supprimer"/>
    </fieldset>
  </form>

  <?php
}

// supression d'un itineraire dans la base
if (isset($_POST["valider_supp"]))
{ // récupération des données du formulaire 
  $itiASuppr = new Itineraire($_POST);
  // suppression dans la BD
  $ok = $itiManager->delete($itiASuppr);
  // message d'état
  if ($ok) echo "itineraire supprimé" ;
  else echo "probleme lors de la supression";
}

// modification d'un itineraire : choix de l'itineraire
if (isset($_GET["action"]) && $_GET["action"]=="modif")
{ 
  $itineraires=$itiManager->getListMembre($_SESSION['id']);
  ?>

  <form method="post" action="index.php" class="well">
    <fieldsetclass="form-group">
    <legend>Modifier un itinéraire</legend>
    <div class="form-group row">
      <label for="itineraire" class="col-sm-2 col-form-label col-form-label-sm">Itinéraire : </label>
      <div class="col-sm-10">
        <select id="itineraire" class="form-control form-control-sm" name="iditi">
    <?php
      foreach($itineraires as $iti) {
        echo '<option value="'.$iti->idIti().'" selected="selected">'.$iti->lieuDepart().'->'.$iti->lieuArrivee().'</option>';
      }
    ?>
        </select>
      </div>
    </div>
    <input  type="hidden" id="idmembre" name="idmembre" value="<?php echo $_SESSION['id'];?>"/>
	  <input type="submit" class="btn btn-primary" name="saisie_modif" value="Modifier"/>
    </fieldset>
  </form>

  <?php
}

// modification d'un itineraire : saisie des nouvelles valeurs
//  ==> version 0 : pas modif de l'iditi ni de l'idmembre
if (isset($_POST["saisie_modif"]))
{   $iti =  $itiManager->get($_POST["iditi"]);
  // echo($iti);
?>
  <form method="post" action="index.php" class="well">
   <fieldsetclass="form-group">
    <legend>Modification itinéraire</legend>
    <div class="form-group row">
      <label for="lieudepart" class="col-sm-2 col-form-label col-form-label-sm">Départ</label>
      <div class="col-sm-10">
        <input  type="text" id="lieudepart" class="form-control form-control-sm" name="lieudepart" required placeholder="lieu de départ" value="<?php echo $iti->lieuDepart(); ?>"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="lieuarrivee" class="col-sm-2 col-form-label col-form-label-sm">Arrivée</label>
      <div class="col-sm-10">
        <input type="text" id="lieuarrivee" class="form-control form-control-sm" name="lieuarrivee" required placeholder="lieu d'arrivée" value="<?php echo $iti->lieuArrivee(); ?>"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="datedepart" class="col-sm-2 col-form-label col-form-label-sm">Date</label>
      <div class="col-sm-10">
        <input  type="text" id="datedepart" class="form-control form-control-sm" name="datedepart" required placeholder="date de départ jj/mm/aaaa" value="<?php echo $iti->dateDepart(); ?>"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="heuredepart" class="col-sm-2 col-form-label col-form-label-sm">Heure</label>
      <div class="col-sm-10">
        <input type="time" id="heuredepart" class="form-control form-control-sm" name="heuredepart" required placeholder="heure de départ hh:mm" value="<?php echo $iti->heureDepart(); ?>" />
      </div>
    </div>
    <div class="form-group row">
      <label for="tarif" class="col-sm-2 col-form-label col-form-label-sm">Tarif</label>
      <div class="col-sm-10">
        <input type="number" min="0" id="tarif" class="form-control form-control-sm" name="tarif" required placeholder="tarif" value="<?php echo $iti->tarif(); ?>"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="nbplaces" class="col-sm-2 col-form-label col-form-label-sm">Nb de places</label>
      <div class="col-sm-10">
        <input type="number" min="0" id="nbplaces" class="form-control form-control-sm" name="nbplaces" required placeholder="nb de places" value="<?php echo $iti->nbPlaces(); ?>"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="bagagesautorises" class="col-sm-2 col-form-label col-form-label-sm">Bagages autorisés</label>
      <div class="col-sm-10">
        <select id="bagagesautorises" class="form-control form-control-sm" name="bagagesautorises">
            <option value="1" selected="selected">Oui</option><option value="0">Non</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <label for="details" class="col-sm-2 col-form-label col-form-label-sm">Détails</label>
      <div class="col-sm-10">
        <textarea id="details" class="form-control form-control-sm" name="details" placeholder="détails de l'itinéraire"><?php echo $iti->details(); ?></textarea>
      </div>
    </div>
    <input  type="hidden" id="iditi" name="iditi" value="<?php echo $iti->idIti();?>"/>
	  <input type="submit" class="btn btn-primary" name="valider_modif" value="Valider"/>
   </fieldset>
   </form>
<?php
}

//modification d'un itineraire : enregistrement dans la bd
if (isset($_POST["valider_modif"]))
{
  // récupération des données du formulaire 
  $itiAModif = new Itineraire($_POST);
  // modification dans la BD
  $ok = $itiManager->update($itiAModif);
  // message d'état
  if ($ok) echo "itineraire modifié" ;
  else echo "probleme lors de la modification";
}


// recherche d'itineraire : saisie des critres de recherche dans un formulaire
if (isset($_GET["action"]) && $_GET["action"]=="recher")
 {
?>
   <form id="recherche" method="post" action="index.php" class="well">
   <fieldset class="form-group"> <legend>Recherche d'itinéraires</legend>
    <div class="form-group row">
      <label for="lieudepart" class="col-sm-2 col-form-label col-form-label-sm">Départ</label>
      <div class="col-sm-10">
        <input type="text" id="lieudepart" name="lieudepart" class="form-control form-control-sm" placeholder="lieu de départ"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="lieuarrivee" class="col-sm-2 col-form-label col-form-label-sm">Arrivée</label>
      <div class="col-sm-10">
        <input type="text" id="lieuarrivee" name="lieuarrivee" class="form-control form-control-sm" placeholder="lieu d'arrivee"/>
      </div>
    </div>
    <div class="form-group row">
	    <label for="dateDepart" class="col-sm-2 col-form-label col-form-label-sm">Date</label>
      <div class="col-sm-10">
        <input type="text" id="datedepart" name="datedepart" class="form-control form-control-sm" placeholder="date de départ jj/mm/aaaa"/>
      </div>
    </div>
    <input class="btn btn-primary" type="submit" name="valider_recher" value="Valider"/>
   </fieldset>
   </form>
<?php
 }

// recherche des itineraires : construction de la requete SQL en fonction des critères de recherche et affichage du résultat dans un tableau HTML 
if (isset($_POST["valider_recher"]))
{ 
  // modification dans la BD
  $itineraires = $itiManager->search($_POST["lieudepart"], $_POST["lieuarrivee"], $_POST["datedepart"]);
  // message d'état
  if (count($itineraires)) {
    echo '<table class="table table-hover table-condensed"><thead>';
    echo '<tr><th>Lieu de départ</th><th>Lieu d\'arrivee</th><th>Date départ</th></tr>';
    echo '</thead><tbody>';
    foreach($itineraires as $iti) {
      echo '<tr><td>'.$iti->lieuDepart().'</td><td>'.$iti->lieuArrivee().'</td><td>'.$iti->dateDepart().'</td></tr>';
    }
    echo '</tbody></table>';
  } 
  else echo "itineraire introuvable";
}

if (isset($_GET["action"]) && $_GET["action"]=="login") {?>

<form id="login" method="post" action="index.php" class="well">
   <fieldset class="form-group"> <legend>Se connecter</legend>
    <div class="form-group row">
      <label for="login" class="col-sm-2 col-form-label col-form-label-sm">Login</label>
      <div class="col-sm-10">
        <input type="text" id="login" name="login" class="form-control form-control-sm"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="passwd" class="col-sm-2 col-form-label col-form-label-sm">Mot de passe</label>
      <div class="col-sm-10">
        <input type="password" id="passwd" name="passwd" class="form-control form-control-sm"/>
      </div>
    </div>
    <input class="btn btn-primary" type="submit" name="connexion" value="Connexion"/>
   </fieldset>
   </form>
<?php }?>
  </div>	
  <footer> Copyright &copy; <a href="index.php">MMI Castres</a> - Tous droits réservés</footer>
  <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
</body>
</html>