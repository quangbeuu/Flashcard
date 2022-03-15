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

    this.$team = document.createElement("div");
    this.$team.setAttribute(
      "class",
      "hover:text-[#fabe07] transition duration-100ms ease-in mt-[10px]"
    );

    this.$teamLink = document.createElement("a");
    this.$teamLink.innerText = "Ours team";

    //Support
    this.$supportContainer = document.createElement("div");
    this.$supportContainer.setAttribute(
      "class",
      "flex justify-between mt-[20px] mb-[40px]"
    );

    this.$terms = document.createElement("div");
    this.$terms.setAttribute(
      "class",
      "ml-[24px] text-[#91969d] text-[16px] hover:text-[#fabe07] transition duration-100ms ease-in"
    );

    this.$termsLink = document.createElement("a");
    this.$termsLink.innerText = "Terms of Service";

    this.$privacy = document.createElement("div");
    this.$privacy.setAttribute(
      "class",
      "ml-[24px] text-[#91969d] text-[16px] hover:text-[#fabe07] transition duration-100ms ease-in"
    );

    this.$privacyLink = document.createElement("a");
    this.$privacyLink.innerText = "Privacy Policy";

    this.$cookie = document.createElement("div");
    this.$cookie.setAttribute(
      "class",
      "ml-[24px] text-[#91969d] text-[16px] hover:text-[#fabe07] transition duration-100ms ease-in"
    );

    this.$cookieLink = document.createElement("a");
    this.$cookieLink.innerText = "Cookie Policy";
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

    // Menu
    this.$footerContainer.appendChild(this.$footerMenu);
    this.$footerMenu.appendChild(this.$intro);
    this.$intro.appendChild(this.$intro);
    this.$footerMenu.appendChild(this.$contact);
    this.$footerMenu.appendChild(this.$team);

    // Support
    this.$footerContainer.appendChild(this.$supportContainer);
    this.$supportContainer.appendChild(this.$terms);
    this.$supportContainer.appendChild(this.$privacy);
    this.$supportContainer.appendChild(this.$cookie);

    return this.$footerContainer;
  }
}

export default Footer;
