import { getArticles, POSTSECTION, renderPostsSection, tag, updateTag } from '@services/articles'

const categoryButtons = document.querySelectorAll('[data-category]');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        if (category === 'popular') {
            updateTag(null);
        } else {
            updateTag(category);
        }
        POSTSECTION.innerHTML = '';
        getArticles().then(posts => renderPostsSection(posts));
    });
});