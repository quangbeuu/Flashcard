class FlashCardItem {
  constructor() {
    this.$flashcardContainer = document.createElement("div");
    this.$flashcardContainer.setAttribute(
      "class",
      "shadow-flashcard maincontainer"
    );
    this.$flashcard = document.createElement("div");
    this.$flashcard.setAttribute("class", "thecard shadow-flashcard");
    this.$flashcard.addEventListener("click", this.flipCard);
    this.$flashcardFront = document.createElement("div");
    this.$flashcardFront.setAttribute(
      "class",
      "thefront shadow-flashcard cursor-pointer"
    );
    this.$flashcardFrontContent = document.createElement("div");
    this.$flashcardFrontContent.innerText = "This is Front";
    this.$flashcardFrontContent.setAttribute(
      "class",
      "text-[30px] w-full h-full flex justify-center items-center"
    );
    this.$flashcardBack = document.createElement("div");
    this.$flashcardBack.setAttribute(
      "class",
      "theback shadow-flashcard cursor-pointer"
    );
    this.$flashcardBack.addEventListener("click", this.flipBack);
    this.$flashcardBackContent = document.createElement("div");
    this.$flashcardBackContent.innerText = "This is Back";
    this.$flashcardBackContent.setAttribute(
      "class",
      "text-[30px] w-full h-full flex justify-center items-center"
    );
  }
  flipCard = () => {
    this.$flashcard.classList.add("rotate");
  };

  flipBack = () => {
    this.$flashcardBack.classList.add("rotateback");
  };
  render() {
    this.$flashcardContainer.appendChild(this.$flashcard);
    this.$flashcard.appendChild(this.$flashcardFront);
    this.$flashcardFront.appendChild(this.$flashcardFrontContent);
    this.$flashcard.appendChild(this.$flashcardBack);
    this.$flashcardBack.appendChild(this.$flashcardBackContent);

    return this.$flashcardContainer;
  }
}

export default FlashCardItem;
