// EVERYDAY EASE — friendly, fresh and modular. Mint + evergreen with coral and butter accents.
// Every section is rendered here from the verified facts in kit.js, then wired up with small, delightful interactions.
import { business as B, demoBar, esc, validEmail, validPhone, toast, reveal, embedded } from '../../shared/kit.js';
import './styles.css';

/* ---------- Icons (24 viewBox, stroke) ---------- */
const ICONS = {
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  chat: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-5 4v-4h0a1 1 0 0 1-1-1z"/><path d="M8.5 9h7M8.5 12h4.5"/>',
  sliders: '<path d="M4 7h9M18 7h2M4 17h3M12 17h8"/><circle cx="15.5" cy="7" r="2.3"/><circle cx="9.5" cy="17" r="2.3"/>',
  doc: '<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 3v5h5M8.5 13h7M8.5 17h4.5"/>',
  sparkle: '<path d="M11 3c.9 4.9 2.6 6.6 7.5 7.5-4.9.9-6.6 2.6-7.5 7.5-.9-4.9-2.6-6.6-7.5-7.5C8.4 9.6 10.1 7.9 11 3z"/><path d="M18.5 15c.4 1.9 1 2.6 3 3-2 .4-2.6 1-3 3-.4-2-1-2.6-3-3 2-.4 2.6-1.1 3-3z"/>',
  droplet: '<path d="M12 3s6.5 6.6 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3z"/><path d="M9 14.5a3 3 0 0 0 3 3"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2"/>',
  school: '<path d="M2.5 9.5L12 4.5l9.5 5-9.5 5z"/><path d="M6.5 11.7V16c0 1.6 2.5 3.5 5.5 3.5s5.5-1.9 5.5-3.5v-4.3M21.5 9.5V15"/>',
  medical: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M12 8v8M8 12h8"/>',
  office: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h1.5M13.5 7H15M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15M10.5 21v-2.5h3V21"/>',
  store: '<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9"/><path d="M5.5 11.5V20h13v-8.5M10 20v-4.5h4V20"/>',
  pin: '<path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  wallet: '<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H17v4"/><path d="M4 7.5V17a2 2 0 0 0 2 2h14V9H6.5A2.5 2.5 0 0 1 4 7.5z"/><circle cx="16" cy="14" r="1.2"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.5a3 3 0 0 1 0 5.5M17.5 14.5a5.5 5.5 0 0 1 3 4.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.6-4.4L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M4 13a8 8 0 0 0 14.6 4.4l1.4-1.9"/><path d="M20 20v-4.5h-4.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  repeat: '<path d="M17 3l3 3-3 3"/><path d="M4 11V9.5A3.5 3.5 0 0 1 7.5 6H20M7 21l-3-3 3-3"/><path d="M20 13v1.5a3.5 3.5 0 0 1-3.5 3.5H4"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4 4 0 0 0 7 0M9 9.5h.01M15 9.5h.01"/>',
  grip: '<path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7.5l8 5.5 8-5.5"/>',
  leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19l7-7"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>'
};
const icon = (name, cls = 'i') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ''}</svg>`;

const MARK = `<svg class="mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M24 2.5c11 0 21.5 6.6 21.5 20.4S35.6 45.5 23.4 45.5 2.5 37.7 2.5 24.2 13 2.5 24 2.5z" fill="#2f8f6b"/><path d="M22.5 11.5c1.2 6.8 3.6 9.2 10.4 10.4-6.8 1.2-9.2 3.6-10.4 10.4-1.2-6.8-3.6-9.2-10.4-10.4 6.8-1.2 9.2-3.6 10.4-10.4z" fill="#fff"/><circle cx="35.5" cy="33" r="4.6" fill="#ff8f70"/></svg>`;
const BLOB = [
  'M421 316q-20 66-83 96t-131 15q-68-15-112-70T64 231q13-71 65-120t123-47q71 2 125 53t59 117q5 66-15 82z',
  'M405 293q-6 77-79 109t-151 9Q97 388 76 314T96 168q51-72 140-86t140 57q51 71 35 154z',
  'M440 270q-14 70-81 110t-140 30Q146 400 92 340T60 205q22-75 92-110t145-16q75 19 116 83t27 108z'
];
const blob = (i, cls) => `<svg class="blob ${cls}" viewBox="0 0 500 500" aria-hidden="true" focusable="false"><path d="${BLOB[i]}"/></svg>`;

const SPACE_ICON = { school: 'school', medical: 'medical', office: 'office', other: 'store' };
const SERVICE_ICON = { cleaning: 'sparkle', washing: 'droplet', recurring: 'calendar' };
const FREQ_ICON = { daily: 'sun', weekly: 'calendar', biweekly: 'repeat', discuss: 'chat' };
const SPACE_PHRASE = { school: 'a school', medical: 'a medical facility', office: 'an office building', other: 'a commercial space' };
const FREQ_PHRASE = { daily: 'daily', weekly: 'weekly', biweekly: 'bi-weekly' };
const svc = id => B.services.find(s => s.id === id);
const fac = id => B.facilities.find(f => f.id === id);
const freq = id => B.frequencies.find(f => f.id === id);
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const linkTarget = embedded ? ' target="_blank" rel="noopener noreferrer"' : '';

const quoteAttrs = (o = {}) => ['data-quote', o.service && `data-service="${esc(o.service)}"`, o.space && `data-space="${esc(o.space)}"`, o.frequency && `data-frequency="${esc(o.frequency)}"`, o.notes && `data-notes="${esc(o.notes)}"`].filter(Boolean).join(' ');

/* ---------- Markup ---------- */
const header = () => `
<a class="skip" href="#main">Skip to content</a>
<header class="site-header" id="top">
  <div class="wrap header-inner">
    <a class="brand" href="#top" aria-label="Sanders Signature Clean, back to top">${MARK}<span class="brand-text"><strong>Sanders</strong><small>Signature Clean</small></span></a>
    <nav class="main-nav" aria-label="Main">
      <a href="#services">Services</a><a href="#spaces">Spaces</a><a href="#how">How it works</a><a href="#washing">Pressure washing</a><a href="#faq">FAQ</a>
    </nav>
    <div class="header-actions">
      <a class="header-phone" href="${B.tel}">${icon('phone')}<span>${B.phone}</span></a>
      <button class="btn btn-coral btn-sm header-cta" type="button" ${quoteAttrs()}>Free quote</button>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">${icon('menu')}</button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <nav class="wrap" aria-label="Mobile">
      <a href="#services">${icon('sparkle')}Services</a><a href="#spaces">${icon('office')}Spaces</a><a href="#how">${icon('repeat')}How it works</a><a href="#washing">${icon('droplet')}Pressure washing</a><a href="#faq">${icon('chat')}FAQ</a>
      <div class="mm-actions"><a class="btn btn-white" href="${B.tel}">${icon('phone')}Call ${B.phone}</a><button class="btn btn-coral" type="button" ${quoteAttrs()}>Get a free quote ${icon('arrow')}</button></div>
    </nav>
  </div>
