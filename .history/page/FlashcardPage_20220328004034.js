import Header from "../components/headerGroup.js";
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
    this.$flashcardIcon.src =
      "https://img.icons8.com/external-line-colors-royyan-wijaya/64/000000/external-card-ecommerce-bram-bram-boom-line-colors-royyan-wijaya-7.png";

    // Middle Right
    this.$flashcardMiddleRight = document.createElement("div");
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
    this.$flashcardStudyOption.appendChild(this.$flashcardStudyOption);
    container.appendChild(this.$flashcardPageContainer);
  }
}

export default FlashcardPage;
