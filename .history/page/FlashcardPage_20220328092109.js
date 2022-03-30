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
    this.$flashcardMiddleWrap.setAttribute(
      "class",
      "flex gap-[40px] items-start mt-[40px]"
    );
    // Middle Left
    this.$flashcardMiddleLeft = document.createElement("div");
    this.$flashcardMiddleLeft.setAttribute("class", "max-w-[30%]");
    this.$flashcardLeftTitle = document.createElement("h1");
    this.$flashcardLeftTitle.innerText = "Study";
    this.$flashcardLeftTitle.setAttribute(
      "class",
      "text-[14px] font-semibold text-[#939bb4] uppercase"
    );

    this.$flashcardStudyOption = document.createElement("div");
    this.$flashcardStudyOption.setAttribute("class", "mt-[10px]");
    this.$flashcardOptionWrap = document.createElement("div");
    this.$flashcardOptionWrap.setAttribute(
      "class",
      "flex items-center cursor-pointer"
    );
    this.$flashcardIcon = document.createElement("img");
    this.$flashcardIcon.src = "../assets/img/icon-flashcards.png";
    this.$flashcardIcon.setAttribute("class", "w-[40px] h-[40px]");
    this.$flashcardLabel = document.createElement("div");
    this.$flashcardLabel.innerText = "Flashcards";
    this.$flashcardLabel.setAttribute(
      "class",
      "text-[16px] font-semibold ml-[10px]"
    );

    this.$testOptionWrap = document.createElement("div");
    this.$testOptionWrap.setAttribute(
      "class",
      "flex items-center cursor-pointer mt-[18px]"
    );
    this.$testOptionIcon = document.createElement("img");
    this.$testOptionIcon.src = "../assets/img/icon-test.png";
    this.$testOptionIcon.setAttribute("class", "w-[40px] h-[40px]");
    this.$testOptionLabel = document.createElement("div");
    this.$testOptionLabel.innerText = "Test";
    this.$testOptionLabel.setAttribute(
      "class",
      "text-[16px] font-semibold ml-[10px]"
    );

    // Middle Right
    this.$flashcardMiddleRight = document.createElement("div");
    this.$flashcardMiddleRight.setAttribute("class", "flex  max-w-[70%]");
    this.$flashcardWrap = document.createElement("div");
    this.$flashcardWrap.setAttribute("class", "flex slick-container");
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
    this.$flashcardMiddleRight.appendChild(this.$flashcardWrap);
    for (let i = 0; i < 10; i++) {
      let flashcard = new FlashCardItem();
      this.$flashcardMiddleRight.appendChild(flashcard.render());
    }
    container.appendChild(this.$flashcardPageContainer);
  }
}
// slick slider

$(document).ready(function () {
  $(".slick-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
export default FlashcardPage;
