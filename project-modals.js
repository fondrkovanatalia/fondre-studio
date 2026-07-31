/* =====================================================================
   Project detail - a small arrow next to each project name; clicking the
   name or the project image opens a brand-styled bottom-sheet modal
   (case study). Self-contained. Loaded on index.html and projekty.html.
   ===================================================================== */
(function () {
  'use strict';

  var DATA = {
    woeva: {
      title: 'Woeva',
      cat: 'Produktový dizajn · UX/UI · Dizajnový systém',
      concept: false,
      sections: [
        { label: 'Kontext', blocks: [
          ['p', 'Woeva je mobilná aplikácia na objavovanie mestského života v reálnom čase. Pomáha používateľom nájsť aktuálne podujatia, podniky, komunity a zaujímavé miesta vo svojom okolí prostredníctvom personalizovaných odporúčaní založených na ich polohe a záujmoch.']
        ]},
        { label: 'Zadanie', blocks: [
          ['p', 'Objavovanie diania v meste bolo roztrieštené medzi sociálne siete, chatovacie aplikácie a uzavreté komunity. Používatelia museli sledovať množstvo rôznych zdrojov, aby zistili, čo sa práve deje a kam sa oplatí ísť.'],
          ['p', 'Cieľom projektu bolo:'],
          ['ul', [
            'zjednodušiť objavovanie aktuálneho diania v okolí,',
            'skrátiť čas potrebný na rozhodovanie,',
            'premeniť pasívne prehliadanie obsahu na reálne zážitky,',
            'vytvoriť jedno centrálne miesto pre lokálne komunity a mestský život.'
          ]]
        ]},
        { label: 'Rozsah práce', blocks: [
          ['p', 'Projekt zahŕňal kompletný návrh používateľského zážitku a používateľského rozhrania mobilnej aplikácie - od prvotného konceptu až po finálny dizajn pripravený na implementáciu.'],
          ['p', 'Počas projektu som navrhla:'],
          ['ul', [
            'informačnú architektúru aplikácie,',
            'používateľské scenáre (User Flows),',
            'wireframy,',
            'onboarding používateľa,',
            'personalizačný systém **Woeva Picks**,',
            'dizajn systém a UI komponenty,',
            'high-fidelity obrazovky,',
            'interaktívne prototypy,',
            'dizajn pre vývoj a implementáciu.'
          ]]
        ]},
        { label: 'Dizajnový prístup', blocks: [
          ['p', 'Pri návrhu som sa nesústredila na tradičný katalóg podujatí, ale na objavovanie diania v reálnom čase. Celá informačná architektúra bola navrhnutá tak, aby používateľ čo najrýchlejšie našiel relevantné aktivity vo svojom okolí bez zdĺhavého vyhľadávania.'],
          ['p', 'Kľúčové produktové rozhodnutia:'],
          ['ul', [
            '**Objavovanie v reálnom čase** - prioritou bolo zobrazovať obsah, ktorý je aktuálny práve v danom momente.',
            '**Personalizácia od prvého spustenia** - onboarding zbiera informácie o záujmoch a lokalite používateľa, aby bol obsah relevantný už od prvého otvorenia aplikácie.',
            '**Zníženie rozhodovacej záťaže** - namiesto nekonečného feedu aplikácia ponúka personalizované odporúčania prostredníctvom funkcie **Woeva Picks**.',
            '**Lokalita ako základ navigácie** - obsah sa prispôsobuje aktuálnej polohe používateľa a jeho bezprostrednému okoliu.',
            '**Postupný rollout po mestách** - aplikácia bola navrhnutá tak, aby sa v každom meste najskôr vybudovala aktívna komunita a dostatočné množstvo relevantného obsahu pred ďalšou expanziou.'
          ]]
        ]},
        { label: 'Kľúčové oblasti', blocks: [
          ['tags', ['UX stratégia','Informačná architektúra','User Flows','Wireframing','Prototypovanie','UI Design','Design System','Onboarding','Personalizácia používateľského zážitku','Mobile-first dizajn','Handoff pre vývoj']]
        ]}
      ]
    },

    f1: {
      title: 'F1 Gamification panel',
      cat: 'Gamifikačný panel · Dizajnový systém · UX',
      concept: true,
      sections: [
        { label: 'Kontext', blocks: [
          ['p', 'F1 Gamification Panel je konceptuálny návrh interaktívneho dashboardu pre fanúšikov Formuly 1. Cieľom konceptu bolo rozšíriť zážitok zo sledovania pretekov o gamifikačné prvky, ktoré podporujú dlhodobú angažovanosť počas celej sezóny prostredníctvom predpovedí, výziev, rebríčkov a odmien.']
        ]},
        { label: 'Zadanie', blocks: [
          ['p', 'Zapojenie fanúšikov medzi jednotlivými pretekmi počas sezóny často výrazne klesá. Sledovanie je prevažne pasívne a chýba dôvod vracať sa k platforme aj mimo samotných Grand Prix.'],
          ['p', 'Cieľom návrhu bolo:'],
          ['ul', [
            'zvýšiť angažovanosť fanúšikov počas celej sezóny,',
            'podporiť pravidelné návraty používateľov,',
            'rozšíriť zážitok zo sledovania pretekov bez narušenia hlavného obsahu,',
            'navrhnúť intuitívny systém gamifikačných prvkov.'
          ]]
        ]},
        { label: 'Rozsah práce', blocks: [
          ['p', 'Projekt predstavoval konceptuálny návrh gamifikačného dashboardu - od návrhu používateľského zážitku až po vizuálny dizajn jednotlivých komponentov.'],
          ['p', 'Počas projektu som navrhla:'],
          ['ul', [
            'informačnú architektúru dashboardu,',
            'používateľské scenáre (User Flows),',
            'wireframy,',
            'modulárny dizajn systém,',
            'UI komponenty,',
            'high-fidelity obrazovky,',
            'interaktívne prototypy,',
            'gamifikačné mechaniky a používateľské interakcie.'
          ]]
        ]},
        { label: 'Dizajnový prístup', blocks: [
          ['p', 'Návrh bol postavený na myšlienke, že gamifikácia má dopĺňať sledovanie pretekov, nie odvádzať od neho pozornosť. Rozhranie preto kladie dôraz na jasnú informačnú hierarchiu, rýchlu orientáciu a okamžitú spätnú väzbu aj počas dynamického priebehu pretekov.'],
          ['p', 'Kľúčové dizajnové rozhodnutia:'],
          ['ul', [
            '**Modulárny dizajn systém** - jednotlivé prvky, ako výzvy, rebríčky, odmeny či progres, fungujú ako samostatné komponenty, ktoré možno flexibilne kombinovať podľa fázy sezóny.',
            '**Čitateľná informačná hierarchia** - panel umožňuje rýchlu orientáciu aj počas živého sledovania pretekov.',
            '**Okamžitá spätná väzba** - používateľ dostáva priebežné informácie o svojom postupe, získaných bodoch a odmenách.',
            '**Gamifikácia podporujúca návraty** - mechaniky predpovedí, výziev a odmien motivujú používateľov vracať sa medzi jednotlivými pretekmi.',
            '**Nenarušenie hlavného zážitku** - gamifikačné prvky boli navrhnuté ako doplnková vrstva, ktorá podporuje sledovanie Formuly 1 bez zbytočného zahltenia rozhrania.'
          ]]
        ]},
        { label: 'Kľúčové oblasti', blocks: [
          ['tags', ['UX stratégia','Gamification Design','Informačná architektúra','User Flows','Wireframing','Prototypovanie','UI Design','Design System','Dashboard Design','Koncept produktu']]
        ]}
      ]
    },

    pulsesound: {
      title: 'PulseSound',
      cat: 'Webový dizajn · Branding · Audio platforma',
      concept: true,
      sections: [
        { label: 'Kontext', blocks: [
          ['p', 'PulseSound je konceptuálny návrh značky a webovej platformy pre audio tvorcov. Cieľom konceptu bolo vytvoriť priestor, kde môžu podcasteri, hudobníci a nezávislí tvorcovia publikovať svoj obsah, budovať vlastnú identitu a vytvárať komunitu okolo svojej tvorby.']
        ]},
        { label: 'Zadanie', blocks: [
          ['p', 'Existujúce audio platformy často zobrazujú hudbu, podcasty a živé vysielania v jednotnom feede bez dostatočného dôrazu na identitu samotného tvorcu. Koncept vznikol s cieľom preskúmať, ako by mohla vyzerať platforma, v ktorej je zvuk hlavným prvkom používateľského zážitku a tvorca dostáva priestor budovať vlastnú značku.'],
          ['p', 'Cieľom návrhu bolo:'],
          ['ul', [
            'vytvoriť intuitívne prostredie pre objavovanie audio obsahu,',
            'zvýrazniť identitu jednotlivých tvorcov,',
            'navrhnúť konzistentný vizuálny jazyk značky,',
            'podporiť jednoduché počúvanie obsahu naprieč celou platformou.'
          ]]
        ]},
        { label: 'Rozsah práce', blocks: [
          ['p', 'Projekt predstavoval konceptuálny návrh značky a webovej platformy - od definovania vizuálnej identity až po návrh používateľského rozhrania.'],
          ['p', 'Počas projektu som navrhla:'],
          ['ul', [
            'vizuálnu identitu značky,',
            'informačnú architektúru webu,',
            'používateľské scenáre (User Flows),',
            'wireframy,',
            'UI komponenty,',
            'dizajn systém,',
            'high-fidelity obrazovky,',
            'interaktívne prototypy,',
            'responzívny webový dizajn.'
          ]]
        ]},
        { label: 'Dizajnový prístup', blocks: [
          ['p', 'Návrh bol postavený okolo myšlienky, že prehrávanie zvuku je hlavnou aktivitou používateľa. Rozhranie preto kladie dôraz na nepretržitý prístup k prehrávaču, jednoduchú orientáciu v obsahu a silnú vizuálnu identitu tvorcov.'],
          ['p', 'Kľúčové dizajnové rozhodnutia:'],
          ['ul', [
            '**Perzistentný prehrávač** - prehrávanie zostáva dostupné naprieč celou platformou bez prerušenia používateľského toku.',
            '**Waveform ako hlavný vizuálny prvok** - zvuk je komunikovaný prostredníctvom jednotnej vizuálnej metafory naprieč rozhraním.',
            '**Minimalistická tmavá téma** - redukovaná farebná paleta necháva vyniknúť obalom albumov, vizualizáciám a samotnému obsahu.',
            '**Silná identita tvorcov** - koncept dáva priestor vlastnému brandingu namiesto uniformných profilov.',
            '**Škálovateľný dizajn systém** - vizuálna identita bola navrhnutá ako konzistentný systém komponentov a dizajnových tokenov využiteľný naprieč webom aj budúcimi produktmi.'
          ]]
        ]},
        { label: 'Kľúčové oblasti', blocks: [
          ['tags', ['Branding','UX stratégia','Informačná architektúra','User Flows','Wireframing','Prototypovanie','UI Design','Design System','Responzívny webový dizajn','Koncept produktu']]
        ]}
      ]
    },

    herbert: {
      title: 'Herbert',
      cat: 'Produktový dizajn · Vizuálna identita · Web',
      concept: true,
      sections: [
        { label: 'Kontext', blocks: [
          ['p', 'Herbert je konceptuálny návrh značky, produktu a e-commerce webu pre modernú remeselnú značku. Cieľom konceptu bolo vytvoriť dôveryhodnú značku a nákupný zážitok, ktorý prepája kvalitnú vizuálnu identitu s intuitívnym e-shopom.']
        ]},
        { label: 'Zadanie', blocks: [
          ['p', 'Menšie remeselné značky často zápasia s tým, že kvalita ich produktov sa neodráža vo vizuálnej prezentácii ani v používateľskom zážitku počas nákupu. Výsledkom býva nižšia dôvera zákazníkov a zbytočné prekážky pri dokončení objednávky.'],
          ['p', 'Cieľom návrhu bolo:'],
          ['ul', [
            'vytvoriť dôveryhodnú vizuálnu identitu značky,',
            'navrhnúť intuitívny e-commerce zážitok,',
            'zjednodušiť nákupný proces,',
            'podporiť vyššiu mieru dokončenia objednávok.'
          ]]
        ]},
        { label: 'Rozsah práce', blocks: [
          ['p', 'Projekt predstavoval konceptuálny návrh značky a e-commerce riešenia - od vizuálnej identity až po návrh kompletného používateľského rozhrania webu.'],
          ['p', 'Počas projektu som navrhla:'],
          ['ul', [
            'vizuálnu identitu značky,',
            'informačnú architektúru webu,',
            'používateľské scenáre (User Flows),',
            'wireframy,',
            'UI komponenty,',
            'dizajn systém,',
            'high-fidelity obrazovky,',
            'responzívny e-commerce dizajn,',
            'interaktívne prototypy.'
          ]]
        ]},
        { label: 'Dizajnový prístup', blocks: [
          ['p', 'Návrh bol postavený na myšlienke, že značka a používateľský zážitok musia pôsobiť rovnako kvalitne ako samotný produkt. Rozhranie preto kladie dôraz na prehľadnosť, dôveryhodnosť a plynulý nákupný proces.'],
          ['p', 'Kľúčové dizajnové rozhodnutia:'],
          ['ul', [
            '**Silná vizuálna identita** - značka využíva čistý a nadčasový vizuálny jazyk, ktorý podporuje remeselný charakter produktov.',
            '**Produkt v centre pozornosti** - rozhranie je navrhnuté tak, aby kvalitná fotografia, informácie o produkte a jeho výhody boli vždy na prvom mieste.',
            '**Hierarchia informácií** - obsah je usporiadaný tak, aby používateľ dostal odpovede na najdôležitejšie otázky v správnom momente nákupného procesu.',
            '**Jednoduchý nákupný tok** - cesta od produktu až po dokončenie objednávky bola navrhnutá s minimálnym počtom krokov a zbytočných prekážok.',
            '**Škálovateľný dizajn systém** - vizuálna identita a komponenty boli navrhnuté tak, aby značka mohla jednoducho rozširovať ponuku produktov pri zachovaní konzistentného používateľského zážitku.'
          ]]
        ]},
        { label: 'Kľúčové oblasti', blocks: [
          ['tags', ['Branding','UX stratégia','E-commerce UX','Informačná architektúra','User Flows','Wireframing','Prototypovanie','UI Design','Design System','Responzívny webový dizajn']]
        ]}
      ]
    },

    otters: {
      title: 'Otters tech conference ‘25',
      cat: 'Event branding · Web · Vizuálna identita',
      concept: true,
      sections: [
        { label: 'Kontext', blocks: [
          ['p', 'Otters Tech Conference ‘25 je konceptuálny návrh vizuálnej identity a webovej prezentácie pre technologickú konferenciu. Cieľom konceptu bolo vytvoriť modernú a zapamätateľnú značku, ktorá prepája atraktívny vizuálny štýl s prehľadným používateľským zážitkom počas registrácie a orientácie na podujatí.']
        ]},
        { label: 'Zadanie', blocks: [
          ['p', 'Webové stránky technologických konferencií často nedokážu vyvážiť silnú vizuálnu identitu s prehľadnou komunikáciou programu, rečníkov a registrácie. Výsledkom býva zložitá orientácia a nižšia motivácia návštevníkov dokončiť registráciu.'],
          ['p', 'Cieľom návrhu bolo:'],
          ['ul', [
            'vytvoriť výraznú vizuálnu identitu konferencie,',
            'navrhnúť intuitívny web zameraný na registráciu,',
            'zlepšiť orientáciu v programe a informáciách,',
            'vytvoriť konzistentný vizuálny systém použiteľný naprieč všetkými komunikačnými kanálmi.'
          ]]
        ]},
        { label: 'Rozsah práce', blocks: [
          ['p', 'Projekt predstavoval konceptuálny návrh vizuálnej identity a webovej prezentácie - od tvorby značky až po návrh kompletného používateľského rozhrania.'],
          ['p', 'Počas projektu som navrhla:'],
          ['ul', [
            'vizuálnu identitu konferencie,',
            'logo a princípy brandingu,',
            'informačnú architektúru webu,',
            'používateľské scenáre (User Flows),',
            'wireframy,',
            'UI komponenty,',
            'dizajn systém,',
            'high-fidelity obrazovky,',
            'responzívny webový dizajn,',
            'interaktívne prototypy,',
            'koncept vizuálnych materiálov pre účastníkov a rečníkov.'
          ]]
        ]},
        { label: 'Dizajnový prístup', blocks: [
          ['p', 'Návrh bol postavený na myšlienke, že technologická konferencia môže pôsobiť profesionálne aj vizuálne atraktívne zároveň. Rozhranie preto kombinuje výraznú identitu s jasnou informačnou hierarchiou a intuitívnou navigáciou.'],
          ['p', 'Kľúčové dizajnové rozhodnutia:'],
          ['ul', [
            '**Výrazná vizuálna identita** - značka využíva energickú farebnú paletu, výraznú typografiu a dynamické grafické prvky, ktoré odlišujú konferenciu od bežných technologických podujatí.',
            '**Prehľadná štruktúra obsahu** - program, rečníci a ďalšie informácie sú usporiadané tak, aby sa používateľ rýchlo orientoval.',
            '**Registrácia ako hlavný cieľ** - výzvy na registráciu sú prirodzene integrované naprieč webom bez narušenia používateľského zážitku.',
            '**Konzistentný dizajn systém** - identita bola navrhnutá ako škálovateľný systém komponentov využiteľný na webe, sociálnych sieťach aj eventových materiáloch.',
            '**Responzívny prístup** - rozhranie bolo navrhnuté s dôrazom na pohodlné používanie na mobilných zariadeniach aj desktopoch.'
          ]]
        ]},
        { label: 'Kľúčové oblasti', blocks: [
          ['tags', ['Branding','UX stratégia','Informačná architektúra','User Flows','Wireframing','Prototypovanie','UI Design','Design System','Responzívny webový dizajn','Landing Page Design']]
        ]}
      ]
    },

    playstation: {
      title: 'PlayStation',
      cat: 'Produktový dizajn · UX/UI',
      concept: true,
      sections: [
        { label: 'Kontext', blocks: [
          ['p', 'PlayStation je konceptuálny redizajn časti používateľského zážitku zameraný na objavovanie a výber hier. Cieľom konceptu bolo navrhnúť prehľadnejšie rozhranie, ktoré pomáha používateľom rýchlejšie nájsť relevantné hry prostredníctvom lepšej navigácie a personalizovaných odporúčaní.']
        ]},
        { label: 'Zadanie', blocks: [
          ['p', 'Objavovanie hier môže byť pri veľkom množstve titulov a propagačného obsahu neprehľadné. Používatelia sa často stretávajú s informačným preťažením, slabou personalizáciou a zdĺhavou cestou od prvotného záujmu až po výber hry.'],
          ['p', 'Cieľom návrhu bolo:'],
          ['ul', [
            'zjednodušiť objavovanie nových hier,',
            'skrátiť cestu od objavenia k výberu alebo nákupu,',
            'znížiť kognitívnu záťaž pri prehliadaní obsahu,',
            'zachovať prémiový charakter značky PlayStation.'
          ]]
        ]},
        { label: 'Rozsah práce', blocks: [
          ['p', 'Projekt predstavoval konceptuálny redizajn používateľského rozhrania zameraného na objavovanie hier - od analýzy používateľského toku až po návrh finálneho vizuálneho rozhrania.'],
          ['p', 'Počas projektu som navrhla:'],
          ['ul', [
            'informačnú architektúru,',
            'používateľské scenáre (User Flows),',
            'wireframy,',
            'navigačný systém,',
            'personalizované sekcie obsahu,',
            'UI komponenty,',
            'dizajn systém,',
            'high-fidelity obrazovky,',
            'interaktívne prototypy.'
          ]]
        ]},
        { label: 'Dizajnový prístup', blocks: [
          ['p', 'Návrh bol postavený na myšlienke, že rozhranie má podporovať objavovanie hier bez zbytočného vizuálneho šumu. Prioritou bolo zvýrazniť samotný obsah a zároveň zjednodušiť rozhodovanie používateľa.'],
          ['p', 'Kľúčové dizajnové rozhodnutia:'],
          ['ul', [
            '**Prepracovaná informačná architektúra** - obsah je organizovaný tak, aby sa používatelia rýchlejšie dostali k relevantným hrám.',
            '**Personalizované odporúčania** - odporúčaný obsah získava vyššiu prioritu a pomáha skrátiť čas potrebný na výber.',
            '**Minimalizácia vizuálneho šumu** - rozhranie ustupuje do pozadia a necháva vyniknúť artworky a vizuálnu identitu jednotlivých hier.',
            '**Prémiový vizuálny štýl** - tmavé prostredie podporuje filmový charakter značky a vytvára konzistentný herný zážitok.',
            '**Konzistentný používateľský tok** - navigácia a interakcie boli navrhnuté tak, aby používateľa prirodzene sprevádzali od objavenia hry až po jej nákup.'
          ]]
        ]},
        { label: 'Kľúčové oblasti', blocks: [
          ['tags', ['UX stratégia','Informačná architektúra','User Flows','Wireframing','Prototypovanie','UI Design','Design System','Personalizácia používateľského zážitku','Dashboard Design','Koncept produktu']]
        ]}
      ]
    }
  };

  function esc(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function fmt(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }
  function renderBlock(b) {
    if (b[0] === 'p') return '<p class="pd-text">' + fmt(b[1]) + '</p>';
    if (b[0] === 'ul') return '<ul class="pd-list">' + b[1].map(function (i) { return '<li>' + fmt(i) + '</li>'; }).join('') + '</ul>';
    if (b[0] === 'tags') return '<div class="pd-tags">' + b[1].map(function (t) { return '<span class="pd-chip">' + esc(t) + '</span>'; }).join('') + '</div>';
    return '';
  }

  /* ---- build overlay once ---- */
  var overlay = document.createElement('div');
  overlay.className = 'pd-overlay';
  overlay.innerHTML =
    '<div class="pd-sheet" role="dialog" aria-modal="true" aria-labelledby="pd-title">' +
      '<button class="pd-close" type="button" aria-label="Zavrieť">×</button>' +
      '<div class="pd-body"></div>' +
    '</div>';
  document.body.appendChild(overlay);
  var sheet = overlay.querySelector('.pd-sheet');
  var pdBody = overlay.querySelector('.pd-body');

  function openModal(key) {
    var d = DATA[key];
    if (!d) return;
    var tag = d.concept ? '<span class="pd-tag">Koncept</span>' : '';
    var html =
      '<div class="pd-eyebrow">' + esc(d.cat) + tag + '</div>' +
      '<h2 class="pd-title" id="pd-title">' + esc(d.title) + '</h2>';
    d.sections.forEach(function (s) {
      html += '<div class="pd-section"><div class="pd-label">' + esc(s.label) + '</div>' +
        s.blocks.map(renderBlock).join('') + '</div>';
    });
    pdBody.innerHTML = html;
    overlay.classList.add('open');
    document.body.classList.add('pd-lock');
    sheet.scrollTop = 0;
  }
  function closeModal() {
    overlay.classList.remove('open');
    document.body.classList.remove('pd-lock');
  }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target.closest('.pd-close')) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  /* ---- add a small arrow next to each project name; open modal on name/image click ---- */
  var TRIGGERS = '.tenor[data-proj], .pimg[data-proj], .proj-card[data-proj], .carousel[data-proj], .m-proj[data-proj]';

  function addArrow(el) {
    if (el.querySelector('.pd-titlearrow')) return;
    el.classList.add('pd-titlelink');
    var a = document.createElement('span');
    a.className = 'pd-titlearrow';
    a.setAttribute('aria-hidden', 'true');
    a.textContent = '→';
    el.appendChild(a);
  }
  function injectTriggers() {
    // desktop project names (projekty .ptitle, home + Otters .tenor) -> arrow + focusable
    document.querySelectorAll('.tenor[data-proj]').forEach(function (el) {
      if (!DATA[el.getAttribute('data-proj')]) return;
      addArrow(el);
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
    });
    // mobile: arrow next to the card title
    document.querySelectorAll('#mobile .m-proj[data-proj] .ttl').forEach(function (el) {
      var card = el.closest('.m-proj');
      if (!card || !DATA[card.getAttribute('data-proj')]) return;
      addArrow(el);
    });
  }

  // click the name OR the image (card) -> open the modal
  document.addEventListener('click', function (e) {
    var t = e.target.closest(TRIGGERS);
    if (!t) return;
    var key = t.getAttribute('data-proj');
    if (!DATA[key]) return;
    e.preventDefault();
    openModal(key);
  });
  // keyboard: Enter / Space on a focused project name
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var t = e.target && e.target.closest ? e.target.closest('.tenor[data-proj]') : null;
    if (!t || !DATA[t.getAttribute('data-proj')]) return;
    e.preventDefault();
    openModal(t.getAttribute('data-proj'));
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectTriggers);
  else injectTriggers();
})();
