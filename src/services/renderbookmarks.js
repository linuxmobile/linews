const BOOKMARKSECTION = document.getElementById('bookmarkSection')

const renderBookmarks = (bookmarks) => {
	const { title, social_image, url, description, avatar } = bookmarks
	return `
		<div class='card card-compact lg:card-side bg-neutral shadow-xl sm:max-w-5xl'>
			<figure class='max-w-lg'><img src='${social_image}' alt='imagen del post: ${title}' class='' /></figure>
			<div class='card-body justify-between h-full'>
				<a href='${url}' target='_blank' class='text-accent min-h-[112px]'>
					<h2 class='card-title line-clamp-2 font-mona-sans font-bold [font-stretch:ultra-expanded]'>${title}</h2>
					<p class='font-mona-sans [font-stretch:expanded] text-neutral-content text-opacity-70'>${description}</p>
				</a>
				<div class='card-actions justify-between'>
					<div class='btn btn-ghost btn-circle avatar'>
						<div class='w-10 rounded-full'>
							<img src='${avatar}' alt='Imagen del usuario' />
						</div>
					</div>
					<a href='${url}' target='_blank' class='btn btn-primary'>Leer</a>
				</div>
			</div>
		</div>
	`
}

const renderBookmarkSection = (bookmarks) => {
	BOOKMARKSECTION.innerHTML = bookmarks.map(renderBookmarks).join('')
}

let bookmark = JSON.parse(localStorage.getItem('bookmark')) || []

export const init = () => {
	renderBookmarkSection(bookmark)
}
