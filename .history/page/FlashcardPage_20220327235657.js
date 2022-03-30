class FlashcardPage {
  constructor() {
    this.$flashcardPageContainer = document.createElement("div");
    this.$flashcardPageHeader = document.createElement("h1");
  }

  render(container) {
    this.$flashcardPageContainer.appendChild(this.$flashcardPageHeader);
    container.appendChild(this.$flashcardPageContainer);
  }
}

export default FlashcardPage;
