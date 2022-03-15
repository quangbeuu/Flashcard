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

    // Poster-image
    this.$posterImage = document.createElement("img");
    this.$posterImage.setAttribute(
      "class",
      "h-[640px] w-[1300px] rounded-[1.5rem] object-cover block"
    );
    this.$posterImage.src = "../assets/img/poster.jpg";
    this.$posterImage.alt = "logo-poster";
    //Poster-title
    this.$posterTitleContainer = document.createElement("div");
    this.$posterTitleContainer.setAttribute(
      "class",
      "absolute bottom-0 z-20 flex justify-between w-full items-center"
    );
    this.$posterTitleContent = document.createElement("div");
    this.$posterTitleContent.setAttribute(
      "class",
      "text-white max-w-[30rem] m-[48px]"
    );

    this.$posterTitle = document.createElement("div");
  }

  render() {
    // Header
    this.$mainContainer.appendChild(this.$header.render());
    // Poster
    this.$mainContainer.appendChild(this.$poster);
    this.$poster.appendChild(this.$posterContent);
    this.$posterContent.appendChild(this.$posterImage);
    return this.$mainContainer;
  }
}

export default Main;
