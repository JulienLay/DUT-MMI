<!-- http://webmmi.iut-tlse3.fr/~lwj3346a/devwebserveur/tva.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TVA</title>
</head>
<body>
    <?php
    // récupérer le nom saisie (zone de texte)
    $tauxtva = $_POST["tauxtva"];
    $ht = $_POST["ht"];
    $tva = $ht/$tauxtva; 
    $ttc = $ht + $tva;
    ?>

    <form method="post" action="tva.php">
    <fieldset>
    <legend>Calcul</legend>
    <label>HT </label> <input type="text" name="ht" value="<?php echo $tauxtva;?>" /><br>
    <label>Taux TVA </label> <input type="text" name="tauxtva" value="<?php echo $ht;?>" /><br>
    <input type="submit" value="calculer" /><br>
    <label>TVA </label> <input type="text" name="tva" value="<?php echo $tva;?>"/><br>
    <label>Prix TTC </label> <input type="text" name="ttc" value="<?php echo $ttc;?>" /><br>
    </fieldset>
    </form>

    
</body>
</html>