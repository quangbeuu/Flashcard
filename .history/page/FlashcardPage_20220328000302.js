import Header from "../components/headerGroup.js";
class FlashcardPage {
  constructor() {
    // Header
    this.$header = new Header();
    this.$flashcardPageContainer = document.createElement("div");
    this.$flashcardContent = document.createElement("div");
    this.$flashcardPageHeader = document.createElement("h1");
    this.$flashcardPageHeader.innerText = "Technology";
    this.$flashcardPageHeader.setAttribute("class", "text-[30px] font-bold");
  }

  render(container) {
    this.$flashcardPageContainer.appendChild(this.$header.render(container));
    this.$flashcardPageContainer.appendChild(this.$flashcardPageHeader);
    container.appendChild(this.$flashcardPageContainer);
  }
}

export default FlashcardPage;
