'use strict';

const DEFAULT_SHOP = {
  city: 'Hyderabad',
  address: 'Jubilee Hills, Hyderabad, Telangana',
  area: 'Jubilee Hills, Hyderabad',
  phone: '+91 70325 54637',
  phoneLink: '+917032554637',
  whatsapp: '917032554637',
  email: 'hello@itswaffle.example',
  timezone: 'Asia/Kolkata',
  opensAt: 10,
  closesAt: 22
};

const DEFAULT_MENU = [
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

const DEFAULT_FEATURES = [
  { id: 'real-ingredients', title: 'Real ingredients', description: "Good butter, real fruit, and chocolate we'd eat straight from the bag. No shortcuts here.", icon: 'leaf', tone: 'yellow' },
  { id: 'made-for-you', title: 'Made just for you', description: 'We start your waffle when you order. Warm off the iron, never waiting under a heat lamp.', icon: 'heart', tone: 'pink' },
  { id: 'everyone', title: 'A place for everyone', description: "First dates, family treats, solo snacks. Pull up a chair; there's always room for one more.", icon: 'home', tone: 'green' },
  { id: 'little-details', title: 'Little details, lots of love', description: 'From the first pour of batter to the last strawberry on top, we sweat the small stuff.', icon: 'spark', tone: 'blue' }
];

const DEFAULT_REVIEWS = [
  { id: 'nisha-r', author: 'Nisha R.', detail: 'Chocolate cloud waffle fan', quote: 'The first bite made me close my eyes. The second made me order another one to take home.', rating: 5 },
  { id: 'karthik-m', author: 'Karthik M.', detail: 'Sunday strawberry regular', quote: 'Lovely people, warm waffles, and the best little afternoon treat. My kids already call this our place.', rating: 5 },
  { id: 'priya-s', author: 'Priya S.', detail: 'Maple butter loyalist', quote: 'I came in for a coffee. I left with a waffle, a happy mood, and a new favorite spot.', rating: 5 }
];

const STORAGE_KEYS = {
  cart: 'its-waffle-cart-v1',
  theme: 'its-waffle-theme-v1',
  newsletter: 'its-waffle-newsletter-v1',
  shop: 'its-waffle-shop-v1',
  menu: 'its-waffle-menu-v1',
  features: 'its-waffle-features-v1',
  reviews: 'its-waffle-reviews-v1',
  orders: 'its-waffle-orders-v1',
  customer: 'its-waffle-customer-v1'
};
const ADMIN_SESSION_KEY = 'its-waffle-admin-auth-v1';
const ADMIN_PASSWORD_KEY = 'its-waffle-admin-password-v1';
const ADMIN_RESET_OTP_KEY = 'its-waffle-admin-reset-otp-v1';
const ADMIN_RESET_EXPIRY_KEY = 'its-waffle-admin-reset-expiry-v1';
const ADMIN_CREDENTIALS = { username: 'admin', password: 'waffle-admin' };
let SHOP = { ...DEFAULT_SHOP, ...readStorage(STORAGE_KEYS.shop, {}) };
if (!SHOP.whatsapp || SHOP.phoneLink === '+914012345678' || SHOP.phone === '+91 40 1234 5678') {
  SHOP.phone = '+91 70325 54637';
  SHOP.phoneLink = '+917032554637';
  SHOP.whatsapp = '917032554637';
}
let MENU = readStorage(STORAGE_KEYS.menu, DEFAULT_MENU);
let FEATURES = readStorage(STORAGE_KEYS.features, DEFAULT_FEATURES);
let REVIEWS = readStorage(STORAGE_KEYS.reviews, DEFAULT_REVIEWS);
let productById = new Map(MENU.map((product) => [product.id, product]));
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
    return true;
  } catch {
    return false;
  }
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function menuImageSource(image, width = 700, quality = 80) {
  if (/^(https?:\/\/|data:image\/)/i.test(image)) return image;
  return `https://images.unsplash.com/${encodeURIComponent(image)}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

function readBlobAsDataURL(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Could not read that image.'));
    reader.readAsDataURL(blob);
  });
}

async function optimizeUploadedImage(file) {
  if (!file.type.startsWith('image/')) throw new Error('Choose an image file.');
  if (file.size > 8 * 1024 * 1024) throw new Error('Choose an image smaller than 8 MB.');
  const imageSource = await readBlobAsDataURL(file);
  const image = await new Promise((resolve, reject) => {
    const loadedImage = new Image();
    loadedImage.onload = () => resolve(loadedImage);
    loadedImage.onerror = () => reject(new Error('That image could not be opened.'));
    loadedImage.src = imageSource;
  });
  const scale = Math.min(1, 1000 / Math.max(image.width, image.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', 0.78));
  if (!blob) throw new Error('That image could not be compressed.');
  return readBlobAsDataURL(blob);
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
  document.querySelectorAll('[data-shop-area]').forEach((node) => {
    node.textContent = `Find us in ${SHOP.area}`;
  });
  document.querySelectorAll('[data-shop-hours]').forEach((node) => {
    node.innerHTML = `Every day<br>${formatShopTime(SHOP.opensAt)} – ${formatShopTime(SHOP.closesAt)}`;
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
        <img src="${escapeHTML(menuImageSource(product.image))}" alt="${escapeHTML(product.alt)}" loading="lazy" width="700" height="520">
        ${product.tag ? `<span class="menu-card-tag">${escapeHTML(product.tag)}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-title-row"><h3>${escapeHTML(product.name)}</h3><span class="menu-card-price">${currency.format(product.price)}</span></div>
        <p class="menu-card-description">${escapeHTML(product.description)}</p>
        <button class="menu-card-add" type="button" data-add-to-cart="${escapeHTML(product.id)}" aria-label="Add ${escapeHTML(product.name)} to your bag"><span aria-hidden="true">+</span> Add to bag</button>
      </div>
    </article>`).join('');
}

const FEATURE_ICONS = {
  leaf: '<path d="M16 4c-5 0-9 4-9 9 0 9 9 15 9 15s9-6 9-15c0-5-4-9-9-9Z"/><path d="M12 14c2-1 6-1 8 0m-7 4c2-1 4-1 6 0"/>',
  heart: '<path d="M16 27S4 20 4 11a6 6 0 0 1 12-1 6 6 0 0 1 12 1c0 9-12 16-12 16Z"/><path d="M11 13h.01M20 17h.01M15 20h.01"/>',
  home: '<path d="M4 17 16 6l12 11M8 14v13h16V14M13 27v-8h6v8"/><path d="m13 10 3-3 3 3"/>',
  spark: '<path d="M16 3v26M3 16h26M6.8 6.8l18.4 18.4m0-18.4L6.8 25.2"/><path d="m16 3 2 4h-4l2-4Zm13 13-4 2v-4l4 2ZM16 29l-2-4h4l-2 4ZM3 16l4-2v4l-4-2Z"/>'
};

function renderFeatures() {
  document.querySelectorAll('.features-grid').forEach((grid) => {
    grid.innerHTML = FEATURES.map((feature, index) => {
      const icon = FEATURE_ICONS[feature.icon] || FEATURE_ICONS.spark;
      const tone = ['yellow', 'pink', 'green', 'blue'].includes(feature.tone) ? feature.tone : 'yellow';
      return `<article class="feature-card reveal"${index ? ` data-reveal-delay="${Math.min(index * 80, 240)}"` : ''}>
        <span class="feature-icon feature-icon-${tone}"><svg viewBox="0 0 32 32" aria-hidden="true">${icon}</svg></span>
        <h3>${escapeHTML(feature.title)}</h3><p>${escapeHTML(feature.description)}</p>
      </article>`;
    }).join('');
  });
}

function renderReviews() {
  document.querySelectorAll('.review-stage').forEach((container) => {
    const slides = REVIEWS.length === 0
      ? '<p class="review-empty">Reviews will be here soon.</p>'
      : REVIEWS.map((review, index) => {
        const rating = Math.min(5, Math.max(1, Number(review.rating) || 5));
        const initial = escapeHTML((review.author || '?').trim().charAt(0).toUpperCase());
        const avatar = ['avatar-coral', 'avatar-green', 'avatar-yellow'][index % 3];
        return `<article class="review-slide${index === 0 ? ' is-active' : ''}" aria-hidden="${index !== 0}">
          <div class="review-stars" aria-label="${rating} out of 5 stars">${'★'.repeat(rating)}</div>
          <blockquote>“${escapeHTML(review.quote)}”</blockquote>
          <div class="review-byline"><span class="review-avatar ${avatar}">${initial}</span><span><strong>${escapeHTML(review.author)}</strong><small>${escapeHTML(review.detail)}</small></span><span class="review-quote-mark" aria-hidden="true">”</span></div>
        </article>`;
      }).join('');
    container.innerHTML = `<div data-review-slides>${slides}</div><div class="review-progress" aria-hidden="true"><span id="review-progress"></span></div>`;
  });
}

function getCartItems() {
  return Object.entries(cart).filter(([id, quantity]) => productById.has(id) && Number.isInteger(quantity) && quantity > 0).map(([id, quantity]) => ({ product: productById.get(id), quantity }));
}

function renderCart() {
  if (!document.querySelector('#cart-trigger')) return;
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
      <img src="${escapeHTML(menuImageSource(product.image, 180, 70))}" alt="" loading="lazy" width="67" height="67">
      <div><h3>${product.name}</h3><span class="cart-line-price">${currency.format(product.price)} each</span>
        <div class="quantity-controls" aria-label="Quantity for ${product.name}">
          <button type="button" data-quantity-change="-1" data-product-id="${product.id}" aria-label="Remove one ${product.name}">−</button><span aria-live="polite">${quantity}</span><button type="button" data-quantity-change="1" data-product-id="${product.id}" aria-label="Add one ${product.name}">+</button>
        </div>
      </div>
      <div class="cart-line-end"><span class="cart-line-total">${currency.format(product.price * quantity)}</span><button class="cart-remove" type="button" data-remove-item="${product.id}" aria-label="Remove ${product.name} from your bag">Remove</button></div>
    </article>`).join('');
  saveStorage(STORAGE_KEYS.cart, cart);
  updateCheckoutSummary();
}

