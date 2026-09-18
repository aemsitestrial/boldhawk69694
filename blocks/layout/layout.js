import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const list = document.createElement('ul');

  [...block.children].forEach((row) => {
    const item = document.createElement('li');
    moveInstrumentation(row, item);

    while (row.firstElementChild) {
      item.append(row.firstElementChild);
    }

    [...item.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'layout-item-image';
      } else {
        div.className = 'layout-item-body';
      }
    });

    list.append(item);
  });

  list.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPicture = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPicture.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPicture);
  });

  block.replaceChildren(list);
}
