class SocialNetwork {
  constructor() {
    this.$buttonSocial = document.createElement("button");
    this.$buttonSocial.setAttribute(
      "class",
      "flex px-[15px] py-[15px] w-full justify-center box-shadow1 mb-[20px]"
    );

    this.$buttonImageSocial = document.createElement("img");
    this.$buttonImageSocial.src =
      "https://img.icons8.com/bubbles/50/000000/facebook-new.png";
    this.$buttonImageSocial.setAttribute("class", "w-[50px] h-[50px] block");
  }
}
