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
      problem: 'Najlepšie eventy a komunity často ostávajú skryté v stories, chatoch a súkromných skupinách - ľudia ich zmeškajú, aj keď sa dejú hneď za rohom. Chýbalo jedno miesto, kde mesto naozaj žije a kde jednoducho nájdeš, kam ísť dnes večer.',
      why: 'Produkt som postavila okolo objavovania v reálnom čase a lokálnosti, nie okolo statického zoznamu eventov. Preto Woeva Picks personalizuje aktivity podľa záujmov a spúšťame ju mesto po meste - Bratislava a Praha dnes, Viedeň a Londýn zajtra - aby si každé mesto udržalo vlastnú atmosféru a správnu komunitu ľudí, ktorí to žijú.'
    },
    pulsesound: {
      title: 'PulseSound',
      cat: 'Webový dizajn · Branding · Audio platforma',
      concept: true,
      about: 'PulseSound je koncepčný návrh značky a webu pre audio platformu - domov pre podcasterov, hudobníkov a nezávislých zvukových tvorcov, kde publikujú, streamujú a budujú komunitu okolo svojho zvuku.',
      problem: 'Audio tvorcovia sú roztrúsení naprieč platformami, ktoré ich obsah menia na neosobný feed bez charakteru. Chýbal im priestor, kde je zvuk hrdinom a značka pôsobí prémiovo, nie genericky.',
      why: 'Zvolila som tmavý, sústredený vizuálny jazyk s dôrazom na waveform a pohyb, aby dizajn odrážal samotný zvuk. Branding som postavila na jednoduchom, rozpoznateľnom systéme, ktorý funguje konzistentne od loga cez web až po prehrávač.'
    },
    f1: {
      title: 'F1 Gamification panel',
      cat: 'Gamifikačný panel · Dizajnový systém · UX',
      concept: true,
      about: 'Koncept gamifikačného panelu pre fanúšikov Formuly 1 - interaktívny dashboard, ktorý mení sledovanie pretekov na zážitok cez predpovede, výzvy, rebríčky a odmeny naprieč celou sezónou.',
      problem: 'Bežní fanúšikovia sledujú preteky pasívne a ich zapojenie medzi jednotlivými Grand Prix rýchlo opadá. Chýbala vrstva, ktorá udrží angažovanosť aj mimo pretekového víkendu.',
      why: 'Postavila som to na jasnom dizajnovom systéme - modulárne komponenty ako karty výziev, progres či rebríčky, ktoré sa dajú skladať a rozširovať. Zvolila som prehľadnú hierarchiu a okamžitú spätnú väzbu, aby bol panel čitateľný počas živého preteku a zároveň motivoval vracať sa.'
    },
    herbert: {
      title: 'Herbert',
      cat: 'Produktový dizajn · Vizuálna identita · Web',
      concept: true,
      about: 'Herbert je koncepčný návrh značky, produktu a webu pre modernú remeselnú značku - od vizuálnej identity až po e-shop, ktorý predáva rovnako príbehom ako aj funkciou.',
      problem: 'Malé remeselné značky často na webe pôsobia amatérsky a ich e-shop nevzbudzuje dôveru potrebnú na nákup. Chýbala identita, ktorá spojí charakter značky s hladkým nákupným zážitkom.',
      why: 'Zvolila som čistú, teplú identitu a produktovo orientovaný web, kde je každý detail - typografia, fotografia aj mikrokopírovanie - podriadený dôvere a konverzii. Dizajnový systém som navrhla tak, aby značka vedela pridávať produkty bez straty konzistentnosti.'
    },
    playstation: {
      title: 'PlayStation',
      cat: 'Produktový dizajn · UX/UI',
      concept: true,
      about: 'Koncepčný redizajn časti PlayStation zážitku so zameraním na objavovanie a výber hier - rýchlejšia navigácia, osobnejšie odporúčania a rozhranie, ktoré necháva vyniknúť samotné hry.',
      problem: 'Herné obchody zahlcujú hráčov množstvom titulov a promo obsahu, takže nájsť tú správnu hru býva zdĺhavé. Chýbal prehľadnejší a osobnejší tok objavovania.',
      why: 'Postavila som to na jasnej vizuálnej hierarchii a personalizovaných odporúčaniach, ktoré rešpektujú prémiový, herný charakter značky. Zvolila som tmavé, filmové prostredie s dôrazom na artworky hier - aby obsah dýchal a rozhodovanie bolo rýchle.'
    },
    otters: {
      title: 'Otters tech conference ‘25',
      cat: 'Event branding · Web · Vizuálna identita',
      concept: true,
      about: 'Otters je koncept vizuálnej identity a webu pre technologickú konferenciu - od loga a dizajnového systému cez landing page až po materiály pre návštevníkov a rečníkov.',
      problem: 'Technologické podujatia často pôsobia buď príliš korporátne, alebo chaoticky, a ich web nedokáže predať atmosféru ani jasne odkomunikovať program. Chýbala identita, ktorá je zároveň dôveryhodná aj živá.',
      why: 'Zvolila som odvážny, energický vizuálny systém s výraznou farebnou akcentáciou a pohybom, ktorý odlišuje Otters od zvyčajných tech eventov. Web som navrhla okolo prehľadného programu a silného CTA na registráciu - aby identita zaujala a zároveň fungovala funkčne.'
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
      '<div class="pd-section"><div class="pd-label">O projekte</div><p class="pd-text">' + esc(d.about) + '</p></div>' +
      '<div class="pd-section"><div class="pd-label">Aký problém riešil</div><p class="pd-text">' + esc(d.problem) + '</p></div>' +
      '<div class="pd-section"><div class="pd-label">Prečo toto riešenie</div><p class="pd-text">' + esc(d.why) + '</p></div>';
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
