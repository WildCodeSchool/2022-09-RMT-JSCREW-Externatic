-- Active: 1669050829126@@127.0.0.1@3306@externatic

USE `externatic`;

DROP TABLE IF EXISTS `externatic`.`candidature`;

DROP TABLE IF EXISTS `externatic`.`candidat`;

DROP TABLE IF EXISTS `externatic`.`consultant`;

DROP TABLE IF EXISTS `externatic`.`connexion`;

DROP TABLE IF EXISTS `externatic`.`entreprise`;

DROP TABLE IF EXISTS `externatic`.`offre`;

DROP TABLE IF EXISTS `externatic`.`domaine`;

-- -----------------------------------------------------
-- Table `externatic`.`connexion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`connexion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `utilisateur` VARCHAR(255) UNIQUE NOT NULL,
  `hashedPassword` VARCHAR(255) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `externatic`.`connexion`
-- -----------------------------------------------------
INSERT INTO
  `connexion`(`utilisateur`, `hashedPassword`, `role`)
VALUES
  (
    'alain.villeneuve@email.f',
    '$argon2id$v=19$m=65536,t=5,p=1$gK38z/m731hAiZeDmlerHA$kKpFSFCvJNsWB77QbB/jbm6Dmkt8IlSEaZJStPxdW/I',
    'administrateur'
  );

INSERT INTO
  `connexion`(`utilisateur`, `hashedPassword`, `role`)
VALUES
  (
    'jules.simons@email.com',
    '$argon2id$v=19$m=65536,t=5,p=1$R5zhYw9IOecMbCx4Ck1ykQ$yCnhM7xzF+Sx0CJM/uvTCHo6JNcxeSgtFWCeWWQWAUM',
    'consultant'
  );

INSERT INTO
  `connexion`(`utilisateur`, `hashedPassword`, `role`)
