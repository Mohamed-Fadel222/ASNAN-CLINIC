// Get the ID element from the Services page
let idElement = document.getElementById("id");

// Generate a random 8-digit number
let idNumber = Math.floor(Math.random() * 100000000);

// Set the text of the ID element to the generated number
idElement.textContent = "Your ID: " + idNumber;
// Get the Submit button from the Contact page
let submitButton = document.getElementById("submit-button");

// Add a click event listener to the Submit button
submitButton.addEventListener("click", function() {
  alert("Thank you for your message!");
});
