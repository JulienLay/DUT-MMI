<?php
// -- définition de la classe voiture
// c'est une classe abstraite, il ne sera donc pas possible
// d'instancier un objet de cette classe
abstract class voiture {
	// -- propriétés
	protected $marque;
	protected $type;
	// -- méthodes
	// setters
	public function set_marque($marque) { $this->marque = $marque; }
	public function set_type($type) { $this->type = $type; }
	// -- getters
	public function get_marque() { return $this->marque; }
	public function get_type() { return $this->type; }
};

// -- définition de la classe utilitaire qui hérite de la classe voiture
class utilitaire extends voiture {
	// -- propriétés
	// un véhicule utilitaire est une voiture avec en plus un volume utile
	private $volume;
	// -- méthodes
	// constructeur
	function __construct($marque,$type,$volume) { 
		$this->marque = $marque;
		$this->type = $type;
		$this->volume = $volume;
	}
	// setters
	public function set_volume($volume) { $this->volume = $volume; }
	// getters
	public function get_volume() { return $this->volume; }
    // affiche toutes les caractéristiques d'un véhicule
    public function affiche() {
        return "Marque : ".$this->get_marque()." Type : ".$this->get_type()." Nombre de place(s) : ".$this->get_volume();
    }
};

// -- définition de la classe tourisme qui hérite de la classe voiture
class tourisme extends voiture {
	// -- propriétés
	// un véhicule de tourisme est une voiture avec en plus un nombre de places
	private $nbplaces;
	// -- méthodes
	// constructeur
	function __construct($marque,$type,$nbplaces) { 
		$this->marque = $marque;
		$this->type = $type;
		$this->nbplaces = $nbplaces;
	}
	// setters
	public function set_nbplaces($nbplaces) { $this->nbplaces = $nbplaces; }
	// constructeurs
	public function get_nbplaces() { return $this->nbplaces; }

    public function affiche() {
        return "Marque : ".$this->get_marque()." Type : ".$this->get_type()." Nombre de place(s) : ".$this->get_nbplaces();
    }
};

$voiture1 = new tourisme("Citroen","Saxo",5);

// ou on fait 
// $voiture->set.marque("Citroen");
// $voiture->set.type("Saxo");
// $voiture->set.nbplaces(5);

// echo "Marque : ".$voiture1->get_marque()." Type : ".$voiture1->get_type()." Nombre de place(s) : ".$voiture1->get_nbplaces();
echo $voiture1->affiche();
echo "<br>";
echo "<br>";

$voiture2 = new utilitaire("Citroen","Berlingo","3 m3");
// echo "Marque : ".$voiture2->get_marque()." Type : ".$voiture2->get_type()." Volume : ".$voiture2->get_volume();
echo $voiture2->affiche();

?>