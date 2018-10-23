
// // Creates function to create hex color value
// function getColor() {
//   return (
//     "#" + 
//     Math.random()
//     .toString(16)
//     .slice(2,8)
//   )
// }

// // Variables
var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');
var d = document.querySelector('.d');
var e = document.querySelector('.e');


// Sets the background color to the value returned from the getColor() function
function setBackground(){
  var color = randomColor({
    count: 5,
    luminosity: 'light'
  })
  
  // Print the color hex values
  a.textContent = color[0];
  b.textContent = color[1];
  c.textContent = color[2];
  d.textContent = color[3];
  e.textContent = color[4];

  // Set the color of the containers
  a.style.background = color[0];
  b.style.background = color[1];
  c.style.background = color[2];
  d.style.background = color[3];
  e.style.background = color[4];
  
};

document.addEventListener("DOMContentLoaded", function(event){
  setBackground();
})

// Listens for spacebar press to change color
document.body.onkeyup = function(e){
  if (e.keyCode == 32) {
    setBackground();
  }
};

