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

  downloadButton.addEventListener('click', () => {
    const hexColors = [];
    const hslColors = [];

    for (let i = 0; i <= 3; i += 1) {
      const swatchHexColor = swatches[i].textContent;
      hexColors.push(swatchHexColor);
      hslColors.push(convert.hex.hsl(swatchHexColor));
    }


    const colorData = `@charset 'utf-8';

// HSLA
// ------------------------------
$color1: hsla(${hslColors[0][0]}, ${hslColors[0][1]}%, ${hslColors[0][2]}%, 1);
$color2: hsla(${hslColors[1][0]}, ${hslColors[1][1]}%, ${hslColors[1][2]}%, 1);
$color3: hsla(${hslColors[2][0]}, ${hslColors[2][1]}%, ${hslColors[2][2]}%, 1);
$color4: hsla(${hslColors[3][0]}, ${hslColors[3][1]}%, ${hslColors[3][2]}%, 1);


// RGBA
// ------------------------------
$color1: rgba(${convert.hex.rgb(hexColors[0])}, 1);
$color2: rgba(${convert.hex.rgb(hexColors[1])}, 1);
$color3: rgba(${convert.hex.rgb(hexColors[2])}, 1);
$color4: rgba(${convert.hex.rgb(hexColors[3])}, 1);

// HEX
// ------------------------------
$color1: ${hexColors[0]};
$color2: ${hexColors[1]};
$color3: ${hexColors[2]};
$color4: ${hexColors[3]};
`;
    download(colorData, 'colors.scss', '.scss');
  });
}
