import InputGroup from "../components/inputGroup.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { auth } from "../constants/common.js";
import MessageError from "../components/messageError.js";

class Register {
  constructor() {
    this.$registerContainer = document.createElement("form");
    this.$registerContainer.setAttribute("class", "w-[100%] flex");
    this.$registerContainer.addEventListener("submit", this.onSubmit);

    //Left
    this.$registerLeft = document.createElement("div");
    this.$registerLeft.setAttribute(
      "class",
      "w-[50%] bg-[#ffe554] pt-[55px] pb-[72px] px-[20px] h-screen"
    );

    this.$registerLeftHeader = document.createElement("div");
    this.$registerLeftHeader.setAttribute(
      "class",
      "f-calistoga ml-[72px] mb-[20px] text-[#3a3a3a]"
    );
    this.$registerLeftHeader.innerText = "Mindcard";

    this.$registerLeftSubTitle = document.createElement("div");
    this.$registerLeftSubTitle.setAttribute(
      "class",
      "text-[#3a3a3a] ml-[72px] text-2xl mb-[20px]"
    );
    this.$registerLeftSubTitle.innerText = "Let's Learning Something New Today";

    this.$registerLeftImageContainer = document.createElement("div");
    this.$registerLeftImageContainer.setAttribute("class", "mt-[40px]");

    this.$registerLeftImage = document.createElement("img");
    this.$registerLeftImage.src = "./assets/img/login.png";
    this.$registerLeftImage.setAttribute("alt", "Login-image");
    this.$registerLeftImage.setAttribute("class", "block mx-auto");

    //Right
    this.$registerRight = document.createElement("div");
    this.$registerRight.setAttribute(
      "class",
      "w-[50%] px-[120px] pt-[80px] pb-[40px] h-screen overflow-y-auto"
    );

    this.$registerRightHeader = document.createElement("div");
    this.$registerRightHeader.setAttribute(
      "class",
      "f-calistoga mb-[20px] text-[#3a3a3a]"
    );
    this.$registerRightHeader.innerText = "Sign up to Mindcard";

    this.$registerRightSubTitle = document.createElement("div");
    this.$registerRightSubTitle.setAttribute(
      "class",
      "text-xl text-[#6e6e6e] mb-[28px] flex"
    );
    this.$registerRightSubTitle.innerText =
      "Sign up and start learning. It's free";

    //inputRegister
    this.$username = new InputGroup("person", "username", "Username", "text");
    this.$username.$inputItem.addEventListener("input", this.validateUsername);
    this.$email = new InputGroup("mail", "email", "Email", "text");
    this.$email.$inputItem.addEventListener("input", this.validateEmail);

    this.$eyeicon = document.createElement("ion-icon");
    this.$eyeicon.setAttribute("name", "eye");
    this.$eyeicon.setAttribute(
      "class",
      "w-[30px] h-[52px] float-left cursor-pointer"
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

    this.$confirmPassword = new InputGroup(
      "shield-checkmark",
      "confirmpassword",
      "Confirm Password",
      "password"
    );

    // Button
    this.$buttonSubmit = document.createElement("button");
    this.$buttonSubmit.type = "submit";
    this.$buttonSubmit.setAttribute(
      "class",
      "px-[15px] py-[10px] bg-[#ff805d] color-white block w-full text-white text-lg uppercase mt-[20px] rounded-md mb-[30px]"
    );
    this.$buttonSubmit.innerText = "Sign up";

    // Go to Login
    this.$goToLogin = document.createElement("p");
    this.$goToLogin.setAttribute(
      "class",
      "text-center text-lg flex justify-center cursor-pointer"
    );
    this.$goToLogin.innerText = "Already have an account?";
    this.$goToLogin.addEventListener("click", this.goToLoginPage);

    this.$login = document.createElement("a");
    this.$login.setAttribute(
      "class",
      "underline font-medium cursor-pointer text-[#ff805d]"
    );
    this.$login.innerText = "Log in";

    // errorMessage
    this.$errorUsername = new MessageError();
    this.$errorUsername.$errorContainer.classList.add("hidden");

    this.$errorEmail = new MessageError();
    this.$errorEmail.$errorContainer.classList.add("hidden");

    this.$errorPassword = new MessageError();
    this.$errorPassword.$errorContainer.classList.add("hidden");

    this.$errorConfirmPassword = new MessageError();
    this.$errorConfirmPassword.$errorContainer.classList.add("hidden");
  }

  // Validate username
  validateUsername = () => {
    const userName = this.$username.getValue();
    const regUsername = /[0-9]/;
    if (regUsername.test(userName.trim())) {
      this.$errorUsername.$errorContainer.classList.add("hidden");
      this.$username.$inputContainer.classList.remove("border-[#ff805d]");
    } else {
      this.$errorUsername.$errorContainer.classList.remove("hidden");
      this.$username.$inputContainer.classList.add("border-[#ff805d]");
      this.$errorUsername.$errorContent.innerText =
        "Contains at least 1 number";
    }

    if (!userName) {
      this.$username.$inputContainer.classList.remove("border-[#ff805d]");
      this.$errorUsername.$errorContainer.classList.add("hidden");
    }
  };

  // Hàm validate email
  validateEmail = () => {
    const registerEmail = this.$email.getValue();
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(registerEmail.trim())) {
      this.$errorEmail.$errorContainer.classList.add("hidden");
      this.$email.$inputContainer.classList.remove("border-[#ff805d]");
    } else {
      this.$errorEmail.$errorContainer.classList.remove("hidden");
      this.$email.$inputContainer.classList.add("border-[#ff805d]");
      this.$errorEmail.$errorContent.innerText = "Invalid Email";
    }

    if (!registerEmail) {
      this.$email.$inputContainer.classList.remove("border-[#ff805d]");
      this.$errorEmail.$errorContainer.classList.add("hidden");
    }
  };

