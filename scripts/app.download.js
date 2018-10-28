
// Function to download data to a file
// ------------------------------------

export default function downloadColors() {
  const downloadButton = document.querySelector('.download-button');

  downloadButton.addEventListener('click', () => {
  });


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

  const swatches = document.querySelectorAll('.swatch');

  const style = swatches[3].style.backgroundColor;

  console.log(style);


  // var colorData = `
  // /* RGB */
  // $color1: ${colors[0]};
  // $color2: ${colors[1]};
  // $color3: ${colors[2]};
  // $color4: ${colors[3]};
  // `

  // download(colorData, 'colors.scss', ".scss")
}
