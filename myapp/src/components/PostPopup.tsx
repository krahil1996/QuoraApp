import { addDoc, collection } from "firebase/firestore";
import { auth, storage } from "./firebase/Setup"; // Corrected to firestore
import { useState } from "react";
import account from "../assets/Navicon/account.png";
import Right from "../assets/Navicon/right.png";
import Group from "../assets/Navicon/group.png";
import Down from "../assets/Navicon/downn.png";
import Avatar from "react-avatar";
import "../App.css";

type postType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setPost: (state: any) => any;
};

const PostPopup = (props: postType) => {
  const questionRef = collection(storage, "questions"); // Corrected to firestore
  const [quest, setQuest] = useState(""); // Captures input value
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const [activeTab, setActiveTab] = useState("addQuestion"); // State for active tab

  // Function to add the question to Firestore
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
      <div className="fixed inset-0 bg-zinc-800 bg-opacity-80 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[45%] h-[35rem]">
            <div className="flex flex-col">
              <div className="bg-white p-1 ">
                <div
                  onClick={() => props?.setPost(false)}
                  className=" flex justify-center items-center rounded-full mx-1 mt-2 w-5 h-5 p-5 hover:bg-gray-100 cursor-pointer"
                >
                  <button className="focus:outline-transparent">
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

                {/* Add Question and Create Post Tabs */}
                <div className="flex flex-row justify-evenly">
                  {/* Add Question Tab */}
                  <div
                    onClick={() => setActiveTab("addQuestion")}
                    className={`text-center cursor-pointer font-semibold text-lg p-2 w-1/2  ${
                      activeTab === "addQuestion"
                        ? "border-b-4 border-blue-600 transition-all ease-in-out rounded-b-full shadow-lg"
                        : "border-b-1 border-gray-300 hover:bg-zinc-100"
                    }`}
                  >
                    <h2>Add Question</h2>
                  </div>

                  {/* Create Post Tab */}
                  <div
                    onClick={() => setActiveTab("createPost")}
                    className={`text-center cursor-pointer font-semibold text-lg p-2 w-1/2 ${
                      activeTab === "createPost"
                        ? "border-b-4 border-blue-600 transition-all ease-in-out rounded-b-full shadow-lg"
                        : "border-b-1 border-gray-300 hover:bg-zinc-100"
                    }`}
                  >
                    <h2>Create Post</h2>
                  </div>
                </div>

                {/* Conditionally render content based on activeTab */}
                {activeTab === "addQuestion" ? (
                  <>
                    {/* Add Question Content */}
                    <div className="bg-blue-100 text-blue-600 p-3 m-4 rounded-md">
                      <p className="font-semibold text-lg">
                        Tips on getting good answers quickly
                      </p>
                      <ul className="list-inside list-disc">
                        <li>
                          Make sure your question has not been asked already
                        </li>
                        <li>Keep your question short and to the point</li>
                        <li>Double-check grammar and spelling</li>
                      </ul>
                    </div>

                    <div className="mt-3 flex flex-row gap-3 text-gray-500 items-center px-5">
                      {auth?.currentUser?.emailVerified ? (
                        <Avatar
                          src={`${auth?.currentUser?.photoURL ?? account}`}
                          round
                          size="25"
                          title={`Login as ${auth.currentUser.displayName}`}
                        />
                      ) : (
                        <Avatar round size="25" src={account} />
                      )}
                      <img
                        style={{ height: "10px", width: "10px" }}
                        src={Right}
                        alt="Arrow"
                      />
                      <div className="flex flex-row gap-2 items-center border rounded-full p-1 hover:bg-gray-200 cursor-pointer">
                        <img
                          style={{ height: "15px", width: "15px" }}
                          src={Group}
                          alt="Group"
                        />
                        <div>Public</div>
                        <img
                          style={{ height: "15px", width: "15px" }}
                          src={Down}
                          alt="Down Arrow"
                        />
                      </div>
                    </div>

                    <div className="sm:items-start sm:p-4">
                      <div>
                        <input
                          onMouseEnter={() => setIsHovered(true)} // Set hover to true on enter
                          onMouseLeave={() => setIsHovered(false)} // Set hover to false on leave
                          onChange={(e) => setQuest(e.target.value)} // Handle input change
                          placeholder="Start your question with Why, What, How, etc."
                          className={`w-full outline-none h-30 p-2 border-b-1 ${
                            isHovered ? "border-blue-500" : "border-gray-300"
                          }`}
                        />
                      </div>
                      <div className="">
                        <button
                          onClick={addQuestion}
                          className="bg-blue-500 text-white rounded-full p-2 w-40 ml-80 mt-3 cursor-pointer"
                        >
                          Add question
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Create Post Content */}
                    <div className="flex flex-col ">
                      <div className=" flex flex-row  sm:items-center sm:p-4">
                        {auth?.currentUser?.emailVerified ? (
                          <Avatar
                            src={`${auth?.currentUser?.photoURL ?? account}`}
                            round
                            size="25"
                            title={`Login as ${auth.currentUser.displayName}`}
                          />
                        ) : (
                          <Avatar round size="25" src={account} />
                        )}
                        <h2 className="text-lg font-semibold p-4">
                          {auth?.currentUser?.displayName ?? "Not Loged In"}
                        </h2>
                      </div>
                      <div>
                        <div
                          onMouseEnter={() => setIsHovered(true)} // Set hover to true on enter
                          onMouseLeave={() => setIsHovered(false)} // Set hover to false on leave
                          className={`${
                            isHovered ? "border-blue-500" : "border-gray-300"
                          }`}
                        ></div>
                      </div>
                      <div className="mt-56">
                        <button className="bg-blue-500 text-white rounded-full p-2 w-40 ml-80 mt-3 cursor-pointer">
                          Create Post
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPopup;
