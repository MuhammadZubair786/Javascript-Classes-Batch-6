// var userInput = +prompt("Enter Data")
// var userShow =prompt("enter show")
// for(var i=1;i<=userInput;i++){
//     for(var j=1;j<=i;j++){
//         document.writeln(userShow)
//     }
//     document.writeln("<br/>")
// }

// 1
// 12
// 123
// 1234
// 12345

// i=2     1<10
// j=10     0<10

// 1,0
// 1,1
// 1,9

// 2d array
// center=>course=>images
// var course =[
//     ["WMA","CCO","CCNA"],
//     ["GD","DM","UI UX","ENGLISH"],
//     ["AI","PYTHON","DS"],
// ]
// for(var a = 0; a< course.length;a++){
//     for(var b =0;b<course[a].length;b++){
//         document.writeln(course[a][b]+"<br/>")
//     }
//     document.writeln("***********<br/>")
// }

// PSL,BBL,IPL
// NAME,
// FLAG

// var center = ["Smit", "Faith", "hiast"];

// var course = [
//   ["WMA", "AI","DM","DS","UI/UX"],
//   ["CCO", "IT", "ENGLISH","CCO","CCNA"],
//    ["AI","PYTHON","DM","DS"]
//   ];

// var courseImage = [
//   [
//     "https://theappsolutions.com/wp-content/uploads/images/articles/source/2/mobile-app-vs-mobile-site.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QyFdB6plrbYCWN8nz4E_gcd5UQI8FTkeWQ&s",
//   ],
//   [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjXwrQxLMrxs_QNmk8JT32OhVAYU8sy6cBQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNfpslLSci3cf7IoMfn3bL3qvHfj8-SRgLg&s",
//     "https://static.vecteezy.com/system/resources/thumbnails/017/300/766/small/learning-english-doodle-set-language-school-in-sketch-style-online-language-education-course-hand-drawn-illustration-isolated-on-white-background-vector.jpg"
//   ],
//   [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOUrMHGrMkF0Lf09uxABcn0t4KnS1DmCs3A&s",
//   ],
// ];

// document.writeln("<div class='container'>");
// for (var k = 0; k < center.length; k++) {
//   document.writeln(
//     `
//       <div class ='row mt-4'>
//       <h1 style='color:red'> Center Name :  ${center[k]}</h1>

//       `
//   );
//   for (var l = 0; l < course[k].length; l++) {
//     document.writeln(
//       `
//             <div class='col col-lg-4 col-md-6 col-sm-12 col-12 mt-4'>
//                 <div class="card" >
//                     <img src=${courseImage[k][l]} class="card-img-top" alt="..." style='height:300px'>
//                     <div class="card-body">
//                         <h5 class="card-title">${course[k][l]}</h5>
//                         <a href="#" class="btn btn-primary">course enrolled</a>
//                     </div>
//                 </div>

//             </div>

//             `
//     );

//   }
//    document.writeln("</div>")
// }
// document.writeln("</div>");

//      *
//    ***
//   *****
//  *******
// *********

// var userInput = prompt("enter input")

// document.writeln("<center>");
// for (var i = 0; i < userInput; i += 2) {
//   for (var k = userInput; k > i; k--) {
//     document.writeln("&nbsp;");
//   }

//   for (var j = 0; j <= i; j++) {
//     document.writeln("*");
//   }
//   for (var k = userInput; k > i; k--) {
//     document.writeln("&nbsp;");
//   }
//   document.writeln("<br/>");
// }
// for (var i = userInput; i > 0; i = i - 2) {
//   for (var k = userInput; k > i; k--) {
//     document.writeln("&nbsp;");
//   }

//   for (var j = 0; j < i-1; j++) {
//     document.writeln("*");
//   }
//   for (var k = userInput; k > i; k--) {
//     document.writeln("&nbsp;");
//   }
//   document.writeln("<br/>");
// }
// document.writeln("</center>");

// User input : password: Abc123@!(8 letter)

// Ascci code value :
// Capital : 65 to 90
// small : 97 to 122
// special letter : all other
// number :48 to 57

// string ,ethod
// charcodeAt

// 1) user password
// 2) password empty,8 letter
// 3) loop(capital,small,speciaal)
// 4) user capotal,number (missing)
// 5) correct

//boolean
// var capitalCheck = false;
// var smallCheck = false;
// var specialCheck = false;
// var numberCheck = false;
// var progress = 100;

// var userPassword = prompt("enter Your password");

// // Abc123
// if (userPassword == "" || userPassword.length < 8) {
//   alert("please enter password or must be greater then 8 letter");
// } else {
//   for (var i = 0; i < userPassword.length; i++) {
//     if (userPassword.charCodeAt(i) >= 65 && userPassword.charCodeAt(i) <= 90) {
//       capitalCheck = true;
//     } else if (
//       userPassword.charCodeAt(i) >= 97 &&
//       userPassword.charCodeAt(i) <= 122
//     ) {
//       smallCheck = true;
//     } else if (
//       userPassword.charCodeAt(i) >= 48 &&
//       userPassword.charCodeAt(i) <= 57
//     ) {
//       numberCheck = true;
//     } else {
//       specialCheck = true;
//     }
//   }

