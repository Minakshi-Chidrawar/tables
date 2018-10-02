window.onload = startProcess();

function startProcess() {
    var firstName = document.getElementById("name"),
        tableData = document.getElementById("outputData"),
        i = 0;
    tableData.innerHTML = "<tr class='table-th-color'> <th>Name</th> <th>Score</th> </tr>";
  //localStorage.clear();
    localStorage.setItem("Mayank", "40");
    localStorage.setItem("Monu", "50");
  //location.reload();
  
  //check if local storage has any value
  //If yes then display
  //alert(localStorage.getItem("Monu"));
  
/*  if (localStorage === null) {
    console.log(localStorage.key(2));
  }
  */
	console.log(localStorage.length);
    for (i = 0; i < (localStorage.length); i++) {
        key = localStorage.key(i);
        value = localStorage.getItem(key);
    
	console.log("It is in the loop table");
    console.log(i);
    console.log(key);
    console.log(value);
    
        //if (document.getElementById("highscores") !== null) {
        tableData.innerHTML += "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
        //}
    }
}

function saveLocal() {
    var key = firstName.value,
        value = "0";
  
    if (key && value) {
        console.log("This is in savelocal");
        localStorage.setItem(key, value);
        location.reload();
    //window.open("table.html", "_self");
        window.open("table.html");
    }
  
}

