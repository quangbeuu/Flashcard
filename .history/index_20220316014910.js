import Login from "./page/Login.js";
import Register from "./page/Register.js";
import Main from "./page/Main.js";

class App {
  _activeScreen;
  constructor(view) {
    this.view = view;
    // view ta sẽ truyền vào thằng div id = app
  }

  setActiveScreen(screen) {
    if (this._activeScreen) {
      this.view.innerHTML = "";
    }
    this._activeScreen = screen;
    screen.render(this.view);
  }
}
const view = document.getElementById("app");

const app = new App(view);

const login = new Login();
const register = new Register();
const main = new Main();

// view.appendChild(register.render(view));

export default app;
