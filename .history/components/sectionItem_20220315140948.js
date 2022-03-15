class SectionItem {
  constructor() {
    this.sectionContainer = document.createElement("div");
    this.sectionContainer.setAttribute("class", "grid-custom mt-[100px]");

    // Image
    this.sectionImageContainer = document.createElement("div");
    this.sectionImageContainer.setAttribute("class", "text-center");

    this.sectionImage = document.createElement("img");
    this.sectionImage.setAttribute(
      "class",
      "w-[496px] h-[386px] rounded-3xl object-cover"
    );

    this.sectionImage.src = "../assets/img/nopaper.jpg";
    this.sectionImage.alt = "no paper";

    //Content
    this.sectionContentContainer = document.createElement("div");
  }

  render() {}
}

export default SectionItem;
