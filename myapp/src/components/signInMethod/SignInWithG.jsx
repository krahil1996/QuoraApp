import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/Setup";
// login by Google
const googleSignIn = async (result) => {
  try {
    await signInWithPopup(auth, googleProvider)
    auth?.currentUser !== null && navigate("/main")
      .then(async (result) => {

        const Uname = result.user.displayName;
        const email = result.user.email;
        const pic = result.user.photoURL;
        const accessToken = result.user.accessToken;
        console.log(Uname);
        console.log(email);
        console.log(pic);
        console.log(accessToken);
      });
  } catch (err) {
    console.log("error");
  }
};

export default googleSignIn;
