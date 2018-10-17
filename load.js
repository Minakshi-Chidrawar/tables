    var users  = [];
	users.push(["Mayank", "40"]);
    users.push(["Monu", "50"]);
	localStorage["users"] = JSON.stringify(users);
	
    window.onload = startProcess();

function startProcess() {
    var tableData = document.getElementById("outputData");
    tableData.innerHTML = "<tr class='table-th-color'> <th>Name</th> <th>Score</th> </tr>";

	retrieveFromLocalStorage(tableData);
}

function saveLocal() {
	var firstName = document.getElementById("firstName").value;

    for (i = 0; i < (usersFromLocalStorage.length); i++) {
 		if (usersFromLocalStorage[i].includes(firstName)) {
			score = usersFromLocalStorage[i][1];
		} else 
		{
			alert(firstName);
			users.push([firstName, "0"]);
			localStorage["users"] = JSON.stringify(users);
			score = 0;
			retrieveFromLocalStorage();
			break;
		}		
    }	
	window.open("table.html");  
}

function retrieveFromLocalStorage(tableData) {
	alert("It is in the function");
	var usersFromLocalStorage = JSON.parse(localStorage['users']);
	alert(usersFromLocalStorage);
	for (var i = 0; i < (usersFromLocalStorage.length); i++) {
	retrieveUser = usersFromLocalStorage[i];

	tableData.innerHTML += "<tr><td>" + retrieveUser[0] + "</td><td>" + retrieveUser[1] + "</td></tr>";       
    }
}