export default function generateColors() {

  const swatches = document.querySelectorAll('.swatch');
  const colorSelectBox = document.querySelector('.colorSelectBox');
  const hueSelectBox = document.querySelector('.hueSelectBox');
  let luminosity = '';
  let hue = '';
  

  colorSelectBox.addEventListener('change', () => {
      luminosity = colorSelectBox.options[colorSelectBox.selectedIndex].value;
      setBackground();
  })

  hueSelectBox.addEventListener('change', () => {
    hue = hueSelectBox.options[hueSelectBox.selectedIndex].value;
    setBackground();
  })

  document.querySelector('.generate-button').addEventListener('click', (e) => {
    e.preventDefault();
    setBackground();
  })
  
  // Sets the background color to the value returned from the getColor() function
  // ------------------------------
  function setBackground() {
    const color = randomColor({
      count: 5,
      luminosity: luminosity,
      hue: hue
    });

    // - Print color values into div
    // - set the backgrounf color to random color
    // - convert hex to rgb
    // - add the box shadow
    for (let i = 0; i <= 4; i += 1) {
      swatches[i].textContent = color[i];
      swatches[i].style.background = color[i];
      const hexval = convert.hex.rgb(color[i]);
      swatches[i].style.boxShadow = `0 -1px 30px rgba(${hexval[0]}, ${hexval[1]}, ${hexval[2]}, 0.7)`;
    }
  }

  // Listens for spacebar press to change color
  // ------------------------------
  document.body.onkeydown = (e) =>{
    if (e.keyCode === 32) {
      e.preventDefault();
    }
  }

  document.body.onkeyup = (e) =>{
    if (e.keyCode === 32) {
      setBackground();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    setBackground();
  });
}
