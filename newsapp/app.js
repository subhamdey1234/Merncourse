document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'f7e90110f198461998eb849c457f45af';  // Replace with your News API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            const newsContainer = document.getElementById('news-container');

            articles.forEach(article => {
                // Create card elements
                const card = document.createElement('div');
                card.className = 'col-md-4 mb-4';

                card.innerHTML = `
                    <div class="card">
                        <img src="${article.urlToImage || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${article.title}">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description || 'No description available.'}</p>
                            <a href="${article.url}" class="btn btn-primary" target="_blank">Read more</a>
                        </div>
                    </div>
                `;

                // Append card to the container
                newsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching the news:', error));
});
