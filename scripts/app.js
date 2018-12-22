// Import JS
// ------------------------------
import dotenv from 'dotenv'
import colors from './app.colors'
import copy from './app.copy'
import download from './app.download'
import email from './app.email'

// Run it!
// ------------------------------
dotenv.config()
colors()
copy()
download()
email()
