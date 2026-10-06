// Quiet Luxury: gallery-calm direction for Sanders Signature Clean.
import { business, demoBar, esc, validEmail, validPhone, reveal, toast, embedded } from '../../shared/kit.js';
import './styles.css';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pad = n => String(n).padStart(2, '0');
const roman = ['i', 'ii', 'iii', 'iv', 'v', 'vi'];

demoBar('Quiet Luxury');

/* ---------- Icons (24 viewBox line icons, injected as a sprite) ---------- */
const icons = {
  arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
  phone: '<path d="M5 4h3.5l1.6 4.2-2.2 1.4a11 11 0 0 0 6.5 6.5l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  shield: '<path d="M12 3l7 3v5.5c0 4.4-3 8.1-7 9.5-4-1.4-7-5.1-7-9.5V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
  quote: '<path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3a1 1 0 0 1 0 1.4l-7.6 7.6a1 1 0 0 1-1.4 0z"/><circle cx="8" cy="8" r="1.6"/>',
  sliders: '<path d="M5 6h9M18 6h1M5 12h3M12 12h7M5 18h11M20 18h-1"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  doc: '<path d="M6 3h9l3 3v15H6z"/><path d="M9 9h6M9 12.5h6"/><path d="M9 17.5c1-1.6 1.8-1.6 2.2-.4.4 1.1 1.1 1.1 2-.2.6-.8 1.2-.6 1.8.3"/>',
  drag: '<path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/>',
  check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
  pin: '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'
};
const sprite = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
sprite.setAttribute('aria-hidden', 'true');
sprite.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
sprite.innerHTML = Object.entries(icons).map(([id, d]) => `<symbol id="i-${id}" viewBox="0 0 24 24">${d}</symbol>`).join('');
document.body.prepend(sprite);
const icon = (id, cls = 'i') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;

/* ---------- Brand mark: an arch (doorway) with a four-point glint ---------- */
const mark = `<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true"><rect x=".5" y=".5" width="39" height="39" rx="0" fill="none" stroke="currentColor" stroke-opacity=".35"/><path d="M12 32V18.5a8 8 0 0 1 16 0V32" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M8 32h24" stroke="currentColor" stroke-width="1.2"/><path d="M20 14.2c.35 2.3 1.2 3.15 3.5 3.5-2.3.35-3.15 1.2-3.5 3.5-.35-2.3-1.2-3.15-3.5-3.5 2.3-.35 3.15-1.2 3.5-3.5z" fill="var(--brass)"/></svg>`;
$$('[data-brand]').forEach(el => { el.innerHTML = `${mark}<span class="brand-text"><span class="brand-name">Sanders</span><span class="brand-sub">Signature Clean</span></span>`; });
if (embedded) $$('[data-gallery]').forEach(a => { a.target = '_blank'; a.rel = 'noopener noreferrer'; });

/* ---------- Render content from verified facts ---------- */
const credCopy = [
  ['shield', 'Licensed & insured', 'Sanders Signature Clean is licensed and insured.'],
  ['quote', 'Free quotes', 'Asking costs nothing. Call, or start a request here.'],
  ['sliders', 'Customized plans', 'A scope shaped around your space and how it is used.'],
  ['doc', 'Contracts welcome', 'Ongoing service agreements are welcome.']
];
$('[data-creds]').innerHTML = credCopy.map(([ic, t, d], i) => `
  <div class="cred" data-reveal style="--reveal-delay:${i * 0.07}s">
    <span class="cred-tile">${icon(ic)}</span>
    <div><p class="cred-title">${esc(t)}</p><p class="cred-body">${esc(d)}</p></div>
  </div>`).join('');

