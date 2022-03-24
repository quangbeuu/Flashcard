import Header from "../components/headerGroup.js";

class ClassLearn {
  constructor() {
    this.$classPageContainer = document.createElement("div");
    this.$header = new Header();
  }

  render() {
    return this.$classPageContainer;
  }
}

export default ClassLearn;
