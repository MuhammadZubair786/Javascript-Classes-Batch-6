// var a  = parseInt(1000 + Math.random() * 9000)   // 1 to 10
// 8999
// console.log(a)
// Dom
// 4

// Round : .5=>+1,.4=>same
// 0.70
// ceil   : .0001=>+1   1999=>2000=>20.30=>21=>100=>discount , >-negative=>same

// -10
// -5
// floor : 500.99//5000=>same  ,-=>+1

// var a =106.88
// console.log(Math.round(a)) //56.8,57
// var a = 56.99
// console.log(Math.floor(a)) //57
// 5*5*5

// var numb = 10
// console.log(parseInt(Math.cbrt(numb)))

// task 
// user : sqrt,cbrt(decimal)
// var userInput = prompt("Enter Input")
// var sqrRt= Math.sqrt(userInput).toFixed(1)
// var cubeRoot = Math.cbrt(userInput).toFixed(1)

// document.writeln("Square root of "+userInput + " is : "+sqrRt)
// document.writeln("cube root of "+userInput + " is : "+cubeRoot)

// power

// 2^3:8=> **=>2**3=>8
// 10*3=>10*10*10
// var a =prompt("enter number")
// var b =prompt("enter power")
// var result= Math.pow(a,b)
// console.log(result)

// string to int=>parseInt
// string to decimal=>parseFloat
// string to number=>number

// number to string =>.toString()
//  var a = parseFloat("123.78")=>123.78
// var a = parseInt("123.78")=>123
// var a = Number("123")=>123

// 1234 + 456
// 1234456


// a.toString()

// var a =2345
// var b = 234
// console.log(a+b)
// console.log(typeof(a))
// console.log(typeof(a.toString()))

// string=>lowercase,UpperCaSE

// var sentence = "smit"
// console.log(sentence.length)
// memory store 
// var rightNow = new Date(); //object 
// console.log(rightNow)
// var date = rightNow.toString().slice(4,16)
// document.writeln("<h1>Date : "+ date+"</h1>")
// var time = rightNow.toString().slice(16,25)
// document.writeln("<h1>Time : "+ time+"</h1>")
// var day = rightNow.toString().slice(0,3)
// document.writeln("<h1>day : "+ day+"</h1>")
// otp 4=>5

// 0=>sun,1=>mon,6=>sat

// var array =["Sunday","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURSDAY"]
var monthArray =["jan","feb","march","april","may","june","july","aug","sep","oct","nov","december"]
var newDate = new Date()
// var day = newDate.getMonth() //return number (index)
// console.log(monthArray[day])  //nov,11,10
// console.log(newDate.getHours())
// var indexNumber = newDate.getMonth() // return number start 1(Sunday)
// console.log(monthArray[indexNumber])

// console.log(newDate.getTime())

// var date = new Date("20 feb 2009")
// date.set(10)
// console.log(date)

// last ramzan : 1st roza (day find)

// 1) 1st roza
// 2) current date 
// 3) difference 

// var firstRoza = new Date("02 nov 2025");
// var currentDate = new Date();

// var diffInMs = currentDate - firstRoza; // gives difference in milliseconds(time)
// var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

// console.log("Days difference:", diffInDays);



// var diffInMinutes = Math.floor((diffInMs / (1000 * 60)) % 60);
// var diffInSeconds = Math.floor((diffInMs / 1000) % 60);

// 1000*60*60*24=>

// var result = currentDate.getTime()-firstRoza.getTime();
// console.log(result.getDay())
