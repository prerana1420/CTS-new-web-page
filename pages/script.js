function validationForm(){

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var dob = document.getElementById("dob");
    var gender = document.getElementsByName("choice");


    if (name.value === "" || name.value === "" || name.value < 3) {
            alert("Bruh! Enter your name");
            return false;
        }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
            alert("Please enter a valid email address.");
            return false;
        }
    
    if (password.value.length < 6 || password.value != "") {
            alert("Password must be at least 6 characters long.");
            return false;
        }
    
        var currentDate = new Date();
        var selectedDate = new Date(dob.value);
        if (selectedDate >= currentDate) {
            alert("Select a valid Date of Birth");
            return false;
        }

        var genderSelected = false;
        for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                genderSelected = true;
                break;
            }
        }
        if (!genderSelected) {
            alert("Please select a gender option.");
            return false;
        }
    return true;

}