VALUES
  (
    'leo.dupuis@gmail.com',
    '$argon2id$v=19$m=65536,t=5,p=1$a7y8HAgcdUFN7Woyayt+cg$FAS/LW8r2mpjr6EIdBMozVpS7I89gswYddM9sr+f1ls',
    'candidat'
  ),
  (
    "franck.gascard@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$0V1WR6sYiBta8aZCZCXROA$4GtsulV1jW1K7gi98Eg/KdZgAQ5vTDnyJbBwZFTxiag",
    "consultant"
  ),
  (
    "benjamin.casseron@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$52xCe/PKuxjzhgVXf3V/Bw$iPBpeqjGmjwg5xgJAddqdRLWSBQCOHoDTLR1GMbVw4Y",
    "Consultant"
  ),
  (
    "sabrina.blanchet@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$QYnNu0v6LJ3rQgfld5GuUw$Morq/xKz7ka7LukRvBG+t+IGktYmtMXaedKq6UqrBdY",
    "consultant"
  ),
  (
    "mathieu.debroise@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$7g2/MXBsB4XkML7yadMQEg$CWnGMtkFqsPP7CooSucq3lY7F5vRBrKzFHDA53tJFV8",
    "Consultant"
  ),
  (
    "thomas.limare@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$CriKcNEI6ytY9MZppPJiRQ$wUNlTvruOjTw0RF+FLIHTh3xjEPTB88ZPAgKG3DzFro",
    "consultant"
  ),
  (
    "ando.philistin@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$2enKB7+4DiOHTUITy7WK5w$AcS556X/1qJOD7k+MwCLQ321ji5jC5pZCDIBHFyct5U",
    "consultant"
  ),
  (
    "donatien.mahieu@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$Gofqkb/tyJFSyrMUEI8vAw$25X3FLE7N76jxZh616oj6lGmZxrDPPoZ4udfyxlP8bs",
    "consultant"
  ),
  (
    "yvonnick.loidreau@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$B+K3VbN2ixZJDgr4onROfA$XWemGjYfLAVdTqseotjzoE6YEzHJErPQXDziI8/ZKQM",
    "consultant"
  ),
  (
    "sandra.jagu@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$NwYpk2YS6efiziSPK/Qn1w$odNiScKMXqKRXipvYFkQ6UaskGGLjkPDB+68/R6WGlU",
    "consultant"
  ),
  (
    "mathilde.hamel@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$UL3MfR3AMLIMPwuteuIjDw$xBed5vMgsUfW/sinZJj2hE+BG15GbEt/PyeVuEOvTTA",
    "consultant"
  ),
  (
    "justine.cote@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$CL8twZI39JEmC+F1tjua3A$HW9yPTZZtWscg6MEy7pHxniaIqfIZuyZ/pYm2+qxn08",
    "consultant"
  ),
  (
    "perrine.dupisson@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$tbFftgt0qePrwv74DPpvNQ$MObXh2YP8SNH8pnb5u1r/KYB6YZdWqsRRtEL4uIwcRQ",
    "consultant"
  ),
  (
    "noe.lambert@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$D6LkKuBi8jfM7ZGZA2PAOQ$u4f6mCbUu9yoDhCJFf5gIDCE1TzgHTsb3wUWAUiGF58",
    "consultant"
  ),
  (
    "antoine.lopez@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$rOUM+9lCK3KhgHphPTMzTg$cw7UdZFUziZKX57TXHfeOBdTt/g7QXCK2+BftCvgyR8",
    "consultant"
  ),
  (
    "pierre.seghier@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$O7qyUqbc1B7OtSN4soD4sQ$vcD5spnWqWPVBnSKQf4N7hUtKraY2zE+qP3F5soBYv4",
    "consultant"
  ),
  (
    "lise.demartino@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$DoYK+EyUe2hI4fxFdgmMTg$aCqDDqlARVkMH3iMRpgqQQhKwQig3cnRLHKXDEIWqCM",
    "consultant"
  ),
  (
    "alexandre.urien@externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$U/Ea/9iCVJMbBjnF8Na1Fg$l7RBAbQI1E2jCZgceO3Knn2ed0wFQhktJ4RFE5B2qJc",
    "consultant"
  ),
  (
    "adele.sold @externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$ldQ6+atDySqdtNNHz+tapg$c872nQfD0B8Y8lnwGa300odVO3SRR7pCBtsXGoxPPZk",
    "consultant"
  ),
  (
    "margaux.aubert @externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$dz97nd77JIpUFbXK1t6gXw$ttpdYrkq+ZbcqO3Q81VHrxG1EYOg4aoRWjxxogiX+Mc",
    "consultant"
  ),
  (
    "nicolas.bouet @externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$cT+X+ZVTxm7IWQ7M9mY0LQ$Sm1+wrCr+xiFIa3Cbv2ZUOBogi8REWredAZPuH0Ui1g",
    "consultant"
  ),
  (
    "lucie.froeschel @externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$ySw7Fh7GJ4f5SGlRLr8ERw$yJ2Zj4uhJtPWSPY43N5ql2nBn5RXM7UB03w/oVve5q0",
    "consultant"
  ),
  (
    "Raphael.sanchez @externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$ayvtf2vi9ayaQHR+kxcJew$TD4DwFJSfixYwDtxw5nX54rgDkxnYUs+1Ylysampvo4",
    "consultant"
  ),
  (
    "thomas.rovere @externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$Aa4FKlaCk9s9/2vSeAisPw$AmS47P4Wtf5V4ahhDOeJLsb4ICrpmcUX4N8fKkgtqj4",
    "consultant"
  ),
  (
    "charlotte.nadaud @externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$g2gQLkZcbHJijvwQ1Ow5Dg$lolc7l83GVjLYgtqwDJe/swRua6lTmS5UMTZp3Cqdv4",
    "consultant"
  ),
  (
    "ruben.baracchini @externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$xHXN3G/uicDb2E86D3QpcQ$sC6+8Bjp0VbVwXSzzgjbYXJF6+7sL5eoZlvEXeuijtk",
    "consultant"
  ),
  (
    "tiffene.buleon @externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$thdHw9zmFnJYBTZUFZUhOA$hezorJOBpJzHe1xiI8FFMefLliBIwTs26t+9zH3bWSQ",
    "consultant"
  ),
  (
    "talsy.loemba @externatic.fr",
    "$argon2id$v=19$m=65536,t=5,p=1$U/Ea/9iCVJMbBjnF8Na1Fg$l7RBAbQI1E2jCZgceO3Knn2ed0wFQhktJ4RFE5B2qJc",
    "consultant"
  );

