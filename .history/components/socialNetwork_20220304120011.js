class SocialNetwork {
  constructor(src) {
    this.$buttonSocial = document.createElement("button");
    this.$buttonSocial.setAttribute(
      "class",
      "flex px-[15px] py-[15px] w-full justify-center box-shadow1 mb-[20px]"
    );

    this.$buttonImageSocial = document.createElement("img");
    this.$buttonImageSocial.src =
      "https://img.icons8.com/bubbles/50/000000/facebook-new.png";
    this.$buttonImageSocial.setAttribute("class", "w-[50px] h-[50px] block");

    this.$buttonImageContent = document.createElement("p");
    this.$buttonImageContent.setAttribute(
      "class",
      "text-xl text-[#6e6e6e] leading-[50px] ml-[18px]"
    );
    this.$buttonImageContent.innerText = "Login with Facebook";
  }

  render() {
    this.$buttonSocial.appendChild(this.$buttonImageSocial);
    this.$buttonSocial.appendChild(this.$buttonImageContent);

    return this.$buttonSocial;
  }
}

export default SocialNetwork;
