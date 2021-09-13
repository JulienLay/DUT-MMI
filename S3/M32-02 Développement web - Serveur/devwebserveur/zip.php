<!-- http://webmmi.iut-tlse3.fr/~lwj3346a/devwebserveur/zip.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZIP</title>
</head>
<body>

<?php
    // recupération du fichier photo
    if ($_FILES["photo"]["error"]==UPLOAD_ERR_OK) { // verif si pas d'erreur
    // verifier le type de fichier

    // déplacer le fichier temporaire sur un repertoire du serveur web
    $uploaddir = "./"; // chemin du dossier où ranger les fichiers
    $uploadfile = $uploaddir . basename($_FILES["photo"]["name"]);
    // on reprend le nom initial du fichier
    // on déplace le fichier du dossier temporaire du serveur web vers le dossier approprié du site web et on renomme le fichier
    if (!move_uploaded_file($_FILES["photo"]["tmp_name"], $uploadfile)) {
    echo "pb lors du telechargement";
    }
    else { // affichage de la photo
    echo '<IMG source=" " />';
    }} 

    // $_FILES['']['size'] -> 1Mo max
    // $_FILES['']['type'] -> que du ZIP
 ?>

    <form enctype="multipart/form-data" action="zip.php" method="post">
      <input type="hidden" name="MAX_FILE_SIZE" value="100000" />
      Transfère le fichier <input type="file" name="monfichier" />
      <input type="submit" />
    </form>

</body>
</html>