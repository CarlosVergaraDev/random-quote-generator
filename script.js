// Local data source for offline persistence
const quotes = [
    {
        text: "La lógica te llevará de A a B. La imaginación te llevará a todas partes.",
        author: "Albert Einstein"
    },
    {
        text: "El único modo de hacer un gran trabajo es amar lo que haces.",
        author: "Steve Jobs"
    },
    {
        text: "No cuentes los días, haz que los días cuenten.",
        author: "Muhammad Ali"
    },
    {
        text: "La mejor forma de predecir el futuro es crearlo.",
        author: "Peter Drucker"
    },
    {
        text: "Tu tiempo es limitado, de modo que no lo malgastes viviendo la vida de alguien distinto.",
        author: "Steve Jobs"
    },
    {
        text: "La simplicidad es la máxima sofisticación.",
        author: "Leonardo da Vinci"
    }
];

// DOM element references
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

/**
 * Logic to pick a random index and update UI
 */
function getNewQuote() {
    // Generate random integer index based on array length
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Update text nodes with template literals
    quoteText.innerText = `"${selectedQuote.text}"`;
    quoteAuthor.innerText = selectedQuote.author;
}

// Global event listeners
newQuoteBtn.addEventListener('click', getNewQuote);

// Initial execution on script load
getNewQuote();