// Import JS
// ------------------------------
import dotenv from 'dotenv';
import colors from './app.colors.js';
import copy from './app.copy.js';
import download from './app.download.js';
import email from './app.email.js';

// Run it!
// ------------------------------
dotenv.config();
colors();
copy();
download();
email();
