import Header from "../components/headerGroup.js";
import ButtonGroup from "../components/buttonGroup.js";
import ModalCreate from "../components/modalCreateGroup.js";
import CardList from "../components/cardList.js";
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
    this.$titleInputDiv = document.createElement("div");
    this.$titleInputDiv.setAttribute("class", "mt-10");
    this.$titleInput = document.createElement("input");
    this.$titleInput.placeholder =
      'Enter a title, like "Biology - Chapter 22 - Evolution"';
    this.$titleInput.setAttribute(
      "class",
      "outline-none border-none w-full mb-[10px] text-[17px]"
    );
    this.$titleLine = document.createElement("span");
    this.$titleLine.setAttribute("class", "block h-[2px] bg-black w-full");
    this.$titleLabel = document.createElement("label");
    this.$titleLabel.innerText = "Title";
    this.$titleLabel.setAttribute(
      "class",
      "block text-[14px] font-semibold uppercase mt-[8px] tracking-[1px]"
    );
    this.$descInputDiv = document.createElement("div");
    this.$descInputDiv.setAttribute("class", "mt-[18px]");
    this.$descInput = document.createElement("input");
    this.$descInput.placeholder = "Add a description";
    this.$descInput.setAttribute(
      "class",
      "outline-none border-none w-full mb-[10px] text-[17px]"
    );
    this.$descLine = document.createElement("span");
    this.$descLine.setAttribute("class", "block h-[2px] bg-black w-full");
    this.$descLabel = document.createElement("label");
    this.$descLabel.innerText = "Description";
    this.$descLabel.setAttribute(
      "class",
      "block text-[14px] font-semibold uppercase mt-[8px] tracking-[1px]"
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

    // WordList
    this.$wordListWrap = document.createElement("div");
    this.$wordListWrap.setAttribute("class", "mt-20");
    this.$wordListHeader = document.createElement("h1");
    this.$wordListHeader.setAttribute("class", "text-[20px] font-bold");
    this.$wordListHeader.innerText = `Terms in this set ${}` ;
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
    this.$createInputWrap.appendChild(this.$titleInputDiv);
    this.$titleInputDiv.appendChild(this.$titleInput);
    this.$titleInputDiv.appendChild(this.$titleLine);
    this.$titleInputDiv.appendChild(this.$titleLabel);
    this.$createInputWrap.appendChild(this.$descInputDiv);
    this.$descInputDiv.appendChild(this.$descInput);
    this.$descInputDiv.appendChild(this.$descLine);
    this.$descInputDiv.appendChild(this.$descLabel);
    this.$createInputWrap.appendChild(this.$createCardButton.render());
    //Word List
    this.$createSetContentWrap.appendChild(this.$wordListWrap);
    this.$wordListWrap.appendChild(this.$wordListHeader);
    this.$wordListWrap.appendChild(this.$wordListSubHeader);

    //cardList
    this.$wordListWrap.appendChild(this.$cardList.render());
    container.appendChild(this.$modalCreateCard.render());
    container.appendChild(this.$createSetPageContainer);
  }
}

export default CreateSet;
