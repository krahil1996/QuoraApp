import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/setup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type emailType = {
  setEmailSignup: any;
};
const EmailSignup = (props: emailType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Please verify the mail Id");
      onAuthStateChanged(auth, (user: any) => {
        sendEmailVerification(user);
      });
    } catch (err) {
      console.error(err);
    }
  };

  console.log(auth);
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
              <div className=" flex justify-center items-center rounded-full mx-1 mt-2 w-5 h-5 p-5  hover:bg-gray-100">
                <button
                  onClick={() => props?.setEmailSignup(false)}
                  className=""
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m5.5 5.5 13 13m-13 0 13-13"
                      className="icon_svg-stroke"
                      stroke="#666"
                      stroke-width="1.5"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="bg-white px-4 pb-4 pt-2 mb-16 sm:pb-4">
                <h1 className="text-lg font-bold mb-3 text-gray-900 ">
                  Sign up
                </h1>
                <h1 className="text-base font-semibold my-1">Name</h1>
                <input
                  className="p-2 w-full border outline-none rounded-ssm hover:border-blue-600 transition-all ease-in-out focus:border-blue-600 "
                  type="text"
                  placeholder="What would you like to be called?"
                />
                <h1 className="text-base font-semibold my-1">Email</h1>
                <input
                  className="p-2 w-full border outline-none rounded-ssm hover:border-blue-600 transition-all ease-in-out focus:border-blue-600 "
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <hr />
              <div className=" flex justify-end m-4 ">
                <button className="   bg-blue-600 text-white w-20 h-10 rounded-full ">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmailSignup;
