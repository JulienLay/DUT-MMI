<?php 

class Personne {
    // -- propriétés
    public $nom;
    public $prenom;
    public $ville;

	// -- méthodes
	// -- getters
	public function get_nom() { return $this->nom; }
	public function get_prenom() { return $this->prenom; }
    public function get_ville() { return $this->ville; }
}

class Apprenti extends Personne {

    public $formation;
    // constructeur
    function __construct($nom,$prenom,$ville, $formation) { 
		$this->nom = $nom;
		$this->prenom = $prenom;
		$this->ville = $ville;
        // les 3 lignes du dessus peuvent être remplacées par  parent::__construct($nom, $prenom,$ville)
        $this->formation = $formation;
	}
}

class Tuteur extends Personne {

    public $ecole;
    // constructeur
    function __construct($nom,$prenom,$ville, $ecole) { 
		$this->nom = $nom;
		$this->prenom = $prenom;
		$this->ville = $ville;
        $this->ecole = $ecole;
	}
}

class MaitreDeStage extends Personne {

    public $entreprise;
    // constructeur
    function __construct($nom,$prenom,$ville, $entreprise) { 
		$this->nom = $nom;
		$this->prenom = $prenom;
		$this->ville = $ville;
        $this->entreprise = $entreprise;
	}
}

$apprenti = new Apprenti("LAY", "Julien", "Castres", "DUT");
$tuteur = new Tuteur("PECATTE", "Jean-Marie", "Castres", "DUT MMI Castres");
$maitreDeStage = new MaitreDeStage("MORETTI", "Leon", "Mazamet", "AIRBUS");
echo "L'apprenti ".$apprenti->nom." ".$apprenti->prenom." (".$apprenti->ville.") en ".$apprenti->formation."<br>";
echo "a pour tuteur ".$tuteur->nom." ".$tuteur->prenom." (".$tuteur->ville.") de l'école ".$tuteur->ecole."<br>";
echo "et pour maitre de stage ".$maitreDeStage->nom." ".$maitreDeStage->prenom." (".$maitreDeStage->ville.") dans l'entreprise ".$maitreDeStage->entreprise."<br>";

?>