import "../App.css"; // Optional: if you have a CSS file for styling
import Profile from "../assets/Navicon/account.png";
import Answer from "../assets/Navicon/edit.png";
import Question from "../assets/Navicon/ask.png";
import Post from "../assets/Navicon/pencil.png";

const Home = () => {
  return (
    <div className="w-[650px] bg-slate-100 border-gray-300">
      <div className="h-auto rounded-lg bg-white border-2 ">
        <div className="flex flex-row">
          <div className="p-3 ">
            <img
              src={Profile}
              alt=""
              style={{ height: "30px", width: "36px" }}
            />
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

          <div className="flex center rounded-full text-sm text-gray-500 font-semibold hover:bg-zinc-100 cursor-pointer transition-all ease-in-out justify-center w-full px-2 ">
            
              <img
                style={{ height: "16px", width: "16px", margin: "5px" }}
                src={Question}
                alt=""
              />
            
            Ask
          </div>
          <div className="flex rounded-full text-sm text-gray-500 font-semibold hover:bg-zinc-100 cursor-pointer transition-all ease-in-out justify-center w-full px-2">
            
              <img
                style={{ height: "16px", width: "16px", margin: "5px" }}
                src={Answer}
                alt=""
              />
           
           Answer
          </div>
          <div className="flex rounded-full text-sm text-gray-500 font-semibold hover:bg-zinc-100 cursor-pointer transition-all ease-in-out justify-center w-full px-2">
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
    </div>
  );
};
export default Home;
