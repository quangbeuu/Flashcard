import {
  getDoc,
  doc,
  addDoc,
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

import Header from "../components/headerGroup.js";
import ClassIcon from "../components/ClassIcon.js";
import ModalCreate from "../components/modalCreateGroup.js";
import CreateSet from "./CreateSet.js";
import InputCreate from "../components/inputCreate.js";
import app from "../index.js";
import { auth, db } from "../constants/common.js";
import { gotoCreateSetPage } from "../components/gotoCreateSetPage.js";

class ClassLearn {
  constructor(data) {
    const url = new URLSearchParams(window.location.search);
    this.roomId = url.get("roomId");
    console.log(this.roomId);
    this.$classPageContainer = document.createElement("div");
    // Header
    this.$header = new Header();

    // Content
    this.$classContentWrap = document.createElement("div");
    this.$classContentWrap.setAttribute("class", "p-[64px]");

    // Content Header
    this.$classContentHeader = document.createElement("div");
    this.$classContentHeader.setAttribute(
      "class",
      "flex justify-between items-center mt-[50px]"
    );

    this.$classIconHeaderContainer = document.createElement("div");
    this.$classIconHeaderContainer.setAttribute("class", "flex items-center");

    this.$classIconHeader = document.createElement("img");
    this.$classIconHeader.src = "./assets/img/icon_class_header.png";
    this.$classIconHeader.alt = "icon_class_header";

    this.$className = document.createElement("div");
    this.$className.setAttribute(
      "class",
      "text-[35px] font-semibold ml-[18px]"
    );

    // Class Icon
    this.$classIconWrap = document.createElement("div");
    this.$classIconWrap.setAttribute("class", "flex");
    this.$plusIcon = new ClassIcon("add-outline");
    this.$addMember = new ClassIcon("person-add-outline");
    this.$folder = new ClassIcon("folder-outline");
    this.$option = new ClassIcon("ellipsis-horizontal");

    // Class Title
    this.$classTitleContainer = document.createElement("div");
    this.$classTitleContainer.setAttribute(
      "class",
      "flex mt-[18px] border-b-[3px] mb-[4px]"
    );

    this.$sets = document.createElement("div");
    // this.$sets.setAttribute(
    //   "class",
    //   "line-green mx-[16px] text-[16px] font-semibold text-[#303545] hover:text-[#8fb397] cursor-pointer"
    // );
    this.$sets.setAttribute(
      "class",
      "active line-green mx-[16px] text-[16px] font-semibold text-[#303545] cursor-pointer hover:text-[#8fb397]"
    );
    this.$sets.addEventListener("click", this.removeMemberWrap);

    this.$sets.innerText = "Sets";

    this.$member = document.createElement("div");
    this.$member.setAttribute(
      "class",
      "line-green mx-[16px] text-[16px] font-semibold text-[#303545] hover:text-[#8fb397] cursor-pointer"
    );

    this.$member.innerText = "Members";
    this.$member.addEventListener("click", this.removeSetWrap);

    // Class study set
    this.$classStudySetContainer = document.createElement("div");
    this.$classStudySetContainer.setAttribute("class", "flex");

    this.$studySetWrap = document.createElement("div");
    this.$studySetWrap.setAttribute(
      "class",
      "flex flex-1 flex-col items-center justify-center p-20"
    );

    // Nostudyset
    this.$noStudySetHeader = document.createElement("h1");
    this.$noStudySetHeader.setAttribute("class", "text-[30px] font-bold");

    this.$noStudySetHeader.innerText = "This class doesn't have any sets yet";

    this.$noStudySetSubHeader = document.createElement("p");
    this.$noStudySetSubHeader.setAttribute("class", "mt-[8px] text-[16px]");
    this.$noStudySetSubHeader.innerText =
      "Add an existing set or create a new one to share";

    this.$noStudySetButton = document.createElement("button");
    this.$noStudySetButton.type = "submit";
    this.$noStudySetButton.setAttribute(
      "class",
      "mt-[18px] text-[16px] text-white font-medium ml-[18px] px-[18px] py-[12px] bg-[#9ecbab] rounded-[0.25rem] hover:bg-[#67a778] transition duration-100ms ease-in"
    );

    this.$noStudySetButton.innerText = "Add a study set";

    this.$noStudySetButton.addEventListener("click", this.addASet);

    // No Member
    this.$studyMemberWrap = document.createElement("div");
    this.$studyMemberWrap.setAttribute(
      "class",
      "hidden flex flex-1 flex-col items-center justify-center p-20"
    );

    this.$noMemberHeader = document.createElement("h1");
    this.$noMemberHeader.setAttribute("class", "text-[30px] font-bold");
    this.$noMemberHeader.innerText =
      "Share this join link with your classmates";

    this.$noMemberSubHeader = document.createElement("p");
    this.$noMemberSubHeader.setAttribute("class", "mt-[18px] text-[16px]");
    this.$noMemberSubHeader.innerText =
      "Anyone with this URL can sign up and automatically join your class";

    this.$linkShare = document.createElement("p");
    this.$linkShare.setAttribute("class", "mt-10");
    this.$linkShare.innerText = window.location.href;

    this.$noMemberButton = document.createElement("button");
    this.$noMemberButton.setAttribute(
      "class",
      "mt-[18px] text-[16px] text-white font-medium ml-[18px] px-[18px] py-[12px] bg-[#9ecbab] rounded-[0.25rem] hover:bg-[#67a778] transition duration-100ms ease-in"
    );
    this.$noMemberButton.type = "submit";
    this.$noMemberButton.innerText = "Add member";

    // inviteLink
    this.$inviteLinkContainer = document.createElement("div");

    this.$inviteLinkLabel = document.createElement("p");
    this.$inviteLinkLabel.setAttribute(
      "class",
      "uppercase pt-10 text-[14px] tracking-[1px] font-semibold"
    );
    this.$inviteLinkLabel.innerText = "Invitation link";
    this.$inviteLinkInputWrap = document.createElement("div");
    this.$inviteLinkInput = document.createElement("input");
    this.$inviteLinkInput.disabled;
    this.$inviteLinkInput.type = "text";
    this.$inviteLinkInput.value = window.location.href;
    this.$inviteLinkInput.setAttribute(
      "class",
      "border border-[2px] border-black rounded-md px-[12px] py-[6px]"
    );
    this.$inviteLinkButton = document.createElement("button");
    this.$inviteLinkButton.type = "submit";
    this.$inviteLinkButton.setAttribute(
      "class",
      "mt-[8px] text-[16px] text-white font-medium ml-[18px] px-[18px] py-[8px] bg-[#9ecbab] rounded-[0.25rem] hover:bg-[#67a778] transition duration-100ms ease-in"
    );
    this.$inviteLinkButton.innerText = "Copy";

    this.$inviteLinkButton.addEventListener("click", this.copyInputValue);
    // Create set
    this.$createSetModal = new ModalCreate("Add a set");
    this.$setNameInput = new InputCreate(
      "setname",
      "Set Name",
      'Enter a title, like "Biology - Chapter 22 - Evolution"'
    );
    this.$createSetButtonCreate = document.createElement("button");
    this.$createSetButtonCreate.setAttribute(
      "class",
      "mt-[12px] p-6 bg-[#8fb397] w-full text-[18px] font-bold text-white hover:bg-[#4b8063] transition linear duration-100"
    );
    this.$createSetButtonCreate.type = "submit";
    this.$createSetButtonCreate.innerText = "Create a new set";
    this.$createSetButtonCreate.addEventListener("click", this.createSetPage);
    console.log(this.$setNameInput.tagName);
    this.getDocById();
  }
  // Add a set
  addASet = () => {
    this.$createSetModal.showModal();
  };

  createSetPage = () => {
    gotoCreateSetPage(this.$setNameInput, this.roomId);
  };
  //Chuyển sang trang Createset
  // gotoCreateSetPage = async () => {
  //   const setname = this.$setNameInput.getValue();
  //   const setRef = collection(db, "setsdoc");
  //   if (setname.trim().length !== 0) {
  //     const newSet = {
  //       setName: setname,
  //       createdBy: auth.currentUser.email,
  //       createdAt: new Date().valueOf(),
  //       classId: this.roomId,
  //     };
  //     console.log(newSet);

  //     const setdata = await addDoc(setRef, newSet);
  //     const setPageUrl = new URL(window.location);

  //     setPageUrl.searchParams.delete("classId");
  //     setPageUrl.searchParams.set("setId", setdata.id);

  //     window.history.pushState({}, "", setPageUrl);

  //     const oneSetRef = await doc(db, "setsdoc", setdata.id);
  //     console.log(oneSetRef);
  //     onSnapshot(oneSetRef, (doc) => {
  //       const data = doc.data();
  //       console.log(data);
  //       const createSetPage = new CreateSet(data, setdata.id);
  //       app.setActiveScreen(createSetPage);
  //     });
  //   }

  //   console.log("setname", setname);
  // };
  // Di chuyển giữa set và member
  removeMemberWrap = () => {
    this.$studyMemberWrap.classList.add("hidden");
    this.$sets.setAttribute(
      "class",
      "active line-green mx-[16px] text-[16px] font-semibold text-[#303545] cursor-pointer"
    );
    this.$member.setAttribute(
      "class",
      "line-green mx-[16px] text-[16px] font-semibold text-[#303545] hover:text-[#8fb397] cursor-pointer"
    );
    this.$studySetWrap.classList.remove("hidden");
  };

  removeSetWrap = () => {
    this.$studyMemberWrap.classList.remove("hidden");
    this.$member.setAttribute(
      "class",
      "active line-green mx-[16px] text-[16px] font-semibold text-[#303545] cursor-pointer"
    );
    this.$sets.setAttribute(
      "class",
      "line-green mx-[16px] text-[16px] font-semibold text-[#303545] hover:text-[#8fb397] cursor-pointer"
    );
    this.$studySetWrap.classList.add("hidden");
  };

  // Đổ ra html theo id của lớp học

  getDocById = async () => {
    const classRef = doc(db, "classes", this.roomId);
    const docSnap = await getDoc(classRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      this.$className.innerText = data.className;
    } else {
      alert("Error");
    }
  };

  // Nút Copy

  copyInputValue = (e) => {
    e.preventDefault();
    let input = document.createElement("input");
    document.body.appendChild(input);
    input.value = this.$inviteLinkInput.value;
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    this.$inviteLinkButton.innerText = "Copied";
    this.$inviteLinkButton.setAttribute(
      "class",
      "mt-[8px] text-[16px] text-white font-medium ml-[18px] px-[18px] py-[8px] bg-[#595D6A] rounded-[0.25rem] hover:bg-[#505462] transition duration-100ms ease-in"
    );

    setTimeout(() => {
      this.$inviteLinkButton.innerText = "Copy";
      this.$inviteLinkButton.setAttribute(
        "class",
        "mt-[8px] text-[16px] text-white font-medium ml-[18px] px-[18px] py-[8px] bg-[#9ecbab] rounded-[0.25rem] transition duration-100ms ease-in"
      );
    }, 2000);
  };

  render(container) {
    this.$classPageContainer.appendChild(this.$header.render(container));
    this.$classPageContainer.appendChild(this.$classContentWrap);
    // Content Header
    this.$classContentWrap.appendChild(this.$classContentHeader);
    this.$classContentHeader.appendChild(this.$classIconHeaderContainer);
    this.$classIconHeaderContainer.appendChild(this.$classIconHeader);

    this.$classIconHeaderContainer.appendChild(this.$className);

    // Class Icon
    this.$classContentHeader.appendChild(this.$classIconWrap);
    this.$classIconWrap.appendChild(this.$plusIcon.render());
    this.$classIconWrap.appendChild(this.$addMember.render());
    this.$classIconWrap.appendChild(this.$folder.render());
    this.$classIconWrap.appendChild(this.$option.render());

    // Class Title
    this.$classContentWrap.appendChild(this.$classTitleContainer);
    this.$classTitleContainer.appendChild(this.$sets);
    this.$classTitleContainer.appendChild(this.$member);

    // Class Study Set
    this.$classContentWrap.appendChild(this.$classStudySetContainer);
    this.$classStudySetContainer.appendChild(this.$studySetWrap);
    this.$studySetWrap.appendChild(this.$noStudySetHeader);
    this.$studySetWrap.appendChild(this.$noStudySetSubHeader);
    this.$studySetWrap.appendChild(this.$noStudySetButton);

    // Class Member
    this.$classStudySetContainer.appendChild(this.$studyMemberWrap);
    this.$studyMemberWrap.appendChild(this.$noMemberHeader);
    this.$studyMemberWrap.appendChild(this.$noMemberSubHeader);
    this.$studyMemberWrap.appendChild(this.$linkShare);
    this.$studyMemberWrap.appendChild(this.$noMemberButton);

    this.$classStudySetContainer.appendChild(this.$inviteLinkContainer);
    this.$inviteLinkContainer.appendChild(this.$inviteLinkLabel);
    this.$inviteLinkContainer.appendChild(this.$inviteLinkInputWrap);
    this.$inviteLinkInputWrap.appendChild(this.$inviteLinkInput);
    this.$inviteLinkInputWrap.appendChild(this.$inviteLinkButton);

    // Create Set
    this.$createSetModal.$modalInfroWrap.appendChild(
      this.$setNameInput.render()
    );
    this.$createSetModal.$modalInfroWrap.appendChild(
      this.$createSetButtonCreate
    );

    container.appendChild(this.$createSetModal.render());
    container.appendChild(this.$classPageContainer);
  }
}

export default ClassLearn;

// `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`
// "967010e7-0354-451e-b1ef-1b7db4abaae8"
