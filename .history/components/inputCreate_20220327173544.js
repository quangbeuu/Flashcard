class InputCreate {
  constructor(id, labelText, placeholder) {
    this.$inputDiv = document.createElement("div");
    this.$inputTag = document.createElement("input");
    this.$inputTag.type = "text"l
    this.$inputTag.setAttribute("id", id);
    this.$inputLabel = document.createElement("label");
    this.$inputLabel.setAttribute("for", id);
  }
  render() {}
}
