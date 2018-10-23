// Creates function to create hex color value
function getColor() {
  return (
    "#" + 
    Math.random()
    .toString(16)
    .slice(2,8)
  )
}

// Variables
const colorLabel = document.querySelector('.color-code');
var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');
var d = document.querySelector('.d');
var e = document.querySelector('.e');


// Sets the background color to the value returned from the getColor() function
function setBackground(){
  var color1 = getColor()
  var color2 = getColor()
  var color3 = getColor()
  var color4 = getColor()
  var color5 = getColor()

  // colorLabel.textContent = 'test';
  a.style.background = color1;
  b.style.background = color2;
  c.style.background = color3;
  d.style.background = color4;
  e.style.background = color5;

};

// Listens for spacebar press to change color
document.body.onkeyup = function(e){
  if (e.keyCode == 32) {
    setBackground();
  }
};

