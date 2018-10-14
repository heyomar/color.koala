// Creates function to create hex color value
function getColor() {
  return (
    "#" + 
    Math.random()
    .toString(16)
    .slice(2,8)
  )
}

// Sets the background color to the value returned from the getColor() function
function setBackground(){
  var bgColor = getColor();
  document.body.style.background = bgColor;
};

// Finally listens for spacebar press to change color
document.body.onkeyup = function(e){
  if (e.keyCode == 32) {
    setBackground();
  }
};