-- -----------------------------------------------------
-- Table `externatic`.`candidat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`candidat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `photo` VARCHAR(255) NULL,
  `nom` VARCHAR(30) NOT NULL,
  `prenom` VARCHAR(30) NOT NULL,
  `age` INT NOT NULL,
  `adresse` VARCHAR(255) NOT NULL,
  `code_postal` VARCHAR(10) NOT NULL,
  `ville` VARCHAR(100) NOT NULL,
  `pays` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `cv` VARCHAR(255),
  `description` LONGTEXT NOT NULL,
  `metier` VARCHAR(100) NOT NULL,
  `telephone` VARCHAR(50) NOT NULL,
  `dateInscription` DATE NOT NULL,
  `dateDisponibilite` DATE NOT NULL,
  `connexion_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_candidat_connexion` FOREIGN KEY (`connexion_id`) REFERENCES `externatic`.`connexion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `externatic`.`candidat`
-- -----------------------------------------------------
INSERT INTO
  `externatic`.`candidat` (
    `photo`,
    `nom`,
    `prenom`,
    `age`,
    `adresse`,
    `code_postal`,
    `ville`,
    `pays`,
    `email`,
    `cv`,
    `description`,
    `metier`,
    `telephone`,
    `dateInscription`,
    `dateDisponibilite`,
    `connexion_id`
  )
VALUES
  (
    NULL,
    'Simons',
    'Jules',
    '38',
    '12 Rue de la République',
    '95040',
    'Sarcelles',
    'France',
    'jules.simons@email.com',
    DEFAULT,
    'motivé, sérieux.travail en équipe.',
    'Developpeur web',
    '06 03 07 38 20 ',
    '2022-12_04',
    '2023-02-08',
    2
  );

INSERT INTO
  `externatic`.`candidat` (
    `photo`,
    `nom`,
    `prenom`,
    `age`,
    `adresse`,
    `code_postal`,
    `ville`,
    `pays`,
    `email`,
    `cv`,
    `description`,
    `metier`,
    `telephone`,
    `dateInscription`,
    `dateDisponibilite`,
    `connexion_id`
  )
VALUES
  (
    NULL,
    'Dupuis ',
    'Léo',
    '23',
    '35 avenue du Général Leclerc',
    '56000',
    'Vannes',
    'France',
    'leo.dupuis@gmail.com',
    DEFAULT,
    'J ai travaillé pendant 10 ans chez Microsoft. Je suis sur le marché à cause d un licenciement économique. Passionner par mon travail, je suis prêt à me lancer sur un nouveau défit.',
    'Développeur logiciel',
    '06 07 50 48 79',
    '2022-12-15',
    '2023-05-04',
    3
  );

INSERT INTO
  `externatic`.`candidat` (
    `photo`,
    `nom`,
    `prenom`,
    `age`,
    `adresse`,
    `code_postal`,
    `ville`,
    `pays`,
    `email`,
    `cv`,
    `description`,
    `metier`,
    `telephone`,
    `dateInscription`,
    `dateDisponibilite`,
    `connexion_id`
  )
VALUES
  (
    NULL,
    'Villeneuve',
    'Alain',
    '32',
    '10 Rue d Alésia',
    '75014 ',
    'Paris',
    'France',
    'alain.villeneuve@email.fr',
    'https://www.canva.com/design/DAFUFppkOt0/BwbW_3WK6dOEmald9N9mvw/edit?utm_content=DAFUFppkOt0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    'Je suis un concepteur graphique saisonnier avec plus de 10 ans d expérience dans le secteur de la publicité. Mes travaux se concentrent sur les UX, les UI et la typographie.',
    'Concepteur Graphique',
    '01 23 45 67 89',
    '2022-12-17',
    '2023-05-16',
    1
  );

-- -----------------------------------------------------
-- Table `externatic`.`consultant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`consultant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image_url` VARCHAR(255) NOT NULL,
  `nom_consultant` VARCHAR(45) NOT NULL,
  `role` VARCHAR(100) NOT NULL,
  `telephone` VARCHAR(20),
  `email` VARCHAR(50) NOT NULL,
  `LinkedIn` VARCHAR(80) NOT NULL,
  `connexion_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_consultant_connexion` FOREIGN KEY (`connexion_id`) REFERENCES `externatic`.`connexion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `externatic`.`consultant`
-- -----------------------------------------------------
INSERT INTO
  `consultant`(
    `image_url`,
    `nom_consultant`,
    `role`,
    `telephone`,
    `email`,
    `LinkedIn`,
    `connexion_id`
  )
VALUES
  (
    "https://www.externatic.fr/wp-content/uploads/2021/09/FGA-1-300x300.jpg",
    "Franck GASCARD",
    "Dirigeant",
    "06 99 48 33 98",
    "franck.gascard@externatic.fr",
    "https://www.linkedin.com/in/franckgascard/",
    4
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/09/BCA-1-300x300.jpg",
    "Benjamin CASSERON",
    "Associé / Consultant recrutement IT",
    "06 87 28 36 85",
    "benjamin.casseron@externatic.fr",
    "https://www.linkedin.com/in/benjamincasseron/",
    5
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/09/SBL-1-300x300.jpg",
    "Sabrina BLANCHET",
    "Associée / Consultante recrutement IT",
    "07 83 77 37 09",
    "sabrina.blanchet@externatic.fr",
    "https://www.linkedin.com/in/sabrina-blanchet-7a2948b/",
    6
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/09/MDE-1-300x300.jpg",
    "Mathieu DEBROISE",
    "Associé / Consultant recrutement IT",
    "06 83 46 10 43",
    "mathieu.debroise@externatic.fr",
    "https://www.linkedin.com/in/mathieudebroise/",
    7
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/09/TLI-1-300x300.jpg",
    "Thomas LIMARE",
    "Consultant recrutement IT & Cybersécurité",
    "06 73 87 40 18",
    "thomas.limare@externatic.fr",
    "https://www.linkedin.com/in/thomas-limare-36b52b116/",
    8
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/09/APH-1-300x300.jpg",
    "Ando PHILISTIN",
    "Ingénieur recrutement",
    "07 49 31 93 69",
    "ando.philistin@externatic.fr",
    "https://www.linkedin.com/in/ando-philistin/",
    9
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/01/DMA1-300x300.png",
    "Donatien MAHIEU",
    "Chargé de recrutement",
    "",
    "donatien.mahieu@externatic.fr",
    "https://www.linkedin.com/in/donatien-mahieu/",
    10
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/09/YLO-1-300x300.jpg",
    "Yvonnick LOIDREAU",
    "Consultant recrutement IT - Nantes/Rennes",
    "06 11 55 36 82",
    "yvonnick.loidreau@externatic.fr",
    "https://www.linkedin.com/in/yvonnick-loidreau-32417284/",
    11
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/09/SJA-1-300x300.jpg",
    "Sandra JAGU",
    "Office Manager",
    "02 85 52 26 33",
    "sandra.jagu@externatic.fr",
    "https://www.linkedin.com/in/sandra-jagu-b73b3670/",
    12
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/03/MHA1-300x300.png",
    "Mathilde HAMEL",
    "Consultante en recrutement IT - Nantes/Vendée",
    "06 70 35 46 55",
    "mathilde.hamel@externatic.fr",
    "https://www.linkedin.com/in/mathilde-hamel-560a52111/",
    13
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/03/JCO-1-300x300.jpg",
    "Justine CÔTE",
    "Consultante en recrutement IT",
    "06 02 42 82 63",
    "justine.cote@externatic.fr",
    "https://www.linkedin.com/in/justine-eriau/",
    14
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/05/PDU-1-300x300.jpg",
    "Perrine DUPISSON",
    "Consultante recrutement IT",
    "06 29 51 22 51",
    "perrine.dupisson@externatic.fr",
    "https://www.linkedin.com/in/perrine-dupisson/",
    15
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/03/NLA-1-300x300.jpg",
    "Noé LAMBERT",
    "Consultant en recrutement IT",
    "07 83 58 06 14",
    "noe.lambert@externatic.fr",
    "https://www.linkedin.com/in/no%C3%A9-lambert-aouizerat/",
    16
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/09/ALO1-300x300.png",
    "Antoine LOPEZ",
    "Consultant en recrutement IT - Nantes/Vendée",
    "06 40 83 19 54",
    "antoine.lopez@externatic.fr",
    "https://www.linkedin.com/in/antoine-lopez-093b231a0/",
    17
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/06/PSE-1-300x300.jpg",
    "Pierre SEGHIER",
    "Consultant recrutement IT - Nantes/Angers",
    "06 50 99 50 98",
    "pierre.seghier@externatic.fr",
    "https://www.linkedin.com/in/pierre-seghier-59462399/",
    18
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/01/LDE1-300x300.png",
    "Lise De Martino",
    "Office Manager",
    "06 79 65 00 66",
    "lise.demartino@externatic.fr",
    "https://www.linkedin.com/in/lise-de-martino/",
    19
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/09/AUR-1-300x300.jpg",
    "Alexandre Urien",
    "Consultant en recrutement IT - Lille",
    "06 01 39 55 60",
    "alexandre.urien@externatic.fr",
    "https://www.linkedin.com/in/alexandre-urien/",
    20
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/09/ASO1-300x300.png",
    "Adèle SOLD",
    " Chargée de recutement IT - Lille ",
    " 06 20 18 15 15 ",
    " adele.sold @externatic.fr ",
    " https: / / www.linkedin.com / in / ad % C3 % A8le - sold - 07b68314a / ",
    21
  ),
  (
    " https: / / www.externatic.fr / wp - content / uploads / 2020 / 09 / MAU -1 - 300x300.jpg ",
    " Margaux AUBERT ",
    " Responsable Communication / Marketing ",
    " 06 66 76 57 40 ",
    " margaux.aubert @externatic.fr ",
    " https: / / www.linkedin.com / in / margaux - aubert / ",
    22
  ),
  (
    " https: / / www.externatic.fr / wp - content / uploads / 2021 / 09 / NBO -1 - 300x300.jpg ",
    " Nicolas BOUET",
    " Consultant recrutement IT - Nantes / Rennes ",
    " 06 98 28 83 68 ",
    " nicolas.bouet @externatic.fr ",
    " https: / / www.linkedin.com / in / bouet - nicolas / ",
    23
  ),
  (
    " https: / / www.externatic.fr / wp - content / uploads / 2021 / 09 / LFR -1 - 300x300.jpg ",
    " Lucie FROESCHEL ",
    " Consultante recrutement IT à Bordeaux ",
    " 06 82 32 11 45 ",
    " lucie.froeschel @externatic.fr ",
    " https: / / www.linkedin.com / in / lucie - froeschel / ",
    24
  ),
  (
    " https: / / www.externatic.fr / wp - content / uploads / 2021 / 09 / RSA -1 - 300x300.jpg ",
    " Raphael SANCHEZ ",
    " Consultant recrutement IT à Bordeaux ",
    " 06 49 49 91 68 ",
    " Raphael.sanchez @externatic.fr ",
    " https: / / www.linkedin.com / in / raphael - sanchez - roson / ",
    25
  ),
  (
    " https: / / www.externatic.fr / wp - content / uploads / 2022 / 05 / TRO1 - 300x300.png ",
    " Thomas ROVERE",
    " Consultant en recrutement IT à Bordeaux ",
    " 07 65 75 57 03 ",
    " thomas.rovere @externatic.fr ",
    " https: / / www.linkedin.com / in / thomas - rovere / ",
    26
  ),
  (
    " https: / / www.externatic.fr / wp - content / uploads / 2022 / 07 / CNA1 - 300x298.png ",
    " Charlotte NADAUD ",
    " Chargée de recrutement IT à Bordeaux ",
    " 06 73 45 10 59 ",
    " charlotte.nadaud @externatic.fr ",
    " https: / / www.linkedin.com / in / charlotte - nadaud / ",
    27
  ),
  (
    " https: / / www.externatic.fr / wp - content / uploads / 2022 / 09 / RBA2 - 300x300.png ",
    " Ruben BARACCHINI ",
    " Consultant recrutement IT à Bordeaux ",
    " 06 66 84 94 50 ",
    " ruben.baracchini @externatic.fr ",
    " https: / / www.linkedin.com / in / ruben - baracchini - 78a474158 / ",
    28
  ),
  (
    " https: / / www.externatic.fr / wp - content / uploads / 2020 / 09 / site -01 - 300x300.png ",
    " Tiffène BULEON",
    " Consultante en recrutement IT à Nantes ",
    " 06 74 82 70 85 ",
    " tiffene.buleon @externatic.fr ",
    " https: / / www.linkedin.com / in / tiff % C3 % A8ne - buleon - 288512b6 / ",
    29
  ),
  (
    " https: / / www.externatic.fr / wp - content / uploads / 2022 / 12 / site -03 - 300x300.png ",
    " Talsy LOEMBA ",
    " Consultant recrutement IT à Nantes ",
    " 06 50 69 21 78 ",
    " talsy.loemba @externatic.fr ",
    " https: / / www.linkedin.com / in / talsy - loemba / ",
    30
  );

-- -----------------------------------------------------
-- Table `externatic`.`Domaine`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`domaine` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- ----------------------------------------
-- Data for table `externatic`.`domaine`;
-- ----------------------------------------
INSERT INTO
  `externatic`.`domaine` (`nom`, `type`)
VALUES
  ('developpeur full Stack', 'web');

INSERT INTO
  `externatic`.`domaine` (`nom`, `type`)
VALUES
  ('devOps', 'web');

INSERT INTO
  `externatic`.`domaine` (`nom`, `type`)
VALUES
  ('developpeur senior', 'web');

-- -----------------------------------------------------
-- Table `externatic`.`entreprise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`entreprise` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `logo` VARCHAR(100) NULL,
  `nom_entreprise` VARCHAR(50) NOT NULL,
  `adresse` VARCHAR(255) NOT NULL,
  `code_postal` VARCHAR(50) NOT NULL,
  `ville` VARCHAR(100) NOT NULL,
  `pays` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `telephone` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `numero_siret` VARCHAR(255) NOT NULL,
  `nombre_employes` INT NOT NULL,
  `dateInscription` DATE NOT NULL,
  `domaine_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_domaine_entreprise` FOREIGN KEY (`domaine_id`) REFERENCES `externatic`.`domaine` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------
