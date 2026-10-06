// 04 — Precision: bold industrial B2B. A contractor's spec sheet for Sanders Signature Clean.
import { business as B, demoBar, esc, validEmail, validPhone, toast, reveal } from '../../shared/kit.js';
import './styles.css';

/* ---------- Icons (24 viewBox, stroke) ---------- */
const P = {
  spray: '<path d="M8 3h6v4H8z"/><path d="M14 5h3"/><path d="M19.5 3v.01M21 5v.01M19.5 7v.01"/><path d="M9 7v2l-2 3v9h9v-9l-2-3V7"/><path d="M7 15h9"/>',
  wash: '<path d="M12 3s5 5.6 5 9.6a5 5 0 0 1-10 0C7 8.6 12 3 12 3z"/><path d="M5 15s-2 2.2-2 3.6a2 2 0 0 0 4 0C7 17.2 5 15 5 15z"/><path d="M10 13.5a2 2 0 0 0 2 2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M7.5 13.5h3v3h-3z"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  sliders: '<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><rect x="13" y="4" width="4" height="4"/><rect x="7" y="10" width="4" height="4"/><rect x="15" y="16" width="4" height="4"/>',
  contract: '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4"/><path d="M9 11h6M9 14.5h3"/><path d="M12.5 18l1.5 1.5 3-3"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1"/>',
  arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  school: '<path d="M2.5 21h19"/><path d="M5 21V10l7-4 7 4v11"/><path d="M12 6V2.5h4v2.5h-4"/><path d="M10 21v-5h4v5"/><path d="M8 12.5h1.5M14.5 12.5H16"/>',
  medical: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M12 7.5v9M7.5 12h9"/>',
  office: '<path d="M4 21V3h11v18"/><path d="M15 9h5v12"/><path d="M2.5 21h19"/><path d="M7.5 7h4M7.5 11h4M7.5 15h4M17.5 13v.01M17.5 17v.01"/>',
  store: '<path d="M4 10v11h16V10"/><path d="M3 10l2-6h14l2 6z"/><path d="M10 21v-6h4v6"/><path d="M3 10h18"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  badge: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14l-1.5 7 5-2.5 5 2.5-1.5-7"/><path d="M9.8 9l1.5 1.5 3-3"/>',
  dollar: '<path d="M12 3v18"/><path d="M16.5 7.5c-.8-1.5-2.4-2-4.5-2-2.5 0-4 1.2-4 3s1.5 2.5 4 3 4.5 1.3 4.5 3.3-1.8 3.2-4.5 3.2c-2.2 0-3.9-.7-4.7-2.2"/>',
  drag: '<path d="M9 6l-6 6 6 6M15 6l6 6-6 6"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
  info: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M12 11v6M12 7.5v.01"/>'
};
const icon = (name, cls = 'ic') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true" focusable="false">${P[name]}</svg>`;

const MARK = `<svg class="mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><rect x="1.5" y="1.5" width="37" height="37" fill="#ffd444" stroke="#15181a" stroke-width="3"/><path d="M10 9H30V14H15V18H30V31H10V26H25V22H10Z" fill="#15181a"/><path d="M30.5 38.5L38.5 30.5V38.5Z" fill="#15181a"/></svg>`;

const svcIcon = { cleaning: 'spray', washing: 'wash', recurring: 'calendar' };
const svcShort = { cleaning: 'Cleaning', washing: 'Pressure washing', recurring: 'Scheduled' };
const svcType = { cleaning: 'Interior', washing: 'Exterior', recurring: 'Routine' };
const spIcon = { school: 'school', medical: 'medical', office: 'office', other: 'store' };
const freqShort = { daily: 'Daily', weekly: 'Weekly', biweekly: 'Bi-weekly', discuss: 'Not sure' };
const nav = [['services', 'Services'], ['spaces', 'Spaces'], ['how', 'How it works'], ['washing', 'Pressure washing'], ['faq', 'FAQ']];
const pad = n => String(n).padStart(2, '0');
const svc = id => B.services.find(s => s.id === id);
const fac = id => B.facilities.find(f => f.id === id);
const frq = id => B.frequencies.find(f => f.id === id);

/* ---------- Markup ---------- */
const header = () => `
<header class="hdr" id="top">
  <div class="wrap hdr-in">
    <a class="brand" href="#main" aria-label="Sanders Signature Clean, back to top">${MARK}<span class="brand-txt"><b>Sanders</b><small>Signature Clean</small></span></a>
    <nav class="nav" aria-label="Primary">${nav.map(([id, label]) => `<a href="#${id}" data-nav="${id}">${label}</a>`).join('')}</nav>
    <a class="hdr-phone" href="${B.tel}">${icon('phone')}<span>${B.phone}</span></a>
    <button class="btn btn-sm hdr-cta" type="button" data-quote>Free quote</button>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mnav" aria-label="Open menu"><span class="menu-lines"></span></button>
  </div>
  <div class="mnav" id="mnav" hidden>
    <nav class="wrap mnav-in" aria-label="Mobile">
      ${nav.map(([id, label], i) => `<a href="#${id}"><span>${pad(i + 1)}</span>${label}</a>`).join('')}
      <div class="mnav-actions">
        <a class="btn btn-dark btn-block" href="${B.tel}">${icon('phone')} Call ${B.phone}</a>
        <button class="btn btn-block" type="button" data-quote>Start a free quote ${icon('arrow')}</button>
      </div>
    </nav>
  </div>
</header>`;

const hero = () => `
<section class="hero" id="main" aria-labelledby="hero-h">
  <div class="hero-media">
    <img src="/images/gen/storefront-wash.webp" alt="Illustrative photo of a worker pressure washing the sidewalk in front of a brick storefront" fetchpriority="high">
  </div>
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="wrap hero-in">
    <div class="hero-copy">
      <p class="spec-row"><span class="spec-code">SSC</span><span>Commercial cleaning + pressure washing</span><span>Huntsville, AL</span></p>
      <h1 id="hero-h"><span>Cleaned inside.</span><span class="y">Washed outside.</span></h1>
      <p class="hero-lead">Commercial cleaning and pressure washing for Huntsville schools, medical facilities, office buildings and other commercial spaces. Scoped to your building. Daily, weekly or bi-weekly.</p>
      <div class="hero-ctas">
        <button class="btn btn-lg" type="button" data-quote>Start a free quote ${icon('arrow')}</button>
        <a class="btn btn-lg btn-line" href="${B.tel}">${icon('phone')} ${B.phone}</a>
      </div>
      <ul class="hero-creds" aria-label="Credentials">
        ${['Licensed & insured', 'Free quotes', 'Customized plans', 'Contracts welcome'].map(c => `<li>${icon('check')}${c}</li>`).join('')}
      </ul>
    </div>
    ${planner()}
  </div>
  <p class="photo-chip hero-chip">${icon('info')} Fig. 01 · Illustrative photo</p>
</section>`;

