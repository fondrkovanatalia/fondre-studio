/* =====================================================================
   Project detail - subtle "Zobraziť detail" button + bottom-sheet modal.
   Self-contained. Loaded on index.html (home) and projekty.html.
   Matches the site brand (navy, Tenor Sans / DM Sans, light-blue accent).
   ===================================================================== */
(function () {
  'use strict';

  var ARROW = '<span class="pd-ar">→</span>';

  var DATA = {
    woeva: {
      title: 'Woeva',
      cat: 'Produktový dizajn · UX/UI · Dizajnový systém',
      concept: false,
      about: 'Woeva je mobilná aplikácia pre objavovanie mestského a nočného života - kluby, komunity, kamošov a miesta, ktoré robia tvoje mesto výnimočným. V reálnom čase ukazuje, čo sa práve deje okolo teba, a cez Woeva Picks odporúča aktivity na mieru tvojim záujmom a polohe.',
      problem: 'Objavovanie diania v meste bolo roztrieštené - informácie žili v stories, chatoch a uzavretých skupinách, bez jedného miesta v reálnom čase. Cieľom bolo znížiť námahu pri hľadaní "čo robiť teraz" a premeniť pasívne scrollovanie na rozhodnutie ísť von, s dôrazom na lokálnosť a aktuálnosť.',
      why: 'Informačnú architektúru som postavila okolo objavovania v reálnom čase a lokálnosti, nie okolo statického katalógu eventov. Personalizáciu (Woeva Picks) som priorizovala už v onboardingu, aby sa obsah filtroval podľa záujmov a polohy a klesala rozhodovacia záťaž. Rollout mesto po meste bol zámerné produktové rozhodnutie - udržať hustotu obsahu a relevantnú komunitu namiesto prázdneho globálneho feedu.'
    },
    pulsesound: {
      title: 'PulseSound',
      cat: 'Webový dizajn · Branding · Audio platforma',
      concept: true,
      about: 'PulseSound je koncepčný návrh značky a webu pre audio platformu - domov pre podcasterov, hudobníkov a nezávislých zvukových tvorcov, kde publikujú, streamujú a budujú komunitu okolo svojho zvuku.',
      problem: 'Zvukoví tvorcovia sa strácali v generických feedoch, ktoré nerozlišujú medzi hudbou, podcastom a live streamom a nedávajú značke priestor. Zadaním bolo navrhnúť platformu, kde je zvuk primárnym objektom rozhrania a kde má tvorca vlastnú, rozpoznateľnú identitu - nie profil v uniformnej šablóne.',
      why: 'Rozhranie som postavila okolo prehrávača ako perzistentného prvku a waveformu ako hlavnej vizuálnej metafory, aby bolo ovládanie zvuku dostupné odkiaľkoľvek v produkte. Zvolila som tmavú tému a redukovanú farebnosť, aby pozornosť niesol samotný obsah - obaly a vizualizácie. Branding som navrhla ako škálovateľný systém tokenov a komponentov, ktorý drží konzistenciu od loga cez web po in-app prehrávač.'
    },
    f1: {
      title: 'F1 Gamification panel',
      cat: 'Gamifikačný panel · Dizajnový systém · UX',
      concept: true,
      about: 'Koncept gamifikačného panelu pre fanúšikov Formuly 1 - interaktívny dashboard, ktorý mení sledovanie pretekov na zážitok cez predpovede, výzvy, rebríčky a odmeny naprieč celou sezónou.',
      problem: 'Zapojenie fanúšikov medzi jednotlivými Grand Prix prudko klesalo - sledovanie bolo pasívne a chýbala priebežná motivácia vracať sa. Zadaním bolo navrhnúť vrstvu angažovanosti, ktorá funguje počas živého preteku aj mimo neho, no nezahltí samotný zážitok zo sledovania.',
      why: 'Navrhla som modulárny dizajnový systém - karty výziev, progres, rebríčky a odmeny ako samostatné komponenty, ktoré sa dajú skladať podľa fázy sezóny. Prioritou bola čitateľná hierarchia a okamžitá spätná väzba, aby bol panel použiteľný aj počas rýchleho diania na trati. Gamifikačné slučky (predpoveď, výsledok, odmena) som ladila tak, aby motivovali návraty a nepôsobili manipulatívne.'
    },
    herbert: {
      title: 'Herbert',
      cat: 'Produktový dizajn · Vizuálna identita · Web',
      concept: true,
      about: 'Herbert je koncepčný návrh značky, produktu a webu pre modernú remeselnú značku - od vizuálnej identity až po e-shop, ktorý predáva rovnako príbehom ako aj funkciou.',
      problem: 'Malé remeselné značky často strácajú dôveru práve v momente nákupu - vizuál nesedí s kvalitou produktu a e-shop pridáva trenie v kritických krokoch. Zadaním bolo spojiť charakter značky s plynulým nákupným tokom, ktorý znižuje pochybnosti a vedie k dokončeniu objednávky.',
      why: 'Identitu som postavila na teplom, čistom vizuálnom jazyku a e-shop navrhla okolo produktu - s dôrazom na hierarchiu informácií, kvalitnú fotografiu a mikrokopírovanie, ktoré rieši námietky priamo v mieste rozhodovania. Nákupný tok od produktu po checkout som skrátila na minimum krokov a celé to zastrešila dizajnovým systémom, aby značka vedela rásť a pridávať produkty bez straty konzistencie.'
    },
    playstation: {
      title: 'PlayStation',
      cat: 'Produktový dizajn · UX/UI',
      concept: true,
      about: 'Koncepčný redizajn časti PlayStation zážitku so zameraním na objavovanie a výber hier - rýchlejšia navigácia, osobnejšie odporúčania a rozhranie, ktoré necháva vyniknúť samotné hry.',
      problem: 'Objavovanie hier trpelo preťažením - priveľa titulov a promo obsahu naraz, slabá personalizácia a zdĺhavá cesta od záujmu k výberu. Zadaním bolo skrátiť cestu k "tej správnej hre" a znížiť kognitívnu záťaž pri prehliadaní, bez straty prémiového, herného charakteru značky.',
      why: 'Prepracovala som informačnú architektúru a hierarchiu tak, aby personalizované odporúčania a kľúčové akcie dostali prioritu a redukoval sa vizuálny šum. Zvolila som tmavé, filmové prostredie, kde artworky hier nesú pozornosť a rozhranie ustupuje obsahu. Rozhodnutia som opierala o rýchlosť výberu a konzistentné vzory naprieč celým tokom - od objavenia po kúpu.'
    },
    otters: {
      title: 'Otters tech conference ‘25',
      cat: 'Event branding · Web · Vizuálna identita',
      concept: true,
      about: 'Otters je koncept vizuálnej identity a webu pre technologickú konferenciu - od loga a dizajnového systému cez landing page až po materiály pre návštevníkov a rečníkov.',
      problem: 'Technologické podujatia pôsobia buď príliš korporátne, alebo neprehľadne, a ich web nezvládne naraz predať atmosféru aj jasne odkomunikovať program a registráciu. Zadaním bolo vytvoriť identitu a web, ktoré sú dôveryhodné aj živé a zároveň funkčne vedú návštevníka k registrácii.',
      why: 'Navrhla som odvážny, energický vizuálny systém s výraznou akcentáciou a pohybom, ktorý odlišuje Otters od typických tech eventov, no drží sa jasných pravidiel systému. Web som postavila okolo prehľadného programu a opakovanej výzvy na registráciu, s dôrazom na hierarchiu a rýchlu orientáciu. Identitu som navrhla ako konzistentný systém použiteľný od webu cez event materiály po sociálne siete.'
    }
  };

  function esc(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
    pdBody.innerHTML =
      '<div class="pd-eyebrow">' + esc(d.cat) + tag + '</div>' +
      '<h2 class="pd-title" id="pd-title">' + esc(d.title) + '</h2>' +
      '<div class="pd-section"><div class="pd-label">Kontext</div><p class="pd-text">' + esc(d.about) + '</p></div>' +
      '<div class="pd-section"><div class="pd-label">Zadanie</div><p class="pd-text">' + esc(d.problem) + '</p></div>' +
      '<div class="pd-section"><div class="pd-label">Prístup</div><p class="pd-text">' + esc(d.why) + '</p></div>';
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

  /* ---- inject the subtle buttons into every project card / banner ---- */
  function injectButtons() {
    var cards = document.querySelectorAll('.pimg[data-proj], .proj-card[data-proj], .carousel[data-proj], .m-proj[data-proj]');
    cards.forEach(function (el) {
      var key = el.getAttribute('data-proj');
      if (!DATA[key]) return;
      if (el.getAttribute('data-pd')) return; // already injected
      el.setAttribute('data-pd', '1');
      var mobile = !!el.closest('#mobile');
      var btn = document.createElement(mobile ? 'span' : 'button');
      btn.className = mobile ? 'pd-btn-m' : 'pd-btn';
      btn.setAttribute('data-proj', key);
      if (!mobile) btn.setAttribute('type', 'button');
      btn.innerHTML = 'Zobraziť detail ' + ARROW;
      el.appendChild(btn);
    });
  }

  /* delegated: button opens the modal (and never triggers the card link) */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.pd-btn, .pd-btn-m');
    if (!b) return;
    e.preventDefault();
    e.stopPropagation();
    openModal(b.getAttribute('data-proj'));
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectButtons);
  else injectButtons();
})();
