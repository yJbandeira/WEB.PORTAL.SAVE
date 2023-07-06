import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { FoodIcon } from "../assets/icons";
import { db } from "../firebase";

async function selectCards() {
  const querySnapshot = await getDocs(collection(db, "videos"));

  let jsonMenu = querySnapshot.docs.map((doc) => doc.data());

  jsonMenu.forEach((m) => {
    m.category.icon = <FoodIcon />;
  });

  console.log(jsonMenu);

  return jsonMenu;
}

async function addCards(item) {
  await addDoc(collection(db, "videos"), item);
}

export { selectCards, addCards };
