const getColor = () => {
  const range = 256;

  let red = Math.floor(Math.random() * range);
  let green = Math.floor(Math.random() * range);
  let blue = Math.floor(Math.random() * range);

  let hexRed = red.toString(16);
  let hexGreen = green.toString(16);
  let hexBlue = blue.toString(16);

  if (hexRed.length === 1) hexRed = '0' + hexRed;
  if (hexGreen.length === 1) hexGreen = '0' + hexGreen;
  if (hexBlue.length === 1) hexBlue = '0' + hexBlue;

  let color = `#${hexRed}${hexGreen}${hexBlue}`;
  return color;
};

export default getColor;
