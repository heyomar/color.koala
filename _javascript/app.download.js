//
// Function to download data to a file
// ------------------------------------
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

var colorData = `
/* RGB */
$color1: ${color[0]};
$color2: ${color[1]};
$color3: ${color[2]};
$color4: ${color[3]};
`

download(colorData, 'colors.scss', ".scss")