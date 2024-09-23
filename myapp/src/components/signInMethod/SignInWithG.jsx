import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/Setup";
import { useNavigate } from "react-router-dom";
// login by Google
const navigate = useNavigate();


const googleSignIn = async (result) => {

  try {
    await signInWithPopup(auth, googleProvider)
    auth?.currentUser !== null && navigate("/index")
  } catch (err) {
    console.log("error");
  }
};

export default googleSignIn;
