import './styles.css';

const portrait = './assets/cara-burke.avif';

const packageGroups = [
  {
    id: 'lighting',
    label: 'Lighting packages',
    intro: 'Set the rhythm. Light up the stage.',
    packages: [
      { name: 'Pacemaker', tagline: 'Set the Rhythm. Light Up the Stage.', text: 'An entry-level lighting solution for smaller performances, intimate venues, and emerging artists.', tone: 'burgundy' },
      { name: 'Extraordinary', tagline: 'Go Beyond Ordinary.', text: 'An enhanced lighting experience designed to create greater visual impact for concerts and showcases.', tone: 'silver' },
      { name: 'Showtime Lite', tagline: 'Your Moment. Your Stage. Your Showtime.', text: 'A coordinated professional lighting presentation for artists and event organizers.', tone: 'black' }
    ]
  },
  {
    id: 'visuals',
    label: 'LED screens & visual packages',
    intro: 'Make the image impossible to miss.',
    packages: [
      { name: 'Blink', tagline: 'Capture Their Attention.', text: 'A visual display package for smaller events, performances, and presentations.', tone: 'silver' },
      { name: 'Stardom', tagline: 'Put Your Performance in the Spotlight.', text: 'An engaging visual backdrop for concerts, showcases, and entertainment productions.', tone: 'burgundy' },
      { name: 'Captivate', tagline: "Create a Visual Experience They Won't Forget.", text: 'A strong visual presence for large-scale performances and special entertainment events.', tone: 'black' }
    ]
  },
  {
    id: 'sound',
    label: 'Sound packages',
    intro: 'Feel every beat. Hear every moment.',
    packages: [
      { name: 'Your Sound', tagline: 'Your Vision. Your Sound.', text: 'A sound solution for artists with specific audio preferences or production requirements.', tone: 'black' },
      { name: 'Our Sound', tagline: 'Professional Sound. Exceptional Experiences.', text: 'A coordinated audio solution for artists and event organizers.', tone: 'silver' },
      { name: 'Ultimate Sound', tagline: 'Feel Every Beat. Hear Every Moment.', text: 'A comprehensive audio production setup for larger performances, subject to venue requirements.', tone: 'burgundy' }
    ]
  }
];

const allPackages = packageGroups.flatMap(group => group.packages.map(item => ({ ...item, category: group.label })));
const packageOptions = allPackages.map(item => `<option value="${item.name}">${item.name} — ${item.category}</option>`).join('');
const packageMarkup = packageGroups.map(group => `
  <section class="package-family" id="${group.id}">
    <div class="package-family-head"><span class="eyebrow">${group.label}</span><p>${group.intro}</p></div>
    <div class="package-grid">
      ${group.packages.map(item => `
        <article class="package-card tone-${item.tone}">
          <div class="package-index">${String(group.packages.indexOf(item) + 1).padStart(2, '0')}</div>
          <p class="package-category">${group.label}</p>
          <h3>${item.name}</h3>
          <p class="package-tagline">${item.tagline}</p>
          <details><summary>View package details</summary><p>${item.text} Final equipment, technical specifications, pricing, and setup requirements will be confirmed with Cara.</p></details>
          <button class="package-book" data-package="${item.name}">Book this package <span>↗</span></button>
        </article>`).join('')}
    </div>
  </section>`).join('');

const galleryTiles = [
  ['Live performance', 'Stage lighting', 'tile-stage'],
  ['Production detail', 'Behind the scenes', 'tile-console'],
  ['Visual display', 'LED & atmosphere', 'tile-visual'],
  ['Sound experience', 'Every beat matters', 'tile-sound']
].map(([label, title, cls]) => `<article class="gallery-tile ${cls}"><span>${label}</span><strong>${title}</strong><i aria-hidden="true">✦</i></article>`).join('');

