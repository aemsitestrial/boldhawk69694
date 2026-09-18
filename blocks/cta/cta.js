import { moveInstrumentation } from '../../scripts/scripts.js';

function getPropElement(block, propName) {
  return block.querySelector(`[data-aue-prop="${propName}"]`)?.closest(':scope > div');
}

function getPropValue(block, propName) {
  const row = getPropElement(block, propName);
  return row?.textContent?.trim() || '';
}

function getLinkValue(block, propName) {
  const row = getPropElement(block, propName);
  const link = row?.querySelector('a');
  return link?.href || row?.textContent?.trim() || '';
}

export default function decorate(block) {
  const linkText = getPropValue(block, 'linkText');
  const linkMode = getPropValue(block, 'linkMode');
  const linkHref = linkMode === 'external'
    ? getLinkValue(block, 'externalLink')
    : getLinkValue(block, 'internalLink');
  const variant = getPropValue(block, 'classes');
  const colorTheme = getPropValue(block, 'colorTheme') || 'teal';
  const fontWeight = getPropValue(block, 'fontWeight') || 'bold';
  const arrowOption = getPropValue(block, 'arrowOption') || 'with-arrow';

  if (!linkText || !linkHref) {
    return;
  }

  const container = document.createElement('p');
  const link = document.createElement('a');
  const internalRow = getPropElement(block, 'internalLink');
  const externalRow = getPropElement(block, 'externalLink');

  container.className = 'button-container';
  link.className = 'button';
  link.href = linkHref;
  link.textContent = linkText;

  if (variant) {
    block.classList.add(variant);
  }

  block.classList.add(`theme-${colorTheme}`, `font-${fontWeight}`, arrowOption);
  block.classList.toggle('cta-short-text', linkText.length <= 15);

  if (linkMode === 'external') {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }

  moveInstrumentation(internalRow || externalRow || block, link);
  moveInstrumentation(getPropElement(block, 'linkText') || block, link);

  container.append(link);
  block.replaceChildren(container);
}
