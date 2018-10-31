// DEPENDENCIES
// ------------------------------
import randomcolor from 'randomcolor';
import conversions from 'color-convert/conversions';


// CUSTOM JS
// ------------------------------
import generateColors from './app.colors';
import copyToClipBoard from './app.copy';
import downloadColors from './app.download';
import emailColors from './app.email';


// INITIALIZE
// ------------------------------
generateColors();
copyToClipBoard();
downloadColors();
emailColors();
