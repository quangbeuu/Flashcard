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
  }

  render() {
    this.$loginContainer.appendChild(this.$loginLeft);
    return this.$loginContainer;
  }
}

export default Login;
