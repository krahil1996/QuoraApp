import "../App.css"; // Optional: if you have a CSS file for styling

import Answer from "../assets/Navicon/edit.png";
import Question from "../assets/Navicon/ask.png";
import Post from "../assets/Navicon/pencil.png";
import Like from "../assets/Navicon/up.png";
import Comment from "../assets/Navicon/comment.png";
import Share from "../assets/Navicon/share.png";
import Down from "../assets/Navicon/down.png";
import account from "../assets/Navicon/account.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Vedio from "../assets/vedio.mp4";
import Avatar from "react-avatar";

import { auth } from "./firebase/Setup";

const Middle = () => {
  // const questionRef = collection(storage, "questions");
  // const [questionData, setQuestionData] = useState<any>([]);
  // const [commentToggle, setCommentToggle] = useState(false);
  // const [questionId, setQuestionId] = useState("");
  // const [answers, setAnswers] = useState("");
  // const [post, setPost] = useState(false);

  // const getQuestion = async () => {
  //   try {
  //     const data = await getDocs(questionRef);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setQuestionData(filteredData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // const answerDoc = doc(
  //   storage,
  //   "questions",
  //   `${questionId ? questionId : Math.random()}`
  // );
  // const answerRef = collection(answerDoc, "answers");

  // const addAnswer = async () => {
  //   try {
  //     await addDoc(answerRef, {
  //       ans: answers,
  //       email: auth?.currentUser?.email,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getQuestion();
  // }, [questionData]);
  return (
    <div className="w-auto bg-slate-100 border-gray-300">
      <div className="h-auto rounded-lg bg-white border-2 ">
        <div className="flex flex-row">
          <div className="p-3 ">
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
          </div>
          <div className="border-2 rounded-full text-sm w-full h-auto m-3 bg-gray-100 text-gray-700 hover:bg-zinc-200 transition-all ease-in-out">
            <input
              className=" w-full p-1 ml-2 outline-none bg-transparent cursor-pointer"
              type="text"
              placeholder="What do you want to ask or share?"
            />
          </div>
        </div>
        <div className="flex flex-row p-1 h-auto mt-0">
          <div className="flex items-center rounded-full text-sm text-gray-500 font-semibold hover:bg-zinc-100 cursor-pointer transition-all ease-in-out justify-center w-full px-2 py-1">
            <img
              style={{ height: "16px", width: "16px", margin: "5px" }}
              src={Question}
              alt=""
            />
            Ask
          </div>
          <div className="border-x-2">
            <div className="flex items-center rounded-full text-sm text-gray-500 font-semibold hover:bg-zinc-100 cursor-pointer transition-all ease-in-out justify-center w-full px-20 py-1">
              <img
                style={{ height: "16px", width: "16px", margin: "5px" }}
                src={Answer}
                alt=""
              />
              Answer
            </div>
          </div>
          <div className="flex items-center rounded-full text-sm text-gray-500 font-semibold hover:bg-zinc-100 cursor-pointer transition-all ease-in-out justify-center w-full px-2 py-1">
            <div className="">
              <img
                style={{ height: "16px", width: "16px", margin: "5px" }}
                src={Post}
                alt=""
              />
            </div>
            <div>Post</div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-auto mx-auto my-4 bg-white rounded-lg shadow-md px-2 ">
          <div className="flex flex-row justify-between">
            <div className="flex items-center p-2">
              <div className="flex">
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
              </div>
              <div className=" flex flex-col ml-3">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">20 September 2024</p>
              </div>
            </div>
            <div className="w-10 h-10 text-center p-2 rounded-full mt-1 hover:bg-gray-100 cursor-pointer transition-all ease-in-out">
              <button className="text-gray-500 text-xl ">
                <FontAwesomeIcon icon={faTimes} />
              </button>{" "}
            </div>
          </div>

          <div className="px-2">
            <h1 className="text-2xl font-bold my-4">
              What are the benefits of learning Full Stack Development?
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify">
              Learning full stack development can be highly rewarding. You’ll
              gain skills in both front-end and back-end development, enabling
              you to build complete web applications from scratch. Additionally,
              it opens up numerous career opportunities as full stack developers
              are in high demand...
            </p>
          </div>
          <div className=" py-4 flex flex-row space-x-4 text-gray-500 justify-between">
            <div className="flex flex-row items-center space-x-4">
              <div className="border border-r-2 rounded-full flex flex-row bg-slate-100 hover:bg-zinc-200">
                <div className="flex flex-row ">
                  <button className="flex items-center space-x-1 pl-1 pr-2">
                    <img
                      style={{ height: "24px", width: "24px" }}
                      src={Like}
                      alt="Upvote"
                    />
                    <span>Upvote</span>
                  </button>
                </div>
                <div className="pl-2 border-l-2 hover:bg-zinc-200">
                  <button>
                    <img
                      style={{ height: "24px", width: "24px" }}
                      src={Down}
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <button className="flex items-center space-x-1 hover:bg-zinc-100 rounded-full">
                <img
                  style={{ height: "15px", width: "15px" }}
                  src={Comment}
                  alt=""
                />
                <span>Comment</span>
              </button>

              <button className="flex items-center space-x-1 hover:bg-zinc-100">
                <img
                  style={{ height: "15px", width: "15px" }}
                  src={Share}
                  alt=""
                />
                <span>Share</span>
              </button>
            </div>
            <div className="w-10 h-10 text-center p-2 rounded-full mt-1 hover:bg-gray-100 cursor-pointer transition-all ease-in-out">
              <i className="">
                <FontAwesomeIcon icon={faEllipsis} />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-auto mx-auto my-4 bg-white rounded-lg shadow-md px-2">
          <div className="flex flex-row justify-between">
            <div className="flex items-center p-2">
              <div className="flex">
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
              </div>
              <div className="ml-3">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">
                  Answered 15 September 2024
                </p>
              </div>
            </div>
            <div className="w-10 h-10 text-center p-2 rounded-full mt-1 hover:bg-gray-100 cursor-pointer transition-all ease-in-out">
              <button className="text-gray-500 text-xl ">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold my-4">
              How can I learn web development effectively?
            </h2>
            <p className="mt-2 text-gray-700">
              Learning web development requires consistent practice. Start with
              HTML and CSS, then gradually move to JavaScript, frameworks, and
              backend technologies.
            </p>
          </div>
          <div>
            <div className="py-2">
              <video className=" w-full object-cover md:h-full" controls>
                <source src={Vedio} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="py-4 flex flex-row space-x-4 text-gray-500 justify-between">
            <div className="flex flex-row items-center space-x-4">
              <div className="border border-r-2 rounded-full flex flex-row bg-slate-100 hover:bg-zinc-200">
                <div className="flex flex-row  ">
                  <button className="flex items-center space-x-1 pl-1 pr-2">
                    <img
                      style={{ height: "24px", width: "24px" }}
                      src={Like}
                      alt="Upvote"
                    />
                    <span>Upvote</span>
                  </button>
                </div>
                <div className="pl-2 border-l-2 hover:bg-zinc-200">
                  <div>
                    <img
                      style={{ height: "24px", width: "24px" }}
                      src={Down}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <button className="flex items-center space-x-1 hover:bg-zinc-100">
                <img
                  style={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: "white",
                  }}
                  src={Comment}
                  alt="Comment"
                />
                <span>Comment</span>
              </button>

              <button className="flex items-center space-x-1 hover:bg-zinc-100">
                <img
                  style={{ height: "15px", width: "15px" }}
                  src={Share}
                  alt="Share"
                />
                <span>Share</span>
              </button>
            </div>
            <div className="w-10 h-10 text-center p-2 rounded-full mt-1 hover:bg-gray-100 cursor-pointer transition-all ease-in-out">
              <i className="">
                <FontAwesomeIcon icon={faEllipsis} />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Middle;