const planner = () => `
<div class="planner" role="region" aria-labelledby="pl-h">
  <div class="pl-head"><span class="pl-led" aria-hidden="true"></span><h2 id="pl-h">Service planner</h2><span class="pl-code">SP-01 / Rev A</span></div>
  <div class="hazard pl-hazard" aria-hidden="true"></div>
  <div class="pl-body">
    <fieldset class="pl-field">
      <legend><span class="pl-n">01</span>Service <em>Pick one or more</em></legend>
      <div class="pl-tiles">${B.services.map(s => `<button type="button" class="pl-tile" data-pl-svc="${s.id}" aria-pressed="${s.id === 'cleaning'}">${icon(svcIcon[s.id])}<span>${svcShort[s.id]}</span><i class="pl-tick">${icon('check')}</i></button>`).join('')}</div>
    </fieldset>
    <div class="pl-field">
      <label class="pl-legend" for="pl-space"><span class="pl-n">02</span>Space</label>
      <div class="select"><select id="pl-space">${B.facilities.map(f => `<option value="${f.id}"${f.id === 'office' ? ' selected' : ''}>${f.name}</option>`).join('')}</select></div>
    </div>
    <fieldset class="pl-field">
      <legend><span class="pl-n">03</span>Rhythm</legend>
      <div class="seg">${B.frequencies.map(f => `<label class="seg-opt"><input type="radio" name="pl-freq" value="${f.id}"${f.id === 'weekly' ? ' checked' : ''}><span>${freqShort[f.id]}</span></label>`).join('')}</div>
    </fieldset>
    <div class="pl-sum" aria-live="polite">
      <p class="pl-sum-h"><span>Your starting point</span><span>$0 quote</span></p>
      <dl id="pl-dl"></dl>
      <p class="pl-note" id="pl-note"></p>
    </div>
    <button class="btn btn-block" type="button" id="pl-go">Build my free quote ${icon('arrow')}</button>
  </div>
</div>`;

const tickerItems = ['Licensed & insured', 'Free quotes', 'Customized plans', 'Contracts welcome', 'Daily · Weekly · Bi-weekly', 'Commercial cleaning', 'Pressure washing', 'Huntsville, AL'];
const ticker = () => `
<div class="ticker" role="region" aria-label="Credentials at a glance">
  <div class="ticker-track">
    <ul>${tickerItems.map(t => `<li>${t}</li>`).join('')}</ul>
    <ul aria-hidden="true">${tickerItems.map(t => `<li>${t}</li>`).join('')}</ul>
  </div>
</div>`;

const creds = [
  { icon: 'shield', t: 'Licensed & insured', d: 'Sanders Signature Clean is licensed and insured.' },
  { icon: 'receipt', t: 'Free quotes', d: 'Call or start a request online. The quote costs nothing.' },
  { icon: 'sliders', t: 'Customized plans', d: 'A scope built around what your space actually needs.' },
  { icon: 'contract', t: 'Contracts welcome', d: 'Daily, weekly or bi-weekly service on a service contract.' }
];
const facts = [
  ['3', 'Schedules', 'Daily · Weekly · Bi-weekly'],
  ['4', 'Kinds of space', 'Schools · Medical · Offices · Other'],
  ['2', 'Core services', 'Commercial cleaning + pressure washing'],
  ['$0', 'Quote', `By phone at ${B.phone} or online`]
];
const basics = () => `
<section class="sec basics" aria-labelledby="basics-h">
  <div class="wrap">
    <div class="basics-grid">
      <header class="sec-head" data-reveal>
        <p class="kicker"><span>00</span>Operating basics</p>
        <h2 id="basics-h">The spec sheet, up&nbsp;front.</h2>
        <p class="sec-lead">Before the first call, here is how Sanders Signature Clean works. Four credentials, stated plainly.</p>
        <a class="link-arrow" href="#services">See the capability matrix ${icon('arrow')}</a>
      </header>
      <ul class="cred-grid">
        ${creds.map((c, i) => `<li class="cred" data-reveal style="--reveal-delay:${i * 70}ms"><span class="cred-ic">${icon(c.icon)}</span><span class="cred-code">CR-${pad(i + 1)}</span><h3>${c.t}</h3><p>${c.d}</p></li>`).join('')}
      </ul>
    </div>
    <dl class="facts" data-reveal>
      ${facts.map(([n, l, d]) => `<div class="fact"><dt><span class="fact-n">${n}</span><span class="fact-l">${l}</span></dt><dd>${d}</dd></div>`).join('')}
    </dl>
  </div>
</section>`;

