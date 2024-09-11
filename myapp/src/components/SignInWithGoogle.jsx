import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

function SignInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const pic = result.user.photoURL;
        console.log(name, email, pic);
    });
}

export default SignInWithGoogle;