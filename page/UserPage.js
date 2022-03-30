import Header from "../components/headerGroup.js";
class UserPage {
  constructor() {
    this.$header = new Header();

    // Content
    this.$userContentContainer = document.createElement("div");
    this.$userInfoTop = document.createElement("div");
    this.$userImage = document.createElement("img");
    this.$userInfoWrap = document.createElement("div");
    this.$userName = document.createElement("h1");
    this.$userEmail = document.createElement("h2");
  }

  render(container) {
    container.appendChild(this.$header.render(container));
  }
}

export default UserPage;
