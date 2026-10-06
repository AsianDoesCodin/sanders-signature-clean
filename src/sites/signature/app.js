// SIGNATURE: cinematic, editorial luxury. A five-star hotel brochure for a commercial cleaning company.
import { business as B, demoBar, reveal, esc, validEmail, validPhone, embedded } from '../../shared/kit.js';
import './styles.css';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];
const WORDS = ['One', 'Two', 'Three', 'Four'];

/* ---------- Icons: 24px line set ---------- */
const P = {
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  tag: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  contract: '<path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M14 3v6h6M8 17.5c1.5-2 2.5-2 3 0s1.5 1 2.5-.5M8 13h5"/>',
  phone: '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
  school: '<path d="M2 5.5C4.5 4 8 4 12 6c4-2 7.5-2 10-.5V19c-2.5-1.5-6-1.5-10 .5-4-2-7.5-2-10-.5z"/><path d="M12 6v13.5"/>',
  medical: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>',
  office: '<path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16M16 9h2a2 2 0 012 2v10M2 21h20M8 7h4M8 11h4M8 15h4"/>',
  store: '<path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3M9 20v-5h6v5"/>',
  droplet: '<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 002.5 2.5"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  repeat: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 01-3 3H3"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chevL: '<path d="M15 6l-6 6 6 6"/>',
  chevR: '<path d="M9 6l6 6-6 6"/>',
  chevD: '<path d="M6 9l6 6 6-6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 7M18 14.5a6.5 6.5 0 013.5 5.5"/>',
  coin: '<circle cx="12" cy="12" r="9"/><path d="M15 9.2c-.6-.8-1.7-1.2-3-1.2-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.3 0-2.4-.4-3-1.2M12 6.5v11"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
  chat: '<path d="M21 12a8 8 0 01-11.8 7L4 20l1.1-4.6A8 8 0 1121 12z"/><path d="M8.5 11h7M8.5 14h4"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/>',
  ruler: '<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>'
};
const icon = (name, cls = 'i') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${P[name]}</svg>`;

const mark = (cls = 'mark') => `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
  <rect x="8" y="8" width="32" height="32" transform="rotate(45 24 24)" fill="none" stroke="currentColor" stroke-width="1.1"/>
  <rect x="12" y="12" width="24" height="24" transform="rotate(45 24 24)" fill="none" stroke="currentColor" stroke-width=".6" opacity=".55"/>
  <text x="24.4" y="31.6" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-style="italic" font-weight="600" font-size="22" fill="currentColor">S</text>
  <path d="M39 4.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z" fill="currentColor"/>
</svg>`;
const brand = (extra = '') => `<a class="brand ${extra}" href="#top" aria-label="Sanders Signature Clean, back to top">${mark()}<span class="brand-text"><span class="brand-name">Sanders</span><span class="brand-sub">Signature Clean</span></span></a>`;

/* ---------- Data helpers (facts come only from kit.js) ---------- */
const F = B.facilities, S = B.services, Q = B.frequencies;
const findS = id => S.find(s => s.id === id);
const findF = id => F.find(f => f.id === id);
const findQ = id => Q.find(q => q.id === id);
const spaceIcon = { school: 'school', medical: 'medical', office: 'office', other: 'store' };
const serviceIcon = { cleaning: 'sparkle', washing: 'droplet', recurring: 'repeat' };
const spaceShort = { school: 'Schools', medical: 'Medical', office: 'Offices', other: 'Commercial' };
const spaceInset = {
  school: { src: '/images/gen/floor-scrub.webp', alt: 'Illustrative photo of a floor scrubber in a school hallway' },
  medical: { src: '/images/gen/exam-room.webp', alt: 'Illustrative photo of a gloved hand wiping a clinic counter' },
  office: { src: '/images/gen/conference.webp', alt: 'Illustrative photo of a pristine conference room' },
  other: { src: '/images/gen/storefront-wash.webp', alt: 'Illustrative photo of a storefront sidewalk being pressure washed' }
};
const serviceAside = {
  cleaning: { src: '/images/gen/restroom.webp', alt: 'Illustrative photo of a spotless commercial restroom' },
  washing: { src: '/images/exterior.webp', alt: 'Illustrative photo of concrete being pressure washed' },
  recurring: { src: '/images/gen/glass.webp', alt: 'Illustrative photo of a squeegee on a glass door' }
};
const credDetail = [
  ['shield', 'Licensed & insured', 'Commercial cleaning from a licensed and insured Huntsville company.'],
  ['tag', 'Free quotes', 'Tell us about your space. The quote costs you nothing.'],
  ['sliders', 'Customized plans', 'A scope shaped around your building and what it needs.'],
  ['contract', 'Contracts welcome', 'Daily, weekly or bi-weekly service, on contract if you prefer.']
];
const telLink = (cls = 'link-u', label = `Call ${B.phone}`) => `<a class="${cls}" href="${B.tel}">${icon('phone')}<span>${label}</span></a>`;
const photoChip = (text = 'Illustrative photo') => `<span class="chip-photo">${text}</span>`;

/* ---------- Markup ---------- */
const header = () => `
<header class="site-header" id="site-header">
  <div class="wrap header-inner">
    ${brand()}
    <nav class="nav" aria-label="Primary">
      <a href="#services">Services</a><a href="#spaces">Spaces</a><a href="#how">How it works</a><a href="#washing">Pressure washing</a><a href="#faq">FAQ</a>
    </nav>
    <div class="header-actions">
      <a class="header-phone" href="${B.tel}">${icon('phone')}<span>${B.phone}</span></a>
      <button class="btn btn-gold btn-sm" type="button" data-quote>Free quote</button>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">${icon('menu')}</button>
    </div>
  </div>
</header>
<div class="mobile-menu" id="mobile-menu" hidden>
  <div class="mm-inner">
    <div class="mm-top">${brand('brand-sm')}<button class="mm-close" type="button" aria-label="Close menu">${icon('close')}</button></div>
    <nav class="mm-nav" aria-label="Mobile">
      ${[['#services', 'Services'], ['#spaces', 'Spaces'], ['#how', 'How it works'], ['#washing', 'Pressure washing'], ['#faq', 'FAQ']].map(([h, t], i) => `<a href="${h}"><span class="mm-num">${ROMAN[i] || 'V'}</span>${t}</a>`).join('')}
    </nav>
    <div class="mm-foot">
      <button class="btn btn-gold btn-block" type="button" data-quote>Request a free quote</button>
      <a class="btn btn-ghost btn-block" href="${B.tel}">${icon('phone')}Call ${B.phone}</a>
      <p class="mm-addr">${B.street}<br>${B.locality}</p>
    </div>
  </div>
