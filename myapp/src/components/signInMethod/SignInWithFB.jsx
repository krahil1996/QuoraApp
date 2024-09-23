// [START auth_facebook_signin_popup_modular]
import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider } from "../firebase/Setup";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();


const facebookSignin = async () => {
  try {
    await signInWithPopup(auth, facebookProvider)
    auth?.currentUser !== null && navigate("/index")
  } catch (err) {
    console.log(err);
  }
};

export default facebookSignin;
