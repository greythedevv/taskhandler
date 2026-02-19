document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", () => {
    const taskValue = taskInput.value;

    if (taskValue === "") return;

    const li = document.createElement("li");
    li.textContent = taskValue;
    taskList.appendChild(li);
    taskInput.value = "";
  });
});
