import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { set, ref, push, get, onValue, remove } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const center = { lat: 22.944967420710498, lng: -109.94538756232878 };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// Initialize Firebase

function App() {
  const [trucks, setTrucks] = useState([]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCpwwNySUSJoOdaj3le3Xxw4agVol3342k",
  });

  useEffect(() => {
    console.log("useEffect");
    const trucksRef = ref(db, "truckLocations");
    onValue(trucksRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        console.log("Mostrando camiones");
        const array = Object.values(data);
        setTrucks(array);
      } else {
        setTrucks([]);
      }
    });
  }, []);

  return (
    <div className="App">
      {isLoaded ? (
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={center} />
          {trucks.map((truck) => {
            return (
              <Marker key={truck}
                position={{ lat: truck.latitude, lng: truck.longitude }}
              />
            );
          })}
        </GoogleMap>
      ) : (
        "Cargando"
      )}
    </div>
  );
}

export default App;
