import getColor from './getColor';

const flipButton = document.querySelector('.flip');
const displayColor = document.querySelector('span.color');

const flip = () => {
  const generatedColor = getColor();

  displayColor.textContent = generatedColor;
  document.body.style.background = generatedColor;

  document.title = `${generatedColor} - Hexter`;
};

const keyboardShortcuts = (event) => {
  if (event.key === ' ') {
    flip();
  }
};

flipButton.addEventListener('click', flip);
document.addEventListener('load', flip);
document.addEventListener('keyup', keyboardShortcuts);
