//    SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoInput2 = document.querySelector(".todo-input2");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".basic-grid");

//    EVENTS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//   FUNCTIONS
function addTodo(event) {
  //Browser soll nicht aktualisieren wenn neue Aufgabe hinzügefügt wird
  event.preventDefault();

  // Erstelle div und
  const newTodo = document.createElement("div");
  const newTodoText = document.createElement("h2");
  const newTodoText2 = document.createElement("p");
  newTodoText.innerText = todoInput.value;
  newTodoText2.innerText = todoInput2.value;
  const editable = newTodoText.contentEditable;
  // if (todoInput.value === "") {
  //   alert("You must write something!");
  // } else
  newTodoText.contentEditable = "true";
  newTodoText2.contentEditable = "true";
  newTodo.classList.add("card");
  newTodoText.classList.add("card-text");
  newTodoText2.classList.add("card-text");
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(newTodoText2);
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
    // const todo = document.querySelector("h2");
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// const toggleButton = document.querySelector(".list-view-btn");
// const searchThisClass = document.querySelector(".basic-grid");

// toggleButton.addEventListener("click", function () {
//   searchThisClass.classList.toggle(".listen-ansicht");
// });
