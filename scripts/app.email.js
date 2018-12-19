const mailtoLink = require('mailto-link')
import * as v from './app.variables'

export default function emailColors() {
	function createMailToLink() {
		const hexColors = []
		v.swatches.forEach((e, i) => {
			hexColors.push(v.swatches[i].textContent)
		})

		emailButton.href = mailtoLink({
			to: '',
			subject: 'Gorgeous Palette from Color Koala',
			body: `
    My Palette
    ---------------
    ${hexColors.map(val => val.toUpperCase()).join('\n')}
    
    by colorkoala.xyz
    `
		})
	}

	const emailButton = document.querySelector('.email')

	emailButton.addEventListener('click', createMailToLink)
}