const servicePairs = {
  cleaning: { second: ['/images/detail.webp', 'Illustrative photo of a gloved hand wiping a surface with a microfiber cloth'], fig: '02', cap: 'Offices and lobbies' },
  washing: { second: null, fig: '03', cap: 'Storefronts and sidewalks' },
  recurring: { second: ['/images/gen/floor-scrub.webp', 'Illustrative photo of a floor scrubber in a school hallway'], fig: '04', cap: 'A steady routine' }
};
$('[data-services]').innerHTML = business.services.map((s, i) => {
  const p = servicePairs[s.id];
  return `
  <article class="service ${i % 2 ? 'is-flip' : ''} ${p.second ? 'has-pair' : 'is-single'}" id="service-${s.id}">
    <div class="service-media" data-reveal>
      <figure class="pair-main"><img src="${s.image}" alt="${esc(s.alt)}" width="1672" height="941" loading="lazy"></figure>
      ${p.second ? `<figure class="pair-second"><img src="${p.second[0]}" alt="${esc(p.second[1])}" width="1536" height="1024" loading="lazy"></figure>` : ''}
      <p class="offset-cap"><span>Fig. ${p.fig}</span>${esc(p.cap)} · Illustrative</p>
    </div>
    <div class="service-copy" data-reveal style="--reveal-delay:.08s">
      <p class="service-num">${pad(i + 1)}<span>/ ${pad(business.services.length)}</span></p>
      <h3>${esc(s.name)}</h3>
      <p class="service-short">${esc(s.short)}</p>
      <p class="service-body">${esc(s.body)}</p>
      <p class="label muted">Talk to us about</p>
      <ul class="prompt-chips">${s.prompts.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      <button class="link link-arrow" type="button" data-quote data-service="${s.id}">Begin a quote for ${esc(s.name.toLowerCase())} ${icon('arrow')}</button>
    </div>
  </article>`;
}).join('');

$('[data-spaces]').innerHTML = business.facilities.map((f, i) => `
  <li class="space ${i === 0 ? 'is-open' : ''}" data-space-row data-img="${f.image}">
    <h3 class="space-h">
      <button class="space-btn" type="button" aria-expanded="${i === 0}" aria-controls="space-panel-${f.id}" id="space-btn-${f.id}">
        <span class="space-num">${pad(i + 1)}</span>
        <span class="space-name">${esc(f.name)}</span>
        <span class="space-blurb">${esc(f.blurb)}</span>
        <span class="pm" aria-hidden="true"></span>
      </button>
    </h3>
    <div class="space-panel" id="space-panel-${f.id}" role="region" aria-labelledby="space-btn-${f.id}" ${i === 0 ? '' : 'hidden'}>
      <div class="space-panel-inner">
        <figure class="space-img"><img src="${f.image}" alt="${esc(f.alt)}" width="1536" height="1024" loading="lazy"><figcaption>Illustrative photo</figcaption></figure>
        <div class="space-talk">
          <p class="label">What we’ll talk through</p>
          <ol>${f.talk.map((t, j) => `<li><span>${roman[j]}.</span>${esc(t)}</li>`).join('')}</ol>
          <button class="link link-arrow" type="button" data-quote data-space="${f.id}">Begin a quote for ${f.id === 'other' ? 'another commercial space' : `${f.id === 'office' ? 'an' : 'a'} ${esc(f.single.toLowerCase())}`} ${icon('arrow')}</button>
        </div>
      </div>
    </div>
  </li>`).join('');

$('[data-steps]').innerHTML = business.steps.map((s, i) => `
  <li class="step" data-reveal style="--reveal-delay:${i * 0.1}s">
    <span class="step-node" aria-hidden="true"></span>
    <p class="step-num">${pad(i + 1)}</p>
    <h3>${esc(s.title)}</h3>
    <p>${esc(s.body)}</p>
  </li>`).join('');

$('[data-rhythms]').innerHTML = business.frequencies.map((f, i) => `
  <label class="rhythm">
    <input type="radio" name="rhythm" value="${f.id}" ${f.id === 'weekly' ? 'checked' : ''}>
    <span class="rhythm-dot" aria-hidden="true"></span>
    <span class="rhythm-num">${pad(i + 1)}</span>
    <span class="rhythm-text"><span class="rhythm-name">${esc(f.name)}</span><span class="rhythm-note">${esc(f.note)}</span></span>
  </label>`).join('');

const washing = business.services.find(s => s.id === 'washing');
$('[data-surfaces]').innerHTML = washing.prompts.map(p => `<button type="button" class="surface" aria-pressed="false">${icon('check', 'i i-check')}${esc(p)}</button>`).join('');

