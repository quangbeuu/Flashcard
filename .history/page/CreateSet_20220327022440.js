import Header from "../components/headerGroup.js";
class CreateSet {
  constructor() {
    this.$createSetPageContainer = document.createElement("div");
    // Header
    this.$header = new Header();
  }
  render(container) {
    this.$createSetPageContainer.appendChild(this.$header);
    container.appendChild(this.$createSetPageContainer);
  }
}

export default CreateSet;
