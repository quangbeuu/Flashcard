class SectionItem {
  constructor() {
    this.sectionContainer = document.createElement("div");
    this.sectionContainer.setAttribute("class", "grid-custom mt-[100px]");

    // Image
    this.sectionImageContainer = document.createElement("div");
    this.sectionImageContainer.setAttribute("class", "text-center");

    this.sectionImage = document.createElement("img");
  }

  render() {}
}

export default SectionItem;
