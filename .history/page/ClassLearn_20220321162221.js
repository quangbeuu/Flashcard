import Header from "../components/headerGroup.js";

class ClassLearn {
  constructor() {
    this.$header = new Header();
  }

  render(container) {
    container.appendChild(this.$header.render());
  }
}

export default ClassLearn;
