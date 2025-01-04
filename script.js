// set varaible for the submit button, than listen
let submitButton = document.getElementById("submit");

let clearButton = document.getElementById("clear");

function list() {
  // safety check
  let userInput = document.getElementById("textBox").value;
  if (userInput == "") {return;}
  
  // add a li element to <ul>
  let toAdd = document.createElement("li");
  toAdd.textContent = userInput;
  let toDoList = document.getElementById("toDo");
  toDoList.appendChild(toAdd);
  
  // add close button to each <li>
  let closeButton = document.createElement("Button");
  closeButton.textContent = "x";
  
  toAdd.appendChild(closeButton);
  
  // finally clear text
  document.getElementById("textBox").value = "";
  
  // in case close button is clicked
  closeButton.addEventListener("click",function() {
    toDoList.removeChild(toAdd);
  });
 }

function clearList() {
  document.getElementById("toDo").innerHTML = "";
}

