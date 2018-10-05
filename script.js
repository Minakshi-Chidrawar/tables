// Code goes here
//document.getElementById('input1').innerHTML = 2;
//document.getElementById('input3').value = (Math.round(Math.random() * 11));
  var correctAnswers = [];
  var wrongAnswers = [];
  var totalAnswers = [];
  var swapArray = [];
  var checkOperandValue = [];
  //var operand2 = (Math.round(Math.random() * 11));  
  //checkOperandValue.push(operand2);
  
  var correctAnswersCount = 0;
  var wrongAnswersCount = 0;
  var totalAnswersCount = 0;
  var totalCount = 1;
  
function LoadInputValues() {
    //clear the input box of answer
	document.getElementById('paraAnswers').className = 'hideClass';
    document.getElementById('answer').value = "";
    document.getElementById('count').innerText = totalCount + ".";
    //document.getElementById('tempMsg').innerHTML = "";
    var operand1 = 2;    
    //Set input1 to 2 as it is table for 2
    document.getElementById('operand1').innerText = operand1;

    var inputBox = document.getElementById('operand2');
    var operand2 = (Math.round(Math.random() * 11));
    swapArray.push(operand2);
    
    inputBox.innerHTML = operand2;    
}

function CalculateFunction(val) {
  var operand1Value = (document.getElementById('operand1').innerText);
  var operand2Value = (document.getElementById('operand2').innerText);
  var expectedAnswer = 2 * operand2Value;
  var userAnswer = val;
  
  //document.getElementById('tempMsg').innerHTML = typeof(userAnswer);
  totalAnswersCount++;
  if (expectedAnswer == userAnswer)
  {
    correctAnswersCount++;
    correctAnswers.push([operand1Value + " X " + operand2Value + " = "+ expectedAnswer]);

    document.getElementById('nextButton').className = 'btn btn-success';
    output =  'Your Answer is CORRECT!';
  }
  else
  {
    wrongAnswersCount++;
    wrongAnswers.push([operand1Value + " X " + operand2Value + " = " 
                    + expectedAnswer + "  Your answer:" + userAnswer]);
    
    document.getElementById('nextButton').className = 'btn btn-danger btn-lg';

    output = 'Your Answer is WRONG!' 
           + '</br> Correct answer is: ' + expectedAnswer 
           + '</br> Your Answer is: '    + userAnswer;
  } 
  document.getElementById('msg').innerHTML = output;
}

function LoadNextInputValues() {
	totalCount++;
  if (totalCount < 5) { 
    document.getElementById('msg').innerHTML = "";
    document.getElementById('count').innerText = totalCount + ".";
    document.getElementById('nextButton').className = 'btn btn-primary form-button';
    document.getElementById('operand1').textContent = 2;  
    var answer = document.getElementById('answer').value;
  
    
    if (answer !== "")
    {
      //console.log(answer);
      //clear the input box of answer
      document.getElementById('answer').value = "";
      
      //Set input1 to 2 as it is table for 2
      //document.getElementById('operand1').value = 2;
      //operand2 = (Math.round(Math.random() * 11));
      
      var inputBox = document.getElementById('operand2');
      operand2 = checkForOperand2(swapArray);
      swapArray.push(operand2);

      inputBox.innerText = operand2;
    }
    else
    {
      document.getElementById('msg').innerHTML = "Please enter an answer";
    }
  }	
  else {
	  window.open("answer.html", "_self");
/* 		document.getElementById('paraAnswers').className = 'showClass';
		document.getElementById('correctAnswers').className = "btn btn-success showClass";
		document.getElementById('wrongAnswers').className = "btn btn-danger showClass";
		document.getElementById('startCalculation').className = 'hideClass';
		document.getElementById('nextButton').className = 'hideClass';
		document.getElementById('msg').className = 'hideClass'; */
  }

  function checkForOperand2(swapArray) {
    operand2 = (Math.round(Math.random() * 11));
    console.log("This is in the check operand2: " + operand2 );
    console.log(swapArray.includes(operand2));
    if (swapArray.includes(operand2)) {
	  checkForOperand2(swapArray);        
    } 

    return operand2;
  }
}

function displayCorrectAnswers() {
  var test = "<ol>";

  for (var i = 0; i < correctAnswers.length; i++) {
    test += "<li>" + correctAnswers[i] + "</li>";
  }
  
  test += "</ol>";
  
  var answers = document.getElementById("answers");
  answers.innerHTML = test;
} 

function displayWrongAnswers() {
  var test = "<ol>";

  for (var i = 0; i < wrongAnswers.length; i++) {
    test += "<li>" + wrongAnswers[i] + "</li>";
  }
  
  test += "</ol>";
  
  //var element = document.getElementById("answers");
  answers.innerHTML = test;
}