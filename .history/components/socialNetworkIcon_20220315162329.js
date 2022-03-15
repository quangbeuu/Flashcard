class SocialNetworkIcon {
  constructor(icon) {
    this.$socialContainer = document.createElement("div");
    this.$socialContainer.setAttribute(
      "class",
      "w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[1px] solid border-[white] text-white hover:text-[#fabe07] hover:border-[#fabe07] transition duration-100ms ease-in"
    );
    this.$socialLink = document.createElement("a");
    this.$socialIcon = document.createElement("i");
    this.$socialIcon.setAttribute("class", icon);
  }

  render() {
    return this.$socialContainer;
  }
}
