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
import { H2Icon } from "@heroicons/react/16/solid";

// Signup page
const Signup = () => {
  const [emailSignup, setEmailSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // login by Google
  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        auth?.currentUser !== null && navigate("/index");
      }, 2000);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      auth?.currentUser !== null && toast.success("LoggedIn succesfully");
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = err;
      toast.error(error);
    }
  };

  // login by facebook
  const facebookSignin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        auth?.currentUser !== null && navigate("/index");
      }, 2000);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      auth?.currentUser !== null && toast("LoggedIn succesfully");
    } catch (err) {
      console.error(err);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = err;
      toast.error(error);
    }
  };

  // login by user id password
  const login = async () => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data);
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        data?.user?.emailVerified !== null && navigate("/index");
      }, 2000);
      console.log(data);

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      data?.user?.emailVerified && toast.success("LoggedIn succesfully");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.error(err);

      toast.error(`Please enter Valid Email`);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage: `url(${welcome})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="bg-white h-11/12 w-cus rounded-ssm px-8 py-4 shadow-md shadow-gray-700 ">
          <h1 className="text-red-700 text-6xl font-clarendon text-center pt-4 ">
            Quora
          </h1>

          <h1 className="text-center font-bold text-gray-600 mt-3 ">
            A place to share knowledge and better understand the world
          </h1>
          <div className=" flex flex-row wrap mt-10">
            <div className="pr-6 border-r-1 w-2/4">
              <h1 className="text-zinc-400 text-sm w-auto">
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
              <div className=" flex flex-col gap-2 mt-4">
                <div
                  onClick={googleSignIn}
                  className="flex p-1 border border-spacing-1 rounded-ssm items-center cursor-pointer hover:bg-gray-100 ease-in transition-all "
                >
                  <img className="w-6 h-6 m-2 " src={google} />
                  <h1>Continue with Google</h1>
                </div>
                <div
                  onClick={facebookSignin}
                  className="flex p-1 border border-spacing-1 rounded-ssm items-center cursor-pointer hover:bg-gray-100 ease-in transition-all"
                >
                  <img className="w-6 h-6 m-2" src={facebook} />
                  <h1>Continue with Facebook</h1>
                </div>
                <div
                  onClick={() => setEmailSignup(true)}
                  className=" p-1 rounded-3xl items-center text-center text-ssm text-gray-500 font-semibold cursor-pointer hover:bg-gray-100"
                >
                  <h1>Sign up with Email</h1>
                </div>
              </div>
            </div>

            <div className="pl-6 w-2/4">
              <form action="">
                <div className="border-b-1 pb-1 font-semibold text-gray-800">
                  Login
                </div>
                <div className=" font-bold py-4 w-2/4 text-sm ">Email</div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 w-full border outline-none rounded-ssm hover:border-blue-600 transition-all ease-in-out focus:border-blue-600 "
                  placeholder="Your email"
                  type="email"
                />
                <div className=" font-bold py-4 w-2/4 text-sm ">Password</div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 mb-3 w-full border outline-none rounded-ssm hover:border-blue-600 transition-all ease-in-out focus:border-blue-600 "
                  placeholder="Your password"
                  autoComplete="true"
                  type="password"
                />
                <div className="flex flex-row justify-between items-center ">
                  <div className="py-4 w-2/4 text-zinc-400 text-sm hover:underline cursor-pointer  ">
                    Forgot password?
                  </div>
                  <button
                    onClick={login}
                    className=" w-20 h-10 bg-blue-600 text-white font-semibold items-center rounded-full "
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="inline-flex items-center justify-center my-4 py-4 borer-y-1 w-full text-center text-cyan-700 text-sm ">
            <span className="hover:underline cursor-pointer">हिन्‍दी</span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9 5 7 7-7 7.005"
                stroke="#666"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <div className="flex items-center justify-evenly text-gray-600 text-sm ">
            <a className="hover:underline" href="#">
              About
            </a>
            <span>{"•"}</span>
            <a className="hover:underline" href="#">
              Careers
            </a>
            <span>{"•"}</span>
            <a className="hover:underline" href="#">
              Privacy
            </a>
            <span>{"•"}</span>
            <a className="hover:underline" href="#">
              Terms
            </a>
            <span>{"•"}</span>
            <a className="hover:underline" href="#">
              Contact
            </a>
            <span>{"•"}</span>
            <a className="hover:underline" href="#">
              Languages
            </a>
            <span>{"•"}</span>
            <a className="hover:underline" href="#">
              Your Ad Choices
            </a>
            <span>{"•"}</span>
            <a className="hover:underline" href="#">
              Press
            </a>
            <span>{"•"}</span> © Quora, Inc. 2024
          </div>
        </div>
        {emailSignup ? <EmailSignup setEmailSignup={setEmailSignup} /> : ""}
      </div>
    </>
  );
};

export default Signup;
