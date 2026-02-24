document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", () => {
    const taskValue = taskInput.value;

    if (taskValue === "") return;

    const li = document.createElement("li");
    li.innerText = taskValue;

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.style.marginLeft="5px"
    deleteBtn.onclick = function(){
      li.remove();
    }

    li.appendChild(deleteBtn)
    taskList.appendChild(li);
    taskInput.value = "";
  });
});
