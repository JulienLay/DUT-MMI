<?php 

class MembreManager 
    {
        private $_db; // Instance de PDO - objet de connexion au SGBD
            
            /**
            * Constructeur = initialisation de la connexion vers le SGBD
            */
            public function __construct($db) {
                $this->_db=$db;
            }
            
            /**
            * verification de l'identité d'un membre (Login/Password)
            * @param string $login
            * @param string $password
            * @return membre si authentification ok, false sinon
            */
            public function verif_identification($login, $password) {
                $req = "SELECT idmembre, nom, prenom FROM membre WHERE email=? AND password=?";
                $stmt = $this->_db->prepare($req);
                $res = $stmt->execute(array($login, $password));

                if ($data=$stmt->fetch()) {
                    $membre = new Membre($data);
                    return $membre;
                }                
                else return false;
            }
    }

?>