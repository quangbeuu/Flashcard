import SocialNetworkIcon from "./socialNetworkIcon.js";
class Footer {
  constructor() {
    this.$footerContainer = document.createElement("footer");
    this.$footerContainer.setAttribute(
      "class",
      "bg-[#4b8063] flex justify-center items-center flex-col"
    );

    this.$footerImageContainer = document.createElement("div");
    this.$footerImageContainer.setAttribute("class", "mt-[50px]");

    this.$footerImageLink = document.createElement("a");
    this.$footerImageLink.href = "#";

    // Image
    this.$footerImage = document.createElement("img");
    this.$footerImage.src = "../assets/img/logo.png";
    this.$footerImage.alt = "logo";
    this.$footerImage.setAttribute(
      "class",
      "h-[48px] bg-white rounded-full p-[5px]"
    );

    // Social
    this.$footerSocial = document.createElement("div");
    this.$footerSocial.setAttribute("class", "flex mt-[40px] gap-[15px]");
    this.$facebook = new SocialNetworkIcon("fab fa-facebook-f");
    this.$facebook = new SocialNetworkIcon("fab fa-twitter");
    this.$facebook = new SocialNetworkIcon("fab fa-facebook-f");
  }

  render() {
    this.$footerContainer.appendChild(this.$footerImageContainer);
    this.$footerImageContainer.appendChild(this.$footerImageLink);
    this.$footerImageLink.appendChild(this.$footerImage);

    return this.$footerContainer;
  }
}
