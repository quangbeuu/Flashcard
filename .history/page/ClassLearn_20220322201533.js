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
  }

  render(container) {
    this.$classPageContainer.appendChild(this.$header.render());
    this.$classPageContainer.appendChild(this.$classContentWrap);
    container.appendChild(this.$classPageContainer);
  }
}

export default ClassLearn;
