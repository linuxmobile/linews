import { getArticles, POSTSECTION, renderPostsSection, tag, updateTag } from '@services/articles'

const categoryButtons = document.querySelectorAll('[data-category]')

const categoryStyles = {
	popular: ['bg-pink-800/20', 'text-pink-800', 'border-[1px]', 'border-pink-800'],
	react: ['bg-cyan-300/20', 'text-cyan-300/70', 'border-[1px]', 'border-cyan-300/70'],
	linux: ['bg-violet-400/20', 'text-violet-400/50', 'border-[1px]', 'border-violet-400/50'],
	github: ['bg-green-700/20', 'text-green-700', 'border-[1px]', 'border-green-700'],
	opensource: ['bg-red-500/20', 'text-red-500', 'border-[1px]', 'border-red-500'],
	javascript: ['bg-yellow-500/20', 'text-yellow-500/75', 'border-[1px]', 'border-yellow-500/75']
}

categoryButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const category = button.dataset.category
		if (category === 'popular') {
			updateTag(null)
		} else {
			updateTag(category)
		}
		POSTSECTION.innerHTML = ''
		getArticles().then((posts) => renderPostsSection(posts))

		categoryButtons.forEach((btn) => {
			Object.keys(categoryStyles).forEach((category) => {
				categoryStyles[category].forEach((className) => {
					btn.classList.remove(className)
				})
			})
		})
		categoryStyles[category].forEach((className) => {
			button.classList.add(className)
		})
	})
})