function showCartView(viewName) {
  const bagView = document.querySelector('#cart-view-bag');
  const checkoutView = document.querySelector('#cart-view-checkout');
  const successView = document.querySelector('#cart-view-success');
  if (!bagView || !checkoutView) return;

  bagView.hidden = viewName !== 'bag';
  checkoutView.hidden = viewName !== 'checkout';
  if (successView) successView.hidden = viewName !== 'success';

  if (viewName === 'bag') {
    document.querySelector('#cart-items')?.scrollTo({ top: 0, behavior: 'instant' });
  } else if (viewName === 'checkout') {
    document.querySelector('.checkout-scroll-area')?.scrollTo({ top: 0, behavior: 'instant' });
  } else if (viewName === 'success') {
    document.querySelector('.checkout-success-body')?.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function updateCheckoutSummary() {
  const items = getCartItems();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const itemCountEl = document.querySelector('#checkout-item-count');
  const summaryList = document.querySelector('#checkout-summary-list');
  const subtotalEl = document.querySelector('#checkout-subtotal');
  const totalEl = document.querySelector('#checkout-total');
  const btnTotalEl = document.querySelector('#btn-total-price');

  if (itemCountEl) itemCountEl.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
  if (subtotalEl) subtotalEl.textContent = currency.format(total);
  if (totalEl) totalEl.textContent = currency.format(total);
  if (btnTotalEl) btnTotalEl.textContent = currency.format(total);

  if (summaryList) {
    if (items.length === 0) {
      summaryList.innerHTML = '<p class="mini-summary-empty">No waffles in your bag yet.</p>';
    } else {
      summaryList.innerHTML = items.map(({ product, quantity }) => `
        <div class="mini-summary-item">
          <span>${quantity} × ${escapeHTML(product.name)}</span>
          <strong>${currency.format(product.price * quantity)}</strong>
        </div>
      `).join('');
    }
  }
}

function openCheckoutForm() {
  const items = getCartItems();
  if (items.length === 0) return;
  showCartView('checkout');
  updateCheckoutSummary();

  // Populate saved customer info if available
  const savedCustomer = readStorage(STORAGE_KEYS.customer, null);
  if (savedCustomer) {
    const nameInput = document.querySelector('#order-name');
    const phoneInput = document.querySelector('#order-phone');
    const addressInput = document.querySelector('#order-address');
    const localitySelect = document.querySelector('#order-locality');
    const pincodeInput = document.querySelector('#order-pincode');
    if (nameInput && savedCustomer.name) nameInput.value = savedCustomer.name;
    if (phoneInput && savedCustomer.phone) phoneInput.value = savedCustomer.phone;
    if (addressInput && savedCustomer.address) addressInput.value = savedCustomer.address;
    if (localitySelect && savedCustomer.locality) {
      localitySelect.value = savedCustomer.locality;
      if (localitySelect.value !== savedCustomer.locality) {
        localitySelect.value = 'Other';
        const otherLoc = document.querySelector('#order-other-locality');
        const otherWrap = document.querySelector('#other-locality-wrap');
        if (otherLoc && otherWrap) {
          otherLoc.value = savedCustomer.locality;
          otherWrap.hidden = false;
        }
      }
    }
    if (pincodeInput && savedCustomer.pincode) pincodeInput.value = savedCustomer.pincode;
  }

  window.setTimeout(() => {
    document.querySelector('#order-name')?.focus();
  }, 100);
}

function processOrder({ viaWhatsApp = false } = {}) {
  const items = getCartItems();
  if (items.length === 0) return;
  const form = document.querySelector('#checkout-order-form');
  if (!form) return;

  const nameInput = document.querySelector('#order-name');
  const phoneInput = document.querySelector('#order-phone');
  const addressInput = document.querySelector('#order-address');
  const localitySelect = document.querySelector('#order-locality');
  const otherLocalityInput = document.querySelector('#order-other-locality');
  const pincodeInput = document.querySelector('#order-pincode');
  const instructionsInput = document.querySelector('#order-instructions');
  const orderType = form.querySelector('input[name="orderType"]:checked')?.value || 'delivery';
  const paymentMethod = form.querySelector('input[name="paymentMethod"]:checked')?.value || 'UPI on Delivery';

  // Clear previous errors
  form.querySelectorAll('.field-error').forEach((el) => { el.textContent = ''; });
  form.querySelectorAll('[aria-invalid]').forEach((el) => { el.removeAttribute('aria-invalid'); });

  let hasError = false;
  let firstInvalid = null;

  const setError = (input, errorElId, msg) => {
    hasError = true;
    if (input) input.setAttribute('aria-invalid', 'true');
    const errEl = document.querySelector(errorElId);
    if (errEl) errEl.textContent = msg;
    if (!firstInvalid && input) firstInvalid = input;
  };

  const name = nameInput ? nameInput.value.trim() : '';
  if (!name) {
    setError(nameInput, '#order-name-error', 'Please enter your full name');
  }

  const phone = phoneInput ? phoneInput.value.trim().replace(/\D/g, '') : '';
  if (!phone) {
    setError(phoneInput, '#order-phone-error', 'Please enter your 10-digit mobile number');
  } else if (phone.length !== 10) {
    setError(phoneInput, '#order-phone-error', `Mobile number must be exactly 10 digits (${phone.length}/10 entered)`);
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    setError(phoneInput, '#order-phone-error', 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9');
  }

  let finalLocality = '';
  let address = '';
  let pincode = '';

  if (orderType === 'delivery') {
    address = addressInput ? addressInput.value.trim() : '';
    if (!address || address.length < 5) {
      setError(addressInput, '#order-address-error', 'Please enter your building / street address in Hyderabad');
    }

    const selectedLocality = localitySelect ? localitySelect.value : '';
    if (!selectedLocality) {
      setError(localitySelect, '#order-locality-error', 'Please choose your area in Hyderabad');
    } else if (selectedLocality === 'Other') {
      const otherLoc = otherLocalityInput ? otherLocalityInput.value.trim() : '';
      if (!otherLoc) {
        setError(otherLocalityInput, '#order-other-locality-error', 'Please specify your area in Hyderabad');
      } else {
        finalLocality = otherLoc;
      }
    } else {
      finalLocality = selectedLocality;
    }

    pincode = pincodeInput ? pincodeInput.value.trim() : '';
    if (!pincode || !/^5\d{5}$/.test(pincode)) {
      setError(pincodeInput, '#order-pincode-error', 'Please enter a valid Hyderabad PIN code starting with 500 (e.g. 500033)');
    }
  }

  if (hasError) {
    firstInvalid?.focus();
    return;
  }

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const orderId = `#WFL-HYD-${Math.floor(1000 + Math.random() * 9000)}`;
  const instructions = instructionsInput ? instructionsInput.value.trim() : '';
  const fullAddress = orderType === 'delivery' 
    ? `${address}, ${finalLocality}, Hyderabad - ${pincode}` 
    : 'Store Pickup (Jubilee Hills, Hyderabad)';

  const orderRecord = {
    id: orderId,
    createdAt: new Date().toISOString(),
    customerName: name,
    customerPhone: phone,
    orderType,
    address: fullAddress,
    city: 'Hyderabad',
    pincode: orderType === 'delivery' ? pincode : '500033',
    instructions,
    paymentMethod,
    items: items.map((item) => ({ id: item.product.id, name: item.product.name, price: item.product.price, quantity: item.quantity })),
    total,
    status: 'Confirmed'
  };

  // Persist customer info for next time
  saveStorage(STORAGE_KEYS.customer, {
    name,
    phone,
    address: orderType === 'delivery' ? address : '',
    locality: orderType === 'delivery' ? finalLocality : '',
    pincode: orderType === 'delivery' ? pincode : ''
  });

  // Persist order in store orders list
  const existingOrders = readStorage(STORAGE_KEYS.orders, []);
  existingOrders.unshift(orderRecord);
  saveStorage(STORAGE_KEYS.orders, existingOrders);

  // Format WhatsApp message
  const itemsText = items.map((item) => `• ${item.quantity} × ${item.product.name} (₹${item.product.price * item.quantity})`).join('\n');
  const waMessage = 
`*🧇 New Order from It's Waffle!*
*Order ID:* ${orderId}

*Customer:* ${name}
*Phone:* +91 ${phone}
*Fulfillment:* ${orderType === 'delivery' ? '🛵 Home Delivery (Hyderabad Only)' : '🛍️ Store Takeaway (Jubilee Hills)'}
${orderType === 'delivery' ? `*Address (Hyderabad):*\n${fullAddress}` : `*Pickup Outlet:* Jubilee Hills, Hyderabad`}
${instructions ? `*Special Note:* ${instructions}\n` : ''}
*Order Items:*
${itemsText}

*Subtotal:* ${currency.format(total)}
*Delivery (Hyderabad):* FREE
*Total to Pay:* ${currency.format(total)}
*Payment Method:* ${paymentMethod}

_Please bake my order fresh! Thank you._`;

  const shopPhoneDigits = (SHOP.whatsapp || SHOP.phoneLink || '917032554637').replace(/\D/g, '');
  const waUrl = `https://wa.me/${shopPhoneDigits}?text=${encodeURIComponent(waMessage)}`;

  const successWaBtn = document.querySelector('#success-whatsapp-btn');
  if (successWaBtn) {
    successWaBtn.href = waUrl;
  }

  // Populate Success view
  const successOrderIdEl = document.querySelector('#success-order-id');
  const successCustomerEl = document.querySelector('#success-customer-details');
  const successPaymentEl = document.querySelector('#success-payment-method');
  const successAmountEl = document.querySelector('#success-amount');

  if (successOrderIdEl) successOrderIdEl.textContent = orderId;
  if (successCustomerEl) successCustomerEl.innerHTML = `<strong>${escapeHTML(name)}</strong> (+91 ${escapeHTML(phone)})<br><small>${escapeHTML(fullAddress)}</small>`;
  if (successPaymentEl) successPaymentEl.textContent = paymentMethod;
  if (successAmountEl) successAmountEl.textContent = currency.format(total);

  // Clear cart
  cart = {};
  saveStorage(STORAGE_KEYS.cart, cart);
  renderCart();

  // Switch to success view
  showCartView('success');

  // If clicked WhatsApp button, open it
  if (viaWhatsApp) {
    window.open(waUrl, '_blank');
  }
}

function setupCheckoutFormListeners() {
  const form = document.querySelector('#checkout-order-form');
  if (!form) return;

  // Order type change (Delivery vs Pickup)
  form.querySelectorAll('input[name="orderType"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      const isDelivery = radio.value === 'delivery';
      document.querySelector('#type-opt-delivery')?.classList.toggle('is-active', isDelivery);
      document.querySelector('#type-opt-pickup')?.classList.toggle('is-active', !isDelivery);
      const deliverySection = document.querySelector('#delivery-address-section');
      const pickupSection = document.querySelector('#pickup-info-section');
      if (deliverySection) deliverySection.hidden = !isDelivery;
      if (pickupSection) pickupSection.hidden = isDelivery;
    });
  });

  // Locality change (show Other field if Other selected)
  document.querySelector('#order-locality')?.addEventListener('change', (event) => {
    const isOther = event.target.value === 'Other';
    const otherWrap = document.querySelector('#other-locality-wrap');
    if (otherWrap) otherWrap.hidden = !isOther;
    if (isOther) document.querySelector('#order-other-locality')?.focus();
  });

  // Payment method options
  form.querySelectorAll('input[name="paymentMethod"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      form.querySelectorAll('.payment-option').forEach((opt) => {
        const input = opt.querySelector('input');
        opt.classList.toggle('is-active', input?.checked || false);
      });
    });
  });

  // Strict 10-digit mobile number input filter & validation
  const phoneInput = form.querySelector('#order-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      // Retain only numeric digits and cap strictly to 10
      const digits = phoneInput.value.replace(/\D/g, '').slice(0, 10);
      phoneInput.value = digits;

      const phoneError = document.querySelector('#order-phone-error');
      if (digits.length > 0 && digits.length < 10) {
        if (phoneError) phoneError.textContent = `Must be 10 digits (${digits.length}/10 entered)`;
        phoneInput.setAttribute('aria-invalid', 'true');
      } else if (digits.length === 10 && !/^[6-9]/.test(digits)) {
        if (phoneError) phoneError.textContent = 'Mobile number must start with 6, 7, 8, or 9';
        phoneInput.setAttribute('aria-invalid', 'true');
      } else if (phoneError) {
        phoneError.textContent = '';
        phoneInput.removeAttribute('aria-invalid');
      }
    });

    phoneInput.addEventListener('blur', () => {
      const digits = phoneInput.value.replace(/\D/g, '');
      const phoneError = document.querySelector('#order-phone-error');
      if (digits.length > 0 && digits.length !== 10) {
        if (phoneError) phoneError.textContent = `Mobile number must be exactly 10 digits (${digits.length}/10 entered)`;
        phoneInput.setAttribute('aria-invalid', 'true');
      }
    });
  }

  // Real-time error clearance on input
  form.querySelectorAll('input, select, textarea').forEach((input) => {
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') {
        input.removeAttribute('aria-invalid');
        const errEl = document.querySelector(`#${input.id}-error`);
        if (errEl) errEl.textContent = '';
      }
    });
  });

  // Form submit
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    processOrder({ viaWhatsApp: false });
  });

  // WhatsApp order button
  document.querySelector('#checkout-whatsapp-btn')?.addEventListener('click', () => {
    processOrder({ viaWhatsApp: true });
  });

  // Back to bag button
  document.querySelector('#checkout-back-button')?.addEventListener('click', () => {
    showCartView('bag');
  });

  // Close checkout button
  document.querySelector('#checkout-close')?.addEventListener('click', closeCart);

  // Success screen actions
  document.querySelector('#success-close')?.addEventListener('click', closeCart);
  document.querySelector('#success-continue-btn')?.addEventListener('click', closeCart);
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
  showCartView('bag');
  document.querySelector('#cart-close')?.focus();
}

