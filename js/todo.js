const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoForm input');
const todoList = document.querySelector('#todoList');
const getTodo = localStorage.getItem('todos');

let todos = [];

const todoHandle = {
  createTodo(newTodo) {
    console.log(newTodo);
    const todoContainer = document.createElement('li');
    const todo = document.createElement('span');
    const delBtn = document.createElement('button');

    todoContainer.id = newTodo.id;

    todo.innerText = newTodo.text;

    delBtn.classList.add('delelteBtn');
    delBtn.innerText = 'delete';

    todoContainer.appendChild(todo);
    todoContainer.appendChild(delBtn);
    todoList.appendChild(todoContainer);

    delBtn.addEventListener('click', todoHandle.deleteTodo);
  },

  deleteTodo(e) {
    const delTarget = e.target.parentElement;
    delTarget.remove();

    todos = todos.filter((item) => item.id !== parseInt(delTarget.id));
    localStorage.setItem('todos', JSON.stringify(todos));
  },
};

function submitHandle(e) {
  e.preventDefault();

  const newTodo = {
    text: todoInput.value,
    id: new Date().getTime(),
  };

  todos.push(newTodo);

  todoInput.value = '';

  todoHandle.createTodo(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

todoForm.addEventListener('submit', submitHandle);

if (getTodo) {
  JSON.parse(getTodo).forEach(todoHandle.createTodo);
  todos = JSON.parse(getTodo);
} else {
  console.log('a');
}
