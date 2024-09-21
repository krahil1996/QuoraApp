import "../App.css"; // Optional: if you have a CSS file for styling
import Profile from "../assets/Navicon/account.png";
import Right from "../assets/Navicon/right.png"
import Public from "../assets/Navicon/group.png"
import Down from "../assets/Navicon/downn.png"
import Globe from "../assets/Navicon/globe.png"
import Rightt from "../assets/Navicon/Rightt.png"
import Image from "../assets/Navicon/Image.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Popup = () => {
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
                <div className="h-auto w-auto bg-white flex flex-row ">
            <div><div className=""><button className="text-gray-500 text-3xl pl-2  "><FontAwesomeIcon icon={faTimes} /></button></div>
                <div className="mt-5 text-lg text-center hover:bg-slate-100 rounded-full"><button>Add Question</button></div>
                <hr className="bg-blue-600 h-1 w-[700px] rounded-t-lg" />
                <div className="rounded-md bg-blue-100 m-5 text-blue-700 text-lg">
                    <h3 className="font-bold">Tips on getting good answers quickly</h3>
                    <ul className="list-disc">
                        <li>Make sure your question has not been asked already</li>
                        <li>Keep your question short and to the point</li>
                        <li>Double-check grammer and spelling</li>
                    </ul>
                </div>
                <div className="flex flex-row gap-3 items-center ">
                    <div><img style={{ height: "20px", width: "20px" }} src={Profile} alt="" /></div>
                    <div><img style={{ height: "15px", width: "15px" }} src={Right} alt="" /></div>
                    <div className="flex flex-row gap-2 border rounded-full p-1 text-gray-700">
                        <div><img style={{ height: "20px", widows: "20px" }} src={Public} alt="" /></div>
                        <div>Public</div>
                        <div><img style={{ height: "20px", width: "20px" }} src={Down} alt="" /></div>
                    </div>
                </div>
                <div className="w-full text-2xl p-2 mt-4"><input className="w-full" type="text" placeholder="Start Your Question With 'What','How','why' etc." /></div>
                <hr />
                <hr className="mt-52" />
                <div className="flex flex-row text-lg gap-4 mt-3 justify-end m-3">
                    <div className="text-gray-700 rounded-full border p-1"><button>Cancle</button></div>
                    <div className="bg-blue-600 text-white rounded-full p-1"><button>Add Question</button></div>
                </div>
            </div>
            <div className="mt-2">
                <div className="flex flex-row text-center items-baseline ">
                    <div className=""><button className="text-gray-500 text-3xl pl-2  "><FontAwesomeIcon icon={faTimes} /></button></div>
                    <div className="flex flex-row gap-2 border rounded-full p-1 text-gray-700 w-auto h-auto hover:bg-zinc-100 ml-72 ">
                        <div><img style={{ height: "20px", widows: "20px" }} src={Globe} alt="" /></div>
                        <div>Everyone</div>
                        <div><img style={{ height: "20px", width: "20px" }} src={Down} alt="" /></div>
                    </div>
                </div>
                <div className="mt-3 text-lg text-center hover:bg-slate-100 rounded-full"><button>Create Post</button></div>
                <hr className="bg-blue-600 h-1 w-[700px] rounded-t-lg" />
                <div className="flex flex-row mt-4">
                    <div className=""><img style={{ height: "40px", width: "40px" }} src={Profile} alt="" /></div>
                    <div className="ml-3">
                        <div className="font-semibold"><h3>Salman Khan</h3></div>
                        <div className="flex flex-row border rounded-full hover:bg-zinc-100 items-center gap-2">
                            <div className="ml-5 text-gray-700"><button>Choose credential</button></div>
                            <div><img style={{ height: "20px", width: "20px" }} src={Rightt} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-4 text-xl"><input type="text-area" name="Text-area" id="" placeholder="Say Somthing..." /></div>
                <hr className="mt-96" />
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-5 items-center bg-white">
                        <div className="text-2xl text-gray-500">Aa</div>
                        <div style={{height:"50px", width:"50px"}}><img src={Image} alt="" /></div>
                    </div>
                    <div className="text-white bg-blue-600 rounded-full "><button className="text-lg font-semibold p-4">Post</button></div>
                </div>
            </div>
        </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

        

    );
};

export default Popup;