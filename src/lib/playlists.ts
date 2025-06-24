import { Playlist } from "../types/game";

export const allPlaylists: Record<string, { title: string; artist: string }[]> = {
    'musique-aujourdhui': [
        { title: 'Flowers', artist: 'Miley Cyrus' },
        { title: 'As It Was', artist: 'Harry Styles' },
        { title: 'Calm Down', artist: 'Rema & Selena Gomez' },
        { title: 'Blinding Lights', artist: 'The Weeknd' },
        { title: 'Bad Habits', artist: 'Ed Sheeran' },
        { title: 'Anti-Hero', artist: 'Taylor Swift' },
        { title: 'Heat Waves', artist: 'Glass Animals' },
        { title: 'Shivers', artist: 'Ed Sheeran' },
        { title: 'STAY', artist: 'The Kid LAROI & Justin Bieber' },
        { title: 'Leave The Door Open', artist: 'Silk Sonic' },
        { title: 'Levitating', artist: 'Dua Lipa' },
        { title: 'Watermelon Sugar', artist: 'Harry Styles' },
        { title: 'Good 4 U', artist: 'Olivia Rodrigo' },
        { title: 'Drivers License', artist: 'Olivia Rodrigo' },
        { title: 'Save Your Tears', artist: 'The Weeknd' },
        { title: 'Peaches', artist: 'Justin Bieber' },
        { title: 'Montero (Call Me By Your Name)', artist: 'Lil Nas X' },
        { title: 'Happier Than Ever', artist: 'Billie Eilish' },
        { title: 'Doja', artist: 'Central Cee' },
        { title: 'Bam Bam', artist: 'Camila Cabello ft. Ed Sheeran' },
        { title: 'About Damn Time', artist: 'Lizzo' },
        { title: 'Break My Soul', artist: 'Beyoncé' },
        { title: 'Unholy', artist: 'Sam Smith & Kim Petras' },
        { title: 'Taki Taki', artist: 'DJ Snake ft. Selena Gomez, Ozuna, Cardi B' },
        { title: 'Mood', artist: '24kGoldn ft. Iann Dior' },
        { title: 'Goosebumps', artist: 'Travis Scott' },
        { title: 'Rockstar', artist: 'DaBaby ft. Roddy Ricch' },
        { title: 'Old Town Road', artist: 'Lil Nas X ft. Billy Ray Cyrus' },
        { title: 'Circles', artist: 'Post Malone' },
        { title: 'The Box', artist: 'Roddy Ricch' },
        { title: 'Savage Remix', artist: 'Megan Thee Stallion ft. Beyoncé' },
        { title: 'WAP', artist: 'Cardi B ft. Megan Thee Stallion' },
        { title: 'Demeures', artist: 'Orelsan' },
        { title: 'La Quête', artist: 'Orelsan' },
        { title: 'Balance ton quoi', artist: 'Angèle' },
        { title: 'Tu la connais', artist: 'PNL' },
        { title: 'Djomb', artist: 'Bosh' },
        { title: 'Validée', artist: 'Dadju' },
        { title: 'Jolie Nana', artist: 'Aya Nakamura' },
        { title: 'Tout Oublier', artist: 'Angèle & Roméo Elvis' },
        { title: 'Au DD', artist: 'PNL' },
        { title: 'Réseaux', artist: 'Niska' },
        { title: 'La Goffa Lolita', artist: 'Vincent Niclo' },
        { title: 'Ciao Bella', artist: 'Maître Gims' },
        { title: 'Mafiosa', artist: 'Lartiste ft. Caroliina' },
        { title: 'Ramenez la coupe à la maison', artist: 'Vegedream' },
        { title: 'Copines', artist: 'Aya Nakamura' },
        { title: 'Du swagg', artist: 'Gradur' },
        { title: 'Tchoin', artist: 'Kaaris' },
        { title: 'Le temps', artist: 'Tayc' },
        { title: 'Petrouchka', artist: 'Soso Maness ft. PLK' },
        { title: 'Fade Up', artist: 'Zeg P ft. Hamza & SCH' },
        { title: 'Tout va bien', artist: 'Orelsan ft. Ninho' },
        { title: 'California', artist: 'Niska' },
        { title: 'Mode Avion', artist: 'Nekfeu' },
        { title: 'Lettre à une femme', artist: 'Ninho' },
        { title: 'Jolie Garce', artist: 'Shay' },
        { title: 'Bandz', artist: 'Heuss l\'Enfoiré' },
        { title: 'Dans la ville', artist: 'SCH' },
        { title: 'Ça ira', artist: 'Vitaa & Slimane' },
        { title: 'Avant Toi', artist: 'Vitaa & Slimane' },
        { title: 'Mélodie', artist: 'Dadju' },
        { title: 'Bella Ciao', artist: 'Naestro, Maître Gims, Vitaa, Dadju, Slimane' },
        { title: 'Sapés comme jamais', artist: 'Maître Gims' },
        { title: 'L\'Algérino', artist: 'Banderas' },
        { title: 'Reste', artist: 'Maître Gims ft. Sting' },
        { title: 'Paname', artist: 'Bigflo & Oli' },
        { title: 'Dommage', artist: 'Bigflo & Oli' },
        { title: 'Brevet', artist: 'Vald' },
        { title: 'Macarena', artist: 'Damso' },
        { title: 'Mwaka Moon', artist: 'Kalash ft. Damso' },
        { title: 'Dans mon délire', artist: 'Lorenzo' },
        { title: 'Fais le mouv', artist: 'PLK' },
        { title: 'Mise à jour', artist: 'PNL' },
        { title: '911', artist: 'Damso' },
        { title: 'Khapta', artist: 'Heuss l\'Enfoiré ft. Sofiane' },
        { title: 'La Kiffance', artist: 'Naps' },
        { title: 'Pochon Bleu', artist: 'Naps' },
        { title: 'Sale Pute', artist: 'Orelsan' },
        { title: 'Basique', artist: 'Orelsan' },
        { title: 'Jour meilleur', artist: 'Lomepal' },
        { title: 'Flip', artist: 'Lomepal' },
        { title: 'Beau-père', artist: 'Damso' },
        { title: 'Ipséité', artist: 'Damso' },
        { title: 'Feu de bois', artist: 'Damso' },
        { title: 'Tout le monde', artist: 'Bigflo & Oli' },
        { title: 'C\'est pas grave', artist: 'Jul' },
        { title: 'La zone', artist: 'Jul' },
        { title: 'Tiki', artist: 'Lorenzo' },
        { title: 'Les lacs du Connemara', artist: 'Michel Sardou' },
        { title: 'Alors on danse', artist: 'Stromae' },
        { title: 'Papaoutai', artist: 'Stromae' },
        { title: 'Formidable', artist: 'Stromae' },
        { title: 'Tous les mêmes', artist: 'Stromae' },
        { title: 'Ta Fête', artist: 'Stromae' },
        { title: 'Sanctuary', artist: 'Joji' },
        { title: 'Glimpse of Us', artist: 'Joji' },
        { title: 'Circles', artist: 'Post Malone' },
        { title: 'Better Now', artist: 'Post Malone' },
        { title: 'Sunflower', artist: 'Post Malone & Swae Lee' },
        { title: 'Bad Guy', artist: 'Billie Eilish' },
        { title: 'Therefore I Am', artist: 'Billie Eilish' },
        { title: 'Ocean Eyes', artist: 'Billie Eilish' },
        { title: 'lovely', artist: 'Billie Eilish & Khalid' },
        { title: 'Sicko Mode', artist: 'Travis Scott' },
        { title: 'Highest in the Room', artist: 'Travis Scott' },
        { title: 'The Scotts', artist: 'Travis Scott & Kid Cudi' },
        { title: 'SICKO MODE', artist: 'Travis Scott' },
        { title: 'Demeures', artist: 'Orelsan' },
    ],
    'annee-2000': [
        { title: 'Alors on danse', artist: 'Stromae' }, // 2010 but often associated with late 2000s
        { title: 'Désenchantée', artist: 'Mylène Farmer' }, // Remake 2002
        { title: 'Confessions Nocturnes', artist: 'Diam\'s & Vitaa' },
        { title: 'J\'envoie valser', artist: 'Zazie' }, // 1995, but very popular in 2000s
        { title: 'Femme Like U', artist: 'K.Maro' },
        { title: 'Le Chemin', artist: 'Kyo' },
        { title: 'Dans ma bulle', artist: 'Diam\'s' },
        { title: 'J\'traîne des pieds', artist: 'Olivia Ruiz' },
        { title: 'Ma Philosophie', artist: 'Amel Bent' },
        { title: 'J\'aimerais Tellement', artist: 'Jena Lee' },
        { title: 'Ca M\'énerve', artist: 'Helmut Fritz' },
        { title: 'Qui de Nous Deux', artist: 'Matthieu Chedid' },
        { title: 'Tomber la chemise', artist: 'Zebda' }, // 1999, popular 2000s
        { title: 'La Banane', artist: 'Philippe Katerine' },
        { title: 'Osez Joséphine', artist: 'Alain Bashung' }, // 1991, but often played in 2000s retro
        { title: 'Manhattan-Kaboul', artist: 'Renaud & Axelle Red' },
        { title: 'Chanter', artist: 'Florent Pagny' },
        { title: 'Je sais pas', artist: 'Céline Dion' }, // 1995, but very popular in 2000s
        { title: 'Crazy in Love', artist: 'Beyoncé ft. Jay-Z' },
        { title: 'Hey Ya!', artist: 'OutKast' },
        { title: 'Lose Yourself', artist: 'Eminem' },
        { title: 'In Da Club', artist: '50 Cent' },
        { title: 'Hips Don\'t Lie', artist: 'Shakira ft. Wyclef Jean' },
        { title: 'Umbrella', artist: 'Rihanna ft. Jay-Z' },
        { title: 'Since U Been Gone', artist: 'Kelly Clarkson' },
        { title: 'Rehab', artist: 'Amy Winehouse' },
        { title: 'Rolling in the Deep', artist: 'Adele' }, // 2010 but very early 2010s, culturally 2000s
        { title: 'Mr. Brightside', artist: 'The Killers' },
        { title: 'Seven Nation Army', artist: 'The White Stripes' },
        { title: 'Toxic', artist: 'Britney Spears' },
        { title: 'Sweet Dreams My LA Ex', artist: 'Rachel Stevens' },
        { title: 'Where Is The Love?', artist: 'The Black Eyed Peas' },
        { title: 'Beautiful', artist: 'Christina Aguilera' },
        { title: 'Get Rich or Die Tryin\'', artist: '50 Cent' },
        { title: 'Ignition (Remix)', artist: 'R. Kelly' },
        { title: 'Crazy', artist: 'Gnarls Barkley' },
        { title: 'Yeah!', artist: 'Usher ft. Lil Jon, Ludacris' },
        { title: 'Gold Digger', artist: 'Kanye West ft. Jamie Foxx' },
        { title: 'Hot in Herre', artist: 'Nelly' },
        { title: 'Lose My Breath', artist: 'Destiny\'s Child' },
        { title: 'Cry Me A River', artist: 'Justin Timberlake' },
        { title: 'Complicated', artist: 'Avril Lavigne' },
        { title: 'Sk8er Boi', artist: 'Avril Lavigne' },
        { title: 'The Sweet Escape', artist: 'Gwen Stefani ft. Akon' },
        { title: 'Single Ladies (Put a Ring on It)', artist: 'Beyoncé' },
        { title: 'I Kissed A Girl', artist: 'Katy Perry' },
        { title: 'Bleeding Love', artist: 'Leona Lewis' },
        { title: 'Poker Face', artist: 'Lady Gaga' },
        { title: 'Just Dance', artist: 'Lady Gaga ft. Colby O\'Donis' },
        { title: 'Low', artist: 'Flo Rida ft. T-Pain' },
        { title: 'Right Round', artist: 'Flo Rida ft. Kesha' },
        { title: 'I Gotta Feeling', artist: 'The Black Eyed Peas' },
        { title: 'Boom Boom Pow', artist: 'The Black Eyed Peas' },
        { title: 'Party in the U.S.A.', artist: 'Miley Cyrus' },
        { title: 'Tik Tok', artist: 'Kesha' },
        { title: 'California Gurls', artist: 'Katy Perry ft. Snoop Dogg' },
        { title: 'Empire State of Mind', artist: 'Jay-Z ft. Alicia Keys' },
        { title: 'Bad Romance', artist: 'Lady Gaga' },
        { title: 'Waka Waka (This Time for Africa)', artist: 'Shakira ft. Freshlyground' },
        { title: 'Rolling In The Deep', artist: 'Adele' },
        { title: 'Someone Like You', artist: 'Adele' },
        { title: 'Firework', artist: 'Katy Perry' },
        { title: 'Grenade', artist: 'Bruno Mars' },
        { title: 'Just The Way You Are', artist: 'Bruno Mars' },
        { title: 'The Lazy Song', artist: 'Bruno Mars' },
        { title: 'Moves Like Jagger', artist: 'Maroon 5 ft. Christina Aguilera' },
        { title: 'Party Rock Anthem', artist: 'LMFAO ft. Lauren Bennett, GoonRock' },
        { title: 'Rolling In The Deep', artist: 'Adele' },
        { title: 'Someone Like You', artist: 'Adele' },
        { title: 'Pumped Up Kicks', artist: 'Foster The People' },
        { title: 'Call Me Maybe', artist: 'Carly Rae Jepsen' },
        { title: 'Gangnam Style', artist: 'PSY' },
        { title: 'Thrift Shop', artist: 'Macklemore & Ryan Lewis ft. Wanz' },
        { title: 'Blurred Lines', artist: 'Robin Thicke ft. T.I., Pharrell' },
        { title: 'Royals', artist: 'Lorde' },
        { title: 'Wrecking Ball', artist: 'Miley Cyrus' },
        { title: 'Happy', artist: 'Pharrell Williams' },
        { title: 'All of Me', artist: 'John Legend' },
        { title: 'Dark Horse', artist: 'Katy Perry ft. Juicy J' },
        { title: 'Shake It Off', artist: 'Taylor Swift' },
        { title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars' },
        { title: 'Thinking Out Loud', artist: 'Ed Sheeran' },
        { title: 'See You Again', artist: 'Wiz Khalifa ft. Charlie Puth' },
        { title: 'Blank Space', artist: 'Taylor Swift' },
        { title: 'Shape of You', artist: 'Ed Sheeran' },
        { title: 'Despacito', artist: 'Luis Fonsi ft. Daddy Yankee' },
        { title: 'Believer', artist: 'Imagine Dragons' },
        { title: 'Perfect', artist: 'Ed Sheeran' },
        { title: 'Havana', artist: 'Camila Cabello ft. Young Thug' },
        { title: 'God\'s Plan', artist: 'Drake' },
        { title: 'In My Feelings', artist: 'Drake' },
        { title: 'Sicko Mode', artist: 'Travis Scott' },
        { title: 'Shallow', artist: 'Lady Gaga & Bradley Cooper' },
        { title: 'Old Town Road', artist: 'Lil Nas X ft. Billy Ray Cyrus' },
        { title: 'Bad Guy', artist: 'Billie Eilish' },
        { title: 'Sucker', artist: 'Jonas Brothers' },
        { title: 'Senorita', artist: 'Shawn Mendes & Camila Cabello' },
        { title: 'Truth Hurts', artist: 'Lizzo' },
        { title: 'Circles', artist: 'Post Malone' },
        { title: 'The Box', artist: 'Roddy Ricch' },
        { title: 'Blinding Lights', artist: 'The Weeknd' },
        { title: 'Don\'t Start Now', artist: 'Dua Lipa' },
        { title: 'Intentions', artist: 'Justin Bieber ft. Quavo' },
        { title: 'Savage Remix', artist: 'Megan Thee Stallion ft. Beyoncé' },
        { title: 'WAP', artist: 'Cardi B ft. Megan Thee Stallion' },
    ],
    'annee-1990': [
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana' },
        { title: 'One', artist: 'U2' },
        { title: 'Enter Sandman', artist: 'Metallica' },
        { title: 'Wonderwall', artist: 'Oasis' },
        { title: 'Bitter Sweet Symphony', artist: 'The Verve' },
        { title: 'Losing My Religion', artist: 'R.E.M.' },
        { title: 'Creep', artist: 'Radiohead' },
        { title: 'Vogue', artist: 'Madonna' },
        { title: 'I Will Always Love You', artist: 'Whitney Houston' },
        { title: 'Livin\' la Vida Loca', artist: 'Ricky Martin' },
        { title: '...Baby One More Time', artist: 'Britney Spears' },
        { title: 'All Star', artist: 'Smash Mouth' },
        { title: 'Gettin\' Jiggy wit It', artist: 'Will Smith' },
        { title: 'No Scrubs', artist: 'TLC' },
        { title: 'Waterfalls', artist: 'TLC' },
        { title: 'Semi-Charmed Life', artist: 'Third Eye Blind' },
        { title: 'Jump Around', artist: 'House of Pain' },
        { title: 'California Love', artist: '2Pac ft. Dr. Dre' },
        { title: 'Gangsta\'s Paradise', artist: 'Coolio ft. L.V.' },
        { title: 'Maria Maria', artist: 'Santana ft. The Product G&B' },
        { title: 'My Heart Will Go On', artist: 'Céline Dion' },
        { title: 'I Want It That Way', artist: 'Backstreet Boys' },
        { title: 'Tearin\' Up My Heart', artist: '*NSYNC' },
        { title: 'Wannabe', artist: 'Spice Girls' },
        { title: 'Barbie Girl', artist: 'Aqua' },
        { title: 'Mambo No. 5', artist: 'Lou Bega' },
        { title: 'Blue (Da Ba Dee)', artist: 'Eiffel 65' },
        { title: 'Cotton Eye Joe', artist: 'Rednex' },
        { title: 'Macarena', artist: 'Los del Río' },
        { title: 'C\'est la Ouate', artist: 'Caroline Loeb' },
        { title: 'Nuit de folie', artist: 'Début de Soirée' },
        { title: 'Les Démons de Minuit', artist: 'Images' },
        { title: 'Partenaire Particulier', artist: 'Partenaire Particulier' },
        { title: 'Joe le taxi', artist: 'Vanessa Paradis' },
        { title: 'Mistral gagnant', artist: 'Renaud' },
        { title: 'Casser la voix', artist: 'Patrick Bruel' },
        { title: 'Savoir aimer', artist: 'Florent Pagny' },
        { title: 'Belle', artist: 'Notre-Dame de Paris' },
        { title: 'Le vent nous portera', artist: 'Noir Désir' },
        { title: 'La Tribu de Dana', artist: 'Manau' },
        { title: 'Ces soirs-là', artist: 'Yannick' },
        { title: 'Pour que tu m\'aimes encore', artist: 'Céline Dion' },
        { title: 'Aïcha', artist: 'Khaled' },
        { title: 'Zouk Machine', artist: 'Maldòn' },
        { title: 'Moi... Lolita', artist: 'Alizée' }, // 2000, but often associated with late 90s
        { title: 'Santiano', artist: 'Hugues Aufray' },
        { title: 'Armstrong', artist: 'Claude Nougaro' },
        { title: 'La Corrida', artist: 'Francis Cabrel' },
        { title: 'Petite Marie', artist: 'Francis Cabrel' },
        { title: 'Je l\'aime à mourir', artist: 'Francis Cabrel' },
        { title: 'Poupée de cire, poupée de son', artist: 'France Gall' },
        { title: 'Résiste', artist: 'France Gall' },
        { title: 'Ella, elle l\'a', artist: 'France Gall' },
        { title: 'Libertine', artist: 'Mylène Farmer' },
        { title: 'Sans contrefaçon', artist: 'Mylène Farmer' },
        { title: 'Désenchantée', artist: 'Mylène Farmer' },
        { title: 'Comme un ouragan', artist: 'Stephanie de Monaco' },
        { title: 'Capitaine abandonné', artist: 'Images' },
        { title: 'Quand je t\'aime', artist: 'Demis Roussos' },
        { title: 'Comment te dire adieu', artist: 'Françoise Hardy' },
        { title: 'Message personnel', artist: 'Françoise Hardy' },
        { title: 'Le Sud', artist: 'Nino Ferrer' },
        { title: 'Mirza', artist: 'Nino Ferrer' },
        { title: 'La Javanaise', artist: 'Serge Gainsbourg' },
        { title: 'Je t\'aime moi non plus', artist: 'Serge Gainsbourg & Jane Birkin' },
        { title: 'Pull Marine', artist: 'Isabelle Adjani' },
        { title: 'Osez Joséphine', artist: 'Alain Bashung' },
        { title: 'Ma petite entreprise', artist: 'Alain Bashung' },
        { title: 'Vesoul', artist: 'Jacques Brel' },
        { title: 'Ne me quitte pas', artist: 'Jacques Brel' },
        { title: 'Amsterdam', artist: 'Jacques Brel' },
        { title: 'La Chanson des Vieux Amants', artist: 'Jacques Brel' },
        { title: 'Les Mots Bleus', artist: 'Christophe' },
        { title: 'Aline', artist: 'Christophe' },
        { title: 'Le Poinçonneur des Lilas', artist: 'Serge Gainsbourg' },
        { title: 'Je suis venu te dire que je m\'en vais', artist: 'Serge Gainsbourg' },
        { title: 'Sea, Sex and Sun', artist: 'Serge Gainsbourg' },
        { title: 'La Groupie du Pianiste', artist: 'Michel Berger' },
        { title: 'Quelques mots d\'amour', artist: 'Michel Berger' },
        { title: 'Starmania (Ouverture)', artist: 'Michel Berger & Luc Plamondon' },
        { title: 'Le Blues du Businessman', artist: 'Claude Dubois' },
        { title: 'Ce n\'est rien', artist: 'Michel Fugain' },
        { title: 'Une belle histoire', artist: 'Michel Fugain' },
        { title: 'Lady Lay', artist: 'Pierre Groscolas' },
        { title: 'Comme d\'habitude', artist: 'Claude François' },
        { title: 'Alexandrie Alexandra', artist: 'Claude François' },
        { title: 'Magnolias For Ever', artist: 'Claude François' },
        { title: 'Le Téléfon', artist: 'Nino Ferrer' },
        { title: 'Le Sud', artist: 'Nino Ferrer' },
        { title: 'Le Chanteur', artist: 'Daniel Balavoine' },
        { title: 'Mon fils ma bataille', artist: 'Daniel Balavoine' },
        { title: 'Quand on arrive en ville', artist: 'Daniel Balavoine & Michel Berger' },
        { title: 'SOS d\'un terrien en détresse', artist: 'Daniel Balavoine' },
        { title: 'Laquelle de toutes les façons', artist: 'France Gall' },
        { title: 'Il jouait du piano debout', artist: 'France Gall' },
        { title: 'Diego libre dans sa tête', artist: 'France Gall' },
        { title: 'Musique', artist: 'France Gall' },
        { title: 'Fais comme l\'oiseau', artist: 'Michel Fugain' },
        { title: 'La Fête', artist: 'Michel Fugain' },
        { title: 'Je reviens te chercher', artist: 'Gilbert Bécaud' },
        { title: 'Nathalie', artist: 'Gilbert Bécaud' },
    ],
    'film-series': [
        { title: 'My Heart Will Go On', artist: 'Céline Dion' }, // Titanic
        { title: 'I Will Always Love You', artist: 'Whitney Houston' }, // The Bodyguard
        { title: 'Lose Yourself', artist: 'Eminem' }, // 8 Mile
        { title: 'Stayin\' Alive', artist: 'Bee Gees' }, // Saturday Night Fever
        { title: 'Eye of the Tiger', artist: 'Survivor' }, // Rocky III
        { title: 'Ghostbusters', artist: 'Ray Parker Jr.' }, // Ghostbusters
        { title: 'Danger Zone', artist: 'Kenny Loggins' }, // Top Gun
        { title: '(I\'ve Had) The Time of My Life', artist: 'Bill Medley & Jennifer Warnes' }, // Dirty Dancing
        { title: 'Footloose', artist: 'Kenny Loggins' }, // Footloose
        { title: 'Don\'t You (Forget About Me)', artist: 'Simple Minds' }, // The Breakfast Club
        { title: 'Johnny B. Goode', artist: 'Chuck Berry' }, // Back to the Future
        { title: 'Misirlou', artist: 'Dick Dale & His Del-Tones' }, // Pulp Fiction
        { title: 'What a Wonderful World', artist: 'Louis Armstrong' }, // Good Morning, Vietnam
        { title: 'Unchained Melody', artist: 'The Righteous Brothers' }, // Ghost
        { title: 'Mrs. Robinson', artist: 'Simon & Garfunkel' }, // The Graduate
        { title: 'Gonna Fly Now (Theme from Rocky)', artist: 'Bill Conti' }, // Rocky
        { title: 'The Sound of Silence', artist: 'Simon & Garfunkel' }, // The Graduate
        { title: 'Somewhere Over the Rainbow', artist: 'Judy Garland' }, // The Wizard of Oz
        { title: 'Singin\' in the Rain', artist: 'Gene Kelly' }, // Singin\' in the Rain
        { title: 'Theme from Mission: Impossible', artist: 'Lalo Schifrin' },
        { title: 'Hedwig\'s Theme', artist: 'John Williams' }, // Harry Potter
        { title: 'Imperial March', artist: 'John Williams' }, // Star Wars
        { title: 'Concerning Hobbits', artist: 'Howard Shore' }, // Lord of the Rings
        { title: 'Comptine d\'un autre été, l\'après-midi', artist: 'Yann Tiersen' }, // Amelie
        { title: 'Shallow', artist: 'Lady Gaga & Bradley Cooper' }, // A Star Is Born
        { title: 'Can\'t Stop the Feeling!', artist: 'Justin Timberlake' }, // Trolls
        { title: 'Happy', artist: 'Pharrell Williams' }, // Despicable Me 2
        { title: 'Let It Go', artist: 'Idina Menzel' }, // Frozen
        { title: 'A Million Dreams', artist: 'Hugh Jackman, Michelle Williams, Ziv Zaifman' }, // The Greatest Showman
        { title: 'This Is Me', artist: 'Keala Settle & The Greatest Showman Ensemble' }, // The Greatest Showman
        { title: 'City of Stars', artist: 'Ryan Gosling & Emma Stone' }, // La La Land
        { title: 'Another Day of Sun', artist: 'La La Land Cast' }, // La La Land
        { title: 'Remember Me', artist: 'Miguel ft. Natalia Lafourcade' }, // Coco
        { title: 'Into the Unknown', artist: 'Idina Menzel & Aurora' }, // Frozen 2
        { title: 'Spirit', artist: 'Beyoncé' }, // The Lion King (2019)
        { title: 'No Time To Die', artist: 'Billie Eilish' }, // James Bond
        { title: 'Writing\'s On The Wall', artist: 'Sam Smith' }, // James Bond
        { title: 'Skyfall', artist: 'Adele' }, // James Bond
        { title: 'GoldenEye', artist: 'Tina Turner' }, // James Bond
        { title: 'Live And Let Die', artist: 'Paul McCartney & Wings' }, // James Bond
        { title: 'You\'ve Got A Friend In Me', artist: 'Randy Newman' }, // Toy Story
        { title: 'Colors of the Wind', artist: 'Judy Kuhn' }, // Pocahontas
        { title: 'Circle of Life', artist: 'Elton John' }, // The Lion King
        { title: 'Hakuna Matata', artist: 'Nathan Lane, Ernie Sabella, Jason Weaver, Joseph Williams' }, // The Lion King
        { title: 'Under the Sea', artist: 'Samuel E. Wright' }, // The Little Mermaid
        { title: 'Kiss the Girl', artist: 'Samuel E. Wright' }, // The Little Mermaid
        { title: 'A Whole New World', artist: 'Brad Kane & Lea Salonga' }, // Aladdin
        { title: 'Friend Like Me', artist: 'Robin Williams' }, // Aladdin
        { title: 'Beauty and the Beast', artist: 'Angela Lansbury' }, // Beauty and the Beast
        { title: 'Be Our Guest', artist: 'Jerry Orbach & Angela Lansbury' }, // Beauty and the Beast
        { title: 'Part of Your World', artist: 'Jodi Benson' }, // The Little Mermaid
        { title: 'Can You Feel the Love Tonight', artist: 'Elton John' }, // The Lion King
        { title: 'Reflection', artist: 'Lea Salonga' }, // Mulan
        { title: 'I\'ll Make a Man Out of You', artist: 'Donny Osmond' }, // Mulan
        { title: 'Zero to Hero', artist: 'Roger Bart, Joshua Chasez, Tate Donovan, Danny DeVito, LaChanze' }, // Hercules
        { title: 'Go the Distance', artist: 'Roger Bart' }, // Hercules
        { title: 'The Bare Necessities', artist: 'Phil Harris & Bruce Reitherman' }, // The Jungle Book
        { title: 'I Wan\'na Be Like You', artist: 'Louis Prima & Phil Harris' }, // The Jungle Book
        { title: 'Supercalifragilisticexpialidocious', artist: 'Julie Andrews & Dick Van Dyke' }, // Mary Poppins
        { title: 'A Spoonful of Sugar', artist: 'Julie Andrews' }, // Mary Poppins
        { title: 'Chim Chim Cher-ee', artist: 'Dick Van Dyke, Julie Andrews, Karen Dotrice, Matthew Garber' }, // Mary Poppins
        { title: 'The Sound of Music', artist: 'Julie Andrews' }, // The Sound of Music
        { title: 'Do-Re-Mi', artist: 'Julie Andrews' }, // The Sound of Music
        { title: 'Edelweiss', artist: 'Theodore Bikel' }, // The Sound of Music
        { title: 'You Are My Sunshine', artist: 'Jimmie Davis & Charles Mitchell' }, // O Brother, Where Art Thou?
        { title: 'Man of Constant Sorrow', artist: 'Soggy Bottom Boys' }, // O Brother, Where Art Thou?
        { title: 'Bohemian Rhapsody', artist: 'Queen' }, // Wayne's World
        { title: 'Sweet Home Alabama', artist: 'Lynyrd Skynyrd' }, // Forrest Gump
        { title: 'California Dreamin\'', artist: 'The Mamas & the Papas' }, // Forrest Gump
        { title: 'Fortunate Son', artist: 'Creedence Clearwater Revival' }, // Forrest Gump
        { title: 'Hound Dog', artist: 'Elvis Presley' }, // Forrest Gump
        { title: 'Blue Suede Shoes', artist: 'Elvis Presley' }, // Forrest Gump
        { title: 'Jailhouse Rock', artist: 'Elvis Presley' }, // Jailhouse Rock
        { title: 'Great Balls of Fire', artist: 'Jerry Lee Lewis' }, // Great Balls of Fire
        { title: 'You Make My Dreams (Come True)', artist: 'Daryl Hall & John Oates' }, // 500 Days of Summer
        { title: 'Bittersweet Symphony', artist: 'The Verve' }, // Cruel Intentions
        { title: 'Where Is My Mind?', artist: 'Pixies' }, // Fight Club
        { title: 'Don\'t Stop Me Now', artist: 'Queen' }, // Shaun of the Dead
        { title: 'Lose Yourself', artist: 'Eminem' }, // 8 Mile
        { title: 'No Church in the Wild', artist: 'Jay-Z & Kanye West ft. Frank Ocean, The-Dream' }, // The Great Gatsby
        { title: 'Young and Beautiful', artist: 'Lana Del Rey' }, // The Great Gatsby
        { title: 'I See Fire', artist: 'Ed Sheeran' }, // The Hobbit: The Desolation of Smaug
        { title: 'Happy', artist: 'Pharrell Williams' }, // Despicable Me 2
        { title: 'Everything Is AWESOME!!!', artist: 'Tegan and Sara ft. The Lonely Island' }, // The Lego Movie
        { title: 'Earned It', artist: 'The Weeknd' }, // Fifty Shades of Grey
        { title: 'See You Again', artist: 'Wiz Khalifa ft. Charlie Puth' }, // Furious 7
        { title: 'Can\'t Stop The Feeling!', artist: 'Justin Timberlake' }, // Trolls
        { title: 'How Far I\'ll Go', artist: 'Auli\'i Cravalho' }, // Moana
        { title: 'You\'re Welcome', artist: 'Dwayne "The Rock" Johnson' }, // Moana
        { title: 'This Is Me', artist: 'Keala Settle & The Greatest Showman Ensemble' }, // The Greatest Showman
        { title: 'Shallow', artist: 'Lady Gaga & Bradley Cooper' }, // A Star Is Born
        { title: 'Sunflower', artist: 'Post Malone & Swae Lee' }, // Spider-Man: Into the Spider-Verse
        { title: 'Old Town Road', artist: 'Lil Nas X ft. Billy Ray Cyrus' }, // Fortnite (not a movie but very cultural)
        { title: 'Bad Guy', artist: 'Billie Eilish' }, // The Umbrella Academy (TV Series)
        { title: 'WAP', artist: 'Cardi B ft. Megan Thee Stallion' }, // Could be used in a series
        { title: 'Blinding Lights', artist: 'The Weeknd' }, // Often used in trailers/series
        { title: 'Therefore I Am', artist: 'Billie Eilish' },
    ],
    'anime': [
        { title: 'Gurenge', artist: 'LiSA' }, // Demon Slayer
        { title: 'Unravel', artist: 'TK from Ling tosite Sigure' }, // Tokyo Ghoul
        { title: 'A Cruel Angel\'s Thesis', artist: 'Yoko Takahashi' }, // Neon Genesis Evangelion
        { title: 'Attack on Titan (Guren no Yumiya)', artist: 'Linked Horizon' }, // Attack on Titan
        { title: 'The Hero!! Set Fire to the Furious Fists', artist: 'JAM Project' }, // One-Punch Man
        { title: 'Haruka Kanata', artist: 'Asian Kung-Fu Generation' }, // Naruto
        { title: 'Blue Bird', artist: 'Ikimonogakari' }, // Naruto Shippuden
        { title: 'Silhouette', artist: 'KANA-BOON' }, // Naruto Shippuden
        { title: 'We Are!', artist: 'Hiroshi Kitadani' }, // One Piece
        { title: 'Cha-La Head-Cha-La', artist: 'Hironobu Kageyama' }, // Dragon Ball Z
        { title: 'Gotta Catch \'Em All', artist: 'Jason Paige' }, // Pokémon
        { title: 'Cruel Angel\'s Thesis', artist: 'Yoko Takahashi' }, // Neon Genesis Evangelion
        { title: 'Tank!', artist: 'The Seatbelts' }, // Cowboy Bebop
        { title: 'Again', artist: 'Yui' }, // Fullmetal Alchemist: Brotherhood
        { title: 'The World', artist: 'Nightmare' }, // Death Note
        { title: 'Oath Sign', artist: 'LiSA' }, // Fate/Zero
        { title: 'Crossing Field', artist: 'LiSA' }, // Sword Art Online
        { title: 'Ignite', artist: 'Eir Aoi' }, // Sword Art Online
        { title: 'Courante (Departure)', artist: 'Masatoshi Ono' }, // Hunter x Hunter (2011)
        { title: 'Smile Bomb', artist: 'Maki Ohguro' }, // Yu Yu Hakusho
        { title: 'Renai Circulation', artist: 'Kana Hanazawa' }, // Bakemonogatari
        { title: 'Great Days', artist: 'Karen Aoki & Daisuke Hasegawa' }, // JoJo\'s Bizarre Adventure: Diamond is Unbreakable
        { title: 'Bloody Stream', artist: 'Coda' }, // JoJo\'s Bizarre Adventure: Battle Tendency
        { title: 'JoJo Sono Chi no Kioku ~end of THE WORLD~', artist: 'JO STARS' }, // JoJo\'s Bizarre Adventure: Stardust Crusaders
        { title: 'Flyers', artist: 'BRADIO' }, // Death Parade
        { title: 'The Day', artist: 'Porno Graffitti' }, // My Hero Academia
        { title: 'Peace Sign', artist: 'Kenshi Yonezu' }, // My Hero Academia
        { title: 'Odd Future', artist: 'UVERworld' }, // My Hero Academia
        { title: 'Kyoran Hey Kids!!', artist: 'THE ORAL CIGARETTES' }, // Noragami Aragoto
        { title: 'Sugar Song to Bitter Step', artist: 'UNISON SQUARE GARDEN' }, // Blood Blockade Battlefront
        { title: 'History Maker', artist: 'Dean Fujioka' }, // Yuri!!! on Ice
        { title: 'This Game', artist: 'Konomi Suzuki' }, // No Game No Life
        { title: 'Choucho', artist: 'Natsume Yuujinchou Shi' }, // Natsume\'s Book of Friends
        { title: 'Connect', artist: 'ClariS' }, // Puella Magi Madoka Magica
        { title: 'Rising Hope', artist: 'LiSA' }, // The Irregular at Magic High School
        { title: 'Ai no Scenario', artist: 'CHiCO with HoneyWorks' }, // Magic Kaito 1412
        { title: 'Only My Railgun', artist: 'fripSide' }, // A Certain Scientific Railgun
        { title: 'Level 5 - Judgelight -', artist: 'fripSide' }, // A Certain Scientific Railgun
        { title: 'Kyouran Hey Kids!!', artist: 'THE ORAL CIGARETTES' }, // Noragami Aragoto
        { title: 'Zen Zen Zense', artist: 'RADWIMPS' }, // Your Name
        { title: 'Sparkle', artist: 'RADWIMPS' }, // Your Name
        { title: 'Katawaredoki', artist: 'RADWIMPS' }, // Your Name
        { title: 'Dream Lantern', artist: 'RADWIMPS' }, // Your Name
        { title: 'Grand Escape', artist: 'RADWIMPS ft. Toko Miura' }, // Weathering With You
        { title: 'Is There Still Anything That Love Can Do?', artist: 'RADWIMPS' }, // Weathering With You
        { title: 'Kizuna no Kiseki', artist: 'MAN WITH A MISSION x milet' }, // Demon Slayer S3
        { title: 'Idol', artist: 'YOASOBI' }, // Oshi no Ko
        { title: 'KICK BACK', artist: 'Kenshi Yonezu' }, // Chainsaw Man
        { title: 'Guren no Yumiya', artist: 'Linked Horizon' }, // Attack on Titan
        { title: 'Shinzou wo Sasageyo!', artist: 'Linked Horizon' }, // Attack on Titan
        { title: 'My War', artist: 'Shinsei Kamattechan' }, // Attack on Titan
        { title: 'The Rumbling', artist: 'SiM' }, // Attack on Titan
        { title: 'Red Swan', artist: 'YOSHIKI ft. HYDE' }, // Attack on Titan
        { title: 'Inferno', artist: 'Mrs. GREEN APPLE' }, // Fire Force
        { title: 'Black Rover', artist: 'Vickeblanka' }, // Black Clover
        { title: 'Grandeur', artist: 'Snow Man' }, // Black Clover
        { title: 'Peace Sign', artist: 'Kenshi Yonezu' }, // My Hero Academia
        { title: 'Long Shot', artist: 'Myth & Roid' }, // Re:Zero
        { title: 'Paradisus-Paradoxum', artist: 'Myth & Roid' }, // Re:Zero
        { title: 'One Reason', artist: 'Fade' }, // Deadman Wonderland
        { title: 'Lilium', artist: 'Kumiko Noma' }, // Elfen Lied
        { title: 'Again', artist: 'Yui' }, // Fullmetal Alchemist: Brotherhood
        { title: 'Hologram', artist: 'NICO Touches the Walls' }, // Fullmetal Alchemist: Brotherhood
        { title: 'Period', artist: 'CHEMISTRY' }, // Fullmetal Alchemist: Brotherhood
        { title: 'Rain', artist: 'SID' }, // Fullmetal Alchemist: Brotherhood
        { title: 'Tsuki no Ookisa', artist: 'Nogizaka46' }, // Naruto Shippuden
        { title: 'Hotaru no Hikari', artist: 'Ikimonogakari' }, // Naruto Shippuden
        { title: 'Blue Bird', artist: 'Ikimonogakari' }, // Naruto Shippuden
        { title: 'Go!!!', artist: 'FLOW' }, // Naruto
        { title: 'Sign', artist: 'FLOW' }, // Naruto Shippuden
        { title: 'Colors', artist: 'FLOW' }, // Code Geass
        { title: 'K-ON!! Fuwa Fuwa Time', artist: 'Sakurakou K-ON Bu' }, // K-On!
        { title: 'Don\'t Say "Lazy"', artist: 'Sakurakou K-ON Bu' }, // K-On!
        { title: 'Listen!!', artist: 'Sakurakou K-ON Bu' }, // K-On!
        { title: 'No, Thank You!', artist: 'Houkago Tea Time' }, // K-On!!
        { title: 'My Soul, Your Beats!!', artist: 'LiSA' }, // Angel Beats!
        { title: 'My Dearest', artist: 'Supercell' }, // Guilty Crown
        { title: 'Departure!', artist: 'Masatoshi Ono' }, // Hunter x Hunter (2011)
        { title: 'Hunting for Your Dream', artist: 'GALNERYUS' }, // Hunter x Hunter (2011)
        { title: 'Hyori Ittai', artist: 'Yuzu' }, // Hunter x Hunter (2011)
        { title: 'Kiseki', artist: 'Yuzu' }, // Hunter x Hunter (2011)
        { title: 'Zen Zen Zense', artist: 'RADWIMPS' }, // Your Name
        { title: 'Sparkle', artist: 'RADWIMPS' }, // Your Name
        { title: 'Gurenge', artist: 'LiSA' }, // Demon Slayer
        { title: 'Kamado Tanjiro no Uta', artist: 'Go Shiina ft. Nami Nakagawa' }, // Demon Slayer
        { title: 'Zankyo Sanka', artist: 'Aimer' }, // Demon Slayer S2
        { title: 'Kizuna no Kiseki', artist: 'MAN WITH A MISSION x milet' }, // Demon Slayer S3
        { title: 'Idol', artist: 'YOASOBI' }, // Oshi no Ko
        { title: 'KICK BACK', artist: 'Kenshi Yonezu' }, // Chainsaw Man
    ],
    'jeux-videos': [
        { title: 'One-Winged Angel', artist: 'Nobuo Uematsu' }, // Final Fantasy VII
        { title: 'Aerith\'s Theme', artist: 'Nobuo Uematsu' }, // Final Fantasy VII
        { title: 'Suteki da ne (Isn\'t It Wonderful?)', artist: 'Rikki' }, // Final Fantasy X
        { title: 'To Zanarkand', artist: 'Nobuo Uematsu' }, // Final Fantasy X
        { title: 'Zelda\'s Lullaby', artist: 'Koji Kondo' }, // The Legend of Zelda: Ocarina of Time
        { title: 'Song of Storms', artist: 'Koji Kondo' }, // The Legend of Zelda: Ocarina of Time
        { title: 'Gerudo Valley', artist: 'Koji Kondo' }, // The Legend of Zelda: Ocarina of Time
        { title: 'Main Theme', artist: 'Koji Kondo' }, // Super Mario 64
        { title: 'Dire Dire Docks', artist: 'Koji Kondo' }, // Super Mario 64
        { title: 'Super Mario Bros. Theme', artist: 'Koji Kondo' }, // Super Mario Bros.
        { title: 'Tetris Theme (Korobeiniki)', artist: 'Traditional' }, // Tetris
        { title: 'Megalovania', artist: 'Toby Fox' }, // Undertale
        { title: 'Spider Dance', artist: 'Toby Fox' }, // Undertale
        { title: 'Undertale', artist: 'Toby Fox' }, // Undertale
        { title: 'Battle Theme (Persona 5)', artist: 'Shoji Meguro' }, // Persona 5
        { title: 'Last Surprise', artist: 'Shoji Meguro' }, // Persona 5
        { title: 'Beneath the Mask', artist: 'Shoji Meguro' }, // Persona 5
        { title: 'Rivers in the Desert', artist: 'Shoji Meguro' }, // Persona 5
        { title: 'Life Will Change', artist: 'Shoji Meguro' }, // Persona 5
        { title: 'Still Alive', artist: 'Jonathan Coulton' }, // Portal
        { title: 'Want You Gone', artist: 'Jonathan Coulton' }, // Portal 2
        { title: 'Main Theme (Skyrim)', artist: 'Jeremy Soule' }, // The Elder Scrolls V: Skyrim
        { title: 'Dragonborn', artist: 'Jeremy Soule' }, // The Elder Scrolls V: Skyrim
        { title: 'Gwyn, Lord of Cinder', artist: 'Motoi Sakuraba' }, // Dark Souls
        { title: 'Majula', artist: 'Motoi Sakuraba' }, // Dark Souls II
        { title: 'Elden Ring', artist: 'Tsukasa Saitoh' }, // Elden Ring
        { title: 'Godrick the Grafted', artist: 'Tai Tomisawa' }, // Elden Ring
        { title: 'Death By Glamour', artist: 'Toby Fox' }, // Undertale
        { title: 'Sans.', artist: 'Toby Fox' }, // Undertale
        { title: 'Ruins', artist: 'Toby Fox' }, // Undertale
        { title: 'Heartache', artist: 'Toby Fox' }, // Undertale
        { title: 'Nier Automata - Weight of the World', artist: 'Keiichi Okabe' }, // Nier Automata
        { title: 'Amusement Park', artist: 'Keiichi Okabe' }, // Nier Automata
        { title: 'City Ruins - Rays of Light', artist: 'Keiichi Okabe' }, // Nier Automata
        { title: 'Vague Hope - Cold Rain', artist: 'Keiichi Okabe' }, // Nier Automata
        { title: 'The Only Thing They Fear Is You', artist: 'Mick Gordon' }, // Doom Eternal
        { title: 'BFG Division', artist: 'Mick Gordon' }, // Doom (2016)
        { title: 'Cultist Base', artist: 'Mick Gordon' }, // Doom Eternal
        { title: 'At Doom\'s Gate', artist: 'Bobby Prince' }, // Doom (1993)
        { title: 'Super Gore Nest', artist: 'Mick Gordon' }, // Doom Eternal
        { title: 'Halo Theme', artist: 'Martin O\'Donnell & Michael Salvatori' }, // Halo: Combat Evolved
        { title: 'One Final Effort', artist: 'Martin O\'Donnell & Michael Salvatori' }, // Halo 3
        { title: 'The Covenant', artist: 'Martin O\'Donnell & Michael Salvatori' }, // Halo 3
        { title: 'Minecraft - Sweden', artist: 'C418' }, // Minecraft
        { title: 'Wet Hands', artist: 'C418' }, // Minecraft
        { title: 'Stal', artist: 'C418' }, // Minecraft
        { title: 'Main Theme (The Witcher 3)', artist: 'Marcin Przybyłowicz' }, // The Witcher 3: Wild Hunt
        { title: 'The Wolven Storm (Priscilla\'s Song)', artist: 'Marcin Przybyłowicz' }, // The Witcher 3: Wild Hunt
        { title: 'Geralt of Rivia', artist: 'Percival Schuttenbach' }, // The Witcher 3: Wild Hunt
        { title: 'Honest Hearts (Main Theme)', artist: 'Bear McCreary' }, // Fallout: New Vegas - Honest Hearts
        { title: 'Country Roads', artist: 'John Denver' }, // Fallout 76
        { title: 'Main Theme (Fallout 4)', artist: 'Inon Zur' }, // Fallout 4
        { title: 'M.O.O.N. - Hydrogen', artist: 'M.O.O.N.' }, // Hotline Miami
        { title: 'Carpenter Brut - Roller Mobster', artist: 'Carpenter Brut' }, // Hotline Miami
        { title: 'Perturbator - Miami Disco', artist: 'Perturbator' }, // Hotline Miami
        { title: 'Main Theme (Red Dead Redemption 2)', artist: 'Woody Jackson' }, // Red Dead Redemption 2
        { title: 'May I Stand Unshaken', artist: 'D\'Angelo & Brian Eno' }, // Red Dead Redemption 2
        { title: 'Cruel Angel\'s Thesis (Neon Genesis Evangelion)', artist: 'Yoko Takahashi' }, // Often in games
        { title: 'Through the Fire and Flames', artist: 'DragonForce' }, // Guitar Hero III
        { title: 'Livin\' on a Prayer', artist: 'Bon Jovi' }, // Guitar Hero
        { title: 'Eye of the Tiger', artist: 'Survivor' }, // Guitar Hero
        { title: 'Seven Nation Army', artist: 'The White Stripes' }, // Guitar Hero
        { title: 'Jump', artist: 'Van Halen' }, // Guitar Hero
        { title: 'Sweet Child o\' Mine', artist: 'Guns N\' Roses' }, // Guitar Hero
        { title: 'Thunderstruck', artist: 'AC/DC' }, // Guitar Hero
        { title: 'Bohemian Rhapsody', artist: 'Queen' }, // Rock Band
        { title: 'Pour Some Sugar On Me', artist: 'Def Leppard' }, // Guitar Hero
        { title: 'Carry On Wayward Son', artist: 'Kansas' }, // Guitar Hero
        { title: 'Free Bird', artist: 'Lynyrd Skynyrd' }, // Guitar Hero
        { title: 'Through the Fire and Flames', artist: 'DragonForce' }, // Guitar Hero III
        { title: 'Main Theme (Overwatch)', artist: 'Neal Acree' }, // Overwatch
        { title: 'The Path of the Wind', artist: 'Joe Hisaishi' }, // Animal Crossing (often used with fan covers)
        { title: 'Bubblegum K.K.', artist: 'Nintendo' }, // Animal Crossing: New Horizons
        { title: 'Stardew Valley Overture', artist: 'Eric Barone' }, // Stardew Valley
        { title: 'Main Theme (Terraria)', artist: 'Scott Lloyd Shelly' }, // Terraria
        { title: 'Gusty Garden Galaxy', artist: 'Mahito Yokota' }, // Super Mario Galaxy
        { title: 'Rosalina\'s Observatory', artist: 'Mahito Yokota' }, // Super Mario Galaxy
        { title: 'Snake Eater', artist: 'Cynthia Harrell' }, // Metal Gear Solid 3
        { title: 'MGS4: Old Snake', artist: 'Harry Gregson-Williams' }, // Metal Gear Solid 4
        { title: 'The Best Is Yet To Come', artist: 'Rika Muranaka' }, // Metal Gear Solid
        { title: 'Dancing Mad', artist: 'Nobuo Uematsu' }, // Final Fantasy VI
        { title: 'Terra\'s Theme', artist: 'Nobuo Uematsu' }, // Final Fantasy VI
        { title: 'Chrono Trigger Main Theme', artist: 'Yasunori Mitsuda' }, // Chrono Trigger
        { title: 'Corridors of Time', artist: 'Yasunori Mitsuda' }, // Chrono Trigger
        { title: 'Frog\'s Theme', artist: 'Yasunori Mitsuda' }, // Chrono Trigger
        { title: 'Pokemon Red/Blue - Main Theme', artist: 'Junichi Masuda' }, // Pokémon Red/Blue
        { title: 'Pokemon Red/Blue - Battle! Trainer', artist: 'Junichi Masuda' }, // Pokémon Red/Blue
        { title: 'Lavender Town', artist: 'Junichi Masuda' }, // Pokémon Red/Blue
        { title: 'Super Smash Bros. Melee - Main Theme', artist: 'Hirokazu Ando' }, // Super Smash Bros. Melee
        { title: 'F-Zero - Mute City', artist: 'Yumiko Kanki' }, // F-Zero
        { title: 'Final Fantasy VII - Main Theme', artist: 'Nobuo Uematsu' },
        { title: 'Kingdom Hearts - Dearly Beloved', artist: 'Yoko Shimomura' }, // Kingdom Hearts
        { title: 'Simple and Clean', artist: 'Hikaru Utada' }, // Kingdom Hearts
    ],
};

export const playlistCategories: Playlist[] = [
  {
    id: 'musique-aujourdhui',
    name: 'Musique d\'aujourd\'hui',
    description: 'Les hits du moment',
    gradient: 'from-purple-500 to-pink-500',
    songs: [], // Songs will be fetched from Deezer
  },
  {
    id: 'annee-2000',
    name: 'Années 2000',
    description: 'Le meilleur des années 2000',
    gradient: 'from-blue-500 to-green-500',
    songs: [],
  },
  {
    id: 'annee-1990',
    name: 'Années 1990',
    description: 'Les classiques des années 90',
    gradient: 'from-red-500 to-yellow-500',
    songs: [],
  },
  {
    id: 'film-series',
    name: 'Films & Séries',
    description: 'Musiques de films et séries cultes',
    gradient: 'from-orange-500 to-red-500',
    songs: [],
  },
  {
    id: 'anime',
    name: 'Anime',
    description: 'Openings et endings d\'animes',
    gradient: 'from-indigo-500 to-purple-500',
    songs: [],
  },
  {
    id: 'jeux-videos',
    name: 'Jeux Vidéos',
    description: 'Bandes originales de jeux vidéos',
    gradient: 'from-green-500 to-blue-500',
    songs: [],
  },
];
