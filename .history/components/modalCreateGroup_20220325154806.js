class ModalCreate {
  constructor() {
    this.$modalContainer = document.createElement("div");
    this.$modalContainer.setAttribute(
      "class",
      "fixed w-full h-full bg-[rgba(0,0,0,0.25)] z-50 flex justify-center items-center transition ease-in duration-200"
    );

    this.$modalContent = document.createElement("div");
    this.$modalContent.setAttribute("class", "w-[600px] relative bg-white");

    this.$modalHeaderContainer = document.createElement("div");
    this.$modalHeaderContainer.setAttribute(
      "class",
      "bg-[#4b8063] p-8 w-full flex justify-between items-center"
    );

    this.$modalHeader = document.createElement("h1");
    this.$modalHeader.setAttribute("class", "text-[30px] font-bold text-white");
    this.$modalHeader.innerText = "Add a set";

    this.$modalHeader = document.createElement("h1");
    this.$modalHeader.setAttribute("class", "text-[30px] font-bold text-white");
    this.$modalHeader.innerText = "Create a new class";

    this.$modalIconExit = document.createElement("ion-icon");
    this.$modalIconExit.setAttribute("name", "close-outline");
    this.$modalIconExit.setAttribute(
      "class",
      "text-[40px] cursor-pointer hover:text-[white] transition linear duration-200"
    );
  }

  render() {
    this.$modalContainer.appendChild(this.$modalContent);
    this.$modalContent.appendChild(this.$modalHeaderContainer);
    this.$modalHeaderContainer.appendChild(this.$modalHeader);
    this.$modalHeaderContainer.appendChild(this.$modalIconExit);
    return this.$modalContainer;
  }
}

export default ModalCreate;
