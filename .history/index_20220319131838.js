import Login from "./page/Login.js";
import Register from "./page/Register.js";
import Main from "./page/Main.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { auth } from "./constants/common.js";
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
app.setActiveScreen(main);

export default app;