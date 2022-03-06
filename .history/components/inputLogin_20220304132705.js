class InputLogin {
  constructor() {
    this.$loginContainer = document.createElement("div");
    this.$loginContainer.setAttribute(
      "class",
      "flex px-[20px] py-[14px] bg-[#f3f3f3] rounded-lg align-center mb-[20px]"
    );

    this.$flexDiv = document.createElement("div");
    this.$flexDiv.setAttribute("class", "flex");

    this.$loginIcon = document.createElement("ion-icon");
    this.$loginIcon.setAttribute("name", "mail");
    this.$loginIcon.setAttribute("class", "w-[30px] h-[52px]");
  }

  render() {}
}

export default InputLogin;