const services = () => `
<section class="sec services" id="services" aria-labelledby="svc-h">
  <div class="wrap">
    <header class="sec-head sec-head-row" data-reveal>
      <div><p class="kicker"><span>01</span>Services</p><h2 id="svc-h">Capability matrix.</h2></div>
      <p class="sec-lead">Three lines of work, each scoped to your building. Open a row for the detail, then quote exactly that.</p>
    </header>
    <div class="mx" data-reveal>
      <div class="mx-head" aria-hidden="true"><span>Code</span><span>Service</span><span>Scope</span><span>Type</span><span>Detail</span></div>
      ${B.services.map((s, i) => `
      <article class="mx-row${i === 0 ? ' is-open' : ''}">
        <h3 class="mx-h"><button class="mx-btn" type="button" id="mx-b-${s.id}" aria-expanded="${i === 0}" aria-controls="mx-p-${s.id}">
          <span class="mx-code">SVC-${pad(i + 1)}</span>
          <span class="mx-name"><span class="mx-ic">${icon(svcIcon[s.id])}</span><span>${s.name}</span></span>
          <span class="mx-short">${s.short}</span>
          <span class="mx-type"><span>${svcType[s.id]}</span></span>
          <span class="mx-tog">${icon('plus')}</span>
        </button></h3>
        <div class="mx-panel" id="mx-p-${s.id}" role="region" aria-labelledby="mx-b-${s.id}"${i === 0 ? '' : ' hidden'}>
          <div class="mx-panel-in">
            <figure class="mx-fig"><img src="${s.image}" alt="${s.alt}" loading="lazy" width="640" height="480"><figcaption class="photo-chip">Fig. ${pad(i + 2)} · Illustrative photo</figcaption><span class="fig-code">SVC-${pad(i + 1)}</span></figure>
            <div class="mx-body">
              <p class="mx-lede">${s.body}</p>
              <p class="mini-label">Talk to us about</p>
              <ul class="chips">${s.prompts.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>
            <div class="mx-act">
              <dl class="spec-dl">
                <div><dt>Type</dt><dd>${svcType[s.id]}</dd></div>
                <div><dt>Scope</dt><dd>Customized</dd></div>
                <div><dt>Contracts</dt><dd>Welcome</dd></div>
                <div><dt>Quote</dt><dd>Free</dd></div>
              </dl>
              <button class="btn btn-block" type="button" data-quote data-service="${s.id}">Quote SVC-${pad(i + 1)} ${icon('arrow')}</button>
              <a class="mx-call" href="${B.tel}">${icon('phone')} or call ${B.phone}</a>
            </div>
          </div>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>`;

const spaces = () => `
<section class="sec dark spaces" id="spaces" aria-labelledby="sp-h">
  <div class="wrap">
    <header class="sec-head sec-head-row" data-reveal>
      <div><p class="kicker"><span>02</span>Spaces we serve</p><h2 id="sp-h">Four kinds of space. <span class="y">One spec sheet each.</span></h2></div>
      <p class="sec-lead">Pick a facility type to see what a plan for it starts from, and what we will talk through before quoting.</p>
    </header>
    <div class="sx" data-reveal>
      <div class="sx-tabs" role="tablist" aria-label="Spaces we serve" aria-orientation="vertical">
        ${B.facilities.map((f, i) => `<button class="sx-tab" role="tab" type="button" id="sx-t-${f.id}" aria-controls="sx-p-${f.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"><span class="sx-code">SP-${pad(i + 1)}</span><span class="sx-ic">${icon(spIcon[f.id])}</span><span class="sx-name">${f.name}</span><span class="sx-arrow">${icon('arrow')}</span></button>`).join('')}
      </div>
      ${B.facilities.map((f, i) => `
      <div class="sx-panel" role="tabpanel" id="sx-p-${f.id}" aria-labelledby="sx-t-${f.id}" tabindex="0"${i === 0 ? '' : ' hidden'}>
        <figure class="sx-fig"><img src="${f.image}" alt="${f.alt}" loading="lazy" width="800" height="600"><span class="stencil" aria-hidden="true">${f.name.split(' ')[0]}</span><figcaption class="photo-chip">Illustrative photo</figcaption></figure>
        <div class="sx-spec">
          <div class="sx-spec-head"><span>Spec sheet</span><span>SP-${pad(i + 1)} / ${f.single}</span></div>
          <h3 class="sx-title">${f.name}</h3>
          <p class="sx-blurb">${f.blurb}</p>
          <table class="sx-table"><tbody>
            <tr><th scope="row">To discuss</th><td>Interior cleaning · Exterior washing</td></tr>
            <tr><th scope="row">Rhythm</th><td>Daily · Weekly · Bi-weekly</td></tr>
            <tr><th scope="row">Contracts</th><td>Welcome</td></tr>
            <tr><th scope="row">Quote</th><td>Free</td></tr>
          </tbody></table>
          <p class="mini-label">What we'll talk through</p>
          <ol class="sx-talk">${f.talk.map((t, j) => `<li><span>${pad(j + 1)}</span>${t}</li>`).join('')}</ol>
          <button class="btn" type="button" data-quote data-space="${f.id}">Quote for ${f.name.toLowerCase()} ${icon('arrow')}</button>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>`;

const process = () => `
<section class="sec process" id="how" aria-labelledby="how-h">
  <div class="wrap">
    <header class="sec-head sec-head-row" data-reveal>
      <div><p class="kicker"><span>03</span>How it works</p><h2 id="how-h">Four steps, call to routine.</h2></div>
      <p class="sec-lead">A straight line from first call to a settled schedule. Every step is a conversation, not a sales script.</p>
    </header>
    <ol class="steps">
      ${B.steps.map((s, i) => `
      <li class="step" data-reveal style="--reveal-delay:${i * 90}ms">
        <span class="step-num" aria-hidden="true">${pad(i + 1)}</span>
        <span class="step-node" aria-hidden="true"></span>
        <p class="step-code">Step ${pad(i + 1)} / 04</p>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
        ${i === 0 ? `<a class="step-link" href="${B.tel}">${icon('phone')} Call now</a>` : ''}
        ${i === 2 ? `<button class="step-link" type="button" data-quote>${icon('arrow')} Start a free quote</button>` : ''}
      </li>`).join('')}
    </ol>
  </div>
</section>`;

const schedule = () => `
<section class="sec schedule" id="schedule" aria-labelledby="sch-h">
  <div class="wrap">
    <header class="sec-head sec-head-row" data-reveal>
      <div><p class="kicker"><span>04</span>Schedule</p><h2 id="sch-h">Pick a rhythm.</h2></div>
      <p class="sec-lead">Daily, weekly or bi-weekly. Choose what sounds right, or tell us you are not sure yet. Contracts are welcome either way.</p>
    </header>
    <div class="sch" data-reveal>
      <div class="sch-left">
        <fieldset class="sch-seg"><legend class="sr">Service rhythm</legend>
          ${B.frequencies.map((f, i) => `<label class="sch-opt"><input type="radio" name="sch" value="${f.id}"${f.id === 'weekly' ? ' checked' : ''}><span><em>R-${pad(i + 1)}</em>${freqShort[f.id]}</span></label>`).join('')}
        </fieldset>
        <div class="sch-read" aria-live="polite">
          <div class="sch-read-top"><p class="sch-code" id="sch-code">Rhythm / R-02</p><span class="sch-badge">${icon('contract')} Contracts welcome</span></div>
          <p class="sch-name" id="sch-name">Weekly</p>
          <p class="sch-note" id="sch-note"></p>
          <div class="sch-strip" id="sch-strip" aria-hidden="true"></div>
          <p class="sch-cap">Illustrative two-week view. Exact days are set in your plan.</p>
          <button class="btn" type="button" id="sch-go" data-quote data-freq="weekly">Quote with weekly service ${icon('arrow')}</button>
        </div>
      </div>
      <div class="sch-table-wrap">
        <table class="sch-table" id="sch-table">
          <caption class="sr">Compare service rhythms</caption>
          <thead><tr><td></td>${B.frequencies.map(f => `<th scope="col" data-col="${f.id}"><button type="button" data-sch="${f.id}">${freqShort[f.id]}</button></th>`).join('')}</tr></thead>
          <tbody>
            <tr><th scope="row">Suited to</th>${B.frequencies.map(f => `<td data-col="${f.id}">${f.note}</td>`).join('')}</tr>
            <tr><th scope="row">Scope</th>${B.frequencies.map(f => `<td data-col="${f.id}">Customized to your space</td>`).join('')}</tr>
            <tr><th scope="row">Service contract</th>${B.frequencies.map(f => `<td data-col="${f.id}">${f.id === 'discuss' ? 'We will talk it through' : `${icon('check')} Welcome`}</td>`).join('')}</tr>
            <tr><th scope="row">Quote</th>${B.frequencies.map(f => `<td data-col="${f.id}">${icon('check')} Free</td>`).join('')}</tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>`;

const wash = () => {
  const s = svc('washing');
  return `
<section class="sec dark wash" id="washing" aria-labelledby="wash-h">
  <div class="wrap">
    <header class="sec-head sec-head-row" data-reveal>
      <div><p class="kicker"><span>05</span>Pressure washing</p><h2 id="wash-h">First impressions <span class="y">start at the curb.</span></h2></div>
      <p class="sec-lead">${s.body} Drag the handle, or focus it and use the arrow keys.</p>
    </header>
    <div class="ba" id="ba" style="--pos:50%" data-reveal>
      <img class="ba-img" src="/images/exterior.webp" alt="Illustrative photo of a concrete walkway being pressure washed" loading="lazy" width="1536" height="1024" draggable="false">
      <div class="ba-before" aria-hidden="true"><img class="ba-img" src="/images/exterior.webp" alt="" loading="lazy" width="1536" height="1024" draggable="false"></div>
      <span class="ba-label ba-l" aria-hidden="true">Before</span>
      <span class="ba-label ba-r" aria-hidden="true">After</span>
      <div class="ba-line" aria-hidden="true"></div>
      <div class="ba-handle" id="ba-handle" role="slider" tabindex="0" aria-label="Before and after comparison" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="50 percent before"><span class="ba-knob">${icon('drag')}</span></div>
      <p class="photo-chip ba-chip">Illustrative · "before" simulated with a filter</p>
    </div>
    <div class="wash-foot" data-reveal>
      <div class="wash-surf">
        <p class="mini-label">Surfaces to talk through · tap to add</p>
        <div class="surf" role="group" aria-label="Surfaces to talk through">${s.prompts.map(p => `<button type="button" class="chip-tog" aria-pressed="false" data-surface="${p}">${icon('plus')}<span>${p}</span></button>`).join('')}</div>
      </div>
      <div class="wash-cta">
        <p class="wash-count"><b id="surf-n">0</b><span>surfaces<br>selected</span></p>
        <button class="btn btn-lg" type="button" id="wash-go">Quote pressure washing ${icon('arrow')}</button>
      </div>
    </div>
  </div>
</section>`;
};

const reasons = [
  { icon: 'pin', t: 'Huntsville-based', d: `${B.street}, ${B.locality}.` },
  { icon: 'shield', t: 'Licensed & insured', d: 'Stated plainly, and on the record.' },
  { icon: 'dollar', t: 'Affordable', d: 'A scope and schedule that fits your budget, quoted free.' },
  { icon: 'sliders', t: 'Customized', d: 'Plans built around your facility, not a one-size template.' },
  { icon: 'badge', t: 'Chamber member', d: 'Listed in the Huntsville/Madison County Chamber member directory.', link: true }
];
const local = () => `
<section class="sec local" id="local" aria-labelledby="loc-h">
  <div class="wrap local-grid">
    <div class="mosaic" data-reveal>
      <figure class="mo mo-a"><img src="/images/gen/glass.webp" alt="Illustrative photo of a squeegee cleaning a glass door" loading="lazy" width="800" height="800"><figcaption>Fig. 05 · Glass</figcaption></figure>
      <figure class="mo mo-b"><img src="/images/detail.webp" alt="Illustrative photo of a gloved hand wiping a surface with a microfiber cloth" loading="lazy" width="800" height="600"><figcaption>Fig. 06 · Detail</figcaption></figure>
      <figure class="mo mo-c"><img src="/images/gen/conference.webp" alt="Illustrative photo of a clean conference room" loading="lazy" width="800" height="600"><figcaption>Fig. 07 · Conference</figcaption></figure>
      <figure class="mo mo-d"><img src="/images/gen/cart.webp" alt="Illustrative photo of an organized janitorial cart" loading="lazy" width="800" height="600"><figcaption>Fig. 08 · Equipment</figcaption></figure>
      <div class="mo-stamp" aria-hidden="true"><span>Huntsville</span><b>AL</b><span>35805</span></div>
      <p class="photo-chip mo-chip">Illustrative photos</p>
    </div>
    <div class="local-copy">
      <header class="sec-head" data-reveal>
        <p class="kicker"><span>06</span>Why Sanders</p>
        <h2 id="loc-h">Local. Licensed. <span class="hl">Built around your building.</span></h2>
      </header>
      <ul class="reasons">
        ${reasons.map((r, i) => `<li class="reason" data-reveal style="--reveal-delay:${i * 60}ms"><span class="reason-ic">${icon(r.icon)}</span><div><p class="reason-code">LOC-${pad(i + 1)}</p><h3>${r.t}</h3><p>${r.d}${r.link ? ` <a class="inline-link" href="${B.source}" target="_blank" rel="noopener noreferrer">View listing ${icon('external')}</a>` : ''}</p></div></li>`).join('')}
      </ul>
    </div>
  </div>
</section>`;

const faq = () => `
<section class="sec faq" id="faq" aria-labelledby="faq-h">
  <div class="wrap faq-grid">
    <div class="faq-side" data-reveal>
      <p class="kicker"><span>07</span>FAQ</p>
      <h2 id="faq-h">Straight answers.</h2>
      <p class="sec-lead">The short version of what facility managers ask first.</p>
      <div class="call-card">
        <p class="call-code">Direct line</p>
        <a class="call-num" href="${B.tel}">${B.phone}</a>
        <p>${B.street}<br>${B.locality}</p>
        <button class="btn btn-block" type="button" data-quote>Start a free quote ${icon('arrow')}</button>
      </div>
    </div>
    <div class="acc" data-reveal>
      ${B.faqs.map((f, i) => `
      <div class="acc-item">
        <h3><button class="acc-btn" type="button" id="acc-b-${i}" aria-expanded="false" aria-controls="acc-p-${i}"><span class="acc-code">Q-${pad(i + 1)}</span><span class="acc-q">${f.q}</span><span class="acc-tog">${icon('plus')}</span></button></h3>
        <div class="acc-panel" id="acc-p-${i}" role="region" aria-labelledby="acc-b-${i}" hidden><p>${f.a}</p></div>
      </div>`).join('')}
    </div>
  </div>
</section>`;

const cta = () => `
<section class="cta" aria-labelledby="cta-h">
  <div class="hazard cta-hz" aria-hidden="true"></div>
  <div class="wrap cta-in">
    <div>
      <p class="kicker kicker-dark"><span>08</span>Free quote</p>
      <h2 id="cta-h">One call.<br>Zero cost to quote.</h2>
    </div>
    <div class="cta-side">
      <a class="cta-phone" href="${B.tel}">${icon('phone')}<span>${B.phone}</span></a>
      <div class="cta-btns">
        <button class="btn btn-dark btn-lg" type="button" data-quote>Start a free quote ${icon('arrow')}</button>
        <a class="btn btn-lg btn-outline-dark" href="${B.tel}">Call now</a>
      </div>
      <p class="cta-fine">Licensed &amp; insured · Contracts welcome · Huntsville, AL</p>
    </div>
  </div>
  <div class="hazard cta-hz" aria-hidden="true"></div>
</section>`;

const footer = () => `
<footer class="ftr">
  <div class="wrap">
    <div class="ftr-top">
      <div class="ftr-brand">
        <a class="brand brand-light" href="#main" aria-label="Sanders Signature Clean, back to top">${MARK}<span class="brand-txt"><b>Sanders</b><small>Signature Clean</small></span></a>
        <p>Commercial cleaning and pressure washing for Huntsville. Licensed &amp; insured. Free quotes.</p>
      </div>
      <div class="ftr-col"><p class="ftr-h">Visit</p><p>${B.street}<br>${B.locality}</p><a href="${B.tel}" class="ftr-phone">${B.phone}</a></div>
      <div class="ftr-col"><p class="ftr-h">Services</p><ul>${B.services.map(s => `<li><a href="#services">${s.name}</a></li>`).join('')}</ul></div>
      <div class="ftr-col"><p class="ftr-h">Spaces</p><ul>${B.facilities.map(f => `<li><a href="#spaces">${f.name}</a></li>`).join('')}</ul></div>
    </div>
    <p class="ftr-giant" aria-hidden="true">Sanders</p>
    <div class="ftr-bot">
      <p>© ${B.name} · Proposed design by <a href="https://bluelotuscoding.com" target="_blank" rel="noopener noreferrer">Blue Lotus Coding</a> · Illustrative photos</p>
      <a class="ftr-back" href="/" target="_top">← All designs</a>
    </div>
  </div>
</footer>
<div class="mbar" aria-label="Quick actions" role="region">
  <a class="mbar-call" href="${B.tel}">${icon('phone')} Call</a>
  <button class="mbar-quote" type="button" data-quote>Free quote ${icon('arrow')}</button>
</div>`;

const quoteShell = () => `
<div class="qd" id="qd" hidden>
  <div class="qd-scrim" data-qd-close></div>
  <div class="qd-box" role="dialog" aria-modal="true" aria-labelledby="qd-title">
    <div class="qd-top">
      <div><p class="qd-code">QR-DEMO / Free quote request</p><h2 id="qd-title">Build your quote</h2></div>
      <button class="qd-x" type="button" data-qd-close aria-label="Close quote request">${icon('close')}</button>
    </div>
    <div class="hazard qd-hz" aria-hidden="true"></div>
    <ol class="qd-prog" id="qd-prog" aria-label="Quote progress">
      ${['Service', 'Space', 'Rhythm', 'Details', 'Review'].map((l, i) => `<li data-step="${i + 1}"><span class="qd-pn">${pad(i + 1)}</span><span class="qd-pl">${l}</span></li>`).join('')}
    </ol>
    <div class="qd-body" id="qd-body"></div>
    <div class="qd-foot" id="qd-foot">
      <button class="btn btn-ghost" type="button" id="qd-back">Back</button>
      <span class="qd-count" id="qd-count"></span>
      <button class="btn" type="button" id="qd-next">Next</button>
    </div>
  </div>
</div>`;

/* ---------- Mount ---------- */
demoBar('Precision');
const app = document.getElementById('app');
app.innerHTML = header() + `<main>${hero()}${ticker()}${basics()}${services()}${spaces()}${process()}${schedule()}${wash()}${local()}${faq()}${cta()}</main>` + footer();
document.body.insertAdjacentHTML('beforeend', quoteShell());

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Header: scroll state, active nav, anchors, mobile menu ---------- */
const hdr = $('.hdr');
const onScroll = () => hdr.classList.toggle('is-scrolled', scrollY > 24);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

const navLinks = $$('[data-nav]');
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle('is-active', a.dataset.nav === e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
nav.forEach(([id]) => io.observe(document.getElementById(id)));

const menuBtn = $('.menu-btn'), mnav = $('#mnav');
const setMenu = open => {
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mnav.hidden = !open;
  hdr.classList.toggle('menu-open', open);
  document.documentElement.classList.toggle('lock', open);
  if (open) $('a', mnav).focus();
};
menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
mnav.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const f = [...$$('a, button', mnav), menuBtn]; const i = f.indexOf(document.activeElement);
  if (e.shiftKey && i === 0) { e.preventDefault(); menuBtn.focus(); }
});
addEventListener('resize', () => { if (innerWidth > 1080 && !mnav.hidden) setMenu(false); });

document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  const t = document.getElementById(id);
  if (!t) return;
  e.preventDefault();
  if (!mnav.hidden) setMenu(false);
  t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  if (!t.hasAttribute('tabindex')) t.setAttribute('tabindex', '-1');
  t.focus({ preventScroll: true });
});

