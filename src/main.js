import './styles.css';

const portrait = './assets/cara-burke.avif';

const services = [
  {
    number: '01',
    title: 'Entertainment consulting',
    text: 'Big-picture thinking, practical problem solving, and a calm head when the room gets loud.'
  },
  {
    number: '02',
    title: 'Booking & touring',
    text: 'The right people, the right room, and the right details to move talent across borders.'
  },
  {
    number: '03',
    title: 'Artist development',
    text: 'Building stronger careers by shaping the strategy behind the spotlight.'
  },
  {
    number: '04',
    title: 'Events & production',
    text: 'From first sketch to final cue, making sure the experience lands exactly as imagined.'
  },
  {
    number: '05',
    title: 'Stories & authorship',
    text: 'Creating space for the next generation to see themselves in the stories they love.'
  }
];

const tickerWords = ['Entertainment', 'Culture', 'Production', 'Storytelling'];
const tickerHalf = tickerWords.map((word) => `<span>${word}</span><b aria-hidden="true">✦</b>`).join('');

const serviceMarkup = services.map((service) => `
  <article class="service-card">
    <span class="service-number">${service.number}</span>
    <div>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
    </div>
    <span class="service-arrow" aria-hidden="true">↗</span>
  </article>
`).join('');

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="Cara Burke home">
        <span class="wordmark-star">✦</span>
        <span class="wordmark-name">CARA</span>
        <span class="wordmark-sub">MAKE IT HAPPEN</span>
      </a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span>
        <span class="sr-only">Open menu</span>
      </button>
      <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
        <a href="#story">The story</a>
        <a href="#work">What I do</a>
        <a href="#book">The book</a>
        <a href="#lighting">Lighting packs</a>
        <a class="nav-cta" href="#contact">Let's talk <span>↗</span></a>
      </nav>
    </header>

    <main id="top">
      <section class="hero section-pad">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-dot"></span> The woman behind the moments</p>
          <h1>Big ideas need someone who knows how to <em>make them happen.</em></h1>
          <p class="hero-deck">Cara Burke is an entertainment consultant, producer, and author — the calm, capable force turning bold ideas into unforgettable moments, on stage and behind the scenes.</p>
          <div class="hero-actions">
            <a class="button button-dark" href="#story">Meet Cara <span>↘</span></a>
            <a class="text-link" href="#work">Explore the work <span>↗</span></a>
          </div>
          <div class="hero-notes" aria-label="Areas of work">
            <span>Jamaica</span><span>•</span><span>UK</span><span>•</span><span>Canada</span><span>•</span><span>Everywhere ideas travel</span>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-scribble" aria-hidden="true">make<br />it<br /><strong>happen</strong></div>
          <div class="hero-frame">
            <img src="${portrait}" alt="Portrait of Cara Burke smiling in a black suit" />
          </div>
          <div class="hero-sticker">✦ <span>Miss<br />Make It<br />Happen</span></div>
          <div class="hero-caption">A little bit of strategy.<br /><strong>A lot of heart.</strong></div>
        </div>
      </section>

      <section class="ticker" aria-label="Cara Burke areas of work">
        <div class="ticker-track"><div class="ticker-half">${tickerHalf}</div><div class="ticker-half" aria-hidden="true">${tickerHalf}</div></div>
      </section>

      <section class="story section-pad" id="story">
        <div class="section-kicker"><span>01</span><span class="line"></span><span>The story</span></div>
        <div class="story-grid">
          <div class="story-heading">
            <p class="eyebrow">More than one title</p>
            <h2>There is always <em>more</em> to the story.</h2>
          </div>
          <div class="story-copy">
            <p class="lead">Cara has built a life around making things happen for other people — artists, audiences, partners, and now, young readers.</p>
            <p>Her work sits at the intersection of strategy and care. She can be the person in the room shaping the big idea, the person backstage fixing the small thing, or the person making sure the details land with care.</p>
            <p>This is home for work with a little more heart in it: the ideas, stories, and experiences that stay with you.</p>
            <a class="text-link coral-link" href="#contact">Work with Cara <span>↗</span></a>
          </div>
        </div>
        <div class="story-stats">
          <div><strong>01</strong><span>Unshakeable<br />problem solver</span></div>
          <div><strong>03</strong><span>Home bases<br />Jamaica, UK & Canada</span></div>
          <div><strong>∞</strong><span>Ways to turn<br />a vision real</span></div>
        </div>
      </section>

      <section class="work section-pad" id="work">
        <div class="section-kicker light"><span>02</span><span class="line"></span><span>What I do</span></div>
        <div class="work-intro">
          <div><p class="eyebrow light-text">The full picture</p><h2>Different hats.<br /><em>Same energy.</em></h2></div>
          <p>Whether it is an artist, an event, a team, or a story, Cara brings the same instinct: understand what matters, then make the path clearer.</p>
        </div>
        <div class="services-list">${serviceMarkup}</div>
      </section>

      <section class="book section-pad" id="book">
        <div class="book-paper">
          <div class="book-copy">
            <div class="section-kicker"><span>03</span><span class="line"></span><span>For little dreamers</span></div>
            <p class="eyebrow">A new chapter</p>
            <h2>There is magic in seeing <em>yourself</em> in the story.</h2>
            <p class="book-description">A joyful story that builds confidence, sparks imagination, and shows young readers their ideas deserve room to grow.</p>
            <div class="placeholder-note"><span>EDITABLE DRAFT</span> Replace with the final book title, blurb, age range, cover, and purchase link when ready.</div>
            <div class="book-actions"><a class="button button-coral" href="#contact">Be first to know <span>↗</span></a><a class="text-link" href="#contact">Book enquiries <span>↗</span></a></div>
          </div>
          <div class="book-art" aria-label="Placeholder book cover artwork">
            <div class="book-sun"></div><div class="book-cloud cloud-one"></div><div class="book-cloud cloud-two"></div>
            <div class="book-cover">
              <div class="cover-top">A CARA BURKE STORY</div>
              <div class="cover-title">THE<br /><em>BIG</em><br />IDEA</div>
              <div class="cover-bottom">A story about<br />making room for wonder</div>
              <span class="cover-star">✦</span>
            </div>
            <div class="book-doodle">✽</div>
            <div class="book-tag">Book cover<br /><strong>preview</strong></div>
          </div>
        </div>
      </section>

      <section class="lighting section-pad" id="lighting">
        <div class="lighting-heading">
          <div class="section-kicker"><span>04</span><span class="line"></span><span>Make the room glow</span></div>
          <p class="eyebrow">Production & event lighting</p>
          <h2>Set the scene.<br /><em>Change the feeling.</em></h2>
          <p>Lighting packs for the moments that need to feel bigger, warmer, and unmistakably yours — from live events to intimate productions.</p>
        </div>
        <div class="pack-list">
          <article class="pack-card pack-featured"><div class="pack-meta"><span>01 / Signature</span><span>For the full picture</span></div><h3>The Spotlight Pack</h3><p>A flexible lighting setup for productions, launches, panels, and events that need the full picture.</p><div class="pack-bottom"><strong>Full production setup</strong><a href="#contact">Enquire ↗</a></div></article>
          <article class="pack-card"><div class="pack-meta"><span>02 / Intimate</span><span>For close-up magic</span></div><h3>The Glow Pack</h3><p>Warm, flattering atmosphere for dinners, launches, intimate gatherings, and close-up moments.</p><div class="pack-bottom"><strong>Intimate event setup</strong><a href="#contact">Enquire ↗</a></div></article>
          <article class="pack-card"><div class="pack-meta"><span>03 / Custom</span><span>For your brief</span></div><h3>The Make It Happen Pack</h3><p>A tailored production conversation for an idea with its own shape, pace, and point of view.</p><div class="pack-bottom"><strong>Custom brief</strong><a href="#contact">Enquire ↗</a></div></article>
        </div>
        <div class="placeholder-note dark-note"><span>EDITABLE DRAFT</span> Replace package names, exact inclusions, pricing, service area, and booking link when confirmed.</div>
      </section>

      <section class="contact section-pad" id="contact">
        <div class="contact-panel">
          <div class="contact-copy"><p class="eyebrow light-text">The next good idea</p><h2>Tell me what you're<br /><em>making.</em></h2><p>For collaborations, book updates, events, lighting plans, or a good idea that needs a little momentum.</p></div>
          <div class="contact-actions">
            <form class="contact-form" id="contact-form">
              <div class="form-row"><label><span>Your name</span><input name="name" type="text" autocomplete="name" placeholder="Your name" required /></label><label><span>Email address</span><input name="email" type="email" autocomplete="email" placeholder="you@example.com" required /></label></div>
              <label><span>What can Cara help with?</span><select name="topic" required><option value="" disabled selected>Choose a conversation</option><option>Children's book</option><option>Lighting packs</option><option>Events & production</option><option>Collaboration</option><option>Other</option></select></label>
              <label><span>Tell us a little more</span><textarea name="message" rows="4" placeholder="A few details about your idea..." required></textarea></label>
              <div class="form-submit-row"><button class="button button-coral" type="submit">Send enquiry <span>↗</span></button><p class="form-note">This draft opens your email app with the message ready to send.</p></div>
              <p class="form-success" role="status" aria-live="polite"></p>
            </form>
          </div>
        </div>
        <div class="contact-footer"><span>© 2026 Cara Burke</span><span>Made with purpose, heart & a little sparkle ✦</span><a href="#top">Back to top ↑</a></div>
      </section>
    </main>
  </div>
`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('is-open', !expanded);
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  });
});

const contactForm = document.querySelector('#contact-form');
const formSuccess = document.querySelector('.form-success');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const subject = `${data.get('topic')} enquiry from ${data.get('name')}`;
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nConversation: ${data.get('topic')}\n\n${data.get('message')}`;
  window.location.href = `mailto:hello@caraburke.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formSuccess.textContent = 'Your email draft is ready — thank you.';
  contactForm.reset();
});
