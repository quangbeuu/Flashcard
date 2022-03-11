import SocialNetwork from "../components/socialNetwork.js";
import InputLogin from "../components/inputLogin.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

class Login {
  constructor() {
    this.$loginContainer = document.createElement("form");
    this.$loginContainer.setAttribute("class", "w-[100%] flex");
    this.$loginContainer.addEventListener("submit", this.onSubmit);

    // Left
    this.$loginLeft = document.createElement("div");
    this.$loginLeft.setAttribute(
      "class",
      "w-[50%] bg-[#374355] pt-[55px] pb-[72px] px-[20px]"
    );

    this.$loginLeftHeader = document.createElement("div");
    this.$loginLeftHeader.setAttribute(
      "class",
      "f-calistoga ml-[72px] mb-[20px] text-white"
    );

    this.$loginLeftHeader.innerText = "Flashcard";

    this.$loginLeftSubTitle = document.createElement("div");
    this.$loginLeftSubTitle.setAttribute(
      "class",
      "text-white ml-[72px] text-2xl mb-[20px]"
    );
    this.$loginLeftSubTitle.innerText = "Let's Learning Something New Today";

    this.$loginLeftImageContainer = document.createElement("div");
    this.$loginLeftImageContainer.setAttribute("class", "mt-[100px]");
    this.$loginLeftImage = document.createElement("img");
    this.$loginLeftImage.src = "./assets/img/login-image.png";
    this.$loginLeftImage.setAttribute("alt", "Login-image");
    this.$loginLeftImage.setAttribute("class", "block mx-auto");

    // Right
    this.$loginRight = document.createElement("div");
    this.$loginRight.setAttribute(
      "class",
      "w-[50%] px-[120px] pt-[80px] pb-[40px]"
    );

    this.$loginRightHeader = document.createElement("div");
    this.$loginRightHeader.setAttribute(
      "class",
      "f-calistoga mb-[20px] text-[#3a3a3a]"
    );
    this.$loginRightHeader.innerText = "Log in to Flashcard";

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
    this.$buttonSocialGoogle = new SocialNetwork(
      "https://img.icons8.com/clouds/100/000000/google-logo.png",
      "Login with Google"
    );

    // Line
    this.$Line = document.createElement("div");
    this.$Line.setAttribute("class", "line mt-[40px] mb-[30px]");
    this.$LineText = document.createElement("span");
    this.$LineText.setAttribute("class", "line-text");
    this.$LineText.innerText = "or";

    // inputLogin
    this.$email = new InputLogin("mail", "name", "Email", "text");
    this.$eyeicon = document.createElement("ion-icon");
    this.$eyeicon.setAttribute("name", "eye");
    this.$eyeicon.setAttribute(
      "class",
      "w-[30px] h-[52px] float-left cursor-pointer"
    );
    this.$password = new InputLogin(
      "lock-closed",
      "password",
      "Password",
      "password"
    );
    this.$password.$loginContainer.classList.add("justify-between");

    // Button
    this.$buttonSubmit = document.createElement("button");
    this.$buttonSubmit.type = "submit";
    this.$buttonSubmit.setAttribute(
      "class",
      "px-[15px] py-[10px] bg-[#ff805d] color-white block w-full text-white text-lg uppercase mt-[20px] rounded-md mb-[30px]"
    );
    this.$buttonSubmit.innerText = "Login";

    // Don't have account
    this.$question = document.createElement("p");
    this.$question.setAttribute("class", "text-center text-lg");
    this.$question.innerText = "Don't have an account? ";

    this.$register = document.createElement("a");
    this.$register.setAttribute("class", "underline font-medium");
    this.$register.innerText = "Register";
  }

  // Hàm lấy dữ liệu từ input
  onSubmit = async (e) => {
    e.preventDefault();
    const loginEmail = this.$email.getValue();
    const loginPassword = this.$password.getValue();
    // Đăng nhập với email và password
    const response = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    // console.log(response);
  };
  render() {
    // Left
    this.$loginContainer.appendChild(this.$loginLeft);
    this.$loginLeft.appendChild(this.$loginLeftHeader);
    this.$loginLeft.appendChild(this.$loginLeftSubTitle);
    this.$loginLeft.appendChild(this.$loginLeftImageContainer);
    this.$loginLeftImageContainer.appendChild(this.$loginLeftImage);

    // Right
    this.$loginContainer.appendChild(this.$loginRight);
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
    this.$loginRight.appendChild(this.$password.render(this.$eyeicon));

    // Button
    this.$loginRight.appendChild(this.$buttonSubmit);

    // Don't have account
    this.$question.appendChild(this.$register);
    this.$loginRight.appendChild(this.$question);
    return this.$loginContainer;
  }
}

export default Login;
