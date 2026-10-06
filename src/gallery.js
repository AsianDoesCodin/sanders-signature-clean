import './studio-v2.css';
import './gallery-motion.css';
import { business, concepts } from './data.js';
import { icon } from './icons.js';

const sandbox = 'allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox';
document.querySelector('#app').innerHTML = `
  <header class="studio-nav"><a class="studio-brand" href="/" aria-label="Demo studio home"><img src="/studio/blue-lotus-logo.webp" alt=""><span>Blue Lotus Coding<small>CLIENT DEMO STUDIO</small></span></a><nav><a href="#collection">The collection</a><button class="text-button" id="brief-open">Project brief ${icon('external')}</button></nav></header>
  <main class="studio-main">
    <section class="studio-intro" id="intro"><img class="studio-hero-image" src="/studio/blue-lotus-hero.webp" alt="" fetchpriority="high"><div class="studio-hero-shade"></div><div class="intro-content"><p class="eyebrow">PREPARED FOR SANDERS SIGNATURE CLEAN, LLC</p><h1>A cleaner space.<br><em>Six ways to say it.</em></h1><div class="intro-copy"><p>Six complete website directions for one Huntsville business. Explore the services, build a cleaning enquiry, and find your signature.</p></div><a class="studio-primary" href="#collection">Explore the collection</a><div class="direction-index">${concepts.map(c=>`<a href="#direction-${c.id}"><span>${c.number}</span>${c.name}</a>`).join('')}</div><p class="intro-location">COMMERCIAL CLEANING & PRESSURE WASHING &nbsp; / &nbsp; HUNTSVILLE, ALABAMA</p></div><a class="scroll-cue" href="#collection"><span></span>SCROLL TO EXPLORE</a></section>
    <section class="concept-grid" aria-label="Six website concepts">${concepts.map((c, index) => `
      ${index === 0 ? `<div class="collection-start" id="collection"><div class="collection-bar"><div><p class="eyebrow">THE COLLECTION</p><h2>Find the direction that feels like you.</h2></div><div class="global-views" role="group" aria-label="All preview sizes"><button class="active" data-global-mode="desktop" aria-pressed="true">${icon('desktop')} Desktop</button><button data-global-mode="mobile" aria-pressed="false">${icon('mobile')} Mobile</button></div></div>` : ''}
      <article class="concept-card direction-${c.id}" id="direction-${c.id}" data-id="${c.id}" style="--direction:${c.accent}">
        <span class="ghost-number" aria-hidden="true">${c.number}</span><div class="card-story"><p class="direction-kicker"><span>${c.number}</span> WEBSITE DIRECTION</p><div class="card-title"><h3>${c.name}</h3><p>${c.category}</p></div><div class="card-description"><p>${c.description}</p></div><div class="swatch-set" aria-label="Concept palette"><span style="background:${c.color}"></span><span style="background:${c.accent}"></span><span style="background:#f3f4ef"></span><div><strong>${c.tags.join(' · ')}</strong><small>${c.font === 'serif' ? 'Expressive serif' : 'Distinctive sans serif'} / ${c.name}</small></div></div><ul class="direction-features"><li>${icon('check')} Explore services and facility needs</li><li>${icon('check')} Build and review a cleaning enquiry</li><li>${icon('check')} Try the complete mobile experience</li></ul><div class="story-actions"><a class="view-website studio-primary" href="/${c.id}.html" target="_blank" rel="noopener noreferrer">View website ${icon('external')}</a><button class="fullscreen-button" data-fullscreen="${c.id}">${icon('expand')} Fullscreen</button></div></div>
        <div class="demo-display"><div class="browser-chrome"><span class="browser-dots"><i></i><i></i><i></i></span><span class="preview-address">Sanders Signature Clean / ${c.name}</span><div class="viewport-toggle" role="group" aria-label="${c.name} preview size"><button data-mode="desktop" class="active" aria-pressed="true" aria-label="${c.name} desktop view">Desktop</button><button data-mode="mobile" aria-pressed="false" aria-label="${c.name} mobile view">Mobile</button></div></div>
        <div class="preview-well" data-mode="desktop"><div class="iframe-stage"><iframe title="${c.name} live website preview" src="/${c.id}.html?preview=1" tabindex="-1" loading="lazy" sandbox="${sandbox}"></iframe></div><button class="preview-activate" aria-label="Explore ${c.name} live preview"><span>${icon('sparkles')} Explore this direction</span></button><span class="mobile-label" aria-hidden="true">MOBILE VIEW · 390px</span></div>
        <div class="preview-tools"><span>LIVE, INTERACTIVE PREVIEW</span><button class="finish-preview" hidden>Finish exploring ${icon('close')}</button><span class="preview-hint">Click to explore. Scroll inside the website.</span></div></div>
      </article>${index === 0 ? '</div>' : ''}`).join('')}</section>
  </main><nav class="section-dots" aria-label="Website directions">${concepts.map(c=>`<a href="#direction-${c.id}" aria-label="${c.number} ${c.name}"><span>${c.name}</span></a>`).join('')}</nav><footer class="studio-footer"><a href="https://bluelotuscoding.com" target="_blank" rel="noopener noreferrer">Blue Lotus Coding</a><span>Sanders Signature Clean, LLC · Design concepts</span><a href="#intro">Back to top</a></footer>
  <dialog id="fullscreen-dialog" class="fullscreen-dialog"><div class="fullscreen-topbar"><div><span class="fullscreen-number"></span><strong id="fullscreen-name"></strong></div><div class="fullscreen-views" role="group" aria-label="Fullscreen preview size"><button data-fs-mode="desktop" class="active" aria-pressed="true">${icon('desktop')} Desktop</button><button data-fs-mode="mobile" aria-pressed="false">${icon('mobile')} Mobile</button></div><button id="fullscreen-close" aria-label="Close fullscreen preview">${icon('close')}<span>Close</span></button></div><div class="fullscreen-content" data-mode="desktop"></div></dialog>
  <dialog id="brief-dialog" class="brief-dialog"><button id="brief-close" class="dialog-close" aria-label="Close project brief">${icon('close')}</button><p class="eyebrow">THE STARTING POINT</p><h2>Sanders Signature Clean, LLC</h2><p>Commercial cleaning and pressure washing in Huntsville, Alabama.</p><dl><dt>Spaces</dt><dd>Schools, medical facilities, office buildings, and other commercial properties.</dd><dt>Service</dt><dd>Customized to the client’s needs. Daily, weekly, and bi-weekly service; contracts welcomed.</dd><dt>Contact</dt><dd><a href="${business.tel}">${business.phone}</a><br>${business.address}<br>${business.locality}</dd><dt>Published credentials</dt><dd>Affordable, licensed, and insured. Free quotes.</dd></dl><p class="brief-caveat">The chamber listing provides no original brand assets or project photography. These demos use proposed visual identities and AI-generated illustrative photos. No reviews, prices, certifications, or client results have been invented.</p><a class="source-link" href="${business.source}" target="_blank" rel="noopener noreferrer">Read the chamber listing ${icon('external')}</a></dialog>`;

