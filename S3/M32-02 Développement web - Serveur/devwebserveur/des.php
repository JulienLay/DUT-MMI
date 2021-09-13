<?php
    $de1 = rand(1,6);
    $de2 = rand(1,6);

    echo "Valeur du dé 1 : ".$de1."<br>";
    echo "Valeur du dé 2 : ".$de2."<br>";
    
    if($de1 == $de2) {
        echo "Gagné";
    } else {
        echo "Perdu";
    }
?>