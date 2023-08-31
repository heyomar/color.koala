import randomColor from 'randomcolor'
import Airtable from 'airtable'

export default () => {
	let paletteFromServer

	Airtable.configure({
		endpointUrl: 'https://api.airtable.com',
		apiKey: process.env.CK_TOKEN,
	})
	let base = Airtable.base('app7MHrC2ID2zPNxw')

	base('Koala')
		.select({
			view: 'Grid view',
		})
		.firstPage(function (err, records) {
			if (err) {
				console.error(err)
				return
			} else {
				records.forEach(function (record) {
					console.log('Retrieved', record.get('name'))
				})
			}
		})

	const swatches = document.querySelectorAll('.swatch')
	//----------------[FUNCTIONS]----------------//
	let hue = ''
	let luminosity = ''
	document.addEventListener('change', (e) => {
		if (e.target.classList.contains('colorSelectBox')) {
			luminosity = e.target.options[e.target.selectedIndex].value
		} else if (e.target.classList.contains('hueSelectBox')) {
			hue = e.target.options[e.target.selectedIndex].value
		}
		setColors()
	})

	document.querySelector('.generate').addEventListener('click', (e) => {
		e.preventDefault()
		setColors()
	})

	function setColors() {
		const colors = randomColor({
			count: 5,
			luminosity: luminosity,
			hue: hue,
		})

		// save colors const to browser local storage, if the key 'colors' already exists then add 1 to the end of the key
		let i = 0
		while (localStorage.getItem(`colors${i}`)) {
			i++
		}
		localStorage.setItem(`colors${i}`, JSON.stringify(colors))

		// check if local storage has colors, if so then add them to the color history
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i)
			if (key.includes('colors')) {
				const colorHistory = document.querySelector('.color-history')
				const colorBox = document.createElement('div')
				const hexValue = document.createTextNode(
					JSON.parse(localStorage.getItem(key))[0]
				)
			}
		}
		const columns = document.createElement('div')
		columns.className = 'flex flex-row'

		swatches.forEach((e, i) => {
			e.textContent = colors[i]
			e.style.background = colors[i]

			const colorHistory = document.querySelector('.color-history')
			const colorBox = document.createElement('div')
			const hexValue = document.createTextNode(e.textContent)

			colorBox.appendChild(hexValue)
			colorBox.className = 'swatch-block shadow-md'
			colorBox.id = `colors${i + 6}`
			colorBox.style.backgroundColor = e.textContent

			colorHistory.appendChild(colorBox)
			colorBox.setAttribute('data-clipboard-target', `#colors${i + 6}`)
		})

		const count = document.querySelector('.PaletteCount__Counter')

		base('Koala').find('recccR0o11Qm99hrl', (err, record) => {
			if (err) {
				console.error(err)
			}
			paletteFromServer = record.fields.palettes + 1

			base('Koala').update(
				'recccR0o11Qm99hrl',
				{
					palettes: paletteFromServer,
				},
				function (err, record) {
					if (err) {
						console.error(err)
					}
					count.textContent = record.fields.palettes.toLocaleString()
				}
			)
		})
	}

	//----------------[EVENT LISTENERS]----------------//
	window.onkeydown = (e) => {
		if (e.keyCode === 32) {
			e.preventDefault()
		}
	}
	window.onkeyup = (e) => {
		if (e.keyCode === 32) {
			setColors()
		}
	}

	document.addEventListener('DOMContentLoaded', setColors)
}
