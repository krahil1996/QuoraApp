/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import welcome from "../assets/back.jpg";
import google from "../assets/google.png";
import facebook from "../assets/fb.png";
import EmailSignup from "./EmailSignup";
import { useState } from "react";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./firebase/Setup";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Signup page
const Signup = () => {
  const [emailSignup, setEmailSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Google sign-in
  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setTimeout(() => {
        auth?.currentUser !== null && navigate("/index");
      }, 2000);
      auth?.currentUser !== null && toast.success("LoggedIn succesfully");
    } catch (err) {
      const error: any = err;
      toast.error(error);
    }
  };

  // Facebook sign-in
  const facebookSignin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      setTimeout(() => {
        auth?.currentUser !== null && navigate("/index");
      }, 2000);
      auth?.currentUser !== null && toast("LoggedIn succesfully");
    } catch (err) {
      console.error(err);
      const error: any = err;
      toast.error(error);
    }
  };

  // Email/Password login
  const login = async () => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      setTimeout(() => {
        data?.user?.emailVerified !== null && navigate("/index");
      }, 2000);
      data?.user?.emailVerified && toast.success("LoggedIn succesfully");
    } catch (err) {
      console.error(err);
      toast.error("Please enter valid email");
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div
        className="flex items-center justify-center sm:min-h-screen"
        style={{
          backgroundImage: `url(${welcome})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-white sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 rounded-ssm px-8 py-4 shadow-md shadow-gray-700">
          <h1 className="text-red-700 sm:text-6xl text-5xl font-clarendon text-center pt-4">
            Quora
          </h1>
          <h1 className="text-center font-bold text-gray-600 mt-3">
            A place to share knowledge and better understand the world
          </h1>
          <div className="flex flex-col lg:flex-row mt-10">
            <div className="lg:pr-6 lg:border-r lg:border-gray-200 lg:w-2/4">
              <h1 className="text-zinc-400 text-sm">
                By continuing you indicate that you agree to Quora’s{" "}
                <span className="text-cyan-700 hover:underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-cyan-700 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                .
              </h1>
              <div className="flex flex-col gap-2 mt-4">
                <div
                  onClick={googleSignIn}
                  className="flex p-2 border rounded-md items-center cursor-pointer hover:bg-gray-100 transition-all"
                >
                  <img className="w-6 h-6 m-2" src={google} alt="Google logo" />
                  <h1>Continue with Google</h1>
                </div>
                <div
                  onClick={facebookSignin}
                  className="flex p-2 border rounded-md items-center cursor-pointer hover:bg-gray-100 transition-all"
                >
                  <img
                    className="w-6 h-6 m-2"
                    src={facebook}
                    alt="Facebook logo"
                  />
                  <h1>Continue with Facebook</h1>
                </div>
                <div
                  onClick={() => setEmailSignup(true)}
                  className="p-2 text-center text-sm text-gray-500 font-semibold cursor-pointer hover:bg-gray-100"
                >
                  <h1>Sign up with Email</h1>
                </div>
              </div>
            </div>

            <div className="lg:pl-6 lg:w-2/4 mt-6 lg:mt-0">
              <form>
                <div className="border-b pb-1 font-semibold text-gray-800">
                  Login
                </div>
                <div className="font-bold py-4 text-sm">Email</div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 w-full border outline-none rounded-md hover:border-blue-600 focus:border-blue-600 transition-all"
                  placeholder="Your email"
                  type="email"
                />
                <div className="font-bold py-4 text-sm">Password</div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 w-full border outline-none rounded-md hover:border-blue-600 focus:border-blue-600 transition-all"
                  placeholder="Your password"
                  type="password"
                />
                <div className="flex flex-row justify-between items-center py-4">
                  <div className="text-sm text-zinc-400 cursor-pointer hover:underline">
                    Forgot password?
                  </div>
                  <button
                    onClick={login}
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center mt-6 text-sm text-cyan-700 cursor-pointer hover:underline">
            <span>हिन्‍दी</span>
          </div>
          <div className="flex justify-center gap-3 text-gray-600 text-xs mt-4">
            <a href="#" className="hover:underline">
              About
            </a>
            <span>•</span>
            <a href="#" className="hover:underline">
              Careers
            </a>
            <span>•</span>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <span>•</span>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <span>•</span>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
        {emailSignup && <EmailSignup setEmailSignup={setEmailSignup} />}
      </div>
    </>
  );
};

export default Signup;
