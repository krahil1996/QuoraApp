import "../App.css"; // Optional: if you have a CSS file for styling
import Profile from "../assets/Navicon/account.png";
import Answer from "../assets/Navicon/edit.png";
import Question from "../assets/Navicon/ask.png";
import Post from "../assets/Navicon/pencil.png";

const home = () => {
    return (
        <div className="w-[600px] h-screen bg-slate-100 border-gray-300 border-2 rounded-md">
            <div className="h-28 w-[600px] rounded-lg bg-white border-2">
                <div className="flex flex-row" >
                    <div className="p-4 "><img src={Profile} alt="" style={{ height: "30px", width: "30px", }} /></div>
                    <div className="border-2 rounded-full text-lg p-1 h-10 m-3 text-center text-gray-700 font-semibold hover:bg-zinc-100 cursor-pointer transition-all ease-in-out w-[500px]"><input className="w-[490px] bg-slate-100" type="text" placeholder="What do you want to ask or share?" /></div>
                </div>
                <div className="flex flex-row">
                    <div className=" rounded-md h-10 w-32 text-center text-gray-700 font-semibold m-8 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out flex flex-row"><img style={{ height: "24px", width: "24px", margin: "5px" }} src={Question} alt="" />Ask </div>
                    <div>|</div>
                    <div className=" rounded-md h-10 w-32 text-center text-gray-700 font-semibold ml-8 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out flex flex-row"><img style={{ height: "24px", width: "24px", margin: "5px" }} src={Answer} alt="" />Answer </div>
                    <div>|</div>
                    <div className=" rounded-md h-10 w-32 text-center text-gray-700 font-semibold ml-8 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out flex flex-row"><img style={{ height: "24px", width: "24px", margin: "5px" }} src={Post} alt="" />post</div>
                </div>
            </div>

        </div>
    )
}
export default home;