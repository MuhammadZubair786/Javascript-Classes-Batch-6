// mcqsQuestions[0].question
var mcqsQuestions = [
  {
    question: "JS IS EASY OR NOT",
    options: ["yes", "no", "may be", "kabhi nhi"],
    answers: "a",
  },
  {
    question: "Html is EASY",
    options: ["yes", "no", "may be", "kabhi nhi"],
    answers: "a",
  },
  {
    question: "CSS is EASY",
    options: ["yes", "no", "may be", "kabhi nhi"],
    answers: "a",
  },
  {
    question: "result is 2+'2'",
    options: ["4", "0", "22", "2'2'"],
    answers: "c",
  },
  {
    question: "result is 2-'2'",
    options: ["4", "0", "22", "2'2'"],
    answers: "b",
  },
];

var score = 0; //start
var answerOptions = []; //declare answer store

var userName = prompt("Enter User Name");

function showQuiz() {
  var countScore = 100 / mcqsQuestions.length; // count dynmaically none question score
  for (var i = 0; i < mcqsQuestions.length; i++) {
    var userInput = prompt(` 
   
        Question ${i + 1} of ${mcqsQuestions.length}
        Question ${i + 1} : ${mcqsQuestions[i].question}  ?
          
            a) ${mcqsQuestions[i].options[0]}
            b) ${mcqsQuestions[i].options[1]}
            c) ${mcqsQuestions[i].options[2]}
            d) ${mcqsQuestions[i].options[3]}
            `);

    answerOptions.push(userInput);

    // A,B,C

    if (userInput.toLowerCase() == mcqsQuestions[i].answers.toLowerCase()) {
      score = score + countScore;
    }
  }
  alert("Your total score is " + score.toFixed(0));
  showOutput();
}

function showOutput() {
  if (score <= 50) {
    document.writeln(`

    <div style='width:50%;margin:auto'>
     <h1>Username : ${userName}</h1>
        <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: ${score}%"></div>
</div>
</div>
        `);
  } else {
    document.writeln(`
    <div style='width:50%;margin:auto'>
    <h1>Username : ${userName}</h1>
        <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: ${score}%"></div>
</div>
</div>
        `);
  }

  for (var i = 0; i < mcqsQuestions.length; i++) {
    document.writeln(`
          
<div class="card" style="width:50%;margin:auto;margin-top:20px">

  <div class="card-body">
    <h5 class="card-title">Question No : ${i + 1}) ${
      mcqsQuestions[i].question
    }</h5>
    <p class="card-text">
     <ul>
      <li>${mcqsQuestions[i].options[0]}</li>
      <li>${mcqsQuestions[i].options[1]}</li>
      <li>${mcqsQuestions[i].options[2]}</li>
      <li>${mcqsQuestions[i].options[3]}</li>
    </ul>
     <h3>Correct Option : ${mcqsQuestions[i].answers}</h3>
    <h3>your Option : ${answerOptions[i]}</h3>
    </p>


  </div>
</div>
     `);
  }
}

showQuiz();
