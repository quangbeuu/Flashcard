import Header from "../components/headerGroup.js";
import ButtonGroup from "../components/buttonGroup.js";
import ModalCreate from "../components/modalCreateGroup.js";
import CardList from "../components/cardList.js";
import InputCreate from "../components/inputCreate.js";
class CreateSet {
  constructor() {
    this.$createSetPageContainer = document.createElement("div");
    // Header
    this.$header = new Header();

    // Content

    this.$createSetContentWrap = document.createElement("div");
    this.$createSetContentWrap.setAttribute("class", "p-[64px]");

    // Content Top
    this.$createSetContentTop = document.createElement("div");
    this.$createSetContentTop.setAttribute(
      "class",
      "mt-10 flex justify-between"
    );
    this.$createSetContentTitle = document.createElement("h1");
    this.$createSetContentTitle.innerText = "Create a new set";
    this.$createSetContentTitle.setAttribute(
      "class",
      "text-[20px] font-bold tracking-[1px]"
    );

    this.$createSetContentButton = new ButtonGroup(
      "Create",
      "#8fb397",
      "#4b8063"
    );
    this.$createSetContentButton.$buttonCreate.classList.add("text-white");
    this.$createSetContentButton.$buttonCreate.classList.add("px-[18px]");

    // Create Input
    this.$createInputWrap = document.createElement("div");
    this.$createInputWrap.setAttribute("class", "max-w-[600px]");

    this.$titleInput = new InputCreate(
      "title",
      "Title",
      'Enter a title, like "Biology - Chapter 22 - Evolution"'
    );
    this.$descInput = new InputCreate(
      "desc",
      "Description",
      "Add a description"
    );

    // Create card button
    this.$createCardButton = new ButtonGroup(
      "Create a new card",
      "#8fb397",
      "#4b8063"
    );
    this.$createCardButton.$buttonCreate.classList.remove("ml-[18px]");
    this.$createCardButton.$buttonCreate.classList.add("mt-[18px]");
    this.$createCardButton.$buttonCreate.classList.add("text-white");
    this.$createCardButton.$buttonCreate.addEventListener(
      "click",
      this.showModal
    );
    // ModalCreate

    this.$modalCreateCard = new ModalCreate("Create a new card");
    this.$defEnInput = new InputCreate("term", "Term", "Enter term");
    this.$defVnInput = new InputCreate(
      "definition",
      "Definition",
      "Enter definition"
    );
    this.$inputFile = document.createElement("input");
    this.$inputFile.type = "file";
    this.$inputFile.setAttribute(
      "class",
      "file:bg-[blue] file:border-none file:outline-none"
    );

    // WordList
    this.$wordListWrap = document.createElement("div");
    this.$wordListWrap.setAttribute("class", "mt-20");
    this.$wordListHeader = document.createElement("h1");
    this.$wordListHeader.setAttribute("class", "text-[20px] font-bold");
    this.$wordListHeader.innerText = `Terms in this set (12)`;
    this.$wordListSubHeader = document.createElement("h2");
    this.$wordListSubHeader.setAttribute("class", "text-[16px] font-normal");
    this.$wordListSubHeader.innerText =
      "You've begun learning these terms. Keep up the good work";

    // cardList
    this.$cardList = new CardList();
  }
  showModal = () => {
    this.$modalCreateCard.showModal();
  };
  render(container) {
    this.$createSetPageContainer.appendChild(this.$header.render(container));
    this.$createSetPageContainer.appendChild(this.$createSetContentWrap);
    // Content Top
    this.$createSetContentWrap.appendChild(this.$createSetContentTop);
    this.$createSetContentTop.appendChild(this.$createSetContentTitle);
    this.$createSetContentTop.appendChild(
      this.$createSetContentButton.render()
    );
    // Create Input
    this.$createSetContentWrap.appendChild(this.$createInputWrap);
    this.$createInputWrap.appendChild(this.$titleInput.render());

    this.$createInputWrap.appendChild(this.$descInput.render());

    this.$createInputWrap.appendChild(this.$createCardButton.render());
    //Word List
    this.$createSetContentWrap.appendChild(this.$wordListWrap);
    this.$wordListWrap.appendChild(this.$wordListHeader);
    this.$wordListWrap.appendChild(this.$wordListSubHeader);

    //cardList
    this.$wordListWrap.appendChild(this.$cardList.render());

    // ModalCreate
    this.$modalCreateCard.$modalInfroWrap.appendChild(
      this.$defEnInput.render()
    );
    this.$modalCreateCard.$modalInfroWrap.appendChild(
      this.$defVnInput.render()
    );
    this.$modalCreateCard.$modalInfroWrap.appendChild(this.$inputFile);

    container.appendChild(this.$modalCreateCard.render());
    container.appendChild(this.$createSetPageContainer);
  }
}

export default CreateSet;
