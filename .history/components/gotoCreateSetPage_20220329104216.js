import {
  doc,
  addDoc,
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { auth, db } from "../constants/common.js";
import app from "../index.js";
import CreateSet from "../page/CreateSet.js";

const idSet = location.search.split("=")[2];
export const gotoCreateSetPage = async (setNameInput, roomId) => {
  let setdata;
  setdata = idSet;
  if (typeof setNameInput === "object") {
    const setname = setNameInput.getValue();

    const setRef = collection(db, "setsdoc");
    if (setname.trim().length !== 0) {
      const newSet = {
        setName: setname,
        createdBy: auth.currentUser.email,
        createdAt: new Date().valueOf(),

        classId: roomId,
      };
      console.log(newSet);

      setdata = await addDoc(setRef, newSet);
      const setPageUrl = new URL(window.location);

      setPageUrl.searchParams.delete("classId");
      setPageUrl.searchParams.set("setId", setdata.id);
      window.history.pushState({}, "", setPageUrl);

      setdata = setdata.id;
    }
  }
  console.log(setdata);
  const oneSetRef = await doc(db, "setsdoc", setdata);
  console.log(oneSetRef);
  onSnapshot(oneSetRef, (doc) => {
    const data = doc.data();
    console.log(data);
    const createSetPage = new CreateSet(data, setdata);
    app.setActiveScreen(createSetPage);
  });
};

if (idSet == undefined) {
  console.log("co undefined");
} else {
  gotoCreateSetPage("nam", idSet);
  console.log("Ko undefined ", idSet);
}
