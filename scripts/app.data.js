var Airtable = require('airtable')

let currentNumber

function updateCount () {
  const base = new Airtable({ apiKey: 'keyyM8RnILrJK5LoJ' }).base('app7MHrC2ID2zPNxw')
  
  base('Koala').replace('recccR0o11Qm99hrl', {
    "name": "count",
    "palettes": () => {
      let pagePalettesCount = document.querySelector('.count')

      return pagePalettesCount + 1
    }
  }, function (err, record) {
    if (err) { console.error(err); return }
  })
}

function getCount () {
  const base = new Airtable({ apiKey: 'keyyM8RnILrJK5LoJ' }).base('app7MHrC2ID2zPNxw')
  
  base('Koala').find('recccR0o11Qm99hrl', function(err, record) {
    if (err) { console.error(err); return; }
    let pagePalettesCount = document.querySelector('.count')
    pagePalettesCount.textContent = record.fields.palettes
  })
}

export { updateCount, getCount }