const whyItems = [
  ['Based in Huntsville', `${business.street}, ${business.locality}. A local call: <a class="link" href="${business.tel}">${business.phone}</a>.`],
  ['Licensed & insured', 'Coverage you can ask about on the first call.'],
  ['Affordable, with free quotes', 'A scope and schedule that fits your budget, priced before anything begins.'],
  ['Customized to your needs', 'Your building, the areas that matter and how often, decided together.'],
  ['Chamber member', `Listed with the <a class="link" href="${business.source}" target="_blank" rel="noopener noreferrer">Huntsville/Madison County Chamber</a>.`]
];
$('[data-why]').innerHTML = whyItems.map(([t, d], i) => `<li data-reveal style="--reveal-delay:${i * 0.06}s"><span class="why-num">${roman[i]}.</span><div><h3>${esc(t)}</h3><p>${d}</p></div></li>`).join('');

$('[data-faqs]').innerHTML = business.faqs.map((f, i) => `
  <li class="faq-item">
    <h3 class="faq-h"><button type="button" class="faq-btn" aria-expanded="false" aria-controls="faq-${i}" id="faq-btn-${i}"><span class="faq-num">${pad(i + 1)}</span><span class="faq-q">${esc(f.q)}</span><span class="pm" aria-hidden="true"></span></button></h3>
    <div class="faq-a" id="faq-${i}" role="region" aria-labelledby="faq-btn-${i}" hidden><p>${esc(f.a)}</p></div>
  </li>`).join('');

/* ---------- Header scroll state + anchors (no hash navigation; works in sandbox) ---------- */
const header = $('.site-header');
const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

function goTo(id) {
  const target = id === 'top' ? document.body : document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  if (id !== 'top') { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  if (!id) return;
  e.preventDefault();
  if (menuOpen) closeMenu(false);
  goTo(id);
});

/* ---------- Mobile menu ---------- */
const menu = $('#mobile-menu');
const toggle = $('.menu-toggle');
let menuOpen = false;
function openMenu() {
  menuOpen = true; menu.hidden = false;
  requestAnimationFrame(() => menu.classList.add('is-open'));
  toggle.setAttribute('aria-expanded', 'true'); toggle.setAttribute('aria-label', 'Close menu');
  document.documentElement.classList.add('is-locked');
  $('a', menu).focus();
}
function closeMenu(restore = true) {
  menuOpen = false; menu.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open menu');
  document.documentElement.classList.remove('is-locked');
  setTimeout(() => { if (!menuOpen) menu.hidden = true; }, reduced ? 0 : 320);
  if (restore) toggle.focus();
}
toggle.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
document.addEventListener('keydown', e => {
  if (!menuOpen) return;
  if (e.key === 'Escape') { e.preventDefault(); closeMenu(); }
  if (e.key === 'Tab') {
    const items = [toggle, ...$$('a, button', menu)];
    const i = items.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); items.at(-1).focus(); }
    else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
  }
});
addEventListener('resize', () => { if (menuOpen && innerWidth > 1080) closeMenu(false); });

/* ---------- Compose widget: auto-size selects to their chosen text ---------- */
const ctx = document.createElement('canvas').getContext('2d');
function sizeSelect(sel) {
  const cs = getComputedStyle(sel);
  ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
  const text = sel.options[sel.selectedIndex].text;
  const w = ctx.measureText(text).width + parseFloat(cs.paddingRight) + parseFloat(cs.paddingLeft) + 4;
  sel.style.width = `${Math.ceil(w)}px`;
}
const composeSelects = $$('#compose select');
const sizeAll = () => composeSelects.forEach(sizeSelect);
composeSelects.forEach(s => s.addEventListener('change', () => sizeSelect(s)));
sizeAll();
document.fonts?.ready.then(sizeAll);
addEventListener('resize', sizeAll);
$('#compose').addEventListener('submit', e => {
  e.preventDefault();
  openQuote({ services: [$('#c-service').value], space: $('#c-space').value, frequency: $('#c-frequency').value, step: 3 }, e.submitter || $('#compose button'));
});

