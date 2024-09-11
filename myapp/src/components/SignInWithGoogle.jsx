// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase/Setup";

import { signInWithPopup } from "firebase/auth";
import { googleprovider } from "../firebase/Setup";

// function SignInWithGoogle() {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider).then(async (result) => {
//         const name = result.user.displayName;
//         const email = result.user.email;
//         const pic = result.user.photoURL;
//         console.log(name, email, pic);


//     });

// }

// export default SignInWithGoogle;

const Singup = () => {
    const googleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);

        }
        catch (err) {
            console.log();
        }
    }
};
export default Singup();