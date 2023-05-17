import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcICqH3C9s_mw5-VkpMgTMxBpkwjLoOV0",
  authDomain: "signal-clone-55259.firebaseapp.com",
  projectId: "signal-clone-55259",
  storageBucket: "signal-clone-55259.appspot.com",
  messagingSenderId: "776866583222",
  appId: "1:776866583222:web:5c14e6c78084347da1cc17",
};

let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
