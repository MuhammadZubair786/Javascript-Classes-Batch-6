//get all input ids
var userName = document.getElementById("name");
var email = document.getElementById("email");
var age = document.getElementById("age");
var password = document.getElementById("password");
var contactNo = document.getElementById("contactno");
var cnicNo = document.getElementById("cnic");

// get all errors ids
var NameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var ageError = document.getElementById("ageError");
var contactError = document.getElementById("contactError");

// input =>.value
// tag =>.innerText

function submit() {
    console.log(password.value)
  var hasError = false;
  //user name => condition
  if (userName.value == "") {
    NameError.innerText = " Please enter username";
    hasError = true;
  } else if (userName.value.length < 5) {
    NameError.innerText = "Must greater then 5 letter";
    hasError = true;
  } else {
    NameError.innerText = "";
    hasError = false;
  }

  //email

  if (email.value == "") {
    emailError.innerText = "Please enter email address";
    hasError = true;
  } else if (!email.value.includes("@")) {
    emailError.innerText = "Please enter valid email address";
    hasError = true;
  } else {
    emailError.innerText = "";
    hasError = false;
  }

  if (age.value == 0) {
    ageError.innerText = "please enter your age";
    hasError = true;
  } else if (age.value < 18) {
    ageError.innerText = "not able to get cnic";
    hasError = true;
  } else {
    ageError.innerText = "";
    hasError = false;
  }

  if (password.value == "") {
    passwordError.innerText = "please enter password ";
    hasError = true;
  } else if (password.value.length < 8) {
    passwordError.innerText = "password must be greater then 8 letter";
    hasError = true;
  } else {
    passwordError.innerText = "";
    hasError = false;
  }

  if (contactNo.value == 0) {
    contactError.innerText = "Enter your contact no";
    hasError = true;
  } else if (contactNo.value.length < 11) {
    hasError = true;
    contactError.innerText = "number must be grater then 11";
  } else {
    contactError.innerText = "";
    hasError=false
  }

  if(hasError==false){
    var a =  (Math.random()*10000000000000).toFixed(0)
    var cnic = a.toString().substring(0,4)+"-"+a.toString().substring(4,12)+"-"+a.toString().substring(12)
   console.log(cnic)
    cnicNo.value=cnic
  }
}
