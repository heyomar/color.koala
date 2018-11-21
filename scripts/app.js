// Import libraries
// ------------------------------
var randomColor = require('randomcolor');
var convert = require('color-convert');

window.randomColor = randomColor
window.convert = convert

// Import custom js
// ------------------------------
import generateColors from './app.colors';
import copyToClipBoard from './app.copy';
import downloadColors from './app.download';
import emailColors from './app.email';
import helpers from './app.helpers';
import darkmode from './app.dark';
import makerwidget from './app.plugins';

generateColors();
copyToClipBoard();
downloadColors();
emailColors();
helpers();
darkmode();
makerwidget();

