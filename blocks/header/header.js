/**
 * Loads and decorates the header as a self-contained top bar.
 * @param {Element} block The header block element
 */
export default function decorate(block) {
  block.textContent = '';

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';

  const nav = document.createElement('nav');
  nav.id = 'nav';
  nav.setAttribute('aria-expanded', 'false');
  nav.innerHTML = `
    <a class="nav-brand" href="/" aria-label="TCS home">
      <span class="nav-brand-mark">
        <span class="nav-brand-tcs">tcs</span>
        <span class="nav-brand-sub">Research</span>
      </span>
      <span class="nav-brand-divider" aria-hidden="true"></span>
      <span class="nav-brand-partner">TATA</span>
    </a>
    <div class="nav-tools" aria-label="Header utilities">
      <a class="nav-locale" href="/">Global <span>en</span></a>
      <button type="button" class="nav-hamburger" aria-controls="nav" aria-label="Open navigation">
        <span class="nav-hamburger-icon"></span>
      </button>
    </div>
  `;

  nav.querySelector('.nav-hamburger').addEventListener('click', () => {
    const expanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  });

  navWrapper.append(nav);
  block.append(navWrapper);
}