/* ---------- Spaces index: accordion + cursor-following image ---------- */
const rows = $$('[data-space-row]');
rows.forEach(row => {
  const btn = $('.space-btn', row);
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    rows.forEach(r => { $('.space-btn', r).setAttribute('aria-expanded', 'false'); $('.space-panel', r).hidden = true; r.classList.remove('is-open'); });
    if (!open) { btn.setAttribute('aria-expanded', 'true'); $('.space-panel', row).hidden = false; row.classList.add('is-open'); }
    hideFloat();
  });
});
const float = $('.space-float');
const floatInner = $('.space-float-inner');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
let fx = 0, fy = 0, tx = 0, ty = 0, raf = 0, floatOn = false;
function tick() {
  fx += (tx - fx) * (reduced ? 1 : 0.16); fy += (ty - fy) * (reduced ? 1 : 0.16);
  float.style.transform = `translate3d(${fx}px, ${fy}px, 0)`;
  raf = Math.abs(tx - fx) + Math.abs(ty - fy) > 0.3 ? requestAnimationFrame(tick) : 0;
}
function hideFloat() { floatOn = false; float.classList.remove('is-on'); }
rows.forEach(row => {
  const btn = $('.space-btn', row);
  btn.addEventListener('pointerenter', e => {
    if (!finePointer.matches || e.pointerType !== 'mouse' || row.classList.contains('is-open')) return;
    floatInner.style.backgroundImage = `url("${row.dataset.img}")`;
    if (!floatOn) { fx = tx = e.clientX; fy = ty = e.clientY; }
    floatOn = true; float.classList.add('is-on');
  });
  btn.addEventListener('pointermove', e => {
    if (!floatOn) return;
    tx = e.clientX; ty = e.clientY;
    if (!raf) raf = requestAnimationFrame(tick);
  });
  btn.addEventListener('pointerleave', hideFloat);
});
addEventListener('scroll', () => { if (floatOn) hideFloat(); }, { passive: true });

/* ---------- Schedule chooser ---------- */
const scheduleCta = $('[data-schedule-cta]');
function setRhythm(id) {
  const f = business.frequencies.find(x => x.id === id);
  $('[data-schedule-word]').textContent = f.id === 'discuss' ? 'To discuss' : f.name;
  $('[data-schedule-note]').textContent = f.note;
  scheduleCta.dataset.frequency = f.id;
  scheduleCta.textContent = f.id === 'discuss' ? 'Request a quote and talk it through' : `Request a ${f.name.toLowerCase()} quote`;
  const w = $('[data-schedule-word]');
  w.classList.remove('is-swap'); void w.offsetWidth; w.classList.add('is-swap');
}
$$('input[name="rhythm"]').forEach(r => r.addEventListener('change', () => setRhythm(r.value)));
setRhythm('weekly');

/* ---------- Pressure washing: surfaces + before/after ---------- */
$$('.surface').forEach(b => b.addEventListener('click', () => b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'))));
$('[data-washing-cta]').addEventListener('click', e => {
  const picked = $$('.surface[aria-pressed="true"]').map(b => b.textContent.trim());
  openQuote({ services: ['washing'], notes: picked.length ? `Surfaces to mention: ${picked.join(', ')}.` : '' }, e.currentTarget);
});

const compare = $('[data-compare]');
const handle = $('.compare-handle', compare);
let pos = 50;
function setPos(v) {
  pos = Math.max(0, Math.min(100, v));
  compare.style.setProperty('--pos', `${pos}%`);
  handle.setAttribute('aria-valuenow', String(Math.round(pos)));
  handle.setAttribute('aria-valuetext', `${Math.round(pos)}% before`);
}
const fromPointer = e => { const r = compare.getBoundingClientRect(); setPos(((e.clientX - r.left) / r.width) * 100); };
compare.addEventListener('pointerdown', e => { compare.setPointerCapture(e.pointerId); compare.classList.add('is-drag'); fromPointer(e); handle.focus({ preventScroll: true }); });
compare.addEventListener('pointermove', e => { if (compare.hasPointerCapture(e.pointerId)) fromPointer(e); });
compare.addEventListener('pointerup', () => compare.classList.remove('is-drag'));
compare.addEventListener('pointercancel', () => compare.classList.remove('is-drag'));
handle.addEventListener('keydown', e => {
  const step = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5, PageDown: -20, PageUp: 20 }[e.key];
  if (step !== undefined) { e.preventDefault(); setPos(pos + step); }
  if (e.key === 'Home') { e.preventDefault(); setPos(0); }
  if (e.key === 'End') { e.preventDefault(); setPos(100); }
});

/* ---------- FAQ ---------- */
$$('.faq-btn').forEach(btn => btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!open));
  document.getElementById(btn.getAttribute('aria-controls')).hidden = open;
  btn.closest('.faq-item').classList.toggle('is-open', !open);
}));