function closeCart() {
  const shell = document.querySelector('#drawer-shell');
  if (shell.hidden) return;
  shell.hidden = true;
  document.body.classList.remove('drawer-open');
  window.setTimeout(() => {
    showCartView('bag');
  }, 280);
  if (previousFocus instanceof HTMLElement) previousFocus.focus();
}

function setTheme(theme) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.querySelector('#theme-toggle')?.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
  document.querySelector('meta[name="theme-color"]').content = dark ? '#211d19' : '#140b07';
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

const ADMIN_SECTIONS = {
  menu: { label: 'Menu items', collection: () => MENU },
  features: { label: 'Why Us cards', collection: () => FEATURES },
  reviews: { label: 'Reviews', collection: () => REVIEWS },
  shop: { label: 'Business details', collection: () => [SHOP] },
  orders: { label: 'Customer Orders (Hyderabad)', collection: () => readStorage(STORAGE_KEYS.orders, []) }
};
let adminSection = 'menu';
let adminEditingId = null;

function adminFormFields(record = {}) {
  const field = (name, label, type = 'text', value = '', attributes = '') => `<label class="admin-field">${label}<input name="${name}" type="${type}" value="${escapeHTML(value)}" ${attributes}></label>`;
  const area = (name, label, value = '', attributes = '') => `<label class="admin-field admin-field-wide">${label}<textarea name="${name}" rows="3" ${attributes}>${escapeHTML(value)}</textarea></label>`;

  if (adminSection === 'orders') {
    if (!record || !record.id) {
      return '<div class="admin-order-inspector"><p class="admin-empty-notice" style="padding:2rem 1rem; text-align:center; opacity:0.75;">Select an order from the list on the left to view customer & delivery details.</p></div>';
    }
    const dateStr = record.createdAt ? new Date(record.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : 'Recently';
    const itemsHtml = (record.items || []).map((it) => `
      <div class="admin-order-item-row" style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.08);">
        <span><strong>${it.quantity}×</strong> ${escapeHTML(it.name)}</span>
        <strong>${currency.format(it.price * it.quantity)}</strong>
      </div>
    `).join('');

    return `
      <div class="admin-order-inspector" style="width:100%; display:flex; flex-direction:column; gap:16px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.12);">
          <div>
            <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; opacity:0.7;">Order Reference</span>
            <h3 style="margin:2px 0 0; font-size:1.3rem;">${escapeHTML(record.id)}</h3>
            <span style="font-size:0.8rem; opacity:0.65;">Placed: ${escapeHTML(dateStr)}</span>
          </div>
          <span style="font-size:0.82rem; font-weight:700; padding:6px 14px; border-radius:999px; background:${record.orderType === 'delivery' ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)'}; color:${record.orderType === 'delivery' ? '#140b07' : 'inherit'};">
            ${record.orderType === 'delivery' ? '🛵 Hyderabad Delivery' : '🛍️ Jubilee Hills Pickup'}
          </span>
        </div>

        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:14px;">
          <h4 style="margin:0 0 8px; font-size:0.95rem; color:var(--color-primary);">Customer Contact</h4>
          <p style="margin:4px 0;"><strong>Name:</strong> ${escapeHTML(record.customerName || 'Customer')}</p>
          <p style="margin:4px 0;">
            <strong>Phone:</strong> <a href="tel:${escapeHTML(record.customerPhone)}" style="color:var(--color-primary); font-weight:600;">+91 ${escapeHTML(record.customerPhone)}</a>
            &nbsp;·&nbsp;
            <a href="https://wa.me/91${escapeHTML(record.customerPhone)}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:4px; color:#25d366; font-weight:600; text-decoration:none;">WhatsApp Customer ↗</a>
          </p>
        </div>

        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:14px;">
          <h4 style="margin:0 0 8px; font-size:0.95rem; color:var(--color-primary);">${record.orderType === 'delivery' ? '📍 Hyderabad Delivery Address' : '🏬 Store Pickup'}</h4>
          <p style="margin:4px 0; font-size:0.95rem; line-height:1.4;">${escapeHTML(record.address || 'Jubilee Hills, Hyderabad')}</p>
          ${record.instructions ? `<p style="margin:8px 0 0; padding-top:8px; border-top:1px dashed rgba(255,255,255,0.1); font-size:0.88rem;"><strong>Note:</strong> <em>${escapeHTML(record.instructions)}</em></p>` : ''}
        </div>

        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:14px;">
          <h4 style="margin:0 0 10px; font-size:0.95rem; color:var(--color-primary);">Ordered Waffles</h4>
          <div style="margin-bottom:12px;">
            ${itemsHtml}
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom:4px;">
            <span>Subtotal</span>
            <span>${currency.format(record.total)}</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom:8px;">
            <span>Hyderabad Delivery</span>
            <span style="color:#25d366; font-weight:700;">FREE</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:700; padding-top:8px; border-top:1px solid rgba(255,255,255,0.15);">
            <span>Total</span>
            <span style="color:var(--color-primary);">${currency.format(record.total)}</span>
          </div>
          <div style="margin-top:10px; font-size:0.85rem; opacity:0.85;">
            <strong>Payment:</strong> ${escapeHTML(record.paymentMethod || 'UPI on Delivery')}
          </div>
        </div>
      </div>
    `;
  }

  if (adminSection === 'menu') {
    const categories = [...new Set(['Classic', 'Chocolate', 'Fruit', 'Ice-cream', 'Drinks', record.category].filter(Boolean))];
    return `${field('name', 'Product name', 'text', record.name, 'required maxlength="60"')}
      <label class="admin-field">Category<select name="category" required>${categories.map((category) => `<option value="${escapeHTML(category)}"${category === record.category ? ' selected' : ''}>${escapeHTML(category)}</option>`).join('')}</select></label>
      ${field('price', 'Price (INR)', 'number', record.price, 'required min="0" step="1"')}
      ${field('tag', 'Small badge (optional)', 'text', record.tag, 'maxlength="32"')}
      ${area('description', 'Description', record.description, 'required maxlength="180"')}
      <input type="hidden" name="image" value="${escapeHTML(record.image || '')}">
      <label class="admin-field admin-field-wide" for="admin-product-image">Product image<input id="admin-product-image" name="productImageUpload" type="file" accept="image/*"${record.image ? '' : ' required'}></label>
      <img class="admin-upload-preview" id="admin-image-preview" src="${record.image ? escapeHTML(menuImageSource(record.image, 420, 75)) : ''}" alt="${escapeHTML(record.alt || '')}"${record.image ? '' : ' hidden'}>
      <small class="admin-upload-help">Choose an image from your device. Images are optimized before saving.</small>
      ${field('alt', 'Image description (alt text)', 'text', record.alt, 'required maxlength="140"')}`;
  }
  if (adminSection === 'features') {
    return `${field('title', 'Feature title', 'text', record.title, 'required maxlength="60"')}
      <label class="admin-field">Icon<select name="icon">${[['leaf','Leaf'],['heart','Heart'],['home','Home'],['spark','Spark']].map(([value,label]) => `<option value="${value}"${record.icon === value ? ' selected' : ''}>${label}</option>`).join('')}</select></label>
      <label class="admin-field">Accent<select name="tone">${[['yellow','Yellow'],['pink','Pink'],['green','Green'],['blue','Blue']].map(([value,label]) => `<option value="${value}"${record.tone === value ? ' selected' : ''}>${label}</option>`).join('')}</select></label>
      ${area('description', 'Description', record.description, 'required maxlength="180"')}`;
  }
  if (adminSection === 'reviews') {
    return `${field('author', 'Reviewer name', 'text', record.author, 'required maxlength="60"')}
      ${field('detail', 'Short descriptor', 'text', record.detail, 'required maxlength="70"')}
      ${field('rating', 'Rating (1-5)', 'number', record.rating ?? 5, 'required min="1" max="5" step="1"')}
      ${area('quote', 'Review quote', record.quote, 'required maxlength="280"')}`;
  }
  return `${field('city', 'City', 'text', SHOP.city, 'required maxlength="60"')}
    ${field('area', 'Area for map and directions', 'text', SHOP.area, 'required maxlength="100"')}
    ${field('address', 'Address', 'text', SHOP.address, 'required maxlength="160"')}
    ${field('phone', 'Display phone', 'text', SHOP.phone, 'required maxlength="40"')}
    ${field('phoneLink', 'Phone link digits (with country code)', 'tel', SHOP.phoneLink, 'required maxlength="20"')}
    ${field('email', 'Email address', 'email', SHOP.email, 'required maxlength="120"')}
    ${field('opensAt', 'Opening hour (0-23)', 'number', SHOP.opensAt, 'required min="0" max="23" step="1"')}
    ${field('closesAt', 'Closing hour (0-23)', 'number', SHOP.closesAt, 'required min="1" max="24" step="1"')}`;
}

function renderAdmin() {
  const admin = document.querySelector('#admin-app');
  if (!admin) return;
  const section = ADMIN_SECTIONS[adminSection];
  const records = section.collection();
  const editing = records.find((record) => record.id === adminEditingId) || (adminSection === 'shop' ? SHOP : null);

  const ordersCountEl = document.querySelector('#admin-orders-count');
  if (ordersCountEl) {
    ordersCountEl.textContent = readStorage(STORAGE_KEYS.orders, []).length;
  }

  document.querySelectorAll('[data-admin-section]').forEach((button) => {
    const active = button.dataset.adminSection === adminSection;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  document.querySelector('#admin-section-title').textContent = section.label;
  document.querySelector('#admin-add').hidden = adminSection === 'shop' || adminSection === 'orders';
  document.querySelector('#admin-delete').hidden = !editing || adminSection === 'shop';
  document.querySelector('#admin-save').hidden = adminSection === 'orders';
  document.querySelector('#admin-fields').innerHTML = adminFormFields(editing || {});
  const imageInput = document.querySelector('#admin-product-image');
  imageInput?.addEventListener('change', () => {
    const file = imageInput.files?.[0];
    if (!file) return;
    const preview = document.querySelector('#admin-image-preview');
    const reader = new FileReader();
    reader.onload = () => {
      preview.src = reader.result;
      preview.hidden = false;
    };
    reader.readAsDataURL(file);
  });
  document.querySelector('#admin-save').textContent = editing ? 'Save changes' : 'Create item';
  document.querySelector('#admin-record-list').innerHTML = adminSection === 'shop'
    ? `<button class="admin-record is-selected" type="button"><strong>${escapeHTML(SHOP.city)} shop</strong><span>${escapeHTML(SHOP.address)}</span></button>`
    : records.map((record) => {
      const id = escapeHTML(record.id);
      if (adminSection === 'orders') {
        const timeStr = record.createdAt ? new Date(record.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
        return `<button class="admin-record${record.id === adminEditingId ? ' is-selected' : ''}" type="button" data-record-id="${id}">
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%; gap:8px;">
            <strong>${id}</strong>
            <span class="badge" style="font-size:0.72rem; padding:2px 8px; border-radius:999px; background:${record.orderType === 'delivery' ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)'}; color:${record.orderType === 'delivery' ? '#140b07' : 'inherit'}; font-weight:700;">${record.orderType === 'delivery' ? 'Hyd Delivery' : 'Pickup'}</span>
          </div>
          <span style="display:flex; justify-content:space-between; margin-top:4px;">
            <span>${escapeHTML(record.customerName || 'Customer')} · ${currency.format(record.total)}</span>
            <small style="opacity:0.7;">${timeStr}</small>
          </span>
        </button>`;
      }
      const title = adminSection === 'menu' ? record.name : adminSection === 'features' ? record.title : record.author;
      const detail = adminSection === 'menu' ? `${record.category} · ${currency.format(record.price)}` : adminSection === 'features' ? record.description : record.quote;
      return `<button class="admin-record${record.id === adminEditingId ? ' is-selected' : ''}" type="button" data-record-id="${id}"><strong>${escapeHTML(title)}</strong><span>${escapeHTML(detail)}</span></button>`;
    }).join('');
  document.querySelector('#admin-empty').hidden = records.length > 0;
}

function persistAdminData() {
  let saved;
  if (adminSection === 'menu') {
    saved = saveStorage(STORAGE_KEYS.menu, MENU);
    productById = new Map(MENU.map((product) => [product.id, product]));
    renderMenu();
  } else if (adminSection === 'features') {
    saved = saveStorage(STORAGE_KEYS.features, FEATURES);
    renderFeatures();
  } else if (adminSection === 'reviews') {
    saved = saveStorage(STORAGE_KEYS.reviews, REVIEWS);
    reviewIndex = 0;
    renderReviews();
    showReview(0);
  } else {
    saved = saveStorage(STORAGE_KEYS.shop, SHOP);
    applyShopDetails();
    updateOpeningStatus();
  }
  document.querySelector('#admin-feedback').textContent = saved ? 'Saved in this browser.' : 'Could not save. Check browser storage settings.';
  renderAdmin();
}

function setupAdmin() {
  const admin = document.querySelector('#admin-app');
  if (!admin) return;
  document.querySelector('#admin-logout')?.addEventListener('click', () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    window.location.replace('admin-login.html');
  });
  document.querySelector('.admin-tabs').addEventListener('click', (event) => {
    const button = event.target.closest('[data-admin-section]');
    if (!button) return;
    adminSection = button.dataset.adminSection;
    const firstRecord = ADMIN_SECTIONS[adminSection].collection()[0];
    adminEditingId = adminSection === 'shop' ? 'shop' : firstRecord?.id || null;
    renderAdmin();
  });
  document.querySelector('#admin-add').addEventListener('click', () => {
    adminEditingId = null;
    document.querySelector('#admin-feedback').textContent = '';
    renderAdmin();
    document.querySelector('#admin-fields input, #admin-fields textarea')?.focus();
  });
  document.querySelector('#admin-record-list').addEventListener('click', (event) => {
    const button = event.target.closest('[data-record-id]');
    if (!button) return;
    adminEditingId = button.dataset.recordId;
    document.querySelector('#admin-feedback').textContent = '';
    renderAdmin();
  });
  document.querySelector('#admin-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    const records = adminSection === 'menu' ? MENU : adminSection === 'features' ? FEATURES : adminSection === 'reviews' ? REVIEWS : null;
    if (adminSection === 'shop') {
      SHOP = { ...SHOP, ...values, opensAt: Number(values.opensAt), closesAt: Number(values.closesAt) };
      persistAdminData();
      return;
    }
    if (adminSection === 'menu') {
      const imageFile = event.currentTarget.querySelector('[name="productImageUpload"]')?.files?.[0];
      if (imageFile) {
        try {
          values.image = await optimizeUploadedImage(imageFile);
        } catch (error) {
          document.querySelector('#admin-feedback').textContent = error.message;
          return;
        }
      }
      if (!values.image) {
        document.querySelector('#admin-feedback').textContent = 'Upload a product image before saving.';
        return;
      }
      delete values.productImageUpload;
    }
    const id = adminEditingId || `${(values.name || values.title || values.author).toLocaleLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || adminSection}-${Date.now()}`;
    let record;
    if (adminSection === 'menu') record = { ...values, id, price: Number(values.price) };
    else if (adminSection === 'features') record = { ...values, id };
    else record = { ...values, id, rating: Number(values.rating) };
    const index = records.findIndex((item) => item.id === id);
    if (index < 0) records.unshift(record);
    else records[index] = record;
    adminEditingId = id;
    persistAdminData();
  });
  document.querySelector('#admin-delete').addEventListener('click', () => {
    if (!adminEditingId || adminSection === 'shop') return;
    if (adminSection === 'orders') {
      const orders = readStorage(STORAGE_KEYS.orders, []);
      const index = orders.findIndex((item) => item.id === adminEditingId);
      if (index < 0) return;
      if (!window.confirm('Delete this customer order?')) return;
      orders.splice(index, 1);
      saveStorage(STORAGE_KEYS.orders, orders);
      adminEditingId = orders[0]?.id || null;
      renderAdmin();
      return;
    }
    const records = adminSection === 'menu' ? MENU : adminSection === 'features' ? FEATURES : REVIEWS;
    const index = records.findIndex((item) => item.id === adminEditingId);
    if (index < 0) return;
    if (!window.confirm('Delete this record? This change cannot be undone.')) return;
    records.splice(index, 1);
    adminEditingId = null;
    persistAdminData();
  });
  document.querySelector('#admin-reset').addEventListener('click', () => {
    if (!window.confirm('Restore the original sample content? This replaces saved admin edits in this browser.')) return;
    SHOP = { ...DEFAULT_SHOP };
    MENU = [...DEFAULT_MENU];
    FEATURES = [...DEFAULT_FEATURES];
    REVIEWS = [...DEFAULT_REVIEWS];
    ['shop', 'menu', 'features', 'reviews'].forEach((key) => localStorage.removeItem(STORAGE_KEYS[key]));
    productById = new Map(MENU.map((product) => [product.id, product]));
    adminEditingId = null;
    adminSection = 'menu';
    applyShopDetails();
    updateOpeningStatus();
    renderAdmin();
    document.querySelector('#admin-feedback').textContent = 'Sample content restored.';
  });
  adminEditingId = MENU[0]?.id || null;
  renderAdmin();
}

function setupAdminLogin() {
  const form = document.querySelector('#admin-login-form');
  if (!form) return;
  if (sessionStorage.getItem(ADMIN_SESSION_KEY) === 'authenticated') {
    window.location.replace('admin.html');
    return;
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(form);
    const username = String(values.get('username') || '').trim();
    const password = String(values.get('password') || '');
    const message = document.querySelector('#login-feedback');
    const savedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || ADMIN_CREDENTIALS.password;
    if (username !== ADMIN_CREDENTIALS.username || password !== savedPassword) {
      message.textContent = 'Those sign-in details do not match.';
      form.elements.password.setAttribute('aria-invalid', 'true');
      form.elements.password.focus();
      return;
    }
    sessionStorage.setItem(ADMIN_SESSION_KEY, 'authenticated');
    window.location.replace('admin.html');
  });
  form.addEventListener('input', () => {
    document.querySelector('#login-feedback').textContent = '';
    form.elements.password.removeAttribute('aria-invalid');
  });

  const resetFlow = document.querySelector('#admin-reset-flow');
  const showLogin = () => {
    resetFlow.hidden = true;
    form.hidden = false;
    document.querySelector('#login-title').textContent = 'Welcome back.';
    document.querySelector('.admin-login-intro').textContent = "Sign in to manage It's Waffle content.";
    document.querySelector('#login-feedback').textContent = '';
  };
  document.querySelector('#forgot-password-trigger').addEventListener('click', () => {
    form.hidden = true;
    resetFlow.hidden = false;
    document.querySelector('#login-title').textContent = 'Reset password.';
    document.querySelector('.admin-login-intro').textContent = 'Request a one-time demo code, then choose a new password.';
    document.querySelector('#reset-username').value = form.elements.username.value.trim();
    document.querySelector('#otp-request-feedback').textContent = '';
    document.querySelector('#otp-demo-code').hidden = true;
    document.querySelector('#admin-password-reset-form').hidden = true;
    document.querySelector('#reset-username').focus();
  });
  document.querySelector('#back-to-login').addEventListener('click', showLogin);
  document.querySelector('#admin-otp-request-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.querySelector('#reset-username').value.trim();
    const feedback = document.querySelector('#otp-request-feedback');
    if (username !== ADMIN_CREDENTIALS.username) {
      feedback.textContent = 'No admin account matches that username.';
      return;
    }
    const randomValue = new Uint32Array(1);
    if (window.crypto?.getRandomValues) window.crypto.getRandomValues(randomValue);
    else randomValue[0] = Math.floor(Math.random() * 1_000_000);
    const code = String(randomValue[0] % 1_000_000).padStart(6, '0');
    sessionStorage.setItem(ADMIN_RESET_OTP_KEY, code);
    sessionStorage.setItem(ADMIN_RESET_EXPIRY_KEY, String(Date.now() + 5 * 60_000));
    document.querySelector('#otp-demo-value').textContent = code;
    document.querySelector('#otp-demo-code').hidden = false;
    document.querySelector('#admin-password-reset-form').hidden = false;
    feedback.textContent = 'Demo code created. It expires in five minutes.';
    document.querySelector('#reset-otp').focus();
  });
  document.querySelector('#admin-password-reset-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const otp = String(values.get('otp') || '').trim();
    const password = String(values.get('newPassword') || '');
    const confirmPassword = String(values.get('confirmPassword') || '');
    const feedback = document.querySelector('#password-reset-feedback');
    if (!sessionStorage.getItem(ADMIN_RESET_OTP_KEY) || Date.now() > Number(sessionStorage.getItem(ADMIN_RESET_EXPIRY_KEY))) {
      feedback.textContent = 'That code has expired. Request a new one.';
      return;
    }
    if (otp !== sessionStorage.getItem(ADMIN_RESET_OTP_KEY)) {
      feedback.textContent = 'That one-time code does not match.';
      document.querySelector('#reset-otp').focus();
      return;
    }
    if (password.length < 8) {
      feedback.textContent = 'Use at least 8 characters for your new password.';
      document.querySelector('#new-admin-password').focus();
      return;
    }
    if (password !== confirmPassword) {
      feedback.textContent = 'The passwords do not match yet.';
      document.querySelector('#confirm-admin-password').focus();
      return;
    }
    try {
      localStorage.setItem(ADMIN_PASSWORD_KEY, password);
    } catch {
      feedback.textContent = 'Could not save the password in this browser.';
      return;
    }
    sessionStorage.removeItem(ADMIN_RESET_OTP_KEY);
    sessionStorage.removeItem(ADMIN_RESET_EXPIRY_KEY);
    event.currentTarget.reset();
    document.querySelector('#login-feedback').textContent = 'Password updated. Sign in with your new password.';
    showLogin();
  });
}