</div>`;

const select = (name, label, placeholder, options) => `
<label class="plan-field"><span class="plan-label">${label}</span>
  <span class="plan-select"><select name="${name}"><option value="">${placeholder}</option>${options.map(o => `<option value="${o.id}">${esc(o.name)}</option>`).join('')}</select>${icon('chevD')}</span>
</label>`;

const hero = () => `
<section class="hero" id="top" aria-labelledby="hero-title">
  <div class="hero-media">
    <img src="/images/gen/crew-office.webp" alt="Illustrative photo of a cleaning professional vacuuming an office at dusk" fetchpriority="high" width="1672" height="941">
  </div>
  <div class="hero-frame" aria-hidden="true"></div>
  <p class="hero-side" aria-hidden="true">Huntsville, Alabama <span>◆</span> Commercial cleaning &amp; pressure washing</p>
  <div class="wrap hero-inner">
    <div class="hero-copy">
      <p class="eyebrow on-dark">Commercial cleaning · Pressure washing</p>
      <h1 id="hero-title">Clean is our <em>signature.</em></h1>
      <p class="hero-lead">Customized commercial cleaning for Huntsville's schools, medical facilities, office buildings and commercial spaces, with exterior pressure washing to match. Daily, weekly or bi-weekly. Contracts welcome.</p>
      <div class="hero-ctas">
        <button class="btn btn-gold btn-lg" type="button" data-quote>Request a free quote ${icon('arrow')}</button>
        ${telLink('link-u link-u-light')}
      </div>
      <ul class="hero-creds" aria-label="Credentials">${B.credentials.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
    </div>
    <form class="plan" id="plan-form" aria-labelledby="plan-title">
      <div class="plan-head">
        <p class="plan-kicker">Begin your plan</p>
        <p class="plan-title" id="plan-title">Three choices to a <em>free quote</em></p>
      </div>
      ${select('service', 'Service', 'Choose a service', S)}
      ${select('space', 'Space', 'Choose a space', F)}
      ${select('frequency', 'Frequency', 'Choose a rhythm', Q)}
      <button class="btn btn-gold plan-go" type="submit">Continue ${icon('arrow')}</button>
    </form>
    ${photoChip()}
  </div>
</section>`;

const creds = () => `
<section class="creds" aria-label="Why clients call us">
  <div class="wrap creds-grid">
    ${credDetail.map(([ic, t, d], i) => `<div class="cred" data-reveal style="--reveal-delay:${i * 0.08}s"><span class="tile">${icon(ic)}</span><div><h2 class="cred-t">${t}</h2><p>${d}</p></div></div>`).join('')}
  </div>
</section>`;

const intro = () => `
<section class="intro section" aria-labelledby="intro-title">
  <div class="wrap intro-grid">
    <div class="intro-copy" data-reveal>
      <p class="eyebrow">The Sanders standard</p>
      <h2 id="intro-title" class="intro-statement">Every building says something before anyone speaks. We help yours say <em>cared for.</em></h2>
      <div class="intro-body">
        <p>Sanders Signature Clean is a Huntsville commercial cleaning and pressure washing company. We look after schools, medical facilities, office buildings and other commercial spaces, and every plan is customized to what your space actually needs.</p>
        <p>Start with a conversation and a free quote. Settle into daily, weekly or bi-weekly service, with contracts welcome.</p>
      </div>
      <div class="intro-sign"><span class="sig">Sanders</span><span class="sig-meta">Signature Clean, LLC<br>${B.street}, ${B.locality}</span></div>
    </div>
    <figure class="intro-figure framed" data-reveal style="--reveal-delay:.12s">
      <img src="/images/detail.webp" alt="Illustrative photo of a gloved hand polishing a counter with a microfiber cloth" loading="lazy" width="1536" height="1024">
      ${photoChip()}
      <figcaption>Attention to the surfaces people touch every day.</figcaption>
    </figure>
  </div>
  <div class="wrap ledger" role="list" aria-label="Sanders at a glance">
    ${[
      ['3', 'Schedules', 'Daily · Weekly · Bi-weekly'],
      ['4', 'Kinds of spaces', 'Schools · Medical · Offices · Commercial'],
      ['1', 'Call to begin', `<a href="${B.tel}">${B.phone}</a>`],
      ['$0', 'For your quote', 'Free quotes, customized plans']
    ].map(([n, k, v], i) => `<div class="ledger-item" role="listitem" data-reveal style="--reveal-delay:${i * 0.07}s"><span class="ledger-n">${n}</span><span class="ledger-k">${k}</span><span class="ledger-v">${v}</span></div>`).join('')}
  </div>
</section>`;

const services = () => `
<section class="services section" id="services" aria-labelledby="services-title">
  <div class="wrap">
    <div class="sec-head center" data-reveal>
      <p class="eyebrow eyebrow-center">The services</p>
      <h2 id="services-title">Three ways we keep your building <em>at its best.</em></h2>
      <p class="lead">Interior cleaning, exterior washing and a schedule that holds it all together. Each one is shaped around your space, and each one starts with a free quote.</p>
      <ol class="svc-index" aria-label="Service index">${S.map((s, i) => `<li><a href="#svc-${s.id}"><span>${ROMAN[i]}</span>${esc(s.name)}</a></li>`).join('')}</ol>
    </div>
    ${S.map((s, i) => `
    <article class="svc ${i % 2 ? 'svc-rev' : ''}" id="svc-${s.id}" aria-labelledby="svc-${s.id}-t">
      <figure class="svc-media framed" data-reveal>
        <img src="${s.image}" alt="${esc(s.alt)}" loading="lazy" width="1672" height="941">
        ${photoChip()}
        <figure class="svc-inset"><img src="${serviceAside[s.id].src}" alt="${esc(serviceAside[s.id].alt)}" loading="lazy" width="600" height="400"></figure>
      </figure>
      <div class="svc-card" data-reveal style="--reveal-delay:.12s">
        <div class="svc-num"><span class="roman">${ROMAN[i]}.</span><span class="svc-ico">${icon(serviceIcon[s.id])}</span></div>
        <h3 id="svc-${s.id}-t">${esc(s.name)}</h3>
        <p class="svc-short">${esc(s.short)}</p>
        <p>${esc(s.body)}</p>
        <p class="talk-label">Talk to us about</p>
        <ul class="chips">${s.prompts.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
        <div class="svc-actions">
          <button class="btn btn-navy" type="button" data-quote data-service="${s.id}">Quote ${esc(s.name.toLowerCase())} ${icon('arrow')}</button>
          ${telLink()}
        </div>
      </div>
    </article>`).join('')}
  </div>
</section>`;

const spaces = () => `
<section class="spaces section dark" id="spaces" aria-labelledby="spaces-title">
  <div class="wrap spaces-head">
    <div data-reveal>
      <p class="eyebrow on-dark">Spaces we serve</p>
      <h2 id="spaces-title">Four kinds of spaces, <em>one standard.</em></h2>
    </div>
    <div class="spaces-controls" data-reveal style="--reveal-delay:.1s">
      <div class="strip-tabs" role="group" aria-label="Choose a space">
        ${F.map((f, i) => `<button type="button" class="strip-tab" data-frame="${i}" aria-controls="frame-${f.id}" aria-current="${i === 0}">${icon(spaceIcon[f.id])}<span>${esc(spaceShort[f.id])}</span></button>`).join('')}
      </div>
      <div class="strip-arrows">
        <button type="button" class="round-btn" data-strip="prev" aria-label="Previous space">${icon('chevL')}</button>
        <button type="button" class="round-btn" data-strip="next" aria-label="Next space">${icon('chevR')}</button>
      </div>
    </div>
  </div>
  <div class="strip">
    <div class="strip-track" tabindex="0" aria-label="Spaces film strip, scroll horizontally">
      ${F.map((f, i) => `
      <article class="frame" id="frame-${f.id}" aria-labelledby="frame-${f.id}-t">
        <div class="frame-photo">
          <img src="${f.image}" alt="${esc(f.alt)}" loading="lazy" width="1536" height="1024">
          <span class="frame-no">${String(i + 1).padStart(2, '0')} <i>/</i> 0${F.length}</span>
          ${photoChip()}
        </div>
        <div class="frame-body">
          <span class="frame-ico">${icon(spaceIcon[f.id])}</span>
          <h3 id="frame-${f.id}-t">${esc(f.name)}</h3>
          <p class="frame-blurb">${esc(f.blurb)}</p>
          <p class="talk-label on-dark">What we'll talk through</p>
          <ol class="talk-list">${f.talk.map(t => `<li>${esc(t)}</li>`).join('')}</ol>
          <div class="frame-foot">
            <figure class="frame-inset"><img src="${spaceInset[f.id].src}" alt="${esc(spaceInset[f.id].alt)}" loading="lazy" width="600" height="340"></figure>
            <button class="btn btn-gold btn-sm" type="button" data-quote data-space="${f.id}">Plan for ${f.id === 'other' ? 'your space' : 'a ' + esc(f.single.toLowerCase())} ${icon('arrow')}</button>
          </div>
        </div>
      </article>`).join('')}
    </div>
    <div class="wrap strip-progress" aria-hidden="true"><span class="strip-bar"><i></i></span><span class="strip-count"><b>01</b> / 0${F.length}</span></div>
  </div>
</section>`;

const interlude = () => `
<section class="interlude" aria-labelledby="interlude-title">
  <img src="/images/gen/glass.webp" alt="Illustrative photo of a squeegee clearing water from a glass door" loading="lazy" width="1672" height="941">
  <div class="wrap interlude-inner" data-reveal>
    <p class="eyebrow on-dark">The details</p>
    <h2 id="interlude-title">Shine lives in <em>the details.</em></h2>
    <p>Entrances, glass, high-touch surfaces. Tell us which details matter most in your building and we will build them into your plan.</p>
    <button class="link-u link-u-light" type="button" data-quote data-service="cleaning">${icon('sparkle')}<span>Start with a free quote</span></button>
  </div>
  ${photoChip()}
</section>`;

const how = () => `
<section class="how section" id="how" aria-labelledby="how-title">
  <div class="wrap">
    <div class="sec-head center" data-reveal>
      <p class="eyebrow eyebrow-center">How it works</p>
      <h2 id="how-title">Four quiet steps to <em>a cleaner building.</em></h2>
      <p class="lead">No pressure and no guesswork. A conversation, a plan that fits, and a routine you can rely on.</p>
    </div>
    <ol class="steps">
      ${B.steps.map((s, i) => `<li class="step" data-reveal style="--reveal-delay:${i * 0.1}s">
        <span class="step-node"><span>${ROMAN[i]}</span></span>
        <p class="step-word">Step ${WORDS[i].toLowerCase()}</p>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.body)}</p>
        <span class="step-ico">${icon(['phone', 'chat', 'ruler', 'calendar'][i])}</span>
      </li>`).join('')}
    </ol>
    <div class="concierge" data-reveal>
      <div class="concierge-l">${mark('concierge-mark')}<div><p class="concierge-k">Ready for step one?</p><p class="concierge-t">Speak with Sanders directly, or begin online in a minute.</p></div></div>
      <div class="concierge-r"><a class="concierge-phone" href="${B.tel}">${B.phone}</a><button class="btn btn-gold" type="button" data-quote>Begin online ${icon('arrow')}</button></div>
    </div>
  </div>
</section>`;

const schedule = () => `
<section class="schedule section dark" id="schedule" aria-labelledby="schedule-title">
  <div class="wrap schedule-grid">
    <div class="schedule-copy" data-reveal>
      <p class="eyebrow on-dark">Scheduled service</p>
      <h2 id="schedule-title">Set the <em>rhythm</em> of your building.</h2>
      <p class="lead on-dark">Choose how often you would like us. Daily, weekly and bi-weekly service is available, and service contracts are welcome.</p>
      <div class="rhythm" role="radiogroup" aria-label="How often would you like service?">
        ${Q.map((q, i) => `<button type="button" class="rhythm-opt" role="radio" aria-checked="${i === 1}" tabindex="${i === 1 ? 0 : -1}" data-freq="${q.id}">
          <span class="rhythm-n">${ROMAN[i]}</span><span class="rhythm-name">${esc(q.name)}</span><span class="rhythm-dot" aria-hidden="true"></span>
        </button>`).join('')}
      </div>
    </div>
    <div class="rhythm-card" data-reveal style="--reveal-delay:.12s" aria-live="polite">
      <div class="rhythm-photo"><img src="/images/gen/cart.webp" alt="Illustrative photo of an organized janitorial cart" loading="lazy" width="1672" height="941">${photoChip()}</div>
      <div class="rhythm-body">
        <p class="rhythm-k">Your rhythm</p>
        <p class="rhythm-title" id="rhythm-title"></p>
        <p class="rhythm-note" id="rhythm-note"></p>
        <div class="ribbon" id="ribbon" aria-hidden="true"></div>
        <p class="ribbon-cap">Illustrative two-week view. Exact days are set with you.</p>
        <div class="rhythm-foot">
          <span class="badge">${icon('contract')}Contracts welcome</span>
          <button class="btn btn-gold" type="button" id="rhythm-cta" data-quote data-frequency="weekly">Plan this rhythm ${icon('arrow')}</button>
        </div>
      </div>
    </div>
  </div>
</section>`;

const washing = () => {
  const w = findS('washing');
  return `
<section class="washing section" id="washing" aria-labelledby="washing-title">
  <div class="wrap washing-grid">
    <div class="ba-wrap" data-reveal>
      <div class="ba" id="ba" style="--pos:50%">
        <img class="ba-after" src="/images/gen/storefront-wash.webp" alt="Illustrative photo of a brick storefront sidewalk after pressure washing" loading="lazy" width="1672" height="941">
        <div class="ba-before" aria-hidden="true"><img src="/images/gen/storefront-wash.webp" alt="" loading="lazy" width="1672" height="941"><span class="ba-grime"></span></div>
        <span class="ba-label ba-label-l">Before</span><span class="ba-label ba-label-r">After</span>
        <div class="ba-line" aria-hidden="true"></div>
        <button class="ba-handle" type="button" role="slider" aria-label="Before and after comparison" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="50% before, 50% after">${icon('chevL')}${icon('chevR')}</button>
      </div>
      <p class="ba-cap"><span>Illustrative</span> “Before” is simulated with a filter on the same photo. Drag the handle or use your arrow keys.</p>
    </div>
    <div class="washing-copy" data-reveal style="--reveal-delay:.12s">
      <p class="eyebrow"><span class="roman-sm">II.</span> Pressure washing</p>
      <h2 id="washing-title">A fresh first impression, <em>from the outside in.</em></h2>
      <p class="lead">${esc(w.body)}</p>
      <p class="talk-label">Which surfaces should we talk about?</p>
      <div class="surface-chips" role="group" aria-label="Surfaces to discuss">
        ${w.prompts.map(p => `<button type="button" class="surface" aria-pressed="false" data-surface="${esc(p)}">${icon('check')}<span>${esc(p)}</span></button>`).join('')}
      </div>
      <div class="washing-actions">
        <button class="btn btn-navy" type="button" id="washing-cta">Quote pressure washing ${icon('arrow')}</button>
        <p class="washing-hint" id="washing-hint">Pick any surfaces and we'll add them to your request.</p>
      </div>
    </div>
  </div>
</section>`;
};

const why = () => `
<section class="why section dark" id="why" aria-labelledby="why-title">
  <div class="wrap why-grid">
    <div class="mosaic" data-reveal>
      <figure class="m m1"><img src="/images/property.webp" alt="Illustrative photo of a brick commercial building entrance" loading="lazy" width="1536" height="1024">${photoChip()}</figure>
      <figure class="m m2"><img src="/images/gen/conference.webp" alt="Illustrative photo of a clean conference room" loading="lazy" width="1672" height="941"></figure>
      <figure class="m m3"><img src="/images/medical.webp" alt="Illustrative photo of a clean medical waiting room" loading="lazy" width="1536" height="1024"></figure>
      <svg class="seal" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
        <defs><path id="seal-path" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"/></defs>
        <circle cx="100" cy="100" r="97" fill="#0a1726"/>
        <circle cx="100" cy="100" r="93" fill="none" stroke="currentColor" stroke-width=".8"/>
        <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" stroke-width=".6" opacity=".6"/>
        <text font-family="Manrope, sans-serif" font-size="11.5" font-weight="600" letter-spacing="3" fill="currentColor"><textPath href="#seal-path" textLength="470" lengthAdjust="spacing">HUNTSVILLE · ALABAMA · LICENSED &amp; INSURED · FREE QUOTES ·</textPath></text>
        <g transform="translate(76 76) scale(1)">${mark('seal-mark').replace('<svg class="seal-mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">', '').replace('</svg>', '')}</g>
      </svg>
    </div>
    <div class="why-copy" data-reveal style="--reveal-delay:.12s">
      <p class="eyebrow on-dark">Why Sanders</p>
      <h2 id="why-title">Local, licensed and <em>made to measure.</em></h2>
      <p class="lead on-dark">A Huntsville company cleaning Huntsville buildings. No one-size package: just a plan built around your space, your schedule and your budget.</p>
      <ul class="reasons">
        ${[
          ['pin', 'Based in Huntsville', `${B.street}, ${B.locality}.`],
          ['shield', 'Licensed & insured', 'Commercial cleaning and pressure washing from a licensed and insured company.'],
          ['coin', 'Affordable', 'Plans scoped to your needs and budget, starting with a free quote.'],
          ['sliders', 'Customized to you', 'Your facility, your priorities and your schedule shape the plan.'],
          ['users', 'Chamber member', `Listed in the Huntsville/Madison County Chamber member directory. <a href="${B.source}" target="_blank" rel="noopener noreferrer">View the listing${icon('external', 'i i-xs')}</a>`]
        ].map(([ic, t, d]) => `<li><span class="tile tile-sm">${icon(ic)}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}
      </ul>
    </div>
  </div>
</section>`;

const faq = () => `
<section class="faq section" id="faq" aria-labelledby="faq-title">
  <div class="wrap faq-grid">
    <div class="faq-aside" data-reveal>
      <p class="eyebrow">Questions</p>
      <h2 id="faq-title">Asked &amp; <em>answered.</em></h2>
      <p class="lead">The essentials, plainly. Anything else, the quickest answer is a phone call.</p>
      <div class="call-card">
        <p class="call-k">Speak with Sanders</p>
        <a class="call-num" href="${B.tel}">${B.phone}</a>
        <p class="call-addr">${icon('pin')}<span>${B.street}<br>${B.locality}</span></p>
        <button class="btn btn-gold btn-block" type="button" data-quote>Request a free quote</button>
      </div>
    </div>
    <div class="faq-list" data-reveal style="--reveal-delay:.1s">
      ${B.faqs.map((f, i) => `<details class="qa" name="faq" ${i === 0 ? 'open' : ''}>
        <summary><span class="qa-n">${String(i + 1).padStart(2, '0')}</span><span class="qa-q">${esc(f.q)}</span><span class="qa-plus" aria-hidden="true">${icon('plus')}</span></summary>
        <div class="qa-a"><p>${esc(f.a)}</p></div>
      </details>`).join('')}
    </div>
  </div>
</section>`;

const ctaBand = () => `
<section class="cta-band" aria-labelledby="cta-title">
  <img src="/images/office.webp" alt="" loading="lazy" width="1536" height="1024">
  <div class="cta-frame" aria-hidden="true"></div>
  <div class="wrap cta-inner" data-reveal>
    ${mark('cta-mark')}
    <p class="eyebrow eyebrow-center on-dark">Free quotes · Licensed &amp; insured</p>
    <h2 id="cta-title">Make clean <em>your signature.</em></h2>
    <p class="lead on-dark">Tell us about your building and how often you need us. We will shape a plan around it, and the quote is free.</p>
    <div class="cta-actions">
      <button class="btn btn-gold btn-lg" type="button" data-quote>Request a free quote ${icon('arrow')}</button>
      ${telLink('link-u link-u-light')}
    </div>
  </div>
</section>`;

const footer = () => `
<footer class="footer">
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">${brand('brand-lg')}<p>Commercial cleaning and pressure washing for schools, medical facilities, office buildings and other commercial spaces in Huntsville, Alabama.</p></div>
      <button class="btn btn-gold" type="button" data-quote>Request a free quote ${icon('arrow')}</button>
    </div>
    <div class="foot-cols">
      <div><p class="foot-h">Visit</p><p>${B.street}<br>${B.locality}</p></div>
      <div><p class="foot-h">Call</p><p><a href="${B.tel}">${B.phone}</a></p><p class="foot-small">Free quotes · Contracts welcome</p></div>
      <div><p class="foot-h">Services</p><ul>${S.map(s => `<li><a href="#svc-${s.id}">${esc(s.name)}</a></li>`).join('')}</ul></div>
      <div><p class="foot-h">Spaces</p><ul>${F.map((f, i) => `<li><a href="#spaces" data-goto-frame="${i}">${esc(f.name)}</a></li>`).join('')}</ul></div>
    </div>
    <div class="foot-bottom">
      <p>${B.name} · Licensed &amp; insured · <a href="${B.source}" target="_blank" rel="noopener noreferrer">Chamber member listing</a></p>
      <p>Proposed design by <a href="https://bluelotuscoding.com" target="_blank" rel="noopener noreferrer">Blue Lotus Coding</a> · <a href="/" ${embedded ? 'target="_blank" rel="noopener noreferrer"' : ''}>← Back to the gallery</a></p>
    </div>
  </div>
</footer>
<div class="mbar" id="mbar" aria-label="Quick actions">
  <a class="mbar-call" href="${B.tel}">${icon('phone')}<span>Call</span></a>
  <button class="mbar-quote" type="button" data-quote>Free quote ${icon('arrow')}</button>
</div>`;

const dialog = () => `
<dialog class="qd" id="quote" aria-labelledby="qd-title">
  <div class="qd-shell">
    <aside class="qd-aside">
      <img src="/images/gen/conference.webp" alt="" loading="lazy" width="1672" height="941">
      <div class="qd-aside-inner">
        <div class="qd-aside-top">${mark('qd-mark')}<p class="qd-kicker">Free quote · Demo</p></div>
        <h2 id="qd-title" class="qd-title">Begin your <em>plan</em></h2>
        <ol class="qd-progress" id="qd-progress">
          ${['Service', 'Space', 'Rhythm', 'Details', 'Review'].map((t, i) => `<li data-p="${i + 1}"><span class="qd-pn">${ROMAN[i]}</span><span class="qd-pt">${t}</span></li>`).join('')}
        </ol>
        <div class="qd-summary" id="qd-summary"></div>
        <p class="qd-call">Prefer to talk? <a href="${B.tel}">${B.phone}</a></p>
      </div>
    </aside>
    <div class="qd-main">
      <div class="qd-top">
        <p class="qd-count" id="qd-count">Step 1 of 5</p>
        <button class="qd-close" type="button" aria-label="Close quote request">${icon('close')}</button>
      </div>
      <div class="qd-bar" aria-hidden="true"><span id="qd-bar"></span></div>
      <form class="qd-form" id="qd-form" novalidate>
        <div class="qd-step" id="qd-step"></div>
        <div class="qd-nav" id="qd-nav">
          <button type="button" class="btn btn-line qd-back" id="qd-back">${icon('chevL')}<span>Back</span></button>
          <button type="submit" class="btn btn-gold qd-next" id="qd-next"><span>Continue</span>${icon('arrow')}</button>
        </div>
      </form>
    </div>
  </div>
</dialog>`;

/* ---------- Render ---------- */
demoBar('Signature');
$('#app').innerHTML = header() + '<main id="main">' + hero() + creds() + intro() + services() + spaces() + interlude() + how() + schedule() + washing() + why() + faq() + ctaBand() + '</main>' + footer() + dialog();
$$('img').forEach(img => img.addEventListener('error', () => img.classList.add('is-missing'), { once: true }));

/* ---------- Smooth anchors (no hash navigation: safe inside the sandboxed preview) ---------- */
function goTo(id) {
  const el = id === 'top' ? document.body : document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  if (!id) return;
  e.preventDefault();
  closeMenu(false);
  if (a.dataset.gotoFrame) setFrame(+a.dataset.gotoFrame, true);
  goTo(id);
});

/* ---------- Header + mobile bar ---------- */
const head = $('#site-header');
const mbar = $('#mbar');
const onScroll = () => {
  const y = scrollY;
  head.classList.toggle('is-scrolled', y > 40);
  mbar.classList.toggle('is-on', y > innerHeight * 0.7);
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu ---------- */
const menu = $('#mobile-menu');
const toggle = $('.menu-toggle');
function openMenu() {
  menu.hidden = false;
  requestAnimationFrame(() => menu.classList.add('is-open'));
  toggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('no-scroll');
  $('.mm-nav a', menu).focus();
}
function closeMenu(restore = true) {
  if (menu.hidden) return;
  menu.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
  menu.hidden = true;
  if (restore) toggle.focus();
}
toggle.addEventListener('click', () => (menu.hidden ? openMenu() : closeMenu()));
$('.mm-close').addEventListener('click', () => closeMenu());
menu.addEventListener('keydown', e => {
  if (e.key === 'Escape') { e.preventDefault(); closeMenu(); }
  if (e.key === 'Tab') {
    const f = $$('a, button', menu);
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f.at(-1).focus(); }
    else if (!e.shiftKey && document.activeElement === f.at(-1)) { e.preventDefault(); f[0].focus(); }
  }
});
addEventListener('resize', () => { if (innerWidth > 1080) closeMenu(false); });

/* ---------- Spaces film strip ---------- */
const track = $('.strip-track');
const frames = $$('.frame', track);
const tabs = $$('.strip-tab');
let frameIdx = 0;
function markFrame(i) {
  frameIdx = i;
  tabs.forEach((t, k) => t.setAttribute('aria-current', String(k === i)));
  frames.forEach((f, k) => f.classList.toggle('is-active', k === i));
  $('.strip-count b').textContent = String(i + 1).padStart(2, '0');
}
function setFrame(i, scroll = true) {
  i = Math.max(0, Math.min(frames.length - 1, i));
  markFrame(i);
  if (scroll) {
    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    track.scrollTo({ left: frames[i].offsetLeft - pad, behavior: reduced() ? 'auto' : 'smooth' });
  }
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => setFrame(i));
  t.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + tabs.length) % tabs.length;
    tabs[n].focus(); setFrame(n);
  });
});
$('[data-strip="prev"]').addEventListener('click', () => setFrame(frameIdx - 1));
$('[data-strip="next"]').addEventListener('click', () => setFrame(frameIdx + 1));
let stripRaf;
track.addEventListener('scroll', () => {
  cancelAnimationFrame(stripRaf);
  stripRaf = requestAnimationFrame(() => {
    const max = track.scrollWidth - track.clientWidth;
    const p = max > 0 ? track.scrollLeft / max : 0;
    $('.strip-bar i').style.transform = `scaleX(${0.25 + p * 0.75})`;
    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    let best = 0, dist = Infinity;
    frames.forEach((f, k) => { const d = Math.abs(f.offsetLeft - pad - track.scrollLeft); if (d < dist) { dist = d; best = k; } });
    if (p > 0.98) best = frames.length - 1;
    if (best !== frameIdx) markFrame(best);
  });
}, { passive: true });
markFrame(0);

