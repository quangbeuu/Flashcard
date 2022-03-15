class SectionItem {
  constructor() {
    this.$sectionContainer = document.createElement("div");
    this.$sectionContainer.setAttribute("class", "grid-custom mt-[100px]");

    // Image
    this.$sectionImageContainer = document.createElement("div");
    this.$sectionImageContainer.setAttribute("class", "text-center");

    this.$sectionImage = document.createElement("img");
    this.$sectionImage.setAttribute(
      "class",
      "w-[496px] h-[386px] rounded-3xl object-cover"
    );

    this.$sectionImage.src = "../assets/img/nopaper.jpg";
    this.$sectionImage.alt = "no paper";

    //Content
    this.$sectionContentContainer = document.createElement("div");
    this.$sectionContentContainer.setAttribute("class", "pt-[60px]");

    this.$sectionHeader = document.createElement("h1");
    this.$sectionHeader.setAttribute(
      "class",
      "text-[32px] font-bold text-center leading-[40px]"
    );
    this.$sectionHeader.innerText = "Goodbye paper";

    this.$sectionParagraph = document.createElement("p");
    this.$sectionParagraph.setAttribute(
      "class",
      "text-[20px] text-center font-light mt-[46px]"
    );

    this.$sectionParagraph.innerText = "";
  }

  render() {}
}

export default SectionItem;
