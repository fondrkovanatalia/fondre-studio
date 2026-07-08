/* ================= Fondré Studio — runtime ================= */
(function () {
  const stage = document.querySelector('.stage');
  const frame = document.getElementById('frame');
  const DESIGN_W = 1754;
  const H = parseInt(stage.getAttribute('data-h'), 10);
  stage.style.height = H + 'px';

  /* ---------- inject sticky navbar (fixed, scaled to match stage) ---------- */
  const active = document.body.getAttribute('data-page'); // 'home' | 'projekty' | 'onas'
  const navHTML = `
      <div class="nav-bar"></div>
      <a href="index.html" class="abs tenor" style="left:134px;top:30px;font-size:36px;color:#fdfdfd;letter-spacing:-1.8px;z-index:51;line-height:normal">Fondré Studio</a>
      <a href="index.html" class="abs tenor" style="left:136px;top:66px;font-size:18px;color:#b8b8b8;letter-spacing:-0.27px;z-index:51;line-height:normal">Digital products designers</a>
      <a href="projekty.html" class="abs dm nav-link ${active==='projekty'?'active':''}" style="left:1135px;top:52px;font-size:20px;color:#fff;letter-spacing:-1px;z-index:51;line-height:normal">Projekty</a>
      <a href="o-nas.html" class="abs dm nav-link ${active==='onas'?'active':''}" style="left:1270px;top:52px;font-size:20px;color:#fff;letter-spacing:-1px;z-index:51;line-height:normal">O nás</a>
      <div class="abs lang" id="langSel" style="left:1360px;top:44px;z-index:60">
        <button class="lang-btn dm" type="button" aria-haspopup="listbox" aria-expanded="false">
          <span class="lang-code">SK</span>
          <svg class="lang-arw" width="11" height="7" viewBox="0 0 11 7" fill="none"><path d="M1 1.5 5.5 5.5 10 1.5" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="lang-menu" role="listbox">
          <button role="option" data-lang="SK" class="on"><span>Slovenčina</span><b>SK</b></button>
          <button role="option" data-lang="EN"><span>English</span><b>EN</b></button>
          <button role="option" data-lang="NL"><span>Nederlands</span><b>NL</b></button>
          <button role="option" data-lang="DE"><span>Deutsch</span><b>DE</b></button>
        </div>
      </div>
      <a href="index.html#kontakt" class="abs btn-white nav-cta" style="left:1466px;top:45px;width:200px;height:45px;background:#fff;border-radius:30px;z-index:51"></a>
      <a href="index.html#kontakt" class="abs dm nav-cta" style="left:1498px;top:54px;font-size:20px;font-weight:600;color:#000;letter-spacing:-1px;z-index:52;line-height:normal">Kontaktujte nás</a>
  `;
  let topnav = document.getElementById('topnav');
  if (!topnav) { topnav = document.createElement('div'); topnav.id = 'topnav'; document.body.appendChild(topnav); }
  topnav.innerHTML = navHTML;
  window.addEventListener('scroll', function () {
    topnav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ---------- language dropdown ---------- */
  (function () {
    const sel = topnav.querySelector('#langSel');
    if (!sel) return;
    const btn = sel.querySelector('.lang-btn');
    const code = sel.querySelector('.lang-code');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = sel.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    sel.querySelectorAll('.lang-menu button').forEach(function (opt) {
      opt.addEventListener('click', function (e) {
        e.stopPropagation();
        sel.querySelectorAll('.lang-menu button').forEach(function (o) { o.classList.remove('on'); });
        opt.classList.add('on');
        code.textContent = opt.getAttribute('data-lang');
        sel.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        setLang(opt.getAttribute('data-lang'));
      });
    });
    document.addEventListener('click', function () { sel.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') sel.classList.remove('open'); });
  })();

  function setLang(lang) {
    document.querySelectorAll('.mnav-langs button, .lang-menu button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === lang);
    });
    const c = topnav && topnav.querySelector('.lang-code'); if (c) c.textContent = lang;
    document.documentElement.setAttribute('data-lang', lang);
    if (window.__i18n) window.__i18n(lang);
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  /* ---------- mobile navbar + overlay menu ---------- */
  if (!document.getElementById('mnav')) {
    const mn = document.createElement('div'); mn.id = 'mnav';
    mn.innerHTML = `<a class="mnav-logo" href="index.html"><b>Fondré Studio</b><small>Digital products designers</small></a>
      <button class="mnav-burger" id="mburger" aria-label="Menu"><span></span><span></span><span></span></button>`;
    const mo = document.createElement('div'); mo.id = 'mnav-overlay';
    mo.innerHTML = `
      <a href="index.html" class="${active==='home'?'on':''}">Domov</a>
      <a href="projekty.html" class="${active==='projekty'?'on':''}">Projekty</a>
      <a href="o-nas.html" class="${active==='onas'?'on':''}">O nás</a>
      <a href="ochrana-sukromia.html">Ochrana súkromia</a>
      <a href="pravidla-pouzivania.html">Pravidlá používania</a>
      <a href="index.html#mkontakt" class="cta">Kontaktujte nás</a>
      <div class="mnav-langs">
        <button data-lang="SK" class="on">SK</button>
        <button data-lang="EN">EN</button>
        <button data-lang="NL">NL</button>
        <button data-lang="DE">DE</button>
      </div>`;
    document.body.appendChild(mn); document.body.appendChild(mo);
    mn.querySelector('#mburger').addEventListener('click', function () { document.body.classList.toggle('menu-open'); });
    mo.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { document.body.classList.remove('menu-open'); }); });
    mo.querySelectorAll('.mnav-langs button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
  }

  /* ---------- mobile contact + footer ---------- */
  const mf = document.getElementById('mfooter');
  if (mf) {
    mf.innerHTML = `
      <div class="m-form" id="mkontakt">
        <h3>Máte projekt na mysli?</h3>
        <label>Celé meno/spoločnosť</label><input class="field" data-field="name" type="text" placeholder="Vaše meno/spoločnosť">
        <label>Emailová adresa</label><input class="field" data-field="email" type="email" placeholder="peknyden@gmail.com">
        <label>Popis projektu/správa</label><input class="field" data-field="msg" type="text" placeholder="Napíšte krátky popis projektu.">
        <button class="btn-submit">Odoslať</button>
        <div class="form-status"></div>
      </div>
      <div class="m-connect">
        <div class="big">Spojme sa<br>k vášmu <span class="m-grad">projektu</span></div>
        <div class="info">+421911657234<br>natalie@fondrestudio.com</div>
        <div class="socials"><a href="https://linkedin.com" target="_blank">Linked In</a><a href="https://x.com" target="_blank">X.com</a><a href="https://behance.net" target="_blank">Behancé</a></div>
      </div>
      <div class="m-foot">
        <div class="brand">Fondré Studio<small>©</small></div>
        <div class="tag">Digital products designers</div>
        <div class="links">
          <a href="index.html">Domov</a><a href="ochrana-sukromia.html">Ochrana súkromia</a>
          <a href="o-nas.html">O nás</a><a href="pravidla-pouzivania.html">Pravidlá používania</a>
          <a href="projekty.html">Projekty</a><a href="index.html#mkontakt">Kontaktujte nás</a>
        </div>
      </div>
      <div class="m-copy">© 2026 Created by Fondré Studio, All rights reserved.</div>`;
  }

  /* ---------- inject shared Contact + Footer block (bottom-anchored) ---------- */
  const cf = document.getElementById('contactfooter');
  if (cf) {
    cf.style.top = (H - 1521) + 'px';
    cf.style.height = '1521px';
    cf.innerHTML = `
      <span id="kontakt" class="abs" style="left:0;top:-116px"></span>
      <!-- form card -->
      <div class="abs" style="left:217px;top:11px;width:559px;height:616px;background:#fff;border-radius:18px"></div>
      <div class="abs dm" style="left:266px;top:67px;width:410px;font-size:34px;font-weight:600;color:#0a0a0a;letter-spacing:-1.7px;line-height:normal">Máte projekt na mysli?</div>

      <div class="abs dm" style="left:266px;top:155px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px;line-height:normal">Celé meno/spoločnosť</div>
      <input class="field abs dm" data-field="name" placeholder="Vaše meno/spoločnosť" style="left:264px;top:190px;width:467px;height:59px;background:#f5f5f5;border:none;border-radius:8px;padding:0 17px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px" />

      <div class="abs dm" style="left:263px;top:275px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px;line-height:normal">Emailová adresa</div>
      <input class="field abs dm" data-field="email" type="email" placeholder="peknyden@gmail.com" style="left:264px;top:310px;width:467px;height:59px;background:#f5f5f5;border:none;border-radius:8px;padding:0 17px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px" />

      <div class="abs dm" style="left:266px;top:394px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px;line-height:normal">Popis projektu/správa</div>
      <input class="field abs dm" data-field="msg" placeholder="Napíšte krátky popis projektu." style="left:264px;top:430px;width:467px;height:59px;background:#f5f5f5;border:none;border-radius:8px;padding:0 17px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px" />

      <button class="abs dm btn-submit" style="left:264px;top:513px;width:467px;height:59px;background:#0a1324;border:none;border-radius:29.5px;color:#fff;font-size:17px;font-weight:600;letter-spacing:-0.85px;cursor:pointer">Odoslať</button>
      <div class="form-status abs dm" style="left:266px;top:583px;width:467px;font-size:13px;letter-spacing:-0.2px;line-height:1.3"></div>

      <!-- contact info -->
      <div class="abs tenor" style="left:910px;top:28px;width:610px;font-size:68px;color:#fff;letter-spacing:-2.25px;line-height:normal">Spojme sa<br>k vášmu <span class="iserif">projektu</span></div>
      <div class="abs tenor" style="left:941px;top:257px;width:410px;font-size:34px;color:#fff;letter-spacing:-1.7px;line-height:1.35">+421911657234<br>natalie@fondrestudio.com</div>

      ${socialLink('Linked In',910,'https://linkedin.com')}
      ${socialLink('X.com',1121,'https://x.com')}
      ${socialLink('Behancé',1339,'https://behance.net')}

      <!-- light footer band -->
      <div class="abs" style="left:0;top:845px;width:1754px;height:505px;background:#fcfcfc"></div>
      <div class="abs tenor" style="left:133px;top:1047px;font-size:72.818px;color:#080d1d;letter-spacing:-3.6409px;line-height:normal">Fondré Studio<span style="font-size:24px;vertical-align:super">©</span></div>
      <div class="abs tenor" style="left:137px;top:1119.82px;font-size:36.409px;color:#b8b8b8;letter-spacing:-0.5461px;line-height:normal">Digital products designers</div>

      ${footLink('Domov','index.html',856,1014)}
      ${footLink('Ochrana súkromia','ochrana-sukromia.html',1145,1014)}
      ${footLink('Projekty','projekty.html',1434,1014)}
      ${footLink('O nás','o-nas.html',857,1087)}
      ${footLink('Pravidlá používania','pravidla-pouzivania.html',1435,1087)}
      ${footLink('Kontaktujte nás','index.html#kontakt',857,1160)}

      <!-- bottom dark strip -->
      <div class="abs tenor" style="left:174px;top:1419px;font-size:18px;color:#adaeb0;letter-spacing:-0.9px;line-height:normal">2026 Created by Fondré Studio, All rights reserved.</div>
      <div class="abs dm" style="left:146px;top:1421px;font-size:12px;color:#adaeb0">©</div>
      <a href="pravidla-pouzivania.html" class="abs dm foot-link" style="left:1146px;top:1426px;font-size:18px;font-weight:500;color:#adaeb0;letter-spacing:-0.9px;line-height:normal">Pravidlá používania</a>
      <a href="ochrana-sukromia.html" class="abs dm foot-link" style="left:1434px;top:1426px;font-size:18px;font-weight:500;color:#adaeb0;letter-spacing:-0.9px;line-height:normal">Ochrana súkromia</a>
    `;
  }
  function socialLink(label, x, href) {
    return `<div class="abs" style="left:${x}px;top:561px;width:181px;height:1px;background:rgba(253,253,253,.5)"></div>
      <a href="${href}" target="_blank" class="abs tenor social" style="left:${x-1}px;top:576px;font-size:14.783px;color:#fff;letter-spacing:-0.7391px;transition:opacity .2s;line-height:normal">${label}</a>
      <div class="abs" style="left:${x+170}px;top:574px;color:#fff;font-size:12px;transform:rotate(0deg)">↗</div>`;
  }
  function footLink(label, href, x, y) {
    return `<a href="${href}" class="abs dm foot-link" style="left:${x}px;top:${y}px;font-size:18px;font-weight:500;color:#080d1d;letter-spacing:-0.9px;line-height:normal">${label}</a>`;
  }

  /* ---------- contact form: validation + states ---------- */
  const MSGS = {
    SK: { fix: 'Skontrolujte, prosím, zvýraznené polia.', ok: 'Ďakujeme! Ozveme sa vám čo najskôr.', sending: 'Odosielam…' },
    EN: { fix: 'Please check the highlighted fields.', ok: "Thank you! We'll get back to you soon.", sending: 'Sending…' },
    DE: { fix: 'Bitte überprüfen Sie die markierten Felder.', ok: 'Danke! Wir melden uns bald bei Ihnen.', sending: 'Senden…' },
    NL: { fix: 'Controleer de gemarkeerde velden.', ok: 'Bedankt! We nemen snel contact op.', sending: 'Versturen…' }
  };
  function msg(k) { const l = document.documentElement.getAttribute('data-lang') || 'SK'; return (MSGS[l] || MSGS.SK)[k]; }
  function emailValid(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); }
  document.addEventListener('submit', function (e) { e.preventDefault(); });
  document.addEventListener('click', function (e) {
    const b = e.target.closest('.btn-submit');
    if (!b) return;
    e.preventDefault();
    const form = b.closest('.m-form') || b.closest('#contactfooter') || b.parentElement;
    if (!form) return;
    const status = form.querySelector('.form-status');
    const fields = form.querySelectorAll('.field[data-field]');
    let firstErr = null;
    fields.forEach(function (f) {
      f.classList.remove('field-err');
      const key = f.getAttribute('data-field');
      const v = (f.value || '').trim();
      let bad = false;
      if (key === 'name' && !v) bad = true;
      if (key === 'email' && !emailValid(v)) bad = true;
      if (bad) { f.classList.add('field-err'); if (!firstErr) firstErr = f; }
    });
    if (status) { status.classList.remove('ok', 'err'); }
    if (firstErr) {
      if (status) { status.textContent = msg('fix'); status.classList.add('err'); }
      firstErr.focus();
      return;
    }
    // success
    b.disabled = true;
    b.textContent = msg('sending');
    if (status) { status.textContent = ''; }
    setTimeout(function () {
      b.disabled = false;
      b.textContent = 'Odoslať';
      fields.forEach(function (f) { f.value = ''; f.classList.remove('field-err'); });
      if (status) { status.textContent = msg('ok'); status.classList.add('ok'); }
    }, 900);
  });
  // clear a field's error state as the user types
  document.addEventListener('input', function (e) {
    const f = e.target.closest('.field[data-field]');
    if (f) f.classList.remove('field-err');
  });

  /* ---------- carousels ---------- */
  document.querySelectorAll('.carousel').forEach(function (c) {
    const track = c.querySelector('.track');
    // seamless: no extra work, keyframes drive it
  });

  /* ---------- scroll reveal ---------- */
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* ---------- scale to fit ---------- */
  function fit() {
    const s = window.innerWidth / DESIGN_W;
    const curH = parseInt(stage.getAttribute('data-h'), 10) || H;
    stage.style.transform = 'scale(' + s + ')';
    stage.style.height = curH + 'px';
    frame.style.height = (curH * s) + 'px';
    if (topnav) topnav.style.transform = 'scale(' + s + ')';
  }
  window.__refit = fit;
  window.addEventListener('resize', fit);
  fit();

  /* ---------- smooth scroll to contact form (handles scaled stage) ---------- */
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href*="#kontakt"], a[href*="#mkontakt"]');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const onIndex = document.body.getAttribute('data-page') === 'home';
    // links from other pages should navigate normally to index.html first
    if (!onIndex && href.indexOf('index.html') === 0) return;
    e.preventDefault();
    document.body.classList.remove('menu-open');
    const isMobile = window.innerWidth < 820;
    let target;
    if (isMobile) target = document.querySelector('.m-form');
    else target = document.getElementById('contactfooter');
    if (!target) return;
    const navH = isMobile ? 74 : 130;
    const y = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  });

  /* ---------- arriving with #kontakt in the URL (from another page): land on the form correctly ---------- */
  function scrollToContactNow() {
    const isMobile = window.innerWidth < 820;
    const target = isMobile ? document.querySelector('.m-form') : document.getElementById('contactfooter');
    if (!target) return;
    const navH = isMobile ? 74 : 130;
    const y = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
  }
  if (location.hash === '#kontakt' || location.hash === '#mkontakt') {
    scrollToContactNow();
    setTimeout(scrollToContactNow, 80);
    window.addEventListener('load', function () { setTimeout(scrollToContactNow, 140); });
  }

  /* =================================================================
     INTERACTIVE HERO PARTICLES — dots that fly around the cursor
     ================================================================= */
  function initParticles(canvas, cw, ch) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = cw * dpr; canvas.height = ch * dpr;
    canvas.style.width = cw + 'px'; canvas.style.height = ch + 'px';
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const COUNT = Math.round((cw * ch) / 5200); // density
    const parts = [];
    for (let i = 0; i < COUNT; i++) {
      const hx = Math.random() * cw;
      const hy = Math.random() * ch;
      parts.push({
        hx, hy, x: hx, y: hy, vx: 0, vy: 0,
        r: Math.random() * 1.35 + 0.7,
        base: Math.random() * 0.16 + 0.09,
        tw: Math.random() * Math.PI * 2,
        tws: Math.random() * 0.02 + 0.006,
        ph: Math.random() * Math.PI * 2,
        amp: Math.random() * 11 + 7,
        sp: Math.random() * 0.004 + 0.0022
      });
    }

    const mouse = { x: -9999, y: -9999, active: false };
    const R = 150, FORCE = 2.6;
    function setPoint(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width) return;
      const x = (clientX - rect.left) * (cw / rect.width);
      const y = (clientY - rect.top) * (ch / rect.height);
      mouse.x = x; mouse.y = y;
      mouse.active = x > -40 && x < cw + 40 && y > -40 && y < ch + 40;
    }
    window.addEventListener('mousemove', function (e) { setPoint(e.clientX, e.clientY); });
    window.addEventListener('mouseleave', function () { mouse.active = false; mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('touchmove', function (e) { if (e.touches[0]) setPoint(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    window.addEventListener('touchend', function () { mouse.active = false; });

    let t = 0;
    function frameLoop() {
      t += 1;
      if (!canvas.offsetParent && canvas.offsetWidth === 0) { requestAnimationFrame(frameLoop); return; }
      ctx.clearRect(0, 0, cw, ch);
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        const dx = Math.cos(t * p.sp + p.ph) * p.amp;
        const dy = Math.sin(t * p.sp * 1.35 + p.ph) * p.amp;
        const tx = p.hx + dx, ty = p.hy + dy;
        if (mouse.active) {
          const mx = p.x - mouse.x, my = p.y - mouse.y;
          const d2 = mx * mx + my * my;
          if (d2 < R * R) {
            const d = Math.sqrt(d2) || 0.001;
            const f = (1 - d / R) * FORCE;
            p.vx += (mx / d) * f + (-my / d) * f * 0.5;
            p.vy += (my / d) * f + (mx / d) * f * 0.5;
          }
        }
        p.vx += (tx - p.x) * 0.012;
        p.vy += (ty - p.y) * 0.012;
        p.vx *= 0.9; p.vy *= 0.9;
        p.x += p.vx; p.y += p.vy;
        p.tw += p.tws;
        const a = p.base + Math.sin(p.tw) * 0.06;
        const speed = Math.min(1, (Math.abs(p.vx) + Math.abs(p.vy)) / 6);
        const alpha = Math.max(0.02, a + speed * 0.28);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + speed * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + (198 + speed * 57) + ',' + (212 + speed * 34) + ',255,' + alpha + ')';
        ctx.shadowBlur = 3 + speed * 5; ctx.shadowColor = 'rgba(179,214,237,' + (alpha * 0.6) + ')';
        ctx.fill();
      }
      requestAnimationFrame(frameLoop);
    }
    frameLoop();
  }

  // desktop hero particles
  const dCanvas = document.getElementById('hero-particles');
  if (dCanvas && window.innerWidth >= 820) {
    initParticles(dCanvas, parseInt(dCanvas.getAttribute('width'), 10), parseInt(dCanvas.getAttribute('height'), 10));
  }
  // mobile hero particles (same look as desktop)
  const mCanvas = document.getElementById('m-hero-particles');
  if (mCanvas && window.innerWidth < 820) {
    initParticles(mCanvas, window.innerWidth, 900);
  }
})();
