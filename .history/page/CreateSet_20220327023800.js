import Header from "../components/headerGroup.js";
import ButtonGroup from "../components/buttonGroup.js";
class CreateSet {
  constructor() {
    this.$createSetPageContainer = document.createElement("div");
    // Header
    this.$header = new Header();

    // Content

    this.$createSetContentWrap = document.createElement("div");

    // Content Top
    this.$createSetContentTop = document.createElement("div");
    this.$createSetContentTitle = document.createElement("h1");
    this.$createSetContentTitle.innerText = "Create a new set";

    this.$createSetButton = new ButtonGroup("Create", "#8fb397", "#4b8063");
  }
  render(container) {
    this.$createSetPageContainer.appendChild(this.$header.render(container));
    this.$createSetPageContainer.appendChild(this.$createSetContentWrap);
    // Content Top
    this.$createSetContentWrap.appendChild(th);
    container.appendChild(this.$createSetPageContainer);
  }
}

export default CreateSet;
