const loginForm = document.querySelector('#formContainer');
const loginBtn = document.querySelector('#formContainer button');
const logoutBtn = document.querySelector('#logout');
const nameInput = document.querySelector('#userId');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USER_NAME = 'userName';

function paintGreetings(userName) {
  greeting.innerText = `Welcome ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLogin(e) {
  e.preventDefault();

  const userName = nameInput.value;
  localStorage.setItem(USER_NAME, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  paintGreetings(userName);

  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

if (localStorage.getItem(USER_NAME)) {
  paintGreetings(localStorage.getItem(USER_NAME));
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLogin);
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem(USER_NAME);
  window.location.reload();
});
