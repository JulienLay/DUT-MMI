<?php


/**
* Définition d'une classe permettant de gérer les itinéraires 
*   en relation avec la base de données	
*/
class ItineraireManager
    {
        private $_db; // Instance de PDO - objet de connexion au SGBD
        
		/**
		* Constructeur = initialisation de la connexion vers le SGBD
		*/
        public function __construct($db) {
            $this->_db=$db;
        }
        // 
		/**
		* ajout d'un itineraire dans la BD
		* @param itineraire à ajouter
		* @return int true si l'ajout a bien eu lieu, false sinon
		*/
        public function add(Itineraire $iti) {
			// calcul d'un nouveau code d'itineraire non déja utilisé = Maximum + 1
			$stmt = $this->_db->prepare("SELECT MAX(IDITI) AS MAXIMUM FROM itineraire");
			$stmt->execute();
			$iti->setIdIti($stmt->fetchColumn()+1);
			
			// requete d'ajout dans la BD
			$req = "INSERT INTO itineraire (iditi, idmembre, lieudepart, lieuarrivee, heuredepart, datedepart, tarif, nbplaces, bagagesautorises, details) VALUES (?,?,?,?,?,?,?,?,?,?)";
			$stmt = $this->_db->prepare($req);
			$res = $stmt->execute(array($iti->idIti(), $iti->idMembre(), $iti->lieuDepart(), $iti->lieuArrivee(), $iti->heureDepart(), dateChgmtFormat($iti->dateDepart()), $iti->tarif(), $iti->nbPlaces(), $iti->bagagesAutorises(), $iti->details()));
			// pour debuger les requêtes SQL
			$errorInfo = $stmt->errorInfo();
			if($errorInfo[0] != 0) {
				print_r($errorInfo);
			}
			return $res;
        }
        
		/**
		* nombre d'itinéraires dans la base de données
		* @return int le nb d'itinéraires
		*/
        public function count() {
			$stmt = $this->_db->prepare('SELECT COUNT(*) FROM itineraire');
			$stmt->execute();
			return $stmt->fetchColumn();
        }
        
		/**
		* suppression d'un itineraire dans la base de données
		* @param Itineraire 
		* @return boolean true si suppression, false sinon
		*/
        public function delete(Itineraire $iti) {

			// requete de suppression dans la BD
			$req = "DELETE FROM itineraire WHERE iditi = ?";
			$stmt = $this->_db->prepare($req);
			$res = $stmt->execute(array($iti->idIti()));
			
			// pour debuger les requêtes SQL
			$errorInfo = $stmt->errorInfo();
			if($errorInfo[0] != 0) {
				print_r($errorInfo);
			}
			return $res;
        }
		
		/**
		* Recherche dans la BD d'un itineraire à partir de son id
		* @param int $iditi 
		* @return Itineraire 
		*/
		public function get($iditi) {	
			$req = "SELECT iditi, lieudepart, lieuarrivee, heuredepart, date_format(datedepart,'%d/%c/%Y') as datedepart,"
			. "tarif, nbplaces, bagagesautorises, details FROM itineraire WHERE iditi = ?";
			$stmt = $this->_db->prepare($req);
			$res = $stmt->execute(array($iditi));

			$donnees = $stmt->fetch();
			$nouvelIti = new Itineraire($donnees);

			// pour debuguer les requêtes SQL
			$errorInfo = $stmt->errorInfo();
			if ($errorInfo[0] != 0) {
				print_r($errorInfo);
			}
			
			return $nouvelIti;
		}		
		
		/**
		* retourne l'ensemble des itinéraires présents dans la BD 
		* @return Itineraire[]
		*/
        public function getList() {
            $itis = array();
			$req = "SELECT iditi, lieudepart, lieuarrivee, heuredepart, date_format(datedepart,'%d/%c/%Y') as datedepart,"
			. "tarif, nbplaces, bagagesautorises, details FROM itineraire";
			$stmt = $this->_db->prepare($req);
			$stmt->execute();
			// pour debuguer les requêtes SQL
			$errorInfo = $stmt->errorInfo();
			if ($errorInfo[0] != 0) {
				print_r($errorInfo);
			}
			// récup des données
            while ($donnees = $stmt->fetch())
            {
                $itis[] = new Itineraire($donnees);
            }
            return $itis;
        }
		/**
		* retourne l'ensemble des itinéraires présents dans la BD pour un membre
		* @param int idmembre
		* @return Itineraire[]
		*/
        public function getListMembre($idmembre) {
            $itis = array();
			$req = "SELECT iditi, lieudepart, lieuarrivee, heuredepart, date_format(datedepart,'%d/%c/%Y') as datedepart,"
			. "tarif, nbplaces, bagagesautorises, details FROM itineraire WHERE idmembre=?";
			$stmt = $this->_db->prepare($req);
			$stmt->execute(array($idmembre));
			// pour debuguer les requêtes SQL
			$errorInfo = $stmt->errorInfo();
			if ($errorInfo[0] != 0) {
				print_r($errorInfo);
			}
			// recup des données
            while ($donnees = $stmt->fetch())
            {
                $itis[] = new Itineraire($donnees);
            }
            return $itis;
        }
		/**
		* méthode de recherche d'itinéraires dans la BD à partir des critères passés en paramètre
		* @param string $lieudepart
		* @param string $lieudepart
		* @param string $datedepart
		* @return Itineraire[]
		*/
		public function search($lieudepart, $lieuarrivee, $datedepart)
		{
			$req = "SELECT iditi, lieudepart, lieuarrivee, heuredepart, date_format(datedepart,'%d/%c/%Y') as datedepart, tarif, nbplaces, bagagesautorises, details FROM itineraire";
			$cond = '';

			if ($lieudepart <>"")
			{ 	$cond = $cond." lieudepart like '%".$lieudepart."%'" ;
			}

			if ($lieuarrivee <>"")
			{ 	if ($cond<>"") $cond .= " AND ";
				$cond = $cond." lieuarrivee like '%".$lieuarrivee."%'" ;
			}

			if ($datedepart <>"")
			{ 	if ($cond<>"") $cond .= " AND ";
				$cond = $cond." datedepart = '".dateChgmtFormat($datedepart)."'" ;
			}

			if ($cond <>"")
			{ 	$req .= " WHERE " . $cond;
			}
			// execution de la requete				
			$stmt = $this->_db->prepare($req);
			$stmt->execute();
			// pour debuguer les requêtes SQL
			$errorInfo = $stmt->errorInfo();
			if ($errorInfo[0] != 0) {
				print_r($errorInfo);
			}
			$itineraires = array();
			while ($donnees = $stmt->fetch())
            {
                $itineraires[] = new Itineraire($donnees);
            }
            return $itineraires;
		}
       
		/**
		* modification d'un itineraire dans la BD
		* @param Itineraire
		* @return boolean 
		*/
        public function update(Itineraire $iti)
        {
			// requete de modification dans la BD
			$req = "UPDATE itineraire SET lieudepart = ?, lieuarrivee = ?, heuredepart = ?, datedepart = ?, tarif = ?, nbplaces = ?, bagagesautorises = ?, details = ? WHERE iditi = ?";
			$stmt = $this->_db->prepare($req);
			$res = $stmt->execute(array($iti->lieuDepart(), $iti->lieuArrivee(), $iti->heureDepart(), dateChgmtFormat($iti->dateDepart()), $iti->tarif(), $iti->nbPlaces(), $iti->bagagesAutorises(), $iti->details(), $iti->idIti()));
			
			// pour debuger les requêtes SQL
			$errorInfo = $stmt->errorInfo();
			if($errorInfo[0] != 0) {
				print_r($errorInfo);
			}
			return $res;
        }
    }

// fontion de changement de format d'une date
// tranformation de la date au format j/m/a au format a/m/j
function dateChgmtFormat($date) {
//echo "date:".$date;
		list($j,$m,$a) = explode("/",$date);
		return "$a-$m-$j";
}
?>