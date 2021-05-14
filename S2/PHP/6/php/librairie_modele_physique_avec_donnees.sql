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
   id INTEGER NOT NULL AUTO_INCREMENT,
   prenom VARCHAR(32) NULL  ,
   nom VARCHAR(36) NOT NULL  
   , CONSTRAINT pk_table PRIMARY KEY(id) 
 ) 
 comment = "entité AUTEUR";

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
   num_edition SMALLINT NULL  
      DEFAULT 1,
   nb_pages INTEGER NULL,
   disponibilite BOOL NULL  ,
   langue VARCHAR(20) NULL  ,
   photo VARCHAR(128) NULL  ,
   editeur_id INTEGER NULL,
   CONSTRAINT pk_livre PRIMARY KEY(isbn),
   CONSTRAINT chk_prix CHECK(prix > 0),
   CONSTRAINT chk_num_edition CHECK(num_edition >= 1),
   CONSTRAINT chk_nb_pages CHECK(nb_pages >= 5) 
 ) comment = "entité LIVRE";
 
# -----------------------------------------------------------------------------
#       TABLE : client
# -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS client
 (
   id INTEGER NOT NULL AUTO_INCREMENT,
   pseudo VARCHAR(20) NOT NULL  ,
   nom VARCHAR(36) NOT NULL  ,
   prenom VARCHAR(32) NOT NULL  ,
   mail VARCHAR(50) NOT NULL  ,
   mot_de_passe VARCHAR(128) NOT NULL,
   pro BOOLEAN NULL,
   nb_livres_lus INTEGER NULL,
   CONSTRAINT pk_client PRIMARY KEY(id) 
 ) 
 comment = "entité CLIENT";

# -----------------------------------------------------------------------------
#       TABLE : adresse
# -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS adresse
 (
   client_id INTEGER NOT NULL  ,
   id INTEGER NOT NULL,
   rue VARCHAR(32) NOT NULL  ,
   cp CHAR(5) NOT NULL  ,
   ville VARCHAR(32) NOT NULL  ,
   pays VARCHAR(30) NULL  
      DEFAULT "'France'"
   ,
  CONSTRAINT pk_adresse PRIMARY KEY(client_id, id),
  CONSTRAINT fk_adresse_client FOREIGN KEY(client_id) REFERENCES client(id)
 )  
 comment = "entite ADRESSE";


# -----------------------------------------------------------------------------
#       TABLE : editeur
# -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS editeur
 (
   id INTEGER NOT NULL AUTO_INCREMENT,
   nom VARCHAR(32) NULL ,
   pays VARCHAR(32) NULL  
   ,
   CONSTRAINT pk PRIMARY KEY(id) 
 )  
 comment = "entite EDITEUR";

# -----------------------------------------------------------------------------
#       TABLE : theme
# -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS theme
 (
   id INTEGER NOT NULL AUTO_INCREMENT,
   libelle VARCHAR(20) NOT NULL  
   ,
   CONSTRAINT pk_theme PRIMARY KEY(id) 
 )  
 comment = "entite THEME";

# -----------------------------------------------------------------------------
#       TABLE : classification
# -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS classification
 (
   isbn CHAR(13) NOT NULL  ,
   theme_id INTEGER NOT NULL  
   ,
   CONSTRAINT pk_classification PRIMARY KEY(isbn,theme_id) 
 )  
 comment = "association entre LIVRE et THEME";

# -----------------------------------------------------------------------------
#       TABLE : ecriture
# -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS ecriture
 (
   isbn CHAR(13) NOT NULL  ,
   auteur_id INTEGER NOT NULL  
   ,
   CONSTRAINT pk_ecriture PRIMARY KEY(isbn,auteur_id) 
 )  
 comment = "association ECRIRE";

# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------
ALTER TABLE livre 
  ADD CONSTRAINT fk_livre FOREIGN KEY(editeur_id)
      REFERENCES editeur(id);
ALTER TABLE classification 
  ADD CONSTRAINT fk_classification_livre FOREIGN KEY(isbn)
      REFERENCES livre(isbn);
ALTER TABLE classification 
  ADD CONSTRAINT fk_classification_theme FOREIGN KEY(theme_id)
      REFERENCES theme(id);
ALTER TABLE ecriture 
  ADD CONSTRAINT fk_ecriture_livre FOREIGN KEY(isbn)
      REFERENCES livre(isbn);
ALTER TABLE ecriture 
  ADD CONSTRAINT fk_ecriture_auteur FOREIGN KEY(auteur_id)
      REFERENCES auteur(id);

INSERT INTO theme(libelle) VALUES ('Informatique'); -- 1
INSERT INTO theme(libelle) VALUES ('Web'); -- 2
INSERT INTO theme(libelle) VALUES ('Jeux'); -- 3
INSERT INTO theme(libelle) VALUES ('Droit'); -- 4
INSERT INTO theme(libelle) VALUES ('Multimédia'); -- 5

INSERT INTO editeur(nom, pays) VALUES ('O\'Reilly', 'Etats-Unis'); -- 1
INSERT INTO editeur(nom, pays) VALUES ('Eyrolles', 'France'); -- 2
INSERT INTO editeur(nom, pays) VALUES ('Hachette', 'France'); -- 3
INSERT INTO editeur(nom, pays) VALUES ('Folio', 'France'); -- 4

INSERT INTO auteur(prenom, nom) VALUES ('Russ', 'Miles'); -- 1
INSERT INTO auteur(prenom, nom) VALUES ('Kim', 'Hamilton'); -- 2
INSERT INTO auteur(prenom, nom) VALUES ('Scott', 'Kelby'); -- 3
INSERT INTO auteur(prenom, nom) VALUES ('Véronique', 'Messager'); -- 4
INSERT INTO auteur(prenom, nom) VALUES ('Thomas', 'Durand'); -- 5
INSERT INTO auteur(prenom, nom) VALUES ('Thomas', 'Durand'); -- 6
INSERT INTO auteur(prenom, nom) VALUES ('Raphaël', 'Goetter'); -- 7
INSERT INTO auteur(prenom, nom) VALUES ('J. K.', 'Rowling'); -- 8

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

INSERT INTO livre VALUES (
'978-2070643028', 'Harry Potter à l école des sorciers', 'Harry Potter, I : Harry Potter à l''école des sorciers', 9.65, 5, '2011-09-29', 6, 320, FALSE, 'Francais', 'hp1.jpg', 4);
INSERT INTO ecriture VALUES (
'978-2070643028', 8);

INSERT INTO client(pseudo, nom, prenom, mail, mot_de_passe) VALUES (
'Umlguru', 'Roques', 'Pascal', 'pascal.roques@valtech-training.fr', SHA1('mdp')) ;
INSERT INTO adresse(rue, cp, ville, pays, client_id, id) VALUES (
'24 Rue de la Digue', '31170', 'Tournefeuille', 'France', 1, 0) ;
INSERT INTO adresse(rue, cp, ville, pays, client_id, id) VALUES (
'5 av. Marcel Dassault', '31500', 'Toulouse', 'France', 1, 1) ;