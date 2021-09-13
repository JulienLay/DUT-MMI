<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableaux en HTML5</title>
</head>
<body>
    <?php 
    //exo 1 
    $tab = array(nom=>"Dupont", prenom=>"Jean", age=> 25, ville => "Toulouse");
    echo "<table border='1'>";
    // ligne d'entête 
    echo "<tr>";
    foreach($tab as $key => $val) {
        echo "<td>".$key."</td>";
    }
    echo "</tr>";
    // ligne de valeurs
    echo "<tr>";
    foreach($tab as $val) {
        echo "<td>".$val."</td>";
    }
    echo "</tr>";
    echo "</table>";

    
    
    echo "<br>";


    //exo 2

    $personnes = array(
                        array(nom=>"Dupont", prenom=>"Jean", age=> 25, ville => "Toulouse"),
                        array(nom=>"Leroi", prenom=>"Paul", age=> 32, ville => "Pau"),
                        array(nom=>"Dupont", prenom=>"Marcel", age=> 36, ville => "Auch"),
                        array(nom=>"Mechin", prenom=>"Pierre", age=> 70, ville => "Castres")
                    );
    echo "<table border='1'>";
    // ligne d'entête 
    echo "<tr>";
    foreach($personnes[0] as $key => $val) {
        echo "<td>".$key."</td>";
    }
    echo "</tr>";
    
    // ligne de valeurs
    echo "<tr>";
    foreach($personnes as $personne) {
        echo "<tr>";
        foreach ($personne as $key => $val) {
            echo "<td>".$val."</td>";
        }
        echo "</tr>";
    }
    echo "</tr>";
    echo "</table>";
    ?>
    
</body>
</html>