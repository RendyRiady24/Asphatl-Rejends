function validateData(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var agreement = document.getElementById("agreement");
    const birthdateInput = document.getElementById('birthdate').value;
    const birthdate = new Date(birthdateInput);
    const today = new Date();

    if(username.value.length < 5){
        alert("Username must be more than 5 characters!");
    } else if(!email.value.endsWith("@gmail.com")){
        alert("Email must ends with @gmail.com!");
    } else if (birthdate > today) {
        alert("Date cannot be after today!");

    } else if(!male.checked && !female.checked){
        alert("Gender must be selected!");
    } else if(!agreement.checked){
        alert("Agreement must be checked!");
    } else{
        alert("Registration Success!");
        // document.getElementById("display-username").innerHTML = "Username: " + username.value;
        // document.getElementById("display-email").innerHTML = "Email: " + email.value;
    }

}

function validPassword(password){
    isAlpha = false;
    var isNum = false;

    for (let i = 0; i < password.length; i++) {
        if(isNaN(password[i])){
            isAlpha = true;
        } else{
            isNum = true;
        }
        if(isAlpha && isNum){
            return true;
        }
    }
    return false;
}