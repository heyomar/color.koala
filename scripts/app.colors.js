

export function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}


export default function generateColors() {

  // Variables
  // ------------------------------
  const swatches = document.querySelectorAll('.swatch');


  // Sets the background color to the value returned from the getColor() function
  // ------------------------------
  function setBackground() {
    const color = randomColor({
      count: 6,
      luminosity: 'light',
    });

    // - Print color values into div
    // - set the backgrounf color to random color
    // - convert hex to rgb
    // - add the box shadow
    for (let i = 0; i <= 3; i += 1) {
      swatches[i].textContent = color[i];
      swatches[i].style.background = color[i];
      const hexval = hexToRgb(color[i]);
      swatches[i].style.boxShadow = `0 -1px 30px rgba(${hexval.r}, ${hexval.g}, ${hexval.b}, 0.7)`;
    }
  }

  // Listens for spacebar press to change color
  // ------------------------------
  document.body.onkeyup = (e) => {
    if (e.keyCode === 32) {
      setBackground();
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    setBackground();
  });
}