</header>`;

const hero = () => `
<section class="hero" aria-labelledby="hero-title">
  ${blob(0, 'b-hero-1')}${blob(2, 'b-hero-2')}
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="sticker sticker-white hero-kicker" data-reveal>${icon('pin')}Commercial cleaning &amp; pressure washing · Huntsville, AL</p>
      <h1 id="hero-title" data-reveal>A fresh space.<span>A clear head.</span></h1>
      <p class="hero-lead" data-reveal>Sanders Signature Clean looks after schools, medical facilities, office buildings and other commercial spaces, on a daily, weekly or bi-weekly rhythm built around you. Asking for a quote is free and refreshingly easy.</p>
      <div class="hero-ctas" data-reveal>
        <button class="btn btn-coral btn-lg" type="button" ${quoteAttrs()}>Get my free quote ${icon('arrow')}</button>
        <a class="btn btn-ghost btn-lg" href="${B.tel}">${icon('phone')}${B.phone}</a>
      </div>
      <ul class="hero-creds" data-reveal>
        <li>${icon('check')}Licensed &amp; insured</li><li>${icon('check')}Free quotes</li><li>${icon('check')}Contracts welcome</li>
      </ul>
    </div>
    <div class="collage" data-reveal>
      <figure class="ph ph-main"><img src="/images/gen/restroom.webp" alt="Illustrative photo of a spotless commercial restroom with stone counters" width="1672" height="941" fetchpriority="high"><figcaption class="photo-chip">Illustrative photo</figcaption></figure>
      <figure class="ph ph-glass"><img src="/images/gen/glass.webp" alt="Illustrative photo of a squeegee clearing a glass door" width="1672" height="941"></figure>
      <figure class="ph ph-cart"><img src="/images/gen/cart.webp" alt="Illustrative photo of an organized janitorial cart" width="1672" height="941"></figure>
      <span class="sticker sticker-coral st-1">${icon('chat')}Free quotes</span>
      <span class="sticker sticker-butter st-2">${icon('shield')}Licensed &amp; insured</span>
      <span class="sticker sticker-mint st-3">${icon('calendar')}Daily · Weekly · Bi-weekly</span>
      <svg class="squiggle" viewBox="0 0 120 40" aria-hidden="true"><path d="M4 30c14-22 26-22 36 0s24 22 36 0 24-22 40 0"/></svg>
      <span class="dots-deco" aria-hidden="true"></span>
    </div>
  </div>
</section>`;

const finder = () => `
<section class="finder-wrap" aria-labelledby="finder-title">
  <div class="wrap">
    <div class="finder" data-reveal>
      <div class="finder-main">
        <div class="finder-head">
          <span class="finder-badge">${icon('smile')}</span>
          <div><h2 id="finder-title">Let's find your clean</h2><p>Three quick taps and we'll sketch a starting point. Change anything, anytime.</p></div>
        </div>
        <ol class="fsteps" aria-label="Finder steps">
          ${['Space', 'Rhythm', 'Service'].map((s, i) => `<li><button class="fstep" type="button" data-fstep="${i}"${i === 0 ? ' aria-current="step"' : ''}><span class="fstep-num"><b>${i + 1}</b>${icon('check')}</span><span class="fstep-text"><b>${s}</b><small data-fval="${i}">Pick one</small></span></button></li>`).join('<li class="fstep-arrow" aria-hidden="true">' + icon('arrow') + '</li>')}
        </ol>
        <div class="fopts" role="group" aria-labelledby="fopts-q">
          <p class="fopts-q" id="fopts-q"></p>
          <div class="fchips" data-fchips></div>
        </div>
      </div>
      <div class="finder-result">
        <p class="fr-kicker">${icon('sparkle')}Your starting point</p>
        <p class="fr-sentence" data-fsentence aria-live="polite"></p>
        <p class="fr-note" data-fnote></p>
        <button class="btn btn-coral btn-lg full" type="button" data-finder-cta>Get this as a free quote ${icon('arrow')}</button>
        <button class="text-btn" type="button" data-finder-reset>${icon('refresh')}Start over</button>
      </div>
    </div>
  </div>
</section>`;

const CRED_COPY = [
  { icon: 'shield', title: 'Licensed & insured', body: 'Peace of mind is part of the plan from the very first visit.', tone: 'mint' },
  { icon: 'chat', title: 'Free quotes', body: 'Ask as many questions as you like. Finding out costs nothing.', tone: 'butter' },
  { icon: 'sliders', title: 'Customized plans', body: 'The scope is shaped around your space, not a fixed checklist.', tone: 'coral' },
  { icon: 'doc', title: 'Contracts welcome', body: 'Settle into a steady routine with a service contract.', tone: 'leaf' }
];
const creds = () => `
<section class="creds" aria-label="Why it's easy">
  <ul class="wrap cred-grid">
    ${CRED_COPY.map((c, i) => `<li class="cred" data-reveal style="--reveal-delay:${i * 0.06}s"><span class="tile tile-${c.tone}">${icon(c.icon)}</span><div><h3>${c.title}</h3><p>${c.body}</p></div></li>`).join('')}
  </ul>
</section>`;

const serviceCard = (s, variant) => `
<article class="svc svc-${variant}" data-reveal>
  <figure class="svc-photo"><img src="${s.image}" alt="${esc(s.alt)}" loading="lazy" width="1672" height="941"><span class="svc-icon">${icon(SERVICE_ICON[s.id])}</span></figure>
  <div class="svc-body">
    <h3>${esc(s.name)}</h3>
    <p class="svc-short">${esc(s.short)}</p>
    <p class="svc-text">${esc(s.body)}</p>
    <p class="talk-label">Talk to us about</p>
    <ul class="prompts">${s.prompts.map(p => `<li><button type="button" class="prompt" ${quoteAttrs({ service: s.id, notes: `Interested in: ${p}` })}>${icon('plus')}${esc(p)}</button></li>`).join('')}</ul>
    <button class="btn btn-ink" type="button" ${quoteAttrs({ service: s.id })}>Quote ${esc(s.name.toLowerCase())} ${icon('arrow')}</button>
  </div>
</article>`;

const services = () => `
<section class="section services" id="services" aria-labelledby="services-title">
  <div class="wrap">
    <div class="sec-head split">
      <div><p class="eyebrow">${icon('sparkle')}Services</p><h2 id="services-title" data-reveal>Three easy ways to a fresher building.</h2></div>
      <div><p class="lead" data-reveal>Inside, outside or on a schedule. Pick the help you need, tap a topic you want to talk through, and the quote form fills itself in.</p></div>
    </div>
    <div class="svc-grid">
      ${serviceCard(svc('cleaning'), 'feature')}
      ${serviceCard(svc('washing'), 'tall')}
      ${serviceCard({ ...svc('recurring'), image: '/images/gen/floor-scrub.webp', alt: 'Illustrative photo of a floor scrubber in a bright school hallway' }, 'wide')}
    </div>
  </div>