function initializePasswordVisibilityToggles() {
  document.querySelectorAll('input[type="password"]').forEach((input) => {
    if (input.parentElement.classList.contains('password-input-wrap')) return;
    const wrapper = document.createElement('span');
    wrapper.className = 'password-input-wrap';
    input.before(wrapper);
    wrapper.append(input);
    const toggle = document.createElement('button');
    toggle.className = 'password-visibility-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Show password');
    toggle.setAttribute('aria-pressed', 'false');
    toggle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>';
    toggle.addEventListener('click', () => {
      const reveal = input.type === 'password';
      input.type = reveal ? 'text' : 'password';
      toggle.setAttribute('aria-label', reveal ? 'Hide password' : 'Show password');
      toggle.setAttribute('aria-pressed', String(reveal));
    });
    wrapper.append(toggle);
  });
}

function initialize() {
  initializePasswordVisibilityToggles();
  if (document.querySelector('#admin-login-form')) {
    setupAdminLogin();
    return;
  }
  if (document.querySelector('#admin-app') && sessionStorage.getItem(ADMIN_SESSION_KEY) !== 'authenticated') {
    window.location.replace('admin-login.html');
    return;
  }
  initializeBrandLogo();
  initializeHeroImage();
  applyShopDetails();
  renderMenu();
  renderFeatures();
  renderReviews();
  renderCart();
  setTheme(readStorage(STORAGE_KEYS.theme, 'light'));
  updateOpeningStatus();
  window.setInterval(updateOpeningStatus, 60_000);
  initializeReveal();
  initializeActiveNavigation();
  startReviewCarousel();
  setupContactForm();
  setupNewsletter();
  setupAdmin();
  setupCheckoutFormListeners();
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
  document.querySelector('#cart-trigger')?.addEventListener('click', openCart);
  document.querySelector('#cart-close')?.addEventListener('click', closeCart);
  document.querySelector('#drawer-backdrop')?.addEventListener('click', closeCart);
  document.querySelector('#cart-browse')?.addEventListener('click', () => {
    closeCart();
    window.location.href = 'menu.html#menu';
  });
  document.querySelector('#cart-items')?.addEventListener('click', (event) => {
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
  document.querySelector('#checkout-button')?.addEventListener('click', () => {
    openCheckoutForm();
  });
  document.querySelector('#theme-toggle')?.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  const menuToggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menuToggle && nav) {
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
  }

  document.addEventListener('keydown', (event) => {
    const drawerShell = document.querySelector('#drawer-shell');
    if (drawerShell && !drawerShell.hidden && event.key === 'Tab') {
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
    if (event.key === 'Escape' && drawerShell && !drawerShell.hidden) {
      closeCart();
      return;
    }
    if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
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
  const updateBackToTop = () => backToTop?.classList.toggle('is-visible', window.scrollY > 500);
  if (backToTop) {
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
  }
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' }));
}

function initializeBrandLogo() {
  const probe = new Image();
  probe.addEventListener('load', () => {
    document.querySelectorAll('.brand').forEach((brand) => {
      const image = document.createElement('img');
      image.className = 'brand-logo-img';
      image.src = probe.src;
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      brand.replaceChildren(image);
      brand.classList.add('has-image-logo');
    });
  }, { once: true });
  probe.src = 'assets/waffle-logo.png';
}

function initializeHeroImage() {
  const image = document.querySelector('.hero-photo-frame img');
  if (!image) return;
  const useFallback = () => {
    if (image.dataset.fallbackApplied) return;
    image.dataset.fallbackApplied = 'true';
    image.src = 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1100&q=85';
    image.alt = 'Golden waffle topped with strawberries, berries, and a dusting of sugar';
  };
  image.addEventListener('error', useFallback, { once: true });
  if (image.complete && image.naturalWidth === 0) useFallback();
}

document.addEventListener('DOMContentLoaded', initialize, { once: true });
