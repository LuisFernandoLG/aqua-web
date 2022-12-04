import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { get, onValue, ref } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { firebaseContext } from "../context/FirebaseContex";

export const useAquacabo = () => {
  const {db, auth} = useContext(firebaseContext);
  const [trucks, setTrucks] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [clients, setClients] = useState([]);
  
  const getDrivers = () => {  
    const path = `/users`;
    get(ref(db, path))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val());
          console.log({data})
          const d = data.filter(({ type }) => type === "DRIVER");
          const c = data.filter(({ type }) => type === "CLIENT");
          setDrivers(d);
          setClients(c);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        reject(error);
      });
  };

  

  useEffect(() => 
  {
    console.log("useEffect");
    getDrivers();
    const trucksRef = ref(db, "truckLocations");
    onValue(trucksRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Mostrando camiones");
        const array = Object.values(data);
        setTrucks(array);
      } else {
        setTrucks([]);
      }
    });
  }, []);


    useEffect(() => {
      getDrivers();
      const trucksRef = ref(db, "truckLocations");
      onValue(trucksRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Mostrando camiones");
          const array = Object.values(data);
          setTrucks(array);
        } else {
          setTrucks([]);
        }
      });
    }, []);

    const login = async (email, password) =>
    new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const path = `/users/${user.uid}`;
          get(ref(db, path))
            .then((snapshot) => {
              console.log({ snapshot:snapshot.val() });
              if (snapshot.exists()) {
                const authUser = snapshot.val();
                if(authUser.type === "ADMIN"){
                resolve(authUser);
                }else{
                  reject("no-driver");
                }
              } else {
                reject("no-users");
              }
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              reject(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          reject(errorCode);
        });
    });

    const resetPassword = ({ email }) =>
    new Promise((resolve, reject) => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(error.code);
        });
    });



  return { trucks, drivers, clients, login, resetPassword };  
}
