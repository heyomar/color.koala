export default function () {
  
  document.addEventListener('DOMContentLoaded', () =>{
    
    function addToHistoryPalettes() {
      const swatches = document.querySelectorAll('.swatch')
      const colorHistorySection = document.querySelector('.color-history')
      let paletteContainer = document.createElement("div")
      let count = 0
      
      swatches.forEach(element => {
        let colorBox = document.createElement("div")
        let hex = document.createTextNode(element.textContent)
        
        colorBox.appendChild(hex)
        colorBox.className = "color-box"
        colorBox.style.backgroundColor = element.textContent
        
        paletteContainer.appendChild(colorBox)
        paletteContainer.className = 'palette-container column is-3'
        
        count += 1
        if(count == 5){
          colorHistorySection.appendChild(paletteContainer)
          colorHistorySection.insertBefore(paletteContainer, colorHistorySection.childNodes[0])
        }
      })
    }

    addToHistoryPalettes()
    
    var mutationObserver = new MutationObserver(function(mutations) {
      addToHistoryPalettes()
    })

    const target = document.querySelector('.swatch')

    mutationObserver.observe(target, {
      attributes: true,
    });



  })
  
  

  
}