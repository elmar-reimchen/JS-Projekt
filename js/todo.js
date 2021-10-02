//    SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".basic-grid");

//    EVENTS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//   FUNCTIONS
function addTodo(event) {
  //Browser soll nicht aktualisieren wenn neue Aufgabe hinzügefügt wird
  event.preventDefault();

  // Erstelle div
  // const todoDiv = document.createElement("section");
  // todoDiv.classList.add("basic-grid");

  // Erstelle li
  const newTodo = document.createElement("div");
  const newTodoText = document.createElement("h2");
  newTodoText.innerText = todoInput.value;
  newTodo.classList.add("card");
  newTodoText.classList.add("card-text");

  newTodo.appendChild(newTodoText);
  // erstelle Button um Aufgabe als erledigt zu markieren
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "&#10004;";
  completedButton.classList.add("completed-btn");
  newTodo.appendChild(completedButton);

  // erstelle Button um Aufgabe zu löschen
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.classList.add("bx");
  trashButton.classList.add("bx-trash");
  newTodo.appendChild(trashButton);
  // div(todoDiv) in ul(todoList) einfügen
  todoList.appendChild(newTodo);
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
