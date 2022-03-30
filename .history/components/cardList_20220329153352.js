import {
  onSnapshot,
  collection,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { db } from "../constants/common.js";
import CardItem from "./cardItem.js";
import { cards } from "../constants/testCard.js";
class CardList {
  constructor() {
    const searchSetUrl = new URLSearchParams(window.location.search);
    this._setDd = searchSetUrl.get("setId");
    console.log(searchSetUrl);
    this.$cardList = document.createElement("div");
    this.renderCard();
  }

  renderCard() {
    const cardRef = collection(db, "cards");
    const q = query(cardRef, where("setId"));
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
