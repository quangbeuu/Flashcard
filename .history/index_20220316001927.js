import Login from "./page/Login.js";
import Register from "./page/Register.js";
import Main from "./page/Main.js";

class App {
  _activeScreen;
  constructor(view) {}
}
const view = document.getElementById("app");

// const login = new Login();
// const register = new Register();
const main = new Main();

// appEL.appendChild(login.render());
// appEL.appendChild(register.render());

appEL.appendChild(main.render());
