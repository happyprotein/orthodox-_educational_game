// Not One Iota — Case I: Nicaea 325. English script and data.
window.STORY_EN = (function () {
const C = {
  FILON: { n: 'Philo', p: 'filon' },
  PAMFIL: { n: 'Pamphilus', p: 'pamfil' },
  ARIJE: { n: 'Arius', p: 'arije' },
  ATANASIJE: { n: 'Deacon Athanasius', p: 'atanasije' },
  OSIJE: { n: 'Hosius of Corduba', p: 'osije' },
  ALEKSANDAR: { n: 'Alexander of Alexandria', p: 'aleksandar' },
  JN: { n: 'Eusebius of Nicomedia', p: 'jevsevije_nikomidijski' },
  JK: { n: 'Eusebius of Caesarea', p: 'jevsevije_kesarijski' },
  KONSTANTIN: { n: 'Emperor Constantine', p: 'konstantin' },
  DOMETIJE: { n: 'Dometius', p: 'dometije' },
  NIKOLAJ: { n: 'Nicholas of Myra', p: 'nikolaj' },
  TEODOR: { n: 'Theodore', p: 'teodor' },
  NIL: { n: 'Elder Nilus', p: 'starac_nil' },
  EPISKOP: { n: 'A bishop', p: null },
  JOVAN: { n: 'John the Chronographer', p: 'jovan', f: 'r' },
  PAFNUTIJE: { n: 'Paphnutius of the Thebaid', p: 'pafnutije' },
};

const EV = {
  e1: { i: 'svitak', n: 'A verse from the “Thalia”', d: 'Arius’s song, sung by the boatmen: “God was not always Father; there was when the Son was not.” (ἦν ποτε ὅτε οὐκ ἦν)' },
  e2: { i: 'pismo', n: 'Letter to Alexander', d: 'Arius on God: He is “alone unbegotten, alone eternal, alone unchangeable.”' },
  e3: { i: 'pismo', n: 'Letter to Eusebius', d: 'Arius on the Son: “He was not before He was begotten” and “He is from nothing” (ἐξ οὐκ ὄντων).' },
  e4: { i: 'kodeks', n: 'Proverbs 8:22', d: '“The Lord created me as the beginning of his ways.” Arius’s favorite verse.' },
  e5: { i: 'kodeks', n: 'Proverbs 8:25', d: '“Before the mountains were settled, before all the hills, he begets me.” The same passage, three verses later.' },
  e6: { i: 'kodeks', n: 'John 1:1–3', d: '“In the beginning was the Word… All things were made through Him, and without Him nothing was made that was made.”' },
  e7: { i: 'kodeks', n: 'Hebrews 1:3', d: 'The Son is “the radiance of His glory and the express image of His being.”' },
  e8: { i: 'kodeks', n: 'Colossians 1:15–17', d: '“The firstborn of all creation… by Him all things were created… and He is before all things.”' },
  e9: { i: 'kodeks', n: 'Hebrews 13:8', d: '“Jesus Christ is the same yesterday, today and forever.”' },
  e10: { i: 'tablica', n: 'The Arians worship the Son', d: 'Seen at the morning service: Arius’s own disciples bow down to Christ.' },
  e11: { i: 'kodeks', n: 'Romans 1:25', d: 'The condemnation of those who “worshipped and served the creature rather than the Creator.”' },
  e12: { i: 'kodeks', n: 'Matthew 28:19', d: 'Baptism “in the name of the Father and of the Son and of the Holy Spirit.”' },
  e13: { i: 'simvol', n: 'The Creed of Caesarea', d: 'The baptismal confession of Eusebius of Caesarea. Accurate, but broad enough that even Arius could sign it.' },
  h1: { i: 'amfora', n: 'Hint: two languages', d: 'Dometius says Arius wrote his songs “for simple folk, so they don’t need the hard words.” One language for the people, another for the bishops?' },
};

const TEO = {
  arijanstvo: { n: 'What is Arianism', t: `Arianism is the teaching of the Alexandrian presbyter Arius (c. 256–336): the Son of God is not eternal, but was created “from nothing”, before time and before the world, yet still created. Only the Father is true God; the Son is His most exalted work.\n\nArius wanted to protect the oneness of God, drawing on the Greek idea that God is one and unbegotten. The First Ecumenical Council at Nicaea (325) condemned this teaching, yet Arianism kept protectors at the imperial court for decades. Within the Empire it was overcome by the Second Ecumenical Council (Constantinople, 381), while the Germanic peoples who had received it through Ulfilas abandoned it gradually, as late as the 7th century.`, s: 'Socrates Scholasticus, Church History I; Epiphanius, Panarion 69' },
  obozenje: { n: 'Deification (θέωσις)', t: `Athanasius wrote: “He became man that we might become gods” (Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν).\n\nThis does not mean that man becomes God by nature, but that by grace he shares in God’s life. Yet that is possible only if the One who became man is true God. This is why the dispute at Nicaea was a dispute about salvation: a creature cannot unite another creature with God.`, s: 'Athanasius, On the Incarnation 54' },
  otac: { n: 'The Father is always Father', t: `Arius claimed that “there was when the Son was not”, and so that God was not always Father. But fatherhood is not a role God acquires; it is what He is. If God once became Father, then He changed, and Arius himself confesses that God is unchangeable.\n\nAlexander of Alexandria added: the Son is the Word and Wisdom of God. God without the Son would be God without His Word and without His Wisdom. That is why the Church confesses that the Son is begotten “before all ages”, not at some moment in time.`, s: 'Alexander, Letter to Alexander of Thessalonica' },
  roditi: { n: 'To beget and to make', t: `What is begotten has the same nature as the one who begets it: a man begets a man. What is made has a different nature from its maker: a builder does not beget a house, he builds it.\n\nThat is why the Creed says of the Son “begotten, not made” (γεννηθέντα, οὐ ποιηθέντα). The world was made from nothing. The Son is begotten of the Father and shares His nature.`, s: 'Athanasius, Against the Arians II' },
  molitva: { n: 'Prayer as evidence', t: `Lex orandi, lex credendi: as the Church prays, so she believes. Christians worshipped Christ from the very beginning, in prayer, in hymns and in baptism.\n\nIf the Son is a creature, that worship is idolatry, for we would be serving the creature rather than the Creator (Rom 1:25). Arius wanted to keep the worship and deny the divinity. Dogma only named what the Church was already praying.`, s: 'Athanasius, Against the Arians' },
  homoousios: { n: 'ὁμοούσιος — of one essence', t: `The word is not in Scripture, and that troubled the Fathers. But every biblical phrase (“from God”, “power”, “image”, “always”) the Arian party accepted, and then read in its own way. Athanasius records how they whispered and winked at one another as they did so.\n\nSo the Council chose a word that could not be twisted: the Son is “from the essence of the Father” and of one essence with the Father. The unbiblical word is there to guard the biblical meaning.`, s: 'Athanasius, On the Decrees of the Council of Nicaea 19–20' },
  kenodoksija: { n: 'Vainglory (κενοδοξία)', t: `Vainglory is the craving for the praise of others. Evagrius counts it among the eight thoughts and notices something insidious: it alone grows out of virtue itself. A man who has defeated vainglory begins to boast of that victory.\n\nSo it does not attack the one who loses, but the one who has just won. Its remedy is hiddenness and faithfulness in small things.`, s: 'Evagrius, Praktikos' },
  jota: { n: 'One iota', t: `ὁμοούσιος means “of the same essence”, ὁμοιούσιος “of similar essence”. The difference is one letter, an iota.\n\nThe struggle over that iota would go on for decades after Nicaea. The “Homoiousian” party appears only in the 350s. Many of them would be patiently brought back to the faith of Nicaea by the Cappadocians, Basil the Great and his companions. But “similar” always also means “other”.`, s: 'Basil the Great, Letters', g: true },
  anatema: { n: 'Anathema is not hatred', t: `An anathema marks the boundary of communion: this teaching is not the faith of the Church. It does not express a wish that a person be lost.\n\nTo this day the Church reads the anathemas on the Sunday of Orthodoxy, yet in the very same services she prays for the conversion of all. Philo remembered Arius in prayer, and that is the true ending of this case.`, s: 'John Chrysostom, Homily on Anathema (attributed)', g: true },
};

const S = {};

S.uvod = [
  { mus: 'uvod' },
  { bg: 'biblioteka', ch: null },
  { cap: 'The Great Lavra, Mount Athos' },
  { s: 'JOVAN', pos: 'c', t: 'Welcome, traveler. I am John, librarian of this Lavra. Before you open these acts, allow an old man to tell you what is written in them, and how dearly they were paid for.' },
  { bg: 'odaje' },
  { s: 'JOVAN', pos: 'l', t: 'Alexandria, around the year 318. A harbor, a library, philosophers. And a Church that has only just survived the persecution of Diocletian.' },
  { s: 'JOVAN', pos: 'l', t: 'In the church called Baucalis preaches the presbyter Arius. A Libyan by birth, tall, gaunt, an ascetic, trained in the school of Lucian of Antioch.' },
  { s: 'JOVAN', pos: 'r', t: 'The people love him. Epiphanius writes that seven hundred consecrated virgins followed him.' },
  { s: 'JOVAN', pos: 'r', t: 'Arius wanted to protect what everyone holds sacred: that God is one. So he reasoned: if only the Father is unbegotten, then the Son was made.' },
  { s: 'JOVAN', pos: 'l', t: 'The most exalted creature, through whom all else was made. But a creature all the same. “There was when He was not,” he used to say. There was a time when the Son did not exist.' },
  { s: 'JOVAN', pos: 'c', sym: 'zrak', t: 'It sounds like a quarrel among scholars. But think: if Christ is not God, then who has saved us?' },
  { s: 'JOVAN', pos: 'c', t: 'A creature cannot unite another creature with God. If Arius is right, there remains a chasm between God and man that no one has bridged.' },
  { s: 'JOVAN', pos: 'r', sym: 'vrana', t: 'Bishop Alexander warned him, then called a synod of the bishops of Egypt and Libya. Arius was excommunicated. But he did not fall silent.' },
  { bg: 'pristaniste' },
  { s: 'JOVAN', pos: 'l', t: 'He went to his friends. The most powerful of them was Eusebius, bishop of Nicomedia, the city where the emperor then held court.' },
  { s: 'JOVAN', pos: 'r', t: 'Letters flew across the sea. The bishops of the East took sides, and Arius’s songs were sung by boatmen and millers.' },
  { s: 'JOVAN', pos: 'l', sym: 'golub', t: 'In 324 Emperor Constantine had just reunited the empire. He sent Hosius of Corduba with a letter: this is a trifling question, be reconciled. They were not reconciled.' },
  { bg: 'nikeja' },
  { s: 'JOVAN', pos: 'r', t: 'So the emperor did what no one before him had done: he summoned the bishops of the whole inhabited world. To Nicaea, in the summer of 325. Tradition says three hundred and eighteen Fathers.' },
  { bg: 'biblioteka' },
  { s: 'JOVAN', pos: 'l', t: 'Nicaea was not the end. Arianism kept protectors at the imperial court for sixty more years, and Athanasius went into exile five times.' },
  { s: 'JOVAN', pos: 'r', sym: 'vrana', t: 'Jerome wrote that one day the whole world groaned and was astonished to find itself Arian.' },
  { s: 'JOVAN', pos: 'c', t: 'The Goths received Christianity from the Arian bishop Ulfilas, and so the barbarian kingdoms of the West remained Arian for centuries. Only the Second Ecumenical Council, at Constantinople in 381, began to close the wound.' },
  { teo: 'arijanstvo' },
  { s: 'JOVAN', pos: 'c', t: 'But that is a story for another day. An old monk here on the Mountain has just given these acts to his disciple to copy. Let us see how it was.' },
  { mus: 'auto' },
  { go: 'prolog' },
];

S.prolog = [
  { bg: 'kelija' },
  { cap: 'Mount Athos, in the year of the Lord 1341' },
  { s: 'TEODOR', t: 'Father, that Calabrian scholar was in Karyes again. He said the light on Mount Tabor was created.' },
  { s: 'TEODOR', t: 'I asked him whether he was made of the same light, since he shines so brightly with cleverness. Everyone laughed.' },
  { s: 'NIL', t: 'And he?' },
  { s: 'TEODOR', t: '… He did not.' },
  { s: 'NIL', t: 'Then you did not win. You were only louder.' },
  { trez: -1, note: 'Your sobriety (νῆψις) has fallen. The oil lamps at the top left show how attentively you follow the debates.' },
  { n: 'The elder takes a volume down from the shelf.' },
  { s: 'NIL', t: 'You will copy the acts of the Council of Nicaea for me. No faster than one page a day.' },
  { s: 'TEODOR', t: 'I know those by heart. “I believe in one God…”' },
  { s: 'NIL', t: 'You know the words. You do not know what they cost. Read as if you had been there. As if you held the pen.' },
  { go: 'dolazak' },
];

S.dolazak = [
  { bg: 'nikeja', ch: null },
  { card: ['Case I', 'Nicaea in Bithynia, in the year of the Lord 325'] },
  { n: 'Philo the notary, stenographer to Bishop Alexander, arrives at the imperial council with a wax tablet and a stylus. You are Philo.' },
  { n: 'The gates of Nicaea are crowded. Bishops are arriving from the whole world, by the imperial post, at the state’s expense.' },
  { s: 'PAMFIL', t: 'You’re Philo? Pamphilus, imperial stenographer. I’ve been assigned to you. I write fast, but Greek… well, I write fast.' },
  { s: 'PAMFIL', t: 'Look at them! From Egypt, from Syria, even from Persia. That one’s from Scythia, they say. I didn’t even know there were Christians there.' },
  { n: 'Through the crowd an old man walks slowly, limping. Where his right eye should be there is only a healed wound.' },
  { s: 'FILON', t: 'Who is that?' },
  { s: 'PAMFIL', t: 'Paphnutius, bishop from the Upper Thebaid. In the persecution they put out his eye, cut the sinews of his leg and sent him to the mines.' },
  { s: 'PAMFIL', t: 'And look at the others. That one had his hands burned. That one sat in prison for years. Half these men carry wounds for the faith.' },
  { n: 'Paphnutius stops beside you and looks at your tablet.' },
  { sym: 'zrak', s: 'PAFNUTIJE', t: 'A notary? Write carefully, my son. We gave our eyes for this faith. Let us not lose it over a single word.' },
  { choice: [
    { t: 'Bow to the old man', do: [
      { s: 'PAFNUTIJE', t: 'Not to me, my son. I am only earth that has been dug up a little. God be with you.' } ] },
    { t: 'Ask him whether the wound still hurts', do: [
      { s: 'PAFNUTIJE', t: 'The eye? Not anymore. It hurts when I see brothers quarrel over the One for whom we suffered.' } ] },
  ] },
  { s: 'PAMFIL', t: '(whispers) They say the emperor will kiss his wound when he sees him. The emperor! Kiss it!' },
  { bg: 'odaje' },
  { s: 'ATANASIJE', t: 'Philo. Tomorrow the presbyter Arius testifies before the Council. Hosius has ordered the Alexandrian side to prepare its evidence.' },
  { s: 'ATANASIJE', t: 'Go through Nicaea. Write everything you hear and read into your codex. When nothing surprises you anymore, come to the Council.' },
  { note: 'The Codex (button at the top right, or the K key) keeps all your evidence. The Theologikon (T) keeps the explanations you unlock.' },
  { hub: 1 },
];

S.HUB = {
  title: 'Investigation in Nicaea',
  places: [
    { id: 'pristaniste', n: 'The harbor on the lake', bg: 'pristaniste' },
    { id: 'odaje', n: 'Quarters of the Alexandrian delegation', bg: 'odaje' },
    { id: 'skriptorijum', n: 'The scriptorium', bg: 'skriptorijum' },
    { id: 'bazilika', n: 'The basilica, morning service', bg: 'bazilika' },
    { id: 'dvoriste', n: 'The courtyard, evening', bg: 'dvoriste' },
    { id: 'arije_sam', n: 'The basilica, before vespers', bg: 'bazilika' },
  ],
  exit: { n: 'To the Council', go: 'atos1', need: 6, lock: 'Athanasius: “You haven’t been everywhere yet.”' },
};

S.pristaniste = [
  { bg: 'pristaniste', ch: null },
  { n: 'A sailor is unloading amphorae and singing. Pamphilus hums along quietly, then stops, embarrassed, when you look at him.' },
  { s: 'DOMETIJE', t: '♪ God was not always Father… there was when the Son was not… ♪' },
  { s: 'PAMFIL', t: 'What? It’s a nice tune. All of Alexandria sings it. Bakers, boatmen, millers…' },
  { give: 'e1' },
  { choice: [
    { t: '“Do you even know what you’re singing, you lout?”', do: [
      { trez: -1 },
      { s: 'DOMETIJE', t: 'Lout, he says. Go back to your bishops, sir.' },
      { n: 'Dometius lifts his amphora and leaves. Pamphilus gives you a sidelong look.' },
    ] },
    { t: '“Where did you learn that song?”', do: [
      { s: 'DOMETIJE', t: 'Why, from the presbyter Arius, sir. A good man. He wrote songs for us, for simple folk.' },
      { s: 'DOMETIJE', t: 'He says we don’t need the hard words the bishops use. We sing, they argue.' },
      { set: 'hint' }, { give: 'h1' },
    ] },
  ] },
  { hub: 1 },
];

S.odaje = [
  { bg: 'odaje', ch: null },
  { s: 'ATANASIJE', t: 'You bring me verses, Philo? Arius knows Scripture better than half these bishops. For every verse of yours he will have his own reading.' },
  { s: 'FILON', t: 'Then how do we defeat him?' },
  { s: 'ATANASIJE', t: 'You don’t defeat him. Let his own words defeat one another.' },
  { s: 'ATANASIJE', t: 'Read his letter to our bishop. Carefully. There he praises God with the very thing that will bring his teaching down.' },
  { give: 'e2' },
  { s: 'ATANASIJE', t: 'And this, which he wrote to Eusebius in Nicomedia. He is more candid here. One doesn’t guard one’s words with a friend.' },
  { give: 'e3' },
  { s: 'PAMFIL', t: '“From nothing.” Hm. I’m from nothing too, and nobody calls a council over me.' },
  { hub: 1 },
];

S.skriptorijum = [
  { bg: 'skriptorijum', ch: null },
  { s: 'PAMFIL', t: 'I’m copying the Proverbs of Solomon. Why does everyone keep talking about “chapter eight”? I don’t see anything special in it.' },
  { s: 'FILON', t: 'Arius always quotes one verse from it. Let me read the whole passage.' },
  { give: 'e4' },
  { mini: 'price' },
  { give: 'e5' },
  { s: 'PAMFIL', t: 'The other scrolls Athanasius asked for are here too. The Gospel of John, the Apostle… Take them, just don’t smudge them.' },
  { give: 'e6' }, { give: 'e7' }, { give: 'e8' }, { give: 'e9' },
  { hub: 1 },
];

S.bazilika = [
  { bg: 'bazilika', ch: null },
  { n: 'The morning service. They sing “Glory to the Father and to the Son and to the Holy Spirit.” In front of you stand Arius’s disciples from Alexandria.' },
  { n: 'When Christ is named, they too fall prostrate. Like everyone else.' },
  { s: 'PAMFIL', t: 'Look, they bow down too. So what are we fighting about?' },
  { s: 'FILON', t: '(That is exactly the point.)' },
  { give: 'e10' }, { give: 'e11' }, { give: 'e12' },
  { choice: [
    { t: 'Stay after the service to pray', req: 'trez4', lock: 'Your thoughts keep flying to tomorrow’s debate.', do: [
      { bg: 'nikolaj_molitva', ch: null },
      { sym: 'zrak', n: 'The church has emptied. Only one old bishop from Lycia remains. He prays motionless, hands raised.' },
      { n: 'He does not look at you. He says nothing. But after that prayer you feel lighter than you have all day.' },
      { trez: 1 },
      { s: 'PAMFIL', t: '(whispers) That’s the one from Myra. They say he once… Arius… oh, people say all sorts of things.' },
      { s: 'FILON', t: 'Don’t write that down, Pamphilus. That is not the record.' },
    ] },
    { t: 'Leave', do: [] },
  ] },
  { hub: 1 },
];

S.arije_sam = [
  { bg: 'bazilika', ch: null },
  { n: 'Before vespers the basilica is empty. Only one tall, gaunt man stands before the altar.' },
  { s: 'ARIJE', t: 'The notary of the Alexandrian side. Have you come to spy on me, or to pray?' },
  { choice: [
    { t: '“To pray.”', do: [ { s: 'ARIJE', t: 'Then we came for the same thing. Stand beside me, if you are not afraid.' } ] },
    { t: '“I came to understand you.”', do: [ { s: 'ARIJE', t: 'No one here even tries. Sit down.' } ] },
    { t: '“I came to see a heretic up close.”', do: [ { trez: -1 }, { s: 'ARIJE', t: 'And? Do I have horns? Look well, you will tell the story tomorrow.' } ] },
  ] },
  { s: 'ARIJE', t: 'Do you know why I am here, young man? Not for glory. I had glory in Alexandria. Here exile awaits me, and I know it.' },
  { s: 'ARIJE', t: 'I guard one thing: that God is one, unbegotten, without beginning. If the Son too is without beginning, then you have two Gods. That is paganism, only better dressed.' },
  { s: 'FILON', t: '(That is a serious objection. I cannot simply laugh it off.)' },
  { choice: [
    { t: 'Ask: “But if the Son was made, why do you worship Him?”', do: [
      { s: 'ARIJE', t: 'Because the Father glorified Him above all creation.' },
      { n: 'He pauses. For the first time he looks away.' },
      { s: 'ARIJE', t: 'Do not ask me that tomorrow in front of everyone, young man. It will not bring you what you think.' } ] },
    { t: 'Stay silent and listen', do: [
      { s: 'ARIJE', t: 'You are young. You think the truth is whatever wins. The truth is what remains when everyone has gone.' } ] },
  ] },
  { s: 'ARIJE', t: 'Go. And do not think I hate you. I hate only when people think God is easy.' },
  { n: 'Arius turns back to the altar and continues praying. You do not know why, but your hand writes nothing.' },
  { hub: 1 },
];

S.dvoriste = [
  { bg: 'dvoriste', ch: null },
  { n: 'Eusebius of Caesarea walks alone, a codex under his arm.' },
  { s: 'JK', t: 'I fear, young man, that we will leave this place with words that are not in Scripture.' },
  { s: 'JK', t: 'Once we let philosophical terms into the Creed, where will we stop?' },
  { s: 'FILON', t: 'And what would you propose, Your Grace?' },
  { s: 'JK', t: 'What my church in Caesarea confesses at baptism. It is old, it is accurate, and it is all from Scripture.' },
  { give: 'e13' },
  { s: 'FILON', t: '(It is accurate. But it is broad enough that even Arius could sign it.)' },
  { hub: 1 },
];

S.atos1 = [
  { bg: 'kelija', ch: null },
  { cap: 'Mount Athos, 1341' },
  { s: 'TEODOR', t: 'Father, Arius in these acts is neither wicked nor stupid. Why did I think heretics were stupid?' },
  { s: 'NIL', t: 'Because it is easier to defeat a stupid man. And you like to win.' },
  { s: 'TEODOR', t: '…' },
  { s: 'NIL', t: 'Keep copying. Tomorrow is the Council.' },
  { go: 'zidine' },
];

S.zidine = [
  { bg: 'zidine', ch: null },
  { cap: 'Nicaea, the night before the Council' },
  { n: 'The night before the Council. Athanasius stands on the walls, looking out over the lake.' },
  { s: 'ATANASIJE', t: 'Can’t sleep, Philo? Neither can I.' },
  { s: 'FILON', t: 'Father Deacon, may I ask something? What if Arius is right? He does not deny Christ. He worships Him. He calls Him God.' },
  { s: 'FILON', t: 'Does it really matter so much whether He was made?' },
  { s: 'ATANASIJE', t: 'A good question. Better you ask it of me tonight than of yourself tomorrow, in the hall.' },
  { s: 'ATANASIJE', t: 'Tell me: why did the Word become flesh?' },
  { choice: [
    { t: '“To show us how to live.”', do: [
      { s: 'ATANASIJE', t: 'That too. But a good man can give an example. God did not need to become man for an example.' } ] },
    { t: '“To free us from sin and death.”', do: [
      { s: 'ATANASIJE', t: 'Yes. But who can conquer death? A creature that is itself subject to non-being?' } ] },
    { t: '“To unite us with God.”', do: [
      { s: 'ATANASIJE', t: 'Yes. You have just said everything; you simply don’t know it yet.' } ] },
  ] },
  { sym: 'zrak', s: 'ATANASIJE', t: 'He became man that we might become gods. Not by nature, Philo, but by grace.' },
  { s: 'ATANASIJE', t: 'Now think. If the Son is a creature, then in Christ my nature was united only to another creature. Creature to creature. I remain where I was: far from God.' },
  { s: 'ATANASIJE', t: 'Only if the One who became man is true God has man truly touched God in Him.' },
  { s: 'ATANASIJE', t: 'That is why we are not quarreling over words, Philo. We are quarreling over whether we are saved.' },
  { teo: 'obozenje' },
  { n: 'From the tower comes the sound of Pamphilus snoring.' },
  { s: 'ATANASIJE', t: 'At least someone in Nicaea has a clear conscience. Go to sleep. Tomorrow you need a clear head.' },
  { go: 'r1_uvod' },
];

// ---- DEBATE I ----
S.r1_uvod = [
  { bg: 'sala', ch: null },
  { card: ['Debate I', 'The testimony of Arius'] },
  { pov: 'show' },
  { s: 'OSIJE', t: 'The Council is in session. Presbyter Arius, the Council hears you. Confess what you believe about the Father and the Son.' },
  { s: 'KONSTANTIN', t: 'And let this dispute be ended. The empire cannot have two faiths.' },
  { s: 'ARIJE', t: 'Gladly. I defend nothing new, Fathers. I defend what you defend: that God is one.' },
  { note: 'Arius gives his testimony. Press a statement to hear more. When you find a contradiction, present evidence from your codex. Wrong evidence costs you the Council’s trust (the seals at the top left).' },
  { testimony: 'r1' },
];

S.T = {};
S.T.r1 = {
  title: 'Testimony: “On the One God”',
  who: 'ARIJE',
  st: [
    '“I confess one God: alone unbegotten, alone eternal, alone unchangeable.”',
    '“The Son is a perfect creature of God, but not as one of the creatures.”',
    '“There was when He was not. The Son did not exist before He was begotten.”',
    '“Therefore God was not always Father. He became Father when He begot the Son.”',
    '“Scripture says so too: ‘The Lord created me as the beginning of his ways.’”',
  ],
  press: {
    0: [
      { s: 'FILON', t: 'Alone eternal? Only the Father?' },
      { s: 'ARIJE', t: 'Only the Father is without beginning. Your own bishop confesses that, does he not?' },
      { s: 'ALEKSANDAR', t: 'I confess that the Father is without beginning. But He is not the only one who is eternal.' },
      { s: 'PAMFIL', t: '(whispers) I’m writing: “alone unchangeable.” Sounds nice. Where have I heard that before?' },
    ],
    1: [
      { s: 'FILON', t: 'A creature, but not as one of the creatures? How so?' },
      { s: 'ARIJE', t: 'As the emperor is a man, but not as one of his subjects. Through the Son God made everything else.' },
      { s: 'FILON', t: '(Everything else was made through Him… and He Himself? Through whom did He come to be?)' },
    ],
    2: [
      { s: 'FILON', t: 'When was that, this “when He was not”?' },
      { s: 'ARIJE', t: 'Before time, young man. Do not ask me the day and the hour.' },
      { s: 'ATANASIJE', t: '(whispers) Ask him whether radiance can exist without light.', req: 'trez3' },
    ],
    3: [
      { s: 'FILON', t: 'So God became something He was not?' },
      { s: 'ARIJE', t: 'He became Father. What is there to dispute?' },
      { s: 'PAMFIL', t: '(whispers) Didn’t he write somewhere that God is unchangeable?' },
    ],
    '3b': [
      { s: 'ARIJE', t: 'A builder does not change when he builds a house. Nor does the Father when He gains a Son.' },
      { s: 'FILON', t: '(But does a builder beget a building? What did that passage in Proverbs say?)' },
    ],
    4: [
      { s: 'FILON', t: 'Wisdom in Proverbs speaks of herself?' },
      { s: 'ARIJE', t: 'Yes. And Wisdom is the Son. “Created me,” it says. Not “begot me.”' },
      { s: 'FILON', t: '(It doesn’t say that? And what does it say a little further on?)' },
    ],
    '4b': [
      { s: 'ARIJE', t: 'Men beget. God brings everything forth from nothing. For Him it is one and the same.' },
    ],
  },
  layers: [
    { at: 3, ev: 'e2', rep: [3, '“The Father is to the Son as a builder to a building. The builder does not change.”', '3b'], teo: 'otac', then: [
      { fx: 'stani' },
      { s: 'FILON', t: 'Presbyter, in your letter to our bishop you wrote that God alone is unchangeable.' },
      { s: 'FILON', t: 'And now you say that God once was not Father, and then became Father. If He became something He was not, then He changed.' },
      { fx: 'shake', who: 'ARIJE' },
      { n: 'A murmur among the bishops.' },
      { s: 'ARIJE', t: 'Clever. But fatherhood is not a change of essence. It is a new relation. As when a mason builds a house: he does not change, there is simply now a house.' },
      { s: 'PAMFIL', t: '(whispers) He’s good. I hate it when he’s good.' },
    ] },
    { at: 4, ev: 'e5', rep: [4, '“For God, ‘to beget’ and ‘to make’ are two words for the same thing.”', '4b'], teo: 'roditi', then: [
      { fx: 'stani' },
      { s: 'FILON', t: 'One should not cut the prophet off mid-sentence. Three verses later the same Wisdom says: “Before all the hills, he begets me.”' },
      { s: 'FILON', t: 'A builder does not beget a building, presbyter.' },
      { fx: 'shake', who: 'ARIJE' },
      { s: 'ARIJE', t: 'For God, “to beget” and “to make” are two words for the same thing. Men beget; God brings all things forth from nothing.' },
      { s: 'ARIJE', t: 'The Son is a creature, but the first and most perfect.' },
    ] },
    { at: 1, ev: 'e6', then: [
      { fx: 'stani' },
      { s: 'FILON', t: 'Then tell me this. The Evangelist says: all things were made through the Word, and without Him nothing was made that was made.' },
      { s: 'FILON', t: 'If the Son is a creature, He is something that was made. Through whom, then, was He made? Through Himself?' },
      { fx: 'shake', who: 'ARIJE' },
      { s: 'ARIJE', t: '… God made Him directly, so as to make everything else through Him.' },
      { s: 'ATANASIJE', t: 'So God considered the rest of creation unworthy of His touch, but the Son worthy? Then the Son is not like the rest of creation after all.' },
      { s: 'ATANASIJE', t: 'Either He is a creature, or He is not. Make up your mind, presbyter.' },
    ] },
  ],
  bonus: { at: 2, ev: 'e7', then: [
    { fx: 'stani' },
    { s: 'FILON', t: 'The Apostle says the Son is the radiance of the Father’s glory. Presbyter, has there ever been light without its radiance?' },
    { s: 'FILON', t: 'If the Son is the radiance of the Father, then the Father was never without Him. There was no “when He was not.”' },
    { s: 'ARIJE', t: 'An image, young man. A lovely image. But an image is not proof.' },
    { s: 'OSIJE', t: 'Nevertheless, the Council records it.' }, { pov: 1 },
  ] },
  special: {
    e4: [{ s: 'ARIJE', t: 'Thank you, young man. That is my verse.' }, { n: 'Laughter from the benches of Eusebius’s party.' }],
    'e8@1': [{ s: 'ARIJE', t: '“The firstborn of all creation.” You see? First among creatures. The Apostle is on my side.' }, { s: 'FILON', t: '(Colossians can be twisted. I need a verse that cannot.)' }],
  },
  wrong: [
    [{ s: 'OSIJE', t: 'Notary, this is not the forum. The Council has no time for guesswork.' }],
    [{ s: 'OSIJE', t: 'What does that have to do with the statement? Be careful what you present.' }],
    [{ s: 'ARIJE', t: 'I see no contradiction, young man. Perhaps you do?' }, { s: 'OSIJE', t: 'The Council does not.' }],
  ],
  done: 'r1_finale',
};

S.r1_finale = [
  { bg: 'sala', ch: 'arije' },
  { s: 'ARIJE', t: 'Fathers, this young man is clever. But catching a word is not the same as overturning a faith. I still confess one God.' },
  { s: 'FILON', t: '(There is something I haven’t told him yet. Something I saw, not something I read.)' },
  { ask: { q: 'What did you see this morning in the basilica?', ok: ['e10'], wrong: [{ s: 'FILON', t: '(No, not that. Something I saw with my own eyes.)' }], pen: 1 } },
  { fx: 'stani' },
  { s: 'FILON', t: 'Presbyter, this morning I stood behind your disciples at the service. They bowed down to Christ. Just as we do.' },
  { s: 'FILON', t: 'So I ask you before the Council: do you worship the Son?' },
  { s: 'ARIJE', t: 'Of course. God has glorified Him above all creation.' },
  { ask: { q: 'What does the Apostle say about worshipping a creature?', ok: ['e11'], wrong: [{ s: 'OSIJE', t: 'That does not answer the question, notary.' }], pen: 1 } },
  { fx: 'stani' },
  { s: 'FILON', t: 'Then hear the Apostle. Condemned are those who “worshipped and served the creature rather than the Creator.”' },
  { s: 'FILON', t: 'If the Son is a creature, then the whole Church that worships Him is idolatrous. And you with it. Either stop worshipping Him, or admit that He is not a creature.' },
  { fx: 'shake', who: 'ARIJE' },
  { bg: 'tajac', ch: null },
  { n: 'A long silence. For the first time, Arius does not answer at once.' },
  { s: 'ARIJE', t: '(quietly) I will not stop worshipping Him.', ch: 'keep' },
  { bg: 'sala' },
  { s: 'OSIJE', t: 'Then the Council has heard enough on this question. We adjourn until the next session.' },
  { teo: 'molitva' },
  { go: 'atos2' },
];

S.atos2 = [
  { bg: 'kelija', ch: null },
  { cap: 'Mount Athos, 1341' },
  { s: 'TEODOR', t: 'Philo beat him, Father! With his own words. Just as Athanasius said.' },
  { s: 'NIL', t: 'And what do you think Philo did after the session?' },
  { s: 'TEODOR', t: 'Celebrated, I suppose.' },
  { s: 'NIL', t: 'Read the next page.' },
  { go: 'kenodoksija' },
];

S.kenodoksija = [
  { bg: 'hodnik', ch: null },
  { n: 'The corridor outside the hall. Bishops clap you on the shoulder.' },
  { s: 'EPISKOP', t: 'Well done, young man! Alexandria has fine notaries.' },
  { s: 'PAMFIL', t: 'By evening all Nicaea will know your name! Can I write in the acts “and the notary Philo silenced the heretic”? In small letters?' },
  { n: 'Down the corridor Arius walks alone. No one walks beside him.' },
  { choice: [
    { t: 'Call out to Arius: “How did that go, presbyter?”', do: [
      { trez: -2 }, { n: 'The bishops laugh. Athanasius does not.' } ] },
    { t: 'Let Pamphilus write your name into the acts', do: [
      { trez: -1 }, { set: 'ime' }, { s: 'PAMFIL', t: 'Small letters. But beautiful ones!' } ] },
    { t: 'Loudly, in front of the bishops: “I will pray for his conversion.”', do: [
      { trez: -1 }, { s: 'EPISKOP', t: 'What a pious young man!' },
      { s: 'FILON', t: '(Why did I say that out loud?)' } ] },
    { t: 'Go back to your desk in silence and record Arius’s words exactly', do: [
      { trez: 1 }, { n: 'Athanasius sits down beside you. He watches what you write.' }, { s: 'ATANASIJE', t: 'Good.' } ] },
  ] },
  { teo: 'kenodoksija' },
  { note: 'Vainglory does not attack the one who loses, but the one who has just won.' },
  { go: 'r2' },
];

// ---- DEBATE II ----
S.r2 = [
  { bg: 'sala', ch: null },
  { card: ['Debate II', 'The battle for a word'] },
  { s: 'OSIJE', t: 'The Council now seeks words for the Creed. Words the whole Church will confess.' },
  { s: 'JN', t: 'We will accept any word from Scripture, Fathers. We have nothing to hide.' },
  { note: 'In this debate your opponent denies nothing. Watch what they do while they agree. The “Notice” option requires sobriety of 3 or more.' },
  { s: 'OSIJE', t: 'We propose: the Son is from God.' },
  { s: 'JN', t: 'We accept. Who would deny it?' },
  { choice: [
    { t: 'Notice: watch the benches of Eusebius’s party', req: 'trez3', lock: 'Your mind is full of applause.', do: [
      { n: 'One of Eusebius’s bishops leans toward another.' },
      { s: 'EPISKOP', t: '(whispers) Of course He is from God. Everything is from God.' },
      { fx: 'stani' },
      { s: 'FILON', t: 'Your Grace, the gnat is also from God. Is the Son from God as the gnat is?' },
      { n: 'Laughter in the hall. Hosius rings his bell.' }, { pov: 1 } ] },
    { t: 'Write it down and move on', do: [
      { s: 'ATANASIJE', t: '(rises) Fathers, they accept it because they say the gnat is also from God.' },
      { s: 'FILON', t: '(Athanasius saw it. I did not.)' } ] },
  ] },
  { s: 'OSIJE', t: 'The phrase is withdrawn. Then: the Son is the true power and image of the Father, like Him in all things, and always in the Father.' },
  { s: 'JN', t: 'We accept that too.' },
  { choice: [
    { t: 'Notice: follow the whispering and winking', req: 'trez3', lock: 'Your mind is full of applause.', do: [
      { n: 'Whispers and winks across the benches. You catch fragments.' },
      { s: 'EPISKOP', t: '(whispers) “Image”: man too is the image and glory of God. “Always”: we too are always, for we who live are always… And Scripture calls even the locust God’s “great power”!' },
      { s: 'PAMFIL', t: 'Wait. The locust? I’m supposed to write “locust” in the acts of an Ecumenical Council?' },
      { fx: 'stani' },
      { s: 'FILON', t: 'Write it. Let it be known how they read it. Fathers, they accept every biblical word, and then interpret it their own way.' },
      { pov: 1 } ] },
    { t: 'Write it down and move on', do: [
      { s: 'ATANASIJE', t: 'Fathers, I heard them. They say Scripture calls even the locust God’s power.' } ] },
  ] },
  { if: 'hint', then: [
    { s: 'FILON', t: '(Dometius… songs for simple folk. One language for the bishops, another for the boatmen.)' },
    { choice: [
      { t: 'Ask Eusebius what his boatmen sing', do: [
        { s: 'FILON', t: 'Your Grace, what do your boatmen sing in Alexandria?' },
        { s: 'JN', t: 'I do not know what boatmen sing.' },
        { fx: 'stani' },
        { s: 'FILON', t: 'I do. “There was when the Son was not.” For the bishops you have words from Scripture. For the people you have songs. And they are not the same.' },
        { fx: 'shake', who: 'JN' }, { pov: 1 },
        { n: 'For the first time, Eusebius of Nicomedia loses his smile.' } ] },
      { t: 'Stay silent', do: [] },
    ] },
  ] },
  { s: 'OSIJE', t: 'Then we propose words that cannot be twisted: the Son is from the essence of the Father, of one essence with the Father. ὁμοούσιος.' },
  { s: 'JK', t: 'That is not in Scripture. And it sounds as though the Father’s essence were divided into pieces, like gold at a goldsmith’s.' },
  { note: 'Eusebius of Caesarea is wavering. Convince him.' },
  { ask: { q: 'Who first brought unbiblical words into this dispute?', ok: ['e3', 'e1'], wrong: [{ s: 'JK', t: 'That does not answer my concern, young man.' }], pen: 1 } },
  { fx: 'stani' },
  { s: 'FILON', t: '“From nothing” is not in Scripture either, Your Grace. Nor is “there was when He was not.”' },
  { s: 'FILON', t: 'We did not bring in unbiblical words. They did. We only seek a word that says what Scripture says, and that no one can twist.' },
  { s: 'JK', t: 'Very well. But the division? If the Son is from the Father’s essence, has the Father not lost something?' },
  { ask: { q: 'How can the Son be from the Father without the Father being divided?', ok: ['e7'], wrong: [{ s: 'JK', t: 'I do not see how that resolves the division.' }], pen: 1 } },
  { fx: 'stani' },
  { s: 'FILON', t: 'Radiance does not cut a piece off the light, Your Grace. The light is whole, and the radiance is whole. They are the same in nature, and yet not one another.' },
  { s: 'JK', t: '(a long silence) … I will sign. But I will write to my flock how I understood it.' },
  { teo: 'homoousios' },
  { s: 'PAMFIL', t: 'Here’s the fair copy of the Creed for signing! I wrote it fast, but beautifully.' },
  { s: 'ATANASIJE', t: 'Philo, check it before it goes to the emperor.' },
  { mini: 'jota' },
  { go: 'atos3' },
];

S.atos3 = [
  { bg: 'kelija', ch: null },
  { cap: 'Mount Athos, 1341' },
  { s: 'TEODOR', t: 'One iota, Father. Over a single letter…' },
  { s: 'NIL', t: 'When a physician is off by one drop in a medicine, is that a trifle?' },
  { s: 'TEODOR', t: 'No.' },
  { s: 'NIL', t: 'Neither is this.' },
  { go: 'epilog' },
];

S.epilog = [
  { bg: 'sala', ch: null },
  { n: 'The Council confesses the Creed with the word ὁμοούσιος. Arius refuses to sign. Together with two Libyan bishops he is sent into exile.' },
  { bg: 'brod', ch: null },
  { n: 'The last evening in Nicaea. Arius boards a ship. The same one Dometius was unloading.' },
  { s: 'FILON', t: 'Athanasius, did we win?', ch: 'none' },
  { s: 'ATANASIJE', t: 'The truth was defended. That is not the same as winning. If he had yielded, that would have been a victory.' },
  { s: 'PAMFIL', t: '(hums, then stops himself) … I need to learn a different tune.' },
  { choice: [
    { t: 'Pray quietly for Arius, by name', req: 'trez4', lock: 'You cannot collect yourself. Your thoughts are still in the hall.', do: [
      { ch: null }, { n: 'No points. No sound. Only the ship slowly vanishing into the dusk.' }, { teo: 'anatema' } ] },
    { t: 'Watch the ship sail away', do: [ { ch: null }, { n: 'The ship slowly vanishes into the dusk.' } ] },
  ] },
  { mus: 'kraj' },
  { bg: 'kelija', ch: null },
  { cap: 'Mount Athos, 1341' },
  { if: 'ime', then: [ { s: 'TEODOR', t: '(In the margin of the acts, in tiny letters: “and the notary Philo silenced the heretic.” I am ashamed, and I didn’t even write it.)' } ] },
  { s: 'NIL', t: 'Well? Who won at Nicaea?' },
  { choice: [
    { t: '“Athanasius.”', do: [ { s: 'NIL', t: 'Athanasius went into exile five times for it. That is what victories look like.' } ] },
    { t: '“Philo. The notary.”', do: [ { s: 'NIL', t: 'Who? He is not in a single book. Perhaps that is why he stayed sober.' } ] },
    { t: '“No one. Arius died outside the Church.”', do: [ { s: 'NIL', t: 'Now you have read something.' } ] },
  ] },
  { s: 'TEODOR', t: 'Father… tomorrow I’m going to Karyes. To that Calabrian scholar.' },
  { s: 'NIL', t: 'To defeat him?' },
  { s: 'TEODOR', t: 'To listen to him. And then to ask him about what he himself says. In his own words.' },
  { s: 'NIL', t: 'Take some bread too. A hungry man listens badly.' },
  { trez: 'full' },
  { bg: 'biblioteka', ch: null },
  { s: 'JOVAN', pos: 'l', sym: 'vrana', t: 'Arius died eleven years later, in Constantinople, outside the communion of the Church. On the eve of the day his friends meant to bring him back into it.' },
  { s: 'JOVAN', pos: 'r', t: 'Athanasius survived five exiles and outlived the emperors who persecuted him. And the Creed that Philo copied we still read today, with what the Fathers added to it at Constantinople.' },
  { s: 'JOVAN', pos: 'c', sym: 'golub', t: 'But of Constantinople, and of the Holy Spirit, another time. My lamp is going out, traveler.' },
  { end: 1 },
];

const MINI = {
  price: {
    q: 'Proverbs 8:22–25. Find the verse that overturns Arius’s reading.',
    lines: [
      ['22', 'The Lord created me as the beginning of his ways, for his works.'],
      ['23', 'Before the ages he established me, in the beginning, before he made the earth,'],
      ['24', 'before he made the depths, before the springs of water came forth,'],
      ['25', 'before the mountains were settled, before all the hills, he begets me.'],
    ],
    ok: 3,
    miss: ['That is the verse Arius quotes. Read on.', 'This says nothing new. Read on.', 'Close. Read the next verse.'],
    win: [
      { s: 'FILON', t: '“Before all the hills, he begets me.” Not makes. Begets. The same passage, three verses later.' },
      { s: 'PAMFIL', t: 'So why does Arius always stop at verse twenty-two?' },
      { s: 'FILON', t: 'Now that is what we will ask him.' },
    ],
  },
  jota: {
    q: 'Check Pamphilus’s fair copy. Find the error.',
    text: 'Πιστεύομεν εἰς ἕνα Θεὸν Πατέρα παντοκράτορα, πάντων ὁρατῶν τε καὶ ἀοράτων ποιητήν· καὶ εἰς ἕνα Κύριον Ἰησοῦν Χριστόν, τὸν Υἱὸν τοῦ Θεοῦ, γεννηθέντα ἐκ τοῦ Πατρὸς μονογενῆ, τουτέστιν ἐκ τῆς οὐσίας τοῦ Πατρός, Θεὸν ἐκ Θεοῦ, φῶς ἐκ φωτός, Θεὸν ἀληθινὸν ἐκ Θεοῦ ἀληθινοῦ, γεννηθέντα οὐ ποιηθέντα, ὁμοιούσιον τῷ Πατρί…',
    bad: 'ὁμοιούσιον',
    tr: '“We believe in one God, the Father Almighty, Maker of all things visible and invisible; and in one Lord Jesus Christ, the Son of God, begotten of the Father, only-begotten, that is, from the essence of the Father, God from God, Light from Light, true God from true God, begotten, not made, of one essence with the Father…”',
  },
};

S.jota_found = [
  { s: 'PAMFIL', t: 'One iota! Who’s going to notice that?' },
  { s: 'FILON', t: 'With one iota, Pamphilus, the Son becomes merely “like” the Father. And like means other.' },
  { teo: 'jota' },
];
S.jota_missed = [
  { s: 'ATANASIJE', t: '(takes the sheet) Ὁμοιούσιον. One iota too many. “Of similar essence” instead of “of the same essence.” Pay attention, notary.' },
  { s: 'PAMFIL', t: 'One iota… who’s going to notice that?' },
  { s: 'ATANASIJE', t: 'Everyone who wants not to.' },
];

return { C, EV, TEO, S, MINI };
})();
