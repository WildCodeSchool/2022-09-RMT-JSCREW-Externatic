-- Active: 1669050829126@@127.0.0.1@3306@externatic
-- MySQL Script generated by MySQL Workbench
-- Wed Dec 14 15:30:56 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

USE `externatic` ;
-- -----------------------------------------------------
-- Table `externatic`.`connexion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `externatic`.`connexion` ;

CREATE TABLE IF NOT EXISTS `externatic`.`connexion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `utilisateur` VARCHAR(255) NOT NULL,
  `mot_de_passe` VARCHAR(255) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `externatic`.`connexion`
-- -----------------------------------------------------

INSERT INTO `connexion`(`utilisateur`, `mot_de_passe`, `role`) VALUES ('alain.villeneuve@email.f', '123456', 'administrateur');
INSERT INTO `connexion`(`utilisateur`, `mot_de_passe`, `role`) VALUES ('jules.simons@email.com', '123456', 'consultant');
INSERT INTO `connexion`(`utilisateur`, `mot_de_passe`, `role`) VALUES ('leo.dupuis@gmail.com', '123456','candidat');


-- -----------------------------------------------------
-- Table `externatic`.`candidat`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `externatic`.`candidat` ;

CREATE TABLE IF NOT EXISTS `externatic`.`candidat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `photo` VARCHAR(255) NULL,
  `nom` VARCHAR(30) NOT NULL,
  `prenom` VARCHAR(30) NOT NULL,
  `age`INT NOT NULL,
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
  CONSTRAINT `fk_candidat_connexion`
    FOREIGN KEY (`connexion_id`)
    REFERENCES `externatic`.`connexion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `externatic`.`Domaine`
-- -----------------------------------------------------

-- DROP TABLE IF EXISTS `externatic`.`domaine` ; 

CREATE TABLE IF NOT EXISTS `externatic`.`domaine` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- ----------------------------------------
-- Data for table `externatic`.`domaine`;
-- ----------------------------------------

INSERT INTO `externatic`.`domaine` (`nom`, `type`) VALUES ('developpeur full Stack', 'web');
INSERT INTO `externatic`.`domaine` (`nom`, `type`) VALUES ('devOps', 'web');
INSERT INTO `externatic`.`domaine` (`nom`, `type`) VALUES ('developpeur senior', 'web');

-- -----------------------------------------------------
-- Table `externatic`.`entreprise`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `externatic`.`entreprise` ;

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
  CONSTRAINT `fk_domaine_entreprise`
    FOREIGN KEY (`domaine_id`)
    REFERENCES `externatic`.`domaine` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `externatic`.`offre`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `externatic`.`offre` ;

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
  CONSTRAINT `fk_offre_domaine`
    FOREIGN KEY (`domaine_id`)
    REFERENCES `externatic`.`domaine` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_offre_entreprise`
    FOREIGN KEY (`entreprise_id`)
    REFERENCES `externatic`.`entreprise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `externatic`.`candidature`
-- -----------------------------------------------------
-- DROP TABLE IF EXISTS `externatic`.`candidature` ;

