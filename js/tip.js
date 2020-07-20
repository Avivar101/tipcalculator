
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var ServiceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    


    //validate input
    if (billAmt === "" || ServiceQual === "0") {
        alert("pls enter values");
        return;
    }

    //check input of numberOfPeople
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }

    //calculate Tip

    var total = (billAmt / numOfPeople);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //display the tip

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//call calculateTip funct 
document.getElementById("calculate").onclick = function () {
        calculateTip ();
};