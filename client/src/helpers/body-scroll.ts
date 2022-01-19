export const disableBodyScroll = () => {
	const body = document.querySelector('body')
	body?.classList.add('no-scroll')
}

export const enableBodyScroll = () => {
	const body = document.querySelector('body')
	body?.classList.remove('no-scroll')
}