/* ---------- Hero planner ---------- */
const plan = { services: new Set(['cleaning']), space: 'office', freq: 'weekly' };
const renderPlan = () => {
  const list = [...plan.services].map(id => svc(id).name);
  $('#pl-dl').innerHTML = `
    <div><dt>SVC</dt><dd>${list.length ? esc(list.join(' + ')) : '<span class="pl-empty">Pick a service</span>'}</dd></div>
    <div><dt>Space</dt><dd>${esc(fac(plan.space).name)}</dd></div>
    <div><dt>Rhythm</dt><dd>${esc(frq(plan.freq).name)}</dd></div>`;
  $('#pl-note').textContent = frq(plan.freq).note;
};
$$('[data-pl-svc]').forEach(b => b.addEventListener('click', () => {
  const id = b.dataset.plSvc;
  plan.services.has(id) ? plan.services.delete(id) : plan.services.add(id);
  b.setAttribute('aria-pressed', String(plan.services.has(id)));
  renderPlan();
}));
$('#pl-space').addEventListener('change', e => { plan.space = e.target.value; renderPlan(); });
$$('input[name="pl-freq"]').forEach(r => r.addEventListener('change', () => { plan.freq = r.value; renderPlan(); }));
$('#pl-go').addEventListener('click', e => {
  if (!plan.services.size) { toast('Pick at least one service in the planner first.'); $('[data-pl-svc]').focus(); return; }
  openQuote({ services: [...plan.services], space: plan.space, freq: plan.freq }, e.currentTarget);
  toast('Planner selections loaded into your quote.');
});
renderPlan();

