import { hexToRgb } from './app.colors';

// Function to download data to a file
// ------------------------------------
export default function downloadColors() {
  function download(data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);else {
      // Others
      var a = document.createElement("a"),
          url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

  const downloadButton = document.querySelector('.download-button');
  const swatches = document.querySelectorAll('.swatch');

  console.log(convert.rgb.hsl(140, 200, 100));

  downloadButton.addEventListener('click', () => {
    const hexColors = [];
    const rgbaColors = [];
    // const hslColors = [];

    for (let i = 0; i <= 3; i += 1) {
      const swatchHexColor = swatches[i].textContent;
      hexColors.push(swatchHexColor);
      rgbaColors.push(hexToRgb(swatchHexColor));
    }

    const colorData = `
    @charset 'utf-8';
    
    // HSLA
    // -------------------------
    $color1: ${hexColors[0]};
    $color2: ${hexColors[1]};
    $color3: ${hexColors[2]};
    $color4: ${hexColors[3]};
    

    // RGBA
    // -------------------------
    $color1: ${rgbaColors[0].r}, ${rgbaColors[0].g}, ${rgbaColors[0].b}, ${1};
    $color2: ${rgbaColors[1].r}, ${rgbaColors[1].g}, ${rgbaColors[1].b}, ${1};
    $color3: ${rgbaColors[2].r}, ${rgbaColors[2].g}, ${rgbaColors[2].b}, ${1};
    $color4: ${rgbaColors[3].r}, ${rgbaColors[3].g}, ${rgbaColors[3].b}, ${1};

    // RGB
    // -------------------------
    $color1: ${hexColors[0]};
    $color2: ${hexColors[1]};
    $color3: ${hexColors[2]};
    $color4: ${hexColors[3]};
    `;
    download(colorData, 'colors.scss', '.scss');
  });
}
