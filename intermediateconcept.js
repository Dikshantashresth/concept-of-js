//==================
// ACCESSING THE DOM
//==================

// Access an element using getElementById
let c = document.getElementById('result');   // Accesses the element with id="result"

// Access an element using querySelector
let r = document.querySelector('#result');   // Accesses the first element that matches the CSS selector '#result'

/* Notes:
   - getElementById: Faster, but only works with IDs.
   - querySelector: More flexible, works with any CSS selector (ID, class, tag, etc.).
*/

//==================
// MODIFYING DOM CONTENT
//==================

// Change the inner HTML of the element
c.innerHTML = 'Hello';   // Sets the HTML content of 'c' to 'Hello'

// Change the text content of the element
r.textContent = 'Hora';  // Sets the text content of 'r' to 'Hora'

// Change the value of an input element
let input = document.querySelector('input');
input.value = 'New Value';  // Sets a new value for the input field

/* Other Common DOM Manipulation Methods:
   - `element.innerHTML`: Can insert or get HTML content inside an element.
   - `element.textContent`: Can insert or get plain text (no HTML interpretation).
   - `element.value`: For form inputs, it retrieves or sets the current value.
*/

//==================
// MODIFYING ELEMENT ATTRIBUTES
//==================

// Set or change attributes of an element
c.setAttribute('class', 'new-class');   // Changes the class attribute of 'c' to 'new-class'
c.setAttribute('data-value', '123');    // Adds a custom attribute 'data-value' with value '123'

// Get the value of an attribute
console.log(c.getAttribute('class'));   // Outputs: new-class

// Remove an attribute
c.removeAttribute('data-value');        // Removes the 'data-value' attribute

/* Notes:
   - setAttribute: Adds or modifies an element's attributes.
   - getAttribute: Retrieves the value of an attribute.
   - removeAttribute: Deletes an attribute from an element.
*/

//==================
// CSS STYLES MANIPULATION
//==================

// Modify the inline CSS style of an element
c.style.color = 'blue';        // Changes text color to blue
c.style.backgroundColor = 'yellow';  // Changes background color to yellow

// Add or remove CSS classes
c.classList.add('active');     // Adds the 'active' class to the element
c.classList.remove('new-class'); // Removes the 'new-class' from the element
c.classList.toggle('hidden');  // Toggles the 'hidden' class on and off

/* Notes:
   - Manipulating styles directly is best for inline styles.
   - Use classList for adding/removing multiple classes efficiently.
*/

//==================
// CREATING AND APPENDING ELEMENTS
//==================

// Create a new element (button)
let k = document.createElement('button');    // Creates a button element
k.innerHTML = "Click";                       // Sets the button text to "Click"

// Append the new element to the body
document.body.appendChild(k);                // Adds the button to the body

// Insert a new element before another element
let parent = document.querySelector('.container');
let newElement = document.createElement('div');
newElement.textContent = "I'm new here!";
parent.insertBefore(newElement, parent.firstChild);  // Insert 'newElement' as the first child of 'parent'

// Remove an element
parent.removeChild(newElement);  // Removes 'newElement' from 'parent'

//==================
// EVENT LISTENER
//==================

// Add a click event listener to the button
k.addEventListener('click', () => alert("Button clicked!"));  // Displays an alert when the button is clicked

// Remove an event listener
const showAlert = () => alert("Button clicked again!");
k.addEventListener('click', showAlert);  // Adds the event listener
k.removeEventListener('click', showAlert);  // Removes the event listener

/* Notes:
   - Use `addEventListener` for attaching events dynamically.
   - Use `removeEventListener` to detach an event handler when it's no longer needed.
*/

//==================
// TRY-CATCH-FINALLY EXAMPLE
//==================

let age = 19;

try {
    // Check if the age is above 18
    if (age > 18) {
        console.log("Access granted");   // Runs if age is greater than 18
    } else {
        throw new Error('Access not granted');  // Throws an error if age is 18 or below
    }
} catch (err) {
    console.log('Error: ' + err.message);   // Catches and displays the thrown error
} finally {
    console.log('Check completed');         // This always runs
}

/* Notes:
   - Use `try-catch` to handle runtime errors in a controlled manner.
   - `throw` is used to manually trigger errors.
   - `finally` executes no matter what, even if an error occurs.
*/

//==================
// LOCAL STORAGE METHODS
//==================

// Local storage allows storing key-value pairs in the browser

let j = 10;
localStorage.setItem('t', j);               // Store value 10 under the key 't'
console.log(localStorage.getItem('t'));     // Retrieve and log the value of key 't' (Output: 10)
localStorage.removeItem('t');               // Remove the item with key 't'
localStorage.clear();                       // Clears all localStorage data

/* Notes:
   - localStorage stores data persistently (even after browser restart).
   - Use `setItem`, `getItem`, `removeItem`, and `clear` to interact with it.
*/

//==================
// JSON METHODS
//==================

// JSON.parse() converts a JSON string to a JavaScript object
const tx = '{"hero":"superman"}';  // A JSON string
const obj = JSON.parse(tx);        // Parse the string to a JavaScript object
console.log(obj.hero);             // Access the hero property (Output: superman)

// JSON.stringify() converts a JavaScript object to a JSON string
const bx = { "hero": "superman" };    // A JavaScript object
const obj2 = JSON.stringify(bx);      // Convert the object to a JSON string
console.log(obj2);                    // Logs the string: {"hero":"superman"}

/* Notes:
   - JSON is a lightweight data-interchange format.
   - JSON.parse() takes a JSON string and converts it to a JavaScript object.
   - JSON.stringify() takes a JavaScript object and converts it to a JSON string.
*/

//==================
// SUMMARY
//==================

// Key Concepts:
// - DOM methods include getElementById, querySelector, innerHTML, textContent, and style manipulation.
// - You can modify element attributes using setAttribute, getAttribute, and removeAttribute.
// - Events can be handled using addEventListener and removed with removeEventListener.
// - Error handling is done with try-catch-finally.
// - Use localStorage for persistent storage in the browser.
// - JSON methods are used for converting between strings and JavaScript objects.

