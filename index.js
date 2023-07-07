// Get the main DOM node
let mainNode = document.getElementById('main');

// Remove the main DOM node
mainNode.remove();

// Create an h1 DOM node
let newHeader = document.createElement('h1');

// Set the id of the h1 DOM node
newHeader.id = 'victory';

// Set the text of the h1 DOM node
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your name

// Append newHeader to the body
document.body.appendChild(newHeader);