function scalePreview(card) {
  const well = card.querySelector('.preview-well');
  const width = well.dataset.mode === 'mobile' ? 390 : 1360;
  const scale = Math.min(well.clientWidth / width, well.dataset.mode === 'mobile' ? (well.clientHeight - 28) / 844 : 1);
  const frame = card.querySelector('iframe');
  frame.style.width = `${width}px`;
  frame.style.height = `${well.dataset.mode === 'mobile' ? 844 : well.clientHeight / scale}px`;
  frame.style.transform = `scale(${scale})`;
  card.querySelector('.iframe-stage').style.width = `${width * scale}px`;
  card.querySelector('.iframe-stage').style.height = `${parseFloat(frame.style.height) * scale}px`;
}
function setMode(card, mode) {
  card.querySelector('.preview-well').dataset.mode = mode;
  card.querySelectorAll('.viewport-toggle button').forEach(b => { const active = b.dataset.mode === mode; b.classList.toggle('active', active); b.setAttribute('aria-pressed', active); });
  scalePreview(card);
}
function deactivate(card) {
  card.classList.remove('is-interactive');
  card.querySelector('iframe').tabIndex = -1;
  card.querySelector('.finish-preview').hidden = true;
}
const cards = [...document.querySelectorAll('.concept-card')];
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const reveal = element => element.classList.add('is-revealed');

cards.forEach((card, index) => {
  card.classList.toggle('is-reversed', index % 2 === 1);
  [...card.querySelector('.card-story').children].forEach((element, step) => element.style.setProperty('--motion-step', step));
  card.addEventListener('focusin', () => reveal(card));
});
const introContent = document.querySelector('.intro-content');
[...introContent.children].forEach((element, step) => element.style.setProperty('--motion-step', step));
introContent.addEventListener('focusin', () => reveal(introContent));