CREATE TABLE IF NOT EXISTS `externatic`.`candidature` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `candidat_id` INT NOT NULL,
  `offre_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_candidature_candidat`
    FOREIGN KEY (`candidat_id`)
    REFERENCES `externatic`.`candidat` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidature_offre`
    FOREIGN KEY (`offre_id`)
    REFERENCES `externatic`.`offre` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `externatic`.`candidat`
-- -----------------------------------------------------

INSERT INTO `externatic`.`candidat` (`photo`, `nom`, `prenom`, `age`, `adresse`, `code_postal`, `ville`, `pays`, `email`, `cv`, `description`, `metier`, `telephone`, `dateInscription`, `dateDisponibilite`, `connexion_id`) VALUES (NULL, 'Simons', 'Jules', '38', '12 Rue de la République', '95040', 'Sarcelles', 'France', 'jules.simons@email.com', DEFAULT, 'motivé, sérieux.travail en équipe.', 'Developpeur web', '06 03 07 38 20 ', '2022-12_04', '2023-02-08', 1);
INSERT INTO `externatic`.`candidat` (`photo`, `nom`, `prenom`, `age`, `adresse`, `code_postal`, `ville`, `pays`, `email`, `cv`, `description`, `metier`, `telephone`, `dateInscription`, `dateDisponibilite`, `connexion_id`) VALUES (NULL, 'Dupuis ', 'Léo', '23', '35 avenue du Général Leclerc', '56000', 'Vannes', 'France', 'leo.dupuis@gmail.com', DEFAULT, 'J ai travaillé pendant 10 ans chez Microsoft. Je suis sur le marché à cause d un licenciement économique. Passionner par mon travail, je suis prêt à me lancer sur un nouveau défit.', 'Développeur logiciel', '06 07 50 48 79', '2022-12-15', '2023-05-04', 2);
INSERT INTO `externatic`.`candidat` (`photo`, `nom`, `prenom`, `age`, `adresse`, `code_postal`, `ville`, `pays`, `email`, `cv`, `description`, `metier`, `telephone`, `dateInscription`, `dateDisponibilite`, `connexion_id`) VALUES (NULL, 'Villeneuve', 'Alain', '32', '10 Rue d Alésia', '75014 ', 'Paris', 'France', 'alain.villeneuve@email.fr', 'https://www.canva.com/design/DAFUFppkOt0/BwbW_3WK6dOEmald9N9mvw/edit?utm_content=DAFUFppkOt0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', 'Je suis un concepteur graphique saisonnier avec plus de 10 ans d expérience dans le secteur de la publicité. Mes travaux se concentrent sur les UX, les UI et la typographie.', 'Concepteur Graphique', '01 23 45 67 89', '2022-12-17', '2023-05-16', 3);

-- -----------------------------------------
-- Data for table `externatic`.`entreprise`
-- -----------------------------------------

INSERT INTO `externatic`.`entreprise` (`logo`, `nom_entreprise`, `adresse`, `code_postal`, `ville`, `pays`, `email`, `telephone`, `description`, `numero_siret`, `nombre_employes`, `dateInscription`, `domaine_id`) VALUES (NULL, 'Dassault', '15 rue de Villacoublay', '78130', 'Velizy', 'France', 'dassault.tech@gmail.com', '01 30 58 56 56', 'Architecte du futur, Dassault Aviation est un groupe français qui conçoit et fabrique des avions militaires, des avions d’affaires et des systèmes spatiaux.', '123456789', 500, '2022-09-15', 1);
INSERT INTO `externatic`.`entreprise` (`logo`, `nom_entreprise`, `adresse`, `code_postal`, `ville`, `pays`, `email`, `telephone`, `description`, `numero_siret`, `nombre_employes`, `dateInscription`, `domaine_id`) VALUES (NULL, 'Axelyo', '56 rue des Accacias ', '12360', 'Saint Etienne', 'France', 'axelyo@email.com', '03 54 86 47 96', 'axelyo accompagne ses clients sur les sujets liés au développement du Capital Humain, Executive Search, Recrutement (Dirigeants, cadres, experts) conseil RH et Management de Transition..', '987452314', 20, '2022-07-01', 2);
INSERT INTO `externatic`.`entreprise` (`logo`, `nom_entreprise`, `adresse`, `code_postal`, `ville`, `pays`, `email`, `telephone`, `description`, `numero_siret`, `nombre_employes`, `dateInscription`, `domaine_id`) VALUES (NULL, 'InfoDev', '27 carrefour du marché', '47123', 'Avignon', 'France', 'infoDev.hub@gmail.com', '04 56 87 96 52', 'ACSEP nous accompagne depuis notre création en mars 2018. Nous devions rapidement démarrer les flux magasins et web de La Grande Récré (Ludendo), un acteur incontournable dans la distribution de jouets', '456321789', 100, '2022-12-07', 3);


-- --------------------------------------
-- Data for table `externatic`.`offre`
-- --------------------------------------

INSERT INTO `externatic`.`offre` (`contrat`, `condition_travail`, `avantages`, `poste`, `localisation`, `dateOffre`, `date_fin_offre`, `salaire`, `mission`, `profil_recherche`, `specialitees`, `entreprise_id`, `domaine_id`) VALUES ('CDI', 'Full remote', ' Carte swile / CSE /  locaux en centre ville de Nantes avec coporate appartment en cas de remote (2-3 jours / mois sur site attendu) contexte international  possibilités d évolution.', 'Développeur fullstack JS full ', 'Nantes', '07/12/2022', '08/03/2023', '45 000 - 60 000€', 'Vous rejoignez cette nouvelle feature team : En contexte Agile, vous serez impliqué dans le build (étude et développement) Node et react de la solution en contexte serverless Au sein de cette société innovante où le niveau tech est une architecture Serverless','Soft skills : Vous êtes proactif et autonome, vous souhaitez avoir un impact au sein de la structure Vous aimez travailler en équipe et partager Vous êtes dans l amélioration continue et aimez apprendre de vos réussites mais aussi de vos erreurs', 'NodeJS / Architecture Serverless / React / Git / GCP / Approche DDD etc.', 1, 2);

INSERT INTO `externatic`.`offre` (`contrat`, `condition_travail`, `avantages`, `poste`, `localisation`, `dateOffre`, `date_fin_offre`, `salaire`, `mission`, `profil_recherche`, `specialitees`, `entreprise_id`, `domaine_id`) VALUES ('CDI', 'Contrat : CDI, forfait jours Lieu de travail : Nantes, Lyon ou Paris avec 2 jours de télétravail par semaine) ; ou full remote + déplacements à prévoir 2-3 jours par mois', '???', '???', '???', '01/01/22', '05/01/22', '000€', 'c infrastructure (sécurité, performances …) Résoudre les incidents et en faire le suivi Supporter les équipes techniques, dev et data pour la mise en place de nouveaux projets ou fonctionnalités', 'Etre à l’aise avec les processus d’intégration et de déploiement continu Etre en phase avec ces traits culturels : curiosité et pragmatisme, autonomie et solidarité, passion et fiabilité Valoriser l’esprit d’équipe Avoir un bon relationnel Et un excellent sens de l’humour :)', 'Ruby On Rails, RabbitMQ, PostgreSQL, React, React Native', 2, 1);

INSERT INTO `externatic`.`offre` (`contrat`, `condition_travail`, `avantages`, `poste`, `localisation`, `dateOffre`, `date_fin_offre`, `salaire`, `mission`, `profil_recherche`, `specialitees`, `entreprise_id`, `domaine_id`) VALUES ('CDI', 'TT ou FULL REMOTE possible.', DEFAULT, 'Développeur senior PHP/React ', 'Bordeaux', '23/11/2022', '05/05/2023', ' 45-55K €/ an selon profil', 'Développer de nouvelles fonctionnalités sur les outils du produit Améliorer les processus techniques et les environnements de développement Prendre en main des problématiques métier plus que des technologies Améliorer les fonctionnalités existantes : correction de bugs, optimisation des temps de réponses, etc', 'Être à l écoute des utilisateurs quant aux problématiques rencontrées Et bien évidement rendre vos futurs utilisateurs heureux', 'Langages : PHP 8 et Javascript ECMAScript6 et plus, Symfony / API Platform, API Rest/Soap, POO, framework & Design patterns, Base de données : MySQL, ElasticSearch, Outils de développement collaboratif : Git & submodules, GitLab & registry, Gitflow, DevOps : Docker, CI/CD, Linux : SSH, bash & co, AWS est un plus non négligeable, car projet de migration des services vers le cloud.', 3, 3);


INSERT INTO `externatic`.`candidature` (`candidat_id`, `offre_id`) VALUES (1, 1);
INSERT INTO `externatic`.`candidature` (`candidat_id`, `offre_id`) VALUES (1, 2);
INSERT INTO `externatic`.`candidature` (`candidat_id`, `offre_id`) VALUES (2, 2);
INSERT INTO `externatic`.`candidature` (`candidat_id`, `offre_id`) VALUES (2, 3);
INSERT INTO `externatic`.`candidature` (`candidat_id`, `offre_id`) VALUES (3, 1);
INSERT INTO `externatic`.`candidature` (`candidat_id`, `offre_id`) VALUES (3, 3);