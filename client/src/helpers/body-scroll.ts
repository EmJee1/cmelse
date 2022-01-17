export const disableBodyScroll = () => {
	console.log('disabling')
	const body = document.querySelector('body')
	body?.classList.add('no-scroll')
}

export const enableBodyScroll = () => {
	console.log('enabling')
	const body = document.querySelector('body')
	body?.classList.remove('no-scroll')
}
