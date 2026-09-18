export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('blockvalidation-row');

    if (row.querySelector('h1, h2, h3, h4, h5, h6')) {
      row.classList.add('blockvalidation-row-heading');
    }

    if (row.querySelector('picture')) {
      row.classList.add('blockvalidation-row-media');
    }

    if (row.querySelector('ul, ol')) {
      row.classList.add('blockvalidation-row-list');
    }

    if (row.querySelector('a')) {
      row.classList.add('blockvalidation-row-link');
    }
  });
}
