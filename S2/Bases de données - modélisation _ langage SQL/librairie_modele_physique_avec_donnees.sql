DROP TABLE IF EXISTS classification;

DROP TABLE IF EXISTS ecriture;

DROP TABLE IF EXISTS theme;

DROP TABLE IF EXISTS lignepanier;

DROP TABLE IF EXISTS panier;

DROP TABLE IF EXISTS livre;

DROP TABLE IF EXISTS auteur;

DROP TABLE IF EXISTS adresse;

DROP TABLE IF EXISTS client;

DROP TABLE IF EXISTS editeur;

# -----------------------------------------------------------------------------
#       TABLE : auteur
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS auteur
 (
   id_auteur INTEGER NOT NULL AUTO_INCREMENT,
   prenom_auteur VARCHAR(32) NULL  ,
   nom_auteur VARCHAR(36) NOT NULL  
   , CONSTRAINT pk_table PRIMARY KEY (id_auteur) 
 ) 
 comment = "entite AUTEUR";

# -----------------------------------------------------------------------------
#       TABLE : livre
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS livre
 (
   isbn CHAR(13) NOT NULL  ,
   titre VARCHAR(50) NOT NULL  ,
   resume VARCHAR(100) NULL  ,
   prix NUMERIC(5,2) NOT NULL,
   reduction DECIMAL(5,4) NOT NULL  
      DEFAULT 0,
   parution DATE NULL  ,
   numedition SMALLINT NULL  
      DEFAULT 1,
   nbpages INTEGER NULL,
   disponibilite BOOL NULL  ,
   langue VARCHAR(20) NULL  ,
   photo VARCHAR(128) NULL  ,
   id_editeur INTEGER NULL,
   CONSTRAINT pk_livre PRIMARY KEY (isbn),
   CONSTRAINT chk_prix CHECK(prix > 0),
   CONSTRAINT chk_numedition CHECK(numedition >= 1),
   CONSTRAINT chk_nbpages CHECK(nbpages >= 5) 
 ) comment = "entité LIVRE";
 
# -----------------------------------------------------------------------------
#       TABLE : client
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS client
 (
   id_client INTEGER NOT NULL AUTO_INCREMENT,
   pseudo VARCHAR(20) NOT NULL  ,
   nom_client VARCHAR(36) NOT NULL  ,
   prenom_client VARCHAR(32) NOT NULL  ,
   email VARCHAR(50) NOT NULL  ,
   motdepasse VARCHAR(128) NOT NULL  
   ,
   CONSTRAINT pk_client PRIMARY KEY(id_client) 
 ) 
 comment = "entite CLIENT";

# -----------------------------------------------------------------------------
#       TABLE : adresse
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS adresse
 (
   id_client INTEGER NOT NULL  ,
   id_adresse INTEGER NOT NULL AUTO_INCREMENT,
   rue VARCHAR(32) NOT NULL  ,
   cp CHAR(5) NOT NULL  ,
   ville VARCHAR(32) NOT NULL  ,
   pays VARCHAR(30) NULL  
      DEFAULT "'France'"
   ,
   CONSTRAINT fk_adresse_client FOREIGN KEY(id_client) REFERENCES client(id_client),
   CONSTRAINT pk_adresse PRIMARY KEY(id_adresse) 
 )  
 comment = "entite ADRESSE";


# -----------------------------------------------------------------------------
#       TABLE : editeur
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS editeur
 (
   id_editeur INTEGER NOT NULL AUTO_INCREMENT,
   nom_editeur VARCHAR(32) NULL ,
   pays VARCHAR(32) NULL  
   ,
   CONSTRAINT pk_editeur PRIMARY KEY(id_editeur) 
 )  
 comment = "entite EDITEUR";

# -----------------------------------------------------------------------------
#       TABLE : theme
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS theme
 (
   id_theme INTEGER NOT NULL AUTO_INCREMENT,
   libelle_theme VARCHAR(20) NOT NULL  
   ,
   CONSTRAINT pk_theme PRIMARY KEY(id_theme) 
 )  
 comment = "entite THEME";

