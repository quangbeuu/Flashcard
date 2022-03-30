import Header from "../components/headerGroup.js";
class UserPage {
  constructor() {
    this.$header = new Header();

    // Content
    this.$userContentContainer = document.createElement("div");
    this.$userInfoWrap = document.createElement("div");
    this.$userImage = document.createElement("img");
  }

  render(container) {
    container.appendChild(this.$header.render(container));
  }
}

export default UserPage;
