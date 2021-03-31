<?php
class Livre {
	//Attributs
	private $isbn;
	private $titre;
	private $resume;
	private $prix;
	private $reduction;
	private $parution;
	private $numedition;
	private $nbpages;
	private $disponibilite;
	private $langue;
	//Constructeur
	public function __construct() {
	  
		
	}
	//Accesseurs
  	public function getIsbn() {
      	return($this->isbn);
  	}
  	public function getReduction() {
    	return($this->reduction);
  	}
	public function getParution() {
		return(strtotime($this->parution));
	}
	public function getTitre() {
		return($this->titre);
  	}
	public function getResume() {
      	return($this->resume);
	}
  	public function getPrix() {
		return($this->prix);
	}
 	public function getNumEdition() {
		return($this->numedition);
  	}
	public function getDisponibilite() {
		return($this->disponibilite);
	}
	public function getLangue() {
		return($this->langue);
  	}
	public function getNbPages() {
		return($this->nbpages);
	}

}
?>