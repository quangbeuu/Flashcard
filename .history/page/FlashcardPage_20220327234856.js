class FlashcardPage {
  constructor() {
    this.$flashcardPageContainer = document.createElement("div");
  }

  render(container) {
    container.appendChild(this.$flashcardPageContainer);
  }
}