-- Data for table `externatic`.`entreprise`
-- -----------------------------------------
INSERT INTO
  `externatic`.`entreprise` (
    `logo`,
    `nom_entreprise`,
    `adresse`,
    `code_postal`,
    `ville`,
    `pays`,
    `email`,
    `telephone`,
    `description`,
    `numero_siret`,
    `nombre_employes`,
    `dateInscription`,
    `domaine_id`
  )
VALUES
  (
    NULL,
    'Dassault',
    '15 rue de Villacoublay',
    '78130',
    'Velizy',
    'France',
    'dassault.tech@gmail.com',
    '01 30 58 56 56',
    'Architecte du futur, Dassault Aviation est un groupe français qui conçoit et fabrique des avions militaires, des avions d’affaires et des systèmes spatiaux.',
    '123456789',
    500,
    '2022-09-15',
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/10/lucca-copie.png",
    "lucca",
    "13 rue Martin Bernard",
    "75013",
    "Paris",
    "France",
    "info@lucca.fr",
    "01 83 64 53 20",
    "Les services en ligne Lucca remplacent vos fichiers Excel et optimisent la gestion de vos processus internes",
    "",
    500,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/03/akeneo-2.png",
    "Akaneo",
    "75 rue d'Amsterdam",
    "75008",
    "Paris",
    "France",
    "",
    "",
    "Akeneo Product Cloud est une solution SaaS complète et composable pour activer l’histoire de vos produits où que se trouvent vos clients.",
    "",
    250,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/03/allovoisins-1.png",
    "allovoisins",
    "1 Rue Victor Hugo, Immeuble Agora",
    "44 400",
    "REZE",
    "France",
    "contact@allovoisins.com",
    "",
    "Prestations de services et location de matériel",
    "",
    50,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/10/Decath-tech.png",
    "Decathlon",
    "4 boulevard de Mons",
    "59650",
    "Villeneuve d’Ascq",
    "France",
    "",
    "09 69 32 33 22",
    "",
    "",
    500,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/03/nickel-1.png",
    "Nickel",
    "",
    "94220",
    "Charenton-le-Pont",
    "France",
    "partenaire@nickel.eu",
    "01 76 49 00 00",
    "Nickel est un service bancaire alternatif français",
    "753886092",
    500,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/03/GIE-iris.png",
    "U IRIS",
    "Place Pléiades",
    "44 470",
    "Carquefou",
    "France",
    "contactiris@systeme-u.fr",
    "02 28 22 10 00",
    "U IRIS est un Groupement d'intérêt économique qui a pour objet le développement et la mise en œuvre de la stratégie informatique du Groupement U",
    "",
    500,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/03/mdm-1.png",
    "Maison du Monde",
    "Le Portereau Route des Ports aux Meules",
    "44 120",
    "Vertou",
    "France",
    "",
    "02 51 71 17 17",
    "Inspirer à chacun l’envie de s’ouvrir au monde pour créer ensemble des lieux de vie uniques, chaleureux et durables",
    "",
    8600,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/03/showroom-1.png",
    "showroomprive.com",
    "ZAC de la Montjoie 1 rue des blés",
    "93 210",
    "La Plaine Saint-Denis",
    "France",
    "",
    "0 1 49 46 05 67",
    "",
    "",
    50,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/03/manitou.png",
    "Manitou",
    "430, rue de l'Aubinière",
    "44 158",
    "Ancenis Cedex",
    "France",
    "",
    "02 40 09 10 11",
    "Manitou Group est une entreprise française qui conçoit, produit, distribue et assure le service de matériels de manutention à destination de la construction, de l'agriculture et des industries.",
    "",
    500,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/03/iadvize.png",
    "iAdvize",
    "9 Rue Nina Simone",
    "44 000",
    "Nantes",
    "France",
    "",
    "02 85 52 65 45",
    "Leader du messaging en France",
    "",
    500,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2021/03/lengow-1.png",
    "LENGOW",
    "6 rue René Viviani",
    "44 200",
    "Nantes",
    "France",
    "",
    "02 85 52 64 15",
    "",
    "",
    500,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/08/maincare.jpg",
    "Maincare",
    "Bâtiment E et F - 4, voie Romaine CANEJAN",
    "33 612",
    "CESTAS CEDEX",
    "France",
    "",
    "05 57 89 65 00",
    "Créateur de logiciels santé",
    "",
    500,
    "2023-01-08",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/08/acc.jpg",
    "ACC",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    500,
    "2023-08-01",
    1
  ),
  (
    "https://www.externatic.fr/wp-content/uploads/2022/08/klaxoon-.jpg",
    "Klaxoon",
    "",
    "",
    "Cesson-Sévigné",
    "France",
    "legal@klaxoon.com",
    "",
    "Klaxoon est une société française spécialisée dans l’édition de logiciels applicatifs destinés à faciliter l'organisation des réunions en entreprise.",
    "",
    300,
    "2023-01-08",
    1
  );

