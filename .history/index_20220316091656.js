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
    console.log(this._activeScreen);
    if (this._activeScreen) {
      console.log(this.view);
      this.view.innerHTML = "";
    }
    this._activeScreen = screen;
    screen.render(this.view);
    console.log(this._activeScreen);
  }
}
const view = document.getElementById("app");

const app = new App(view);
const register = new Register();
register.render(view);

export default app;
