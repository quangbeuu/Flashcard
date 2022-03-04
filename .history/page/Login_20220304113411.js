class Login {
  constructor() {
    this.$loginContainer = document.createElement("div");
    this.$loginContainer.setAttribute("class", "w-[100%] flex");

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
  }
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
    return this.$loginContainer;
  }
}

export default Login;
