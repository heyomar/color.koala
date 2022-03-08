import randomColor from 'randomcolor'
import Airtable from 'airtable'

export default () => {
	const base = new Airtable({ apiKey: process.env.API_KEY }).base(
		'app7MHrC2ID2zPNxw'
	)
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
		const color = randomColor({
			count: 5,
			luminosity: luminosity,
			hue: hue,
		})

		const columns = document.createElement('div')
		columns.className = 'flex flex-row'

		swatches.forEach((e, i) => {
			e.textContent = color[i]
			e.style.background = color[i]

			const colorHistory = document.querySelector('.color-history')
			const colorBox = document.createElement('div')
			const hexValue = document.createTextNode(e.textContent)

			colorBox.appendChild(hexValue)
			colorBox.className = 'swatch-block shadow-md'
			colorBox.id = `color${i + 6}`
			colorBox.style.backgroundColor = e.textContent

			colorHistory.appendChild(colorBox)
			colorBox.setAttribute('data-clipboard-target', `#color${i + 6}`)
		})

		const count = document.querySelector('.PaletteCount__Counter')

		let paletteFromServer
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
