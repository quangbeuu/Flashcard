class FlashcardPage {
  constructor() {
    this.$flashcardPageContainer = document.createElement("div");
    this.$flashcardPageHeader = document.createElement("h1");
  }

  render(container) {
    container.appendChild(this.$flashcardPageContainer);
  }
}

export default FlashcardPage;
