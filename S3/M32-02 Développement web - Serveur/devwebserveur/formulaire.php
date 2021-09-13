<!-- http://webmmi.iut-tlse3.fr/~lwj3346a/devwebserveur/formulaire.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
</head>
<body>
    <?php 
    // classe formulaire
    class Formulaire {
        private $chaine;

        function __construct() {
            $this->chaine = "";
        }

        // ligne 1
        public function debut_form($methode, $action) {
            $this->chaine .= '<form method="'.$methode.'" action="'.$action.'">';
        }

        // ligne 2
        public function zone_texte($label, $name) {
            $this->chaine .= "<label>".$label.'</label> <input type="text" name="'.$name.'"/>'; // .= correspond à concatener $this->chaine avec le reste après le .=
        }

        // ligne 3
        public function fin_form() {
            $this->chaine .= "</form>";
        }

        public function bouton_radio($label, $name, $element) {
            $this->chaine .= '<input type="'.$label.'" name="'.$name.'"><label>'.$element.'</label><br>';
        }

        public function bouton_submit($label, $name, $value) {
            $this->chaine .= '<input type="'.$label.'" name="'.$name.'" value="'.$value.'"><br>';
        }

        public function affiche() {
            echo $this->chaine;
        }
        
    }

    // Ce qu'il faut exécuter
    $f = new Formulaire();
    $f->debut_form("post","formulaire.php");
    $f->zone_texte("Nom : ", "nom");
    $f->fin_form();
    $f->bouton_radio("radio", "nom", "test bouton");
    $f->bouton_submit("submit", "nom", "Envoyer le formulaire");
    $f->affiche();

    ?>


    <!-- ce qu'il faut que ça donne en html : -->
    <!-- 
    <form method="post" action="formulaire.php"> // ligne 1
    <label>Nom : </label> <input type="text" name="" value="" /> // ligne 2
    </form> // ligne 3

    // bouton radio
    <input type="radio" name="">

    // bouton submit
    <input type="submit" name = "">
     -->

    
</body>
</html>