<!-- http://webmmi.iut-tlse3.fr/~lwj3346a/devwebserveur/calculatrice.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculatrice</title>
</head>
<body>
    <!-- Calculatrice V1 -->
    <form method="post" action="calculatrice.php">
    <fieldset>
    <legend>Calculatrice</legend>
    <label>Nombre 1 </label> <input type="text" name="n1" value="0" />
    <label>Nombre 2 </label> <input type="text" name="n2" value="0" />
    <select name="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="submit" value="calculer" /><br>
    </fieldset>
    </form>

    <?php 
        $n1 = $_POST["n1"];
        $n2 = $_POST["n2"];
        $operation = $_POST["operation"];
        if($operation == "+") {
            $calcul = $n1+$n2;
        } else if ($operation == "-") {
            $calcul = $n1-$n2;
        } else if ($operation == "*") {
            $calcul = $n1*$n2;
        } else if($operation == "/") {
            $calcul = $n1/$n2;
        }
        echo "Le résultat de ".$n1." ".$operation." ".$n2." est ".$calcul;
    ?>

    <!-- Calculatrice V2 -->

    <form method="post" action="calculatrice.php">
    <fieldset>
    <legend>Calculatrice V2</legend>
    <label>Nombre 1 </label> <input type="text" name="n1" value="0" />
    <label>Nombre 2 </label> <input type="text" name="n2" value="0" /><br>
    <input type="submit" value="+" name="bouton"/>
    <input type="submit" value="-" name="bouton"/>
    <input type="submit" value="*" name="bouton"/>
    <input type="submit" value="/" name="bouton"/>
    </fieldset>
    </form>

    <?php 
        $n1 = $_POST["n1"];
        $n2 = $_POST["n2"];
        $operation = $_POST["bouton"];
        if($operation == "+") {
            $calcul = $n1+$n2;
        } else if ($operation == "-") {
            $calcul = $n1-$n2;
        } else if ($operation == "*") {
            $calcul = $n1*$n2;
        } else if($operation == "/") {
            $calcul = $n1/$n2;
        }
        echo "Le résultat de ".$n1." ".$operation." ".$n2." est ".$calcul;
    ?>

    <!-- Calculatrice V3 -->

    <?php 
        $n1 = $_POST["n1"];
        $n2 = $_POST["n2"];
        $operation = $_POST["bouton"];
        if($operation == "+") {
            $calcul = $n1+$n2;
        } else if ($operation == "-") {
            $calcul = $n1-$n2;
        } else if ($operation == "*") {
            $calcul = $n1*$n2;
        } else if($operation == "/") {
            $calcul = $n1/$n2;
        }
    ?>

    <form method="post" action="calculatrice.php">
    <fieldset>
    <legend>Calculatrice V2</legend>
    <label>Nombre 1 </label> <input type="text" name="n1" value="0" />
    <label>Nombre 2 </label> <input type="text" name="n2" value="0" /><br>
    <input type="submit" value="+" name="bouton"/>
    <input type="submit" value="-" name="bouton"/>
    <input type="submit" value="*" name="bouton"/>
    <input type="submit" value="/" name="bouton"/><br>
    <label>Résultat </label> <input type="text" name="resultat" value="<?php echo $calcul;?>"/><br>
    </fieldset>
    </form>
</body>
</html>