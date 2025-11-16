// 1=>1
// 12
// 123
// 1234
// 12345

// array
// [[],[],[]]
// student
// [[],[]]

// kfc=>
// [[],[],[]]
// 1
// 12
// 123
// 1234
// 12345

// outer loop 1
// inner loop complete run

// loop
// var userInput = prompt("Enter Table")
// for(var i=1;i<10;i++){
//     document.writeln(userInput + " * "+i + " = "+ i*userInput+"<br/>")
// }
// 12345
// 1234
// 123
// 12
// 1

// var userInput = prompt("Enter Serires")
// Nested Loop
// for(var i=userInput;i>0;i--){
//    for(var j=1;j<=i;j++){
//     document.writeln("*")
//    }
//    document.writeln("<br/>")
// }

// for(var i=1;i<userInput;i++){
//    for(var j=1;j<=i;j++){
//     document.writeln("*")
//    }
//    document.writeln("<br/>")
// }

// var country = []

// object


// {"name":"course","true"}
var center = ["Smit", "Hiast", "Aptech"];
var course = [
  ["WMA", "AI", "CCO","Flutter"],
  ["AI", "DM", "DS", "FORTEND"],
  ["ENGLISH", "FLUTTER"],
];


var courseImage = [
  [
    "https://cdn.elearningindustry.com/wp-content/uploads/2022/09/How-To-Choose-A-Web-And-Mobile-App-Development-Company.jpg",
    "https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg",
    "https://dobetter.esade.edu/sites/default/files/post/2023-05/chief-corporate-officer-cco-mobile.jpg",
    "https://storage.googleapis.com/cms-storage-bucket/lockup_flutter_horizontal.c823e53b3a1a7b0d36a9.png",

  ],
  [
    "https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
    "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
    "https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=2147483647&v=beta&t=IqnGNJxS4J-yaL4rgLBlx-cbNAbFwpEMCRvkkLXsR48",
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUG25fy7kLvpTLJDGn72u6hGx49fYji1SArg&s",
    "https://storage.googleapis.com/cms-storage-bucket/lockup_flutter_horizontal.c823e53b3a1a7b0d36a9.png",
  ],
];




document.writeln(`
    <div class="container">
    
    `);
for (var i = 0; i < center.length; i++) {
  document.writeln(`<div class='row'>
    <h1>Center Name ${center[i]} </h1>
    `);

  for (var j = 0; j < course[i].length; j++) {
    document.writeln(`
        <div class='col col-lg-4 col-md-6 col-sm-12 col-12 mt-4 '>
            <div class="card" >
                <img src=${courseImage[i][j]} class="card-img-top" alt="..." style='height:200px'>
                <div class="card-body">
                    <h5 class="card-title">${course[i][j]}</h5>
                 
                    <a href="#" class="btn btn-primary">course Enroll</a>
                </div>
            </div>
        </div> 
        
        
        `);
   
  }
  document.writeln("</div>");//row close
}
document.writeln("</div>");//container close

// var center = ["Smit","Hiast","Aptech","Faith","OMER CENTER" ]

// var course = [
//     ["WMA","AI","CCO","CCNA","FLUTTER","GD","UI/UX","DM"],
//     ["AI","DM","DS","FORTEND"],
//     ["ENGLISH","FLUTTER","E-COM"],
//     ["IT","COMPUTER OPERATOR","Ui Ux"],
//     ["URDU"]
// ]

// var student =["Ali","Omer","Asad"]

// var subjectName =["English","Urdu","MAth"]

// var score =[
//     [10,20,45],
//     [100,20,45],
//     [70,120,40],

// ]

// for(var i=0;i<student.length;i++){
//     document.writeln("student Name : ",student[i]+"<br/>")
//     for(var j=0;j<score[i].length;j++){
//         document.writeln((j+1)+") "+subjectName[j]+" SCORE "+score[i][j]+"<br/>")
//     }
//     document.writeln("<br/><br/>")
// }
