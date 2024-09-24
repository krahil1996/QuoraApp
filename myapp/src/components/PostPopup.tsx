import { addDoc, collection } from "firebase/firestore";
import { auth, storage } from "./firebase/Setup";
import { useState } from "react";

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
              <div className="sm:items-start sm:p-4">
                <input
                  onChange={(e) => setQuest(e.target.value)}
                  placeholder="Start your question with Why, What, How, etc."
                  className="w-full outline-none h-30"
                />
                <button
                  onClick={addQuestion}
                  className="bg-blue-500 text-white rounded-full p-2 w-40 ml-80 mt-3"
                >
                  Add question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPopup;
