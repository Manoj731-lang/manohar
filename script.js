'use strict';

const SHOP = {
  city: 'Hyderabad',
  address: 'Jubilee Hills, Hyderabad, Telangana',
  area: 'Jubilee Hills, Hyderabad',
  phone: '+91 40 1234 5678',
  phoneLink: '+914012345678',
  email: 'hello@itswaffle.example',
  timezone: 'Asia/Kolkata',
  opensAt: 10,
  closesAt: 22
};

const MENU = [
  { id: 'maple-butter', name: 'Maple butter', category: 'Classic', price: 189, description: 'Golden waffle, whipped maple butter, a little sea salt.', image: 'photo-1528207776546-365bb710ee93', tag: 'A little classic', alt: 'Golden breakfast waffle served with maple butter' },
  { id: 'brown-butter', name: 'Brown butter', category: 'Classic', price: 209, description: 'Nutty brown butter, warm cinnamon sugar, happy sighs.', image: 'photo-1562376552-0d160a2f238d', tag: 'House favorite', alt: 'Fresh golden waffle ready to enjoy' },
  { id: 'honey-crunch', name: 'Honey crunch', category: 'Classic', price: 199, description: 'Local honey, toasted almonds, and a lovely little crunch.', image: 'photo-1484723091739-30a097e8f929', tag: '', alt: 'Warm breakfast plate with honey and fresh fruit' },
  { id: 'choco-cloud', name: 'Choco cloud', category: 'Chocolate', price: 249, description: 'Silky chocolate, soft cream, cocoa dust. No notes.', image: 'photo-1562376552-0d160a2f238d', tag: 'Chocolate fix', alt: 'Waffle topped with chocolate and fresh berries' },
  { id: 'cookie-crumble', name: 'Cookie crumble', category: 'Chocolate', price: 269, description: 'Chocolate sauce, cookie crumbs, and vanilla cream.', image: 'photo-1551024506-0bccd828d307', tag: '', alt: 'Fresh sweet treats with chocolate and crumb topping' },
  { id: 'double-trouble', name: 'Double trouble', category: 'Chocolate', price: 279, description: 'Dark chocolate, milk chocolate, and zero regrets.', image: 'photo-1490474418585-ba9bad8fd0ea', tag: 'A fan favorite', alt: 'Rich chocolate dessert topped with fresh fruit' },
  { id: 'berry-bliss', name: 'Berry bliss', category: 'Fruit', price: 259, description: 'Strawberries, blueberries, vanilla cream, big smiles.', image: 'photo-1562376552-0d160a2f238d', tag: 'Seasonal', alt: 'Waffle with strawberries, blueberries, and cream' },
  { id: 'banana-sunshine', name: 'Banana sunshine', category: 'Fruit', price: 229, description: 'Caramelized banana, honey, and a pinch of cinnamon.', image: 'photo-1490474418585-ba9bad8fd0ea', tag: '', alt: 'Fresh banana and fruit ready for a sweet breakfast' },
  { id: 'tropical-pop', name: 'Tropical pop', category: 'Fruit', price: 249, description: 'Mango, pineapple, coconut flakes. Hello, sunshine.', image: 'photo-1484723091739-30a097e8f929', tag: 'Bright & sunny', alt: 'Colorful tropical fruit and a sunny breakfast spread' },
  { id: 'sundae-waffle', name: 'Sundae waffle', category: 'Ice-cream', price: 299, description: 'Vanilla bean scoop, warm chocolate, the best of both.', image: 'photo-1562376552-0d160a2f238d', tag: 'Best of both', alt: 'Warm waffle with berries and a scoop of ice cream' },
  { id: 'strawberry-scoop', name: 'Strawberry scoop', category: 'Ice-cream', price: 289, description: 'Fresh strawberries, strawberry ice cream, pink sprinkles.', image: 'photo-1490474418585-ba9bad8fd0ea', tag: '', alt: 'Bright fresh strawberries with a sweet dessert' },
  { id: 'choco-meltdown', name: 'Choco meltdown', category: 'Ice-cream', price: 319, description: 'Two scoops, hot fudge, toasted hazelnut, total joy.', image: 'photo-1551024506-0bccd828d307', tag: 'Big treat energy', alt: 'Decadent chocolate dessert with a generous topping' },
  { id: 'iced-latte', name: 'Iced latte', category: 'Drinks', price: 149, description: 'A double shot, cold milk, and a very good ice situation.', image: 'photo-1442512595331-e89e73853f31', tag: '', alt: 'Freshly brewed iced coffee in a cozy cafe' },
  { id: 'strawberry-milk', name: 'Strawberry milk', category: 'Drinks', price: 159, description: 'Real berries blended with cold, creamy milk.', image: 'photo-1490474418585-ba9bad8fd0ea', tag: 'Made with fruit', alt: 'Fresh strawberries for a fruity cold drink' },
  { id: 'cold-brew', name: 'Slow cold brew', category: 'Drinks', price: 139, description: "Steeped slow, served cold. Your waffle's best friend.", image: 'photo-1442512595331-e89e73853f31', tag: '', alt: 'A freshly poured cup of coffee at a cafe' }
];

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1400&q=88', alt: 'Waffle topped with strawberries and berries', caption: 'Berry bliss, made fresh.' },
  { src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1400&q=88', alt: 'A warm breakfast spread with fresh fruit', caption: 'Slow mornings, happy plates.' },
  { src: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1400&q=88', alt: 'A colorful bowl of fresh fruit and berries', caption: 'A little color goes a long way.' },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=88', alt: 'Coffee in a cozy cafe', caption: 'Your favorite kind of coffee break.' },
  { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=88', alt: 'Freshly made sweet treats ready to share', caption: 'Made to share (or not).' }
];

const STORAGE_KEYS = { cart: 'its-waffle-cart-v1', theme: 'its-waffle-theme-v1', newsletter: 'its-waffle-newsletter-v1' };
const productById = new Map(MENU.map((product) => [product.id, product]));
const currency = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let selectedCategory = 'All';
let cart = readStorage(STORAGE_KEYS.cart, {});
let previousFocus = null;
let reviewIndex = 0;
let reviewTimer;
let activeGalleryIndex = 0;

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // The page remains usable if browser storage is unavailable.
  }
}

