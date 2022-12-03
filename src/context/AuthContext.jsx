import { createContext } from "react";
import { useState } from "react";
import { useAquacabo } from "../hooks/useAquacabo";

const authContext = createContext();

const initialSession = localStorage.getItem("session")
  ? JSON.parse(localStorage.getItem("session"))
  : null;

const AuthProvider = ({ children }) => {
  const { login } = useAquacabo();
  const [session, setSession] = useState(initialSession);

  const setLogin = async (email, password) =>
    new Promise((resolve, reject) => {
      {
        login(email, password)
          .then(() => {
            const session = {
              email: email,
              password: password,
            };
            localStorage.setItem("session", JSON.stringify(session));
            setSession(session);
            resolve("ok")
          })
          .catch((err) => {
            reject(err);
          });
      }
    });

  const setLogout = () => {
    localStorage.removeItem("session");
    setSession(null);
  };

  const value = {
    session,
    setLogin,
    setLogout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export { authContext, AuthProvider };
