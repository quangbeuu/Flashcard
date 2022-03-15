import InputGroup from "../components/inputGroup.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { auth } from "../constants/common.js";

class Register {
  constructor() {
    this.$registerContainer = document.createElement("form");
    this.$registerContainer.setAttribute("class", "w-[100%] flex");
    this.$registerContainer.addEventListener("submit", this.onSubmit());

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
    this.$email = new InputGroup("mail", "email", "Email", "text");

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
    this.$password.$loginContainer.classList.add("justify-between");

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
  }

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
    this.$registerRight.appendChild(this.$email.render());
    this.$registerRight.appendChild(this.$password.render());
    this.$registerRight.appendChild(this.$password.render(this.$eyeicon));
    this.$registerRight.appendChild(this.$confirmPassword.render());

    //Button
    this.$registerRight.appendChild(this.$buttonSubmit);

    //Go to Login
    this.$registerRight.appendChild(this.$goToLogin);
    this.$goToLogin.appendChild(this.$login);

    return this.$registerContainer;
  }
}

export default Register;
