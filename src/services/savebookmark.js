const BOOKMARKICON = document.getElementById('bookmarkMenuBtn')
const SUCCESSMODAL = document.getElementById('successModal')
const SUCCESS = document.getElementById('success')

let bookmarks = JSON.parse(localStorage.getItem('bookmark')) || []

const SAVETOLOCALSTORAGE = (bookmarks) => {
	return localStorage.setItem('bookmark', JSON.stringify(bookmarks))
}

const showSuccess = (msg) => {
	SUCCESSMODAL.classList.add('flex')
	SUCCESSMODAL.classList.remove('hidden')
	SUCCESS.textContent = msg
	setTimeout(() => {
		SUCCESSMODAL.classList.remove('flex')
		SUCCESSMODAL.classList.add('hidden')
	}, 2000)
}

const addBookmark = (e) => {
	if (e.target.id === 'bookmarkBTN') {
		const { social_image, title, url, description, avatar } = e.target.dataset
		const bookmark = { social_image, title, url, description, avatar }
		if (!bookmarks.find((b) => b.title === title)) {
			bookmarks.push(bookmark)
			SAVETOLOCALSTORAGE(bookmarks)
			showSuccess('Agregado a favoritos')
		}
	}
}

export const bookmarkHandler = () => {
	const BOOKMARKBTN = document.querySelectorAll('#bookmarkBTN')
	BOOKMARKBTN.forEach((btn) => {
		btn.addEventListener('click', addBookmark)
	})
}