/* ---------- Quote flow ---------- */
const dialog = $('#quote');
const form = $('[data-q-form]');
const steps = ['Service', 'Space', 'Rhythm', 'Details', 'Review'];
const fresh = () => ({ services: [], space: '', frequency: '', name: '', company: '', email: '', phone: '', notes: '' });
let q = fresh();
let step = 0;
let returnToReview = false;
let opener = null;
let errors = {};
const svcName = id => business.services.find(s => s.id === id)?.name || id;
const spaceName = id => business.facilities.find(f => f.id === id)?.name || '';
const freqName = id => business.frequencies.find(f => f.id === id)?.name || '';

$('[data-q-progress]').innerHTML = steps.map((s, i) => `<li data-i="${i}"><span class="bar"></span><span class="lbl">${pad(i + 1)} ${s}</span></li>`).join('');

function openQuote(prefill = {}, from = document.activeElement) {
  opener = from;
  q = fresh(); errors = {}; returnToReview = false;
  if (prefill.services) q.services = [...prefill.services];
  if (prefill.space) q.space = prefill.space;
  if (prefill.frequency) q.frequency = prefill.frequency;
  if (prefill.notes) q.notes = prefill.notes;
  // Skip to the first step that still needs an answer.
  step = !q.services.length ? 0 : !q.space ? 1 : !q.frequency ? 2 : 3;
  render();
  dialog.showModal();
  document.documentElement.classList.add('is-locked');
  requestAnimationFrame(() => { dialog.classList.add('is-open'); focusStep(); });
}
function closeQuote() {
  dialog.classList.remove('is-open');
  document.documentElement.classList.remove('is-locked');
  setTimeout(() => { dialog.close(); opener?.focus?.({ preventScroll: true }); }, reduced ? 0 : 280);
}
dialog.addEventListener('cancel', e => { e.preventDefault(); closeQuote(); });
dialog.addEventListener('click', e => { if (e.target === dialog) closeQuote(); });
$('[data-q-close]').addEventListener('click', closeQuote);

document.addEventListener('click', e => {
  const t = e.target.closest('[data-quote]');
  if (!t) return;
  if (menuOpen) closeMenu(false);
  openQuote({ services: t.dataset.service ? [t.dataset.service] : undefined, space: t.dataset.space, frequency: t.dataset.frequency }, t);
});

function choice(type, name, value, checked, title, note, extra = '') {
  return `<label class="q-choice">
    <input type="${type}" name="${name}" value="${value}" ${checked ? 'checked' : ''}>
    <span class="q-mark" aria-hidden="true">${icon('check')}</span>
    ${extra}
    <span class="q-text"><span class="q-name">${esc(title)}</span><span class="q-note">${esc(note)}</span></span>
  </label>`;
}
function fieldErr(k) { return errors[k] ? `<p class="q-error" id="err-${k}">${esc(errors[k])}</p>` : ''; }
function field(k, label, type, req, auto, hint = '') {
  const tag = type === 'textarea'
    ? `<textarea id="f-${k}" name="${k}" rows="3" ${errors[k] ? `aria-invalid="true" aria-describedby="err-${k}"` : ''}>${esc(q[k])}</textarea>`
    : `<input id="f-${k}" name="${k}" type="${type}" value="${esc(q[k])}" autocomplete="${auto}" ${req ? 'aria-required="true"' : ''} ${errors[k] ? `aria-invalid="true" aria-describedby="err-${k}"` : ''}>`;
  return `<div class="q-field ${errors[k] ? 'has-error' : ''}"><label for="f-${k}">${esc(label)}${req ? ' <span aria-hidden="true">*</span><span class="sr-only">(required)</span>' : ' <span class="opt">optional</span>'}</label>${tag}${hint}${fieldErr(k)}</div>`;
}

