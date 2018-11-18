var randomColor = require('randomcolor');
var convert = require('color-convert');

window.randomColor = randomColor
window.convert = convert

import generateColors from './app.colors';
import copyToClipBoard from './app.copy';
import downloadColors from './app.download';
import emailColors from './app.email';


// Init
// ------------------------------
generateColors();
copyToClipBoard();
downloadColors();
emailColors();
