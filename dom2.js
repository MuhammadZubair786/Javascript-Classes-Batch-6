// function alertShow(data){
//     alert(data)
// }

// document.writeln()

// document.getElementById

// function Selectinput(e){
//     // e.style.background-color
//     e.style.backgroundColor="red"
//     e.style.color="white"
//     e.value=""

// }

// function unselectInput(smit){
//     smit.style.backgroundColor="white"
//     smit.style.color="black"

// }

//get all ids
var email= document.getElementById("EmAil")
var password= document.getElementById("password")
var emailError= document.getElementById("emailError")
var passwordError= document.getElementById("passwordError")



function SubmitData(){
    if(email.value==""){
      emailError.innerText="please enter email address"
      email.style.borderColor="red"
    }
    
    else if(!email.value.includes("@")){
       emailError.innerText="please enter correct email address"
    }
    else if(password.value==""){
        emailError.innerText=""
      email.style.borderColor="black"

       passwordError.innerText="please enter password"

    }
    else if(password.value.length<=8){
        emailError.innerText=""
        passwordError.innerText="please enter must more then 8 letter";

    }
    else{
        emailError.innerText=""
        passwordError.innerText=""
        console.log(email.value)
        console.log(password.value)
    }
}