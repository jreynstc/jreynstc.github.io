function checkEmail() {
    //check textboxes to make sure they are not empty
    //check to see if the text in both boxes are the same

    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if (email == "") /*conditional expression*/ {
        document.getElementById("email-error").innerHTML = "please fill in this feild";
    } else {
        document.getElementById("email-error").innerHTML = "";
    }

    //check confirm
    if (confirm == "") /*conditional expression*/ {
        document.getElementById("confirm-error").innerHTML = "please fill in this feild";
    } else {
        document.getElementById("confirm-error").innerHTML = "";
    }

    //check if both checkboxes have the same value
    if (email != confirm) /*if the two string are NOT the same*/ {
        //print error
        document.getElementById("email-error").innerHTML = "please fill in this feild";
        document.getElementById("confirm-error").innerHTML = "please fill in this feild";
    }
}

function pizzaOrder() {
    var output = "<h3>Pizza Order: ";

    //radio buttons
    if (document.getElementById("small").checked == true) {
        output += " Small ";
    } else if (document.getElementById("medium").checked == true) {
        output += " Medium ";
    } else {
        output += " Large ";
    }

    //checkboxes
    if (document.getElementById("pepperoni").checked == true) {
        output += " Pepperoni ";
    }
    if (document.getElementById("sausage").checked == true) {
        output += " Sausage ";
    }
    if (document.getElementById("mushrooms").checked == true) {
        output += " Mushrooms ";
    }

    //output statement
    document.getElementById("output").innerHTML = output + "</h3>";
}