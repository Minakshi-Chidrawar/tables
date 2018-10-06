  var answers = document.getElementById("answers");
  var test = "<ol>";
	
if (localStorage != null) 
	{
		console.log("This is in the check of local storage is not null");
		var totalAnswers = JSON.parse(localStorage['answers']);
		
		// Clear the localStorage
		//localStorage.removeItem('answers'); 
		var correctAnswers = totalAnswers[0];
		alert(totalAnswers);
		alert(totalAnswers[0]);
		var wrongAnswers = totalAnswers[1];
	}
	
function displayCorrectAnswers() 
	{
		for (var i = 0; i < correctAnswers.length; i++) 
		{
			test += "<li>" + correctAnswers[i] + "</li>";
		}

		test += "</ol>";
		answers.innerHTML = test;
	} 

function displayWrongAnswers() 
	{
		for (var i = 0; i < wrongAnswers.length; i++) 
		{
			test += "<li>" + wrongAnswers[i] + "</li>";
		}
 
		test += "</ol>";
		answers.innerHTML = test;
	}