  //validatePassword
  validatePassword = () => {
    const registerPassword = this.$password.getValue();
    if (registerPassword.length <= 18 && registerPassword.length >= 8) {
      this.$errorPassword.$errorContainer.classList.add("hidden");
      this.$password.$inputContainer.classList.remove("border-[#ff805d]");
    } else {
      this.$errorPassword.$errorContainer.classList.remove("hidden");
      this.$password.$inputContainer.classList.add("border-[#ff805d]");
      this.$errorPassword.$errorContent.innerText =
        "Must be between 8 and 18 charecters long";
    }

    if (!registerPassword) {
      this.$password.$inputContainer.classList.remove("border-[#ff805d]");
      this.$errorPassword.$errorContainer.classList.add("hidden");
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

  // Hàm tạo người dùng
  onSubmit = async (e) => {
    e.preventDefault();
    try {
      const password = this.$password.getValue();
      const confirmPassword = this.$confirmPassword.getValue();
      if (password == confirmPassword) {
        this.$errorConfirmPassword.$errorContainer.classList.add("hidden");
        this.$confirmPassword.$inputContainer.classList.remove(
          "border-[#ff805d]"
        )}
        else{
          this.$errorPassword.$errorContainer.classList.remove("hidden");
      this.$password.$inputContainer.classList.add("border-[#ff805d]");
      this.$errorPassword.$errorContent.innerText =
        "Must be between 8 and 18 charecters long";
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    //Left
    this.$registerContainer.appendChild(this.$registerLeft);
    this.$registerLeft.appendChild(this.$registerLeftHeader);
    this.$registerLeft.appendChild(this.$registerLeftSubTitle);
    this.$registerLeft.appendChild(this.$registerLeftImageContainer);
    this.$registerLeftImageContainer.appendChild(this.$registerLeftImage);

    //Right
    this.$registerContainer.appendChild(this.$registerRight);
    this.$registerRight.appendChild(this.$registerRightHeader);
    this.$registerRight.appendChild(this.$registerRightSubTitle);

    //InputRegister
    this.$registerRight.appendChild(this.$username.render());
    this.$registerRight.appendChild(this.$errorUsername.render());

    this.$registerRight.appendChild(this.$email.render());
    this.$registerRight.appendChild(this.$errorEmail.render());

    this.$registerRight.appendChild(this.$password.render());
    this.$registerRight.appendChild(this.$password.render(this.$eyeicon));
    this.$registerRight.appendChild(this.$errorPassword.render());

    this.$registerRight.appendChild(this.$confirmPassword.render());
    this.$registerRight.appendChild(this.$errorConfirmPassword.render());

    //Button
    this.$registerRight.appendChild(this.$buttonSubmit);

    //Go to Login
    this.$registerRight.appendChild(this.$goToLogin);
    this.$goToLogin.appendChild(this.$login);

    return this.$registerContainer;
  }
}

export default Register;