/* ---------- Schedule chooser ---------- */
const opts = $$('.rhythm-opt');
const ribbonMarks = { daily: [...Array(14).keys()], weekly: [0, 7], biweekly: [0], discuss: [] };
function setRhythm(id, focus = false) {
  const q = findQ(id);
  opts.forEach(o => { const on = o.dataset.freq === id; o.setAttribute('aria-checked', String(on)); o.tabIndex = on ? 0 : -1; if (on && focus) o.focus(); });
  $('#rhythm-title').innerHTML = id === 'discuss' ? `Not sure <em>yet</em>` : `<em>${esc(q.name)}</em> service`;
  $('#rhythm-note').textContent = q.note;
  const lit = ribbonMarks[id];
  $('#ribbon').innerHTML = [0, 1].map(w => `<div class="ribbon-week"><span class="ribbon-w">Week ${w + 1}</span><div class="ribbon-cells">${[...Array(7).keys()].map(d => { const k = w * 7 + d; return `<span class="cell ${lit.includes(k) ? 'on' : ''} ${id === 'discuss' ? 'q' : ''}"></span>`; }).join('')}</div></div>`).join('');
  const cta = $('#rhythm-cta');
  cta.dataset.frequency = id;
  cta.firstChild.textContent = id === 'discuss' ? 'Talk it through ' : `Plan ${q.name.toLowerCase()} service `;
}
opts.forEach((o, i) => {
  o.addEventListener('click', () => setRhythm(o.dataset.freq));
  o.addEventListener('keydown', e => {
    const d = ['ArrowDown', 'ArrowRight'].includes(e.key) ? 1 : ['ArrowUp', 'ArrowLeft'].includes(e.key) ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    setRhythm(opts[(i + d + opts.length) % opts.length].dataset.freq, true);
  });
});
setRhythm('weekly');

