import { APIURL } from '@services/config'
import { bookmarkHandler } from '@services/savebookmark'
import '@services/filter'

const offset = 300
let page = 1
const pageSize = 12
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
	bookmarkHandler()
}

export const renderPostsList = (posts) => {
	return posts
		.filter((post) => post.cover_image)
		.map((post) => renderPosts(post))
		.join('')
}

export const init = async () => {
	if (POSTSECTION) {
		const posts = await getArticles(pageSize)
		renderPostsSection(posts)
		// bookmarkHandler()
	}
}

export const renderPosts = (posts) => {
	if (!posts.cover_image) {
		return
	}
	const {
		title,
		description,
		social_image,
		readable_publish_date,
		url,
		user,
		reading_time_minutes,
		comments_count,
		public_reactions_count
	} = posts
	return `
	<div class='relative card card-compact w-96 max-w-xs sm:max-w-none bg-neutral shadow-xl min-h-[420px] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade animate-once animate-ease-in-out animate-fill-forwards'>
	<figure><img src='${social_image}' alt='Imagen del post: ${title}' class='aspect-video' /></figure>
		<button class='btn btn-circle btn-sm top-2 right-2 drop-shadow-md absolute'
				data-url='${url}'
				data-title='${title}'
				data-description='${description}'
				data-social_image='${social_image}'
				data-avatar='${user.profile_image_90}'
				id='bookmarkBTN' aria-label='Bookmark ${title}'>
			<svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' class='w-5 h-5 pointer-events-none'><path d='M15.874 3H8.126a3.357 3.357 0 00-3.35 3.152l-.772 12.77c-.028.459.106.915.38 1.286l.101.125c.666.764 1.818.9 2.647.287L12 17.023l4.868 3.597a1.964 1.964 0 003.128-1.7l-.771-12.767A3.358 3.358 0 0015.874 3zm0 1.5c.981 0 1.794.764 1.854 1.744l.771 12.768a.464.464 0 01-.74.402l-5.207-3.848a.929.929 0 00-1.104 0L6.24 19.414a.464.464 0 01-.74-.402l.773-12.768c.06-.98.872-1.744 1.853-1.744h7.748z' fill='currentcolor' fill-rule='evenodd'></path></svg>
		</button>
		<div class='card-body h-full justify-between'>
			<div class='flex items-end justify-between h-fit'>
				<p class='text-sm text-neutral-content text-opacity-60 card-actions justify-between'>${readable_publish_date}</p>
				<p class='text-sm text-neutral-content text-opacity-60 card-actions justify-end'>${reading_time_minutes} min read</p>
			</div>
			<a href='${url}' target='_blank' class='text-accent min-h-[112px]'>
				<h2 class='card-title line-clamp-2 font-mona-sans font-bold [font-stretch:ultra-expanded]'>${title}</h2>
				<p class='font-mona-sans [font-stretch:expanded] text-neutral-content text-opacity-70'>${description}</p>
			</a>
			<div class='flex items-end justify-between'>
				<div class='btn btn-ghost btn-circle avatar'>
					<div class='w-10 rounded-full'>
						<img src='${user.profile_image_90}' alt='Imagen del usuario: ${user.name}' />
					</div>
				</div>
				<div class='card-actions justify-end'>
					<button class='btn' aria-label='comments button'><svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 pointer-events-none'><path d='M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z' fill='currentcolor' fill-rule='evenodd'></path></svg>
						${comments_count}
					</button>
					<button class='btn' aria-label='reaction button'><svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 pointer-events-none'><path d='M8.084 3.217a35.447 35.447 0 017.05-.078l.782.078.279.031c1.089.121 1.885.372 2.606.828a4.516 4.516 0 011.664 1.86c.336.69.5 1.423.53 2.361l.005.321v3.975a4.493 4.493 0 01-3.545 4.392l-.207.04-2.089.346-2.86 2.992-.147.135c-.986.789-2.399.623-3.205-.324-.532-.625-.616-1.34-.51-2.29l.029-.224.038-.254.033-.187-1.332-.189a5.011 5.011 0 01-1.677-.55l-.253-.146-.243-.16a4.777 4.777 0 01-1.491-1.721 4.935 4.935 0 01-.532-1.972l-.009-.3V8.618c0-1.096.162-1.915.535-2.683.375-.77.94-1.4 1.664-1.859.649-.41 1.359-.655 2.288-.788l.318-.04.28-.031zm7.666 1.491a33.948 33.948 0 00-6.752-.075l-.748.075-.28.031c-.915.102-1.481.297-1.97.606a3.016 3.016 0 00-1.116 1.247c-.228.468-.357.989-.38 1.76l-.004.266v3.563c0 .577.134 1.116.375 1.587.242.471.592.874 1.024 1.18.37.263.801.453 1.276.554l.242.043 1.98.283c.339.048.457.096.575.175.119.078.262.187.27.386l-.002.024-.013.08-.164.741-.064.333c-.111.63-.167 1.332.09 1.634.263.309.7.39 1.037.187l.089-.062 2.998-3.135.13-.101.092-.063.077-.04.08-.03.035-.01.087-.02L17 15.545a2.993 2.993 0 002.495-2.77l.005-.182V8.618c0-.921-.13-1.506-.384-2.026A3.016 3.016 0 0018 5.345c-.44-.278-.943-.464-1.706-.572l-.265-.034-.279-.03zm-.55 6.294l.093.005c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005c-.398-.044-.707-.36-.707-.745 0-.38.301-.694.691-.744l.109-.007h6.4zm0-3.5l.093.004c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005C8.309 8.953 8 8.637 8 8.252c0-.38.301-.694.691-.744l.109-.007h6.4z' fill='currentcolor' fill-rule='evenodd'></path></svg>
						${public_reactions_count}
					</button>
					<button class='btn' aria-label='share button'><svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 pointer-events-none'><path d='M10.981 4.973a2.84 2.84 0 00.133 3.872l.274.276-.211.012a8.815 8.815 0 00-.308.027c-3.268.344-5.723 3.001-7.528 8.121l-.156.452-.097.295c-.62 1.898 2.22 2.833 2.848.937l.095-.29.055-.148.093-.233c.884-2.077 2.828-3.313 5.068-3.582l.097-.01-.23.231a2.84 2.84 0 000 4.014 2.835 2.835 0 004.01 0l5.045-5.049c.54-.54.832-1.263.831-2.012a2.832 2.832 0 00-.83-2.006L15.124 4.83a2.835 2.835 0 00-4.011 0l-.133.142zM4.676 18.017l-.068.187.164-.473c1.627-4.592 3.711-6.812 6.254-7.08.255-.026.51-.04.767-.04h3.2L13.75 9.366l-1.576-1.582a1.339 1.339 0 011.89-1.893l5.045 5.048c.262.262.393.606.392.95 0 .342-.13.686-.392.948l-5.044 5.048a1.337 1.337 0 11-1.891-1.892l2.822-2.828h-2.992c-3.272 0-6.18 1.822-7.328 4.85z' fill='currentcolor' fill-rule='evenodd'></path></svg></button>
				</div>
			</div>
		</div>
	</div>`
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

		if (scrollTop + clientHeight >= scrollHeight - offset) {
			page += 1
			const newPosts = await getArticles(6)
			renderPostsSection(newPosts)
		}
	})
}