</section>`;

const spaces = () => `
<section class="section spaces" id="spaces" aria-labelledby="spaces-title">
  ${blob(1, 'b-spaces')}
  <div class="wrap">
    <div class="sec-head center">
      <p class="eyebrow">${icon('office')}Spaces we serve</p>
      <h2 id="spaces-title" data-reveal>Whatever your building, we'll make it feel easy.</h2>
      <p class="lead" data-reveal>Tap a space to open it up. Every plan starts with a conversation about how your building is actually used.</p>
    </div>
    <div class="space-row" data-reveal>
      ${B.facilities.map((f, i) => `
      <article class="space${i === 2 ? ' is-open' : ''}" data-space="${f.id}">
        <img class="space-img" src="${f.image}" alt="${esc(f.alt)}" loading="lazy" width="1536" height="1024">
        <button class="space-toggle" type="button" aria-expanded="${i === 2}" aria-controls="space-panel-${f.id}" id="space-btn-${f.id}">
          <span class="space-tile">${icon(SPACE_ICON[f.id])}</span>
          <span class="space-name">${esc(f.name)}</span>
          <span class="space-plus">${icon('plus')}</span>
        </button>
        <div class="space-panel" id="space-panel-${f.id}" role="region" aria-labelledby="space-btn-${f.id}"${i === 2 ? '' : ' hidden'}>
          <p class="space-blurb">${esc(f.blurb)}</p>
          <p class="talk-label">What we'll talk through</p>
          <ul class="talk-list">${f.talk.map(t => `<li>${icon('check')}${esc(t)}</li>`).join('')}</ul>
          <button class="btn btn-coral" type="button" ${quoteAttrs({ space: f.id })}>Quote for ${esc(f.single.toLowerCase())} ${icon('arrow')}</button>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>`;

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const schedule = () => `
<section class="section schedule" id="schedule" aria-labelledby="schedule-title">
  <div class="wrap sched-grid">
    <div class="sched-copy">
      <p class="eyebrow">${icon('calendar')}Scheduled service</p>
      <h2 id="schedule-title" data-reveal>Pick a rhythm that fits your week.</h2>
      <p class="lead" data-reveal>Daily, weekly or bi-weekly service is available, and service contracts are welcome. Not sure what you need? That's a perfectly good answer too.</p>
      <div class="toggle" role="radiogroup" aria-label="Service rhythm" data-reveal>
        <span class="toggle-thumb" aria-hidden="true"></span>
        ${B.frequencies.map((f, i) => `<button type="button" role="radio" class="toggle-opt" data-freq="${f.id}" aria-checked="${i === 1}" tabindex="${i === 1 ? 0 : -1}">${esc(f.id === 'discuss' ? 'Not sure' : f.name)}</button>`).join('')}
      </div>
    </div>
    <div class="sched-card" data-reveal>
      <div class="cal" aria-hidden="true">
        ${[1, 2].map(w => `<div class="cal-week"><span class="cal-label">Week ${w}</span><div class="cal-days">${DAYS.map((d, i) => `<span class="cal-day" data-w="${w}" data-d="${i}"><small>${d}</small><i></i></span>`).join('')}</div></div>`).join('')}
        <p class="cal-caption">Illustrative rhythm. Your actual days are set together.</p>
      </div>
      <div class="sched-info">
        <span class="tile tile-butter sched-icon" data-sched-icon>${icon('calendar')}</span>
        <div>
          <h3 data-sched-name>Weekly</h3>
          <p data-sched-note aria-live="polite">${esc(freq('weekly').note)}</p>
        </div>
      </div>
      <div class="sched-foot">
        <span class="sticker sticker-butter">${icon('doc')}Contracts welcome</span>
        <button class="btn btn-coral" type="button" data-sched-cta ${quoteAttrs({ service: 'recurring', frequency: 'weekly' })}>Quote a weekly plan ${icon('arrow')}</button>
      </div>
    </div>
  </div>
</section>`;

const how = () => `
<section class="section how" id="how" aria-labelledby="how-title">
  <div class="wrap">
    <div class="sec-head center">
      <p class="eyebrow">${icon('repeat')}How it works</p>
      <h2 id="how-title" data-reveal>Getting started is four friendly steps.</h2>
      <p class="lead" data-reveal>No pressure, no jargon. Just a conversation about your space and a plan that fits it.</p>
    </div>
    <div class="path">
      <svg class="path-line" viewBox="0 0 1000 200" preserveAspectRatio="none" aria-hidden="true"><path d="M60 60 C 200 60, 220 150, 375 150 S 560 50, 625 50 S 800 150, 940 140"/></svg>
      <ol class="steps">
        ${B.steps.map((s, i) => `<li class="step step-${i + 1}" data-reveal style="--reveal-delay:${i * 0.08}s"><span class="step-num">${i + 1}</span><div class="step-card"><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p>${i === 0 ? `<div class="step-actions"><a class="mini-link" href="${B.tel}">${icon('phone')}Call</a><button class="mini-link" type="button" ${quoteAttrs()}>${icon('chat')}Request online</button></div>` : ''}</div></li>`).join('')}
      </ol>
    </div>
  </div>
</section>`;

const SURFACES = svc('washing').prompts;
const washing = () => `
<section class="section washing" id="washing" aria-labelledby="washing-title">
  <div class="washing-panel">
    ${blob(1, 'b-wash-1')}${blob(0, 'b-wash-2')}
    <div class="wrap wash-grid">
      <div class="ba" data-ba style="--pos:50%" data-reveal>
        <img class="ba-img" src="/images/exterior.webp" alt="Illustrative photo of a concrete walkway being pressure washed" loading="lazy" width="1536" height="1024">
        <div class="ba-before" aria-hidden="true"><img class="ba-img" src="/images/exterior.webp" alt="" loading="lazy" width="1536" height="1024"><span class="grime"></span></div>
        <span class="ba-tag ba-tag-before">Before · illustrative</span>
        <span class="ba-tag ba-tag-after">After</span>
        <span class="ba-line" aria-hidden="true"></span>
        <div class="ba-handle" role="slider" tabindex="0" aria-label="Before and after comparison, drag or use arrow keys" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="50 percent before">${icon('grip')}</div>
      </div>
      <div class="wash-copy">
        <p class="eyebrow on-dark">${icon('droplet')}Pressure washing</p>
        <h2 id="washing-title" data-reveal>First impressions, freshly rinsed.</h2>
        <p class="lead" data-reveal>${esc(svc('washing').body)} Drag the circle to compare, then tap the surfaces on your list.</p>
        <p class="surf-label" id="surf-label">Which surfaces are on your list?</p>
        <ul class="surfaces" aria-labelledby="surf-label">
          ${SURFACES.map(s => `<li><button type="button" class="surface" aria-pressed="false" data-surface="${esc(s)}"><span class="surf-box">${icon('check')}</span>${esc(s)}</button></li>`).join('')}
        </ul>
        <div class="wash-actions">
          <button class="btn btn-coral btn-lg" type="button" data-wash-cta>Quote pressure washing ${icon('arrow')}</button>
          <span class="wash-count" data-wash-count aria-live="polite">No surfaces picked yet</span>
        </div>
      </div>
    </div>
  </div>
</section>`;

const WHY = [
  { icon: 'pin', title: 'Huntsville-based', body: `Right here at ${B.street}, ${B.locality}.` },
  { icon: 'shield', title: 'Licensed & insured', body: 'The basics you should expect, handled properly.' },
  { icon: 'wallet', title: 'Affordable', body: 'A scope that fits your budget, with a free quote to start.' },
  { icon: 'sliders', title: 'Customized to you', body: 'Your space, your priorities, your rhythm.' },
  { icon: 'people', title: 'Chamber member', body: 'Listed with the Huntsville/Madison County Chamber.', link: true }
];
const FACTS = [
  { big: '3', small: 'schedules', sub: 'Daily · Weekly · Bi-weekly', tone: 'mint' },
  { big: '4', small: 'kinds of spaces', sub: 'Schools · Medical · Offices · More', tone: 'butter' },
  { big: '1', small: 'call to start', sub: B.phone, tone: 'coral', tel: true },
  { big: '$0', small: 'for a quote', sub: 'Free quotes, always welcome', tone: 'leaf' }
];
const why = () => `
<section class="section why" id="why" aria-labelledby="why-title">
  <div class="wrap why-grid">
    <div class="mosaic" data-reveal>
      <figure class="mo mo-a"><img src="/images/gen/conference.webp" alt="Illustrative photo of a tidy conference room" loading="lazy" width="1672" height="941"></figure>
      <figure class="mo mo-b"><img src="/images/detail.webp" alt="Illustrative photo of a gloved hand wiping a counter with a microfiber cloth" loading="lazy" width="1536" height="1024"></figure>
      <div class="mo mo-c"><span class="tile tile-white">${icon('pin')}</span><p><b>${B.street}</b>${B.locality}</p></div>
      <div class="badge-round" aria-hidden="true">
        <svg viewBox="0 0 120 120"><defs><path id="ee-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0"/></defs><text><textPath href="#ee-circle">LOCAL · HUNTSVILLE · LOCAL · HUNTSVILLE ·</textPath></text></svg>
        <span>${icon('heart')}</span>
      </div>
    </div>
    <div class="why-copy">
      <p class="eyebrow">${icon('heart')}Why Sanders</p>
      <h2 id="why-title" data-reveal>Local, licensed and genuinely easy to work with.</h2>
      <ul class="why-list">
        ${WHY.map((w, i) => `<li data-reveal style="--reveal-delay:${i * 0.05}s"><span class="tile tile-mint tile-sm">${icon(w.icon)}</span><div><h3>${w.title}</h3><p>${esc(w.body)}${w.link ? ` <a href="${B.source}" target="_blank" rel="noopener noreferrer">See the listing${icon('external', 'i i-xs')}</a>` : ''}</p></div></li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="wrap">
    <ul class="facts">
      ${FACTS.map((f, i) => `<li class="fact fact-${f.tone}" data-reveal style="--reveal-delay:${i * 0.06}s"><p class="fact-big">${f.big}<small>${f.small}</small></p>${f.tel ? `<a href="${B.tel}">${f.sub}</a>` : `<p>${f.sub}</p>`}</li>`).join('')}
    </ul>
  </div>
</section>`;

const faq = () => `
<section class="section faq" id="faq" aria-labelledby="faq-title">
  <div class="wrap faq-grid">
    <div class="faq-side">
      <p class="eyebrow">${icon('chat')}FAQ</p>
      <h2 id="faq-title" data-reveal>Good questions, quick answers.</h2>
      <p class="lead" data-reveal>Here's what people usually ask first. Anything else, just call. It's the easiest part.</p>
      <div class="ask-card" data-reveal>
        ${blob(2, 'b-ask')}
        <p class="ask-title">Still wondering about something?</p>
        <a class="btn btn-white" href="${B.tel}">${icon('phone')}${B.phone}</a>
        <button class="text-btn on-dark" type="button" ${quoteAttrs()}>or start a free quote ${icon('arrow')}</button>
      </div>
    </div>
    <div class="faq-list">
      ${B.faqs.map((f, i) => `
      <div class="qa${i === 0 ? ' is-open' : ''}" data-reveal>
        <h3><button type="button" class="qa-btn" aria-expanded="${i === 0}" aria-controls="qa-${i}" id="qa-btn-${i}"><span class="qa-num">${String(i + 1).padStart(2, '0')}</span><span class="qa-q">${esc(f.q)}</span><span class="qa-ico">${icon('plus')}</span></button></h3>
        <div class="qa-a" id="qa-${i}" role="region" aria-labelledby="qa-btn-${i}"><div><p>${esc(f.a)}</p></div></div>
      </div>`).join('')}
    </div>
  </div>
</section>`;

const cta = () => `
<section class="section cta" aria-labelledby="cta-title">
  <div class="wrap">
    <div class="cta-card" data-reveal>
      ${blob(0, 'b-cta-1')}${blob(1, 'b-cta-2')}
      <div class="cta-copy">
        <span class="sticker sticker-butter">${icon('sparkle')}Free quotes · Contracts welcome</span>
        <h2 id="cta-title">Let's make clean the easy part of your week.</h2>
        <p>Tell us about your space in a couple of minutes, or give us a call. Either way, the quote is free.</p>
        <div class="cta-actions">
          <button class="btn btn-coral btn-lg" type="button" ${quoteAttrs()}>Get my free quote ${icon('arrow')}</button>
          <a class="btn btn-white btn-lg" href="${B.tel}">${icon('phone')}Call ${B.phone}</a>
        </div>
      </div>
      <div class="cta-photos" aria-hidden="true">
        <img src="/images/gen/exam-room.webp" alt="" loading="lazy" width="1672" height="941">
        <img src="/images/gen/storefront-wash.webp" alt="" loading="lazy" width="1672" height="941">
      </div>
    </div>
  </div>
</section>`;

const footer = () => `
<footer class="site-footer">
  <div class="wrap foot-grid">
    <div class="foot-brand">
      <a class="brand" href="#top" aria-label="Sanders Signature Clean, back to top">${MARK}<span class="brand-text"><strong>Sanders</strong><small>Signature Clean</small></span></a>
      <p>Commercial cleaning and pressure washing for Huntsville schools, medical facilities, offices and other commercial spaces.</p>
      <p class="foot-addr">${icon('pin')}<span>${B.street}<br>${B.locality}</span></p>
      <a class="foot-phone" href="${B.tel}">${icon('phone')}${B.phone}</a>
    </div>
    <div><h3>Services</h3><ul>${B.services.map(s => `<li><button type="button" class="foot-link" ${quoteAttrs({ service: s.id })}>${esc(s.name)}</button></li>`).join('')}</ul></div>
    <div><h3>Spaces</h3><ul>${B.facilities.map(f => `<li><a class="foot-link" href="#spaces" data-open-space="${f.id}">${esc(f.name)}</a></li>`).join('')}</ul></div>
    <div><h3>Good to know</h3><ul><li><a class="foot-link" href="#how">How it works</a></li><li><a class="foot-link" href="#schedule">Schedules</a></li><li><a class="foot-link" href="#faq">FAQ</a></li><li><a class="foot-link" href="${B.source}" target="_blank" rel="noopener noreferrer">Chamber listing</a></li></ul></div>
  </div>
  <div class="wrap foot-bottom">
    <p>© ${B.name}. Licensed &amp; insured. Photos are illustrative.</p>
    <p>Proposed design by <a href="https://bluelotuscoding.com" target="_blank" rel="noopener noreferrer">Blue Lotus Coding</a> · <a href="/"${linkTarget}>← All designs</a></p>
  </div>
</footer>
<div class="mbar" aria-label="Quick actions">
  <a class="btn btn-white" href="${B.tel}">${icon('phone')}Call</a>
  <button class="btn btn-coral" type="button" ${quoteAttrs()}>Free quote ${icon('arrow')}</button>
</div>`;

const QSTEPS = ['Service', 'Space', 'Rhythm', 'Details', 'Review'];
const dialog = () => `
<div class="qd" id="quote" hidden>
  <div class="qd-backdrop" data-qclose></div>
  <div class="qd-panel" role="dialog" aria-modal="true" aria-labelledby="qd-title">
    <div class="qd-top">
      <p class="qd-title" id="qd-title">${MARK}<span>Your free quote</span></p>
      <button class="qd-x" type="button" data-qclose aria-label="Close quote">${icon('x')}</button>
    </div>
    <ol class="qd-progress" aria-label="Quote progress">
      ${QSTEPS.map((s, i) => `<li data-qprog="${i}"><span class="qp-dot"><b>${i + 1}</b>${icon('check')}</span><span class="qp-label">${s}</span></li>`).join('')}
    </ol>
    <div class="qd-bar" aria-hidden="true"><span></span></div>
    <div class="qd-body" data-qbody></div>
    <div class="qd-foot" data-qfoot>
      <button class="btn btn-ghost" type="button" data-qback>${icon('arrowLeft')}Back</button>
      <p class="qd-count" data-qcount></p>
      <button class="btn btn-coral" type="button" data-qnext>Next ${icon('arrow')}</button>
    </div>
  </div>
</div>`;

/* ---------- Mount ---------- */
demoBar('Everyday Ease');
const app = document.getElementById('app');
app.innerHTML = `${header()}<main id="main" tabindex="-1">${hero()}${finder()}${creds()}${services()}${spaces()}${schedule()}${how()}${washing()}${why()}${faq()}${cta()}</main>${footer()}${dialog()}`;

/* ---------- Header: scroll state, active nav, mobile menu ---------- */
const siteHeader = document.querySelector('.site-header');
const mbar = document.querySelector('.mbar');
const heroEl = document.querySelector('.hero');
const onScroll = () => {
  siteHeader.classList.toggle('is-scrolled', scrollY > 8);
  mbar.classList.toggle('is-visible', scrollY > heroEl.offsetHeight * 0.6);
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

const navLinks = [...document.querySelectorAll('.main-nav a')];
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  ['services', 'spaces', 'how', 'washing', 'faq'].forEach(id => io.observe(document.getElementById(id)));
}

const menuBtn = document.querySelector('.menu-toggle');
const menu = document.getElementById('mobile-menu');
function setMenu(open, { focusToggle = false } = {}) {
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menuBtn.innerHTML = icon(open ? 'x' : 'menu');
  menu.hidden = !open;
  siteHeader.classList.toggle('menu-open', open);
  if (open) menu.querySelector('a').focus();
  else if (focusToggle) menuBtn.focus();
}
menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) setMenu(false, { focusToggle: true }); });
menu.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const items = [...menu.querySelectorAll('a, button')];
  if (e.shiftKey && document.activeElement === items[0]) { e.preventDefault(); menuBtn.focus(); }
});
matchMedia('(min-width: 1081px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

/* In-page anchors: scrollIntoView so they also work inside the sandboxed gallery iframe. */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  const target = id ? document.getElementById(id) : null;
  if (!target) return;
  e.preventDefault();
  if (!menu.hidden) setMenu(false);
  if (a.dataset.openSpace) openSpace(a.dataset.openSpace);
  if (id === 'top') { scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' }); return; }
  target.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
  if (id === 'main') target.focus({ preventScroll: true });
});

/* ---------- Hero finder ---------- */
const F = { step: 0, space: '', rhythm: '', service: '' };
const FINDER_STEPS = [
  { key: 'space', q: 'What kind of space is it?', options: B.facilities.map(f => ({ id: f.id, label: f.single === 'Other commercial space' ? 'Other commercial' : f.single, icon: SPACE_ICON[f.id] })) },
  { key: 'rhythm', q: 'How often would help most?', options: B.frequencies.map(f => ({ id: f.id, label: f.name, icon: FREQ_ICON[f.id] })) },
  { key: 'service', q: 'What should we take care of?', options: [{ id: 'cleaning', label: 'Commercial cleaning', icon: 'sparkle' }, { id: 'washing', label: 'Pressure washing', icon: 'droplet' }, { id: 'both', label: 'A bit of both', icon: 'plus' }] }
];
const fChips = document.querySelector('[data-fchips]');
const fQ = document.getElementById('fopts-q');
const fSentence = document.querySelector('[data-fsentence]');
const fNote = document.querySelector('[data-fnote]');
const slot = (val, placeholder) => val ? `<mark>${esc(val)}</mark>` : `<span class="slot">${placeholder}</span>`;
function renderFinder(focusChip = false) {
  const st = FINDER_STEPS[F.step];
  fQ.textContent = st.q;
  fChips.innerHTML = st.options.map(o => `<button type="button" class="fchip" data-fopt="${o.id}" aria-pressed="${F[st.key] === o.id}">${icon(o.icon)}<span>${esc(o.label)}</span></button>`).join('');
  document.querySelectorAll('.fstep').forEach((b, i) => {
    const key = FINDER_STEPS[i].key;
    if (i === F.step) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
    b.classList.toggle('is-done', Boolean(F[key]));
    const opt = FINDER_STEPS[i].options.find(o => o.id === F[key]);
    b.querySelector('[data-fval]').textContent = opt ? opt.label : 'Pick one';
  });
  const space = F.space ? SPACE_PHRASE[F.space] : '';
  const serviceText = { cleaning: 'commercial cleaning', washing: 'pressure washing', both: 'cleaning plus pressure washing' }[F.service] || '';
  let sentence;
  if (F.rhythm === 'discuss') sentence = `For ${slot(space, 'your space')}, let's start with ${slot(serviceText, 'the right service')} and talk through the rhythm together.`;
  else sentence = `For ${slot(space, 'your space')}, we'd suggest ${slot(FREQ_PHRASE[F.rhythm], 'a rhythm')} ${slot(serviceText, 'service')}.`;
  const done = F.space && F.rhythm && F.service;
  fSentence.innerHTML = sentence + (done ? ' <span class="fr-yay">Easy.</span>' : '');
  fNote.textContent = F.rhythm ? freq(F.rhythm).note : F.space ? fac(F.space).blurb : 'Pick a space to begin. The sentence updates as you go.';
  fSentence.closest('.finder-result').classList.toggle('is-ready', Boolean(done));
  if (focusChip) fChips.querySelector('.fchip')?.focus();
}
fChips.addEventListener('click', e => {
  const b = e.target.closest('.fchip');
  if (!b) return;
  const key = FINDER_STEPS[F.step].key;
  F[key] = b.dataset.fopt;
  const wasStep = F.step;
  renderFinder();
  if (wasStep < 2) setTimeout(() => { F.step = wasStep + 1; renderFinder(true); }, reduced() ? 0 : 260);
  else fChips.querySelector(`[data-fopt="${F[key]}"]`)?.focus();
});
document.querySelectorAll('.fstep').forEach(b => b.addEventListener('click', () => { F.step = Number(b.dataset.fstep); renderFinder(true); }));
document.querySelector('[data-finder-reset]').addEventListener('click', () => { Object.assign(F, { step: 0, space: '', rhythm: '', service: '' }); renderFinder(true); });
document.querySelector('[data-finder-cta]').addEventListener('click', e => {
  const services = F.service === 'both' ? ['cleaning', 'washing'] : F.service ? [F.service] : [];
  if (services.length && FREQ_PHRASE[F.rhythm]) services.push('recurring');
  openQuote({ services, space: F.space, frequency: F.rhythm }, e.currentTarget);
});
renderFinder();

/* ---------- Spaces explorer ---------- */
const spaceCards = [...document.querySelectorAll('.space')];
function openSpace(id, focus = false) {
  spaceCards.forEach(card => {
    const open = card.dataset.space === id;
    card.classList.toggle('is-open', open);
    card.querySelector('.space-toggle').setAttribute('aria-expanded', String(open));
    card.querySelector('.space-panel').hidden = !open;
  });
  if (focus) document.getElementById('space-btn-' + id).focus();
}
spaceCards.forEach((card, i) => {
  const btn = card.querySelector('.space-toggle');
  btn.addEventListener('click', () => openSpace(card.dataset.space));
  btn.addEventListener('keydown', e => {
    const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!d) return;
    e.preventDefault();
    spaceCards[(i + d + spaceCards.length) % spaceCards.length].querySelector('.space-toggle').focus();
  });
});