/* ---------- Before / after slider ---------- */
const ba = $('#ba');
const handle = $('.ba-handle');
function setPos(v) {
  const pos = Math.max(0, Math.min(100, v));
  ba.style.setProperty('--pos', pos + '%');
  handle.setAttribute('aria-valuenow', String(Math.round(pos)));
  handle.setAttribute('aria-valuetext', `${Math.round(pos)}% before, ${100 - Math.round(pos)}% after`);
}
const fromEvent = e => { const r = ba.getBoundingClientRect(); return ((e.clientX - r.left) / r.width) * 100; };
ba.addEventListener('pointerdown', e => {
  if (e.button !== 0) return;
  ba.setPointerCapture(e.pointerId);
  ba.classList.add('is-drag');
  setPos(fromEvent(e));
  handle.focus({ preventScroll: true });
});
ba.addEventListener('pointermove', e => { if (ba.hasPointerCapture(e.pointerId)) setPos(fromEvent(e)); });
const endDrag = e => { if (ba.hasPointerCapture?.(e.pointerId)) ba.releasePointerCapture(e.pointerId); ba.classList.remove('is-drag'); };
ba.addEventListener('pointerup', endDrag);
ba.addEventListener('pointercancel', endDrag);
handle.addEventListener('keydown', e => {
  const cur = +handle.getAttribute('aria-valuenow');
  const map = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5, PageDown: -20, PageUp: 20 };
  if (e.key in map) { e.preventDefault(); setPos(cur + map[e.key]); }
  else if (e.key === 'Home') { e.preventDefault(); setPos(0); }
  else if (e.key === 'End') { e.preventDefault(); setPos(100); }
});

