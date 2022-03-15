import Login from "./page/Login.js";
import Register from "./page/Register.js";

const appEL = document.getElementById("app");

// const login = new Login();
const register = new Register();

appEL.appendChild(login.render());
// appEL.appendChild(register.render());
