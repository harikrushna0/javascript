const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function clearAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        listContainer.innerHTML = "";
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
    const data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    }
}
showTaskList();
