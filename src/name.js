const nameForm = document.getElementById("js-form__name"),
  nameInput = nameForm.querySelector("input"),
  greeting = nameForm.querySelector("h3");

const USER_LS = "currentUser";

function handleNameSubmit(event) {
  event.preventDefault();
  saveName(nameInput.value);
  paintGreeting(nameInput.value);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function editName() {
  const name = localStorage.getItem(USER_LS);
  nameForm.appendChild(nameInput);
  setName();
}

function setName() {
  nameForm.classList.add("SHOWING");
  greeting.innerText = "Hello, what's your name?";
  nameForm.addEventListener("submit", handleNameSubmit);
}

function paintGreeting(text) {
  nameForm.classList.remove("showing");
  nameForm.removeChild(nameInput);
  greeting.classList.add("showing");
  const editBtn = document.createElement("button");
  editBtn.innerText = "edit";
  editBtn.addEventListener("click", editName);
  const date = new Date();
  const hour = date.getHours();
  const greetingText =
    hour > 18 || hour < 6
      ? "Good evening,"
      : hour < 11
      ? "Good morning,"
      : "Good afternoon";
  greeting.innerText = `${greetingText} ${text}`;
  greeting.appendChild(editBtn);
}

function init() {
  const name = localStorage.getItem(USER_LS);
  if (name !== null) {
    paintGreeting(name);
  } else {
    setName();
  }
}

init();
