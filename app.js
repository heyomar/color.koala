
// // Creates function to create hex color value
// function getColor() {
//   return (
//     "#" + 
//     Math.random()
//     .toString(16)
//     .slice(2,8)
//   )
// }


// Function to download data to a file
function download(data, filename, type) {
var file = new Blob([data], {type: type});
if (window.navigator.msSaveOrOpenBlob) // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
else { // Others
    var a = document.createElement("a"),
    url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0); 
}
}



// // Variables
var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');
var d = document.querySelector('.d');


function moveSwatch(e){
    e.target.style.bottom = "-50px";
    this.onmouseout = function(event){
        e.target.style.bottom = "-100px";
    };
}

a.addEventListener('mouseenter', function(e){
    moveSwatch(e);
});
b.addEventListener('mouseenter', function(e){
    moveSwatch(e);
});
c.addEventListener('mouseenter', function(e){
    moveSwatch(e);
});
d.addEventListener('mouseenter', function(e){
    moveSwatch(e);
});




// move swatch on hover


// Sets the background color to the value returned from the getColor() function
function setBackground(){
var color = randomColor({
  count: 6,
  luminosity: 'light'
})

// Print the color hex values
a.textContent = color[0];
b.textContent = color[1];
c.textContent = color[2];
d.textContent = color[3];


// Set the color of the containers
a.style.background = color[0];
b.style.background = color[1];
c.style.background = color[2];
d.style.background = color[3];

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


// var colorData = `
// /* RGB */
// $color1: ${color[0]};
// $color2: ${color[1]};
// $color3: ${color[2]};
// $color4: ${color[3]};
// `

// download(colorData, 'colors.scss', ".scss")