/* ---------- Services matrix ---------- */
$$('.mx-btn').forEach(btn => btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  $('#' + btn.getAttribute('aria-controls')).hidden = !open;
  btn.closest('.mx-row').classList.toggle('is-open', open);
}));

/* ---------- Spaces explorer (tabs) ---------- */
const tabs = $$('.sx-tab');
const selectTab = (tab, focus) => {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
    $('#' + t.getAttribute('aria-controls')).hidden = !on;
  });
  if (focus) tab.focus();
};
tabs.forEach((t, i) => {
  t.addEventListener('click', () => selectTab(t));
  t.addEventListener('keydown', e => {
    const k = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (k) { e.preventDefault(); selectTab(tabs[(i + k + tabs.length) % tabs.length], true); }
    if (e.key === 'Home') { e.preventDefault(); selectTab(tabs[0], true); }
    if (e.key === 'End') { e.preventDefault(); selectTab(tabs[tabs.length - 1], true); }
  });
});

/* ---------- Schedule chooser ---------- */
const strips = {
  daily: Array.from({ length: 14 }, () => 1),
  weekly: Array.from({ length: 14 }, (_, i) => (i % 7 === 1 ? 1 : 0)),
  biweekly: Array.from({ length: 14 }, (_, i) => (i === 1 ? 1 : 0)),
  discuss: Array.from({ length: 14 }, () => 2)
};
const setSchedule = id => {
  const f = frq(id); const i = B.frequencies.indexOf(f);
  $$('input[name="sch"]').forEach(r => { r.checked = r.value === id; });
  $('#sch-code').textContent = `Rhythm / R-${pad(i + 1)}`;
  $('#sch-name').textContent = f.name;
  $('#sch-note').textContent = f.note;
  $('#sch-strip').innerHTML = strips[id].map((v, d) => `<span class="${v === 1 ? 'on' : v === 2 ? 'q' : ''}">${d % 7 === 0 ? `<em>W${d / 7 + 1}</em>` : ''}</span>`).join('');
  const go = $('#sch-go');
  go.dataset.freq = id;
  go.innerHTML = `${id === 'discuss' ? 'Talk it through in a quote' : `Quote with ${f.name.toLowerCase()} service`} ${icon('arrow')}`;
  $$('#sch-table [data-col]').forEach(c => c.classList.toggle('is-sel', c.dataset.col === id));
  $$('#sch-table [data-sch]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.sch === id)));
};
$$('input[name="sch"]').forEach(r => r.addEventListener('change', () => setSchedule(r.value)));
$$('[data-sch]').forEach(b => b.addEventListener('click', () => setSchedule(b.dataset.sch)));
setSchedule('weekly');

/* ---------- Before / after slider ---------- */
const ba = $('#ba'), handle = $('#ba-handle');
let pos = 50;
const setPos = v => {
  pos = Math.max(0, Math.min(100, Math.round(v)));
  ba.style.setProperty('--pos', pos + '%');
  handle.setAttribute('aria-valuenow', String(pos));
  handle.setAttribute('aria-valuetext', `${pos} percent before`);
};
const fromPointer = e => { const r = ba.getBoundingClientRect(); setPos(((e.clientX - r.left) / r.width) * 100); };
ba.addEventListener('pointerdown', e => {
  if (e.button !== 0) return;
  ba.setPointerCapture(e.pointerId); ba.classList.add('is-drag'); fromPointer(e); handle.focus({ preventScroll: true });
});
ba.addEventListener('pointermove', e => { if (ba.hasPointerCapture(e.pointerId)) fromPointer(e); });
const endDrag = e => { if (ba.hasPointerCapture(e.pointerId)) ba.releasePointerCapture(e.pointerId); ba.classList.remove('is-drag'); };
ba.addEventListener('pointerup', endDrag); ba.addEventListener('pointercancel', endDrag);
handle.addEventListener('keydown', e => {
  const step = e.shiftKey ? 10 : 5;
  const map = { ArrowLeft: pos - step, ArrowDown: pos - step, ArrowRight: pos + step, ArrowUp: pos + step, PageDown: pos - 20, PageUp: pos + 20, Home: 0, End: 100 };
  if (e.key in map) { e.preventDefault(); setPos(map[e.key]); }
});

/* ---------- Surfaces ---------- */
const surfaces = new Set();
$$('[data-surface]').forEach(b => b.addEventListener('click', () => {
  const s = b.dataset.surface;
  surfaces.has(s) ? surfaces.delete(s) : surfaces.add(s);
  b.setAttribute('aria-pressed', String(surfaces.has(s)));
  b.innerHTML = `${icon(surfaces.has(s) ? 'check' : 'plus')}<span>${esc(s)}</span>`;
  $('#surf-n').textContent = surfaces.size;
}));
$('#wash-go').addEventListener('click', e => {
  const notes = surfaces.size ? `Surfaces to talk through: ${[...surfaces].join(', ')}` : '';
  openQuote({ services: ['washing'], notes }, e.currentTarget);
});

/* ---------- FAQ ---------- */
$$('.acc-btn').forEach(btn => btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  $('#' + btn.getAttribute('aria-controls')).hidden = !open;
  btn.closest('.acc-item').classList.toggle('is-open', open);
}));

