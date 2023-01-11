import { renderPosts } from '@services/articles.js'

const BOOKMARK = document.querySelector('#bookmark')

let bookmark = JSON.parse(localStorage.getItem('bookmark')) || []

const SAVETOLOCALSTORAGE = (bookmarks) => {
	return localStorage.setItem('bookmark', JSON.stringify(bookmarks))
}

export const bookmarkHandler = () => {
	addEventListener('click', (e) => {
		if (e.target.id === 'bookmark') {
			const target = e.target.parentElement.parentElement
			const title = target.querySelector('a').innerText
			const image = target.querySelector('img').src
			const url = target.querySelector('a').href
			const bookmarkObj = {
				title,
				image,
				url
			}
			bookmark.push(bookmarkObj)
			SAVETOLOCALSTORAGE(bookmark)
		}
	})
}
