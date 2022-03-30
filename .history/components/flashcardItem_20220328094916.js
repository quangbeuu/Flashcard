class FlashCardItem {
  constructor() {
    this.$flashcardContainer = document.createElement("div");
    this.$flashcardContainer.setAttribute(
      "class",
      "shadow-flashcard maincontainer"
    );
    this.$flashcard = document.createElement("div");
    this.$flashcard.setAttribute("class", "thecard");
    this.$flashcardFront = document.createElement("div");
    this.$flashcardFront.setAttribute("class", "thefront");
    this.$flashcardFrontContent = document.createElement("div");
    this.$flashcardFrontContent.innerText = "This is Front";
    this.$flashcardFrontContent.setAttribute("class", "text-[30px]");
    this.$flashcardBack = document.createElement("div");
    this.$flashcardBack.setAttribute("class", "theback");
    this.$flashcardBackContent = document.createElement("div");
    this.$flashcardBackContent.innerText = "This is Back";
    this.$flashcardBackContent.setAttribute("class", "text-[30px]");
  }
  render() {
    this.$flashcardContainer.appendChild(this.$flashcard);
    this.$flashcard.appendChild(this.$flashcardFront);
    this.$flashcardFront.appendChild(this.$flashcardFrontContent);
    this.$flashcard.appendChild(this.$flashcardBack);
    this.$flashcardFront.appendChild(this.$flashcardFrontContent);

    return this.$flashcardContainer;
  }
}

export default FlashCardItem;