function applyShopDetails() {
  document.querySelectorAll('[data-shop-city]').forEach((node) => { node.textContent = SHOP.city; });
  document.querySelectorAll('[data-shop-address]').forEach((node) => { node.textContent = SHOP.address; });
  document.querySelectorAll('[data-shop-phone]').forEach((node) => {
    node.textContent = SHOP.phone;
    node.href = `tel:${SHOP.phoneLink}`;
  });
  document.querySelectorAll('[data-shop-email]').forEach((node) => {
    node.textContent = SHOP.email;
    node.href = `mailto:${SHOP.email}`;
  });
  const map = document.querySelector('.map-frame iframe');
  if (map) {
    map.title = `Map showing the sample It's Waffle location in ${SHOP.area}`;
    map.src = `https://maps.google.com/maps?q=${encodeURIComponent(SHOP.area)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  }
  document.querySelectorAll('[data-map-link]').forEach((link) => {
    link.href = `https://maps.google.com/?q=${encodeURIComponent(SHOP.area)}`;
  });
}

function renderMenu() {
  const grid = document.querySelector('#menu-grid');
  const searchInput = document.querySelector('#menu-search');
  const resultCount = document.querySelector('#menu-result-count');
  if (!grid || !searchInput || !resultCount) return;
  const search = searchInput.value.trim().toLocaleLowerCase();
  const filtered = MENU.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = `${product.name} ${product.description} ${product.category}`.toLocaleLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  document.querySelector('#menu-result-count').textContent = `${filtered.length} ${filtered.length === 1 ? 'little lovely' : 'little lovelies'} on the menu`;
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="menu-empty"><strong>No waffles found (yet).</strong>Try another search or choose a different category.</div>';
    return;
  }

  grid.innerHTML = filtered.map((product) => `
    <article class="menu-card">
      <div class="menu-card-image">
        <img src="https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80" alt="${product.alt}" loading="lazy" width="700" height="520">
        ${product.tag ? `<span class="menu-card-tag">${product.tag}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-title-row"><h3>${product.name}</h3><span class="menu-card-price">${currency.format(product.price)}</span></div>
        <p class="menu-card-description">${product.description}</p>
        <button class="menu-card-add" type="button" data-add-to-cart="${product.id}" aria-label="Add ${product.name} to your bag"><span aria-hidden="true">+</span> Add to bag</button>
      </div>
    </article>`).join('');
}

function getCartItems() {
  return Object.entries(cart).filter(([id, quantity]) => productById.has(id) && Number.isInteger(quantity) && quantity > 0).map(([id, quantity]) => ({ product: productById.get(id), quantity }));
}

function renderCart() {
  const items = getCartItems();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartItems = document.querySelector('#cart-items');
  const empty = document.querySelector('#cart-empty');
  const summary = document.querySelector('#cart-summary');
  const trigger = document.querySelector('#cart-trigger');

  document.querySelector('#cart-count').textContent = count;
  trigger.setAttribute('aria-label', `Open cart, ${count} ${count === 1 ? 'item' : 'items'}`);
  document.querySelector('#cart-subtotal').textContent = currency.format(total);
  empty.classList.toggle('is-visible', count === 0);
  summary.classList.toggle('is-empty', count === 0);

  cartItems.innerHTML = items.map(({ product, quantity }) => `
    <article class="cart-line" data-cart-line="${product.id}">
      <img src="https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=180&q=70" alt="" loading="lazy" width="67" height="67">
      <div><h3>${product.name}</h3><span class="cart-line-price">${currency.format(product.price)} each</span>
        <div class="quantity-controls" aria-label="Quantity for ${product.name}">
          <button type="button" data-quantity-change="-1" data-product-id="${product.id}" aria-label="Remove one ${product.name}">−</button><span aria-live="polite">${quantity}</span><button type="button" data-quantity-change="1" data-product-id="${product.id}" aria-label="Add one ${product.name}">+</button>
        </div>
      </div>
      <div class="cart-line-end"><span class="cart-line-total">${currency.format(product.price * quantity)}</span><button class="cart-remove" type="button" data-remove-item="${product.id}" aria-label="Remove ${product.name} from your bag">Remove</button></div>
    </article>`).join('');
  saveStorage(STORAGE_KEYS.cart, cart);
}

function addToCart(id) {
  if (!productById.has(id)) return;
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  const product = productById.get(id);
  document.querySelector('#cart-trigger').setAttribute('aria-label', `${product.name} added. Open cart, ${getCartItems().reduce((sum, item) => sum + item.quantity, 0)} items`);
  const addButton = document.querySelector(`[data-add-to-cart="${id}"]`);
  if (addButton) {
    const original = addButton.innerHTML;
    addButton.innerHTML = '<span aria-hidden="true">✓</span> Added';
    window.setTimeout(() => { if (addButton.isConnected) addButton.innerHTML = original; }, 1100);
  }
}

function openCart() {
  const shell = document.querySelector('#drawer-shell');
  if (!shell.hidden) return;
  previousFocus = document.activeElement;
  shell.hidden = false;
  document.body.classList.add('drawer-open');
  document.querySelector('#cart-close').focus();
}

function closeCart() {
  const shell = document.querySelector('#drawer-shell');
  if (shell.hidden) return;
  shell.hidden = true;
  document.body.classList.remove('drawer-open');
  if (previousFocus instanceof HTMLElement) previousFocus.focus();
}

function setTheme(theme) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.querySelector('#theme-toggle')?.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
  document.querySelector('meta[name="theme-color"]').content = dark ? '#211d19' : '#fff8ec';
  saveStorage(STORAGE_KEYS.theme, dark ? 'dark' : 'light');
}

function getZonedTime() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: SHOP.timezone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return { weekday: values.weekday, minutes: Number(values.hour) * 60 + Number(values.minute) };
}

function formatShopTime(hour) {
  const utcTimestamp = Date.UTC(2020, 0, 1, hour);
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: SHOP.timezone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(new Date(utcTimestamp));
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, Number(value)]));
  const zonedTimestamp = Date.UTC(values.year, values.month - 1, values.day, values.hour, values.minute);
  const localTimestamp = new Date(utcTimestamp - (zonedTimestamp - utcTimestamp));
  return new Intl.DateTimeFormat('en-IN', { timeZone: SHOP.timezone, hour: 'numeric', minute: '2-digit' }).format(localTimestamp);
}

function updateOpeningStatus() {
  const { minutes } = getZonedTime();
  const opening = SHOP.opensAt * 60;
  const closing = SHOP.closesAt * 60;
  const isOpen = minutes >= opening && minutes < closing;
  const statusText = isOpen ? `Open now · until ${formatShopTime(SHOP.closesAt)}` : `Closed · opens at ${formatShopTime(SHOP.opensAt)}`;

  document.querySelectorAll('#open-status, #hours-status').forEach((node) => {
    const text = node.id === 'hours-status' ? node.lastElementChild : node;
    if (text) text.textContent = statusText;
    const dot = node.querySelector('.status-dot') || node.previousElementSibling;
    if (dot?.classList.contains('status-dot')) dot.classList.toggle('is-closed', !isOpen);
  });
}

function initializeReveal() {
  const revealItems = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-revealed'));
    animateCounters();
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      if (entry.target.querySelector('[data-count]') || entry.target.matches('[data-count]')) animateCounters(entry.target);
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealItems.forEach((item) => observer.observe(item));
}

function animateCounters(container = document) {
  const counters = container.querySelectorAll('[data-count]:not([data-counted])');
  counters.forEach((counter) => {
    counter.dataset.counted = 'true';
    const target = Number(counter.dataset.count);
    const format = (value) => counter.dataset.format === 'compact' && value >= 10000 ? `${Math.floor(value / 1000)}k` : Math.floor(value).toLocaleString('en-IN');
    if (reducedMotion) {
      counter.textContent = format(target);
      return;
    }
    const start = performance.now();
    const duration = 1050;
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      counter.textContent = format(target * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function initializeActiveNavigation() {
  if (!('IntersectionObserver' in window)) return;
  const links = [...document.querySelectorAll('.primary-nav a')];
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  const sections = links.map((link) => {
    const target = new URL(link.href, location.href);
    const targetFile = target.pathname.split('/').pop() || 'index.html';
    return targetFile === currentFile && target.hash ? document.querySelector(target.hash) : null;
  }).filter(Boolean);
  links.forEach((link) => {
    const target = new URL(link.href, location.href);
    const targetFile = target.pathname.split('/').pop() || 'index.html';
    if (targetFile === currentFile && !target.hash) {
      link.classList.add('is-current');
      link.setAttribute('aria-current', 'page');
    }
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('is-current', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-28% 0px -62% 0px' });
  sections.forEach((section) => observer.observe(section));
}

function showReview(nextIndex) {
  const slides = [...document.querySelectorAll('.review-slide')];
  if (slides.length === 0) return;
  reviewIndex = (nextIndex + slides.length) % slides.length;
  slides.forEach((slide, index) => {
    const active = index === reviewIndex;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  document.querySelector('#review-announcement').textContent = `Review ${reviewIndex + 1} of ${slides.length}`;
  const progress = document.querySelector('#review-progress');
  progress.classList.remove('is-running');
  void progress.offsetWidth;
  if (!reducedMotion) progress.classList.add('is-running');
}

function startReviewCarousel() {
  const stage = document.querySelector('.review-stage');
  if (!stage) return;
  const stop = () => window.clearInterval(reviewTimer);
  const start = () => {
    stop();
    if (!reducedMotion && !document.hidden) reviewTimer = window.setInterval(() => showReview(reviewIndex + 1), 6000);
  };
  document.querySelector('#review-prev').addEventListener('click', () => { showReview(reviewIndex - 1); start(); });
  document.querySelector('#review-next').addEventListener('click', () => { showReview(reviewIndex + 1); start(); });
  stage.addEventListener('pointerenter', stop);
  stage.addEventListener('pointerleave', start);
  stage.addEventListener('focusin', stop);
  stage.addEventListener('focusout', (event) => { if (!stage.contains(event.relatedTarget)) start(); });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  showReview(0);
  start();
}

function showGalleryImage(index) {
  if (!document.querySelector('#lightbox')) return;
  activeGalleryIndex = (index + GALLERY.length) % GALLERY.length;
  const image = GALLERY[activeGalleryIndex];
  document.querySelector('#lightbox-image').src = image.src;
  document.querySelector('#lightbox-image').alt = image.alt;
  document.querySelector('#lightbox-caption').textContent = image.caption;
}

function validateField(input) {
  const error = document.querySelector(`#${input.name}-error`);
  if (!error) return true;
  let message = '';
  if (!input.value.trim()) message = 'A little something here is needed.';
  else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) message = 'That email address needs another look.';
  else if (input.name === 'message' && input.value.trim().length < 8) message = 'Could you add a few more details?';
  error.textContent = message;
  input.setAttribute('aria-invalid', String(Boolean(message)));
  return !message;
}

function setupContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const fields = [...form.querySelectorAll('input, textarea')];
  fields.forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const valid = fields.map(validateField).every(Boolean);
    if (!valid) {
      fields.find((field) => field.getAttribute('aria-invalid') === 'true')?.focus();
      document.querySelector('#form-feedback').textContent = '';
      return;
    }
    const [name, email, message] = fields.map((field) => field.value.trim());
    const subject = encodeURIComponent(`A note from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    document.querySelector('#form-feedback').textContent = 'Your email draft is ready. Send it from your email app to reach us.';
    window.location.href = `mailto:${SHOP.email}?subject=${subject}&body=${body}`;
    form.reset();
    fields.forEach((field) => field.removeAttribute('aria-invalid'));
    form.querySelectorAll('.field-error').forEach((error) => { error.textContent = ''; });
  });
}

function setupNewsletter() {
  const form = document.querySelector('#newsletter-form');
  if (!form) return;
  const input = document.querySelector('#newsletter-email');
  const feedback = document.querySelector('#newsletter-feedback');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!input.validity.valid || !input.value.trim()) {
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      feedback.textContent = input.value.trim() ? 'That email address needs another look.' : 'Add your email address to join us.';
      return;
    }
    input.removeAttribute('aria-invalid');
    saveStorage(STORAGE_KEYS.newsletter, input.value.trim());
    feedback.textContent = 'Thanks! Your email is saved on this device for this demo.';
    form.reset();
  });
  input.addEventListener('input', () => {
    if (input.getAttribute('aria-invalid') === 'true') {
      input.removeAttribute('aria-invalid');
      feedback.textContent = '';
    }
  });
}

function initialize() {
  applyShopDetails();
  renderMenu();
  renderCart();
  setTheme(readStorage(STORAGE_KEYS.theme, 'light'));
  updateOpeningStatus();
  window.setInterval(updateOpeningStatus, 60_000);
  initializeReveal();
  initializeActiveNavigation();
  startReviewCarousel();
  setupContactForm();
  setupNewsletter();
  const currentYear = document.querySelector('#current-year');
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  document.querySelector('.category-tabs')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    selectedCategory = button.dataset.category;
    document.querySelectorAll('.category-tab').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    renderMenu();
  });
  document.querySelector('#menu-search')?.addEventListener('input', renderMenu);
  document.querySelector('#menu-grid')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-add-to-cart]');
    if (button) addToCart(button.dataset.addToCart);
  });
  document.querySelector('#cart-trigger').addEventListener('click', openCart);
  document.querySelector('#cart-close').addEventListener('click', closeCart);
  document.querySelector('#drawer-backdrop').addEventListener('click', closeCart);
  document.querySelector('#cart-browse').addEventListener('click', () => {
    closeCart();
    window.location.href = 'menu.html#menu';
  });
  document.querySelector('#cart-items').addEventListener('click', (event) => {
    const changeButton = event.target.closest('[data-quantity-change]');
    const removeButton = event.target.closest('[data-remove-item]');
    if (changeButton) {
      const id = changeButton.dataset.productId;
      cart[id] = (cart[id] || 0) + Number(changeButton.dataset.quantityChange);
      if (cart[id] <= 0) delete cart[id];
      renderCart();
    } else if (removeButton) {
      delete cart[removeButton.dataset.removeItem];
      renderCart();
    }
  });
  document.querySelector('#checkout-button').addEventListener('click', () => {
    const order = getCartItems().map(({ product, quantity }) => `${quantity} × ${product.name} (${currency.format(product.price * quantity)})`).join('\n');
    if (!order) return;
    const total = getCartItems().reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const subject = encodeURIComponent("I'd love to order from It's Waffle");
    const body = encodeURIComponent(`Hello! I'd like to place this order:\n\n${order}\n\nSubtotal: ${currency.format(total)}\n\nMy name: `);
    window.location.href = `mailto:${SHOP.email}?subject=${subject}&body=${body}`;
  });
  document.querySelector('#theme-toggle')?.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  const menuToggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#primary-nav');
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute('aria-label', expanded ? 'Open navigation menu' : 'Close navigation menu');
    nav.classList.toggle('is-open', !expanded);
  });
  nav.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    nav.classList.remove('is-open');
  });

  document.addEventListener('keydown', (event) => {
    const drawerShell = document.querySelector('#drawer-shell');
    if (!drawerShell.hidden && event.key === 'Tab') {
      const focusable = [...document.querySelectorAll('#cart-drawer button:not([disabled]), #cart-drawer a[href], #cart-drawer [tabindex]:not([tabindex="-1"])')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    if (event.key === 'Escape' && !drawerShell.hidden) {
      closeCart();
      return;
    }
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
      nav.classList.remove('is-open');
      menuToggle.focus();
    }
    const menuSearch = document.querySelector('#menu-search');
    if (menuSearch && event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      event.preventDefault();
      menuSearch.focus();
    }
    const lightbox = document.querySelector('#lightbox');
    if (!lightbox?.open) return;
    if (event.key === 'Escape') {
      lightbox.close();
      return;
    }
    if (event.key === 'ArrowRight') showGalleryImage(activeGalleryIndex + 1);
    if (event.key === 'ArrowLeft') showGalleryImage(activeGalleryIndex - 1);
  });
  document.querySelector('.gallery-grid')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-gallery-index]');
    if (!button) return;
    showGalleryImage(Number(button.dataset.galleryIndex));
    document.querySelector('#lightbox').showModal();
  });
  document.querySelector('#lightbox-prev')?.addEventListener('click', () => showGalleryImage(activeGalleryIndex - 1));
  document.querySelector('#lightbox-next')?.addEventListener('click', () => showGalleryImage(activeGalleryIndex + 1));
  document.querySelector('#lightbox')?.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  });

  const backToTop = document.querySelector('#back-to-top');
  const updateBackToTop = () => backToTop.classList.toggle('is-visible', window.scrollY > 500);
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' }));
}

document.addEventListener('DOMContentLoaded', initialize, { once: true });