/* ---------- Quote flow ---------- */
const q = { services: new Set(), space: '', freq: '', name: '', company: '', email: '', phone: '', notes: '' };
let step = 1, returnToReview = false, lastFocus = null;
const qd = $('#qd'), qBody = $('#qd-body'), qNext = $('#qd-next'), qBack = $('#qd-back');
const firstOpen = () => (!q.services.size ? 1 : !q.space ? 2 : !q.freq ? 3 : 4);

function openQuote(pre = {}, trigger) {
  if (pre.services && pre.services.length) q.services = new Set(pre.services);
  if (pre.space) q.space = pre.space;
  if (pre.freq) q.freq = pre.freq;
  if (pre.notes && !q.notes.includes(pre.notes)) q.notes = q.notes ? `${q.notes}\n${pre.notes}` : pre.notes;
  lastFocus = trigger || document.activeElement;
  if (!mnav.hidden) setMenu(false);
  returnToReview = false;
  step = step === 6 ? 1 : firstOpen();
  qd.hidden = false;
  document.documentElement.classList.add('lock');
  $('#app').inert = true; const bar = $('.bl-demo-bar'); if (bar) bar.inert = true;
  requestAnimationFrame(() => qd.classList.add('is-open'));
  renderStep();
}
function closeQuote() {
  qd.classList.remove('is-open');
  qd.hidden = true;
  document.documentElement.classList.remove('lock');
  $('#app').inert = false; const bar = $('.bl-demo-bar'); if (bar) bar.inert = false;
  if (step === 6) resetQuote();
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
}
function resetQuote() { Object.assign(q, { services: new Set(), space: '', freq: '', name: '', company: '', email: '', phone: '', notes: '' }); step = 1; }

