//define
// var a = 50=>global scop/e
// var a = 50
// if,else =>{}=>block scope

// StudentName ,roll no ,age
// var ztestdfstrts = 45
// var basjhdjhasjhd = 60
// function StudentData(){
//     //function scope,
//     var userInput = prompt("Enter User Name")
//     document.writeln("<br>userName is : "+userInput)

// }

// function AddNumber(a,b){ //parameters
//     var result = a+b
//     document.writeln("Result of a and b is ",result)

// }
// AddNumber(ztestdfstrts,bjsjajdjas) //arrguments

// StudentData(a) //call

// function StudentData(index) {
//   if (index == 1) {
//     document.writeln(`  <table class="table table-dark">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Name</th>
//       <th scope="col">Age</th>
//       <th scope="col">Roll No</th>
//     </tr>
//   </thead>
//   <tbody>`);
//   }
//   var stdName = prompt(`Data of Student ${index} \nEnter Student Name`);
//   var stdAge = +prompt(`Data of Student ${index} \nEnter Student Age`);
//   var stdRollNo = +prompt(`Data of Student ${index} \nEnter Student Roll No`);

//   if (stdName.length == 0) {
//     alert("Enter Student Name");
//   } else if (isNaN(stdAge) || stdAge.length == 0) {
//     alert("enter correct age");
//   } else if (isNaN(stdRollNo) || stdRollNo.length == 0) {
//     alert("enter correct roll no");
//   } else {
//     document.writeln(`
//          <tr>
//       <th scope="row">${index}</th>
//       <td>${stdName}</td>
//       <td>${stdAge}</td>
//       <td>${stdRollNo}</td>
//     </tr>
//     `);
//   }
// }
// document.writeln(`
//      </tbody>
// </table>
//     `);
// var inputData = prompt("Enter Input ");
// for (var i = 0; i < inputData; i++) {
//   StudentData(i + 1);
// }

// Traffic Lights :
// red =>stop
//yellow=>ready
// green =>go

// function Red() {
//   document.writeln(`<div class="card" >
//   <img src="https://3.imimg.com/data3/ON/AR/MY-14254313/red-led-retrofit.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Stop</h5>

//   </div>
// </div>`);
// }

// function Green() {
//   document.writeln(`<div class="card" >
//   <img src="https://gimgs2.nohat.cc/thumb/f/640/traffic-light-green-light-light-transparent-background-png-clipart--comhiclipartdegai.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Go</h5>
//   </div>
// </div>`);
// }
// function Yellow() {
//   document.writeln(`<div class="card" >
//   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1tTQlnb5Ko7DfwxrODkPHGh92xw74ripDQ&s" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Ready</h5>

//   </div>
// </div>`);
// }

// var userInput = prompt("Enter Light Signal").toLowerCase();

// if (
//   userInput != "green" &&
//   userInput != "g" &&
//   userInput != "yellow" &&
//   userInput != "y" &&
//   userInput != "red" &&
//   userInput != "r"
// ) {
//   alert("bhai traffic signal batyna na ha");
// } else if (userInput == "green" || userInput == "g") {
//     Green()
// }
// else if (userInput == "yellow" || userInput == "y") {
//     Yellow()
// }
// else if (userInput == "red" || userInput == "r") {
//     Red()
// }

// Username
// computer,laptop,keyboard
// calculate
// order sprint

// return

// :=>ts
// a:number,

// echallan

// nadra: cnic(return personal details)
// traffice : dls

// object ={
//     "name":'jdhwjfhjd',
//     "cncic":
//     "jsdfhjsdhjf"
// }

// todo appp : createImageBitmap,detele

// function getInput(){
//     var numb1 = +prompt("Enter Number 1")//2
//     var numb2 = +prompt("Enter Number 2")//3
//     return numb1+numb2

// }

// var result = getInput()//5
// document.writeln("Result is "+result)

// Calculator :
// 2 Number,op
// function => add,multi,sub,
// getInput();

// function getInput() {
//   var numb1 = prompt("Enter First Number");
//   var operator = prompt("Enter Operator");
//   var numb2 = prompt("Enter Second Numb");

//   var checkNumbers = CheckData(numb1,numb2); //check number sei data enter hua ha ya nhi
//   if (checkNumbers == true) {
//     var result = CheckOperator(Number(numb1), Number(numb2), operator);
//     if (result != null) {
//       document.writeln("Number one is ", numb1);
//       document.writeln("Number two is ", numb2);
//       document.writeln(
//         "result of ",
//         numb1 + " " + operator + " " + numb2 + " is equal  : " + result
//       );
//     }
//   }
// }

// 1+0=1
// 0=0
// 0-1

// function CheckData(a, b) {

//   if (isNaN(a) || isNaN(b) || a == "" || b == "" ) {
//     alert("please eneter only number ");
//     return false;
//   } else {
//     return true;
//   }
// }

// function CheckOperator(a, b, op) {
//   var result = null;
//   if (op == "+") {
//     result = Add(a, b);
//   } else if (op == "-") {
//     result = Sub(a, b);
//   } else if (op == "*") {
//     result = Multiply(a, b);
//   } else if (op == "/") {
//     result = div(a, b);
//   } else {
//     alert("bhai operator sei enter kar");
//   }
//   return result;
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
// function div(a, b) {
//   return a / b;
// }

// 6=>6*5*4*3*2*1

// function Fact(number){
//     var result = 1;
//     for(var k = number;k>0;k--){
//         result = result*k;

