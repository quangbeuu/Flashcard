import Header from "../components/headerGroup.js";

class Main {
  constructor() {
    this.mainContainer = document.createElement("div");
    this.header = new Header();
  }

  render() {
    this.mainContainer.appendChild(this.header.render());
    return this.mainContainer;
  }
}

export default Main;