// Keep each heading's accessible name intact while animating its visible letters.
document.querySelectorAll('.studio-intro h1, .card-title h3').forEach(heading => {
  heading.setAttribute('aria-label', heading.innerText.replace(/\s+/g, ' ').trim());
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  let character = 0;
  textNodes.forEach(node => {
    const fragment = document.createDocumentFragment();
    (node.textContent.match(/\S+|\s+/g) || []).forEach(part => {
      if (/^\s+$/.test(part)) { fragment.append(document.createTextNode(part)); return; }
      const word = document.createElement('span');
      word.className = 'motion-word';
      word.setAttribute('aria-hidden', 'true');
      [...part].forEach(letter => {
        const span = document.createElement('span');
        span.className = 'motion-char';
        span.textContent = letter;
        span.style.setProperty('--motion-char', character++);
        word.append(span);
      });
      fragment.append(word);
    });
    node.replaceWith(fragment);
  });
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    reveal(entry.target);
    revealObserver.unobserve(entry.target);
  }), { threshold: .16, rootMargin: '0px 0px -6% 0px' });
  [...cards, introContent, document.querySelector('.collection-bar')].forEach(element => revealObserver.observe(element));
  const updateMotion = () => document.documentElement.classList.toggle('motion-ready', !motionPreference.matches);
  motionPreference.addEventListener('change', updateMotion);
  updateMotion();
}
const directionDots = [...document.querySelectorAll('.section-dots a')];
const visibleDirections = new Map();
const directionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => visibleDirections.set(entry.target.id, entry.intersectionRatio));
  const activeId = [...visibleDirections].sort((a, b) => b[1] - a[1])[0];
  directionDots.forEach(dot => {
    const active = activeId?.[1] > 0 && dot.hash === `#${activeId[0]}`;
    dot.classList.toggle('active', active);
    if (active) dot.setAttribute('aria-current', 'location');
    else dot.removeAttribute('aria-current');
  });
}, { threshold: [0, .2, .4, .6, .8, 1] });
cards.forEach(card => directionObserver.observe(card));
const observer = new ResizeObserver(entries => entries.forEach(e => scalePreview(e.target.closest('.concept-card'))));
cards.forEach(card => {
  observer.observe(card.querySelector('.preview-well'));
  card.querySelector('.preview-activate').addEventListener('click', () => {
    cards.forEach(deactivate);
    card.classList.add('is-interactive');
    card.querySelector('iframe').tabIndex = 0;
    card.querySelector('.finish-preview').hidden = false;
    card.querySelector('.finish-preview').focus();
  });
  card.querySelector('.finish-preview').addEventListener('click', () => { deactivate(card); card.querySelector('.preview-activate').focus(); });
  card.querySelectorAll('.viewport-toggle button').forEach(b => b.addEventListener('click', () => setMode(card, b.dataset.mode)));
});
document.querySelectorAll('[data-global-mode]').forEach(b => b.addEventListener('click', () => {
  cards.forEach(card => setMode(card, b.dataset.globalMode));
  document.querySelectorAll('[data-global-mode]').forEach(btn => { const active = btn === b; btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', active); });
}));
const fullscreen = document.querySelector('#fullscreen-dialog');
let opener;
document.querySelectorAll('[data-fullscreen]').forEach(button => button.addEventListener('click', () => {
  opener = button;
  cards.forEach(deactivate);
  const c = concepts.find(c => c.id === button.dataset.fullscreen);
  document.querySelector('#fullscreen-name').textContent = c.name;
  document.querySelector('.fullscreen-number').textContent = c.number;
  let websiteLink = document.querySelector('#fullscreen-website');
  if (!websiteLink) {
    websiteLink = document.createElement('a');
    websiteLink.id = 'fullscreen-website';
    websiteLink.target = '_blank';
    websiteLink.rel = 'noopener noreferrer';
    websiteLink.innerHTML = `View website ${icon('external')}`;
    document.querySelector('.fullscreen-topbar > div:first-child').append(websiteLink);
  }
  websiteLink.href = `/${c.id}.html`;
  document.querySelector('.fullscreen-content').innerHTML = `<iframe title="${c.name} fullscreen website preview" src="/${c.id}.html?preview=1" sandbox="${sandbox}"></iframe>`;
  setFullscreenMode('desktop');
  fullscreen.showModal();
  document.body.classList.add('modal-open');
}));
function setFullscreenMode(mode) {
  document.querySelector('.fullscreen-content').dataset.mode = mode;
  document.querySelectorAll('[data-fs-mode]').forEach(btn => { const active = btn.dataset.fsMode === mode; btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', active); });
}
document.querySelectorAll('[data-fs-mode]').forEach(b => b.addEventListener('click', () => setFullscreenMode(b.dataset.fsMode)));
document.querySelector('#fullscreen-close').addEventListener('click', () => fullscreen.close());
fullscreen.addEventListener('close', () => { document.querySelector('.fullscreen-content').innerHTML = ''; document.body.classList.remove('modal-open'); opener?.focus(); });
const brief = document.querySelector('#brief-dialog');
document.querySelector('#brief-open').addEventListener('click', () => brief.showModal());
document.querySelector('#brief-close').addEventListener('click', () => brief.close());
brief.addEventListener('click', e => { if (e.target === brief) { const r = brief.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) brief.close(); } });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !fullscreen.open) cards.forEach(deactivate); });
