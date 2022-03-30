import Header from "../components/headerGroup.js";
class UserPage {
  constructor() {
    this.$header = new Header();

    // Content
    this.$userContentContainer = document.createElement("div");
    this.$userInfoTop = document.createElement("div");
    this.$userImage = document.createElement("img");
    this.$userInfo = 
  }

  render(container) {
    container.appendChild(this.$header.render(container));
  }
}

export default UserPage;
