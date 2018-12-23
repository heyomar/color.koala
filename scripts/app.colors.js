import randomColor from 'randomcolor'
import convert from 'color-convert'
const Airtable = require('airtable')

export default () => {
  const base = new Airtable({ apiKey: process.env.API_KEY }).base('app7MHrC2ID2zPNxw')
  const swatches = document.querySelectorAll('.swatch')
  // ||----------------[FUNCTIONS]----------------||
  let hue = ''
  let luminosity = ''
  document.addEventListener('change', e => {
    if (e.target.classList.contains('colorSelectBox')) {
      luminosity = e.target.options[e.target.selectedIndex].value
    } else if (e.target.classList.contains('hueSelectBox')) {
      hue = e.target.options[e.target.selectedIndex].value
    }
    setColors()
  })

  document.querySelector('.generate').addEventListener('click', e => {
    e.preventDefault()
    setColors()
  })

  function setColors () {
    const color = randomColor({
      count: 5,
      luminosity: luminosity,
      hue: hue
    })

    const columns = document.createElement('div')
    const hr = document.createElement('hr')
    hr.className = 'hr'
    columns.className = 'columns is-multiline is-centered'

    swatches.forEach((e, i) => {
      e.textContent = color[i]
      e.style.background = color[i]
      e.style.boxShadow = `0 -1px 30px rgba(${convert.hex.rgb(color[i])},0.7)`

      const column = document.createElement('div')
      const colorBox = document.createElement('div')
      const hexValue = document.createTextNode(e.textContent)

      colorBox.appendChild(hexValue)
      colorBox.className = 'block'
      colorBox.id = `color${i + 6}`
      colorBox.style.backgroundColor = e.textContent
      colorBox.style.boxShadow = `0px -1px 40px rgba(${convert.hex.rgb(e.textContent)},.7)`
      colorBox.style.fontWeight = '700'

      column.appendChild(colorBox)
      column.className = 'column is-one-fifth'
      column.setAttribute('data-clipboard-target', `#color${i + 6}`)

      columns.appendChild(column)
    })
    document.querySelector('.color-history').appendChild(columns)
    document.querySelector('.color-history').appendChild(hr)

    const count = document.querySelector('.count')

    let paletteFromServer
    base('Koala').find('recccR0o11Qm99hrl', (err, record) => {
      if (err) { console.error(err) }
      paletteFromServer = record.fields.palettes + 1

      base('Koala').update('recccR0o11Qm99hrl', {
        'palettes': paletteFromServer
      }, function (err, record) {
        if (err) { console.error(err) }
        count.textContent = record.fields.palettes.toLocaleString()
      })
    })
  }

  // ||----------------[EVENT LISTENERS]----------------||
  window.onkeydown = e => { if (e.keyCode === 32) { e.preventDefault() } }
  window.onkeyup = e => { if (e.keyCode === 32) { setColors() } }

  document.addEventListener('DOMContentLoaded', setColors)
}
