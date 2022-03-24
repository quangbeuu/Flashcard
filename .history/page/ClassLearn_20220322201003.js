import Header from "../components/headerGroup.js";

class ClassLearn {
  constructor() {
    this.$classPageContainer = document.createElement("div");
    this.$header = new Header();
  }

  render(container) {
    return this.$classPageContainer;
  }
}

export default ClassLearn;
