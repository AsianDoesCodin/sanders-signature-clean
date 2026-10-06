// Shared pieces every Sanders concept uses: verified facts, demo notice, toast, reveal, validation.
import './kit.css';

export const business = {
  name: 'Sanders Signature Clean, LLC',
  short: 'Sanders Signature Clean',
  phone: '(256) 947-2307',
  tel: 'tel:+12569472307',
  street: '2719 Atlantic St SW',
  locality: 'Huntsville, AL 35805',
  city: 'Huntsville, Alabama',
  source: 'https://cm.hsvchamber.org/list/member/sanders-signature-clean-llc-44464',
  credentials: ['Licensed & insured', 'Free quotes', 'Customized to your needs', 'Contracts welcome'],
  frequencies: [
    { id: 'daily', name: 'Daily', note: 'For high-traffic spaces that need to look ready every morning.' },
    { id: 'weekly', name: 'Weekly', note: 'A steady rhythm for offices and spaces with moderate traffic.' },
    { id: 'biweekly', name: 'Bi-weekly', note: 'A regular reset for lighter-use spaces.' },
    { id: 'discuss', name: 'Not sure yet', note: 'Tell us about your space and we will talk it through together.' }
  ],
  facilities: [
    { id: 'school', name: 'Schools', single: 'School', image: '/images/school.webp', alt: 'Illustrative photo of a clean school corridor',
      blurb: 'Classrooms, corridors and shared spaces that see a lot of feet every day.',
      talk: ['When the building is empty and easiest to clean', 'Which rooms and corridors see the most traffic', 'How often you want classrooms, restrooms and common areas covered'] },
    { id: 'medical', name: 'Medical facilities', single: 'Medical facility', image: '/images/medical.webp', alt: 'Illustrative photo of a clean medical waiting room',
      blurb: 'Waiting rooms, offices and shared areas where first impressions matter.',
      talk: ['Your office hours and the best window for service', 'Which areas you want included in the plan', 'Any building or practice requirements we should know about'] },
    { id: 'office', name: 'Office buildings', single: 'Office building', image: '/images/office.webp', alt: 'Illustrative photo of a clean office lobby',
      blurb: 'Lobbies, workspaces, breakrooms and restrooms, ready for the people who use them.',
      talk: ['Floors, suites or common areas to include', 'Daily, weekly or bi-weekly service', 'Access and timing that suits your tenants or team'] },
    { id: 'other', name: 'Other commercial spaces', single: 'Other commercial space', image: '/images/property.webp', alt: 'Illustrative photo of a commercial brick building entrance',
      blurb: 'Storefronts, shared buildings and other commercial properties.',
      talk: ['What kind of space you have and how it is used', 'Interior cleaning, exterior washing, or both', 'A schedule and scope that fits your budget'] }
  ],
  services: [
    { id: 'cleaning', name: 'Commercial cleaning', image: '/images/gen/crew-office.webp', alt: 'Illustrative photo of a professional vacuuming an office',
      short: 'Interior cleaning for the places where Huntsville works, learns and cares.',
      body: 'Commercial cleaning for schools, medical facilities, office buildings and other commercial spaces, customized to what your space actually needs.',
      prompts: ['Entrances and lobbies', 'Offices and workstations', 'Restrooms', 'Breakrooms and kitchens', 'Floors', 'Glass and high-touch surfaces'] },
    { id: 'washing', name: 'Pressure washing', image: '/images/gen/storefront-wash.webp', alt: 'Illustrative photo of a sidewalk being pressure washed',
      short: 'A fresh first impression, from the outside in.',
      body: 'Exterior pressure washing with a scope tailored to your property. Tell us about the surfaces you want cleaned.',
      prompts: ['Sidewalks and entrances', 'Building exteriors', 'Storefronts', 'Parking areas', 'Dumpster pads', 'Walkways and patios'] },
    { id: 'recurring', name: 'Scheduled service', image: '/images/gen/cart.webp', alt: 'Illustrative photo of an organized cleaning cart',
      short: 'Daily, weekly or bi-weekly care. Contracts welcome.',
      body: 'Set a routine that fits your building and your calendar. Daily, weekly and bi-weekly service is available, and service contracts are welcome.',
      prompts: ['Daily service', 'Weekly service', 'Bi-weekly service', 'Service contract', 'One-time clean to start'] }
  ],
  steps: [
    { title: 'Reach out', body: 'Call (256) 947-2307 or request a free quote online.' },
    { title: 'Tell us about your space', body: 'Your facility, the areas that matter and how often you need service.' },
    { title: 'Get a plan that fits', body: 'A cleaning scope customized to your needs, with a free quote.' },
    { title: 'Settle into a routine', body: 'Daily, weekly or bi-weekly service, with contracts welcome.' }
  ],
  faqs: [
    { q: 'Are quotes really free?', a: 'Yes. Sanders Signature Clean offers free quotes. Call (256) 947-2307 or start a request on this page.' },
    { q: 'Are you licensed and insured?', a: 'Yes. Sanders Signature Clean is licensed and insured.' },
    { q: 'What kinds of buildings do you clean?', a: 'Schools, medical facilities, office buildings and other commercial spaces.' },
    { q: 'How often can you come?', a: 'Daily, weekly or bi-weekly. Service contracts are welcome, and the plan is customized to your needs.' },
    { q: 'Do you offer pressure washing?', a: 'Yes. Exterior pressure washing is offered alongside commercial cleaning. Tell us which surfaces you want cleaned.' },
    { q: 'Where are you based?', a: 'Huntsville, Alabama, at 2719 Atlantic St SW.' }
  ]
};

export const embedded = new URLSearchParams(location.search).get('preview') === '1';

export const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
export const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value).trim());
export const validPhone = value => String(value).replace(/\D/g, '').length >= 10;

// Demo notice + way back to the gallery. Inside the sandboxed gallery preview the link opens a new tab.
export function demoBar(conceptName) {
  const bar = document.createElement('div');
  bar.className = 'bl-demo-bar';
  bar.innerHTML = `<p><strong>Demo website</strong> · ${esc(conceptName)}, a proposed design for ${business.name}. Sample enquiry flow, illustrative photos. Made by <a href="https://bluelotuscoding.com" target="_blank" rel="noopener noreferrer">Blue Lotus Coding</a>.</p><a class="bl-demo-back" href="/" ${embedded ? 'target="_blank" rel="noopener noreferrer"' : ''}>← All designs</a>`;
  document.body.prepend(bar);
  return bar;
}

let toastTimer;
export function toast(message) {
  let el = document.querySelector('.bl-toast');
  if (!el) { el = document.createElement('div'); el.className = 'bl-toast'; el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite'); document.body.append(el); }
  el.textContent = message;
  el.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-visible'), 3200);
}

// Adds .is-in to [data-reveal] elements as they scroll into view. Content stays visible without JS or with reduced motion.
export function reveal(root = document) {
  const items = [...root.querySelectorAll('[data-reveal]:not(.is-in)')];
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { items.forEach(el => el.classList.add('is-in')); return; }
  document.documentElement.classList.add('bl-reveal-ready');
  const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  items.forEach(el => io.observe(el));
}
