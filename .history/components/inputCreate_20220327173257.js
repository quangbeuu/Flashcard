class InputCreate {
  constructor(id, labelText, placeholder) {
    this.$inputDiv = document.createElement("div");
    this.$inputTag = document.createElement("input");
    this.$inputTag.setAttribute("id", id);
    this.$inputLabel = document.createElement("label");
  }
  render() {}
}
