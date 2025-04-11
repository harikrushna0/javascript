console.log("Harikrushna")

const tasks = [];
function addTask(task) {
  tasks.push(task);
  console.log(`✅ Added: ${task}`);
}
function showTasks() {
  console.log("📋 To-Do List:");
  tasks.forEach((t, i) => console.log(`${i + 1}. ${t}`));
}
addTask("Write PR tests");
addTask("Review code");
showTasks();

console.clear();
let name = prompt("Enter your name:");
if (name) {
  alert(`Hello, ${name}! 👋`);
} else {
  alert("You didn't enter a name.");
}
console.log("Script finished running.");

