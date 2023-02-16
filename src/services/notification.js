const NOTIFYBTN = document.querySelector('#notifyBTN')
const NOTIFYSTATUS = document.querySelector('#notifyStatus')
const NOTIFYSECTION = document.querySelector('#notifySection')

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

const renderNotifyModal = (notify) => {
	const { title, social_image, url, description } = notify
	return `
	<article class='flex w-full items-start justify-end'>
		<div class='my-2 card card-compact lg:card-side bg-neutral shadow-xl sm:max-w-lg sm:max-h-40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade animate-once animate-ease-in-out animate-fill-forwards'>
			<figure class='max-w-sm'><img src='${social_image}' alt='imagen del post: ${title}' class='' /></figure>
			<div class='card-body justify-between h-full'>
				<a href='${url}' target='_blank' class='text-accent min-h-[112px]'>
					<h2 class='card-title line-clamp-2 font-mona-sans font-bold [font-stretch:ultra-expanded]'>${title}</h2>
					<p class='font-mona-sans [font-stretch:expanded] text-neutral-content text-opacity-70 line-clamp-2'>${description}</p>
				</a>
			</div>
		</div>
	</article>
	`
}

const renderNotifyModalSection = (notify) => {
	NOTIFYSECTION.innerHTML = notify.map(renderNotifyModal).join('')
}

const notifySectionHandler = () => {
	NOTIFYBTN.addEventListener('click', () => {
		renderNotifyModalSection(bookmark)
		NOTIFYSECTION.classList.toggle('hidden')
	})
}

export const init = () => {
	notifySectionHandler()
}