INSERT INTO
  `externatic`.`entreprise` (
    `logo`,
    `nom_entreprise`,
    `adresse`,
    `code_postal`,
    `ville`,
    `pays`,
    `email`,
    `telephone`,
    `description`,
    `numero_siret`,
    `nombre_employes`,
    `dateInscription`,
    `domaine_id`
  )
VALUES
  (
    NULL,
    'Axelyo',
    '56 rue des Accacias ',
    '12360',
    'Saint Etienne',
    'France',
    'axelyo@email.com',
    '03 54 86 47 96',
    'axelyo accompagne ses clients sur les sujets liés au développement du Capital Humain, Executive Search, Recrutement (Dirigeants, cadres, experts) conseil RH et Management de Transition..',
    '987452314',
    20,
    '2022-07-01',
    2
  );

INSERT INTO
  `externatic`.`entreprise` (
    `logo`,
    `nom_entreprise`,
    `adresse`,
    `code_postal`,
    `ville`,
    `pays`,
    `email`,
    `telephone`,
    `description`,
    `numero_siret`,
    `nombre_employes`,
    `dateInscription`,
    `domaine_id`
  )
VALUES
  (
    NULL,
    'InfoDev',
    '27 carrefour du marché',
    '47123',
    'Avignon',
    'France',
    'infoDev.hub@gmail.com',
    '04 56 87 96 52',
    'ACSEP nous accompagne depuis notre création en mars 2018. Nous devions rapidement démarrer les flux magasins et web de La Grande Récré (Ludendo), un acteur incontournable dans la distribution de jouets',
    '456321789',
    100,
    '2022-12-07',
    3
  );

