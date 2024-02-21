import getColor from './getColor';

const elFlipButton = document.querySelector('.flip');
const elDisplayColor = document.querySelector('span.color');

const flip = () => {
  const generatedColor = getColor();

  elDisplayColor.textContent = generatedColor;
  document.body.style.background = generatedColor;

  document.title = `${generatedColor} - Hexter`;
};

const keyboardShortcuts = (event) => {
  if (event.key === ' ') {
    flip();
  }
};

document.body.style.background = elDisplayColor.textContent;

elFlipButton.addEventListener('click', flip);
document.addEventListener('load', flip);
document.addEventListener('keyup', keyboardShortcuts);
