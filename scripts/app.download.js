import FileSaver from 'file-saver'
import convert from 'color-convert'
import * as v from "./app.variables";
import { log } from 'util';


export default function downloadColors() {
  const downloadButton = document.querySelector('.download');

  downloadButton.addEventListener('click', (e) => {
    e.preventDefault()

    const hexColors = []
    const hslColors = []
    const Hsl = []
    for(let i = 0; i <= 4; i += 1){
      const hexcolor = v.swatches[i].textContent
      hexColors.push(hexcolor)
      Hsl.push(convert.hex.hsl(hexcolor))
    }
    
    const scssVarNames = []
    for(let i = 1; i <= 5; i += 1){
      scssVarNames.push("$color" + i + ": ")
    }

    let one = {}


    scssVarNames.forEach((element,i) => {
      one[element] = `hsla(${Hsl[0][0]},${Hsl[0][1]}%,${Hsl[0][2]}%,1)`
    });

    console.log(one);
    
    
    

  const colorData =`
@charset 'utf-8';

// HEX
// ------------------------------
${scssVarNames.map((value, index) => `${value}${hexColors[index]};`).join('\n')}

// RGBA
// ------------------------------
${scssVarNames.map((value, index) => `${value}rgba(${convert.hex.rgb(hexColors[index])}, 1);`).join('\n')}

// HSLA
// ------------------------------
${Object.keys(one).map((value, index) => one[value])}
`;

  let blob = new Blob([colorData], {type: "text/scss;charset=utf-8"});
  FileSaver.saveAs(blob, "palette.scss");
  });
}