const books = [
  { title: 'A Little Piece of Jamaica', type: 'Culture & identity', text: 'A publication celebrating Jamaica and its unique cultural identity.', cta: 'Buy on Amazon', href: 'https://www.amazon.com/dp/1067345906', cls: 'book-jamaica' },
  { title: 'Prayed in Kings Out', type: 'Journal for Black mothers & sons', text: 'A journal creating space for reflection, connection, prayer, and meaningful conversations.', cta: 'Explore the journal', href: '#contact', cls: 'book-journal' },
  { title: 'Little Jamaican Chef', type: 'Cookbook', text: 'A cookbook celebrating Jamaican food, cooking, and culinary traditions.', cta: 'Explore the cookbook', href: '#contact', cls: 'book-chef' }
].map(book => `<article class="publication-card ${book.cls}"><div class="publication-cover"><span>CARA W. BURKE</span><strong>${book.title}</strong><i>Publication preview</i></div><p class="eyebrow">${book.type}</p><h3>${book.title}</h3><p>${book.text}</p><a class="text-link" href="${book.href}" ${book.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${book.cta} <span>↗</span></a></article>`).join('');

const app = document.querySelector('#app');
app.innerHTML = `
  <div class="site-shell" id="top">
    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="Cara Burke home"><span class="wordmark-script">Cara</span><span class="wordmark-last">BURKE</span><small>MAKE IT HAPPEN</small></a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span class="sr-only">Open menu</span></button>
      <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
        <a href="#about">About</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#books">Books</a><a href="#contact">Contact</a><a class="nav-cta" href="#contact">Book now <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section class="hero section-pad">
        <div class="hero-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> Personal brand · production · publishing</p><h1>Bringing your vision to life. <em>Creating extraordinary experiences.</em></h1><p class="hero-deck">Cara Burke is the calm, capable force behind bold performances, meaningful stories, and the details that make a room remember.</p><div class="hero-actions"><a class="button button-burgundy" href="#services">Explore packages <span>↘</span></a><a class="text-link" href="#contact">Book a consultation <span>↗</span></a></div><div class="hero-notes"><span>Jamaica</span><b>•</b><span>UK</span><b>•</b><span>Canada</span><b>•</b><span>Everywhere ideas travel</span></div></div>
        <div class="hero-visual"><div class="hero-glow"></div><div class="hero-frame"><img src="${portrait}" alt="Portrait of Cara Burke in a black suit" /></div><div class="hero-ribbon">CARA<br />BURKE</div><div class="hero-caption">Professional production.<br /><strong>Personal impact.</strong></div></div>
      </section>

      <section class="brand-strip" aria-label="Brand qualities"><span>Professional & credible</span><i>✦</i><span>Creative & innovative</span><i>✦</i><span>Artist-focused & supportive</span><i>✦</i><span>Author & storyteller</span><i>✦</i><span>Premium & impactful</span></section>

      <section class="about section-pad" id="about"><div class="section-kicker"><span>01</span><span class="line"></span><span>About Cara</span></div><div class="about-grid"><div><p class="eyebrow">The woman behind the experience</p><h2>Ideas deserve a stage — and a person who knows how to <em>build it.</em></h2></div><div class="about-copy"><p class="lead">Cara Burke brings strategy, warmth, and production know-how to the moments artists and audiences remember.</p><p>From the first conversation to the final cue, she helps turn ambitious ideas into clear, compelling experiences. Her work spans entertainment production, artist support, event details, and stories that create room for young readers to see themselves.</p><a class="text-link burgundy-link" href="#contact">Work with Cara <span>↗</span></a></div></div><div class="about-stats"><div><strong>03</strong><span>Home bases<br />Jamaica, UK & Canada</span></div><div><strong>09</strong><span>Production packages<br />to shape your brief</span></div><div><strong>∞</strong><span>Ways to turn<br />a vision real</span></div></div></section>

      <section class="services section-pad" id="services"><div class="section-kicker light"><span>02</span><span class="line"></span><span>Services & packages</span></div><div class="services-intro"><div><p class="eyebrow light-text">The full production picture</p><h2>Make the moment<br /><em>unforgettable.</em></h2></div><p>From lighting and visual displays to sound experiences, choose a starting point or request a custom quotation for the production your audience deserves.</p></div>${packageMarkup}<div class="custom-quote"><div><span class="eyebrow light-text">Have a brief outside the box?</span><h3>Request a custom quote.</h3></div><a class="button button-light" href="#contact">Start a conversation <span>↗</span></a></div></section>

      <section class="portfolio section-pad" id="portfolio"><div class="section-kicker"><span>03</span><span class="line"></span><span>Portfolio / gallery</span></div><div class="portfolio-heading"><div><p class="eyebrow">The experience speaks for itself</p><h2>Production with <em>presence.</em></h2></div><p>Live performances, stage lighting, visual displays, sound, and the details behind the scenes — this is where the work becomes a feeling.</p></div><div class="gallery-grid">${galleryTiles}</div><div class="portfolio-note">Portfolio imagery and approved client stories can be added here as Cara’s archive is curated.</div></section>

      <section class="books section-pad" id="books"><div class="books-heading"><div class="section-kicker"><span>04</span><span class="line"></span><span>Books & publications</span></div><p class="eyebrow">Stories, culture, family & inspiration</p><h2>The literary world of <em>Cara W. Burke.</em></h2><p>Beyond the stage, Cara creates stories and spaces for reflection, connection, and cultural pride.</p></div><div class="publication-grid">${books}</div></section>

      <section class="contact section-pad" id="contact"><div class="contact-panel"><div class="contact-copy"><p class="eyebrow light-text">The next good idea</p><h2>Let’s create something <em>extraordinary.</em></h2><p>Tell Cara what you’re planning, what you need, and what you want people to feel.</p><div class="contact-details"><a href="tel:+14375451666">+1 (437) 545-1666</a><a href="mailto:hello@caraburke.com">hello@caraburke.com</a></div></div><div class="contact-actions"><form class="contact-form" id="contact-form"><div class="form-row"><label><span>Full name</span><input name="name" autocomplete="name" placeholder="Your name" required /></label><label><span>Artist / company</span><input name="company" placeholder="Artist or company" /></label></div><div class="form-row"><label><span>Email address</span><input name="email" type="email" autocomplete="email" placeholder="you@example.com" required /></label><label><span>Phone / WhatsApp</span><input name="phone" type="tel" placeholder="+1 ..." /></label></div><div class="form-row"><label><span>Event date</span><input name="date" type="date" /></label><label><span>Event location / venue</span><input name="location" placeholder="City or venue" /></label></div><label><span>Service category</span><select name="category" required><option value="" disabled selected>Choose a category</option><option>Lighting packages</option><option>LED screens & visual packages</option><option>Sound packages</option><option>Books & publications</option><option>Custom production quote</option></select></label><label><span>Selected package</span><select name="package"><option value="">No package selected</option>${packageOptions}</select></label><div class="form-row"><label><span>Estimated audience</span><input name="audience" placeholder="Approximate size" /></label><label><span>Event name</span><input name="event" placeholder="Event or production" /></label></div><label><span>Additional requirements</span><textarea name="message" rows="4" placeholder="Tell us a little about the vision..."></textarea></label><button class="button button-burgundy" type="submit">Request booking <span>↗</span></button><p class="form-note">This draft opens your email app with the inquiry ready to send.</p><p class="form-success" role="status" aria-live="polite"></p></form></div></div><div class="contact-footer"><span>© 2026 Cara W. Burke</span><span>Made with purpose, heart & a little sparkle ✦</span><a href="#top">Back to top ↑</a></div></section>
    </main>
  </div>`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => { const expanded = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!expanded)); nav.classList.toggle('is-open', !expanded); });
document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => { menuToggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }));
document.querySelectorAll('.package-book').forEach(button => button.addEventListener('click', () => { document.querySelector('[name="package"]').value = button.dataset.package; document.querySelector('[name="category"]').value = allPackages.find(item => item.name === button.dataset.package)?.category || ''; document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }));

document.querySelector('#contact-form').addEventListener('submit', event => { event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return; const data = new FormData(form); const subject = `${data.get('category')} enquiry from ${data.get('name')}`; const body = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join('\n'); window.location.href = `mailto:hello@caraburke.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; form.querySelector('.form-success').textContent = 'Your inquiry is ready to send — thank you.'; });
