const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const previous = document.querySelector("#previous");
const random = document.querySelector("#random");
const next = document.querySelector("#next");
const option = document.querySelector("#search-select");
const input = document.querySelector("#search-input");


// Define a global array to store fetched quotes
let fetchedQuotes = [];
let currentQuoteIndex = -1; // Keep track of the index of the current quote



// Function to get a quote based on tags
const getQuote = async () => {
    try {
        const response = await fetch('https://api.quotable.io/random');
        // const response = await fetch('https://api.quotable.io/quotes?tags=famous-quotes');
        const data = await response.json();

        fetchedQuotes.push(data); // Store the fetched quote in the array
        currentQuoteIndex = fetchedQuotes.length - 1; // Update the current index
        displayQuote(data); // Display the fetched quote
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}


// Function to display the quote and author
const displayQuote = (data) => {
    quote.innerHTML = `"${data.content}"`;
    author.innerHTML = data.author;
}

// Function to get the previous quote
const getPreviousQuote = () => {
    if (currentQuoteIndex > 0) { // Check if there is a previous quote in the array
        currentQuoteIndex--; // Decrement the current index
        const previousQuote = fetchedQuotes[currentQuoteIndex]; // Get the previous quote
        displayQuote(previousQuote); // Display the previous quote
    } else {
        console.log("No previous quote available");
    }
}

// Function to get the next quote
const getNextQuote = () => {
    if (currentQuoteIndex < fetchedQuotes.length - 1) { // Check if there is a next quote in the array
        currentQuoteIndex++; // Increment the current index
        const nextQuote = fetchedQuotes[currentQuoteIndex]; // Get the next quote
        displayQuote(nextQuote); // Display the next quote
    } else {
        getQuote(); // Fetch a new quote if there are no more stored quotes
    }
}

// Function to get a random quote
const getRandomQuote = async () => {
    if (fetchedQuotes.length === 0) {
        await getQuote();
    }
    const randomIndex = Math.floor(Math.random() * fetchedQuotes.length);
    const randomQuote = fetchedQuotes[randomIndex];
    displayQuote(randomQuote);
}


// Event listeners for buttons
random.addEventListener("click", getRandomQuote);
previous.addEventListener("click", getPreviousQuote); // Need to implement
next.addEventListener("click", getNextQuote);

// Event listener for dropdown
option.addEventListener("change", function() {
    input.value = option.options[option.selectedIndex].innerText;
});
