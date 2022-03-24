import Header from "../components/headerGroup.js";

class ClassLearn {
  constructor() {
    this.$classPageContainer = document.createElement("div");
    this.$header = new Header();
  }

  render(container) {
    this.$classPageContainer.appendChild(this.$header.render);
    container.appendChild(this.$classPageContainer);
  }
}

export default ClassLearn;
