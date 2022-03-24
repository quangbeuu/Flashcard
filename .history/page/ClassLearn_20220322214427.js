import Header from "../components/headerGroup.js";
import ClassIcon from "../components/ClassIcon.js";
class ClassLearn {
  constructor() {
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
    this.$className.innerText = "Class name";

    // Class Icon
    this.$classIconWrap = document.createElement("div");
    this.$classIconWrap.setAttribute("class", "flex");
    this.$plusIcon = new ClassIcon("add-outline");
    this.$addMember = new ClassIcon("person-add-outline");
    this.$folder = new ClassIcon("folder-outline");
    this.$option = new ClassIcon("ellipsis-horizontal");

    // Class Content
    this.$classContentContainer = document.createElement("div");
  }

  render(container) {
    this.$classPageContainer.appendChild(this.$header.render());
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
    container.appendChild(this.$classPageContainer);
  }
}

export default ClassLearn;
