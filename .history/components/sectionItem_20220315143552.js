class SectionItem {
  constructor(imgLink, imgAlt, header, paragraph) {
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

    this.$sectionImage.src = imgLink;
    this.$sectionImage.alt = imgAlt;

    //Content
    this.$sectionContentContainer = document.createElement("div");
    this.$sectionContentContainer.setAttribute("class", "pt-[60px]");

    this.$sectionHeader = document.createElement("h1");
    this.$sectionHeader.setAttribute(
      "class",
      "text-[32px] font-bold text-center leading-[40px]"
    );
    this.$sectionHeader.innerText = header;

    this.$sectionParagraph = document.createElement("p");
    this.$sectionParagraph.setAttribute(
      "class",
      "text-[20px] text-center font-light mt-[46px]"
    );

    this.$sectionParagraph.innerText = paragraph;
  }

  render(position) {
    if (position === "left") {
      this.$sectionContainer.appendChild(this.$sectionImageContainer);
      this.$sectionImageContainer.appendChild(this.$sectionImage);
      this.$sectionContainer.appendChild(this.$sectionContentContainer);
      this.$sectionContentContainer.appendChild(this.$sectionHeader);
      this.$sectionContentContainer.appendChild(this.$sectionParagraph);

      return this.$sectionContainer;
    } else if (position === "right") {
      this.$sectionContainer.appendChild(this.$sectionImageContainer);
      this.$sectionImageContainer.appendChild(this.$sectionImage);
      this.$sectionContainer.appendChild(this.$sectionContentContainer);
      this.$sectionContentContainer.appendChild(this.$sectionHeader);
      this.$sectionContentContainer.appendChild(this.$sectionParagraph);
    }
  }
}

export default SectionItem;
