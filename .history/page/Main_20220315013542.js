import Header from "../components/headerGroup.js";

class Main {
  constructor() {
    this.$mainContainer = document.createElement("div");
    // Header
    this.$header = new Header();
    // Poster
    this.$poster = document.createElement("div");
    this.$poster.setAttribute("class", "w-full bg-[#4b8063] p-[64px]");

    this.$posterContent = document.createElement("div");
  }

  render() {
    // Header
    this.$mainContainer.appendChild(this.$header.render());
    // Poster
    this.$mainContainer.appendChild(this.$poster);
    return this.$mainContainer;
  }
}

export default Main;
