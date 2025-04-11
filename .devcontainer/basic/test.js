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