function render() {
  const total = steps.length;
  $('[data-q-count]').textContent = step < total ? `Step ${pad(step + 1)} / ${pad(total)} · ${steps[step]}` : 'Complete';
  $$('[data-q-progress] li').forEach((li, i) => { li.classList.toggle('is-done', i < step); li.classList.toggle('is-current', i === step); if (i === step) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current'); });
  $('[data-q-progress]').hidden = step >= total;
  const back = $('[data-q-back]');
  const next = $('[data-q-next]');
  $('[data-q-foot]').hidden = step >= total;
  back.hidden = step === 0;
  next.innerHTML = step === total - 1 ? `Send request (demo) ${icon('arrow')}` : returnToReview && step < total - 1 ? `Back to review ${icon('arrow')}` : `Continue ${icon('arrow')}`;
  let html = '';
  if (step === 0) {
    html = `<fieldset class="q-set"><legend class="q-legend">Which services would you like to discuss?</legend><p class="q-help">Choose one or more.</p>
      ${business.services.map((s, i) => choice('checkbox', 'services', s.id, q.services.includes(s.id), s.name, s.short, `<span class="q-num">${pad(i + 1)}</span>`)).join('')}
      ${fieldErr('services')}</fieldset>`;
  } else if (step === 1) {
    html = `<fieldset class="q-set"><legend class="q-legend">What kind of space is it?</legend><p class="q-help">One choice is enough to begin.</p>
      ${business.facilities.map(f => choice('radio', 'space', f.id, q.space === f.id, f.name, f.blurb, `<span class="q-thumb" style="background-image:url('${f.image}')"></span>`)).join('')}
      ${fieldErr('space')}</fieldset>`;
  } else if (step === 2) {
    html = `<fieldset class="q-set"><legend class="q-legend">How often should we come?</legend><p class="q-help">Contracts welcome. Nothing is fixed until you agree to a plan.</p>
      ${business.frequencies.map((f, i) => choice('radio', 'frequency', f.id, q.frequency === f.id, f.name, f.note, `<span class="q-num">${pad(i + 1)}</span>`)).join('')}
      ${fieldErr('frequency')}</fieldset>`;
  } else if (step === 3) {
    const summary = Object.keys(errors).length ? `<div class="q-summary" role="alert" tabindex="-1"><p>Please check ${Object.keys(errors).length === 1 ? 'one field' : `${Object.keys(errors).length} fields`} below.</p></div>` : '';
    html = `<fieldset class="q-set"><legend class="q-legend">Where should we reach you?</legend><p class="q-help">Fields marked * are required.</p>${summary}
      <div class="q-fields">
        ${field('name', 'Your name', 'text', true, 'name')}
        ${field('company', 'Company or building', 'text', false, 'organization')}
        ${field('email', 'Email', 'email', true, 'email')}
        ${field('phone', 'Phone', 'tel', true, 'tel')}
        <div class="q-wide">${field('notes', 'Anything we should know', 'textarea', false, 'off')}</div>
      </div></fieldset>`;
  } else if (step === 4) {
    const row = (label, value, to) => `<div class="q-review-row"><dt>${label}</dt><dd>${value || '<span class="muted">Not given</span>'}</dd><dd class="q-edit"><button type="button" class="link" data-edit="${to}">Edit<span class="sr-only"> ${label}</span></button></dd></div>`;
    html = `<div class="q-set"><h3 class="q-legend" tabindex="-1">Review your request</h3><p class="q-help">Nothing is sent in this demo.</p>
      <dl class="q-review">
        ${row('Services', esc(q.services.map(svcName).join(', ')), 0)}
        ${row('Space', esc(spaceName(q.space)), 1)}
        ${row('Rhythm', esc(freqName(q.frequency)), 2)}
        ${row('Contact', [q.name, q.company, q.email, q.phone].filter(Boolean).map(esc).join('<br>'), 3)}
        ${row('Notes', esc(q.notes).replace(/\n/g, '<br>'), 3)}
      </dl></div>`;
  } else {
    html = `<div class="q-done" tabindex="-1">
      <span class="q-done-mark" aria-hidden="true">${icon('check')}</span>
      <p class="label">Thank you${q.name ? `, ${esc(q.name.split(' ')[0])}` : ''}</p>
      <h3>Demo complete — nothing was sent.</h3>
      <p>To request a real quote, call <a class="link" href="${business.tel}">${business.phone}</a>.</p>
      <div class="btn-row"><a class="btn btn-olive" href="${business.tel}">${icon('phone')} Call ${business.phone}</a><button type="button" class="btn btn-ghost" data-q-finish>Back to the site</button></div>
    </div>`;
  }
  form.innerHTML = html;
  form.scrollTop = 0;
}
function focusStep() {
  const target = $('.q-summary', form) || $('.q-done', form) || $('[aria-invalid="true"]', form) || $('input, textarea', form) || $('.q-legend[tabindex]', form);
  target?.focus({ preventScroll: true });
}
function collect() {
  if (step === 0) q.services = $$('input[name="services"]:checked', form).map(i => i.value);
  if (step === 1) q.space = $('input[name="space"]:checked', form)?.value || '';
  if (step === 2) q.frequency = $('input[name="frequency"]:checked', form)?.value || '';
  if (step === 3) ['name', 'company', 'email', 'phone', 'notes'].forEach(k => { q[k] = $(`#f-${k}`, form).value.trim(); });
}
function validate() {
  errors = {};
  if (step === 0 && !q.services.length) errors.services = 'Choose at least one service to continue.';
  if (step === 1 && !q.space) errors.space = 'Choose the kind of space.';
  if (step === 2 && !q.frequency) errors.frequency = 'Choose a rhythm, or “Not sure yet”.';
  if (step === 3) {
    if (!q.name) errors.name = 'Please enter your name.';
    if (!q.email) errors.email = 'Please enter your email.'; else if (!validEmail(q.email)) errors.email = 'Enter an email like name@company.com.';
    if (!q.phone) errors.phone = 'Please enter a phone number.'; else if (!validPhone(q.phone)) errors.phone = 'Enter a 10-digit phone number.';
  }
  return !Object.keys(errors).length;
}
function go(to) { step = to; render(); focusStep(); }
$('[data-q-next]').addEventListener('click', () => {
  collect();
  if (!validate()) { render(); focusStep(); return; }
  if (step === steps.length - 1) { go(steps.length); toast('Demo complete — nothing was sent.'); return; }
  if (returnToReview) { returnToReview = false; go(steps.length - 1); return; }
  go(step + 1);
});
$('[data-q-back]').addEventListener('click', () => { collect(); errors = {}; returnToReview = false; go(step - 1); });
form.addEventListener('submit', e => { e.preventDefault(); $('[data-q-next]').click(); });
form.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('input:not([type="checkbox"]):not([type="radio"])')) { e.preventDefault(); $('[data-q-next]').click(); } });
form.addEventListener('click', e => {
  const ed = e.target.closest('[data-edit]');
  if (ed) { returnToReview = true; errors = {}; go(Number(ed.dataset.edit)); }
  if (e.target.closest('[data-q-finish]')) closeQuote();
});
// Clear a field's error once the user corrects it.
form.addEventListener('input', e => {
  const k = e.target.name;
  if (errors[k] && step === 3) {
    const v = e.target.value.trim();
    const ok = k === 'email' ? validEmail(v) : k === 'phone' ? validPhone(v) : !!v;
    if (ok) { delete errors[k]; const f = e.target.closest('.q-field'); f.classList.remove('has-error'); $('.q-error', f)?.remove(); e.target.removeAttribute('aria-invalid'); e.target.removeAttribute('aria-describedby'); }
  }
});
form.addEventListener('change', e => { if (e.target.matches('input[type="radio"], input[type="checkbox"]') && errors[e.target.name]) { delete errors[e.target.name]; $('.q-error', form)?.remove(); } });

/* ---------- Reveal ---------- */
$$('.section-head, .schedule-intro, .schedule-choose, .washing-copy, .compare-fig, .faq-intro, .why-copy > h2').forEach(el => el.setAttribute('data-reveal', ''));
reveal();
