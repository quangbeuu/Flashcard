import Login from "./page/Login.js";

const appEL = document.getElementById("app");

const login = new Login();

appEL.appendChild(login.render());