-- -----------------------------------------------------
-- Table `externatic`.`offre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`offre` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contrat` VARCHAR(50) NOT NULL,
  `condition_travail` LONGTEXT NOT NULL,
  `avantages` LONGTEXT,
  `poste` VARCHAR(50) NOT NULL,
  `localisation` VARCHAR(255) NOT NULL,
  `dateOffre` VARCHAR(20) NOT NULL,
  `date_fin_offre` VARCHAR(20) NOT NULL,
  `salaire` VARCHAR(45) NULL,
  `mission` LONGTEXT NOT NULL,
  `profil_recherche` LONGTEXT NOT NULL,
  `specialitees` LONGTEXT NOT NULL,
  `entreprise_id` INT NOT NULL,
  `domaine_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_offre_domaine` FOREIGN KEY (`domaine_id`) REFERENCES `externatic`.`domaine` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_offre_entreprise` FOREIGN KEY (`entreprise_id`) REFERENCES `externatic`.`entreprise` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- --------------------------------------
-- Data for table `externatic`.`offre`
-- --------------------------------------
INSERT INTO
  `externatic`.`offre` (
    `contrat`,
    `condition_travail`,
    `avantages`,
    `poste`,
    `localisation`,
    `dateOffre`,
    `date_fin_offre`,
    `salaire`,
    `mission`,
    `profil_recherche`,
    `specialitees`,
    `entreprise_id`,
    `domaine_id`
  )
VALUES
  (
    'CDI',
    'Full remote',
    ' Carte swile / CSE /  locaux en centre ville de Nantes avec coporate appartment en cas de remote (2-3 jours / mois sur site attendu) contexte international  possibilités d évolution.',
    'Développeur fullstack JS full ',
    'Nantes',
    '07/12/2022',
    '08/03/2023',
    '45 000 - 60 000€',
    'Vous rejoignez cette nouvelle feature team : En contexte Agile, vous serez impliqué dans le build (étude et développement) Node et react de la solution en contexte serverless Au sein de cette société innovante où le niveau tech est une architecture Serverless',
    'Soft skills : Vous êtes proactif et autonome, vous souhaitez avoir un impact au sein de la structure Vous aimez travailler en équipe et partager Vous êtes dans l amélioration continue et aimez apprendre de vos réussites mais aussi de vos erreurs',
    'NodeJS / Architecture Serverless / React / Git / GCP / Approche DDD etc.',
    1,
    2
  );

INSERT INTO
  `externatic`.`offre` (
    `contrat`,
    `condition_travail`,
    `avantages`,
    `poste`,
    `localisation`,
    `dateOffre`,
    `date_fin_offre`,
    `salaire`,
    `mission`,
    `profil_recherche`,
    `specialitees`,
    `entreprise_id`,
    `domaine_id`
  )
VALUES
  (
    'CDI',
    'Contrat : CDI, forfait jours Lieu de travail : Nantes, Lyon ou Paris avec 2 jours de télétravail par semaine) ; ou full remote + déplacements à prévoir 2-3 jours par mois',
    '???',
    '???',
    '???',
    '01/01/22',
    '05/01/22',
    '000€',
    'c infrastructure (sécurité, performances …) Résoudre les incidents et en faire le suivi Supporter les équipes techniques, dev et data pour la mise en place de nouveaux projets ou fonctionnalités',
    'Etre à l’aise avec les processus d’intégration et de déploiement continu Etre en phase avec ces traits culturels : curiosité et pragmatisme, autonomie et solidarité, passion et fiabilité Valoriser l’esprit d’équipe Avoir un bon relationnel Et un excellent sens de l’humour :)',
    'Ruby On Rails, RabbitMQ, PostgreSQL, React, React Native',
    2,
    1
  );

INSERT INTO
  `externatic`.`offre` (
    `contrat`,
    `condition_travail`,
    `avantages`,
    `poste`,
    `localisation`,
    `dateOffre`,
    `date_fin_offre`,
    `salaire`,
    `mission`,
    `profil_recherche`,
    `specialitees`,
    `entreprise_id`,
    `domaine_id`
  )
VALUES
  (
    'CDI',
    'TT ou FULL REMOTE possible.',
    DEFAULT,
    'Développeur senior PHP/React ',
    'Bordeaux',
    '23/11/2022',
    '05/05/2023',
    ' 45-55K €/ an selon profil',
    'Développer de nouvelles fonctionnalités sur les outils du produit Améliorer les processus techniques et les environnements de développement Prendre en main des problématiques métier plus que des technologies Améliorer les fonctionnalités existantes : correction de bugs, optimisation des temps de réponses, etc',
    'Être à l écoute des utilisateurs quant aux problématiques rencontrées Et bien évidement rendre vos futurs utilisateurs heureux',
    'Langages : PHP 8 et Javascript ECMAScript6 et plus, Symfony / API Platform, API Rest/Soap, POO, framework & Design patterns, Base de données : MySQL, ElasticSearch, Outils de développement collaboratif : Git & submodules, GitLab & registry, Gitflow, DevOps : Docker, CI/CD, Linux : SSH, bash & co, AWS est un plus non négligeable, car projet de migration des services vers le cloud.',
    3,
    3
  );

-- -----------------------------------------------------
-- Table `externatic`.`candidature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`candidature` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `candidat_id` INT NOT NULL,
  `offre_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_candidature_candidat` FOREIGN KEY (`candidat_id`) REFERENCES `externatic`.`candidat` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidature_offre` FOREIGN KEY (`offre_id`) REFERENCES `externatic`.`offre` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- ----------------------------------------
-- Data for table `externatic`.`candidature`;
-- ----------------------------------------
INSERT INTO
  `externatic`.`candidature` (`candidat_id`, `offre_id`)
VALUES
  (1, 1);

INSERT INTO
  `externatic`.`candidature` (`candidat_id`, `offre_id`)
VALUES
  (1, 2);

INSERT INTO
  `externatic`.`candidature` (`candidat_id`, `offre_id`)
VALUES
  (2, 2);

INSERT INTO
  `externatic`.`candidature` (`candidat_id`, `offre_id`)
VALUES
  (2, 3);

INSERT INTO
  `externatic`.`candidature` (`candidat_id`, `offre_id`)
VALUES
  (3, 1);

INSERT INTO
  `externatic`.`candidature` (`candidat_id`, `offre_id`)
VALUES
  (3, 3);