/* ---------- Pressure washing surfaces ---------- */
const surfaces = $$('.surface');
const updateHint = () => {
  const picked = surfaces.filter(s => s.getAttribute('aria-pressed') === 'true').map(s => s.dataset.surface);
  $('#washing-hint').textContent = picked.length ? `${picked.length} surface${picked.length > 1 ? 's' : ''} added to your request.` : "Pick any surfaces and we'll add them to your request.";
  return picked;
};
surfaces.forEach(s => s.addEventListener('click', () => { s.setAttribute('aria-pressed', String(s.getAttribute('aria-pressed') !== 'true')); updateHint(); }));
$('#washing-cta').addEventListener('click', e => {
  const picked = updateHint();
  openQuote({ service: 'washing', notes: picked.length ? `Surfaces to discuss: ${picked.join(', ')}` : '' }, e.currentTarget);
});

/* ---------- Hero plan widget ---------- */
$('#plan-form').addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  openQuote({ service: d.get('service'), space: d.get('space'), frequency: d.get('frequency') }, e.submitter || $('.plan-go'));
});

/* ---------- Quote flow ---------- */
const dlg = $('#quote');
const fresh = () => ({ step: 1, services: new Set(), space: '', frequency: '', name: '', company: '', email: '', phone: '', notes: '', done: false, review: false, tried: false });
let st = fresh();
let opener = null;
const STEPS = 5;

