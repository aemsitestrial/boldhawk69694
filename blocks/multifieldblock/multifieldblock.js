import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const list = document.createElement('ol');
  list.className = 'multifieldblock-list';

  [...block.children].forEach((row) => {
    const item = document.createElement('li');
    const article = document.createElement('article');
    const [title, body, highlights, resources] = [...row.children];

    moveInstrumentation(row, article);
    article.className = 'multifieldblock-item';

    if (title) {
      title.classList.add('multifieldblock-item-title');
      article.append(title);
    }

    if (body) {
      body.classList.add('multifieldblock-item-body');
      article.append(body);
    }

    if (highlights) {
      highlights.classList.add('multifieldblock-item-highlights');
      highlights.querySelector('ul')?.classList.add('multifieldblock-highlights-list');
      article.append(highlights);
    }

    if (resources) {
      resources.classList.add('multifieldblock-item-resources');
      resources.querySelector('ul')?.classList.add('multifieldblock-resources-list');
      article.append(resources);
    }

    item.append(article);
    list.append(item);
  });

  block.replaceChildren(list);
}
