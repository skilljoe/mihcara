import './styles.css';

const repo = {
  name: 'skilljoe/mihcara',
  summary: 'A look at the language mix powering this repository.',
  languages: [
    { name: 'CSS', percent: 61.6, color: '#7c3aed' },
    { name: 'JavaScript', percent: 36.5, color: '#facc15' },
    { name: 'HTML', percent: 1.5, color: '#fb923c' },
    { name: 'TypeScript', percent: 0.4, color: '#60a5fa' }
  ]
};

const languageMarkup = repo.languages
  .map(
    (language) => `
      <article class="lang-card">
        <div class="lang-header">
          <span class="lang-name">
            <span class="lang-dot" style="background:${language.color};"></span>
            ${language.name}
          </span>
          <strong>${language.percent}%</strong>
        </div>
        <div class="lang-bar">
          <span class="lang-fill" style="width:${language.percent}%; background:${language.color};"></span>
        </div>
      </article>
    `
  )
  .join('');

document.querySelector('#app').innerHTML = `
  <div class="repo-page">
    <div class="repo-shell">
      <p class="eyebrow">Repository overview</p>
      <h1>${repo.name}</h1>
      <p class="subtitle">${repo.summary}</p>

      <div class="lang-grid">
        ${languageMarkup}
      </div>

      <div class="repo-footer">
        <span>Project type: GitHub repository</span>
        <a href="https://github.com/skilljoe/mihcara" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    </div>
  </div>
`;
