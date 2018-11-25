export default function emailColors() {
  const swatches = document.querySelectorAll('.swatch');
  const emailColorsButton = document.querySelector('.email-button');

  emailColorsButton.addEventListener('click', () => {
    const hexColors = [];

    for (let i = 0; i <= 3; i += 1) {
      const swatchHexColor = swatches[i].textContent;
      hexColors.push(swatchHexColor);
    }

    emailColorsButton.href = `mailto:?subject=Gorgeous%20Color%20Palette%20from%20Color%20Koala&body=Color%20Palette%0D%0A-----------------%0D%0A${hexColors[0]}%0D%0A${hexColors[1]}%0D%0A${hexColors[2]}%0D%0A${hexColors[3]}%0D%0A%0D%0AKoala-ty%20colors%20courtesy%20of%20Color%20Koala!
  `;
  });
}
