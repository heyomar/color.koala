export default function generateColors() {
  // ----------
  // Variables
  // ------------------------------
  let a = document.querySelector('.a');
  let b = document.querySelector('.b');
  let c = document.querySelector('.c');
  let d = document.querySelector('.d');
  // ----------
  // Sets the background color to the value returned from the getColor() function
  // ------------------------------
  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  function setBackground() {
    const color = randomColor({
      count: 6,
      luminosity: 'light',
    });
    // Print the color hex values
    a.textContent = color[0];
    b.textContent = color[1];
    c.textContent = color[2];
    d.textContent = color[3];
  
    const hexval = hexToRgb(color[0]);
    const hexval1 = hexToRgb(color[1]);
    const hexval2 = hexToRgb(color[2]);
    const hexval3 = hexToRgb(color[3]);
  
    a.style["boxShadow"] = `0 -1px 30px rgba(${hexval.r}, ${hexval.g}, ${hexval.b}, 0.7)`;
    b.style["boxShadow"] = `0 -1px 30px rgba(${hexval1.r}, ${hexval1.g}, ${hexval1.b}, 0.7)`;
    c.style["boxShadow"] = `0 -1px 30px rgba(${hexval2.r}, ${hexval2.g}, ${hexval2.b}, 0.7)`;
    d.style["boxShadow"] = `0 -1px 30px rgba(${hexval3.r}, ${hexval3.g}, ${hexval3.b}, 0.7)`;
  
    // Set the color of the containers
    a.style.background = color[0];
    b.style.background = color[1];
    c.style.background = color[2];
    d.style.background = color[3];
  };
  
  
  // ---------
  // Listens for spacebar press to change color
  // ------------------------------
  document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
      setBackground();
    }
  };
  
  document.addEventListener("DOMContentLoaded", function (event) {
    setBackground();
  });

  
}