let principal = document.getElementById("principalInput").textContent;
let rate = document.getElementById("rateInput").textContent;
let compound = document.getElementById("compoundInput").textContent;
let time = document.getElementById("timeInput").textContent;

function calculate() {
    if(document.getElementById("principalInput").textContent == "") {
        alert("Please enter a valid number!!!");
        return;
    } else if (document.getElementById("rateInput").textContent == "") {
        alert("Please enter a valid number!!!");
        return;
    } else if (document.getElementById("compoundInput").textContent == "") {
        alert("Please enter a valid number!!!");
        return;
    } else if (document.getElementById("timeInput").textContent == "") {
        alert("Please enter a valid number!!!");
        return;
    } else {
        document.getElementById("result").innerHTML = principal * Math.pow((1 + (rate/compound)), (compound * time));
        return;
    }
 }

function reset() {
    document.getElementById("principalInput").textContent == "";
    document.getElementById("rateInput").textContent == "";
    document.getElementById("compoundInput").textContent == "";
    document.getElementById("timeInput").textContent == "";
}
