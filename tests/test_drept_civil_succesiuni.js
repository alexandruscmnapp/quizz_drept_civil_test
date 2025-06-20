const questions = [
  {
    "question": "Poate fi declarata nedemna persoana:",
    "answers": [
      "a) condamnata definitiv pentru denuntarea calomnioasa a celui pe care il mosteneste;",
      "b) care a alterat, din neglienta, testamentul defunctului;",
      "c) care a primit testamentul olograf, spre pastrare, de la defunct si care nu il preda, cu rea-credinta, celor interesati, dupa deschiderea mostenirii."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Efectele nedemnitatii succesorale:",
    "answers": [
      "a) privesc atât mostenirea legala, cât si mostenirea testamentara;",
      "b) aduc atingere rezervei succesorale cuvenite nedemnului;",
      "c) se produc numai daca faptele care atrag nedemnitate sunt săvârsite impotriva celui care lasã mostenirea."
    ],
    "correctIndexes": [
      0,
      1
    ],
    "multiple": true
  },
  {
    "question": "Parintii defunctului:",
    "answers": [
      "a) beneficiaza de rezerva succesorala chiar in concurs cu descendentii acestuia;",
      "b) in concurs cu sotul supravietuitor, dezmostenit de defunct, culeg 3/4 din mostenire;",
      "c) pot cere notarului public declararea nedemnitatii judiciare a sotului supravietuitor al defunctului."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Poate fi reprezentat:",
    "answers": [
      "a) cel lipsit de capacitatea de a mosteni;",
      "b) cel demostenit de persoana pe care o reprezintă;",
      "c) nedemnul, cu conditia sa nu mai fie in viata la data deschiderii succesiunii."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Dreptul special de mostenire a sotului supravietuitor:",
    "answers": [
      "a) este gratuit, inalienabil si insesizabil;",
      "b) se stinge prin partaj;",
      "c) consta in dreptul pe care acesta il are atunci când vine in concurs cu descendentii, fata de mobilierul si obiectele de uz casnic care au fost afectate folosintei comune a sotilor."
    ],
    "correctIndexes": [
      0,
      1
    ],
    "multiple": true
  },
  {
    "question": "Dreptului de abitatie al sotului supravietuitor:",
    "answers": [
      "a) inceteaza intotdeauna prin partaj, chiar daca este realizat la mai putin de un an de la data deschiderii mostenirii;",
      "b) este gratuit, inalienabil si insesizabil;",
      "c) vizeaza situatia in care sotul supravietuitor nu este titular al niciunui drept real de a folosi alta locuinta."
    ],
    "correctIndexes": [
      1,
      2
    ],
    "multiple": true
  },
  {
    "question": "Reprezentarea operează:",
    "answers": [
      "a) in cazul ascendentilor privilegiati;",
      "b) in cazul renuntatorului, numai dacă acesta este decedat la data deschiderii succesiunii;",
      "c) in cazul nedemnului."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Rudele defunctului vin la mostenire in urmatoarea ordine:",
    "answers": [
      "a) ascendentii privilegiati si colateralii privilegiati, descendentii, ascendentii ordinari, colateralii ordinari.",
      "b) descendentii, ascendentii privilegiati si colateralii privilegiati, ascendentii ordinari, colateralii ordinari.",
      "c) ascendentii privilegiati si colateralii privilegiati, descendentii, colateralii ordinari, ascendentii ordinari."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Acceptarea expresa a mostenirii",
    "answers": [
      "a) este obligatorie pentru orice mostenitor indreptatit sa vină la mostenire;",
      "b) poate avea loc si pe cale oblică de către creditorii succesibilului;",
      "c) poate imbraca si forma unui inscris sub semnătura privata."
    ],
    "correctIndexes": [
      1,
      2
    ],
    "multiple": true
  },
  {
    "question": "Dreptul de optiune succesorala:",
    "answers": [
      "a) se exercita in termen de un an de la data deschiderii mostenirii;",
      "b) poate fi exercitat oricând, find un drept absolut;",
      "c) se exercita in termen de 3 ani de la data deschiderii succesiunii."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Renuntarea la mostenire:",
    "answers": [
      "a) poate fi revocata de renuntator in termen de trei luni de la data inscrierii in registrul national notarial;",
      "b) este prezumata;",
      "c) poate fi revocata de creditorii succesibilului renuntator dacă renuntarea a fost facuta in frauda acestora."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Pot invoca reductiunea liberalitatilor excesive:",
    "answers": [
      "a) succesorii universali si cu titlu universal ai mostenitorului rezervatar;",
      "b) creditorii chirografari ai mostenitorilor rezervatari;",
      "c) ascendentii ordinari ai defunctului."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Cotitatea disponibila reprezintă:",
    "answers": [
      "a) activul brut al mostenirii din care este scăzut pasivul succesoral;",
      "b) partea din bunurile mostenirii de care defunctul poate dispune neingradit prin liberalitati;",
      "c) partea din mostenire asupra căreia se imputa prima dată liberalitatile supuse raportului, facute unui mostenitor rezervatar."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Renuntarea la mostenire:",
    "answers": [
      "a) poate fi revocata numai la cererea creditorilor succesibilului renuntator in termenul general de prescriptie;",
      "b) poate fi prezumata, in anumite conditii;",
      "c) este irevocabila din partea renuntătorului."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Nedemnitatea judiciară:",
    "answers": [
      "a) poate fi declarata la cererea oricărei persoane interesate;",
      "b) poate fi declarata in cazul succesibilului care, cu rea-credinta, a alterat testamentul defunctului;",
      "c) poate fi invocata, pe cale de actiune, in termen de 3 ani de la data deschiderii mostenirii."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Este de drept nedemna de a mosteni:",
    "answers": [
      "a) sotia celui care lasa mostenirea, care, prin violenta, l-a impiedicat pe acesta sa revoce testamentul intocmit in favoarea sa;",
      "b) persoana care, cu rea-credita, a distrus testamentul defunctului;",
      "c) persoana condamnata penal pentru savarsirea unei infractiuni cu intentia de a-l ucide pe cel care lasa mostenirea."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "In materie de mostenire legala:",
    "answers": [
      "a) sotul supravietuitor il mosteneste pe sotul decedat dacă, la data deschiderii mostenirii, nu exista o hotarâre de divort definitivă;",
      "b) cota sotului supravietuitor este de o jumätate din mostenire dacă vine in concurs cu sora tatalui defunctului;",
      "c) in cazul in care colateralii ordinari vin la mostenire prin reprezentare succesorala, mostenirea sau partea din mostenire ce li se cuvine se imparte intre ei pe tulpină."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Reprezentarea succesorala opereaza chiar dacă reprezentantul:",
    "answers": [
      "a) a fost dezmostenit de către reprezentat;",
      "b) este nedemn fata de reprezentat;",
      "c) este nedemn fata de cel care lasa mostenirea."
    ],
    "correctIndexes": [
      0,
      1
    ],
    "multiple": true
  },
  {
    "question": "Reprezentarea succesorala se afla in direct legatura cu:",
    "answers": [
      "a) reprezentarea unei parti, similar institutiei mandatului;",
      "b) reprezentarea minorului de către autoritatea tutelara sau reprezentantul legal;",
      "c) nici una din variantele de mai sus nu este corecta."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Reprezentarea succesorala opereaza:",
    "answers": [
      "a) chiar dacă reprezentantul este nedemn fata de reprezentat;",
      "b) chiar daca reprezentantul este nedemn fata de cel care lasa mostenirea;",
      "c) chiar daca reprezentantul a renuntat la mostenirea lăsata de reprezentat."
    ],
    "correctIndexes": [
      0,
      2
    ],
    "multiple": true
  },
  {
    "question": "Reprezentarea succesorala opereaza chiar dacă:",
    "answers": [
      "a) reprezentantul a renuntat la mostenirea lăsata de reprezentat;",
      "b) reprezentantul este nedemn fata de defunct, cu conditia ca reprezentatul sa nu fie in viata la data deschiderii mostenirii defunctului;",
      "c) reprezentantul nu îndeplineste toate conditiile generale pentru a-l mosteni pe defunct."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Poate fi reprezentat succesoral:",
    "answers": [
      "a) fratele nedemn al defunctului de cätre fiul acestui frate, chiar dacă acesta din urma a renuntat la mostenirea tatalui sau (fratele nedemn al defunctului);",
      "b) tatal defunctului de catre fratele defunctului;",
      "c) fiul nedemn al defunctului, aflat in viața la data deschiderii mostenirii, de către fiul sau, dacă indeplineste conditiile generale pentru a-l mosteni pe defunct."
    ],
    "correctIndexes": [
      0,
      2
    ],
    "multiple": true
  },
  {
    "question": "Reprezentarea succesorala:",
    "answers": [
      "a) poate fi invocata de către fiul unui unchi predecedat al defunctului pentru a veni la mostenire alaturi de mătusa defunctului;",
      "b) nu opereaza daca reprezentantul a renuntat la mostenirea lăsată de reprezentat;",
      "c) opereaza chiar si in situatia in care reprezentatul este in viață la data deschiderii mostenirii dar este nedemn fata de defunct."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Reprezentarea succesorala este permisa numai in cazul:",
    "answers": [
      "a) descendentilor in linie directa ai lui de cujus,",
      "b) descendentilor colateralilor privilegiati;",
      "c) sotului supravietuitor."
    ],
    "correctIndexes": [
      0,
      1
    ],
    "multiple": true
  },
  {
    "question": "Cota succesorala a sotului supravietuitor este de:",
    "answers": [
      "a) o treime din mostenire, daca vine in concurs cu doi descendenti ai defunctului;",
      "b) un sfert din mostenire, daca vine in concurs numai cu parintii defunctului;",
      "c) trei sferturi din mostenire, daca vine in concurs fie cu ascendentii ordinari, fie cu colateralii ordinari ai defunctului."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Sotului supravietuitor:",
    "answers": [
      "a) ii poate fi restrâns dreptul de abitatie, dacă o parte a locuintei ii este necesar unuia dintre mostenitori;",
      "b) ii revine o jumatate din mostenire, daca vine in concurs numai cu ascendentii privilegiati;",
      "c) nu ii revin mobilierul si obiectele de uz casnic afectate folosintei comune a sotilor, cu titlu de drept special de mostenire, in ipoteza in care vine concomitent in concurs atât cu descendentii defunctului, cât si cu colateralii privilegiati."
    ],
    "correctIndexes": [
      1,
      2
    ],
    "multiple": true
  },
  {
    "question": "In materia dreptului de abitatie al sotului supravietuitor:",
    "answers": [
      "a) oricare dintre mostenitori poate cere schimbarea obiectului abitatiei, daca pune la dispozitia sotului supravietuitor o alta locuinta, insa numai dacă aceasta este situata in apropierea casei in care sotul supravietuitor a locuit până la data deschiderii mostenirii;",
      "b) litigile cu privire la acesta se solutioneaza de instanta competenta sa judece partajul mostenirii, care va hotîră de urgenta, în camera de consiliu;",
      "c) numai mostenitorii legali pot cere restrângerea dreptului de abitatie."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Daca mostenirea legalã de pe urma lui D. a fost acceptat de M. (mama defunctului), S. (sora defunctului, din acelasi parinti), F. (fratele uterin al defunctului) si N. (nepotul defunctului rezultat din căsatoria surorii uterine a defunctului cu fratele consangvin al defunctului, ambii predecedati):",
    "answers": [
      "a) S. va culege tot atât cât M.;",
      "b) N. va culege mai mult decât M.;",
      "c) F. va culege mai putin decât M."
    ],
    "correctIndexes": [
      1,
      2
    ],
    "multiple": true
  },
  {
    "question": "Problema reprezentarii succesorale se poate pune in cazul:",
    "answers": [
      "a) ascendentilor privilegiati;",
      "b) ascendentilor ordinari;",
      "c) nici una din situatiile de mai-sus."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "X. decedeaza, mostenirea find acceptata de către Y., fratele consangvin al defunctului, Z., fiul fratelui bun, predecedat, al defunctului si T., unchiul defunctului. Prin raportare la aceasta situatie de fapt:",
    "answers": [
      "a) Z. va putea incheia singur pentru o perioad de trei ani un contract de locatiune privind un bun din masa succesorala;",
      "b) Y. va culege 1/3 din mostenire;",
      "c) oricare dintre mostenitori va putea incheia singur un contract de comodat având ca obiect un bun din masa succesorala."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "In materia mostenirii legale:",
    "answers": [
      "a) poate fi reprezentat descendentul de gradul I, aflat in viata la data deschiderii succesiunii, chiar daca este nedemn fata de defunct;",
      "b) cota sotului supravietuitor al defunctului in concurs cu mostenitori legali apartinând unor clase diferite se stabileste ca si când acesta ar veni la mostenire numai cu cea mai apropiata dintre ele;",
      "c) legatul lasat nedemnului, după savarsirea faptei care atrage nedemnitatea, inlatura efectele nedemnitatii, chiar si in lipsa unei declaratii exprese in acest sens a celui ce lasa mostenirea."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Ascendentii privilegiati, spre deosebire de ascendentii ordinari:",
    "answers": [
      "a) nu sunt inlaturati de la mostenire de către sotul supravietuitor;",
      "b) nu sunt inlaturati de la mostenire de către colateralii privilegiati;",
      "c) impart mostenirea in mod egal."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "In concurs cu mama defunctului, cota succesorala legala a sotiei supravietuitoare este de:",
    "answers": [
      "a) 3/4;",
      "b) 1/3;",
      "c) 1/2."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Conditiile reprezentării succesorale sunt:",
    "answers": [
      "a) persoana reprezentata sa fie predecedata la data deschiderii succesiunii;",
      "b) locul persoanei reprezentate sa fie util;",
      "c) reprezentantul trebuie sa aiba vocatie succesorală proprie."
    ],
    "correctIndexes": [
      0,
      1,
      2
    ],
    "multiple": true
  },
  {
    "question": "In concurs cu doi descendenti ai defunctului, cota succesorala legala a sotului supravietuitor este de:",
    "answers": [
      "a) 1/4;",
      "b) 1/3;",
      "c) 1/8."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Sotul supravietuitor, atunci când vine la mostenire in concurs cu:",
    "answers": [
      "a) fratele defunctului si tatal defunctului, culege o treime din mostenire;",
      "b) parintii defunctului si sora defunctului, culege o jumatate din mostenire;",
      "c) surorile defunctului, culege trei sferturi din mostenire."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Copilul fiului predecedat al defunctului:",
    "answers": [
      "a) atunci când vine la mostenire in concurs cu sotul supravietuitor, culege trei sferturi din masa succesorala;",
      "b) il înlătură de la mostenire pe fratele defunctului;",
      "c) il înlătură de la mostenire pe tatal defunctului, cu exceptia cazului in care fiul predecedat al defunctului era nedemn sa culeaga mostenirea."
    ],
    "correctIndexes": [
      0,
      1
    ],
    "multiple": true
  },
  {
    "question": "In materia mostenirii legale, dacă S. (sotul supra-vietuitor al defunctului) vine în concurs cu T. (tatal defunctului) si cu A. (stranepot de frate al defunctului), atunci mostenirea se va imparti dupa cum urmeaza:",
    "answers": [
      "a) S. primeste 1/2 din mostenire, T. primeste 1/2 din mostenire, iar A. nu mosteneste;",
      "b) S. primeste 1/3 din mostenire, T. primeste 1/6 din mostenire, iar A. primeste 1/2 din mostenire;",
      "c) S. primeste 1/3 din mostenire, T. primeste 1/3 din mostenire, iar A. primeste 1/3 din mostenire."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "In cazul in care o mostenire legala se imparte intre sotia supravietuitoare, mama defunctului si o sora defunctului:",
    "answers": [
      "a) mama defunctului va culege 1/6 din mostenire;",
      "b) fiecare va culege câte 1/3 din mostenire;",
      "c) sora defunctului va culege 1/2 din mostenire."
    ],
    "correctIndexes": [
      0,
      2
    ],
    "multiple": true
  },
  {
    "question": "In materia mostenirii legale:",
    "answers": [
      "a) in cazul in care colateralii privilegiati vin la mostenire prin reprezentare succesorala, mostenirea sau partea din mostenire ce li se cuvine se împarte intre ei pe tulpină;",
      "b) in cazul în care la mostenire vin mama, fratele si sotul supravietuitor ai defunctului, sotul supravietuitor al defunctului culege 1/3 din mostenire, mama defunctului culege 1/2 din mostenire, iar fratele defunctului culege 1/6 din mostenire;",
      "c) in cazul în care la mostenire vin fratele bunicului defunctului, copilul surorii mamei defunctului si sotul supravietuitor al defunctului, primii doi culeg impreuna un sfert din mostenire, iar sotul supravietuitor al defunctului culege 3/4 din mostenire."
    ],
    "correctIndexes": [
      0,
      2
    ],
    "multiple": true
  },
  {
    "question": "In materia mostenirii legale, bunicul defunctului:",
    "answers": [
      "a) este înlaturat de la mostenire de copilul fratelui defunctului;",
      "b) nu inlatura de la mostenire pe fratele tatalui defunctului;",
      "c) nu este inlaturat de la mostenire de sotul supravietuitor."
    ],
    "correctIndexes": [
      0,
      2
    ],
    "multiple": true
  },
  {
    "question": "Pot veni la mostenire prin reprezentare succesorală:",
    "answers": [
      "a) descendentii fratilor sau surorilor defunctului;",
      "b) bunicii defunctului;",
      "c) verii primari ai defunctului."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "In materia mostenirii legale, poate fi reprezentat:",
    "answers": [
      "a) colateralul privilegiat de gradul al IV-lea;",
      "b) fratele mamei defunctului;",
      "c) descendentul nedemn, chiar aflat in viata la data deschiderii mostenirii."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Potrivit regulilor devolutiunii legale, in cazul in care mostenirea este acceptata de varul primar V. (copilul unchiului predecedat U1) si de unchiul U2, mostenirea va fi culeasa de:",
    "answers": [
      "a) vărul primar V. impreună cu unchiul U2, in cote egale;",
      "b) vărul primar V., in intregime;",
      "c) unchiul U2, in intregime."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Potrivit dispozitiilor Codului civil referitoare la devolutiunea legala a mostenirii:",
    "answers": [
      "a) in cazul clasei a II-a de mostenitori, nu opereaza, in niciun caz, reprezentarea succesorala;",
      "b) in cazul clasei a III-a de mostenitori, mostenirea se imparte in mod egal, când vin la mostenire in nume propriu, ori pe tulpină, când vin la mostenire prin reprezentare;",
      "c) la mostenire prin reprezentare; in cazul clasei a II-a de mostenitori, intre colateralii privilegiati, impartirea mostenirii se va realiza pe linii, atunci când acestia sunt rude cu defunctul pe linii colaterale diferite."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "La data de 15.03.2014, P. decedează, neavand nici descendenti, nici sotie supravietuitoare. Mostenirea dupã acesta este acceptata de B., care este var primar, respectiv fiul unchiului C. (fratele tatalui lui P.) predecedat si de D., care este mătusa lui P. (sora tatalui lui P.). Conform devolutiunii legale a mostenirii, aceasta urmeaza a fi culeasa de:",
    "answers": [
      "a) B. in intregime;",
      "b) D. in intregime;",
      "c) B., impreună cu D., in cote egale."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "La succesiunea lui O., decedat la data de 03.02.2017, au vocatie doi nepoti de fiu predecedat, respectiv N1, dezmostenit de tatal sau, si N2, nedemn fata de O., si F., un nepot de frate predecedat. Conform regulilor succesiunii legale, mostenirea va fi culeasă:",
    "answers": [
      "a) de N2 si F. in cote egale;",
      "b) de N2 in intregime;",
      "c) de N1 n intregime."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Spre deosebire de fratele defunctului, fiul acestuia din urmă:",
    "answers": [
      "a) daca a renuntat la mostenire, poate fi reprezentat de către descendentul sau nedemn fată de defunct;",
      "b) înlătură de la mostenire pe tatăl defunctului, in cazul mostenirii legale;",
      "c) este mostenitor rezervatar."
    ],
    "correctIndexes": [
      1,
      2
    ],
    "multiple": true
  },
  {
    "question": "Reductiunea liberalitatilor excesive:",
    "answers": [
      "a) poate fi invocata in fata instantei numai pe cale de actiune;",
      "b) poate fi cerut numai de către mostenitorii rezervatari;",
      "c) poate fi invocat oricând pe cale de exceptie, intrucât exceptia de reductiune este imprescriptibila extinctiv."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Termenul de optiune succesorala:",
    "answers": [
      "a) este de prescriptie extinctivă;",
      "b) poate fi redusa de catre instanta judectoreasca, pentru motive temeinice, la cererea oricărei persoane interesate;",
      "c) este de decădere, supus prevederilor referitoare la suspendarea si repunerea in termenul de prescriptie extinctivă."
    ],
    "correctIndexes": [
      1,
      2
    ],
    "multiple": true
  }
];