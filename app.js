/* ================= Fondré Studio — runtime ================= */
(function () {
  const stage = document.querySelector('.stage');
  const frame = document.getElementById('frame');
  const DESIGN_W = 1754;
  const H = parseInt(stage.getAttribute('data-h'), 10);
  stage.style.height = H + 'px';

  /* ---------- inject navbar ---------- */
  const active = document.body.getAttribute('data-page'); // 'home' | 'projekty' | 'onas'
  const navHost = document.getElementById('navbar');
  if (navHost) {
    navHost.innerHTML = `
      <div class="nav-bar"></div>
      <a href="index.html" class="abs tenor" style="left:134px;top:30px;font-size:36px;color:#fdfdfd;letter-spacing:-1.8px;z-index:51;line-height:normal">Fondré Studio</a>
      <a href="index.html" class="abs tenor" style="left:136px;top:66px;font-size:18px;color:#b8b8b8;letter-spacing:-0.27px;z-index:51;line-height:normal">Digital products designers</a>
      <a href="projekty.html" class="abs dm nav-link ${active==='projekty'?'active':''}" style="left:1135px;top:52px;font-size:20px;color:#fff;letter-spacing:-1px;z-index:51;line-height:normal">Projekty</a>
      <a href="o-nas.html" class="abs dm nav-link ${active==='onas'?'active':''}" style="left:1270px;top:52px;font-size:20px;color:#fff;letter-spacing:-1px;z-index:51;line-height:normal">O nás</a>
      <div class="abs" style="left:1360px;top:44px;width:77px;height:45px;border:1px solid #fff;border-radius:30px;z-index:51"></div>
      <div class="abs dm" style="left:1386px;top:55px;font-size:18px;font-weight:500;color:#fff;letter-spacing:-0.9px;z-index:52;line-height:normal">SK</div>
      <a href="index.html#kontakt" class="abs btn-white nav-cta" style="left:1466px;top:45px;width:200px;height:45px;background:#fff;border-radius:30px;z-index:51"></a>
      <a href="index.html#kontakt" class="abs dm nav-cta" style="left:1498px;top:54px;font-size:20px;font-weight:600;color:#000;letter-spacing:-1px;z-index:52;line-height:normal">Kontaktujte nás</a>
    `;
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
      <input class="field abs dm" placeholder="Vaše meno/spoločnosť" style="left:264px;top:190px;width:467px;height:59px;background:#f5f5f5;border:none;border-radius:8px;padding:0 17px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px" />

      <div class="abs dm" style="left:263px;top:275px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px;line-height:normal">Emailová adresa</div>
      <input class="field abs dm" placeholder="peknyden@gmail.com" style="left:264px;top:310px;width:467px;height:59px;background:#f5f5f5;border:none;border-radius:8px;padding:0 17px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px" />

      <div class="abs dm" style="left:266px;top:394px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px;line-height:normal">Popis projektu/správa</div>
      <input class="field abs dm" placeholder="Napíšte krátky popis projektu." style="left:264px;top:430px;width:467px;height:59px;background:#f5f5f5;border:none;border-radius:8px;padding:0 17px;font-size:17px;color:#0a0a0a;letter-spacing:-0.85px" />

      <button class="abs dm btn-submit" style="left:264px;top:513px;width:467px;height:59px;background:#0a1324;border:none;border-radius:29.5px;color:#fff;font-size:17px;font-weight:600;letter-spacing:-0.85px;cursor:pointer">Odoslať</button>

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

  /* ---------- form submit (demo) ---------- */
  document.addEventListener('click', function (e) {
    const b = e.target.closest('.btn-submit');
    if (!b) return;
    b.textContent = 'Odoslané ✓';
    b.style.background = '#12331d';
    setTimeout(() => { b.textContent = 'Odoslať'; b.style.background = '#0a1324'; }, 2200);
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
    stage.style.transform = 'scale(' + s + ')';
    frame.style.height = (H * s) + 'px';
  }
  window.addEventListener('resize', fit);
  fit();

  /* =================================================================
     INTERACTIVE HERO PARTICLES — dots that fly around the cursor
     ================================================================= */
  const canvas = document.getElementById('hero-particles');
  if (canvas) {
    const cw = parseInt(canvas.getAttribute('width'), 10);
    const ch = parseInt(canvas.getAttribute('height'), 10);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = cw * dpr; canvas.height = ch * dpr;
    canvas.style.width = cw + 'px'; canvas.style.height = ch + 'px';
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const COUNT = Math.round((cw * ch) / 5200); // higher density (more particles)
    const parts = [];
    for (let i = 0; i < COUNT; i++) {
      const hx = Math.random() * cw;
      const hy = Math.random() * ch;
      parts.push({
        hx, hy, x: hx, y: hy,
        vx: 0, vy: 0,
        r: Math.random() * 1.35 + 0.7,       // a touch bigger
        base: Math.random() * 0.13 + 0.05,   // lower, subtler opacity
        tw: Math.random() * Math.PI * 2,
        tws: Math.random() * 0.02 + 0.006,
        ph: Math.random() * Math.PI * 2
      });
    }

    const mouse = { x: -9999, y: -9999, active: false };
    const R = 150;          // influence radius (css px within canvas space)
    const FORCE = 2.6;      // repulsion strength

    function toCanvas(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (clientX - rect.left) * (cw / rect.width),
        y: (clientY - rect.top) * (ch / rect.height)
      };
    }
    window.addEventListener('mousemove', function (e) {
      const p = toCanvas(e.clientX, e.clientY);
      mouse.x = p.x; mouse.y = p.y;
      mouse.active = p.x > -40 && p.x < cw + 40 && p.y > -40 && p.y < ch + 40;
    });
    window.addEventListener('mouseleave', function () { mouse.active = false; mouse.x = -9999; mouse.y = -9999; });

    let t = 0;
    function frameLoop() {
      t += 1;
      ctx.clearRect(0, 0, cw, ch);
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        // gentle idle drift around home
        const dx = Math.cos(t * 0.004 + p.ph) * 6;
        const dy = Math.sin(t * 0.005 + p.ph) * 6;
        const tx = p.hx + dx, ty = p.hy + dy;

        // repulsion from cursor -> "fly around"
        if (mouse.active) {
          const mx = p.x - mouse.x, my = p.y - mouse.y;
          const d2 = mx * mx + my * my;
          if (d2 < R * R) {
            const d = Math.sqrt(d2) || 0.001;
            const f = (1 - d / R) * FORCE;
            // push away + slight tangential swirl so they orbit/fly
            p.vx += (mx / d) * f + (-my / d) * f * 0.5;
            p.vy += (my / d) * f + (mx / d) * f * 0.5;
          }
        }
        // spring back to drifting home
        p.vx += (tx - p.x) * 0.012;
        p.vy += (ty - p.y) * 0.012;
        p.vx *= 0.9; p.vy *= 0.9;
        p.x += p.vx; p.y += p.vy;

        // twinkle
        p.tw += p.tws;
        const a = p.base + Math.sin(p.tw) * 0.06;
        const speed = Math.min(1, (Math.abs(p.vx) + Math.abs(p.vy)) / 6);
        // particles brighten slightly only while being pushed by the cursor
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
})();