document.addEventListener('click', e => {
  const t = e.target.closest('[data-quote]');
  if (!t) return;
  e.preventDefault();
  closeMenu(false);
  openQuote({ service: t.dataset.service, space: t.dataset.space, frequency: t.dataset.frequency }, t);
});

function openQuote(pre = {}, from = document.activeElement) {
  if (st.done) st = fresh();
  if (pre.service) st.services.add(pre.service);
  if (pre.space) st.space = pre.space;
  if (pre.frequency) st.frequency = pre.frequency;
  if (pre.notes) st.notes = st.notes && !st.notes.includes(pre.notes) ? `${st.notes}\n${pre.notes}` : pre.notes;
  st.review = false; st.tried = false;
  st.step = !st.services.size ? 1 : !st.space ? 2 : !st.frequency ? 3 : 4;
  if (!pre.service && !pre.space && !pre.frequency) st.step = 1;
  opener = from;
  if (!dlg.open) dlg.showModal();
  document.body.classList.add('no-scroll');
  render(true);
}
function closeQuote() {
  if (dlg.open) dlg.close();
}
dlg.addEventListener('close', () => {
  document.body.classList.remove('no-scroll');
  if (st.done) st = fresh();
  if (opener && document.contains(opener)) opener.focus();
});
dlg.addEventListener('cancel', e => { e.preventDefault(); closeQuote(); });
dlg.addEventListener('click', e => { if (e.target === dlg) closeQuote(); });
$('.qd-close').addEventListener('click', closeQuote);

