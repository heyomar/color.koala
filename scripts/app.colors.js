const randomColor = require("randomcolor")
import * as v from "./app.variables"

export default () => {
	document.querySelector('.add-swatch').addEventListener('click',(e)=>{
		e.preventDefault()
		let i = document.querySelectorAll('.swatch').length
		
		const swatchesContainer = document.querySelector('.swatch--column')
		const parentNode = document.createElement('div')
		const childNode = document.createElement('div')

		if(i > 4 && i <= 9){
			parentNode.setAttribute('data-clipboard-target', `#color${i + 1}`)
			parentNode.classList = 'column is-paddingless is-full'
			
			childNode.id = `color${i + 1}`
			childNode.classList = 'swatch'
			childNode.style.background = randomColor({count: 1,})
			childNode.textContent = 'hello'
			
			parentNode.appendChild(childNode)
			swatchesContainer.appendChild(parentNode)

			document.querySelectorAll('.swatch').forEach(e => {
				let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
				e.style.height = `${h / (i+1)}px`
				e.style.lineHeight = `${h / (i+1)}px`
			});
		}
	})

	//||EVENT LISTENER FOR SELECT BOXES ||
	let hue = ""
	let luminosity = ""
	document.addEventListener("change", e => {
		if (e.target.classList.contains("colorSelectBox")) {
			luminosity = e.target.options[e.target.selectedIndex].value
		} else if (e.target.classList.contains("hueSelectBox")) {
			hue = e.target.options[e.target.selectedIndex].value
		}
		setColors()
	})

	document.querySelector(".generate").addEventListener("click", e => {
		e.preventDefault()
		setColors()
	})

	let colorCount = 0
	// Run randomColor function and set colors
	function setColors() {
		const color = randomColor({
			count: 5,
			luminosity: luminosity,
			hue: hue
		})
		// Set swatch colors
		v.swatches.forEach((e,i) => {
			e.textContent = color[i]
			e.style.background = color[i]

			// COLOR HISTORY
			const column = document.createElement("div")
			const colorBox = document.createElement("div")
			const hexValue = document.createTextNode(e.textContent)

			colorBox.appendChild(hexValue)
			colorBox.className = "block"
			colorBox.style.backgroundColor = e.textContent

			column.appendChild(colorBox)
			column.className = 'column is-2'

			document.querySelector('.color-history').appendChild(column)
		})
		document.querySelector('.count').textContent = (colorCount += 1).toLocaleString()
	}
	// Listens for spacebar press to change color
	document.body.onkeydown = e => {if (e.keyCode === 32) {e.preventDefault()}}
	document.body.onkeyup = e => {if (e.keyCode === 32) {setColors()}}

	document.addEventListener("DOMContentLoaded", () => {
		setColors()
	})
}
