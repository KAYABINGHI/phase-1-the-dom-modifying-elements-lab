// Remove the main element with id 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

// Create a new h1 element and assign it to newHeader variable
const newHeader = document.createElement('h1');

// Set the id to 'victory'
newHeader.id = 'victory';

// Set the text content (replace 'John' with your actual name)
newHeader.textContent = 'John is the champion';

// Append the new header to the body
document.body.appendChild(newHeader);