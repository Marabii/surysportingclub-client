const teams = [
    {
        name: 'U7',
        roles: [
          { title: 'Responsable Ecole de Foot à 5 et Administratif', name: 'Emma BERARD' },
          { title: 'Educateur', name: 'Lukas CASTRO, en service civique' },
          { title: 'Entraîneurs en séances', name: 'Robert GOUTIERFARDE, Jean-François ALLANDRIEU, Michel GOUJON' },
          { title: 'Dirigeants en plateaux', name: 'Ludovic CARPINTEIRO, Théry LONG, Kévin CHEVEL, Vincent SUCHAIL' },
        ],
        effectif: '22 licenciés, dont 2 filles, répartis en 7 U6 et 15 U7',
        nombreEquipes: '3',
        anneeNaissance: '2017-2018',
        seances: 'les mercredis après-midi de 14h à 15h15',
        matches: 'plateaux les samedis de 14h à 15h',
        motDesCoaches: `Les équipes U6-U7 du SSC sont pleines d'énergie et de talent. C'est un plaisir de les voir grandir et s'amuser sur le terrain. Les entraîneurs sont passionnés et dévoués à rendre chaque séance d'entraînement amusante et enrichissante pour les joueurs. Ils font un excellent travail pour enseigner les techniques, développer les compétences et encourager l'esprit d'équipe.`,
        clubName: 'Sury Sporting Club',
        // Add your social media links here
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com', iconClassName: 'fab fa-instagram' },
        ],
      }, {
        name: 'U9',
        roles: [
          { title: 'Responsable Ecole de Foot à 5 et Administratif', name: 'Emma BERARD' },
          { title: 'Educateurs', name: 'Lukas CASTRO et Emma BERARD' },
          { title: 'Entraîneurs en séances', name: 'Robert GOUTTEFARDE, Jean-François ALLANDRIEU, Michel GOUJON' },
          { title: 'Dirigeants en plateaux', name: 'Cédric VEYRIER, Fabrice BROSSIER, Damien RIVAL' },
        ],
        effectif: '23 licenciés',
        nombreEquipes: '3',
        anneeNaissance: '2015-2016',
        seances: 'les mercredis après-midi de 14h à 15h30 et les vendredis de 18h à 19h (en période estivale)',
        matches: 'plateaux les samedis matins',
        motDesCoaches: `Effectif assez fourni, afin de faire jouer chaque week-end 3 équipes. 
      
      Une équipe composée de U9 principalement, en D1, et deux équipes composées de U8/U9, en D2.
      
      Un groupe globalement à l'écoute avec une forte assiduité en match le samedi.
      
      Chaque enfant progresse à son niveau, tout en prenant beaucoup de plaisir à évoluer avec les copains/ Nous insistons beaucoup sur les notions d'équipe et de collectif. Un noyau de joueurs en première année de foot, jusqu'en 4ème pour certains. Un groupe de niveau assez disparate mais avec beaucoup d'envie et d'énergie 😊!`,
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      },
      {
        name: 'U11',
        roles: [
          { title: 'Responsable Ecole de Foot à 8', name: 'Franck SAVELON' },
          { title: 'Responsable administratif', name: 'Nicolas BERAUD' },
          { title: 'Educateurs', name: 'Grégory BERRY et Nicolas BERAUD' }
        ],
        effectif: '28 licenciés',
        nombreEquipes: '2',
        anneeNaissance: '2013-2014',
        seances: 'les lundis de 18h à 19h30 et les mercredis après-midi de 17h30 à 19h',
        matches: 'plateaux les samedis matins',
        motDesCoaches: `Beaucoup de joueurs vont monter en U12 pour la saison 2024-2025. Les deux équipes jouent en D3.
      
      Lors de nos deux séances d’entraînement par semaine, nous essayons d’inculquer les valeurs du sport, la discipline et l’amour du jeu, l’esprit de camaraderie.
      
      Si vous souhaitez nous rejoindre l’an prochain, c’est avec plaisir. Une période d’essai sera proposée en juin pour les futurs nouveaux joueurs !`,
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      },
      {
        name: 'U13',
        roles: [
          { title: 'Responsable Ecole de Foot à 8 et administratif', name: 'Franck SAVELON' },
          { title: 'Entraîneurs', name: 'Lukas CASTRO, Lionel MONTAGNON et Franck SAVELON' }
        ],
        effectif: '22 licenciés, répartis en 14 U12 et 8 U13',
        nombreEquipes: '2',
        anneeNaissance: '2011-2012',
        seances: 'les lundis de 18h à 19h30 et les mercredis après-midi de 15h45 à 17h15',
        matches: 'les samedis après-midi',
        motDesCoaches: `Nous proposons des séances d’entraînement intéressantes deux fois par semaine. Nous essayons d’inculquer la rigueur, les valeurs du club, la discipline et l’amour du jeu ainsi que l’esprit de camaraderie.
      
      Si vous souhaitez venir nous rejoindre l’an prochain, c’est avec plaisir. En juin, une période d’essai sera proposée pour les nouveaux joueurs.`,
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      },
      {
        name: 'Sénior',
        roles: [
          { title: 'Responsable foot compétition et administratif', name: 'Damien MARTIN' },
          { title: 'Educateurs', name: 'Patrice MATHAUD, Patrick SOUVIGNET, Serge GUIOTTO, Olivier CROS, Hervé NICAISE, Damien MARTIN' }
        ],
        effectif: '32 licenciés',
        nombreEquipes: '2',
        anneeNaissance: '2005 et avant',
        seances: 'les mardis de 19h30 à 21h et les vendredis de 19h30 à 21h',
        matches: 'les Dimanches après-midi',
        motDesCoaches: `Un nouveau projet cette saison au sein du club avec notre groupe Sénior masculin. Nous repartons avec un nouvel effectif composé essentiellement de l'ancien groupe U18 et quelques anciens joueurs du club, qui sont revenus. Nous avons deux équipes, une en D4 et l'autre en D5, engagées en Championnat, ce qui nous permet de faire évoluer tous les licenciés. Les deux équipes sont en milieu de classement.`,
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      },
      {
        name: 'Plus_40',
        roles: [
          { title: 'Responsable administratif et éducateur', name: 'Jean-François ALLANDRIEU' }
        ],
        effectif: 'licenciés', // The exact number is missing, so I left it as 'licenciés'.
        nombreEquipes: '1',
        anneeNaissance: '', // The birth year of players is not provided in the image.
        seances: 'Les mercredis, de 19h30 à 21h',
        matches: 'les Vendredis soirs',
        motDesCoaches: '', // The coaches' message is not provided in the image.
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      },
      {
        name: 'Critérium',
        roles: [
          { title: 'Responsable foot compétition', name: 'Damien MARTIN' },
          { title: 'Responsable Administratif', name: 'Christophe SPATAZZA' },
          { title: 'Educateurs', name: 'Anthony ALLANDRIEU, Musa TEPEYURT et Christophe SPATAZZA' }
        ],
        effectif: '28 licenciés',
        nombreEquipes: '1',
        anneeNaissance: 'avant 2000',
        seances: 'les Mercredis soirs, de 19h30 à 21h',
        matches: 'les Samedis en fin d’après-midi',
        motDesCoaches: `Nous accueillons tous les joueurs ayant la majorité, mais nous privilégions quand même les joueurs ayant au moins 25 ans, pour ne pas pénaliser les seniors.
      Nous sommes un groupe accueillant et très convivial, tout en gardant l'esprit sportif et compétitif.
      Nous sommes actuellement en D3 et nous avons l'ambition d'évoluer en division supérieure.
      Les entraînements se terminent souvent par moment de convivialité.`,
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      },
      {
        name: 'U9 Féminine',
        roles: [
          { title: 'Responsable Administratif et Section Féminine', name: 'Sébastien Girard' },
          { title: 'Educatrices', name: 'Emma BERARD et Claire CUTAYAR' }
        ],
        effectif: '6 licenciées',
        nombreEquipes: '1',
        anneeNaissance: 'entre 2016 et 2017',
        seances: 'mardis soir de 18h à 19h15 (avec U11 Féminine) et vendredis de 18h à 19h (avec U9 G, pendant la période estivale)',
        matches: 'plateaux les samedis matins, jeu à 5',
        motDesEducatrices: `Le groupe des U9F, qui commencent à jouer au foot, partent de zéro, étaient un peu maladroites au début. Mais avec chaque entraînement, elles s’améliorent de plus en plus. Chaque match est une nouvelle occasion de montrer leurs progrès et leur détermination. C'est une saison où elles passent de débutantes à joueuses confiantes et compétentes, prêtes à relever de nouveaux défis sur le terrain.`,
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      },
      {
        name: 'U11 Féminine',
        roles: [
          { title: 'Responsable Section Féminine et Administratif', name: 'Sébastien GIRARD' },
          { title: 'Educateurs', name: 'Emma BERARD et Thomas POL' }
        ],
        effectif: '17 licenciées',
        nombreEquipes: '1',
        anneeNaissance: '2013-2014',
        seances: 'les Mardis et Jeudis de 18h à 19h15',
        matches: 'plateaux les samedis matins',
        motDesCoaches: `Un groupe étoffé avec beaucoup de filles qui ont débuté le foot cette année. Une ambiance sympathique aux entraînements et en match avec des filles motivées et à l’écoute.`,
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      },
      {
        name: 'U13 Féminine',
        roles: [
          { title: 'Responsable Section Féminine et Administratif', name: 'Sébastien GIRARD' },
          { title: 'Educateurs', name: 'Nicolas TIXIER et Emma BERARD' }
        ],
        effectif: '15 licenciées',
        nombreEquipes: '1',
        anneeNaissance: '2009-2010',
        seances: 'les Mercredis de 15h45 à 17h15 et les Jeudis de 18h à 19h15',
        matches: 'matches les samedis après-midi à 14h',
        motDesCoaches: `Un groupe très plaisant à entraîner avec une très bonne mentalité et un bon état d’esprit d’équipe sur et en dehors du terrain. Les joueuses sont assidues à l’entraînement et aux matchs, les parents sont nombreux à nous encourager le samedi.
      Deux nouvelles joueuses ont intégré l’équipe en milieu de saison, le développement de la section féminine continue et progresse d’année en année.
      Tournois et manifestations sont à venir prochainement.
      La saison est très encourageante pour la suite avec de très gros progrès sur le plan tactique et technique.
      Félicitations à elles, encore merci aux parents de me faire confiance dans la gestion de cette équipe.`,
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      },
      {
        name: 'U15 Féminine',
        roles: [
          { title: 'Responsable Section Féminine et Administratif', name: 'Sébastien GIRARD' },
          { title: 'Educateurs', name: 'Emma BERARD' }
        ],
        effectif: '17 licenciées',
        nombreEquipes: '1',
        anneeNaissance: '2009-2010',
        seances: 'les Lundis et Jeudis de 19h à 20h30',
        matches: 'matchs les Samedis après-midi',
        motDesCoaches: `Le groupe des U15F est plein de passion et d’enthousiasme.
      Les filles s’entraînent avec détermination, perfectionnant leur jeu et leur technique. Chaque joueuse apporte sa propre énergie et son talent, créant une ambiance chaleureuse et positive sur le terrain.
      Chaque match est une occasion de montrer leur talent et leur esprit d’équipe. Avec un beau jeu collectif, elles évoluent ensemble depuis maintenant 2 ans, surmontant les défaites et célébrant les victoires. C’est une équipe solidaire et la progression personnelle sont au cœur de leur succès.`,
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      },
      {
        name: 'Sénior Féminine',
        roles: [
          { title: 'Responsable Section Féminine et Administratif', name: 'Sébastien GIRARD' },
          { title: 'Educateurs', name: 'Amandine BROSSIER et Frédéric ATLAN' }
        ],
        effectif: '18 licenciées',
        nombreEquipes: '1',
        anneeNaissance: '2006 et avant',
        seances: 'les Lundis et Jeudis de 19h30 à 21h',
        matches: 'matchs les Samedis après-midi',
        motDesCoaches: `1ère année en compétition pour la section sénior féminine : enthousiasme, envie, détermination et volonté sont les maîtres mots de notre saison, avec pour objectif d’apporter de la continuité pour les générations futures au sein du Club.`,
        clubName: 'Sury Sporting Club',
        socialMedia: [
          { name: 'Facebook', url: 'https://www.facebook.com/SurySportingClub', iconClassName: 'fab fa-facebook-f' },
          { name: 'Instagram', url: 'https://www.instagram.com/SurySportingClub', iconClassName: 'fab fa-instagram' },
        ],
      }   
]

export default teams