document.addEventListener('click', e => {
  const t = e.target.closest('[data-quote]');
  if (!t) return;
  e.preventDefault();
  openQuote({
    services: t.dataset.service ? t.dataset.service.split(',') : null,
    space: t.dataset.space, freq: t.dataset.freq, notes: t.dataset.notes
  }, t);
});
$$('[data-qd-close]').forEach(b => b.addEventListener('click', closeQuote));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!qd.hidden) { e.preventDefault(); closeQuote(); return; }
    if (!mnav.hidden) { setMenu(false); menuBtn.focus(); }
  }
  if (e.key === 'Tab' && !qd.hidden) {
    const f = $$('button, a[href], input, select, textarea, [tabindex="0"]', $('.qd-box')).filter(el => !el.disabled && el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || !$('.qd-box').contains(document.activeElement))) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

const tile = (type, name, value, checked, ic, title, sub) => `
  <label class="qt">
    <input type="${type}" name="${name}" value="${value}"${checked ? ' checked' : ''}>
    <span class="qt-box">
      <span class="qt-ic">${icon(ic)}</span>
      <span class="qt-txt"><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</span>
      <span class="qt-mark">${icon('check')}</span>
    </span>
  </label>`;
const field = (id, label, type, req, auto, extra = '') => `
  <div class="qf${req ? ' req' : ''}">
    <label for="q-${id}">${label}${req ? ' <span aria-hidden="true">*</span>' : ' <em>Optional</em>'}</label>
    <input id="q-${id}" name="${id}" type="${type}" autocomplete="${auto}" value="${esc(q[id])}"${req ? ' required aria-required="true"' : ''} aria-describedby="q-${id}-err" ${extra}>
    <p class="qf-err" id="q-${id}-err" aria-live="polite"></p>
  </div>`;

