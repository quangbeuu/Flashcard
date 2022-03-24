import Header from "../components/headerGroup.js";

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

    this.$classIconHeader = document.createElement("");
  }

  render(container) {
    this.$classPageContainer.appendChild(this.$header.render());
    this.$classPageContainer.appendChild(this.$classContentWrap);
    // Content Header
    this.$classContentWrap.appendChild();
    container.appendChild(this.$classPageContainer);
  }
}

export default ClassLearn;