/* ---------- Schedule chooser ---------- */
const PATTERN = {
  daily: (w, d) => d < 5,
  weekly: (w, d) => d === 2,
  biweekly: (w, d) => w === 1 && d === 2,
  discuss: () => false
};
const toggleEl = document.querySelector('.toggle');
const toggleOpts = [...toggleEl.querySelectorAll('.toggle-opt')];
const schedCta = document.querySelector('[data-sched-cta]');
function setFreq(id, focus = false) {
  toggleOpts.forEach((b, i) => {
    const on = b.dataset.freq === id;
    b.setAttribute('aria-checked', String(on));
    b.tabIndex = on ? 0 : -1;
    if (on) { toggleEl.style.setProperty('--i', i); if (focus) b.focus(); }
  });
  const f = freq(id);
  document.querySelectorAll('.cal-day').forEach(c => {
    const on = PATTERN[id](Number(c.dataset.w), Number(c.dataset.d));
    c.classList.toggle('is-on', on);
    c.classList.toggle('is-maybe', id === 'discuss' && Number(c.dataset.d) < 5);
  });
  document.querySelector('[data-sched-name]').textContent = f.name;
  document.querySelector('[data-sched-note]').textContent = f.note;
  document.querySelector('[data-sched-icon]').innerHTML = icon(FREQ_ICON[id]);
  schedCta.dataset.frequency = id;
  schedCta.innerHTML = (id === 'discuss' ? 'Talk it through with us ' : `Quote a ${f.name.toLowerCase()} plan `) + icon('arrow');
}
toggleOpts.forEach((b, i) => {
  b.addEventListener('click', () => setFreq(b.dataset.freq));
  b.addEventListener('keydown', e => {
    const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!d) return;
    e.preventDefault();
    setFreq(toggleOpts[(i + d + toggleOpts.length) % toggleOpts.length].dataset.freq, true);
  });
});
setFreq('weekly');