function renderStep() {
  const titles = { 1: 'What do you need?', 2: 'What kind of space?', 3: 'How often?', 4: 'Your details', 5: 'Review your request', 6: 'Demo complete' };
  $$('#qd-prog li').forEach(li => {
    const n = +li.dataset.step;
    li.classList.toggle('is-cur', n === step); li.classList.toggle('is-done', n < step);
    if (n === step) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
  });
  $('#qd-foot').hidden = step === 6;
  $('#qd-prog').classList.toggle('is-complete', step === 6);
  qBack.disabled = step === 1;
  $('#qd-count').textContent = step <= 5 ? `Step ${step} of 5` : '';
  qNext.innerHTML = step === 5 ? `Send request (demo) ${icon('arrow')}` : returnToReview ? `Save &amp; review ${icon('arrow')}` : `Next ${icon('arrow')}`;
  let html = `<h3 class="qd-h" tabindex="-1">${titles[step]}</h3>`;
  if (step === 1) html += `<p class="qd-hint">Select one or more. You can change this later.</p><div class="qt-grid" role="group" aria-label="Services" aria-describedby="q-err">${B.services.map(s => tile('checkbox', 'svc', s.id, q.services.has(s.id), svcIcon[s.id], s.name, s.short)).join('')}</div>`;
  if (step === 2) html += `<p class="qd-hint">Pick the closest match.</p><div class="qt-grid qt-2" role="radiogroup" aria-label="Space type" aria-describedby="q-err">${B.facilities.map(f => tile('radio', 'space', f.id, q.space === f.id, spIcon[f.id], f.name, f.blurb)).join('')}</div>`;
  if (step === 3) html += `<p class="qd-hint">Contracts are welcome on any rhythm.</p><div class="qt-grid qt-2" role="radiogroup" aria-label="Service frequency" aria-describedby="q-err">${B.frequencies.map(f => tile('radio', 'freq', f.id, q.freq === f.id, f.id === 'discuss' ? 'info' : 'calendar', f.name, f.note)).join('')}</div>`;
  if (step <= 3) html += `<p class="qd-err" id="q-err" aria-live="polite"></p>`;
  if (step === 4) html += `<p class="qd-hint">Fields marked * are required. Nothing is sent in this demo.</p>
    <form class="qform" id="qform" novalidate>
      ${field('name', 'Name', 'text', true, 'name')}
      ${field('company', 'Company or facility', 'text', false, 'organization')}
      ${field('email', 'Email', 'email', true, 'email', 'inputmode="email"')}
      ${field('phone', 'Phone', 'tel', true, 'tel', 'inputmode="tel"')}
      <div class="qf qf-wide"><label for="q-notes">Notes <em>Optional</em></label><textarea id="q-notes" name="notes" rows="3" placeholder="Square footage, areas, timing, surfaces…">${esc(q.notes)}</textarea></div>
    </form>`;
  if (step === 5) {
    const block = (n, label, val) => `<div class="rv"><div class="rv-head"><span class="rv-n">${pad(n)}</span><span class="rv-l">${label}</span><button class="rv-edit" type="button" data-edit="${n}">${icon('edit')} Edit<span class="sr"> ${label}</span></button></div><div class="rv-v">${val}</div></div>`;
    html += `<p class="qd-hint">Check everything over. Use Edit to change a section.</p><div class="rv-list">
      ${block(1, 'Service', esc([...q.services].map(id => svc(id).name).join(', ')))}
      ${block(2, 'Space', esc(fac(q.space)?.name))}
      ${block(3, 'Rhythm', esc(frq(q.freq)?.name))}
      ${block(4, 'Details', `<dl class="rv-dl"><div><dt>Name</dt><dd>${esc(q.name)}</dd></div><div><dt>Company</dt><dd>${esc(q.company) || '—'}</dd></div><div><dt>Email</dt><dd>${esc(q.email)}</dd></div><div><dt>Phone</dt><dd>${esc(q.phone)}</dd></div><div class="rv-wide"><dt>Notes</dt><dd>${esc(q.notes) || '—'}</dd></div></dl>`)}
    </div>`;
  }
  if (step === 6) html = `<div class="done">
      <span class="done-ic">${icon('check')}</span>
      <p class="qd-code done-code">QR-DEMO / Status: not sent</p>
      <h3 class="qd-h" tabindex="-1">Demo complete — nothing was sent.</h3>
      <p>To request a real quote, call <a href="${B.tel}">${B.phone}</a>.</p>
      <div class="done-btns"><a class="btn btn-lg" href="${B.tel}">${icon('phone')} Call ${B.phone}</a><button class="btn btn-lg btn-ghost" type="button" id="qd-done">Back to the site</button></div>
    </div>`;
  qBody.innerHTML = html;
  qBody.scrollTop = 0;
  $('.qd-h', qBody).focus({ preventScroll: true });
  wireStep();
}

function wireStep() {
  if (step === 1) $$('input[name="svc"]', qBody).forEach(i => i.addEventListener('change', () => { i.checked ? q.services.add(i.value) : q.services.delete(i.value); clearErr(); }));
  if (step === 2) $$('input[name="space"]', qBody).forEach(i => i.addEventListener('change', () => { q.space = i.value; clearErr(); }));
  if (step === 3) $$('input[name="freq"]', qBody).forEach(i => i.addEventListener('change', () => { q.freq = i.value; clearErr(); }));
  if (step === 4) {
    $$('input, textarea', qBody).forEach(i => i.addEventListener('input', () => {
      q[i.name] = i.value;
      if (i.getAttribute('aria-invalid') === 'true') validateField(i.name);
    }));
    $('#qform').addEventListener('submit', e => { e.preventDefault(); next(); });
  }
  if (step === 5) $$('[data-edit]', qBody).forEach(b => b.addEventListener('click', () => { returnToReview = true; step = +b.dataset.edit; renderStep(); }));
  if (step === 6) $('#qd-done').addEventListener('click', closeQuote);
}
const clearErr = () => { const e = $('#q-err'); if (e) e.textContent = ''; };
const stepErr = msg => { $('#q-err').textContent = msg; $('input', qBody).focus(); };

function validateField(name) {
  const v = String(q[name] ?? '').trim();
  const msg = {
    name: !v ? 'Enter your name.' : '',
    email: !v ? 'Enter your email address.' : !validEmail(v) ? 'Enter a valid email, like name@company.com.' : '',
    phone: !v ? 'Enter a phone number.' : !validPhone(v) ? 'Enter a 10-digit phone number.' : ''
  }[name];
  const input = $(`#q-${name}`);
  input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  input.closest('.qf').classList.toggle('has-err', !!msg);
  $(`#q-${name}-err`).textContent = msg;
  return !msg;
}

function next() {
  if (step === 1 && !q.services.size) return stepErr('Select at least one service to continue.');
  if (step === 2 && !q.space) return stepErr('Choose the type of space to continue.');
  if (step === 3 && !q.freq) return stepErr('Choose a rhythm, or pick "Not sure yet".');
  if (step === 4) {
    ['name', 'company', 'email', 'phone', 'notes'].forEach(k => { q[k] = String(q[k]).trim(); });
    const bad = ['name', 'email', 'phone'].filter(n => !validateField(n));
    if (bad.length) { $(`#q-${bad[0]}`).focus(); return; }
  }
  if (returnToReview && step < 5) { returnToReview = false; step = 5; }
  else step += 1;
  renderStep();
}
qNext.addEventListener('click', next);
qBack.addEventListener('click', () => { if (step > 1) { returnToReview = false; step -= 1; renderStep(); } });

/* ---------- Reveal ---------- */
reveal();
