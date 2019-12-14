const toDoForm = document.getElementById("js-form__toDo"),
  toDoInput = toDoForm.querySelector("input"),
  toDoQuery = toDoForm.querySelector("h3"),
  toDoList = document.getElementById("js-toDoList");

const TODO_LS = "toDo";

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  removeToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  saveToDo(toDoInput.value);
  paintToDo(toDoInput.value);
}

function removeToDo() {
  localStorage.removeItem(TODO_LS);
  toDoForm.appendChild(toDoQuery);
  toDoForm.appendChild(toDoInput);
}

function saveToDo(text) {
  localStorage.setItem(TODO_LS, text);
}

function setToDo() {
  toDoInput.classList.add("showing");
  toDoQuery.innerText = "What is your main focus for today?";
  toDoForm.addEventListener("submit", handleSubmit);
}

function paintToDo(text) {
  toDoInput.classList.remove("showing");
  toDoForm.removeChild(toDoInput);
  toDoForm.removeChild(toDoQuery);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  li.innerText = text;
  li.classList.add("showing");
  toDoList.appendChild(li);
  li.appendChild(delBtn);
}

function init() {
  const toDo = localStorage.getItem(TODO_LS);
  if (toDo !== null) {
    paintToDo(toDo);
  } else {
    setToDo();
  }
}

init();
