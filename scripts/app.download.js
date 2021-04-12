import FileSaver from 'file-saver';
import convert from 'color-convert';

export default function () {
	const swatches = document.querySelectorAll('.swatch');
	document.querySelector('.download').addEventListener('click', (e) => {
		e.preventDefault();

		const hexColors = [];
		const hsl = [];
		const scssVarNames = [];

		swatches.forEach((e, i) => {
			const hexcolor = e.textContent;
			hexColors.push(hexcolor);
			hsl.push(convert.hex.hsl(hexcolor));
			scssVarNames.push(`$color${i + 1}: `);
		});

		const hsla = {};
		scssVarNames.forEach((e, i) => {
			hsla[e] = `hsla(${hsl[i][0]},${hsl[i][1]}%,${hsl[i][2]}%, 1)`;
		});

		const colorData = ` @charset 'utf-8';
// HEX
// ------------------------------
${scssVarNames.map((val, i) => `${val}${hexColors[i]};`).join('\n')}

// RGBA
// ------------------------------
${scssVarNames.map((val, i) => `${val}rgba(${convert.hex.rgb(hexColors[i])}, 1);`).join('\n')}

// HSLA
// ------------------------------
${Object.entries(hsla)
	.map((val, i) => `${val.join('')};`)
	.join('\n')}`;
		// Create the file, pass in the data
		let blob = new Blob([colorData], { type: 'text/scss;charset=utf-8' });
		FileSaver.saveAs(blob, 'palette.scss');
	});
}
