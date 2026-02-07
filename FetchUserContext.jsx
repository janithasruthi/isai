import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./ContextApi";
import { __DB } from "../Backend/Firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const FetchProfileContext = createContext(null);

const FetchUserContext = ({ children }) => {
  let { AuthUser } = useContext(AuthContext);
  let { uid } = AuthUser || {};
  let [profile, setProfile] = useState("");
  let [role, setRole] = useState("");

  useEffect(() => {
    console.log(uid)
    if (!uid) {
      
      return;
    }
    let userCollection = doc(__DB, "user_Details", uid);
     console.log(userCollection)
     onSnapshot(userCollection,(userData)=>{
      if (userData.exists()) {
        setProfile(userData?.data());
        console.log(userData)
        setRole(userData?.data().role);
      } else {
        setProfile(null);
        setRole("");
        console.log("userdata not found")
      }
    })

  }, [uid])
   console.log(profile);
  return (
    <FetchProfileContext.Provider value={{ role, profile }}>
      {children}
    </FetchProfileContext.Provider>
  );

}
export default FetchUserContext;

