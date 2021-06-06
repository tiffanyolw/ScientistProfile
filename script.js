// FORM
function submitForm () {
    var input = document.getElementById("fav-scientist").value;

    var output;
    if (input == "Carnot") {
        output = "Correct! Your favourite scientist is Carnot!";
    } else {
        output = `Incorrect! Your favourite scientist is Carnot, not ${input}!`;
    }

    document.getElementById("form-output").innerHTML = output;
}

function addName() {
    document.getElementById("fav-scientist").value = "Carnot";
}