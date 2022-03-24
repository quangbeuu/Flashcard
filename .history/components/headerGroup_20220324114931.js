import ButtonGroup from "./buttonGroup.js";
import Login from "../page/Login.js";
import Register from "../page/Register.js";
import app from "../index.js";
import { mockData } from "../assets/mockData.js";
import ClassLearn from "../page/ClassLearn.js";
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
    this.$buttonCreate = new ButtonGroup("Create", "#8fb397", "#4b8063");
    this.$buttonCreate.$buttonCreate.classList.add("text-white");
    this.$buttonCreate.$buttonCreate.addEventListener("click", this.showModal);

    // Right
    this.$headerRight = document.createElement("div");
    this.$headerRight.setAttribute("class", "text-[#2e3856]");

    this.$buttonLogIn = new ButtonGroup("Log in", "white", "#f6f7fb");
    this.$buttonLogIn.$buttonCreate.addEventListener(
      "click",
      this.goToLoginPage
    );
    this.$buttonSignUp = new ButtonGroup("Sign up", "#ffcd1f", "#ffdc62");
    this.$buttonSignUp.$buttonCreate.addEventListener(
      "click",
      this.goToRegisterPage
    );

    // Create CLass

    this.$modalContainer = document.createElement("div");
    this.$modalContainer.setAttribute(
      "class",
      "fixed w-full h-full bg-[rgba(0,0,0,0.25)] z-50 flex justify-center items-center invisible opacity-0 transition ease-in duration-200"
    );

    this.$modalContent = document.createElement("div");
    this.$modalContent.setAttribute("class", "w-[600px] relative bg-white");

    this.$modalHeaderContainer = document.createElement("div");
    this.$modalHeaderContainer.setAttribute(
      "class",
      "bg-[#4b8063] p-8 w-full flex justify-between items-center"
    );

    this.$modalHeader = document.createElement("h1");
    this.$modalHeader.setAttribute("class", "text-[30px] font-bold text-white");
    this.$modalHeader.innerText = "Create a new class";

    this.$modalIconExit = document.createElement("ion-icon");
    this.$modalIconExit.setAttribute("name", "close-outline");
    this.$modalIconExit.setAttribute(
      "class",
      "text-[40px] cursor-pointer hover:text-[white] transition linear duration-200"
    );
    this.$modalIconExit.addEventListener("click", this.hideModal);

    this.$modalInputContainer = document.createElement("div");
    this.$modalInputContainer.setAttribute("class", "p-8");

    this.$modalClassnameContainer = document.createElement("div");
    this.$modalClassnameContainer.setAttribute("class", "mb-[20px]");

    this.$modalClassnameInput = document.createElement("input");
    this.$modalClassnameInput.type = "text";
    this.$modalClassnameInput.placeholder = "Enter a class name";
    this.$modalClassnameInput.setAttribute(
      "class",
      "outline-none border-none w-full mb-[10px] text-[18px]"
    );

    this.$modalClassnameLine = document.createElement("span");
    this.$modalClassnameLine.setAttribute(
      "class",
      "block h-[2px] bg-black w-full"
    );

    this.$modalClassnameLabel = document.createElement("span");
    this.$modalClassnameLabel.setAttribute(
      "class",
      "mt-[10px] text-[14px] font-semibold text-[#939bb4] uppercase"
    );

    this.$modalClassnameLabel.innerText = "Classname";

    this.$modalDescriptionContainer = document.createElement("div");
    this.$modalDescriptionContainer.setAttribute("class", "mb-[20px]");

    this.$modalDescriptionInput = document.createElement("input");
    this.$modalDescriptionInput.type = "text";
    this.$modalDescriptionInput.placeholder = "Enter a Description";
    this.$modalDescriptionInput.setAttribute(
      "class",
      "outline-none border-none w-full mb-[10px] text-[18px]"
    );

    this.$modalDescriptionLine = document.createElement("span");
    this.$modalDescriptionLine.setAttribute(
      "class",
      "block h-[2px] bg-black w-full"
    );

    this.$modalDescriptionLabel = document.createElement("span");
    this.$modalDescriptionLabel.setAttribute(
      "class",
      "mt-[10px] text-[14px] font-semibold text-[#939bb4] uppercase"
    );

    this.$modalDescriptionLabel.innerText = "Description";

    this.$modalCreateButton = document.createElement("a");
    this.$modalCreateButton.setAttribute(
      "class",
      "block text-center cursor-pointer p-6 bg-[#8fb397] w-full text-[18px] font-bold text-white hover:bg-[#4b8063] transition linear duration-100"
    );
    this.$modalCreateButton.innerText = "Create class";
    this.$modalCreateButton.addEventListener("click", this.goToClassLearnPage);

    // Url
    this.urlSearchParams = new URLSearchParams(window.location.search);
    this.classId = this.urlSearchParams.get("id");

    // this.getClassByid("123");
  }
  showModal = (e) => {
    e.preventDefault();
    this.$modalContainer.setAttribute(
      "class",
      "fixed w-full h-full bg-[rgba(0,0,0,0.25)] z-50 flex justify-center items-center visible opacity-100 transition ease-in duration-200"
    );
  };

  hideModal = (e) => {
    e.preventDefault();
    this.$modalContainer.setAttribute(
      "class",
      "fixed w-full h-full bg-[rgba(0,0,0,0.25)] z-50 flex justify-center items-center invisible opacity-0 transition ease-in duration-200"
    );
  };

  goToClassLearnPage = () => {
    const classLearnPage = new ClassLearn();
    this.getClassByid("123", classLearnPage.$className);
    app.setActiveScreen(classLearnPage);
  };

  goToRegisterPage = () => {
    const registerScreen = new Register();
    app.setActiveScreen(registerScreen);
  };

  goToLoginPage = () => {
    const loginScreen = new Login();
    app.setActiveScreen(loginScreen);
  };

  getClassByid = (id, className) => {
    const data = mockData;
    for (let item of mockData) {
      if (item.classId === id) {
        this.$modalCreateButton.href = `index.html?id=`;
        className.innerText = item.className;
      }
    }
  };

  render(container) {
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

    //Button
    this.$headerMenuContainer.appendChild(this.$buttonContainer);
    this.$buttonContainer.appendChild(this.$buttonCreate.render());

    // Right
    this.$headerContainer.appendChild(this.$headerRight);
    this.$headerRight.appendChild(this.$buttonLogIn.render());
    this.$headerRight.appendChild(this.$buttonSignUp.render());

    // Create Class
    this.$modalContainer.appendChild(this.$modalContent);
    this.$modalContent.appendChild(this.$modalHeaderContainer);
    this.$modalHeaderContainer.appendChild(this.$modalHeader);
    this.$modalHeaderContainer.appendChild(this.$modalIconExit);

    this.$modalContent.appendChild(this.$modalInputContainer);
    this.$modalInputContainer.appendChild(this.$modalClassnameContainer);

    this.$modalClassnameContainer.appendChild(this.$modalClassnameInput);
    this.$modalClassnameContainer.appendChild(this.$modalClassnameLine);
    this.$modalClassnameContainer.appendChild(this.$modalClassnameLabel);

    this.$modalContent.appendChild(this.$modalInputContainer);
    this.$modalInputContainer.appendChild(this.$modalDescriptionContainer);

    this.$modalDescriptionContainer.appendChild(this.$modalDescriptionInput);
    this.$modalDescriptionContainer.appendChild(this.$modalDescriptionLine);
    this.$modalDescriptionContainer.appendChild(this.$modalDescriptionLabel);
    this.$modalInputContainer.appendChild(this.$modalCreateButton);

    container.appendChild(this.$modalContainer);
    return this.$headerContainer;
  }
}

export default Header;
