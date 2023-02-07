// JS File for HW-03


let clickCount = 0;

function buttonClicked(){

    let buttonDiv = document.getElementById("button-div");
    let counter = clickCount++;

    buttonDiv.innerHTML = "Thanks for Clicking Me " + counter + " " + "Times!";

}


