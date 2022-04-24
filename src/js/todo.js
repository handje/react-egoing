const TODOKEY = "todo";

const todo = document.querySelector("#toDo");
const todoForm = document.querySelector(".todoForm form");
const todoItem = document.querySelector(".todoForm #todoItem");

const todoList = document.querySelector(".todoList ul");

function save() {
  localStorage.setItem(TODOKEY, JSON.stringify(storage));
}

function handleDelete(event) {
  const del = event.target.parentElement;
  storage = storage.filter((e) => e.id !== parseInt(del.id));
  save();
  del.remove();
}

function showTodoList(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", handleDelete);
  li.appendChild(span);
  li.appendChild(btn);
  li.addEventListener("click", (event) => {
    event.target.classList.toggle("clicked");
  });
  todoList.appendChild(li);
}

//main
let storage = []; //todo 저장
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodo = {
    text: todoItem.value,
    id: Date.now(),
  };
  todoItem.value = "";
  storage.push(newTodo);
  showTodoList(newTodo);
  save();
});

const item = localStorage.getItem(TODOKEY);
if (item) {
  const parsedTodo = JSON.parse(item);
  storage = parsedTodo;
  parsedTodo.forEach(showTodoList);
}
