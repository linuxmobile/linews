import { apiURL } from './config'

export const getTopArticles = async () => {
	const url = 'https://dev.to/api/articles?per_page=12'
	try {
		const response = await fetch(url)
		const topArticles = await response.json()
		return topArticles
	} catch (e) {
		console.log(e)
		return null
	}
}
