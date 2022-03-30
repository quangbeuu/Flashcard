import Header from "../components/headerGroup.js";
class UserPage {
  constructor() {
    this.$header = new Header();
  }

  render(container) {
    container.appendChild(this.$header.render(container));
  }
}

export default UserPage;