//     }
//     document.writeln("Fact of "+ number + " is equal to : "+result)

// }

// Fact(prompt("Enter Number : "))

// defalut data pass
// deafult parmeters value

// salary: gettime

// name,department,20+30

// function storeDetails(name,department="intership",salary=20000){
//     document.writeln("Name is ",name+"<br/>")
//     document.writeln("department is ",department+"<br/>")
//     document.writeln("salary : "+salary)
//     document.writeln("*****************")
// }
// // var name = prompt("Enter Name")
// storeDetails("ali")
// storeDetails("omer","Hr",80000)
// storeDetails("saqib","It")

// non premtive data : multiply data store
// array : store data by index number =>key =>indexnumber (0)
// Object : store by key value pair=>kay =>name
// hec : education records

// var std = {
//     "name":"test",
//     "education":"bsc",
//     "educationdetails":[
//         {
//             "degree":"matric",
//             "score":"300"
//         },
//          {
//             "degree":"inter",
//             "score":"400"
//         },
//          {
//             "degree":"bsc",
//             "score":"400"
//         }

//     ]
// }

// MCQS : ALERT
// var object = {
//     key:"value",
//     key:123,
//     key:true,
//     key:"test",
//     key:[],
//     key :[
//         {},]
// }

// coursename
// centername
// courseimage

// {
// "cname":"",
// "centernmae":"",
// "cimage":""

// }

// mcqs:

// [1,2,3,4]
// array of objects
// var mcqs = [
//   {
//     q: "teststtststfst",
//     option: [1, 3, , 6],
//     correctans: "test",
//   },
//   {
//     q: "teststtststfst",
//     option: [1, 3, , 6],
//     correctans: "test",
//   },
// ];
// [,2,3]
// var stdDetails = {
//   name: "Ali",
//   age: 30,
//   course: "WMA",
// };

// document.writeln(stdDetails["name"]);
// document.writeln("<br/>" + stdDetails.name);
// Array.length
// StudentData.name

// var StudentData = {
//   name: "test",
//   class: 12,
//   age: 23,
// };

// document.writeln("User name is ", StudentData["name"]);
// document.writeln("<br/>User Class is ", StudentData.class);
// document.writeln("<br/>User Age is ", StudentData.age);

// StudentData.course = "WMA"; //add new key
// StudentData.age = 45; // update
// StudentData.score = [23, 45, 6, 7, 890, 0];
// StudentData.persondetails = [{ cnic: "test", contact: "716236" }];
// delete StudentData.name
// console.log(StudentData)
// console.log(StudentData.cnic);

// document.writeln("<br/>User Age is ", StudentData.age);

// Student Mangement :Crud
// add
// edit
// delete
// search
// [{"name":"","rollno":"",""}]

// while Loop
// var input = "y"
// while(input=="y"){
//     console.log("Hello")
//     input=prompt("Enter input if cont")

// }

// var studentData = []

// function showOption(){
//     prompt("1) Add New Students\n 2) Edit Student \n 3) Delet Student \n 4) Search Student \n 5) View Students")

// }

// showOption()

// var arr =[1,2,340]
// arr.indexOf(0)=>1

// js is easy :
// d
// 1,2,3,4 // nhi sei data

// Object : array

var mcqsQuestions = [
  {
    question: "JS IS EASY OR NOT",
    options: ["Yes", "No", "MAY BE", "NHI BHAI KABHI BEI NHI"],
    answer: "b",
  },
  {
    question: "HTML IS EASY OR NOT",
    options: ["Yes", "No", "MAY BE", "NHI BHAI KABHI BEI NHI"],
    answer: "a",
  },
  {
    question: "result : 2+'2'",
    options: ["4", "22", "2,2", "error"],
    answer: "b",
  },
  {
    question: "result : 2-'2'",
    options: ["4", "22", "2,2", "0"],
    answer: "d",
  },
];

var score = 0;
var userAnswer = []; // options store ho jo user na select kia ha

function showMcqs() {
  score = 0;

  var oneSore = 100 / mcqsQuestions.length;

  for (var i = 0; i < mcqsQuestions.length; i++) {
    var userInput = prompt(`
            Question  ${i + 1}: ${mcqsQuestions[i]["question"]}\n
            a) ${mcqsQuestions[i]["options"][0]}\n
            b) ${mcqsQuestions[i]["options"][1]}\n
            c) ${mcqsQuestions[i]["options"][2]}\n
            d) ${mcqsQuestions[i]["options"][3]} \n

            `);
    userAnswer.push(userInput);

    if (
      userInput.toLowerCase() == mcqsQuestions[i].answer &&
      userInput.length != 0
    ) {
      score = score + oneSore;
    }
  }
  alert("Your score is " + score.toFixed(2));
  ShowOutput();
}

showMcqs();

function ShowOutput() {
  for (var i = 0; i < mcqsQuestions.length; i++) {
    document.writeln(`
            <h1>Question ${mcqsQuestions[i]["question"]}</h1>
            <ul>
      <li> <b>${mcqsQuestions[i]["options"][0]}</b></li>
      <li> <b>${mcqsQuestions[i]["options"][1]}</b></li>
      <li> <b>${mcqsQuestions[i]["options"][2]}</b></li>
      <li> <b>${mcqsQuestions[i]["options"][3]}</b></li>
    </ul>    
               <h3> Correct Options: ${mcqsQuestions[i]["answer"]}</h3>
               <h3> your Answer: ${userAnswer[i]}</h3>
               <hr/>

            `);
  }
}

// Gallery
