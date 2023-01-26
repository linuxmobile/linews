const BOOKMARKICON = document.getElementById('bookmarkMenuBtn')

let bookmarks = JSON.parse(localStorage.getItem('bookmark')) || []

const SAVETOLOCALSTORAGE = (bookmarks) => {
	return localStorage.setItem('bookmark', JSON.stringify(bookmarks))
}

const addBookmark = (e) => {
	if (e.target.id === 'bookmarkBTN') {
		const { social_image, title, url, description, avatar } = e.target.dataset
		const bookmark = { social_image, title, url, description, avatar }
		if (!bookmarks.find((b) => b.title === title)) {
			bookmarks.push(bookmark)
			SAVETOLOCALSTORAGE(bookmarks)
		}
	}
}

export const bookmarkHandler = () => {
	const BOOKMARKBTN = document.querySelectorAll('#bookmarkBTN')
	BOOKMARKBTN.forEach((btn) => {
		btn.addEventListener('click', addBookmark)
	})
}
