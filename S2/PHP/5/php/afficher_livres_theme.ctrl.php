<?php
/* question 10 : récupération de l'id du thème depuis l'URL : */
$idTheme = filter_input(INPUT_GET, 'theme', FILTER_SANITIZE_URL);
echo $idTheme, ' : le thème de cet id a été cliqué';
?>
