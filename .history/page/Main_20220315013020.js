import Header from "../components/headerGroup.js";

class Main {
  constructor() {
    this.$mainContainer = document.createElement("div");
    // Header
    this.$header = new Header();
    // Poster
    this;
  }

  render() {
    this.$mainContainer.appendChild(this.$header.render());
    return this.$mainContainer;
  }
}

export default Main;
