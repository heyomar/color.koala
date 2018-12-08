// Import libraries
// ------------------------------
var randomColor = require("randomcolor");
var convert = require("color-convert");
var clipboard = require("clipboard");

window.randomColor = randomColor;
window.convert = convert;
window.ClipboardJS = clipboard;

// Import custom js
// ------------------------------
import generateColors from "./app.colors";
import copyToClipBoard from "./app.copy";
import downloadColors from "./app.download";
import emailColors from "./app.email";
import helpers from "./app.helpers";
import darkmode from "./app.dark";
import makerwidget from "./app.plugins";
import history from "./app.history";
// import url from './app.url';

// Run it!
// ------------------------------
generateColors();
copyToClipBoard();
downloadColors();
emailColors();
helpers();
darkmode();
makerwidget();
history();
// url();
