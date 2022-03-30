class FlashCardItem {
  constructor() {
    this.$flashcardContainer = document.createElement("div");
    this.$flashcardContainer.setAttribute("class", "shadow-flashcard");
    this.$flashcard = document.createElement("div");
    this.$flashcardFront = document.createElement("div");
    this.$flashcardBack = document.createElement("div");
  }
  render() {
    this.$flashcardContainer.appendChild(this.$flashcard);
    this.$flashcard.appendChild(this.$flashcardFront);
    this.$flashcard.appendChild(this.$flashcardBack);
    return this.$flashcardContainer;
  }
}

export default FlashCardItem;
