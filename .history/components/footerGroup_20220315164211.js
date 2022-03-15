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
    this.$twitter = new SocialNetworkIcon("fab fa-twitter");
    this.$youtube = new SocialNetworkIcon("fab fa-youtube");
    this.$instagram = new SocialNetworkIcon("fab fa-instagram");
    // Footer Menu
    this.$footerMenu = document.createElement("div");
    this.$footerMenu.setAttribute(
      "class",
      "flex justify-center items-center flex-col text-white text-[16px] mt-[20px]"
    );

    this.$intro = document.createElement("div");
    this.$intro.setAttribute(
      "class",
      "hover:text-[#fabe07] transition duration-100ms ease-in mt-[10px]"
    );

    this.$introLink = document.createElement("a");
    this.$introLink.innerText = "Introduction";

    this.$contact = document.createElement("div");
    this.$contact.setAttribute(
      "class",
      "hover:text-[#fabe07] transition duration-100ms ease-in mt-[10px]"
    );

    this.$contactLink = document.createElement("a");
    this.$contactLink.innerText = "Contact";

    this.$contact = document.createElement("div");
    this.$contact.setAttribute(
      "class",
      "hover:text-[#fabe07] transition duration-100ms ease-in mt-[10px]"
    );

    this.$contactLink = document.createElement("a");
    this.$contactLink.innerText = "Contact";
  }

  render() {
    this.$footerContainer.appendChild(this.$footerImageContainer);
    this.$footerImageContainer.appendChild(this.$footerImageLink);
    this.$footerImageLink.appendChild(this.$footerImage);

    // Social
    this.$footerContainer.appendChild(this.$footerSocial);
    this.$footerSocial.appendChild(this.$facebook.render());
    this.$footerSocial.appendChild(this.$twitter.render());
    this.$footerSocial.appendChild(this.$youtube.render());
    this.$footerSocial.appendChild(this.$instagram.render());

    return this.$footerContainer;
  }
}

export default Footer;
