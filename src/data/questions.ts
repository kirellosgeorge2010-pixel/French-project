import { Question } from '../types/game';

export const QUESTIONS_POOL: Question[] = [
  // ==========================================
  // NIVEAU FACILE (Questions 1 à 5)
  // ==========================================
  {
    id: 1,
    question: "Quelle planète de notre système solaire est surnommée la « planète rouge » ?",
    answers: ["Vénus", "Mars", "Jupiter", "Mercure"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "Sciences",
    explanation: "Mars doit sa teinte rougeâtre caractéristique à l'abondance d'oxyde de fer (rouille) à sa surface."
  },
  {
    id: 2,
    question: "Quelle est la capitale officielle de l'Italie ?",
    answers: ["Milan", "Venise", "Rome", "Florence"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Géographie",
    explanation: "Rome, la « Ville Éternelle », est la capitale de l'Italie et abrite également l'enclave du Vatican."
  },
  {
    id: 3,
    question: "Qui a écrit le chef-d'œuvre littéraire « Les Misérables », mettant en scène Jean Valjean ?",
    answers: ["Victor Hugo", "Émile Zola", "Gustave Flaubert", "Alexandre Dumas"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "Littérature",
    explanation: "Victor Hugo a publié ce monument littéraire en 1862, dépeignant la misère sociale et la rédemption."
  },
  {
    id: 4,
    question: "Combien de côtés possède un hexagone régulier ?",
    answers: ["5 côtés", "8 côtés", "6 côtés", "7 côtés"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Sciences",
    explanation: "Un hexagone possède 6 côtés. La France métropolitaine est souvent surnommée « l'Hexagone » en raison de sa silhouette."
  },
  {
    id: 5,
    question: "Quel organe vital assure la circulation continue du sang dans l'organisme humain ?",
    answers: ["Les poumons", "Le cœur", "Le foie", "L'estomac"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "Sciences",
    explanation: "Le cœur est une pompe musculaire creuse qui bat environ 100 000 fois par jour pour oxygéner le corps."
  },
  {
    id: 6,
    question: "Dans quelle capitale européenne peut-on admirer la tour Eiffel et le musée du Louvre ?",
    answers: ["Bruxelles", "Genève", "Madrid", "Paris"],
    correctAnswer: 3,
    difficulty: "easy",
    category: "Culture générale",
    explanation: "La tour Eiffel a été érigée par Gustave Eiffel à Paris pour l'Exposition universelle de 1889."
  },
  {
    id: 7,
    question: "Quelle est la formule chimique universelle de la molécule d'eau pure ?",
    answers: ["H2O", "CO2", "NaCl", "O2"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "Sciences",
    explanation: "La molécule d'eau est composée de deux atomes d'hydrogène (H) reliés à un atome d'oxygène (O)."
  },
  {
    id: 8,
    question: "Quelle sélection nationale a remporté la Coupe du Monde de football en 1998 et 2018 ?",
    answers: ["Le Brésil", "L'Allemagne", "La France", "L'Argentine"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Sport",
    explanation: "Les Bleus ont décroché leur première étoile en 1998 à domicile et la seconde en 2018 en Russie."
  },
  {
    id: 9,
    question: "Quelle couleur primaire obtient-on en mélangeant du bleu cyan et du jaune ?",
    answers: ["Le violet", "Le vert", "L'orange", "Le marron"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "Arts",
    explanation: "En synthèse soustractive des pigments, le mélange du bleu et du jaune donne la couleur verte."
  },
  {
    id: 10,
    question: "Quel mammifère est le seul capable d'un vol battu soutenu dans les airs ?",
    answers: ["L'écureuil volant", "Le lémurien", "L'ornithorynque", "La chauve-souris"],
    correctAnswer: 3,
    difficulty: "easy",
    category: "Nature",
    explanation: "Les chiroptères (chauves-souris) sont les seuls mammifères dotés d'ailes permettant un véritable vol actif."
  },
  {
    id: 11,
    question: "Quelle est la monnaie fiduciaire commune adoptée par la France et ses voisins en 2002 ?",
    answers: ["L'euro", "Le franc", "La livre", "Le florin"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "Société",
    explanation: "L'euro a remplacé les billets et pièces en francs le 1er janvier 2002."
  },
  {
    id: 12,
    question: "Quel génie florentin de la Renaissance est le peintre de l'illustre « Joconde » ?",
    answers: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Botticelli"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "Arts",
    explanation: "Léonard de Vinci a peint le portrait de Mona Lisa au début du XVIe siècle, aujourd'hui exposé au musée du Louvre."
  },
  {
    id: 13,
    question: "Quel vaste océan borde les côtes occidentales de la France et sépare l'Europe de l'Amérique ?",
    answers: ["L'océan Indien", "L'océan Pacifique", "L'océan Atlantique", "L'océan Arctique"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Géographie",
    explanation: "L'océan Atlantique est le deuxième plus grand océan du monde après le Pacifique."
  },
  {
    id: 14,
    question: "Combien de cordes comporte habituellement une guitare acoustique classique ?",
    answers: ["6 cordes", "4 cordes", "8 cordes", "5 cordes"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "Arts",
    explanation: "La guitare classique possède traditionnellement 6 cordes accordées en Mi, La, Ré, Sol, Si, Mi."
  },
  {
    id: 15,
    question: "Quelle date commémore chaque année la Fête nationale de la République française ?",
    answers: ["Le 8 mai", "Le 11 novembre", "Le 14 juillet", "Le 1er mai"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Histoire",
    explanation: "Le 14 juillet célèbre à la fois la prise de la Bastille (1789) et la Fête de la Fédération (1790)."
  },

  // ==========================================
  // NIVEAU MOYEN (Questions 6 à 10)
  // ==========================================
  {
    id: 16,
    question: "En quelle année a débuté la Révolution française avec la prise de la Bastille ?",
    answers: ["1776", "1789", "1799", "1804"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "Histoire",
    explanation: "La prise de la Bastille le 14 juillet 1789 marque le point de départ symbolique de la Révolution française."
  },
  {
    id: 17,
    question: "Quel illustre scientifique français a développé le premier vaccin efficace contre la rage en 1885 ?",
    answers: ["Louis Pasteur", "René Laennec", "Antoine Lavoisier", "Claude Bernard"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "Sciences",
    explanation: "Louis Pasteur a inoculé avec succès son vaccin au jeune Joseph Meister, mordu par un chien enragé, en juillet 1885."
  },
  {
    id: 18,
    question: "Quel est le plus long fleuve dont le cours s'écoule intégralement sur le territoire métropolitain français ?",
    answers: ["La Seine", "Le Rhône", "La Garonne", "La Loire"],
    correctAnswer: 3,
    difficulty: "medium",
    category: "Géographie",
    explanation: "Avec une longueur de 1 006 kilomètres, la Loire est le plus long fleuve sauvage de France."
  },
  {
    id: 19,
    question: "Quel maître néerlandais a peint le vertigineux chef-d'œuvre « La Nuit étoilée » en 1889 ?",
    answers: ["Rembrandt", "Johannes Vermeer", "Vincent van Gogh", "Piet Mondrian"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "Arts",
    explanation: "Vincent van Gogh a réalisé cette toile tourbillonnante depuis sa chambre du monastère Saint-Paul-de-Mausole à Saint-Rémy-de-Provence."
  },
  {
    id: 20,
    question: "Quel élément métallique possède la particularité d'être à l'état liquide sous conditions normales de température ?",
    answers: ["Le plomb", "Le mercure", "L'argent", "L'étain"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "Sciences",
    explanation: "Le mercure (symbole Hg) a un point de fusion exceptionnellement bas de -38,83 °C."
  },
  {
    id: 21,
    question: "Quelle est la vitesse approximative de la lumière se propageant dans le vide absolu ?",
    answers: ["300 000 km/s", "150 000 km/s", "3 000 km/s", "1 080 000 km/s"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "Sciences",
    explanation: "La constante universelle c vaut exactement 299 792 458 mètres par seconde, soit environ 300 000 km/s."
  },
  {
    id: 22,
    question: "Quel cosmonaute est entré dans l'Histoire le 12 avril 1961 comme le premier être humain dans l'espace ?",
    answers: ["Neil Armstrong", "Youri Gagarine", "Buzz Aldrin", "Alexeï Leonov"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "Histoire",
    explanation: "Youri Gagarine a accompli une orbite complète autour de la Terre à bord de la capsule Vostok 1."
  },
  {
    id: 23,
    question: "Lequel de ces pays d'Europe du Nord n'est PAS membre de l'Union européenne ?",
    answers: ["La Suède", "Le Danemark", "La Finlande", "La Norvège"],
    correctAnswer: 3,
    difficulty: "medium",
    category: "Société",
    explanation: "Le peuple norvégien a rejeté par référendum l'adhésion à l'Union européenne en 1972 et en 1994."
  },
  {
    id: 24,
    question: "Quel compositeur vénitien de l'époque baroque est le créateur des célèbres concertos « Les Quatre Saisons » ?",
    answers: ["Johann Sebastian Bach", "Georg Friedrich Haendel", "Antonio Vivaldi", "Arcangelo Corelli"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "Arts",
    explanation: "Antonio Vivaldi a composé cette suite de quatre concertos pour violon publiée en 1725."
  },
  {
    id: 25,
    question: "Quel gaz constitue la majeure partie (environ 78 %) de l'air que nous respirons dans l'atmosphère ?",
    answers: ["Le diazote", "Le dioxygène", "L'argon", "Le dioxyde de carbone"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "Sciences",
    explanation: "L'air sec se compose d'environ 78 % de diazote (N2), 21 % de dioxygène (O2) et 1 % d'autres gaz."
  },
  {
    id: 26,
    question: "En quelle année l'avion supersonique franco-britannique Concorde a-t-il inauguré ses vols commerciaux réguliers ?",
    answers: ["1969", "1976", "1981", "1986"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "Technologie",
    explanation: "Bien qu'ayant volé pour la première fois en 1969, le Concorde a débuté son service commercial officiel le 21 janvier 1976."
  },
  {
    id: 27,
    question: "Quelle prestigieuse civilisation précolombienne a érigé la cité sacrée du Machu Picchu au sommet des Andes ?",
    answers: ["Les Mayas", "Les Aztèques", "Les Incas", "Les Toltèques"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "Histoire",
    explanation: "Le Machu Picchu a été édifié au XVe siècle sous le règne de l'empereur inca Pachacútec."
  },
  {
    id: 28,
    question: "Quel philosophe français du XVIIe siècle a formulé le célèbre principe « Je pense, donc je suis » ?",
    answers: ["Jean-Jacques Rousseau", "Voltaire", "Blaise Pascal", "René Descartes"],
    correctAnswer: 3,
    difficulty: "medium",
    category: "Littérature",
    explanation: "René Descartes a énoncé ce fondement de la certitude dans son « Discours de la méthode » en 1637."
  },
  {
    id: 29,
    question: "Quel fleuve légendaire et nourricier traverse le territoire égyptien avant de former un delta en Méditerranée ?",
    answers: ["Le Nil", "L'Euphrate", "Le Tigre", "Le Jourdain"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "Géographie",
    explanation: "Le Nil est l'artère vitale historique de l'Égypte antique et l'un des deux plus longs fleuves de la planète."
  },
  {
    id: 30,
    question: "Quel athlète jamaïcain a établi le record du monde légendaire du 100 mètres en 9 secondes et 58 centièmes à Berlin ?",
    answers: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Yohan Blake"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "Sport",
    explanation: "Usain Bolt a signé ce record planétaire stratosphérique lors des Championnats du monde de Berlin en août 2009."
  },

  // ==========================================
  // NIVEAU DIFFICILE (Questions 11 à 15)
  // ==========================================
  {
    id: 31,
    question: "En quelle année les frères Orville et Wilbur Wright ont-ils réalisé à Kitty Hawk le premier vol motorisé contrôlé de l'Histoire ?",
    answers: ["1898", "1901", "1903", "1909"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "Technologie",
    explanation: "Le 17 décembre 1903, le Wright Flyer a décollé sur les dunes de Caroline du Nord, ouvrant l'ère de l'aviation motorisée."
  },
  {
    id: 32,
    question: "Hormis le Soleil, quelle est l'étoile la plus proche de notre système planétaire, distante d'environ 4,24 années-lumière ?",
    answers: ["Proxima du Centaure", "Sirius A", "Bételgeuse", "Véga"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "Sciences",
    explanation: "Proxima Centauri est une naine rouge située dans la constellation du Centaure, membre du système triple Alpha Centauri."
  },
  {
    id: 33,
    question: "Quel jeune chef arverne a infligé une défaite cuisante à Jules César lors du siège de Gergovie en 52 avant J.-C. ?",
    answers: ["Ambiorix", "Dumnorix", "Brennus", "Vercingétorix"],
    correctAnswer: 3,
    difficulty: "hard",
    category: "Histoire",
    explanation: "Vercingétorix a fédéré les tribus gauloises et repoussé les légions romaines à Gergovie avant d'être encerclé à Alésia."
  },
  {
    id: 34,
    question: "Quel traité historique signé en février 1992 aux Pays-Bas a créé l'Union européenne et posé les jalons de la monnaie unique ?",
    answers: ["Le traité de Rome", "Le traité de Maastricht", "Le traité de Lisbonne", "Le traité d'Amsterdam"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "Société",
    explanation: "Le traité sur l'Union européenne a été paraphé à Maastricht par les douze États membres de la Communauté européenne."
  },
  {
    id: 35,
    question: "Dans quel opéra magistral composé par Georges Bizet la protagoniste interprète-t-elle l'air « L'amour est un oiseau rebelle » ?",
    answers: ["La Traviata", "Les Pêcheurs de perles", "Carmen", "Faust"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "Arts",
    explanation: "Créé à l'Opéra-Comique de Paris en 1875, Carmen est devenu l'un des opéras français les plus joués au monde."
  },
  {
    id: 36,
    question: "Combien d'États fédérés ou cantons composent l'organisation politique de la Confédération suisse moderne ?",
    answers: ["26 cantons", "20 cantons", "32 cantons", "22 cantons"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "Géographie",
    explanation: "La Suisse compte 26 cantons (dont 6 historiquement désignés comme demi-cantons), le dernier admis étant le Jura en 1979."
  },
  {
    id: 37,
    question: "Quel roman d'anticipation dystopique d'Aldous Huxley dépeint une société ultra-conditionnée consommant du « soma » ?",
    answers: ["1984", "Le Meilleur des mondes", "Fahrenheit 451", "Ravage"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "Littérature",
    explanation: "« Brave New World » (Le Meilleur des mondes), publié en 1932, imagine un monde déshumanisé fondé sur la reproduction artificielle et l'eugénisme."
  },
  {
    id: 38,
    question: "Quel fut le nom du tout premier satellite artificiel placé en orbite par l'Union soviétique en octobre 1957 ?",
    answers: ["Vostok 1", "Explorer 1", "Spoutnik 1", "Soyouz 1"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "Technologie",
    explanation: "Spoutnik 1 a émis son fameux « bip-bip » radio depuis l'orbite terrestre à partir du 4 octobre 1957, inaugurant la course à l'espace."
  },
  {
    id: 39,
    question: "Quel métal précieux d'une densité exceptionnelle porte le numéro atomique 79 et le symbole « Au » ?",
    answers: ["L'or", "Le platine", "L'uranium", "Le tungstène"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "Sciences",
    explanation: "L'or (du latin aurum) possède le numéro atomique 79. C'est un métal noble inoxydable et particulièrement malléable."
  },
  {
    id: 40,
    question: "Quel architecte sino-américain mondialement réputé est l'auteur de la célèbre Pyramide en verre du palais du Louvre ?",
    answers: ["Jean Nouvel", "Renzo Piano", "Frank Gehry", "Ieoh Ming Pei"],
    correctAnswer: 3,
    difficulty: "hard",
    category: "Arts",
    explanation: "Ieoh Ming Pei a conçu cette pyramide de verre et d'acier inaugurée par François Mitterrand en mars 1989."
  },
  {
    id: 41,
    question: "Quel sommet volcanique isolé de Tanzanie constitue le toit de l'Afrique avec ses 5 895 mètres d'altitude ?",
    answers: ["Le mont Kenya", "Le mont Kilimandjaro", "Le mont Stanley", "Le Drakensberg"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "Géographie",
    explanation: "Le Kilimandjaro est couronné par les neiges éternelles du pic Uhuru, dominant les savanes d'Afrique de l'Est."
  },
  {
    id: 42,
    question: "À quel aède mythique de la Grèce antique la tradition attribue-t-elle la composition de « L'Iliade » et de « L'Odyssée » ?",
    answers: ["Homère", "Hésiode", "Sophocle", "Euripide"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "Littérature",
    explanation: "Homère aurait composé ces deux poèmes épiques fondateurs de la civilisation occidentale au VIIIe siècle av. J.-C."
  },
  {
    id: 43,
    question: "En quelle année l'esclavage a-t-il été définitivement aboli dans toutes les colonies françaises grâce au décret de Victor Schœlcher ?",
    answers: ["1794", "1802", "1848", "1870"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "Histoire",
    explanation: "Le décret d'abolition définitive de l'esclavage a été promulgué le 27 avril 1848 sous la Deuxième République."
  },
  {
    id: 44,
    question: "Quelle particule élémentaire prédite en 1964 et observée au CERN en 2012 explique la masse des autres particules ?",
    answers: ["Le neutrino", "Le boson de Higgs", "Le gluon", "Le positron"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "Sciences",
    explanation: "Le boson de Higgs est le quantum du champ de Higgs qui confère leur inertie et leur masse aux particules élémentaires."
  },
  {
    id: 45,
    question: "Quel ouvrage d'art stratégique inauguré en novembre 1869 relie la mer Méditerranée au golfe de Suez et à la mer Rouge ?",
    answers: ["Le canal de Corinthe", "Le canal de Panama", "Le canal de Kiel", "Le canal de Suez"],
    correctAnswer: 3,
    difficulty: "hard",
    category: "Histoire",
    explanation: "Construit sous la direction de Ferdinand de Lesseps, le canal de Suez a raccourci de façon spectaculaire la route maritime entre l'Europe et l'Asie."
  }
];

/**
 * Returns a randomized set of 15 questions for a complete game run:
 * - 5 easy questions (Levels 1 to 5)
 * - 5 medium questions (Levels 6 to 10)
 * - 5 hard questions (Levels 11 to 15)
 */
export function generateGameSet(): Question[] {
  const easy = QUESTIONS_POOL.filter(q => q.difficulty === 'easy');
  const medium = QUESTIONS_POOL.filter(q => q.difficulty === 'medium');
  const hard = QUESTIONS_POOL.filter(q => q.difficulty === 'hard');

  const shuffle = <T>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const selectedEasy = shuffle(easy).slice(0, 5);
  const selectedMedium = shuffle(medium).slice(0, 5);
  const selectedHard = shuffle(hard).slice(0, 5);

  return [...selectedEasy, ...selectedMedium, ...selectedHard];
}

/**
 * Provides a fresh replacement question of matching difficulty
 * that is not currently in the player's active set.
 */
export function getReplacementQuestion(currentQuestion: Question, currentSetIds: number[]): Question {
  const candidates = QUESTIONS_POOL.filter(
    q => q.difficulty === currentQuestion.difficulty && !currentSetIds.includes(q.id)
  );

  if (candidates.length === 0) {
    // Fallback: any question with same difficulty other than current
    const fallback = QUESTIONS_POOL.filter(
      q => q.difficulty === currentQuestion.difficulty && q.id !== currentQuestion.id
    );
    return fallback[Math.floor(Math.random() * fallback.length)] || currentQuestion;
  }

  return candidates[Math.floor(Math.random() * candidates.length)];
}
