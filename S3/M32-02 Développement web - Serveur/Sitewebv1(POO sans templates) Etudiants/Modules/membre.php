<?php
/**
* définition de la classe itineraire
*/
class Membre {  
		private $_idmembre;
        private $_nom;
        private $_prenom;
		private $_email;
		private $_password;
		private $_anneenaissance;
		private $_sexe;
		private $_voiture;
		private $_telportable;
        private $_admin;
		
        // contructeur
        public function __construct(array $donnees) {
		// initialisation d'un produit à partir d'un tableau de données
			if (isset($donnees['idmembre'])) { $this->_idmembre = $donnees['idmembre']; }
			if (isset($donnees['nom'])) { $this->_nom = $donnees['nom']; }
			if (isset($donnees['prenom'])) { $this->_prenom = $donnees['prenom']; }
			if (isset($donnees['email'])) { $this->_email = $donnees['email']; }
			if (isset($donnees['password'])) { $this->_password = $donnees['password'];}
            if (isset($donnees['anneenaissance'])) { $this->_anneenaissance = $donnees['anneenaissance'];}
            if (isset($donnees['sexe'])) { $this->_sexe = $donnees['sexe'];}
            if (isset($donnees['voiture'])) { $this->_voiture = $donnees['voiture'];}
            if (isset($donnees['telportable'])) { $this->_telportable = $donnees['telportable'];}
            if (isset($donnees['admin'])) { $this->_admin = $donnees['admin'];}
            
        }           
        // GETTERS //
		public function idMembre() { return $this->_idmembre;}
		public function nom() { return $this->_nom;}
        public function prenom() { return $this->_prenom;}
        public function email() { return $this->_email;}
		public function password() { return $this->_password;}
        public function anneeNaissance() { return $this->_anneenaissance;}
        public function sexe() { return $this->_sexe;}
        public function voiture() { return $this->_voiture;}
        public function telPortable() { return $this->_telportable;}
        public function admin() { return $this->_admin;}

		// SETTERS //
		public function setIdMembre($idmembre) { $this->_idmembre = $idmembre; }
        public function setNom($nom) { $this->_nom = $nom; }
        public function setPrenom($prenom) { $this->_prenom = $prenom; }
        public function setEmail($email) { $this->_email = $email; }
        public function setPassword($password) { $this->_password = $password; }
        public function setAnneeNaissance($anneenaissance) { $this->_anneenaissance = $anneenaissance; }
        public function setSexe($sexe) { $this->_sexe = $sexe; }
        public function setVoiture($voiture) { $this->_voiture = $voiture; }
        public function setTelPortable($telportable) { $this->_telportable = $telportable; }
        public function setAdmin($admin) { $this->_admin = $admin; }
}

