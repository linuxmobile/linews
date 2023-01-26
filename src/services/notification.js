// const NOTIFYBTN = document.querySelector('#notifyBTN')
const NOTIFYSTATUS = document.querySelector('#notifyStatus')
// class 'badge'
let bookmark = JSON.parse(localStorage.getItem('bookmark')) || []

export const notifyHandler = () => {
	if (bookmark && bookmark.length > 0) {
		NOTIFYSTATUS.classList.add('badge-sm')
		NOTIFYSTATUS.classList.add('badge')
		NOTIFYSTATUS.textContent = bookmark.length
	} else {
		NOTIFYSTATUS.classList.remove('badge-sm')
		NOTIFYSTATUS.classList.remove('badge')
		NOTIFYSTATUS.textContent = ''
	}
}
