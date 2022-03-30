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
    this.$createSetContentTop.setAttribute(
      "class",
      "mt-10 flex justify-between"
    );
    this.$createSetContentTitle = document.createElement("h1");
    this.$createSetContentTitle.innerText = "Create a new set";
    this.$createSetContentTitle.setAttribute(
      "class",
      "text-[20px] font-bold tracking-[1px]"
    );

    this.$createSetContentButton = new ButtonGroup(
      "Create",
      "#8fb397",
      "#4b8063"
    );
    this.$createSetContentButton.$buttonCreate.classList.add("text-white");
    this.$createSetContentButton.$buttonCreate.classList.add("px-[18px]");

    // Create Input
    this.$createInputWrap = document.createElement("div");
    this.$titleInputDiv = document.createElement("div");
    this.$titleInput = document.createElement("input");
    this.$titleInput.placeholder =
      'Enter a title, like "Biology - Chapter 22 - Evolution"';
    this.$titleInput.setAttribute(
      "class",
      "outline-none border-none w-full mb-[10px] text-[18px]"
    );
    this.$titleLabel = document.createElement("label");
    this.$titleLabel.innerText = "Title";
    this.$titleLabel.setAttribute("class", "block");
    this.$descInputDiv = document.createElement("div");
    this.$descInput = document.createElement("input");
    this.$descInput.placeholder = "Add a description";
    this.$descLabel = document.createElement("label");
    this.$descLabel.innerText = "Description";
    this.$descLabel.setAttribute("class", "block");
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
    this.$createInputWrap.appendChild(this.$descInputDiv);
    this.$descInputDiv.appendChild(this.$descInput);
    this.$descInputDiv.appendChild(this.$descLabel);
    container.appendChild(this.$createSetPageContainer);
  }
}

export default CreateSet;
