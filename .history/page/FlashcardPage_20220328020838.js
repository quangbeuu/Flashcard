import Header from "../components/headerGroup.js";
import FlashCardItem from "../components/flashcardItem.js";
class FlashcardPage {
  constructor() {
    // Header
    this.$header = new Header();
    this.$flashcardPageContainer = document.createElement("div");
    this.$flashcardContent = document.createElement("div");
    this.$flashcardContent.setAttribute("class", "p-[64px]");
    this.$flashcardPageHeader = document.createElement("h1");
    this.$flashcardPageHeader.innerText = "Technology";
    this.$flashcardPageHeader.setAttribute(
      "class",
      "text-[30px] font-bold mt-[50px]"
    );

    // Middle
    this.$flashcardMiddleWrap = document.createElement("div");
    // Middle Left
    this.$flashcardMiddleLeft = document.createElement("div");
    this.$flashcardLeftTitle = document.createElement("h1");
    this.$flashcardLeftTitle.innerText = "Study";

    this.$flashcardStudyOption = document.createElement("div");
    this.$flashcardOptionWrap = document.createElement("div");
    this.$flashcardIcon = document.createElement("img");
    this.$flashcardIcon.src = "../assets/img/icon-flashcards.png";
    this.$flashcardLabel = document.createElement("div");
    this.$flashcardLabel.innerText = "Flashcards";

    this.$testOptionWrap = document.createElement("div");
    this.$testOptionIcon = document.createElement("img");
    this.$testOptionIcon.src = "../assets/img/icon-test.png";
    this.$testOptionLabel = document.createElement("div");
    this.$testOptionLabel.innerText = "Test";

    // Middle Right
    this.$flashcardMiddleRight = document.createElement("div");
    this.$flashcardMiddleRight.setAttribute(
      "class",
      "flex overflow-hidden slick-container"
    );
  }

  render(container) {
    this.$flashcardPageContainer.appendChild(this.$header.render(container));
    this.$flashcardPageContainer.appendChild(this.$flashcardContent);
    this.$flashcardContent.appendChild(this.$flashcardPageHeader);
    // Middle
    this.$flashcardContent.appendChild(this.$flashcardMiddleWrap);

    // Left
    this.$flashcardMiddleWrap.appendChild(this.$flashcardMiddleLeft);
    this.$flashcardMiddleLeft.appendChild(this.$flashcardLeftTitle);
    this.$flashcardMiddleLeft.appendChild(this.$flashcardStudyOption);
    this.$flashcardStudyOption.appendChild(this.$flashcardOptionWrap);
    this.$flashcardOptionWrap.appendChild(this.$flashcardIcon);
    this.$flashcardOptionWrap.appendChild(this.$flashcardLabel);
    this.$flashcardStudyOption.appendChild(this.$testOptionWrap);
    this.$testOptionWrap.appendChild(this.$testOptionIcon);
    this.$testOptionWrap.appendChild(this.$testOptionLabel);

    // Right
    this.$flashcardMiddleWrap.appendChild(this.$flashcardMiddleRight);
    for (let i = 0; i < 10; i++) {
      let flashcard = new FlashCardItem();
      this.$flashcardMiddleRight.appendChild(flashcard.render());
    }
    container.appendChild(this.$flashcardPageContainer);
  }
}
// slick slider
export default FlashcardPage;
