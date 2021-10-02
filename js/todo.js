//    SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

//    EVENTS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//   FUNCTIONS
function addTodo(event) {
  //Browser soll nicht aktualisieren wenn neue Aufgabe hinzügefügt wird
  event.preventDefault();

  // Erstelle div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Erstelle li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // erstelle Button um Aufgabe als erledigt zu markieren
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "&#10004;";
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  // erstelle Button um Aufgabe zu löschen
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.classList.add("bx");
  trashButton.classList.add("bx-trash");
  todoDiv.appendChild(trashButton);
  // div(todoDiv) in ul(todoList) einfügen
  todoList.appendChild(todoDiv);
  // Eingabefeld leeren nachdem aufgabe erstellt wurde
  todoInput.value = "";
}
// Aufgabe löschen
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