//   var message = "missing  ";
//   if (capitalCheck == false) {
//     message += " Capital letter";
//     progress = progress - 25;
//   }
//   if (smallCheck == false) {
//     message += " small letter";
//     progress = progress - 25;
//   }
//   if (numberCheck == false) {
//     message += " number letter";
//     progress = progress - 25;
//   }
//   if (specialCheck == false) {
//     message += " special letter";
//     progress = progress - 25;
//   }

//   if (
//     capitalCheck == true &&
//     smallCheck == true &&
//     numberCheck == true &&
//     specialCheck == true
//   ) {
//     document.writeln(`waoo, your password is strong
//       testststst
//       `);
//     document.writeln(`

//     <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
//   <div class="progress-bar bg-success" style="width: 100%"></div>
//     </div>
//     `);
//   } else {
//     document.writeln(message);
//     document.writeln("<br>" + progress + "<br/>");

//     if (progress > 51) {
//       document.writeln(
//         `

//     <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
//   <div class="progress-bar bg-success" style="width: ${progress}%"></div>
//     </div>
//     `);
//     }
//     if (progress < 51) {
//       document.writeln(`

//     <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
//   <div class="progress-bar bg-danger" style="width: ${progress}%"></div>
//     </div>
//     `);
//     }
//   }
// }

// String
// toLowerCase,toUpperCase=>method
// substring=>.substring(startindex,endindex)=>end-1=>string data

//Find Fullstop=>loop,Ascii code

// this is test.smit web and mobile course.smit auto bhan center

// var a = prompt("ENTER DATA")

// for(var i=0;i<a.length;i++){
//   if(i==0){ //first letter capital
//     a = a.substring(0,1).toUpperCase()+a.substring(1).toLowerCase()
//   }
//   else if(a.charCodeAt(i)==46){ //dot find(i) //12
//     a = a.substring(0,i+1)+a.substring(i+1,i+2).toUpperCase()+a.substring(i+2).toLowerCase()
//     // a = a.substring(0,12)+ a.substring(13,14).toUpperCase()+a.substring(14)
//     console.log(a)
//   }
// }
// console.log(a)
// var score = [];
// i-1=0-1-1+1=0
// asad=>=>0+1=>1
// for (var i = 0; i < 3; i++) {
//   var userInput = +prompt(`Enter Data of index ${i}`);
//   if (isNaN(userInput) || userInput=="") {
//     i=i-1;
//   }
//   else{
//     score.push(userInput)
//   }
// }

// console.log(score)

// a = a.toLowerCase()
// a = a.substring(0,1).toUpperCase() + a.substring(1).toLowerCase()
// console.log(a)
// console.log(a.substring(5,10)) 5 to 9


// replace =>
  // replaceAll


// var a = "smit karachi center.Smit new course launch in center karachi.coding center night in karachi"
// var replaceInput = prompt("Enter Replace Value")
// var updatedValue= prompt("enter Updated Value")
// a=a.replaceAll(replaceInput,updatedValue)
// console.log(a)

// charCodeAt =>return Ascci value=>index
// charAt=>return Value=>index
// LENGTH=>1
// DATA =>0

// var userData = "smit HyderabaT"  //14-1=>13

// console.log(userData.charAt(userData.length-1))


// round=> decimal convert to int(5 or greater(+1)),small(5)=>same
// 9.56=>10
// 9.32=>9

// round,
// ceil,+1  45.95=>46 (positive)  ,negative(Same)
// floor=>same ,decrease(negative)

// var a= 45.78
// CompressionStream

// parsetInt
// parseFloat

// Otp generate :5

// var GuessNumber = Math.random()*10000
// console.log(Math.round(GuessNumber))

// var userInput = prompt("Find Square Root of number")
// var result = Math.sqrt(userInput)
// document.writeln("Suqare root of "+userInput+"is result : "+result)


// var userInput = prompt("Find Square Root of number")
// var result = Math.cbrt(userInput)
// document.writeln("Suqare root of "+userInput+"is result : "+result)

// power:
// 2^8=>pow

// **

// var userInput =prompt("Enter Number")
// var power = prompt("Enter power")
// var result = Math.pow(userInput,power)
//  document.writeln(userInput + " power of "+ power+"is : "+result)

// string to number (Number)
// string to int=>parseInt
// string to decimal =>parseFloat
// number to string =>.toString()(method)

// toFixed=>Math

// var a = 45.656//=>round  45.7 ,45.65,   45.66
// console.log(a.toFixed(2))

// var a =56.776
// console.log(a.toFixed(2))




// 45.678

// 45.67
 

