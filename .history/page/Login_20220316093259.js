import SocialNetwork from "../components/socialNetwork.js";
import InputGroup from "../components/inputGroup.js";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { auth } from "../constants/common.js";
import MessageError from "../components/messageError.js";
import Main from "./Main.js";
import app from "../index.js";

class Login {
  constructor() {
    this.$inputContainer = document.createElement("form");
    this.$inputContainer.setAttribute("class", "w-[100%] flex");
    this.$inputContainer.addEventListener("submit", this.onSubmit);

    // Left
    this.$loginLeft = document.createElement("div");
    this.$loginLeft.setAttribute(
      "class",
      "w-[50%] bg-[#4b8063] pt-[55px] pb-[72px] px-[20px] h-screen"
    );

    this.$loginLeftHeader = document.createElement("div");
    this.$loginLeftHeader.setAttribute(
      "class",
      "f-calistoga ml-[72px] mb-[20px] text-white"
    );

    this.$loginLeftHeader.innerText = "Mindcard";

    this.$loginLeftSubTitle = document.createElement("div");
    this.$loginLeftSubTitle.setAttribute(
      "class",
      "text-white ml-[72px] text-2xl mb-[20px]"
    );
    this.$loginLeftSubTitle.innerText = "Let's Learning Something New Today";

    this.$loginLeftImageContainer = document.createElement("div");
    this.$loginLeftImageContainer.setAttribute("class", "mt-[40px]");
    this.$loginLeftImage = document.createElement("img");
    this.$loginLeftImage.src = "./assets/img/login-image.png";
    this.$loginLeftImage.setAttribute("alt", "Login-image");
    this.$loginLeftImage.setAttribute(
      "class",
      "block mx-auto w-[400px] h-[400px]"
    );

    // Right
    this.$loginRight = document.createElement("div");
    this.$loginRight.setAttribute(
      "class",
      "w-[50%] px-[120px] pt-[80px] pb-[40px] h-screen overflow-y-auto"
    );

    this.$loginRightHeader = document.createElement("div");
    this.$loginRightHeader.setAttribute(
      "class",
      "f-calistoga mb-[20px] text-[#3a3a3a]"
    );
    this.$loginRightHeader.innerText = "Log in to Mindcard";

    this.$loginRightSubTitle = document.createElement("div");
    this.$loginRightSubTitle.setAttribute(
      "class",
      "text-xl text-[#6e6e6e] mb-[28px]"
    );
    this.$loginRightSubTitle.innerText =
      "Welcome back! login with your data that you entered during registration";

    // Social-network
    this.$loginRightSocialNetwork = document.createElement("div");
    this.$buttonSocialFacebook = new SocialNetwork(
      "https://img.icons8.com/bubbles/50/000000/facebook-new.png",
      "Login with Facebook"
    );

    this.$buttonSocialFacebook.$buttonSocial.addEventListener(
      "click",
      this.signInWithFacebook
    );
    this.$buttonSocialGoogle = new SocialNetwork(
      "https://img.icons8.com/clouds/100/000000/google-logo.png",
      "Login with Google"
    );

    this.$buttonSocialGoogle.$buttonSocial.addEventListener(
      "click",
      this.signInWithGoogle
    );

    // Line
    this.$Line = document.createElement("div");
    this.$Line.setAttribute("class", "line mt-[40px] mb-[30px]");
    this.$LineText = document.createElement("span");
    this.$LineText.setAttribute("class", "line-text");
    this.$LineText.innerText = "or";

    // inputLogin
    this.$email = new InputGroup("mail", "email", "Email", "text");
    this.$email.$inputItem.addEventListener("input", this.validateEmail);
    this.$eyeicon = document.createElement("ion-icon");
    this.$eyeicon.setAttribute("name", "eye");
    this.$eyeicon.setAttribute(
      "class",
      "w-[30px] h-[52px] float-left cursor-pointer transition duration-100ms ease-in"
    );
    this.$eyeicon.addEventListener("click", this.showHidePassword);

    this.$password = new InputGroup(
      "lock-closed",
      "password",
      "Password",
      "password"
    );
    this.$password.$inputContainer.classList.add("justify-between");
    this.$password.$inputItem.addEventListener("input", this.validatePassword);
    // Button
    this.$buttonSubmit = document.createElement("button");
    this.$buttonSubmit.type = "submit";
    this.$buttonSubmit.setAttribute(
      "class",
      "px-[15px] py-[10px] bg-[#ff805d] color-white block w-full text-white text-lg uppercase mt-[40px] rounded-md mb-[30px]"
    );
    this.$buttonSubmit.innerText = "Login";

    // Don't have account
    this.$question = document.createElement("p");
    this.$question.setAttribute("class", "text-center text-lg");
    this.$question.innerText = "Don't have an account?";

    this.$register = document.createElement("a");
    this.$register.setAttribute(
      "class",
      "underline font-medium cursor-pointer text-[#ff805d]"
    );
    this.$register.innerText = "Register";
    this.$register.addEventListener("click");

    // errorMessage
    this.$errorEmail = new MessageError();
    this.$errorEmail.$errorContainer.classList.add("hidden");

    this.$errorPassword = new MessageError();
    this.$errorPassword.$errorContainer.classList.add("hidden");
  }
  // Sign in with Facebook
  signInWithFacebook = async (e) => {
    e.preventDefault();
    try {
      const provider = new FacebookAuthProvider();
      provider.addScope("user_birthday");
      provider.addScope("email");
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
    } catch (error) {
      alert(error.message);
    }
  };
  // Sign in with Google
  signInWithGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };
  // Hàm ẩn hiện password
  showHidePassword = () => {
    // console.log(this.$password.$inputItem.type);
    if (this.$password.$inputItem.type === "password") {
      this.$password.$inputItem.type = "text";
      this.$eyeicon.setAttribute("name", "eye-off");
    } else {
      this.$password.$inputItem.type = "password";
      this.$eyeicon.setAttribute("name", "eye");
    }
  };

  // Hàm validate email
  validateEmail = () => {
    const loginEmail = this.$email.getValue();
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(loginEmail.trim())) {
      this.$errorEmail.$errorContainer.classList.add("hidden");
      this.$email.$inputContainer.classList.remove("border-[#ff805d]");
    } else {
      this.$errorEmail.$errorContainer.classList.remove("hidden");
      this.$email.$inputContainer.classList.add("border-[#ff805d]");
      this.$errorEmail.$errorContent.innerText = "Invalid Email";
    }

    if (!loginEmail) {
      this.$email.$inputContainer.classList.remove("border-[#ff805d]");
      this.$errorEmail.$errorContainer.classList.add("hidden");
    }
  };

  //validatePassword
  validatePassword = () => {
    const loginPassword = this.$password.getValue();
    if (loginPassword.length <= 18 && loginPassword.length >= 8) {
      this.$errorPassword.$errorContainer.classList.add("hidden");
      this.$password.$inputContainer.classList.remove("border-[#ff805d]");
    } else {
      this.$errorPassword.$errorContainer.classList.remove("hidden");
      this.$password.$inputContainer.classList.add("border-[#ff805d]");
      this.$errorPassword.$errorContent.innerText =
        "Must be between 8 and 18 charecters long";
    }

    if (!loginPassword) {
      this.$password.$inputContainer.classList.remove("border-[#ff805d]");
      this.$errorPassword.$errorContainer.classList.add("hidden");
    }
  };

  // Hàm lấy dữ liệu từ input
  onSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginEmail = this.$email.getValue();
      const loginPassword = this.$password.getValue();
      // Đăng nhập với email và password
      const response = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const user = response.user;
      if (user) {
        const mainScreen = new Main();
        app.setActiveScreen(mainScreen);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render(container) {
    // Left
    this.$inputContainer.appendChild(this.$loginLeft);
    this.$loginLeft.appendChild(this.$loginLeftHeader);
    this.$loginLeft.appendChild(this.$loginLeftSubTitle);
    this.$loginLeft.appendChild(this.$loginLeftImageContainer);
    this.$loginLeftImageContainer.appendChild(this.$loginLeftImage);

    // Right
    this.$inputContainer.appendChild(this.$loginRight);
    this.$loginRight.appendChild(this.$loginRightHeader);
    this.$loginRight.appendChild(this.$loginRightSubTitle);

    // Social Network
    this.$loginRight.appendChild(this.$loginRightSocialNetwork);
    this.$loginRightSocialNetwork.appendChild(
      this.$buttonSocialFacebook.render()
    );
    this.$loginRightSocialNetwork.appendChild(
      this.$buttonSocialGoogle.render()
    );

    // Line
    this.$loginRight.appendChild(this.$Line);
    this.$Line.appendChild(this.$LineText);

    // Input
    this.$loginRight.appendChild(this.$email.render());
    //ErrorMessage
    this.$loginRight.appendChild(this.$errorEmail.render());

    this.$loginRight.appendChild(this.$password.render(this.$eyeicon));
    //ErrorMessage
    this.$loginRight.appendChild(this.$errorPassword.render());

    // Button
    this.$loginRight.appendChild(this.$buttonSubmit);

    // Don't have account
    this.$question.appendChild(this.$register);
    this.$loginRight.appendChild(this.$question);
    // return this.$inputContainer;

    container.appendChild(this.$inputContainer);
  }
}

export default Login;
