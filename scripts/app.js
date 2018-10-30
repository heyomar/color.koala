// DEPENDENCIES
// ------------------------------
import randomcolor from 'randomcolor';
import colorConvert from 'color-convert';


// CUSTOM JS
// ------------------------------
import generateColors from './app.colors';
import copyToClipBoard from './app.copy';
import downloadColors from './app.download';


// // INITIALIZE
// // ------------------------------
randomcolor();
colorConvert();
generateColors();
copyToClipBoard();
downloadColors();
