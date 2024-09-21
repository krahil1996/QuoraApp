import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase/Setup";
import { useState } from "react";

type emailType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setEmailSignup: any;
};
const EmailSignup = (props: emailType) => {
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async (result: any) => {
          result.user.displayName = name;
          const Uname = result.user.displayName;
          const email = result.user.email;
          const accessToken = result.user.accessToken;
          console.log(Uname);
          console.log(email);
          console.log(accessToken);
        }
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onAuthStateChanged(auth, (user: any) => {
        sendEmailVerification(user);
      });
    } catch (err) {
      console.log(err);
    }

    alert("you have succesfully Registred");
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
                  className="focus:outline-transparent"
                  onClick={() => props?.setEmailSignup(false)}
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
                      strokeWidth="1.5"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
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
                  onChange={(e) => SetName(e.target.value)}
                  className="p-2 w-full border outline-none rounded-ssm hover:border-blue-600 transition-all ease-in-out focus:border-blue-600 "
                  type="text"
                  placeholder="What would you like to be called?"
                />
                <h1 className="text-base font-semibold my-1">Email</h1>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 w-full border outline-none rounded-ssm hover:border-blue-600 transition-all ease-in-out focus:border-blue-600 "
                  type="email"
                  placeholder="Your Email"
                />
                <h1 className="text-base font-semibold my-1">Password</h1>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 w-full border outline-none rounded-ssm hover:border-blue-600 transition-all ease-in-out focus:border-blue-600 "
                  type="text"
                  placeholder="Your Password"
                />
              </div>
              <hr />
              <div className=" flex justify-end m-4 ">
                <button
                  onClick={Signup}
                  className="   bg-blue-600 text-white w-20 h-10 rounded-full focus:outline-white "
                >
                  Submit
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
