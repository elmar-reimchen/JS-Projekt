(function () {
  //    SELECTORS
  const todoInput = document.querySelector(".todo-input");
  const todoButton = document.querySelector(".todo-btn");
  const todoList = document.querySelector(".basic-grid");
  const toggleGrid = document.querySelector(".list-view-btn");
  const toggleDarkmode = document.querySelector(".darkmode-btn");
  const searchThisClass = document.querySelector(".basic-grid");
  const searchbody = document.querySelector(".dark");
  const searchInput = document.querySelector(".todo-input");

  // const filterOption = document.querySelector(".filter-todo");

  //    EVENTS
  todoButton.addEventListener("click", addTodo);
  todoList.addEventListener("click", deleteCheck);
  // filterOption.addEventListener("click", filterTodo);
  // document.addEventListener("DOMContentLoaded", getTodos);
  
  toggleGrid.addEventListener("click", function () {
    document.getElementById(".list-view-btn");
    searchThisClass.classList.toggle("listen-ansicht");
    toggleGrid.classList.toggle("fa-bars");
    toggleGrid.classList.toggle("fa-th-large");
  });

  toggleDarkmode.addEventListener("click", function () {
    document.getElementById(".darkmode-btn");
    searchbody.classList.toggle("dark");
    searchInput.classList.toggle("light-mode");
    toggleDarkmode.classList.toggle("light-mode");
  });

  //   FUNCTIONS
  function addTodo(e) {
    //Browser soll nicht aktualisieren wenn neue Aufgabe hinzügefügt wird
    e.preventDefault();

    // Erstelle div und
    const newTodo = document.createElement("div");
    const newTodoText = document.createElement("h2");
    newTodoText.innerText = todoInput.value;
    const editable = newTodoText.contentEditable;
    // if (todoInput.value === "") {
    //   alert("You must write something!");
    // } else
    newTodoText.contentEditable = "true";
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
      // const todo = document.querySelector("h2");
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
  }

})();
