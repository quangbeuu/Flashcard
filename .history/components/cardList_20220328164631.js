import {
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import CardItem from "./cardItem.js";
import { cards } from "../constants/testCard.js";
class CardList {
  constructor() {
    this.$cardList = document.createElement("div");
    this.renderCard();
  }

  renderCard() {
    const cardRef = collection(db, "cards");
    onSnapshot(cardRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const cardDoc = change.doc.data();
          const card = new CardItem(cardDoc);
          this.$cardList.appendChild(card.render());
        }
      });
    });
  }

  render() {
    // cards.forEach((data) => {
    //   const card = new CardItem(data);
    //   this.$cardList.appendChild(card.render());
    // });

    return this.$cardList;
  }
}

export default CardList;
