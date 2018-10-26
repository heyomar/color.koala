export default function animate() {
  // ----------
  // Move swatch on hover
  // ------------------------------
  const swatches = document.querySelectorAll('.swatch');
  
  function moveSwatch(e) {
    e.target.style.bottom = "-25px";
    this.addEventListener('mouseleave', function(e){
      e.target.style.bottom = "-70px";
    });
  };
  
  swatches.forEach(function (elem) {
    elem.addEventListener('mouseenter', function(e){
      moveSwatch(e);
    });
  });

};

