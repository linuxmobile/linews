const NOTIFYBTN = document.querySelector('#notifyIcon')
const NOTIFYSECTION = document.querySelector('#notifySection')

export const ntfBtnHandler = () => {
	NOTIFYBTN.addEventListener('click', () => {
		NOTIFYSECTION.classList.toggle('hidden')
		NOTIFYSECTION.classList.toggle('flex')
	})
}
