import Header from "../components/headerGroup.js";

class ClassLearn {
  constructor() {
    this.$classPageContainer = document.createElement("div");
    // Header
    this.$header = new Header();

    // Content
    this.$classContentWrap = document.createElement("div");
  }

  render(container) {
    this.$classPageContainer.appendChild(this.$header.render());
    container.appendChild(this.$classPageContainer);
  }
}

export default ClassLearn;
