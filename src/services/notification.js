const NOTIFYBTN = document.querySelector('#notifyIcon')
const NOTIFYSECTION = document.querySelector('#notifySection')
const DELETENOTIFY = document.querySelector('#deleteNotify')
const NOTIFYELEMENT = document.querySelector('#notifyElement')

let deletedElements = []

export const ntfBtnHandler = () => {
	NOTIFYBTN.addEventListener('click', () => {
		NOTIFYSECTION.classList.toggle('hidden')
		NOTIFYSECTION.classList.toggle('flex')
	})
	DELETENOTIFY.addEventListener('click', () => {
		const parent = DELETENOTIFY.parentNode
        const elementHTML = parent.innerHTML
		deletedElements.push(elementHTML)
		parent.remove()
		localStorage.setItem('deletedElements', JSON.stringify(deletedElements))
	})
}