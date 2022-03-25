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
    this.onAuthenticationListener();
  }

  onAuthenticationListener() {
    onAuthStateChanged(auth, (user) => {
      const mainScreen = new Main();
      if (user) {
        console.log("Có");
        mainScreen.$header.$buttonLogIn.$buttonCreate.setAttribute(
          "class",
          "text-[100px] font-medium ml-[18px] px-[12px] py-[6px] bg-[${bgcolor}] rounded-[0.25rem] hover:bg-[${hovercolor}] transition duration-100ms ease-in"
        );
      } else {
        mainScreen.$header.$buttonLogIn.$buttonCreate.classList.remove(
          "hidden"
        );
      }
    });
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
const classLearn = new ClassLearn(view);
app.setActiveScreen(classLearn);

export default app;
