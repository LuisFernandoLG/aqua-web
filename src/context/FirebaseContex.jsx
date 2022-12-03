import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { createContext } from "react";
const firebaseContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyAM-E0Hpbv4FKAGZ3gX8y2KMi2uuW8pXGs",
  authDomain: "aquacabo-ce44a.firebaseapp.com",
  databaseURL: "https://aquacabo-ce44a-default-rtdb.firebaseio.com",
  projectId: "aquacabo-ce44a",
  storageBucket: "aquacabo-ce44a.appspot.com",
  messagingSenderId: "457505846196",
  appId: "1:457505846196:web:08e7e260f831c1ddd638e1",
  measurementId: "G-C559FCJDDC",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

const FirebaseProvider = ({ children }) => {
  // const [db, setDb] = useState(null);

  const value = { db, auth };

  return (
    <firebaseContext.Provider value={value}>
      <div>{children}</div>
    </firebaseContext.Provider>
  );
};


export { firebaseContext, FirebaseProvider };