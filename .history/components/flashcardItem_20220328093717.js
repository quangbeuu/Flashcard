class FlashCardItem {
  constructor() {
    this.$flashcardContainer = document.createElement("div");
    this.$flashcardContainer.setAttribute(
      "class",
      "shadow-flashcard maincontainer h-[340px] flex items-center justify-center relative"
    );
    this.$flashcard = document.createElement("div");
    this.$flashcard.setAttribute("class", "thecard");
    this.$flashcardFront = document.createElement("div");
    this.$flashcardFrontContent = document.createElement("div");
    this.$flashcardFrontContent.innerText = "This is Front";
    this.$flashcardFrontContent.setAttribute("class", "");
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
