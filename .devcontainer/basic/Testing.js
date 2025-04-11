// Constants & DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("new-task");
const dueDate = document.getElementById("due-date");
const priority = document.getElementById("priority");
const taskList = document.getElementById("task-list");
const searchInput = document.getElementById("search");
const sortOptions = document.getElementById("sort-options");
const deleteCompletedBtn = document.getElementById("delete-completed");
const toggleThemeBtn = document.getElementById("toggle-theme");
const statsDiv = document.getElementById("stats");


console.clear();
let name = prompt("Enter your name:");
if (name) {
  alert(`Hello, ${name}! 👋`);
} else {
  alert("You didn't enter a name.");
}
console.log("Script finished running.");


// State
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let theme = localStorage.getItem("theme") || "light";

// Utility Functions
function saveState() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("theme", theme);
}

function applyTheme() {
  document.body.className = theme;
}

function formatDate(dateStr) {
  if (!dateStr) return "No due date";
  const date = new Date(dateStr);
  return date.toLocaleDateString();
}

// Task Rendering
function renderTasks() {
  taskList.innerHTML = "";
  const searchTerm = searchInput.value.toLowerCase();
  const sortedTasks = getSortedTasks();

  sortedTasks
    .filter(task => task.text.toLowerCase().includes(searchTerm))
    .forEach((task, index) => {
      const li = document.createElement("li");
      li.className = `task-item priority-${task.priority}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => toggleComplete(index));

      const text = document.createElement("span");
      text.className = "task-text";
      text.textContent = `${task.text} (${task.priority}) - ${formatDate(task.dueDate)}`;
      if (task.completed) text.classList.add("completed");

      const actions = document.createElement("div");
      actions.className = "task-actions";

      const editBtn = document.createElement("button");
      editBtn.innerHTML = "✏️";
      editBtn.addEventListener("click", () => editTask(index));

      const delBtn = document.createElement("button");
      delBtn.innerHTML = "🗑️";
      delBtn.addEventListener("click", () => deleteTask(index));

      actions.appendChild(editBtn);
      actions.appendChild(delBtn);

      li.appendChild(checkbox);
      li.appendChild(text);
      li.appendChild(actions);

      taskList.appendChild(li);
    });

  updateStats();
}

// Stats
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const remaining = total - completed;
  statsDiv.innerText = `Total: ${total} | Completed: ${completed} | Remaining: ${remaining}`;
}

// Sort logic
function getSortedTasks() {
  let sorted = [...tasks];
  const criteria = sortOptions.value;
  if (criteria === "name") {
    sorted.sort((a, b) => a.text.localeCompare(b.text));
  } else if (criteria === "date") {
    sorted.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  } else if (criteria === "priority") {
    const order = { high: 1, normal: 2, low: 3 };
    sorted.sort((a, b) => order[a.priority] - order[b.priority]);
  }
  return sorted;
}

// CRUD Functions
function addTask(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const task = {
    text,
    completed: false,
    dueDate: dueDate.value || null,
    priority: priority.value,
    createdAt: new Date().toISOString()
  };

  tasks.push(task);
  saveState();
  renderTasks();
  form.reset();
}

function editTask(index) {
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    saveState();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveState();
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveState();
  renderTasks();
}

function deleteCompleted() {
  tasks = tasks.filter(t => !t.completed);
  saveState();
  renderTasks();
}

function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  applyTheme();
  saveState();
}

// Event Listeners
form.addEventListener("submit", addTask);
searchInput.addEventListener("input", renderTasks);
sortOptions.addEventListener("change", renderTasks);
deleteCompletedBtn.addEventListener("click", deleteCompleted);
toggleThemeBtn.addEventListener("click", toggleTheme);

// Initial Setup
applyTheme();
renderTasks();
