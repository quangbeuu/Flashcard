import Header from "../components/headerGroup.js";
class CreateSet {
  constructor() {
    this.$createSetPageContainer = document.createElement("div");
    // Header
    this.$header = new Header();

    // Content

    this.$createSetContentWrap = document.createElement("div");

    // Content Top
    this.$createSetContentTop = document.createElement("div");
    this.$createSetContentTitle = document.createElement();
  }
  render(container) {
    this.$createSetPageContainer.appendChild(this.$header.render(container));
    this.$createSetPageContainer.appendChild(this.$createSetContentWrap);
    container.appendChild(this.$createSetPageContainer);
  }
}

export default CreateSet;
