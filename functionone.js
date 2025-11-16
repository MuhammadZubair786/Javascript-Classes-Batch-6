// function getInput() {
//   var numb1 = prompt("Enter Number 1");
//   var op = prompt("Enter Operator ");
//   var numb2 = prompt("Enter Number 2 ");
//   var checkNumb = checkInput(numb1, numb2); //check numbers input data sei 
//   if (checkNumb == true) {
//    var result = OperatorCheck(Number(numb1),Number(numb2),op) //operation
//    if(result!=null){
//     document.writeln("Number 1 : ",numb1)
//     document.writeln("Number 2 : ",numb2)
//     document.writeln(`Number 1Result : ${numb1}  ${op} ${numb2} : ${result}`)


//    }
//    else{
//     alert("enter correct operator")
//    }

   
//   } else {
//     alert("Please enter only number");
//   }
// }

// function checkInput(a, b) {
//   if (isNaN(a) || isNaN(b) || a == "" || b == "") {
//     return false;
//   } else {
//     return true;
//   }
// }

// function OperatorCheck(a, b, op) {
//   if (op == "+") {
//     return Add(a, b);
//   } else if (op == "-") {
//     return Sub(a, b);
//   } else if (op == "*") {
//     return Multiply(a, b);
//   } else if (op == "/") {
//     return Div(a, b);
//   } else {
//     return null;
//   }
// }

// function Add(a, b) {
//   return a + b;
// }
// function Sub(a, b) {
//   return a - b;
// }
// function Multiply(a, b) {
//   return a * b;
// }
// function Div(a, b) {
//   return a / b;
// }

// getInput();

// function factorial(){

// }

// var numb = prompt("Enter Number")
// factorial()



// 5
// 5*4*3*2*1=120

// var result = 1
// function factorial(a,b){
//     // var num = +prompt("enter a number");  //5
//     for(var i=a;i>0;i--){
//     result= result*i
//     }
//     console.log(result)
// }

// factorial(5,6)


function UserInput(){
  var userData = prompt("Enter data ")
  for(var a = 0;a<userData.length;a++){
    if(a==0){
      userData  = userData.slice(a,1).toUpperCase()+userData.slice(1).toString().toLowerCase()

    }
    if(userData.charCodeAt(a)==32){//space 
      userData  =userData.slice(0,a+1)+userData.slice(a+1,a+2).toUpperCase()+userData.slice(a+2).toString().toLowerCase()


    }
  }
  console.log(userData)

}
UserInput()








