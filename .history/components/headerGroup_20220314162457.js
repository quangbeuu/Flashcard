import ButtonGroup from "./buttonGroup.js";
class Header {
  constructor() {
    this.$headerContainer = document.createElement("div");
    this.$headerContainer.setAttribute(
      "class",
      "max-h-[63px] flex items-center justify-between py-[15px] px-[20px] fixed bg-white z-30 w-full border border-b-[0.0625rem] solid"
    );

    //Left
    this.$headerLeft = document.createElement("div");
    this.$headerLeft.setAttribute("class", "flex items-center");

    //Logo
    this.$headerLogoContainer = document.createElement("div");
    this.$headerLogoLink = document.createElement("a");
    this.$headerLogoLink.href = "#";
    this.$headerLogoImage = document.createElement("img");
    this.$headerLogoImage.src = "../assets/img/logo.png";
    this.$headerLogoImage.alt = "logo";
    this.$headerLogoImage.setAttribute("class", "h-[48px]");

    //Menu
    this.$headerMenuContainer = document.createElement("ul");
    this.$headerMenuContainer.setAttribute(
      "class",
      "flex text-[16px] font-medium text-[#2e3856] items-center"
    );
    this.$home = document.createElement("li");
    this.$home.setAttribute("class", "ml-[16px]");
    this.$homeLink = document.createElement("a");
    this.$homeLink.href = "#";
    this.$homeLink.innerText = "Home";

    this.$mindmap = document.createElement("li");
    this.$mindmap.setAttribute("class", "ml-[16px]");
    this.$mindmapLink = document.createElement("a");
    this.$mindmapLink.href = "#";
    this.$mindmapLink.innerText = "Mindmap";

    this.$about = document.createElement("li");
    this.$about.setAttribute("class", "ml-[16px]");
    this.$aboutLink = document.createElement("a");
    this.$aboutLink.href = "#";
    this.$aboutLink.innerText = "About";

    // Button
    this.$buttonContainer = document.createElement("li");
    // this.$buttonCreate =
  }

  render() {
    this.$headerContainer.appendChild(this.$headerLeft);

    // Left
    this.$headerLeft.appendChild(this.$headerLogoContainer);

    // Logo
    this.$headerLogoContainer.appendChild(this.$headerLogoLink);
    this.$headerLogoLink.appendChild(this.$headerLogoImage);

    // Menu
    this.$headerLeft.appendChild(this.$headerMenuContainer);
    this.$headerMenuContainer.appendChild(this.$home);
    this.$home.appendChild(this.$homeLink);
    this.$headerMenuContainer.appendChild(this.$mindmap);
    this.$mindmap.appendChild(this.$mindmapLink);
    this.$headerMenuContainer.appendChild(this.$about);
    this.$about.appendChild(this.$aboutLink);
    return this.$headerContainer;
  }
}

export default Header;
