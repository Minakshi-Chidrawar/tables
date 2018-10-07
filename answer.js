  var answers = document.getElementById("answers");
  var test = "<ol>";
	
if (localStorage != null) 
	{
		console.log("This is in the check of local storage is not null");
		var totalAnswers = JSON.parse(localStorage['answers']);
		
		// Clear the localStorage
		localStorage.removeItem('answers'); 
		//var correctAnswers = totalAnswers;
		alert(totalAnswers);
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