# Ni jote / Not One Iota — Slučaj I: Nikeja 325.

Pravoslavna apologetska igra u maniru vizantijske freske. Igrač je notarij Filon na Prvom vaseljenskom saboru (Nikeja, 325): skuplja dokaze, pobija Arijevo svjedočenje njegovim sopstvenim riječima i pomaže Ocima da nađu riječ koja se ne može izvrnuti, ὁμοούσιος. Usput uči dogmatiku, apologetiku i asketiku (trezvenost, kenodoksija).

Igra radi u browseru, bez instalacije, na ćirilici, latinici i engleskom.

## Objavljivanje na GitHub Pages

1. Na GitHubu napravi novi javni repozitorijum, npr. `ni-jote`.
2. Ubaci **sadržaj ovog foldera** u korijen repozitorijuma (ne folder `ni-jote` u njemu, nego `index.html`, `story.js`, `story_en.js`, `assets/`, `.nojekyll`, `README.md`).
   - Najlakše: na stranici repozitorijuma klikni *Add file → Upload files* i prevuci sve fajlove i folder `assets`.
   - Ili iz terminala:
     ```
     git init
     git add .
     git commit -m "Ni jote, Slučaj I"
     git branch -M main
     git remote add origin https://github.com/KORISNIK/ni-jote.git
     git push -u origin main
     ```
3. U repozitorijumu otvori *Settings → Pages*. Pod *Build and deployment* izaberi *Deploy from a branch*, grana `main`, folder `/ (root)`, pa *Save*.
4. Za minut-dva igra je na adresi `https://KORISNIK.github.io/ni-jote/`.

Direktni linkovi na jezik: dodaj `#cirilica`, `#latinica` ili `#english` na kraj adrese.

## Vizantijsko pojanje

Igra ima četiri muzičke cjeline koje prate tok priče: Sveta Gora, Nikeja, Sabor i epilog. Ako u `assets/music/` ubaciš snimke `atos.mp3`, `nikeja.mp3`, `sabor.mp3` i `epilog.mp3`, igra ih pušta u petlji, sa pretapanjem između scena. Za svaki fajl koji nedostaje igra sama generiše ison i pojanje u vizantijskom glasu. Detalji su u `assets/music/PROCITAJ.txt`.

Dugmad *Pojanje* i *Zvuk* gore desno posebno uključuju i isključuju muziku i zvučne efekte.

## Struktura

| Fajl | Sadržaj |
| --- | --- |
| `index.html` | Engine igre: dijalozi, istraga, svjedočenje, kodeks, Teologikon, zvuk, pojanje, pismo i jezik |
| `story.js` | Scenario na srpskom (latinica; ćirilica se pravi automatski) |
| `story_en.js` | Scenario na engleskom |
| `assets/bg` | Pozadine |
| `assets/ch` | Portreti likova |
| `assets/ev` | Ikonice dokaza i mjerača |
| `assets/teo` | Minijature Teologikona |
| `assets/ui` | Knjige, okviri i ostali elementi interfejsa |
| `assets/music` | Snimci pojanja (opciono) |

---

**English.** An Orthodox apologetics game in the manner of a Byzantine fresco: you play Philo, a notary at the Council of Nicaea (325). To publish, upload the contents of this folder to a GitHub repository, then enable *Settings → Pages → Deploy from a branch → main / (root)*. Optional chant recordings go in `assets/music/` (`atos.mp3`, `nikeja.mp3`, `sabor.mp3`, `epilog.mp3`); without them the game synthesizes its own ison and chant.
