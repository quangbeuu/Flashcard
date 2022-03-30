import Header from "../components/headerGroup.js";
import ButtonGroup from "../components/buttonGroup.js";
class CreateSet {
  constructor() {
    this.$createSetPageContainer = document.createElement("div");
    // Header
    this.$header = new Header();

    // Content

    this.$createSetContentWrap = document.createElement("div");
    this.$createSetContentWrap.setAttribute("class", "p-[64px]");

    // Content Top
    this.$createSetContentTop = document.createElement("div");
    this.$createSetContentTitle = document.createElement("h1");
    this.$createSetContentTitle.innerText = "Create a new set";

    this.$createSetContentButton = new ButtonGroup(
      "Create",
      "#8fb397",
      "#4b8063"
    );
    this.$createSetContentButton.$buttonCreate.classList.add("text-white");

    // Create Input
    this.$createInputWrap = document.createElement("div");
    this.$titleInputDiv = document.createElement("div");
    this.$titleInput = document.createElement("input");
    this.$titleInput.placeholder =
      'Enter a title, like "Biology - Chapter 22 - Evolution"';
    this.$titleLabel = document.createElement("span");
    this.$titleLabel.innerText = "Title";
    this.$descInput = document.createElement("input");
  }
  render(container) {
    this.$createSetPageContainer.appendChild(this.$header.render(container));
    this.$createSetPageContainer.appendChild(this.$createSetContentWrap);
    // Content Top
    this.$createSetContentWrap.appendChild(this.$createSetContentTop);
    this.$createSetContentTop.appendChild(this.$createSetContentTitle);
    this.$createSetContentTop.appendChild(
      this.$createSetContentButton.render()
    );
    this.$createSetContentWrap.appendChild(this.$createInputWrap);
    this.$createInputWrap.appendChild(this.$titleInputDiv);
    this.$titleInputDiv.appendChild(this.$titleInput);
    this.$titleInputDiv.appendChild(this.$titleLabel);
    this.$createInputWrap.appendChild(this.$descInput);
    container.appendChild(this.$createSetPageContainer);
  }
}

export default CreateSet;
