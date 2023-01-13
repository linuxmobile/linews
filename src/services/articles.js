import { APIURL } from '@services/config'
import '@services/filter'

let page = 1
let pageSize = 24
export let tag = null

export function updateTag(newTag) {
	tag = newTag
}

export const getArticles = async () => {
	let url = `${APIURL}?top=30&per_page=${pageSize}&page=${page}`
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
	const {
		title,
		social_image,
		readable_publish_date,
		url,
		user,
		reading_time_minutes,
		comments_count,
		public_reactions_count
	} = posts
	return `
		<div class='flex flex-col items-center justify-center max-w-xs min-h-[300px] bg-[#1C1F26] border-[1px] border-[#a8b3cf33] rounded-xl py-2 px-2 gap-3'>
			<div class='flex justify-between w-full px-3 pt-1'>
				<img src='${user.profile_image_90}' class='rounded-full h-8 w-8' alt='Imagen de perfil de: ${user.name}'/>
				<i class='fa-regular fa-bookmark bg-slate-700 h-8 w-8 flex items-center justify-center rounded-full' id='bookmark'></i>
			</div>
			<div class='flex flex-col items-start justify-between w-full px-4 gap-2 min-h-[130px]'>
				<a href='${url}' class='font-extrabold text-xl max-w-[270px] h-[90px] line-clamp-3'>${title}</a>
				<div class='flex items-center gap-2'>
					<p class='text-left text-[13px] [line-height:18px]'>${readable_publish_date}</p>
					<p class='text-left text-[13px] [line-height:18px]'>${reading_time_minutes} min read</p>
				</div>
			</div>
			<img src='${social_image}' class='rounded-xl'alt='Imagen de: ${title}'/>
			<div class='flex items-center justify-between w-full px-6'>
				<div class='flex items-center hover:text-green-600 bg-transparent hover:bg-green-600/20 rounded-lg hover:border-[1px] hover:border-green-600/20 pr-2'>
					<div class='flex items-center justify-center px-1 py-1'>
						<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 pointer-events-none"><path d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z" fill="currentcolor" fill-rule="evenodd"></path></svg>
					</div>
					<p class='text-center font-semibold text-sm'>${comments_count}</p>
				</div>
				<div class='flex items-center hover:text-green-600 bg-transparent hover:bg-green-600/20 rounded-lg hover:border-[1px] hover:border-green-600/20 pr-2'>
					<div class='flex items-center justify-center px-1 py-1'>
						<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 pointer-events-none"><path d="M10.981 4.973a2.84 2.84 0 00.133 3.872l.274.276-.211.012a8.815 8.815 0 00-.308.027c-3.268.344-5.723 3.001-7.528 8.121l-.156.452-.097.295c-.62 1.898 2.22 2.833 2.848.937l.095-.29.055-.148.093-.233c.884-2.077 2.828-3.313 5.068-3.582l.097-.01-.23.231a2.84 2.84 0 000 4.014 2.835 2.835 0 004.01 0l5.045-5.049c.54-.54.832-1.263.831-2.012a2.832 2.832 0 00-.83-2.006L15.124 4.83a2.835 2.835 0 00-4.011 0l-.133.142zM4.676 18.017l-.068.187.164-.473c1.627-4.592 3.711-6.812 6.254-7.08.255-.026.51-.04.767-.04h3.2L13.75 9.366l-1.576-1.582a1.339 1.339 0 011.89-1.893l5.045 5.048c.262.262.393.606.392.95 0 .342-.13.686-.392.948l-5.044 5.048a1.337 1.337 0 11-1.891-1.892l2.822-2.828h-2.992c-3.272 0-6.18 1.822-7.328 4.85z" fill="currentcolor" fill-rule="evenodd"></path></svg>
					</div>
					<p class='text-center font-semibold text-sm'>${public_reactions_count}</p>
				</div>
				<div class='flex items-center hover:text-green-600 bg-transparent hover:bg-green-600/20 rounded-lg hover:border-[1px] hover:border-green-600/20'>
					<button class='flex items-center justify-center px-1 py-1'><svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 pointer-events-none"><path d="M10.981 4.973a2.84 2.84 0 00.133 3.872l.274.276-.211.012a8.815 8.815 0 00-.308.027c-3.268.344-5.723 3.001-7.528 8.121l-.156.452-.097.295c-.62 1.898 2.22 2.833 2.848.937l.095-.29.055-.148.093-.233c.884-2.077 2.828-3.313 5.068-3.582l.097-.01-.23.231a2.84 2.84 0 000 4.014 2.835 2.835 0 004.01 0l5.045-5.049c.54-.54.832-1.263.831-2.012a2.832 2.832 0 00-.83-2.006L15.124 4.83a2.835 2.835 0 00-4.011 0l-.133.142zM4.676 18.017l-.068.187.164-.473c1.627-4.592 3.711-6.812 6.254-7.08.255-.026.51-.04.767-.04h3.2L13.75 9.366l-1.576-1.582a1.339 1.339 0 011.89-1.893l5.045 5.048c.262.262.393.606.392.95 0 .342-.13.686-.392.948l-5.044 5.048a1.337 1.337 0 11-1.891-1.892l2.822-2.828h-2.992c-3.272 0-6.18 1.822-7.328 4.85z" fill="currentcolor" fill-rule="evenodd"></path></svg></button>
				</div>
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