/* ---------- Before / after slider ---------- */
const ba = document.querySelector('[data-ba]');
const handle = ba.querySelector('.ba-handle');
function setPos(p) {
  p = Math.max(0, Math.min(100, Math.round(p)));
  ba.style.setProperty('--pos', p + '%');
  handle.setAttribute('aria-valuenow', p);
  handle.setAttribute('aria-valuetext', `${p} percent before`);
}
const posFromEvent = e => { const r = ba.getBoundingClientRect(); return ((e.clientX - r.left) / r.width) * 100; };
ba.addEventListener('pointerdown', e => {
  if (e.button !== 0) return;
  ba.setPointerCapture(e.pointerId);
  ba.classList.add('is-dragging');
  setPos(posFromEvent(e));
  handle.focus({ preventScroll: true });
});
ba.addEventListener('pointermove', e => { if (ba.hasPointerCapture(e.pointerId)) setPos(posFromEvent(e)); });
const endDrag = e => { if (ba.hasPointerCapture?.(e.pointerId)) ba.releasePointerCapture(e.pointerId); ba.classList.remove('is-dragging'); };
ba.addEventListener('pointerup', endDrag);
ba.addEventListener('pointercancel', endDrag);
handle.addEventListener('keydown', e => {
  const now = Number(handle.getAttribute('aria-valuenow'));
  const map = { ArrowLeft: now - 5, ArrowDown: now - 5, ArrowRight: now + 5, ArrowUp: now + 5, PageDown: now - 20, PageUp: now + 20, Home: 0, End: 100 };
  if (!(e.key in map)) return;
  e.preventDefault();
  setPos(map[e.key]);
});

