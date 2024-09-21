// [START auth_facebook_signin_popup_modular]
import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider } from "../firebase/Setup";

const facebookSignin = async () => {
  try {
    await signInWithPopup(auth, facebookProvider)
    auth?.currentUser !== null && navigate("/main").then((result) => {
      const accessToken = result.user.accessToken;
      const Uname = result.user.displayName;
      const email = result.user.email;
      const pic = result.user.photoURL;
      console.log(accessToken);
      console.log(Uname);
      console.log(email);
      console.log(pic);
    });
  } catch (err) {
    console.log(err);
  }
};

export default facebookSignin;
