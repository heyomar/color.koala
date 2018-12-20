import ClipboardJS from 'clipboard'

export default () => {
  const clipboard = new ClipboardJS('.column')
  clipboard.on('success', function (e) {
    e.trigger.firstElementChild.innerHTML = 'Copied!'
    setTimeout(() => {
      e.trigger.firstElementChild.innerHTML = e.text
    }, 450)
    e.clearSelection()
  })

  const historyClipboard = new ClipboardJS('.color-history')
  historyClipboard.on('success', function (e) {
    e.trigger.firstElementChild.innerHTML = 'Copied!'
    setTimeout(() => {
      e.trigger.firstElementChild.innerHTML = e.text
    }, 450)
    e.clearSelection()
  })
}
