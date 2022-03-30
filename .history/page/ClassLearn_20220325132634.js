import {
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import Header from "../components/headerGroup.js";
import ClassIcon from "../components/ClassIcon.js";
import { db } from "../constants/common.js";
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
    this.$sets.setAttribute(
      "class",
      "tab-item active line-green mx-[16px] text-[16px] font-semibold text-[#303545] hover:text-[#8fb397] cursor-pointer"
    );

    this.$sets.innerText = "Sets";
    this.$sets.setAttribute("data-id", "1");

    this.$member = document.createElement("div");
    this.$member.setAttribute(
      "class",
      "tab-item line-green mx-[16px] text-[16px] font-semibold text-[#303545] hover:text-[#8fb397] cursor-pointer"
    );

    this.$member.innerText = "Members";
    this.$member.setAttribute("data-id", "2");

    // Class study set
    this.$classStudySetContainer = document.createElement("div");
    this.$classStudySetContainer.setAttribute("class", "flex");

    this.$studySetWrap = document.createElement("div");
    this.$studySetWrap.setAttribute(
      "class",
      "hidden flex flex-1 flex-col items-center justify-center p-20"
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

    // No Member
    this.$studyMemberWrap = document.createElement("div");
    this.$studyMemberWrap.setAttribute(
      "class",
      "flex flex-1 flex-col items-center justify-center p-20"
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

    this.getDocById();
  }

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
    container.appendChild(this.$classPageContainer);
  }
}

export default ClassLearn;

// `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`
// "967010e7-0354-451e-b1ef-1b7db4abaae8"
