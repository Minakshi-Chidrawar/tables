    var users  = [];
	users.push(["Mayank", "40"]);
    users.push(["Monu", "50"]);
	localStorage["users"] = JSON.stringify(users);
	var tableData = document.getElementById("outputData");
	var usersFromLocalStorage = JSON.parse(localStorage['users']);
	
    window.onload = startProcess();

function startProcess() {    
    tableData.innerHTML = "<tr class='table-th-color'> <th>Name</th> <th>Score</th> </tr>";
	retrieveFromLocalStorage();
}

function saveLocal(name) {
	var firstName = name;

    for (i = 0; i < (usersFromLocalStorage.length); i++) {
 		if (usersFromLocalStorage[i][0] === firstName) {
			break;
		} else 
		{
			users.push([firstName, "0"]);
			localStorage["users"] = JSON.stringify(users);
			break;
		}		
    }	
	
	retrieveFromLocalStorage();
	window.open("table.html", "_self");  
}

function retrieveFromLocalStorage() {
	tableData.innerHTML = "";
	var usersFromLocalStorage = JSON.parse(localStorage['users']);

	for (var i = 0; i < (usersFromLocalStorage.length); i++) {
	retrieveUser = usersFromLocalStorage[i];

	tableData.innerHTML += "<tr><td>" + retrieveUser[0] + "</td><td>" + retrieveUser[1] + "</td></tr>";       
    }
}