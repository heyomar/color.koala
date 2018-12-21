var Airtable = require('airtable')

export default () => {

  const base = new Airtable({ apiKey: 'keyyM8RnILrJK5LoJ' }).base('app7MHrC2ID2zPNxw')
  const pagePalettesCount = document.querySelector('.count')

  let currentNumber

  function getCount() {
    base('Koala').find('recccR0o11Qm99hrl', function(err, record) {
      if (err) { console.error(err); return; }
      console.log(record.fields.palettes)
      currentNumber = record.fields.palettes
      pagePalettesCount.textContent = record.fields.palettes
      console.log(currentNumber)
    })
  }
  
  function updateCount() {
    base('Koala').update('recccR0o11Qm99hrl', {
      'palettes': (currentNumber + 1)
    }, function (err, record) {
      if (err) { console.error(err); return }
    })
  }
  

}
