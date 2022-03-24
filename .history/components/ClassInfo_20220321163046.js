class ClassInfo {
  constructor() {
    this.$classContainer = document.createElement("div");

    this.$classHeader = document.createElement("div");
    this.$classHeaderIcon = `<svg aria-label="class" class="UIIcon UIIcon--class" role="img"><noscript></noscript><use xlink:href="#class"></use><noscript></noscript></svg>`;
  }

  render() {
    this.$classContainer.appendChild(this.$classHeader);
    // Header
    this.$classHeader.appendChild(this.$classHeaderIcon);
  }
}

export default ClassInfo;
