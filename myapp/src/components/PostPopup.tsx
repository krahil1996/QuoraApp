import { addDoc, collection } from "firebase/firestore";
import { auth, storage } from "./firebase/Setup";
import { useState } from "react";
import Account from "../assets/Navicon/account.png"
import Right from "../assets/Navicon/right.png"
import Group from "../assets/Navicon/group.png"
import Down from "../assets/Navicon/downn.png"
type postType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setPost: any;
};

const PostPopup = (props: postType) => {
  const questionRef = collection(storage, "questions");
  const [quest, setQuest] = useState("");

  const addQuestion = () => {
    addDoc(questionRef, {
      question: quest,
      email: auth?.currentUser?.email,
    });
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-zinc-950 bg-opacity-80 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white  ">
              <div className=" flex justify-center items-center rounded-full mx-1 mt-2 w-5 h-5 p-5  hover:bg-gray-100">
                <button
                  className="focus:outline-transparent"
                  onClick={() => props?.setPost(false)}
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
              <div className="text-center font-semibold text-lg">
                <h2 className="cursor-pointer">Add Question</h2>
              </div>
              <hr className="bg-blue-600 rounded-lg h-1" />
              <div className="bg-blue-100 text-blue-600 mt-2 m-2 w-full">
                <p className="font-semibold text-lg">Tips on getting good answers quickly</p>
                <ul>
                  <li>Make sure your question has not been asked already</li>
                  <li>Keep your question short and to the point</li>
                  <li>Double-check grammar and spelling</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-row gap-3 text-gray-500 items-center">
                <img style={{height:"20px", width:"20px"}} src={Account} alt="Account" />
                <img style={{height:"10px", width:"10px"}} src={Right} alt="Arrow" />
                <div className="flex flex-row gap-2 items-center border rounded-full p-1 hover:bg-gray-200 cursor-pointer">
                  <img style={{height:"15px", width:"15px"}}  src={Group} alt="Group" />
                  <div>Public</div>
                  <img style={{height:"15px", width:"15px"}}  src={Down} alt="Down Arrow" />
                </div>
              </div>
              <div className="sm:items-start sm:p-4">
                <input
                  onChange={(e) => setQuest(e.target.value)}
                  placeholder="Start your question with Why, What, How, etc."
                  className="w-full outline-none h-30"
                />
                <div className="mt-56">
                <button
                  onClick={addQuestion}
                  className="bg-blue-500 text-white rounded-full p-2 w-40 ml-80 mt-3 cursor-pointer"
                >
                  Add question
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPopup;
