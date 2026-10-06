// SOUTHERN CARE: warm, local, editorial-neighborly. Terracotta, cream and pine; Fraunces + Karla; arches everywhere.
import { business, demoBar, esc, validEmail, validPhone, reveal, toast } from '../../shared/kit.js';
import './styles.css';

const B = business;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Icons (24 viewBox, stroke) ---------- */
const P = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.4 8.4 8 9.5 4.6-1.1 8-4.5 8-9.5V6l-8-3z"/><path d="m9 12 2 2 4-4"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  contract: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  school: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6"/>',
  medical: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/>',
  office: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  store: '<path d="M3 9 4.5 4h15L21 9"/><path d="M3 9h18v1.5a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"/><path d="M5 13v8h14v-8M10 21v-5h4v5"/>',
  drop: '<path d="M12 2.7S6 9.3 6 14a6 6 0 0 0 12 0c0-4.7-6-11.3-6-11.3z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>',
  sparkle: '<path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7z"/><path d="M19 16.5c.2 1.2.8 1.8 2 2-1.2.2-1.8.8-2 2-.2-1.2-.8-1.8-2-2 1.2-.2 1.8-.8 2-2z"/>',
  pin: '<path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5-6"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 12 5.6 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
  coin: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .9-3 2.2 0 3 6 1.6 6 4.6 0 1.3-1.3 2.2-3 2.2-1.4 0-2.6-.6-3.1-1.6M12 6v2M12 16v2"/>',
  ribbon: '<circle cx="12" cy="8" r="5.5"/><path d="M8.5 12.3 7 22l5-3 5 3-1.5-9.7"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  swap: '<path d="m9 7-5 5 5 5M15 7l5 5-5 5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  home: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10M10 20v-6h4v6"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
};
const icon = (name, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${P[name] || ''}</svg>`;

const spaceIcon = { school: 'school', medical: 'medical', office: 'office', other: 'store' };
const serviceIcon = { cleaning: 'sparkle', washing: 'drop', recurring: 'calendar' };
const heroSpace = {
  school: { image: '/images/gen/floor-scrub.webp', alt: 'Illustrative photo of a floor scrubber in a school hallway' },
  medical: { image: '/images/gen/exam-room.webp', alt: 'Illustrative photo of a gloved hand wiping a clinic counter' },
  office: { image: '/images/gen/conference.webp', alt: 'Illustrative photo of a tidy conference room' },
  other: { image: '/images/gen/glass.webp', alt: 'Illustrative photo of a squeegee on a glass door' }
};
const exploreInset = {
  school: { image: '/images/gen/floor-scrub.webp', alt: 'Illustrative photo of a school hallway floor being scrubbed' },
  medical: { image: '/images/gen/exam-room.webp', alt: 'Illustrative photo of a clinic counter being wiped' },
  office: { image: '/images/gen/crew-office.webp', alt: 'Illustrative photo of an office being vacuumed at dusk' },
  other: { image: '/images/gen/storefront-wash.webp', alt: 'Illustrative photo of a storefront sidewalk being washed' }
};
const featureCopy = {
  cleaning: [
    'Every building keeps its own hours and its own habits. A school hallway at three in the afternoon asks for something different than a medical waiting room at seven in the morning, or a quiet suite of offices after the last car leaves the lot.',
    'So the plan starts with a conversation about your space: which rooms matter most, when the building is easiest to work in, and what a good Monday morning should look like when your people walk in.'
  ],
  washing: [
    'The walk up to the door is the first thing anyone sees. Sidewalks, entrances and building faces collect the weather, the traffic and the seasons, a little at a time.',
    'Tell us which surfaces you have in mind and we will shape a pressure washing scope around your property, on its own or alongside interior cleaning.'
  ],
  recurring: [
    'Clean is easier to keep than to catch up on. Daily, weekly and bi-weekly service gives your building a steady rhythm that fits your calendar instead of interrupting it.',
    'If you would like the arrangement on paper, service contracts are welcome. And if you are not sure how often you need us, that is a perfectly good place to start the conversation.'
  ]
};

/* ---------- Shared bits ---------- */
const mark = (cls = '') => `<svg class="mark ${cls}" viewBox="0 0 40 48" aria-hidden="true" focusable="false"><path d="M3 46V20a17 17 0 0 1 34 0v26z" fill="var(--terra)"/><path d="M9.5 46V21a10.5 10.5 0 0 1 21 0v25" fill="none" stroke="var(--peach)" stroke-width="1.6"/><path d="M20 15.5c.5 3.6 2.3 5.4 5.9 5.9-3.6.5-5.4 2.3-5.9 5.9-.5-3.6-2.3-5.4-5.9-5.9 3.6-.5 5.4-2.3 5.9-5.9z" fill="var(--cream)"/><path d="M12 40.5c3-1.6 5.4-1.6 8 0s5 1.6 8 0" fill="none" stroke="var(--cream)" stroke-width="1.6" stroke-linecap="round"/></svg>`;
const wordmark = (tag = 'a', extra = '') => `<${tag} class="wordmark" ${tag === 'a' ? 'href="#top" data-scroll' : ''} ${extra}>${mark()}<span class="wm-text"><span class="wm-name">Sanders</span><span class="wm-sub">Signature Clean</span></span></${tag}>`;
let sealCount = 0;
const seal = (cls = '') => {
  const id = `seal-path-${++sealCount}`;
  return `<div class="seal ${cls}" aria-hidden="true"><svg viewBox="0 0 160 160"><defs><path id="${id}" d="M80 80m-63 0a63 63 0 1 1 126 0a63 63 0 1 1-126 0"/></defs><circle cx="80" cy="80" r="78" class="seal-bg"/><circle cx="80" cy="80" r="47" class="seal-ring"/><g class="seal-spin"><text class="seal-text"><textPath href="#${id}" textLength="392" lengthAdjust="spacing">Huntsville, Alabama · Commercial cleaning ·</textPath></text></g><g transform="translate(62 54) scale(.9)">${mark().replace('<svg class="mark "', '<svg x="0" y="0" width="40" height="48" class="mark"')}</g></svg></div>`;
};
const underline = `<svg class="scribble" viewBox="0 0 220 26" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M4 17C46 8 120 4 214 9M30 22c50-6 110-8 168-5"/></svg>`;
const wave = (cls, fill) => `<svg class="wave ${cls}" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path fill="${fill}" d="M0 32c120-22 240-22 360 0s240 22 360 0 240-22 360 0 240 22 360 0v28H0z"/></svg>`;
const quoteFor = f => f.id === 'other' ? 'Quote for your space' : `Quote for a${/^[aeiou]/i.test(f.single) ? 'n' : ''} ${f.single.toLowerCase()}`;
const chip = text => `<span class="chip">${esc(text)}</span>`;
const quoteBtn = (label, attrs = '', cls = 'btn btn-terra') => `<button type="button" class="${cls}" data-quote ${attrs}>${label}</button>`;
const callLink = (cls = 'btn btn-outline') => `<a class="${cls}" href="${B.tel}">${icon('phone')}<span>Call ${B.phone}</span></a>`;
const eyebrow = (text, cls = '') => `<p class="eyebrow ${cls}"><span class="eyebrow-dot" aria-hidden="true"></span>${text}</p>`;

/* ---------- Page markup ---------- */
function header() {
  const links = [['#services', 'Services'], ['#spaces', 'Spaces'], ['#how', 'How it works'], ['#washing', 'Pressure washing'], ['#faq', 'FAQ']];
  return `
  <header class="site-header" id="top">
    <div class="topline"><div class="wrap topline-inner">
      <p>${icon('pin')} <span>Based at ${B.street}, ${B.locality}</span></p>
      <p class="topline-right"><span>${icon('shield')} Licensed &amp; insured</span><span>${icon('tag')} Free quotes</span></p>
    </div></div>
    <div class="nav-bar"><div class="wrap nav-inner">
      ${wordmark()}
      <nav class="main-nav" aria-label="Main">
        <ul>${links.map(([h, l]) => `<li><a href="${h}" data-scroll>${l}</a></li>`).join('')}</ul>
      </nav>
      <div class="nav-actions">
        <a class="nav-phone" href="${B.tel}">${icon('phone')}<span>${B.phone}</span></a>
        ${quoteBtn('Free quote', '', 'btn btn-terra btn-sm')}
        <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">${icon('menu')}</button>
      </div>
    </div></div>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <div class="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Menu">
        <div class="mm-head">${wordmark('span')}<button type="button" class="menu-close" aria-label="Close menu">${icon('close')}</button></div>
        <ul>${links.map(([h, l], i) => `<li><a href="${h}" data-scroll><span class="mm-num">0${i + 1}</span>${l}${icon('arrow')}</a></li>`).join('')}</ul>
        <div class="mm-foot">
          ${quoteBtn(`Start a free quote ${icon('arrow')}`, '', 'btn btn-terra btn-lg full')}
          ${callLink('btn btn-outline btn-lg full')}
          <p class="mm-addr">${icon('pin')} ${B.street}, ${B.locality}</p>
        </div>
      </div>
    </div>
  </header>`;
}

function hero() {
  const first = B.facilities[0];
  return `
  <section class="hero" aria-labelledby="hero-title">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="stamp-line"><span class="stamp-pill">${icon('leaf')} Hometown commercial cleaning</span><span class="stamp-loc">Huntsville, AL</span></p>
        <h1 id="hero-title">Clean buildings, <span class="accent">kept with care.${underline}</span></h1>
        <p class="lead">Sanders Signature Clean looks after schools, medical facilities, office buildings and other commercial spaces across Huntsville, with commercial cleaning and pressure washing customized to how your building actually works.</p>
        <div class="hero-ctas">
          ${quoteBtn(`Get a free quote ${icon('arrow')}`, '', 'btn btn-terra btn-lg')}
          ${callLink('btn btn-outline btn-lg')}
        </div>
        <ul class="cred-row" aria-label="At a glance">
          ${B.credentials.map(c => `<li>${icon('check')}${esc(c)}</li>`).join('')}
        </ul>
      </div>
      <div class="hero-art">
        <figure class="arch arch-hero">
          <img src="/images/property.webp" alt="Illustrative photo of a brick commercial building entrance on a sunny morning" width="1536" height="1024" fetchpriority="high">
          <figcaption class="photo-chip">Illustrative photo</figcaption>
        </figure>
        ${seal('seal-hero')}
        <div class="hero-note"><span class="hero-note-ico">${icon('calendar')}</span><span><strong>Daily · Weekly · Bi-weekly</strong><small>Contracts welcome</small></span></div>
        <svg class="sprig" viewBox="0 0 120 120" aria-hidden="true"><path d="M20 110C40 70 70 40 108 18" /><path d="M48 70c-14-2-22-10-24-22 12 0 22 8 24 22zM64 52c-2-14 4-24 16-28 2 12-4 22-16 28zM80 36c-12-6-16-14-14-24 10 3 15 12 14 24zM40 86c10-10 20-12 30-8-8 9-18 12-30 8z"/></svg>
      </div>
    </div>

    <div class="wrap">
      <div class="space-picker" data-reveal>
        <div class="sp-head">
          <p class="sp-kicker">Let's start with you</p>
          <h2 class="sp-title">What kind of space?</h2>
          <div class="sp-chips" role="radiogroup" aria-label="Choose your kind of space">
            ${B.facilities.map((f, i) => `<button type="button" role="radio" class="sp-chip" data-space-pick="${f.id}" aria-checked="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${icon(spaceIcon[f.id])}<span>${esc(f.name)}</span></button>`).join('')}
          </div>
        </div>
        <figure class="arch arch-small sp-photo">
          <img src="${heroSpace[first.id].image}" alt="${esc(heroSpace[first.id].alt)}" width="1672" height="941" data-sp-img>
        </figure>
        <div class="sp-body" aria-live="polite">
          <p class="sp-name" data-sp-name>${esc(first.name)}</p>
          <p class="sp-blurb" data-sp-blurb>${esc(first.blurb)}</p>
          <p class="sp-talk-label">First thing we'll ask about</p>
          <p class="sp-talk" data-sp-talk>${esc(first.talk[0])}</p>
          <button type="button" class="btn btn-terra" data-quote data-quote-space="${first.id}" data-sp-cta><span data-sp-label>${esc(quoteFor(first))}</span> ${icon('arrow')}</button>
        </div>
      </div>
    </div>
  </section>`;
}

function credentials() {
  const items = [
    ['shield', 'Licensed & insured', 'Peace of mind for whoever signs off on the building.'],
    ['tag', 'Free quotes', 'Ask about your space. The quote costs nothing.'],
    ['sliders', 'Customized plans', 'Scope and schedule shaped around your needs.'],
    ['contract', 'Contracts welcome', 'Prefer it on paper? Service contracts are welcome.']
  ];
  return `
  <section class="creds" aria-label="Credentials">
    <div class="wrap creds-grid">
      ${items.map(([ic, t, d], i) => `<div class="cred" data-reveal style="--reveal-delay:${i * 0.07}s"><span class="stamp-ico">${icon(ic)}</span><div><h3>${esc(t)}</h3><p>${esc(d)}</p></div></div>`).join('')}
    </div>
  </section>`;
}

function neighborly() {
  const facts = [['3', 'schedules', 'Daily · Weekly · Bi-weekly'], ['4', 'kinds of spaces', 'Schools · Medical · Offices · More'], ['1', 'call to start', B.phone], ['$0', 'for a quote', 'Free quotes, always asked for gladly']];
  return `
  <section class="neighborly" aria-labelledby="neighborly-title">
    <div class="wrap">
      <div class="nb-head">
        <div>
          ${eyebrow('A neighborly kind of clean')}
          <h2 id="neighborly-title">The care you'd give your own place, <em>brought to yours.</em></h2>
        </div>
        <p class="nb-lead">Commercial cleaning doesn't have to feel like a faceless contract. Sanders Signature Clean is a Huntsville business, and the whole approach is personal: listen first, plan around your building, then keep it looking the way you want it to look.</p>
      </div>
      <div class="triptych">
        <figure class="tri tri-1" data-reveal><img src="/images/detail.webp" alt="Illustrative photo of a gloved hand with a microfiber cloth" width="1536" height="1024" loading="lazy"><figcaption><span>i.</span> The small details</figcaption></figure>
        <figure class="tri tri-2" data-reveal style="--reveal-delay:.08s"><img src="/images/gen/restroom.webp" alt="Illustrative photo of a spotless commercial restroom" width="1672" height="941" loading="lazy"><figcaption><span>ii.</span> The rooms everyone uses</figcaption></figure>
        <figure class="tri tri-3" data-reveal style="--reveal-delay:.16s"><img src="/images/gen/glass.webp" alt="Illustrative photo of a squeegee cleaning a glass door" width="1672" height="941" loading="lazy"><figcaption><span>iii.</span> The way in</figcaption></figure>
      </div>
      <dl class="facts">
        ${facts.map(([n, l, d]) => `<div class="fact" data-reveal><dt><span class="fact-n">${esc(n)}</span><span class="fact-l">${esc(l)}</span></dt><dd>${esc(d)}</dd></div>`).join('')}
      </dl>
    </div>
  </section>`;
}

function services() {
  return `
  <section class="services" id="services" aria-labelledby="services-title">
    <div class="scallop scallop-top" aria-hidden="true"></div>
    <div class="wrap">
      <div class="section-head center">
        ${eyebrow('What we do', 'center')}
        <h2 id="services-title">Three ways we look after <em>your building</em></h2>
        <p class="lead">Interior cleaning, exterior pressure washing, and a schedule that keeps it all steady. Mix and match: the plan is built around you.</p>
      </div>
      ${B.services.map((s, i) => `
      <article class="feature ${i % 2 ? 'is-flipped' : ''}" data-reveal>
        <figure class="feature-photo arch">
          <img src="${s.image}" alt="${esc(s.alt)}" width="1672" height="941" loading="lazy">
          <span class="feature-badge">${icon(serviceIcon[s.id])}</span>
        </figure>
        <div class="feature-text">
          <p class="feature-no">No. 0${i + 1} <span aria-hidden="true">—</span> ${esc(s.name)}</p>
          <h3>${esc(s.short)}</h3>
          <div class="feature-body">
            <p>${esc(s.body)}</p>
            ${featureCopy[s.id].map(p => `<p>${esc(p)}</p>`).join('')}
          </div>
          <div class="talk-about">
            <p class="talk-label">${icon('chat')} Talk to us about</p>
            <div class="chips">${s.prompts.map(chip).join('')}</div>
          </div>
          <div class="feature-ctas">
            ${quoteBtn(`Ask about ${esc(s.name.toLowerCase())} ${icon('arrow')}`, `data-quote-service="${s.id}"`)}
          </div>
        </div>
      </article>`).join('')}
    </div>
  </section>`;
}

function spaces() {
  const f0 = B.facilities[0];
  return `
  <section class="spaces" id="spaces" aria-labelledby="spaces-title">
    <div class="wrap">
      <div class="spaces-head">
        <div>
          ${eyebrow('Spaces we serve')}
          <h2 id="spaces-title">Every building has <em>its own rhythm.</em></h2>
        </div>
        <p class="lead">Pick a kind of space to see what the first conversation usually covers. Nothing here is a fixed checklist: it's where we start listening.</p>
      </div>
      <div class="explorer">
        <div class="ex-tabs" role="tablist" aria-label="Kinds of space" aria-orientation="vertical">
          ${B.facilities.map((f, i) => `<button type="button" role="tab" class="ex-tab" id="ex-tab-${f.id}" aria-controls="ex-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-ex="${f.id}"><span class="ex-num">0${i + 1}</span><span class="ex-ico">${icon(spaceIcon[f.id])}</span><span class="ex-name">${esc(f.name)}</span>${icon('arrow', 'ex-arrow')}</button>`).join('')}
        </div>
        <div class="ex-panel" id="ex-panel" role="tabpanel" aria-labelledby="ex-tab-${f0.id}" tabindex="0">
          ${spacePanel(f0)}
        </div>
      </div>
    </div>
  </section>`;
}
function spacePanel(f) {
  const inset = exploreInset[f.id];
  return `
    <div class="ex-photos">
      <figure class="arch ex-main"><img src="${f.image}" alt="${esc(f.alt)}" width="1536" height="1024" loading="lazy"></figure>
      <figure class="ex-inset"><img src="${inset.image}" alt="${esc(inset.alt)}" width="1672" height="941" loading="lazy"></figure>
    </div>
    <div class="ex-copy">
      <p class="ex-kicker">${icon(spaceIcon[f.id])} ${esc(f.name)}</p>
      <h3>${esc(f.blurb)}</h3>
      <p class="ex-list-label">What we'll talk through</p>
      <ol class="ex-list">${f.talk.map(t => `<li>${esc(t)}</li>`).join('')}</ol>
      <div class="ex-ctas">
        ${quoteBtn(`<span>${esc(quoteFor(f))}</span> ${icon('arrow')}`, `data-quote-space="${f.id}"`)}
      </div>
    </div>`;
}

function how() {
  return `
  <section class="how" id="how" aria-labelledby="how-title">
    <div class="wrap">
      <div class="section-head center">
        ${eyebrow('How it works', 'center')}
        <h2 id="how-title">Four easy steps, <em>no runaround.</em></h2>
      </div>
      <div class="steps">
        <svg class="steps-line" viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true"><path d="M20 40C120 0 200 80 340 40S560 0 660 40 860 80 980 40"/></svg>
        <ol>
          ${B.steps.map((s, i) => `<li class="step" data-reveal style="--reveal-delay:${i * 0.1}s"><span class="step-no"><span>${i + 1}</span></span><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p></li>`).join('')}
        </ol>
      </div>
      <div class="how-cta">
        <p>Step one is the easy part.</p>
        ${quoteBtn(`Start a free quote ${icon('arrow')}`)}
        ${callLink('btn btn-outline')}
      </div>
    </div>
  </section>`;
}

function schedule() {
  return `
  <section class="schedule" aria-labelledby="schedule-title">
    <div class="wrap schedule-grid">
      <div class="sch-copy">
        ${eyebrow('Choose a rhythm')}
        <h2 id="schedule-title">How often should <em>we stop by?</em></h2>
        <p class="lead">Daily, weekly or bi-weekly, whichever suits your building and your budget. Pick one to see how it tends to fit, then carry it straight into your quote.</p>
        <p class="contracts-stamp"><span>${icon('contract')}</span>Contracts welcome</p>
      </div>
      <div class="sch-card" data-reveal>
        <div class="sch-options" role="radiogroup" aria-label="How often">
          ${B.frequencies.map((f, i) => `<button type="button" role="radio" class="sch-opt" aria-checked="${i === 1}" tabindex="${i === 1 ? 0 : -1}" data-freq="${f.id}"><span class="sch-dot" aria-hidden="true"></span>${esc(f.name)}</button>`).join('')}
        </div>
        <div class="sch-display">
          <div class="sch-cal" aria-hidden="true">
            <div class="sch-cal-head">${['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => `<span>${d}</span>`).join('')}</div>
            <div class="sch-cal-grid" data-cal>${Array.from({ length: 14 }, () => '<span></span>').join('')}</div>
            <p class="sch-cal-note">A sketch of the rhythm, not a fixed timetable. Your days are set together.</p>
          </div>
          <div class="sch-info" aria-live="polite">
            <p class="sch-name" data-freq-name>Weekly</p>
            <p class="sch-note" data-freq-note>${esc(B.frequencies[1].note)}</p>
            <button type="button" class="btn btn-terra" data-quote data-quote-frequency="weekly" data-freq-cta><span>Quote with weekly service</span> ${icon('arrow')}</button>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function washing() {
  const svc = B.services.find(s => s.id === 'washing');
  return `
  <section class="washing" id="washing" aria-labelledby="washing-title">
    ${wave('wave-top', 'var(--pine)')}
    <div class="washing-inner">
      <div class="wrap washing-grid">
        <div class="ba" data-reveal>
          <div class="ba-frame" style="--pos:50%">
            <img class="ba-img ba-after" src="/images/exterior.webp" alt="Illustrative photo of a building exterior after pressure washing" width="1536" height="1024" loading="lazy">
            <div class="ba-before-wrap" aria-hidden="true"><img class="ba-img ba-before" src="/images/exterior.webp" alt="" width="1536" height="1024" loading="lazy"></div>
            <span class="ba-tag ba-tag-before">Before</span>
            <span class="ba-tag ba-tag-after">After</span>
            <div class="ba-handle" role="slider" tabindex="0" aria-label="Before and after comparison" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="50% before, 50% after"><span class="ba-knob">${icon('swap')}</span></div>
          </div>
          <p class="ba-caption">${icon('drop')} Illustrative: the "before" is the same photo, digitally dulled. Drag the handle or use arrow keys.</p>
        </div>
        <div class="washing-copy">
          ${eyebrow('Pressure washing', 'on-dark')}
          <h2 id="washing-title">A fresh first impression, <em>from the outside in.</em></h2>
          <p>${esc(svc.body)} It can stand on its own or ride alongside a regular interior cleaning plan.</p>
          <p class="surf-label">Which surfaces are on your mind? <small>Tap any that apply, they'll carry into your quote.</small></p>
          <div class="surfaces" role="group" aria-label="Surfaces">
            ${svc.prompts.map(p => `<button type="button" class="surf" aria-pressed="false" data-surface="${esc(p)}">${icon('check')}<span>${esc(p)}</span></button>`).join('')}
          </div>
          <div class="washing-ctas">
            ${quoteBtn(`Quote pressure washing ${icon('arrow')}`, 'data-quote-service="washing" data-from-surfaces', 'btn btn-peach btn-lg')}
            <a class="btn btn-ghost btn-lg" href="${B.tel}">${icon('phone')}<span>${B.phone}</span></a>
          </div>
        </div>
      </div>
    </div>
    ${wave('wave-bottom', 'var(--pine)')}
  </section>`;
}

function why() {
  const reasons = [
    ['home', 'Huntsville-based', `Right here at ${B.street}. Your building is in the neighborhood.`],
    ['shield', 'Licensed & insured', 'The paperwork is in order, so you can focus on your own work.'],
    ['coin', 'Affordable', 'A scope that fits your budget, talked through honestly with a free quote.'],
    ['sliders', 'Customized to you', 'No one-size plan: your rooms, your hours, your priorities.'],
    ['ribbon', 'Chamber member', 'Listed with the Huntsville/Madison County Chamber.']
  ];
  return `
  <section class="why" aria-labelledby="why-title">
    <div class="wrap why-grid">
      <div class="mosaic" data-reveal>
        <figure class="m m1 arch"><img src="/images/office.webp" alt="Illustrative photo of a clean office lobby" width="1536" height="1024" loading="lazy"></figure>
        <figure class="m m2"><img src="/images/gen/cart.webp" alt="Illustrative photo of an organized janitorial cart" width="1672" height="941" loading="lazy"></figure>
        <figure class="m m3"><img src="/images/school.webp" alt="Illustrative photo of a clean school corridor" width="1536" height="1024" loading="lazy"></figure>
        <div class="m-stamp" aria-hidden="true"><span>Made in</span><strong>Huntsville</strong><span>Alabama</span></div>
      </div>
      <div class="why-copy">
        ${eyebrow('Why Sanders')}
        <h2 id="why-title">Local, licensed, and <em>easy to talk to.</em></h2>
        <p class="lead">Five plain reasons to pick up the phone, and none of them are slogans.</p>
        <ul class="reasons">
          ${reasons.map(([ic, t, d]) => `<li data-reveal><span class="r-ico">${icon(ic)}</span><div><h3>${esc(t)}</h3><p>${esc(d)}${t === 'Chamber member' ? ` <a href="${B.source}" target="_blank" rel="noopener noreferrer">See the listing ${icon('ext', 'i-sm')}</a>` : ''}</p></div></li>`).join('')}
        </ul>
      </div>
    </div>
  </section>`;
}

function hometown() {
  return `
  <section class="hometown" aria-labelledby="hometown-title">
    <div class="scallop scallop-top scallop-linen" aria-hidden="true"></div>
    <div class="wrap hometown-grid">
      <div class="map-card" data-reveal>
        <svg class="map" viewBox="0 0 560 420" role="img" aria-labelledby="map-title map-desc">
          <title id="map-title">Stylised map illustration</title>
          <desc id="map-desc">A decorative, not-to-scale illustration with a pin marking 2719 Atlantic St SW, Huntsville.</desc>
          <defs>
            <pattern id="map-dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="var(--map-dot)"/></pattern>
          </defs>
          <rect width="560" height="420" fill="var(--map-bg)"/>
          <rect width="560" height="420" fill="url(#map-dots)"/>
          <path class="map-park" d="M30 300c40-30 90-20 120 10s20 80-30 90-110-40-90-100z"/>
          <path class="map-park" d="M400 40c50-10 110 20 120 60s-40 60-90 50-70-100-30-110z"/>
          <path class="map-water" d="M-10 230c60-20 110 10 160-10s90-70 150-60 100 60 160 50 90-40 130-40"/>
          <g class="map-roads-minor"><path d="M0 120h560M0 340h560M110 0v420M220 0v420M440 0v420M330 0v420"/><path d="M0 60l200 140M300 420l260-180"/></g>
          <g class="map-roads"><path d="M0 180c120 10 200 0 280 20s200 30 280 10"/><path d="M270 0c-10 90 10 160 0 230s20 140 10 190"/></g>
          <g class="map-label"><text x="296" y="30">Atlantic St SW</text></g>
          <g class="map-pin" transform="translate(276 196)">
            <circle r="34" class="pin-pulse"/>
            <circle r="18" class="pin-halo"/>
            <path d="M0-48c-14 0-24 10-24 23 0 17 24 37 24 37s24-20 24-37c0-13-10-23-24-23z" class="pin-body"/>
            <circle cy="-26" r="8" class="pin-dot"/>
          </g>
          <g class="map-compass" transform="translate(500 360)"><circle r="26"/><path d="M0-18l6 18-6 18-6-18z"/><text y="-30">N</text></g>
        </svg>
        <p class="map-note">Stylised illustration, not to scale</p>
      </div>
      <div class="hometown-copy">
        ${eyebrow('From our hometown')}
        <h2 id="hometown-title">Rooted in <em>Huntsville, Alabama.</em></h2>
        <p class="lead">Sanders Signature Clean is a local business serving the commercial buildings that keep our city running: the schools, the clinics, the offices and the storefronts down the street.</p>
        <address class="address-card">
          <span class="ac-ico">${icon('pin')}</span>
          <span><span class="ac-label">Find us at</span><strong>${B.street}</strong><span>${B.locality}</span></span>
        </address>
        <div class="contact-pair">
          <a class="contact-tile" href="${B.tel}"><span class="ct-ico">${icon('phone')}</span><span><small>Call or text to talk it through</small><strong>${B.phone}</strong></span></a>
          <a class="contact-tile" href="${B.source}" target="_blank" rel="noopener noreferrer"><span class="ct-ico">${icon('ribbon')}</span><span><small>Huntsville/Madison County</small><strong>Chamber member listing</strong></span></a>
        </div>
      </div>
    </div>
  </section>`;
}

function faq() {
  return `
  <section class="faq" id="faq" aria-labelledby="faq-title">
    <div class="wrap faq-grid">
      <div class="faq-side">
        ${eyebrow('Good questions')}
        <h2 id="faq-title">Ask us <em>anything.</em></h2>
        <p class="lead">The quick answers are here. For everything about your own building, a phone call is the friendliest way.</p>
        <div class="faq-card">
          ${mark('faq-mark')}
          <p>Still wondering about something?</p>
          ${callLink('btn btn-terra full')}
          ${quoteBtn(`Or start a free quote ${icon('arrow')}`, '', 'btn btn-outline full')}
        </div>
      </div>
      <div class="faq-list">
        ${B.faqs.map((f, i) => `
        <details class="faq-item" data-reveal ${i === 0 ? 'open' : ''}>
          <summary><span class="faq-n">${String(i + 1).padStart(2, '0')}</span><span class="faq-q">${esc(f.q)}</span><span class="faq-plus" aria-hidden="true">${icon('plus')}</span></summary>
          <div class="faq-a"><p>${esc(f.a)}</p></div>
        </details>`).join('')}
      </div>
    </div>
  </section>`;
}

function ctaBand() {
  return `
  <section class="cta-band" aria-labelledby="cta-title">
    <div class="wrap">
      <div class="cta-card">
        <div class="cta-copy">
          <p class="cta-kicker">${icon('sparkle')} Free quotes · Licensed &amp; insured</p>
          <h2 id="cta-title">Let's talk about <em>your building.</em></h2>
          <p>Tell us about your space and how often you need us. The quote is free and the conversation is easy.</p>
          <div class="cta-actions">
            ${quoteBtn(`Get a free quote ${icon('arrow')}`, '', 'btn btn-cream btn-lg')}
            <a class="btn btn-ghost btn-lg" href="${B.tel}">${icon('phone')}<span>${B.phone}</span></a>
          </div>
        </div>
        <figure class="cta-photo arch"><img src="/images/gen/crew-office.webp" alt="Illustrative photo of an office being cleaned at dusk" width="1672" height="941" loading="lazy"></figure>
        ${seal('seal-cta')}
      </div>
    </div>
  </section>`;
}

function footer() {
  return `
  <footer class="site-footer">
    ${wave('wave-top', 'var(--pine)')}
    <div class="footer-inner">
      <div class="wrap footer-grid">
        <div class="f-brand">
          ${wordmark('div')}
          <p>Commercial cleaning and pressure washing for schools, medical facilities, office buildings and other commercial spaces in Huntsville, Alabama.</p>
          <p class="f-badges"><span>${icon('shield')} Licensed &amp; insured</span><span>${icon('tag')} Free quotes</span></p>
        </div>
        <div class="f-col">
          <h3>Services</h3>
          <ul>${B.services.map(s => `<li><button type="button" class="f-link" data-quote data-quote-service="${s.id}">${esc(s.name)}</button></li>`).join('')}</ul>
        </div>
        <div class="f-col">
          <h3>Spaces</h3>
          <ul>${B.facilities.map(f => `<li><button type="button" class="f-link" data-quote data-quote-space="${f.id}">${esc(f.name)}</button></li>`).join('')}</ul>
        </div>
        <div class="f-col f-contact">
          <h3>Visit &amp; call</h3>
          <address>${B.street}<br>${B.locality}</address>
          <a class="f-phone" href="${B.tel}">${icon('phone')} ${B.phone}</a>
          <a class="f-ext" href="${B.source}" target="_blank" rel="noopener noreferrer">Chamber member listing ${icon('ext', 'i-sm')}</a>
        </div>
      </div>
      <div class="wrap f-bottom">
        <p>© ${new Date().getFullYear()} ${esc(B.name)}. Proposed design by <a href="https://bluelotuscoding.com" target="_blank" rel="noopener noreferrer">Blue Lotus Coding</a>. Photos are illustrative.</p>
        <a class="f-gallery" href="/" ${new URLSearchParams(location.search).get('preview') === '1' ? 'target="_blank" rel="noopener noreferrer"' : ''}>${icon('back')} All design directions</a>
      </div>
    </div>
  </footer>
  <div class="mobile-bar" aria-label="Quick actions">
    <a class="mb-call" href="${B.tel}">${icon('phone')}<span>Call</span></a>
    <button type="button" class="mb-quote" data-quote>Free quote ${icon('arrow')}</button>
  </div>`;
}

function quoteDialog() {
  return `
  <div class="quote-layer" id="quote-layer" hidden>
    <div class="quote-backdrop" data-quote-close></div>
    <div class="quote-dialog" role="dialog" aria-modal="true" aria-labelledby="quote-title" tabindex="-1">
      <div class="q-head">
        <div class="q-brand">${mark()}<div><p class="q-kicker">Free quote · Demo</p><h2 id="quote-title" tabindex="-1">Let's hear about your building</h2></div></div>
        <button type="button" class="q-close" data-quote-close aria-label="Close quote form">${icon('close')}</button>
      </div>
      <ol class="q-progress" aria-label="Progress"></ol>
      <div class="q-body" id="q-body"></div>
      <div class="q-foot"></div>
    </div>
  </div>`;
}

/* ---------- Render ---------- */
demoBar('Southern Care');
const root = document.getElementById('site');
root.innerHTML = header() + `<main id="main" tabindex="-1">${hero()}${credentials()}${neighborly()}${services()}${spaces()}${how()}${schedule()}${washing()}${why()}${hometown()}${faq()}${ctaBand()}</main>` + footer() + quoteDialog();

/* ---------- Smooth anchors (works inside the sandboxed iframe) ---------- */
function scrollToId(id) {
  const target = id === 'top' ? document.body : document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  e.preventDefault();
  closeMenu(false);
  scrollToId(id);
  if (id === 'main') document.getElementById('main').focus({ preventScroll: true });
});

/* ---------- Sticky header ---------- */
const headerEl = document.querySelector('.site-header');
const onScroll = () => {
  const y = scrollY;
  headerEl.classList.toggle('is-scrolled', y > 40);
  document.body.classList.toggle('show-mobile-bar', y > 520);
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu ---------- */
const menu = document.getElementById('mobile-menu');
const toggle = document.querySelector('.menu-toggle');
function openMenu() {
  menu.hidden = false;
  requestAnimationFrame(() => menu.classList.add('is-open'));
  toggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('no-scroll');
  menu.querySelector('.menu-close').focus();
}
function closeMenu(returnFocus = true) {
  if (menu.hidden) return;
  menu.classList.remove('is-open');
  menu.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => (menu.hidden ? openMenu() : closeMenu()));
menu.querySelector('.menu-close').addEventListener('click', () => closeMenu());
menu.addEventListener('click', e => { if (e.target === menu) closeMenu(); });
menu.addEventListener('keydown', e => {
  if (e.key === 'Escape') { e.stopPropagation(); closeMenu(); }
  if (e.key === 'Tab') trapFocus(e, menu.querySelector('.mobile-menu-panel'));
});
addEventListener('resize', () => { if (innerWidth > 980) closeMenu(false); });

function focusables(container) {
  return [...container.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(el => !el.closest('[hidden]') && el.offsetParent !== null);
}
function trapFocus(e, container) {
  const items = focusables(container);
  if (!items.length) return;
  const first = items[0]; const last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ---------- Radio-group keyboard helper (roving tabindex) ---------- */
function roving(group, selector, onSelect, attr = 'aria-checked') {
  const items = [...group.querySelectorAll(selector)];
  const select = (el, focus) => {
    items.forEach(it => { const on = it === el; it.setAttribute(attr, String(on)); it.tabIndex = on ? 0 : -1; });
    if (focus) el.focus();
    onSelect(el);
  };
  items.forEach((el, i) => {
    el.addEventListener('click', () => select(el, false));
    el.addEventListener('keydown', e => {
      const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (e.key in keys) { e.preventDefault(); select(items[(i + keys[e.key] + items.length) % items.length], true); }
      else if (e.key === 'Home') { e.preventDefault(); select(items[0], true); }
      else if (e.key === 'End') { e.preventDefault(); select(items[items.length - 1], true); }
    });
  });
}

/* ---------- Hero: "What kind of space?" ---------- */
const picker = document.querySelector('.space-picker');
roving(picker.querySelector('.sp-chips'), '.sp-chip', el => {
  const f = B.facilities.find(x => x.id === el.dataset.spacePick);
  const img = picker.querySelector('[data-sp-img]');
  const photo = picker.querySelector('.sp-photo');
  photo.classList.remove('is-swapping'); void photo.offsetWidth; photo.classList.add('is-swapping');
  img.src = heroSpace[f.id].image; img.alt = heroSpace[f.id].alt;
  picker.querySelector('[data-sp-name]').textContent = f.name;
  picker.querySelector('[data-sp-blurb]').textContent = f.blurb;
  picker.querySelector('[data-sp-talk]').textContent = f.talk[0];
  picker.querySelector('[data-sp-label]').textContent = quoteFor(f);
  picker.querySelector('[data-sp-cta]').dataset.quoteSpace = f.id;
});

/* ---------- Spaces explorer (tabs) ---------- */
const exPanel = document.getElementById('ex-panel');
roving(document.querySelector('.ex-tabs'), '.ex-tab', el => {
  const f = B.facilities.find(x => x.id === el.dataset.ex);
  exPanel.setAttribute('aria-labelledby', el.id);
  exPanel.classList.remove('is-swapping'); void exPanel.offsetWidth; exPanel.classList.add('is-swapping');
  exPanel.innerHTML = spacePanel(f);
}, 'aria-selected');

/* ---------- Schedule chooser ---------- */
const calPattern = { daily: [0, 1, 2, 3, 4, 7, 8, 9, 10, 11], weekly: [1, 8], biweekly: [1], discuss: [] };
const schCard = document.querySelector('.sch-card');
function paintSchedule(id) {
  const f = B.frequencies.find(x => x.id === id);
  schCard.dataset.freq = id;
  schCard.querySelector('[data-freq-name]').textContent = f.name;
  schCard.querySelector('[data-freq-note]').textContent = f.note;
  const cta = schCard.querySelector('[data-freq-cta]');
  cta.dataset.quoteFrequency = id;
  cta.innerHTML = id === 'discuss' ? `<span>Talk it through in a quote</span> ${icon('arrow')}` : `<span>Quote with ${esc(f.name.toLowerCase())} service</span> ${icon('arrow')}`;
  [...schCard.querySelectorAll('[data-cal] span')].forEach((cell, i) => {
    cell.className = calPattern[id].includes(i) ? 'on' : (id === 'discuss' && (i === 2 || i === 9) ? 'maybe' : '');
    cell.style.setProperty('--d', `${i * 0.025}s`);
  });
}
roving(schCard.querySelector('.sch-options'), '.sch-opt', el => paintSchedule(el.dataset.freq));
paintSchedule('weekly');

/* ---------- Surfaces (pressure washing) ---------- */
const chosenSurfaces = new Set();
document.querySelectorAll('.surf').forEach(btn => btn.addEventListener('click', () => {
  const on = btn.getAttribute('aria-pressed') !== 'true';
  btn.setAttribute('aria-pressed', String(on));
  on ? chosenSurfaces.add(btn.dataset.surface) : chosenSurfaces.delete(btn.dataset.surface);
}));

/* ---------- Before / after slider ---------- */
const baFrame = document.querySelector('.ba-frame');
const baHandle = baFrame.querySelector('.ba-handle');
function setBA(v) {
  const pos = Math.max(0, Math.min(100, Math.round(v)));
  baFrame.style.setProperty('--pos', `${pos}%`);
  baHandle.setAttribute('aria-valuenow', String(pos));
  baHandle.setAttribute('aria-valuetext', `${pos}% before, ${100 - pos}% after`);
}
const fromPointer = e => { const r = baFrame.getBoundingClientRect(); setBA(((e.clientX - r.left) / r.width) * 100); };
baFrame.addEventListener('pointerdown', e => { baFrame.setPointerCapture(e.pointerId); baFrame.classList.add('is-dragging'); fromPointer(e); });
baFrame.addEventListener('pointermove', e => { if (baFrame.hasPointerCapture(e.pointerId)) fromPointer(e); });
baFrame.addEventListener('pointerup', e => { baFrame.releasePointerCapture(e.pointerId); baFrame.classList.remove('is-dragging'); });
baHandle.addEventListener('keydown', e => {
  const now = Number(baHandle.getAttribute('aria-valuenow'));
  const map = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5, PageDown: -20, PageUp: 20 };
  if (e.key in map) { e.preventDefault(); setBA(now + map[e.key]); }
  if (e.key === 'Home') { e.preventDefault(); setBA(0); }
  if (e.key === 'End') { e.preventDefault(); setBA(100); }
});

/* ---------- Quote flow ---------- */
const STEPS = ['Service', 'Space', 'Schedule', 'Details', 'Review'];
const quote = { services: new Set(), space: '', frequency: '', name: '', company: '', email: '', phone: '', notes: '' };
let step = 0; let lastFocus = null; let returnToReview = false; let errors = {};
const layer = document.getElementById('quote-layer');
const dialog = layer.querySelector('.quote-dialog');
const qBody = document.getElementById('q-body');
const qFoot = layer.querySelector('.q-foot');
const qProgress = layer.querySelector('.q-progress');

function openQuote(trigger) {
  lastFocus = trigger || document.activeElement;
  const d = trigger?.dataset || {};
  if (d.quoteService) quote.services.add(d.quoteService);
  if (d.quoteSpace) quote.space = d.quoteSpace;
  if (d.quoteFrequency) quote.frequency = d.quoteFrequency;
  if (trigger && 'fromSurfaces' in d && chosenSurfaces.size) {
    const line = `Surfaces: ${[...chosenSurfaces].join(', ')}`;
    if (!quote.notes.includes(line)) quote.notes = [quote.notes.trim(), line].filter(Boolean).join('\n');
  }
  // Jump to the first step still needing an answer, so prefilled steps are already done.
  step = !quote.services.size ? 0 : !quote.space ? 1 : !quote.frequency ? 2 : 3;
  if (d.quoteService && !d.quoteSpace) step = Math.min(step, 1);
  if (step > 3) step = 3;
  errors = {}; returnToReview = false;
  closeMenu(false);
  layer.hidden = false;
  document.body.classList.add('no-scroll');
  requestAnimationFrame(() => layer.classList.add('is-open'));
  renderStep(true);
}
function closeQuote() {
  if (layer.hidden) return;
  layer.classList.remove('is-open');
  layer.hidden = true;
  document.body.classList.remove('no-scroll');
  if (step === 5) resetQuote();
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
}
function resetQuote() {
  quote.services.clear(); quote.space = ''; quote.frequency = '';
  ['name', 'company', 'email', 'phone', 'notes'].forEach(k => { quote[k] = ''; });
  step = 0;
}
document.addEventListener('click', e => {
  const t = e.target.closest('[data-quote]');
  if (t) { e.preventDefault(); openQuote(t); }
  if (e.target.closest('[data-quote-close]')) closeQuote();
});
layer.addEventListener('keydown', e => {
  if (e.key === 'Escape') { e.preventDefault(); closeQuote(); }
  if (e.key === 'Tab') trapFocus(e, dialog);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) closeMenu(); });

const svcName = id => B.services.find(s => s.id === id)?.name || id;
const spaceName = id => B.facilities.find(f => f.id === id)?.name || '';
const freqName = id => B.frequencies.find(f => f.id === id)?.name || '';

function renderProgress() {
  qProgress.innerHTML = STEPS.map((s, i) => {
    const state = step === 5 || i < step ? 'done' : i === step ? 'current' : '';
    return `<li class="${state}" ${i === step ? 'aria-current="step"' : ''}><span class="qp-dot">${state === 'done' ? icon('check') : i + 1}</span><span class="qp-label">${s}</span></li>`;
  }).join('');
  qProgress.style.setProperty('--progress', `${Math.min(step, 4) / 4 * 100}%`);
}

function optionCard({ type, name, value, checked, title, desc, ic }) {
  return `<label class="q-opt"><input type="${type}" name="${name}" value="${value}" ${checked ? 'checked' : ''}><span class="q-opt-card"><span class="q-opt-ico">${icon(ic)}</span><span class="q-opt-text"><strong>${esc(title)}</strong>${desc ? `<small>${esc(desc)}</small>` : ''}</span><span class="q-opt-check" aria-hidden="true">${icon('check')}</span></span></label>`;
}
const errorMsg = (key, text) => `<p class="q-error" id="err-${key}" ${errors[key] ? '' : 'hidden'}>${icon('close', 'i-sm')} ${esc(text)}</p>`;

function renderStep(initial = false) {
  renderProgress();
  dialog.dataset.step = step;
  let body = ''; let foot = '';
  const backBtn = step > 0 ? `<button type="button" class="btn btn-outline" data-q-back>${icon('back')} Back</button>` : `<button type="button" class="btn btn-outline" data-quote-close>Cancel</button>`;
  const nextBtn = label => `<button type="button" class="btn btn-terra" data-q-next>${label} ${icon('arrow')}</button>`;
  if (step === 0) {
    body = `<fieldset class="q-fieldset" ${errors.services ? 'aria-describedby="err-services"' : ''}><legend class="q-legend"><span class="q-step-no">Step 1 of 5</span>What can we help with?<small>Choose as many as you like.</small></legend>
      <div class="q-opts">${B.services.map(s => optionCard({ type: 'checkbox', name: 'services', value: s.id, checked: quote.services.has(s.id), title: s.name, desc: s.short, ic: serviceIcon[s.id] })).join('')}</div>
      ${errorMsg('services', 'Pick at least one service to continue.')}</fieldset>`;
  } else if (step === 1) {
    body = `<fieldset class="q-fieldset" ${errors.space ? 'aria-describedby="err-space"' : ''}><legend class="q-legend"><span class="q-step-no">Step 2 of 5</span>What kind of space is it?</legend>
      <div class="q-opts q-opts-2">${B.facilities.map(f => optionCard({ type: 'radio', name: 'space', value: f.id, checked: quote.space === f.id, title: f.name, desc: f.blurb, ic: spaceIcon[f.id] })).join('')}</div>
      ${errorMsg('space', 'Choose the kind of space to continue.')}</fieldset>`;
  } else if (step === 2) {
    body = `<fieldset class="q-fieldset" ${errors.frequency ? 'aria-describedby="err-frequency"' : ''}><legend class="q-legend"><span class="q-step-no">Step 3 of 5</span>How often would you like service?<small>Contracts welcome.</small></legend>
      <div class="q-opts q-opts-2">${B.frequencies.map(f => optionCard({ type: 'radio', name: 'frequency', value: f.id, checked: quote.frequency === f.id, title: f.name, desc: f.note, ic: f.id === 'discuss' ? 'chat' : 'calendar' })).join('')}</div>
      ${errorMsg('frequency', 'Choose how often, or pick "Not sure yet".')}</fieldset>`;
  } else if (step === 3) {
    const field = (key, label, type, req, auto, extra = '') => `
      <div class="q-field ${errors[key] ? 'has-error' : ''}">
        <label for="q-${key}">${label}${req ? ' <span class="req" aria-hidden="true">*</span>' : ' <span class="opt">(optional)</span>'}</label>
        <input id="q-${key}" name="${key}" type="${type}" autocomplete="${auto}" value="${esc(quote[key])}" ${req ? 'required aria-required="true"' : ''} ${errors[key] ? `aria-invalid="true" aria-describedby="err-${key}"` : ''} ${extra}>
        ${errors[key] ? `<p class="q-error" id="err-${key}">${icon('close', 'i-sm')} ${esc(errors[key])}</p>` : ''}
      </div>`;
    body = `<form class="q-form" id="q-form" novalidate><p class="q-legend"><span class="q-step-no">Step 4 of 5</span>How can we reach you?<small>Fields marked * are required. This is a demo: nothing is sent.</small></p>
      <div class="q-grid">
        ${field('name', 'Your name', 'text', true, 'name')}
        ${field('company', 'Company or building', 'text', false, 'organization')}
        ${field('email', 'Email', 'email', true, 'email', 'inputmode="email"')}
        ${field('phone', 'Phone', 'tel', true, 'tel', 'inputmode="tel"')}
        <div class="q-field q-wide"><label for="q-notes">Anything we should know? <span class="opt">(optional)</span></label><textarea id="q-notes" name="notes" rows="3" placeholder="Rooms, surfaces, timing, access…">${esc(quote.notes)}</textarea></div>
      </div></form>`;
  } else if (step === 4) {
    const row = (label, value, to) => `<div class="q-review-row"><dt>${label}</dt><dd>${value || '<span class="muted">Not given</span>'}</dd><dd class="q-edit"><button type="button" class="text-btn" data-q-edit="${to}" aria-label="Edit ${label}">${icon('edit', 'i-sm')} Edit</button></dd></div>`;
    body = `<div class="q-review"><p class="q-legend"><span class="q-step-no">Step 5 of 5</span>Does this look right?<small>Check the details, edit anything, then send the demo request.</small></p>
      <dl class="q-review-list">
        ${row('Service', [...quote.services].map(s => esc(svcName(s))).join(', '), 0)}
        ${row('Space', esc(spaceName(quote.space)), 1)}
        ${row('Schedule', esc(freqName(quote.frequency)), 2)}
        ${row('Contact', [quote.name, quote.company, quote.email, quote.phone].filter(Boolean).map(esc).join('<br>'), 3)}
        ${row('Notes', esc(quote.notes).replace(/\n/g, '<br>'), 3)}
      </dl></div>`;
  } else {
    body = `<div class="q-done">${seal('seal-done')}<h3>Demo complete — nothing was sent.</h3><p>Thanks for trying the Southern Care concept${quote.name ? `, ${esc(quote.name.split(' ')[0])}` : ''}. To request a real quote, call <a href="${B.tel}">${B.phone}</a>.</p></div>`;
  }
  if (step < 3) foot = backBtn + nextBtn(returnToReview ? 'Save & review' : 'Next');
  else if (step === 3) foot = backBtn + nextBtn(returnToReview ? 'Back to review' : 'Review');
  else if (step === 4) foot = backBtn + `<button type="button" class="btn btn-terra" data-q-submit>Send demo request ${icon('arrow')}</button>`;
  else foot = `<a class="btn btn-outline" href="${B.tel}">${icon('phone')} Call ${B.phone}</a><button type="button" class="btn btn-terra" data-quote-close>Back to the site</button>`;
  qBody.innerHTML = body;
  qFoot.innerHTML = foot;
  qBody.scrollTop = 0;
  if (step === 3) qBody.querySelector('#q-form').addEventListener('submit', e => { e.preventDefault(); next(); });
  const firstErr = qBody.querySelector('[aria-invalid="true"]');
  if (firstErr) firstErr.focus();
  else if (initial || step === 5) layer.querySelector('#quote-title').focus();
  else (qBody.querySelector('input:checked, input, .q-review-list button') || layer.querySelector('#quote-title')).focus();
}

function collect() {
  if (step === 0) { quote.services = new Set([...qBody.querySelectorAll('input[name=services]:checked')].map(i => i.value)); }
  if (step === 1) { quote.space = qBody.querySelector('input[name=space]:checked')?.value || ''; }
  if (step === 2) { quote.frequency = qBody.querySelector('input[name=frequency]:checked')?.value || ''; }
  if (step === 3) ['name', 'company', 'email', 'phone', 'notes'].forEach(k => { quote[k] = qBody.querySelector(`[name=${k}]`).value.trim(); });
}
function validate() {
  errors = {};
  if (step === 0 && !quote.services.size) errors.services = true;
  if (step === 1 && !quote.space) errors.space = true;
  if (step === 2 && !quote.frequency) errors.frequency = true;
  if (step === 3) {
    if (!quote.name) errors.name = 'Please tell us your name.';
    if (!quote.email) errors.email = 'Please add an email address.';
    else if (!validEmail(quote.email)) errors.email = 'That email doesn’t look quite right. Try name@company.com.';
    if (!quote.phone) errors.phone = 'Please add a phone number.';
    else if (!validPhone(quote.phone)) errors.phone = 'Please include a 10-digit phone number.';
  }
  return !Object.keys(errors).length;
}
function next() {
  collect();
  if (!validate()) {
    renderStep();
    if (step < 3) { const err = qBody.querySelector('.q-error'); err.setAttribute('role', 'alert'); qBody.querySelector('input')?.focus(); }
    return;
  }
  step = returnToReview ? 4 : step + 1;
  if (step === 4) returnToReview = false;
  renderStep();
}
qFoot.addEventListener('click', e => {
  if (e.target.closest('[data-q-next]')) next();
  else if (e.target.closest('[data-q-back]')) { collect(); errors = {}; step = returnToReview ? 4 : step - 1; returnToReview = false; renderStep(); }
  else if (e.target.closest('[data-q-submit]')) { step = 5; renderStep(); toast('Demo only: nothing was sent.'); }
});
qBody.addEventListener('click', e => {
  const ed = e.target.closest('[data-q-edit]');
  if (ed) { step = Number(ed.dataset.qEdit); returnToReview = true; errors = {}; renderStep(); }
});
qBody.addEventListener('change', e => {
  if (e.target.matches('input[type=checkbox], input[type=radio]') && errors[e.target.name]) {
    errors = {}; const err = qBody.querySelector('.q-error'); if (err) err.hidden = true;
  }
});

/* ---------- Reveal ---------- */
reveal();
document.documentElement.classList.toggle('reduce-motion', reduceMotion);
