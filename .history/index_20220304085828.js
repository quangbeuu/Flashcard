import Login from "./page/Login";

const appEL = document.getElementById("app");

const login = new Login();

appEL.appendChild(login.render());