/* Surface chips feed the pressure washing quote. */
const picked = new Set();
const washCount = document.querySelector('[data-wash-count]');
document.querySelectorAll('.surface').forEach(b => b.addEventListener('click', () => {
  const s = b.dataset.surface;
  picked.has(s) ? picked.delete(s) : picked.add(s);
  b.setAttribute('aria-pressed', String(picked.has(s)));
  washCount.textContent = picked.size ? `${picked.size} surface${picked.size > 1 ? 's' : ''} on your list` : 'No surfaces picked yet';
}));
document.querySelector('[data-wash-cta]').addEventListener('click', e => openQuote({ services: ['washing'], notes: picked.size ? `Surfaces: ${[...picked].join(', ')}` : '' }, e.currentTarget));

/* ---------- FAQ ---------- */
document.querySelectorAll('.qa-btn').forEach(btn => btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  btn.closest('.qa').classList.toggle('is-open', open);
}));

/* ---------- Quote flow ---------- */
const Q = { services: new Set(), space: '', frequency: '', name: '', company: '', email: '', phone: '', notes: '' };
let qStep = 0, qReturn = false, qOpener = null, qShowErrors = false;
const qd = document.getElementById('quote');
const qPanel = qd.querySelector('.qd-panel');
const qBody = qd.querySelector('[data-qbody]');
const qFoot = qd.querySelector('[data-qfoot]');
const qBack = qd.querySelector('[data-qback]');
const qNext = qd.querySelector('[data-qnext]');
const qCount = qd.querySelector('[data-qcount]');

