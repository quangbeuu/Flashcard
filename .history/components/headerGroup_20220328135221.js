import {
  doc,
  collection,
  addDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

import { signOut } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { auth, db } from "../constants/common.js";
import ButtonGroup from "./buttonGroup.js";
import Login from "../page/Login.js";
import Register from "../page/Register.js";
import app from "../index.js";

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

    this.$buttonSignOut = new ButtonGroup("Sign out", "#ffcd1f", "#ffdc62");
    this.$buttonSignOut.$buttonCreate.classList.add("hidden");
    this.$buttonSignOut.$buttonCreate.addEventListener("click", this.signOut);
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

    this.$modalCreateButton = document.createElement("button");
    this.$modalCreateButton.setAttribute(
      "class",
      "p-6 bg-[#8fb397] w-full text-[18px] font-bold text-white hover:bg-[#4b8063] transition linear duration-100"
    );
    this.$modalCreateButton.type = "submit";
    this.$modalCreateButton.innerText = "Create class";
    this.$modalCreateButton.addEventListener("click", this.goToClassLearnPage);
  }
  // onAuthenticationListener;
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

  goToClassLearnPage = async (e) => {
    e.preventDefault();
    // push data to firestore
    const className = this.$modalClassnameInput.value;
    const newClassDocument = {
      className: className,
    };

    const classRef = collection(db, "classes");
    const document = await addDoc(classRef, newClassDocument);
    console.log("Doc", document.id);
    const url = new URL(window.location);
    url.searchParams.set("roomId", document.id);
    window.history.pushState({}, "", url);

    const oneDocumentRef = await doc(db, "classes", document.id);
    onSnapshot(oneDocumentRef, (doc) => {
      const data = doc.data();
      const classLearnPage = new ClassLearn(data);
      app.setActiveScreen(classLearnPage);
    });
    // this.getClassByid(document.id);
  };

  goToRegisterPage = () => {
    const registerScreen = new Register();
    app.setActiveScreen(registerScreen);
  };

  goToLoginPage = () => {
    const loginScreen = new Login();
    app.setActiveScreen(loginScreen);
  };

  signOut = () => {
    signOut(auth)
      .then(() => {
        alert("You have been signed out");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // getClassByid = (id) => {
  //   // const classRef = collection(db, "classes");
  //   // console.log(classRef);
  //   // const q = query(classRef, where(classRef.id, "==", id));
  //   // onSnapshot(q, (snapshot) => {
  //   //   snapshot.docChanges().forEach((change) => {
  //   //     if (change.type === "added") {
  //   //       const data = change.doc.data();
  //   //       const classLearnPage = new ClassLearn(data);
  //   //       app.setActiveScreen(classLearnPage);
  //   //     }
  //   //   });
  //   // });
  // };

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
    this.$headerRight.appendChild(this.$buttonSignOut.render());

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

    this.$modalInputContainer.appendChild(this.$modalCreateButton);

    container.appendChild(this.$modalContainer);
    return this.$headerContainer;
  }
}

export default Header;
