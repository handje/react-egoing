const USERNAME = "user";
const login = document.getElementById("login");
const form = login.querySelector("form");
const InputName = document.getElementById("userName");

function showUserName(name) {
  login.querySelector("h2").innerHTML = `${name}😉`;
}

const localUser = localStorage.getItem(USERNAME);
if (localUser === null) {
  login.classList.remove("hidden");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = InputName.value;
    form.classList.add("hidden");
    localStorage.setItem(USERNAME, name);
    showUserName(name);
  });
} else {
  form.classList.add("hidden");
  showUserName(localUser);
}
