class FlashCardItem {
  constructor() {
    this.$flashcardContainer = document.createElement("div");
    this.$flashcard = document.createElement("div");
    this.$flashcardFront = document.createElement("div");
    this.$flashcardBack = document.createElement("div");
  }
  render() {
    this.$flashcardContainer.appendChild(this.$flashcard);
    return this.$flashcardContainer;
  }
}
