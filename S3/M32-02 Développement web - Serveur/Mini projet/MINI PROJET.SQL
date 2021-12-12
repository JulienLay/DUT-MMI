
# -----------------------------------------------------------------------------
#       TABLE : UTILISATEUR
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS UTILISATEUR
 (
   ID_UTI CHAR(32) NOT NULL  ,
   NOM CHAR(32) NULL  ,
   PRENOM CHAR(32) NULL  ,
   DATEADHESION DATE NULL  ,
   MAIL CHAR(32) NULL  ,
   MOTDEPASSE CHAR(32) NULL  ,
   ADMINISTRATEUR BOOL NULL  
   , PRIMARY KEY (ID_UTI) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : JEU
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS JEU
 (
   ID_JEU INTEGER(2) NOT NULL  ,
   ID_UTI CHAR(32) NOT NULL  ,
   NOM_POSSEDE CHAR(64) NOT NULL  ,
   NOM CHAR(32) NULL  ,
   LOGO LONGBLOB NULL  ,
   NOMBREJOUEURS INTEGER(4) NULL  ,
   TEMPSMOYEN TIME NULL  ,
   REGLE CHAR(255) NULL  ,
   MATERIEL CHAR(100) NULL  
   , PRIMARY KEY (ID_JEU) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE JEU
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_JEU_UTILISATEUR
     ON JEU (ID_UTI ASC);

CREATE  INDEX I_FK_JEU_CATEGORIE
     ON JEU (NOM_POSSEDE ASC);

# -----------------------------------------------------------------------------
#       TABLE : CATEGORIE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CATEGORIE
 (
   NOM CHAR(64) NOT NULL  
   , PRIMARY KEY (NOM) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : EVALUER
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS EVALUER
 (
   ID_JEU INTEGER(2) NOT NULL  ,
   ID_UTI CHAR(32) NOT NULL  ,
   NOTE INTEGER(2) NULL  ,
   COMMENTAIRE CHAR(255) NULL  ,
   HEUREEVALUATION TIME NULL  ,
   DATEEVALUATION DATE NULL  
   , PRIMARY KEY (ID_JEU,ID_UTI) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE EVALUER
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_EVALUER_JEU
     ON EVALUER (ID_JEU ASC);

CREATE  INDEX I_FK_EVALUER_UTILISATEUR
     ON EVALUER (ID_UTI ASC);


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE JEU 
  ADD FOREIGN KEY FK_JEU_UTILISATEUR (ID_UTI)
      REFERENCES UTILISATEUR (ID_UTI) ;


ALTER TABLE JEU 
  ADD FOREIGN KEY FK_JEU_CATEGORIE (NOM_POSSEDE)
      REFERENCES CATEGORIE (NOM) ;


ALTER TABLE EVALUER 
  ADD FOREIGN KEY FK_EVALUER_JEU (ID_JEU)
      REFERENCES JEU (ID_JEU) ;


ALTER TABLE EVALUER 
  ADD FOREIGN KEY FK_EVALUER_UTILISATEUR (ID_UTI)
      REFERENCES UTILISATEUR (ID_UTI) ;

