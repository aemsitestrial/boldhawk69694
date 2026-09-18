export default function decorate(block) {
  const children = [...block.children];
  const content = document.createElement('div');
  content.className = 'hero-content';

  const media = document.createElement('div');
  media.className = 'hero-media';

  children.forEach((child) => {
    if (child.tagName === 'PICTURE') {
      media.append(child);
    } else {
      content.append(child);
    }
  });

  content.querySelectorAll('.button-container').forEach((buttonContainer, index) => {
    buttonContainer.classList.add(index === 0 ? 'hero-cta' : 'hero-search');
  });

  block.replaceChildren();
  if (content.childNodes.length) block.append(content);
  if (media.childNodes.length) block.append(media);
}
