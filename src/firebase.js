import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTQaNDE7j4yCPlP1br1xq5-yRMFrki5J0",
  authDomain: "netflix-clone-c109f.firebaseapp.com",
  projectId: "netflix-clone-c109f",
  storageBucket: "netflix-clone-c109f.appspot.com",
  messagingSenderId: "975524218162",
  appId: "1:975524218162:web:055eebd14e26779228432b"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth}
export default db;