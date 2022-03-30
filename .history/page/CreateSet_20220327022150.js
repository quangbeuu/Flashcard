import Header from "../components/headerGroup.js";
class CreateSet {
  constructor() {
    this.$createSetPageContainer = document.createElement("div");
  }
  render(container) {
    container.appendChild(this.$createSetPageContainer);
  }
}

export default CreateSet;