const choice = (type, name, value, checked, title, sub, ic, img) => `
<label class="opt ${img ? 'opt-img' : ''}">
  <input type="${type}" name="${name}" value="${value}" ${checked ? 'checked' : ''}>
  <span class="opt-box">
    ${img ? `<img src="${img}" alt="" loading="lazy" width="120" height="80">` : `<span class="opt-ico">${icon(ic)}</span>`}
    <span class="opt-text"><span class="opt-t">${title}</span>${sub ? `<span class="opt-s">${sub}</span>` : ''}</span>
    <span class="opt-check">${icon('check')}</span>
  </span>
</label>`;

const field = (id, label, type, req, auto, extra = '') => `
<div class="fld" data-f="${id}">
  <label for="q-${id}">${label}${req ? ' <span class="req" aria-hidden="true">*</span>' : ' <span class="opt-l">(optional)</span>'}</label>
  <input id="q-${id}" name="${id}" type="${type}" value="${esc(st[id])}" autocomplete="${auto}" ${req ? 'required aria-required="true"' : ''} ${extra} aria-describedby="e-${id}">
  <p class="fld-err" id="e-${id}"></p>
</div>`;

function stepHTML() {
  switch (st.step) {
    case 1: return `<fieldset><legend class="qd-h" tabindex="-1">Which services can we help with?</legend><p class="qd-sub">Choose one or more. You can change anything later.</p>
      <div class="opts">${S.map(s => choice('checkbox', 'service', s.id, st.services.has(s.id), esc(s.name), esc(s.short), serviceIcon[s.id])).join('')}</div>
      <p class="grp-err" id="grp-err" role="alert"></p></fieldset>`;
    case 2: return `<fieldset><legend class="qd-h" tabindex="-1">What kind of space is it?</legend><p class="qd-sub">Pick the closest match. We will learn the rest when we talk.</p>
      <div class="opts opts-2">${F.map(f => choice('radio', 'space', f.id, st.space === f.id, esc(f.name), esc(f.blurb), spaceIcon[f.id], f.image)).join('')}</div>
      <p class="grp-err" id="grp-err" role="alert"></p></fieldset>`;
    case 3: return `<fieldset><legend class="qd-h" tabindex="-1">How often would you like us?</legend><p class="qd-sub">Service contracts are welcome.</p>
      <div class="opts opts-2">${Q.map(q => choice('radio', 'frequency', q.id, st.frequency === q.id, esc(q.name), esc(q.note), q.id === 'discuss' ? 'chat' : 'calendar')).join('')}</div>
      <p class="grp-err" id="grp-err" role="alert"></p></fieldset>`;
    case 4: return `<div class="qd-h-wrap"><h3 class="qd-h" tabindex="-1">How can we reach you?</h3><p class="qd-sub">Fields marked <span class="req">*</span> are required. This is a demo, so nothing is sent.</p></div>
      <div class="err-sum" id="err-sum" role="alert"></div>
      <div class="fields">
        ${field('name', 'Your name', 'text', true, 'name')}
        ${field('company', 'Company or facility', 'text', false, 'organization')}
        ${field('email', 'Email', 'email', true, 'email', 'inputmode="email"')}
        ${field('phone', 'Phone', 'tel', true, 'tel', 'inputmode="tel"')}
        <div class="fld fld-wide"><label for="q-notes">Anything we should know? <span class="opt-l">(optional)</span></label><textarea id="q-notes" name="notes" rows="3" placeholder="Areas to include, timing, access…">${esc(st.notes)}</textarea></div>
      </div>`;
    case 5: {
      const row = (k, v, step) => `<div class="rv-row"><div><p class="rv-k">${k}</p><div class="rv-v">${v}</div></div><button type="button" class="rv-edit" data-edit="${step}">Edit<span class="sr-only"> ${k.toLowerCase()}</span></button></div>`;
      return `<div class="qd-h-wrap"><h3 class="qd-h" tabindex="-1">Review your request</h3><p class="qd-sub">Check the details, edit anything, then send.</p></div>
      <div class="rv">
        ${row('Services', [...st.services].map(id => esc(findS(id).name)).join(', '), 1)}
        ${row('Space', esc(findF(st.space).name), 2)}
        ${row('Frequency', esc(findQ(st.frequency).name), 3)}
        ${row('Contact', `<p>${esc(st.name.trim())}${st.company.trim() ? ` · ${esc(st.company.trim())}` : ''}</p><p>${esc(st.email.trim())} · ${esc(st.phone.trim())}</p>${st.notes.trim() ? `<p class="rv-notes">${esc(st.notes.trim()).replace(/\n/g, '<br>')}</p>` : ''}`, 4)}
      </div>`;
    }
    default: return `<div class="done">
      <div class="done-mark">${mark()}</div>
      <h3 class="qd-h" tabindex="-1">Demo complete — nothing was sent.</h3>
      <p>Thank you${st.name.trim() ? `, ${esc(st.name.trim().split(' ')[0])}` : ''}. This concept shows how a quote request could work. To request a real quote, call <a href="${B.tel}">${B.phone}</a>.</p>
      <div class="done-actions"><a class="btn btn-gold" href="${B.tel}">${icon('phone')}Call ${B.phone}</a><button type="button" class="btn btn-line" id="qd-home">Back to the site</button></div>
    </div>`;
  }
}