# -----------------------------------------------------------------------------
#       TABLE : classification
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS classification
 (
   isbn CHAR(13) NOT NULL  ,
   id_theme INTEGER NOT NULL  
   ,
   CONSTRAINT pk_classification PRIMARY KEY(isbn,id_theme) 
 )  
 comment = "relation entre LIVRE et THEME";

# -----------------------------------------------------------------------------
#       TABLE : ecriture
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ecriture
 (
   isbn CHAR(13) NOT NULL  ,
   id_auteur INTEGER NOT NULL  
   ,
   CONSTRAINT pk_ecriture PRIMARY KEY(isbn,id_auteur) 
 )  
 comment = "relation ECRIRE";


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE livre 
  ADD CONSTRAINT fk_livre_editeur FOREIGN KEY(id_editeur)
      REFERENCES editeur(id_editeur);

ALTER TABLE classification 
  ADD CONSTRAINT fk_classification_livre FOREIGN KEY(isbn)
      REFERENCES livre(isbn);

ALTER TABLE classification 
  ADD CONSTRAINT fk_classification_theme FOREIGN KEY(id_theme)
      REFERENCES theme(id_theme);

ALTER TABLE ecriture 
  ADD CONSTRAINT fk_ecriture_livre FOREIGN KEY(isbn)
      REFERENCES livre(isbn);

ALTER TABLE ecriture 
  ADD CONSTRAINT fk_ecriture_auteur FOREIGN KEY(id_auteur)
      REFERENCES auteur(id_auteur);

INSERT INTO theme(libelle_theme) VALUES ('Informatique'); -- 1
INSERT INTO theme(libelle_theme) VALUES ('Web'); -- 2
INSERT INTO theme(libelle_theme) VALUES ('Jeux'); -- 3
INSERT INTO theme(libelle_theme) VALUES ('Droit'); -- 4

INSERT INTO editeur(nom_editeur, pays) VALUES ('O\'Reilly', 'Etats-Unis'); -- 1
INSERT INTO editeur(nom_editeur, pays) VALUES ('Eyrolles', 'France'); -- 2
INSERT INTO editeur(nom_editeur, pays) VALUES ('Hachette', 'France'); -- 3

INSERT INTO auteur(prenom_auteur, nom_auteur) VALUES ('Russ', 'Miles'); -- 1
INSERT INTO auteur(prenom_auteur, nom_auteur) VALUES ('Kim', 'Hamilton'); -- 2
INSERT INTO auteur(prenom_auteur, nom_auteur) VALUES ('Scott', 'Kelby'); -- 3
INSERT INTO auteur(prenom_auteur, nom_auteur) VALUES ('Véronique', 'Messager'); -- 4
INSERT INTO auteur(prenom_auteur, nom_auteur) VALUES ('Thomas', 'Durand'); -- 5
INSERT INTO auteur(prenom_auteur, nom_auteur) VALUES ('Thomas', 'Durand'); -- 6
INSERT INTO auteur(prenom_auteur, nom_auteur) VALUES ('Raphaël', 'Goetter'); -- 7

INSERT INTO livre VALUES (
'2-84177-421-X', 'Introduction à UML 2', 'Une introduction pragmatique à UML', 40, 0.05, '2006-08-01', 1, 284, TRUE, 'Francais', 'uml2.jpg', 1);
INSERT INTO ecriture VALUES (
'2-84177-421-X', 1);
INSERT INTO ecriture VALUES (
'2-84177-421-X', 2);
INSERT INTO classification VALUES (
'2-84177-421-X', 1);
INSERT INTO classification VALUES (
'2-84177-421-X', 2);

INSERT INTO livre VALUES (
'2-7440-9284-3', 'Adobe Photoshop CS4', 'Astuces et secrets inédits', 35, 0.05, '2009-09-03', 1, 330, TRUE, 'Francais', 'photoshop.jpg', 1);
INSERT INTO ecriture VALUES (
'2-7440-9284-3', 3);
INSERT INTO classification VALUES (
'2-7440-9284-3', 1);
INSERT INTO classification VALUES (
'2-7440-9284-3', 2);

