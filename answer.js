  var answers = document.getElementById("answers");
  var test = "<ol>";
	
if (localStorage != null) 
	{
		var totalAnswers = JSON.parse(localStorage['answers']);
		
		// Clear the localStorage
		localStorage.removeItem('answers'); 
	}
	
function displayAnswers() 
	{
		for (var i = 0; i < totalAnswers.length; i++) 
		{
			test += "<li>" + totalAnswers[i] + "</li>";
		}

		test += "</ol>";
		document.getElementById('totaAnswers').className = 'hideClass';
		answers.innerHTML = test;
	} 