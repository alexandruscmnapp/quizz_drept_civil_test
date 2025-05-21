const questions = [
  {
    "question": "Principiul legalității incriminării presupune:",
    "answers": [
      "a) nicio persoană nu poate fi sancționată penal pentru o faptă care nu era prevăzută de legea penală la data când a fost săvârşită",
      "b) pedeapsa aplicată să nu fie sub minimul special prevăzut de lege pentru infracțiunea respectivă;",
      "c) persoana să poată fi trasă la răspundere penală pentru infracțiuni imprescriptibile."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Principiul legalităţii pedepselor presupune:",
    "answers": [
      "a) individualizarea pedepselor potrivit unui ghid de individualizare",
      "b) ca nicio pedeapsă să nu poată fi stabilită în afara limitelor generale ale acestuia",
      "c) ca aplicarea pedepselor complementare să fie obligatorie"
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Dezincriminarea:",
    "answers": [
      "a) este identică abrogarea;",
      "b) presupune ca executarea pedepselor, a măsurilor educative şi a măsurilor de siguranță, pronunţate în baza legii vechi, să înceteze prin intrarea în vigoare a legii noi, dacă faptele săvârşite sub legea veche nu mai sunt infracțiuni sub legea nouă;",
      "c) presupune ca în cursul judecăţii să se dispună o soluție de clasare, potrivit Codului de procedură penală."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Determinarea legii penale mai favorabile presupune:",
    "answers": [
      "a) analiză in concreto potrivit aprecierii globale a condițiilor de incriminare, de tragere la răspundere penală, cât și a condițiilor referitoare la pedeapsă;",
      "b) combinarea dispozițiilor celor mai favorabile din fiecare lege;",
      "c) doar o comparare a minimului sau maximului special al pedepsei prevăzute de lege pentru o infracțiune dată."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Aplicarea legii penale mai favorabile după rămânerea definitivă a hotărârii:",
    "answers": [
      "a) presupune o reindividualizare a pedepselor stabilite cu autoritate de lucru judecat;",
      "b) dacă s-a dispus condamnarea definitivă la pedeapsa închisorii, aplicarea art. 6 alin. 1 Cod penal se face numai în cazul în care noua lege prevede pedeapsa închisorii al cărei maxim special este mai redus decât pedeapsa efectiv aplicată;",
      "c) nu se aplică dacă după rămânerea definitivă a hotărârii de condamnare la detențiunea pe viață și până la executare a intervenit o lege care prevede pentru aceeaşi faptă pedeapsa închisorii."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Principiul teritorialității legii române presupune:",
    "answers": [
      "a) legea penală română se aplică infracţiunilor săvârşite în afara ţării de cetăţeni români;",
      "b) normele de drept penal român se aplică doar în situaţii prevăzute expres infracțiunilor săvârşite pe teritoriul României;",
      "c) se aplică cu prioritate față de principiile personalităţii, realităţii ori universalității, acestea din urmă fiind subsidiare."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Aplicarea legii penale române în baza principiului realității se poate face dacă:",
    "answers": [
      "a) un cetăţean francez săvârşeşte o infracțiune împotriva unei persoane care are cetățenie română şi franceză;",
      "b) infractorul cetățean străin se află pe teritoriul României;",
      "c) fapta constituie infracţiune, atât potrivit legii române, cât şi legii franceze."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Subiectul pasiv:",
    "answers": [
      "a) este întotdeauna persoana care a suferit un prejudiciu;",
      "b) este multiplu în cazul tuturor infracțiunilor contra patrimoniului;",
      "c) trebuie să fie o persoană cu discernământ, pentru a putea fi aplicabilă cauza justificativă a consimțământului victimei."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Infracţiunea este:",
    "answers": [
      "a) acțiune săvârşită cu vinovăţie, dacă nu este contravenţie;",
      "b) este o faptă prevăzută în Codul penal, săvârşită cu vinovăţie, nejustificată şi imputabilă persoanei care a săvârşit-o;",
      "c) este acțiunea sau inacțiunea prevăzută de legea penală, săvârşită cu vinovăţie, nejustificată şi imputabilă persoanei care a săvârşit-o."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Fapta constituie infracțiune numai dacă:",
    "answers": [
      "a) a fost săvârşită cu intenţie directă;",
      "b) legea o prevede în mod expres atunci când a fost comisă din culpă;",
      "c) a fost săvârşită cu intenție directă, culpă cu prevedere şi praeterintenţie."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Toate infracţiunile au:",
    "answers": [
      "a) obiect juridic;",
      "b) obiect juridic şi obiect material;",
      "c) obiect material."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Subiect activ al infracţiunii poate fi:",
    "answers": [
      "a) persoana fizică sau juridică care săvârşeşte infracţiunea;",
      "b) doar autorul;",
      "c) orice persoană care a împlinit 18 ani."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Intenţia indirectă presupune că făptuitorul:",
    "answers": [
      "a) a acţionat din culpă şi a prevăzut rezultatul faptei sale;",
      "b) nu prevede rezultatul faptei sale, nu îl urmăreşte, dar acceptă posibilitatea producerii lui;",
      "c) prevede rezultatul faptei sale şi, deşi nu îl urmăreşte, acceptă posibilitatea producerii lui."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Praeterintenţia presupune:",
    "answers": [
      "a) doar comiterea unor infracţiuni progresive;",
      "b) când acţiunea intenţionată produce un rezultat mai grav, care se datorează culpei făptuitorului;",
      "c) când fapta constând într-o acțiune sau inacţiune intenţionată produce un rezultat mai grav, care se datorează culpei făptuitorului."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Locul sau timpul săvârşirii infracţiunii:",
    "answers": [
      "a) la unele infracţiuni este element constitutiv;",
      "b) nu este niciodată element circumstanţial agravat;",
      "c) nu prezintă relevanță penală în cazul infracțiunii de furt calificat."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Efectele cauzelor justificative se extind asupra participanţilor:",
    "answers": [
      "a) la infracţiunile expres prevăzute de lege;",
      "b) întotdeauna;",
      "c) doar în situația legitimei apărări."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Legitima apărare presupune:",
    "answers": [
      "a) proporţionalitatea dintre atac și apărare;",
      "b) ca apărarea să fie disproporţionată când atacul este săvârşit împotriva unui minor;",
      "c) ca apărarea să nu fie întotdeauna precedată de atac."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Consimțământul persoanei vătămate:",
    "answers": [
      "a) nu produce efecte în cazul infracțiunii de omor;",
      "b) produce efecte în cazul infracțiunilor contra vieţii, dacă legea nu exclude expres efectul justificativ al acestuia;",
      "c) este o cauză de nepedepsire."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Efectele cauzelor de neimputabilitate:",
    "answers": [
      "a) nu se extind niciodată asupra participanţilor;",
      "b) se extind dacă unul dintre coautori era minor;",
      "c) nu se extind asupra participanților, cu excepția cazului fortuit."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "O acţiune sau o inacțiune constituie infracţiune:",
    "answers": [
      "a) atunci când este comisă cu intenție directă sau indirectă sau cu praeterintenţie;",
      "b) și când este săvârşită din culpă;",
      "c) doar dacă minorul a împlinit 14 ani."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "În structura praeterintenției va exista:",
    "answers": [
      "a) doar intenţie directă în raport cu rezultatul prevăzut şi urmărit sau acceptat şi culpa în raport cu rezultatul mai grav;",
      "b) culpa cu prevedere în raport de rezultatul prevăzut şi culpa fără prevedere în raport de rezultatul mai grav;",
      "c) intenţie directă sau indirectă în raport cu rezultatul prevăzut și urmărit sau acceptat şi culpa (cu sau fără prevedere) în raport cu rezultatul mai grav."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Pericolul în cazul stării de necesitate trebuie să fie:",
    "answers": [
      "a) inevitabil;",
      "b) să fie viitor și să constea într-o amenințare pentru viața, integritatea corporală sau sănătatea unei persoane;",
      "c) să fie provocat de o persoană."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Constrângerea fizică produce:",
    "answers": [
      "a) efecte in personam;",
      "b) înlătură răspunderea penală;",
      "c) efecte doar dacă fapta nu a rămas în faza de tentativă."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Actele de pregătire:",
    "answers": [
      "a) sunt posibile doar la infracțiunile de rezultat,",
      "b) intră în elementul material al infracțiunii;",
      "c) nu sunt posibile la infracțiunile comise din culpă."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "În cazul infracţiunii progresive, legea aplicabilă este:",
    "answers": [
      "a) legea în vigoare la momentul epuizării;",
      "b) legea în vigoare la momentul producerii rezultatului mai grav, dacă este mai favorabilă;",
      "c) legea în vigoare la momentul comiterii activităţii infracționale (momentul consumării infracţiunii)."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Tentativa nu este posibilă:",
    "answers": [
      "a) la infracțiunile din culpă;",
      "b) la infracţiunile complexe;",
      "c) la infracţiunile de pericol."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Infracţiunea continuată presupune:",
    "answers": [
      "a) săvârşirea mai multor infracţiuni de către aceeaşi persoană;",
      "b) unitate de rezoluție infracţională;",
      "c) toate acțiunile/inacţiunile care prezintă, fiecare în parte, conținutul aceleiaşi infracțiuni să fie comise în calitate de autor."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Concursul de infracţiuni presupune:",
    "answers": [
      "a) ca infracţiunile să fie săvârşite înainte de pronunţarea unei hotărâri definitive de condamnare pentru vreuna dintre ele;",
      "b) infracțiunile să fie săvârşite doar cu intenţie;",
      "c) ca infracţiunile să nu aibă acelaşi subiect activ."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Concursul real omogen este atunci când:",
    "answers": [
      "a) parte din infracțiuni au aceeaşi natură;",
      "b) infracţiunile din structura concursului se consumă/epuizează în acelaşi timp;",
      "c) infracțiunile sunt de aceeaşi natură şi au, în esenţă, aceeaşi încadrare juridică."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Concursul real cu conexitate etiologică înseamnă că:",
    "answers": [
      "a) ambele infracțiuni sunt comise cu intenție/praeterintenţie;",
      "b) cel mult una dintre infracţiuni să fie comisă din culpă;",
      "c) exclude participaţia penală."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Există concurs real cu conexitate consecvenţională:",
    "answers": [
      "a) dacă pentru o infracţiune a intervenit o hotărâre de condamnare, autorul săvârşind fapta ulterioară pentru a o ascunde pe cea pentru care a intervenit condamnarea;",
      "b) dacă o infracțiune este comisă pentru ascunderea unei alte infracţiuni:",
      "c) dacă între infracțiuni există relaţia mijloc - scop."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Concursul ideal:",
    "answers": [
      "a) se reține atunci când este comisă o singură acțiune/inacțiune care, faţă de urmările pe care le-a produs, întrunește conţinutul constitutiv al mai multor infracţiuni,",
      "b) presupune ca toate infracţiunile să fie consumate;",
      "c) nu poate fi și omogen sau eterogen."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "În cazul concursului de infracţiuni, instanţa:",
    "answers": [
      "a) stabileşte în prima etapă pedeapsa pentru fiecare dintre infracțiunile aflate în concurs;",
      "b) stabileşte direct pedeapsa pentru pluralitatea de infracţiuni;",
      "c) nu aplică niciodată pedeapsa rezultantă în baza cumulului aritmetic."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "În cazul concursului de infracţiuni, pedeapsa principală rezultantă:",
    "answers": [
      "a) poate depăşi maximul general al pedepsei;",
      "b) nu poate depăşi maximul general al pedepsei;",
      "c) nu se impune determinarea legii penale mai favorabile."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "În cazul concursului de infracţiuni:",
    "answers": [
      "a) măsurile de siguranță de natură diferită sau de aceeaşi natură, dar cu un conţinut concret diferit, luate în cazul infracțiunilor concurente, se vor cumula;",
      "b) se va aplica măsura de siguranţă cea mai grea;",
      "c) în cazul în care se aplică detenţia pe viață nu se mai aplică măsuri de siguranță."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Este recidivă postcondamnatorie dacă:",
    "answers": [
      "a) noua infracţiune este comisă din culpă, înainte de începerea executării,",
      "b) dacă noua infracţiune este comisă înainte de începerea executării pedepsei, în timpul executării, în stare de evadare din executarea pedepsei anterioare sau în termenul de încercare al suspendării condiționate sau sub supraveghere a executării pedepsei, al grațierii condiționate sau al liberării condiționate;",
      "c) dacă pedeapsa pentru primul termen al recidivei este amenda."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Printre condițiile primului termen al recidivei postcondamnatorii se regăseşte:",
    "answers": [
      "a) pedeapsa să nu fi fost executată sau considerată ca executată;",
      "b) pot fi și condamnări pentru care a intervenit amnistia;",
      "c) pedeapsa trebuie să fie aplicată în considerarea unei infracțiuni unice."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Aplicarea pedepsei în cazul recidivei postcondamnatorii presupune:",
    "answers": [
      "a) cumulul aritmetic între pedeapsa aplicată pentru noua infracțiune şi pedeapsa anterioară neexecutată ori restul rămas neexecutat din aceasta;",
      "b) cumulul juridic, aplicându-se pedeapsa cea mai grea, la care se adaugă 1/3 din totalul celorlalte pedepse;",
      "c) ca pedeapsa rezultantă să poată depăși în cazuri deosebit de grave maximul general."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "În cazul recidivei postexecutorii, limitele speciale ale pedepsei prevăzute de lege pentru noua infracţiune:",
    "answers": [
      "a) se majorează cu o treime;",
      "b) se majorează cu jumătate;",
      "c) nu se aplică şi în cazul în care condamnarea la pedeapsa pe viață a fost comutată sau înlocuită cu pedeapsa închisorii."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Pluralitatea intermediară nu presupune:",
    "answers": [
      "a) hotărâre definitivă de condamnare;",
      "b) hotărâre definitivă de condamnare la pedeapsa de 2 ani închisoare pentru furt calificat;",
      "c) aplicarea pedepselor potrivit regulilor de la concursul de infracțiuni."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Primul termen al pluralităţii intermediare poate consta într-o condamnare definitivă:",
    "answers": [
      "a) pentru o infracțiune comisă fie cu intenție, fie cu praeterintenție sau din culpă;",
      "b) pentru o faptă dezincriminată ulterior;",
      "c) prin care s-a dispus renunțarea la aplicarea pedepsei."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Participaţia penală presupune:",
    "answers": [
      "a) ca între participanți să nu existe o legătură subiectivă stabilită anterior săvârşirii faptei,",
      "b) ca între participanți să existe o identitate de mobil sau scop;",
      "c) ca între participanți să existe o legătură subiectivă stabilită înainte sau în timpul săvârşirii faptei."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Pluralitatea naturală:",
    "answers": [
      "a) nu este incompatibilă cu coautoratul;",
      "b) fiecare participant are calitate de autor;",
      "c) este necesar ca toți autorii să acţioneze cu intenţie."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Activitatea instigatorului:",
    "answers": [
      "a) este întotdeauna anterioară,",
      "b) poate fi şi din culpă, la infracţiunile săvârşite din culpă;",
      "c) nu este posibilă la infracțiunile comise din culpă."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "În ipoteza infracțiunilor cu autor calificat:",
    "answers": [
      "a) este necesar ca instigatorul să aibă calitatea cerută de lege pentru autor;",
      "b) nu este necesar ca instigatorul să aibă şi calitatea cerută de lege pentru autor;",
      "c) nu există instigare, nefiind posibilă participaţia penală."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Complicele acţionează:",
    "answers": [
      "a) din culpă;",
      "b) cu intenţie ori cu praeterintenţie;",
      "c) numai cu intenţie."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Împiedicarea săvârşirii infracţiunii de către participant:",
    "answers": [
      "a) este o cauză de nepedepsire cu caracter personal;",
      "b) se răsfrânge asupra instigatorului, chiar dacă nu el a împiedicat săvârşirea infracţiunii;",
      "c) dacă unul dintre coautori împiedică săvârşirea infracţiunii, ceilalți coautori, instigatori sau complici nu vor răspunde penal."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Pedeapsa accesorie:",
    "answers": [
      "a) este obligatorie întotdeauna când se aplică pedeapsa închisorii;",
      "b) se aplică chiar dacă nu sunt aplicate pedepse complementare;",
      "c) se execută începând cu momentul rămânerii definitive a hotărârii de condamnare până la momentul executării integrale a pedepsei ori până când aceasta este considerată ca executată."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Printre pedepsele complementare se numără și:",
    "answers": [
      "a) detenţia pe viaţă;",
      "b) publicarea hotărârii de condamnare;",
      "c) confiscarea specială."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Aplicarea pedepsei complementare a interzicerii executării unor drepturi:",
    "answers": [
      "a) este obligatorie întotdeauna când legea prevede ca pedeapsă principală închisoarea;",
      "b) este obligatorie când legea prevede această pedeapsă pentru infracţiunea săvârşită;",
      "c) nu poate fi aplicată în cazul pedepsei amenzii şi instanţa constată că, faţă de natura şi gravitatea infracțiunii, împrejurările cauzei şi persoana infractorului, această pedeapsă este necesară."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Depăşirea limitelor legitimei apărări este:",
    "answers": [
      "a) cauză de neimputabilitate;",
      "b) nu produce niciodată efecte juridice;",
      "c) circumstanță atenuantă legală."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Provocarea:",
    "answers": [
      "a) profită tuturor participanților la săvârşirea infracțiunii, dacă au avut reprezentarea că autorul a acţionat în condițiile stării de provocare;",
      "b) este o circumstanţă personală;",
      "c) nu presupune o evaluare in concreto a stării de puternică tulburare sau emoție, fiind o prezumţie legală."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Circumstanţele atenuante legale sau judiciare:",
    "answers": [
      "a) produc efecte cu privire la pedeapsa principală;",
      "b) au efect şi asupra pedepselor complementare și accesorii;",
      "c) produc atâtea reduceri câte circumstanţe sunt reţinute."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Săvârşirea faptei prin cruzimi, ca circumstanță agravantă:",
    "answers": [
      "a) este o circumstanţă personală;",
      "b) este o circumstanţă reală;",
      "c) se poate reține ca circumstanţă agravantă a săvârşirii infracțiunii prin acte de cruzime, prevăzută de art. 77 lit. b teza I Cod penal şi în situația comiterii infracţiunii de omor calificat, prevăzută de art. 189 alin. 1 lit. h Cod penal."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Al doilea termen al pluralității intermediare:",
    "answers": [
      "a) poate consta într-o infracţiune pentru care legea prevede pedeapsa închisorii mai mică de un an sau numai pedeapsa amenzii ori o infracțiune săvârşită din culpă,",
      "b) noua infracţiune trebuie comiă înainte de rămânerea definitivă a hotărârii de condamnare;",
      "c) noua infracțiune nu poate fi comisă în termenul de supraveghere al liberării condiționate."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Renunțarea la aplicarea pedepsei se dispune dacă:",
    "answers": [
      "a) infractorul a mai suferit anterior o condamnare la pedeapsa amenzii;",
      "b) pedeapsa prevăzută de lege pentru infracțiunea săvârșită este închisoarea de 5 ani sau mai mică,",
      "c) infractorul a fugit din ţară după comiterea faptei."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Amânarea aplicării pedepsei nu se poate dispune dacă:",
    "answers": [
      "a) pedeapsa prevăzută de lege pentru infracţiunea săvârşită este de 7 ani sau mai mare;",
      "b) pedeapsa stabilită, inclusiv în cazul concursului de infracţiuni este amenda sau închisoarea de cel mult 2 ani;",
      "c) pedeapsa închisorii este însoţită de amendă în condiţiile art. 62 Cod penal."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Termenul de supraveghere pentru condamnat, în cazul suspendării sub supravegherii:",
    "answers": [
      "a) poate fi mai mic decât pedeapsa aplicată;",
      "b) este stabilit de instanţă, durata fiind între 2 și 4 ani;",
      "c) în cazul concursului de infracţiuni, poate fi mai mic decât pedeapsa rezultantă."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Revocarea suspendării executării pedepsei sub supraveghere are loc dacă:",
    "answers": [
      "a) pe parcursul termenului de supraveghere cel condamnat a săvârşit o nouă infracţiune, descoperită până la împlinirea termenului şi pentru care s-a pronunţat o condamnare la pedeapsa închisorii, chiar după expirarea acestui termen;",
      "b) pe parcursul termenului de supraveghere, inculpatul minor a comis infracţiunea de omor calificat;",
      "c) dacă până la expirarea termenului de supraveghere, persoana supravegheată nu îndeplineşte integral obligațiile civile stabilite prin hotărâre, chiar şi atunci când dovedește că nu a avut nicio posibilitate să le îndeplinească."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Măsurile educative:",
    "answers": [
      "a) nu se pot lua dacă nu a fost comisă o infracțiune;",
      "b) se pot lua şi în situaţia în care făptuitorului nu i se aplică o pedeapsă;",
      "c) nu se pot lua dacă faţă de infractor s-a dispus detenţiunea pe viaţă."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Sunt supuse confiscării:",
    "answers": [
      "a) toate bunurile făptuitorului dacă au legătură cu infracțiunea;",
      "b) bunurile folosite la comiterea infracţiunii, chiar dacă aparțin altei persoane;",
      "c) bunurile produse prin săvârşirea faptei prevăzute de legea penală."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Minorul care nu a împlinit vârsta de 14 ani:",
    "answers": [
      "a) nu răspunde penal,",
      "b) răspunde penal dacă se dovedește printr-o expertiză că a avut discernământ;",
      "c) nu răspunde penal dacă se afla în legitimă apărare."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Obligarea la tratament medical:",
    "answers": [
      "a) se dispune pe durată nedeterminată;",
      "b) este necesar ca infractorul să se afle în stare de libertate pentru a-şi îndeplini obligația;",
      "c) nu poate fi dispusă faţă de minor."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Faţă de minorul care, la data săvârşirii infracţiunii, avea vârsta cuprinsă între 14 şi 18 ani:",
    "answers": [
      "a) se ia întotdeauna o măsură educativă neprivativă de libertate;",
      "b) se poate lua o măsură educativă privativă de libertate atunci când pedeapsa prevăzută de lege pentru infracţiunea săvârșită este închisoarea de 7 ani sau mai mare ori detențiunea pe viaţă;",
      "c) nu se poate dispune și o măsură de siguranță dacă s-a dispus o măsură educativă."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Măsura educativă a asistării zilnice:",
    "answers": [
      "a) presupune ca minorul să nu depăşească, fără acordul serviciului de probațiune, limita teritorială stabilită de instanţă;",
      "b) poate fi dispusă pe o perioadă cuprinsă între 2 luni şi 6 luni;",
      "c) nu poate fi înlocuită cu măsura internării într-un centru educativ."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "În cazul concursului de infracţiuni, incidenţa legii de amnistie se va aprecia:",
    "answers": [
      "a) prin raportare la pedeapsa rezultantă;",
      "b) în funcție de fiecare infracțiune comisă;",
      "c) dacă acţiunea civilă va fi soluționată sau nu, instanţa putând dispune acoperirea prejudiciului."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Prescripţia răspunderii penale:",
    "answers": [
      "a) este o instituție de drept penal, fiind supusă regulilor legii penale mai favorabile",
      "b) produce efecte in personam;",
      "c) înlătură răspunderea penală la împlinirea termenului prevăzut de lege în cazul infracțiunii de omor."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Durata termenului de prescripţie a răspunderii penale se stabileşte:",
    "answers": [
      "a) în funcție de pedeapsa aplicată de instanţă;",
      "b) pedeapsa prevăzută de lege;",
      "c) în funcție de pedeapsa rezultantă, în cazul concursului de infracțiuni."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Retragerea plângerii prealabile:",
    "answers": [
      "a) produce efecte in personam;",
      "b) poate fi condiționată de plata unei sume de bani;",
      "c) se poate realiza doar până la citirea actului de sesizare a instanţei."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Împăcarea părților:",
    "answers": [
      "a) se poate face până la soluționarea definitivă a cauzei;",
      "b) nu poate fi realizată oral;",
      "c) este posibilă numai în cazurile explicit prevăzute de lege pentru infracţiunile la care acţiunea penală se exercită din oficiu."
    ],
    "correctIndexes": [
      2
    ],
    "multiple": true
  },
  {
    "question": "Împăcarea:",
    "answers": [
      "a) produce efecte in rem, înlăturând răspunderea penală a tuturor participanţilor;",
      "b) este bilaterală;",
      "c) se poate realiza şi prin mandatar."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Graţierea:",
    "answers": [
      "a) nu produce efecte asupra măsurilor de siguranţă;",
      "b) are ca efect şi reabilitarea persoanei condamnate;",
      "c) nu poate produce comutarea unei pedepse în alta mai uşoară."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  },
  {
    "question": "Pentru a opera reabilitarea de drept:",
    "answers": [
      "a) nu prezintă importanță faptul că în cursul termenului de reabilitare a fost comisă o faptă penală, dacă s-a dispus o soluție de renunțare la urmărire penală",
      "b) este necesar ca persoana condamnată să nu mai comită în termenul de reabilitare o altă infracțiune;",
      "c) în cazul condamnărilor succesive este suficient ca doar pentru una dintre ele să fie îndeplinite condițiile."
    ],
    "correctIndexes": [
      1
    ],
    "multiple": true
  },
  {
    "question": "Reabilitarea:",
    "answers": [
      "a) nu are efect asupra măsurilor de siguranţă;",
      "b) are ca urmare obligația de reintegrare în funcția din care infractorul a fost destituit în urma condamnării;",
      "c) în cazul în care persoana reabilitată săvârşeşte din nou o infracțiune, se va putea reține starea de recidivă."
    ],
    "correctIndexes": [
      0
    ],
    "multiple": true
  }
];