function summaryHTML() {
  const item = (k, v) => `<div class="qs-row"><span class="qs-k">${k}</span><span class="qs-v ${v ? '' : 'empty'}">${v || '—'}</span></div>`;
  return item('Service', [...st.services].map(id => esc(findS(id).name)).join(', ')) + item('Space', st.space ? esc(findF(st.space).name) : '') + item('Rhythm', st.frequency ? esc(findQ(st.frequency).name) : '');
}

function render(focus = false) {
  const done = st.step > STEPS;
  $('#qd-step').innerHTML = stepHTML();
  $('#qd-summary').innerHTML = summaryHTML();
  $('#qd-count').textContent = done ? 'Complete' : `Step ${st.step} of ${STEPS}`;
  $('#qd-bar').style.transform = `scaleX(${Math.min(st.step, STEPS) / STEPS})`;
  $$('#qd-progress li').forEach(li => {
    const n = +li.dataset.p;
    li.classList.toggle('is-done', n < st.step || done);
    li.classList.toggle('is-current', n === st.step);
    if (n === st.step) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
  });
  dlg.classList.toggle('is-done', done);
  $('#qd-nav').hidden = done;
  $('#qd-back span').textContent = st.step === 1 ? 'Cancel' : 'Back';
  $('#qd-next span').textContent = st.step === 5 ? 'Send request' : st.review ? 'Back to review' : 'Continue';
  if (focus) requestAnimationFrame(() => $('.qd-h', dlg)?.focus());
  $('.qd-main').scrollTop = 0;
  if (done) $('#qd-home').addEventListener('click', closeQuote);
}

$('#qd-step').addEventListener('change', e => {
  const t = e.target;
  if (t.name === 'service') { t.checked ? st.services.add(t.value) : st.services.delete(t.value); }
  if (t.name === 'space') st.space = t.value;
  if (t.name === 'frequency') st.frequency = t.value;
  if (['service', 'space', 'frequency'].includes(t.name)) { $('#qd-summary').innerHTML = summaryHTML(); const g = $('#grp-err'); if (g) g.textContent = ''; }
});
$('#qd-step').addEventListener('input', e => {
  const t = e.target;
  if (['name', 'company', 'email', 'phone', 'notes'].includes(t.name)) { st[t.name] = t.value; if (st.tried) validateDetails(false); }
});
$('#qd-step').addEventListener('focusout', e => {
  if (st.step === 4 && ['name', 'email', 'phone'].includes(e.target.name) && e.target.value.trim()) validateDetails(false, e.target.name);
});
$('#qd-step').addEventListener('click', e => {
  const ed = e.target.closest('[data-edit]');
  if (ed) { st.step = +ed.dataset.edit; st.review = true; render(true); }
});

function validateDetails(focusFirst = true, only) {
  const rules = {
    name: v => (v.trim() ? '' : 'Please enter your name.'),
    email: v => (!v.trim() ? 'Please enter your email address.' : validEmail(v) ? '' : 'Please enter a valid email, like name@company.com.'),
    phone: v => (!v.trim() ? 'Please enter your phone number.' : validPhone(v) ? '' : 'Please enter a 10-digit phone number.')
  };
  const errs = [];
  Object.entries(rules).forEach(([k, fn]) => {
    const msg = fn(st[k]);
    if (only && only !== k) { if (msg) errs.push(k); return; }
    const input = $(`#q-${k}`);
    if (!input) return;
    input.setAttribute('aria-invalid', String(!!msg));
    input.closest('.fld').classList.toggle('has-err', !!msg);
    $(`#e-${k}`).textContent = msg;
    if (msg) errs.push(k);
  });
  if (!only) {
    const sum = $('#err-sum');
    sum.textContent = errs.length ? `Please check ${errs.length === 1 ? 'one field' : errs.length + ' fields'} before continuing.` : '';
    sum.classList.toggle('is-on', !!errs.length);
    if (errs.length && focusFirst) $(`#q-${errs[0]}`).focus();
  }
  return errs.length === 0;
}

function groupError(msg) { const g = $('#grp-err'); g.textContent = msg; $('.opts input', dlg)?.focus(); }

$('#qd-form').addEventListener('submit', e => {
  e.preventDefault();
  if (st.step === 1 && !st.services.size) return groupError('Please choose at least one service.');
  if (st.step === 2 && !st.space) return groupError('Please choose the kind of space.');
  if (st.step === 3 && !st.frequency) return groupError('Please choose how often, or pick “Not sure yet”.');
  if (st.step === 4) { st.tried = true; if (!validateDetails(true)) return; }
  if (st.step === 5) { st.done = true; st.step = 6; render(true); return; }
  if (st.review) { st.review = false; st.step = 5; } else st.step += 1;
  render(true);
});
$('#qd-back').addEventListener('click', () => {
  if (st.step === 1) return closeQuote();
  st.review = false;
  st.step -= 1;
  render(true);
});

reveal();
