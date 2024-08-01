document.addEventListener("DOMContentLoaded", function() {
    const quoteText = document.getElementById('quote-text');
    const jokeText = document.getElementById('joke-text');

    
    fetch('https://api.quotable.io/random?tags=technology')
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => {
            quoteText.textContent = "Failed to load quote. Try again later.";
            console.error('Error fetching quote:', error);
        });

    
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
        .then(response => response.json())
        .then(data => {
            jokeText.textContent = data.joke;
        })
        .catch(error => {
            jokeText.textContent = "Failed to load joke. Try again later.";
            console.error('Error fetching joke:', error);
        });
});

function copyText(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
    });
}
