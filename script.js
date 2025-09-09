// Gets references to the input fields and answer elemetn from the HTML document.
// These are DOM objects (data type: HTMLInputElement or HTMLElement).
let principal = document.getElementById("principalInput");
let rate = document.getElementById("rateInput");
let compound = document.getElementById("compoundInput");
let time = document.getElementById("timeInput");
let answer = document.getElementById("answer");

// Function triggered when the "Calculate" button is clicked
function calculate() {
    // Convert the values entered by the user into floating-point numbers.
    // parseFloat() is used to ensure calculations work with numbers (not strings).
    let principal = parseFloat(document.getElementById("principalInput").value);
    let rate = parseFloat(document.getElementById("rateInput").value);
    let compound = parseFloat(document.getElementById("compoundInput").value);
    let time = parseFloat(document.getElementById("timeInput").value);

    // Check if any input is invalid (NaN - Not a Number)
    if(isNaN(principal) || isNaN(rate) || isNaN(compound) || isNaN(time)) {
        alert("Please enter valid numbers for all input boxes."); // Shows an error when the user doesn't input the values in each box.
        return;
    } else {
        // Calculates compound interest using the formula:
        // A = P * (1 + r/n)^(n*t)
        let answer = principal * Math.pow((1 + (rate / compound)), (compound * time));
        // Displays the result inside the "answer" element in HTML
        document.getElementById("answer").innerHTML = `The total is ${answer}`;
        JSON.parse(localStorage.getItem("data"));
        return; // Stops the function
    }
}

// Functionality triggered when the "Reset" button is clicked
function reset() {
    // Clears all input Fields
    document.getElementById("principalInput").value = "";
    document.getElementById("rateInput").value = "";
    document.getElementById("compoundInput").value = "";
    document.getElementById("timeInput").value = "";

    // Clear the displayed result
    document.getElementById("answer").innerHTML = "";
}
