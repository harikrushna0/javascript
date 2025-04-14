const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");





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
