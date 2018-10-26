// ----------
// Move swatch on hover
// ------------------------------
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
