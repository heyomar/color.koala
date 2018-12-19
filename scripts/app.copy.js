const ClipboardJS = require('clipboard')

export default () => {
	const clipboard = new ClipboardJS('.column')
	clipboard.on('success', function(e) {
		e.trigger.firstElementChild.innerHTML = 'Copied!'
		setTimeout(() => {
			e.trigger.firstElementChild.innerHTML = e.text
		}, 450)
		e.clearSelection()
	})
}