INSERT INTO livre VALUES (
'2-212-12518-6', 'Gestion de projet', 'Vers les méthodes agiles', 29.9, 0.05, '2009-09-03', 2, 272, TRUE, 'Francais', NULL, 2);
INSERT INTO ecriture VALUES (
'2-212-12518-6', 4);
INSERT INTO classification VALUES (
'2-212-12518-6', 1);

INSERT INTO livre VALUES (
'2-212-54345-X', 'Réussir un projet Intranet', NULL, 28, 0.05, '2009-04-02', 1, 220, FALSE, 'Francais', NULL, 2);
INSERT INTO ecriture VALUES (
'2-212-54345-X', 5);
INSERT INTO ecriture VALUES (
'2-212-54345-X', 3);
INSERT INTO classification VALUES (
'2-212-54345-X', 1);

INSERT INTO livre VALUES (
'981-245-498-5', 'Graphic Design 2', NULL, 19, 0, '2009-07-17', 4, 670, FALSE, 'Anglais', NULL, 3);
INSERT INTO ecriture VALUES (
'981-245-498-5', 3);
INSERT INTO classification VALUES (
'981-245-498-5', 1);

INSERT INTO livre VALUES (
'981-245-498-6', 'Web Sites 2', NULL, 19, 0.1, '2008-07-17', 1, 70, FALSE, 'Anglais', NULL, 3);
INSERT INTO ecriture VALUES (
'981-245-498-6', 1);
INSERT INTO classification VALUES (
'981-245-498-6', 1);
INSERT INTO classification VALUES (
'981-245-498-6', 2);

INSERT INTO livre VALUES (
'2-35933-021-7', 'Sudoku', '270 grilles', 4.9, 0.05, '2009-10-01', 1, 290, FALSE, 'Francais', 'sudoku.jpg', 3);
INSERT INTO ecriture VALUES (
'2-35933-021-7', 6);
INSERT INTO classification VALUES (
'2-35933-021-7', 3);

INSERT INTO livre VALUES (
'2-8788-0699-9', 'Les clauses du contrat de travail', '', 25, 0.05, '2009-09-28', 2, 190, TRUE, 'Francais', NULL, 1);
INSERT INTO ecriture VALUES (
'2-8788-0699-9', 4);
INSERT INTO classification VALUES (
'2-8788-0699-9', 4);

INSERT INTO livre VALUES (
'2-212-54481-2', 'Web Analytics', 'Mesurer le succès et maximiser les profits de votre site web', 28, 0.05, '2009-10-01', 1, 254, TRUE, 'Francais', NULL, 1);
INSERT INTO ecriture VALUES (
'2-212-54481-2', 1);
INSERT INTO ecriture VALUES (
'2-212-54481-2', 2);
INSERT INTO classification VALUES (
'2-212-54481-2', 2);

INSERT INTO livre VALUES (
'2-212-12541-0', 'Mémento XHTML', NULL, 5, 0, '2009-10-01', 2, 14, TRUE, 'Francais', 'xhtml.jpg', 2);
INSERT INTO ecriture VALUES (
'2-212-12541-0', 7);
INSERT INTO classification VALUES (
'2-212-12541-0', 1);
INSERT INTO classification VALUES (
'2-212-12541-0', 2);

INSERT INTO livre VALUES (
'2-212-12541-1', 'Mémento CSS', '', 5, 0.05, '2009-07-02', 2, 14, TRUE, 'Francais', 'css.jpg', NULL);
INSERT INTO ecriture VALUES (
'2-212-12541-1', 7);
INSERT INTO classification VALUES (
'2-212-12541-1', 1);
INSERT INTO classification VALUES (
'2-212-12541-1', 2);

INSERT INTO client(pseudo, nom_client, prenom_client, email, motdepasse) VALUES (
'Umlguru', 'Roques', 'Pascal', 'pascal.roques@valtech-training.fr', SHA1('mdp')) ;
INSERT INTO adresse(rue, cp, ville, pays, id_client) VALUES (
'24 Rue de la Digue', '31170', 'Tournefeuille', 'France', 1) ;
INSERT INTO adresse(rue, cp, ville, pays, id_client) VALUES (
'5 av. Marcel Dassault', '31500', 'Toulouse', 'France', 1) ;