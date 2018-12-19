import * as vars from './app.variables'
import mailtoLink from 'mailto-link'

export default function emailColors () {
  function createMailToLink () {
    const hexColors = []
    vars.swatches.forEach((e, i) => {
      hexColors.push(vars.swatches[i].textContent)
    })

    emailButton.href = mailtoLink({
      to: '',
      subject: 'Gorgeous Palette from Color Koala',
      body: `
    My Palette
    ---------------
    ${hexColors.map(val => val.toUpperCase()).join('\n')}
    
    by colorkoala.xyz
    `
    })
  }

  const emailButton = document.querySelector('.email')

  emailButton.addEventListener('click', createMailToLink)
}
