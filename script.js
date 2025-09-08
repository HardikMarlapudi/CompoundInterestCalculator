let principal = document.getElementById("principalInput");
let rate = document.getElementById("rateInput");
let compound = document.getElementById("compoundInput");
let time = document.getElementById("timeInput");
let answer = document.getElementById("answer");

function calculate() {
    let principal = parseFloat(document.getElementById("principalInput").value);
    let rate = parseFloat(document.getElementById("rateInput").value);
    let compound = parseFloat(document.getElementById("compoundInput").value);
    let time = parseFloat(document.getElementById("timeInput").value);

    if(isNaN(principal) || isNaN(rate) || isNaN(compound) || isNaN(time)) {
        alert("Please enter valid numbers for all input boxes.");
        return;
    } else {
        let answer = principal * Math.pow((1 + (rate / compound)), (compound * time));
        document.getElementById("answer").innerHTML = `The total is ${answer}`;
        return;
    }
}

function reset() {
    document.getElementById("principalInput").value = "";
    document.getElementById("rateInput").value = "";
    document.getElementById("compoundInput").value = "";
    document.getElementById("timeInput").value = "";
    document.getElementById("answer").innerHTML = "";
}
