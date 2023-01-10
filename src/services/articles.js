import { apiURL } from '@services/config'

export const getArticles = async (page = 1) => {
	const url = `${apiURL}?per_page=12&page=${page}`
	try {
		const response = await fetch(url)
		const articles = await response.json()
		return articles
	} catch (e) {
		console.log(e)
		return null
	}
}
