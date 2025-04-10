const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


console.clear();
let name = prompt("Enter your name:");
if (name) {
  alert(`Hello, ${name}! 👋`);
} else {
  alert("You didn't enter a name.");
}
console.log("Script finished running.");



function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.classList.add("task");
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Clear the input box after adding a task
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTaskList () {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTaskList();
