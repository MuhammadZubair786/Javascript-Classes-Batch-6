// cnic => nadra=>return cnicn =>details=>api
// dl=>traffice =>driver licensin=>expire,car

// echallan =>challan

// car=>3000+300

// function =>print =>tcs

// echaalan =>

// user : input 3
// std,rollno,age
// show =>table

//user input => empty ,0
// input =>function
// function=> 3()=>3 input =>name,age,roll
// table

var userInput = +prompt("Enter User Input");
if (isNaN(userInput) || userInput == "") {
  alert("Enter Correct Data ");
} else {
  document.writeln(`<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Student Roll</th>
      <th scope="col">Std name</th>
      <th scope="col">age</th>
    </tr>
  </thead>
  <tbody></tbody>`);
  for (var i = 0; i < userInput; i++) {
    StudentData(i+1);
  }

  document.writeln(`  </tbody>
</table>`);
}

function StudentData(indexNo) {
  var stdName = prompt("Enter Stduent Name ");
  var stdRollNo = +prompt("Enter Stduent roll no ");
  var stdAge = +prompt("Enter Stduent age ");

  document.writeln(
    ` 
    <tr>
      <th scope="row">${indexNo}</th>
      <td>${stdRollNo}</td>
      <td>${stdName}</td>
      <td>${stdAge}</td>
    </tr>
    `
  );
  //   document.writeln("Stduent data is :" + stdName);
}

// StudentData();

{
  /* <table>
      <tr>
        <td>Student Name</td>
        <td>${stdName}</td>
      </tr>
      <tr>
        <td>Stduent Roll no</td>
        <td>${stdRollNo}</td>
      </tr>
      <tr>
        <td>Student Age</td>
        <td>${stdAge}</td>
      </tr>
    </table> */
}
