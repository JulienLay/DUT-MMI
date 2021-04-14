Question 1

CREATE TABLE activite 
(
    nomactivite VARCHAR(50) NOT NULL,
    prix_seance INT NOT NULL,
    prix_forfait INT NOT NULL,
    public VARCHAR(50) NOT NULL,
    CONSTRAINT cle_activite PRIMARY KEY (nomactivite)
);

CREATE TABLE seance 
(
    numseance INT NOT NULL,
    date1 DATE,
    heuredeb DATE,
    heurefin DATE,
    CONSTRAINT cle_seance PRIMARY KEY (numseance),
    CONSTRAINT cle_activite FOREIGN KEY (nomactivite) REFERENCES activite(cle_activite)
);

CREATE TABLE inscription 
(
    numseance INT NOT NULL,
    numclient INT NOT NULL,
    appreciation INT NOT NULL CHECK (appreciation > 0 AND appreciation < 6),
    CONSTRAINT cle_inscription PRIMARY KEY (numseance, numclient),
    CONSTRAINT cle_seance FOREIGN KEY (numseance) REFERENCES seance(numseance),
    CONSTRAINT cle_client FOREIGN KEY (numclient) REFERENCES client(numclient)
);

CREATE TABLE client 
(
    numclient INT NOT NULL,
    nomclient VARCHAR(50) NOT NULL,
    adresse VARCHAR(50) NOT NULL,
    datenaissance DATE,
    CONSTRAINT cle_client PRIMARY KEY (numclient)
);

Question 2

ALTER TABLE activite 
ADD
CONSTRAINT public_valid 
CHECK (public IN "Enfant", "Adolescent", "Adulte", "Séniors");

Question 3

INSERT INTO activite VALUES('kayak',20 , 12, 'Enfant'); 
INSERT INTO seance VALUES(1, TO_DATE("10/10/2020", "dd/mm/yyyy"), TO_DATE("12:00", "hh:mm"), TO_DATE("14:00", "hh:mm") , "kayak"); 
INSERT INTO inscription VALUES(1, 33, 5);
INSERT INTO client VALUES(33 , "jaaj", "6 rue de la jaaj", TO_DATE("06/06/2006", "dd/mm/yyyy"));

Question 4

INSERT INTO client(33, "Charly Le grand", "18 route de Narbonne, 31062 Toulouse", NULL);

Question 5

UPDATE client
SET datenaissance = TO_DATE("26/12/2010", "dd/mm/yyyy")
WHERE nomclient LIKE "Charly Le grand";







Question 1

SELECT nomclient, datenaissance
FROM client
ORDER BY nomclient asc;

Question 2

SELECT *
FROM activite
WHERE prix_seance < 50;

Question 3

SELECT nomclient
FROM client
WHERE adresse LIKE "%Toulouse%" AND datenaissance > '01/01/2000';

Question 4

SELECT date1, heuredeb
FROM seance
WHERE nomactivite LIKE 'Rock acrobatique'
ORDER BY date1 desc;

Question 5

SELECT nomclient, adresse
FROM client, seance, inscription
WHERE inscription.numseance = seance.numseance AND inscription.numclient = client.numclient 
AND seance.numseance = 3 
AND inscription.appreciation IS NOT NULL;

Question 6

SELECT nomactivite
FROM seance
WHERE date1 = '01/01/2019' 
AND date1 = '01/03/2019';

Question 7

SELECT nomclient
FROM client, inscription
WHERE client.numclient = inscription.numclient
AND appreciation = 5;

Question 8

SELECT nomactivite
FROM activite
WHERE date1 IN (SELECT date1
                FROM seance 
                WHERE date1 IS NULL);

Question 9

SELECT seance.nomactivite
FROM seance, inscription
WHERE inscription.numseance = seance.numseance
ORDER BY avg(appreciation) desc;

Question 10

SELECT nomactivite.activite, count(seance.numseance) as nb_inscription
FROM activite, seance, inscription
WHERE inscription.numseance = seance.numseance AND activite.nomactivite = seance.nomactivite;