import {
  onSnapshot,
  collection,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { db } from "../constants/common.js";
import CardItem from "./cardItem.js";
class CardList {
  constructor() {
    const searchSetUrl = new URLSearchParams(window.location.search);
    this._setId = searchSetUrl.get("setId");
    console.log(this._setId);
    this.$cardList = document.createElement("div");
    this.renderCard();
  }

  renderCard() {
    const cardRef = collection(db, "cards");
    const q = query(cardRef, where("setId", "==", this._setId));
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const cardId = change.doc.id;
          const cardDoc = change.doc.data();
          console.log("Card Doc", cardDoc);
          const card = new CardItem(cardDoc);
          this.$cardList.id = cardId;
          this.$cardList.appendChild(card.render());
        }

        if(change.type === "")
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
