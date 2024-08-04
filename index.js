document.getElementById("add-task").addEventListener("click", function () {
  const inputTask = document.getElementById("input-task").value;
  if (inputTask === "") return;

  addTaskToList(inputTask);
  document.getElementById("input-task").value = "";
});

function addTaskToList(inputTask) {
  const taskList = document.getElementById("task-list");
  const newTask = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = inputTask;

  const taskContent = document.createElement("div");
  taskContent.classList.add("task-content");

  //creating element for styling edit and delete button
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("task-buttons");

  //creating edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.addEventListener("click", () => {
    const newTaskInput = prompt("Edit your task", taskSpan.textContent);
    if (newTaskInput !== null && newTaskInput !== "") {
      taskSpan.textContent = newTaskInput;
    }
  });

  //creating delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(newTask);
  });

  //checkbox for finish task
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      newTask.classList.add("completed");
    } else {
      newTask.classList.remove("completed");
    }
  });

  //appending elements to tasklist (UL)
  taskContent.appendChild(checkbox);
  taskContent.appendChild(taskSpan);
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);
  newTask.appendChild(taskContent);
  newTask.appendChild(buttonContainer);
  taskList.appendChild(newTask);
}