let quoteBackground = [];
function setQuoteBackgroundInert(active) {
  if (!active) {
    quoteBackground.forEach(({ element, inert }) => { element.inert = inert; });
    quoteBackground = [];
    return;
  }
  let foreground = qd;
  while (foreground !== document.body && foreground.parentElement) {
    [...foreground.parentElement.children].forEach(element => {
      if (element !== foreground && !element.classList.contains('bl-toast')) {
        quoteBackground.push({ element, inert: element.inert });
        element.inert = true;
      }
    });
    foreground = foreground.parentElement;
  }
}
function openQuote(pre = {}, opener = document.activeElement) {
  if (pre.services && pre.services.length) Q.services = new Set(pre.services);
  if (pre.space) Q.space = pre.space;
  if (pre.frequency) Q.frequency = pre.frequency;
  if (pre.notes && !Q.notes.includes(pre.notes)) Q.notes = Q.notes ? `${Q.notes}\n${pre.notes}` : pre.notes;
  qOpener = opener;
  qReturn = false;
  qShowErrors = false;
  qStep = !Q.services.size ? 0 : !Q.space ? 1 : !Q.frequency ? 2 : 3;
  if (!menu.hidden) setMenu(false);
  setQuoteBackgroundInert(true);
  qd.hidden = false;
  document.documentElement.classList.add('qd-open');
  requestAnimationFrame(() => qd.classList.add('is-open'));
  renderQuote();
}
function closeQuote() {
  if (qd.hidden) return;
  qd.classList.remove('is-open');
  setQuoteBackgroundInert(false);
  document.documentElement.classList.remove('qd-open');
  const finish = () => { qd.hidden = true; };
  reduced() ? finish() : setTimeout(finish, 220);
  if (qStep === 5) resetQuote();
  if (qOpener && document.contains(qOpener)) qOpener.focus({ preventScroll: true });
}
function resetQuote() { Object.assign(Q, { services: new Set(), space: '', frequency: '', name: '', company: '', email: '', phone: '', notes: '' }); }

