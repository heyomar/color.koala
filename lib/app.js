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

// var colorData = `
// /* RGB */
// $color1: ${color[0]};
// $color2: ${color[1]};
// $color3: ${color[2]};
// $color4: ${color[3]};
// `

// download(colorData, 'colors.scss', ".scss")


// Variables
// ------------------------------------
var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');
var d = document.querySelector('.d');

// Move swatch on hover
// ------------------------------------
const swatches = document.querySelectorAll('.swatch');

function moveSwatch(e) {
  e.target.style.bottom = "-25px";
  this.onmouseout = function (event) {
    e.target.style.bottom = "-70px";
  };
}

swatches.forEach(function (elem) {
  elem.addEventListener("mouseenter", function (e) {
    moveSwatch(e);
  });
});

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

// Sets the background color to the value returned from the getColor() function
// ------------------------------------
function setBackground() {
  var color = randomColor({
    count: 6,
    luminosity: 'light'
  });

  // Print the color hex values
  a.textContent = color[0];
  b.textContent = color[1];
  c.textContent = color[2];
  d.textContent = color[3];

  var hexval = hexToRgb(color[0]);
  var hexval1 = hexToRgb(color[1]);
  var hexval2 = hexToRgb(color[2]);
  var hexval3 = hexToRgb(color[3]);

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

// Copy to clipboard
// ------------------------------
swatches.forEach(color => {
  color.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(color);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();

      const original = color.textContent;
      color.textContent = 'Copied!';
      color.classList.add('success');

      setTimeout(() => {
        color.textContent = original;
        color.classList.remove('success');
      }, 600);
    } catch (e) {
      const errorMsg = document.querySelector('.error-msg');
      errorMsg.classList.add('show');

      setTimeout(() => {
        errorMsg.classList.remove('show');
      }, 600);
    }
  });
});

document.addEventListener("DOMContentLoaded", function (event) {
  setBackground();
});

// Listens for spacebar press to change color
// ------------------------------------
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    setBackground();
  }
};

