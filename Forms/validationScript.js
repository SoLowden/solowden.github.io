"use strict";
// This file demonstrates JavaScript code for form validation and submission

// Put form into a variable to make code more simple
let form = document.getElementById("myForm");

// Submit button is the second element in the form, put it in a variable for simpler code
/* Note: I thought it would be the third, but inspecting the form variable in the browser
console reveals it is at index 1.*/
let submit = form.elements[1];
      
// Run input validation function when submit button clicked
submit.addEventListener("click", validateInput);

// Declare variable containing regular expression pattern for alphanumeric input
let regex = /^[a-zA-Z0-9]*$/;

// Function to check if the input value matches the pattern
function validateInput(evt) {
  // Prevent the default action of the browser (submitting the form)
  evt.preventDefault();

  // Retrieve the input field value and put it in a variable
  let inputBox = document.getElementById("inputField");
  inputBox.blur();
  let inputVal = inputBox.value;

  if (regex.test(inputVal)) {      
    // Valid input: display confirmation and submit the form
    window.alert("Value meets requirements and was successfully submitted.");
    form.submit();
  } else {
    // Invalid input: display error message
    window.alert("Error: Invalid input. Please enter a value made up of only alphanumeric characters.");
  }    
}
