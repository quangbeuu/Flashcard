class FlashCardItem {
  constructor() {
    this.$flashcardContainer = document.createElement("div");
    this.$flashcardContainer.setAttribute(
      "class",
      "shadow-flashcard w-[492px] h-[340px]"
    );
    this.$flashcard = document.createElement("div");
    this.$flashcardFront = document.createElement("div");
    this.$flashcardFrontContent = document.createElement("div");
    this.$flashcardFrontContent.innerText = "This is Front";
    this.$flashcardFrontContent.setAttribute("class", "mx-auto");
    this.$flashcardBack = document.createElement("div");
  }
  render() {
    this.$flashcardContainer.appendChild(this.$flashcard);
    this.$flashcard.appendChild(this.$flashcardFront);
    this.$flashcardFront.appendChild(this.$flashcardFrontContent);
    this.$flashcard.appendChild(this.$flashcardBack);
    return this.$flashcardContainer;
  }
}

export default FlashCardItem;
