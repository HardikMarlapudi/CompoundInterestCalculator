let principal = document.getElementById("principal").textContent;
let rate = document.getElementById("rate").textContent;
let compound = document.getElementById("compound").textContent;
let time = document.getElementById("time").textContent;

function calculate() {

    if(principal == "") {
        alert("Please enter a valid number");
        return;
    } else if (principal <= 0 && "") {
        alert("Please enter a valid number");
        return;
    } else if (rate <= 0 && "") {
        alert("Pleae enter a valid number");
        return;
    } else if (compound <= 0 && "") {
        alert("Please enter a valid number");
        return;
    } else if (time <= 0 && "") {
        alert("Please enter a valid number");
        return;
    } else {
        document.getElementById("principal").textContent = principal;
        document.getElementById("rate").textContent = rate;
        document.getElementById("compound").textContent = compound;
        document.getElementById("time").textContent = time;
    }
 }

function reset() {
    document.getElementById("principal").textContent = "";
    document.getElementById("rate").textContent = "";
    document.getElementById("compound").textContent = "";
    document.getElementById("time").textContent = "";
}
