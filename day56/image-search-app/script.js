const accessKey = "AAYbX06oJfTWMeC35-kkOPYxU3TmcoTWxX435EGHjH4";

const formElement = document.querySelector('form');
const inputElement = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const seeMore = document.getElementById('see-more');

let inputData = " ";
let page = 1;

const searchImages = async() => {
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const results = data.results;

        if (page === 1) {
            searchResults.innerHTML = "";
        }

        results.forEach(result => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add("search-result");
            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description;
            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.textContent = result.alt_description;

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            searchResults.appendChild(imageWrapper);
        });

        page++;
        seeMore.style.display = "block"; // Show the "see more" button
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

seeMore.addEventListener('click', () => {
    searchImages();
});
