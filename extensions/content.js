messages = [
    "ARE YOU SURE YOU WANT THIS?",
    "ARE YOU REALLY SURE?",
    "DO YOU NEED TO SPEND THIS $?",
    "REALLY?",
    "REALLY REALLY?"
]

iteration = 0;
maxIterations = messages.length;


function displayWarning(e){
    if(iteration < maxIterations){
        alert(messages[iteration])
        iteration ++;
        e.stopPropagation();
        return false;
    }

    return true;
}


document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("submitOrderButtonId").addEventListener("click", displayWarning);
});
