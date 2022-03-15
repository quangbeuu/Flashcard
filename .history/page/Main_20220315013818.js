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
    this.$posterContent.setAttribute(
      "class",
      "mt-[64px] w-full h-full relative bg-radient z-2"
    );

    this.$posterImage = document.createElement("img");
    this.$posterContent.setAttribute(
      "class",
      "h-[640px] w-[1300px] rounded-[1.5rem] object-cover block"
    );
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
