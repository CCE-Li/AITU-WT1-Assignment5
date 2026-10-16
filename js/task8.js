const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoEmpty = document.getElementById("todo-empty");
const totalCount = document.getElementById("total-count");
const doneCount = document.getElementById("done-count");
const leftCount = document.getElementById("left-count");

let tasks = [];
let nextId = 1;

function updateStats() {
  const completedTasks = tasks.filter(function (task) {
    return task.done;
  });

  totalCount.textContent = tasks.length;
  doneCount.textContent = completedTasks.length;
  leftCount.textContent = tasks.length - completedTasks.length;
  todoEmpty.hidden = tasks.length > 0;
}

function renderTasks() {
  todoList.innerHTML = "";

  tasks.forEach(function (task) {
    const item = document.createElement("li");
    item.className = task.done ? "todo-item done" : "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", "Mark task as completed");
    checkbox.addEventListener("change", function () {
      toggleTask(task.id);
    });

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn danger";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTask(task.id);
    });

    item.append(checkbox, text, deleteButton);
    todoList.append(item);
  });

  updateStats();
}

function addTask() {
  const text = todoInput.value.trim();

  if (text === "") {
    return;
  }

  tasks.push({ id: nextId, text: text, done: false });
  nextId++;
  todoInput.value = "";

  console.log("Task added:", text);
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find(function (item) {
    return item.id === id;
  });

  task.done = !task.done;

  console.log("Task \"" + task.text + "\" is now " + (task.done ? "completed" : "active"));
  renderTasks();
}

function deleteTask(id) {
  const task = tasks.find(function (item) {
    return item.id === id;
  });

  tasks = tasks.filter(function (item) {
    return item.id !== id;
  });

  console.log("Task deleted:", task.text);
  renderTasks();
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

renderTasks();
