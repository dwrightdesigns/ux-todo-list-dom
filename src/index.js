let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

function renderTodoApp() {
  let app = document.querySelector("#app");
  let items = "";
  todos.forEach(function (todo) {
    items += `<li class="items"><input class="check" ${
      todo.completed ? "checked='checked'" : ""
    } type="checkbox">${todo.description}</li>`;
  });

  app.innerHTML = `<h1> Todo List </h2>
<ul class="list">${items}</ul>`;

//   for (i = 0; i < todos.length; i++) {
//     if (todos[i].completed == true) {
//       document.getElementById("check" + (i + 1)).checked = true;
//     }
//   }
}

renderTodoApp();