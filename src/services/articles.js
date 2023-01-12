import { APIURL } from '@services/config'
import '@services/filter'

let page = 1
let pageSize = 24
export let tag = null

export function updateTag(newTag) {
	tag = newTag
}

export const getArticles = async () => {
	let url = `${APIURL}?state=fresh&per_page=${pageSize}&page=${page}`
	if (tag !== 'popular' && tag !== null) {
		url += `&tag=${tag}`
	}
	try {
		const response = await fetch(url)
		const articles = await response.json()
		return articles
	} catch (e) {
		console.log(e)
		return null
	}
}

export const POSTSECTION = document.querySelector('#homePosts')

export const renderPostsSection = (posts) => {
	POSTSECTION.innerHTML += renderPostsList(posts)
}

export const renderPostsList = (posts) => {
	return posts
		.filter((post) => post.cover_image)
		.map((post) => renderPosts(post))
		.join('')
}

export const init = async () => {
	const posts = await getArticles(pageSize)
	renderPostsSection(posts)
	pageSize = 12
}

export const renderPosts = (posts) => {
	if (!posts.cover_image) {
		return
	}
	const { title, social_image, readable_publish_date, url } = posts
	return `
		<div class='flex flex-col items-center justify-center max-w-xs min-h-[380px] bg-[#1C1F26] border-[1px] border-[#a8b3cf33] rounded-xl py-2 px-2 gap-3'>
			<div class='flex justify-end w-full px-2'>
				<i class='fa-regular fa-bookmark bg-slate-700 h-8 w-8 flex items-center justify-center rounded-full' id='bookmark'></i>
			</div>
			<div class='flex flex-col items-start px-4 gap-2 min-h-[130px]'>
				<a href='${url}' class='font-extrabold text-xl'>${title}</a>
				<p class='text-left text-sm'>${readable_publish_date}</p>
			</div>
			<img src='${social_image}' class='rounded-xl'alt='Imagen de: ${title}'/>
			<div class=''>
			</div>
		</div>
	`
}

export const scrollHandler = () => {
	window.addEventListener('scroll', async () => {
		const scrollHeight = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		)
		const scrollTop =
			window.pageYOffset ||
			(document.documentElement || document.body.parentNode || document.body).scrollTop

		const clientHeight = document.documentElement.clientHeight

		if (scrollTop + clientHeight >= scrollHeight) {
			page += 1
			const newPosts = await getArticles()
			renderPostsSection(newPosts)
		}
	})
}