const optCard = (attr, id, title, sub, ic, on) => `<button type="button" class="qopt" ${attr}="${id}" aria-pressed="${on}"><span class="qopt-ico">${icon(ic)}</span><span class="qopt-text"><b>${esc(title)}</b>${sub ? `<small>${esc(sub)}</small>` : ''}</span><span class="qopt-check">${icon('check')}</span></button>`;
const fieldErr = (id, msg) => `<p class="qerr" id="err-${id}"${msg ? '' : ' hidden'}>${msg ? icon('x', 'i i-xs') + esc(msg) : ''}</p>`;
function fieldError(id) {
  const v = Q[id].trim();
  if (id === 'name') return v ? '' : 'Please add your name.';
  if (id === 'email') return !v ? 'Please add an email address.' : validEmail(v) ? '' : 'That email looks incomplete. Try name@company.com.';
  if (id === 'phone') return !v ? 'Please add a phone number.' : validPhone(v) ? '' : 'Please include a 10-digit phone number.';
  return '';
}
const field = (id, label, type, opts = {}) => {
  const err = qShowErrors ? fieldError(id) : '';
  const tag = type === 'textarea' ? `<textarea id="q-${id}" name="${id}" rows="3" placeholder="${opts.ph || ''}" aria-describedby="err-${id}">${esc(Q[id])}</textarea>`
    : `<input id="q-${id}" name="${id}" type="${type}" value="${esc(Q[id])}" autocomplete="${opts.ac || 'off'}" placeholder="${opts.ph || ''}"${opts.req ? ' aria-required="true"' : ''} aria-invalid="${Boolean(err)}" aria-describedby="err-${id}"${opts.im ? ` inputmode="${opts.im}"` : ''}>`;
  return `<div class="qfield${opts.full ? ' full' : ''}${err ? ' has-error' : ''}"><label for="q-${id}">${label}${opts.req ? ' <span class="req">*</span>' : ' <span class="opt">optional</span>'}</label>${tag}${fieldErr(id, err)}</div>`;
};
function stepError() {
  if (qStep === 0 && !Q.services.size) return 'Pick at least one service to keep going.';
  if (qStep === 1 && !Q.space) return 'Choose the kind of space so we know where to start.';
  if (qStep === 2 && !Q.frequency) return 'Choose a rhythm, or pick "Not sure yet".';
  return '';
}
function renderQuote(focusHeading = true) {
  const err = qShowErrors ? stepError() : '';
  let html = '';
  if (qStep === 0) {
    html = `<h2 class="qh" tabindex="-1">What can we help with?</h2><p class="qsub">Choose as many as you like.</p>
      <div class="qopts">${B.services.map(s => optCard('data-qsvc', s.id, s.name, s.short, SERVICE_ICON[s.id], Q.services.has(s.id))).join('')}</div>`;
  } else if (qStep === 1) {
    html = `<h2 class="qh" tabindex="-1">What kind of space is it?</h2><p class="qsub">Pick the closest fit. We'll talk through the details.</p>
      <div class="qopts two">${B.facilities.map(f => optCard('data-qspace', f.id, f.name, f.blurb, SPACE_ICON[f.id], Q.space === f.id)).join('')}</div>`;
  } else if (qStep === 2) {
    html = `<h2 class="qh" tabindex="-1">How often would you like service?</h2><p class="qsub">Contracts are welcome. "Not sure yet" is a great answer too.</p>
      <div class="qopts two">${B.frequencies.map(f => optCard('data-qfreq', f.id, f.name, f.note, FREQ_ICON[f.id], Q.frequency === f.id)).join('')}</div>`;
  } else if (qStep === 3) {
    html = `<h2 class="qh" tabindex="-1">Where can we reach you?</h2><p class="qsub">Fields marked <span class="req">*</span> are required.</p>
      <form class="qform" novalidate data-qform>
        ${field('name', 'Your name', 'text', { req: true, ac: 'name', ph: 'Jordan Smith' })}
        ${field('company', 'Company or building', 'text', { ac: 'organization', ph: 'Optional' })}
        ${field('email', 'Email', 'email', { req: true, ac: 'email', ph: 'you@company.com', im: 'email' })}
        ${field('phone', 'Phone', 'tel', { req: true, ac: 'tel', ph: '(256) 555-0100', im: 'tel' })}
        ${field('notes', 'Anything we should know?', 'textarea', { full: true, ph: 'Square footage, areas to include, best time to visit…' })}
        <button type="submit" hidden></button>
      </form>`;
  } else if (qStep === 4) {
    const row = (label, value, step) => `<div class="qrow"><dt>${label}</dt><dd>${value || '<span class="muted">Not provided</span>'}</dd><dd class="qrow-edit"><button type="button" class="edit-btn" data-qedit="${step}" aria-label="Edit ${label.toLowerCase()}">${icon('edit')}Edit</button></dd></div>`;
    html = `<h2 class="qh" tabindex="-1">Does this look right?</h2><p class="qsub">Edit anything before you send.</p>
      <dl class="qreview">
        ${row('Services', [...Q.services].map(id => esc(svc(id).name)).join(', '), 0)}
        ${row('Space', esc(fac(Q.space)?.name), 1)}
        ${row('Rhythm', esc(freq(Q.frequency)?.name), 2)}
        ${row('Contact', [esc(Q.name.trim()), esc(Q.company.trim()), esc(Q.email.trim()), esc(Q.phone.trim())].filter(Boolean).join('<br>'), 3)}
        ${row('Notes', esc(Q.notes.trim()).replace(/\n/g, '<br>'), 3)}
      </dl>`;
  } else {
    html = `<div class="qdone">
      <span class="qdone-ico">${icon('check')}</span>
      <h2 class="qh" tabindex="-1">Demo complete — nothing was sent.</h2>
      <p>Thanks${Q.name.trim() ? ', ' + esc(Q.name.trim().split(/\s+/)[0]) : ''}! This is a sample of how the quote request would work. To request a real quote, call <a href="${B.tel}">${B.phone}</a>.</p>
      <div class="qdone-actions"><a class="btn btn-coral btn-lg" href="${B.tel}">${icon('phone')}Call ${B.phone}</a><button class="btn btn-ghost btn-lg" type="button" data-qclose>Back to the site</button></div>
    </div>`;
  }
  if (err) html += `<p class="qerr qerr-step" role="alert">${icon('x', 'i i-xs')}${esc(err)}</p>`;
  qBody.innerHTML = html;
  qBody.scrollTop = 0;

  qd.querySelectorAll('[data-qprog]').forEach((li, i) => {
    li.classList.toggle('is-done', i < qStep);
    li.classList.toggle('is-current', i === qStep);
    if (i === qStep) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
  });
  qd.style.setProperty('--qprog', `${Math.min(qStep, 4) / 4 * 100}%`);
  qd.classList.toggle('is-done', qStep === 5);
  qFoot.hidden = qStep === 5;
  qBack.hidden = qStep === 0;
  qCount.textContent = qStep < 5 ? `Step ${qStep + 1} of 5` : '';
  qNext.innerHTML = qStep === 4 ? `Send request ${icon('arrow')}` : qReturn ? `Back to review ${icon('arrow')}` : `Next ${icon('arrow')}`;
  if (focusHeading) qBody.querySelector('.qh')?.focus({ preventScroll: true });
}
function quoteNext() {
  if (qStep <= 2) {
    if (stepError()) { qShowErrors = true; renderQuote(false); qBody.querySelector('.qerr-step')?.scrollIntoView({ block: 'nearest' }); return; }
  } else if (qStep === 3) {
    const bad = ['name', 'email', 'phone'].filter(id => fieldError(id));
    if (bad.length) {
      qShowErrors = true;
      renderQuote(false);
      document.getElementById('q-' + bad[0]).focus();
      toast('A couple of details need another look.');
      return;
    }
  }
  qShowErrors = false;
  if (qReturn && qStep < 4) { qReturn = false; qStep = 4; }
  else qStep += 1;
  renderQuote();
}
qNext.addEventListener('click', quoteNext);
qBack.addEventListener('click', () => { qShowErrors = false; qReturn = false; qStep = Math.max(0, qStep - 1); renderQuote(); });
qBody.addEventListener('click', e => {
  const t = e.target.closest('[data-qsvc], [data-qspace], [data-qfreq], [data-qedit]');
  if (!t) return;
  if (t.dataset.qsvc) { const id = t.dataset.qsvc; Q.services.has(id) ? Q.services.delete(id) : Q.services.add(id); t.setAttribute('aria-pressed', String(Q.services.has(id))); if (qShowErrors && Q.services.size) { qShowErrors = false; qBody.querySelector('.qerr-step')?.remove(); } return; }
  if (t.dataset.qspace) { Q.space = t.dataset.qspace; }
  if (t.dataset.qfreq) { Q.frequency = t.dataset.qfreq; }
  if (t.dataset.qspace || t.dataset.qfreq) {
    qBody.querySelectorAll(t.dataset.qspace ? '[data-qspace]' : '[data-qfreq]').forEach(b => b.setAttribute('aria-pressed', String(b === t)));
    if (qShowErrors) { qShowErrors = false; qBody.querySelector('.qerr-step')?.remove(); }
    return;
  }
  if (t.dataset.qedit) { qReturn = true; qShowErrors = false; qStep = Number(t.dataset.qedit); renderQuote(); }
});
qBody.addEventListener('input', e => {
  const el = e.target;
  if (!(el.name in Q) || el.name === 'services') return;
  Q[el.name] = el.value;
  if (qShowErrors && el.closest('.qfield.has-error') && !fieldError(el.name)) clearFieldError(el);
});
qBody.addEventListener('focusout', e => {
  const el = e.target;
  if (!['name', 'email', 'phone'].includes(el.name) || !el.value.trim()) return;
  const msg = fieldError(el.name);
  if (msg) showFieldError(el, msg); else clearFieldError(el);
});
qBody.addEventListener('submit', e => { e.preventDefault(); quoteNext(); });
function showFieldError(el, msg) {
  const p = document.getElementById('err-' + el.name);
  el.setAttribute('aria-invalid', 'true');
  el.closest('.qfield').classList.add('has-error');
  p.hidden = false;
  p.innerHTML = icon('x', 'i i-xs') + esc(msg);
}
function clearFieldError(el) {
  const p = document.getElementById('err-' + el.name);
  el.setAttribute('aria-invalid', 'false');
  el.closest('.qfield').classList.remove('has-error');
  p.hidden = true;
  p.textContent = '';
}
qd.addEventListener('click', e => { if (e.target.closest('[data-qclose]')) closeQuote(); });
qd.addEventListener('keydown', e => {
  if (e.key === 'Escape') { e.preventDefault(); closeQuote(); return; }
  if (e.key !== 'Tab') return;
  const items = [...qPanel.querySelectorAll('a[href], button:not([hidden]), input, textarea, [tabindex="0"]')].filter(el => !el.closest('[hidden]') && el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && (document.activeElement === first || !qPanel.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* Every [data-quote] control opens the flow, prefilled from its data attributes. */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-quote]');
  if (!t || qd.contains(t)) return;
  const d = t.dataset;
  openQuote({ services: d.service ? d.service.split(',') : [], space: d.space, frequency: d.frequency, notes: d.notes }, t);
});

reveal();
