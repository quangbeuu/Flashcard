import Login from "./page/Login.js";
import Register from "./page/Register.js";
import Main from "./page/Main.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { auth } from "./constants/common.js";
import ClassLearn from "./page/ClassLearn.js";
class App {
  _activeScreen;
  constructor(view) {
    this.view = view;
    // view ta sẽ truyền vào thằng div id = app
  }

  onAuthenticationListener() {
    onAuthStateChanged(auth, (user) => {});
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

const main = new Main();
const login = new Login();
const classLearn = app.setActiveScreen(login);

export default app;
