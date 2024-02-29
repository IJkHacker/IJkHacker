// script.js
// Example: Toggle article content
const articles = document.querySelectorAll('article');

articles.forEach((article) => {
    const title = article.querySelector('h2');
    const content = article.querySelector('p');

    title.addEventListener('click', () => {
        content.classList.toggle('hidden');
    });
});
