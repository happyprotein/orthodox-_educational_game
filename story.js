// Ni jote — Slučaj I: Nikeja 325. Scenario i podaci.
window.STORY = (function () {
const C = {
  FILON: { n: 'Filon', p: 'filon' },
  PAMFIL: { n: 'Pamfil', p: 'pamfil' },
  ARIJE: { n: 'Arije', p: 'arije' },
  ATANASIJE: { n: 'Đakon Atanasije', p: 'atanasije' },
  OSIJE: { n: 'Osije Kordovski', p: 'osije' },
  ALEKSANDAR: { n: 'Aleksandar Aleksandrijski', p: 'aleksandar' },
  JN: { n: 'Jevsevije Nikomidijski', p: 'jevsevije_nikomidijski' },
  JK: { n: 'Jevsevije Kesarijski', p: 'jevsevije_kesarijski' },
  KONSTANTIN: { n: 'Car Konstantin', p: 'konstantin' },
  DOMETIJE: { n: 'Dometije', p: 'dometije' },
  NIKOLAJ: { n: 'Nikolaj Mirlikijski', p: 'nikolaj' },
  TEODOR: { n: 'Teodor', p: 'teodor' },
  NIL: { n: 'Starac Nil', p: 'starac_nil' },
  EPISKOP: { n: 'Jedan episkop', p: null },
  JOVAN: { n: 'Jovan Hronograf', p: 'jovan', f: 'r' },
  PAFNUTIJE: { n: 'Pafnutije Tebaidski', p: 'pafnutije' },
};

const EV = {
  e1: { i: 'svitak', n: 'Stih iz „Talije“', d: 'Arijeva pjesma koju pjevaju lađari: „Bog nije uvijek bio Otac; bijaše kad ne bijaše Sina.“ (ἦν ποτε ὅτε οὐκ ἦν)' },
  e2: { i: 'pismo', n: 'Pismo Aleksandru', d: 'Arije o Bogu: On je „jedini nerođen, jedini vječan, jedini nepromjenljiv“.' },
  e3: { i: 'pismo', n: 'Pismo Jevseviju', d: 'Arije o Sinu: „nije bio prije nego što je rođen“ i „iz nepostojećeg je“ (ἐξ οὐκ ὄντων).' },
  e4: { i: 'kodeks', n: 'Priče 8,22', d: '„Gospod me sazda kao početak puteva svojih.“ Arijev omiljeni stih.' },
  e5: { i: 'kodeks', n: 'Priče 8,25', d: '„Prije nego se gore utvrdiše, prije svih brda rađa me.“ Isti odlomak, tri stiha niže.' },
  e6: { i: 'kodeks', n: 'Jovan 1,1–3', d: '„U početku bješe Riječ… Sve je kroz Nju postalo, i bez Nje ništa nije postalo što je postalo.“' },
  e7: { i: 'kodeks', n: 'Jevrejima 1,3', d: 'Sin je „sjaj slave i obličje bića Njegova“.' },
  e8: { i: 'kodeks', n: 'Kološanima 1,15–17', d: '„Prvorođeni svake tvari… kroz Njega bi sazdano sve… i On je prije svega.“' },
  e9: { i: 'kodeks', n: 'Jevrejima 13,8', d: '„Isus Hristos isti je juče i danas i vavijek.“' },
  e10: { i: 'tablica', n: 'Arijevci se klanjaju Sinu', d: 'Zapažanje sa jutarnje službe: i Arijevi učenici se klanjaju Hristu.' },
  e11: { i: 'kodeks', n: 'Rimljanima 1,25', d: 'Osuda onih koji „služahu tvari umjesto Tvorcu“.' },
  e12: { i: 'kodeks', n: 'Matej 28,19', d: 'Krštenje „u ime Oca i Sina i Svetoga Duha“.' },
  e13: { i: 'simvol', n: 'Simvol Kesarije', d: 'Krsno ispovijedanje Jevsevija Kesarijskog. Tačno, ali dovoljno široko da ga i Arije potpiše.' },
  h1: { i: 'amfora', n: 'Nagovještaj: dva jezika', d: 'Dometije kaže da je Arije pjesme pisao „za prost narod, da ne mora da zna teške riječi“. Jedan jezik za narod, drugi za episkope?' },
};

const TEO = {
  arijanstvo: { n: 'Šta je arijanstvo', t: `Arijanstvo je učenje aleksandrijskog prezvitera Arija (oko 256–336): Sin Božiji nije vječan, nego je stvoren „iz nepostojećeg“, prije vremena i prije svijeta, ali ipak stvoren. Samo je Otac pravi Bog, a Sin je Njegovo najuzvišenije djelo.\n\nArije je htio da sačuva jedinstvo Boga, oslanjajući se na grčku misao da je Bog jedan i nerođen. Prvi vaseljenski sabor u Nikeji (325) osudio je to učenje, ali je arijanstvo još decenijama imalo zaštitnike na carskom dvoru. U Carstvu ga je potisnuo Drugi vaseljenski sabor (Carigrad, 381), a germanski narodi koji su ga primili preko Vulfile napuštali su ga postepeno, sve do 7. vijeka.`, s: 'Sokrat Sholastik, Crkvena istorija I; Epifanije, Panarion 69' },
  obozenje: { n: 'Oboženje (θέωσις)', t: `Atanasije je zapisao: „On je postao čovjek da bismo mi postali bogovi“ (Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν).\n\nTo ne znači da čovjek postaje Bog po prirodi, nego da po blagodati učestvuje u Božijem životu. Ali to je moguće samo ako je Onaj koji je postao čovjek pravi Bog. Zato je spor u Nikeji bio spor o spasenju: stvorenje ne može drugo stvorenje sjediniti s Bogom.`, s: 'Atanasije, O ovaploćenju Logosa 54' },
  otac: { n: 'Otac je uvijek Otac', t: `Arije je tvrdio da „bijaše kad ne bijaše Sina“, pa da Bog nije uvijek bio Otac. Ali očinstvo nije uloga koju Bog dobija, nego ono što On jeste. Ako je Bog jednom postao Otac, onda se promijenio, a sam Arije ispovijeda da je Bog nepromjenljiv.\n\nAleksandar Aleksandrijski je dodavao: Sin je Riječ i Mudrost Božija. Bog bez Sina bio bi Bog bez Riječi i bez Mudrosti. Zato Crkva ispovijeda da je Sin rođen „prije svih vjekova“, a ne u nekom trenutku.`, s: 'Aleksandar, pismo Aleksandru Solunskom' },
  roditi: { n: 'Roditi i stvoriti', t: `Ono što je rođeno iste je prirode kao onaj ko ga rađa: čovjek rađa čovjeka. Ono što je stvoreno druge je prirode od onoga ko ga stvara: zidar ne rađa kuću, nego je gradi.\n\nZato Simvol kaže za Sina „rođen, a ne stvoren“ (γεννηθέντα, οὐ ποιηθέντα). Svijet je stvoren iz ničega. Sin je rođen iz Oca i iste je prirode s Njim.`, s: 'Atanasije, Protiv arijanaca II' },
  molitva: { n: 'Molitva kao dokaz', t: `Lex orandi, lex credendi: kako se Crkva moli, tako i vjeruje. Hrišćani su se Hristu klanjali od početka, u molitvi, pjesmi i krštenju.\n\nAko je Sin stvorenje, to klanjanje je idolopoklonstvo, jer se klanjamo tvari umjesto Tvorcu (Rim 1,25). Arije je htio da zadrži klanjanje, a odbaci Božanstvo. Dogma je samo imenovala ono što se u Crkvi već molilo.`, s: 'Atanasije, Protiv arijanaca' },
  homoousios: { n: 'ὁμοούσιος — jednosuštan', t: `Riječi nema u Pismu, i to je Oce mučilo. Ali biblijske izraze („od Boga“, „sila“, „obraz“, „uvijek“) Arijeva strana je prihvatala, pa ih tumačila po svome. Atanasije bilježi kako su se pritom došaptavali i namigivali.\n\nZato je Sabor uzeo riječ koja se nije dala izvrnuti: Sin je „iz suštine Očeve“ i jednosuštan Ocu. Nebiblijska riječ je tu da sačuva biblijski smisao.`, s: 'Atanasije, O odlukama Nikejskog sabora 19–20' },
  kenodoksija: { n: 'Kenodoksija', t: `Kenodoksija je sujeta, želja za tuđom pohvalom. Evagrije je ubraja među osam pomisli i primjećuje nešto podmuklo: ona jedina raste i iz same vrline. Čovjek koji je pobijedio sujetu počne da se hvali tom pobjedom.\n\nZato ne napada onoga ko gubi, nego onoga ko je upravo pobijedio. Lijek je skrivenost i tačnost u malim stvarima.`, s: 'Evagrije, Praktikos' },
  jota: { n: 'Jedna jota', t: `ὁμοούσιος znači „iste suštine“, a ὁμοιούσιος „slične suštine“. Razlika je jedno slovo, jota.\n\nOko te jote vodiće se borba decenijama poslije Nikeje. Stranka „sličnosuštnika“ javlja se tek 350-ih godina. Mnoge od njih će Kapadokijci, Vasilije Veliki i njegovi drugovi, strpljivo privesti nikejskoj vjeri. Ali „sličan“ uvijek znači i „drugi“.`, s: 'Vasilije Veliki, pisma', g: true },
  anatema: { n: 'Anatema nije mržnja', t: `Anatema označava granicu zajednice: ovo učenje nije vjera Crkve. Ona ne izražava želju da čovjek propadne.\n\nCrkva i danas, na Nedjelju pravoslavlja, čita anateme, ali se u istim službama moli za obraćenje svih. Filon je pomenuo Arija u molitvi, i to je istinski kraj ovog slučaja.`, s: 'Jovan Zlatousti, Slovo o anatemi (pripisuje mu se)', g: true },
};

const S = {};

S.uvod = [
  { mus: 'uvod' },
  { bg: 'biblioteka', ch: null },
  { cap: 'Velika Lavra, Sveta Gora' },
  { s: 'JOVAN', pos: 'c', t: 'Dobro došao, putniče. Ja sam Jovan, bibliotekar ove Lavre. Prije nego što otvoriš ova akta, dozvoli starcu da ti kaže šta u njima piše, i koliko su skupo plaćena.' },
  { bg: 'odaje' },
  { s: 'JOVAN', pos: 'l', t: 'Aleksandrija, oko 318. godine. Luka, biblioteka, filosofi. I Crkva koja je tek preživjela Dioklecijanov progon.' },
  { s: 'JOVAN', pos: 'l', t: 'U crkvi zvanoj Bavkalis propovijeda prezviter Arije. Rodom je iz Libije, visok, mršav, podvižnik, učen u školi Lukijana Antiohijskog.' },
  { s: 'JOVAN', pos: 'r', t: 'Narod ga voli. Epifanije piše da ga je slijedilo sedam stotina posvećenih djevica.' },
  { s: 'JOVAN', pos: 'r', t: 'Arije je htio da sačuva ono što je svima sveto: da je Bog jedan. Pa je zaključio: ako je samo Otac nerođen, onda je Sin stvoren.' },
  { s: 'JOVAN', pos: 'l', t: 'Najuzvišenije stvorenje, kroz koje je sve ostalo stvoreno. Ali ipak stvorenje. „Bijaše kad ne bijaše“, govorio je. Bilo je vrijeme kad Sina nije bilo.' },
  { s: 'JOVAN', pos: 'c', sym: 'zrak', t: 'Zvuči kao prepirka učenih ljudi. Ali pomisli: ako Hristos nije Bog, ko nas je onda spasio?' },
  { s: 'JOVAN', pos: 'c', t: 'Stvorenje ne može drugo stvorenje sjediniti s Bogom. Ako je Arije u pravu, između Boga i čovjeka ostaje provalija koju niko nije premostio.' },
  { s: 'JOVAN', pos: 'r', sym: 'vrana', t: 'Episkop Aleksandar ga je opominjao, pa sazvao sabor episkopa Egipta i Libije. Arije je izopšten. Ali nije utihnuo.' },
  { bg: 'pristaniste' },
  { s: 'JOVAN', pos: 'l', t: 'Otišao je prijateljima. Najmoćniji među njima bio je Jevsevije, episkop Nikomidije, grada u kome je tada stolovao car.' },
  { s: 'JOVAN', pos: 'r', t: 'Pisma su letjela preko mora. Episkopi Istoka su se podijelili, a Arijeve pjesme su pjevali lađari i mlinari.' },
  { s: 'JOVAN', pos: 'l', sym: 'golub', t: 'Car Konstantin je 324. godine tek ujedinio carstvo. Poslao je Osija iz Kordove s pismom: ovo je sitno pitanje, pomirite se. Nisu se pomirili.' },
  { bg: 'nikeja' },
  { s: 'JOVAN', pos: 'r', t: 'Zato je car učinio ono što niko prije njega nije: sazvao je episkope cijele vaseljene. U Nikeju, ljeta 325. Predanje kaže, trista osamnaest Otaca.' },
  { bg: 'biblioteka' },
  { s: 'JOVAN', pos: 'l', t: 'Nikeja nije bila kraj. Arijanstvo je još šezdeset godina imalo zaštitnike na carskom dvoru, a Atanasije je pet puta išao u izgnanstvo.' },
  { s: 'JOVAN', pos: 'r', sym: 'vrana', t: 'Jeronim je zapisao da je svijet jednog dana zastenjao i začudio se što je postao arijanski.' },
  { s: 'JOVAN', pos: 'c', t: 'Goti su hrišćanstvo primili od arijanskog episkopa Vulfile, pa su varvarska kraljevstva Zapada vjekovima ostala arijanska. Ranu je tek Drugi vaseljenski sabor, u Carigradu 381, počeo da zatvara.' },
  { teo: 'arijanstvo' },
  { s: 'JOVAN', pos: 'c', t: 'Ali to je za neki drugi put. Jedan stari monah, ovdje na Gori, upravo je dao svom učeniku ova akta da ih prepiše. Hajde da vidimo kako je to bilo.' },
  { mus: 'auto' },
  { go: 'prolog' },
];

S.prolog = [
  { bg: 'kelija' },
  { cap: 'Sveta Gora, ljeto Gospodnje 1341.' },
  { s: 'TEODOR', t: 'Oče, opet je bio onaj kalabrijski učenjak u Kareji. Govorio je da je svjetlost na Tavoru stvorena.' },
  { s: 'TEODOR', t: 'Pitao sam ga da li je i on stvoren od iste svjetlosti, kad tako sija od pameti. Svi su se smijali.' },
  { s: 'NIL', t: 'I on?' },
  { s: 'TEODOR', t: '… On nije.' },
  { s: 'NIL', t: 'Onda nisi pobijedio. Samo si bio glasniji.' },
  { trez: -1, note: 'Trezvenost (νῆψις) je opala. Uljanice gore lijevo pokazuju koliko pažljivo pratiš rasprave.' },
  { n: 'Starac skida sa police jedan svezak.' },
  { s: 'NIL', t: 'Prepisaćeš mi akta Nikejskog sabora. Ne brže od jedne stranice dnevno.' },
  { s: 'TEODOR', t: 'To znam napamet. „Vjerujem u jednoga Boga…“' },
  { s: 'NIL', t: 'Znaš riječi. Ne znaš koliko su koštale. Čitaj kao da si ti bio tamo. Kao da ti držiš pero.' },
  { go: 'dolazak' },
];

S.dolazak = [
  { bg: 'nikeja', ch: null },
  { card: ['Slučaj I', 'Nikeja Vitinijska, ljeto Gospodnje 325.'] },
  { n: 'Notarij Filon, tahigraf episkopa Aleksandra, stiže na carski sabor sa tablicom i stilusom. Ti si Filon.' },
  { n: 'Na kapijama Nikeje gužva. Episkopi stižu iz cijele vaseljene, carskom poštom, o državnom trošku.' },
  { s: 'PAMFIL', t: 'Ti si Filon? Pamfil, carski stenograf. Dodijeljen sam ti. Pišem brzo, ali grčki… pa, pišem brzo.' },
  { s: 'PAMFIL', t: 'Gledaj ih! Iz Egipta, iz Sirije, čak iz Persije. Onaj tamo je iz Skitije, kažu. Nisam ni znao da tamo ima hrišćana.' },
  { n: 'Kroz gomilu polako prolazi starac koji šepa. Na mjestu desnog oka ima samo zaraslu ranu.' },
  { s: 'FILON', t: 'Ko je to?' },
  { s: 'PAMFIL', t: 'Pafnutije, episkop iz Gornje Tebaide. U progonu su mu izvadili oko i presjekli tetivu na nozi, pa ga poslali u rudnike.' },
  { s: 'PAMFIL', t: 'A pogledaj ostale. Onom su spalili ruke. Onaj tamo je godinama bio u tamnici. Pola ovih ljudi nosi rane za vjeru.' },
  { n: 'Pafnutije zastaje pored tebe i gleda tvoju tablicu.' },
  { sym: 'zrak', s: 'PAFNUTIJE', t: 'Notarij? Piši pažljivo, sinko. Mi smo za ovu vjeru dali oči. Neka je ne izgubimo zbog jedne riječi.' },
  { choice: [
    { t: 'Pokloni se starcu', do: [
      { s: 'PAFNUTIJE', t: 'Ne meni, sinko. Ja sam samo zemlja koju su malo prekopali. Bog s tobom.' } ] },
    { t: 'Pitaj ga da li ga rana još boli', do: [
      { s: 'PAFNUTIJE', t: 'Oko? Ne više. Boli me kad vidim da se braća svađaju oko Onoga za koga smo stradali.' } ] },
  ] },
  { s: 'PAMFIL', t: '(šapuće) Kažu da će mu car poljubiti ranu kad ga vidi. Car! Poljubiti!' },
  { bg: 'odaje' },
  { s: 'ATANASIJE', t: 'Filone. Sutra prezviter Arije svjedoči pred Saborom. Osije je naredio da aleksandrijska strana spremi dokaze.' },
  { s: 'ATANASIJE', t: 'Obiđi Nikeju. Sve što čuješ i pročitaš upiši u kodeks. Kad te ništa više ne bude iznenađivalo, dođi na Sabor.' },
  { note: 'Kodeks (dugme gore desno ili taster K) čuva sve dokaze. Teologikon (T) čuva objašnjenja koja otključaš.' },
  { hub: 1 },
];

S.HUB = {
  title: 'Istraga u Nikeji',
  places: [
    { id: 'pristaniste', n: 'Pristanište na jezeru', bg: 'pristaniste' },
    { id: 'odaje', n: 'Odaje aleksandrijske delegacije', bg: 'odaje' },
    { id: 'skriptorijum', n: 'Skriptorijum', bg: 'skriptorijum' },
    { id: 'bazilika', n: 'Bazilika, jutarnja služba', bg: 'bazilika' },
    { id: 'dvoriste', n: 'Dvorište, uveče', bg: 'dvoriste' },
    { id: 'arije_sam', n: 'Bazilika, pred večernje', bg: 'bazilika' },
  ],
  exit: { n: 'Na Sabor', go: 'atos1', need: 6, lock: 'Atanasije: „Još nisi sve obišao.“' },
};

S.pristaniste = [
  { bg: 'pristaniste', ch: null },
  { n: 'Mornar istovara amfore i pjeva. Pamfil tiho pjevuši s njim, pa se zbuni kad ga pogledaš.' },
  { s: 'DOMETIJE', t: '♪ Bog nije uvijek bio Otac… bijaše kad Sina ne bijaše… ♪' },
  { s: 'PAMFIL', t: 'Šta? Lijepa je melodija. Cijela Aleksandrija to pjeva. Pekari, lađari, mlinari…' },
  { give: 'e1' },
  { choice: [
    { t: '„Znaš li ti uopšte šta pjevaš, prostaku?“', do: [
      { trez: -1 },
      { s: 'DOMETIJE', t: 'Prostak, kaže. Idi ti, gospodine, svojim episkopima.' },
      { n: 'Dometije podiže amforu i odlazi. Pamfil te gleda ispod oka.' },
    ] },
    { t: '„Gdje si naučio tu pjesmu?“', do: [
      { s: 'DOMETIJE', t: 'Pa od prezvitera Arija, gospodine. Dobar je to čovjek. Pisao je pjesme za nas, za prost narod.' },
      { s: 'DOMETIJE', t: 'Kaže, da ne moramo znati teške riječi što ih episkopi govore. Mi pjevamo, oni se prepiru.' },
      { set: 'hint' }, { give: 'h1' },
    ] },
  ] },
  { hub: 1 },
];

S.odaje = [
  { bg: 'odaje', ch: null },
  { s: 'ATANASIJE', t: 'Donašaš mi stihove, Filone? Arije zna Pismo bolje od pola ovih episkopa. Za svaki tvoj stih imaće svoje tumačenje.' },
  { s: 'FILON', t: 'Pa kako onda da ga pobijedimo?' },
  { s: 'ATANASIJE', t: 'Ne pobjeđuješ ti njega. Pusti da njegove riječi pobijede jedna drugu.' },
  { s: 'ATANASIJE', t: 'Pročitaj njegovo pismo našem episkopu. Pažljivo. On tamo hvali Boga tačno onim što mu na kraju ruši učenje.' },
  { give: 'e2' },
  { s: 'ATANASIJE', t: 'I ovo, što je pisao Jevseviju u Nikomidiju. Tu je iskreniji. Prijatelju se ne pazi na riječi.' },
  { give: 'e3' },
  { s: 'PAMFIL', t: '„Iz nepostojećeg.“ Hm. I ja sam iz nepostojećeg, pa niko ne pravi sabor zbog mene.' },
  { hub: 1 },
];

S.skriptorijum = [
  { bg: 'skriptorijum', ch: null },
  { s: 'PAMFIL', t: 'Prepisujem Priče Solomonove. Zašto svi stalno spominju „osmu glavu“? Ja tu ne vidim ništa posebno.' },
  { s: 'FILON', t: 'Arije uvijek citira jedan stih odatle. Daj da pročitam cijeli odlomak.' },
  { give: 'e4' },
  { mini: 'price' },
  { give: 'e5' },
  { s: 'PAMFIL', t: 'Ovdje su i ostali svici koje je Atanasije tražio. Jevanđelje po Jovanu, Apostol… Uzmi, samo nemoj umrljati.' },
  { give: 'e6' }, { give: 'e7' }, { give: 'e8' }, { give: 'e9' },
  { hub: 1 },
];

S.bazilika = [
  { bg: 'bazilika', ch: null },
  { n: 'Jutarnja služba. Pjevaju „Slava Ocu i Sinu i Svetome Duhu“. Ispred tebe stoje Arijevi učenici iz Aleksandrije.' },
  { n: 'Kad se pominje Hristos, i oni padaju ničice. Kao i svi ostali.' },
  { s: 'PAMFIL', t: 'Gle, i oni se klanjaju. Pa šta se onda svađamo?' },
  { s: 'FILON', t: '(Baš zato.)' },
  { give: 'e10' }, { give: 'e11' }, { give: 'e12' },
  { choice: [
    { t: 'Ostani poslije službe da se pomoliš', req: 'trez4', lock: 'Misli ti lete na sutrašnju raspravu.', do: [
      { bg: 'nikolaj_molitva', ch: null },
      { sym: 'zrak', n: 'Crkva se ispraznila. Ostao je samo jedan stari episkop iz Likije. Moli se nepomično, podignutih ruku.' },
      { n: 'Ne gleda te. Ne kaže ništa. Ali poslije te molitve ti je lakše nego cijelog dana.' },
      { trez: 1 },
      { s: 'PAMFIL', t: '(šapuće) To je onaj iz Mire. Kažu da je jednom Arija… ma, kažu svašta.' },
      { s: 'FILON', t: 'Ne zapisuj to, Pamfile. To nije zapisnik.' },
    ] },
    { t: 'Izađi', do: [] },
  ] },
  { hub: 1 },
];

S.arije_sam = [
  { bg: 'bazilika', ch: null },
  { n: 'Pred večernje bazilika je prazna. Samo jedan visok, mršav čovjek stoji pred oltarom.' },
  { s: 'ARIJE', t: 'Notarij aleksandrijske strane. Došao si da me špijuniraš, ili da se pomoliš?' },
  { choice: [
    { t: '„Da se pomolim.“', do: [ { s: 'ARIJE', t: 'Onda smo došli zbog istog. Stani pored mene, ako te nije strah.' } ] },
    { t: '„Došao sam da vas razumijem.“', do: [ { s: 'ARIJE', t: 'To ovdje niko ne pokušava. Sjedi.' } ] },
    { t: '„Došao sam da vidim jeretika izbliza.“', do: [ { trez: -1 }, { s: 'ARIJE', t: 'I? Imam li rogove? Gledaj dobro, sutra ćeš pričati o tome.' } ] },
  ] },
  { s: 'ARIJE', t: 'Znaš li zašto sam ovdje, mladiću? Ne zbog slave. Slavu sam imao u Aleksandriji. Ovdje me čeka izgnanstvo, i to znam.' },
  { s: 'ARIJE', t: 'Ja čuvam jedno: da je Bog jedan, nerođen, bez početka. Ako ni Sin nema početka, onda imate dva Boga. To je paganstvo, samo ljepše obučeno.' },
  { s: 'FILON', t: '(Ovo je ozbiljan prigovor. Ne mogu ga samo ismijati.)' },
  { choice: [
    { t: 'Pitaj: „A ako je Sin stvoren, zašto Mu se klanjate?“', do: [
      { s: 'ARIJE', t: 'Zato što Ga je Otac proslavio iznad svake tvari.' },
      { n: 'Zastane. Prvi put skrene pogled.' },
      { s: 'ARIJE', t: 'Nemoj me to pitati sutra pred svima, mladiću. Neće ti donijeti ono što misliš.' } ] },
    { t: 'Ćuti i slušaj', do: [
      { s: 'ARIJE', t: 'Ti si mlad. Misliš da je istina ono što pobijedi. Istina je ono što ostane kad svi odu.' } ] },
  ] },
  { s: 'ARIJE', t: 'Idi. I nemoj misliti da te mrzim. Mrzim samo kad ljudi misle da je Bog lak.' },
  { n: 'Arije se okreće oltaru i nastavlja molitvu. Ne znaš zašto, ali ruka ti ne zapisuje ništa.' },
  { hub: 1 },
];

S.dvoriste = [
  { bg: 'dvoriste', ch: null },
  { n: 'Jevsevije Kesarijski šeta sam, sa kodeksom pod rukom.' },
  { s: 'JK', t: 'Bojim se, mladiću, da ćemo izaći odavde s riječima kojih nema u Pismu.' },
  { s: 'JK', t: 'Kad jednom pustimo filosofske izraze u Simvol, gdje ćemo stati?' },
  { s: 'FILON', t: 'A šta biste vi predložili, preosvećeni?' },
  { s: 'JK', t: 'Ono što moja crkva u Kesariji ispovijeda na krštenju. Staro je, tačno, i sve je iz Pisma.' },
  { give: 'e13' },
  { s: 'FILON', t: '(Tačno je. Ali dovoljno je široko da ga i Arije potpiše.)' },
  { hub: 1 },
];

S.atos1 = [
  { bg: 'kelija', ch: null },
  { cap: 'Sveta Gora, 1341.' },
  { s: 'TEODOR', t: 'Oče, Arije u ovim aktima nije ni zao ni glup. Zašto sam mislio da su jeretici glupi?' },
  { s: 'NIL', t: 'Zato što je lakše pobijediti glupog čovjeka. A ti voliš da pobjeđuješ.' },
  { s: 'TEODOR', t: '…' },
  { s: 'NIL', t: 'Prepisuj. Sutra je Sabor.' },
  { go: 'zidine' },
];

S.zidine = [
  { bg: 'zidine', ch: null },
  { cap: 'Nikeja, noć prije Sabora' },
  { n: 'Noć prije Sabora. Atanasije stoji na zidinama i gleda jezero.' },
  { s: 'ATANASIJE', t: 'Ne možeš da spavaš, Filone? Ni ja.' },
  { s: 'FILON', t: 'Oče đakone, mogu li nešto da pitam? Šta ako je Arije u pravu? On ne poriče Hrista. Klanja Mu se. Zove Ga Bogom.' },
  { s: 'FILON', t: 'Zar je toliko bitno da li je stvoren?' },
  { s: 'ATANASIJE', t: 'Dobro pitanje. Bolje da ga noćas postaviš meni nego sutra sebi, u dvorani.' },
  { s: 'ATANASIJE', t: 'Reci mi: zašto je Riječ postala tijelo?' },
  { choice: [
    { t: '„Da nam pokaže kako da živimo.“', do: [
      { s: 'ATANASIJE', t: 'I to. Ali primjer može dati i dobar čovjek. Za primjer nije trebalo da Bog postane čovjek.' } ] },
    { t: '„Da nas oslobodi grijeha i smrti.“', do: [
      { s: 'ATANASIJE', t: 'Tako je. Ali ko može pobijediti smrt? Stvorenje koje je i samo podložno nepostojanju?' } ] },
    { t: '„Da nas sjedini s Bogom.“', do: [
      { s: 'ATANASIJE', t: 'Tako je. Sad si rekao sve, samo to još ne znaš.' } ] },
  ] },
  { sym: 'zrak', s: 'ATANASIJE', t: 'On je postao čovjek da bismo mi postali bogovi. Ne po prirodi, Filone, nego po blagodati.' },
  { s: 'ATANASIJE', t: 'Sad razmisli. Ako je Sin stvorenje, onda se u Hristu s mojom prirodom sjedinilo samo još jedno stvorenje. Stvorenje sa stvorenjem. Ja ostajem tamo gdje sam bio: daleko od Boga.' },
  { s: 'ATANASIJE', t: 'Samo ako je Onaj koji je postao čovjek pravi Bog, čovjek je u Njemu zaista dotakao Boga.' },
  { s: 'ATANASIJE', t: 'Zato se ne svađamo oko riječi, Filone. Svađamo se oko toga da li smo spaseni.' },
  { teo: 'obozenje' },
  { n: 'Iz kule se čuje Pamfilovo hrkanje.' },
  { s: 'ATANASIJE', t: 'Barem neko u Nikeji ima mirnu savjest. Idi spavati. Sutra ti treba bistra glava.' },
  { go: 'r1_uvod' },
];

// ---- RASPRAVA I ----
S.r1_uvod = [
  { bg: 'sala', ch: null },
  { card: ['Rasprava I', 'Arijevo svjedočenje'] },
  { pov: 'show' },
  { s: 'OSIJE', t: 'Sabor je otvoren. Prezviteru Arije, Sabor te sluša. Ispovijedi šta vjeruješ o Ocu i Sinu.' },
  { s: 'KONSTANTIN', t: 'I neka se ovaj spor završi. Carstvo ne može imati dvije vjere.' },
  { s: 'ARIJE', t: 'Rado. Ne branim ja ništa novo, oci. Branim ono što i vi branite: da je Bog jedan.' },
  { note: 'Arije iznosi svjedočenje. Pritisni izjavu da čuješ više. Kad nađeš protivrječnost, iznesi dokaz iz kodeksa. Pogrešan dokaz gubi povjerenje Sabora (pečati gore lijevo).' },
  { testimony: 'r1' },
];

S.T = {};
S.T.r1 = {
  title: 'Svjedočenje: „O jedinom Bogu“',
  who: 'ARIJE',
  st: [
    '„Ispovijedam jednoga Boga: jedinog nerođenog, jedinog vječnog, jedinog nepromjenljivog.“',
    '„Sin je savršeno stvorenje Božije, ali ne kao jedno od stvorenja.“',
    '„Bijaše kad ne bijaše. Sin nije bio prije nego što je rođen.“',
    '„Zato Bog nije uvijek bio Otac. Postao je Otac kad je rodio Sina.“',
    '„To i Pismo kaže: ‘Gospod me sazda kao početak puteva svojih.’“',
  ],
  press: {
    0: [
      { s: 'FILON', t: 'Jedini vječan? Samo Otac?' },
      { s: 'ARIJE', t: 'Samo Otac je bez početka. To ispovijeda i vaš episkop, zar ne?' },
      { s: 'ALEKSANDAR', t: 'Ispovijedam da je Otac bez početka. Ali nije samo On vječan.' },
      { s: 'PAMFIL', t: '(šapuće) Zapisujem: „jedini nepromjenljiv“. Lijepo zvuči. Gdje sam to već čuo?' },
    ],
    1: [
      { s: 'FILON', t: 'Stvorenje, ali ne kao jedno od stvorenja? Kako to?' },
      { s: 'ARIJE', t: 'Kao što je car čovjek, ali ne kao jedan od podanika. Kroz Sina je Bog stvorio sve ostalo.' },
      { s: 'FILON', t: '(Kroz Njega je stvoreno sve ostalo… a On sam? Kroz koga je On postao?)' },
    ],
    2: [
      { s: 'FILON', t: 'Kad je to bilo, to „kad ne bijaše“?' },
      { s: 'ARIJE', t: 'Prije vremena, mladiću. Ne pitaj me za dan i sat.' },
      { s: 'ATANASIJE', t: '(šapuće) Pitaj ga može li sjaj postojati bez svjetlosti.', req: 'trez3' },
    ],
    3: [
      { s: 'FILON', t: 'Bog je dakle postao nešto što nije bio?' },
      { s: 'ARIJE', t: 'Postao je Otac. Šta je tu sporno?' },
      { s: 'PAMFIL', t: '(šapuće) Zar on negdje nije pisao da je Bog nepromjenljiv?' },
    ],
    '3b': [
      { s: 'ARIJE', t: 'Graditelj se ne mijenja kad sagradi kuću. Tako ni Otac kad dobije Sina.' },
      { s: 'FILON', t: '(Ali da li graditelj rađa zgradu? Šta piše u onom odlomku iz Priča?)' },
    ],
    4: [
      { s: 'FILON', t: 'Mudrost u Pričama govori o sebi?' },
      { s: 'ARIJE', t: 'Da. A Mudrost je Sin. „Sazda me“, piše. Ne piše „rodi me“.' },
      { s: 'FILON', t: '(Ne piše? A šta piše malo niže?)' },
    ],
    '4b': [
      { s: 'ARIJE', t: 'Ljudi rađaju. Bog sve izvodi iz ničega. Za Njega je to jedno te isto.' },
    ],
  },
  layers: [
    { at: 3, ev: 'e2', rep: [3, '„Otac je za Sina kao graditelj za zgradu. Graditelj se ne mijenja.“', '3b'], teo: 'otac', then: [
      { fx: 'stani' },
      { s: 'FILON', t: 'Prezviteru, u pismu našem episkopu napisao si da je Bog jedini nepromjenljiv.' },
      { s: 'FILON', t: 'A sad kažeš da Bog jednom nije bio Otac, pa je postao Otac. Ako je postao nešto što nije bio, onda se promijenio.' },
      { fx: 'shake', who: 'ARIJE' },
      { n: 'Žagor među episkopima.' },
      { s: 'ARIJE', t: 'Domišljato. Ali očinstvo nije promjena suštine. To je novi odnos. Kao kad zidar sazida kuću: on se ne mijenja, samo sad postoji kuća.' },
      { s: 'PAMFIL', t: '(šapuće) Dobar je. Mrzim kad je dobar.' },
    ] },
    { at: 4, ev: 'e5', rep: [4, '„Za Boga su ‘roditi’ i ‘stvoriti’ dvije riječi za isto.“', '4b'], teo: 'roditi', then: [
      { fx: 'stani' },
      { s: 'FILON', t: 'Proroku ne treba odsijecati rečenicu. Tri stiha niže ista Mudrost kaže: „Prije svih brda rađa me.“' },
      { s: 'FILON', t: 'Graditelj ne rađa zgradu, prezviteru.' },
      { fx: 'shake', who: 'ARIJE' },
      { s: 'ARIJE', t: 'Za Boga su „roditi“ i „stvoriti“ dvije riječi za isto. Ljudi rađaju, Bog sve izvodi iz ničega.' },
      { s: 'ARIJE', t: 'Sin je stvorenje, ali prvo i najsavršenije.' },
    ] },
    { at: 1, ev: 'e6', then: [
      { fx: 'stani' },
      { s: 'FILON', t: 'Onda mi reci ovo. Jevanđelist kaže: sve je kroz Riječ postalo, i bez Nje ništa nije postalo što je postalo.' },
      { s: 'FILON', t: 'Ako je Sin stvorenje, On je nešto što je postalo. Kroz koga je onda postao? Kroz Sebe?' },
      { fx: 'shake', who: 'ARIJE' },
      { s: 'ARIJE', t: '… Bog Ga je stvorio neposredno, da bi kroz Njega stvorio ostalo.' },
      { s: 'ATANASIJE', t: 'Znači, Bog je ostalu tvar smatrao nedostojnom da je dotakne, a Sina dostojnim? Onda Sin ipak nije kao ostala tvar.' },
      { s: 'ATANASIJE', t: 'Ili je stvorenje, ili nije. Odluči se, prezviteru.' },
    ] },
  ],
  bonus: { at: 2, ev: 'e7', then: [
    { fx: 'stani' },
    { s: 'FILON', t: 'Apostol kaže da je Sin sjaj slave Očeve. Prezviteru, je li ikad postojala svjetlost bez svog sjaja?' },
    { s: 'FILON', t: 'Ako Sin jeste sjaj Oca, onda Otac nikad nije bio bez Njega. Nije bilo „kad ne bijaše“.' },
    { s: 'ARIJE', t: 'Slika, mladiću. Lijepa slika. Ali slika nije dokaz.' },
    { s: 'OSIJE', t: 'Ipak je Sabor zabilježi.' }, { pov: 1 },
  ] },
  special: {
    e4: [{ s: 'ARIJE', t: 'Hvala, mladiću. To je moj stih.' }, { n: 'Smijeh u klupama Jevsevijeve strane.' }],
    'e8@1': [{ s: 'ARIJE', t: '„Prvorođeni svake tvari.“ Vidite? Prvi među stvorenjima. Apostol je na mojoj strani.' }, { s: 'FILON', t: '(Kološanima se može izvrnuti. Treba mi stih koji se ne može.)' }],
  },
  wrong: [
    [{ s: 'OSIJE', t: 'Notariju, ovo nije forum. Sabor nema vremena za nagađanja.' }],
    [{ s: 'OSIJE', t: 'Kakve to veze ima sa izjavom? Pazi šta iznosiš.' }],
    [{ s: 'ARIJE', t: 'Ne vidim protivrječnost, mladiću. Možda je ti vidiš?' }, { s: 'OSIJE', t: 'Sabor je ne vidi.' }],
  ],
  done: 'r1_finale',
};

S.r1_finale = [
  { bg: 'sala', ch: 'arije' },
  { s: 'ARIJE', t: 'Oci, ovaj mladić je pametan. Ali uhvatiti riječ nije isto što i oboriti vjeru. Ja i dalje ispovijedam jednoga Boga.' },
  { s: 'FILON', t: '(Nešto mu još nisam rekao. Nešto što sam vidio, a ne pročitao.)' },
  { ask: { q: 'Šta si vidio jutros u bazilici?', ok: ['e10'], wrong: [{ s: 'FILON', t: '(Ne, nije to. Nešto što sam vidio svojim očima.)' }], pen: 1 } },
  { fx: 'stani' },
  { s: 'FILON', t: 'Prezviteru, jutros sam stajao iza tvojih učenika na službi. Klanjali su se Hristu. Kao i mi.' },
  { s: 'FILON', t: 'Pa te pitam pred Saborom: klanjaš li se ti Sinu?' },
  { s: 'ARIJE', t: 'Naravno. Bog Ga je proslavio iznad svake tvari.' },
  { ask: { q: 'Šta Apostol kaže o klanjanju tvari?', ok: ['e11'], wrong: [{ s: 'OSIJE', t: 'To nije odgovor na pitanje, notariju.' }], pen: 1 } },
  { fx: 'stani' },
  { s: 'FILON', t: 'Onda slušaj Apostola. Osuđeni su oni koji „služahu tvari umjesto Tvorcu“.' },
  { s: 'FILON', t: 'Ako je Sin tvar, onda je cijela Crkva koja Mu se klanja idolopoklonička. I ti s njom. Ili prestani da Mu se klanjaš, ili priznaj da nije tvar.' },
  { fx: 'shake', who: 'ARIJE' },
  { bg: 'tajac', ch: null },
  { n: 'Dug tajac. Arije prvi put ne odgovara odmah.' },
  { s: 'ARIJE', t: '(tiho) Neću prestati da Mu se klanjam.', ch: 'keep' },
  { bg: 'sala' },
  { s: 'OSIJE', t: 'Onda je Sabor čuo dovoljno o ovom pitanju. Pauza do sljedeće sjednice.' },
  { teo: 'molitva' },
  { go: 'atos2' },
];

S.atos2 = [
  { bg: 'kelija', ch: null },
  { cap: 'Sveta Gora, 1341.' },
  { s: 'TEODOR', t: 'Filon ga je pobijedio, oče! Samo njegovim riječima. Kao što je Atanasije rekao.' },
  { s: 'NIL', t: 'A šta misliš, šta je Filon radio poslije sjednice?' },
  { s: 'TEODOR', t: 'Slavio, valjda.' },
  { s: 'NIL', t: 'Pročitaj sljedeću stranicu.' },
  { go: 'kenodoksija' },
];

S.kenodoksija = [
  { bg: 'hodnik', ch: null },
  { n: 'Hodnik ispred dvorane. Episkopi te tapšu po ramenu.' },
  { s: 'EPISKOP', t: 'Bravo, mladiću! Aleksandrija ima dobre notarije.' },
  { s: 'PAMFIL', t: 'Do večeri će cijela Nikeja znati za tebe! Mogu u akta da upišem „i notarij Filon zatvori usta jeretiku“? Malim slovima?' },
  { n: 'Niz hodnik sam prolazi Arije. Niko ne hoda pored njega.' },
  { choice: [
    { t: 'Doviknuti Ariju: „Kako je bilo, prezviteru?“', do: [
      { trez: -2 }, { n: 'Episkopi se smiju. Atanasije ne.' } ] },
    { t: 'Dozvoliti Pamfilu da upiše tvoje ime u akta', do: [
      { trez: -1 }, { set: 'ime' }, { s: 'PAMFIL', t: 'Malim slovima. Ali lijepim!' } ] },
    { t: 'Glasno, pred episkopima: „Pomoliću se za njegovo obraćenje.“', do: [
      { trez: -1 }, { s: 'EPISKOP', t: 'Kako pobožan mladić!' },
      { s: 'FILON', t: '(Zašto sam to rekao glasno?)' } ] },
    { t: 'Ćutke se vratiti za sto i tačno zapisati Arijeve riječi', do: [
      { trez: 1 }, { n: 'Atanasije sjeda pored tebe. Gleda šta pišeš.' }, { s: 'ATANASIJE', t: 'Dobro.' } ] },
  ] },
  { teo: 'kenodoksija' },
  { note: 'Kenodoksija ne napada onoga ko gubi, nego onoga ko je upravo pobijedio.' },
  { go: 'r2' },
];

// ---- RASPRAVA II ----
S.r2 = [
  { bg: 'sala', ch: null },
  { card: ['Rasprava II', 'Bitka za riječ'] },
  { s: 'OSIJE', t: 'Sabor sada traži riječi za Simvol vjere. Riječi koje će ispovijedati cijela Crkva.' },
  { s: 'JN', t: 'Prihvatićemo svaku riječ iz Pisma, oci. Nemamo šta da krijemo.' },
  { note: 'U ovoj raspravi protivnik ne poriče ništa. Gledaj šta rade dok prihvataju. Opcija „Primijeti“ traži trezvenost 3 ili više.' },
  { s: 'OSIJE', t: 'Predlažemo: Sin je od Boga.' },
  { s: 'JN', t: 'Prihvatamo. Ko bi to poricao?' },
  { choice: [
    { t: 'Primijeti: pogledaj klupe Jevsevijeve strane', req: 'trez3', lock: 'Tvoj um je pun aplauza.', do: [
      { n: 'Jedan Jevsevijev episkop se nagne prema drugom.' },
      { s: 'EPISKOP', t: '(šapuće) Naravno da je od Boga. Sve je od Boga.' },
      { fx: 'stani' },
      { s: 'FILON', t: 'Preosvećeni, i komarac je od Boga. Je li Sin od Boga kao komarac?' },
      { n: 'Smijeh u dvorani. Osije zvoni zvoncem.' }, { pov: 1 } ] },
    { t: 'Zapiši i nastavi', do: [
      { s: 'ATANASIJE', t: '(ustaje) Oci, oni to prihvataju jer kažu da je i komarac od Boga.' },
      { s: 'FILON', t: '(Atanasije je to vidio. Ja nisam.)' } ] },
  ] },
  { s: 'OSIJE', t: 'Izraz otpada. Onda: Sin je prava sila i obraz Očev, sličan Mu u svemu, i uvijek u Ocu.' },
  { s: 'JN', t: 'I to prihvatamo.' },
  { choice: [
    { t: 'Primijeti: prati šapat i namigivanje', req: 'trez3', lock: 'Tvoj um je pun aplauza.', do: [
      { n: 'Šapat i namigivanje preko klupa. Čuješ odlomke.' },
      { s: 'EPISKOP', t: '(šapuće) „Obraz“: i čovjek je obraz i slava Božija. „Uvijek“: i mi smo uvijek, jer mi živi uvijek… A „silom velikom“ Pismo zove i skakavca!' },
      { s: 'PAMFIL', t: 'Stani. Skakavac? Treba da upišem skakavac u akta Vaseljenskog sabora?' },
      { fx: 'stani' },
      { s: 'FILON', t: 'Upiši. Neka se zna šta su tumačili. Oci, svaku biblijsku riječ oni prihvataju, pa je tumače po svome.' },
      { pov: 1 } ] },
    { t: 'Zapiši i nastavi', do: [
      { s: 'ATANASIJE', t: 'Oci, čuo sam ih. Kažu da Pismo i skakavca zove Božijom silom.' } ] },
  ] },
  { if: 'hint', then: [
    { s: 'FILON', t: '(Dometije… pjesme za prost narod. Jedan jezik za episkope, drugi za lađare.)' },
    { choice: [
      { t: 'Pitaj Jevsevija šta pjevaju njegovi lađari', do: [
        { s: 'FILON', t: 'Preosvećeni, šta pjevaju vaši lađari u Aleksandriji?' },
        { s: 'JN', t: 'Ne znam šta pjevaju lađari.' },
        { fx: 'stani' },
        { s: 'FILON', t: 'Ja znam. „Bijaše kad Sina ne bijaše.“ Za episkope imate riječi iz Pisma. Za narod imate pjesme. I nisu iste.' },
        { fx: 'shake', who: 'JN' }, { pov: 1 },
        { n: 'Jevsevije Nikomidijski prvi put gubi osmijeh.' } ] },
      { t: 'Ćuti', do: [] },
    ] },
  ] },
  { s: 'OSIJE', t: 'Onda predlažemo riječi koje se ne mogu izvrnuti: Sin je iz suštine Očeve, jednosuštan Ocu. ὁμοούσιος.' },
  { s: 'JK', t: 'Toga nema u Pismu. I zvuči kao da se Očeva suština dijeli na komade, kao zlato kod zlatara.' },
  { note: 'Jevsevije Kesarijski je kolebljiv. Uvjeri ga.' },
  { ask: { q: 'Ko je prvi uveo nebiblijske riječi?', ok: ['e3', 'e1'], wrong: [{ s: 'JK', t: 'To ne odgovara na moju brigu, mladiću.' }], pen: 1 } },
  { fx: 'stani' },
  { s: 'FILON', t: 'Ni „iz nepostojećeg“ nema u Pismu, preosvećeni. Ni „bijaše kad ne bijaše“.' },
  { s: 'FILON', t: 'Nebiblijske riječi nismo mi uveli. Oni su. Mi samo tražimo riječ koja kaže ono što Pismo kaže, a koju niko ne može izvrnuti.' },
  { s: 'JK', t: 'Dobro. Ali dijeljenje? Ako je Sin iz suštine Očeve, nije li Otac nešto izgubio?' },
  { ask: { q: 'Kako Sin može biti iz Oca, a da se Otac ne podijeli?', ok: ['e7'], wrong: [{ s: 'JK', t: 'Ne vidim kako to rješava dijeljenje.' }], pen: 1 } },
  { fx: 'stani' },
  { s: 'FILON', t: 'Sjaj ne odsijeca komad svjetlosti, preosvećeni. Svjetlost je cijela, i sjaj je cio. Isti su po prirodi, a nisu jedno drugo.' },
  { s: 'JK', t: '(dugo ćuti) … Potpisaću. Ali napisaću svojoj pastvi kako sam to razumio.' },
  { teo: 'homoousios' },
  { s: 'PAMFIL', t: 'Evo čistopisa Simvola za potpis! Pisao sam brzo, ali lijepo.' },
  { s: 'ATANASIJE', t: 'Filone, pregledaj prije nego što ode caru.' },
  { mini: 'jota' },
  { go: 'atos3' },
];

S.atos3 = [
  { bg: 'kelija', ch: null },
  { cap: 'Sveta Gora, 1341.' },
  { s: 'TEODOR', t: 'Jedna jota, oče. Zbog jednog slova…' },
  { s: 'NIL', t: 'Kad ljekar pogriješi jednu kap u lijeku, je li to sitnica?' },
  { s: 'TEODOR', t: 'Nije.' },
  { s: 'NIL', t: 'Ni ovo nije.' },
  { go: 'epilog' },
];

S.epilog = [
  { bg: 'sala', ch: null },
  { n: 'Sabor ispovijeda Simvol sa riječju ὁμοούσιος. Arije odbija da potpiše. Sa dvojicom libijskih episkopa šalje se u izgnanstvo.' },
  { bg: 'brod', ch: null },
  { n: 'Posljednje veče u Nikeji. Arije se ukrcava na brod. Isti onaj koji je Dometije istovarao.' },
  { s: 'FILON', t: 'Atanasije, jesmo li pobijedili?', ch: 'none' },
  { s: 'ATANASIJE', t: 'Istina je odbranjena. To nije isto što i pobjeda. Da je on pokleknuo, to bi bila pobjeda.' },
  { s: 'PAMFIL', t: '(pjevuši, pa se prekine) … Moram naučiti neku drugu melodiju.' },
  { choice: [
    { t: 'Pomoli se tiho za Arija, po imenu', req: 'trez4', lock: 'Ne možeš da se sabereš. Misli su ti još u dvorani.', do: [
      { ch: null }, { n: 'Nema poena. Nema zvuka. Samo brod polako nestaje u sumraku.' }, { teo: 'anatema' } ] },
    { t: 'Gledaj kako brod odlazi', do: [ { ch: null }, { n: 'Brod polako nestaje u sumraku.' } ] },
  ] },
  { mus: 'kraj' },
  { bg: 'kelija', ch: null },
  { cap: 'Sveta Gora, 1341.' },
  { if: 'ime', then: [ { s: 'TEODOR', t: '(U margini akata, sitnim slovima: „i notarij Filon zatvori usta jeretiku“. Stidim se, a nisam ja to pisao.)' } ] },
  { s: 'NIL', t: 'Pa? Ko je pobijedio u Nikeji?' },
  { choice: [
    { t: '„Atanasije.“', do: [ { s: 'NIL', t: 'Atanasije je zbog toga pet puta išao u izgnanstvo. Tako izgledaju pobjede.' } ] },
    { t: '„Filon. Notarij.“', do: [ { s: 'NIL', t: 'Ko? Nema ga ni u jednoj knjizi. Možda je zato ostao trezven.' } ] },
    { t: '„Niko. Arije je umro izvan Crkve.“', do: [ { s: 'NIL', t: 'Sad si nešto pročitao.' } ] },
  ] },
  { s: 'TEODOR', t: 'Oče… sutra idem u Kareju. Onom kalabrijskom učenjaku.' },
  { s: 'NIL', t: 'Da ga pobijediš?' },
  { s: 'TEODOR', t: 'Da ga saslušam. Pa da ga pitam ono što on sam kaže. Njegovim riječima.' },
  { s: 'NIL', t: 'Ponesi i hljeb. Gladan čovjek loše sluša.' },
  { trez: 'full' },
  { bg: 'biblioteka', ch: null },
  { s: 'JOVAN', pos: 'l', sym: 'vrana', t: 'Arije je umro jedanaest godina kasnije, u Carigradu, izvan općenja s Crkvom. Uoči dana kada su prijatelji htjeli da ga ponovo uvedu u nju.' },
  { s: 'JOVAN', pos: 'r', t: 'Atanasije je preživio pet izgnanstava i nadživio careve koji su ga progonili. A Simvol koji je Filon prepisao čitamo i danas, sa onim što su mu Oci dodali u Carigradu.' },
  { s: 'JOVAN', pos: 'c', sym: 'golub', t: 'Ali o Carigradu, i o Duhu Svetom, drugi put. Lampa mi se gasi, putniče.' },
  { end: 1 },
];

const MINI = {
  price: {
    q: 'Priče Solomonove 8,22–25. Nađi stih koji ruši Arijevo tumačenje.',
    lines: [
      ['22', 'Gospod me sazda kao početak puteva svojih, za djela svoja.'],
      ['23', 'Prije vjekova osnova me, u početku, prije nego zemlju stvori,'],
      ['24', 'prije nego bezdane stvori, prije nego izađoše izvori voda,'],
      ['25', 'prije nego se gore utvrdiše, prije svih brda rađa me.'],
    ],
    ok: 3,
    miss: ['To je stih koji Arije citira. Čitaj dalje.', 'Ovo ne govori ništa novo. Čitaj dalje.', 'Blizu si. Pročitaj sljedeći stih.'],
    win: [
      { s: 'FILON', t: '„Prije svih brda rađa me.“ Ne stvara. Rađa. Isti odlomak, tri stiha niže.' },
      { s: 'PAMFIL', t: 'Pa zašto Arije uvijek staje na dvadeset drugom?' },
      { s: 'FILON', t: 'E, to ćemo ga pitati.' },
    ],
  },
  jota: {
    q: 'Pregledaj Pamfilov čistopis. Nađi grešku.',
    text: 'Πιστεύομεν εἰς ἕνα Θεὸν Πατέρα παντοκράτορα, πάντων ὁρατῶν τε καὶ ἀοράτων ποιητήν· καὶ εἰς ἕνα Κύριον Ἰησοῦν Χριστόν, τὸν Υἱὸν τοῦ Θεοῦ, γεννηθέντα ἐκ τοῦ Πατρὸς μονογενῆ, τουτέστιν ἐκ τῆς οὐσίας τοῦ Πατρός, Θεὸν ἐκ Θεοῦ, φῶς ἐκ φωτός, Θεὸν ἀληθινὸν ἐκ Θεοῦ ἀληθινοῦ, γεννηθέντα οὐ ποιηθέντα, ὁμοιούσιον τῷ Πατρί…',
    bad: 'ὁμοιούσιον',
    tr: '„Vjerujemo u jednoga Boga Oca Svedržitelja, Tvorca svega vidljivoga i nevidljivoga; i u jednoga Gospoda Isusa Hrista, Sina Božijeg, rođenog od Oca kao Jedinorodnog, to jest iz suštine Očeve, Boga od Boga, Svjetlost od Svjetlosti, Boga istinitog od Boga istinitog, rođenog, a ne stvorenog, jednosušnog Ocu…“',
  },
};

S.jota_found = [
  { s: 'PAMFIL', t: 'Jedna jota! Ko će to primijetiti?' },
  { s: 'FILON', t: 'Jednom jotom, Pamfile, Sin postaje tek „sličan“ Ocu. A sličan znači drugi.' },
  { teo: 'jota' },
];
S.jota_missed = [
  { s: 'ATANASIJE', t: '(uzima list) Ὁμοιούσιον. Jota viška. „Slične suštine“ umjesto „iste suštine“. Pažnja, notariju.' },
  { s: 'PAMFIL', t: 'Jedna jota… ko će to primijetiti?' },
  { s: 'ATANASIJE', t: 'Svi koji budu htjeli da je ne primijete.' },
];

return { C, EV, TEO, S, MINI };
})();
