import {
  getDoc,
  doc,
  addDoc,
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
export const gotoCreateSetPage = async () => {
  const setname = this.$setNameInput.getValue();
  const setRef = collection(db, "setsdoc");
  if (setname.trim().length !== 0) {
    const newSet = {
      setName: setname,
      createdBy: auth.currentUser.email,
      createdAt: new Date().valueOf(),
      classId: this.roomId,
    };
    console.log(newSet);

    const setdata = await addDoc(setRef, newSet);
    const setPageUrl = new URL(window.location);

    setPageUrl.searchParams.delete("classId");
    setPageUrl.searchParams.set("setId", setdata.id);

    window.history.pushState({}, "", setPageUrl);

    const oneSetRef = await doc(db, "setsdoc", setdata.id);
    console.log(oneSetRef);
    onSnapshot(oneSetRef, (doc) => {
      const data = doc.data();
      console.log(data);
      const createSetPage = new CreateSet(data, setdata.id);
      app.setActiveScreen(createSetPage);
    });
  }

  console.log("setname", setname);
};
